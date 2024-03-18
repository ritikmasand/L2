var Mediatypes;
(function (Mediatypes) {
    Mediatypes[Mediatypes["Book"] = 0] = "Book";
    Mediatypes[Mediatypes["Magazine"] = 1] = "Magazine";
})(Mediatypes || (Mediatypes = {}));
var Book = /** @class */ (function () {
    function Book() {
    }
    Book.prototype.displayInfo = function () {
        return "".concat(Mediatypes.Magazine, " - The Catcher in the Rye by J.D. Salinger");
    };
    Book.prototype.properties = function (title, creator, type) {
        console.log("The title is ".concat(title, ",creator is ").concat(creator, ",and it is of type ").concat(Mediatypes[type]));
    };
    return Book;
}());
var Magazine = /** @class */ (function () {
    function Magazine() {
    }
    Magazine.prototype.displayInfo = function () {
        return "".concat(Mediatypes.Magazine, " - The Catcher in the Rye by J.D. Salinger");
    };
    Magazine.prototype.properties = function (title, creator, type) {
        console.log("The title is ".concat(title, ",creator is ").concat(creator, ",and it is of type ").concat(Mediatypes[type]));
    };
    return Magazine;
}());
var book1 = new Book();
book1.properties('harry potter', 'jk rowling', Mediatypes.Book);
book1.displayInfo();
var maganize1 = new Magazine();
maganize1.properties('M1', 'A1', Mediatypes.Magazine);
maganize1.displayInfo();
