import m, { useState as J, useEffect as _e } from "react";
import './index.css';const de = "_captcha__wrapper_1pyfx_1", pe = "_captcha__btn_1pyfx_23", he = "_captcha__btn__main_1pyfx_47", me = "_captcha__btn__footer_1pyfx_71", Ce = "_captcha__unchecked_1pyfx_81", be = "_captcha__content_1pyfx_97", g = {
  captcha__wrapper: de,
  captcha__btn: pe,
  captcha__btn__main: he,
  captcha__btn__footer: me,
  captcha__unchecked: Ce,
  captcha__content: be
};
var w = { exports: {} }, E = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W;
function ve() {
  if (W) return E;
  W = 1;
  var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(a, i, l) {
    var C = null;
    if (l !== void 0 && (C = "" + l), i.key !== void 0 && (C = "" + i.key), "key" in i) {
      l = {};
      for (var p in i)
        p !== "key" && (l[p] = i[p]);
    } else l = i;
    return i = l.ref, {
      $$typeof: r,
      type: a,
      key: C,
      ref: i !== void 0 ? i : null,
      props: l
    };
  }
  return E.Fragment = t, E.jsx = n, E.jsxs = n, E;
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
var $;
function ge() {
  return $ || ($ = 1, process.env.NODE_ENV !== "production" && (function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === se ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case y:
          return "Fragment";
        case re:
          return "Profiler";
        case ee:
          return "StrictMode";
        case oe:
          return "Suspense";
        case ce:
          return "SuspenseList";
        case le:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case K:
            return "Portal";
          case ne:
            return (e.displayName || "Context") + ".Provider";
          case te:
            return (e._context.displayName || "Context") + ".Consumer";
          case ae:
            var o = e.render;
            return e = e.displayName, e || (e = o.displayName || o.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ie:
            return o = e.displayName || null, o !== null ? o : r(e.type) || "Memo";
          case Z:
            o = e._payload, e = e._init;
            try {
              return r(e(o));
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
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var c = o.error, s = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          s
        ), t(e);
      }
    }
    function a(e) {
      if (e === y) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === Z)
        return "<...>";
      try {
        var o = r(e);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = P.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function C(e) {
      if (I.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, o) {
      function c() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: c,
        configurable: !0
      });
    }
    function b() {
      var e = r(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function Q(e, o, c, s, h, _, k, S) {
      return c = _.ref, e = {
        $$typeof: L,
        type: e,
        key: o,
        props: _,
        _owner: h
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: b
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
    function N(e, o, c, s, h, _, k, S) {
      var u = o.children;
      if (u !== void 0)
        if (s)
          if (ue(u)) {
            for (s = 0; s < u.length; s++)
              M(u[s]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else M(u);
      if (I.call(o, "key")) {
        u = r(e);
        var v = Object.keys(o).filter(function(fe) {
          return fe !== "key";
        });
        s = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", F[u + s] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          s,
          u,
          v,
          u
        ), F[u + s] = !0);
      }
      if (u = null, c !== void 0 && (n(c), u = "" + c), C(o) && (n(o.key), u = "" + o.key), "key" in o) {
        c = {};
        for (var A in o)
          A !== "key" && (c[A] = o[A]);
      } else c = o;
      return u && p(
        c,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), Q(
        e,
        u,
        _,
        h,
        i(),
        c,
        k,
        S
      );
    }
    function M(e) {
      typeof e == "object" && e !== null && e.$$typeof === L && e._store && (e._store.validated = 1);
    }
    var x = m, L = Symbol.for("react.transitional.element"), K = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), re = Symbol.for("react.profiler"), te = Symbol.for("react.consumer"), ne = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), ce = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), le = Symbol.for("react.activity"), se = Symbol.for("react.client.reference"), P = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, ue = Array.isArray, T = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var V, Y = {}, D = x.react_stack_bottom_frame.bind(
      x,
      l
    )(), z = T(a(l)), F = {};
    R.Fragment = y, R.jsx = function(e, o, c, s, h) {
      var _ = 1e4 > P.recentlyCreatedOwnerStacks++;
      return N(
        e,
        o,
        c,
        !1,
        s,
        h,
        _ ? Error("react-stack-top-frame") : D,
        _ ? T(a(e)) : z
      );
    }, R.jsxs = function(e, o, c, s, h) {
      var _ = 1e4 > P.recentlyCreatedOwnerStacks++;
      return N(
        e,
        o,
        c,
        !0,
        s,
        h,
        _ ? Error("react-stack-top-frame") : D,
        _ ? T(a(e)) : z
      );
    };
  })()), R;
}
var B;
function Ee() {
  return B || (B = 1, process.env.NODE_ENV === "production" ? w.exports = ve() : w.exports = ge()), w.exports;
}
var f = Ee(), q = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, H = m.createContext && /* @__PURE__ */ m.createContext(q), Re = ["attr", "size", "title"];
function xe(r, t) {
  if (r == null) return {};
  var n = we(r, t), a, i;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(r);
    for (i = 0; i < l.length; i++)
      a = l[i], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(r, a) && (n[a] = r[a]);
  }
  return n;
}
function we(r, t) {
  if (r == null) return {};
  var n = {};
  for (var a in r)
    if (Object.prototype.hasOwnProperty.call(r, a)) {
      if (t.indexOf(a) >= 0) continue;
      n[a] = r[a];
    }
  return n;
}
function O() {
  return O = Object.assign ? Object.assign.bind() : function(r) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
    }
    return r;
  }, O.apply(this, arguments);
}
function U(r, t) {
  var n = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(r);
    t && (a = a.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function j(r) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? U(Object(n), !0).forEach(function(a) {
      Oe(r, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach(function(a) {
      Object.defineProperty(r, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return r;
}
function Oe(r, t, n) {
  return t = je(t), t in r ? Object.defineProperty(r, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : r[t] = n, r;
}
function je(r) {
  var t = ye(r, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ye(r, t) {
  if (typeof r != "object" || !r) return r;
  var n = r[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(r, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(r);
}
function X(r) {
  return r && r.map((t, n) => /* @__PURE__ */ m.createElement(t.tag, j({
    key: n
  }, t.attr), X(t.child)));
}
function d(r) {
  return (t) => /* @__PURE__ */ m.createElement(Pe, O({
    attr: j({}, r.attr)
  }, t), X(r.child));
}
function Pe(r) {
  var t = (n) => {
    var {
      attr: a,
      size: i,
      title: l
    } = r, C = xe(r, Re), p = i || n.size || "1em", b;
    return n.className && (b = n.className), r.className && (b = (b ? b + " " : "") + r.className), /* @__PURE__ */ m.createElement("svg", O({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, a, C, {
      className: b,
      style: j(j({
        color: r.color || n.color
      }, n.style), r.style),
      height: p,
      width: p,
      xmlns: "http://www.w3.org/2000/svg"
    }), l && /* @__PURE__ */ m.createElement("title", null, l), r.children);
  };
  return H !== void 0 ? /* @__PURE__ */ m.createElement(H.Consumer, null, (n) => t(n)) : t(q);
}
function Te(r) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" }, child: [] }] })(r);
}
function ke(r) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" }, child: [] }] })(r);
}
function Se(r) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C13.6569 6 15.1569 6.67157 16.2426 7.75736L12 12Z" }, child: [] }] })(r);
}
function Ae(r) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 12V6C15.3137 6 18 8.68629 18 12H12Z" }, child: [] }] })(r);
}
function Ne(r) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 13.6569 17.3284 15.1569 16.2426 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(r);
}
function Me(r) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(r);
}
function Le(r) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C10.3431 18 8.84311 17.3284 7.75732 16.2426L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(r);
}
function Ze(r) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM17.9998 12C17.9998 15.3137 15.3135 18 11.9998 18C8.68606 18 5.99977 15.3137 5.99977 12H11.9998V6C15.3135 6 17.9998 8.68629 17.9998 12Z" }, child: [] }] })(r);
}
function Ie(r) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 10.3431 6.67157 8.84315 7.75736 7.75736L12 12V6C15.3137 6 18 8.68629 18 12Z" }, child: [] }] })(r);
}
function Ve(r) {
  return d({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" }, child: [] }] })(r);
}
const G = [
  Se,
  Ae,
  Ne,
  Me,
  Le,
  Ze,
  Ie,
  Ve
];
function Ye() {
  const [r, t] = J(7);
  _e(() => {
    const a = setInterval(() => {
      t((i) => (i + 1) % G.length);
    }, 100);
    return () => {
      clearInterval(a);
    };
  }, []);
  const n = G[r];
  return /* @__PURE__ */ f.jsx(n, { style: { margin: -8 }, size: 46 });
}
function ze() {
  const [r, t] = J("initial"), n = () => {
    t((a) => a === "initial" ? "progress" : a);
  };
  return /* @__PURE__ */ f.jsxs("div", { className: g.captcha__wrapper, children: [
    /* @__PURE__ */ f.jsxs(
      "button",
      {
        className: g.captcha__btn,
        onClick: n,
        children: [
          /* @__PURE__ */ f.jsxs("div", { className: g.captcha__btn__main, children: [
            r === "initial" && /* @__PURE__ */ f.jsx("div", { className: g.captcha__unchecked }),
            r === "success" && /* @__PURE__ */ f.jsx(Te, { style: { margin: -8 }, size: 46, color: "#41A818" }),
            r === "error" && /* @__PURE__ */ f.jsx(
              ke,
              {
                style: { margin: -8 },
                size: 46,
                color: "#A81818"
              }
            ),
            r === "progress" && /* @__PURE__ */ f.jsx(Ye, {}),
            /* @__PURE__ */ f.jsx("p", { children: "Are you a human?" })
          ] }),
          /* @__PURE__ */ f.jsx("div", { className: g.captcha__btn__footer, children: /* @__PURE__ */ f.jsxs("p", { children: [
            "Powered by",
            " ",
            /* @__PURE__ */ f.jsx("a", { href: "https://www.npmjs.com/package/@thebrownguy/gotcha", children: "Gotcha" })
          ] }) })
        ]
      }
    ),
    r === "progress" && /* @__PURE__ */ f.jsxs("div", { className: g.captcha__content, children: [
      /* @__PURE__ */ f.jsx("header", { children: "Solve this captcha to prove that you are a human" }),
      /* @__PURE__ */ f.jsx("main", { children: "THis is a content" })
    ] })
  ] });
}
export {
  ze as Captcha
};
