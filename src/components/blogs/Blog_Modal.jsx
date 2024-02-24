import React from 'react';
import Modal from 'react-modal'

const Blog_Modal = ({ modal,closeModal,blog,darkMode}) => {
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

  const darkModeStyles = {
    content: {
      ...customStyles.content,
      backgroundColor: 'rgb(24, 26, 27)',
      color:'white'
    },
  };

  const styles = darkMode ? darkModeStyles : customStyles

  return (
      <Modal isOpen={modal}
        onRequestClose={closeModal}
        style={styles}
      >
        <h1 className='text-xl font-bold mb-5'>{blog.title}</h1>
        <img src={blog.cover_image} className='h-96 w-xl m-auto'/>
        <p className='mt-5'>{blog.body}</p>
      </Modal>
  );
};

export default Blog_Modal;
