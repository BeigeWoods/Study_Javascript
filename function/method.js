console.log("========== Method ==========");

const obj1 = {
  name: "A",
  method: function () {
    console.log(this.name);
  },
};

const obj2 = {
  name: "B",
  method() {
    console.log(this.name);
  },
};

console.dir(obj1.method);
console.dir(obj2.method);

console.log("> check method is working");
obj1.method();
obj2.method();

console.log("> with `new`");
new obj1.method();
try {
  new obj2.method();
} catch (error) {
  console.error(error);
}
