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
import { useQuery } from "react-query";
import newRequest from "../utils/newRequest";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import getCurrentUser from "../utils/getCurrentUser";

interface ServiceCardProps {
  item: {
    _id: string;
    userId: string;
    cover: string;
    title: string;
    desc: string;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  const navigate = useHistory();
  const currentUser = getCurrentUser();

  const { isLoading, error, data } = useQuery({
    queryKey: ["gigUser", item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res: any) => {
        return res.data;
      }),
  });

  const handleContact = async (order: any) => {
    const sellerId = order.price;
    const buyerId = order._id;
    const id = sellerId + buyerId;

    try {
      const res = await newRequest.get(`/conversations/single/${id}`);
      navigate.push(`/message/${res.data.id}`);
    } catch (err: any) {
      if (err.response.status === 404 || err.response.status === 500) {
        const res = await newRequest.post(`/conversations/`, {
          to: currentUser.seller ? buyerId : sellerId,
        });
        navigate.push(`/message/${res.data.id}`);
      }
    }
  };

  const ssl = (data: any) => {
    const ht = data.split(":")[0] + "s";
    return ht + ":" + data.split(":")[1];
  };

  return (
    <IonCard>
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div>
          <img alt="cover" src={item.cover} />
        </div>
      )}

      <IonCardHeader>
        <IonCardTitle>{item.title}</IonCardTitle>

        {isLoading ? (
          "loading"
        ) : error ? (
          "error"
        ) : (
          <div className="container">
            <img className="profile" alt="guy in red" src={ssl(data.img)} />
            <IonCardSubtitle>{data.username}</IonCardSubtitle>
          </div>
        )}
      </IonCardHeader>

      <IonCardContent>{item.desc}</IonCardContent>
      <div className="button-container">
        <IonButton onClick={() => handleContact(item)}>Message</IonButton>
        <IonButton href={`/gig/${item._id}`}>More Details</IonButton>
      </div>
    </IonCard>
  );
};

export default ServiceCard;
