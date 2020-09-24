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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbIm1vZGVscy9ib29rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNEQUFnQztBQUloQyxJQUFNLEdBQUcsR0FBVyxnQ0FBZ0MsQ0FBQztBQUVyRCxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxFQUN6RSxVQUFDLEdBQVE7SUFDUCxJQUFJLEdBQUcsRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzFCO1NBQU07UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7S0FDeEM7QUFDSCxDQUFDLENBQUMsQ0FBQztBQU9VLFFBQUEsVUFBVSxHQUFHLElBQUksa0JBQVEsQ0FBQyxNQUFNLENBQUM7SUFDNUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ3ZDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtDQUN6QyxDQUFDLENBQUM7QUFFSCxJQUFNLElBQUksR0FBRyxrQkFBUSxDQUFDLEtBQUssQ0FBZ0IsTUFBTSxFQUFFLGtCQUFVLENBQUMsQ0FBQztBQUMvRCxrQkFBZSxJQUFJLENBQUMifQ==