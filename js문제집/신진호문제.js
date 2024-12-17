//⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢠⣴⣾⣿⣶⣶⣆⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀
//⢀⢀⢀⣀⢀⣤⢀⢀⡀⢀⣿⣿⣿⣿⣷⣿⣿⡇⢀⢀⢀⢀⣤⣀⢀⢀⢀⢀⢀
//⢀⢀ ⣶⢻⣧⣿⣿⠇ ⢸⣿⣿⣿⣷⣿⣿⣿⣷⢀⢀⢀⣾⡟⣿⡷⢀⢀⢀⢀
//⢀⢀⠈⠳⣿⣾⣿⣿⢀⠈⢿⣿⣿⣷⣿⣿⣿⣿⢀⢀⢀⣿⣿⣿⠇⢀⢀⢀⢀
//⢀⢀⢀⢀⢿⣿⣿⣿⣤⡶⠺⣿⣿⣿⣷⣿⣿⣿⢄⣤⣼⣿⣿⡏⢀⢀⢀⢀⢀
//⢀⢀⢀⢀⣼⣿⣿⣿⠟⢀⢀⠹⣿⣿⣿⣷⣿⣿⣎⠙⢿⣿⣿⣷⣤⣀⡀⢀⢀
//⢀⢀⢀ ⢸⣿⣿⣿⡿⢀⢀⣤⣿⣿⣿⣷⣿⣿⣿⣄⠈⢿⣿⣿⣷⣿⣿⣷⡀⢀
//⢀⢀⢀⣿⣿⣿⣿⣷⣀⣀⣠⣿⣿⣿⣿⣷⣿⣷⣿⣿⣷⣾⣿⣿⣿⣷⣿⣿⣿⣆
//⣿⣿⠛⠋⠉⠉⢻⣿⣿⣿⣿⡇⡀⠘⣿⣿⣿⣷⣿⣿⣿⠛⠻⢿⣿⣿⣿⣿⣷⣦
//⣿⣿⣧⡀⠿⠇⣰⣿⡟⠉⠉⢻⡆⠈⠟⠛⣿⣿⣿⣯⡉⢁⣀⣈⣉⣽⣿⣿⣿⣷
//⡿⠛⠛⠒⠚⠛⠉⢻⡇⠘⠃⢸⡇⢀⣤⣾⠋⢉⠻⠏⢹⠁⢤⡀⢉⡟⠉⡙⠏⣹
//⣿⣦⣶⣶⢀⣿⣿⣿⣷⣿⣿⣿⡇⢀⣀⣹⣶⣿⣷⠾⠿⠶⡀⠰⠾⢷⣾⣷⣶⣿
//⣿⣿⣿⣿⣇⣿⣿⣿⣷⣿⣿⣿⣇⣰⣿⣿⣷⣿⣿⣷⣤⣴⣶⣶⣦⣼⣿⣿⣿⣷

//////////////////////////////////////////////////////////////////////////////
// 1번
// 어떻게 출력될까요?
var a = 1;

function test() {
    var a = 2;
    if (true) {
        var a = 3;
        console.log("1:", a);
    }
    console.log("2:", a);
}

console.log("3:", a);
test();
console.log("4:", a);

///////////////////////////////////////////////////////////////////////////////
// 2번
// 어떻게 출력될까요?
let x = 5;

function scopeTest() {
    let x = 10;

    if (true) {
        let x = 20;
        console.log("1:", x);
    }
    console.log("2:", x);
}

scopeTest();
console.log("3:", x);

///////////////////////////////////////////////////////////////////////////////////////
//3번
// 어떻게 출력될까요?
var y = 10;

function first() {
    y = 20;
    console.log("1:", y);
}

function second() {
    var y = 30;
    console.log("2:", y);
}

console.log("3:", y);
first();
second();
console.log("4:", y);


/////////////////////////////////////////////////////////////////////////////////////////
//4번
// 어떻게 출력될까요?
let globalVar = "Global";

function outerFunction() {
    let outerVar = "Outer";

    function callback() {
        console.log("1:", globalVar);
        console.log("2:", outerVar);
    }

    if (true) {
        let outerVar = "New Outer";
        callback();
    }
}

outerFunction();

////////////////////////////////////////////////////////////////////////////////////////
// 5번
// 어떻게 출력될까요?
function hoistExample() {
    console.log("1:", a);
    var a = 10;
    console.log("2:", a);

    if (true) {
        var a = 20;
        console.log("3:", a);
    }
    console.log("4:", a);
}

hoistExample();
////////////////////////////////////////////////////////////////////////////////////////////