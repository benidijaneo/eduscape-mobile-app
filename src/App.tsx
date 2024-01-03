import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  chatbubbleOutline,
  ellipse,
  homeOutline,
  manOutline,
  square,
  triangle,
} from "ionicons/icons";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Services from "./pages/Services";
import Service from "./pages/Service";
import Message from "./pages/Message";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/messages">
            <Messages />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/message">
            <Message />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="messages" href="/messages">
            <IonIcon aria-hidden="true" icon={chatbubbleOutline} />
            <IonLabel>Messages</IonLabel>
          </IonTabButton>
          <IonTabButton tab="services" href="/services">
            <IonIcon aria-hidden="true" icon={manOutline} />
            <IonLabel>Services</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
