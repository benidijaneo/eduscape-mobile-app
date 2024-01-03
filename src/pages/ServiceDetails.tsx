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
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
} from "@ionic/react";

import "./ServiceDetails.scss";
import { timerOutline } from "ionicons/icons";

const ServiceDetails: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="nav-bar">
            <IonTitle style={{ color: "#c63625" }}>EduScape</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} className="ion-padding">
        <IonCard>
          <img
            alt="chem"
            src="http://res.cloudinary.com/eduscape/image/upload/v1702303245/eduScape/lehpelgvgtezo1e5gat7.jpg"
          />
          <IonCardHeader>
            <IonCardTitle>Chemical Engineer</IonCardTitle>
            <div className="container">
              <img
                className="profile"
                alt="guy in red"
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <IonCardSubtitle>Carl Bryan Babol</IonCardSubtitle>
            </div>
          </IonCardHeader>

          <IonCardContent>
            <h2>About This Service</h2> I provide personalized and comprehensive
            support to students seeking assistance in various aspects of
            chemical engineering. My goal is to help students grasp challenging
            concepts, excel in their coursework, and build a strong foundation
            in the field.
          </IonCardContent>
        </IonCard>
        {/* -------------------------------------------------------- */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              Personalized Chemical Engineering Tutoring
            </IonCardTitle>

            <IonCardSubtitle>
              <span>₱ 9599</span>
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <div className="details">
              <div className="item">
                <IonIcon icon={timerOutline} />
                <span>Availability: 3/week</span>
              </div>
              <div className="features">
                <div className="item">
                  <img src="./greencheck.png" alt="" />
                  <span>Expertise</span>
                </div>
                <div className="item">
                  <img src="./greencheck.png" alt="" />
                  <span>Customized Learning</span>
                </div>
                <div className="item">
                  <img src="./greencheck.png" alt="" />
                  <span>Flexible Scheduling</span>
                </div>
              </div>
            </div>
            <IonButton>Continue</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ServiceDetails;
