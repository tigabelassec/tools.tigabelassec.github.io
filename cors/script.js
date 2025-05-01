function isValidURL(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

function submit() {
  const url = document.getElementsByName("target")[0].value.trim();
  const resultBox = document.getElementById("corsResult");
  const copyBtn = document.getElementById("copyBtn");
  const msgBox = document.getElementById("messageBox");

  resultBox.classList.add("hidden");
  copyBtn.classList.add("hidden");
  msgBox.classList.add("hidden");
  msgBox.textContent = "";
  msgBox.className = "mt-4 text-sm font-medium hidden";

  if (!url) {
    showMessage(
      "Please enter a target URL, e.g., https://example.com/path/path",
      "red"
    );
    return;
  }

  if (!isValidURL(url)) {
    showMessage("Invalid URL format.", "red");
    return;
  }

  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4) {
      resultBox.classList.remove("hidden");
      const statusText = this.status === 200 ? "VULN" : "Not Vulnerable";
      const statusColor = this.status === 200 ? "#4ade80" : "#f87171";
      resultBox.innerHTML =
        "Response (Status: <b style='color:" +
        statusColor +
        ";'>" +
        statusText +
        "</b> | status code: <span style='color:" +
        statusColor +
        ";'>" +
        this.status +
        "</span>):\n\n" +
        escapeHTML(this.responseText);

      copyBtn.classList.remove("hidden");

      if (this.status === 200) {
        showMessage("CORS vulnerability detected on: " + url, "green");
      } else {
        showMessage("CORS test failed or not vulnerable: " + url, "red");
      }
    }
  };
  xhttp.open("GET", url, true);
  xhttp.withCredentials = true;
  xhttp.send();
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, function (tag) {
    const chars = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return chars[tag] || tag;
  });
}

function showMessage(msg, color) {
  const box = document.getElementById("messageBox");
  box.textContent = msg;
  box.classList.remove("hidden");
  box.classList.remove("text-green-400", "text-red-400");
  box.classList.add(color === "green" ? "text-green-400" : "text-red-400");
}

function copyResult() {
  const resultBox = document.getElementById("corsResult");
  const content = resultBox.innerText;

  navigator.clipboard.writeText(content).then(
    () => showMessage("Result copied to clipboard!", "green"),
    () => showMessage("Failed to copy result.", "red")
  );
}
