// netlify/functions/chat.js
exports.handler = async function(event, context) {
    const message = JSON.parse(event.body).message;

    // Example simple echo response
    return {
        statusCode: 200,
        body: JSON.stringify({ reply: `You said: ${message}` }),
    };
};
