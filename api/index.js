// =============================================================
// ⚡ Siwam API Proxy (for GitHub + Vercel Hosting)
// Example: https://yourname.vercel.app/api?q=9876543210
// =============================================================

export default async function handler(req, res) {
  try {
    // ✅ Get ?q= parameter
    const number = req.query.q;

    // ⚠️ Validate
    if (!number || !/^\d{7,15}$/.test(number)) {
      return res.status(400).json({
        success: false,
        message: "❌ Invalid or missing ?q= parameter. Example: ?q=9876543210",
      });
    }

    // 🌐 Fetch from Siwam API
    const apiUrl = `https://siwammodz.vercel.app/api?key=Siwam_9832&type=mobile&term=${number}`;

    const response = await fetch(apiUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Node.js API Proxy)",
      },
    });

    const data = await response.json();

    // ✅ Stylish response
    res.status(200).json({
      success: true,
      requested_number: number,
      provider: "Siwam API",
      data: data,
      developer: "BanixNexus ⚡",
      github: "https://github.com/YOUR_GITHUB_USERNAME/siwam-api-proxy"
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message || "Unknown error occurred",
    });
  }
}
