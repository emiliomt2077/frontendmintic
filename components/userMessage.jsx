import React from "react";

function UserMessage({ sendData }) {
  if (sendData != undefined || null) {
    if (sendData.data == null) {
      return (
        <div className="creado-exitoso">
          <p>Cuenta creada de forma correcta</p>
        </div>
      );
    } else if (sendData.data.id == null) {
      return (
        <div className="creado-fallido">
          <p>No fue posible crear la cuenta</p>
        </div>
      );
    }
  }

  return null;
}

export default UserMessage;
