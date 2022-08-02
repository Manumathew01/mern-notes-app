const asyncHandler = require("express-async-handler");
const Notes = require("../models/notesModel");

//get notes || GET /api/notes/
const getNotes = asyncHandler(async (req, res) => {
  const goals = await Notes.find();
  res.status(200).json(goals);
});

//post note || POST /api/notes/
const setNote = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Add a note");
  }

  const note = await Notes.create({
    text: req.body.text,
  });

  res.status(200).json(note);
});

//update note || PUT /api/notes/:id
const updateNote = asyncHandler(async (req, res) => {
  const note = await Notes.findById(req.params.id);

  if (!note) {
    res.status(400);
    throw new Error("Note not found");
  }

  const updatedNote = await Notes.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedNote);
});

//delete note || DELETE /api/notes/:id
const deleteNote = asyncHandler(async (req, res) => {
  const note = await Notes.findById(req.params.id);

  if (!note) {
    res.status(400);
    throw new Error("Note not found");
  }

  await note.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getNotes,
  setNote,
  updateNote,
  deleteNote,
};
