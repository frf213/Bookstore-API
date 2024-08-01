import knex from 'knex';

interface Author {
  id?: number;
  name: string;
  bio?: string;
  birthdate: string;
}

const getAllAuthors = async (): Promise<Author[]> => {
  return await knex('authors').select('*');
};

const getAuthorById = async (id: number): Promise<Author> => {
  return await knex('authors').where({ id }).first();
};

const createAuthor = async (author: Author): Promise<number[]> => {
  return await knex('authors').insert(author);
};

const updateAuthor = async (id: number, author: Author): Promise<number> => {
  return await knex('authors').where({ id }).update(author);
};

const deleteAuthor = async (id: number): Promise<number> => {
  return await knex('authors').where({ id }).del();
};

export { getAllAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor };
