console.log("hello world");

let myString: string = "hello world";
myString = 22 + "";

let myNumber: number = 22;
let myBool: boolean = true || false;

let myVar: any = "Hello";
myVar = false;

//arrays

let StringArray: string[] = ["item1", "items2", ""];
let NumberArray: number[] = [1, 2, 3, 4];
let BooleanArray: boolean[] = [true, false, true];
let AnyArray: any[] = [1, 2, true, "hello", [], {}];

//tuple
let strNumTuple: [string, number];
strNumTuple = ["Hello", 22];
strNumTuple = ["world", 245];

//strings
document.write(typeof AnyArray);

//void , undefined , null
let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;

//function
function getSum(num1: number, num2: number): number {
  return num1 + num2;
}

let mySum = function (num1: number | string, num2: number | string): number {
  if (typeof num1 === "string") {
    num1 = parseInt(num1);
  }
  if (typeof num2 === "string") {
    num2 = parseInt(num2);
  }
  return num1 + num2;
};

function getName(firstName: string, lastName?: string): string {
  if (lastName == undefined) {
    return firstName;
  }
  return `${firstName} ${lastName}`;
}

getName("ellis");

document.write(getName("crisanto"), "asimov");
