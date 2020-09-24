import mongoose from 'mongoose';



const uri: string = 'mongodb://192.168.99.100:27017'; 

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, 
(err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Successfully Connected!");
  }
});

export interface BookInterface extends mongoose.Document {
  title: string;
  author: number;
}

export const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true }
});

const Book = mongoose.model<BookInterface>("Book", BookSchema);
export default Book;

