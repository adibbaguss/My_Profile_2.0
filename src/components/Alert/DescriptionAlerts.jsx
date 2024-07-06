import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const DescriptionAlerts = ({ status, message }) => {
  if (!status) return null;

  return (
    <Stack sx={{ width: '100%', mt: 2 }} spacing={2} className=" px-5">
      <Alert severity={status}>
        <AlertTitle>{status.charAt(0).toUpperCase() + status.slice(1)}</AlertTitle>
        {message}
      </Alert>
    </Stack>
  );
};

export default DescriptionAlerts;
