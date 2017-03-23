const {get} = require('http');

get('http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters={"Normalized":false,"NumberOfDays":365,"DataPeriod":"Day","Elements":[{"Symbol":"AAPL","Type":"price","Params":["c"]}]}', (res) => {
  const statusCode = res.statusCode;
  const contentType = res.headers['content-type'];

  let error;
  if (statusCode !== 200){
    error = newError(`Request failed.\n` + `Status Code: ${statusCode}`);
  } else if (!/^application\/json/.test(contentType)){
    error = new Error(`Request Failed.\n`)
  }
})
