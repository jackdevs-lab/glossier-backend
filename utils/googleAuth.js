const { google } = require('googleapis');
require('dotenv').config();

async function initializeClient() {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: JSON.parse(Buffer.from(process.env.SERVICE_ACCOUNT_KEY_BASE64, 'base64').toString()),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
        const client = await auth.getClient();
        console.log('Authentication successful');
        return google.sheets({ version: 'v4', auth: client });
    } catch (error) {
        console.error('Authentication failed:', error);
        throw error;
    }
}

module.exports = { initializeClient };