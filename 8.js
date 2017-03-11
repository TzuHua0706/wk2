//promise_1
let promise = new Promise((resolve, reject)=>{
  resolve();
});
promise.then(()=>{
  console.log('Work is finished!!');
});

//promise_2
let promise = new Promise((resolve, reject)=>{
  resolve();
});
promise
.then(()=>console.log('Work is finished!!'))
.then(()=>console.log('Again finshed!'));

//promise_3
let promise = new Promise((resolve, reject)=>{
  reject();
});
promise
.then(()=>console.log('Work is finished!!'))
.then(()=>console.log('Again finshed!'))
.catch(()=>console.log('uh oh!'));
