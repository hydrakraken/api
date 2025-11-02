// =============================================================
// ⚡ Siwam API Proxy — index.js
// Example: https://your-domain.vercel.app/api?q=9876543210
// Fetches data from: https://siwammodz.vercel.app/api?key=Siwam_9832&type=mobile&term=NUMBER
// =============================================================

export default async function handler(req, res) {
  try {
    // ✅ Get query param
    const number = req.query.q;

    // ⚠️ Validate input
    if (!number || !/^\d+$/.test(number)) {
      return res.status(400).json({
        success: false,
        message: "Invalid or missing ?q= parameter. Example: ?q=9876543210",
      });
    }

    // 🌐 External API endpoint
    const apiUrl = `https://siwammodz.vercel.app/api?key=Siwam_9832&type=mobile&term=${number}`;

    // 🛰️ Fetch from Siwam API
    const response = await fetch(apiUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Node.js API Proxy)",
      },
    });

    // 🧠 Parse result
    const data = await response.json();

    // ✅ Return result
    return res.status(200).json({
      success: true,
      source: "Siwam API",
      number: number,
      data: data,
      developer: "BanixNexus",
    });

  } catch (err) {
    // 💥 Handle errors gracefully
    return res.status(500).json({
      success: false,
      error: err.message || "Unknown error occurred.",
    });
  }
}
