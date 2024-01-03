import React from 'react';
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

interface MessageFormData {
  conversationId: any;
  desc: any;
  img: any;
}

const Message: React.FC = () => {
  const { id } = useParams<{ id: string }>();
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

  const handleSubmit = (e:any) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
      img: '',
    });
    e.target[0].value = '';
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>{/* <IonTitle>EduScape</IonTitle> */}</IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <div className="message">
          <div className="container">
            {/* <span className="breadcrumbs"></span> */}

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
                      currentUser._id == m.userId
                        ? currentUser.img
                        : `${getUser(m.userId)}`
                    }
                    alt=""
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
