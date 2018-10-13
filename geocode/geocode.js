const request = require('request');


const geocodeAddress=(address,callback)=>{

     const Address=encodeURIComponent(address);
    request({
            url:`https://www.mapquestapi.com/geocoding/v1/address?key=N7gMvpm0ZZk8mA4S5obQdAtvnzrnlhgq&location=${Address}`,
            json:true},(error,response,body)=>{
                    if(error){
                        callback('Unable to reach server');
                    }else if(body.info.statuscode===400){
                        callback('Unable to find place');
                    }else if(body.info.statuscode===0)
                    {
                        callback(undefined,{
                            street:body.results[0].locations[0].street,
                            city:body.results[0].locations[0].adminArea5,
                            state:body.results[0].locations[0].adminArea3,
                            country:body.results[0].locations[0].adminArea1,
                            postalCode:body.results[0].locations[0].postalCode,
                            latitude:body.results[0].locations[0].latLng.lat,
                            longitude:body.results[0].locations[0].latLng.lng
                        })
                    }
        });

};

module.exports={
    geocodeAddress
};

//235c4165489ba9eacf9049d2485ba334ß


