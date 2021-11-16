import mongoose, { mongo } from "mongoose";

mongoose.connect(
  "mongodb+srv://webUser:webUser@cluster0.ubhcy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  name: { type: String },
});

export const User = mongoose.model("User", UserSchema);
