
const marks = [80, 85, 90, 92, 65];
// find function
// const result = marks.find(mark => mark >=90);   // 90
// console.log(result);

// findIndex function
// const result = marks.findIndex(mark => mark >=90); // 2
// console.log(result);

// every function
// const result = marks.every(mark => mark >=70);  // false
// const result = marks.every(mark => mark >=30); // true
// console.log(result);

// some function
// const result = marks.some(mark => mark >=90); // ture
// console.log(result);

// filter function
// const result = marks.filter(mark => mark >=90); //2) [90, 92]
// console.log(result);

// reduce function
const result = marks.reduce((sum, mark) => {
    return sum+=mark;
}); 
console.log(result, 0);



