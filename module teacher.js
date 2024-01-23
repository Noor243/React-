import { person} from "./module person";

// export function promote(){}

export default  class teacher extends person {
  constructor(name,degree){
    super(name);
    this.degree=degree;
  }
  teach() {
    console.log("teach");
  }
}


const teacher = new teacher ('noor', "bscs");