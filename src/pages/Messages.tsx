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
import './Messages.scss';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import newRequest from '../utils/newRequest';
import getCurrentUser from '../utils/getCurrentUser';
import { useState, useEffect } from 'react';

const Messages: React.FC = () => {
  const currentUser = getCurrentUser();

  const queryClient = useQueryClient();
  const [conData, setConData] = useState<any[]>([]);

  const { isLoading, error, data } = useQuery({
    queryKey: ['conversations'],
    queryFn: () =>
      newRequest.get(`/conversations`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/conversations/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['conversations']);
    },
  });

  const handleRead = (id: any) => {
    mutation.mutate(id);
  };

  const setConversations = () => {
    if (data) {
      localStorage.setItem('conversations', JSON.stringify(data));
      setConData(data);
    }
  };

  useEffect(() => {
    setConversations();
  }, [data]);

  console.log(data);
  localStorage.setItem('conversations', JSON.stringify(data));
  //  let lamar = currentUser.isSeller == false ? conData[0].buyerImg : conData[0].serllerImg;
  const getConversations = () => {
    const currentUserString = localStorage.getItem('conversations');

    if (currentUserString) {
      return JSON.parse(currentUserString);
    }
    return null;
  };

  const buyerImg = (i: any) => {
    return conData.length > 0
      ? conData[i][
          currentUser.isSeller == false ? 'sellerImg' : 'buyerImg'
        ]
      : '';
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{ color: '#c63625' }}>EduScape</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Messages</IonCardTitle>
          </IonCardHeader>

          {isLoading ? (
            'loading'
          ) : error ? (
            'error'
          ) : (
            <IonCardContent>
              {data.map((c: any, i: any) => (
                <IonList
                  className={
                    ((currentUser.isSeller && !c.readBySeller) ||
                      (!currentUser.isSeller && !c.readByBuyer)) &&
                    'active'
                  }
                  key={c.id}
                >
                  <IonItem>
                    <IonThumbnail slot="start">
                      <div className="img-container">
                        <img
                          alt="User Profile"
                          src={
                            c.userId === currentUser._id
                              ? currentUser.img
                              : buyerImg(i)
                          }
                        />
                      </div>
                    </IonThumbnail>
                    <IonLabel>
                      {currentUser.isSeller
                        ? c.buyerName
                        : c.sellerName}
                    </IonLabel>
                    <IonButton href={`/message/${c.id}`} >
                      View
                    </IonButton>
                  </IonItem>
                </IonList>
              ))}
            </IonCardContent>
          )}

          {/* <IonCardContent>
            <IonList>
              <IonItem>
                <IonThumbnail slot="start">
                  <div className="img-container">
                    <img
                      alt="Silhouette of mountains"
                      src="https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg"
                    />
                  </div>
                </IonThumbnail>
                <IonLabel>Carl Bryan Babol</IonLabel>
                <IonButton href="/message">View</IonButton>
              </IonItem>
            </IonList>
          </IonCardContent> */}
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Messages;
