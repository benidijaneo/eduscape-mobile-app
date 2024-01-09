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
import { useQuery } from "react-query";
import newRequest from "../utils/newRequest";
import { Link, useParams } from "react-router-dom";

const ServiceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  const ssl = (data: any) => {
    const ht = data.split(":")[0] + "s";
    return ht + ":" + data.split(":")[1];
  };

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
        {isLoading ? (
          "loading"
        ) : error ? (
          "Something went wrong!"
        ) : (
          <IonCard>
            <img alt="chem" src={ssl(data.cover)} />
            <IonCardHeader>
              <IonCardTitle>{data.title}</IonCardTitle>
              {isLoadingUser ? (
                "loading"
              ) : errorUser ? (
                "Something went wrong!"
              ) : (
                <div className="container">
                  <img
                    className="profile"
                    alt="User Profile"
                    src={ssl(dataUser.img)}
                  />
                  <IonCardSubtitle>{dataUser.username}</IonCardSubtitle>
                </div>
              )}
            </IonCardHeader>

            <IonCardContent>
              <h2>About This Service</h2> {data.desc}
            </IonCardContent>
          </IonCard>
        )}
        {/* -------------------------------------------------------- */}
        {isLoading ? (
          ""
        ) : error ? (
          "Something went wrong!"
        ) : (
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{data.shortTitle}</IonCardTitle>

              <IonCardSubtitle>
                <span>₱ {data.price}</span>
              </IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              <div className="details">
                <div className="item">
                  <IonIcon icon={timerOutline} />
                  <span>Availability: {data.availability}/week</span>
                </div>
                <div className="features">
                  {data.features.map((feature: any) => (
                    <div className="item" key={feature}>
                      <img src="/greencheck.png" alt="" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* <IonButton>Continue</IonButton> */}
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ServiceDetails;
