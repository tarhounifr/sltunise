const User = require("../models/User");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    //   req.body
    const { identifiant, gov, adress, phone, password } = req.body;

    // check if the phone is not found in the database
    const FoundUser = await User.findOne({ phone });

    if (FoundUser) {
      res.status(400).send({
        errors: [{ msg: "user already exist phone should be unique" }],
      });
      return;
    }
    const newUser = new User({ identifiant, gov, adress, phone, password });

    // hash the password
    const hashedpassword = bcrypt.hashSync(password, salt);
    newUser.password = hashedpassword;
    // create a key using json webtoken
    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );

    //then we save it in the database
    await newUser.save();
    res.status(200).send({ msg: "user saved succ", user: newUser, token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not save the user" }] });
  }
};
exports.signin = async (req, res) => {
  try {
    // get the req.body
    const { phone, password } = req.body;
    // seach if the user exist
    const searchUser = await User.findOne({ phone });

    // send an error if he didnt exist
    if (!searchUser) {
      res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
      return;
    }
    // check if the send it password is equal to the current Password
    const hashedpass = searchUser.password;
    const result = await bcrypt.compare(password, hashedpass);
    if (!result) {
      res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
      return;
    }
    // create a key using json webtoken
    const token = jwt.sign(
      {
        id: searchUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );

    // send the details + a key
    res.status(200).send({ msg: "auth success", user: searchUser, token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not get the currentUser" }] });
  }
};
