//Given a time in 12-hour AM/PM format, convert it to military (24-hour) time. 

function timeConversion(time) {
    var PM = time.match('PM') //? true:false
    var AM = time.match('AM') //? true:false
    //.match searches a string for a match against a regular expression and return the matches as an array object
    time = time.split(':')
    //split a string into an array of substrings; return new array
    //[hr:min:secPM] or [hr:min:secAM]
    var hr = time[0]
    var min = time[1]
    var sec = time[2]
      
if (PM && hr == 12) {
        hr = time[0]
        sec = time[2].replace('PM', '')
    } //if its 12PM
    else if (PM) {
         hr = 12 + parseInt(time[0], 10)
         sec = time[2].replace('PM', '')
    } else if (AM && hr == 12) {
         hr = '12 - parseInt(time[0], 10) + '0''
         //OR manually reset hr = '00'
        sec = time [2].replace('AM', '')
     }//if its 12AM
      else {
           hr = time [0] 
        sec = time [2].replace('AM', '')
    }
  
  return hr + ':' + min + ':' + sec
}

