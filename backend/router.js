const express = require("express");
const router = express.Router();
const UserController = require("./controllers/UserController");
const AddressController = require("./controllers/AddressController");

router.get("/users",UserController.index);
router.post("/users",UserController.store);
router.get("/users/:id",UserController.show);
router.put("/users/:id",UserController.update);
router.delete("/users/:id",UserController.delete);

router.get("/addresses",AddressController.index);
router.post("/addresses/:userId",AddressController.store);

module.exports = router;