console.log('Starting app');

setTimeout(() => {
    console.log('Iside a call function');
}, 2000);

setTimeout(()=>{
    console.log('this is second function');
},0)

console.log('Finishing app');