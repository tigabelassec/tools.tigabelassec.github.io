const _0x1d30b6 = _0x45b2;
(function (_0x26e116, _0x252357) {
  const _0x1eceee = _0x45b2,
    _0x281f17 = _0x26e116();
  while (!![]) {
    try {
      const _0x5efad4 =
        (parseInt(_0x1eceee(0x1a5)) / 0x1) *
          (parseInt(_0x1eceee(0x1bb)) / 0x2) +
        -parseInt(_0x1eceee(0x1a6)) / 0x3 +
        (-parseInt(_0x1eceee(0x19c)) / 0x4) *
          (parseInt(_0x1eceee(0x1bc)) / 0x5) +
        (parseInt(_0x1eceee(0x1b7)) / 0x6) *
          (parseInt(_0x1eceee(0x1bd)) / 0x7) +
        parseInt(_0x1eceee(0x1b2)) / 0x8 +
        (parseInt(_0x1eceee(0x199)) / 0x9) *
          (-parseInt(_0x1eceee(0x19b)) / 0xa) +
        parseInt(_0x1eceee(0x1b1)) / 0xb;
      if (_0x5efad4 === _0x252357) break;
      else _0x281f17["push"](_0x281f17["shift"]());
    } catch (_0x179347) {
      _0x281f17["push"](_0x281f17["shift"]());
    }
  }
})(_0x3136, 0xc14cf);
const pairs = [
    ["a", "5"],
    ["b", "4"],
    ["c", "3"],
    ["d", "2"],
    ["e", "1"],
    ["f", "0"],
    ["6", "9"],
    ["7", "8"],
  ],
  map = {};
for (const [k, v] of pairs) {
  (map[k] = v), (map[v] = k);
}
function _0x45b2(_0x37c292, _0x4dd586) {
  const _0x31366a = _0x3136();
  return (
    (_0x45b2 = function (_0x45b228, _0xa7674d) {
      _0x45b228 = _0x45b228 - 0x197;
      let _0x312832 = _0x31366a[_0x45b228];
      return _0x312832;
    }),
    _0x45b2(_0x37c292, _0x4dd586)
  );
}
function generateSSID(_0x3513fe) {
  const _0xc19f6e = _0x45b2;
  if (!_0x3513fe[_0xc19f6e(0x1b0)](_0xc19f6e(0x1b9))) return "";
  const _0x3d308e = _0x3513fe[_0xc19f6e(0x1a7)]("_");
  if (_0x3d308e[_0xc19f6e(0x1be)] < 0x2) return "";
  const _0x5e4a36 = _0x3d308e[0x1];
  return (
    "wlan" +
    [..._0x5e4a36]
      ["map"]((_0xd3414a) => map[_0xd3414a[_0xc19f6e(0x19d)]()] ?? _0xd3414a)
      [_0xc19f6e(0x1af)]("")
  );
}
const inputField = document[_0x1d30b6(0x1b6)](_0x1d30b6(0x1b5)),
  output = document["getElementById"](_0x1d30b6(0x1bf)),
  generateBtn = document[_0x1d30b6(0x1b6)](_0x1d30b6(0x1c0)),
  copyBtn = document[_0x1d30b6(0x1b6)](_0x1d30b6(0x197)),
  backButton = document[_0x1d30b6(0x1b6)](_0x1d30b6(0x1b3));
function _0x3136() {
  const _0x5cd336 = [
    "5nNXPOZ",
    "301QugAkM",
    "length",
    "output",
    "generateBtn",
    "bg-red-800",
    "hidden",
    "copyBtn",
    "Copied!",
    "9kRUGLd",
    "click",
    "14936650hyTGoy",
    "3975628GadDff",
    "toLowerCase",
    "innerHTML",
    "add",
    "history",
    "<i\x20class=\x22far\x20fa-copy\x20mr-2\x22></i>\x20Copy",
    "border-gray-700",
    "href",
    "back",
    "552325VCLbar",
    "1861995hQogIM",
    "split",
    "textContent",
    "Copy\x20Failed",
    "bg-gray-900",
    "white",
    "disabled",
    "remove",
    "classList",
    "join",
    "startsWith",
    "18408929WAjePw",
    "7442200iOCLTT",
    "backButton",
    "Invalid\x20input\x20format.\x20Please\x20try\x20again.",
    "inputField",
    "getElementById",
    "103794kbNNsT",
    "style",
    "fh_",
    "border-red-700",
    "2iIfikT",
  ];
  _0x3136 = function () {
    return _0x5cd336;
  };
  return _0x3136();
}
output[_0x1d30b6(0x1a8)] = "Output\x20will\x20appear\x20here.";
backButton &&
  backButton["addEventListener"](_0x1d30b6(0x19a), function () {
    const _0x119616 = _0x1d30b6;
    window[_0x119616(0x1a0)][_0x119616(0x1be)] > 0x1
      ? window[_0x119616(0x1a0)][_0x119616(0x1a4)]()
      : (window["location"][_0x119616(0x1a3)] = "/");
  });
generateBtn["addEventListener"](_0x1d30b6(0x19a), () => {
  const _0x36b070 = _0x1d30b6,
    _0xdc29c0 = inputField["value"]["trim"](),
    _0x50d7b3 = generateSSID(_0xdc29c0);
  (output[_0x36b070(0x1a8)] = _0x50d7b3 || _0x36b070(0x1b4)),
    _0x50d7b3
      ? (output[_0x36b070(0x1ae)][_0x36b070(0x1ad)](
          _0x36b070(0x1c1),
          "border-red-700"
        ),
        output[_0x36b070(0x1ae)][_0x36b070(0x19f)](
          "bg-gray-900",
          _0x36b070(0x1a2)
        ),
        (output[_0x36b070(0x1b8)]["color"] = _0x36b070(0x1ab)),
        copyBtn[_0x36b070(0x1ae)][_0x36b070(0x1ad)]("hidden"),
        (copyBtn[_0x36b070(0x1ac)] = ![]))
      : (output[_0x36b070(0x1ae)][_0x36b070(0x1ad)](
          _0x36b070(0x1aa),
          _0x36b070(0x1a2)
        ),
        output[_0x36b070(0x1ae)][_0x36b070(0x19f)](
          _0x36b070(0x1c1),
          _0x36b070(0x1ba)
        ),
        (output["style"]["color"] = _0x36b070(0x1ab)),
        copyBtn["classList"][_0x36b070(0x19f)](_0x36b070(0x1c2)),
        (copyBtn["disabled"] = !![]));
}),
  copyBtn["addEventListener"]("click", async () => {
    const _0x1cd429 = _0x1d30b6,
      _0x1f880d = output["textContent"];
    try {
      await navigator["clipboard"]["writeText"](_0x1f880d),
        (copyBtn[_0x1cd429(0x1a8)] = _0x1cd429(0x198)),
        setTimeout(() => {
          const _0x5bf6a1 = _0x1cd429;
          copyBtn[_0x5bf6a1(0x19e)] =
            "<i\x20class=\x22far\x20fa-copy\x20mr-2\x22></i>\x20Copy";
        }, 0x5dc);
    } catch (_0x10c4a3) {
      (copyBtn[_0x1cd429(0x1a8)] = _0x1cd429(0x1a9)),
        setTimeout(() => {
          const _0x27c0ab = _0x1cd429;
          copyBtn[_0x27c0ab(0x19e)] = _0x27c0ab(0x1a1);
        }, 0x5dc);
    }
  });
