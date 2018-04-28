const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planeSchema = new Schema({
  tail: {type: String, required: true},
  event_start_datetime: { type: Date, required: true  },
  metric_source: { type: String, required: true }, //look at object
  metric: { type: String, required: true }
});

const Plane = mongoose.model("flight", planeSchema);

module.exports = Plane;
