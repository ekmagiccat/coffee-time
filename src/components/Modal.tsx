import React from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import mug from "../images/coffeeMug.png";

interface ModalProps {
  handleClose: () => void;
  modalOpen?: boolean;
}

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal: React.FC<ModalProps> = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p>Open</p>
        <button className="btn btn-dark btn-lg" onClick={handleClose}>
          Close
        </button>
        <img src={mug} alt="coffee mug" className="cofeeMug" />
      </motion.div>
    </Backdrop>
  );
};

export default Modal;