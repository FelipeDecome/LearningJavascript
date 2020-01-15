const mongoose = require('mongoose');

const DevSchema = new moongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
})

module.exports = moongoose.model('Dev', DevSchema);
