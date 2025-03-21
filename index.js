const express = require('express');

const app = express();
app.use(express.json());
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Connecté à la BD'))
    .catch(err => console.error('Erreur lors de la connexion à la BD'));

const port = 4000;
const BookController = require('./books/controller');
const BookService = require('./books/service');
const BookRepository = require('./books/repository');
const bookRepository = new BookRepository();
const bookService = new BookService(bookRepository);
const bookController = new BookController(bookService);

app.get('/books', bookController.getAllBooks.bind(bookController));
app.get('/books/:id', bookController.getBookById.bind(bookController));
app.post('/books', bookController.postBook.bind(bookController));

app.listen(port, () => 
    console.log(`L'application écoute sur le port ${port}`));
