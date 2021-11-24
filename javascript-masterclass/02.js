let informacoes = `criação de objetos de várias formas, criação de objetos da função construtora, ao longo do treinamento Criação de Objetos`
{};
new Object();   
Object.create(null);

const key1 = "title";

const book = {
    [key1]: "Clean Codes",
    title2: "Clean Code",
    author: "Robert C. Martin",
    pages: 464, 
    language: "English",
    avaliable: true

};
// console.log(book)
console.log(book.pages)
console.log(book.key1)


const book2 = {};
book2.title2 = "Clean Code";
book2.pages2 = 464;

for (let key in book) {
    console.log(book[key])
}

console.log(book2);

const book3 = {};
for (let key in book) {
    book3[key] = book[key];
}
console.log(book3)