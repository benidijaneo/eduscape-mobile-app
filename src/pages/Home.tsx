import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";

import "./Home.scss";
<<<<<<< HEAD
import getCurrentUser from "../utils/getCurrentUser";
import { home } from "ionicons/icons";
=======
>>>>>>> 6197615fb0afd8252780ade734b5e5a9cd469a69

const Home: React.FC = () => {
  const currentUser = getCurrentUser()
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="nav-bar">
<<<<<<< HEAD
            <IonTitle>EduScape</IonTitle>
            <img
              className="profile"
              alt="guy in red"
              src={currentUser.img}
            />
=======
            <IonTitle style={{ color: "#c63625" }}>EduScape</IonTitle>
>>>>>>> 6197615fb0afd8252780ade734b5e5a9cd469a69
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} className="ion-padding">
        <div className="home">
          <div className="features">
            <div className="container">
              <div className="item">
                <div className="left">
                  <h1>Traverse Knowledge.</h1>
                  <p>
                    Embark on a Learning Odyssey with <i>EduScape</i>.
                  </p>
                </div>
              </div>
              <div className="item">
                <h1>Why choose us?</h1>
                <div className="title">
                  <img src="./check.png" />
                  Skill-Based Tutoring
                </div>
                <p>
                  EduScape welcomes individuals with exceptional skills to
                  become tutors, regardless of formal credentials.
                </p>
                <div className="title">
                  <img src="./check.png" />
                  Inclusive Opportunities
                </div>
                <p>
                  Unlock tutoring opportunities for those with zero credentials,
                  empowering skilled individuals to share their knowledge.
                </p>
                <div className="title">
                  <img src="./check.png" />
                  Money-Back Guarantee
                </div>
                <p>
                  Clients enjoy a risk-free experience with our money-back
                  guarantee, ensuring satisfaction and quality in every tutoring
                  session.
                </p>
                <div className="title">
                  <img src="./check.png" />
                  Affordable Learning
                </div>
                <p>
                  Benefit from budget-friendly tutoring without compromising on
                  quality, making education accessible to everyone.
                </p>
                <div className="item">
                  <div className="triple-e">
                    <h1>EDUSCAPE.</h1>
                    <h1>ELEVATE.</h1>
                    <h1>EDUCATION.</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
