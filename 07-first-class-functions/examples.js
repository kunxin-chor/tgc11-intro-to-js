let f = function(){
    console.log("hello world")
};

function h() {
    console.log("hello world");
}

// process will be a reference variable to a function
function processTwoNumbers(x, y, process) {
    return process(x, y);
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x -y;
}


console.log(processTwoNumbers(44, 42, subtract));