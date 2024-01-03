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
import "./Services.css";

const Services: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>EduScape</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Services</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonThumbnail slot="start">
                  <img
                    alt="Science"
                    src="https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </IonThumbnail>
                <IonLabel>Science</IonLabel>
                <IonButton href="/service">View</IonButton>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img
                    alt="Mathematics"
                    src="https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </IonThumbnail>
                <IonLabel>Mathematics</IonLabel>
                <IonButton>View</IonButton>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img
                    alt="English"
                    src="https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </IonThumbnail>
                <IonLabel>English</IonLabel>
                <IonButton>View</IonButton>
              </IonItem>
              <IonItem>
                <IonThumbnail slot="start">
                  <img
                    alt="Philosophy"
                    src="https://images.pexels.com/photos/18245117/pexels-photo-18245117/free-photo-of-still-life-with-a-cup-of-tea-and-an-antique-philosophy-book.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </IonThumbnail>
                <IonLabel>Philosophy</IonLabel>
                <IonButton>View</IonButton>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img
                    alt="Social Studies"
                    src="https://images.pexels.com/photos/6684512/pexels-photo-6684512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </IonThumbnail>
                <IonLabel>Social Studies</IonLabel>
                <IonButton>View</IonButton>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Services;
