import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
//dev-bv6zaiahfqcyny7v.us.auth0.com
//3A10KV42BoXh9SQzGeFUvas2gCRQLASn

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain="dev-bv6zaiahfqcyny7v.us.auth0.com"
      clientId="3A10KV42BoXh9SQzGeFUvas2gCRQLASn"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    > */}
      <GithubProvider>
        <App />
      </GithubProvider>
    {/* </Auth0Provider> */}
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
