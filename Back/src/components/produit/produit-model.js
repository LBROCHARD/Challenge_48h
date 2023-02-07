import mongoose from "mongoose";

const { Schema } = mongoose;

const produitSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    username: {
        type: Schema.Types.String,
        required: true,
        ref: "User",
    },
}, {
    timestamps: true,
});

produitSchema.static({
    findByUserId(userId) {
        return this.find({ user: userId });
    },
    verifyUserId(userId, produitId) {
        return this.findOne({ user: userId, _id: produitId });
    },
});

const Produit = mongoose.model("Produit", produitSchema);

export default Produit;