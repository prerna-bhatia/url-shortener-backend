// routes/url.js
const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const Url = require('../models/Url');

const baseUrl = process.env.BASE_URL;

// POST /shorten
router.post('/shorten', async (req, res) => {
  const { url: longUrl } = req.body;

  if (!validUrl.isUri(longUrl)) {
    return res.status(400).json({ error: 'Invalid URL format' });
  }

  const shortCode = shortid.generate();

  try {
    let url = await Url.findOne({ originalUrl: longUrl });
    if (url) {
      return res.json({ shortUrl: `${baseUrl}/${url.shortCode}` });
    } else {
      const newUrl = new Url({ originalUrl: longUrl, shortCode });
      await newUrl.save();
      return res.json({ shortUrl: `${baseUrl}/${shortCode}` });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
});

// GET /:code
router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({ shortCode: req.params.code });

    if (url) {
      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).json({ error: 'URL not found' });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
