"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = exports.updateBook = exports.deleteBook = exports.getBook = exports.allBooks = void 0;
var book_1 = __importDefault(require("../models/book"));
exports.allBooks = function (req, res) {
    //   res.send("Returns all Books");
    var books = book_1.default.find(function (err, books) {
        if (err) {
            res.send("Error");
        }
        else {
            res.send(books);
        }
    });
};
exports.getBook = function (req, res) {
    //   res.send("Returns one book");
    book_1.default.findById(req.params.id, function (err, book) {
        if (err) {
            res.send("Error");
        }
        else {
            res.send(book);
        }
    });
};
exports.deleteBook = function (req, res) {
    //   res.send("deletes one book");
    book_1.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully Deleted the Book");
        }
    });
};
exports.updateBook = function (req, res) {
    //   res.send("Returns one book");
    book_1.default.findByIdAndUpdate(req.params.id, req.body, function (err, book) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully updated book");
        }
    });
};
exports.addBook = function (req, res) {
    //   res.send("Returns one book");
    var book = new book_1.default(req.body);
    book.save(function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va0NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9ib29rQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSx3REFBa0M7QUFHdkIsUUFBQSxRQUFRLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUM5QyxtQ0FBbUM7SUFDbkMsSUFBSSxLQUFLLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVEsRUFBRSxLQUFVO1FBQ3ZDLElBQUcsR0FBRyxFQUFDO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUNwQjthQUFJO1lBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUNsQjtJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDO0FBRVMsUUFBQSxPQUFPLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUM3QyxrQ0FBa0M7SUFDbEMsY0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxVQUFDLEdBQU8sRUFBRSxJQUFTO1FBQzVDLElBQUcsR0FBRyxFQUFDO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUNwQjthQUFJO1lBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNqQjtJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDO0FBRVMsUUFBQSxVQUFVLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUNoRCxrQ0FBa0M7SUFDbEMsY0FBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBQyxFQUFFLFVBQUMsR0FBUTtRQUMxQyxJQUFHLEdBQUcsRUFBQztZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDaEI7YUFBSTtZQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztTQUM3QztJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDO0FBRVMsUUFBQSxVQUFVLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUNoRCxrQ0FBa0M7SUFDbEMsY0FBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFRLEVBQUUsSUFBUztRQUNoRSxJQUFHLEdBQUcsRUFBQztZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDaEI7YUFBSTtZQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtTQUN4QztJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDO0FBRVMsUUFBQSxPQUFPLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUM3QyxrQ0FBa0M7SUFDbEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxjQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTlCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1FBQ2YsSUFBRyxHQUFHLEVBQUM7WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ2hCO2FBQUk7WUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ2pCO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMifQ==