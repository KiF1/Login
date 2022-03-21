const jwt = require('jsonwebtoken')

// module.exports = function (req,res,next){
//     const token = req.header('authorization-token');
//     if(!token) return res.status(401).send('acess Denied')
//   try {
//       const userVerified = jwt.verify(token, process.env.TOKEN_SECRET);
//   req.user = userVerified;
// next()
// } catch (error) {
//       res.status(401).send('Acess Denied')
//   }
// }

module.exports.verifyLog = (req, res, next) => {
  try {
      const token = JSON.parse(req.cookies.secureCookie)
      req.user = jwt.verify(token, process.env.TOKEN_SECRET)
      next()
  } catch (error) {
      res.redirect('/')
  }
}