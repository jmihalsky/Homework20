const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
authors: {type: Array, required: true},
title: {type: String, required: true},
image: String,
link: String
});

const Books = mongoose.model("Books", bookSchema);

module.exports = Books;