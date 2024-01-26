const secretMessage = {
  data: "Uifsf jt b tfdsfu nfttbhf!",
  decryptionKey: "1",
};

const missionInfo = {
  missionName: "Operation X",
  agentCodeName: "Double-O",
  location: "Top Secret Location",
};

// Encryption function
function encryptMessage(message, key) {
  let encryptedMessage = "";
  for (let i = 0; i < message.length; i++) {
    const char = message[i];
    if (char.match(/[a-zA-Z]/)) {
      const code = char.charCodeAt(0);
      const shifted = code + parseInt(key, 10);
      const encryptedChar = String.fromCharCode(shifted);
      encryptedMessage += encryptedChar;
    } else {
      encryptedMessage += char;
    }
  }
  return encryptedMessage;
}

// Decrypt the message from the simulated heap memory
function decryptMessage() {
  const decryptedMessage = encryptMessage(secretMessage.data, -secretMessage.decryptionKey);
  return decryptedMessage;
}

// Access mission information
function getMissionInfo() {
  return missionInfo;
}

// Reveal the secret message
const decryptedSecretMessage = decryptMessage();
const missionDetails = getMissionInfo();