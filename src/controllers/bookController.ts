import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { getAllBooks, getBookById, createBook, updateBook as updateBookModel, deleteBook as deleteBookModel, getBooksByAuthorId } from '../models/bookModel';

const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

const getBook = async (req: Request, res: Response) => {
  try {
    const book = await getBookById(parseInt(req.params.id));
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

const addBook = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const id = await createBook(req.body);
    res.status(201).json({ id });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

const updateBook = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const result = await updateBookModel(parseInt(req.params.id), req.body);
    if (!result) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ message: 'Book updated' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

const deleteBook = async (req: Request, res: Response) => {
  try {
    const result = await deleteBook(req, res);
    if (!result) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ message: 'Book deleted' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

const getBooksByAuthor = async (req: Request, res: Response) => {
  try {
    const books = await getBooksByAuthorId(parseInt(req.params.id));
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export { getBooks, getBook, addBook, updateBook, deleteBook, getBooksByAuthor };
