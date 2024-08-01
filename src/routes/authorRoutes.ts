import { Router } from 'express';
import { body } from 'express-validator';
import { getAuthors, getAuthor, addAuthor, updateAuthor, deleteAuthor } from '../controllers/authorController';

const router = Router();

router.get('/authors', getAuthors);
router.get('/authors/:id', getAuthor);
router.post(
  '/authors',
  body('name').isString().notEmpty(),
  body('birthdate').isDate(),
  addAuthor
);
router.put(
  '/authors/:id',
  body('name').isString().notEmpty(),
  body('birthdate').isDate(),
  updateAuthor
);
router.delete('/authors/:id', deleteAuthor);

export default router;
