import mongoose from "mongoose";

const { Schema } = mongoose;

const ApiSchema = new Schema({
    url: {
        type: String,
        required: true,
    }
   
}, {
    timestamps: true,
});
const Api = mongoose.model("Api", ApiSchema);

export default Api;