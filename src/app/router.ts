import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { listCategories } from './useCases/categories/listCategories';
import { createCategory } from './useCases/categories/createCategory';
import { listProducts } from './useCases/products/listProducts';
import { createProduct } from './useCases/products/createProduct';
import { listProductsByCategories } from './useCases/categories/listProductsByCategories';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

router.get('/categories', listCategories);

router.post('/categories', createCategory);

router.get('/products', listProducts);

router.post('/products', upload.single('image'), createProduct);

router.get('/categories/:categoryId/products', listProductsByCategories);

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

