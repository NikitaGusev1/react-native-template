import Modal from 'react-native-modal';

interface ModalProps {
  children: React.ReactElement | React.ReactElement[];
}

export const BaseModal = ({ children }: ModalProps) => {
  return <Modal>{children}</Modal>;
};
