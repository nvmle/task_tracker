const tokenServise = require("../services/token.service");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    // формат токета "Bearer *значение токена*""
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const data = tokenServise.validateAccess(token);

    req.user = data;

    next();
  } catch (e) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
