import _ from "react";
import './index.css';const le = "_captcha__wrapper_nuio2_1", ue = "_captcha__btn_nuio2_13", h = {
  captcha__wrapper: le,
  captcha__btn: ue
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
function fe() {
  if (z) return O;
  z = 1;
  var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(o, i, s) {
    var b = null;
    if (s !== void 0 && (b = "" + s), i.key !== void 0 && (b = "" + i.key), "key" in i) {
      s = {};
      for (var d in i)
        d !== "key" && (s[d] = i[d]);
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
var R = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var V;
function me() {
  return V || (V = 1, process.env.NODE_ENV !== "production" && (function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ce ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case P:
          return "Fragment";
        case Q:
          return "Profiler";
        case Z:
          return "StrictMode";
        case te:
          return "Suspense";
        case ne:
          return "SuspenseList";
        case oe:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case X:
            return "Portal";
          case ee:
            return (e.displayName || "Context") + ".Provider";
          case K:
            return (e._context.displayName || "Context") + ".Consumer";
          case re:
            var a = e.render;
            return e = e.displayName, e || (e = a.displayName || a.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ae:
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
      if (D.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, a) {
      function c() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: c,
        configurable: !0
      });
    }
    function v() {
      var e = r(this.type);
      return W[e] || (W[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function B(e, a, c, l, p, f, S, k) {
      return c = f.ref, e = {
        $$typeof: Y,
        type: e,
        key: a,
        props: f,
        _owner: p
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: v
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
        value: S
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function A(e, a, c, l, p, f, S, k) {
      var u = a.children;
      if (u !== void 0)
        if (l)
          if (ie(u)) {
            for (l = 0; l < u.length; l++)
              C(u[l]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else C(u);
      if (D.call(a, "key")) {
        u = r(e);
        var E = Object.keys(a).filter(function(se) {
          return se !== "key";
        });
        l = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", M[u + l] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          u,
          E,
          u
        ), M[u + l] = !0);
      }
      if (u = null, c !== void 0 && (n(c), u = "" + c), b(a) && (n(a.key), u = "" + a.key), "key" in a) {
        c = {};
        for (var N in a)
          N !== "key" && (c[N] = a[N]);
      } else c = a;
      return u && d(
        c,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), B(
        e,
        u,
        f,
        p,
        i(),
        c,
        S,
        k
      );
    }
    function C(e) {
      typeof e == "object" && e !== null && e.$$typeof === Y && e._store && (e._store.validated = 1);
    }
    var g = _, Y = Symbol.for("react.transitional.element"), X = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), Z = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), K = Symbol.for("react.consumer"), ee = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), ae = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), oe = Symbol.for("react.activity"), ce = Symbol.for("react.client.reference"), T = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, ie = Array.isArray, x = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var F, W = {}, $ = g.react_stack_bottom_frame.bind(
      g,
      s
    )(), L = x(o(s)), M = {};
    R.Fragment = P, R.jsx = function(e, a, c, l, p) {
      var f = 1e4 > T.recentlyCreatedOwnerStacks++;
      return A(
        e,
        a,
        c,
        !1,
        l,
        p,
        f ? Error("react-stack-top-frame") : $,
        f ? x(o(e)) : L
      );
    }, R.jsxs = function(e, a, c, l, p) {
      var f = 1e4 > T.recentlyCreatedOwnerStacks++;
      return A(
        e,
        a,
        c,
        !0,
        l,
        p,
        f ? Error("react-stack-top-frame") : $,
        f ? x(o(e)) : L
      );
    };
  })()), R;
}
var U;
function de() {
  return U || (U = 1, process.env.NODE_ENV === "production" ? j.exports = fe() : j.exports = me()), j.exports;
}
var m = de(), q = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, G = _.createContext && /* @__PURE__ */ _.createContext(q), pe = ["attr", "size", "title"];
function _e(r, t) {
  if (r == null) return {};
  var n = be(r, t), o, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(r);
    for (i = 0; i < s.length; i++)
      o = s[i], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(r, o) && (n[o] = r[o]);
  }
  return n;
}
function be(r, t) {
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
function J(r, t) {
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
    t % 2 ? J(Object(n), !0).forEach(function(o) {
      ve(r, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n)) : J(Object(n)).forEach(function(o) {
      Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return r;
}
function ve(r, t, n) {
  return t = Ee(t), t in r ? Object.defineProperty(r, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : r[t] = n, r;
}
function Ee(r) {
  var t = he(r, "string");
  return typeof t == "symbol" ? t : t + "";
}
function he(r, t) {
  if (typeof r != "object" || !r) return r;
  var n = r[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(r, t);
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(r);
}
function H(r) {
  return r && r.map((t, n) => /* @__PURE__ */ _.createElement(t.tag, y({
    key: n
  }, t.attr), H(t.child)));
}
function Oe(r) {
  return (t) => /* @__PURE__ */ _.createElement(Re, w({
    attr: y({}, r.attr)
  }, t), H(r.child));
}
function Re(r) {
  var t = (n) => {
    var {
      attr: o,
      size: i,
      title: s
    } = r, b = _e(r, pe), d = i || n.size || "1em", v;
    return n.className && (v = n.className), r.className && (v = (v ? v + " " : "") + r.className), /* @__PURE__ */ _.createElement("svg", w({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, o, b, {
      className: v,
      style: y(y({
        color: r.color || n.color
      }, n.style), r.style),
      height: d,
      width: d,
      xmlns: "http://www.w3.org/2000/svg"
    }), s && /* @__PURE__ */ _.createElement("title", null, s), r.children);
  };
  return G !== void 0 ? /* @__PURE__ */ _.createElement(G.Consumer, null, (n) => t(n)) : t(q);
}
function ge(r) {
  return Oe({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5Z" }, child: [] }] })(r);
}
function we() {
  return /* @__PURE__ */ m.jsxs("div", { className: h.captcha__wrapper, children: [
    /* @__PURE__ */ m.jsxs("button", { className: h.captcha__btn, children: [
      /* @__PURE__ */ m.jsxs("div", { className: h.catpcha__btn__icon, children: [
        /* @__PURE__ */ m.jsx(ge, {}),
        /* @__PURE__ */ m.jsx("p", { children: "Are you a human?" })
      ] }),
      /* @__PURE__ */ m.jsx("div", { className: h.captcha__btn__footer, children: /* @__PURE__ */ m.jsxs("p", { children: [
        "Powered by",
        " ",
        /* @__PURE__ */ m.jsx("a", { href: "https://www.npmjs.com/package/@thebrownguy/gotcha", children: "Gotcha" })
      ] }) })
    ] }),
    /* @__PURE__ */ m.jsx("div", { className: h.captcha__content })
  ] });
}
export {
  we as Captcha
};
