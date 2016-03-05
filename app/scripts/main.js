console.log('\'Allo \'Allo!');
// var test = function(){
//   console.log('hello test');
//   var foo = function(){
//     console.log();
//   }
//   return foo;
// }

// function TEST(){

// }

// TEST.prototype.name = 'TEST';

// TEST.prototype.show = function(){
//   console.log('show');
// }

// TEST.prototype.hide = function(){
//   console.log('hide');
// }

// var test1 = new TEST();
// console.log(test1.name);

// var test2 = new TEST();
// test2.name = "xiaobai";
// console.log(test2.name);

// var test1 = {}；
// test1.__proto__ = TEST.prototype;
// TEST.call(test1);

function Test1(){
  this.name = 'TEST1';
};

Test1.prototype.name = 'TEST1';
Test1.prototype.show = function(){
  console.log(this.name);
};

function Test2(){
  this.name = 'hello';
};

Test2.prototype.hide = function(){
  console.log('hide');
};

Test2.prototype = new Test1();

var test = new Test2();
console.log(test.show());









