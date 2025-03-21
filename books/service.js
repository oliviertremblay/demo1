class BookService{
    bookRepository;

    constructor(bookRepository){
        this.bookRepository = bookRepository;
    }

    async findAllBooks(){
        const books = await this.bookRepository.findAllBooks();
        return Promise.resolve(books);
    }
    async findBookById(id){
        const book = await this.bookRepository.findBookById(id);
        return Promise.resolve(book);
    }

    async createBook(book){
        book = await this.bookRepository.createBook(book);
        return Promise.resolve(book);
    }
}
module.exports = BookService;