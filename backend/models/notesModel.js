const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  { text: { type: String, required: [true, "Please add some text"] } },
  { timestamps: true }
);

module.exports = mongoose.model("notes", noteSchema)
