import { Request, Response } from "express";
import Book from '../models/book';


export let allBooks = (req: Request, res: Response) => {
    //   res.send("Returns all Books");
    let books = Book.find((err: any, books: any) => {
        if(err){
            res.send("Error")
        }else{
            res.send(books)
        }
    })
};

export let getBook = (req: Request, res: Response) => {
    //   res.send("Returns one book");
    Book.findById(req.params.id, (err:any, book: any) => {
        if(err){
            res.send("Error")
        }else{
            res.send(book)
        }
    })
};

export let deleteBook = (req: Request, res: Response) => {
    //   res.send("deletes one book");
    Book.deleteOne({_id: req.params.id}, (err: any) => {
        if(err){
            res.send(err)
        }else{
            res.send("Successfully Deleted the Book");
        }
    })
};

export let updateBook = (req: Request, res: Response) => {
    //   res.send("Returns one book");
    Book.findByIdAndUpdate(req.params.id, req.body, (err: any, book: any) => {
        if(err){
            res.send(err)
        }else{
            res.send("Successfully updated book")
        }
    })
};

export let addBook = (req: Request, res: Response) => {
    //   res.send("Returns one book");
    let book = new Book(req.body);

    book.save((err: any) => {
        if(err){
            res.send(err)
        }else{
            res.send(book)
        }
    })
};