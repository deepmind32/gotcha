import j, { useState as O, useEffect as A, useRef as ve } from "react";
import './index.css';var L = { exports: {} }, S = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ee;
function ge() {
  if (ee) return S;
  ee = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(a, i, l) {
    var h = null;
    if (l !== void 0 && (h = "" + l), i.key !== void 0 && (h = "" + i.key), "key" in i) {
      l = {};
      for (var _ in i)
        _ !== "key" && (l[_] = i[_]);
    } else l = i;
    return i = l.ref, {
      $$typeof: e,
      type: a,
      key: h,
      ref: i !== void 0 ? i : null,
      props: l
    };
  }
  return S.Fragment = t, S.jsx = n, S.jsxs = n, S;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var re;
function we() {
  return re || (re = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === he ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case m:
          return "Fragment";
        case E:
          return "Profiler";
        case b:
          return "StrictMode";
        case ue:
          return "Suspense";
        case _e:
          return "SuspenseList";
        case fe:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case C:
            return "Portal";
          case P:
            return (r.displayName || "Context") + ".Provider";
          case $:
            return (r._context.displayName || "Context") + ".Consumer";
          case T:
            var s = r.render;
            return r = r.displayName, r || (r = s.displayName || s.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case de:
            return s = r.displayName || null, s !== null ? s : e(r.type) || "Memo";
          case U:
            s = r._payload, r = r._init;
            try {
              return e(r(s));
            } catch {
            }
        }
      return null;
    }
    function t(r) {
      return "" + r;
    }
    function n(r) {
      try {
        t(r);
        var s = !1;
      } catch {
        s = !0;
      }
      if (s) {
        s = console;
        var u = s.error, d = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return u.call(
          s,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), t(r);
      }
    }
    function a(r) {
      if (r === m) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === U)
        return "<...>";
      try {
        var s = e(r);
        return s ? "<" + s + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var r = D.A;
      return r === null ? null : r.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function h(r) {
      if (G.call(r, "key")) {
        var s = Object.getOwnPropertyDescriptor(r, "key").get;
        if (s && s.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function _(r, s) {
      function u() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          s
        ));
      }
      u.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: u,
        configurable: !0
      });
    }
    function o() {
      var r = e(this.type);
      return J[r] || (J[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function I(r, s, u, d, x, w, H, Y) {
      return u = w.ref, r = {
        $$typeof: k,
        type: r,
        key: s,
        props: w,
        _owner: x
      }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: o
      }) : Object.defineProperty(r, "ref", { enumerable: !1, value: null }), r._store = {}, Object.defineProperty(r._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(r, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(r, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: H
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function V(r, s, u, d, x, w, H, Y) {
      var f = s.children;
      if (f !== void 0)
        if (d)
          if (me(f)) {
            for (d = 0; d < f.length; d++)
              M(f[d]);
            Object.freeze && Object.freeze(f);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else M(f);
      if (G.call(s, "key")) {
        f = e(r);
        var R = Object.keys(s).filter(function(pe) {
          return pe !== "key";
        });
        d = 0 < R.length ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}", K[f + d] || (R = 0 < R.length ? "{" + R.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          f,
          R,
          f
        ), K[f + d] = !0);
      }
      if (f = null, u !== void 0 && (n(u), f = "" + u), h(s) && (n(s.key), f = "" + s.key), "key" in s) {
        u = {};
        for (var B in s)
          B !== "key" && (u[B] = s[B]);
      } else u = s;
      return f && _(
        u,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), I(
        r,
        f,
        w,
        x,
        i(),
        u,
        H,
        Y
      );
    }
    function M(r) {
      typeof r == "object" && r !== null && r.$$typeof === k && r._store && (r._store.validated = 1);
    }
    var g = j, k = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), $ = Symbol.for("react.consumer"), P = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), _e = Symbol.for("react.suspense_list"), de = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), fe = Symbol.for("react.activity"), he = Symbol.for("react.client.reference"), D = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = Object.prototype.hasOwnProperty, me = Array.isArray, W = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var q, J = {}, X = g.react_stack_bottom_frame.bind(
      g,
      l
    )(), Q = W(a(l)), K = {};
    N.Fragment = m, N.jsx = function(r, s, u, d, x) {
      var w = 1e4 > D.recentlyCreatedOwnerStacks++;
      return V(
        r,
        s,
        u,
        !1,
        d,
        x,
        w ? Error("react-stack-top-frame") : X,
        w ? W(a(r)) : Q
      );
    }, N.jsxs = function(r, s, u, d, x) {
      var w = 1e4 > D.recentlyCreatedOwnerStacks++;
      return V(
        r,
        s,
        u,
        !0,
        d,
        x,
        w ? Error("react-stack-top-frame") : X,
        w ? W(a(r)) : Q
      );
    };
  })()), N;
}
var te;
function Ce() {
  return te || (te = 1, process.env.NODE_ENV === "production" ? L.exports = ge() : L.exports = we()), L.exports;
}
var c = Ce(), ie = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ne = j.createContext && /* @__PURE__ */ j.createContext(ie), be = ["attr", "size", "title"];
function xe(e, t) {
  if (e == null) return {};
  var n = ye(e, t), a, i;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (i = 0; i < l.length; i++)
      a = l[i], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
  }
  return n;
}
function ye(e, t) {
  if (e == null) return {};
  var n = {};
  for (var a in e)
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) >= 0) continue;
      n[a] = e[a];
    }
  return n;
}
function z() {
  return z = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, z.apply(this, arguments);
}
function ae(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ae(Object(n), !0).forEach(function(a) {
      je(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ae(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function je(e, t, n) {
  return t = ke(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ke(e) {
  var t = Ee(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ee(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function le(e) {
  return e && e.map((t, n) => /* @__PURE__ */ j.createElement(t.tag, Z({
    key: n
  }, t.attr), le(t.child)));
}
function p(e) {
  return (t) => /* @__PURE__ */ j.createElement(Re, z({
    attr: Z({}, e.attr)
  }, t), le(e.child));
}
function Re(e) {
  var t = (n) => {
    var {
      attr: a,
      size: i,
      title: l
    } = e, h = xe(e, be), _ = i || n.size || "1em", o;
    return n.className && (o = n.className), e.className && (o = (o ? o + " " : "") + e.className), /* @__PURE__ */ j.createElement("svg", z({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, a, h, {
      className: o,
      style: Z(Z({
        color: e.color || n.color
      }, n.style), e.style),
      height: _,
      width: _,
      xmlns: "http://www.w3.org/2000/svg"
    }), l && /* @__PURE__ */ j.createElement("title", null, l), e.children);
  };
  return ne !== void 0 ? /* @__PURE__ */ j.createElement(ne.Consumer, null, (n) => t(n)) : t(ie);
}
function Oe(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" }, child: [] }] })(e);
}
function Pe(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" }, child: [] }] })(e);
}
function Te(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C13.6569 6 15.1569 6.67157 16.2426 7.75736L12 12Z" }, child: [] }] })(e);
}
function Se(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C15.3137 6 18 8.68629 18 12H12Z" }, child: [] }] })(e);
}
function Ne(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 13.6569 17.3284 15.1569 16.2426 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ae(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Me(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C10.3431 18 8.84311 17.3284 7.75732 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Le(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM17.9998 12C17.9998 15.3137 15.3135 18 11.9998 18C8.68606 18 5.99977 15.3137 5.99977 12H11.9998V6C15.3135 6 17.9998 8.68629 17.9998 12Z" }, child: [] }] })(e);
}
function ze(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 10.3431 6.67157 8.84315 7.75736 7.75736L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ze(e) {
  return p({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" }, child: [] }] })(e);
}
function Ie(e) {
  return p({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" }, child: [] }] })(e);
}
function Ve(e) {
  return p({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M4 2v18H3v2h4v-2H6v-5h13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6V2H4zm4 3v2h2V5h2v2h2V5h2v2h2v2h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H8v-2H6V9h2V7H6V5h2z" }, child: [] }, { tag: "path", attr: { d: "M8 9h2v2H8zm4 0h2v2h-2zm-2-2h2v2h-2zm4 0h2v2h-2z" }, child: [] }] })(e);
}
function $e(e) {
  return p({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "28", d: "M288 193s12.18-6-32-6a80 80 0 1 0 80 80" }, child: [] }, { tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "28", d: "m256 149 40 40-40 40" }, child: [] }, { tag: "path", attr: { fill: "none", strokeMiterlimit: "10", strokeWidth: "32", d: "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" }, child: [] }] })(e);
}
const De = "_captcha__wrapper_1drdb_5", We = "_captcha__failed_1drdb_91", He = "_captcha__failed__content_1drdb_121", Ye = "_captcha__btn_1drdb_149", Be = "_captcha__btn__main_1drdb_181", Fe = "_captcha__btn__footer_1drdb_205", Ue = "_captcha__unchecked_1drdb_215", Ge = "_captcha__content_1drdb_231", y = {
  captcha__wrapper: De,
  captcha__failed: We,
  captcha__failed__content: He,
  captcha__btn: Ye,
  captcha__btn__main: Be,
  captcha__btn__footer: Fe,
  captcha__unchecked: Ue,
  captcha__content: Ge
}, ce = [
  Te,
  Se,
  Ne,
  Ae,
  Me,
  Le,
  ze,
  Ze
];
function qe() {
  const [e, t] = O(7);
  A(() => {
    const a = setInterval(() => {
      t((i) => (i + 1) % ce.length);
    }, 100);
    return () => {
      clearInterval(a);
    };
  }, []);
  const n = ce[e];
  return /* @__PURE__ */ c.jsx(n, { style: { margin: -8 }, size: 46 });
}
const Je = "_timer__wrapper_17tk4_1", F = {
  timer__wrapper: Je,
  "timer--last": "_timer--last_17tk4_33"
};
function Xe(e) {
  return e < 10;
}
function Qe({ start: e = 60, on_time_finished: t }) {
  const [n, a] = O(e);
  return A(() => {
    const i = setInterval(() => {
      a((l) => l > 0 ? l - 1 : (t(), clearInterval(i), 0));
    }, 1e3);
    return () => {
      clearInterval(i);
    };
  }, []), A(() => {
    a(e);
  }, [e]), /* @__PURE__ */ c.jsx(
    "div",
    {
      className: `${F.timer__wrapper} ${Xe(n) ? F["timer--last"] : F["timer--normal"]}
		`,
      children: /* @__PURE__ */ c.jsx("span", { children: n })
    }
  );
}
const Ke = "_wasd__display_1j3za_1", er = "_wasd__display__row_1j3za_9", rr = "_wasd__key_1j3za_31", tr = "_active_1j3za_57", nr = "_wrong_1j3za_65", ar = "_correct_1j3za_77", cr = "_pressed_1j3za_89", sr = "_streaks_1j3za_103", v = {
  wasd__display: Ke,
  wasd__display__row: er,
  wasd__key: rr,
  active: tr,
  wrong: nr,
  correct: ar,
  pressed: cr,
  streaks: sr
}, or = "_streak_meter_1o9ug_1", ir = "_intermedite_1o9ug_29", lr = "_advance_1o9ug_37", ur = "_fire_big_1o9ug_1", se = {
  streak_meter: or,
  intermedite: ir,
  advance: lr,
  fire_big: ur
};
function _r(e) {
  return e == 0 ? "🔥x0" : e >= 1 && e <= 3 ? Array(e).fill("🔥").join("") : `🔥x${e}`;
}
function dr(e) {
  return e <= 5 ? "beginner" : e <= 15 ? "intermediate" : "advance";
}
function fr({
  streak: e,
  max_streak: t = void 0,
  target: n = "♾"
}) {
  return /* @__PURE__ */ c.jsxs("div", { className: se.streak_meter, children: [
    /* @__PURE__ */ c.jsxs("p", { className: se[dr(e)], children: [
      _r(e),
      "/",
      n
    ] }),
    typeof t < "u" && /* @__PURE__ */ c.jsxs("p", { children: [
      "Max Streak: ",
      t
    ] })
  ] });
}
function hr(e, t, n) {
  return e ? t === n ? "correct" : "wrong" : "normal";
}
function mr(e) {
  const t = ["w", "a", "s", "d"];
  let n = "";
  for (let a = 0; a < e; a++) {
    const i = Math.floor(Math.random() * t.length);
    n += t[i];
  }
  return n;
}
const oe = {
  w: ["w", "W", "ArrowUp"],
  a: ["a", "A", "ArrowLeft"],
  s: ["s", "S", "ArrowDown"],
  d: ["d", "D", "ArrowRight"]
};
function pr(e) {
  return Object.keys(oe).find((t) => oe[t].includes(e));
}
function vr({
  target: e = 5,
  times: t = [6, 30],
  speed_factor: n = 1,
  onSuccess: a,
  onFail: i
}) {
  const [l, h] = O({
    w: "normal",
    a: "normal",
    s: "normal",
    d: "normal"
  }), _ = mr(100), o = ve({
    active: !1,
    word: _,
    corrects: Array(_.length).fill(void 0),
    index: 0,
    streak: 0,
    max_streak: 0
  }), [I, V] = O(t[0]), M = () => {
    o.current.active = !0;
  };
  return A(() => {
    const g = setInterval(() => {
      if (!o.current.active) return;
      if (o.current.index >= o.current.word.length) {
        o.current.active = !1, clearInterval(g);
        const C = o.current.corrects, m = C.filter((b) => b === !0).length;
        m > 0 ? a({
          score: m / C.length,
          streak: o.current.max_streak,
          message: `Score: ${m}/${C.length}, Best streak: ${o.current.max_streak}`
        }) : i({
          score: 0,
          message: "You failed!"
        });
        return;
      }
      const k = o.current.word[o.current.index];
      o.current.index += 1, h({
        w: "normal",
        a: "normal",
        s: "normal",
        d: "normal",
        [k]: "active"
      });
    }, 600 * n);
    return () => clearInterval(g);
  }, [n, a, i]), A(() => {
    const g = /* @__PURE__ */ new Set(), k = (m) => {
      const b = pr(m.key);
      if (!b || g.has(m.key)) return;
      g.add(m.key);
      const E = o.current.index - 1, $ = o.current.word[E], P = hr(
        o.current.active,
        b,
        $
      );
      typeof o.current.corrects[E] > "u" && (P === "correct" ? (o.current.corrects[E] = !0, o.current.streak++, o.current.max_streak = Math.max(
        o.current.max_streak,
        o.current.streak
      )) : P === "wrong" && (o.current.corrects[E] = !1, o.current.streak = 0)), h((T) => ({ ...T, [b]: P })), setTimeout(() => {
        h((T) => ({ ...T, [b]: "normal" }));
      }, 150);
    }, C = (m) => {
      g.delete(m.key);
    };
    return window.addEventListener("keydown", k), window.addEventListener("keyup", C), () => {
      window.removeEventListener("keydown", k), window.removeEventListener("keyup", C);
    };
  }, []), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("header", { children: [
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("h3", { children: "Show off your reflexes" }),
        /* @__PURE__ */ c.jsx("p", { children: "Use WASD or arrow keys to hit the glowing key (yellow)." })
      ] }),
      /* @__PURE__ */ c.jsx(Qe, { start: I, on_time_finished: M })
    ] }),
    /* @__PURE__ */ c.jsxs("main", { style: { position: "relative" }, children: [
      /* @__PURE__ */ c.jsx("div", { className: v.streaks, children: /* @__PURE__ */ c.jsx(
        fr,
        {
          max_streak: o.current.max_streak,
          streak: o.current.streak,
          target: e
        }
      ) }),
      /* @__PURE__ */ c.jsxs("div", { className: v.wasd__display, children: [
        /* @__PURE__ */ c.jsx("div", { className: v.wasd__display__row, children: /* @__PURE__ */ c.jsx(
          "div",
          {
            className: `${v.wasd__key} ${v[l.w]}`,
            children: "W"
          }
        ) }),
        /* @__PURE__ */ c.jsxs("div", { className: v.wasd__display__row, children: [
          /* @__PURE__ */ c.jsx(
            "div",
            {
              className: `${v.wasd__key} ${v[l.a]}`,
              children: "A"
            }
          ),
          /* @__PURE__ */ c.jsx(
            "div",
            {
              className: `${v.wasd__key} ${v[l.s]}`,
              children: "S"
            }
          ),
          /* @__PURE__ */ c.jsx(
            "div",
            {
              className: `${v.wasd__key} ${v[l.d]}`,
              children: "D"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function wr() {
  const [e, t] = O(
    process.env.NODE_ENV === "development" ? "progress" : "initial"
  ), [n, a] = O(null), i = () => {
    t((_) => _ === "initial" ? "progress" : _);
  }, l = ({ score: _, message: o }) => {
    a({
      score: _,
      message: o,
      type: "failure"
    });
  }, h = ({ score: _, message: o }) => {
    a({
      score: _,
      message: o,
      type: "success"
    });
  };
  return /* @__PURE__ */ c.jsxs("div", { className: y.captcha__wrapper, children: [
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        className: y.captcha__btn,
        onClick: i,
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: y.captcha__btn__main, children: [
            e === "initial" && /* @__PURE__ */ c.jsx("div", { className: y.captcha__unchecked }),
            e === "success" && /* @__PURE__ */ c.jsx(Oe, { style: { margin: -8 }, size: 46, color: "#41A818" }),
            e === "error" && /* @__PURE__ */ c.jsx(
              Pe,
              {
                style: { margin: -8 },
                size: 46,
                color: "#A81818"
              }
            ),
            e === "progress" && /* @__PURE__ */ c.jsx(qe, {}),
            /* @__PURE__ */ c.jsx("p", { children: "Are you a human?" })
          ] }),
          /* @__PURE__ */ c.jsx("div", { className: y.captcha__btn__footer, children: /* @__PURE__ */ c.jsxs("p", { children: [
            "Powered by",
            " ",
            /* @__PURE__ */ c.jsx("a", { href: "https://www.npmjs.com/package/@thebrownguy/gotcha", children: "Gotcha" })
          ] }) })
        ]
      }
    ),
    e === "progress" && /* @__PURE__ */ c.jsxs("div", { className: y.captcha__content, children: [
      /* @__PURE__ */ c.jsx(
        vr,
        {
          onFail: l,
          onSuccess: h
        }
      ),
      n && /* @__PURE__ */ c.jsx("div", { className: y.captcha__failed, children: /* @__PURE__ */ c.jsxs("div", { className: y.captcha__failed__content, children: [
        n.type === "failure" ? /* @__PURE__ */ c.jsx(Ie, { color: "#b0b0b0", size: "32px" }) : /* @__PURE__ */ c.jsx(Ve, { color: "#b0b0b0", size: "32px" }),
        /* @__PURE__ */ c.jsx("p", { children: n.message }),
        /* @__PURE__ */ c.jsx("button", { style: { marginTop: 16 }, children: /* @__PURE__ */ c.jsx($e, { size: "32px" }) })
      ] }) })
    ] })
  ] });
}
export {
  wr as Captcha
};
