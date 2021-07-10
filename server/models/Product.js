import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    owner: { type: String, required: true },
    details: { type: String, required: true },
    offers: {type:[Number], default: []}
}, { collection: 'products' });

export default mongoose.model('Product', ProductSchema);