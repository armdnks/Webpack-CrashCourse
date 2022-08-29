(() => {
  "use strict";
  var t,
    r = new Uint8Array(16);
  function o() {
    if (!t && !(t = ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) || ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return t(r);
  }
  const n = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
    e = function (t) {
      return "string" == typeof t && n.test(t);
    };
  for (var u = [], a = 0; a < 256; ++a) u.push((a + 256).toString(16).substr(1));
  console.log(
    (function (t, r, n) {
      var a = (t = t || {}).random || (t.rng || o)();
      if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), r)) {
        n = n || 0;
        for (var i = 0; i < 16; ++i) r[n + i] = a[i];
        return r;
      }
      return (function (t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          o = (u[t[r + 0]] + u[t[r + 1]] + u[t[r + 2]] + u[t[r + 3]] + "-" + u[t[r + 4]] + u[t[r + 5]] + "-" + u[t[r + 6]] + u[t[r + 7]] + "-" + u[t[r + 8]] + u[t[r + 9]] + "-" + u[t[r + 10]] + u[t[r + 11]] + u[t[r + 12]] + u[t[r + 13]] + u[t[r + 14]] + u[t[r + 15]]).toLowerCase();
        if (!e(o)) throw TypeError("Stringified UUID is invalid");
        return o;
      })(a);
    })()
  );
})();
