import h, { useState as M, useEffect as X } from "react";
import './index.css';const me = "_captcha__wrapper_1pyfx_1", pe = "_captcha__btn_1pyfx_23", he = "_captcha__btn__main_1pyfx_47", Ce = "_captcha__btn__footer_1pyfx_71", be = "_captcha__unchecked_1pyfx_81", ve = "_captcha__content_1pyfx_97", g = {
  captcha__wrapper: me,
  captcha__btn: pe,
  captcha__btn__main: he,
  captcha__btn__footer: Ce,
  captcha__unchecked: be,
  captcha__content: ve
};
var R = { exports: {} }, E = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B;
function ge() {
  if (B) return E;
  B = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(a, c, l) {
    var C = null;
    if (l !== void 0 && (C = "" + l), c.key !== void 0 && (C = "" + c.key), "key" in c) {
      l = {};
      for (var m in c)
        m !== "key" && (l[m] = c[m]);
    } else l = c;
    return c = l.ref, {
      $$typeof: e,
      type: a,
      key: C,
      ref: c !== void 0 ? c : null,
      props: l
    };
  }
  return E.Fragment = t, E.jsx = n, E.jsxs = n, E;
}
var x = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H;
function Ee() {
  return H || (H = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === fe ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case y:
          return "Fragment";
        case ne:
          return "Profiler";
        case te:
          return "StrictMode";
        case ie:
          return "Suspense";
        case se:
          return "SuspenseList";
        case ue:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case re:
            return "Portal";
          case oe:
            return (r.displayName || "Context") + ".Provider";
          case ae:
            return (r._context.displayName || "Context") + ".Consumer";
          case ce:
            var o = r.render;
            return r = r.displayName, r || (r = o.displayName || o.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case le:
            return o = r.displayName || null, o !== null ? o : e(r.type) || "Memo";
          case V:
            o = r._payload, r = r._init;
            try {
              return e(r(o));
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
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var i = o.error, u = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return i.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), t(r);
      }
    }
    function a(r) {
      if (r === y) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === V)
        return "<...>";
      try {
        var o = e(r);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var r = P.A;
      return r === null ? null : r.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function C(r) {
      if (Y.call(r, "key")) {
        var o = Object.getOwnPropertyDescriptor(r, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function m(r, o) {
      function i() {
        D || (D = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: i,
        configurable: !0
      });
    }
    function b() {
      var r = e(this.type);
      return $[r] || ($[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function ee(r, o, i, u, p, _, k, S) {
      return i = _.ref, r = {
        $$typeof: I,
        type: r,
        key: o,
        props: _,
        _owner: p
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: b
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
        value: k
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function L(r, o, i, u, p, _, k, S) {
      var f = o.children;
      if (f !== void 0)
        if (u)
          if (_e(f)) {
            for (u = 0; u < f.length; u++)
              Z(f[u]);
            Object.freeze && Object.freeze(f);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else Z(f);
      if (Y.call(o, "key")) {
        f = e(r);
        var v = Object.keys(o).filter(function(de) {
          return de !== "key";
        });
        u = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", W[f + u] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          f,
          v,
          f
        ), W[f + u] = !0);
      }
      if (f = null, i !== void 0 && (n(i), f = "" + i), C(o) && (n(o.key), f = "" + o.key), "key" in o) {
        i = {};
        for (var A in o)
          A !== "key" && (i[A] = o[A]);
      } else i = o;
      return f && m(
        i,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), ee(
        r,
        f,
        _,
        p,
        c(),
        i,
        k,
        S
      );
    }
    function Z(r) {
      typeof r == "object" && r !== null && r.$$typeof === I && r._store && (r._store.validated = 1);
    }
    var w = h, I = Symbol.for("react.transitional.element"), re = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), te = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), ae = Symbol.for("react.consumer"), oe = Symbol.for("react.context"), ce = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), se = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), ue = Symbol.for("react.activity"), fe = Symbol.for("react.client.reference"), P = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, _e = Array.isArray, T = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var D, $ = {}, F = w.react_stack_bottom_frame.bind(
      w,
      l
    )(), z = T(a(l)), W = {};
    x.Fragment = y, x.jsx = function(r, o, i, u, p) {
      var _ = 1e4 > P.recentlyCreatedOwnerStacks++;
      return L(
        r,
        o,
        i,
        !1,
        u,
        p,
        _ ? Error("react-stack-top-frame") : F,
        _ ? T(a(r)) : z
      );
    }, x.jsxs = function(r, o, i, u, p) {
      var _ = 1e4 > P.recentlyCreatedOwnerStacks++;
      return L(
        r,
        o,
        i,
        !0,
        u,
        p,
        _ ? Error("react-stack-top-frame") : F,
        _ ? T(a(r)) : z
      );
    };
  })()), x;
}
var G;
function xe() {
  return G || (G = 1, process.env.NODE_ENV === "production" ? R.exports = ge() : R.exports = Ee()), R.exports;
}
var s = xe(), Q = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, U = h.createContext && /* @__PURE__ */ h.createContext(Q), we = ["attr", "size", "title"];
function Re(e, t) {
  if (e == null) return {};
  var n = je(e, t), a, c;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (c = 0; c < l.length; c++)
      a = l[c], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
  }
  return n;
}
function je(e, t) {
  if (e == null) return {};
  var n = {};
  for (var a in e)
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) >= 0) continue;
      n[a] = e[a];
    }
  return n;
}
function j() {
  return j = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, j.apply(this, arguments);
}
function J(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(c) {
      return Object.getOwnPropertyDescriptor(e, c).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? J(Object(n), !0).forEach(function(a) {
      Oe(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : J(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function Oe(e, t, n) {
  return t = ye(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ye(e) {
  var t = Pe(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Pe(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function K(e) {
  return e && e.map((t, n) => /* @__PURE__ */ h.createElement(t.tag, O({
    key: n
  }, t.attr), K(t.child)));
}
function d(e) {
  return (t) => /* @__PURE__ */ h.createElement(Te, j({
    attr: O({}, e.attr)
  }, t), K(e.child));
}
function Te(e) {
  var t = (n) => {
    var {
      attr: a,
      size: c,
      title: l
    } = e, C = Re(e, we), m = c || n.size || "1em", b;
    return n.className && (b = n.className), e.className && (b = (b ? b + " " : "") + e.className), /* @__PURE__ */ h.createElement("svg", j({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, a, C, {
      className: b,
      style: O(O({
        color: e.color || n.color
      }, n.style), e.style),
      height: m,
      width: m,
      xmlns: "http://www.w3.org/2000/svg"
    }), l && /* @__PURE__ */ h.createElement("title", null, l), e.children);
  };
  return U !== void 0 ? /* @__PURE__ */ h.createElement(U.Consumer, null, (n) => t(n)) : t(Q);
}
function ke(e) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" }, child: [] }] })(e);
}
function Se(e) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" }, child: [] }] })(e);
}
function Ae(e) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C13.6569 6 15.1569 6.67157 16.2426 7.75736L12 12Z" }, child: [] }] })(e);
}
function Ne(e) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C15.3137 6 18 8.68629 18 12H12Z" }, child: [] }] })(e);
}
function Me(e) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 13.6569 17.3284 15.1569 16.2426 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Le(e) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ze(e) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C10.3431 18 8.84311 17.3284 7.75732 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ie(e) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM17.9998 12C17.9998 15.3137 15.3135 18 11.9998 18C8.68606 18 5.99977 15.3137 5.99977 12H11.9998V6C15.3135 6 17.9998 8.68629 17.9998 12Z" }, child: [] }] })(e);
}
function Ve(e) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 10.3431 6.67157 8.84315 7.75736 7.75736L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(e);
}
function Ye(e) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" }, child: [] }] })(e);
}
const q = [
  Ae,
  Ne,
  Me,
  Le,
  Ze,
  Ie,
  Ve,
  Ye
];
function De() {
  const [e, t] = M(7);
  X(() => {
    const a = setInterval(() => {
      t((c) => (c + 1) % q.length);
    }, 100);
    return () => {
      clearInterval(a);
    };
  }, []);
  const n = q[e];
  return /* @__PURE__ */ s.jsx(n, { style: { margin: -8 }, size: 46 });
}
const $e = "_timer__wrapper_17tk4_1", N = {
  timer__wrapper: $e,
  "timer--last": "_timer--last_17tk4_33"
};
function Fe(e) {
  return e < 10;
}
function ze({ start: e = 60, on_time_finished: t }) {
  const [n, a] = M(e);
  return X(() => {
    const c = setInterval(() => {
      a((l) => l > 0 ? l - 1 : (t(), clearInterval(c), 0));
    }, 1e3);
    return () => {
      clearInterval(c);
    };
  }, []), /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `${N.timer__wrapper} ${Fe(n) ? N["timer--last"] : N["timer--normal"]}
		`,
      children: /* @__PURE__ */ s.jsx("span", { children: n })
    }
  );
}
function We() {
  const e = () => {
    console.log("Oops, you failed");
  };
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx("header", { children: /* @__PURE__ */ s.jsx(ze, { start: 15, on_time_finished: e }) }),
    /* @__PURE__ */ s.jsx("main", { children: "A dummy game" })
  ] });
}
function He() {
  const [e, t] = M("progress"), n = () => {
    t((a) => a === "initial" ? "progress" : a);
  };
  return /* @__PURE__ */ s.jsxs("div", { className: g.captcha__wrapper, children: [
    /* @__PURE__ */ s.jsxs(
      "button",
      {
        className: g.captcha__btn,
        onClick: n,
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: g.captcha__btn__main, children: [
            e === "initial" && /* @__PURE__ */ s.jsx("div", { className: g.captcha__unchecked }),
            e === "success" && /* @__PURE__ */ s.jsx(ke, { style: { margin: -8 }, size: 46, color: "#41A818" }),
            e === "error" && /* @__PURE__ */ s.jsx(
              Se,
              {
                style: { margin: -8 },
                size: 46,
                color: "#A81818"
              }
            ),
            e === "progress" && /* @__PURE__ */ s.jsx(De, {}),
            /* @__PURE__ */ s.jsx("p", { children: "Are you a human?" })
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: g.captcha__btn__footer, children: /* @__PURE__ */ s.jsxs("p", { children: [
            "Powered by",
            " ",
            /* @__PURE__ */ s.jsx("a", { href: "https://www.npmjs.com/package/@thebrownguy/gotcha", children: "Gotcha" })
          ] }) })
        ]
      }
    ),
    e === "progress" && /* @__PURE__ */ s.jsx("div", { className: g.captcha__content, children: /* @__PURE__ */ s.jsx(We, {}) })
  ] });
}
export {
  He as Captcha
};
