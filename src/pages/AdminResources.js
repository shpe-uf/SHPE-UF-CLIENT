import React, { useState } from "react";
import { Grid, Button, Form, Modal, Container, Input } from "semantic-ui-react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/client";
import { useForm } from "../util/hooks";

import Title from "../components/Title";
import ResourcesTable from "../components/ResourcesTable";

import { FETCH_RESOURCES_QUERY } from "../util/graphql";
import { FETCH_GBMSLIDES_QUERY } from "../util/graphql";
import { compressPdfToBlob, blobToDataUrl } from "../util/PdfCompress";

function AdminResources() {
  const [errors, setErrors] = useState({});
  const [createResourceModal, setCreateResourceModal] = useState(false);
  const [createGbmSlideModal, setCreateGbmSlideModal] = useState(false);
  const [isCompressing, setIsCompressing] = useState(false);

  const fileToDataUrl = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result); // base64 data URL
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  // helpful error extractor for Apollo
  const extractApolloErrors = (err) => {
    const gqlFirst = err?.graphQLErrors?.[0];
    const gqlExtErrors = gqlFirst?.extensions?.exception?.errors;
    const netExtErrors =
      err?.networkError?.result?.errors?.[0]?.extensions?.exception?.errors;
    const message =
      gqlFirst?.message ||
      err?.networkError?.message ||
      err?.message ||
      "Something went wrong.";
    return gqlExtErrors || netExtErrors || { general: message };
  };

  // Queries
  let resources = [];
  let gbmslides = [];

  const { data } = useQuery(FETCH_RESOURCES_QUERY, {});
  if (data) resources = data.getResources;

  const { data: gbmData } = useQuery(FETCH_GBMSLIDES_QUERY, {});
  if (gbmData) gbmslides = gbmData.getGbmSlides;

  // Merge rows so the table shows both resources and gbm slides
  const rows = React.useMemo(
    () => [
      ...resources,
      ...gbmslides.map((s) => ({
        id: s.id ? `gbm:${s.id}` : `gbm:${s.title}`,
        title: s.title,
        link: s.link,
        description: "GBM Slide",
        image: s.thumbnail,
        createdAt: "", // no createdAt from GBM slide; leave blank
        kind: "gbm",
      })),
    ],
    [resources, gbmslides]
  );

  const openModal = (name) => {
    if (name === "createResource") setCreateResourceModal(true);
    if (name === "createGbmSlide") setCreateGbmSlideModal(true);
  };

  const closeModal = (name) => {
    if (name === "createResource") {
      values.title = "";
      values.description = "";
      values.link = "";
      values.image = "";
      values.podcast = "";
      setErrors({});
      setCreateResourceModal(false);
    }
    if (name === "createGbmSlide") {
      gbmValues.title = "";
      gbmValues.link = "";
      gbmValues.thumbnail = "";
      setErrors({});
      setCreateGbmSlideModal(false);
    }
  };

  // Forms
  const { values, onChange, onSubmit } = useForm(createResourceCallback, {
    title: "",
    description: "",
    link: "",
    image: "https://shpeuf.s3.amazonaws.com/public/resources/resourceImage.png",
    podcast: false,
  });

  const {
    values: gbmValues,
    onChange: onChangeGbm,
    onSubmit: onSubmitGbm,
  } = useForm(createGbmSlideCallback, {
    title: "",
    link: "",
    thumbnail: "",
  });

  // Mutations
  const [createResource, { loading }] = useMutation(CREATE_RESOURCE_MUTATION, {
    update(cache, { data: { createResource } }) {
      cache.writeQuery({
        query: FETCH_RESOURCES_QUERY,
        data: { getResources: createResource },
      });
      values.title = "";
      values.description = "";
      values.link = "";
      values.image = "";
      values.podcast = false;
      setErrors({});
      setCreateResourceModal(false);
    },
    onError(err) {
      setErrors(err?.graphQLErrors?.[0]?.extensions?.exception?.errors || { general: "Error creating resource" });
    },
    variables: {
      title: values.title,
      description: values.description,
      link: values.link,
      image: values.image,
      podcast: values.podcast,
    },
  });

  const [createGbmSlide, { loading: gbmLoading }] = useMutation(
    CREATE_GBM_SLIDE_MUTATION,
    {
      refetchQueries: [{ query: FETCH_GBMSLIDES_QUERY }],
      awaitRefetchQueries: true,
      onCompleted() {
        gbmValues.title = "";
        gbmValues.link = "";
        gbmValues.thumbnail = "";
        setErrors({});
        setCreateGbmSlideModal(false);
      },
      onError(err) {
        console.error("GBM mutation error:", err);
        setErrors(extractApolloErrors(err));
      },
      // NOTE: variables are passed at call-time to avoid stale state
    }
  );

  function createResourceCallback() {
    createResource();
  }

  function createGbmSlideCallback() {
    if (isCompressing) {
      setErrors({ link: "Please wait for compression to finish." });
      return;
    }
    if (!gbmValues.link) {
      setErrors({ link: "PDF missing. Please attach a file." });
      return;
    }

    // quick debug: ensure we actually have data URLs
    console.log({
      title: gbmValues.title,
      linkLength: gbmValues.link?.length ?? 0,
      thumbLength: gbmValues.thumbnail?.length ?? 0,
    });

    createGbmSlide({
      variables: {
        title: gbmValues.title?.trim() || "",
        link: gbmValues.link, // data:application/pdf;base64,...
        thumbnail: gbmValues.thumbnail, // data:image/...;base64,...
      },
    });
  }

  return (
    <>
      <Title title="Resources" adminPath={window.location.pathname} />
      <Container className="body">
        <Grid>
          <Grid.Row columns="2">
            <Grid.Column>{/* spacer */}</Grid.Column>
            <Grid.Column>
              <Button
                content="Create Resource"
                icon="pencil"
                labelPosition="left"
                onClick={() => openModal("createResource")}
                floated="right"
              />
              <Button
                content="Create GBM Slide"
                icon="file"
                labelPosition="left"
                onClick={() => openModal("createGbmSlide")}
                floated="right"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <ResourcesTable resources={rows} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      {/* Create Resource Modal */}
      <Modal
        open={createResourceModal}
        size="tiny"
        closeOnEscape
        closeOnDimmerClick={false}
      >
        <Modal.Header>
          <h2>Create Resource</h2>
        </Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                {Object.keys(errors).length > 0 && (
                  <div className="ui error message">
                    <ul className="list">
                      {Object.values(errors).map((value) => (
                        <li key={value}>{value}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <Form onSubmit={onSubmit} noValidate className={loading ? "loading" : ""}>
                  <Form.Input
                    type="text"
                    label="Title"
                    name="title"
                    value={values.title}
                    error={!!errors.title}
                    onChange={onChange}
                  />
                  <Form.TextArea
                    type="text"
                    label="Description"
                    name="description"
                    value={values.description}
                    error={!!errors.description}
                    onChange={onChange}
                  />
                  <Form.Input
                    type="text"
                    label="Link"
                    name="link"
                    value={values.link}
                    error={!!errors.link}
                    onChange={onChange}
                  />
                  <Button type="reset" color="grey" onClick={() => closeModal("createResource")}>
                    Cancel
                  </Button>
                  <Button type="submit" floated="right">
                    Create
                  </Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>

      {/* Create GBM Slide Modal */}
      <Modal
        open={createGbmSlideModal}
        size="tiny"
        closeOnEscape
        closeOnDimmerClick={false}
      >
        <Modal.Header>
          <h2>Create GBM Slide</h2>
        </Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                {Object.keys(errors || {}).length > 0 && (
                  <div className="ui error message">
                    <ul className="list">
                      {Object.values(errors).map((value) => (
                        <li key={value}>{value}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <Form onSubmit={onSubmitGbm} noValidate className={gbmLoading ? "loading" : ""}>
                  <Form.Input
                    type="text"
                    label="Title"
                    name="title"
                    value={gbmValues.title}
                    error={!!errors?.title}
                    onChange={onChangeGbm}
                  />

                  <Form.Field>
                    <label>PDF</label>
                    <input
                      type="file"
                      accept="application/pdf"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        try {
                          setIsCompressing(true);
                          console.log("Picked PDF:", file.name, file.size, file.type);

                          const compressedBlob = await compressPdfToBlob(file, {
                            jpegQuality: 0.55,
                            maxDim: 1400,
                          });

                          const approxBase64Bytes = Math.ceil((compressedBlob.size * 4) / 3);
                          const maxBytes = 8 * 1024 * 1024; 
                          if (approxBase64Bytes > maxBytes) {
                            setErrors({
                              link: "PDF still too large after compression (~>8MB). Try a smaller file.",
                            });
                            return;
                          }

                          const dataUrl = await blobToDataUrl(compressedBlob);
                          onChangeGbm({ target: { name: "link", value: dataUrl } });
                          setErrors({});
                        } catch (err) {
                          console.error("Compression failed:", err);
                          onChangeGbm({ target: { name: "link", value: "" } });
                          setErrors({ link: "Failed to compress PDF." });
                        } finally {
                          setIsCompressing(false);
                        }
                      }}
                    />
                    {errors?.link && (
                      <div className="ui pointing red basic label">{errors.link}</div>
                    )}
                    {gbmValues.link && (
                      <div style={{ marginTop: 8 }}>
                        <i className="file pdf outline icon" /> PDF attached
                        <Button
                          size="mini"
                          basic
                          style={{ marginLeft: 8 }}
                          onClick={() => onChangeGbm({ target: { name: "link", value: "" } })}
                        >
                          Remove
                        </Button>
                      </div>
                    )}
                    {isCompressing && <div style={{ marginTop: 8 }}>Compressing…</div>}
                  </Form.Field>

                  <Form.Field>
                    <label>Thumbnail</label>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        const dataUrl = await fileToDataUrl(file);
                        onChangeGbm({ target: { name: "thumbnail", value: dataUrl } });
                      }}
                    />
                    {errors?.thumbnail && (
                      <div className="ui pointing red basic label">{errors.thumbnail}</div>
                    )}
                    {gbmValues.thumbnail && (
                      <div style={{ marginTop: 8 }}>Thumbnail attached</div>
                    )}
                  </Form.Field>

                  <Button type="reset" color="grey" onClick={() => closeModal("createGbmSlide")}>
                    Cancel
                  </Button>
                  <Button type="submit" floated="right" disabled={isCompressing}>
                    Create
                  </Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>
    </>
  );
}

const CREATE_RESOURCE_MUTATION = gql`
  mutation createResource(
    $title: String!
    $link: String!
    $description: String!
    $image: String!
    $podcast: Boolean!
  ) {
    createResource(
      createResourceInput: {
        title: $title
        link: $link
        description: $description
        image: $image
        podcast: $podcast
      }
    ) {
      title
      link
      description
      image
      podcast
      createdAt
    }
  }
`;

const CREATE_GBM_SLIDE_MUTATION = gql`
  mutation createGbmSlide($title: String!, $link: String!, $thumbnail: String!) {
    createGbmSlide(
      createGbmSlideInput: { title: $title, link: $link, thumbnail: $thumbnail }
    ) {
      title
      link
      thumbnail
    }
  }
`;

export default AdminResources;
