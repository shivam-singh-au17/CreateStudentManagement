const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let loginSchema = new Schema(
    {
        userUserEmail: { type: String },
        userPassword: { type: String },
    },
    { timestamps: true }
);

let Login = mongoose.model("loginData", loginSchema);

module.exports = Login;
