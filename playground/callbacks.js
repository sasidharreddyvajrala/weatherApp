var getUser=(id,callback)=>{

    var user={
        id:id,
        name:"sasi"
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(33,(userObj)=>{
    console.log(userObj);
})