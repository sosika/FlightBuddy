const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planeSchema = new Schema({
  tail: {type: String, required: true},
  event_start_datetime: { type: Date, required: true  },
  event_end_datetime: { type: Date, required: true },
  record_id: { type: Number, required: true },
  device: {type: Boolean, required: false },
  metric_source: { type: Schema.Types.Mixed, required: true }, //look at object 
  metric_data_type: { type: Schema.Types.Mixed, required: true}, //look at object
  table_insert_datetime: { type: Date, required: true },
  partition_date: { type: Date, required: true }
});

const Plane = mongoose.model("Plane", planeSchema);

module.exports = Plane;
