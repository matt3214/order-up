import React from 'react';
import { Route,Redirect} from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import { apps, flash, send } from 'ionicons/icons';
import AddPage from './pages/Add';
import ListPage from './pages/List';
import StatusPage from './pages/Status';



const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/add" component={AddPage} exact={true} />
          <Route path="/list" component={ListPage} exact={true} />
          <Route path="/status" component={StatusPage} exact={true} />
          <Route path="/" render={() => <Redirect to="/list" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/add">
            <IonIcon icon={flash} />
            <IonLabel>Add</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/list">
            <IonIcon icon={apps} />
            <IonLabel>List</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/status">
            <IonIcon icon={send} />
            <IonLabel>Status</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);
export default App