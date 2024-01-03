import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
} from "@ionic/react";

import "./Profile.scss";

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="nav-bar">
            <IonTitle style={{ color: "#c63625" }}>EduScape</IonTitle>
            {/* <img
              className="profile"
              alt="guy in red"
              src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            /> */}
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} className="ion-padding">
        <div className="profile-container">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Profile</IonCardTitle>
              <IonCardSubtitle>Carl Bryan Babol</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
                <IonItem lines="none">
                  <IonThumbnail slot="start">
                    <img
                      alt="Silhouette of mountains"
                      src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                  </IonThumbnail>
                  <IonLabel>Username: carlbabol1</IonLabel>
                </IonItem>
              </IonList>
            </IonCardContent>
          </IonCard>
          <IonButton>Logout</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
