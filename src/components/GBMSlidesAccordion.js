import React from "react";
import { Accordion, Icon, Grid, Image, Divider } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { FETCH_GBMSLIDES_QUERY } from "../util/graphql";

const SEM_ORDER = { Spring: 1, Summer: 2, Fall: 3, Winter: 4 };

function parseTitle(title) {
  // regex for title parsing
  const m = title?.match(/^(Spring|Summer|Fall)(\d{4})_GBM(\d+)$/i);
  if (!m) return null;
  const semesterRaw = m[1];
  const semester =
    semesterRaw.charAt(0).toUpperCase() + semesterRaw.slice(1).toLowerCase();
  const year = Number(m[2]);
  const gbmNumber = Number(m[3]);
  const label = `${semester} ${year}`;
  return { semester, year, gbmNumber, label };
}

function groupSlides(slides) {
  const map = new Map();

  slides.forEach((s) => {
    const meta = parseTitle(s.title);
    if (!meta) return; 
    const arr = map.get(meta.label) || [];
    arr.push({ ...s, ...meta });
    map.set(meta.label, arr);
  });


  for (const [, arr] of map) {
    arr.sort((a, b) => a.gbmNumber - b.gbmNumber);
  }

  const sortedLabels = Array.from(map.keys()).sort((a, b) => {
    const [sa, ya] = a.split(" ");
    const [sb, yb] = b.split(" ");
    const yaN = Number(ya);
    const ybN = Number(yb);
    if (yaN !== ybN) return ybN - yaN; 
    return (SEM_ORDER[sb] || 0) - (SEM_ORDER[sa] || 0); //semester order
  });

  return sortedLabels.map((label) => ({ label, items: map.get(label) }));
}

export default function GBMSlidesAccordion() {
  const { data, loading, error } = useQuery(FETCH_GBMSLIDES_QUERY);
  const semesters = React.useMemo(() => {
    const slides = data?.getGbmSlides ?? [];
    return groupSlides(slides);
  }, [data]);

  const [activeIndex, setActiveIndex] = React.useState(-1);

  if (loading) return null; // should probably add a loader here
  if (error) return <p>Failed to load slides.</p>;
  if (!semesters.length) return <p>It looks like there are no GMB slides at the moment.</p>;

  return (
    <Accordion styled fluid>
      {semesters.map((sem, idx) => (
        <React.Fragment key={sem.label}>
          <Accordion.Title
            active={activeIndex === idx}
            index={idx}
            onClick={(_, props) =>
              setActiveIndex(activeIndex === props.index ? -1 : props.index)
            }
          >
            <Icon name="dropdown" />
            {sem.label}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === idx}>
            <Grid>
              <Grid.Row columns={3}>
                {sem.items.map((s) => (
                  <Grid.Column key={s.id || s.title}>
                    <b>GBM {s.gbmNumber}</b>
                    <Divider horizontal />
                    <Image
                      src={s.thumbnail}   
                      size="medium"
                      href={s.link}      
                      target="_blank"
                    />
                  </Grid.Column>
                ))}
              </Grid.Row>
            </Grid>
          </Accordion.Content>
        </React.Fragment>
      ))}
    </Accordion>
  );
}
