import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    owner: { type: String },
    details: { type: String, required: true }
}, { collection: 'products' });

export default mongoose.model('Post', ProductSchema);