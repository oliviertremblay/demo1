const Book = require("./model");

class BookRepository {
  async findAllBooks() {
    const books = await Book.find();
    return books;
  }

  async findBookById(id) {
    const book = await Book.findById(id);
      return book;
  }

  async createBook(book) {
    const newBook = new Book(book);
    await newBook.save();
    return newBook;
  }
}

module.exports = BookRepository;