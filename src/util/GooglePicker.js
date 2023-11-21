import React, { useEffect } from 'react';

const GooglePicker = ({ apiKey, clientId, onPicker }) => {
  useEffect(() => {
    const loadPicker = () => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/api.js';
      script.onload = handleClientLoad;
      document.body.appendChild(script);
    };

    const handleClientLoad = () => {
      window.gapi.load('picker', { callback: createPicker });
    };

    const createPicker = () => {
      const picker = new window.google.picker.PickerBuilder()
        .addView(new window.google.picker.View(window.google.picker.ViewId.SPREADSHEETS))
        .setOAuthToken(null)
        .setDeveloperKey(apiKey)
        .setCallback(onPicker)
        .build();
      picker.setVisible(true);
    };

    loadPicker();
  }, [apiKey, clientId, onPicker]);

  return <div id="picker-container"></div>;
};

export default GooglePicker;
