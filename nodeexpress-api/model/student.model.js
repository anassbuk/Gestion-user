const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type:Number
    },
    range_school: {
        type:Number
    }
},
{
    collection: 'students'
}
);


module.exports = mongoose.model('StudentSchema', studentSchema)