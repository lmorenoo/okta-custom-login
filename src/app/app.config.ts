const { CLIENT_ID, ISSUER, OKTA_TESTING_DISABLEHTTPSCHECK } = process.env;

export default {
  oidc: {
    clientId: `${CLIENT_ID}`,
    issuer: `${ISSUER}`,
    redirectUri: 'https://happiest-food-app.herokuapp.com/implicit/callback',
    pkce: true,
    testing: {
      disableHttpsCheck: `${OKTA_TESTING_DISABLEHTTPSCHECK}`
    }
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};

