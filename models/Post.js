const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    content: {
        type: String,
        required: true
    },
    likeCount: {
        type: String,
        required: true
    },
    replyCount: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('post', PostSchema);