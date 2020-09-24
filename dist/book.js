"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var uri = 'mongodb://192.168.99.100:27017';
mongoose_1.default.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successfully Connected!");
    }
});
exports.BookSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
});
var Book = mongoose_1.default.model("Book", exports.BookSchema);
exports.default = Book;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0RBQWdDO0FBSWhDLElBQU0sR0FBRyxHQUFXLGdDQUFnQyxDQUFDO0FBRXJELGtCQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLEVBQ3pFLFVBQUMsR0FBUTtJQUNQLElBQUksR0FBRyxFQUFFO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDMUI7U0FBTTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztLQUN4QztBQUNILENBQUMsQ0FBQyxDQUFDO0FBT1UsUUFBQSxVQUFVLEdBQUcsSUFBSSxrQkFBUSxDQUFDLE1BQU0sQ0FBQztJQUM1QyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDdkMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0NBQ3pDLENBQUMsQ0FBQztBQUVILElBQU0sSUFBSSxHQUFHLGtCQUFRLENBQUMsS0FBSyxDQUFnQixNQUFNLEVBQUUsa0JBQVUsQ0FBQyxDQUFDO0FBQy9ELGtCQUFlLElBQUksQ0FBQyJ9