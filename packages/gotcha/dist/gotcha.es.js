import p, { useState as ue } from "react";
import './index.css';const fe = "_captcha__wrapper_kr6ur_1", _e = "_captcha__btn_kr6ur_15", me = "_captcha__btn__main_kr6ur_39", de = "_captcha__btn__footer_kr6ur_63", pe = "_captcha__unchecked_kr6ur_73", E = {
  captcha__wrapper: fe,
  captcha__btn: _e,
  captcha__btn__main: me,
  captcha__btn__footer: de,
  captcha__unchecked: pe
};
var j = { exports: {} }, O = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z;
function be() {
  if (z) return O;
  z = 1;
  var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(o, i, s) {
    var b = null;
    if (s !== void 0 && (b = "" + s), i.key !== void 0 && (b = "" + i.key), "key" in i) {
      s = {};
      for (var m in i)
        m !== "key" && (s[m] = i[m]);
    } else s = i;
    return i = s.ref, {
      $$typeof: r,
      type: o,
      key: b,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return O.Fragment = t, O.jsx = n, O.jsxs = n, O;
}
var g = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $;
function he() {
  return $ || ($ = 1, process.env.NODE_ENV !== "production" && (function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ie ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case P:
          return "Fragment";
        case K:
          return "Profiler";
        case Q:
          return "StrictMode";
        case ne:
          return "Suspense";
        case ae:
          return "SuspenseList";
        case ce:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case X:
            return "Portal";
          case re:
            return (e.displayName || "Context") + ".Provider";
          case ee:
            return (e._context.displayName || "Context") + ".Consumer";
          case te:
            var a = e.render;
            return e = e.displayName, e || (e = a.displayName || a.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case oe:
            return a = e.displayName || null, a !== null ? a : r(e.type) || "Memo";
          case I:
            a = e._payload, e = e._init;
            try {
              return r(e(a));
            } catch {
            }
        }
      return null;
    }
    function t(e) {
      return "" + e;
    }
    function n(e) {
      try {
        t(e);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var c = a.error, l = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          l
        ), t(e);
      }
    }
    function o(e) {
      if (e === P) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === I)
        return "<...>";
      try {
        var a = r(e);
        return a ? "<" + a + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = T.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function b(e) {
      if (L.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, a) {
      function c() {
        D || (D = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: c,
        configurable: !0
      });
    }
    function h() {
      var e = r(this.type);
      return M[e] || (M[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function B(e, a, c, l, d, _, k, S) {
      return c = _.ref, e = {
        $$typeof: Y,
        type: e,
        key: a,
        props: _,
        _owner: d
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: h
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function C(e, a, c, l, d, _, k, S) {
      var u = a.children;
      if (u !== void 0)
        if (l)
          if (se(u)) {
            for (l = 0; l < u.length; l++)
              N(u[l]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else N(u);
      if (L.call(a, "key")) {
        u = r(e);
        var v = Object.keys(a).filter(function(le) {
          return le !== "key";
        });
        l = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", W[u + l] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          u,
          v,
          u
        ), W[u + l] = !0);
      }
      if (u = null, c !== void 0 && (n(c), u = "" + c), b(a) && (n(a.key), u = "" + a.key), "key" in a) {
        c = {};
        for (var A in a)
          A !== "key" && (c[A] = a[A]);
      } else c = a;
      return u && m(
        c,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), B(
        e,
        u,
        _,
        d,
        i(),
        c,
        k,
        S
      );
    }
    function N(e) {
      typeof e == "object" && e !== null && e.$$typeof === Y && e._store && (e._store.validated = 1);
    }
    var R = p, Y = Symbol.for("react.transitional.element"), X = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), K = Symbol.for("react.profiler"), ee = Symbol.for("react.consumer"), re = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), ce = Symbol.for("react.activity"), ie = Symbol.for("react.client.reference"), T = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, se = Array.isArray, x = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var D, M = {}, F = R.react_stack_bottom_frame.bind(
      R,
      s
    )(), V = x(o(s)), W = {};
    g.Fragment = P, g.jsx = function(e, a, c, l, d) {
      var _ = 1e4 > T.recentlyCreatedOwnerStacks++;
      return C(
        e,
        a,
        c,
        !1,
        l,
        d,
        _ ? Error("react-stack-top-frame") : F,
        _ ? x(o(e)) : V
      );
    }, g.jsxs = function(e, a, c, l, d) {
      var _ = 1e4 > T.recentlyCreatedOwnerStacks++;
      return C(
        e,
        a,
        c,
        !0,
        l,
        d,
        _ ? Error("react-stack-top-frame") : F,
        _ ? x(o(e)) : V
      );
    };
  })()), g;
}
var H;
function ve() {
  return H || (H = 1, process.env.NODE_ENV === "production" ? j.exports = be() : j.exports = he()), j.exports;
}
var f = ve(), J = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, U = p.createContext && /* @__PURE__ */ p.createContext(J), Ee = ["attr", "size", "title"];
function Oe(r, t) {
  if (r == null) return {};
  var n = ge(r, t), o, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(r);
    for (i = 0; i < s.length; i++)
      o = s[i], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(r, o) && (n[o] = r[o]);
  }
  return n;
}
function ge(r, t) {
  if (r == null) return {};
  var n = {};
  for (var o in r)
    if (Object.prototype.hasOwnProperty.call(r, o)) {
      if (t.indexOf(o) >= 0) continue;
      n[o] = r[o];
    }
  return n;
}
function w() {
  return w = Object.assign ? Object.assign.bind() : function(r) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
    }
    return r;
  }, w.apply(this, arguments);
}
function G(r, t) {
  var n = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    t && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function y(r) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? G(Object(n), !0).forEach(function(o) {
      Re(r, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n)) : G(Object(n)).forEach(function(o) {
      Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return r;
}
function Re(r, t, n) {
  return t = je(t), t in r ? Object.defineProperty(r, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : r[t] = n, r;
}
function je(r) {
  var t = we(r, "string");
  return typeof t == "symbol" ? t : t + "";
}
function we(r, t) {
  if (typeof r != "object" || !r) return r;
  var n = r[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(r, t);
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(r);
}
function Z(r) {
  return r && r.map((t, n) => /* @__PURE__ */ p.createElement(t.tag, y({
    key: n
  }, t.attr), Z(t.child)));
}
function q(r) {
  return (t) => /* @__PURE__ */ p.createElement(ye, w({
    attr: y({}, r.attr)
  }, t), Z(r.child));
}
function ye(r) {
  var t = (n) => {
    var {
      attr: o,
      size: i,
      title: s
    } = r, b = Oe(r, Ee), m = i || n.size || "1em", h;
    return n.className && (h = n.className), r.className && (h = (h ? h + " " : "") + r.className), /* @__PURE__ */ p.createElement("svg", w({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, o, b, {
      className: h,
      style: y(y({
        color: r.color || n.color
      }, n.style), r.style),
      height: m,
      width: m,
      xmlns: "http://www.w3.org/2000/svg"
    }), s && /* @__PURE__ */ p.createElement("title", null, s), r.children);
  };
  return U !== void 0 ? /* @__PURE__ */ p.createElement(U.Consumer, null, (n) => t(n)) : t(J);
}
function Pe(r) {
  return q({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" }, child: [] }] })(r);
}
function Te(r) {
  return q({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" }, child: [] }] })(r);
}
function ke() {
  const [r, t] = ue("initial"), n = () => {
    t((o) => o === "initial" ? "error" : "initial");
  };
  return /* @__PURE__ */ f.jsxs("div", { className: E.captcha__wrapper, children: [
    /* @__PURE__ */ f.jsxs(
      "button",
      {
        className: E.captcha__btn,
        onClick: n,
        children: [
          /* @__PURE__ */ f.jsxs("div", { className: E.captcha__btn__main, children: [
            r === "initial" && /* @__PURE__ */ f.jsx("div", { className: E.captcha__unchecked }),
            r === "success" && /* @__PURE__ */ f.jsx(Pe, { style: { margin: -8 }, size: 46, color: "#41A818" }),
            r === "error" && /* @__PURE__ */ f.jsx(Te, { style: { margin: -8 }, size: 46, color: "#A81818" }),
            /* @__PURE__ */ f.jsx("p", { children: "Are you a human?" })
          ] }),
          /* @__PURE__ */ f.jsx("div", { className: E.captcha__btn__footer, children: /* @__PURE__ */ f.jsxs("p", { children: [
            "Powered by",
            " ",
            /* @__PURE__ */ f.jsx("a", { href: "https://www.npmjs.com/package/@thebrownguy/gotcha", children: "Gotcha" })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ f.jsx("div", { className: E.captcha__content })
  ] });
}
export {
  ke as Captcha
};
