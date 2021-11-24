 let counter = 0;
    console.time("perfomance");
    while (counter < 100000) {
       (" JavaScript;")
        counter++;
        
    }
console.timeEnd("performance");

let regExp = /john@gmail\.com/;
let result = regExp.exec("Email: john@gmail.com");
console.log(result[0]);
console.log(result.index);
console.log(result.input);