import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import newRequest from '../utils/newRequest';
import { useHistory } from 'react-router-dom';

import './SignIn.scss';

const SignIn: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useHistory();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await newRequest.post('/auth/login', {
        username,
        password,
      });
      localStorage.setItem('currentUser', JSON.stringify(res.data));
      navigate.push('/home');
    } catch (err: any) {
      setError(err.response.data);
    }
  };
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
