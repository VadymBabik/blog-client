import React, { Fragment, ReactNode } from 'react';
import { Loading } from '../../types/field';
import SimpleModal from './SimpleModal/SimpleModal';
import { useModal } from './hooks/insex';

interface SubmitModalButtonProps {
  title: string;
  children: ReactNode;
  isLoading: Loading;
  afterSubmit?: () => void | Promise<void>;
  onClose?: () => void;
  onOpen?: () => void;
  onSubmit?: () => Promise<unknown>;
  onToggle?: (isOpen: boolean) => void;
  preventModalClose?: boolean;
  isModalOpen?: boolean;
}
const SubmitModalButton = ({
  title,
  children,
  isLoading,
  onOpen,
  onClose,
  onToggle,
  onSubmit,
  afterSubmit,
  preventModalClose
}: SubmitModalButtonProps) => {
  const { isOpen, showModal, hideModal, handleSubmit } = useModal({
    onOpen,
    onClose,
    onToggle,
    onSubmit,
    afterSubmit,
    preventModalClose
  });
  return (
    <Fragment>
      <button
        type="button"
        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        onClick={showModal}
      >
        Cancel
      </button>
      <SimpleModal
        title={title}
        hideModal={hideModal}
        isOpen={isOpen}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
      >
        {children}
      </SimpleModal>
    </Fragment>
  );
};

export default SubmitModalButton;
