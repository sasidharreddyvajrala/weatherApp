const asyncAdd=(a,b)=>{

return new Promise((resolve,reject)=>{

    setTimeout(()=>{
      
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        }else{
            reject('Arguments must be numbers');
        }
    });
});
}

asyncAdd(445,666).then((data)=>{
    console.log('Sum: ', data)
    return asyncAdd(data,4);
}).then((data)=>{
    console.log('New Sum: ',data)
}).catch((errorMessage)=>{
    console.log(errorMessage);
});





const promise=new Promise((resolve,reject)=>{
setTimeout(()=>{
    //resolve('Hey. it worked!');
    reject("It didn't work");
},2500)
})

promise.then((message)=>{
    console.log('Success: ', message);
},(errorMessage)=>{
    console.log('Error : ', errorMessage);
})