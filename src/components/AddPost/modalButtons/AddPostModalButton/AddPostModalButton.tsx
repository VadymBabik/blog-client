import React, { useRef } from 'react';
import SubmitModalButton from '../../../../helpers/ModalHelper/SubmitModalButton';
import { useAddPostForm } from '../../../Post/Forns/AddpostForm/hooks/useAddPostForm';
import { Form } from '../../../../helpers/Form';
import { InputField } from '../../../../helpers/FormFilds/InputField';
import { PostFields } from '../../../Post/PostTypes';
import { InputType } from '../../../../types/field';
import { useScrollToBottom } from '../../../Hooks/scrolls/ScrollToBottom/hooks/useScrollToBottom';

const AddPostModalButton = () => {
  const { addPost, validationErrors, registerFields, isLoading, resetForm } =
    useAddPostForm();

  return (
    <div>
      <SubmitModalButton
        title={'Add post'}
        isLoading={isLoading}
        onSubmit={addPost}
        onOpen={resetForm}
      >
        <Form className="space-y-6">
          <InputField
            label={PostFields.TITLE}
            error={validationErrors.titleValidationError}
            inputWrapperClassName="mt-1 relative"
            name={registerFields.registerTitle.name}
            onChange={registerFields.registerTitle.onChange}
            ref={registerFields.registerTitle.ref}
          />
          <InputField
            label={PostFields.CONTENT}
            error={validationErrors.contentValidationError}
            inputWrapperClassName="mt-1 relative"
            name={registerFields.registerContent.name}
            onChange={registerFields.registerContent.onChange}
            ref={registerFields.registerContent.ref}
          />
          <InputField
            label={PostFields.IMAGE}
            error={validationErrors.imageValidationError}
            inputWrapperClassName="mt-1 relative"
            name={registerFields.registerImage.name}
            onChange={registerFields.registerImage.onChange}
            ref={registerFields.registerImage.ref}
            type={InputType.FILE}
          />
        </Form>
      </SubmitModalButton>
    </div>
  );
};

export default AddPostModalButton;
