const express = require("express");
const router = express.Router();
const { updateUser } = require("../controllers/userUpdateController");

router.put("/", updateUser);

module.exports = router;
