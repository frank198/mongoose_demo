/**
 * Created by frank on 16-5-21.
 */
'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

class testSchema
{
    constructor()
    {
        let child = new Schema(
            {
                friendName: String,
                sex:
                {
                    type:String,
                    default:'男'
                },
                time:{
                    type:Date,
                    default:Date.now()
                }
            },
            { _id: false, autoIndex: false,versionKey:false });
        let schema = new Schema
            (
                {
                    name: String,
                    age: Number,
                    children: [child]
                },{versionKey:false}
            );

        schema.method.MethodTest = function()
        {
            console.info('this is a  methodTest');
        };

        schema.static.staticTest = function()
        {
            return 'test';
        };

        this.dbSchema = mongoose.model('mongodbDemo', schema);
    }
}

module.exports = new testSchema();