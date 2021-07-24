const mongoose = require('../mongoose');

const config = {
  org: {
    type: String,
  },
  issuer: {
    type: String,
  },
  entryPoint: {
    type: String,
  },
  protocol: {
    type: String,
  },
  cert: {
    type: String,
  },
};

const { Schema } = mongoose;
const orgSchema = new Schema(config, { timestamps: true });

const Organization = mongoose.model('Organization', orgSchema, 'organization');

module.exports = Organization;
