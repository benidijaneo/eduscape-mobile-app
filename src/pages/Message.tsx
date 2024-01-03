import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Message.scss";

const Message: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>EduScape</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <div className="message">
          <div className="container">
            {/* <span className="breadcrumbs"></span> */}

            <div className="messages">
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  iure mollitia perspiciatis officiis voluptate? Sequi quae
                  officia possimus, iusto labore alias mollitia eveniet nemo
                  placeat laboriosam nisi animi! Error, tenetur!
                </p>
              </div>
              <div className="item owner">
                <img
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  iure mollitia perspiciatis officiis voluptate? Sequi quae
                  officia possimus, iusto labore alias mollitia eveniet nemo
                  placeat laboriosam nisi animi! Error, tenetur!
                </p>
              </div>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  iure mollitia perspiciatis officiis voluptate? Sequi quae
                  officia possimus, iusto labore alias mollitia eveniet nemo
                  placeat laboriosam nisi animi! Error, tenetur!
                </p>
              </div>
            </div>
            {/* <hr /> */}
            <div className="write">
              <IonTextarea
                name=""
                placeholder="Write a message."
                id=""
              ></IonTextarea>
              <button>Send</button>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Message;