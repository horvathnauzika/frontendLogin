import React from 'react'
import { useState, useContext } from "react";
import { AuthContext } from '../contexts/AuthContext';

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const {regisztacio}=useContext(AuthContext);

  function handleSubmit(e){
    e.preventDefault();
    let adat={
      name: name,
      email: email,
      password:password,
      password_confirmation: password_confirmation
    }
    console.log(adat)
    regisztacio(adat)

  }

  return (
    <div className=" m-auto" style={{ maxWidth: "400px" }}>
      <h1>Regisztráció</h1>
      {/**név, email, password, */}
      <form onSubmit={handleSubmit}>

        <div class="mb-3">
          <label htmlFor="name" 
          className="form-label">Név: </label>
          <input type="text" 
          className="form-control" 
          id="name" 
          placeholder="Név" 
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}></input>
        </div>

        <div class="mb-3">
          <label htmlFor="email" 
          className="form-label">Email: </label>

          <input type="email" 
          className="form-control" 
          id="email" 
          placeholder="email cím" 
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}></input>
        </div>

        <div class="mb-3">
          <label htmlFor="password" 
          className="form-label">Jelszó: </label>

          <input type="password" 
          className="form-control" 
          id="pwd"
          name="pwd"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}></input>
        </div>

        <div class="mb-3">
          <label htmlFor="password-confirmation" 
          className="form-label">Jelszó megerősítése: </label>

          <input type="password" 
          className="form-control" 
          id="pwd2" 
          name="pwd2"
          value={password_confirmation}
          onChange={(e) => {
            setPasswordConfirmation(e.target.value);
          }}></input>

        </div>

        <button type="submit" className="btn btn-primary w-100">
          Regisztrálok
        </button>
      </form>
    </div>
  )
}
