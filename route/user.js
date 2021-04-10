// express
const express = require("express");
const router = express.Router();
const { signup, signin } = require("../user/controlers/user");
const isAuth = require("../user/middlewares/auth_jwt");
const {
  registerValidation,
  validation,
  signinValidation,
} = require("../user/middlewares/user");

//signup
router.post("/signup", registerValidation(), validation, signup);

//signin
router.post("/signin", signinValidation(), validation, signin);
//current
router.get("/current", isAuth, (req, res) => {
  res.send(req.user);
});

// export
module.exports = router;
