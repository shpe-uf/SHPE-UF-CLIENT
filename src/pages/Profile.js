import React, { useContext, useState } from "react";
import gql from "graphql-tag";
import {
  Container,
  Grid,
  Segment,
  Loader,
  Button,
  Modal,
  Form,
  Image,
  Label,
} from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import { useQuery, useMutation } from "@apollo/client";
import { useForm } from "../util/hooks";
import { AuthContext } from "../context/auth";

import Title from "../components/Title";
import UserProfile from "../components/UserProfile";

import majorOptions from "../assets/options/major.json";
import yearOptions from "../assets/options/year.json";
import graduatingOptions from "../assets/options/graduating.json";
import countryOptions from "../assets/options/country.json";
import ethnicityOptions from "../assets/options/ethnicity.json";
import sexOptions from "../assets/options/sex.json";

import placeholder from "../assets/images/placeholder.png";
import ImageCrop from "../components/ImageCrop";

function Profile() {
  const [photoFile, setPhotoFile] = useState("");
  const [errors, setErrors] = useState({});
  const [editProfileModal, setEditProfileModal] = useState(false);
  const [miscInfo, setMiscInfo] = useState({
    classes: [],
    internships: [],
    socialMedia: [],
  });
  const [newClass, setClass] = useState("");
  const [newInternship, setInternship] = useState("");
  const [newSocialMedia, setSocialMedia] = useState("");

  let {
    user: { id, email },
  } = useContext(AuthContext);

  let userQuery = useQuery(FETCH_USER_QUERY, {
    variables: {
      userId: id,
    },
  });
  let data = userQuery.data;
  let loadingUser = userQuery.loading;
  let user = null;

  if (data && data.getUser) {
    user = data.getUser;
  }

  function openModal() {
    values.firstName = user.firstName;
    values.lastName = user.lastName;
    values.photo = user.photo;
    values.major = user.major;
    values.year = user.year;
    values.graduating = user.graduating;
    values.country = user.country;
    values.ethnicity = user.ethnicity;
    values.sex = user.sex;
    values.classes = user.classes;
    values.internships = user.internships;
    values.socialMedia = user.socialMedia;
    setMiscInfo({
      classes: user.classes.slice(),
      internships: user.internships.slice(),
      socialMedia: user.socialMedia.slice(),
    });
    setEditProfileModal(true);
    setPhotoFile(user.photo);
  }

  const closeModal = (name) => {
    if (name === "editProfile") {
      setErrors(false);
      setEditProfileModal(false);
    }
  };

  const { values, onChange, onSubmit } = useForm(editProfileCallback, {
    email: email,
    firstName: "",
    lastName: "",
    photo: "",
    major: "",
    year: "",
    graduating: "",
    country: "",
    ethnicity: "",
    sex: "",
    classes: [],
    internships: [],
    socialMedia: [],
  });

  const [editProfile, { loading }] = useMutation(EDIT_USER_PROFILE, {
    update(cache, { data: { editUserProfile: userData } }) {
      cache.modify({
        id: cache.identify(userData), // Identify the user object in the cache
        fields: {
          firstName: () => userData.firstName,
          lastName: () => userData.lastName,
          photo: () => userData.photo,
          major: () => userData.major,
          year: () => userData.year,
          graduating: () => userData.graduating,
          country: () => userData.country,
          ethnicity: () => userData.ethnicity,
          sex: () => userData.sex,
          classes: () => userData.classes,
          internships: () => userData.internships,
          socialMedia: () => userData.socialMedia,
        },
      });

      toast.success("Your profile has been updated.", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      setErrors(false);
      setEditProfileModal(false);
    },

    onError(err) {
      toast.error(`ERROR: Review your input and try again.`, {
        position: toast.POSITION.BOTTOM_CENTER,
      });

      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },

    variables: values,
  });

  function editProfileCallback() {
    values.classes = miscInfo.classes;
    values.internships = miscInfo.internships;
    values.socialMedia = miscInfo.socialMedia;
    editProfile();
  }

  function addToArray(e, arrayType) {
    e.preventDefault();
    switch (arrayType) {
      case "class":
        setMiscInfo({
          ...miscInfo,
          classes: miscInfo.classes.concat([
            newClass.replace(/\s+/g, "").toUpperCase(),
          ]),
        });
        break;
      case "internship":
        setMiscInfo({
          ...miscInfo,
          internships: miscInfo.internships.concat([newInternship]),
        });
        break;
      case "socialMedia":
        setMiscInfo({
          ...miscInfo,
          socialMedia: miscInfo.socialMedia.concat([newSocialMedia]),
        });
        break;
      default:
        break;
    }
  }

  return (
    <div className="body">
      <Title title="My Profile" />
      <Container>
        <Grid>
          <div>
            <ToastContainer />
          </div>
          <Grid.Row>
            <Grid.Column>
              <Button
                content="Edit Profile"
                icon="text cursor"
                labelPosition="left"
                floated="right"
                onClick={() => openModal()}
                disabled={!user}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Segment>
          {loadingUser | !data ? (
            <div style={{ marginTop: "300px" }}>
              <Loader active>Loading user info, please wait...</Loader>
            </div>
          ) : (
            <UserProfile user={user} isPublic={false} />
          )}
        </Segment>
      </Container>

      <Modal open={editProfileModal} size="tiny">
        <Modal.Header>
          <h2>Edit Profile</h2>
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
                <Form
                  onSubmit={onSubmit}
                  noValidate
                  className={loading ? "loading" : ""}
                >
                  {photoFile === "" ? (
                    <Image
                      fluid
                      rounded
                      src={placeholder}
                      className="image-profile"
                      style={{ marginBottom: 16 }}
                    />
                  ) : (
                    <Image
                      fluid
                      rounded
                      src={photoFile}
                      className="image-profile"
                      style={{ marginBottom: 16 }}
                    />
                  )}
                  <ImageCrop
                    setPhotoFile={setPhotoFile}
                    values={values}
                    onChange={onChange}
                    errors={errors}
                    type="profile"
                  />
                  <Form.Input
                    type="text"
                    label="First Name"
                    name="firstName"
                    value={values.firstName}
                    error={errors.firstName ? true : false}
                    onChange={onChange}
                  />
                  <Form.Input
                    type="text"
                    label="Last Name"
                    name="lastName"
                    value={values.lastName}
                    error={errors.lastName ? true : false}
                    onChange={onChange}
                  />
                  <Form.Field
                    label="Major"
                    control="select"
                    name="major"
                    value={values.major}
                    error={errors.major ? true : false}
                    onChange={onChange}
                  >
                    {majorOptions.map((major) => (
                      <option value={major.value} key={major.key}>
                        {major.value}
                      </option>
                    ))}
                  </Form.Field>
                  <Form.Field
                    label="Year"
                    control="select"
                    name="year"
                    value={values.year}
                    error={errors.year ? true : false}
                    onChange={onChange}
                  >
                    {yearOptions.map((year) => (
                      <option value={year.value} key={year.key}>
                        {year.value}
                      </option>
                    ))}
                  </Form.Field>
                  <Form.Field
                    label="Graduating this year?"
                    control="select"
                    name="graduating"
                    value={values.graduating}
                    error={errors.graduating ? true : false}
                    onChange={onChange}
                  >
                    {graduatingOptions.map((graduating) => (
                      <option value={graduating.value} key={graduating.key}>
                        {graduating.value}
                      </option>
                    ))}
                  </Form.Field>
                  <Form.Field
                    label="Country of Origin"
                    control="select"
                    name="country"
                    value={values.country}
                    error={errors.country ? true : false}
                    onChange={onChange}
                  >
                    {countryOptions.map((country) => (
                      <option value={country.value} key={country.key}>
                        {country.value}
                      </option>
                    ))}
                  </Form.Field>
                  <Form.Field
                    label="Ethnicity"
                    control="select"
                    name="ethnicity"
                    value={values.ethnicity}
                    error={errors.ethnicity ? true : false}
                    onChange={onChange}
                  >
                    {ethnicityOptions.map((ethnicity) => (
                      <option value={ethnicity.value} key={ethnicity.key}>
                        {ethnicity.value}
                      </option>
                    ))}
                  </Form.Field>
                  <Form.Field
                    label="Gender"
                    control="select"
                    name="sex"
                    value={values.sex}
                    error={errors.sex ? true : false}
                    onChange={onChange}
                  >
                    {sexOptions.map((sex) => (
                      <option value={sex.value} key={sex.key}>
                        {sex.value}
                      </option>
                    ))}
                  </Form.Field>
                  <Form.Input
                    label="Classes"
                    placeholder={"Add your classes here"}
                    onKeyPress={(e) =>
                      e.key === "Enter" && addToArray(e, "class")
                    }
                    onChange={(e) => setClass(e.target.value)}
                    action={{
                      onClick: (e) => {
                        addToArray(e, "class");
                      },
                      icon: "plus",
                    }}
                  />
                  {miscInfo.classes.map((info) => (
                    <Label
                      size="tiny"
                      circular
                      content={info}
                      key={info}
                      style={{ marginBottom: "4px" }}
                      onRemove={() => {
                        let newClasses = miscInfo.classes;
                        newClasses.splice(miscInfo.classes.indexOf(info), 1);
                        setMiscInfo({
                          ...miscInfo,
                          classes: newClasses,
                        });
                      }}
                    />
                  ))}
                  <Form.Input
                    label="Internships"
                    placeholder={"Add your internships here"}
                    onKeyPress={(e) =>
                      e.key === "Enter" && addToArray(e, "internship")
                    }
                    onChange={(e) => setInternship(e.target.value)}
                    action={{
                      onClick: (e) => {
                        addToArray(e, "internship");
                      },
                      icon: "plus",
                    }}
                  />
                  {miscInfo.internships.map((info) => (
                    <Label
                      size="tiny"
                      circular
                      content={info}
                      key={info}
                      style={{ marginBottom: "4px" }}
                      onRemove={() => {
                        let newInternships = miscInfo.internships;
                        newInternships.splice(
                          miscInfo.internships.indexOf(info),
                          1
                        );
                        setMiscInfo({
                          ...miscInfo,
                          internships: newInternships,
                        });
                      }}
                    />
                  ))}
                  <Form.Input
                    label="Social Media / Links"
                    placeholder={"Add your personal links here"}
                    onKeyPress={(e) =>
                      e.key === "Enter" && addToArray(e, "socialMedia")
                    }
                    onChange={(e) => setSocialMedia(e.target.value)}
                    action={{
                      onClick: (e) => {
                        addToArray(e, "socialMedia");
                      },
                      icon: "plus",
                    }}
                  />
                  {miscInfo.socialMedia.map((info) => (
                    <Label
                      size="tiny"
                      circular
                      content={info}
                      key={info}
                      style={{ marginBottom: "4px" }}
                      onRemove={() => {
                        let newSocialMedia = miscInfo.socialMedia;
                        newSocialMedia.splice(
                          miscInfo.socialMedia.indexOf(info),
                          1
                        );
                        setMiscInfo({
                          ...miscInfo,
                          socialMedia: newSocialMedia,
                        });
                      }}
                    />
                  ))}
                  <br />
                  <Button
                    type="reset"
                    color="red"
                    onClick={() => closeModal("editProfile")}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" floated="right">
                    Submit
                  </Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>
    </div>
  );
}

const FETCH_USER_QUERY = gql`
  query getUser($userId: ID!) {
    getUser(userId: $userId) {
      firstName
      lastName
      photo
      username
      email
      major
      year
      graduating
      country
      ethnicity
      sex
      createdAt
      permission
      classes
      internships
      socialMedia
    }
  }
`;

const EDIT_USER_PROFILE = gql`
  mutation editUserProfile(
    $email: String!
    $firstName: String!
    $lastName: String!
    $photo: String!
    $major: String!
    $year: String!
    $graduating: String!
    $country: String!
    $ethnicity: String!
    $sex: String!
    $classes: [String]
    $internships: [String]
    $socialMedia: [String]
  ) {
    editUserProfile(
      editUserProfileInput: {
        email: $email
        firstName: $firstName
        lastName: $lastName
        photo: $photo
        major: $major
        year: $year
        graduating: $graduating
        country: $country
        ethnicity: $ethnicity
        sex: $sex
        classes: $classes
        internships: $internships
        socialMedia: $socialMedia
      }
    ) {
      firstName
      lastName
      photo
      username
      email
      major
      year
      graduating
      country
      ethnicity
      sex
      createdAt
      permission
      classes
      internships
      socialMedia
    }
  }
`;

export default Profile;