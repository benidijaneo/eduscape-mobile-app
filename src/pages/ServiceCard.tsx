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
import './Service.scss';
import { useQuery } from 'react-query';
import newRequest from '../utils/newRequest';
interface ServiceCardProps {
  item: {
    _id: string;
    userId: string;
    cover: string;
    title: string;
    desc:string
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['gigUser', item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res: any) => {
        console.log(res.data);
        return res.data;
      }),
  });
  return (
    <IonCard>
      {isLoading ? (
        'loading'
      ) : error ? (
        'error'
      ) : (
        <img alt="cover" src={item.cover} />
      )}

      <IonCardHeader>
        <IonCardTitle>{item.title}</IonCardTitle>

        {isLoading ? (
          'loading'
        ) : error ? (
          'error'
        ) : (
          <div className="container">
            <img
              className="profile"
              alt="guy in red"
              src={data.img}
            />
            <IonCardSubtitle>{data.username}</IonCardSubtitle>
          </div>
        )}
      </IonCardHeader>

      <IonCardContent>{item.desc}</IonCardContent>
      <div className="button-container">
        <IonButton href="/servicedetails">More Details</IonButton>
      </div>
    </IonCard>
  );
};

export default ServiceCard;
