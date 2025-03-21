class BookController{
    bookService;
    constructor(bookService){
        this.bookService = bookService;
    }
    async getAllBooks(req, res){
        const books = await this.bookService.findAllBooks();
        return res.json(books);
    }
    async getBookById(req, res){
        const book = await this.bookService.findBookById(req.params.id);
        try{
            if(!book){
                res.status(404);
                return res.json({error: "Book not found"});
            } else{
                return res.json(book);
            }
        } catch(err){
            return res.status(500)
        }
    }

    async postBook(req, res){
        const book = await this.bookService.createBook(req.body);
        return res.json(book);
    }
}

module.exports = BookController;