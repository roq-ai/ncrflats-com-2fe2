import * as yup from 'yup';

export const sellerValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
});
