const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        desc: {
            type: String,
            required: true,
            unique: true,
        },
        photo: {
            type: String,
            required: false,
        },
        username: {
            type: String,
            required: true,
        },
        categoies: {
            type: Array,
            required: false,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("Post", PostSchema);
