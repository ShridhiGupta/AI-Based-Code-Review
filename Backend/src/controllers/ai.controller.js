const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {

    const code = req.body.code;

    if (!code) {
        return res.status(400).json({ error: "Prompt is required" });
    }

    try {
        const response = await aiService(code);
        res.send(response);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while processing the request" });
    }
}
