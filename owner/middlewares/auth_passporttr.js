const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const Owner = require("../models/Owner");
const opts = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: process.env.SECRET_KEY,
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const owner = await Owner.findOne({ _id: jwt_payload.id }).select(
        "-password"
      );
      owner ? done(null, owner) : done(null, false);
    } catch (error) {
      console.log(error);
    }
  })
);

module.exports = isAuthOwner = () =>
  passport.authenticate("jwt", { session: false });
