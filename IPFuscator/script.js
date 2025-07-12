function showTab(tab) {
  document
    .querySelectorAll(".tab-content")
    .forEach((el) => el.classList.add("hidden"));
  document.querySelector(`#${tab}`).classList.remove("hidden");

  const tabObfuscator = document.getElementById("tab-obfuscator");
  const tabDeobfuscator = document.getElementById("tab-deobfuscator");
  const activeTab = document.getElementById(`tab-${tab}`);

  tabObfuscator.classList.remove(
    "text-teal-400",
    "border-b-2",
    "border-teal-400"
  );
  tabObfuscator.classList.add("text-gray-400");

  tabDeobfuscator.classList.remove(
    "text-teal-400",
    "border-b-2",
    "border-teal-400"
  );
  tabDeobfuscator.classList.add("text-gray-400");

  activeTab.classList.add("text-teal-400", "border-b-2", "border-teal-400");
  activeTab.classList.remove("text-gray-400");
}

function calculateIPFuscation() {
  const ip = document.getElementById("ipInput").value;
  const outputDiv = document.getElementById("outputDiv");
  outputDiv.classList.remove("hidden");
  if (!checkIP(ip)) {
    outputDiv.innerHTML = "";
    const errorSpan = document.createElement("span");
    errorSpan.textContent = "[!] Invalid IP format: ";
    errorSpan.className = "text-red-500 font-bold";
    const ipSpan = document.createElement("span");
    ipSpan.textContent = ip;
    ipSpan.className = "text-gray-400";
    outputDiv.appendChild(errorSpan);
    outputDiv.appendChild(ipSpan);
    return;
  }

  const parts = ip.split(".");
  const decimal =
    parseInt(parts[0]) * 16777216 +
    parseInt(parts[1]) * 65536 +
    parseInt(parts[2]) * 256 +
    parseInt(parts[3]);

  const lines = [
    `<center><p><b>Inspired by <a href="https://github.com/vysecurity/IPFuscator" class="text-teal-400 hover:text-teal-300">Vincent Yiu</a></b></p></center><br/>`,
    `<p><b>Decimal:</b><span class="text-gray-400"> ${decimal}</span></p>`,
    `<p><b>Hexadecimal:</b><span class="text-gray-400"> 0x${decimal.toString(
      16
    )}</span></p>`,
    `<p><b>Octal:</b><span class="text-gray-400"> 0${decimal.toString(
      8
    )}</span></p>`,
    `<hr class='my-2'><p><b>Full Hex:</b><span class="text-gray-400"> ${parts
      .map((p) => "0x" + parseInt(p).toString(16))
      .join(".")}</span></p>`,
    `<p><b>Full Oct:</b><span class="text-gray-400"> ${parts
      .map((p) => "0" + parseInt(p).toString(8))
      .join(".")}</span></p>`,
  ];

  lines.push(`<hr class='my-2'><p><b>Random Padding:</b></p>`);
  const randHex = parts
    .map(
      (p) =>
        "0x" +
        "0".repeat(Math.floor(Math.random() * 30)) +
        parseInt(p).toString(16)
    )
    .join(".");
  const randOct = parts
    .map(
      (p) =>
        "0".repeat(Math.floor(Math.random() * 30)) + parseInt(p).toString(8)
    )
    .join(".");
  lines.push(
    `<p><b>Hex:</b><span class="text-gray-400"> ${randHex}</span></p>`
  );
  lines.push(
    `<p><b>Oct:</b><span class="text-gray-400"> ${randOct}</span></p>`
  );

  lines.push(`<hr class='my-2'><p><b>Random base:</b></p>`);
  for (let i = 0; i < 5; i++) {
    const val = parts
      .map((p) => {
        const base = Math.floor(Math.random() * 3);
        return base === 0
          ? p
          : base === 1
          ? "0x" + parseInt(p).toString(16)
          : "0" + parseInt(p).toString(8);
      })
      .join(".");
    lines.push(
      `<p><b>${i + 1}:</b><span class="text-gray-400"> ${val}</span></p>`
    );
  }

  lines.push(`<hr class='my-2'><p><b>Random base with random padding:</b></p>`);
  for (let i = 0; i < 5; i++) {
    const val = parts
      .map((p) => {
        const base = Math.floor(Math.random() * 3);
        if (base === 0) return p;
        if (base === 1)
          return (
            "0x" +
            "0".repeat(Math.floor(Math.random() * 30)) +
            parseInt(p).toString(16)
          );
        return (
          "0".repeat(Math.floor(Math.random() * 30)) + parseInt(p).toString(8)
        );
      })
      .join(".");
    lines.push(
      `<p><b>${i + 1}:</b><span class="text-gray-400"> ${val}</span></p>`
    );
  }

  outputDiv.innerHTML = lines.join("\n");
}

function deobfuscateIP() {
  const input = document.getElementById("obfInput").value.trim();
  const resultDiv = document.getElementById("deobfResult");
  resultDiv.classList.remove("hidden");

  resultDiv.innerHTML = "";

  let ip = "";
  try {
    if (input.includes(".")) {
      const parts = input.split(".").map((p) => {
        if (p.startsWith("0x")) return parseInt(p, 16);
        if (p.startsWith("0")) return parseInt(p, 8);
        return parseInt(p, 10);
      });
      if (parts.length === 4 && parts.every((p) => !isNaN(p))) {
        ip = parts.join(".");
      } else {
        throw new Error("Invalid IP format");
      }
    } else {
      const dec = parseInt(
        input.startsWith("0x") ? input : input,
        input.startsWith("0x") ? 16 : input.startsWith("0") ? 8 : 10
      );
      if (isNaN(dec)) throw new Error("Invalid decimal format");
      ip = [dec >>> 24, (dec >> 16) & 255, (dec >> 8) & 255, dec & 255].join(
        "."
      );
    }

    const labelSpan = document.createElement("span");
    labelSpan.textContent = "Original IP: ";
    labelSpan.className = "text-white font-bold";

    const ipSpan = document.createElement("span");
    ipSpan.textContent = ip;
    ipSpan.className = "text-gray-400";

    resultDiv.appendChild(labelSpan);
    resultDiv.appendChild(ipSpan);
  } catch (e) {
    const errorSpan = document.createElement("span");
    errorSpan.textContent = "[!] Unable to parse input: ";
    errorSpan.className = "text-red-500 font-bold";

    const inputSpan = document.createElement("span");
    inputSpan.textContent = input;
    inputSpan.className = "text-gray-400";

    resultDiv.appendChild(errorSpan);
    resultDiv.appendChild(inputSpan);
  }
}

function checkIP(ip) {
  const ipRegex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
  if (!ipRegex.test(ip)) return false;
  return ip.split(".").every((p) => parseInt(p) >= 0 && parseInt(p) <= 255);
}
