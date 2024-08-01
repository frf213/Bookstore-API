import { Router } from 'express';
import { body } from 'express-validator';
import { getBooks, getBook, addBook, updateBook, deleteBook, getBooksByAuthor } from '../controllers/bookController';

const router = Router();

router.get('/books', getBooks);
router.get('/books/:id', getBook);
router.post(
  '/books',
  body('title').isString().notEmpty(),
  body('published_date').isDate(),
  body('author_id').isInt(),
  addBook
);
router.put(
  '/books/:id',
  body('title').isString().notEmpty(),
  body('published_date').isDate(),
  body('author_id').isInt(),
  updateBook
);
router.delete('/books/:id', deleteBook);
router.get('/authors/:id/books', getBooksByAuthor);

export default router;
