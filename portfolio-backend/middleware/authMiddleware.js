const jwt = require('jsonwebtoken');

exports.authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  jwt.verify(token, 'alim', (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Token is not valid' });
    req.user = decoded;
    next();
  });
};
