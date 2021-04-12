const Owner = require("../models/Owner");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    //   req.body
    const { identifiant, gov, adress, phone, password } = req.body;

    // check if the email is not found in the database
    const FoundOwner = await Owner.findOne({ phone });

    if (FoundOwner) {
      res.status(400).send({
        errors: [{ msg: "Owner already exist phone should be unique" }],
      });
      return;
    }
    const newOwner = new Owner({ ...req.body });

    // hash the password
    const hashedpassword = bcrypt.hashSync(password, salt);
    newOwner.password = hashedpassword;
    // create a key using json webtoken
    const token = jwt.sign(
      {
        id: newOwner._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );

    //then we save it in the database
    await newOwner.save();
    res.status(200).send({ msg: "Owner saved succ", owner: newOwner, token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not save Owner" }] });
  }
};
exports.signin = async (req, res) => {
  try {
    // get the req.body
    const { phone, password } = req.body;
    // seach if the user exist
    const searchOwner = await Owner.findOne({ phone });

    // send an error if he didnt exist
    if (!searchOwner) {
      res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
      return;
    }

    // check if the send it password is equal to the current Password
    const hashedpass = searchOwner.password;
    const result = await bcrypt.compare(password, hashedpass);
    if (!result) {
      res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
      return;
    }
    // create a key using json webtoken
    const token = jwt.sign(
      {
        id: searchOwner._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );

    // send the details + a key
    res.status(200).send({ msg: "auth success", owner: searchOwner, token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not get the currentOwner" }] });
  }
};
exports.getAll = async (req, res) => {
  try {
    const listOwners = await Owner.find();
    res.status(200).send({ msg: "this is all contact...", listOwners });
  } catch (error) {
    res.status(400).send({ msg: "error get all contacts", error });
  }
};
