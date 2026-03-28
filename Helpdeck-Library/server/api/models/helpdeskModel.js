const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const helpdeskSchema = new Schema(
    {
        code: {
            type: String,
            required: 'Key cannot be empty'
        },
        action: {
            type: String,
            required: 'Value cannot be empty'
        },
        description: {
            type: String
        }
    });

module.exports = mongoose.model('helpdesk', helpdeskSchema);