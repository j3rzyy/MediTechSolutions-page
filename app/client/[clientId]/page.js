import React from "react";

const ClientId = ({ params }) => {
  return (
    <div>
      <h1>ClientId</h1>
      <p>{params.clientId}</p>
    </div>
  );
};

export default ClientId;
