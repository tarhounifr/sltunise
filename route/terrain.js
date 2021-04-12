const express = require("express");
const router = express.Router();
const {
  createTerrain,
  getAlls,
  deletOne,
  updateOne,
} = require("../owner/controlers/terrain");
const isAuthOwner = require("../owner/middlewares/auth_jwtter");

//createTerrain
router.post("/", isAuthOwner, createTerrain, (req, res) => {
  const newterrain = { ...req.body, owner: req.owner._id };

  res.send(newterrain);
});

/**
 * @description:get all terrains
 * @path : http://localhost:8000/api/owner/terrain/:id
 * @method:GET
 * @data : no data
 * */
router.get("/:id", getAlls);
//router.get("/getAlls", getAlls);
// delete one
router.delete("/:_id", deletOne);
// update one
router.put("/:id", updateOne);
// export
module.exports = router;
