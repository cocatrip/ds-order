const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  "orderId": {
    "type": "Number"
  },
  "owner": {
    "type": "String"
  },
  "dropship": {
    "type": "String"
  },
  "product": {
    "type": [
      "Mixed"
    ]
  },
  "completed": {
    "type": "Boolean"
  },
  "upload_date": {
    "type": "Date",
    "default": Date.now
  }
});

module.exports = Order = mongoose.model('order', OrderSchema);
