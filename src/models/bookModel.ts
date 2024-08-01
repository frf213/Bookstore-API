import knex from 'knex';

interface Book {
  id?: number;
  title: string;
  description?: string;
  published_date: string;
  author_id: number;
}

const getAllBooks = async (): Promise<Book[]> => {
  return await knex('books').select('*');
};

const getBookById = async (id: number): Promise<Book> => {
  return await knex('books').where({ id }).first();
};

const createBook = async (book: Book): Promise<number[]> => {
  return await knex('books').insert(book);
};

const updateBook = async (id: number, book: Book): Promise<number> => {
  return await knex('books').where({ id }).update(book);
};

const deleteBook = async (id: number): Promise<number> => {
  return await knex('books').where({ id }).del();
};

const getBooksByAuthorId = async (author_id: number): Promise<Book[]> => {
  return await knex('books').where({ author_id });
};

export { getAllBooks, getBookById, createBook, updateBook, deleteBook, getBooksByAuthorId };
