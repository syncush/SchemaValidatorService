const { validateMultipleSchema } = require('./controller');

module.exports = (req, res) => {
  const {
    // eslint-disable-next-line object-curly-newline
    body: { schema, payload, schemas, options },
  } = req;
  validateMultipleSchema(schema, payload, schemas, options)
    .then(() => res.status(200).send({ errors: [] }))
    .catch((errs) => res.status(200).send({ errors: errs }));
};
