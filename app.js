
const yargs= require('yargs');
const geocode=require('./geocode/geocode');
const weather=require('./weather/weather');
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

   geocode.geocodeAddress(argv.a,(errorMessage, results)=>{
       
     if(errorMessage){
      console.log(errorMessage);
    }else{
      console.log(`${results.street} ${results.city} ${results.state} ${results.country} ${results.postalCode}`);
       
        weather.getWeather(results.latitude,results.longitude,(errorMeassage,weatherResults)=>{

        if(errorMeassage){
          console.log(errorMeassage);
        }else{
          console.log(`It's currently ${weatherResults.temperature}. It's feels like ${weatherResults.apparentTemperature}`);
        }
        });
     }
   });

  

