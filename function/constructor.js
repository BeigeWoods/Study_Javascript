console.log("========== Constructor ==========");
// Constructor Function
console.log("-----< Constructor Function >-----");
function Foo(...args) {
  if (this !== window) this.args = args;
  else return args;
}

Foo.prototype.getArgs = function () {
  return this.args;
};

const foo = new Foo(1, 2);
console.dir(Foo);

console.log("1. prototype");
console.log("> property of foo");
for (let prop in foo) {
  console.log(prop);
}
console.log("> own property of foo");
for (let prop in foo) {
  if (foo.hasOwnProperty(prop)) console.log(prop);
}

console.log("2. caller & arguments");
console.log(Foo.arguments);

console.log("3. without `new`");
console.log(Foo());

// Class
console.log("-----< Class >-----");
class Bar {
  constructor(...args) {
    if (this !== window) this.args = args;
    else return args;
  }
  getArgs() {
    return this.args;
  }
}

const bar = new Bar(3, 4);
console.dir(Bar);

console.log("1. prototype");
console.log("> property of bar");
for (let prop in bar) {
  console.log(prop);
}
Bar.prototype.bye = "bye";
console.log("> property of bar when use prototype");
for (let prop in bar) {
  console.log(prop);
}
console.log("> own property of bar");
for (let prop in bar) {
  if (bar.hasOwnProperty(prop)) console.log(prop);
}

console.log("2. caller & arguments");
try {
  Bar.arguments;
} catch (error) {
  console.error(error);
}

console.log("3. without `new`");
try {
  Bar();
} catch (error) {
  console.error(error);
}
