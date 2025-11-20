import React from 'react';
import { useSnackbar } from 'notistack';

const NotificationManager = () => {
  const { enqueueSnackbar } = useSnackbar();

  // This component can be used to manage global notifications
  // You can add event listeners or other notification logic here

  return null; // This component doesn't render anything visible
};

export default NotificationManager;