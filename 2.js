//callback function_1
function greet(callback){
  console.log('Hello!');
  var data = {
    name:'DTD NTUE'
  };
}

//callback function_2
greet(data => {
  console.log('The callback was invoked!');
  console.log(data);
});
