import React from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const StatusPage: React.FC=()=>{
    return(
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add New Order</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <h1>
              Stuff here
          </h1>
      </IonContent>
    </IonPage>
    )
};

export default StatusPage
