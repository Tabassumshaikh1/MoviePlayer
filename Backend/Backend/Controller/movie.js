const schema = require("../Model/movie_player");
async function Postvideo(req, res) {
  try {
    const data = new schema({
      ...req.body,
    });
    await data.save();
    res.send({ message: "Video added successfully" });
  } catch {
    res.send({ message: "Something went wrong" });
  }
}
async function Getvideo(req, res) {
  try {
    const data = await schema.find();
    res.send(data);
  } catch {
    res.send({ message: "Something went wrong" });
  }
}
async function GetvideoById(req, res) {
  try {
    const data = await schema.findById({ _id: req.body.id });
    res.send(data);
  } catch {
    res.send({ message: "Something went wrong" });
  }
}
async function DeleteVideoById(req, res) {
  try {
    await schema.findOneAndDelete({ _id: req.body.id });
    res.send({ message: "Video deleted successfully" });
  } catch {
    res.send({ message: "Something went wrong" });
  }
}
module.exports = {
  Postvideo,
  Getvideo,
  GetvideoById,
  DeleteVideoById,  
};
