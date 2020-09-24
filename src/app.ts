import express, {Request, Response} from 'express';
import * as bookController from './controllers/bookController'

const app = express();
app.use(express.json());
app.set("port", process.env.PORT || 3000);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello!');
})

// API Endpoints
app.get("/books", bookController.allBooks);
app.get("/book/:id", bookController.getBook);
app.post("/book", bookController.addBook);
app.put("/book/:id", bookController.updateBook);
app.delete("/book/:id", bookController.deleteBook);

app.listen(app.get("port"), () => ( 
    console.log('App is running on port:%d', app.get("port"))
))