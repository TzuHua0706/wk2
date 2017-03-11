//bind
var person = {
	firstname: 'Tzu-Hua',
	lastname: 'Wang',
  getFullName: function(){
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
}
var logName = function(){
  console.log('logged: ' + this.getFullName());
}
var logPersonName = logName.bind(person);
logPersonName();

//BIND IN CALLBACK
let greet = function(fn) {
  fn();
};
let person = {
  name: 'Tzu-Hua Wang',
  hello: function(){
    console.log(`Hello ${this.name}`);
  },
  sayHello: function(){
    //greet(this.hello);
    greet(this.hello.bind(this));
  }
};
person.sayHello();
let newPerson = {
  name:'Tzu-Hua Wang',
  sayHello:function(){
    greet(
      () => console.log(`Hello ${this.name}`)
    );
  }
};
newPerson.sayHello();
