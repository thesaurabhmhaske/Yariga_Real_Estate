import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, requried: true},
    email: { type: String, requried: true},
    avatar: { type: String, requried: true},
    allProperties: [{ type: mongoose.Schema.Types.ObjectId, ref:'Property'}],
})

const userModel = mongoose.model('User', userSchema);

export default userModel;