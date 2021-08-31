import { buildQueries } from '@testing-library/react';
import * as Yup from 'yup';

export type Product = {
  id: string,
  title: string,
  author: string,
  publisher: string,
  description: string,
  year: number,    
  price: number,
  count: number,
};

export const ProductSchema = Yup.object().shape({
  id: Yup.string().required(),
  title: Yup.string().required(),
  author: Yup.string().required(),
  publisher:  Yup.string().required(),
  description: Yup.string(),
  year:  Yup.number().required(),
  price: Yup.number().required(),
  count: Yup.number().required(),
});
