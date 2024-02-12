import React, { useRef, useState } from "react";
import { Divider, Icon } from "semantic-ui-react";
import Map, { MapRef, Marker, Popup } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

function AlumniMap({ alumnis }) {
  const [alumniOpen, setAlumniOpen] = useState({});
  const [center, setCenter] = useState([-96, 38]);
  const [zoom, setZoom] = useState([3.5]);

  const mapRef = useRef();

  function handleAlumniPopup(alumni) {
    if (alumni.email === alumniOpen.email) {
      setAlumniOpen({});
    } else {
      setAlumniOpen(alumni);
      mapRef.current?.flyTo({center: [alumni.coordinates.longitude, alumni.coordinates.latitude], duration: 1250});
    }
  }

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken="pk.eyJ1IjoiY2Vjcmlnb3BlIiwiYSI6ImNrMzRxMDAwdTB6cHUzY3Myd3ZjeWhhdzkifQ.uND4rBRWT0KBJoDFt_xhMQ"
      mapStyle="mapbox://styles/cecrigope/ck36yhbkr6ytf1cmmvrvzpffo"
      style={{
        height: "600px",
        width: "100%",
      }}
      initialViewState={{
        longitude: center[0],
        latitude: center[1],
        zoom: zoom
      }}
      attributionControl={false}
    >
      {alumnis &&
        alumnis.map((alumni, index) => (
          <div key={index}>
            <Marker
              longitude={Number(alumni.coordinates.longitude)}
              latitude={Number(alumni.coordinates.latitude)}
              anchor='bottom'
              onClick={(e) =>  {e.originalEvent.stopPropagation();
                handleAlumniPopup(alumni)
              }}
            >
            </Marker>
            {alumniOpen.email === alumni.email && (
              <Popup
                anchor="top"
                longitude={Number(alumni.coordinates.longitude)}
                latitude={Number(alumni.coordinates.latitude)}
              >
                <b className="no-margin">
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
