import React from 'react';
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
} from '@ionic/react';

import './Profile.scss';
import getCurrentUser from '../utils/getCurrentUser';
import { useHistory } from 'react-router';
import newRequest from '../utils/newRequest';

const Profile: React.FC = () => {
  const currentUser = getCurrentUser();
  const navigate = useHistory();

  const handleLogout = async () => {
    try {
      await newRequest.post('/auth/logout');
      localStorage.setItem("currentUser", JSON.stringify(null));
      navigate.push('/register');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="nav-bar">
            <IonTitle style={{ color: '#c63625' }}>EduScape</IonTitle>
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
              <IonCardSubtitle>
                {currentUser.username}
              </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
                <IonItem lines="none">
                  <IonThumbnail slot="start">
                    <img
                      alt="Silhouette of mountains"
                      src={currentUser.img}
                    />
                  </IonThumbnail>
                  <IonLabel>
                    Username: {currentUser.username}
                  </IonLabel>
                </IonItem>
              </IonList>
            </IonCardContent>
          </IonCard>
          <IonButton onClick={handleLogout}>Logout</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
