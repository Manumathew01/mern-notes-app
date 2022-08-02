//get notes || GET /api/notes/
const getNotes = (req, res) => {
  res.status(200).json({ text: "Get a note...", date: Date.now() });
};

//post note || POST /api/notes/
const setNote = (req, res) => {
  console.log(req.body);
  res.status(200).json({ text: "Take a note...", date: Date.now() });
};

//update note || PUT /api/notes/:id
const updateNote = (req, res) => {
  res
    .status(200)
    .json({ text: `Updated note ${req.params.id}`, date: Date.now() });
};

//delete note || DELETE /api/notes/:id
const deleteNote = (req, res) => {
  res
    .status(200)
    .json({ text: `Deleted note ${req.params.id}`, date: Date.now() });
};

module.exports = {
  getNotes,
  setNote,
  updateNote,
  deleteNote,
};
