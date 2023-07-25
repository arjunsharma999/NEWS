const mongoose  = require("mongoose");

const userDetailsSchema = new mongoose.Schema(
    {
        fname: String,
        lname: String,
        email: String,
        password: {type :String, unique: true},
    },
    {
        colletion:"UserInfo",
    }
);

mongoose.model("UserInfo", userDetailsSchema);

