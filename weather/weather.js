
const request = require('request');
debugger;
const getWeather=(lat,long,callback)=>{
  request({
   url:`https://api.darksky.net/forecast/235c4165489ba9eacf9049d2485ba334/${lat},${long}`,
        json:true
      },(error,response,body)=>{
          if(error){
              callback("Unable to connect to forecast.io");
          }else if (response.statusCode===200){
            callback(undefined,{
                temperature:body.currently.temperature,
                apparentTemperature:body.currently.apparentTemperature
            });
        };
    });
};

module.exports.getWeather=getWeather;