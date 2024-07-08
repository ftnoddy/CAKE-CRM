// import pkg from 'qrcode-terminal';
// const { generate } = pkg;
// import { Client } from 'whatsapp-web.js';

// const client = new Client();

// client.on('qr', (qr) => {
//     generate(qr, { small: true });
// });

// client.on('ready', () => {
//     console.log('Client is ready!');
// });

// client.initialize();

// export const sendWhatsAppMessage = async (phoneNumber, message) => {
//     try {
//         const chatId = `${phoneNumber}@c.us`;
//         await client.sendMessage(chatId, message);
//     } catch (error) {
//         console.error('Error sending WhatsApp message:', error);
//         throw error; // Re-throw error for further handling if needed
//     }
// };

// export default sendWhatsAppMessage;
