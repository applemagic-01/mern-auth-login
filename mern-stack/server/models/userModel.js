import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verifyOtp: { type: String, default: "" },
    verifyOtpExpireAt: { type: Number, default: 0 },
    isAccountVerified: { type: Boolean, default: false },
    resetOtp: { type: String, default: "" },
    resetOtpExpireAt: { type: Number, default: 0 },
});

let userModel;

try {
    // Try to get the existing model
    userModel = mongoose.model("user");
} catch (e) {
    // If the model doesn't exist, create it
    userModel = mongoose.model("user", userSchema);
}

export default userModel;