import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react';

import upload from '../utils/upload';
import newRequest from '../utils/newRequest';
import { useHistory } from 'react-router-dom';
import './Register.scss';

const Register: React.FC = () => {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    img: '',
    country: '',
    isSeller: false,
    desc: '',
  });

  const navigate = useHistory();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      await newRequest.post('/auth/register', {
        ...user,
        img: url,
      });
      navigate.push('/signin');
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e: any) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSeller = (e: any) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };
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
              <input
                name="password"
                type="password"
                onChange={handleChange}
              />
              <label htmlFor="">Profile Picture</label>
              <input type="file" onChange={(e:any) => setFile(e.target.files[0])} />
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
            <IonButton href="/signin">
              Already have an account?
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
