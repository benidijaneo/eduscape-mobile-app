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
} from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import './Service.scss';
import { useLocation } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import { useQuery } from 'react-query';
import newRequest from '../utils/newRequest';

const Service: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState('sales');
  const minRef = useRef<number>(0);
  const maxRef = useRef<number>(0);

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['gigs'],
    queryFn: () =>
      newRequest
        .get(
          `/gigs`
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
        <IonToolbar>
          <IonTitle>EduScape</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {console.log('test')}
        {isLoading
          ? 'loading'
          : error
          ? 'Something went wrong!'
          : data.map((gig:any) => <ServiceCard key={gig._id}  item={gig} />)}
        
      </IonContent>
    </IonPage>
  );
};

export default Service;
