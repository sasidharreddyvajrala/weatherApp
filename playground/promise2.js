const request = require('request');

const geoCodeAddress=(address)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const Address=encodeURIComponent(address);
            request({
                    url:`https://www.mapquestapi.com/geocoding/v1/address?key=N7gMvpm0ZZk8mA4S5obQdAtvnzrnlhgq&location=${Address}`,
                    json:true},(error,response,body)=>{
                            if(error){
                                reject('Unable to reach server');
                            }else if(body.info.statuscode===400 || body.results[0].locations[0].street===0000){
                                reject('Unable to find place');
                            }else if(body.info.statuscode===0)
                            {
                                resolve({
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
                        },2000)
                    });
                };

geoCodeAddress('0000').then((location)=>{
    console.log(JSON.stringify(`${location.street} ${location.city} ${location.state} ${location.country}`,undefined,2));
},(error)=>{
    console.log(error);
})