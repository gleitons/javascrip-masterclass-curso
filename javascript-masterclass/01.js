const statement = "create table author (id number, name string, age nuber, citu string, state string, countru string)"
const regExp = /create table ([a-z]+) \((.+)\)/;
const parsedStatement = statement.match(regExp);
const tableName = parsedStatement[1]
let columns = parsedStatement[2];
columns = columns.split(", ")
console.log(parsedStatement)
console.log(statement); 