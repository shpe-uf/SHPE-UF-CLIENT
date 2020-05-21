import React, { useState } from "react";
import { Grid, Divider } from "semantic-ui-react";
import ReactMapboxGl, { Layer, Feature, Popup } from "react-mapbox-gl";

function AlumniMap({ alumnis }) {
  const [alumniOpen, setAlumniOpen] = useState({});
  const [center, setCenter] = useState([-96, 38]);
  const [zoom, setZoom] = useState([3.5]);

  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiY2Vjcmlnb3BlIiwiYSI6ImNrMzRxMDAwdTB6cHUzY3Myd3ZjeWhhdzkifQ.uND4rBRWT0KBJoDFt_xhMQ"
  });

  function handleAlumniPopup(alumni) {
    if (alumni.email === alumniOpen.email) {
      setAlumniOpen({});
      setCenter([-96, 38]);
      setZoom([3.5]);
    } else {
      setAlumniOpen(alumni);
      setCenter([alumni.coordinates.longitude, alumni.coordinates.latitude]);
      setZoom([12]);
    }
  }

  return (
    <Map
      style="mapbox://styles/cecrigope/ck36yhbkr6ytf1cmmvrvzpffo"
      containerStyle={{
        height: "600px",
        width: "100%"
      }}
      center={center}
      zoom={zoom}
    >
      {alumnis &&
        alumnis.map((alumni, index) => (
          <div key={index}>
            <Layer
              type="symbol"
              layout={{ "icon-image": "star-15", "icon-size": 1 }}
            >
              <Feature
                coordinates={[
                  alumni.coordinates.longitude,
                  alumni.coordinates.latitude
                ]}
                onClick={() => handleAlumniPopup(alumni)}
              />
            </Layer>
            {alumniOpen.email === alumni.email && (
              <Popup
                anchor="bottom-left"
                coordinates={[
                  alumni.coordinates.longitude,
                  alumni.coordinates.latitude
                ]}
              >
                <b className="no-margin" className="accent-1-text">
                  {alumni.lastName.toUpperCase()},{" "}
                  {alumni.firstName.toUpperCase()}
                </b>
                <Divider style={{ marginTop: 4, marginBottom: 4 }} />
                {alumni.employer !== "" && (
                  <p className="no-margin">
                    <b>Employer:</b> {alumni.employer}
                  </p>
                )}
                {alumni.position !== "" && (
                  <p className="no-margin">
                    <b>Position:</b> {alumni.position}
                  </p>
                )}
                <p className="no-margin">
                  <b>Undergrad. University:</b> {alumni.undergrad.university}
                </p>
                <p className="no-margin">
                  <b>Undergrad. Major:</b> {alumni.undergrad.major} (Class of{" "}
                  {alumni.undergrad.year})
                </p>
                {alumni.grad.university !== "" && (
                  <>
                    <p className="no-margin">
                      <b>Grad. University:</b> {alumni.grad.university}
                    </p>
                    <p className="no-margin">
                      <b>Grad. Major:</b> {alumni.grad.major} (Class of{" "}
                      {alumni.grad.year})
                    </p>
                  </>
                )}
              </Popup>
            )}
          </div>
        ))}
    </Map>
  );
}

export default AlumniMap;
