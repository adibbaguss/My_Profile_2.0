import React from 'react';
import { Modal, Box } from '@mui/material';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const CustomModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box className="fixed inset-0 flex items-center justify-center ">
        <Box className="p-6 rounded-lg shadow-lg relative max-w-3xl max-h-full bg-white overflow-hidden">
          <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={onClose}>
            &times;
          </button>
          <Zoom>
            <img src={image} alt="Certificate" className="object-contain max-w-full max-h-screen " loading="lazy" />
          </Zoom>
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
