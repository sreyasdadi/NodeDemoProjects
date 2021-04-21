const fs = require('fs');
const path= require('path');
const prompt=require('prompt');
prompt.start();


prompt.get(['filename'], function (err, result) {
    if(err){onErr(err);}
    if(fs.existsSync(path)){
        fileExists();
    }
    fs.appendFileSync('app.txt', result.filename+"  ");
    fs.writeFileSync(result.filename,'You are Awesome');
});

function onErr(err) {
    console.log(err);

    return 1;
}
function fileExists() {
    console.log('File already exists');
    return 1;
}