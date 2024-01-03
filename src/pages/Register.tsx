import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react";

import "./Register.scss";

const Register: React.FC = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = () => {};
  const handleChange = () => {};
  const handleSeller = () => {};
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{ color: "#c63625" }}>EduScape</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} className="ion-padding">
        <div className="register">
          <form onSubmit={handleSubmit}>
            <div className="left">
              <h1>Create a new account</h1>
              <label htmlFor="">Username</label>
              <input
                name="username"
                type="text"
                placeholder="johndoe"
                onChange={handleChange}
              />
              <label htmlFor="">Password</label>
              <input name="password" type="password" onChange={handleChange} />
              <label htmlFor="">Profile Picture</label>
              <input type="file" onChange={(e) => {}} />
              <label htmlFor="">Province</label>
              <input
                name="province"
                type="text"
                placeholder="Zambales"
                onChange={handleChange}
              />
              <button type="submit">Register</button>
            </div>
            <div className="right">
              <h1>I want to become a tutor</h1>
              <div className="toggle">
                <label htmlFor="">Activate the tutor account</label>
                <label className="switch">
                  <input type="checkbox" onChange={handleSeller} />
                  <span className="slider round"></span>
                </label>
              </div>
              <label htmlFor="">Phone Number</label>
              <input
                name="phone"
                type="text"
                placeholder="09606473921"
                onChange={handleChange}
              />
              <label htmlFor="">Description</label>
              <textarea
                placeholder="A short description of yourself"
                name="desc"
                id=""
                cols={30}
                rows={10}
                onChange={handleChange}
              ></textarea>
            </div>
            <IonButton href="/signin">Already have an account?</IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
