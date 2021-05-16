const Joi = require('joi');

require('dotenv').config();

const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow('dev', 'production', 'qa', 'uat')
    .default('dev'),
  LOG_PREFIX: Joi.string().required(),
}).unknown().required();

const { error, value: envVars } = envVarsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const {
  LOG_PREFIX,
} = envVars;

const config = {
  logPrefix: LOG_PREFIX,
};

module.exports = config;
