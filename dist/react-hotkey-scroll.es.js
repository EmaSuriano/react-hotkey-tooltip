import St, { forwardRef as mn, cloneElement as Br, useState as Rt, useLayoutEffect as gn, useEffect as it, useRef as er, createContext as yn, useContext as bn } from "react";
import { createPortal as wn } from "react-dom";
var pe = "top", ge = "bottom", ye = "right", de = "left", jt = "auto", Ot = [pe, ge, ye, de], at = "start", yt = "end", En = "clippingParents", Wr = "viewport", vt = "popper", On = "reference", fr = /* @__PURE__ */ Ot.reduce(function(e, t) {
  return e.concat([t + "-" + at, t + "-" + yt]);
}, []), Fr = /* @__PURE__ */ [].concat(Ot, [jt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + at, t + "-" + yt]);
}, []), xn = "beforeRead", Tn = "read", _n = "afterRead", An = "beforeMain", Rn = "main", Cn = "afterMain", Dn = "beforeWrite", Pn = "write", Sn = "afterWrite", Kt = [xn, Tn, _n, An, Rn, Cn, Dn, Pn, Sn];
function Ae(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function be(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ye(e) {
  var t = be(e).Element;
  return e instanceof t || e instanceof Element;
}
function he(e) {
  var t = be(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function tr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = be(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function jn(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, a = t.attributes[r] || {}, s = t.elements[r];
    !he(s) || !Ae(s) || (Object.assign(s.style, n), Object.keys(a).forEach(function(f) {
      var c = a[f];
      c === !1 ? s.removeAttribute(f) : s.setAttribute(f, c === !0 ? "" : c);
    }));
  });
}
function kn(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var a = t.elements[n], s = t.attributes[n] || {}, f = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), c = f.reduce(function(u, h) {
        return u[h] = "", u;
      }, {});
      !he(a) || !Ae(a) || (Object.assign(a.style, c), Object.keys(s).forEach(function(u) {
        a.removeAttribute(u);
      }));
    });
  };
}
const Hr = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: jn,
  effect: kn,
  requires: ["computeStyles"]
};
function we(e) {
  return e.split("-")[0];
}
var qe = Math.max, Dt = Math.min, ot = Math.round;
function zt() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ur() {
  return !/^((?!chrome|android).)*safari/i.test(zt());
}
function st(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), a = 1, s = 1;
  t && he(e) && (a = e.offsetWidth > 0 && ot(n.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && ot(n.height) / e.offsetHeight || 1);
  var f = Ye(e) ? be(e) : window, c = f.visualViewport, u = !Ur() && r, h = (n.left + (u && c ? c.offsetLeft : 0)) / a, l = (n.top + (u && c ? c.offsetTop : 0)) / s, E = n.width / a, T = n.height / s;
  return {
    width: E,
    height: T,
    top: l,
    right: h + E,
    bottom: l + T,
    left: h,
    x: h,
    y: l
  };
}
function rr(e) {
  var t = st(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function qr(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && tr(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Ee(e) {
  return be(e).getComputedStyle(e);
}
function Nn(e) {
  return ["table", "td", "th"].indexOf(Ae(e)) >= 0;
}
function We(e) {
  return ((Ye(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function kt(e) {
  return Ae(e) === "html" ? e : e.assignedSlot || e.parentNode || (tr(e) ? e.host : null) || We(e);
}
function lr(e) {
  return !he(e) || Ee(e).position === "fixed" ? null : e.offsetParent;
}
function Ln(e) {
  var t = /firefox/i.test(zt()), r = /Trident/i.test(zt());
  if (r && he(e)) {
    var n = Ee(e);
    if (n.position === "fixed")
      return null;
  }
  var a = kt(e);
  for (tr(a) && (a = a.host); he(a) && ["html", "body"].indexOf(Ae(a)) < 0; ) {
    var s = Ee(a);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function xt(e) {
  for (var t = be(e), r = lr(e); r && Nn(r) && Ee(r).position === "static"; )
    r = lr(r);
  return r && (Ae(r) === "html" || Ae(r) === "body" && Ee(r).position === "static") ? t : r || Ln(e) || t;
}
function nr(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ht(e, t, r) {
  return qe(e, Dt(t, r));
}
function Mn(e, t, r) {
  var n = ht(e, t, r);
  return n > r ? r : n;
}
function Yr() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Kr(e) {
  return Object.assign({}, Yr(), e);
}
function zr(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var In = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Kr(typeof t != "number" ? t : zr(t, Ot));
};
function $n(e) {
  var t, r = e.state, n = e.name, a = e.options, s = r.elements.arrow, f = r.modifiersData.popperOffsets, c = we(r.placement), u = nr(c), h = [de, ye].indexOf(c) >= 0, l = h ? "height" : "width";
  if (!(!s || !f)) {
    var E = In(a.padding, r), T = rr(s), O = u === "y" ? pe : de, k = u === "y" ? ge : ye, D = r.rects.reference[l] + r.rects.reference[u] - f[u] - r.rects.popper[l], P = f[u] - r.rects.reference[u], W = xt(s), q = W ? u === "y" ? W.clientHeight || 0 : W.clientWidth || 0 : 0, R = D / 2 - P / 2, o = E[O], I = q - T[l] - E[k], g = q / 2 - T[l] / 2 + R, p = ht(o, g, I), v = u;
    r.modifiersData[n] = (t = {}, t[v] = p, t.centerOffset = p - g, t);
  }
}
function Vn(e) {
  var t = e.state, r = e.options, n = r.element, a = n === void 0 ? "[data-popper-arrow]" : n;
  if (a != null && !(typeof a == "string" && (a = t.elements.popper.querySelector(a), !a))) {
    if (process.env.NODE_ENV !== "production" && (he(a) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !qr(t.elements.popper, a)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = a;
  }
}
const Bn = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: $n,
  effect: Vn,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ut(e) {
  return e.split("-")[1];
}
var Wn = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Fn(e) {
  var t = e.x, r = e.y, n = window, a = n.devicePixelRatio || 1;
  return {
    x: ot(t * a) / a || 0,
    y: ot(r * a) / a || 0
  };
}
function pr(e) {
  var t, r = e.popper, n = e.popperRect, a = e.placement, s = e.variation, f = e.offsets, c = e.position, u = e.gpuAcceleration, h = e.adaptive, l = e.roundOffsets, E = e.isFixed, T = f.x, O = T === void 0 ? 0 : T, k = f.y, D = k === void 0 ? 0 : k, P = typeof l == "function" ? l({
    x: O,
    y: D
  }) : {
    x: O,
    y: D
  };
  O = P.x, D = P.y;
  var W = f.hasOwnProperty("x"), q = f.hasOwnProperty("y"), R = de, o = pe, I = window;
  if (h) {
    var g = xt(r), p = "clientHeight", v = "clientWidth";
    if (g === be(r) && (g = We(r), Ee(g).position !== "static" && c === "absolute" && (p = "scrollHeight", v = "scrollWidth")), g = g, a === pe || (a === de || a === ye) && s === yt) {
      o = ge;
      var b = E && g === I && I.visualViewport ? I.visualViewport.height : g[p];
      D -= b - n.height, D *= u ? 1 : -1;
    }
    if (a === de || (a === pe || a === ge) && s === yt) {
      R = ye;
      var x = E && g === I && I.visualViewport ? I.visualViewport.width : g[v];
      O -= x - n.width, O *= u ? 1 : -1;
    }
  }
  var C = Object.assign({
    position: c
  }, h && Wn), $ = l === !0 ? Fn({
    x: O,
    y: D
  }) : {
    x: O,
    y: D
  };
  if (O = $.x, D = $.y, u) {
    var Y;
    return Object.assign({}, C, (Y = {}, Y[o] = q ? "0" : "", Y[R] = W ? "0" : "", Y.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + O + "px, " + D + "px)" : "translate3d(" + O + "px, " + D + "px, 0)", Y));
  }
  return Object.assign({}, C, (t = {}, t[o] = q ? D + "px" : "", t[R] = W ? O + "px" : "", t.transform = "", t));
}
function Hn(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, a = n === void 0 ? !0 : n, s = r.adaptive, f = s === void 0 ? !0 : s, c = r.roundOffsets, u = c === void 0 ? !0 : c;
  if (process.env.NODE_ENV !== "production") {
    var h = Ee(t.elements.popper).transitionProperty || "";
    f && ["transform", "top", "right", "bottom", "left"].some(function(E) {
      return h.indexOf(E) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var l = {
    placement: we(t.placement),
    variation: ut(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, pr(Object.assign({}, l, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: f,
    roundOffsets: u
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, pr(Object.assign({}, l, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Un = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Hn,
  data: {}
};
var _t = {
  passive: !0
};
function qn(e) {
  var t = e.state, r = e.instance, n = e.options, a = n.scroll, s = a === void 0 ? !0 : a, f = n.resize, c = f === void 0 ? !0 : f, u = be(t.elements.popper), h = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && h.forEach(function(l) {
    l.addEventListener("scroll", r.update, _t);
  }), c && u.addEventListener("resize", r.update, _t), function() {
    s && h.forEach(function(l) {
      l.removeEventListener("scroll", r.update, _t);
    }), c && u.removeEventListener("resize", r.update, _t);
  };
}
const Yn = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: qn,
  data: {}
};
var Kn = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ct(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Kn[t];
  });
}
var zn = {
  start: "end",
  end: "start"
};
function dr(e) {
  return e.replace(/start|end/g, function(t) {
    return zn[t];
  });
}
function ir(e) {
  var t = be(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function ar(e) {
  return st(We(e)).left + ir(e).scrollLeft;
}
function Gn(e, t) {
  var r = be(e), n = We(e), a = r.visualViewport, s = n.clientWidth, f = n.clientHeight, c = 0, u = 0;
  if (a) {
    s = a.width, f = a.height;
    var h = Ur();
    (h || !h && t === "fixed") && (c = a.offsetLeft, u = a.offsetTop);
  }
  return {
    width: s,
    height: f,
    x: c + ar(e),
    y: u
  };
}
function Xn(e) {
  var t, r = We(e), n = ir(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, s = qe(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), f = qe(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), c = -n.scrollLeft + ar(e), u = -n.scrollTop;
  return Ee(a || r).direction === "rtl" && (c += qe(r.clientWidth, a ? a.clientWidth : 0) - s), {
    width: s,
    height: f,
    x: c,
    y: u
  };
}
function or(e) {
  var t = Ee(e), r = t.overflow, n = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function Gr(e) {
  return ["html", "body", "#document"].indexOf(Ae(e)) >= 0 ? e.ownerDocument.body : he(e) && or(e) ? e : Gr(kt(e));
}
function mt(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Gr(e), a = n === ((r = e.ownerDocument) == null ? void 0 : r.body), s = be(n), f = a ? [s].concat(s.visualViewport || [], or(n) ? n : []) : n, c = t.concat(f);
  return a ? c : c.concat(mt(kt(f)));
}
function Gt(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Jn(e, t) {
  var r = st(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function vr(e, t, r) {
  return t === Wr ? Gt(Gn(e, r)) : Ye(t) ? Jn(t, r) : Gt(Xn(We(e)));
}
function Zn(e) {
  var t = mt(kt(e)), r = ["absolute", "fixed"].indexOf(Ee(e).position) >= 0, n = r && he(e) ? xt(e) : e;
  return Ye(n) ? t.filter(function(a) {
    return Ye(a) && qr(a, n) && Ae(a) !== "body";
  }) : [];
}
function Qn(e, t, r, n) {
  var a = t === "clippingParents" ? Zn(e) : [].concat(t), s = [].concat(a, [r]), f = s[0], c = s.reduce(function(u, h) {
    var l = vr(e, h, n);
    return u.top = qe(l.top, u.top), u.right = Dt(l.right, u.right), u.bottom = Dt(l.bottom, u.bottom), u.left = qe(l.left, u.left), u;
  }, vr(e, f, n));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Xr(e) {
  var t = e.reference, r = e.element, n = e.placement, a = n ? we(n) : null, s = n ? ut(n) : null, f = t.x + t.width / 2 - r.width / 2, c = t.y + t.height / 2 - r.height / 2, u;
  switch (a) {
    case pe:
      u = {
        x: f,
        y: t.y - r.height
      };
      break;
    case ge:
      u = {
        x: f,
        y: t.y + t.height
      };
      break;
    case ye:
      u = {
        x: t.x + t.width,
        y: c
      };
      break;
    case de:
      u = {
        x: t.x - r.width,
        y: c
      };
      break;
    default:
      u = {
        x: t.x,
        y: t.y
      };
  }
  var h = a ? nr(a) : null;
  if (h != null) {
    var l = h === "y" ? "height" : "width";
    switch (s) {
      case at:
        u[h] = u[h] - (t[l] / 2 - r[l] / 2);
        break;
      case yt:
        u[h] = u[h] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return u;
}
function bt(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, a = n === void 0 ? e.placement : n, s = r.strategy, f = s === void 0 ? e.strategy : s, c = r.boundary, u = c === void 0 ? En : c, h = r.rootBoundary, l = h === void 0 ? Wr : h, E = r.elementContext, T = E === void 0 ? vt : E, O = r.altBoundary, k = O === void 0 ? !1 : O, D = r.padding, P = D === void 0 ? 0 : D, W = Kr(typeof P != "number" ? P : zr(P, Ot)), q = T === vt ? On : vt, R = e.rects.popper, o = e.elements[k ? q : T], I = Qn(Ye(o) ? o : o.contextElement || We(e.elements.popper), u, l, f), g = st(e.elements.reference), p = Xr({
    reference: g,
    element: R,
    strategy: "absolute",
    placement: a
  }), v = Gt(Object.assign({}, R, p)), b = T === vt ? v : g, x = {
    top: I.top - b.top + W.top,
    bottom: b.bottom - I.bottom + W.bottom,
    left: I.left - b.left + W.left,
    right: b.right - I.right + W.right
  }, C = e.modifiersData.offset;
  if (T === vt && C) {
    var $ = C[a];
    Object.keys(x).forEach(function(Y) {
      var N = [ye, ge].indexOf(Y) >= 0 ? 1 : -1, S = [pe, ge].indexOf(Y) >= 0 ? "y" : "x";
      x[Y] += $[S] * N;
    });
  }
  return x;
}
function ei(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, a = r.boundary, s = r.rootBoundary, f = r.padding, c = r.flipVariations, u = r.allowedAutoPlacements, h = u === void 0 ? Fr : u, l = ut(n), E = l ? c ? fr : fr.filter(function(k) {
    return ut(k) === l;
  }) : Ot, T = E.filter(function(k) {
    return h.indexOf(k) >= 0;
  });
  T.length === 0 && (T = E, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var O = T.reduce(function(k, D) {
    return k[D] = bt(e, {
      placement: D,
      boundary: a,
      rootBoundary: s,
      padding: f
    })[we(D)], k;
  }, {});
  return Object.keys(O).sort(function(k, D) {
    return O[k] - O[D];
  });
}
function ti(e) {
  if (we(e) === jt)
    return [];
  var t = Ct(e);
  return [dr(e), t, dr(t)];
}
function ri(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var a = r.mainAxis, s = a === void 0 ? !0 : a, f = r.altAxis, c = f === void 0 ? !0 : f, u = r.fallbackPlacements, h = r.padding, l = r.boundary, E = r.rootBoundary, T = r.altBoundary, O = r.flipVariations, k = O === void 0 ? !0 : O, D = r.allowedAutoPlacements, P = t.options.placement, W = we(P), q = W === P, R = u || (q || !k ? [Ct(P)] : ti(P)), o = [P].concat(R).reduce(function(M, V) {
      return M.concat(we(V) === jt ? ei(t, {
        placement: V,
        boundary: l,
        rootBoundary: E,
        padding: h,
        flipVariations: k,
        allowedAutoPlacements: D
      }) : V);
    }, []), I = t.rects.reference, g = t.rects.popper, p = /* @__PURE__ */ new Map(), v = !0, b = o[0], x = 0; x < o.length; x++) {
      var C = o[x], $ = we(C), Y = ut(C) === at, N = [pe, ge].indexOf($) >= 0, S = N ? "width" : "height", J = bt(t, {
        placement: C,
        boundary: l,
        rootBoundary: E,
        altBoundary: T,
        padding: h
      }), X = N ? Y ? ye : de : Y ? ge : pe;
      I[S] > g[S] && (X = Ct(X));
      var Z = Ct(X), ne = [];
      if (s && ne.push(J[$] <= 0), c && ne.push(J[X] <= 0, J[Z] <= 0), ne.every(function(M) {
        return M;
      })) {
        b = C, v = !1;
        break;
      }
      p.set(C, ne);
    }
    if (v)
      for (var Q = k ? 3 : 1, _ = function(V) {
        var re = o.find(function(B) {
          var G = p.get(B);
          if (G)
            return G.slice(0, V).every(function(se) {
              return se;
            });
        });
        if (re)
          return b = re, "break";
      }, L = Q; L > 0; L--) {
        var F = _(L);
        if (F === "break")
          break;
      }
    t.placement !== b && (t.modifiersData[n]._skip = !0, t.placement = b, t.reset = !0);
  }
}
const ni = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ri,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function hr(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function mr(e) {
  return [pe, ye, ge, de].some(function(t) {
    return e[t] >= 0;
  });
}
function ii(e) {
  var t = e.state, r = e.name, n = t.rects.reference, a = t.rects.popper, s = t.modifiersData.preventOverflow, f = bt(t, {
    elementContext: "reference"
  }), c = bt(t, {
    altBoundary: !0
  }), u = hr(f, n), h = hr(c, a, s), l = mr(u), E = mr(h);
  t.modifiersData[r] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: h,
    isReferenceHidden: l,
    hasPopperEscaped: E
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": l,
    "data-popper-escaped": E
  });
}
const ai = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: ii
};
function oi(e, t, r) {
  var n = we(e), a = [de, pe].indexOf(n) >= 0 ? -1 : 1, s = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, f = s[0], c = s[1];
  return f = f || 0, c = (c || 0) * a, [de, ye].indexOf(n) >= 0 ? {
    x: c,
    y: f
  } : {
    x: f,
    y: c
  };
}
function si(e) {
  var t = e.state, r = e.options, n = e.name, a = r.offset, s = a === void 0 ? [0, 0] : a, f = Fr.reduce(function(l, E) {
    return l[E] = oi(E, t.rects, s), l;
  }, {}), c = f[t.placement], u = c.x, h = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += h), t.modifiersData[n] = f;
}
const ui = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: si
};
function ci(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Xr({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const fi = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ci,
  data: {}
};
function li(e) {
  return e === "x" ? "y" : "x";
}
function pi(e) {
  var t = e.state, r = e.options, n = e.name, a = r.mainAxis, s = a === void 0 ? !0 : a, f = r.altAxis, c = f === void 0 ? !1 : f, u = r.boundary, h = r.rootBoundary, l = r.altBoundary, E = r.padding, T = r.tether, O = T === void 0 ? !0 : T, k = r.tetherOffset, D = k === void 0 ? 0 : k, P = bt(t, {
    boundary: u,
    rootBoundary: h,
    padding: E,
    altBoundary: l
  }), W = we(t.placement), q = ut(t.placement), R = !q, o = nr(W), I = li(o), g = t.modifiersData.popperOffsets, p = t.rects.reference, v = t.rects.popper, b = typeof D == "function" ? D(Object.assign({}, t.rects, {
    placement: t.placement
  })) : D, x = typeof b == "number" ? {
    mainAxis: b,
    altAxis: b
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, b), C = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, $ = {
    x: 0,
    y: 0
  };
  if (!!g) {
    if (s) {
      var Y, N = o === "y" ? pe : de, S = o === "y" ? ge : ye, J = o === "y" ? "height" : "width", X = g[o], Z = X + P[N], ne = X - P[S], Q = O ? -v[J] / 2 : 0, _ = q === at ? p[J] : v[J], L = q === at ? -v[J] : -p[J], F = t.elements.arrow, M = O && F ? rr(F) : {
        width: 0,
        height: 0
      }, V = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Yr(), re = V[N], B = V[S], G = ht(0, p[J], M[J]), se = R ? p[J] / 2 - Q - G - re - x.mainAxis : _ - G - re - x.mainAxis, ie = R ? -p[J] / 2 + Q + G + B + x.mainAxis : L + G + B + x.mainAxis, Oe = t.elements.arrow && xt(t.elements.arrow), Re = Oe ? o === "y" ? Oe.clientTop || 0 : Oe.clientLeft || 0 : 0, Ne = (Y = C == null ? void 0 : C[o]) != null ? Y : 0, Ke = X + se - Ne - Re, Ce = X + ie - Ne, Le = ht(O ? Dt(Z, Ke) : Z, X, O ? qe(ne, Ce) : ne);
      g[o] = Le, $[o] = Le - X;
    }
    if (c) {
      var Me, De = o === "x" ? pe : de, ze = o === "x" ? ge : ye, ce = g[I], me = I === "y" ? "height" : "width", Fe = ce + P[De], xe = ce - P[ze], Ie = [pe, de].indexOf(W) !== -1, $e = (Me = C == null ? void 0 : C[I]) != null ? Me : 0, Ge = Ie ? Fe : ce - p[me] - v[me] - $e + x.altAxis, Xe = Ie ? ce + p[me] + v[me] - $e - x.altAxis : xe, Je = O && Ie ? Mn(Ge, ce, Xe) : ht(O ? Ge : Fe, ce, O ? Xe : xe);
      g[I] = Je, $[I] = Je - ce;
    }
    t.modifiersData[n] = $;
  }
}
const di = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: pi,
  requiresIfExists: ["offset"]
};
function vi(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function hi(e) {
  return e === be(e) || !he(e) ? ir(e) : vi(e);
}
function mi(e) {
  var t = e.getBoundingClientRect(), r = ot(t.width) / e.offsetWidth || 1, n = ot(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function gi(e, t, r) {
  r === void 0 && (r = !1);
  var n = he(t), a = he(t) && mi(t), s = We(t), f = st(e, a, r), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Ae(t) !== "body" || or(s)) && (c = hi(t)), he(t) ? (u = st(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : s && (u.x = ar(s))), {
    x: f.left + c.scrollLeft - u.x,
    y: f.top + c.scrollTop - u.y,
    width: f.width,
    height: f.height
  };
}
function yi(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function a(s) {
    r.add(s.name);
    var f = [].concat(s.requires || [], s.requiresIfExists || []);
    f.forEach(function(c) {
      if (!r.has(c)) {
        var u = t.get(c);
        u && a(u);
      }
    }), n.push(s);
  }
  return e.forEach(function(s) {
    r.has(s.name) || a(s);
  }), n;
}
function bi(e) {
  var t = yi(e);
  return Kt.reduce(function(r, n) {
    return r.concat(t.filter(function(a) {
      return a.phase === n;
    }));
  }, []);
}
function wi(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Be(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(a, s) {
    return a.replace(/%s/, s);
  }, e);
}
var He = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Ei = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', gr = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Oi(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), gr).filter(function(r, n, a) {
      return a.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(Be(He, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Be(He, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          Kt.indexOf(t.phase) < 0 && console.error(Be(He, t.name, '"phase"', "either " + Kt.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Be(He, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Be(He, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Be(He, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Be(He, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + gr.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(a) {
          return a.name === n;
        }) == null && console.error(Be(Ei, String(t.name), n, n));
      });
    });
  });
}
function xi(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var a = t(n);
    if (!r.has(a))
      return r.add(a), !0;
  });
}
function Ti(e) {
  var t = e.reduce(function(r, n) {
    var a = r[n.name];
    return r[n.name] = a ? Object.assign({}, a, n, {
      options: Object.assign({}, a.options, n.options),
      data: Object.assign({}, a.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var yr = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", _i = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", br = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function wr() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Ai(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, a = t.defaultOptions, s = a === void 0 ? br : a;
  return function(c, u, h) {
    h === void 0 && (h = s);
    var l = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, br, s),
      modifiersData: {},
      elements: {
        reference: c,
        popper: u
      },
      attributes: {},
      styles: {}
    }, E = [], T = !1, O = {
      state: l,
      setOptions: function(W) {
        var q = typeof W == "function" ? W(l.options) : W;
        D(), l.options = Object.assign({}, s, l.options, q), l.scrollParents = {
          reference: Ye(c) ? mt(c) : c.contextElement ? mt(c.contextElement) : [],
          popper: mt(u)
        };
        var R = bi(Ti([].concat(n, l.options.modifiers)));
        if (l.orderedModifiers = R.filter(function(C) {
          return C.enabled;
        }), process.env.NODE_ENV !== "production") {
          var o = xi([].concat(R, l.options.modifiers), function(C) {
            var $ = C.name;
            return $;
          });
          if (Oi(o), we(l.options.placement) === jt) {
            var I = l.orderedModifiers.find(function(C) {
              var $ = C.name;
              return $ === "flip";
            });
            I || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var g = Ee(u), p = g.marginTop, v = g.marginRight, b = g.marginBottom, x = g.marginLeft;
          [p, v, b, x].some(function(C) {
            return parseFloat(C);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return k(), O.update();
      },
      forceUpdate: function() {
        if (!T) {
          var W = l.elements, q = W.reference, R = W.popper;
          if (!wr(q, R)) {
            process.env.NODE_ENV !== "production" && console.error(yr);
            return;
          }
          l.rects = {
            reference: gi(q, xt(R), l.options.strategy === "fixed"),
            popper: rr(R)
          }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach(function(C) {
            return l.modifiersData[C.name] = Object.assign({}, C.data);
          });
          for (var o = 0, I = 0; I < l.orderedModifiers.length; I++) {
            if (process.env.NODE_ENV !== "production" && (o += 1, o > 100)) {
              console.error(_i);
              break;
            }
            if (l.reset === !0) {
              l.reset = !1, I = -1;
              continue;
            }
            var g = l.orderedModifiers[I], p = g.fn, v = g.options, b = v === void 0 ? {} : v, x = g.name;
            typeof p == "function" && (l = p({
              state: l,
              options: b,
              name: x,
              instance: O
            }) || l);
          }
        }
      },
      update: wi(function() {
        return new Promise(function(P) {
          O.forceUpdate(), P(l);
        });
      }),
      destroy: function() {
        D(), T = !0;
      }
    };
    if (!wr(c, u))
      return process.env.NODE_ENV !== "production" && console.error(yr), O;
    O.setOptions(h).then(function(P) {
      !T && h.onFirstUpdate && h.onFirstUpdate(P);
    });
    function k() {
      l.orderedModifiers.forEach(function(P) {
        var W = P.name, q = P.options, R = q === void 0 ? {} : q, o = P.effect;
        if (typeof o == "function") {
          var I = o({
            state: l,
            name: W,
            instance: O,
            options: R
          }), g = function() {
          };
          E.push(I || g);
        }
      });
    }
    function D() {
      E.forEach(function(P) {
        return P();
      }), E = [];
    }
    return O;
  };
}
var Ri = [Yn, fi, Un, Hr, ui, ni, di, Bn, ai], Ci = /* @__PURE__ */ Ai({
  defaultModifiers: Ri
}), Di = "tippy-box", Jr = "tippy-content", Pi = "tippy-backdrop", Zr = "tippy-arrow", Qr = "tippy-svg-arrow", Ue = {
  passive: !0,
  capture: !0
}, en = function() {
  return document.body;
};
function Si(e, t) {
  return {}.hasOwnProperty.call(e, t);
}
function Bt(e, t, r) {
  if (Array.isArray(e)) {
    var n = e[t];
    return n == null ? Array.isArray(r) ? r[t] : r : n;
  }
  return e;
}
function sr(e, t) {
  var r = {}.toString.call(e);
  return r.indexOf("[object") === 0 && r.indexOf(t + "]") > -1;
}
function tn(e, t) {
  return typeof e == "function" ? e.apply(void 0, t) : e;
}
function Er(e, t) {
  if (t === 0)
    return e;
  var r;
  return function(n) {
    clearTimeout(r), r = setTimeout(function() {
      e(n);
    }, t);
  };
}
function ji(e, t) {
  var r = Object.assign({}, e);
  return t.forEach(function(n) {
    delete r[n];
  }), r;
}
function ki(e) {
  return e.split(/\s+/).filter(Boolean);
}
function nt(e) {
  return [].concat(e);
}
function Or(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Ni(e) {
  return e.filter(function(t, r) {
    return e.indexOf(t) === r;
  });
}
function Li(e) {
  return e.split("-")[0];
}
function Pt(e) {
  return [].slice.call(e);
}
function xr(e) {
  return Object.keys(e).reduce(function(t, r) {
    return e[r] !== void 0 && (t[r] = e[r]), t;
  }, {});
}
function gt() {
  return document.createElement("div");
}
function wt(e) {
  return ["Element", "Fragment"].some(function(t) {
    return sr(e, t);
  });
}
function Mi(e) {
  return sr(e, "NodeList");
}
function Ii(e) {
  return sr(e, "MouseEvent");
}
function $i(e) {
  return !!(e && e._tippy && e._tippy.reference === e);
}
function Vi(e) {
  return wt(e) ? [e] : Mi(e) ? Pt(e) : Array.isArray(e) ? e : Pt(document.querySelectorAll(e));
}
function Wt(e, t) {
  e.forEach(function(r) {
    r && (r.style.transitionDuration = t + "ms");
  });
}
function Tr(e, t) {
  e.forEach(function(r) {
    r && r.setAttribute("data-state", t);
  });
}
function Bi(e) {
  var t, r = nt(e), n = r[0];
  return n != null && (t = n.ownerDocument) != null && t.body ? n.ownerDocument : document;
}
function Wi(e, t) {
  var r = t.clientX, n = t.clientY;
  return e.every(function(a) {
    var s = a.popperRect, f = a.popperState, c = a.props, u = c.interactiveBorder, h = Li(f.placement), l = f.modifiersData.offset;
    if (!l)
      return !0;
    var E = h === "bottom" ? l.top.y : 0, T = h === "top" ? l.bottom.y : 0, O = h === "right" ? l.left.x : 0, k = h === "left" ? l.right.x : 0, D = s.top - n + E > u, P = n - s.bottom - T > u, W = s.left - r + O > u, q = r - s.right - k > u;
    return D || P || W || q;
  });
}
function Ft(e, t, r) {
  var n = t + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(a) {
    e[n](a, r);
  });
}
function _r(e, t) {
  for (var r = t; r; ) {
    var n;
    if (e.contains(r))
      return !0;
    r = r.getRootNode == null || (n = r.getRootNode()) == null ? void 0 : n.host;
  }
  return !1;
}
var _e = {
  isTouch: !1
}, Ar = 0;
function Fi() {
  _e.isTouch || (_e.isTouch = !0, window.performance && document.addEventListener("mousemove", rn));
}
function rn() {
  var e = performance.now();
  e - Ar < 20 && (_e.isTouch = !1, document.removeEventListener("mousemove", rn)), Ar = e;
}
function Hi() {
  var e = document.activeElement;
  if ($i(e)) {
    var t = e._tippy;
    e.blur && !t.state.isVisible && e.blur();
  }
}
function Ui() {
  document.addEventListener("touchstart", Fi, Ue), window.addEventListener("blur", Hi);
}
var qi = typeof window < "u" && typeof document < "u", Yi = qi ? !!window.msCrypto : !1;
function tt(e) {
  var t = e === "destroy" ? "n already-" : " ";
  return [e + "() was called on a" + t + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
}
function Rr(e) {
  var t = /[ \t]{2,}/g, r = /^[ \t]*/gm;
  return e.replace(t, " ").replace(r, "").trim();
}
function Ki(e) {
  return Rr(`
  %ctippy.js

  %c` + Rr(e) + `

  %c\u{1F477}\u200D This is a development-only message. It will be removed in production.
  `);
}
function nn(e) {
  return [
    Ki(e),
    "color: #00C584; font-size: 1.3em; font-weight: bold;",
    "line-height: 1.5",
    "color: #a6a095;"
  ];
}
var Et;
process.env.NODE_ENV !== "production" && zi();
function zi() {
  Et = /* @__PURE__ */ new Set();
}
function ke(e, t) {
  if (e && !Et.has(t)) {
    var r;
    Et.add(t), (r = console).warn.apply(r, nn(t));
  }
}
function Xt(e, t) {
  if (e && !Et.has(t)) {
    var r;
    Et.add(t), (r = console).error.apply(r, nn(t));
  }
}
function Gi(e) {
  var t = !e, r = Object.prototype.toString.call(e) === "[object Object]" && !e.addEventListener;
  Xt(t, ["tippy() was passed", "`" + String(e) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" ")), Xt(r, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
}
var an = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, Xi = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, ve = Object.assign({
  appendTo: en,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: !0,
  ignoreAttributes: !1,
  interactive: !1,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function() {
  },
  onBeforeUpdate: function() {
  },
  onCreate: function() {
  },
  onDestroy: function() {
  },
  onHidden: function() {
  },
  onHide: function() {
  },
  onMount: function() {
  },
  onShow: function() {
  },
  onShown: function() {
  },
  onTrigger: function() {
  },
  onUntrigger: function() {
  },
  onClickOutside: function() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: !1,
  touch: !0,
  trigger: "mouseenter focus",
  triggerTarget: null
}, an, Xi), Ji = Object.keys(ve), Zi = function(t) {
  process.env.NODE_ENV !== "production" && sn(t, []);
  var r = Object.keys(t);
  r.forEach(function(n) {
    ve[n] = t[n];
  });
};
function on(e) {
  var t = e.plugins || [], r = t.reduce(function(n, a) {
    var s = a.name, f = a.defaultValue;
    if (s) {
      var c;
      n[s] = e[s] !== void 0 ? e[s] : (c = ve[s]) != null ? c : f;
    }
    return n;
  }, {});
  return Object.assign({}, e, r);
}
function Qi(e, t) {
  var r = t ? Object.keys(on(Object.assign({}, ve, {
    plugins: t
  }))) : Ji, n = r.reduce(function(a, s) {
    var f = (e.getAttribute("data-tippy-" + s) || "").trim();
    if (!f)
      return a;
    if (s === "content")
      a[s] = f;
    else
      try {
        a[s] = JSON.parse(f);
      } catch {
        a[s] = f;
      }
    return a;
  }, {});
  return n;
}
function Cr(e, t) {
  var r = Object.assign({}, t, {
    content: tn(t.content, [e])
  }, t.ignoreAttributes ? {} : Qi(e, t.plugins));
  return r.aria = Object.assign({}, ve.aria, r.aria), r.aria = {
    expanded: r.aria.expanded === "auto" ? t.interactive : r.aria.expanded,
    content: r.aria.content === "auto" ? t.interactive ? null : "describedby" : r.aria.content
  }, r;
}
function sn(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = []);
  var r = Object.keys(e);
  r.forEach(function(n) {
    var a = ji(ve, Object.keys(an)), s = !Si(a, n);
    s && (s = t.filter(function(f) {
      return f.name === n;
    }).length === 0), ke(s, ["`" + n + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", `

`, `All props: https://atomiks.github.io/tippyjs/v6/all-props/
`, "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
  });
}
var ea = function() {
  return "innerHTML";
};
function Jt(e, t) {
  e[ea()] = t;
}
function Dr(e) {
  var t = gt();
  return e === !0 ? t.className = Zr : (t.className = Qr, wt(e) ? t.appendChild(e) : Jt(t, e)), t;
}
function Pr(e, t) {
  wt(t.content) ? (Jt(e, ""), e.appendChild(t.content)) : typeof t.content != "function" && (t.allowHTML ? Jt(e, t.content) : e.textContent = t.content);
}
function Zt(e) {
  var t = e.firstElementChild, r = Pt(t.children);
  return {
    box: t,
    content: r.find(function(n) {
      return n.classList.contains(Jr);
    }),
    arrow: r.find(function(n) {
      return n.classList.contains(Zr) || n.classList.contains(Qr);
    }),
    backdrop: r.find(function(n) {
      return n.classList.contains(Pi);
    })
  };
}
function un(e) {
  var t = gt(), r = gt();
  r.className = Di, r.setAttribute("data-state", "hidden"), r.setAttribute("tabindex", "-1");
  var n = gt();
  n.className = Jr, n.setAttribute("data-state", "hidden"), Pr(n, e.props), t.appendChild(r), r.appendChild(n), a(e.props, e.props);
  function a(s, f) {
    var c = Zt(t), u = c.box, h = c.content, l = c.arrow;
    f.theme ? u.setAttribute("data-theme", f.theme) : u.removeAttribute("data-theme"), typeof f.animation == "string" ? u.setAttribute("data-animation", f.animation) : u.removeAttribute("data-animation"), f.inertia ? u.setAttribute("data-inertia", "") : u.removeAttribute("data-inertia"), u.style.maxWidth = typeof f.maxWidth == "number" ? f.maxWidth + "px" : f.maxWidth, f.role ? u.setAttribute("role", f.role) : u.removeAttribute("role"), (s.content !== f.content || s.allowHTML !== f.allowHTML) && Pr(h, e.props), f.arrow ? l ? s.arrow !== f.arrow && (u.removeChild(l), u.appendChild(Dr(f.arrow))) : u.appendChild(Dr(f.arrow)) : l && u.removeChild(l);
  }
  return {
    popper: t,
    onUpdate: a
  };
}
un.$$tippy = !0;
var ta = 1, At = [], Ht = [];
function ra(e, t) {
  var r = Cr(e, Object.assign({}, ve, on(xr(t)))), n, a, s, f = !1, c = !1, u = !1, h = !1, l, E, T, O = [], k = Er(Ke, r.interactiveDebounce), D, P = ta++, W = null, q = Ni(r.plugins), R = {
    isEnabled: !0,
    isVisible: !1,
    isDestroyed: !1,
    isMounted: !1,
    isShown: !1
  }, o = {
    id: P,
    reference: e,
    popper: gt(),
    popperInstance: W,
    props: r,
    state: R,
    plugins: q,
    clearDelayTimeouts: Ge,
    setProps: Xe,
    setContent: Je,
    show: Lt,
    hide: Mt,
    hideWithInteractivity: It,
    enable: Ie,
    disable: $e,
    unmount: $t,
    destroy: ft
  };
  if (!r.render)
    return process.env.NODE_ENV !== "production" && Xt(!0, "render() function has not been supplied."), o;
  var I = r.render(o), g = I.popper, p = I.onUpdate;
  g.setAttribute("data-tippy-root", ""), g.id = "tippy-" + o.id, o.popper = g, e._tippy = o, g._tippy = o;
  var v = q.map(function(d) {
    return d.fn(o);
  }), b = e.hasAttribute("aria-expanded");
  return Oe(), Q(), X(), Z("onCreate", [o]), r.showOnCreate && Fe(), g.addEventListener("mouseenter", function() {
    o.props.interactive && o.state.isVisible && o.clearDelayTimeouts();
  }), g.addEventListener("mouseleave", function() {
    o.props.interactive && o.props.trigger.indexOf("mouseenter") >= 0 && N().addEventListener("mousemove", k);
  }), o;
  function x() {
    var d = o.props.touch;
    return Array.isArray(d) ? d : [d, 0];
  }
  function C() {
    return x()[0] === "hold";
  }
  function $() {
    var d;
    return !!((d = o.props.render) != null && d.$$tippy);
  }
  function Y() {
    return D || e;
  }
  function N() {
    var d = Y().parentNode;
    return d ? Bi(d) : document;
  }
  function S() {
    return Zt(g);
  }
  function J(d) {
    return o.state.isMounted && !o.state.isVisible || _e.isTouch || l && l.type === "focus" ? 0 : Bt(o.props.delay, d ? 0 : 1, ve.delay);
  }
  function X(d) {
    d === void 0 && (d = !1), g.style.pointerEvents = o.props.interactive && !d ? "" : "none", g.style.zIndex = "" + o.props.zIndex;
  }
  function Z(d, w, A) {
    if (A === void 0 && (A = !0), v.forEach(function(H) {
      H[d] && H[d].apply(H, w);
    }), A) {
      var K;
      (K = o.props)[d].apply(K, w);
    }
  }
  function ne() {
    var d = o.props.aria;
    if (!!d.content) {
      var w = "aria-" + d.content, A = g.id, K = nt(o.props.triggerTarget || e);
      K.forEach(function(H) {
        var ue = H.getAttribute(w);
        if (o.state.isVisible)
          H.setAttribute(w, ue ? ue + " " + A : A);
        else {
          var fe = ue && ue.replace(A, "").trim();
          fe ? H.setAttribute(w, fe) : H.removeAttribute(w);
        }
      });
    }
  }
  function Q() {
    if (!(b || !o.props.aria.expanded)) {
      var d = nt(o.props.triggerTarget || e);
      d.forEach(function(w) {
        o.props.interactive ? w.setAttribute("aria-expanded", o.state.isVisible && w === Y() ? "true" : "false") : w.removeAttribute("aria-expanded");
      });
    }
  }
  function _() {
    N().removeEventListener("mousemove", k), At = At.filter(function(d) {
      return d !== k;
    });
  }
  function L(d) {
    if (!(_e.isTouch && (u || d.type === "mousedown"))) {
      var w = d.composedPath && d.composedPath()[0] || d.target;
      if (!(o.props.interactive && _r(g, w))) {
        if (nt(o.props.triggerTarget || e).some(function(A) {
          return _r(A, w);
        })) {
          if (_e.isTouch || o.state.isVisible && o.props.trigger.indexOf("click") >= 0)
            return;
        } else
          Z("onClickOutside", [o, d]);
        o.props.hideOnClick === !0 && (o.clearDelayTimeouts(), o.hide(), c = !0, setTimeout(function() {
          c = !1;
        }), o.state.isMounted || re());
      }
    }
  }
  function F() {
    u = !0;
  }
  function M() {
    u = !1;
  }
  function V() {
    var d = N();
    d.addEventListener("mousedown", L, !0), d.addEventListener("touchend", L, Ue), d.addEventListener("touchstart", M, Ue), d.addEventListener("touchmove", F, Ue);
  }
  function re() {
    var d = N();
    d.removeEventListener("mousedown", L, !0), d.removeEventListener("touchend", L, Ue), d.removeEventListener("touchstart", M, Ue), d.removeEventListener("touchmove", F, Ue);
  }
  function B(d, w) {
    se(d, function() {
      !o.state.isVisible && g.parentNode && g.parentNode.contains(g) && w();
    });
  }
  function G(d, w) {
    se(d, w);
  }
  function se(d, w) {
    var A = S().box;
    function K(H) {
      H.target === A && (Ft(A, "remove", K), w());
    }
    if (d === 0)
      return w();
    Ft(A, "remove", E), Ft(A, "add", K), E = K;
  }
  function ie(d, w, A) {
    A === void 0 && (A = !1);
    var K = nt(o.props.triggerTarget || e);
    K.forEach(function(H) {
      H.addEventListener(d, w, A), O.push({
        node: H,
        eventType: d,
        handler: w,
        options: A
      });
    });
  }
  function Oe() {
    C() && (ie("touchstart", Ne, {
      passive: !0
    }), ie("touchend", Ce, {
      passive: !0
    })), ki(o.props.trigger).forEach(function(d) {
      if (d !== "manual")
        switch (ie(d, Ne), d) {
          case "mouseenter":
            ie("mouseleave", Ce);
            break;
          case "focus":
            ie(Yi ? "focusout" : "blur", Le);
            break;
          case "focusin":
            ie("focusout", Le);
            break;
        }
    });
  }
  function Re() {
    O.forEach(function(d) {
      var w = d.node, A = d.eventType, K = d.handler, H = d.options;
      w.removeEventListener(A, K, H);
    }), O = [];
  }
  function Ne(d) {
    var w, A = !1;
    if (!(!o.state.isEnabled || Me(d) || c)) {
      var K = ((w = l) == null ? void 0 : w.type) === "focus";
      l = d, D = d.currentTarget, Q(), !o.state.isVisible && Ii(d) && At.forEach(function(H) {
        return H(d);
      }), d.type === "click" && (o.props.trigger.indexOf("mouseenter") < 0 || f) && o.props.hideOnClick !== !1 && o.state.isVisible ? A = !0 : Fe(d), d.type === "click" && (f = !A), A && !K && xe(d);
    }
  }
  function Ke(d) {
    var w = d.target, A = Y().contains(w) || g.contains(w);
    if (!(d.type === "mousemove" && A)) {
      var K = me().concat(g).map(function(H) {
        var ue, fe = H._tippy, Ve = (ue = fe.popperInstance) == null ? void 0 : ue.state;
        return Ve ? {
          popperRect: H.getBoundingClientRect(),
          popperState: Ve,
          props: r
        } : null;
      }).filter(Boolean);
      Wi(K, d) && (_(), xe(d));
    }
  }
  function Ce(d) {
    var w = Me(d) || o.props.trigger.indexOf("click") >= 0 && f;
    if (!w) {
      if (o.props.interactive) {
        o.hideWithInteractivity(d);
        return;
      }
      xe(d);
    }
  }
  function Le(d) {
    o.props.trigger.indexOf("focusin") < 0 && d.target !== Y() || o.props.interactive && d.relatedTarget && g.contains(d.relatedTarget) || xe(d);
  }
  function Me(d) {
    return _e.isTouch ? C() !== d.type.indexOf("touch") >= 0 : !1;
  }
  function De() {
    ze();
    var d = o.props, w = d.popperOptions, A = d.placement, K = d.offset, H = d.getReferenceClientRect, ue = d.moveTransition, fe = $() ? Zt(g).arrow : null, Ve = H ? {
      getBoundingClientRect: H,
      contextElement: H.contextElement || Y()
    } : e, lt = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(Ze) {
        var Pe = Ze.state;
        if ($()) {
          var Vt = S(), dt = Vt.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(Qe) {
            Qe === "placement" ? dt.setAttribute("data-placement", Pe.placement) : Pe.attributes.popper["data-popper-" + Qe] ? dt.setAttribute("data-" + Qe, "") : dt.removeAttribute("data-" + Qe);
          }), Pe.attributes.popper = {};
        }
      }
    }, Te = [{
      name: "offset",
      options: {
        offset: K
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !ue
      }
    }, lt];
    $() && fe && Te.push({
      name: "arrow",
      options: {
        element: fe,
        padding: 3
      }
    }), Te.push.apply(Te, (w == null ? void 0 : w.modifiers) || []), o.popperInstance = Ci(Ve, g, Object.assign({}, w, {
      placement: A,
      onFirstUpdate: T,
      modifiers: Te
    }));
  }
  function ze() {
    o.popperInstance && (o.popperInstance.destroy(), o.popperInstance = null);
  }
  function ce() {
    var d = o.props.appendTo, w, A = Y();
    o.props.interactive && d === en || d === "parent" ? w = A.parentNode : w = tn(d, [A]), w.contains(g) || w.appendChild(g), o.state.isMounted = !0, De(), process.env.NODE_ENV !== "production" && ke(o.props.interactive && d === ve.appendTo && A.nextElementSibling !== g, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", `

`, "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", `

`, "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", `

`, "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
  }
  function me() {
    return Pt(g.querySelectorAll("[data-tippy-root]"));
  }
  function Fe(d) {
    o.clearDelayTimeouts(), d && Z("onTrigger", [o, d]), V();
    var w = J(!0), A = x(), K = A[0], H = A[1];
    _e.isTouch && K === "hold" && H && (w = H), w ? n = setTimeout(function() {
      o.show();
    }, w) : o.show();
  }
  function xe(d) {
    if (o.clearDelayTimeouts(), Z("onUntrigger", [o, d]), !o.state.isVisible) {
      re();
      return;
    }
    if (!(o.props.trigger.indexOf("mouseenter") >= 0 && o.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(d.type) >= 0 && f)) {
      var w = J(!1);
      w ? a = setTimeout(function() {
        o.state.isVisible && o.hide();
      }, w) : s = requestAnimationFrame(function() {
        o.hide();
      });
    }
  }
  function Ie() {
    o.state.isEnabled = !0;
  }
  function $e() {
    o.hide(), o.state.isEnabled = !1;
  }
  function Ge() {
    clearTimeout(n), clearTimeout(a), cancelAnimationFrame(s);
  }
  function Xe(d) {
    if (process.env.NODE_ENV !== "production" && ke(o.state.isDestroyed, tt("setProps")), !o.state.isDestroyed) {
      Z("onBeforeUpdate", [o, d]), Re();
      var w = o.props, A = Cr(e, Object.assign({}, w, xr(d), {
        ignoreAttributes: !0
      }));
      o.props = A, Oe(), w.interactiveDebounce !== A.interactiveDebounce && (_(), k = Er(Ke, A.interactiveDebounce)), w.triggerTarget && !A.triggerTarget ? nt(w.triggerTarget).forEach(function(K) {
        K.removeAttribute("aria-expanded");
      }) : A.triggerTarget && e.removeAttribute("aria-expanded"), Q(), X(), p && p(w, A), o.popperInstance && (De(), me().forEach(function(K) {
        requestAnimationFrame(K._tippy.popperInstance.forceUpdate);
      })), Z("onAfterUpdate", [o, d]);
    }
  }
  function Je(d) {
    o.setProps({
      content: d
    });
  }
  function Lt() {
    process.env.NODE_ENV !== "production" && ke(o.state.isDestroyed, tt("show"));
    var d = o.state.isVisible, w = o.state.isDestroyed, A = !o.state.isEnabled, K = _e.isTouch && !o.props.touch, H = Bt(o.props.duration, 0, ve.duration);
    if (!(d || w || A || K) && !Y().hasAttribute("disabled") && (Z("onShow", [o], !1), o.props.onShow(o) !== !1)) {
      if (o.state.isVisible = !0, $() && (g.style.visibility = "visible"), X(), V(), o.state.isMounted || (g.style.transition = "none"), $()) {
        var ue = S(), fe = ue.box, Ve = ue.content;
        Wt([fe, Ve], 0);
      }
      T = function() {
        var Te;
        if (!(!o.state.isVisible || h)) {
          if (h = !0, g.offsetHeight, g.style.transition = o.props.moveTransition, $() && o.props.animation) {
            var pt = S(), Ze = pt.box, Pe = pt.content;
            Wt([Ze, Pe], H), Tr([Ze, Pe], "visible");
          }
          ne(), Q(), Or(Ht, o), (Te = o.popperInstance) == null || Te.forceUpdate(), Z("onMount", [o]), o.props.animation && $() && G(H, function() {
            o.state.isShown = !0, Z("onShown", [o]);
          });
        }
      }, ce();
    }
  }
  function Mt() {
    process.env.NODE_ENV !== "production" && ke(o.state.isDestroyed, tt("hide"));
    var d = !o.state.isVisible, w = o.state.isDestroyed, A = !o.state.isEnabled, K = Bt(o.props.duration, 1, ve.duration);
    if (!(d || w || A) && (Z("onHide", [o], !1), o.props.onHide(o) !== !1)) {
      if (o.state.isVisible = !1, o.state.isShown = !1, h = !1, f = !1, $() && (g.style.visibility = "hidden"), _(), re(), X(!0), $()) {
        var H = S(), ue = H.box, fe = H.content;
        o.props.animation && (Wt([ue, fe], K), Tr([ue, fe], "hidden"));
      }
      ne(), Q(), o.props.animation ? $() && B(K, o.unmount) : o.unmount();
    }
  }
  function It(d) {
    process.env.NODE_ENV !== "production" && ke(o.state.isDestroyed, tt("hideWithInteractivity")), N().addEventListener("mousemove", k), Or(At, k), k(d);
  }
  function $t() {
    process.env.NODE_ENV !== "production" && ke(o.state.isDestroyed, tt("unmount")), o.state.isVisible && o.hide(), o.state.isMounted && (ze(), me().forEach(function(d) {
      d._tippy.unmount();
    }), g.parentNode && g.parentNode.removeChild(g), Ht = Ht.filter(function(d) {
      return d !== o;
    }), o.state.isMounted = !1, Z("onHidden", [o]));
  }
  function ft() {
    process.env.NODE_ENV !== "production" && ke(o.state.isDestroyed, tt("destroy")), !o.state.isDestroyed && (o.clearDelayTimeouts(), o.unmount(), Re(), delete e._tippy, o.state.isDestroyed = !0, Z("onDestroy", [o]));
  }
}
function Tt(e, t) {
  t === void 0 && (t = {});
  var r = ve.plugins.concat(t.plugins || []);
  process.env.NODE_ENV !== "production" && (Gi(e), sn(t, r)), Ui();
  var n = Object.assign({}, t, {
    plugins: r
  }), a = Vi(e);
  if (process.env.NODE_ENV !== "production") {
    var s = wt(n.content), f = a.length > 1;
    ke(s && f, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", `

`, "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", `

`, `1) content: element.innerHTML
`, "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var c = a.reduce(function(u, h) {
    var l = h && ra(h, n);
    return l && u.push(l), u;
  }, []);
  return wt(e) ? c[0] : c;
}
Tt.defaultProps = ve;
Tt.setDefaultProps = Zi;
Tt.currentInput = _e;
Object.assign({}, Hr, {
  effect: function(t) {
    var r = t.state, n = {
      popper: {
        position: r.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(r.elements.popper.style, n.popper), r.styles = n, r.elements.arrow && Object.assign(r.elements.arrow.style, n.arrow);
  }
});
Tt.setDefaultProps({
  render: un
});
var Nt = { exports: {} }, rt = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ut, Sr;
function cn() {
  if (Sr)
    return Ut;
  Sr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var f = {}, c = 0; c < 10; c++)
        f["_" + String.fromCharCode(c)] = c;
      var u = Object.getOwnPropertyNames(f).map(function(l) {
        return f[l];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var h = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        h[l] = l;
      }), Object.keys(Object.assign({}, h)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ut = a() ? Object.assign : function(s, f) {
    for (var c, u = n(s), h, l = 1; l < arguments.length; l++) {
      c = Object(arguments[l]);
      for (var E in c)
        t.call(c, E) && (u[E] = c[E]);
      if (e) {
        h = e(c);
        for (var T = 0; T < h.length; T++)
          r.call(c, h[T]) && (u[h[T]] = c[h[T]]);
      }
    }
    return u;
  }, Ut;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jr;
function na() {
  if (jr)
    return rt;
  jr = 1, cn();
  var e = St, t = 60103;
  if (rt.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var r = Symbol.for;
    t = r("react.element"), rt.Fragment = r("react.fragment");
  }
  var n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = Object.prototype.hasOwnProperty, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(c, u, h) {
    var l, E = {}, T = null, O = null;
    h !== void 0 && (T = "" + h), u.key !== void 0 && (T = "" + u.key), u.ref !== void 0 && (O = u.ref);
    for (l in u)
      a.call(u, l) && !s.hasOwnProperty(l) && (E[l] = u[l]);
    if (c && c.defaultProps)
      for (l in u = c.defaultProps, u)
        E[l] === void 0 && (E[l] = u[l]);
    return { $$typeof: t, type: c, key: T, ref: O, props: E, _owner: n.current };
  }
  return rt.jsx = f, rt.jsxs = f, rt;
}
var qt = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kr;
function ia() {
  return kr || (kr = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      var t = St, r = cn(), n = 60103, a = 60106;
      e.Fragment = 60107;
      var s = 60108, f = 60114, c = 60109, u = 60110, h = 60112, l = 60113, E = 60120, T = 60115, O = 60116, k = 60121, D = 60122, P = 60117, W = 60129, q = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var R = Symbol.for;
        n = R("react.element"), a = R("react.portal"), e.Fragment = R("react.fragment"), s = R("react.strict_mode"), f = R("react.profiler"), c = R("react.provider"), u = R("react.context"), h = R("react.forward_ref"), l = R("react.suspense"), E = R("react.suspense_list"), T = R("react.memo"), O = R("react.lazy"), k = R("react.block"), D = R("react.server.block"), P = R("react.fundamental"), R("react.scope"), R("react.opaque.id"), W = R("react.debug_trace_mode"), R("react.offscreen"), q = R("react.legacy_hidden");
      }
      var o = typeof Symbol == "function" && Symbol.iterator, I = "@@iterator";
      function g(i) {
        if (i === null || typeof i != "object")
          return null;
        var m = o && i[o] || i[I];
        return typeof m == "function" ? m : null;
      }
      var p = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function v(i) {
        {
          for (var m = arguments.length, y = new Array(m > 1 ? m - 1 : 0), j = 1; j < m; j++)
            y[j - 1] = arguments[j];
          b("error", i, y);
        }
      }
      function b(i, m, y) {
        {
          var j = p.ReactDebugCurrentFrame, ee = j.getStackAddendum();
          ee !== "" && (m += "%s", y = y.concat([ee]));
          var te = y.map(function(z) {
            return "" + z;
          });
          te.unshift("Warning: " + m), Function.prototype.apply.call(console[i], console, te);
        }
      }
      var x = !1;
      function C(i) {
        return !!(typeof i == "string" || typeof i == "function" || i === e.Fragment || i === f || i === W || i === s || i === l || i === E || i === q || x || typeof i == "object" && i !== null && (i.$$typeof === O || i.$$typeof === T || i.$$typeof === c || i.$$typeof === u || i.$$typeof === h || i.$$typeof === P || i.$$typeof === k || i[0] === D));
      }
      function $(i, m, y) {
        var j = m.displayName || m.name || "";
        return i.displayName || (j !== "" ? y + "(" + j + ")" : y);
      }
      function Y(i) {
        return i.displayName || "Context";
      }
      function N(i) {
        if (i == null)
          return null;
        if (typeof i.tag == "number" && v("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof i == "function")
          return i.displayName || i.name || null;
        if (typeof i == "string")
          return i;
        switch (i) {
          case e.Fragment:
            return "Fragment";
          case a:
            return "Portal";
          case f:
            return "Profiler";
          case s:
            return "StrictMode";
          case l:
            return "Suspense";
          case E:
            return "SuspenseList";
        }
        if (typeof i == "object")
          switch (i.$$typeof) {
            case u:
              var m = i;
              return Y(m) + ".Consumer";
            case c:
              var y = i;
              return Y(y._context) + ".Provider";
            case h:
              return $(i, i.render, "ForwardRef");
            case T:
              return N(i.type);
            case k:
              return N(i._render);
            case O: {
              var j = i, ee = j._payload, te = j._init;
              try {
                return N(te(ee));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var S = 0, J, X, Z, ne, Q, _, L;
      function F() {
      }
      F.__reactDisabledLog = !0;
      function M() {
        {
          if (S === 0) {
            J = console.log, X = console.info, Z = console.warn, ne = console.error, Q = console.group, _ = console.groupCollapsed, L = console.groupEnd;
            var i = {
              configurable: !0,
              enumerable: !0,
              value: F,
              writable: !0
            };
            Object.defineProperties(console, {
              info: i,
              log: i,
              warn: i,
              error: i,
              group: i,
              groupCollapsed: i,
              groupEnd: i
            });
          }
          S++;
        }
      }
      function V() {
        {
          if (S--, S === 0) {
            var i = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: r({}, i, {
                value: J
              }),
              info: r({}, i, {
                value: X
              }),
              warn: r({}, i, {
                value: Z
              }),
              error: r({}, i, {
                value: ne
              }),
              group: r({}, i, {
                value: Q
              }),
              groupCollapsed: r({}, i, {
                value: _
              }),
              groupEnd: r({}, i, {
                value: L
              })
            });
          }
          S < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var re = p.ReactCurrentDispatcher, B;
      function G(i, m, y) {
        {
          if (B === void 0)
            try {
              throw Error();
            } catch (ee) {
              var j = ee.stack.trim().match(/\n( *(at )?)/);
              B = j && j[1] || "";
            }
          return `
` + B + i;
        }
      }
      var se = !1, ie;
      {
        var Oe = typeof WeakMap == "function" ? WeakMap : Map;
        ie = new Oe();
      }
      function Re(i, m) {
        if (!i || se)
          return "";
        {
          var y = ie.get(i);
          if (y !== void 0)
            return y;
        }
        var j;
        se = !0;
        var ee = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var te;
        te = re.current, re.current = null, M();
        try {
          if (m) {
            var z = function() {
              throw Error();
            };
            if (Object.defineProperty(z.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(z, []);
              } catch (je) {
                j = je;
              }
              Reflect.construct(i, [], z);
            } else {
              try {
                z.call();
              } catch (je) {
                j = je;
              }
              i.call(z.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (je) {
              j = je;
            }
            i();
          }
        } catch (je) {
          if (je && j && typeof je.stack == "string") {
            for (var U = je.stack.split(`
`), le = j.stack.split(`
`), ae = U.length - 1, oe = le.length - 1; ae >= 1 && oe >= 0 && U[ae] !== le[oe]; )
              oe--;
            for (; ae >= 1 && oe >= 0; ae--, oe--)
              if (U[ae] !== le[oe]) {
                if (ae !== 1 || oe !== 1)
                  do
                    if (ae--, oe--, oe < 0 || U[ae] !== le[oe]) {
                      var Se = `
` + U[ae].replace(" at new ", " at ");
                      return typeof i == "function" && ie.set(i, Se), Se;
                    }
                  while (ae >= 1 && oe >= 0);
                break;
              }
          }
        } finally {
          se = !1, re.current = te, V(), Error.prepareStackTrace = ee;
        }
        var et = i ? i.displayName || i.name : "", cr = et ? G(et) : "";
        return typeof i == "function" && ie.set(i, cr), cr;
      }
      function Ne(i, m, y) {
        return Re(i, !1);
      }
      function Ke(i) {
        var m = i.prototype;
        return !!(m && m.isReactComponent);
      }
      function Ce(i, m, y) {
        if (i == null)
          return "";
        if (typeof i == "function")
          return Re(i, Ke(i));
        if (typeof i == "string")
          return G(i);
        switch (i) {
          case l:
            return G("Suspense");
          case E:
            return G("SuspenseList");
        }
        if (typeof i == "object")
          switch (i.$$typeof) {
            case h:
              return Ne(i.render);
            case T:
              return Ce(i.type, m, y);
            case k:
              return Ne(i._render);
            case O: {
              var j = i, ee = j._payload, te = j._init;
              try {
                return Ce(te(ee), m, y);
              } catch {
              }
            }
          }
        return "";
      }
      var Le = {}, Me = p.ReactDebugCurrentFrame;
      function De(i) {
        if (i) {
          var m = i._owner, y = Ce(i.type, i._source, m ? m.type : null);
          Me.setExtraStackFrame(y);
        } else
          Me.setExtraStackFrame(null);
      }
      function ze(i, m, y, j, ee) {
        {
          var te = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var z in i)
            if (te(i, z)) {
              var U = void 0;
              try {
                if (typeof i[z] != "function") {
                  var le = Error((j || "React class") + ": " + y + " type `" + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw le.name = "Invariant Violation", le;
                }
                U = i[z](m, z, j, y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ae) {
                U = ae;
              }
              U && !(U instanceof Error) && (De(ee), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", y, z, typeof U), De(null)), U instanceof Error && !(U.message in Le) && (Le[U.message] = !0, De(ee), v("Failed %s type: %s", y, U.message), De(null));
            }
        }
      }
      var ce = p.ReactCurrentOwner, me = Object.prototype.hasOwnProperty, Fe = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, xe, Ie, $e;
      $e = {};
      function Ge(i) {
        if (me.call(i, "ref")) {
          var m = Object.getOwnPropertyDescriptor(i, "ref").get;
          if (m && m.isReactWarning)
            return !1;
        }
        return i.ref !== void 0;
      }
      function Xe(i) {
        if (me.call(i, "key")) {
          var m = Object.getOwnPropertyDescriptor(i, "key").get;
          if (m && m.isReactWarning)
            return !1;
        }
        return i.key !== void 0;
      }
      function Je(i, m) {
        if (typeof i.ref == "string" && ce.current && m && ce.current.stateNode !== m) {
          var y = N(ce.current.type);
          $e[y] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(ce.current.type), i.ref), $e[y] = !0);
        }
      }
      function Lt(i, m) {
        {
          var y = function() {
            xe || (xe = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
          };
          y.isReactWarning = !0, Object.defineProperty(i, "key", {
            get: y,
            configurable: !0
          });
        }
      }
      function Mt(i, m) {
        {
          var y = function() {
            Ie || (Ie = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
          };
          y.isReactWarning = !0, Object.defineProperty(i, "ref", {
            get: y,
            configurable: !0
          });
        }
      }
      var It = function(i, m, y, j, ee, te, z) {
        var U = {
          $$typeof: n,
          type: i,
          key: m,
          ref: y,
          props: z,
          _owner: te
        };
        return U._store = {}, Object.defineProperty(U._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(U, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: j
        }), Object.defineProperty(U, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ee
        }), Object.freeze && (Object.freeze(U.props), Object.freeze(U)), U;
      };
      function $t(i, m, y, j, ee) {
        {
          var te, z = {}, U = null, le = null;
          y !== void 0 && (U = "" + y), Xe(m) && (U = "" + m.key), Ge(m) && (le = m.ref, Je(m, ee));
          for (te in m)
            me.call(m, te) && !Fe.hasOwnProperty(te) && (z[te] = m[te]);
          if (i && i.defaultProps) {
            var ae = i.defaultProps;
            for (te in ae)
              z[te] === void 0 && (z[te] = ae[te]);
          }
          if (U || le) {
            var oe = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
            U && Lt(z, oe), le && Mt(z, oe);
          }
          return It(i, U, le, ee, j, ce.current, z);
        }
      }
      var ft = p.ReactCurrentOwner, d = p.ReactDebugCurrentFrame;
      function w(i) {
        if (i) {
          var m = i._owner, y = Ce(i.type, i._source, m ? m.type : null);
          d.setExtraStackFrame(y);
        } else
          d.setExtraStackFrame(null);
      }
      var A;
      A = !1;
      function K(i) {
        return typeof i == "object" && i !== null && i.$$typeof === n;
      }
      function H() {
        {
          if (ft.current) {
            var i = N(ft.current.type);
            if (i)
              return `

Check the render method of \`` + i + "`.";
          }
          return "";
        }
      }
      function ue(i) {
        {
          if (i !== void 0) {
            var m = i.fileName.replace(/^.*[\\\/]/, ""), y = i.lineNumber;
            return `

Check your code at ` + m + ":" + y + ".";
          }
          return "";
        }
      }
      var fe = {};
      function Ve(i) {
        {
          var m = H();
          if (!m) {
            var y = typeof i == "string" ? i : i.displayName || i.name;
            y && (m = `

Check the top-level render call using <` + y + ">.");
          }
          return m;
        }
      }
      function lt(i, m) {
        {
          if (!i._store || i._store.validated || i.key != null)
            return;
          i._store.validated = !0;
          var y = Ve(m);
          if (fe[y])
            return;
          fe[y] = !0;
          var j = "";
          i && i._owner && i._owner !== ft.current && (j = " It was passed a child from " + N(i._owner.type) + "."), w(i), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', y, j), w(null);
        }
      }
      function Te(i, m) {
        {
          if (typeof i != "object")
            return;
          if (Array.isArray(i))
            for (var y = 0; y < i.length; y++) {
              var j = i[y];
              K(j) && lt(j, m);
            }
          else if (K(i))
            i._store && (i._store.validated = !0);
          else if (i) {
            var ee = g(i);
            if (typeof ee == "function" && ee !== i.entries)
              for (var te = ee.call(i), z; !(z = te.next()).done; )
                K(z.value) && lt(z.value, m);
          }
        }
      }
      function pt(i) {
        {
          var m = i.type;
          if (m == null || typeof m == "string")
            return;
          var y;
          if (typeof m == "function")
            y = m.propTypes;
          else if (typeof m == "object" && (m.$$typeof === h || m.$$typeof === T))
            y = m.propTypes;
          else
            return;
          if (y) {
            var j = N(m);
            ze(y, i.props, "prop", j, i);
          } else if (m.PropTypes !== void 0 && !A) {
            A = !0;
            var ee = N(m);
            v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ee || "Unknown");
          }
          typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ze(i) {
        {
          for (var m = Object.keys(i.props), y = 0; y < m.length; y++) {
            var j = m[y];
            if (j !== "children" && j !== "key") {
              w(i), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), w(null);
              break;
            }
          }
          i.ref !== null && (w(i), v("Invalid attribute `ref` supplied to `React.Fragment`."), w(null));
        }
      }
      function Pe(i, m, y, j, ee, te) {
        {
          var z = C(i);
          if (!z) {
            var U = "";
            (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (U += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var le = ue(ee);
            le ? U += le : U += H();
            var ae;
            i === null ? ae = "null" : Array.isArray(i) ? ae = "array" : i !== void 0 && i.$$typeof === n ? (ae = "<" + (N(i.type) || "Unknown") + " />", U = " Did you accidentally export a JSX literal instead of a component?") : ae = typeof i, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ae, U);
          }
          var oe = $t(i, m, y, ee, te);
          if (oe == null)
            return oe;
          if (z) {
            var Se = m.children;
            if (Se !== void 0)
              if (j)
                if (Array.isArray(Se)) {
                  for (var et = 0; et < Se.length; et++)
                    Te(Se[et], i);
                  Object.freeze && Object.freeze(Se);
                } else
                  v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Te(Se, i);
          }
          return i === e.Fragment ? Ze(oe) : pt(oe), oe;
        }
      }
      function Vt(i, m, y) {
        return Pe(i, m, y, !0);
      }
      function dt(i, m, y) {
        return Pe(i, m, y, !1);
      }
      var Qe = dt, hn = Vt;
      e.jsx = Qe, e.jsxs = hn;
    }();
  }(qt)), qt;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = na() : e.exports = ia();
})(Nt);
const aa = Nt.exports.Fragment, ur = Nt.exports.jsx, oa = Nt.exports.jsxs;
function fn(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, s;
  for (s = 0; s < n.length; s++)
    a = n[s], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var ln = typeof window < "u" && typeof document < "u";
function Qt(e, t) {
  e && (typeof e == "function" && e(t), {}.hasOwnProperty.call(e, "current") && (e.current = t));
}
function Nr() {
  return ln && document.createElement("div");
}
function sa(e) {
  var t = {
    "data-placement": e.placement
  };
  return e.referenceHidden && (t["data-reference-hidden"] = ""), e.escaped && (t["data-escaped"] = ""), t;
}
function pn(e, t) {
  if (e === t)
    return !0;
  if (typeof e == "object" && e != null && typeof t == "object" && t != null) {
    if (Object.keys(e).length !== Object.keys(t).length)
      return !1;
    for (var r in e)
      if (t.hasOwnProperty(r)) {
        if (!pn(e[r], t[r]))
          return !1;
      } else
        return !1;
    return !0;
  } else
    return !1;
}
function ua(e) {
  var t = [];
  return e.forEach(function(r) {
    t.find(function(n) {
      return pn(r, n);
    }) || t.push(r);
  }), t;
}
function ca(e, t) {
  var r, n;
  return Object.assign({}, t, {
    popperOptions: Object.assign({}, e.popperOptions, t.popperOptions, {
      modifiers: ua([].concat(((r = e.popperOptions) == null ? void 0 : r.modifiers) || [], ((n = t.popperOptions) == null ? void 0 : n.modifiers) || []))
    })
  });
}
var Yt = ln ? gn : it;
function fa(e) {
  var t = er();
  return t.current || (t.current = typeof e == "function" ? e() : e), t.current;
}
function Lr(e, t, r) {
  r.split(/\s+/).forEach(function(n) {
    n && e.classList[t](n);
  });
}
var la = {
  name: "className",
  defaultValue: "",
  fn: function(t) {
    var r = t.popper.firstElementChild, n = function() {
      var c;
      return !!((c = t.props.render) != null && c.$$tippy);
    };
    function a() {
      if (t.props.className && !n()) {
        process.env.NODE_ENV !== "production" && console.warn(["@tippyjs/react: Cannot use `className` prop in conjunction with", "`render` prop. Place the className on the element you are", "rendering."].join(" "));
        return;
      }
      Lr(r, "add", t.props.className);
    }
    function s() {
      n() && Lr(r, "remove", t.props.className);
    }
    return {
      onCreate: a,
      onBeforeUpdate: s,
      onAfterUpdate: a
    };
  }
};
function pa(e) {
  function t(r) {
    var n = r.children, a = r.content, s = r.visible, f = r.singleton, c = r.render, u = r.reference, h = r.disabled, l = h === void 0 ? !1 : h, E = r.ignoreAttributes, T = E === void 0 ? !0 : E;
    r.__source, r.__self;
    var O = fn(r, ["children", "content", "visible", "singleton", "render", "reference", "disabled", "ignoreAttributes", "__source", "__self"]), k = s !== void 0, D = f !== void 0, P = Rt(!1), W = P[0], q = P[1], R = Rt({}), o = R[0], I = R[1], g = Rt(), p = g[0], v = g[1], b = fa(function() {
      return {
        container: Nr(),
        renders: 1
      };
    }), x = Object.assign({
      ignoreAttributes: T
    }, O, {
      content: b.container
    });
    k && (process.env.NODE_ENV !== "production" && ["trigger", "hideOnClick", "showOnCreate"].forEach(function(N) {
      x[N] !== void 0 && console.warn(["@tippyjs/react: Cannot specify `" + N + "` prop in", "controlled mode (`visible` prop)"].join(" "));
    }), x.trigger = "manual", x.hideOnClick = !1), D && (l = !0);
    var C = x, $ = x.plugins || [];
    c && (C = Object.assign({}, x, {
      plugins: D && f.data != null ? [].concat($, [{
        fn: function() {
          return {
            onTrigger: function(J, X) {
              var Z = f.data.children.find(function(ne) {
                var Q = ne.instance;
                return Q.reference === X.currentTarget;
              });
              J.state.$$activeSingletonInstance = Z.instance, v(Z.content);
            }
          };
        }
      }]) : $,
      render: function() {
        return {
          popper: b.container
        };
      }
    }));
    var Y = [u].concat(n ? [n.type] : []);
    return Yt(function() {
      var N = u;
      u && u.hasOwnProperty("current") && (N = u.current);
      var S = e(N || b.ref || Nr(), Object.assign({}, C, {
        plugins: [la].concat(x.plugins || [])
      }));
      return b.instance = S, l && S.disable(), s && S.show(), D && f.hook({
        instance: S,
        content: a,
        props: C,
        setSingletonContent: v
      }), q(!0), function() {
        S.destroy(), f == null || f.cleanup(S);
      };
    }, Y), Yt(function() {
      var N;
      if (b.renders === 1) {
        b.renders++;
        return;
      }
      var S = b.instance;
      S.setProps(ca(S.props, C)), (N = S.popperInstance) == null || N.forceUpdate(), l ? S.disable() : S.enable(), k && (s ? S.show() : S.hide()), D && f.hook({
        instance: S,
        content: a,
        props: C,
        setSingletonContent: v
      });
    }), Yt(function() {
      var N;
      if (!!c) {
        var S = b.instance;
        S.setProps({
          popperOptions: Object.assign({}, S.props.popperOptions, {
            modifiers: [].concat((((N = S.props.popperOptions) == null ? void 0 : N.modifiers) || []).filter(function(J) {
              var X = J.name;
              return X !== "$$tippyReact";
            }), [{
              name: "$$tippyReact",
              enabled: !0,
              phase: "beforeWrite",
              requires: ["computeStyles"],
              fn: function(X) {
                var Z, ne = X.state, Q = (Z = ne.modifiersData) == null ? void 0 : Z.hide;
                (o.placement !== ne.placement || o.referenceHidden !== (Q == null ? void 0 : Q.isReferenceHidden) || o.escaped !== (Q == null ? void 0 : Q.hasPopperEscaped)) && I({
                  placement: ne.placement,
                  referenceHidden: Q == null ? void 0 : Q.isReferenceHidden,
                  escaped: Q == null ? void 0 : Q.hasPopperEscaped
                }), ne.attributes.popper = {};
              }
            }])
          })
        });
      }
    }, [o.placement, o.referenceHidden, o.escaped].concat(Y)), /* @__PURE__ */ oa(aa, {
      children: [n ? /* @__PURE__ */ Br(n, {
        ref: function(S) {
          b.ref = S, Qt(n.ref, S);
        }
      }) : null, W && /* @__PURE__ */ wn(c ? c(sa(o), p, b.instance) : a, b.container)]
    });
  }
  return t;
}
var da = function(e, t) {
  return /* @__PURE__ */ mn(function(n, a) {
    var s = n.children, f = fn(n, ["children"]);
    return /* @__PURE__ */ ur(e, {
      ...Object.assign({}, t, f),
      children: s ? /* @__PURE__ */ Br(s, {
        ref: function(u) {
          Qt(a, u), Qt(s.ref, u);
        }
      }) : null
    });
  });
}, va = /* @__PURE__ */ da(/* @__PURE__ */ pa(Tt));
const ha = va;
(function(e) {
  var t = {}, r = e.prototype.stopCallback;
  e.prototype.stopCallback = function(n, a, s, f) {
    var c = this;
    return c.paused ? !0 : t[s] || t[f] ? !1 : r.call(c, n, a, s);
  }, e.prototype.bindGlobal = function(n, a, s) {
    var f = this;
    if (f.bind(n, a, s), n instanceof Array) {
      for (var c = 0; c < n.length; c++)
        t[n[c]] = !0;
      return;
    }
    t[n] = !0;
  }, e.prototype.unbindGlobal = function(n, a) {
    var s = this;
    if (s.unbind(n, a), n instanceof Array) {
      for (var f = 0; f < n.length; f++)
        t[n[f]] = !1;
      return;
    }
    t[n] = !1;
  }, e.init();
})(Mousetrap);
var dn = { exports: {} };
(function(e) {
  (function(t, r, n) {
    if (!t)
      return;
    for (var a = {
      8: "backspace",
      9: "tab",
      13: "enter",
      16: "shift",
      17: "ctrl",
      18: "alt",
      20: "capslock",
      27: "esc",
      32: "space",
      33: "pageup",
      34: "pagedown",
      35: "end",
      36: "home",
      37: "left",
      38: "up",
      39: "right",
      40: "down",
      45: "ins",
      46: "del",
      91: "meta",
      93: "meta",
      224: "meta"
    }, s = {
      106: "*",
      107: "+",
      109: "-",
      110: ".",
      111: "/",
      186: ";",
      187: "=",
      188: ",",
      189: "-",
      190: ".",
      191: "/",
      192: "`",
      219: "[",
      220: "\\",
      221: "]",
      222: "'"
    }, f = {
      "~": "`",
      "!": "1",
      "@": "2",
      "#": "3",
      $: "4",
      "%": "5",
      "^": "6",
      "&": "7",
      "*": "8",
      "(": "9",
      ")": "0",
      _: "-",
      "+": "=",
      ":": ";",
      '"': "'",
      "<": ",",
      ">": ".",
      "?": "/",
      "|": "\\"
    }, c = {
      option: "alt",
      command: "meta",
      return: "enter",
      escape: "esc",
      plus: "+",
      mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
    }, u, h = 1; h < 20; ++h)
      a[111 + h] = "f" + h;
    for (h = 0; h <= 9; ++h)
      a[h + 96] = h.toString();
    function l(p, v, b) {
      if (p.addEventListener) {
        p.addEventListener(v, b, !1);
        return;
      }
      p.attachEvent("on" + v, b);
    }
    function E(p) {
      if (p.type == "keypress") {
        var v = String.fromCharCode(p.which);
        return p.shiftKey || (v = v.toLowerCase()), v;
      }
      return a[p.which] ? a[p.which] : s[p.which] ? s[p.which] : String.fromCharCode(p.which).toLowerCase();
    }
    function T(p, v) {
      return p.sort().join(",") === v.sort().join(",");
    }
    function O(p) {
      var v = [];
      return p.shiftKey && v.push("shift"), p.altKey && v.push("alt"), p.ctrlKey && v.push("ctrl"), p.metaKey && v.push("meta"), v;
    }
    function k(p) {
      if (p.preventDefault) {
        p.preventDefault();
        return;
      }
      p.returnValue = !1;
    }
    function D(p) {
      if (p.stopPropagation) {
        p.stopPropagation();
        return;
      }
      p.cancelBubble = !0;
    }
    function P(p) {
      return p == "shift" || p == "ctrl" || p == "alt" || p == "meta";
    }
    function W() {
      if (!u) {
        u = {};
        for (var p in a)
          p > 95 && p < 112 || a.hasOwnProperty(p) && (u[a[p]] = p);
      }
      return u;
    }
    function q(p, v, b) {
      return b || (b = W()[p] ? "keydown" : "keypress"), b == "keypress" && v.length && (b = "keydown"), b;
    }
    function R(p) {
      return p === "+" ? ["+"] : (p = p.replace(/\+{2}/g, "+plus"), p.split("+"));
    }
    function o(p, v) {
      var b, x, C, $ = [];
      for (b = R(p), C = 0; C < b.length; ++C)
        x = b[C], c[x] && (x = c[x]), v && v != "keypress" && f[x] && (x = f[x], $.push("shift")), P(x) && $.push(x);
      return v = q(x, $, v), {
        key: x,
        modifiers: $,
        action: v
      };
    }
    function I(p, v) {
      return p === null || p === r ? !1 : p === v ? !0 : I(p.parentNode, v);
    }
    function g(p) {
      var v = this;
      if (p = p || r, !(v instanceof g))
        return new g(p);
      v.target = p, v._callbacks = {}, v._directMap = {};
      var b = {}, x, C = !1, $ = !1, Y = !1;
      function N(_) {
        _ = _ || {};
        var L = !1, F;
        for (F in b) {
          if (_[F]) {
            L = !0;
            continue;
          }
          b[F] = 0;
        }
        L || (Y = !1);
      }
      function S(_, L, F, M, V, re) {
        var B, G, se = [], ie = F.type;
        if (!v._callbacks[_])
          return [];
        for (ie == "keyup" && P(_) && (L = [_]), B = 0; B < v._callbacks[_].length; ++B)
          if (G = v._callbacks[_][B], !(!M && G.seq && b[G.seq] != G.level) && ie == G.action && (ie == "keypress" && !F.metaKey && !F.ctrlKey || T(L, G.modifiers))) {
            var Oe = !M && G.combo == V, Re = M && G.seq == M && G.level == re;
            (Oe || Re) && v._callbacks[_].splice(B, 1), se.push(G);
          }
        return se;
      }
      function J(_, L, F, M) {
        v.stopCallback(L, L.target || L.srcElement, F, M) || _(L, F) === !1 && (k(L), D(L));
      }
      v._handleKey = function(_, L, F) {
        var M = S(_, L, F), V, re = {}, B = 0, G = !1;
        for (V = 0; V < M.length; ++V)
          M[V].seq && (B = Math.max(B, M[V].level));
        for (V = 0; V < M.length; ++V) {
          if (M[V].seq) {
            if (M[V].level != B)
              continue;
            G = !0, re[M[V].seq] = 1, J(M[V].callback, F, M[V].combo, M[V].seq);
            continue;
          }
          G || J(M[V].callback, F, M[V].combo);
        }
        var se = F.type == "keypress" && $;
        F.type == Y && !P(_) && !se && N(re), $ = G && F.type == "keydown";
      };
      function X(_) {
        typeof _.which != "number" && (_.which = _.keyCode);
        var L = E(_);
        if (!!L) {
          if (_.type == "keyup" && C === L) {
            C = !1;
            return;
          }
          v.handleKey(L, O(_), _);
        }
      }
      function Z() {
        clearTimeout(x), x = setTimeout(N, 1e3);
      }
      function ne(_, L, F, M) {
        b[_] = 0;
        function V(ie) {
          return function() {
            Y = ie, ++b[_], Z();
          };
        }
        function re(ie) {
          J(F, ie, _), M !== "keyup" && (C = E(ie)), setTimeout(N, 10);
        }
        for (var B = 0; B < L.length; ++B) {
          var G = B + 1 === L.length, se = G ? re : V(M || o(L[B + 1]).action);
          Q(L[B], se, M, _, B);
        }
      }
      function Q(_, L, F, M, V) {
        v._directMap[_ + ":" + F] = L, _ = _.replace(/\s+/g, " ");
        var re = _.split(" "), B;
        if (re.length > 1) {
          ne(_, re, L, F);
          return;
        }
        B = o(_, F), v._callbacks[B.key] = v._callbacks[B.key] || [], S(B.key, B.modifiers, { type: B.action }, M, _, V), v._callbacks[B.key][M ? "unshift" : "push"]({
          callback: L,
          modifiers: B.modifiers,
          action: B.action,
          seq: M,
          level: V,
          combo: _
        });
      }
      v._bindMultiple = function(_, L, F) {
        for (var M = 0; M < _.length; ++M)
          Q(_[M], L, F);
      }, l(p, "keypress", X), l(p, "keydown", X), l(p, "keyup", X);
    }
    g.prototype.bind = function(p, v, b) {
      var x = this;
      return p = p instanceof Array ? p : [p], x._bindMultiple.call(x, p, v, b), x;
    }, g.prototype.unbind = function(p, v) {
      var b = this;
      return b.bind.call(b, p, function() {
      }, v);
    }, g.prototype.trigger = function(p, v) {
      var b = this;
      return b._directMap[p + ":" + v] && b._directMap[p + ":" + v]({}, p), b;
    }, g.prototype.reset = function() {
      var p = this;
      return p._callbacks = {}, p._directMap = {}, p;
    }, g.prototype.stopCallback = function(p, v) {
      var b = this;
      if ((" " + v.className + " ").indexOf(" mousetrap ") > -1 || I(v, b.target))
        return !1;
      if ("composedPath" in p && typeof p.composedPath == "function") {
        var x = p.composedPath()[0];
        x !== p.target && (v = x);
      }
      return v.tagName == "INPUT" || v.tagName == "SELECT" || v.tagName == "TEXTAREA" || v.isContentEditable;
    }, g.prototype.handleKey = function() {
      var p = this;
      return p._handleKey.apply(p, arguments);
    }, g.addKeycodes = function(p) {
      for (var v in p)
        p.hasOwnProperty(v) && (a[v] = p[v]);
      u = null;
    }, g.init = function() {
      var p = g(r);
      for (var v in p)
        v.charAt(0) !== "_" && (g[v] = function(b) {
          return function() {
            return p[b].apply(p, arguments);
          };
        }(v));
    }, g.init(), t.Mousetrap = g, e.exports && (e.exports = g), typeof n == "function" && n.amd && n(function() {
      return g;
    });
  })(typeof window < "u" ? window : null, typeof window < "u" ? document : null);
})(dn);
const ct = dn.exports, Mr = (e, t) => {
  ct.bind(e, t(!0), "keydown"), ct.bind(e, t(!1), "keyup");
}, Ir = (e, t) => {
  ct.bind(e, t);
}, $r = (e) => {
  ct.unbind(e, "keydown"), ct.unbind(e, "keyup");
}, Vr = (e) => {
  ct.unbind(e);
}, vn = yn({
  showTooltip: !1,
  disabled: !1,
  tooltipOptions: {}
});
function ma(e) {
  const t = er();
  return it(() => {
    t.current = e;
  }), t.current;
}
const ba = ({
  disabled: e,
  children: t,
  combination: r,
  onPress: n
}) => {
  const {
    disabled: a,
    showTooltip: s,
    tooltipOptions: f
  } = bn(vn), c = er(), u = ma(r), h = (E) => {
    if (!(e || a)) {
      if (typeof n == "function")
        return n(E);
      if (c && c.current) {
        if (typeof c.current[n] == "function")
          return c.current[n](E);
        throw new Error(`ERROR: The method of ${n} is not present in the DOMNode of the child, please check render.`);
      }
    }
  };
  it(() => {
    Ir(r, h);
  }, []), it(() => (u && r !== u && (Vr(u), Ir(r, h)), () => Vr(r)), [r]);
  const l = s && !(e || a);
  return /* @__PURE__ */ ur(ha, {
    ...f,
    content: r.toUpperCase(),
    visible: l,
    children: St.cloneElement(t, {
      ref: c
    })
  });
}, wa = {
  KEY_PRESS: "keypress",
  KEY_DOWN: "keydown",
  KEY_UP: "keyup"
}, Ea = ({
  disabled: e = !1,
  tooltipOptions: t = {},
  tooltipCombination: r = "shift+h",
  children: n
}) => {
  const [a, s] = St.useState(!1), [f, c] = Rt(r), u = (l) => () => {
    e && s(!1), s(l);
  };
  it(() => {
    Mr(f, u);
  }, []), it(() => {
    const l = f;
    return c(r), l !== f && ($r(l), Mr(f, u)), () => $r(f);
  }, [r]);
  const h = {
    showTooltip: a,
    disabled: e,
    tooltipOptions: t
  };
  return /* @__PURE__ */ ur(vn.Provider, {
    value: h,
    children: n
  });
};
export {
  ba as Hotkey,
  Ea as HotkeyProvider,
  wa as KEYBOARD_EVENT
};
//# sourceMappingURL=react-hotkey-scroll.es.js.map
