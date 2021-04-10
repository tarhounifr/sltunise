// express
const express = require("express");
const router = express.Router();
const { signup, signin } = require("../owner/controlers/owner");

const isAuthOwner = require("../owner/middlewares/auth_jwtter");

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
router.get("/current", isAuthOwner, (req, res) => {
  res.send(req.owner);
});

// export
module.exports = router;
