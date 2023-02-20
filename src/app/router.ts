import { Router } from 'express';

import { listCategories } from './useCases/categories/listCategories';
import { createCategory } from './useCases/categories/createCategory';

export const router = Router();

router.get('/categories', listCategories);

router.post('/categories', createCategory);

router.get('/products', (req, res) => {
  res.send('Ok');
});

router.post('/products', (req, res) => {
  res.send('Ok');
});

router.get('/products/:categoryId/products', (req, res) => {
  res.send('Ok');
});

router.get('/orders', (req, res) => {
  res.send('Ok');
});

router.post('/orders', (req, res) => {
  res.send('Ok');
});

router.patch('/orders/:orderId', (req, res) => {
  res.send('Ok');
});

router.delete('/orders/:orderId', (req, res) => {
  res.send('Ok');
});

