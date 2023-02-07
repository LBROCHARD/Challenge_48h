import mongoose from "mongoose";

const { Schema } = mongoose;

const commandeSchema = new Schema({
    
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    produit: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Produit",
},

}, {
    timestamps: true,
});

commandeSchema.static({
    findByUserId(userId) {
        return this.find({ user: userId });
    },
    verifyUserId(userId, produitId) {
        return this.findOne({ user: userId, _id: produitId });
    },
});

const Commande = mongoose.model("Commande", commandeSchema);

export default Commande;