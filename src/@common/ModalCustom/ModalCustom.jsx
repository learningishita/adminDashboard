import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./modalCustom.scss";

export default function ModalCustom(props) {
  const { modalIsOpen, closeModal, children } = props;
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width:"50%",
      height:"70%",
    },
  };

  const mobileCustomStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: '90%',
      height: '90%',
      display:"flex",
      justifyContent:"center",
    },
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={
        window.innerWidth <= 1200 ? mobileCustomStyle : customStyles
      }
      // className="modal-custom-scss"
      contentLabel="Modal"
    >
      {children}
    </Modal>
  );
}
