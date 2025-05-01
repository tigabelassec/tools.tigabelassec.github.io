function autoDetect() {
  const inputText = document.getElementById("inputText").value.trim();
  const pool = document.getElementById("poolName").value.trim();
  const resultDiv = document.getElementById("result");
  const outputDiv = document.getElementById("outputText");
  const downloadBtn = document.getElementById("downloadBtn");
  const copyBtn = document.querySelector("#result button");

  downloadBtn.classList.add("hidden");
  copyBtn.classList.add("hidden");

  if (!inputText) {
    outputDiv.innerHTML = "❌ Input is empty.";
    resultDiv.classList.remove("hidden");
    return;
  }

  const lines = inputText.split(/\r?\n/).filter((line) => line.trim() !== "");

  let output = "";
  let poolMissingErrorShown = false;
  let decodingWithPoolErrorShown = false;

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (trimmed.includes("=") && trimmed.includes(".")) {
      if (pool) {
        if (!decodingWithPoolErrorShown) {
          output += `❌ Please remove Pool Name input for decoding.<br>`;
          decodingWithPoolErrorShown = true;
        }
      } else {
        output += decodeCookie(trimmed) + "<br>";
      }
    } else if (trimmed.includes(":")) {
      if (!pool) {
        if (!poolMissingErrorShown) {
          output += `❌ Please enter Pool Name for encoding.<br>`;
          poolMissingErrorShown = true;
        }
      } else {
        output += encodeCookie(trimmed, pool) + "<br>";
      }
    } else {
      output += `Line ${index + 1}: ❌ Unrecognized format.<br>`;
    }
  });

  outputDiv.innerHTML = output;
  resultDiv.classList.remove("hidden");

  if (output.includes("Encoded") || output.includes("Decoded")) {
    downloadBtn.classList.remove("hidden");
    copyBtn.classList.remove("hidden");
  }
}

function encodeCookie(ipPort, pool) {
  try {
    if (!isValidIpPort(ipPort)) {
      return `❌ Invalid IP or Port: ${ipPort}`;
    }

    const [ip, portStr] = ipPort.split(":");
    const port = parseInt(portStr, 10);
    const ipParts = ip.split(".").map(Number);

    const ipBuffer = new ArrayBuffer(4);
    const ipView = new DataView(ipBuffer);
    ipView.setUint8(0, ipParts[3]);
    ipView.setUint8(1, ipParts[2]);
    ipView.setUint8(2, ipParts[1]);
    ipView.setUint8(3, ipParts[0]);
    const ipUint32 = new Uint32Array(ipBuffer)[0];

    const cookie = `BIGipServer${pool}=${ipUint32}.${port}.0000`;
    return `✅ Encoded: <code>${cookie}</code>`;
  } catch (e) {
    return "❌ Failed to encode.";
  }
}

function decodeCookie(cookieStr) {
  try {
    const [name, value] = cookieStr.split("=");
    const [host, port] = value.split(".");
    const poolMatch = /^BIGipServer([.\w]*)/.exec(name);

    const ipBuffer = new ArrayBuffer(4);
    new DataView(ipBuffer).setUint32(0, parseInt(host, 10), true);
    const ipView = new DataView(ipBuffer);
    const ip = [
      ipView.getUint8(3),
      ipView.getUint8(2),
      ipView.getUint8(1),
      ipView.getUint8(0),
    ].join(".");
    const decodedPort = parseInt(port, 10);

    return `✅ Decoded: Pool=<b>${
      poolMatch ? poolMatch[1] : "N/A"
    }</b>, IP=<b>${ip}</b>, Port=<b>${decodedPort}</b>`;
  } catch (e) {
    return "❌ Failed to decode.";
  }
}

function isValidIpPort(input) {
  const parts = input.split(":");
  if (parts.length !== 2) return false;

  const [ip, port] = parts;
  const ipParts = ip.split(".");
  if (ipParts.length !== 4) return false;

  const validIp = ipParts.every((segment) => {
    const num = Number(segment);
    return num >= 0 && num <= 255 && !isNaN(num);
  });

  const portNum = Number(port);
  const validPort = portNum > 0 && portNum <= 65535;

  return validIp && validPort;
}

function copyResult() {
  const outputText = document.getElementById("outputText").textContent.trim();
  const regex = /(?:✅\s*Encoded:\s*|✅\s*Decoded:\s*)([^✅]*)/g;
  let result = "";
  let match;

  while ((match = regex.exec(outputText)) !== null) {
    result += match[1].trim() + "\n";
  }

  if (result) {
    navigator.clipboard.writeText(result).then(() => {
      showMessage();
    });
  }
}

function showMessage() {
  const msg = document.getElementById("copyMessage");
  msg.classList.remove("hidden");
  setTimeout(() => {
    msg.classList.add("hidden");
  }, 2500);
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file && file.type === "text/plain") {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("inputText").value = e.target.result;
    };
    reader.readAsText(file);
  } else {
    alert("Please upload a valid .txt file.");
  }
}

function downloadResult() {
  const outputText = document.getElementById("outputText").textContent.trim();
  const regex = /(?:✅\s*Encoded:\s*|✅\s*Decoded:\s*)([^✅]*)/g;
  let result = "";
  let match;

  while ((match = regex.exec(outputText)) !== null) {
    result += match[1].trim() + "\n";
  }

  if (result) {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = String(today.getFullYear()).slice(-2);
    const dateStr = `${day}-${month}-${year}`;

    const blob = new Blob([result], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${dateStr}_result.txt`;
    link.click();
  }
}
