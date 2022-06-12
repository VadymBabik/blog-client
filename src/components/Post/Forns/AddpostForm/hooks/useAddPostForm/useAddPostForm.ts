import { useReactHookForm } from '../../../../../Hooks/useReactHookForm';
import { router } from 'next/client';
import { AddPostFormFormData } from '../../AddPostForm.types';

import { PostFields } from '../../../../PostTypes';

import {
  useCreatePostMutation,
  useGetPostsQuery
} from '../../../../../../store/product/product';

import { addPostValidationSchema } from './addPostvalidationSchema';
import { Constants } from '../../../../../../helpers/constants';

const defaultValuesAddPost: AddPostFormFormData = {
  title: '',
  content: '',
  image: null
};

const useAddPostForm = () => {
  const { errors, handleSubmitReactHookForm, register, resetForm } =
    useReactHookForm<AddPostFormFormData>({
      defaultValues: defaultValuesAddPost,
      schema: addPostValidationSchema
    });

  const { refetch } = useGetPostsQuery('');

  const [createPost, { isLoading, error }] = useCreatePostMutation();

  return {
    addPost: handleSubmitReactHookForm({
      onSubmit: async (data: AddPostFormFormData) => {
        const formData = await new FormData();
        formData.append('title', data.title);
        formData.append('content', data.content);
        formData.append('image', data.image[0]);
        createPost(formData)
          .then(() => refetch())
          .then(() => router.push(Constants.routs.root));
      }
    }),
    registerFields: {
      registerTitle: register(PostFields.TITLE),
      registerContent: register(PostFields.CONTENT),
      registerImage: register(PostFields.IMAGE)
    },
    validationErrors: {
      titleValidationError: errors?.title?.message,
      contentValidationError: errors?.content?.message,
      imageValidationError: errors?.image?.message
    },
    resetForm,
    error,
    isLoading
  };
};

export default useAddPostForm;
