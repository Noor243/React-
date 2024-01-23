// use of arrow functions

// const square = function (number) {
//   return number * number;
// };  old js


const square = number => number * number;
 console.log(square(5));


// in new js use arrow function 

// both codes have same result

// one more example

// const jobs =[
//   {id: 1, isactive: true},
//   {id: 1, isactive: true},
//   {id: 1, isactive: false},
 
// ];

// const activejobs = jobs.filter(function(job){return job.isActive;});

// const activejobs = jobs.filter(job =>  job.isActive);



