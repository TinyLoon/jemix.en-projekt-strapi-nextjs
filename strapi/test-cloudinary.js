// test-cloudinary.js
const cloudinary = require('cloudinary').v2;

// 🔁 ENV-Werte ausgeben – ODER direkt hier eintragen
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME || "🟩dhuqb4urp🟩",
  api_key: process.env.CLOUDINARY_KEY || "🟩983334313512661🟩",
  api_secret: process.env.CLOUDINARY_SECRET || "🟩NfKtE3veGL2WFlxZ_kyJYJS5pIw🟩",
});

async function testUpload() {
  try {
    const result = await cloudinary.uploader.upload(
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/June_odd-eyed-cat.jpg", // beliebiges Testbild
      { folder: "strapi-test" }
    );
    console.log("✅ Upload erfolgreich:", result.secure_url);
  } catch (error) {
    console.error("❌ Upload fehlgeschlagen:", error.message);
    process.exit(1);
  }
}

testUpload();