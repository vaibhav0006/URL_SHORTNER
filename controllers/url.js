const shortid = require("shortid");
const URL = require("../models/url");
async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "url is required" }); // Return JSON error response
  }
  const shortID = shortid();

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortID }); // Return JSON success response
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });

  if (!result) {
    return res.status(404).json({ error: "URL not found" }); // Return JSON error response
  }

  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  }); // Return JSON success response
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetAnalytics,
};
