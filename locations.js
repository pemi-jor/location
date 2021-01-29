import express from "express";

const router = express.Router();

router.get("/1", (req, res) => {
  res.send({ id: 1, latitude: 60, longitude: 60 });
});

export default router;
