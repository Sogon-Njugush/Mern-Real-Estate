import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        dafault: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    }

}, {timestamps: true}

);



const User = mongoose.model('User', UserSchema);


export default User;