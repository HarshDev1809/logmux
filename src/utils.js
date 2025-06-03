const fs = require("fs");
const path = require("path");

function logToFile(message, filePath = "logs.txt") {
  const logDirectory = path.dirname(filePath);

  // Ensure the directory exists
  if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory, { recursive: true });
  }

  const finalLog = `${message}\n`;

  fs.appendFile(filePath, finalLog, (err) => {
    if (err) {
      console.error("Failed to write log:", err);
    }
  });
}


const formatMessage = (msg) => {
  if (typeof msg === 'object') {
    try {
      return JSON.stringify(msg, null); // Pretty print
    } catch (e) {
      return '[Unserializable Object]';
    }
  }
  return msg;
};



module.exports = {
    formatMessage,
    logToFile
}