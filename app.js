/**
 * Created by frank on 16-5-24.
 */

'use strict';

let config = require('./config/config.json').mongodbConfig;
let mongoose = require('mongoose');
let schema =  require('./models/testSchema').dbSchema;
let datas = require('./config/mongodbData');


/**
mongoose.connect(config.url);



new model();
let schema = mongoose.model('mongodbDemo');
let data = require('./config/mongodbData')[0];
schema.create(data,function(err,result)
{
    console.info(`result:${result},error:${err}`);
});
**/


mongoose.connect(config.url)
    .then(onFulfilled,onRejected)
    .catch(onRejected);


function onFulfilled()
{
    console.info("connect fulfilled");

    for(let data of datas)
    {
        console.info(`data:${JSON.stringify(data)}`);
        schema.create(data)
            .then((createResult)=>{
                console.info(`createResult:${JSON.stringify(createResult)}`);
            })
            .catch((error)=>{
                console.info(`error:${JSON.stringify(error)}`);
            });
    }

}
function onRejected(error)
{
    console.info(`connect failed error:${error}`);
}