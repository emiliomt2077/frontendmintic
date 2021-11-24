import React from "react";

function LoginMessage({ sendData }) {
  console.log(sendData);
  if (sendData != undefined || null) {
    if (sendData.data.id != null) {
      return (
        <div className="creado-exitoso">
          <p>Bienvenido {sendData.data.name}</p>
        </div>
      );
    } else if (sendData.data.id == null) {
      return (
        <div className="creado-fallido">
          <p>No existe un usuario</p>
        </div>
      );
    }
  }
  return null;
}

export default LoginMessage;
