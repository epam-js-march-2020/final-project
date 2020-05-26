import React from "react";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import { withAuth } from "../Auth/AuthProvider";


export default withAuth(({isAuthorized, authorize}) => 
isAuthorized ? (
 <Redirect to="/home" />
) : (
<div className="text-center m-4">
<Button variant="warning" size="lg" onClick={authorize}> Log In </Button>
</div>
)
);
