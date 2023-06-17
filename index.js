// var x = "Hello";
// var y = " ayush ";
// var a= "saini";
// var z = x+y+a+" Shaab";
// var z = "Welcome"+" My Website";
// alert(z);
// airthmetic operators
// var a = 20;
// var b = 30;
// var c = a+b;
// var c = a*b;
// alert(c);
// function msg(){
//     confirm("Are You Ready To SignUp This Page")
// }
// function msg1(){
//     confirm("Are You Ready To Login This Page")
// }

// function allow(){
//     // var a = 10;
//     window.a = 10;
//     document.write(window.a);
    
// }
  
// allow();
// document.write('<br>');
// document.write(a);

// var car = ["Ayush","Akash", "Ankur"];
// document.write(car[1]);

// variable obj =>

// var person = {
//     firstname:"ayush",
//     lastname:"saini",
//     age:22,
//     fname:"sanjay"


// };
// document.write(" firstname " + person.firstname + " lastname " +  person.lastname + " with age" + person.age);

// function greet(){
//     var name = document.getElementById('name').value;
//     var string = "hello" + name;
//     document.getElementsByClassName('greet')[0].innerHTML = string;
// }

// Calculater----------------

function cal(){
     var opr1 = document.getElementById('first').value;
     var opr2 = document.getElementById('second').value;
     var ope = document.getElementById('ope').value;
    if (ope == '+'){
        var res = parseInt(opr1) + parseInt(opr2);
    }
    if (ope == '-'){
    var res = parseInt(opr1) - parseInt(opr2);
    }
    if (ope == '*'){
        var res = parseInt(opr1) * parseInt(opr2);
    }
    if (ope == '/'){
        var res = parseInt(opr1) / parseInt(opr2);
    }
    if (ope == '%'){
        var res = parseInt(opr1) % parseInt(opr2);
    }
    document.getElementById('res').value = res;
}