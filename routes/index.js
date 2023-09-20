var express = require("express");
const { login } = require("../utils/userUtils");
var router = express.Router();

router.post("/login", async (req, res, next) => {
  const userInfo = await login(req.body);
  if (userInfo.status === 404) next(userInfo);
  else res.status(userInfo.status).json(userInfo.data);
});

module.exports = router;
