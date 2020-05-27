import { Spinner } from "react-bootstrap";
import React from "react";

export let Loading = (props) => (
  <div className="profile-page-background" style={props.style}>
    <div style={{width:"0%",top:"50%",transform:"translateY(-50%)",margin:"0 auto",position:"relative"}} >
      <Spinner animation="border" role="status">
        <span className="sr-only">Загрузка...</span>
      </Spinner>
    </div>
  </div>
);
