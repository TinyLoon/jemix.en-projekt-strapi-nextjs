// upload-assets-to-strapi.js
import fs from 'fs';
import path from 'path';
import FormData from 'form-data';
import fetch from 'node-fetch';

const STRAPI_URL = 'http://localhost:1337';
const ASSET_DIR = './migration-assets';
const ADMIN_TOKEN = 'DEIN-ADMIN-TOKEN-HIER'; // <-- Hol dir diesen aus Strapi Admin (Settings > API Tokens)

async function uploadFile(filePath) {
  const form = new FormData();
  form.append('files', fs.createReadStream(filePath));

  const res = await fetch(`${STRAPI_URL}/api/upload`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${ADMIN_TOKEN}`,
    },
    body: form,
  });

  if (!res.ok) {
    console.error(`Fehler beim Hochladen von ${filePath}:`, await res.text());
  } else {
    const json = await res.json();
    console.log(`✅ Hochgeladen: ${filePath}`, json[0]?.url);
  }
}

async function run() {
  const files = fs.readdirSync(ASSET_DIR);
  for (const file of files) {
    const fullPath = path.join(ASSET_DIR, file);
    await uploadFile(fullPath);
  }
}

run();