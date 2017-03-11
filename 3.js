var person = {
  firstname:'Tzu-Hua',
  lastname:'Wang',
  greet:function(){
    console.log(`Hello,${this.firstname}${this.lastname}`);
  }
};
person.greet();
console.log(person['firstname']);

let name, phone;
let info = {
  name: name,
  phone: phone,
  printInfo: function(){
    console.log(`Nme: ${this.name}, Phone: ${this.phone}`);
  }
}
info.name = "ntue";
info.phone = "2732-1104";
info.printInfo();

let name, phone;
let info = {
  name,
  phone,
  printInfo(){
    console.log(`Nme: ${this.name}, Phone: ${this.phone}`);
  }
}
info.name = "ntue";
info.phone = "2732-1104";
info.printInfo();
