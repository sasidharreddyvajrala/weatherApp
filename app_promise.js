
const yargs= require('yargs');
const axios=require('axios');

const argv=yargs
   .options({
     a:{
       demand:true,
       alias:'address',
       describe:'Adress to fetch the weather',
       string:true
     }
   })
   .help()
   .alias('help','h')
   .argv;

   const Address=encodeURIComponent(argv.address);
   const geocodeUrl=`https://www.mapquestapi.com/geocoding/v1/address?key=N7gMvpm0ZZk8mA4S5obQdAtvnzrnlhgq&location=${Address}`

   axios.get(geocodeUrl).then((response)=>{
     if(response.data.statuscode===400){
       throw new Error('Unable to Find a Place');
     }
     const lat=response.data.results[0].locations[0].latLng.lat;
     const long=response.data.results[0].locations[0].latLng.lng;
     const weatherUrl=`https://api.darksky.net/forecast/235c4165489ba9eacf9049d2485ba334/${lat},${long}`;
     return axios.get(weatherUrl).then((response)=>{
       var temperature=response.data.currently.temperature;
       var tempinc=(temp)=>((temp)-32)*(5/9);
       var apparentTemperature=response.data.currently.apparentTemperature;
      console.log(`It is ${temperature} F or ${Math.round(tempinc(temperature))} C outside and it feels like ${apparentTemperature} F or ${Math.round(tempinc(temperature))}`);
     });
   }).catch((e)=>{
     if(e.code==="ENOTFOUND"){
       console.log('Unable to connect API call.');
     }else{
       console.log(e.message);
     }
   });

  

