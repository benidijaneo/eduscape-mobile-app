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

import "./Payment.scss";

const Payment: React.FC = () => {
  const handleSubmit = () => {};

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
        <form id="payment-form" onSubmit={handleSubmit}>
          <button
          // disabled={isLoading || !stripe || !elements}
          // id="submit"
          >
            <span id="button-text">
              {/* {isLoading ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            'Pay now'
          )} */}
            </span>
          </button>
          {/* Show any error or success messages */}
          {/* {message && <div id="payment-message">{message}</div>} */}
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Payment;
