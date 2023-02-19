import { model, Schema } from 'mongoose';

export const Order = model('Order', new Schema({
  table: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
    default: 'WAITING',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  products: {
    required: true,
    type: [{
      category: {
        product: Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
      quantity: {
        tupe: Number,
        default: 1,
      }
    }]
  }
}));
