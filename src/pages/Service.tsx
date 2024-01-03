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
import React, { useEffect, useRef, useState } from "react";
import "./Service.scss";
import { useLocation } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { useQuery } from "react-query";
import newRequest from "../utils/newRequest";

const Service: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");
  const minRef = useRef<number>(0);
  const maxRef = useRef<number>(0);

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs${search}&min=${minRef.current}&max=${maxRef.current}&sort=${sort}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  console.log(data);

  const reSort = (type: any) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort]);

  const apply = () => {
    refetch();
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>{/* <IonTitle>EduScape</IonTitle> */}</IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {" "}
        {isLoading
          ? "loading"
          : error
          ? "Something went wrong!"
          : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
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
            <IonButton href="/servicedetails">Message</IonButton>
            <IonButton href="/servicedetails">More Details</IonButton>
          </div>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Service;
