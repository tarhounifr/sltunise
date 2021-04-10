const { validationResult, check } = require("express-validator");

exports.registerValidation = () => [
  check("identifiant", "identifiant obligatoire").not().isEmpty(),
  check("adress", "adress obligatoire").not().isEmpty(),
  check("phone", "entrer num de telephone correct ").isMobilePhone(),

  check("password", "entrer mot de passe correct").isLength({ min: 6 }),
];
exports.signinValidation = () => [
  check("phone", "entrer num de telephone correct ").not().isEmpty(),
  check("phone", "entrer num de telephone correct ").isMobilePhone(),

  check("password", "entrer mot de passe correct").isLength({ min: 6 }),
];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
