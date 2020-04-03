const otp = function(){
  const min = 1000
  const max = 9999
  const num = Math.floor(Math.random()*(max-min + 1)) + min
  return num.toString()
}
module.exports=otp
/*var rn = require('random-number');
var options = {
  min:  1000,
 max:  10000,
 integer: true,
 
}
rn(options)
module.exports=rn*/