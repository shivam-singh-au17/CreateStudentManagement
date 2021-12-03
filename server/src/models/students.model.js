const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let studentSchema = new Schema(
  {
    name: { type: String },
    city: { type: String },
    age: { type: Number },
    education: { type: String },
    gender: { type: String },
    contact: { type: Number },
  },
  { timestamps: true }
);

let Student = mongoose.model("students", studentSchema);

module.exports = Student;
