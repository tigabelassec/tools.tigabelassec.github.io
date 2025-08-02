const _0x518a48 = _0x48f1;
(function (_0x1bf037, _0x3c1911) {
  const _0x5c9d11 = _0x48f1,
    _0x277727 = _0x1bf037();
  while (!![]) {
    try {
      const _0x26954f =
        parseInt(_0x5c9d11(0xd4)) / 0x1 +
        -parseInt(_0x5c9d11(0xd9)) / 0x2 +
        -parseInt(_0x5c9d11(0xcb)) / 0x3 +
        (parseInt(_0x5c9d11(0xca)) / 0x4) * (-parseInt(_0x5c9d11(0xd3)) / 0x5) +
        (-parseInt(_0x5c9d11(0xef)) / 0x6) *
          (-parseInt(_0x5c9d11(0xdd)) / 0x7) +
        -parseInt(_0x5c9d11(0xc8)) / 0x8 +
        (-parseInt(_0x5c9d11(0xdc)) / 0x9) * (-parseInt(_0x5c9d11(0xe6)) / 0xa);
      if (_0x26954f === _0x3c1911) break;
      else _0x277727["push"](_0x277727["shift"]());
    } catch (_0xd5c962) {
      _0x277727["push"](_0x277727["shift"]());
    }
  }
})(_0x2baf, 0xc3444);
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
function _0x48f1(_0x3bc01e, _0x558c5e) {
  const _0x2baf08 = _0x2baf();
  return (
    (_0x48f1 = function (_0x48f1a4, _0xea2da5) {
      _0x48f1a4 = _0x48f1a4 - 0xc3;
      let _0x54f075 = _0x2baf08[_0x48f1a4];
      return _0x54f075;
    }),
    _0x48f1(_0x3bc01e, _0x558c5e)
  );
}
function generateSSID(_0x2cb53c) {
  const _0x177a9c = _0x48f1;
  if (!_0x2cb53c[_0x177a9c(0xd0)](_0x177a9c(0xd7))) return "";
  const _0x42061d = _0x2cb53c[_0x177a9c(0xd5)]("_");
  if (_0x42061d[_0x177a9c(0xcf)] < 0x2) return "";
  const _0x2be447 = _0x42061d[0x1];
  return (
    _0x177a9c(0xe8) +
    [..._0x2be447]
      [_0x177a9c(0xe2)](
        (_0x2a6d77) => map[_0x2a6d77[_0x177a9c(0xce)]()] ?? _0x2a6d77
      )
      [_0x177a9c(0xcc)]("")
  );
}
const inputField = document[_0x518a48(0xda)](_0x518a48(0xc5)),
  output = document[_0x518a48(0xda)]("output"),
  generateBtn = document[_0x518a48(0xda)]("generateBtn"),
  copyBtn = document[_0x518a48(0xda)](_0x518a48(0xeb)),
  backButton = document[_0x518a48(0xda)]("backButton");
output[_0x518a48(0xdf)] = "Output\x20will\x20appear\x20here.";
backButton &&
  backButton[_0x518a48(0xcd)](_0x518a48(0xec), function () {
    const _0x29420a = _0x518a48;
    window["history"][_0x29420a(0xcf)] > 0x1
      ? window[_0x29420a(0xde)][_0x29420a(0xc3)]()
      : (window[_0x29420a(0xd8)][_0x29420a(0xd2)] =
          window["location"][_0x29420a(0xe4)] + "/");
  });
function _0x2baf() {
  const _0x2a57e3 = [
    "add",
    "20KSYBcQ",
    "787623ZtGmQc",
    "join",
    "addEventListener",
    "toLowerCase",
    "length",
    "startsWith",
    "white",
    "href",
    "1572275MvKxvK",
    "1007526GMNPHK",
    "split",
    "style",
    "fh_",
    "location",
    "2498984asRZGv",
    "getElementById",
    "<i\x20class=\x22far\x20fa-copy\x20mr-2\x22></i>\x20Copy",
    "2553957GPvAHB",
    "8061557Ktvcik",
    "history",
    "textContent",
    "hidden",
    "Copy\x20Failed",
    "map",
    "value",
    "origin",
    "innerHTML",
    "80ODCAOW",
    "writeText",
    "wlan",
    "disabled",
    "border-gray-700",
    "copyBtn",
    "click",
    "color",
    "clipboard",
    "6unrZUf",
    "Copied!",
    "remove",
    "back",
    "Invalid\x20input\x20format.\x20Please\x20try\x20again.",
    "inputField",
    "border-red-700",
    "classList",
    "4361928PMgoTV",
  ];
  _0x2baf = function () {
    return _0x2a57e3;
  };
  return _0x2baf();
}
generateBtn[_0x518a48(0xcd)](_0x518a48(0xec), () => {
  const _0x43e43a = _0x518a48,
    _0x4dc583 = inputField[_0x43e43a(0xe3)]["trim"](),
    _0x1bf8e9 = generateSSID(_0x4dc583);
  (output[_0x43e43a(0xdf)] = _0x1bf8e9 || _0x43e43a(0xc4)),
    _0x1bf8e9
      ? (output[_0x43e43a(0xc7)]["remove"]("bg-red-800", _0x43e43a(0xc6)),
        output["classList"]["add"]("bg-gray-900", "border-gray-700"),
        (output[_0x43e43a(0xd6)]["color"] = _0x43e43a(0xd1)),
        copyBtn["classList"][_0x43e43a(0xf1)](_0x43e43a(0xe0)),
        (copyBtn[_0x43e43a(0xe9)] = ![]))
      : (output[_0x43e43a(0xc7)][_0x43e43a(0xf1)](
          "bg-gray-900",
          _0x43e43a(0xea)
        ),
        output[_0x43e43a(0xc7)]["add"]("bg-red-800", _0x43e43a(0xc6)),
        (output["style"][_0x43e43a(0xed)] = _0x43e43a(0xd1)),
        copyBtn["classList"][_0x43e43a(0xc9)]("hidden"),
        (copyBtn["disabled"] = !![]));
}),
  copyBtn[_0x518a48(0xcd)]("click", async () => {
    const _0x7be17a = _0x518a48,
      _0x55bd13 = output["textContent"];
    try {
      await navigator[_0x7be17a(0xee)][_0x7be17a(0xe7)](_0x55bd13),
        (copyBtn["textContent"] = _0x7be17a(0xf0)),
        setTimeout(() => {
          const _0x4bcf43 = _0x7be17a;
          copyBtn["innerHTML"] = _0x4bcf43(0xdb);
        }, 0x5dc);
    } catch (_0x5645d4) {
      (copyBtn[_0x7be17a(0xdf)] = _0x7be17a(0xe1)),
        setTimeout(() => {
          const _0x2c704d = _0x7be17a;
          copyBtn[_0x2c704d(0xe5)] = _0x2c704d(0xdb);
        }, 0x5dc);
    }
  });
