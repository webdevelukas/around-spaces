import React from "react";
import Modal from "../components/Modal";
import { action } from "@storybook/addon-actions";
import ModalTitle from "../components/ModalTitle";
import ModalSection from "../components/ModalSection";

export default {
  title: "Modal"
};

export function Show() {
  return (
    <Modal onAccept={action("accept")} onClose={action("close")}>
      <ModalTitle>Rate our service!</ModalTitle>
      <ModalSection>Rating</ModalSection>
    </Modal>
  );
}

export function Hide() {
  return (
    <>
      <Modal show={false} onAccept={action("accept")} onClose={action("close")}>
        <ModalTitle>Rate our service!</ModalTitle>
        <ModalSection>Rating</ModalSection>
      </Modal>
      <p>
        Take a look at the inspector to verify that the modal is set to{" "}
        <code>display: none;</code>
      </p>
    </>
  );
}
