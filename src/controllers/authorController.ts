import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { getAllAuthors, getAuthorById, createAuthor, updateAuthor as updateAuthorModel, deleteAuthor as deleteAuthorModel } from '../models/authorModel';

const getAuthors = async (req: Request, res: Response) => {
  try {
    const authors = await getAllAuthors();
    res.json(authors);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const getAuthor = async (req: Request, res: Response) => {
  try {
    const author = await getAuthorById(parseInt(req.params.id));
    if (!author) {
      return res.status(404).json({ error: 'Author not found' });
    }
    res.json(author);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const addAuthor = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const id = await createAuthor(req.body);
    res.status(201).json({ id });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const updateAuthor = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const result = await updateAuthor(req, req.body);
    if (!result) {
      return res.status(404).json({ error: 'Author not found' });
    }
    res.json({ message: 'Author updated' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAuthor = async (req: Request, res: Response) => {
  try {
    const result = await deleteAuthorModel(parseInt(req.params.id));
    if (!result) {
      return res.status(404).json({ error: 'Author not found' });
    }
    res.json({ message: 'Author deleted' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export { getAuthors, getAuthor, addAuthor, updateAuthor, deleteAuthor };
