'use client';

import React from 'react';

const LoginPage = () => {
  const handleLogin = (provider: string) => {
    const domain = 'yourCognitoDomain.auth.us-region.amazonaws.com'; // Replace with your Cognito domain
    const clientId = 'yourCognitoAppClientId'; // Replace with your Cognito App Client ID
    const redirectUri = encodeURIComponent('https://yourdomain.com/auth/callback'); // Ensure this matches the callback URL configured in Cognito

    // Cognito's authorization URL for the hosted UI
    const cognitoAuthUrl = `https://${domain}/oauth2/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}`;

    // Adding the identity provider query parameter based on the button clicked
    const loginUrl = `${cognitoAuthUrl}&identity_provider=${provider}`;

    // Redirecting to the Cognito hosted UI for the selected provider
    window.location.href = loginUrl;
  };

  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="text-center">
        <p className="mb-4">We only use third-party auth here</p>
        <div className="space-y-4">
          <button 
            onClick={() => handleLogin('Google')} 
            className="flex items-center justify-center bg-red-500 text-white p-2 rounded-lg w-48 mx-auto"
          >
            <img src="/google.svg" alt="Google" className="h-6 mr-2" />
            Login with Google
          </button>
          <button 
            onClick={() => handleLogin('GitHub')} 
            className="flex items-center justify-center bg-gray-800 text-white p-2 rounded-lg w-48 mx-auto"
          >
            <img src="/github.svg" alt="GitHub" className="h-6 mr-2" />
            Login with GitHub
          </button>
          <button 
            onClick={() => handleLogin('Microsoft')} 
            className="flex items-center justify-center bg-blue-500 text-white p-2 rounded-lg w-48 mx-auto"
          >
            <img src="/microsoft.svg" alt="Microsoft" className="h-6 mr-2" />
            Login with Microsoft
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
