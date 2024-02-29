while (true) {
    let value = 15;

    if (typeof(value) != "number") {
        print("This is not a number, please try again...");
        continue;
    }
    else {
        if (value % 3 == 0 && value % 5 == 0) {
            console.log("FizzBuzz");
            break;
        }
        else if (value % 3 == 0) {
            console.log("Fizz");
            break;
        }
        else if (value % 5 == 0) {
            console.log("Buzz");
            break;
        }
        else {
            console.log("NoFizzBuzz");
            break;
        }
    }
}
