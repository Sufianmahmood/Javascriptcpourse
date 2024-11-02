const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
     
     
      console.log('async task is completed');
      resolve()
     },1000);
});

promiseOne.then(function(){
    console.log("Promise Consumed");
    
});


new Promise(function(resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve()
  },1000)  

}).then(function () {
    console.log("async 2 resolved");
    
})

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function(){
    resolve({Charater: "superman", PlayedBy:"Henry Cavil", Comics:"DC"})
  }, 1000)
})
promiseThree.then(function(user) {
  console.log(user);
  
})

const PromiseFour = new Promise(function(resolve, reject){
setTimeout(function () {
  let error = false
  if (!error) {
         resolve({username:"Sufian", password:"123"})
  }else{
    reject('ERROR: Something went wrong')
  }
}, 1000)

})

PromiseFour.then((user) => {
  console.log(user);
  return username
}).then((username) => {
   console.log(username);
     
}).catch(function(error){
  console.log(error);
  
}).finally(() => console.log("the promise is either resolved or //jected"))


const PromiseFive = new Promise(function(resolve, reject){
  setTimeout(function () {
    let error = true
    if (!error) {
           resolve({username:"javscript", password:"123"})
    }else{
      reject('ERROR: Js went Wrong')
    }
  }, 1000)
})

async function consumePromiseFive() {
     try {
      const response  = await PromiseFive
      console.log(response);
      
     } catch (error) {
      console.log(error);
      
     }
}
consumePromiseFive()
async function  getAllUsers(){
  try {
    const response = await fetch('https://api.github.com/users/////Sufianmahmood')
    const data = await response.json()
    console.log(data);
    
  } catch (error) {
     console.log("E:", error);
     
  }
}
getAllUsers()


fetch('https://api.github.com/users/Sufianmahmood')
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data);
  
})
.catch((Error) => console.log(error))