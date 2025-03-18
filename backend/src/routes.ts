import express from "express";
import crypto from "crypto";

const router = express.Router();

router.post("/upload", (req, res) => {
  const { data } = req.body;
  const encryptedData = crypto.createCipher("aes-256-ctr", "secret").update(data, "utf8", "hex");
  res.json({ encryptedData });
});

export default router;
