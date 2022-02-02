import React from "react";

// Creo el Componente Usuario con sus props
const User = ({
  id,
  name,
  username,
  email,
  address,
  phone,
}) => {
  return (
    <div key={id}>
        <h2>Nombre: {name}</h2>
        <h3>Usuario: {username}</h3>
        <p>Email: {email}</p>
        <p>Dirección: {address.city}</p>
        <p>Telefono: {phone}</p>
    </div>
  )
}

export default User