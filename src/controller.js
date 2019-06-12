const Ajv = require('ajv');

module.exports = {
  validateMultipleSchema: (schema, payload, schemas = [], options = {}) => {
    const ajvInstance = new Ajv(options);
    schemas.forEach(({ name, value }) => {
      ajvInstance.addSchema(value, name);
    });
    const validator = ajvInstance.compile(schema);
    const isValid = validator(payload);
    if (!isValid) {
      return Promise.reject(validator.errors);
    }
    return Promise.resolve();
  },
};
