const Terrain = require("../models/Terrain");

/**
 * @description:createTerrain
 * @path : http://localhost:8000/api/owner/terrain
 * @method:post
 * @data : no data
 */
const createTerrain = async (req, res) => {
  try {
    const { name, description, prix } = req.body;
    const owner = req.owner;
    const newTerrain = new Terrain({
      name,
      description,
      prix,
      owner,
    });
    await newTerrain.save();
    res.status(200).send({ msg: "add success ....", newTerrain });
  } catch (error) {
    res.status(400).send({ msg: "error add terrain", error });
  }
};
/**
 * @description:Afficher les Terrain
 * @path : http://localhost:8000/api/owner/terrain
 * @method:get
 * @data : no data
 */
const getAlls = async (req, res) => {
  try {
    const owner = req.params;
    const listTerrains = await Terrain.find({ owner: owner.id });
    console.log(listTerrains);
    res.status(200).send({ msg: "this is all contact...", listTerrains });
  } catch (error) {
    res.status(400).send({ msg: "error get all contacts", error });
  }
};

/**
 * @description:effacer un  Terrain
 * @path : http://localhost:8000/api/owner/terrain:_id
 * @method:delet
 * @data :req.params._id
 */
const deletOne = async (req, res) => {
  try {
    const effacerTerrain = await Terrain.findOneAndDelete({
      _id: req.params._id,
    });
    res.status(200).send({ msg: "terrain suprimer", effacerTerrain });
  } catch (error) {
    res.status(400).send({ msg: "error terrain suprimer", error });
  }
};
/**
 * @description:update terrain
 * @path : http://localhost:8000/api/owner/terrain
 * @method:put
 * @data : req.params._id & req.body
 */
const updateOne = async (req, res) => {
  try {
    const modifierTerrain = await Terrain.findOneAndUpdate(req.params._id, {
      $set: { ...req.body },
    });

    res.status(200).send({ msg: "modification terminer", modifierTerrain });
  } catch (error) {
    res.status(400).send({ msg: "error modification de terrain", error });
  }
};
module.exports = controllers = {
  createTerrain,
  getAlls,
  deletOne,
  updateOne,
};
