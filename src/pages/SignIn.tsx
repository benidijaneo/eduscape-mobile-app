import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./SignIn.scss";

const SignIn: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = () => {};
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>EduScape</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} className="ion-padding">
        <div className="login">
          <form onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <label htmlFor="">Username</label>
            <input
              name="username"
              type="text"
              placeholder="johndoe"
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="">Password</label>
            <input
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            {error && error}
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
