import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonButton,
} from "@ionic/react";
import "./Service.scss";

const Service: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>EduScape</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <img
            alt="Chemicals"
            src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <IonCardHeader>
            <IonCardTitle>Chemical Engineering</IonCardTitle>
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
            Unlocking the secrets of chemical processes! With personalized
            sessions tailored to your learning style, I bring clarity to complex
            subjects like thermodynamics, kinetics, and process design. Let's
            conquer chemical engineering together and set the stage for your
            academic success!
          </IonCardContent>
          <div className="button-container">
            <IonButton>Message</IonButton>
            <IonButton>Avail</IonButton>
          </div>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Service;
