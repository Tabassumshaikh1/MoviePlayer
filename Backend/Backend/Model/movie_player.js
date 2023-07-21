const mongoose = require("mongoose");
const VideoSchema = mongoose.Schema({
  thumbnail: {
    type: String,
    required: true,
  },
  video_url: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("VideoSchema", VideoSchema);
