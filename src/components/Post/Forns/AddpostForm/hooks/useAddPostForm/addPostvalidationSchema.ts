import * as yup from 'yup';
import { PostFields } from '../../../../PostTypes';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

export const addPostValidationSchema = yup.object({
  [PostFields.TITLE]: yup
    .string()
    .nullable(true)
    .required('required')
    .min(5, 'some min')
    .max(20, 'some long'),
  [PostFields.CONTENT]: yup
    .string()
    .nullable(true)
    .required('required')
    .min(5, 'some min')
    .max(200, 'some long'),
  [PostFields.IMAGE]: yup
    .mixed()
    .nullable()
    .required('A file is required')
    .test('fileSize', 'File Size is too large (Max size 5mb)', (value) => {
      return value[0].size <= 5 * 1024 * 1024;
    })
    .test(
      'fileSize',
      'upload file is big size',
      (value) => !value || (value && value[0].size >= 10)
    )
    .test('fileType', 'Only image format (jpg, jpeg, png)', (value) => {
      return SUPPORTED_FORMATS.includes(value[0].type);
    })
});
