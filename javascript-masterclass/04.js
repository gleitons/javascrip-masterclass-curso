const functionalLanguage = {
    paradigm: "functional"
};

const scheme = {
    name: "Scheme",
    year: 1975,
    //__proto__: functionalLanguage
};
Object.setPrototypeOf(scheme, functionalLanguage)

const JavaScript = {
    name: "Javascript",
    year: 1995,    
    //__proto__: functionalLanguage
};
Object.setPrototypeOf(JavaScript, functionalLanguage)
x

console.log(functionalLanguage)
console.log(scheme.paradigm);
console.log(JavaScript.paradigm)

for (const key in scheme) {
    console.log(key, scheme.hasOwnProperty(key))
}