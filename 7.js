//JSON
var personobj = {
  firstname:"Simon",
  fullname:"",
  age:37,
  married:true,
  hasOwnHair:null,
  chidren:[{
    firstname:"Erica"
  }, {
    firstname:"Isobel"
  }]
};
var personjson = JSON.stringify(personobj);
console.log(personobj);
console.log(personjson);
