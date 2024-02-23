import React from 'react';
import Modal from 'react-modal'

const Blog_Modal = ({ modal,closeModal,blog}) => {
  const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width:'60rem',
    height:'40rem',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

  return (
      <Modal isOpen={modal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h1 className='text-xl font-bold mb-5'>{blog.title}</h1>
        <img src={blog.cover_image} className='h-96 w-xl m-auto'/>
        <p className='mt-5'>{blog.body}</p>
      </Modal>
  );
};

export default Blog_Modal;
