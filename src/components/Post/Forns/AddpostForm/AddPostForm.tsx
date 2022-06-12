import { Form } from '../../../../helpers/Form';

import { InputType } from '../../../../types/field';
import { PostFields } from '../../PostTypes';

import { useAddPostForm } from './hooks/useAddPostForm';

import { InputField } from '../../../../helpers/FormFilds/InputField';

const AddPostForm = () => {
  const { addPost, validationErrors, registerFields } = useAddPostForm();
  console.log(validationErrors.imageValidationError);
  return (
    <Form className="space-y-6" onSubmit={addPost}>
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

      {/*{error && <h2>{error}</h2>}*/}

      <button
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        type={'submit'}
      >
        submit
      </button>
    </Form>
  );
};

export default AddPostForm;
