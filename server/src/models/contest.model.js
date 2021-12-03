const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let contestSchema = new Schema(
    {
        title: { type: String },
        type: { type: String },
        deadLine: { type: String},
        tags: { type: String },
        time: { type: String },
    },
    { timestamps: true }
);

let Contest = mongoose.model("contests", contestSchema);

module.exports = Contest;
