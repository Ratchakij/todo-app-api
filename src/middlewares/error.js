import chalk from "chalk";

export default (err, req, res, next) => {
  console.log(err);

  let statusCode;

  if ((err.name = "ValidationError")) {
    statusCode = 400;
  }

  res.status(statusCode ?? 500).json({ message: err.message });
};
