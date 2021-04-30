const fs = require('fs');


const max = 5703;

let frame = 1;

setInterval(function() {
    console.clear()
    
    
    fs.readFile( __dirname + `/res/BA${frame}.txt`, function (err, data) {
      if (err) {
        throw err; 
      }
      console.log(data.toString());
    });
    
    frame++;
    
    if (frame >= max) frame = 1;
    
}, 33.33);