const person={
  name: "noor",
  walk (){
     console.log(this);
  }
};

person.walk();

const walk = person.walk;
walk();

