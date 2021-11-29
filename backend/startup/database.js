const mongoose = require('mongoose');
const config = require('config');

function connnectDB(){
    mongoose
    .connect(config.get('MongoURI')),
    
}