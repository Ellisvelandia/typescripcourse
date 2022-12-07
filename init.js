console.log("hello world");
var myString = "hello world";
myString = 22 + "";
var myNumber = 22;
var myBool = true || false;
var myVar = "Hello";
myVar = false;
//arrays
var StringArray = ["item1", "items2", ""];
var NumberArray = [1, 2, 3, 4];
var BooleanArray = [true, false, true];
var AnyArray = [1, 2, true, "hello", [], {}];
//tuple
var strNumTuple;
strNumTuple = ["Hello", 22];
strNumTuple = ["world", 245];
//strings
document.write(typeof AnyArray);
//void , undefined , null
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
//function
function getSum(num1, num2) {
    return num1 + num2;
}
var mySum = function (num1, num2) {
    if (typeof num1 === "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 === "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return "".concat(firstName, " ").concat(lastName);
}
getName("ellis");
document.write(getName("crisanto"), "asimov");
function showTodo(todo) {
    console.log("".concat(todo.title, " - ").concat(todo.text));
}
var myTodo = { title: "Eat Dinner", text: "lorem" };
showTodo(myTodo);
