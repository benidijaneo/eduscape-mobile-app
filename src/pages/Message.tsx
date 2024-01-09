import React, { useEffect, useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react';

import './Message.scss';
import { useQueryClient, useQuery, useMutation } from 'react-query';
import { useParams } from 'react-router';
import newRequest from '../utils/newRequest';
import getCurrentUser from '../utils/getCurrentUser';
import { useLocation } from 'react-router-dom';

interface MessageFormData {
  conversationId: any;
  desc: any;
  img: any;
}

const Message: React.FC = () => {
  const location = useLocation();
  const currentUrl = location.pathname;

  const { id } = useParams<{ id: string }>();
  const [userData, setUserData] = useState<any>(null);
  const currentUser = getCurrentUser();

  const queryClient = useQueryClient();

  const getUser = async (ide: any) => {
    try {
      const response = await newRequest.get(`/users/${ide}`);
      return response.data.img;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ['messages'],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message: MessageFormData) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['messages']);
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
      img: '',
    });
    e.target[0].value = '';
  };

  const ssl = (data: any) => {
    const ht = data.split(':')[0] + 's';
    return ht + ':' + data.split(':')[1];
  };

  const getConversations = () => {
    const currentUserString = localStorage.getItem('conversations');

    if (currentUserString) {
      return JSON.parse(currentUserString);
    }
    return null;
  };

  useEffect(() => {
    getUser(currentUrl.split('/')[2].slice(24))
      .then((res) => {
        setUserData(res);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  });

  const buyerImg = userData;

  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent fullscreen={true}>
        <div className="message">
          <div className="container">
            <div className="messages">
              {data?.map((m: any) => (
                <div
                  className={
                    m.userId === currentUser._id
                      ? 'owner item'
                      : 'item'
                  }
                  key={m._id}
                >
                  <img
                    src={
                      m.userId === currentUser._id
                        ? currentUser.img
                        : buyerImg
                    }
                    alt="User Profile"
                  />
                  <p>{m.desc}</p>
                </div>
              ))}
            </div>
            {/* <hr /> */}
            <form className="write" onSubmit={handleSubmit}>
              <IonTextarea
                name=""
                placeholder="Write a message."
                id=""
              ></IonTextarea>
              <IonButton type="submit">Submit</IonButton>
            </form>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Message;
