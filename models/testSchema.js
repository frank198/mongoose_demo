/**
 * Created by frank on 16-5-21.
 */
'use strict';

let mongoose = require('mongoose');
let schema = mongoose.Schema;

class testSchema
{
    constructor()
    {
        let child = new Schema({ name: String });
        let schema = new Schema(
            {
                name: String,
                age: Number,
                children: [child]
            },
            { _id: false, autoIndex: false }
        );

        schema.method.MethodTest = function()
        {
            console.info('this is a  methodTest');
        }

        schema.static.staticTest = function()
        {
            return 'test';
        }

        


        this.dbSchema = mongoose.model('Tree', schema);
    }
}