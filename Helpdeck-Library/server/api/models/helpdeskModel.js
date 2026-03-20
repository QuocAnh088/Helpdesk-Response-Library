const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const helpdeskSchema = new Schema(
    {
        Code: {
            type: String,
            required: 'Key cannot be empty'
        },
        Action: {
            type: String,
            required: 'Value cannot be empty'
        },
        Description: {
            type: String
        }
    });

module.exports = mongoose.model('helpdesk', helpdeskSchema);