const book = {
    
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464, 
    language: "English",
    avaliable: true

};
console.log("title" in book);
delete book.avaliable;
console.log(book)
console.log("avaliable" in book)