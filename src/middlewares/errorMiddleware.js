const errorHandler = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
      return res.status(400).send({
          error: 'ValidationError',
          message: err.message
      });
  }

  if (err.code && err.code === 11000) {
      return res.status(400).send({
          error: 'DuplicateKeyError',
          message: 'The provided telegramId is already registered.'
      });
  }

  if (err.status === 404) {
    console.error(err);
    return res.status(404).send({
        error: 'NotFoundError',
        message: err.message
    });
}

  res.status(500).send({
      error: 'InternalServerError',
      message: 'An unexpected error occurred.'
  }, console.error(err));
};

module.exports = errorHandler;
