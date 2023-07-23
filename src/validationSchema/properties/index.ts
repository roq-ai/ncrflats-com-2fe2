import * as yup from 'yup';

export const propertyValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  buyer_id: yup.string().nullable(),
  seller_id: yup.string().nullable(),
});
