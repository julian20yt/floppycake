

    
        var currentHost = window.location.hostname;
        var currentPort = window.location.port;
    
        var APP_URL = "http://" + currentHost + ":" + (currentPort || "8090");  
        var APP_HOST =  currentHost;  
        var PROXY_URL = "http://" + currentHost + ":8070"; 
    
        console.log("APP_URL:", APP_URL);
        console.log("PROXY_URL:", PROXY_URL);

    (function(P, T, q) {


        

        function m(b, a, c) {
            var d;
            if (b)
                if (H(b))
                    for (d in b) d != "prototype" && d != "length" && d != "name" && b.hasOwnProperty(d) && a.call(c, b[d], d);
                else if (b.forEach && b.forEach !== m) b.forEach(a, c);
            else if (!b || typeof b.length !== "number" ? 0 : typeof b.hasOwnProperty != "function" && typeof b.constructor != "function" || b instanceof K || ca && b instanceof ca || wa.call(b) !== "[object Object]" || typeof b.callee === "function")
                for (d = 0; d < b.length; d++) a.call(c, b[d], d);
            else
                for (d in b) b.hasOwnProperty(d) && a.call(c, b[d],
                    d);
            return b
        }

        function mb(b) {
            var a = [],
                c;
            for (c in b) b.hasOwnProperty(c) && a.push(c);
            return a.sort()
        }

        function fc(b, a, c) {
            for (var d = mb(b), e = 0; e < d.length; e++) a.call(c, b[d[e]], d[e]);
            return d
        }

        function nb(b) {
            return function(a, c) {
                b(c, a)
            }
        }

        function xa() {
            for (var b = aa.length, a; b;) {
                b--;
                a = aa[b].charCodeAt(0);
                if (a == 57) return aa[b] = "A", aa.join("");
                if (a == 90) aa[b] = "0";
                else return aa[b] = String.fromCharCode(a + 1), aa.join("")
            }
            aa.unshift("0");
            return aa.join("")
        }

        function ob(b, a) {
            a ? b.$$hashKey = a : delete b.$$hashKey
        }

        function v(b) {
            var a =
                b.$$hashKey;
            m(arguments, function(a) {
                a !== b && m(a, function(a, c) {
                    b[c] = a
                })
            });
            ob(b, a);
            return b
        }

        function G(b) {
            return parseInt(b, 10)
        }

        function ya(b, a) {
            return v(new(v(function() {}, {
                prototype: b
            })), a)
        }

        function C() {}

        function ma(b) {
            return b
        }

        function I(b) {
            return function() {
                return b
            }
        }

        function w(b) {
            return typeof b == "undefined"
        }

        function y(b) {
            return typeof b != "undefined"
        }

        function L(b) {
            return b != null && typeof b == "object"
        }

        function B(b) {
            return typeof b == "string"
        }

        function Qa(b) {
            return typeof b == "number"
        }

        function na(b) {
            return wa.apply(b) ==
                "[object Date]"
        }

        function E(b) {
            return wa.apply(b) == "[object Array]"
        }

        function H(b) {
            return typeof b == "function"
        }

        function oa(b) {
            return b && b.document && b.location && b.alert && b.setInterval
        }

        function Q(b) {
            return B(b) ? b.replace(/^\s*/, "").replace(/\s*$/, "") : b
        }

        function gc(b) {
            return b && (b.nodeName || b.bind && b.find)
        }

        function Ra(b, a, c) {
            var d = [];
            m(b, function(b, g, h) {
                d.push(a.call(c, b, g, h))
            });
            return d
        }

        function za(b, a) {
            if (b.indexOf) return b.indexOf(a);
            for (var c = 0; c < b.length; c++)
                if (a === b[c]) return c;
            return -1
        }

        function Sa(b,
            a) {
            var c = za(b, a);
            c >= 0 && b.splice(c, 1);
            return a
        }

        function U(b, a) {
            if (oa(b) || b && b.$evalAsync && b.$watch) throw Error("Can't copy Window or Scope");
            if (a) {
                if (b === a) throw Error("Can't copy equivalent objects or arrays");
                if (E(b))
                    for (var c = a.length = 0; c < b.length; c++) a.push(U(b[c]));
                else {
                    c = a.$$hashKey;
                    m(a, function(b, c) {
                        delete a[c]
                    });
                    for (var d in b) a[d] = U(b[d]);
                    ob(a, c)
                }
            } else(a = b) && (E(b) ? a = U(b, []) : na(b) ? a = new Date(b.getTime()) : L(b) && (a = U(b, {})));
            return a
        }

        function hc(b, a) {
            var a = a || {},
                c;
            for (c in b) b.hasOwnProperty(c) &&
                c.substr(0, 2) !== "$$" && (a[c] = b[c]);
            return a
        }

        function fa(b, a) {
            if (b === a) return !0;
            if (b === null || a === null) return !1;
            if (b !== b && a !== a) return !0;
            var c = typeof b,
                d;
            if (c == typeof a && c == "object")
                if (E(b)) {
                    if ((c = b.length) == a.length) {
                        for (d = 0; d < c; d++)
                            if (!fa(b[d], a[d])) return !1;
                        return !0
                    }
                } else if (na(b)) return na(a) && b.getTime() == a.getTime();
            else {
                if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || oa(b) || oa(a)) return !1;
                c = {};
                for (d in b)
                    if (!(d.charAt(0) === "$" || H(b[d]))) {
                        if (!fa(b[d], a[d])) return !1;
                        c[d] = !0
                    }
                for (d in a)
                    if (!c[d] &&
                        d.charAt(0) !== "$" && a[d] !== q && !H(a[d])) return !1;
                return !0
            }
            return !1
        }

        function Ta(b, a) {
            var c = arguments.length > 2 ? ha.call(arguments, 2) : [];
            return H(a) && !(a instanceof RegExp) ? c.length ? function() {
                return arguments.length ? a.apply(b, c.concat(ha.call(arguments, 0))) : a.apply(b, c)
            } : function() {
                return arguments.length ? a.apply(b, arguments) : a.call(b)
            } : a
        }

        function ic(b, a) {
            var c = a;
            /^\$+/.test(b) ? c = q : oa(a) ? c = "$WINDOW" : a && T === a ? c = "$DOCUMENT" : a && a.$evalAsync && a.$watch && (c = "$SCOPE");
            return c
        }

        function da(b, a) {
            return JSON.stringify(b,
                ic, a ? "  " : null)
        }

        function pb(b) {
            return B(b) ? JSON.parse(b) : b
        }

        function Ua(b) {
            b && b.length !== 0 ? (b = z("" + b), b = !(b == "f" || b == "0" || b == "false" || b == "no" || b == "n" || b == "[]")) : b = !1;
            return b
        }

        function pa(b) {
            b = u(b).clone();
            try {
                b.html("")
            } catch (a) {}
            var c = u("<div>").append(b).html();
            try {
                return b[0].nodeType === 3 ? z(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                    return "<" + z(b)
                })
            } catch (d) {
                return z(c)
            }
        }

        function Va(b) {
            var a = {},
                c, d;
            m((b || "").split("&"), function(b) {
                b && (c = b.split("="), d = decodeURIComponent(c[0]),
                    a[d] = y(c[1]) ? decodeURIComponent(c[1]) : !0)
            });
            return a
        }

        function qb(b) {
            var a = [];
            m(b, function(b, d) {
                a.push(Wa(d, !0) + (b === !0 ? "" : "=" + Wa(b, !0)))
            });
            return a.length ? a.join("&") : ""
        }

        function Xa(b) {
            return Wa(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
        }

        function Wa(b, a) {
            return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, a ? "%20" : "+")
        }

        function jc(b, a) {
            function c(a) {
                a && d.push(a)
            }
            var d = [b],
                e, g, h = ["ng:app", "ng-app", "x-ng-app",
                    "data-ng-app"
                ],
                f = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
            m(h, function(a) {
                h[a] = !0;
                c(T.getElementById(a));
                a = a.replace(":", "\\:");
                b.querySelectorAll && (m(b.querySelectorAll("." + a), c), m(b.querySelectorAll("." + a + "\\:"), c), m(b.querySelectorAll("[" + a + "]"), c))
            });
            m(d, function(a) {
                if (!e) {
                    var b = f.exec(" " + a.className + " ");
                    b ? (e = a, g = (b[2] || "").replace(/\s+/g, ",")) : m(a.attributes, function(b) {
                        if (!e && h[b.name]) e = a, g = b.value
                    })
                }
            });
            e && a(e, g ? [g] : [])
        }

        function rb(b, a) {
            var c = function() {
                    b = u(b);
                    a = a || [];
                    a.unshift(["$provide", function(a) {
                        a.value("$rootElement",
                            b)
                    }]);
                    a.unshift("ng");
                    var c = sb(a);
                    c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
                        a.$apply(function() {
                            b.data("$injector", d);
                            c(b)(a)
                        })
                    }]);
                    return c
                },
                d = /^NG_DEFER_BOOTSTRAP!/;
            if (P && !d.test(P.name)) return c();
            P.name = P.name.replace(d, "");
            Ya.resumeBootstrap = function(b) {
                m(b, function(b) {
                    a.push(b)
                });
                c()
            }
        }

        function Za(b, a) {
            a = a || "_";
            return b.replace(kc, function(b, d) {
                return (d ? a : "") + b.toLowerCase()
            })
        }

        function $a(b, a, c) {
            if (!b) throw Error("Argument '" + (a || "?") + "' is " + (c || "required"));
            return b
        }

        function qa(b, a, c) {
            c && E(b) && (b = b[b.length - 1]);
            $a(H(b), a, "not a function, got " + (b && typeof b == "object" ? b.constructor.name || "Object" : typeof b));
            return b
        }

        function lc(b) {
            function a(a, b, e) {
                return a[b] || (a[b] = e())
            }
            return a(a(b, "angular", Object), "module", function() {
                var b = {};
                return function(d, e, g) {
                    e && b.hasOwnProperty(d) && (b[d] = null);
                    return a(b, d, function() {
                        function a(c, d, e) {
                            return function() {
                                b[e || "push"]([c, d, arguments]);
                                return k
                            }
                        }
                        if (!e) throw Error("No module: " + d);
                        var b = [],
                            c = [],
                            i = a("$injector",
                                "invoke"),
                            k = {
                                _invokeQueue: b,
                                _runBlocks: c,
                                requires: e,
                                name: d,
                                provider: a("$provide", "provider"),
                                factory: a("$provide", "factory"),
                                service: a("$provide", "service"),
                                value: a("$provide", "value"),
                                constant: a("$provide", "constant", "unshift"),
                                filter: a("$filterProvider", "register"),
                                controller: a("$controllerProvider", "register"),
                                directive: a("$compileProvider", "directive"),
                                config: i,
                                run: function(a) {
                                    c.push(a);
                                    return this
                                }
                            };
                        g && i(g);
                        return k
                    })
                }
            })
        }

        function tb(b) {
            return b.replace(mc, function(a, b, d, e) {
                return e ? d.toUpperCase() :
                    d
            }).replace(nc, "Moz$1")
        }

        function ab(b, a, c, d) {
            function e(b) {
                var f;
                var e = c && b ? [this.filter(b)] : [this],
                    j = a,
                    i, k, l, n, o, p;
                if (!d || b != null)
                    for (; e.length;) {
                        i = e.shift();
                        k = 0;
                        for (l = i.length; k < l; k++) {
                            n = u(i[k]);
                            j ? n.triggerHandler("$destroy") : j = !j;
                            o = 0;
                            for (f = (p = n.children()).length, n = f; o < n; o++) e.push(ca(p[o]))
                        }
                    }
                return g.apply(this, arguments)
            }
            var g = ca.fn[b],
                g = g.$original || g;
            e.$original = g;
            ca.fn[b] = e
        }

        function K(b) {
            if (b instanceof K) return b;
            if (!(this instanceof K)) {
                if (B(b) && b.charAt(0) != "<") throw Error("selectors not implemented");
                return new K(b)
            }
            if (B(b)) {
                var a = T.createElement("div");
                a.innerHTML = "<div>&#160;</div>" + b;
                a.removeChild(a.firstChild);
                bb(this, a.childNodes);
                this.remove()
            } else bb(this, b)
        }

        function cb(b) {
            return b.cloneNode(!0)
        }

        function ra(b) {
            ub(b);
            for (var a = 0, b = b.childNodes || []; a < b.length; a++) ra(b[a])
        }

        function vb(b, a, c) {
            var d = ba(b, "events");
            ba(b, "handle") && (w(a) ? m(d, function(a, c) {
                db(b, c, a);
                delete d[c]
            }) : w(c) ? (db(b, a, d[a]), delete d[a]) : Sa(d[a], c))
        }

        function ub(b) {
            var a = b[Aa],
                c = Ba[a];
            c && (c.handle && (c.events.$destroy && c.handle({},
                "$destroy"), vb(b)), delete Ba[a], b[Aa] = q)
        }

        function ba(b, a, c) {
            var d = b[Aa],
                d = Ba[d || -1];
            if (y(c)) d || (b[Aa] = d = ++oc, d = Ba[d] = {}), d[a] = c;
            else return d && d[a]
        }

        function wb(b, a, c) {
            var d = ba(b, "data"),
                e = y(c),
                g = !e && y(a),
                h = g && !L(a);
            !d && !h && ba(b, "data", d = {});
            if (e) d[a] = c;
            else if (g)
                if (h) return d && d[a];
                else v(d, a);
            else return d
        }

        function Ca(b, a) {
            return (" " + b.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") > -1
        }

        function xb(b, a) {
            a && m(a.split(" "), function(a) {
                b.className = Q((" " + b.className + " ").replace(/[\n\t]/g, " ").replace(" " +
                    Q(a) + " ", " "))
            })
        }

        function yb(b, a) {
            a && m(a.split(" "), function(a) {
                if (!Ca(b, a)) b.className = Q(b.className + " " + Q(a))
            })
        }

        function bb(b, a) {
            if (a)
                for (var a = !a.nodeName && y(a.length) && !oa(a) ? a : [a], c = 0; c < a.length; c++) b.push(a[c])
        }

        function zb(b, a) {
            return Da(b, "$" + (a || "ngController") + "Controller")
        }

        function Da(b, a, c) {
            b = u(b);
            for (b[0].nodeType == 9 && (b = b.find("html")); b.length;) {
                if (c = b.data(a)) return c;
                b = b.parent()
            }
        }

        function Ab(b, a) {
            var c = Ea[a.toLowerCase()];
            return c && Bb[b.nodeName] && c
        }

        function pc(b, a) {
            var c = function(c,
                e) {
                if (!c.preventDefault) c.preventDefault = function() {
                    c.returnValue = !1
                };
                if (!c.stopPropagation) c.stopPropagation = function() {
                    c.cancelBubble = !0
                };
                if (!c.target) c.target = c.srcElement || T;
                if (w(c.defaultPrevented)) {
                    var g = c.preventDefault;
                    c.preventDefault = function() {
                        c.defaultPrevented = !0;
                        g.call(c)
                    };
                    c.defaultPrevented = !1
                }
                c.isDefaultPrevented = function() {
                    return c.defaultPrevented
                };
                m(a[e || c.type], function(a) {
                    a.call(b, c)
                });
                Z <= 8 ? (c.preventDefault = null, c.stopPropagation = null, c.isDefaultPrevented = null) : (delete c.preventDefault,
                    delete c.stopPropagation, delete c.isDefaultPrevented)
            };
            c.elem = b;
            return c
        }

        function ga(b) {
            var a = typeof b,
                c;
            if (a == "object" && b !== null)
                if (typeof(c = b.$$hashKey) == "function") c = b.$$hashKey();
                else {
                    if (c === q) c = b.$$hashKey = xa()
                }
            else c = b;
            return a + ":" + c
        }

        function Fa(b) {
            m(b, this.put, this)
        }

        function eb() {}

        function Cb(b) {
            var a, c;
            if (typeof b == "function") {
                if (!(a = b.$inject)) a = [], c = b.toString().replace(qc, ""), c = c.match(rc), m(c[1].split(sc), function(b) {
                    b.replace(tc, function(b, c, d) {
                        a.push(d)
                    })
                }), b.$inject = a
            } else E(b) ? (c =
                b.length - 1, qa(b[c], "fn"), a = b.slice(0, c)) : qa(b, "fn", !0);
            return a
        }

        function sb(b) {
            function a(a) {
                return function(b, c) {
                    if (L(b)) m(b, nb(a));
                    else return a(b, c)
                }
            }

            function c(a, b) {
                if (H(b) || E(b)) b = l.instantiate(b);
                if (!b.$get) throw Error("Provider " + a + " must define $get factory method.");
                return k[a + f] = b
            }

            function d(a, b) {
                return c(a, {
                    $get: b
                })
            }

            function e(a) {
                var b = [];
                m(a, function(a) {
                    if (!i.get(a))
                        if (i.put(a, !0), B(a)) {
                            var c = sa(a);
                            b = b.concat(e(c.requires)).concat(c._runBlocks);
                            try {
                                for (var d = c._invokeQueue, c = 0, f = d.length; c <
                                    f; c++) {
                                    var g = d[c],
                                        p = g[0] == "$injector" ? l : l.get(g[0]);
                                    p[g[1]].apply(p, g[2])
                                }
                            } catch (j) {
                                throw j.message && (j.message += " from " + a), j;
                            }
                        } else if (H(a)) try {
                        b.push(l.invoke(a))
                    } catch (h) {
                        throw h.message && (h.message += " from " + a), h;
                    } else if (E(a)) try {
                        b.push(l.invoke(a))
                    } catch (o) {
                        throw o.message && (o.message += " from " + String(a[a.length - 1])), o;
                    } else qa(a, "module")
                });
                return b
            }

            function g(a, b) {
                function c(d) {
                    if (typeof d !== "string") throw Error("Service name expected");
                    if (a.hasOwnProperty(d)) {
                        if (a[d] === h) throw Error("Circular dependency: " +
                            j.join(" <- "));
                        return a[d]
                    } else try {
                        return j.unshift(d), a[d] = h, a[d] = b(d)
                    } finally {
                        j.shift()
                    }
                }

                function d(a, b, e) {
                    var f = [],
                        i = Cb(a),
                        g, j, h;
                    j = 0;
                    for (g = i.length; j < g; j++) h = i[j], f.push(e && e.hasOwnProperty(h) ? e[h] : c(h));
                    a.$inject || (a = a[g]);
                    switch (b ? -1 : f.length) {
                        case 0:
                            return a();
                        case 1:
                            return a(f[0]);
                        case 2:
                            return a(f[0], f[1]);
                        case 3:
                            return a(f[0], f[1], f[2]);
                        case 4:
                            return a(f[0], f[1], f[2], f[3]);
                        case 5:
                            return a(f[0], f[1], f[2], f[3], f[4]);
                        case 6:
                            return a(f[0], f[1], f[2], f[3], f[4], f[5]);
                        case 7:
                            return a(f[0], f[1],
                                f[2], f[3], f[4], f[5], f[6]);
                        case 8:
                            return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7]);
                        case 9:
                            return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8]);
                        case 10:
                            return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9]);
                        default:
                            return a.apply(b, f)
                    }
                }
                return {
                    invoke: d,
                    instantiate: function(a, b) {
                        var c = function() {},
                            e;
                        c.prototype = (E(a) ? a[a.length - 1] : a).prototype;
                        c = new c;
                        e = d(a, c, b);
                        return L(e) ? e : c
                    },
                    get: c,
                    annotate: Cb
                }
            }
            var h = {},
                f = "Provider",
                j = [],
                i = new Fa,
                k = {
                    $provide: {
                        provider: a(c),
                        factory: a(d),
                        service: a(function(a,
                            b) {
                            return d(a, ["$injector", function(a) {
                                return a.instantiate(b)
                            }])
                        }),
                        value: a(function(a, b) {
                            return d(a, I(b))
                        }),
                        constant: a(function(a, b) {
                            k[a] = b;
                            n[a] = b
                        }),
                        decorator: function(a, b) {
                            var c = l.get(a + f),
                                d = c.$get;
                            c.$get = function() {
                                var a = o.invoke(d, c);
                                return o.invoke(b, null, {
                                    $delegate: a
                                })
                            }
                        }
                    }
                },
                l = g(k, function() {
                    throw Error("Unknown provider: " + j.join(" <- "));
                }),
                n = {},
                o = n.$injector = g(n, function(a) {
                    a = l.get(a + f);
                    return o.invoke(a.$get, a)
                });
            m(e(b), function(a) {
                o.invoke(a || C)
            });
            return o
        }

        function uc() {
            var b = !0;
            this.disableAutoScrolling =
                function() {
                    b = !1
                };
            this.$get = ["$window", "$location", "$rootScope", function(a, c, d) {
                function e(a) {
                    var b = null;
                    m(a, function(a) {
                        !b && z(a.nodeName) === "a" && (b = a)
                    });
                    return b
                }

                function g() {
                    var b = c.hash(),
                        d;
                    b ? (d = h.getElementById(b)) ? d.scrollIntoView() : (d = e(h.getElementsByName(b))) ? d.scrollIntoView() : b === "top" && a.scrollTo(0, 0) : a.scrollTo(0, 0)
                }
                var h = a.document;
                b && d.$watch(function() {
                    return c.hash()
                }, function() {
                    d.$evalAsync(g)
                });
                return g
            }]
        }

        function vc(b, a, c, d) {
            function e(a) {
                try {
                    a.apply(null, ha.call(arguments, 1))
                } finally {
                    if (p--,
                        p === 0)
                        for (; s.length;) try {
                            s.pop()()
                        } catch (b) {
                            c.error(b)
                        }
                }
            }

            function g(a, b) {
                (function V() {
                    m(t, function(a) {
                        a()
                    });
                    x = b(V, a)
                })()
            }

            function h() {
                M != f.url() && (M = f.url(), m(N, function(a) {
                    a(f.url())
                }))
            }
            var f = this,
                j = a[0],
                i = b.location,
                k = b.history,
                l = b.setTimeout,
                n = b.clearTimeout,
                o = {};
            f.isMock = !1;
            var p = 0,
                s = [];
            f.$$completeOutstandingRequest = e;
            f.$$incOutstandingRequestCount = function() {
                p++
            };
            f.notifyWhenNoOutstandingRequests = function(a) {
                m(t, function(a) {
                    a()
                });
                p === 0 ? a() : s.push(a)
            };
            var t = [],
                x;
            f.addPollFn = function(a) {
                w(x) &&
                    g(100, l);
                t.push(a);
                return a
            };
            var M = i.href,
                A = a.find("base");
            f.url = function(a, b) {
                if (a) {
                    if (M != a) return M = a, d.history ? b ? k.replaceState(null, "", a) : (k.pushState(null, "", a), A.attr("href", A.attr("href"))) : b ? i.replace(a) : i.href = a, f
                } else return i.href.replace(/%27/g, "'")
            };
            var N = [],
                J = !1;
            f.onUrlChange = function(a) {
                J || (d.history && u(b).bind("popstate", h), d.hashchange ? u(b).bind("hashchange", h) : f.addPollFn(h), J = !0);
                N.push(a);
                return a
            };
            f.baseHref = function() {
                var a = A.attr("href");
                return a ? a.replace(/^https?\:\/\/[^\/]*/,
                    "") : ""
            };
            var r = {},
                $ = "",
                R = f.baseHref();
            f.cookies = function(a, b) {
                var d, e, f, i;
                if (a)
                    if (b === q) j.cookie = escape(a) + "=;path=" + R + ";expires=Thu, 01 Jan 1970 00:00:00 GMT";
                    else {
                        if (B(b)) d = (j.cookie = escape(a) + "=" + escape(b) + ";path=" + R).length + 1, d > 4096 && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!")
                    }
                else {
                    if (j.cookie !== $) {
                        $ = j.cookie;
                        d = $.split("; ");
                        r = {};
                        for (f = 0; f < d.length; f++) e = d[f], i = e.indexOf("="), i > 0 && (a = unescape(e.substring(0, i)), r[a] === q && (r[a] = unescape(e.substring(i +
                            1))))
                    }
                    return r
                }
            };
            f.defer = function(a, b) {
                var c;
                p++;
                c = l(function() {
                    delete o[c];
                    e(a)
                }, b || 0);
                o[c] = !0;
                return c
            };
            f.defer.cancel = function(a) {
                return o[a] ? (delete o[a], n(a), e(C), !0) : !1
            }
        }

        function wc() {
            this.$get = ["$window", "$log", "$sniffer", "$document", function(b, a, c, d) {
                return new vc(b, d, a, c)
            }]
        }

        function xc() {
            this.$get = function() {
                function b(b, d) {
                    function e(a) {
                        if (a != l) {
                            if (n) {
                                if (n == a) n = a.n
                            } else n = a;
                            g(a.n, a.p);
                            g(a, l);
                            l = a;
                            l.n = null
                        }
                    }

                    function g(a, b) {
                        if (a != b) {
                            if (a) a.p = b;
                            if (b) b.n = a
                        }
                    }
                    if (b in a) throw Error("cacheId " + b +
                        " taken");
                    var h = 0,
                        f = v({}, d, {
                            id: b
                        }),
                        j = {},
                        i = d && d.capacity || Number.MAX_VALUE,
                        k = {},
                        l = null,
                        n = null;
                    return a[b] = {
                        put: function(a, b) {
                            var c = k[a] || (k[a] = {
                                key: a
                            });
                            e(c);
                            w(b) || (a in j || h++, j[a] = b, h > i && this.remove(n.key))
                        },
                        get: function(a) {
                            var b = k[a];
                            if (b) return e(b), j[a]
                        },
                        remove: function(a) {
                            var b = k[a];
                            if (b) {
                                if (b == l) l = b.p;
                                if (b == n) n = b.n;
                                g(b.n, b.p);
                                delete k[a];
                                delete j[a];
                                h--
                            }
                        },
                        removeAll: function() {
                            j = {};
                            h = 0;
                            k = {};
                            l = n = null
                        },
                        destroy: function() {
                            k = f = j = null;
                            delete a[b]
                        },
                        info: function() {
                            return v({}, f, {
                                size: h
                            })
                        }
                    }
                }
                var a = {};
                b.info = function() {
                    var b = {};
                    m(a, function(a, e) {
                        b[e] = a.info()
                    });
                    return b
                };
                b.get = function(b) {
                    return a[b]
                };
                return b
            }
        }

        function yc() {
            this.$get = ["$cacheFactory", function(b) {
                return b("templates")
            }]
        }

        function Db(b) {
            var a = {},
                c = "Directive",
                d = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,
                e = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/,
                g = "Template must have exactly one root element. was: ",
                h = /^\s*(https?|ftp|mailto|file):/;
            this.directive = function j(d, e) {
                B(d) ? ($a(e, "directive"), a.hasOwnProperty(d) || (a[d] = [], b.factory(d + c, ["$injector",
                    "$exceptionHandler",
                    function(b, c) {
                        var e = [];
                        m(a[d], function(a) {
                            try {
                                var g = b.invoke(a);
                                if (H(g)) g = {
                                    compile: I(g)
                                };
                                else if (!g.compile && g.link) g.compile = I(g.link);
                                g.priority = g.priority || 0;
                                g.name = g.name || d;
                                g.require = g.require || g.controller && g.name;
                                g.restrict = g.restrict || "A";
                                e.push(g)
                            } catch (h) {
                                c(h)
                            }
                        });
                        return e
                    }
                ])), a[d].push(e)) : m(d, nb(j));
                return this
            };
            this.urlSanitizationWhitelist = function(a) {
                return y(a) ? (h = a, this) : h
            };
            this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse",
                "$controller", "$rootScope", "$document",
                function(b, i, k, l, n, o, p, s, t) {
                    function x(a, b, c) {
                        a instanceof u || (a = u(a));
                        m(a, function(b, c) {
                            b.nodeType == 3 && b.nodeValue.match(/\S+/) && (a[c] = u(b).wrap("<span></span>").parent()[0])
                        });
                        var d = A(a, b, a, c);
                        return function(b, c) {
                            $a(b, "scope");
                            for (var e = c ? ua.clone.call(a) : a, g = 0, i = e.length; g < i; g++) {
                                var h = e[g];
                                (h.nodeType == 1 || h.nodeType == 9) && e.eq(g).data("$scope", b)
                            }
                            M(e, "ng-scope");
                            c && c(e, b);
                            d && d(b, e, e);
                            return e
                        }
                    }

                    function M(a, b) {
                        try {
                            a.addClass(b)
                        } catch (c) {}
                    }

                    function A(a, b, c,
                        d) {
                        function e(a, c, d, i) {
                            var h, j, k, p, o, l, n, t = [];
                            o = 0;
                            for (l = c.length; o < l; o++) t.push(c[o]);
                            n = o = 0;
                            for (l = g.length; o < l; n++) j = t[n], c = g[o++], h = g[o++], c ? (c.scope ? (k = a.$new(L(c.scope)), u(j).data("$scope", k)) : k = a, (p = c.transclude) || !i && b ? c(h, k, j, d, function(b) {
                                return function(c) {
                                    var d = a.$new();
                                    d.$$transcluded = !0;
                                    return b(d, c).bind("$destroy", Ta(d, d.$destroy))
                                }
                            }(p || b)) : c(h, k, j, q, i)) : h && h(a, j.childNodes, q, i)
                        }
                        for (var g = [], i, h, j, k = 0; k < a.length; k++) h = new ia, i = N(a[k], [], h, d), h = (i = i.length ? J(i, a[k], h, b, c) : null) && i.terminal ||
                            !a[k].childNodes || !a[k].childNodes.length ? null : A(a[k].childNodes, i ? i.transclude : b), g.push(i), g.push(h), j = j || i || h;
                        return j ? e : null
                    }

                    function N(a, b, c, i) {
                        var g = c.$attr,
                            h;
                        switch (a.nodeType) {
                            case 1:
                                r(b, ea(fb(a).toLowerCase()), "E", i);
                                var j, k, o;
                                h = a.attributes;
                                for (var p = 0, l = h && h.length; p < l; p++)
                                    if (j = h[p], j.specified) k = j.name, o = ea(k.toLowerCase()), g[o] = k, c[o] = j = Q(Z && k == "href" ? decodeURIComponent(a.getAttribute(k, 2)) : j.value), Ab(a, o) && (c[o] = !0), V(a, b, j, o), r(b, o, "A", i);
                                a = a.className;
                                if (B(a) && a !== "")
                                    for (; h = e.exec(a);) o =
                                        ea(h[2]), r(b, o, "C", i) && (c[o] = Q(h[3])), a = a.substr(h.index + h[0].length);
                                break;
                            case 3:
                                y(b, a.nodeValue);
                                break;
                            case 8:
                                try {
                                    if (h = d.exec(a.nodeValue)) o = ea(h[1]), r(b, o, "M", i) && (c[o] = Q(h[2]))
                                } catch (n) {}
                        }
                        b.sort(F);
                        return b
                    }

                    function J(a, b, c, d, e) {
                        function i(a, b) {
                            if (a) a.require = r.require, n.push(a);
                            if (b) b.require = r.require, t.push(b)
                        }

                        function h(a, b) {
                            var c, d = "data",
                                e = !1;
                            if (B(a)) {
                                for (;
                                    (c = a.charAt(0)) == "^" || c == "?";) a = a.substr(1), c == "^" && (d = "inheritedData"), e = e || c == "?";
                                c = b[d]("$" + a + "Controller");
                                if (!c && !e) throw Error("No controller: " +
                                    a);
                            } else E(a) && (c = [], m(a, function(a) {
                                c.push(h(a, b))
                            }));
                            return c
                        }

                        function j(a, d, e, i, g) {
                            var l, s, r, D, M;
                            l = b === e ? c : hc(c, new ia(u(e), c.$attr));
                            s = l.$$element;
                            if (J) {
                                var zc = /^\s*([@=&])\s*(\w*)\s*$/,
                                    x = d.$parent || d;
                                m(J.scope, function(a, b) {
                                    var c = a.match(zc) || [],
                                        e = c[2] || b,
                                        c = c[1],
                                        i, g, h;
                                    d.$$isolateBindings[b] = c + e;
                                    switch (c) {
                                        case "@":
                                            l.$observe(e, function(a) {
                                                d[b] = a
                                            });
                                            l.$$observers[e].$$scope = x;
                                            break;
                                        case "=":
                                            g = o(l[e]);
                                            h = g.assign || function() {
                                                i = d[b] = g(x);
                                                throw Error(Eb + l[e] + " (directive: " + J.name + ")");
                                            };
                                            i = d[b] = g(x);
                                            d.$watch(function() {
                                                var a = g(x);
                                                a !== d[b] && (a !== i ? i = d[b] = a : h(x, a = i = d[b]));
                                                return a
                                            });
                                            break;
                                        case "&":
                                            g = o(l[e]);
                                            d[b] = function(a) {
                                                return g(x, a)
                                            };
                                            break;
                                        default:
                                            throw Error("Invalid isolate scope definition for directive " + J.name + ": " + a);
                                    }
                                })
                            }
                            y && m(y, function(a) {
                                var b = {
                                    $scope: d,
                                    $element: s,
                                    $attrs: l,
                                    $transclude: g
                                };
                                M = a.controller;
                                M == "@" && (M = l[a.name]);
                                s.data("$" + a.name + "Controller", p(M, b))
                            });
                            i = 0;
                            for (r = n.length; i < r; i++) try {
                                D = n[i], D(d, s, l, D.require && h(D.require, s))
                            } catch (A) {
                                k(A, pa(s))
                            }
                            a && a(d, e.childNodes, q, g);
                            i = 0;
                            for (r = t.length; i < r; i++) try {
                                D = t[i], D(d, s, l, D.require && h(D.require, s))
                            } catch (Ac) {
                                k(Ac, pa(s))
                            }
                        }
                        for (var l = -Number.MAX_VALUE, n = [], t = [], s = null, J = null, A = null, D = c.$$element = u(b), r, F, W, ja, V = d, y, w, Y, v = 0, z = a.length; v < z; v++) {
                            r = a[v];
                            W = q;
                            if (l > r.priority) break;
                            if (Y = r.scope) ta("isolated scope", J, r, D), L(Y) && (M(D, "ng-isolate-scope"), J = r), M(D, "ng-scope"), s = s || r;
                            F = r.name;
                            if (Y = r.controller) y = y || {}, ta("'" + F + "' controller", y[F], r, D), y[F] = r;
                            if (Y = r.transclude) ta("transclusion", ja, r, D), ja = r, l = r.priority, Y == "element" ? (W =
                                u(b), D = c.$$element = u(T.createComment(" " + F + ": " + c[F] + " ")), b = D[0], C(e, u(W[0]), b), V = x(W, d, l)) : (W = u(cb(b)).contents(), D.html(""), V = x(W, d));
                            if (Y = r.template)
                                if (ta("template", A, r, D), A = r, Y = Fb(Y), r.replace) {
                                    W = u("<div>" + Q(Y) + "</div>").contents();
                                    b = W[0];
                                    if (W.length != 1 || b.nodeType !== 1) throw Error(g + Y);
                                    C(e, D, b);
                                    F = {
                                        $attr: {}
                                    };
                                    a = a.concat(N(b, a.splice(v + 1, a.length - (v + 1)), F));
                                    $(c, F);
                                    z = a.length
                                } else D.html(Y);
                            if (r.templateUrl) ta("template", A, r, D), A = r, j = R(a.splice(v, a.length - v), j, D, c, e, r.replace, V), z = a.length;
                            else if (r.compile) try {
                                w =
                                    r.compile(D, c, V), H(w) ? i(null, w) : w && i(w.pre, w.post)
                            } catch (G) {
                                k(G, pa(D))
                            }
                            if (r.terminal) j.terminal = !0, l = Math.max(l, r.priority)
                        }
                        j.scope = s && s.scope;
                        j.transclude = ja && V;
                        return j
                    }

                    function r(d, e, i, g) {
                        var h = !1;
                        if (a.hasOwnProperty(e))
                            for (var o, e = b.get(e + c), l = 0, p = e.length; l < p; l++) try {
                                if (o = e[l], (g === q || g > o.priority) && o.restrict.indexOf(i) != -1) d.push(o), h = !0
                            } catch (n) {
                                k(n)
                            }
                        return h
                    }

                    function $(a, b) {
                        var c = b.$attr,
                            d = a.$attr,
                            e = a.$$element;
                        m(a, function(d, e) {
                            e.charAt(0) != "$" && (b[e] && (d += (e === "style" ? ";" : " ") + b[e]), a.$set(e,
                                d, !0, c[e]))
                        });
                        m(b, function(b, i) {
                            i == "class" ? (M(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : i == "style" ? e.attr("style", e.attr("style") + ";" + b) : i.charAt(0) != "$" && !a.hasOwnProperty(i) && (a[i] = b, d[i] = c[i])
                        })
                    }

                    function R(a, b, c, d, e, i, h) {
                        var j = [],
                            k, o, p = c[0],
                            t = a.shift(),
                            s = v({}, t, {
                                controller: null,
                                templateUrl: null,
                                transclude: null,
                                scope: null
                            });
                        c.html("");
                        l.get(t.templateUrl, {
                            cache: n
                        }).success(function(l) {
                            var n, t, l = Fb(l);
                            if (i) {
                                t = u("<div>" + Q(l) + "</div>").contents();
                                n = t[0];
                                if (t.length != 1 || n.nodeType !== 1) throw Error(g +
                                    l);
                                l = {
                                    $attr: {}
                                };
                                C(e, c, n);
                                N(n, a, l);
                                $(d, l)
                            } else n = p, c.html(l);
                            a.unshift(s);
                            k = J(a, n, d, h);
                            for (o = A(c[0].childNodes, h); j.length;) {
                                var r = j.pop(),
                                    l = j.pop();
                                t = j.pop();
                                var ia = j.pop(),
                                    D = n;
                                t !== p && (D = cb(n), C(l, u(t), D));
                                k(function() {
                                    b(o, ia, D, e, r)
                                }, ia, D, e, r)
                            }
                            j = null
                        }).error(function(a, b, c, d) {
                            throw Error("Failed to load template: " + d.url);
                        });
                        return function(a, c, d, e, i) {
                            j ? (j.push(c), j.push(d), j.push(e), j.push(i)) : k(function() {
                                b(o, c, d, e, i)
                            }, c, d, e, i)
                        }
                    }

                    function F(a, b) {
                        return b.priority - a.priority
                    }

                    function ta(a, b, c, d) {
                        if (b) throw Error("Multiple directives [" +
                            b.name + ", " + c.name + "] asking for " + a + " on: " + pa(d));
                    }

                    function y(a, b) {
                        var c = i(b, !0);
                        c && a.push({
                            priority: 0,
                            compile: I(function(a, b) {
                                var d = b.parent(),
                                    e = d.data("$binding") || [];
                                e.push(c);
                                M(d.data("$binding", e), "ng-binding");
                                a.$watch(c, function(a) {
                                    b[0].nodeValue = a
                                })
                            })
                        })
                    }

                    function V(a, b, c, d) {
                        var e = i(c, !0);
                        e && b.push({
                            priority: 100,
                            compile: I(function(a, b, c) {
                                b = c.$$observers || (c.$$observers = {});
                                d === "class" && (e = i(c[d], !0));
                                c[d] = q;
                                (b[d] || (b[d] = [])).$$inter = !0;
                                (c.$$observers && c.$$observers[d].$$scope || a).$watch(e,
                                    function(a) {
                                        c.$set(d, a)
                                    })
                            })
                        })
                    }

                    function C(a, b, c) {
                        var d = b[0],
                            e = d.parentNode,
                            i, g;
                        if (a) {
                            i = 0;
                            for (g = a.length; i < g; i++)
                                if (a[i] == d) {
                                    a[i] = c;
                                    break
                                }
                        }
                        e && e.replaceChild(c, d);
                        c[u.expando] = d[u.expando];
                        b[0] = c
                    }
                    var ia = function(a, b) {
                        this.$$element = a;
                        this.$attr = b || {}
                    };
                    ia.prototype = {
                        $normalize: ea,
                        $set: function(a, b, c, d) {
                            var e = Ab(this.$$element[0], a),
                                i = this.$$observers;
                            e && (this.$$element.prop(a, b), d = e);
                            this[a] = b;
                            d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = Za(a, "-"));
                            if (fb(this.$$element[0]) === "A" && a === "href") D.setAttribute("href",
                                b), e = D.href, e.match(h) || (this[a] = b = "unsafe:" + e);
                            c !== !1 && (b === null || b === q ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
                            i && m(i[a], function(a) {
                                try {
                                    a(b)
                                } catch (c) {
                                    k(c)
                                }
                            })
                        },
                        $observe: function(a, b) {
                            var c = this,
                                d = c.$$observers || (c.$$observers = {}),
                                e = d[a] || (d[a] = []);
                            e.push(b);
                            s.$evalAsync(function() {
                                e.$$inter || b(c[a])
                            });
                            return b
                        }
                    };
                    var D = t[0].createElement("a"),
                        W = i.startSymbol(),
                        ja = i.endSymbol(),
                        Fb = W == "{{" || ja == "}}" ? ma : function(a) {
                            return a.replace(/\{\{/g, W).replace(/}}/g, ja)
                        };
                    return x
                }
            ]
        }

        function ea(b) {
            return tb(b.replace(Bc,
                ""))
        }

        function Cc() {
            var b = {};
            this.register = function(a, c) {
                L(a) ? v(b, a) : b[a] = c
            };
            this.$get = ["$injector", "$window", function(a, c) {
                return function(d, e) {
                    if (B(d)) {
                        var g = d,
                            d = b.hasOwnProperty(g) ? b[g] : gb(e.$scope, g, !0) || gb(c, g, !0);
                        qa(d, g, !0)
                    }
                    return a.instantiate(d, e)
                }
            }]
        }

        function Dc() {
            this.$get = ["$window", function(b) {
                return u(b.document)
            }]
        }

        function Ec() {
            this.$get = ["$log", function(b) {
                return function(a, c) {
                    b.error.apply(b, arguments)
                }
            }]
        }

        function Fc() {
            var b = "{{",
                a = "}}";
            this.startSymbol = function(a) {
                return a ? (b = a, this) :
                    b
            };
            this.endSymbol = function(b) {
                return b ? (a = b, this) : a
            };
            this.$get = ["$parse", function(c) {
                function d(d, f) {
                    for (var j, i, k = 0, l = [], n = d.length, o = !1, p = []; k < n;)(j = d.indexOf(b, k)) != -1 && (i = d.indexOf(a, j + e)) != -1 ? (k != j && l.push(d.substring(k, j)), l.push(k = c(o = d.substring(j + e, i))), k.exp = o, k = i + g, o = !0) : (k != n && l.push(d.substring(k)), k = n);
                    if (!(n = l.length)) l.push(""), n = 1;
                    if (!f || o) return p.length = n, k = function(a) {
                        for (var b = 0, c = n, d; b < c; b++) {
                            if (typeof(d = l[b]) == "function") d = d(a), d == null || d == q ? d = "" : typeof d != "string" && (d = da(d));
                            p[b] = d
                        }
                        return p.join("")
                    }, k.exp = d, k.parts = l, k
                }
                var e = b.length,
                    g = a.length;
                d.startSymbol = function() {
                    return b
                };
                d.endSymbol = function() {
                    return a
                };
                return d
            }]
        }

        function Gb(b) {
            for (var b = b.split("/"), a = b.length; a--;) b[a] = Xa(b[a]);
            return b.join("/")
        }

        function va(b, a) {
            var c = Hb.exec(b),
                c = {
                    protocol: c[1],
                    host: c[3],
                    port: G(c[5]) || Ib[c[1]] || null,
                    path: c[6] || "/",
                    search: c[8],
                    hash: c[10]
                };
            if (a) a.$$protocol = c.protocol, a.$$host = c.host, a.$$port = c.port;
            return c
        }

        function ka(b, a, c) {
            return b + "://" + a + (c == Ib[b] ? "" : ":" + c)
        }

        function Gc(b,
            a, c) {
            var d = va(b);
            return decodeURIComponent(d.path) != a || w(d.hash) || d.hash.indexOf(c) !== 0 ? b : ka(d.protocol, d.host, d.port) + a.substr(0, a.lastIndexOf("/")) + d.hash.substr(c.length)
        }

        function Hc(b, a, c) {
            var d = va(b);
            if (decodeURIComponent(d.path) == a && !w(d.hash) && d.hash.indexOf(c) === 0) return b;
            else {
                var e = d.search && "?" + d.search || "",
                    g = d.hash && "#" + d.hash || "",
                    h = a.substr(0, a.lastIndexOf("/")),
                    f = d.path.substr(h.length);
                if (d.path.indexOf(h) !== 0) throw Error('Invalid url "' + b + '", missing path prefix "' + h + '" !');
                return ka(d.protocol,
                    d.host, d.port) + a + "#" + c + f + e + g
            }
        }

        function hb(b, a, c) {
            a = a || "";
            this.$$parse = function(b) {
                var c = va(b, this);
                if (c.path.indexOf(a) !== 0) throw Error('Invalid url "' + b + '", missing path prefix "' + a + '" !');
                this.$$path = decodeURIComponent(c.path.substr(a.length));
                this.$$search = Va(c.search);
                this.$$hash = c.hash && decodeURIComponent(c.hash) || "";
                this.$$compose()
            };
            this.$$compose = function() {
                var b = qb(this.$$search),
                    c = this.$$hash ? "#" + Xa(this.$$hash) : "";
                this.$$url = Gb(this.$$path) + (b ? "?" + b : "") + c;
                this.$$absUrl = ka(this.$$protocol,
                    this.$$host, this.$$port) + a + this.$$url
            };
            this.$$rewriteAppUrl = function(a) {
                if (a.indexOf(c) == 0) return a
            };
            this.$$parse(b)
        }

        function Ga(b, a, c) {
            var d;
            this.$$parse = function(b) {
                var c = va(b, this);
                if (c.hash && c.hash.indexOf(a) !== 0) throw Error('Invalid url "' + b + '", missing hash prefix "' + a + '" !');
                d = c.path + (c.search ? "?" + c.search : "");
                c = Ic.exec((c.hash || "").substr(a.length));
                this.$$path = c[1] ? (c[1].charAt(0) == "/" ? "" : "/") + decodeURIComponent(c[1]) : "";
                this.$$search = Va(c[3]);
                this.$$hash = c[5] && decodeURIComponent(c[5]) ||
                    "";
                this.$$compose()
            };
            this.$$compose = function() {
                var b = qb(this.$$search),
                    c = this.$$hash ? "#" + Xa(this.$$hash) : "";
                this.$$url = Gb(this.$$path) + (b ? "?" + b : "") + c;
                this.$$absUrl = ka(this.$$protocol, this.$$host, this.$$port) + d + (this.$$url ? "#" + a + this.$$url : "")
            };
            this.$$rewriteAppUrl = function(a) {
                if (a.indexOf(c) == 0) return a
            };
            this.$$parse(b)
        }

        function Jb(b, a, c, d) {
            Ga.apply(this, arguments);
            this.$$rewriteAppUrl = function(b) {
                if (b.indexOf(c) == 0) return c + d + "#" + a + b.substr(c.length)
            }
        }

        function Ha(b) {
            return function() {
                return this[b]
            }
        }

        function Kb(b, a) {
            return function(c) {
                if (w(c)) return this[b];
                this[b] = a(c);
                this.$$compose();
                return this
            }
        }

        function Jc() {
            var b = "",
                a = !1;
            this.hashPrefix = function(a) {
                return y(a) ? (b = a, this) : b
            };
            this.html5Mode = function(b) {
                return y(b) ? (a = b, this) : a
            };
            this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function(c, d, e, g) {
                function h(a) {
                    c.$broadcast("$locationChangeSuccess", f.absUrl(), a)
                }
                var f, j, i, k = d.url(),
                    l = va(k);
                a ? (j = d.baseHref() || "/", i = j.substr(0, j.lastIndexOf("/")), l = ka(l.protocol, l.host, l.port) + i + "/",
                    f = e.history ? new hb(Gc(k, j, b), i, l) : new Jb(Hc(k, j, b), b, l, j.substr(i.length + 1))) : (l = ka(l.protocol, l.host, l.port) + (l.path || "") + (l.search ? "?" + l.search : "") + "#" + b + "/", f = new Ga(k, b, l));
                g.bind("click", function(a) {
                    if (!a.ctrlKey && !(a.metaKey || a.which == 2)) {
                        for (var b = u(a.target); z(b[0].nodeName) !== "a";)
                            if (b[0] === g[0] || !(b = b.parent())[0]) return;
                        var d = b.prop("href"),
                            e = f.$$rewriteAppUrl(d);
                        d && !b.attr("target") && e && (f.$$parse(e), c.$apply(), a.preventDefault(), P.angular["ff-684208-preventDefault"] = !0)
                    }
                });
                f.absUrl() !=
                    k && d.url(f.absUrl(), !0);
                d.onUrlChange(function(a) {
                    f.absUrl() != a && (c.$broadcast("$locationChangeStart", a, f.absUrl()).defaultPrevented ? d.url(f.absUrl()) : (c.$evalAsync(function() {
                        var b = f.absUrl();
                        f.$$parse(a);
                        h(b)
                    }), c.$$phase || c.$digest()))
                });
                var n = 0;
                c.$watch(function() {
                    var a = d.url(),
                        b = f.$$replace;
                    if (!n || a != f.absUrl()) n++, c.$evalAsync(function() {
                        c.$broadcast("$locationChangeStart", f.absUrl(), a).defaultPrevented ? f.$$parse(a) : (d.url(f.absUrl(), b), h(a))
                    });
                    f.$$replace = !1;
                    return n
                });
                return f
            }]
        }

        function Kc() {
            this.$get = ["$window", function(b) {
                function a(a) {
                    a instanceof Error && (a.stack ? a = a.message && a.stack.indexOf(a.message) === -1 ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                    return a
                }

                function c(c) {
                    var e = b.console || {},
                        g = e[c] || e.log || C;
                    return g.apply ? function() {
                        var b = [];
                        m(arguments, function(c) {
                            b.push(a(c))
                        });
                        return g.apply(e, b)
                    } : function(a, b) {
                        g(a, b)
                    }
                }
                return {
                    log: c("log"),
                    warn: c("warn"),
                    info: c("info"),
                    error: c("error")
                }
            }]
        }

        function Lc(b, a) {
            function c(a) {
                return a.indexOf(t) !=
                    -1
            }

            function d() {
                return p + 1 < b.length ? b.charAt(p + 1) : !1
            }

            function e(a) {
                return "0" <= a && a <= "9"
            }

            function g(a) {
                return a == " " || a == "\r" || a == "\t" || a == "\n" || a == "\u000b" || a == "\u00a0"
            }

            function h(a) {
                return "a" <= a && a <= "z" || "A" <= a && a <= "Z" || "_" == a || a == "$"
            }

            function f(a) {
                return a == "-" || a == "+" || e(a)
            }

            function j(a, c, d) {
                d = d || p;
                throw Error("Lexer Error: " + a + " at column" + (y(c) ? "s " + c + "-" + p + " [" + b.substring(c, d) + "]" : " " + d) + " in expression [" + b + "].");
            }

            function i() {
                for (var a = "", c = p; p < b.length;) {
                    var i = z(b.charAt(p));
                    if (i == "." ||
                        e(i)) a += i;
                    else {
                        var g = d();
                        if (i == "e" && f(g)) a += i;
                        else if (f(i) && g && e(g) && a.charAt(a.length - 1) == "e") a += i;
                        else if (f(i) && (!g || !e(g)) && a.charAt(a.length - 1) == "e") j("Invalid exponent");
                        else break
                    }
                    p++
                }
                a *= 1;
                n.push({
                    index: c,
                    text: a,
                    json: !0,
                    fn: function() {
                        return a
                    }
                })
            }

            function k() {
                for (var c = "", d = p, f, i, j, k; p < b.length;) {
                    k = b.charAt(p);
                    if (k == "." || h(k) || e(k)) k == "." && (f = p), c += k;
                    else break;
                    p++
                }
                if (f)
                    for (i = p; i < b.length;) {
                        k = b.charAt(i);
                        if (k == "(") {
                            j = c.substr(f - d + 1);
                            c = c.substr(0, f - d);
                            p = i;
                            break
                        }
                        if (g(k)) i++;
                        else break
                    }
                d = {
                    index: d,
                    text: c
                };
                if (Ia.hasOwnProperty(c)) d.fn = d.json = Ia[c];
                else {
                    var l = Lb(c, a);
                    d.fn = v(function(a, b) {
                        return l(a, b)
                    }, {
                        assign: function(a, b) {
                            return Mb(a, c, b)
                        }
                    })
                }
                n.push(d);
                j && (n.push({
                    index: f,
                    text: ".",
                    json: !1
                }), n.push({
                    index: f + 1,
                    text: j,
                    json: !1
                }))
            }

            function l(a) {
                var c = p;
                p++;
                for (var d = "", e = a, f = !1; p < b.length;) {
                    var i = b.charAt(p);
                    e += i;
                    if (f) i == "u" ? (i = b.substring(p + 1, p + 5), i.match(/[\da-f]{4}/i) || j("Invalid unicode escape [\\u" + i + "]"), p += 4, d += String.fromCharCode(parseInt(i, 16))) : (f = Mc[i], d += f ? f : i), f = !1;
                    else if (i == "\\") f = !0;
                    else if (i == a) {
                        p++;
                        n.push({
                            index: c,
                            text: e,
                            string: d,
                            json: !0,
                            fn: function() {
                                return d
                            }
                        });
                        return
                    } else d += i;
                    p++
                }
                j("Unterminated quote", c)
            }
            for (var n = [], o, p = 0, s = [], t, x = ":"; p < b.length;) {
                t = b.charAt(p);
                if (c("\"'")) l(t);
                else if (e(t) || c(".") && e(d())) i();
                else if (h(t)) {
                    if (k(), "{,".indexOf(x) != -1 && s[0] == "{" && (o = n[n.length - 1])) o.json = o.text.indexOf(".") == -1
                } else if (c("(){}[].,;:")) n.push({
                    index: p,
                    text: t,
                    json: ":[,".indexOf(x) != -1 && c("{[") || c("}]:,")
                }), c("{[") && s.unshift(t), c("}]") && s.shift(), p++;
                else if (g(t)) {
                    p++;
                    continue
                } else {
                    var m = t + d(),
                        A = Ia[t],
                        N = Ia[m];
                    N ? (n.push({
                        index: p,
                        text: m,
                        fn: N
                    }), p += 2) : A ? (n.push({
                        index: p,
                        text: t,
                        fn: A,
                        json: "[,:".indexOf(x) != -1 && c("+-")
                    }), p += 1) : j("Unexpected next character ", p, p + 1)
                }
                x = t
            }
            return n
        }

        function Nc(b, a, c, d) {
            function e(a, c) {
                throw Error("Syntax Error: Token '" + c.text + "' " + a + " at column " + (c.index + 1) + " of the expression [" + b + "] starting at [" + b.substring(c.index) + "].");
            }

            function g() {
                if (R.length === 0) throw Error("Unexpected end of expression: " + b);
                return R[0]
            }

            function h(a, b, c, d) {
                if (R.length >
                    0) {
                    var e = R[0],
                        f = e.text;
                    if (f == a || f == b || f == c || f == d || !a && !b && !c && !d) return e
                }
                return !1
            }

            function f(b, c, d, f) {
                return (b = h(b, c, d, f)) ? (a && !b.json && e("is not valid json", b), R.shift(), b) : !1
            }

            function j(a) {
                f(a) || e("is unexpected, expecting [" + a + "]", h())
            }

            function i(a, b) {
                return function(c, d) {
                    return a(c, d, b)
                }
            }

            function k(a, b, c) {
                return function(d, e) {
                    return b(d, e, a, c)
                }
            }

            function l() {
                for (var a = [];;)
                    if (R.length > 0 && !h("}", ")", ";", "]") && a.push(w()), !f(";")) return a.length == 1 ? a[0] : function(b, c) {
                        for (var d, e = 0; e < a.length; e++) {
                            var f =
                                a[e];
                            f && (d = f(b, c))
                        }
                        return d
                    }
            }

            function n() {
                for (var a = f(), b = c(a.text), d = [];;)
                    if (a = f(":")) d.push(F());
                    else {
                        var e = function(a, c, e) {
                            for (var e = [e], f = 0; f < d.length; f++) e.push(d[f](a, c));
                            return b.apply(a, e)
                        };
                        return function() {
                            return e
                        }
                    }
            }

            function o() {
                for (var a = p(), b;;)
                    if (b = f("||")) a = k(a, b.fn, p());
                    else return a
            }

            function p() {
                var a = s(),
                    b;
                if (b = f("&&")) a = k(a, b.fn, p());
                return a
            }

            function s() {
                var a = t(),
                    b;
                if (b = f("==", "!=")) a = k(a, b.fn, s());
                return a
            }

            function t() {
                var a;
                a = x();
                for (var b; b = f("+", "-");) a = k(a, b.fn, x());
                if (b =
                    f("<", ">", "<=", ">=")) a = k(a, b.fn, t());
                return a
            }

            function x() {
                for (var a = m(), b; b = f("*", "/", "%");) a = k(a, b.fn, m());
                return a
            }

            function m() {
                var a;
                return f("+") ? A() : (a = f("-")) ? k(r, a.fn, m()) : (a = f("!")) ? i(a.fn, m()) : A()
            }

            function A() {
                var a;
                if (f("(")) a = w(), j(")");
                else if (f("[")) a = N();
                else if (f("{")) a = J();
                else {
                    var b = f();
                    (a = b.fn) || e("not a primary expression", b)
                }
                for (var c; b = f("(", "[", ".");) b.text === "(" ? (a = y(a, c), c = null) : b.text === "[" ? (c = a, a = V(a)) : b.text === "." ? (c = a, a = u(a)) : e("IMPOSSIBLE");
                return a
            }

            function N() {
                var a = [];
                if (g().text != "]") {
                    do a.push(F()); while (f(","))
                }
                j("]");
                return function(b, c) {
                    for (var d = [], e = 0; e < a.length; e++) d.push(a[e](b, c));
                    return d
                }
            }

            function J() {
                var a = [];
                if (g().text != "}") {
                    do {
                        var b = f(),
                            b = b.string || b.text;
                        j(":");
                        var c = F();
                        a.push({
                            key: b,
                            value: c
                        })
                    } while (f(","))
                }
                j("}");
                return function(b, c) {
                    for (var d = {}, e = 0; e < a.length; e++) {
                        var f = a[e];
                        d[f.key] = f.value(b, c)
                    }
                    return d
                }
            }
            var r = I(0),
                $, R = Lc(b, d),
                F = function() {
                    var a = o(),
                        c, d;
                    return (d = f("=")) ? (a.assign || e("implies assignment but [" + b.substring(0, d.index) + "] can not be assigned to",
                        d), c = o(), function(b, d) {
                        return a.assign(b, c(b, d), d)
                    }) : a
                },
                y = function(a, b) {
                    var c = [];
                    if (g().text != ")") {
                        do c.push(F()); while (f(","))
                    }
                    j(")");
                    return function(d, e) {
                        for (var f = [], i = b ? b(d, e) : d, g = 0; g < c.length; g++) f.push(c[g](d, e));
                        g = a(d, e, i) || C;
                        return g.apply ? g.apply(i, f) : g(f[0], f[1], f[2], f[3], f[4])
                    }
                },
                u = function(a) {
                    var b = f().text,
                        c = Lb(b, d);
                    return v(function(b, d, e) {
                        return c(e || a(b, d), d)
                    }, {
                        assign: function(c, d, e) {
                            return Mb(a(c, e), b, d)
                        }
                    })
                },
                V = function(a) {
                    var b = F();
                    j("]");
                    return v(function(c, d) {
                        var e = a(c, d),
                            f = b(c,
                                d),
                            i;
                        if (!e) return q;
                        if ((e = e[f]) && e.then) {
                            i = e;
                            if (!("$$v" in e)) i.$$v = q, i.then(function(a) {
                                i.$$v = a
                            });
                            e = e.$$v
                        }
                        return e
                    }, {
                        assign: function(c, d, e) {
                            return a(c, e)[b(c, e)] = d
                        }
                    })
                },
                w = function() {
                    for (var a = F(), b;;)
                        if (b = f("|")) a = k(a, b.fn, n());
                        else return a
                };
            a ? (F = o, y = u = V = w = function() {
                e("is not valid json", {
                    text: b,
                    index: 0
                })
            }, $ = A()) : $ = l();
            R.length !== 0 && e("is an unexpected token", R[0]);
            return $
        }

        function Mb(b, a, c) {
            for (var a = a.split("."), d = 0; a.length > 1; d++) {
                var e = a.shift(),
                    g = b[e];
                g || (g = {}, b[e] = g);
                b = g
            }
            return b[a.shift()] =
                c
        }

        function gb(b, a, c) {
            if (!a) return b;
            for (var a = a.split("."), d, e = b, g = a.length, h = 0; h < g; h++) d = a[h], b && (b = (e = b)[d]);
            return !c && H(b) ? Ta(e, b) : b
        }

        function Nb(b, a, c, d, e) {
            return function(g, h) {
                var f = h && h.hasOwnProperty(b) ? h : g,
                    j;
                if (f === null || f === q) return f;
                if ((f = f[b]) && f.then) {
                    if (!("$$v" in f)) j = f, j.$$v = q, j.then(function(a) {
                        j.$$v = a
                    });
                    f = f.$$v
                }
                if (!a || f === null || f === q) return f;
                if ((f = f[a]) && f.then) {
                    if (!("$$v" in f)) j = f, j.$$v = q, j.then(function(a) {
                        j.$$v = a
                    });
                    f = f.$$v
                }
                if (!c || f === null || f === q) return f;
                if ((f = f[c]) && f.then) {
                    if (!("$$v" in
                            f)) j = f, j.$$v = q, j.then(function(a) {
                        j.$$v = a
                    });
                    f = f.$$v
                }
                if (!d || f === null || f === q) return f;
                if ((f = f[d]) && f.then) {
                    if (!("$$v" in f)) j = f, j.$$v = q, j.then(function(a) {
                        j.$$v = a
                    });
                    f = f.$$v
                }
                if (!e || f === null || f === q) return f;
                if ((f = f[e]) && f.then) {
                    if (!("$$v" in f)) j = f, j.$$v = q, j.then(function(a) {
                        j.$$v = a
                    });
                    f = f.$$v
                }
                return f
            }
        }

        function Lb(b, a) {
            if (ib.hasOwnProperty(b)) return ib[b];
            var c = b.split("."),
                d = c.length,
                e;
            if (a) e = d < 6 ? Nb(c[0], c[1], c[2], c[3], c[4]) : function(a, b) {
                var e = 0,
                    i;
                do i = Nb(c[e++], c[e++], c[e++], c[e++], c[e++])(a, b), b = q,
                    a = i; while (e < d);
                return i
            };
            else {
                var g = "var l, fn, p;\n";
                m(c, function(a, b) {
                    g += "if(s === null || s === undefined) return s;\nl=s;\ns=" + (b ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'
                });
                g += "return s;";
                e = Function("s", "k", g);
                e.toString = function() {
                    return g
                }
            }
            return ib[b] = e
        }

        function Oc() {
            var b = {};
            this.$get = ["$filter", "$sniffer", function(a, c) {
                return function(d) {
                    switch (typeof d) {
                        case "string":
                            return b.hasOwnProperty(d) ?
                                b[d] : b[d] = Nc(d, !1, a, c.csp);
                        case "function":
                            return d;
                        default:
                            return C
                    }
                }
            }]
        }

        function Pc() {
            this.$get = ["$rootScope", "$exceptionHandler", function(b, a) {
                return Qc(function(a) {
                    b.$evalAsync(a)
                }, a)
            }]
        }

        function Qc(b, a) {
            function c(a) {
                return a
            }

            function d(a) {
                return h(a)
            }
            var e = function() {
                    var f = [],
                        j, i;
                    return i = {
                        resolve: function(a) {
                            if (f) {
                                var c = f;
                                f = q;
                                j = g(a);
                                c.length && b(function() {
                                    for (var a, b = 0, d = c.length; b < d; b++) a = c[b], j.then(a[0], a[1])
                                })
                            }
                        },
                        reject: function(a) {
                            i.resolve(h(a))
                        },
                        promise: {
                            then: function(b, i) {
                                var g = e(),
                                    h =
                                    function(d) {
                                        try {
                                            g.resolve((b || c)(d))
                                        } catch (e) {
                                            a(e), g.reject(e)
                                        }
                                    },
                                    p = function(b) {
                                        try {
                                            g.resolve((i || d)(b))
                                        } catch (c) {
                                            a(c), g.reject(c)
                                        }
                                    };
                                f ? f.push([h, p]) : j.then(h, p);
                                return g.promise
                            }
                        }
                    }
                },
                g = function(a) {
                    return a && a.then ? a : {
                        then: function(c) {
                            var d = e();
                            b(function() {
                                d.resolve(c(a))
                            });
                            return d.promise
                        }
                    }
                },
                h = function(a) {
                    return {
                        then: function(c, i) {
                            var g = e();
                            b(function() {
                                g.resolve((i || d)(a))
                            });
                            return g.promise
                        }
                    }
                };
            return {
                defer: e,
                reject: h,
                when: function(f, j, i) {
                    var k = e(),
                        l, n = function(b) {
                            try {
                                return (j || c)(b)
                            } catch (d) {
                                return a(d),
                                    h(d)
                            }
                        },
                        o = function(b) {
                            try {
                                return (i || d)(b)
                            } catch (c) {
                                return a(c), h(c)
                            }
                        };
                    b(function() {
                        g(f).then(function(a) {
                            l || (l = !0, k.resolve(g(a).then(n, o)))
                        }, function(a) {
                            l || (l = !0, k.resolve(o(a)))
                        })
                    });
                    return k.promise
                },
                all: function(a) {
                    var b = e(),
                        c = a.length,
                        d = [];
                    c ? m(a, function(a, e) {
                        g(a).then(function(a) {
                            e in d || (d[e] = a, --c || b.resolve(d))
                        }, function(a) {
                            e in d || b.reject(a)
                        })
                    }) : b.resolve(d);
                    return b.promise
                }
            }
        }

        function Rc() {
            var b = {};
            this.when = function(a, c) {
                b[a] = v({
                    reloadOnSearch: !0
                }, c);
                if (a) {
                    var d = a[a.length - 1] == "/" ? a.substr(0,
                        a.length - 1) : a + "/";
                    b[d] = {
                        redirectTo: a
                    }
                }
                return this
            };
            this.otherwise = function(a) {
                this.when(null, a);
                return this
            };
            this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", function(a, c, d, e, g, h, f) {
                function j(a, b) {
                    for (var b = "^" + b.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + "$", c = "", d = [], e = {}, f = /:(\w+)/g, i, g = 0;
                        (i = f.exec(b)) !== null;) c += b.slice(g, i.index), c += "([^\\/]*)", d.push(i[1]), g = f.lastIndex;
                    c += b.substr(g);
                    var h = a.match(RegExp(c));
                    h && m(d, function(a, b) {
                        e[a] = h[b + 1]
                    });
                    return h ?
                        e : null
                }

                function i() {
                    var b = k(),
                        i = o.current;
                    if (b && i && b.$$route === i.$$route && fa(b.pathParams, i.pathParams) && !b.reloadOnSearch && !n) i.params = b.params, U(i.params, d), a.$broadcast("$routeUpdate", i);
                    else if (b || i) n = !1, a.$broadcast("$routeChangeStart", b, i), (o.current = b) && b.redirectTo && (B(b.redirectTo) ? c.path(l(b.redirectTo, b.params)).search(b.params).replace() : c.url(b.redirectTo(b.pathParams, c.path(), c.search())).replace()), e.when(b).then(function() {
                        if (b) {
                            var a = [],
                                c = [],
                                d;
                            m(b.resolve || {}, function(b, d) {
                                a.push(d);
                                c.push(B(b) ? g.get(b) : g.invoke(b))
                            });
                            if (!y(d = b.template))
                                if (y(d = b.templateUrl)) d = h.get(d, {
                                    cache: f
                                }).then(function(a) {
                                    return a.data
                                });
                            y(d) && (a.push("$template"), c.push(d));
                            return e.all(c).then(function(b) {
                                var c = {};
                                m(b, function(b, d) {
                                    c[a[d]] = b
                                });
                                return c
                            })
                        }
                    }).then(function(c) {
                        if (b == o.current) {
                            if (b) b.locals = c, U(b.params, d);
                            a.$broadcast("$routeChangeSuccess", b, i)
                        }
                    }, function(c) {
                        b == o.current && a.$broadcast("$routeChangeError", b, i, c)
                    })
                }

                function k() {
                    var a, d;
                    m(b, function(b, e) {
                        if (!d && (a = j(c.path(), e))) d = ya(b, {
                            params: v({}, c.search(), a),
                            pathParams: a
                        }), d.$$route = b
                    });
                    return d || b[null] && ya(b[null], {
                        params: {},
                        pathParams: {}
                    })
                }

                function l(a, b) {
                    var c = [];
                    m((a || "").split(":"), function(a, d) {
                        if (d == 0) c.push(a);
                        else {
                            var e = a.match(/(\w+)(.*)/),
                                f = e[1];
                            c.push(b[f]);
                            c.push(e[2] || "");
                            delete b[f]
                        }
                    });
                    return c.join("")
                }
                var n = !1,
                    o = {
                        routes: b,
                        reload: function() {
                            n = !0;
                            a.$evalAsync(i)
                        }
                    };
                a.$on("$locationChangeSuccess", i);
                return o
            }]
        }

        function Sc() {
            this.$get = I({})
        }

        function Tc() {
            var b = 10;
            this.digestTtl = function(a) {
                arguments.length && (b =
                    a);
                return b
            };
            this.$get = ["$injector", "$exceptionHandler", "$parse", function(a, c, d) {
                function e() {
                    this.$id = xa();
                    this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                    this["this"] = this.$root = this;
                    this.$$destroyed = !1;
                    this.$$asyncQueue = [];
                    this.$$listeners = {};
                    this.$$isolateBindings = {}
                }

                function g(a) {
                    if (j.$$phase) throw Error(j.$$phase + " already in progress");
                    j.$$phase = a
                }

                function h(a, b) {
                    var c = d(a);
                    qa(c, b);
                    return c
                }

                function f() {}
                e.prototype = {
                    $new: function(a) {
                        if (H(a)) throw Error("API-CHANGE: Use $controller to instantiate controllers.");
                        a ? (a = new e, a.$root = this.$root) : (a = function() {}, a.prototype = this, a = new a, a.$id = xa());
                        a["this"] = a;
                        a.$$listeners = {};
                        a.$parent = this;
                        a.$$asyncQueue = [];
                        a.$$watchers = a.$$nextSibling = a.$$childHead = a.$$childTail = null;
                        a.$$prevSibling = this.$$childTail;
                        this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
                        return a
                    },
                    $watch: function(a, b, c) {
                        var d = h(a, "watch"),
                            e = this.$$watchers,
                            g = {
                                fn: b,
                                last: f,
                                get: d,
                                exp: a,
                                eq: !!c
                            };
                        if (!H(b)) {
                            var j = h(b || C, "listener");
                            g.fn = function(a, b,
                                c) {
                                j(c)
                            }
                        }
                        if (!e) e = this.$$watchers = [];
                        e.unshift(g);
                        return function() {
                            Sa(e, g)
                        }
                    },
                    $digest: function() {
                        var a, d, e, h, o, p, m, t = b,
                            x, q = [],
                            A, N;
                        g("$digest");
                        do {
                            m = !1;
                            x = this;
                            do {
                                for (o = x.$$asyncQueue; o.length;) try {
                                    x.$eval(o.shift())
                                } catch (J) {
                                    c(J)
                                }
                                if (h = x.$$watchers)
                                    for (p = h.length; p--;) try {
                                        if (a = h[p], (d = a.get(x)) !== (e = a.last) && !(a.eq ? fa(d, e) : typeof d == "number" && typeof e == "number" && isNaN(d) && isNaN(e))) m = !0, a.last = a.eq ? U(d) : d, a.fn(d, e === f ? d : e, x), t < 5 && (A = 4 - t, q[A] || (q[A] = []), N = H(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) :
                                            a.exp, N += "; newVal: " + da(d) + "; oldVal: " + da(e), q[A].push(N))
                                    } catch (r) {
                                        c(r)
                                    }
                                if (!(h = x.$$childHead || x !== this && x.$$nextSibling))
                                    for (; x !== this && !(h = x.$$nextSibling);) x = x.$parent
                            } while (x = h);
                            if (m && !t--) throw j.$$phase = null, Error(b + " $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: " + da(q));
                        } while (m || o.length);
                        j.$$phase = null
                    },
                    $destroy: function() {
                        if (!(j == this || this.$$destroyed)) {
                            var a = this.$parent;
                            this.$broadcast("$destroy");
                            this.$$destroyed = !0;
                            if (a.$$childHead == this) a.$$childHead =
                                this.$$nextSibling;
                            if (a.$$childTail == this) a.$$childTail = this.$$prevSibling;
                            if (this.$$prevSibling) this.$$prevSibling.$$nextSibling = this.$$nextSibling;
                            if (this.$$nextSibling) this.$$nextSibling.$$prevSibling = this.$$prevSibling;
                            this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null
                        }
                    },
                    $eval: function(a, b) {
                        return d(a)(this, b)
                    },
                    $evalAsync: function(a) {
                        this.$$asyncQueue.push(a)
                    },
                    $apply: function(a) {
                        try {
                            return g("$apply"), this.$eval(a)
                        } catch (b) {
                            c(b)
                        } finally {
                            j.$$phase = null;
                            try {
                                j.$digest()
                            } catch (d) {
                                throw c(d),
                                    d;
                            }
                        }
                    },
                    $on: function(a, b) {
                        var c = this.$$listeners[a];
                        c || (this.$$listeners[a] = c = []);
                        c.push(b);
                        return function() {
                            c[za(c, b)] = null
                        }
                    },
                    $emit: function(a, b) {
                        var d = [],
                            e, f = this,
                            g = !1,
                            h = {
                                name: a,
                                targetScope: f,
                                stopPropagation: function() {
                                    g = !0
                                },
                                preventDefault: function() {
                                    h.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            },
                            j = [h].concat(ha.call(arguments, 1)),
                            m, q;
                        do {
                            e = f.$$listeners[a] || d;
                            h.currentScope = f;
                            m = 0;
                            for (q = e.length; m < q; m++)
                                if (e[m]) try {
                                    if (e[m].apply(null, j), g) return h
                                } catch (A) {
                                    c(A)
                                } else e.splice(m, 1), m--, q--;
                            f = f.$parent
                        } while (f);
                        return h
                    },
                    $broadcast: function(a, b) {
                        var d = this,
                            e = this,
                            f = {
                                name: a,
                                targetScope: this,
                                preventDefault: function() {
                                    f.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            },
                            g = [f].concat(ha.call(arguments, 1)),
                            h, j;
                        do {
                            d = e;
                            f.currentScope = d;
                            e = d.$$listeners[a] || [];
                            h = 0;
                            for (j = e.length; h < j; h++)
                                if (e[h]) try {
                                    e[h].apply(null, g)
                                } catch (m) {
                                    c(m)
                                } else e.splice(h, 1), h--, j--;
                            if (!(e = d.$$childHead || d !== this && d.$$nextSibling))
                                for (; d !== this && !(e = d.$$nextSibling);) d = d.$parent
                        } while (d = e);
                        return f
                    }
                };
                var j = new e;
                return j
            }]
        }

        function Uc() {
            this.$get = ["$window", function(b) {
                var a = {},
                    c = G((/android (\d+)/.exec(z(b.navigator.userAgent)) || [])[1]);
                return {
                    history: !(!b.history || !b.history.pushState || c < 4),
                    hashchange: "onhashchange" in b && (!b.document.documentMode || b.document.documentMode > 7),
                    hasEvent: function(c) {
                        if (c == "input" && Z == 9) return !1;
                        if (w(a[c])) {
                            var e = b.document.createElement("div");
                            a[c] = "on" + c in e
                        }
                        return a[c]
                    },
                    csp: !1
                }
            }]
        }

        function Vc() {
            this.$get = I(P)
        }

        function Ob(b) {
            var a = {},
                c, d, e;
            if (!b) return a;
            m(b.split("\n"), function(b) {
                e = b.indexOf(":");
                c = z(Q(b.substr(0,
                    e)));
                d = Q(b.substr(e + 1));
                c && (a[c] ? a[c] += ", " + d : a[c] = d)
            });
            return a
        }

        function Pb(b) {
            var a = L(b) ? b : q;
            return function(c) {
                a || (a = Ob(b));
                return c ? a[z(c)] || null : a
            }
        }

        function Qb(b, a, c) {
            if (H(c)) return c(b, a);
            m(c, function(c) {
                b = c(b, a)
            });
            return b
        }

        function Wc() {
            var b = /^\s*(\[|\{[^\{])/,
                a = /[\}\]]\s*$/,
                c = /^\)\]\}',?\n/,
                d = this.defaults = {
                    transformResponse: [function(d) {
                        B(d) && (d = d.replace(c, ""), b.test(d) && a.test(d) && (d = pb(d, !0)));
                        return d
                    }],
                    transformRequest: [function(a) {
                        return L(a) && wa.apply(a) !== "[object File]" ? da(a) : a
                    }],
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*",
                            "X-Requested-With": "XMLHttpRequest"
                        },
                        post: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        put: {
                            "Content-Type": "application/json;charset=utf-8"
                        }
                    }
                },
                e = this.responseInterceptors = [];
            this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(a, b, c, j, i, k) {
                function l(a) {
                    function c(a) {
                        var b = v({}, a, {
                            data: Qb(a.data, a.headers, f)
                        });
                        return 200 <= a.status && a.status < 300 ? b : i.reject(b)
                    }
                    a.method = la(a.method);
                    var e = a.transformRequest ||
                        d.transformRequest,
                        f = a.transformResponse || d.transformResponse,
                        g = d.headers,
                        g = v({
                            "X-XSRF-TOKEN": b.cookies()["XSRF-TOKEN"]
                        }, g.common, g[z(a.method)], a.headers),
                        e = Qb(a.data, Pb(g), e),
                        j;
                    w(a.data) && delete g["Content-Type"];
                    j = n(a, e, g);
                    j = j.then(c, c);
                    m(s, function(a) {
                        j = a(j)
                    });
                    j.success = function(b) {
                        j.then(function(c) {
                            b(c.data, c.status, c.headers, a)
                        });
                        return j
                    };
                    j.error = function(b) {
                        j.then(null, function(c) {
                            b(c.data, c.status, c.headers, a)
                        });
                        return j
                    };
                    return j
                }

                function n(b, c, d) {
                    function e(a, b, c) {
                        m && (200 <= a && a < 300 ? m.put(q, [a, b, Ob(c)]) : m.remove(q));
                        f(b, a, c);
                        j.$apply()
                    }

                    function f(a, c, d) {
                        c = Math.max(c, 0);
                        (200 <= c && c < 300 ? k.resolve : k.reject)({
                            data: a,
                            status: c,
                            headers: Pb(d),
                            config: b
                        })
                    }

                    function h() {
                        var a = za(l.pendingRequests, b);
                        a !== -1 && l.pendingRequests.splice(a, 1)
                    }
                    var k = i.defer(),
                        n = k.promise,
                        m, s, q = o(b.url, b.params);
                    l.pendingRequests.push(b);
                    n.then(h, h);
                    b.cache && b.method == "GET" && (m = L(b.cache) ? b.cache : p);
                    if (m)
                        if (s = m.get(q))
                            if (s.then) return s.then(h, h), s;
                            else E(s) ? f(s[1], s[0], U(s[2])) : f(s, 200, {});
                    else m.put(q, n);
                    s || a(b.method,
                        q, c, e, d, b.timeout, b.withCredentials);
                    return n
                }

                function o(a, b) {
                    if (!b) return a;
                    var c = [];
                    fc(b, function(a, b) {
                        a == null || a == q || (L(a) && (a = da(a)), c.push(encodeURIComponent(b) + "=" + encodeURIComponent(a)))
                    });
                    return a + (a.indexOf("?") == -1 ? "?" : "&") + c.join("&")
                }
                var p = c("$http"),
                    s = [];
                m(e, function(a) {
                    s.push(B(a) ? k.get(a) : k.invoke(a))
                });
                l.pendingRequests = [];
                (function(a) {
                    m(arguments, function(a) {
                        l[a] = function(b, c) {
                            return l(v(c || {}, {
                                method: a,
                                url: b
                            }))
                        }
                    })
                })("get", "delete", "head", "jsonp");
                (function(a) {
                    m(arguments, function(a) {
                        l[a] =
                            function(b, c, d) {
                                return l(v(d || {}, {
                                    method: a,
                                    url: b,
                                    data: c
                                }))
                            }
                    })
                })("post", "put");
                l.defaults = d;
                return l
            }]
        }

        function Xc() {
            this.$get = ["$browser", "$window", "$document", function(b, a, c) {
                return Yc(b, Zc, b.defer, a.angular.callbacks, c[0], a.location.protocol.replace(":", ""))
            }]
        }

        function Yc(b, a, c, d, e, g) {
            function h(a, b) {
                var c = e.createElement("script"),
                    d = function() {
                        e.body.removeChild(c);
                        b && b()
                    };
                c.type = "text/javascript";
                c.src = a;
                Z ? c.onreadystatechange = function() {
                        /loaded|complete/.test(c.readyState) && d()
                    } : c.onload = c.onerror =
                    d;
                e.body.appendChild(c)
            }
            return function(e, j, i, k, l, n, o) {
                function p(a, c, d, e) {
                    c = (j.match(Hb) || ["", g])[1] == "file" ? d ? 200 : 404 : c;
                    a(c == 1223 ? 204 : c, d, e);
                    b.$$completeOutstandingRequest(C)
                }
                b.$$incOutstandingRequestCount();
                j = j || b.url();
                if (z(e) == "jsonp") {
                    var s = "_" + (d.counter++).toString(36);
                    d[s] = function(a) {
                        d[s].data = a
                    };
                    h(j.replace("JSON_CALLBACK", "angular.callbacks." + s), function() {
                        d[s].data ? p(k, 200, d[s].data) : p(k, -2);
                        delete d[s]
                    })
                } else {
                    var t = new a;
                    t.open(e, j, !0);
                    m(l, function(a, b) {
                        a && t.setRequestHeader(b, a)
                    });
                    var q;
                    t.onreadystatechange = function() {
                        if (t.readyState == 4) {
                            var a = t.getAllResponseHeaders(),
                                b = ["Cache-Control", "Content-Language", "Content-Type", "Expires", "Last-Modified", "Pragma"];
                            a || (a = "", m(b, function(b) {
                                var c = t.getResponseHeader(b);
                                c && (a += b + ": " + c + "\n")
                            }));
                            p(k, q || t.status, t.responseText, a)
                        }
                    };
                    if (o) t.withCredentials = !0;
                    t.send(i || "");
                    n > 0 && c(function() {
                        q = -1;
                        t.abort()
                    }, n)
                }
            }
        }

        function $c() {
            this.$get = function() {
                return {
                    id: "en-us",
                    NUMBER_FORMATS: {
                        DECIMAL_SEP: ".",
                        GROUP_SEP: ",",
                        PATTERNS: [{
                            minInt: 1,
                            minFrac: 0,
                            maxFrac: 3,
                            posPre: "",
                            posSuf: "",
                            negPre: "-",
                            negSuf: "",
                            gSize: 3,
                            lgSize: 3
                        }, {
                            minInt: 1,
                            minFrac: 2,
                            maxFrac: 2,
                            posPre: "\u00a4",
                            posSuf: "",
                            negPre: "(\u00a4",
                            negSuf: ")",
                            gSize: 3,
                            lgSize: 3
                        }],
                        CURRENCY_SYM: "$"
                    },
                    DATETIME_FORMATS: {
                        MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                        SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                        DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                        SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                        AMPMS: ["AM", "PM"],
                        medium: "MMM d, y h:mm:ss a",
                        "short": "M/d/yy h:mm a",
                        fullDate: "EEEE, MMMM d, y",
                        longDate: "MMMM d, y",
                        mediumDate: "MMM d, y",
                        shortDate: "M/d/yy",
                        mediumTime: "h:mm:ss a",
                        shortTime: "h:mm a"
                    },
                    pluralCat: function(b) {
                        return b === 1 ? "one" : "other"
                    }
                }
            }
        }

        function ad() {
            this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function(b, a, c, d) {
                function e(e, f, j) {
                    var i = c.defer(),
                        k = i.promise,
                        l = y(j) && !j,
                        f = a.defer(function() {
                            try {
                                i.resolve(e())
                            } catch (a) {
                                i.reject(a), d(a)
                            }
                            l || b.$apply()
                        }, f),
                        j = function() {
                            delete g[k.$$timeoutId]
                        };
                    k.$$timeoutId = f;
                    g[f] = i;
                    k.then(j, j);
                    return k
                }
                var g = {};
                e.cancel = function(b) {
                    return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"), a.defer.cancel(b.$$timeoutId)) : !1
                };
                return e
            }]
        }

        function Rb(b) {
            function a(a, e) {
                return b.factory(a + c, e)
            }
            var c = "Filter";
            this.register = a;
            this.$get = ["$injector", function(a) {
                return function(b) {
                    return a.get(b + c)
                }
            }];
            a("currency", Sb);
            a("date", Tb);
            a("filter", bd);
            a("json", cd);
            a("limitTo", dd);
            a("lowercase", ed);
            a("number", Ub);
            a("orderBy", Vb);
            a("uppercase", fd)
        }

        function bd() {
            return function(b,
                a) {
                if (!E(b)) return b;
                var c = [];
                c.check = function(a) {
                    for (var b = 0; b < c.length; b++)
                        if (!c[b](a)) return !1;
                    return !0
                };
                var d = function(a, b) {
                    if (b.charAt(0) === "!") return !d(a, b.substr(1));
                    switch (typeof a) {
                        case "boolean":
                        case "number":
                        case "string":
                            return ("" + a).toLowerCase().indexOf(b) > -1;
                        case "object":
                            for (var c in a)
                                if (c.charAt(0) !== "$" && d(a[c], b)) return !0;
                            return !1;
                        case "array":
                            for (c = 0; c < a.length; c++)
                                if (d(a[c], b)) return !0;
                            return !1;
                        default:
                            return !1
                    }
                };
                switch (typeof a) {
                    case "boolean":
                    case "number":
                    case "string":
                        a = {
                            $: a
                        };
                    case "object":
                        for (var e in a) e == "$" ? function() {
                            var b = ("" + a[e]).toLowerCase();
                            b && c.push(function(a) {
                                return d(a, b)
                            })
                        }() : function() {
                            var b = e,
                                f = ("" + a[e]).toLowerCase();
                            f && c.push(function(a) {
                                return d(gb(a, b), f)
                            })
                        }();
                        break;
                    case "function":
                        c.push(a);
                        break;
                    default:
                        return b
                }
                for (var g = [], h = 0; h < b.length; h++) {
                    var f = b[h];
                    c.check(f) && g.push(f)
                }
                return g
            }
        }

        function Sb(b) {
            var a = b.NUMBER_FORMATS;
            return function(b, d) {
                if (w(d)) d = a.CURRENCY_SYM;
                return Wb(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g,
                    d)
            }
        }

        function Ub(b) {
            var a = b.NUMBER_FORMATS;
            return function(b, d) {
                return Wb(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
            }
        }

        function Wb(b, a, c, d, e) {
            if (isNaN(b) || !isFinite(b)) return "";
            var g = b < 0,
                b = Math.abs(b),
                h = b + "",
                f = "",
                j = [],
                i = !1;
            if (h.indexOf("e") !== -1) {
                var k = h.match(/([\d\.]+)e(-?)(\d+)/);
                k && k[2] == "-" && k[3] > e + 1 ? h = "0" : (f = h, i = !0)
            }
            if (!i) {
                h = (h.split(Xb)[1] || "").length;
                w(e) && (e = Math.min(Math.max(a.minFrac, h), a.maxFrac));
                var h = Math.pow(10, e),
                    b = Math.round(b * h) / h,
                    b = ("" + b).split(Xb),
                    h = b[0],
                    b = b[1] || "",
                    i = 0,
                    k = a.lgSize,
                    l = a.gSize;
                if (h.length >= k + l)
                    for (var i = h.length - k, n = 0; n < i; n++)(i - n) % l === 0 && n !== 0 && (f += c), f += h.charAt(n);
                for (n = i; n < h.length; n++)(h.length - n) % k === 0 && n !== 0 && (f += c), f += h.charAt(n);
                for (; b.length < e;) b += "0";
                e && e !== "0" && (f += d + b.substr(0, e))
            }
            j.push(g ? a.negPre : a.posPre);
            j.push(f);
            j.push(g ? a.negSuf : a.posSuf);
            return j.join("")
        }

        function jb(b, a, c) {
            var d = "";
            b < 0 && (d = "-", b = -b);
            for (b = "" + b; b.length < a;) b = "0" + b;
            c && (b = b.substr(b.length - a));
            return d + b
        }

        function O(b, a, c, d) {
            c = c || 0;
            return function(e) {
                e = e["get" + b]();
                if (c > 0 || e >
                    -c) e += c;
                e === 0 && c == -12 && (e = 12);
                return jb(e, a, d)
            }
        }

        function Ja(b, a) {
            return function(c, d) {
                var e = c["get" + b](),
                    g = la(a ? "SHORT" + b : b);
                return d[g][e]
            }
        }

        function Tb(b) {
            function a(a) {
                var b;
                if (b = a.match(c)) {
                    var a = new Date(0),
                        g = 0,
                        h = 0;
                    b[9] && (g = G(b[9] + b[10]), h = G(b[9] + b[11]));
                    a.setUTCFullYear(G(b[1]), G(b[2]) - 1, G(b[3]));
                    a.setUTCHours(G(b[4] || 0) - g, G(b[5] || 0) - h, G(b[6] || 0), G(b[7] || 0))
                }
                return a
            }
            var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
            return function(c,
                e) {
                var g = "",
                    h = [],
                    f, j, e = e || "mediumDate",
                    e = b.DATETIME_FORMATS[e] || e;
                B(c) && (c = gd.test(c) ? G(c) : a(c));
                Qa(c) && (c = new Date(c));
                if (!na(c)) return c;
                for (; e;)(j = hd.exec(e)) ? (h = h.concat(ha.call(j, 1)), e = h.pop()) : (h.push(e), e = null);
                m(h, function(a) {
                    f = id[a];
                    g += f ? f(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                });
                return g
            }
        }

        function cd() {
            return function(b) {
                return da(b, !0)
            }
        }

        function dd() {
            return function(b, a) {
                if (!(b instanceof Array)) return b;
                var a = G(a),
                    c = [],
                    d, e;
                if (!b || !(b instanceof Array)) return c;
                a > b.length ? a = b.length : a < -b.length && (a = -b.length);
                a > 0 ? (d = 0, e = a) : (d = b.length + a, e = b.length);
                for (; d < e; d++) c.push(b[d]);
                return c
            }
        }

        function Vb(b) {
            return function(a, c, d) {
                function e(a, b) {
                    return Ua(b) ? function(b, c) {
                        return a(c, b)
                    } : a
                }
                if (!E(a)) return a;
                if (!c) return a;
                for (var c = E(c) ? c : [c], c = Ra(c, function(a) {
                        var c = !1,
                            d = a || ma;
                        if (B(a)) {
                            if (a.charAt(0) == "+" || a.charAt(0) == "-") c = a.charAt(0) == "-", a = a.substring(1);
                            d = b(a)
                        }
                        return e(function(a, b) {
                            var c;
                            c = d(a);
                            var e = d(b),
                                f = typeof c,
                                g = typeof e;
                            f == g ? (f == "string" && (c = c.toLowerCase()),
                                f == "string" && (e = e.toLowerCase()), c = c === e ? 0 : c < e ? -1 : 1) : c = f < g ? -1 : 1;
                            return c
                        }, c)
                    }), g = [], h = 0; h < a.length; h++) g.push(a[h]);
                return g.sort(e(function(a, b) {
                    for (var d = 0; d < c.length; d++) {
                        var e = c[d](a, b);
                        if (e !== 0) return e
                    }
                    return 0
                }, d))
            }
        }

        function S(b) {
            H(b) && (b = {
                link: b
            });
            b.restrict = b.restrict || "AC";
            return I(b)
        }

        function Yb(b, a) {
            function c(a, c) {
                c = c ? "-" + Za(c, "-") : "";
                b.removeClass((a ? Ka : La) + c).addClass((a ? La : Ka) + c)
            }
            var d = this,
                e = b.parent().controller("form") || Ma,
                g = 0,
                h = d.$error = {};
            d.$name = a.name;
            d.$dirty = !1;
            d.$pristine = !0;
            d.$valid = !0;
            d.$invalid = !1;
            e.$addControl(d);
            b.addClass(Na);
            c(!0);
            d.$addControl = function(a) {
                a.$name && !d.hasOwnProperty(a.$name) && (d[a.$name] = a)
            };
            d.$removeControl = function(a) {
                a.$name && d[a.$name] === a && delete d[a.$name];
                m(h, function(b, c) {
                    d.$setValidity(c, !0, a)
                })
            };
            d.$setValidity = function(a, b, i) {
                var k = h[a];
                if (b) {
                    if (k && (Sa(k, i), !k.length)) {
                        g--;
                        if (!g) c(b), d.$valid = !0, d.$invalid = !1;
                        h[a] = !1;
                        c(!0, a);
                        e.$setValidity(a, !0, d)
                    }
                } else {
                    g || c(b);
                    if (k) {
                        if (za(k, i) != -1) return
                    } else h[a] = k = [], g++, c(!1, a), e.$setValidity(a, !1, d);
                    k.push(i);
                    d.$valid = !1;
                    d.$invalid = !0
                }
            };
            d.$setDirty = function() {
                b.removeClass(Na).addClass(Zb);
                d.$dirty = !0;
                d.$pristine = !1;
                e.$setDirty()
            }
        }

        function X(b) {
            return w(b) || b === "" || b === null || b !== b
        }

        function Oa(b, a, c, d, e, g) {
            var h = function() {
                var c = Q(a.val());
                d.$viewValue !== c && b.$apply(function() {
                    d.$setViewValue(c)
                })
            };
            if (e.hasEvent("input")) a.bind("input", h);
            else {
                var f, j = function() {
                    f || (f = g.defer(function() {
                        h();
                        f = null
                    }))
                };
                a.bind("keydown", function(a) {
                    a = a.keyCode;
                    a === 91 || 15 < a && a < 19 || 37 <= a && a <= 40 || j()
                });
                a.bind("change",
                    h);
                e.hasEvent("paste") && a.bind("paste cut", j)
            }
            d.$render = function() {
                a.val(X(d.$viewValue) ? "" : d.$viewValue)
            };
            var i = c.ngPattern,
                k = function(a, b) {
                    return X(b) || a.test(b) ? (d.$setValidity("pattern", !0), b) : (d.$setValidity("pattern", !1), q)
                };
            i && (i.match(/^\/(.*)\/$/) ? (i = RegExp(i.substr(1, i.length - 2)), e = function(a) {
                return k(i, a)
            }) : e = function(a) {
                var c = b.$eval(i);
                if (!c || !c.test) throw Error("Expected " + i + " to be a RegExp but was " + c);
                return k(c, a)
            }, d.$formatters.push(e), d.$parsers.push(e));
            if (c.ngMinlength) {
                var l =
                    G(c.ngMinlength),
                    e = function(a) {
                        return !X(a) && a.length < l ? (d.$setValidity("minlength", !1), q) : (d.$setValidity("minlength", !0), a)
                    };
                d.$parsers.push(e);
                d.$formatters.push(e)
            }
            if (c.ngMaxlength) {
                var n = G(c.ngMaxlength),
                    c = function(a) {
                        return !X(a) && a.length > n ? (d.$setValidity("maxlength", !1), q) : (d.$setValidity("maxlength", !0), a)
                    };
                d.$parsers.push(c);
                d.$formatters.push(c)
            }
        }

        function kb(b, a) {
            b = "ngClass" + b;
            return S(function(c, d, e) {
                function g(b) {
                    if (a === !0 || c.$index % 2 === a) j && !fa(b, j) && h(j), f(b);
                    j = U(b)
                }

                function h(a) {
                    L(a) &&
                        !E(a) && (a = Ra(a, function(a, b) {
                            if (a) return b
                        }));
                    d.removeClass(E(a) ? a.join(" ") : a)
                }

                function f(a) {
                    L(a) && !E(a) && (a = Ra(a, function(a, b) {
                        if (a) return b
                    }));
                    a && d.addClass(E(a) ? a.join(" ") : a)
                }
                var j = q;
                c.$watch(e[b], g, !0);
                e.$observe("class", function() {
                    var a = c.$eval(e[b]);
                    g(a, a)
                });
                b !== "ngClass" && c.$watch("$index", function(d, g) {
                    var j = d & 1;
                    j !== g & 1 && (j === a ? f(c.$eval(e[b])) : h(c.$eval(e[b])))
                })
            })
        }
        var z = function(b) {
                return B(b) ? b.toLowerCase() : b
            },
            la = function(b) {
                return B(b) ? b.toUpperCase() : b
            },
            Z = G((/msie (\d+)/.exec(z(navigator.userAgent)) || [])[1]),
            u, ca, ha = [].slice,
            Pa = [].push,
            wa = Object.prototype.toString,
            Ya = P.angular || (P.angular = {}),
            sa, fb, aa = ["0", "0", "0"];
        C.$inject = [];
        ma.$inject = [];
        fb = Z < 9 ? function(b) {
            b = b.nodeName ? b : b[0];
            return b.scopeName && b.scopeName != "HTML" ? la(b.scopeName + ":" + b.nodeName) : b.nodeName
        } : function(b) {
            return b.nodeName ? b.nodeName : b[0].nodeName
        };
        var kc = /[A-Z]/g,
            jd = {
                full: "1.0.8-815053e",
                major: 1,
                minor: 0,
                dot: 8,
                codeName: "bubble-burst"
            },
            Ba = K.cache = {},
            Aa = K.expando = "ng-" + (new Date).getTime(),
            oc = 1,
            $b = P.document.addEventListener ? function(b,
                a, c) {
                b.addEventListener(a, c, !1)
            } : function(b, a, c) {
                b.attachEvent("on" + a, c)
            },
            db = P.document.removeEventListener ? function(b, a, c) {
                b.removeEventListener(a, c, !1)
            } : function(b, a, c) {
                b.detachEvent("on" + a, c)
            },
            mc = /([\:\-\_]+(.))/g,
            nc = /^moz([A-Z])/,
            ua = K.prototype = {
                ready: function(b) {
                    function a() {
                        c || (c = !0, b())
                    }
                    var c = !1;
                    this.bind("DOMContentLoaded", a);
                    K(P).bind("load", a)
                },
                toString: function() {
                    var b = [];
                    m(this, function(a) {
                        b.push("" + a)
                    });
                    return "[" + b.join(", ") + "]"
                },
                eq: function(b) {
                    return b >= 0 ? u(this[b]) : u(this[this.length +
                        b])
                },
                length: 0,
                push: Pa,
                sort: [].sort,
                splice: [].splice
            },
            Ea = {};
        m("multiple,selected,checked,disabled,readOnly,required".split(","), function(b) {
            Ea[z(b)] = b
        });
        var Bb = {};
        m("input,select,option,textarea,button,form".split(","), function(b) {
            Bb[la(b)] = !0
        });
        m({
            data: wb,
            inheritedData: Da,
            scope: function(b) {
                return Da(b, "$scope")
            },
            controller: zb,
            injector: function(b) {
                return Da(b, "$injector")
            },
            removeAttr: function(b, a) {
                b.removeAttribute(a)
            },
            hasClass: Ca,
            css: function(b, a, c) {
                a = tb(a);
                if (y(c)) b.style[a] = c;
                else {
                    var d;
                    Z <= 8 && (d =
                        b.currentStyle && b.currentStyle[a], d === "" && (d = "auto"));
                    d = d || b.style[a];
                    Z <= 8 && (d = d === "" ? q : d);
                    return d
                }
            },
            attr: function(b, a, c) {
                var d = z(a);
                if (Ea[d])
                    if (y(c)) c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));
                    else return b[a] || (b.attributes.getNamedItem(a) || C).specified ? d : q;
                else if (y(c)) b.setAttribute(a, c);
                else if (b.getAttribute) return b = b.getAttribute(a, 2), b === null ? q : b
            },
            prop: function(b, a, c) {
                if (y(c)) b[a] = c;
                else return b[a]
            },
            text: v(Z < 9 ? function(b, a) {
                if (b.nodeType == 1) {
                    if (w(a)) return b.innerText;
                    b.innerText = a
                } else {
                    if (w(a)) return b.nodeValue;
                    b.nodeValue = a
                }
            } : function(b, a) {
                if (w(a)) return b.textContent;
                b.textContent = a
            }, {
                $dv: ""
            }),
            val: function(b, a) {
                if (w(a)) return b.value;
                b.value = a
            },
            html: function(b, a) {
                if (w(a)) return b.innerHTML;
                for (var c = 0, d = b.childNodes; c < d.length; c++) ra(d[c]);
                b.innerHTML = a
            }
        }, function(b, a) {
            K.prototype[a] = function(a, d) {
                var e, g;
                if ((b.length == 2 && b !== Ca && b !== zb ? a : d) === q)
                    if (L(a)) {
                        for (e = 0; e < this.length; e++)
                            if (b === wb) b(this[e], a);
                            else
                                for (g in a) b(this[e], g, a[g]);
                        return this
                    } else {
                        if (this.length) return b(this[0],
                            a, d)
                    }
                else {
                    for (e = 0; e < this.length; e++) b(this[e], a, d);
                    return this
                }
                return b.$dv
            }
        });
        m({
            removeData: ub,
            dealoc: ra,
            bind: function a(c, d, e) {
                var g = ba(c, "events"),
                    h = ba(c, "handle");
                g || ba(c, "events", g = {});
                h || ba(c, "handle", h = pc(c, g));
                m(d.split(" "), function(d) {
                    var j = g[d];
                    if (!j) {
                        if (d == "mouseenter" || d == "mouseleave") {
                            var i = T.body.contains || T.body.compareDocumentPosition ? function(a, c) {
                                var d = a.nodeType === 9 ? a.documentElement : a,
                                    e = c && c.parentNode;
                                return a === e || !(!e || !(e.nodeType === 1 && (d.contains ? d.contains(e) : a.compareDocumentPosition &&
                                    a.compareDocumentPosition(e) & 16)))
                            } : function(a, c) {
                                if (c)
                                    for (; c = c.parentNode;)
                                        if (c === a) return !0;
                                return !1
                            };
                            g[d] = [];
                            a(c, {
                                mouseleave: "mouseout",
                                mouseenter: "mouseover"
                            }[d], function(a) {
                                var c = a.relatedTarget;
                                (!c || c !== this && !i(this, c)) && h(a, d)
                            })
                        } else $b(c, d, h), g[d] = [];
                        j = g[d]
                    }
                    j.push(e)
                })
            },
            unbind: vb,
            replaceWith: function(a, c) {
                var d, e = a.parentNode;
                ra(a);
                m(new K(c), function(c) {
                    d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
                    d = c
                })
            },
            children: function(a) {
                var c = [];
                m(a.childNodes, function(a) {
                    a.nodeType === 1 && c.push(a)
                });
                return c
            },
            contents: function(a) {
                return a.childNodes || []
            },
            append: function(a, c) {
                m(new K(c), function(c) {
                    a.nodeType === 1 && a.appendChild(c)
                })
            },
            prepend: function(a, c) {
                if (a.nodeType === 1) {
                    var d = a.firstChild;
                    m(new K(c), function(c) {
                        d ? a.insertBefore(c, d) : (a.appendChild(c), d = c)
                    })
                }
            },
            wrap: function(a, c) {
                var c = u(c)[0],
                    d = a.parentNode;
                d && d.replaceChild(c, a);
                c.appendChild(a)
            },
            remove: function(a) {
                ra(a);
                var c = a.parentNode;
                c && c.removeChild(a)
            },
            after: function(a, c) {
                var d = a,
                    e = a.parentNode;
                m(new K(c), function(a) {
                    e.insertBefore(a,
                        d.nextSibling);
                    d = a
                })
            },
            addClass: yb,
            removeClass: xb,
            toggleClass: function(a, c, d) {
                w(d) && (d = !Ca(a, c));
                (d ? yb : xb)(a, c)
            },
            parent: function(a) {
                return (a = a.parentNode) && a.nodeType !== 11 ? a : null
            },
            next: function(a) {
                if (a.nextElementSibling) return a.nextElementSibling;
                for (a = a.nextSibling; a != null && a.nodeType !== 1;) a = a.nextSibling;
                return a
            },
            find: function(a, c) {
                return a.getElementsByTagName(c)
            },
            clone: cb,
            triggerHandler: function(a, c) {
                var d = (ba(a, "events") || {})[c];
                m(d, function(c) {
                    c.call(a, null)
                })
            }
        }, function(a, c) {
            K.prototype[c] =
                function(c, e) {
                    for (var g, h = 0; h < this.length; h++) g == q ? (g = a(this[h], c, e), g !== q && (g = u(g))) : bb(g, a(this[h], c, e));
                    return g == q ? this : g
                }
        });
        Fa.prototype = {
            put: function(a, c) {
                this[ga(a)] = c
            },
            get: function(a) {
                return this[ga(a)]
            },
            remove: function(a) {
                var c = this[a = ga(a)];
                delete this[a];
                return c
            }
        };
        eb.prototype = {
            push: function(a, c) {
                var d = this[a = ga(a)];
                d ? d.push(c) : this[a] = [c]
            },
            shift: function(a) {
                var c = this[a = ga(a)];
                if (c) return c.length == 1 ? (delete this[a], c[0]) : c.shift()
            },
            peek: function(a) {
                if (a = this[ga(a)]) return a[0]
            }
        };
        var rc =
            /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
            sc = /,/,
            tc = /^\s*(_?)(\S+?)\1\s*$/,
            qc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
            Eb = "Non-assignable model expression: ";
        Db.$inject = ["$provide"];
        var Bc = /^(x[\:\-_]|data[\:\-_])/i,
            Hb = /^([^:]+):\/\/(\w+:{0,1}\w*@)?(\{?[\w\.-]*\}?)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,
            ac = /^([^\?#]*)?(\?([^#]*))?(#(.*))?$/,
            Ic = ac,
            Ib = {
                http: 80,
                https: 443,
                ftp: 21
            };
        hb.prototype = {
            $$replace: !1,
            absUrl: Ha("$$absUrl"),
            url: function(a, c) {
                if (w(a)) return this.$$url;
                var d = ac.exec(a);
                d[1] && this.path(decodeURIComponent(d[1]));
                if (d[2] || d[1]) this.search(d[3] || "");
                this.hash(d[5] || "", c);
                return this
            },
            protocol: Ha("$$protocol"),
            host: Ha("$$host"),
            port: Ha("$$port"),
            path: Kb("$$path", function(a) {
                return a.charAt(0) == "/" ? a : "/" + a
            }),
            search: function(a, c) {
                if (w(a)) return this.$$search;
                y(c) ? c === null ? delete this.$$search[a] : this.$$search[a] = c : this.$$search = B(a) ? Va(a) : a;
                this.$$compose();
                return this
            },
            hash: Kb("$$hash", ma),
            replace: function() {
                this.$$replace = !0;
                return this
            }
        };
        Ga.prototype = ya(hb.prototype);
        Jb.prototype = ya(Ga.prototype);
        var Ia = {
                "null": function() {
                    return null
                },
                "true": function() {
                    return !0
                },
                "false": function() {
                    return !1
                },
                undefined: C,
                "+": function(a, c, d, e) {
                    d = d(a, c);
                    e = e(a, c);
                    return y(d) ? y(e) ? d + e : d : y(e) ? e : q
                },
                "-": function(a, c, d, e) {
                    d = d(a, c);
                    e = e(a, c);
                    return (y(d) ? d : 0) - (y(e) ? e : 0)
                },
                "*": function(a, c, d, e) {
                    return d(a, c) * e(a, c)
                },
                "/": function(a, c, d, e) {
                    return d(a, c) / e(a, c)
                },
                "%": function(a, c, d, e) {
                    return d(a, c) % e(a, c)
                },
                "^": function(a, c, d, e) {
                    return d(a, c) ^ e(a, c)
                },
                "=": C,
                "==": function(a, c, d, e) {
                    return d(a, c) == e(a, c)
                },
                "!=": function(a, c, d, e) {
                    return d(a, c) != e(a, c)
                },
                "<": function(a, c,
                    d, e) {
                    return d(a, c) < e(a, c)
                },
                ">": function(a, c, d, e) {
                    return d(a, c) > e(a, c)
                },
                "<=": function(a, c, d, e) {
                    return d(a, c) <= e(a, c)
                },
                ">=": function(a, c, d, e) {
                    return d(a, c) >= e(a, c)
                },
                "&&": function(a, c, d, e) {
                    return d(a, c) && e(a, c)
                },
                "||": function(a, c, d, e) {
                    return d(a, c) || e(a, c)
                },
                "&": function(a, c, d, e) {
                    return d(a, c) & e(a, c)
                },
                "|": function(a, c, d, e) {
                    return e(a, c)(a, c, d(a, c))
                },
                "!": function(a, c, d) {
                    return !d(a, c)
                }
            },
            Mc = {
                n: "\n",
                f: "\u000c",
                r: "\r",
                t: "\t",
                v: "\u000b",
                "'": "'",
                '"': '"'
            },
            ib = {},
            Zc = P.XMLHttpRequest || function() {
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP.6.0")
                } catch (a) {}
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP.3.0")
                } catch (c) {}
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                } catch (d) {}
                throw Error("This browser does not support XMLHttpRequest.");
            };
        Rb.$inject = ["$provide"];
        Sb.$inject = ["$locale"];
        Ub.$inject = ["$locale"];
        var Xb = ".",
            id = {
                yyyy: O("FullYear", 4),
                yy: O("FullYear", 2, 0, !0),
                y: O("FullYear", 1),
                MMMM: Ja("Month"),
                MMM: Ja("Month", !0),
                MM: O("Month", 2, 1),
                M: O("Month", 1, 1),
                dd: O("Date", 2),
                d: O("Date", 1),
                HH: O("Hours", 2),
                H: O("Hours", 1),
                hh: O("Hours", 2, -12),
                h: O("Hours", 1, -12),
                mm: O("Minutes", 2),
                m: O("Minutes", 1),
                ss: O("Seconds", 2),
                s: O("Seconds", 1),
                EEEE: Ja("Day"),
                EEE: Ja("Day", !0),
                a: function(a, c) {
                    return a.getHours() < 12 ? c.AMPMS[0] : c.AMPMS[1]
                },
                Z: function(a) {
                    var a = -1 * a.getTimezoneOffset(),
                        c = a >= 0 ? "+" : "";
                    c += jb(Math[a > 0 ? "floor" : "ceil"](a / 60), 2) + jb(Math.abs(a % 60), 2);
                    return c
                }
            },
            hd = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
            gd = /^\d+$/;
        Tb.$inject = ["$locale"];
        var ed = I(z),
            fd = I(la);
        Vb.$inject = ["$parse"];
        var kd = I({
                restrict: "E",
                compile: function(a, c) {
                    Z <= 8 && (!c.href && !c.name && c.$set("href", ""), a.append(T.createComment("IE fix")));
                    return function(a, c) {
                        c.bind("click", function(a) {
                            c.attr("href") || a.preventDefault()
                        })
                    }
                }
            }),
            lb = {};
        m(Ea, function(a,
            c) {
            var d = ea("ng-" + c);
            lb[d] = function() {
                return {
                    priority: 100,
                    compile: function() {
                        return function(a, g, h) {
                            a.$watch(h[d], function(a) {
                                h.$set(c, !!a)
                            })
                        }
                    }
                }
            }
        });
        m(["src", "href"], function(a) {
            var c = ea("ng-" + a);
            lb[c] = function() {
                return {
                    priority: 99,
                    link: function(d, e, g) {
                        g.$observe(c, function(c) {
                            c && (g.$set(a, c), Z && e.prop(a, g[a]))
                        })
                    }
                }
            }
        });
        var Ma = {
            $addControl: C,
            $removeControl: C,
            $setValidity: C,
            $setDirty: C
        };
        Yb.$inject = ["$element", "$attrs", "$scope"];
        var Pa = function(a) {
                return ["$timeout", function(c) {
                    var d = {
                        name: "form",
                        restrict: "E",
                        controller: Yb,
                        compile: function() {
                            return {
                                pre: function(a, d, h, f) {
                                    if (!h.action) {
                                        var j = function(a) {
                                            a.preventDefault ? a.preventDefault() : a.returnValue = !1
                                        };
                                        $b(d[0], "submit", j);
                                        d.bind("$destroy", function() {
                                            c(function() {
                                                db(d[0], "submit", j)
                                            }, 0, !1)
                                        })
                                    }
                                    var i = d.parent().controller("form"),
                                        k = h.name || h.ngForm;
                                    k && (a[k] = f);
                                    i && d.bind("$destroy", function() {
                                        i.$removeControl(f);
                                        k && (a[k] = q);
                                        v(f, Ma)
                                    })
                                }
                            }
                        }
                    };
                    return a ? v(U(d), {
                        restrict: "EAC"
                    }) : d
                }]
            },
            ld = Pa(),
            md = Pa(!0),
            nd = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
            od = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
            pd = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
            bc = {
                text: Oa,
                number: function(a, c, d, e, g, h) {
                    Oa(a, c, d, e, g, h);
                    e.$parsers.push(function(a) {
                        var c = X(a);
                        return c || pd.test(a) ? (e.$setValidity("number", !0), a === "" ? null : c ? a : parseFloat(a)) : (e.$setValidity("number", !1), q)
                    });
                    e.$formatters.push(function(a) {
                        return X(a) ? "" : "" + a
                    });
                    if (d.min) {
                        var f = parseFloat(d.min),
                            a = function(a) {
                                return !X(a) && a < f ? (e.$setValidity("min", !1), q) : (e.$setValidity("min", !0), a)
                            };
                        e.$parsers.push(a);
                        e.$formatters.push(a)
                    }
                    if (d.max) {
                        var j = parseFloat(d.max),
                            d = function(a) {
                                return !X(a) && a > j ? (e.$setValidity("max", !1), q) : (e.$setValidity("max", !0), a)
                            };
                        e.$parsers.push(d);
                        e.$formatters.push(d)
                    }
                    e.$formatters.push(function(a) {
                        return X(a) || Qa(a) ? (e.$setValidity("number", !0), a) : (e.$setValidity("number", !1), q)
                    })
                },
                url: function(a, c, d, e, g, h) {
                    Oa(a, c, d, e, g, h);
                    a = function(a) {
                        return X(a) || nd.test(a) ? (e.$setValidity("url", !0), a) : (e.$setValidity("url", !1), q)
                    };
                    e.$formatters.push(a);
                    e.$parsers.push(a)
                },
                email: function(a,
                    c, d, e, g, h) {
                    Oa(a, c, d, e, g, h);
                    a = function(a) {
                        return X(a) || od.test(a) ? (e.$setValidity("email", !0), a) : (e.$setValidity("email", !1), q)
                    };
                    e.$formatters.push(a);
                    e.$parsers.push(a)
                },
                radio: function(a, c, d, e) {
                    w(d.name) && c.attr("name", xa());
                    c.bind("click", function() {
                        c[0].checked && a.$apply(function() {
                            e.$setViewValue(d.value)
                        })
                    });
                    e.$render = function() {
                        c[0].checked = d.value == e.$viewValue
                    };
                    d.$observe("value", e.$render)
                },
                checkbox: function(a, c, d, e) {
                    var g = d.ngTrueValue,
                        h = d.ngFalseValue;
                    B(g) || (g = !0);
                    B(h) || (h = !1);
                    c.bind("click",
                        function() {
                            a.$apply(function() {
                                e.$setViewValue(c[0].checked)
                            })
                        });
                    e.$render = function() {
                        c[0].checked = e.$viewValue
                    };
                    e.$formatters.push(function(a) {
                        return a === g
                    });
                    e.$parsers.push(function(a) {
                        return a ? g : h
                    })
                },
                hidden: C,
                button: C,
                submit: C,
                reset: C
            },
            cc = ["$browser", "$sniffer", function(a, c) {
                return {
                    restrict: "E",
                    require: "?ngModel",
                    link: function(d, e, g, h) {
                        h && (bc[z(g.type)] || bc.text)(d, e, g, h, c, a)
                    }
                }
            }],
            La = "ng-valid",
            Ka = "ng-invalid",
            Na = "ng-pristine",
            Zb = "ng-dirty",
            qd = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse",
                function(a, c, d, e, g) {
                    function h(a, c) {
                        c = c ? "-" + Za(c, "-") : "";
                        e.removeClass((a ? Ka : La) + c).addClass((a ? La : Ka) + c)
                    }
                    this.$modelValue = this.$viewValue = Number.NaN;
                    this.$parsers = [];
                    this.$formatters = [];
                    this.$viewChangeListeners = [];
                    this.$pristine = !0;
                    this.$dirty = !1;
                    this.$valid = !0;
                    this.$invalid = !1;
                    this.$name = d.name;
                    var f = g(d.ngModel),
                        j = f.assign;
                    if (!j) throw Error(Eb + d.ngModel + " (" + pa(e) + ")");
                    this.$render = C;
                    var i = e.inheritedData("$formController") || Ma,
                        k = 0,
                        l = this.$error = {};
                    e.addClass(Na);
                    h(!0);
                    this.$setValidity = function(a,
                        c) {
                        if (l[a] !== !c) {
                            if (c) {
                                if (l[a] && k--, !k) h(!0), this.$valid = !0, this.$invalid = !1
                            } else h(!1), this.$invalid = !0, this.$valid = !1, k++;
                            l[a] = !c;
                            h(c, a);
                            i.$setValidity(a, c, this)
                        }
                    };
                    this.$setViewValue = function(d) {
                        this.$viewValue = d;
                        if (this.$pristine) this.$dirty = !0, this.$pristine = !1, e.removeClass(Na).addClass(Zb), i.$setDirty();
                        m(this.$parsers, function(a) {
                            d = a(d)
                        });
                        if (this.$modelValue !== d) this.$modelValue = d, j(a, d), m(this.$viewChangeListeners, function(a) {
                            try {
                                a()
                            } catch (d) {
                                c(d)
                            }
                        })
                    };
                    var n = this;
                    a.$watch(function() {
                        var c =
                            f(a);
                        if (n.$modelValue !== c) {
                            var d = n.$formatters,
                                e = d.length;
                            for (n.$modelValue = c; e--;) c = d[e](c);
                            if (n.$viewValue !== c) n.$viewValue = c, n.$render()
                        }
                    })
                }
            ],
            rd = function() {
                return {
                    require: ["ngModel", "^?form"],
                    controller: qd,
                    link: function(a, c, d, e) {
                        var g = e[0],
                            h = e[1] || Ma;
                        h.$addControl(g);
                        c.bind("$destroy", function() {
                            h.$removeControl(g)
                        })
                    }
                }
            },
            sd = I({
                require: "ngModel",
                link: function(a, c, d, e) {
                    e.$viewChangeListeners.push(function() {
                        a.$eval(d.ngChange)
                    })
                }
            }),
            dc = function() {
                return {
                    require: "?ngModel",
                    link: function(a, c, d, e) {
                        if (e) {
                            d.required = !0;
                            var g = function(a) {
                                if (d.required && (X(a) || a === !1)) e.$setValidity("required", !1);
                                else return e.$setValidity("required", !0), a
                            };
                            e.$formatters.push(g);
                            e.$parsers.unshift(g);
                            d.$observe("required", function() {
                                g(e.$viewValue)
                            })
                        }
                    }
                }
            },
            td = function() {
                return {
                    require: "ngModel",
                    link: function(a, c, d, e) {
                        var g = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";
                        e.$parsers.push(function(a) {
                            var c = [];
                            a && m(a.split(g), function(a) {
                                a && c.push(Q(a))
                            });
                            return c
                        });
                        e.$formatters.push(function(a) {
                            return E(a) ? a.join(", ") :
                                q
                        })
                    }
                }
            },
            ud = /^(true|false|\d+)$/,
            vd = function() {
                return {
                    priority: 100,
                    compile: function(a, c) {
                        return ud.test(c.ngValue) ? function(a, c, g) {
                            g.$set("value", a.$eval(g.ngValue))
                        } : function(a, c, g) {
                            a.$watch(g.ngValue, function(a) {
                                g.$set("value", a, !1)
                            })
                        }
                    }
                }
            },
            wd = S(function(a, c, d) {
                c.addClass("ng-binding").data("$binding", d.ngBind);
                a.$watch(d.ngBind, function(a) {
                    c.text(a == q ? "" : a)
                })
            }),
            xd = ["$interpolate", function(a) {
                return function(c, d, e) {
                    c = a(d.attr(e.$attr.ngBindTemplate));
                    d.addClass("ng-binding").data("$binding", c);
                    e.$observe("ngBindTemplate",
                        function(a) {
                            d.text(a)
                        })
                }
            }],
            yd = [function() {
                return function(a, c, d) {
                    c.addClass("ng-binding").data("$binding", d.ngBindHtmlUnsafe);
                    a.$watch(d.ngBindHtmlUnsafe, function(a) {
                        c.html(a || "")
                    })
                }
            }],
            zd = kb("", !0),
            Ad = kb("Odd", 0),
            Bd = kb("Even", 1),
            Cd = S({
                compile: function(a, c) {
                    c.$set("ngCloak", q);
                    a.removeClass("ng-cloak")
                }
            }),
            Dd = [function() {
                return {
                    scope: !0,
                    controller: "@"
                }
            }],
            Ed = ["$sniffer", function(a) {
                return {
                    priority: 1E3,
                    compile: function() {
                        a.csp = !0
                    }
                }
            }],
            ec = {};
        m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave".split(" "),
            function(a) {
                var c = ea("ng-" + a);
                ec[c] = ["$parse", function(d) {
                    return function(e, g, h) {
                        var f = d(h[c]);
                        g.bind(z(a), function(a) {
                            e.$apply(function() {
                                f(e, {
                                    $event: a
                                })
                            })
                        })
                    }
                }]
            });
        var Fd = S(function(a, c, d) {
                c.bind("submit", function() {
                    a.$apply(d.ngSubmit)
                })
            }),
            Gd = ["$http", "$templateCache", "$anchorScroll", "$compile", function(a, c, d, e) {
                return {
                    restrict: "ECA",
                    terminal: !0,
                    compile: function(g, h) {
                        var f = h.ngInclude || h.src,
                            j = h.onload || "",
                            i = h.autoscroll;
                        return function(g, h) {
                            var n = 0,
                                o, p = function() {
                                    o && (o.$destroy(), o = null);
                                    h.html("")
                                };
                            g.$watch(f, function(f) {
                                var m = ++n;
                                f ? a.get(f, {
                                    cache: c
                                }).success(function(a) {
                                    m === n && (o && o.$destroy(), o = g.$new(), h.html(a), e(h.contents())(o), y(i) && (!i || g.$eval(i)) && d(), o.$emit("$includeContentLoaded"), g.$eval(j))
                                }).error(function() {
                                    m === n && p()
                                }) : p()
                            })
                        }
                    }
                }
            }],
            Hd = S({
                compile: function() {
                    return {
                        pre: function(a, c, d) {
                            a.$eval(d.ngInit)
                        }
                    }
                }
            }),
            Id = S({
                terminal: !0,
                priority: 1E3
            }),
            Jd = ["$locale", "$interpolate", function(a, c) {
                var d = /{}/g;
                return {
                    restrict: "EA",
                    link: function(e, g, h) {
                        var f = h.count,
                            j = g.attr(h.$attr.when),
                            i = h.offset ||
                            0,
                            k = e.$eval(j),
                            l = {},
                            n = c.startSymbol(),
                            o = c.endSymbol();
                        m(k, function(a, e) {
                            l[e] = c(a.replace(d, n + f + "-" + i + o))
                        });
                        e.$watch(function() {
                            var c = parseFloat(e.$eval(f));
                            return isNaN(c) ? "" : (c in k || (c = a.pluralCat(c - i)), l[c](e, g, !0))
                        }, function(a) {
                            g.text(a)
                        })
                    }
                }
            }],
            Kd = S({
                transclude: "element",
                priority: 1E3,
                terminal: !0,
                compile: function(a, c, d) {
                    return function(a, c, h) {
                        var f = h.ngRepeat,
                            h = f.match(/^\s*(.+)\s+in\s+(.*)\s*$/),
                            j, i, k;
                        if (!h) throw Error("Expected ngRepeat in form of '_item_ in _collection_' but got '" + f + "'.");
                        f =
                            h[1];
                        j = h[2];
                        h = f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
                        if (!h) throw Error("'item' in 'item in collection' should be identifier or (key, value) but got '" + f + "'.");
                        i = h[3] || h[1];
                        k = h[2];
                        var l = new eb;
                        a.$watch(function(a) {
                            var e, f, h = a.$eval(j),
                                m = c,
                                q = new eb,
                                y, A, u, w, r, v;
                            if (E(h)) r = h || [];
                            else {
                                r = [];
                                for (u in h) h.hasOwnProperty(u) && u.charAt(0) != "$" && r.push(u);
                                r.sort()
                            }
                            y = r.length - 1;
                            e = 0;
                            for (f = r.length; e < f; e++) {
                                u = h === r ? e : r[e];
                                w = h[u];
                                if (v = l.shift(w)) {
                                    A = v.scope;
                                    q.push(w, v);
                                    if (e !== v.index) v.index = e, m.after(v.element);
                                    m = v.element
                                } else A = a.$new();
                                A[i] = w;
                                k && (A[k] = u);
                                A.$index = e;
                                A.$first = e === 0;
                                A.$last = e === y;
                                A.$middle = !(A.$first || A.$last);
                                v || d(A, function(a) {
                                    m.after(a);
                                    v = {
                                        scope: A,
                                        element: m = a,
                                        index: e
                                    };
                                    q.push(w, v)
                                })
                            }
                            for (u in l)
                                if (l.hasOwnProperty(u))
                                    for (r = l[u]; r.length;) w = r.pop(), w.element.remove(), w.scope.$destroy();
                            l = q
                        })
                    }
                }
            }),
            Ld = S(function(a, c, d) {
                a.$watch(d.ngShow, function(a) {
                    c.css("display", Ua(a) ? "" : "none")
                })
            }),
            Md = S(function(a, c, d) {
                a.$watch(d.ngHide, function(a) {
                    c.css("display", Ua(a) ? "none" : "")
                })
            }),
            Nd = S(function(a, c,
                d) {
                a.$watch(d.ngStyle, function(a, d) {
                    d && a !== d && m(d, function(a, d) {
                        c.css(d, "")
                    });
                    a && c.css(a)
                }, !0)
            }),
            Od = I({
                restrict: "EA",
                require: "ngSwitch",
                controller: ["$scope", function() {
                    this.cases = {}
                }],
                link: function(a, c, d, e) {
                    var g, h, f;
                    a.$watch(d.ngSwitch || d.on, function(j) {
                        h && (f.$destroy(), h.remove(), h = f = null);
                        if (g = e.cases["!" + j] || e.cases["?"]) a.$eval(d.change), f = a.$new(), g(f, function(a) {
                            h = a;
                            c.append(a)
                        })
                    })
                }
            }),
            Pd = S({
                transclude: "element",
                priority: 500,
                require: "^ngSwitch",
                compile: function(a, c, d) {
                    return function(a, g, h,
                        f) {
                        f.cases["!" + c.ngSwitchWhen] = d
                    }
                }
            }),
            Qd = S({
                transclude: "element",
                priority: 500,
                require: "^ngSwitch",
                compile: function(a, c, d) {
                    return function(a, c, h, f) {
                        f.cases["?"] = d
                    }
                }
            }),
            Rd = S({
                controller: ["$transclude", "$element", function(a, c) {
                    a(function(a) {
                        c.append(a)
                    })
                }]
            }),
            Sd = ["$http", "$templateCache", "$route", "$anchorScroll", "$compile", "$controller", function(a, c, d, e, g, h) {
                return {
                    restrict: "ECA",
                    terminal: !0,
                    link: function(a, c, i) {
                        function k() {
                            var i = d.current && d.current.locals,
                                k = i && i.$template;
                            if (k) {
                                c.html(k);
                                l && (l.$destroy(),
                                    l = null);
                                var k = g(c.contents()),
                                    m = d.current;
                                l = m.scope = a.$new();
                                if (m.controller) i.$scope = l, i = h(m.controller, i), c.children().data("$ngControllerController", i);
                                k(l);
                                l.$emit("$viewContentLoaded");
                                l.$eval(n);
                                e()
                            } else c.html(""), l && (l.$destroy(), l = null)
                        }
                        var l, n = i.onload || "";
                        a.$on("$routeChangeSuccess", k);
                        k()
                    }
                }
            }],
            Td = ["$templateCache", function(a) {
                return {
                    restrict: "E",
                    terminal: !0,
                    compile: function(c, d) {
                        d.type == "text/ng-template" && a.put(d.id, c[0].text)
                    }
                }
            }],
            Ud = I({
                terminal: !0
            }),
            Vd = ["$compile", "$parse", function(a,
                c) {
                var d = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/,
                    e = {
                        $setViewValue: C
                    };
                return {
                    restrict: "E",
                    require: ["select", "?ngModel"],
                    controller: ["$element", "$scope", "$attrs", function(a, c, d) {
                        var j = this,
                            i = {},
                            k = e,
                            l;
                        j.databound = d.ngModel;
                        j.init = function(a, c, d) {
                            k = a;
                            l = d
                        };
                        j.addOption = function(c) {
                            i[c] = !0;
                            k.$viewValue == c && (a.val(c), l.parent() && l.remove())
                        };
                        j.removeOption = function(a) {
                            this.hasOption(a) && (delete i[a],
                                k.$viewValue == a && this.renderUnknownOption(a))
                        };
                        j.renderUnknownOption = function(c) {
                            c = "? " + ga(c) + " ?";
                            l.val(c);
                            a.prepend(l);
                            a.val(c);
                            l.prop("selected", !0)
                        };
                        j.hasOption = function(a) {
                            return i.hasOwnProperty(a)
                        };
                        c.$on("$destroy", function() {
                            j.renderUnknownOption = C
                        })
                    }],
                    link: function(e, h, f, j) {
                        function i(a, c, d, e) {
                            d.$render = function() {
                                var a = d.$viewValue;
                                e.hasOption(a) ? (z.parent() && z.remove(), c.val(a), a === "" && v.prop("selected", !0)) : w(a) && v ? c.val("") : e.renderUnknownOption(a)
                            };
                            c.bind("change", function() {
                                a.$apply(function() {
                                    z.parent() &&
                                        z.remove();
                                    d.$setViewValue(c.val())
                                })
                            })
                        }

                        function k(a, c, d) {
                            var e;
                            d.$render = function() {
                                var a = new Fa(d.$viewValue);
                                m(c.find("option"), function(c) {
                                    c.selected = y(a.get(c.value))
                                })
                            };
                            a.$watch(function() {
                                fa(e, d.$viewValue) || (e = U(d.$viewValue), d.$render())
                            });
                            c.bind("change", function() {
                                a.$apply(function() {
                                    var a = [];
                                    m(c.find("option"), function(c) {
                                        c.selected && a.push(c.value)
                                    });
                                    d.$setViewValue(a)
                                })
                            })
                        }

                        function l(e, f, g) {
                            function h() {
                                var a = {
                                        "": []
                                    },
                                    c = [""],
                                    d, i, s, u, v;
                                s = g.$modelValue;
                                u = o(e) || [];
                                var w = l ? mb(u) : u,
                                    y, x, z;
                                x = {};
                                v = !1;
                                var B, E;
                                p && (v = new Fa(s));
                                for (z = 0; y = w.length, z < y; z++) {
                                    x[k] = u[l ? x[l] = w[z] : z];
                                    d = m(e, x) || "";
                                    if (!(i = a[d])) i = a[d] = [], c.push(d);
                                    p ? d = v.remove(n(e, x)) != q : (d = s === n(e, x), v = v || d);
                                    B = j(e, x);
                                    B = B === q ? "" : B;
                                    i.push({
                                        id: l ? w[z] : z,
                                        label: B,
                                        selected: d
                                    })
                                }
                                p || (t || s === null ? a[""].unshift({
                                    id: "",
                                    label: "",
                                    selected: !v
                                }) : v || a[""].unshift({
                                    id: "?",
                                    label: "",
                                    selected: !0
                                }));
                                x = 0;
                                for (w = c.length; x < w; x++) {
                                    d = c[x];
                                    i = a[d];
                                    if (r.length <= x) s = {
                                        element: A.clone().attr("label", d),
                                        label: i.label
                                    }, u = [s], r.push(u), f.append(s.element);
                                    else if (u =
                                        r[x], s = u[0], s.label != d) s.element.attr("label", s.label = d);
                                    B = null;
                                    z = 0;
                                    for (y = i.length; z < y; z++)
                                        if (d = i[z], v = u[z + 1]) {
                                            B = v.element;
                                            if (v.label !== d.label) B.text(v.label = d.label);
                                            if (v.id !== d.id) B.val(v.id = d.id);
                                            if (B[0].selected !== d.selected) B.prop("selected", v.selected = d.selected)
                                        } else d.id === "" && t ? E = t : (E = C.clone()).val(d.id).attr("selected", d.selected).text(d.label), u.push({
                                            element: E,
                                            label: d.label,
                                            id: d.id,
                                            selected: d.selected
                                        }), B ? B.after(E) : s.element.append(E), B = E;
                                    for (z++; u.length > z;) u.pop().element.remove()
                                }
                                for (; r.length >
                                    x;) r.pop()[0].element.remove()
                            }
                            var i;
                            if (!(i = s.match(d))) throw Error("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '" + s + "'.");
                            var j = c(i[2] || i[1]),
                                k = i[4] || i[6],
                                l = i[5],
                                m = c(i[3] || ""),
                                n = c(i[2] ? i[1] : k),
                                o = c(i[7]),
                                r = [
                                    [{
                                        element: f,
                                        label: ""
                                    }]
                                ];
                            t && (a(t)(e), t.removeClass("ng-scope"), t.remove());
                            f.html("");
                            f.bind("change", function() {
                                e.$apply(function() {
                                    var a, c = o(e) || [],
                                        d = {},
                                        h, i, j, m, s, t;
                                    if (p) {
                                        i = [];
                                        m = 0;
                                        for (t = r.length; m < t; m++) {
                                            a = r[m];
                                            j = 1;
                                            for (s = a.length; j < s; j++)
                                                if ((h =
                                                        a[j].element)[0].selected) h = h.val(), l && (d[l] = h), d[k] = c[h], i.push(n(e, d))
                                        }
                                    } else h = f.val(), h == "?" ? i = q : h == "" ? i = null : (d[k] = c[h], l && (d[l] = h), i = n(e, d));
                                    g.$setViewValue(i)
                                })
                            });
                            g.$render = h;
                            e.$watch(h)
                        }
                        if (j[1]) {
                            for (var n = j[0], o = j[1], p = f.multiple, s = f.ngOptions, t = !1, v, C = u(T.createElement("option")), A = u(T.createElement("optgroup")), z = C.clone(), j = 0, B = h.children(), r = B.length; j < r; j++)
                                if (B[j].value == "") {
                                    v = t = B.eq(j);
                                    break
                                }
                            n.init(o, t, z);
                            if (p && (f.required || f.ngRequired)) {
                                var E = function(a) {
                                    o.$setValidity("required", !f.required || a && a.length);
                                    return a
                                };
                                o.$parsers.push(E);
                                o.$formatters.unshift(E);
                                f.$observe("required", function() {
                                    E(o.$viewValue)
                                })
                            }
                            s ? l(e, h, o) : p ? k(e, h, o) : i(e, h, o, n)
                        }
                    }
                }
            }],
            Wd = ["$interpolate", function(a) {
                var c = {
                    addOption: C,
                    removeOption: C
                };
                return {
                    restrict: "E",
                    priority: 100,
                    compile: function(d, e) {
                        if (w(e.value)) {
                            var g = a(d.text(), !0);
                            g || e.$set("value", d.text())
                        }
                        return function(a, d, e) {
                            var i = d.parent(),
                                k = i.data("$selectController") || i.parent().data("$selectController");
                            k && k.databound ? d.prop("selected", !1) : k =
                                c;
                            g ? a.$watch(g, function(a, c) {
                                e.$set("value", a);
                                a !== c && k.removeOption(c);
                                k.addOption(a)
                            }) : k.addOption(e.value);
                            d.bind("$destroy", function() {
                                k.removeOption(e.value)
                            })
                        }
                    }
                }
            }],
            Xd = I({
                restrict: "E",
                terminal: !0
            });
        (ca = P.jQuery) ? (u = ca, v(ca.fn, {
            scope: ua.scope,
            controller: ua.controller,
            injector: ua.injector,
            inheritedData: ua.inheritedData
        }), ab("remove", !0, !0, !1), ab("empty", !1, !1, !1), ab("html", !1, !1, !0)) : u = K;
        Ya.element = u;
        (function(a) {
            v(a, {
                bootstrap: rb,
                copy: U,
                extend: v,
                equals: fa,
                element: u,
                forEach: m,
                injector: sb,
                noop: C,
                bind: Ta,
                toJson: da,
                fromJson: pb,
                identity: ma,
                isUndefined: w,
                isDefined: y,
                isString: B,
                isFunction: H,
                isObject: L,
                isNumber: Qa,
                isElement: gc,
                isArray: E,
                version: jd,
                isDate: na,
                lowercase: z,
                uppercase: la,
                callbacks: {
                    counter: 0
                }
            });
            sa = lc(P);
            try {
                sa("ngLocale")
            } catch (c) {
                sa("ngLocale", []).provider("$locale", $c)
            }
            sa("ng", ["ngLocale"], ["$provide", function(a) {
                a.provider("$compile", Db).directive({
                    a: kd,
                    input: cc,
                    textarea: cc,
                    form: ld,
                    script: Td,
                    select: Vd,
                    style: Xd,
                    option: Wd,
                    ngBind: wd,
                    ngBindHtmlUnsafe: yd,
                    ngBindTemplate: xd,
                    ngClass: zd,
                    ngClassEven: Bd,
                    ngClassOdd: Ad,
                    ngCsp: Ed,
                    ngCloak: Cd,
                    ngController: Dd,
                    ngForm: md,
                    ngHide: Md,
                    ngInclude: Gd,
                    ngInit: Hd,
                    ngNonBindable: Id,
                    ngPluralize: Jd,
                    ngRepeat: Kd,
                    ngShow: Ld,
                    ngSubmit: Fd,
                    ngStyle: Nd,
                    ngSwitch: Od,
                    ngSwitchWhen: Pd,
                    ngSwitchDefault: Qd,
                    ngOptions: Ud,
                    ngView: Sd,
                    ngTransclude: Rd,
                    ngModel: rd,
                    ngList: td,
                    ngChange: sd,
                    required: dc,
                    ngRequired: dc,
                    ngValue: vd
                }).directive(lb).directive(ec);
                a.provider({
                    $anchorScroll: uc,
                    $browser: wc,
                    $cacheFactory: xc,
                    $controller: Cc,
                    $document: Dc,
                    $exceptionHandler: Ec,
                    $filter: Rb,
                    $interpolate: Fc,
                    $http: Wc,
                    $httpBackend: Xc,
                    $location: Jc,
                    $log: Kc,
                    $parse: Oc,
                    $route: Rc,
                    $routeParams: Sc,
                    $rootScope: Tc,
                    $q: Pc,
                    $sniffer: Uc,
                    $templateCache: yc,
                    $timeout: ad,
                    $window: Vc
                })
            }])
        })(Ya);
        u(T).ready(function() {
            jc(T, rb)
        })
    })(window, document);
    angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>');

    /*
     AngularJS v1.0.8-815053e
     (c) 2010-2012 Google, Inc. http://angularjs.org
     License: MIT
    */
    (function(C, d, w) {
        'use strict';
        d.module("ngResource", ["ng"]).factory("$resource", ["$http", "$parse", function(x, y) {
            function s(b, e) {
                return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, e ? "%20" : "+")
            }

            function t(b, e) {
                this.template = b += "#";
                this.defaults = e || {};
                var a = this.urlParams = {};
                h(b.split(/\W/), function(f) {
                    f && RegExp("(^|[^\\\\]):" + f + "\\W").test(b) && (a[f] = !0)
                });
                this.template = b.replace(/\\:/g, ":")
            }

            function u(b, e, a) {
                function f(m, a) {
                    var b = {},
                        a = o({}, e, a);
                    h(a, function(a, z) {
                        var c;
                        a.charAt && a.charAt(0) == "@" ? (c = a.substr(1), c = y(c)(m)) : c = a;
                        b[z] = c
                    });
                    return b
                }

                function g(a) {
                    v(a || {}, this)
                }
                var k = new t(b),
                    a = o({}, A, a);
                h(a, function(a, b) {
                    a.method = d.uppercase(a.method);
                    var e = a.method == "POST" || a.method == "PUT" || a.method == "PATCH";
                    g[b] = function(b, c, d, B) {
                        var j = {},
                            i, l = p,
                            q = null;
                        switch (arguments.length) {
                            case 4:
                                q = B, l = d;
                            case 3:
                            case 2:
                                if (r(c)) {
                                    if (r(b)) {
                                        l = b;
                                        q = c;
                                        break
                                    }
                                    l = c;
                                    q = d
                                } else {
                                    j = b;
                                    i = c;
                                    l = d;
                                    break
                                }
                            case 1:
                                r(b) ? l = b : e ? i = b : j = b;
                                break;
                            case 0:
                                break;
                            default:
                                throw "Expected between 0-4 arguments [params, data, success, error], got " +
                                    arguments.length + " arguments.";
                        }
                        var n = this instanceof g ? this : a.isArray ? [] : new g(i);
                        x({
                            method: a.method,
                            url: k.url(o({}, f(i, a.params || {}), j)),
                            data: i
                        }).then(function(b) {
                            var c = b.data;
                            if (c) a.isArray ? (n.length = 0, h(c, function(a) {
                                n.push(new g(a))
                            })) : v(c, n);
                            (l || p)(n, b.headers)
                        }, q);
                        return n
                    };
                    g.prototype["$" + b] = function(a, d, h) {
                        var m = f(this),
                            j = p,
                            i;
                        switch (arguments.length) {
                            case 3:
                                m = a;
                                j = d;
                                i = h;
                                break;
                            case 2:
                            case 1:
                                r(a) ? (j = a, i = d) : (m = a, j = d || p);
                            case 0:
                                break;
                            default:
                                throw "Expected between 1-3 arguments [params, success, error], got " +
                                    arguments.length + " arguments.";
                        }
                        g[b].call(this, m, e ? this : w, j, i)
                    }
                });
                g.bind = function(d) {
                    return u(b, o({}, e, d), a)
                };
                return g
            }
            var A = {
                    get: {
                        method: "GET"
                    },
                    save: {
                        method: "POST"
                    },
                    query: {
                        method: "GET",
                        isArray: !0
                    },
                    remove: {
                        method: "DELETE"
                    },
                    "delete": {
                        method: "DELETE"
                    }
                },
                p = d.noop,
                h = d.forEach,
                o = d.extend,
                v = d.copy,
                r = d.isFunction;
            t.prototype = {
                url: function(b) {
                    var e = this,
                        a = this.template,
                        f, g, b = b || {};
                    h(this.urlParams, function(h, c) {
                        f = b.hasOwnProperty(c) ? b[c] : e.defaults[c];
                        d.isDefined(f) && f !== null ? (g = s(f, !0).replace(/%26/gi, "&").replace(/%3D/gi,
                            "=").replace(/%2B/gi, "+"), a = a.replace(RegExp(":" + c + "(\\W)", "g"), g + "$1")) : a = a.replace(RegExp("(/?):" + c + "(\\W)", "g"), function(a, b, c) {
                            return c.charAt(0) == "/" ? c : b + c
                        })
                    });
                    var a = a.replace(/\/?#$/, ""),
                        k = [];
                    h(b, function(a, b) {
                        e.urlParams[b] || k.push(s(b) + "=" + s(a))
                    });
                    k.sort();
                    a = a.replace(/\/*$/, "");
                    return a + (k.length ? "?" + k.join("&") : "")
                }
            };
            return u
        }])
    })(window, window.angular);

    (function() {
        var d, aa = aa || {},
            h = this;

        function m(a, b, c) {
            a = a.split(".");
            c = c || h;
            a[0] in c || !c.execScript || c.execScript("var " + a[0]);
            for (var e; a.length && (e = a.shift());) a.length || void 0 === b ? c = c[e] ? c[e] : c[e] = {} : c[e] = b
        }

        function ba(a, b) {
            for (var c = a.split("."), e = b || h, f; f = c.shift();)
                if (null != e[f]) e = e[f];
                else return null;
            return e
        }

        function n() {}

        function ca() {
            throw Error("unimplemented abstract method");
        }

        function da(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        }

        function s(a) {
            return void 0 !== a
        }

        function u(a) {
            return "array" == da(a)
        }

        function ea(a) {
            var b = da(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        }

        function v(a) {
            return "string" == typeof a
        }

        function fa(a) {
            return "number" == typeof a
        }

        function ga(a) {
            return "function" == da(a)
        }

        function ha(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        }

        function ia(a) {
            return a[ja] || (a[ja] = ++ka)
        }
        var ja = "closure_uid_" + (1E9 * Math.random() >>> 0),
            ka = 0;

        function la(a, b, c) {
            return a.call.apply(a.bind, arguments)
        }

        function ma(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var e = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, e);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        }

        function w(a, b, c) {
            w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
            return w.apply(null, arguments)
        }

        function na(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = Array.prototype.slice.call(arguments);
                b.unshift.apply(b, c);
                return a.apply(this, b)
            }
        }

        function x(a, b) {
            for (var c in b) a[c] = b[c]
        }
        var y = Date.now || function() {
            return +new Date
        };

        function z(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.f = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a
        }
        Function.prototype.bind = Function.prototype.bind || function(a, b) {
            if (1 < arguments.length) {
                var c = Array.prototype.slice.call(arguments, 1);
                c.unshift(this, a);
                return w.apply(null, c)
            }
            return w(this, a)
        };
        Function.prototype.B3 = function(a) {
            var b = Array.prototype.slice.call(arguments);
            b.unshift(this, null);
            return w.apply(null, b)
        };
        Function.prototype.a3 = function(a) {
            z(this, a)
        };
        Function.prototype.A3 = function(a) {
            x(this.prototype, a)
        };

        function oa(a) {
            Error.captureStackTrace ? Error.captureStackTrace(this, oa) : this.stack = Error().stack || "";
            a && (this.message = String(a))
        }
        z(oa, Error);
        oa.prototype.name = "CustomError";

        function pa(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        }

        function qa(a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        }

        function ra(a, b) {
            if (b) return a.replace(sa, "&amp;").replace(ta, "&lt;").replace(ua, "&gt;").replace(va, "&quot;");
            if (!wa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(sa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(ta, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ua, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(va, "&quot;"));
            return a
        }
        var sa = /&/g,
            ta = /</g,
            ua = />/g,
            va = /\"/g,
            wa = /[&<>\"]/;

        function xa(a, b) {
            return -1 != a.indexOf(b)
        }

        function ya(a) {
            return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        }
        Math.random();

        function za(a) {
            return String(a).replace(/\-([a-z])/g, function(a, c) {
                return c.toUpperCase()
            })
        }

        function Aa(a, b) {
            var c = v(b) ? ya(b) : "\\s";
            return a.replace(RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])", "g"), function(a, b, c) {
                return b + c.toUpperCase()
            })
        };
        var A = Array.prototype,
            Ba = A.indexOf ? function(a, b, c) {
                return A.indexOf.call(a, b, c)
            } : function(a, b, c) {
                c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
                if (v(a)) return v(b) && 1 == b.length ? a.indexOf(b, c) : -1;
                for (; c < a.length; c++)
                    if (c in a && a[c] === b) return c;
                return -1
            },
            B = A.forEach ? function(a, b, c) {
                A.forEach.call(a, b, c)
            } : function(a, b, c) {
                for (var e = a.length, f = v(a) ? a.split("") : a, g = 0; g < e; g++) g in f && b.call(c, f[g], g, a)
            };

        function Ca(a, b, c) {
            for (var e = a.length, f = v(a) ? a.split("") : a, e = e - 1; 0 <= e; --e) e in f && b.call(c, f[e], e, a)
        }
        var Da = A.filter ? function(a, b, c) {
                return A.filter.call(a, b, c)
            } : function(a, b, c) {
                for (var e = a.length, f = [], g = 0, k = v(a) ? a.split("") : a, l = 0; l < e; l++)
                    if (l in k) {
                        var p = k[l];
                        b.call(c, p, l, a) && (f[g++] = p)
                    }
                return f
            },
            Ea = A.map ? function(a, b, c) {
                return A.map.call(a, b, c)
            } : function(a, b, c) {
                for (var e = a.length, f = Array(e), g = v(a) ? a.split("") : a, k = 0; k < e; k++) k in g && (f[k] = b.call(c, g[k], k, a));
                return f
            },
            Fa = A.some ? function(a, b, c) {
                return A.some.call(a, b, c)
            } : function(a, b, c) {
                for (var e = a.length, f = v(a) ? a.split("") : a, g = 0; g < e; g++)
                    if (g in f &&
                        b.call(c, f[g], g, a)) return !0;
                return !1
            },
            Ga = A.every ? function(a, b, c) {
                return A.every.call(a, b, c)
            } : function(a, b, c) {
                for (var e = a.length, f = v(a) ? a.split("") : a, g = 0; g < e; g++)
                    if (g in f && !b.call(c, f[g], g, a)) return !1;
                return !0
            };

        function Ha(a, b, c) {
            b = Ia(a, b, c);
            return 0 > b ? null : v(a) ? a.charAt(b) : a[b]
        }

        function Ia(a, b, c) {
            for (var e = a.length, f = v(a) ? a.split("") : a, g = 0; g < e; g++)
                if (g in f && b.call(c, f[g], g, a)) return g;
            return -1
        }

        function C(a, b) {
            return 0 <= Ba(a, b)
        }

        function Ja(a, b) {
            var c = Ba(a, b),
                e;
            (e = 0 <= c) && A.splice.call(a, c, 1);
            return e
        }

        function Ka(a) {
            return A.concat.apply(A, arguments)
        }

        function La(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), e = 0; e < b; e++) c[e] = a[e];
                return c
            }
            return []
        }

        function Ma(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var e = arguments[c],
                    f;
                if (u(e) || (f = ea(e)) && Object.prototype.hasOwnProperty.call(e, "callee")) a.push.apply(a, e);
                else if (f)
                    for (var g = a.length, k = e.length, l = 0; l < k; l++) a[g + l] = e[l];
                else a.push(e)
            }
        }

        function Na(a, b, c) {
            return 2 >= arguments.length ? A.slice.call(a, b) : A.slice.call(a, b, c)
        }

        function Oa(a) {
            for (var b = [], c = 0; c < arguments.length; c++) {
                var e = arguments[c];
                u(e) ? b.push.apply(b, Oa.apply(null, e)) : b.push(e)
            }
            return b
        };
        var Pa = "StopIteration" in h ? h.StopIteration : Error("StopIteration");

        function Qa() {}
        Qa.prototype.next = function() {
            throw Pa;
        };
        Qa.prototype.qb = function() {
            return this
        };

        function Ra(a) {
            if (a instanceof Qa) return a;
            if ("function" == typeof a.qb) return a.qb(!1);
            if (ea(a)) {
                var b = 0,
                    c = new Qa;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) throw Pa;
                        if (b in a) return a[b++];
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        }

        function Sa(a, b, c) {
            if (ea(a)) try {
                B(a, b, c)
            } catch (e) {
                if (e !== Pa) throw e;
            } else {
                a = Ra(a);
                try {
                    for (;;) b.call(c, a.next(), void 0, a)
                } catch (f) {
                    if (f !== Pa) throw f;
                }
            }
        }

        function Ta(a) {
            if (ea(a)) return La(a);
            a = Ra(a);
            var b = [];
            Sa(a, function(a) {
                b.push(a)
            });
            return b
        };

        function Ua(a, b, c) {
            for (var e in a) b.call(c, a[e], e, a)
        }

        function Va(a, b, c) {
            var e = {},
                f;
            for (f in a) e[f] = b.call(c, a[f], f, a);
            return e
        }

        function Wa(a, b, c) {
            for (var e in a)
                if (b.call(c, a[e], e, a)) return !0;
            return !1
        }

        function Xa(a) {
            var b = [],
                c = 0,
                e;
            for (e in a) b[c++] = a[e];
            return b
        }

        function Ya(a) {
            var b = [],
                c = 0,
                e;
            for (e in a) b[c++] = e;
            return b
        }

        function Za(a, b) {
            for (var c in a)
                if (a[c] == b) return !0;
            return !1
        }

        function $a(a) {
            for (var b in a) return !1;
            return !0
        }

        function ab(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        }

        function bb(a) {
            var b = {},
                c;
            for (c in a) b[a[c]] = c;
            return b
        }
        var cb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

        function db(a, b) {
            for (var c, e, f = 1; f < arguments.length; f++) {
                e = arguments[f];
                for (c in e) a[c] = e[c];
                for (var g = 0; g < cb.length; g++) c = cb[g], Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c])
            }
        };

        function eb(a, b) {
            this.Ma = {};
            this.R = [];
            var c = arguments.length;
            if (1 < c) {
                if (c % 2) throw Error("Uneven number of arguments");
                for (var e = 0; e < c; e += 2) this.tb(arguments[e], arguments[e + 1])
            } else a && this.iM(a)
        }
        d = eb.prototype;
        d.C = 0;
        d.pi = 0;
        d.O = function() {
            return this.C
        };
        d.ea = function() {
            this.cg();
            for (var a = [], b = 0; b < this.R.length; b++) a.push(this.Ma[this.R[b]]);
            return a
        };
        d.Ab = function() {
            this.cg();
            return this.R.concat()
        };
        d.xl = function(a) {
            return fb(this.Ma, a)
        };
        d.Ei = function(a) {
            for (var b = 0; b < this.R.length; b++) {
                var c = this.R[b];
                if (fb(this.Ma, c) && this.Ma[c] == a) return !0
            }
            return !1
        };
        d.equals = function(a, b) {
            if (this === a) return !0;
            if (this.C != a.O()) return !1;
            var c = b || gb;
            this.cg();
            for (var e, f = 0; e = this.R[f]; f++)
                if (!c(this.get(e), a.get(e))) return !1;
            return !0
        };

        function gb(a, b) {
            return a === b
        }
        d.va = function() {
            return 0 == this.C
        };
        d.clear = function() {
            this.Ma = {};
            this.pi = this.C = this.R.length = 0
        };
        d.remove = function(a) {
            return fb(this.Ma, a) ? (delete this.Ma[a], this.C--, this.pi++, this.R.length > 2 * this.C && this.cg(), !0) : !1
        };
        d.cg = function() {
            if (this.C != this.R.length) {
                for (var a = 0, b = 0; a < this.R.length;) {
                    var c = this.R[a];
                    fb(this.Ma, c) && (this.R[b++] = c);
                    a++
                }
                this.R.length = b
            }
            if (this.C != this.R.length) {
                for (var e = {}, b = a = 0; a < this.R.length;) c = this.R[a], fb(e, c) || (this.R[b++] = c, e[c] = 1), a++;
                this.R.length = b
            }
        };
        d.get = function(a, b) {
            return fb(this.Ma, a) ? this.Ma[a] : b
        };
        d.tb = function(a, b) {
            fb(this.Ma, a) || (this.C++, this.R.push(a), this.pi++);
            this.Ma[a] = b
        };
        d.iM = function(a) {
            var b;
            a instanceof eb ? (b = a.Ab(), a = a.ea()) : (b = Ya(a), a = Xa(a));
            for (var c = 0; c < b.length; c++) this.tb(b[c], a[c])
        };
        d.clone = function() {
            return new eb(this)
        };
        d.A4 = function() {
            for (var a = new eb, b = 0; b < this.R.length; b++) {
                var c = this.R[b];
                a.tb(this.Ma[c], c)
            }
            return a
        };
        d.sR = function() {
            this.cg();
            for (var a = {}, b = 0; b < this.R.length; b++) {
                var c = this.R[b];
                a[c] = this.Ma[c]
            }
            return a
        };
        d.w1 = function() {
            return this.qb(!0)
        };
        d.f2 = function() {
            return this.qb(!1)
        };
        d.qb = function(a) {
            this.cg();
            var b = 0,
                c = this.R,
                e = this.Ma,
                f = this.pi,
                g = this,
                k = new Qa;
            k.next = function() {
                for (;;) {
                    if (f != g.pi) throw Error("The map has changed since the iterator was created");
                    if (b >= c.length) throw Pa;
                    var k = c[b++];
                    return a ? k : e[k]
                }
            };
            return k
        };

        function fb(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        };

        function hb(a, b) {
            this.yi = a || null;
            this.Mp = !!b;
            this.Wc = new eb;
            this.S = new ib("", void 0);
            this.S.next = this.S.pb = this.S
        }
        d = hb.prototype;
        d.Gz = function(a) {
            (a = this.Wc.get(a)) && this.Mp && (a.remove(), this.lz(a));
            return a
        };
        d.get = function(a, b) {
            var c = this.Gz(a);
            return c ? c.value : b
        };
        d.E3 = function(a, b) {
            var c = this.Wc.get(a);
            return c ? c.value : b
        };
        d.kh = function(a, b) {
            var c = this.Gz(a);
            c ? c.value = b : (c = new ib(a, b), this.Wc.tb(a, c), this.lz(c))
        };
        d.C3 = function() {
            return this.S.next.value
        };
        d.D3 = function() {
            return this.S.pb.value
        };
        d.S2 = function() {
            return this.Wy(this.S.next)
        };
        d.R2 = function() {
            return this.Wy(this.S.pb)
        };
        d.remove = function(a) {
            return (a = this.Wc.get(a)) ? (this.iq(a), !0) : !1
        };
        d.iq = function(a) {
            a.remove();
            this.Wc.remove(a.key)
        };
        d.O = function() {
            return this.Wc.O()
        };
        d.va = function() {
            return this.Wc.va()
        };
        d.f4 = function(a) {
            this.yi = a || null;
            null != this.yi && this.Sq(this.yi)
        };
        d.Ab = function() {
            return this.map(function(a, b) {
                return b
            })
        };
        d.ea = function() {
            return this.map(function(a) {
                return a
            })
        };
        d.contains = function(a) {
            return this.some(function(b) {
                return b == a
            })
        };
        d.Q2 = function(a) {
            return this.Wc.xl(a)
        };
        d.clear = function() {
            this.Sq(0)
        };
        d.forEach = function(a, b) {
            for (var c = this.S.next; c != this.S; c = c.next) a.call(b, c.value, c.key, this)
        };
        d.map = function(a, b) {
            for (var c = [], e = this.S.next; e != this.S; e = e.next) c.push(a.call(b, e.value, e.key, this));
            return c
        };
        d.some = function(a, b) {
            for (var c = this.S.next; c != this.S; c = c.next)
                if (a.call(b, c.value, c.key, this)) return !0;
            return !1
        };
        d.every = function(a, b) {
            for (var c = this.S.next; c != this.S; c = c.next)
                if (!a.call(b, c.value, c.key, this)) return !1;
            return !0
        };
        d.lz = function(a) {
            this.Mp ? (a.next = this.S.next, a.pb = this.S, this.S.next = a, a.next.pb = a) : (a.pb = this.S.pb, a.next = this.S, this.S.pb = a, a.pb.next = a);
            null != this.yi && this.Sq(this.yi)
        };
        d.Sq = function(a) {
            for (var b = this.Wc.O(); b > a; b--) this.iq(this.Mp ? this.S.pb : this.S.next)
        };
        d.Wy = function(a) {
            this.S != a && this.iq(a);
            return a.value
        };

        function ib(a, b) {
            this.key = a;
            this.value = b
        }
        ib.prototype.remove = function() {
            this.pb.next = this.next;
            this.next.pb = this.pb;
            delete this.pb;
            delete this.next
        };

        function D() {
            this.handlers_ = new hb;
            this.kQ = 0
        }
        D.prototype.k = function(a, b) {
            var c = ++this.kQ,
                e = this.handlers_;
            e.kh(c.toString(), {
                PM: a,
                Wb: b
            });
            return function() {
                e.remove(c.toString())
            }
        };
        D.prototype.Aa = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            void 0 !== this.handlers_ && this.handlers_.ea().forEach(function(b) {
                b.PM === a && b.Wb.apply(this, c)
            }, this)
        };
        var jb = {
                HW: "branding",
                IW: "channel",
                LW: "channel_paid_info",
                r0: "video_like_value",
                k0: "subscription",
                p0: "video"
            },
            kb = {
                name: "ADJECTIVE_THUMBNAIL_QUALITY",
                id: 920505
            },
            lb = {
                name: "CHANNEL_BACKGROUND_IMAGE_LAUNCH",
                id: 912521
            },
            mb = {
                name: "DISABLE_QUICKSUGGEST",
                id: 927900
            },
            nb = {
                name: "POST_PLAY_LAUNCH",
                id: 912512
            },
            ob = {
                name: "PREVIEW_NEXT_VIDEO",
                id: 927901
            },
            pb = {
                name: "RELATED_SEARCH_RESULTS_HOLDBACK",
                id: 912519
            },
            qb = {
                name: "SUBSCRIBE_LAUNCH",
                id: 912515
            },
            rb = {
                name: "VIDEO_VERIFICATION_TOKENS",
                id: 932401
            },
            sb = {
                FW: kb,
                JW: {
                    name: "CHANNEL_BACKGROUND_IMAGE_HOLDBACK",
                    id: 912520
                },
                KW: lb,
                RW: mb,
                VW: {
                    name: "EVENT_SOUNDS_HOLDBACK",
                    id: 927905
                },
                WW: {
                    name: "EVENT_SOUNDS_LAUNCH",
                    id: 927906
                },
                $_: {
                    name: "POST_PLAY_HOLDBACK",
                    id: 912511
                },
                a0: nb,
                b0: ob,
                g0: pb,
                j0: qb,
                s0: rb
            },
            tb = "AE AR AU BE BR CA CL CO CZ DE EG ES FR GB HK HU ID IE IL IN IT JO JP KR MA MX MY NL NZ PE PH PL RU SA SE SG TW ZA".split(" "),
            ub = ["\u309b", "\u309c", "\u5c0f"],
            vb = {
                "\u3042": ["\u3044", "\u3046", "\u3048", "\u304a"],
                "\u304b": ["\u304d", "\u304f", "\u3051", "\u3053"],
                "\u3055": ["\u3057", "\u3059", "\u305b", "\u305d"],
                "\u305f": ["\u3061",
                    "\u3064", "\u3066", "\u3068"
                ],
                "\u306a": ["\u306b", "\u306c", "\u306d", "\u306e"],
                "\u306f": ["\u3072", "\u3075", "\u3078", "\u307b"],
                "\u307e": ["\u307f", "\u3080", "\u3081", "\u3082"],
                "\u3084": ["\u3086", "\u3088"],
                "\u3089": ["\u308a", "\u308b", "\u308c", "\u308d"],
                "\u308f": ["\u3092", "\u3093"],
                "\u309b": ["\u309c", "\u5c0f", "\u30fc"]
            },
            wb = {
                "\u3131": ["\u3132"],
                "\u3137": ["\u3138"],
                "\u3142": ["\u3143"],
                "\u3145": ["\u3146"],
                "\u3148": ["\u3149"]
            },
            xb = {
                "\u3131": "\u1100",
                "\u3132": "\u1101",
                "\u3134": "\u1102",
                "\u3137": "\u1103",
                "\u3138": "\u1104",
                "\u314f": "\u1161",
                "\u3153": "\u1165",
                "\u3157": "\u1169",
                "\u3139": "\u1105",
                "\u3141": "\u1106",
                "\u3142": "\u1107",
                "\u3143": "\u1108",
                "\u3145": "\u1109",
                "\u3151": "\u1163",
                "\u3155": "\u1167",
                "\u315b": "\u116d",
                "\u3146": "\u110a",
                "\u3147": "\u110b",
                "\u3148": "\u110c",
                "\u3149": "\u110d",
                "\u314a": "\u110e",
                "\u3161": "\u1173",
                "\u3163": "\u1175",
                "\u315c": "\u116e",
                "\u314b": "\u110f",
                "\u314c": "\u1110",
                "\u314d": "\u1111",
                "\u314e": "\u1112",
                "\u3150": "\u1162",
                "\u3154": "\u1166",
                "\u3160": "\u1172",
                "\u3152": "\u1164",
                "\u3156": "\u1168"
            },
            yb = {
                "\u5c0f": {
                    "\u3042": "\u3041",
                    "\u3041": "\u3042",
                    "\u3044": "\u3043",
                    "\u3043": "\u3044",
                    "\u3048": "\u3047",
                    "\u3047": "\u3048",
                    "\u304a": "\u3049",
                    "\u3049": "\u304a",
                    "\u3084": "\u3083",
                    "\u3083": "\u3084",
                    "\u3086": "\u3085",
                    "\u3085": "\u3086",
                    "\u3088": "\u3087",
                    "\u3087": "\u3088",
                    "\u308f": "\u308e",
                    "\u308e": "\u308f",
                    "\u304b": "\u3095",
                    "\u3095": "\u304b",
                    "\u304c": "\u3095",
                    "\u3051": "\u3096",
                    "\u3096": "\u3051",
                    "\u3052": "\u3096",
                    "\u3064": "\u3063",
                    "\u3063": "\u3064",
                    "\u3065": "\u3063",
                    "\u3046": "\u3045",
                    "\u3045": "\u3046",
                    "\u3094": "\u3045"
                },
                "\u309b": {
                    "\u304d": "\u304e",
                    "\u304e": "\u304d",
                    "\u304f": "\u3050",
                    "\u3050": "\u304f",
                    "\u3053": "\u3054",
                    "\u3054": "\u3053",
                    "\u3055": "\u3056",
                    "\u3056": "\u3055",
                    "\u3057": "\u3058",
                    "\u3058": "\u3057",
                    "\u3059": "\u305a",
                    "\u305a": "\u3059",
                    "\u305b": "\u305c",
                    "\u305c": "\u305b",
                    "\u305d": "\u305e",
                    "\u305e": "\u305d",
                    "\u305f": "\u3060",
                    "\u3060": "\u305f",
                    "\u3061": "\u3062",
                    "\u3062": "\u3061",
                    "\u3066": "\u3067",
                    "\u3067": "\u3066",
                    "\u3068": "\u3069",
                    "\u3069": "\u3068",
                    "\u304b": "\u304c",
                    "\u304c": "\u304b",
                    "\u3095": "\u304c",
                    "\u3051": "\u3052",
                    "\u3052": "\u3051",
                    "\u3096": "\u3052",
                    "\u3064": "\u3065",
                    "\u3065": "\u3064",
                    "\u3063": "\u3065",
                    "\u3046": "\u3094",
                    "\u3045": "\u3094",
                    "\u3094": "\u3046",
                    "\u3071": "\u3070",
                    "\u3070": "\u306f",
                    "\u306f": "\u3070",
                    "\u3074": "\u3073",
                    "\u3073": "\u3072",
                    "\u3072": "\u3073",
                    "\u3077": "\u3076",
                    "\u3076": "\u3075",
                    "\u3075": "\u3076",
                    "\u307a": "\u3079",
                    "\u3079": "\u3078",
                    "\u3078": "\u3079",
                    "\u307d": "\u307c",
                    "\u307c": "\u307b",
                    "\u307b": "\u307c"
                },
                "\u309c": {
                    "\u306f": "\u3071",
                    "\u3071": "\u306f",
                    "\u3070": "\u3071",
                    "\u3072": "\u3074",
                    "\u3074": "\u3072",
                    "\u3073": "\u3074",
                    "\u3075": "\u3077",
                    "\u3077": "\u3075",
                    "\u3076": "\u3077",
                    "\u3078": "\u307a",
                    "\u307a": "\u3078",
                    "\u3079": "\u307a",
                    "\u307b": "\u307d",
                    "\u307d": "\u307b",
                    "\u307c": "\u307d"
                }
            },
            zb = /lang-\w+/,
            Ab = {
                MW: "zh_CN",
                XX: "zh_HK",
                SY: "ja_JP",
                U_: "ko_KR",
                kU: "nb_NO",
                h0: "ru_RU",
                m0: "zh_TW",
                n0: "uk_UA"
            },
            Bb = "af_ZA am_ET bg_BG bn_BD ca_ES cs_CZ da_DK de_DE el_GR en_US en_GB es_ES es_MX et_EE eu_ES fa_IR fi_FI fil_PH fr_FR fr_CA gl_ES gu_IN hi_IN hr_HR hu_HU id_ID is_IS it_IT ja_JP kn_IN ko_KR lt_LT lv_LV ml_IN mr_IN ms_MY nb_NO nl_NL pl_PL pt_PT pt_BR ro_RO ru_RU sk_SK sl_SI sr_RS sv_SE sw_TZ ta_IN te_IN th_TH tr_TR uk_UA ur_PK vi_VN zh_CN zh_HK zh_TW zu_ZA".split(" "),
            Cb = {
                kU: ["no_NO"]
            },
            Db = {
                jU: 3,
                ENDED: 0,
                ERROR: -1E3,
                mU: 2,
                nU: 1,
                pU: -1,
                q0: 5
            };
        m("yt.tv.constants.PlayerState", Db, void 0);
        var Eb = {
                EN: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                KO: "\u3131\u3134\u3137\u3139\u3141\u3142\u3145\u3147\u3148\u314a\u314b\u314c\u314d\u314e\n\u314f\u3151\u3153\u3155\u3157\u315b\u315c\u3160\u3161\u3163\u3150\u3152\u3154\u3156",
                RU: "\u0410\u0411\u0412\u0413\u0414\u0415\u0401\u0416\u0417\u0418\u0419\u041a\u041b\u041c\u041d\u041e\u041f\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042a\u042b\u042c\u042d\u042e\u042f",
                JP: "\u3042\u304b\u3055\u305f\u306a\u306f\u307e\u3084\u3089\u308f\u309b",
                NUMBERS: "1234567890_"
            },
            Fb = {
                WX: "HL",
                d0: "RC",
                i0: "SU",
                t0: "WL"
            },
            Gb = {
                "default": [0, 854],
                mqdefault: [855, 1366],
                hqdefault: [1367, 1920],
                sddefault: [1921, Number.MAX_VALUE]
            },
            Hb = {
                Sh: "icon-player-closedcaptions",
                QW: "disabled-button",
                Uh: "icon-dislike",
                SW: "icon-dislike-checked",
                Wk: "icon-player-ff",
                ql: "icon-flag",
                Vh: "icon-like",
                V_: "icon-like-checked",
                vv: "icon-player-pause",
                yI: "icon-player-play",
                Z_: "play-button",
                Xk: "icon-player-rew",
                Qq: "icon-search",
                al: "icon-subscribe",
                o0: "icon-unsubscribe"
            },
            Ib = {
                Sh: "transport-closed-captions-button",
                nf: "player-controls",
                Uh: "transport-dislike-button",
                Wk: "transport-ff-button",
                ql: "transport-flag-button",
                Vh: "transport-like-button",
                Y_: "player-controls",
                wv: "transport-playpause-button",
                cx: "progress-bar",
                Xk: "transport-rw-button",
                Qq: "transport-search-button",
                al: "transport-subscribe-button"
            },
            Jb = {
                FRIEND_ADDED: "[[{{username}} added a friend|The message that describes user activity. Displayed when a user has added a friend.]]",
                USER_SUBSCRIPTION_ADDED: "[[{{username}} added a subscription|The message that describes user activity. Displayed when a user subscribed to a channel.]]",
                VIDEO_ADDED_TO_LEGO: "[[{{username}} added a video|The message that describes user activity. Displayed when a user added a video to a playlist.]]",
                VIDEO_ADDED_TO_PLAYLIST: "[[{{username}} added a video to a playlist|The message that describes user activity. Displayed when a user added a video to a playlist.]]",
                VIDEO_COMMENTED: "[[{{username}} commented a video|The message that describes user activity. Displayed when a user has commented on a video.]]",
                VIDEO_FAVORITED: "[[{{username}} favorited a video|The message that describes user activity. Displayed when a user has favorited a video.]]",
                VIDEO_RATED: "[[{{username}} rated a video|The message that describes user activity. Displayed when a user has rated a video.]]",
                VIDEO_RECOMMENDED: "[[video recommended|The message that describes that a video has been recommended.]]",
                VIDEO_SHARED: "[[{{username}} shared a video|The message that describes user activity. Displayed when a user has shared a video.]]",
                VIDEO_UPLOADED: "[[{{username}} uploaded a video|The message that describes user activity. Displayed when a user has uploaded a video.]]"
            };

        function Kb() {
            D.call(this);
            this.wW = 150;
            this.tW = 75;
            this.xW = 20;
            this.clear()
        }
        z(Kb, D);
        d = Kb.prototype;
        d.start = function(a, b) {
            this.clear();
            b || (this.qm = a);
            this.sr(a)
        };
        d.NI = function(a) {
            this.sr(a)
        };
        d.end = function(a) {
            this.qm ? 150 >= a.timeStamp - this.qm.timeStamp && this.Aa("tap", a) : this.sr(a);
            this.clear();
            this.qm = null
        };
        d.clear = function() {
            this.nz = 0;
            this.Cr = NaN;
            this.vm = null
        };
        d.Mi = function(a) {
            return isNaN(this.Cr) ? !0 : 20 >= Math.abs(this.Cr - a)
        };
        d.sr = function(a) {
            var b = a && a.changedTouches && a.changedTouches[0] ? a.changedTouches[0] : a,
                b = {
                    x: b.screenX,
                    y: b.screenY
                };
            this.vm || (this.vm = b);
            this.nz = this.FQ(this.vm, b);
            b = this.EQ(this.vm, b);
            this.LQ(a);
            this.Cr = b
        };
        d.LQ = function(a) {
            75 <= this.nz && (this.Mi(90) ? this.zm("swiperight", a) : this.Mi(-90) ? this.zm("swipeleft", a) : this.Mi(0) ? this.zm("swipedown", a) : (this.Mi(180) || this.Mi(-180)) && this.zm("swipeup", a))
        };
        d.zm = function(a, b) {
            this.Aa(a, this.qm);
            this.clear();
            this.start(b, !0)
        };
        d.FQ = function(a, b) {
            var c = this.nB(a, b);
            return Math.round(Math.sqrt(c.x * c.x + c.y * c.y))
        };
        d.nB = function(a, b) {
            return a && b ? {
                x: b.x - a.x,
                y: b.y - a.y
            } : {
                x: 0,
                y: 0
            }
        };
        d.EQ = function(a, b) {
            if (a && b) {
                var c = this.nB(a, b);
                return Math.round(180 * Math.atan2(c.x, c.y) / Math.PI)
            }
            return NaN
        };

        function E(a, b, c) {
            this.vP = c;
            this.Ii = null;
            this.IN = a;
            this.keyCode = b;
            this.rr = 500;
            this.pm = !1
        }
        E.prototype.Ci = function() {
            this.pm || (this.pm = !0);
            var a = new Date,
                b = a - this.Ii;
            if (!this.Ii || b > this.rr) this.Ii && (this.rr = 100), this.Ii = a, this.iA("keydown", this.keyCode)
        };
        E.prototype.Di = function() {
            this.pm && (this.pm = !1, this.Ii = null, this.rr = 500, this.iA("keyup", this.keyCode))
        };
        E.prototype.iA = function(a, b) {
            var c = this.vP.Be();
            c && c.$emit(a, b)
        };

        function Lb(a) {
            var b = angular.element(a),
                c = !1,
                e = 0;
            b.bind("mousedown", function(a) {
                c = !0;
                e = a.pageY;
                a.stopPropagation();
                a.preventDefault()
            });
            b.bind("mouseup", function() {
                c = !1;
                e = NaN
            });
            b.bind("mousemove", function(b) {
                if (c) {
                    var g = Math.min(a.scrollHeight, Math.max(0, a.scrollTop + (e - b.pageY)));
                    a.scrollTop = g;
                    b.stopPropagation();
                    b.preventDefault()
                }
            });
            return !0
        };

        function Mb(a, b) {
            this.tz = a;
            this.rz = new E(-1, 37, b);
            this.sz = new E(-1, 39, b);
            this.uz = new E(-1, 38, b);
            this.oz = new E(-1, 40, b)
        }
        Mb.prototype.PQ = function() {
            var a = this.tz.movementX,
                b = this.tz.movementY; - 0.5 > a ? this.rz.Ci() : this.rz.Di();
            0.5 < a ? this.sz.Ci() : this.sz.Di(); - 0.5 > b ? this.uz.Ci() : this.uz.Di();
            0.5 < b ? this.oz.Ci() : this.oz.Di()
        };

        function Nb(a) {
            this.ec = a
        }
        Nb.prototype.Rd = function() {
            console.error("Migration.upgrade() should be overriden!")
        };

        function Ob(a) {
            this.ec = a
        }
        z(Ob, Nb);
        Ob.prototype.Rd = function() {};

        function Pb(a) {
            this.ec = a
        }
        z(Pb, Nb);
        Pb.prototype.Rd = function() {};

        function Qb(a) {
            this.ec = a
        }
        z(Qb, Nb);
        Qb.prototype.Rd = function() {};

        function Rb(a) {
            this.ec = a
        }
        z(Rb, Nb);
        Rb.prototype.Rd = function() {};

        function Sb(a) {
            this.ec = a
        }
        z(Sb, Nb);
        Sb.prototype.Rd = function() {
            for (var a = ["crash-count", "device-statistics", "activity-path", "spinner_log"], b = {}, c = a.length, e = 0; e < c; e++) b[a[e]] = this.ec.get(a[e]);
            this.ec.sb("private_data", b)
        };

        function Tb(a) {
            this.ec = a
        }
        z(Tb, Nb);
        Tb.prototype.Rd = function() {};

        function Ub(a) {
            this.ec = a
        }
        z(Ub, Nb);
        Ub.prototype.Rd = function() {
            var a = this.ec.get("private_data");
            if (a && a["crash-count"]) {
                var b = {
                    startup: 0
                };
                b["crash-count"] = a["crash-count"];
                a["crash-data"] = b;
                delete a["crash-count"];
                this.ec.sb("private_data", a)
            }
        };

        function F(a, b) {
            this.YV = this.templateUrl = this.title = this.className = "";
            this.Qs = !0;
            this.Jh = !1;
            this.Yx = a || n;
            this.yz = b || n;
            this.Ft = "[[OK|Standard button title in a dialog popup. Accepts changes made by a user.]]";
            this.Et = "[[Cancel|Standard button title in a dialog popup. Usually closes the dialog without performing any action.]]"
        };

        function Vb(a) {
            F.call(this, a, a);
            this.className = "no-app-background call-to-cast-background";
            this.widgetName = "yt:calltocast"
        }
        z(Vb, F);

        function Wb(a, b) {
            F.call(this, a, b);
            this.title = "[[Captions Settings|Settings screen where the user can choose the language of subtitles or turn them off.]]";
            this.widgetName = "yt:closedcaptions"
        }
        z(Wb, F);

        function Xb(a) {
            F.call(this);
            this.title = "Debug Info";
            this.templateUrl = H.b + "/dialogs/debug_info.html";
            this.className = "text-dialog";
            this.iu = a.XG()
        }
        z(Xb, F);

        function Yb(a, b) {
            F.call(this, null, b);
            this.title = "[[Submit a claim for:|Displayed in a dialog when a user decides to claim that a video infringes copyrights. Followed by a list of options.]]";
            this.templateUrl = H.b + "/dialogs/flag_claim.html";
            this.video = a;
            this.Zn = "youtu.be/" + this.video.videoId
        }
        z(Yb, F);

        function Zb() {
            F.call(this);
            this.title = "[[Flag This Video For:|Displayed in a dialog when a user decides to claim that a video is inappropriate. Followed by a list of options.]]";
            this.widgetName = "yt:flagoptions"
        }
        z(Zb, F);

        function $b(a, b) {
            F.call(this, null, b);
            this.title = "[[To Flag this video|Tooltip helping a user to mark a video as inappropriate. Followed by a list of steps that needs to be performed.]]";
            this.templateUrl = H.b + "/dialogs/flag_video.html";
            this.video = a;
            this.Zn = "youtu.be/" + this.video.videoId
        }
        z(Yb, F);

        function ac(a, b, c) {
            F.call(this, a, c);
            this.title = b || "[[Sign in to YouTube:|Dialog title helping a user to sign in to YouTube via this application.|12570103]]";
            this.widgetName = "yt:logininfo"
        }
        z(ac, F);

        function bc() {
            this.sO = this.El = this.dx = this.Vk = this.Dq = "";
            this.Kv = !1
        }
        bc.CACHE_TYPE = "branding";

        function cc(a, b) {
            this.imageUrl = "";
            this.Ia = a;
            this.serviceQuery = b;
            this.displayName = this.videoId = this.title = "";
            this.HV = null;
            this.IV = "";
            this.jL = 0;
            this.id = this.ua = this.ke = this.JV = "";
            this.viewCount = this.KV = 0;
            this.bp = new bc;
            this.Kb = !1
        }
        cc.CACHE_TYPE = "channel";

        function dc(a, b) {
            F.call(this, b);
            this.title = "[[Sign Out?|Dialog title asking a user if she wants to sign out from her YouTube account via this application.]]";
            this.templateUrl = H.b + "/dialogs/logout_info.html";
            this.Jh = !0;
            this.xf = a
        }
        z(dc, F);

        function ec(a, b, c) {
            F.call(this, b, c);
            this.title = "[[Payment Required|Title of a dialog that asks user to make a payment in order to play a video.]]";
            this.templateUrl = H.b + "/dialogs/paid_channel_info.html";
            this.dH = a
        }
        z(ec, F);
        ec.prototype.aI = function() {
            return "www.youtube.com/channels/" + this.dH
        };

        function fc(a, b, c) {
            F.call(this, b, c);
            this.title = "[[Playback Error.|Tooltip displayed when a video cannot be played.]]";
            this.templateUrl = H.b + "/dialogs/player_error_info.html";
            this.Jh = !0;
            this.className = "player-error-dialog";
            this.Ft = "[[Next Video|Button title in a dialog popup. Proceeds playback to the next video.]]";
            this.Et = "[[Back to Guide|Button title in a dialog popup. Navigates back to the main Guide page.]]";
            this.FG = a
        }
        z(fc, F);
        fc.prototype.uH = function() {
            return this.FG
        };

        function gc() {
            F.call(this);
            this.title = "[[Pair your mobile or tablet device...|Tooltip helping a user to connect their mobile device with the application.]]";
            this.widgetName = "yt:pair";
            this.type = "remote-pair"
        }
        z(gc, F);

        function hc(a) {
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        }

        function ic(a) {
            return eval("(" + a + ")")
        }

        function I(a, b) {
            return (new jc(b)).Er(a)
        }

        function jc(a) {
            this.Cm = a
        }
        jc.prototype.Er = function(a) {
            var b = [];
            this.Qr(a, b);
            return b.join("")
        };
        jc.prototype.Qr = function(a, b) {
            switch (typeof a) {
                case "string":
                    this.mA(a, b);
                    break;
                case "number":
                    this.CS(a, b);
                    break;
                case "boolean":
                    b.push(a);
                    break;
                case "undefined":
                    b.push("null");
                    break;
                case "object":
                    if (null == a) {
                        b.push("null");
                        break
                    }
                    if (u(a)) {
                        this.BS(a, b);
                        break
                    }
                    this.DS(a, b);
                    break;
                case "function":
                    break;
                default:
                    throw Error("Unknown type: " + typeof a);
            }
        };
        var kc = {
                '"': '\\"',
                "\\": "\\\\",
                "/": "\\/",
                "\b": "\\b",
                "\f": "\\f",
                "\n": "\\n",
                "\r": "\\r",
                "\t": "\\t",
                "\x0B": "\\u000b"
            },
            lc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
        jc.prototype.mA = function(a, b) {
            b.push('"', a.replace(lc, function(a) {
                if (a in kc) return kc[a];
                var b = a.charCodeAt(0),
                    f = "\\u";
                16 > b ? f += "000" : 256 > b ? f += "00" : 4096 > b && (f += "0");
                return kc[a] = f + b.toString(16)
            }), '"')
        };
        jc.prototype.CS = function(a, b) {
            b.push(isFinite(a) && !isNaN(a) ? a : "null")
        };
        jc.prototype.BS = function(a, b) {
            var c = a.length;
            b.push("[");
            for (var e = "", f = 0; f < c; f++) b.push(e), e = a[f], this.Qr(this.Cm ? this.Cm.call(a, String(f), e) : e, b), e = ",";
            b.push("]")
        };
        jc.prototype.DS = function(a, b) {
            b.push("{");
            var c = "",
                e;
            for (e in a)
                if (Object.prototype.hasOwnProperty.call(a, e)) {
                    var f = a[e];
                    "function" != typeof f && (b.push(c), this.mA(e, b), b.push(":"), this.Qr(this.Cm ? this.Cm.call(a, e, f) : f, b), c = ",")
                }
            b.push("}")
        };

        function mc(a) {
            a && (this.id = a.id || a.name, this.name = a.name, this.sd = a.app, this.type = a.type || "REMOTE_CONTROL", this.ua = a.user || "")
        }
        d = mc.prototype;
        d.id = "";
        d.name = "";
        d.sd = "";
        d.type = "REMOTE_CONTROL";
        d.ua = "";
        d.ye = !1;
        d.$w = function() {
            return {
                id: this.id,
                name: this.name,
                app: this.sd,
                type: this.type,
                user: this.ua
            }
        };
        d.equals = function(a) {
            return a ? this.id == a.id : !1
        };

        function nc(a) {
            D.call(this);
            this.length = 0;
            this.U = [];
            a && this.push(a)
        }
        z(nc, D);
        d = nc.prototype;
        d.push = function(a) {
            this.mB("push", a)
        };
        d.gf = function(a) {
            this.mB("unshift", a)
        };
        d.J = function() {
            return this.U
        };
        d.ha = function(a) {
            return this.U[a]
        };
        d.Mg = function(a) {
            this.U = a.slice();
            this.length = a.length;
            this.Fi(this.U)
        };
        d.c4 = function(a, b) {
            this.U[a] = b;
            this.length = this.U.length;
            this.Fi(b)
        };
        d.r = function() {
            return this.length
        };
        d.slice = function(a, b) {
            var c;
            switch (arguments.length) {
                case 0:
                    c = this.U.slice();
                    break;
                case 1:
                    c = this.U.slice(a);
                    break;
                case 2:
                    c = this.U.slice(a, b)
            }
            return new nc(c)
        };
        d.splice = function(a, b, c) {
            var e;
            switch (arguments.length) {
                case 0:
                    e = this.U.splice();
                    break;
                case 1:
                    e = this.U.splice(a);
                    break;
                case 2:
                    e = this.U.splice(a, b);
                    break;
                default:
                    e = this.U.splice.apply(this.U, arguments)
            }
            this.length = this.U.length;
            this.Fi(this.U);
            return new nc(e)
        };
        d.clear = function() {
            this.length = this.U.length = 0;
            this.Fi()
        };
        d.JJ = function(a) {
            function b(a, b) {
                return a - b
            }
            this.U.sort(a || b);
            return this
        };
        d.Fi = function(a) {
            this.Aa("items:changed", a)
        };
        d.mB = function(a, b) {
            var c = u(b) ? b : [b],
                e = c.length;
            0 < e && (this.U[a].apply(this.U, c), this.length += e, this.Fi(b))
        };
        nc.$inject = ["opt_value"];

        function pc(a, b) {
            F.call(this, b);
            this.title = "[[Remove Paired Devices?|Dialog title asking a user for a confirmation to disconnect any mobile devices paired with the application]]";
            this.templateUrl = H.b + "/dialogs/remote_reset_info.html";
            this.Jh = !0;
            this.className = "remote-reset-dialog";
            this.type = "remote-reset";
            this.MG = a
        }
        z(pc, F);
        pc.prototype.mk = function() {
            return this.MG.Qn()
        };

        function qc(a, b) {
            F.call(this);
            this.templateUrl = H.b + "/dialogs/scrollable_dialog.html";
            this.title = a || "";
            this.contentUrl = b || ""
        }
        z(qc, F);

        function rc(a) {
            F.call(this, a);
            this.title = "[[Signed Out|Dialog title that informs the user that they are signed out of the application]]";
            this.templateUrl = H.b + "/dialogs/signed_out_info.html";
            this.Jh = !0;
            this.className = "text-dialog"
        }
        z(rc, F);

        function sc(a, b, c, e, f, g) {
            F.call(this, e, f);
            this.Qs = s(g) ? g : !0;
            this.templateUrl = H.b + "/dialogs/simple_dialog.html";
            this.title = a || "";
            this.contentUrl = b || "";
            this.className = c || "text-dialog"
        }
        z(sc, F);

        function tc(a, b, c) {
            this.templateUrl = a;
            this.bu = b;
            this.ya = c
        };

        function uc(a, b) {
            for (var c = b.length, e = 0; e < c; ++e) {
                var f = a,
                    g = b[e];
                vc(f, g);
                wc(f, g)
            }
        }

        function vc(a, b) {
            xc(b);
            a.prototype.__defineGetter__(b, function() {
                return this[b + "_"]
            })
        }

        function wc(a, b) {
            xc(b);
            var c = b + "_";
            a.prototype.__defineSetter__(b, function(a) {
                if (a !== this[c]) {
                    var f = this[c];
                    this[c] = a;
                    this.Aa && ga(this.Aa) && this.Aa(b + ":changed", a, f)
                }
            })
        }

        function xc(a) {
            if (!a.match(/^[a-zA-Z]+$/)) throw "Invalid property name";
        };

        function yc(a, b) {
            nc.call(this);
            this.xk = a;
            this.Yh = {};
            b && this.push(b)
        }
        z(yc, nc);
        d = yc.prototype;
        d.clear = function() {
            this.Yh = {};
            yc.f.clear.call(this)
        };
        d.slice = function(a, b) {
            return new yc(this.xk, yc.f.slice.call(this, a, b).J())
        };
        d.push = function(a) {
            yc.f.push.call(this, this.Lw(a))
        };
        d.gf = function(a) {
            yc.f.gf.call(this, this.Lw(a, !0))
        };
        d.Lw = function(a, b) {
            return (u(a) ? a : [a]).filter(b ? this.aU : this.ZT, this)
        };
        d.ZT = function(a) {
            if ((a = a && a[this.xk]) && this.Yh[a]) return !1;
            a && (this.Yh[a] = !0);
            return !0
        };
        d.aU = function(a) {
            if (a = a && a[this.xk]) {
                if (this.Yh[a]) {
                    var b = this.bO(a);
                    if (0 > b) return !1;
                    this.U.splice(b, 1);
                    this.length = this.U.length
                }
                this.Yh[a] = !0
            }
            return !0
        };
        d.bO = function(a) {
            for (var b = 0; b < this.r(); ++b)
                if (this.U[b][this.xk] === a) return b;
            return -1
        };

        function J() {
            this.title = this.serviceQuery = this.Ia = this.eb = "";
            this.dh = 0;
            this.i = new yc("videoId")
        }
        J.prototype.r = function() {
            return this.i.r()
        };
        J.prototype.clone = function() {
            var a = new J;
            a.eb = this.eb;
            a.Ia = this.Ia;
            a.serviceQuery = this.serviceQuery;
            a.title = this.title;
            a.dh = this.dh;
            a.i = this.i.slice(0, this.i.r());
            return a
        };

        function zc() {
            D.call(this);
            this.model = new J;
            this.service = null;
            this.wi = this.activeIndex = 0;
            this.Nf = {};
            this.widgetName = "videotile"
        }
        z(zc, D);
        uc(zc, ["activeIndex", "model"]);

        function Ac(a, b, c, e, f, g) {
            var k = new zc;
            Bc(k, a, b, c, e, f, g);
            return k
        }

        function Bc(a, b, c, e, f, g, k) {
            a.service = b;
            a.model.title = c || "";
            a.model.Ja = e;
            a.model.serviceQuery = f || "";
            a.Nf = g || {};
            a.widgetName = k || a.widgetName;
            return a
        }
        d = zc.prototype;
        d.r = function() {
            return this.model ? this.model.i.r() : 0
        };
        d.wO = function(a) {
            this.model.serviceQuery = a.model.serviceQuery;
            this.model.Ia = a.model.Ia;
            this.model.title = a.model.title;
            this.model.Ja = a.model.Ja;
            this.service = a.service;
            this.Nf = a.Nf;
            this.widgetName = a.widgetName;
            return this
        };
        d.equals = function(a) {
            return !!(a && a.model && this.model && a.model.r() === this.model.r() && a.model.serviceQuery === this.model.serviceQuery && a.model.title === this.model.title)
        };
        d.af = function() {
            return this.ha(this.activeIndex)
        };
        d.load = function(a, b) {
            var c = {
                query: this.model.serviceQuery
            };
            angular.extend(c, this.Nf);
            b && this.service.pc && this.service.pc("start_browse", "fr_rq", "fr_rs", "fr_r");
            this.service.load(c, w(function(b) {
                this.clear();
                this.model.i.push(b.i.J());
                a && a(b)
            }, this))
        };
        d.clear = function() {
            this.model.i.clear()
        };
        d.ha = function(a) {
            return this.model && this.model.i ? this.model.i.ha(a) : null
        };
        d.Cp = function(a, b) {
            var c = -1;
            this.model && this.model.i && this.model.i.J().some(function(e, f) {
                if (e[a] === b) return c = f, !0
            });
            return c
        };
        d.qv = function() {
            return this.model.i
        };
        d.Dp = function(a) {
            this.wi += a
        };
        d.ol = function() {
            return !1
        };
        d.xa = function(a) {
            this.activeIndex = a
        };

        function Cc() {
            this.rows = [];
            this.Da = 0
        }
        d = Cc.prototype;
        d.lh = function() {
            return this.rows ? this.rows[this.Da] : null
        };
        d.vd = function() {
            return this.rows
        };
        d.r = function() {
            return this.rows.length
        };
        d.DK = function(a) {
            this.rows.push(a)
        };
        d.clear = function() {
            this.rows.length = 0
        };
        d.wG = function(a) {
            for (var b = this.r(), c = 0; c < b; ++c)
                if (a === this.rows[c].model.title) return c;
            return -1
        };

        function Dc() {
            this.Za = [];
            this.vz = !0;
            this.numLoadedPages = 0;
            zc.call(this)
        }
        z(Dc, zc);
        uc(Dc, ["numLoadedPages"]);

        function Ec(a, b, c, e, f, g) {
            var k = new Dc;
            Bc(k, a, b, c, e, f, g);
            return k
        }
        d = Dc.prototype;
        d.clear = function() {
            0 !== this.model.i.r() && (this.eH(), this.Za.forEach(function(a) {
                a.Pc = null
            }, this), zc.prototype.clear.call(this), this.numLoadedPages = 0)
        };
        d.eH = function() {
            for (var a = this.Ek() - 2; 0 <= a; --a) this.Za[a].Pc && (this.activeIndex -= this.Za[a].Bk)
        };
        d.Zu = function(a) {
            return a.every(function(a) {
                a = this.Za[a.index];
                return !(!a || !a.Pc || a.error)
            }, this)
        };
        d.load = function(a, b) {
            var c = this.GO();
            if (this.Zu(c)) a && a();
            else {
                var e, f = b;
                c.forEach(function(b) {
                    (e = this.Za[b.index]) && e.Pc && !e.error || this.HO(b, c, a, f);
                    f && (f = void 0)
                }, this)
            }
        };
        d.HO = function(a, b, c, e) {
            var f = {
                query: this.model.serviceQuery
            };
            f["start-index"] = 25 * a.index + 1;
            f["max-results"] = 25;
            angular.extend(f, this.Nf);
            e && this.service.pc && this.service.pc("start_browse", "fr_rq", "fr_rs", "fr_r");
            this.service.load(f, w(this.Ak, this, a, b, c), w(this.TP, this, a, b, c))
        };
        d.Ak = function(a, b, c, e) {
            a.Pc = e;
            a.Bk = e.i.r();
            this.Za[a.index] = a;
            a.error = !1;
            if (this.Zu(b)) {
                var f = this.model.i;
                if (0 === f.r()) b.forEach(function(a) {
                    f.push(this.Za[a.index].Pc.i.J())
                }, this);
                else {
                    var g = this.Ek();
                    b.forEach(function(a) {
                        a = this.Za[a.index];
                        a.index >= g ? f.push(a.Pc.i.J()) : (f.gf(a.Pc.i.J()), this.activeIndex += a.Bk)
                    }, this)
                }
                this.numLoadedPages += b.length;
                c()
            }
        };
        d.TP = function(a, b, c) {
            this.Ak(a, b, c, new J);
            this.Za[a.index].error = !0;
            b.some(function(a) {
                return this.Za[a.index].error
            }, this) && c()
        };
        d.Ek = function() {
            if (0 === this.wi) return 0;
            for (var a = 0, b = this.Za.length, c, e = 0; e < b; ++e)
                if (c = this.Za[e])
                    if (a += c.Bk, this.wi < a) return c.index;
            return 0
        };
        d.d1 = function() {
            return this.Za[this.Ek()]
        };
        d.GO = function() {
            var a = this.vz ? [this.wm()] : [this.wm(-1), this.wm(), this.wm(1)];
            this.vz = !1;
            return a.filter(function(a) {
                return 0 <= a.index && (a.error || !a.Pc)
            })
        };
        d.wm = function(a) {
            a = a || 0;
            a = this.Ek() + a;
            var b = this.Za[a];
            return b ? b : {
                Pc: null,
                Bk: 0,
                index: a
            }
        };
        d.ol = function(a) {
            return 0 < a ? this.activeIndex === this.r() - 4 : 4 === this.activeIndex && 4 < this.wi
        };

        function Fc() {
            Dc.call(this);
            this.Nn = [];
            this.Nk = NaN
        }
        z(Fc, Dc);

        function Gc(a, b, c, e, f, g) {
            var k = new Fc;
            Bc(k, a, b, c, e, f, g);
            return k
        }
        Fc.prototype.Hn = function(a) {
            this.Nn.push(a)
        };
        Fc.prototype.IL = function(a) {
            this.Nk = a
        };
        Fc.prototype.Ak = function(a, b, c, e) {
            var f = w(function() {
                this.qv().gf(this.Nn);
                !isNaN(this.Nk) && this.Nk < this.r() && this.qv().splice(this.Nk);
                c()
            }, this);
            Fc.f.Ak.call(this, a, b, f, e)
        };

        function Hc(a, b, c, e, f, g, k) {
            Cc.call(this);
            this.bL = a;
            this.yq = b;
            this.$K = c;
            this.Mx = e;
            this.nM = f;
            this.mM = g;
            this.xx = k;
            this.ng = null;
            this.Rn = this.pv = !1
        }
        z(Hc, Cc);
        d = Hc.prototype;
        d.load = function(a) {
            this.bL.Cc(w(function(b) {
                var c = w(function(c) {
                    this.VM(c, b);
                    this.Mx.bh("start_browse", "ar_r");
                    a && a(b)
                }, this);
                this.Mx.bh("start_browse", "ar_rq");
                b ? this.$K.load(b, c) : this.yq.pc && (this.yq.pc("start_browse", "", "feed_rs", "feed_r"), this.yq.load({}, c))
            }, this))
        };
        d.VM = function(a) {
            this.rows = a;
            this.ng || (this.ng = this.nM.bQ());
            this.Xe || (this.Xe = this.mM.aQ());
            this.ng.clear();
            this.rows.push(this.Xe);
            this.rows.push(this.ng)
        };
        d.lQ = function() {
            this.ng && this.ng.load()
        };
        d.gG = function(a) {
            a && (a.service && "searchService" === a.service.id) && (this.xx.$M(a.model.serviceQuery, a.ha(0), a.model.dh), this.Xe && this.My())
        };
        d.jQ = function() {
            this.xx.clear();
            this.My()
        };
        d.My = function() {
            this.Xe.load();
            this.Xe.xa(0)
        };
        Hc.$inject = "authService featuredService personalDataService csiService settingsRowService searchRowService searchHistoryService".split(" ");

        function Ic(a, b, c) {
            this.text = a;
            this.Uc = angular.extend({
                type: b
            }, c)
        };

        function Jc(a) {
            this.ZR = a;
            this.Rr = {};
            this.Sr = []
        }
        Jc.prototype.get = function(a) {
            return this.Rr[a]
        };
        Jc.prototype.Ab = function() {
            return this.Sr
        };
        Jc.prototype.Tq = function(a, b) {
            var c = this.get(a);
            this.Rr[a] = b;
            !c && this.Sr.push(a) > this.ZR && (c = this.Sr.shift(), delete this.Rr[c])
        };

        function Kc() {
            this.Kb = !1
        }
        Kc.CACHE_TYPE = "channel_paid_info";

        function Lc(a, b) {
            this.x = s(a) ? a : 0;
            this.y = s(b) ? b : 0
        }
        d = Lc.prototype;
        d.clone = function() {
            return new Lc(this.x, this.y)
        };
        d.ceil = function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this
        };
        d.floor = function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this
        };
        d.round = function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this
        };
        d.C2 = function(a, b) {
            a instanceof Lc ? (this.x += a.x, this.y += a.y) : (this.x += a, fa(b) && (this.y += b));
            return this
        };
        d.B2 = function(a, b) {
            var c = fa(b) ? b : a;
            this.x *= a;
            this.y *= c;
            return this
        };

        function Mc(a, b) {
            this.width = a;
            this.height = b
        }
        d = Mc.prototype;
        d.clone = function() {
            return new Mc(this.width, this.height)
        };
        d.D1 = function() {
            return Math.max(this.width, this.height)
        };
        d.Z1 = function() {
            return Math.min(this.width, this.height)
        };
        d.rU = function() {
            return this.width * this.height
        };
        d.F3 = function() {
            return 2 * (this.width + this.height)
        };
        d.jB = function() {
            return this.width / this.height
        };
        d.va = function() {
            return !this.rU()
        };
        d.ceil = function() {
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this
        };
        d.R0 = function(a) {
            return this.width <= a.width && this.height <= a.height
        };
        d.floor = function() {
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this
        };
        d.round = function() {
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this
        };
        d.MT = function(a, b) {
            var c = fa(b) ? b : a;
            this.width *= a;
            this.height *= c;
            return this
        };
        d.P3 = function(a) {
            a = this.jB() > a.jB() ? a.width / this.width : a.height / this.height;
            return this.MT(a)
        };
        var Nc, Oc, Pc, Qc, Rc;

        function Sc() {
            return h.navigator ? h.navigator.userAgent : null
        }

        function Tc() {
            return h.navigator
        }
        Qc = Pc = Oc = Nc = !1;
        var Uc;
        if (Uc = Sc()) {
            var Vc = Tc();
            Nc = 0 == Uc.indexOf("Opera");
            Oc = !Nc && -1 != Uc.indexOf("MSIE");
            (Pc = !Nc && -1 != Uc.indexOf("WebKit")) && Uc.indexOf("Mobile");
            Qc = !Nc && !Pc && "Gecko" == Vc.product
        }
        var Wc = Nc,
            K = Oc,
            Xc = Qc,
            Yc = Pc,
            Zc = Tc(),
            $c = Zc && Zc.platform || "";
        Rc = xa($c, "Mac");
        xa($c, "Win");
        xa($c, "Linux");
        Tc() && xa(Tc().appVersion || "", "X11");
        var ad = Sc();
        ad && ad.indexOf("Android");
        ad && ad.indexOf("iPhone");
        ad && ad.indexOf("iPad");

        function bd() {
            var a = h.document;
            return a ? a.documentMode : void 0
        }
        var cd;
        t: {
            var dd = "",
                ed;
            if (Wc && h.opera) var fd = h.opera.version,
                dd = "function" == typeof fd ? fd() : fd;
            else if (Xc ? ed = /rv\:([^\);]+)(\)|;)/ : K ? ed = /MSIE\s+([^\);]+)(\)|;)/ : Yc && (ed = /WebKit\/(\S+)/), ed) var gd = ed.exec(Sc()),
                dd = gd ? gd[1] : "";
            if (K) {
                var hd = bd();
                if (hd > parseFloat(dd)) {
                    cd = String(hd);
                    break t
                }
            }
            cd = dd
        }
        var id = cd,
            jd = {};

        function L(a) {
            var b;
            if (!(b = jd[a])) {
                var c = 0;
                b = pa(String(id)).split(".");
                for (var e = pa(String(a)).split("."), f = Math.max(b.length, e.length), g = 0; 0 == c && g < f; g++) {
                    var k = b[g] || "",
                        l = e[g] || "",
                        p = RegExp("(\\d*)(\\D*)", "g"),
                        q = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var r = p.exec(k) || ["", "", ""],
                            t = q.exec(l) || ["", "", ""];
                        if (0 == r[0].length && 0 == t[0].length) break;
                        var c = 0 == r[1].length ? 0 : parseInt(r[1], 10),
                            G = 0 == t[1].length ? 0 : parseInt(t[1], 10),
                            c = (c < G ? -1 : c > G ? 1 : 0) || ((0 == r[2].length) < (0 == t[2].length) ? -1 : (0 == r[2].length) > (0 == t[2].length) ?
                                1 : 0) || (r[2] < t[2] ? -1 : r[2] > t[2] ? 1 : 0)
                    } while (0 == c)
                }
                b = jd[a] = 0 <= c
            }
            return b
        }

        function kd(a) {
            return K && ld >= a
        }
        var md = h.document,
            ld = md && K ? bd() || ("CSS1Compat" == md.compatMode ? parseInt(id, 10) : 5) : void 0;
        var nd, od = !K || kd(9),
            pd = !Xc && !K || K && kd(9) || Xc && L("1.9.1"),
            qd = K && !L("9"),
            rd = K || Wc || Yc;

        function sd(a) {
            a = a.className;
            return v(a) && a.match(/\S+/g) || []
        }

        function td(a, b) {
            for (var c = sd(a), e = Na(arguments, 1), f = c.length + e.length, g = c, k = 0; k < e.length; k++) C(g, e[k]) || g.push(e[k]);
            g = c.join(" ");
            a.className = g;
            return c.length == f
        }

        function ud(a, b) {
            var c = sd(a),
                e = Na(arguments, 1),
                f = vd(c, e),
                g = f.join(" ");
            a.className = g;
            return f.length == c.length - e.length
        }

        function vd(a, b) {
            return Da(a, function(a) {
                return !C(b, a)
            })
        };

        function wd(a, b) {
            var c = b || document;
            return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : xd(document, "*", a, b)
        }

        function yd(a, b) {
            var c = b || document,
                e = null;
            return (e = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : wd(a, b)[0]) || null
        }

        function xd(a, b, c, e) {
            a = e || a;
            b = b && "*" != b ? b.toUpperCase() : "";
            if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
            if (c && a.getElementsByClassName) {
                a = a.getElementsByClassName(c);
                if (b) {
                    e = {};
                    for (var f = 0, g = 0, k; k = a[g]; g++) b == k.nodeName && (e[f++] = k);
                    e.length = f;
                    return e
                }
                return a
            }
            a = a.getElementsByTagName(b || "*");
            if (c) {
                e = {};
                for (g = f = 0; k = a[g]; g++) b = k.className, "function" == typeof b.split && C(b.split(/\s+/), c) && (e[f++] = k);
                e.length = f;
                return e
            }
            return a
        }

        function zd(a, b) {
            Ua(b, function(b, e) {
                "style" == e ? a.style.cssText = b : "class" == e ? a.className = b : "for" == e ? a.htmlFor = b : e in Ad ? a.setAttribute(Ad[e], b) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? a.setAttribute(e, b) : a[e] = b
            })
        }
        var Ad = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        };

        function Bd(a) {
            a = a.document;
            a = Cd(a) ? a.documentElement : a.body;
            return new Mc(a.clientWidth, a.clientHeight)
        }

        function Dd(a) {
            var b = a.document,
                c = 0;
            if (b) {
                a = Bd(a).height;
                var c = b.body,
                    e = b.documentElement;
                if (Cd(b) && e.scrollHeight) c = e.scrollHeight != a ? e.scrollHeight : e.offsetHeight;
                else {
                    var b = e.scrollHeight,
                        f = e.offsetHeight;
                    e.clientHeight != f && (b = c.scrollHeight, f = c.offsetHeight);
                    c = b > a ? b > f ? b : f : b < f ? b : f
                }
            }
            return c
        }

        function Ed(a, b, c, e) {
            function f(c) {
                c && b.appendChild(v(c) ? a.createTextNode(c) : c)
            }
            for (; e < c.length; e++) {
                var g = c[e];
                ea(g) && !Fd(g) ? B(Gd(g) ? La(g) : g, f) : f(g)
            }
        }

        function Hd(a, b) {
            var c = a.createElement("div");
            K ? (c.innerHTML = "<br>" + b, c.removeChild(c.firstChild)) : c.innerHTML = b;
            if (1 == c.childNodes.length) return c.removeChild(c.firstChild);
            for (var e = a.createDocumentFragment(); c.firstChild;) e.appendChild(c.firstChild);
            return e
        }

        function Cd(a) {
            return "CSS1Compat" == a.compatMode
        }

        function Id(a) {
            for (var b; b = a.firstChild;) a.removeChild(b)
        }

        function Jd(a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : null
        }

        function Kd(a, b) {
            for (; a && 1 != a.nodeType;) a = b ? a.nextSibling : a.previousSibling;
            return a
        }

        function Fd(a) {
            return ha(a) && 0 < a.nodeType
        }

        function Ld(a) {
            return ha(a) && 1 == a.nodeType
        }

        function Md(a, b) {
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        }

        function Nd(a, b) {
            var c = a.parentNode;
            if (c == b) return -1;
            for (var e = b; e.parentNode != c;) e = e.parentNode;
            return Od(e, a)
        }

        function Od(a, b) {
            for (var c = b; c = c.previousSibling;)
                if (c == a) return -1;
            return 1
        }

        function Pd(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        }

        function Qd(a) {
            return a.contentDocument || a.contentWindow.document
        }

        function Rd(a, b, c, e) {
            if (null != a)
                for (a = a.firstChild; a;) {
                    if (b(a) && (c.push(a), e) || Rd(a, b, c, e)) return !0;
                    a = a.nextSibling
                }
            return !1
        }
        var Sd = {
                SCRIPT: 1,
                STYLE: 1,
                HEAD: 1,
                IFRAME: 1,
                OBJECT: 1
            },
            Td = {
                IMG: " ",
                BR: "\n"
            };

        function Ud(a) {
            if (qd && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
            else {
                var b = [];
                Vd(a, b, !0);
                a = b.join("")
            }
            a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
            a = a.replace(/\u200B/g, "");
            qd || (a = a.replace(/ +/g, " "));
            " " != a && (a = a.replace(/^\s*/, ""));
            return a
        }

        function Vd(a, b, c) {
            if (!(a.nodeName in Sd))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in Td) b.push(Td[a.nodeName]);
            else
                for (a = a.firstChild; a;) Vd(a, b, c), a = a.nextSibling
        }

        function Gd(a) {
            if (a && "number" == typeof a.length) {
                if (ha(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (ga(a)) return "function" == typeof a.item
            }
            return !1
        }

        function Wd(a, b, c) {
            if (!b && !c) return null;
            var e = b ? b.toUpperCase() : null;
            return Xd(a, function(a) {
                return (!e || a.nodeName == e) && (!c || C(sd(a), c))
            }, !0)
        }

        function Yd(a, b) {
            return Wd(a, null, b)
        }

        function Xd(a, b, c, e) {
            c || (a = a.parentNode);
            c = null == e;
            for (var f = 0; a && (c || f <= e);) {
                if (b(a)) return a;
                a = a.parentNode;
                f++
            }
            return null
        }

        function Zd(a) {
            this.ra = a || h.document || document
        }
        d = Zd.prototype;
        d.k1 = function(a) {
            return a ? new Zd(Pd(a)) : nd || (nd = new Zd)
        };
        d.W3 = function(a) {
            this.ra = a
        };
        d.xA = function() {
            return this.ra
        };
        d.xU = function(a) {
            return v(a) ? this.ra.getElementById(a) : a
        };
        d.AW = Zd.prototype.xU;
        d.yU = function(a, b, c) {
            return xd(this.ra, a, b, c)
        };
        d.n1 = function(a, b) {
            return wd(a, b || this.ra)
        };
        d.m1 = function(a, b) {
            return yd(a, b || this.ra)
        };
        d.BW = Zd.prototype.yU;

        d.i4 = zd;

        d.g2 = function(a) {
            a = a || this.sB();
            return Bd(a || window)
        };
        d.h1 = function() {
            return Dd(this.sB())
        };
        d.vU = function(a, b, c) {
            var e = this.ra,
                f = arguments,
                g = f[0],
                k = f[1];
            if (!od && k && (k.name || k.type)) {
                g = ["<", g];
                k.name && g.push(' name="', ra(k.name), '"');
                if (k.type) {
                    g.push(' type="', ra(k.type), '"');
                    var l = {};
                    db(l, k);
                    delete l.type;
                    k = l
                }
                g.push(">");
                g = g.join("")
            }
            g = e.createElement(g);
            k && (v(k) ? g.className = k : u(k) ? td.apply(null, [g].concat(k)) : zd(g, k));
            2 < f.length && Ed(e, g, f, 2);
            return g
        };
        d.DW = Zd.prototype.vU;
        d.createElement = function(a) {
            return this.ra.createElement(a)
        };
        d.s2 = function(a) {
            return this.ra.createTextNode(String(a))
        };
        d.E0 = function(a, b, c) {
            var e = this.ra,
                f = !!c;
            c = ["<tr>"];
            for (var g = 0; g < b; g++) c.push(f ? "<td>&nbsp;</td>" : "<td></td>");
            c.push("</tr>");
            c = c.join("");
            b = ["<table>"];
            for (g = 0; g < a; g++) b.push(c);
            b.push("</table>");
            a = e.createElement("DIV");
            a.innerHTML = b.join("");
            return a.removeChild(a.firstChild)
        };
        d.Z2 = function(a) {
            return Hd(this.ra, a)
        };
        d.b1 = function() {
            return this.MU() ? "CSS1Compat" : "BackCompat"
        };
        d.MU = function() {
            return Cd(this.ra)
        };
        d.sB = function() {
            return this.ra.parentWindow || this.ra.defaultView
        };
        d.j1 = function() {
            return !Yc && Cd(this.ra) ? this.ra.documentElement : this.ra.body
        };
        d.i1 = function() {
            var a = this.ra,
                b = !Yc && Cd(a) ? a.documentElement : a.body,
                a = a.parentWindow || a.defaultView;
            return K && L("10") && a.pageYOffset != b.scrollTop ? new Lc(b.scrollLeft, b.scrollTop) : new Lc(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        };
        d.T0 = function(a) {
            var b;
            t: {
                a = a || this.ra;
                try {
                    b = a && a.activeElement;
                    break t
                } catch (c) {}
                b = null
            }
            return b
        };
        d.appendChild = function(a, b) {
            a.appendChild(b)
        };
        d.append = function(a, b) {
            Ed(Pd(a), a, arguments, 1)
        };
        d.r2 = function(a) {
            if (1 != a.nodeType) return !1;
            switch (a.tagName) {
                case "APPLET":
                case "AREA":
                case "BASE":
                case "BR":
                case "COL":
                case "COMMAND":
                case "EMBED":
                case "FRAME":
                case "HR":
                case "IMG":
                case "INPUT":
                case "IFRAME":
                case "ISINDEX":
                case "KEYGEN":
                case "LINK":
                case "NOFRAMES":
                case "NOSCRIPT":
                case "META":
                case "OBJECT":
                case "PARAM":
                case "SCRIPT":
                case "SOURCE":
                case "STYLE":
                case "TRACK":
                case "WBR":
                    return !1
            }
            return !0
        };
        d.J3 = Id;
        d.d3 = function(a, b) {
            b.parentNode && b.parentNode.insertBefore(a, b)
        };
        d.c3 = function(a, b) {
            b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
        };
        d.b3 = function(a, b, c) {
            a.insertBefore(b, a.childNodes[c] || null)
        };
        d.v2 = Jd;
        d.M3 = function(a, b) {
            var c = b.parentNode;
            c && c.replaceChild(a, b)
        };
        d.S0 = function(a) {
            var b, c = a.parentNode;
            if (c && 11 != c.nodeType) {
                if (a.removeNode) return a.removeNode(!1);
                for (; b = a.firstChild;) c.insertBefore(b, a);
                return Jd(a)
            }
        };
        d.t2 = function(a) {
            return pd && void 0 != a.children ? a.children : Da(a.childNodes, function(a) {
                return 1 == a.nodeType
            })
        };
        d.p1 = function(a) {
            return void 0 != a.firstElementChild ? a.firstElementChild : Kd(a.firstChild, !0)
        };
        d.z1 = function(a) {
            return void 0 != a.lastElementChild ? a.lastElementChild : Kd(a.lastChild, !1)
        };
        d.E1 = function(a) {
            return void 0 != a.nextElementSibling ? a.nextElementSibling : Kd(a.nextSibling, !0)
        };
        d.P1 = function(a) {
            return void 0 != a.previousElementSibling ? a.previousElementSibling : Kd(a.previousSibling, !1)
        };
        d.F1 = function(a) {
            if (!a) return null;
            if (a.firstChild) return a.firstChild;
            for (; a && !a.nextSibling;) a = a.parentNode;
            return a ? a.nextSibling : null
        };
        d.Q1 = function(a) {
            if (!a) return null;
            if (!a.previousSibling) return a.parentNode;
            for (a = a.previousSibling; a && a.lastChild;) a = a.lastChild;
            return a
        };
        d.m3 = Fd;
        d.u2 = Ld;
        d.s3 = function(a) {
            return ha(a) && a.window == a
        };
        d.N1 = function(a) {
            if (rd && !(K && L("9") && !L("10") && h.SVGElement && a instanceof h.SVGElement)) return a.parentElement;
            a = a.parentNode;
            return Ld(a) ? a : null
        };
        d.contains = Md;
        d.C0 = function(a, b) {
            if (a == b) return 0;
            if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
            if (K && !kd(9)) {
                if (9 == a.nodeType) return -1;
                if (9 == b.nodeType) return 1
            }
            if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
                var c = 1 == a.nodeType,
                    e = 1 == b.nodeType;
                if (c && e) return a.sourceIndex - b.sourceIndex;
                var f = a.parentNode,
                    g = b.parentNode;
                return f == g ? Od(a, b) : !c && Md(f, b) ? -1 * Nd(a, b) : !e && Md(g, a) ? Nd(b, a) : (c ? a.sourceIndex : f.sourceIndex) - (e ? b.sourceIndex : g.sourceIndex)
            }
            e = Pd(a);
            c = e.createRange();
            c.selectNode(a);
            c.collapse(!0);
            e = e.createRange();
            e.selectNode(b);
            e.collapse(!0);
            return c.compareBoundaryPoints(h.Range.START_TO_END, e)
        };
        d.M0 = function(a) {
            var b, c = arguments.length;
            if (!c) return null;
            if (1 == c) return arguments[0];
            var e = [],
                f = Infinity;
            for (b = 0; b < c; b++) {
                for (var g = [], k = arguments[b]; k;) g.unshift(k), k = k.parentNode;
                e.push(g);
                f = Math.min(f, g.length)
            }
            g = null;
            for (b = 0; b < f; b++) {
                for (var k = e[0][b], l = 1; l < c; l++)
                    if (k != e[l][b]) return g;
                g = k
            }
            return g
        };
        d.K1 = Pd;
        d.r1 = Qd;
        d.s1 = function(a) {
            var b;
            (b = a.contentWindow) || (a = Qd(a), b = a.parentWindow || a.defaultView);
            return b
        };
        d.p4 = function(a, b) {
            if ("textContent" in a) a.textContent = b;
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
                a.firstChild.data = b
            } else {
                Id(a);
                var c = Pd(a);
                a.appendChild(c.createTextNode(String(b)))
            }
        };
        d.J1 = function(a) {
            if ("outerHTML" in a) return a.outerHTML;
            var b = Pd(a).createElement("div");
            b.appendChild(a.cloneNode(!0));
            return b.innerHTML
        };
        d.N0 = function(a, b) {
            var c = [];
            return Rd(a, b, c, !0) ? c[0] : void 0
        };
        d.O0 = function(a, b) {
            var c = [];
            Rd(a, b, c, !1);
            return c
        };
        d.h3 = function(a) {
            var b = a.getAttributeNode("tabindex");
            return b && b.specified ? (a = a.tabIndex, fa(a) && 0 <= a && 32768 > a) : !1
        };
        d.Y3 = function(a, b) {
            b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
        };
        d.c2 = Ud;
        d.H1 = function(a) {
            return Ud(a).length
        };
        d.I1 = function(a, b) {
            for (var c = b || Pd(a).body, e = []; a && a != c;) {
                for (var f = a; f = f.previousSibling;) e.unshift(Ud(f));
                a = a.parentNode
            }
            return e.join("").replace(/^[\s\xa0]+/, "").replace(/ +/g, " ").length
        };
        d.G1 = function(a, b, c) {
            a = [a];
            for (var e = 0, f = null; 0 < a.length && e < b;)
                if (f = a.pop(), !(f.nodeName in Sd))
                    if (3 == f.nodeType) var g = f.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " "),
                        e = e + g.length;
                    else if (f.nodeName in Td) e += Td[f.nodeName].length;
            else
                for (g = f.childNodes.length - 1; 0 <= g; g--) a.push(f.childNodes[g]);
            ha(c) && (c.I3 = f ? f.nodeValue.length + b - e - 1 : 0, c.node = f);
            return f
        };
        d.n3 = Gd;
        d.Y0 = Wd;
        d.X0 = Yd;
        d.W0 = Xd;

        function $d(a) {
            if ("function" == typeof a.O) a = a.O();
            else if (ea(a) || v(a)) a = a.length;
            else {
                var b = 0,
                    c;
                for (c in a) b++;
                a = b
            }
            return a
        }

        function ae(a) {
            if ("function" == typeof a.ea) return a.ea();
            if (v(a)) return a.split("");
            if (ea(a)) {
                for (var b = [], c = a.length, e = 0; e < c; e++) b.push(a[e]);
                return b
            }
            return Xa(a)
        }

        function be(a) {
            if ("function" == typeof a.Ab) return a.Ab();
            if ("function" != typeof a.ea) {
                if (ea(a) || v(a)) {
                    var b = [];
                    a = a.length;
                    for (var c = 0; c < a; c++) b.push(c);
                    return b
                }
                return Ya(a)
            }
        }

        function ce(a, b, c) {
            if ("function" == typeof a.forEach) a.forEach(b, c);
            else if (ea(a) || v(a)) B(a, b, c);
            else
                for (var e = be(a), f = ae(a), g = f.length, k = 0; k < g; k++) b.call(c, f[k], e && e[k], a)
        }

        function de(a, b, c) {
            if ("function" == typeof a.every) return a.every(b, c);
            if (ea(a) || v(a)) return Ga(a, b, c);
            for (var e = be(a), f = ae(a), g = f.length, k = 0; k < g; k++)
                if (!b.call(c, f[k], e && e[k], a)) return !1;
            return !0
        };

        function ee(a) {
            this.Md = new eb;
            a && this.uS(a)
        }

        function fe(a) {
            var b = typeof a;
            return "object" == b && a || "function" == b ? "o" + ia(a) : b.substr(0, 1) + a
        }
        d = ee.prototype;
        d.O = function() {
            return this.Md.O()
        };
        d.Bm = function(a) {
            this.Md.tb(fe(a), a)
        };
        d.uS = function(a) {
            a = ae(a);
            for (var b = a.length, c = 0; c < b; c++) this.Bm(a[c])
        };
        d.JU = function(a) {
            a = ae(a);
            for (var b = a.length, c = 0; c < b; c++) this.remove(a[c])
        };
        d.remove = function(a) {
            return this.Md.remove(fe(a))
        };
        d.clear = function() {
            this.Md.clear()
        };
        d.va = function() {
            return this.Md.va()
        };
        d.contains = function(a) {
            return this.Md.xl(fe(a))
        };
        d.D0 = function(a) {
            return de(a, this.contains, this)
        };
        d.U2 = function(a) {
            var b = new ee;
            a = ae(a);
            for (var c = 0; c < a.length; c++) {
                var e = a[c];
                this.contains(e) && b.Bm(e)
            }
            return b
        };
        d.T2 = function(a) {
            var b = this.clone();
            b.JU(a);
            return b
        };
        d.ea = function() {
            return this.Md.ea()
        };
        d.clone = function() {
            return new ee(this)
        };
        d.equals = function(a) {
            return this.O() == $d(a) && this.EP(a)
        };
        d.EP = function(a) {
            var b = $d(a);
            if (this.O() > b) return !1;
            !(a instanceof ee) && 5 < b && (a = new ee(a));
            return de(this, function(b) {
                return "function" == typeof a.contains ? a.contains(b) : "function" == typeof a.Ei ? a.Ei(b) : ea(a) || v(a) ? C(a, b) : Za(a, b)
            })
        };
        d.qb = function() {
            return this.Md.qb(!1)
        };

        function ge(a, b) {
            this.$T = void 0 != a ? a : ",";
            this.RR = void 0 != b ? b : "YYYY/MM/DD"
        }
        d = ge.prototype;
        d.$f = function(a) {
            return a ? a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, this.$T) : "0"
        };
        d.GT = function(a) {
            var b = this.IS(a),
                c = this.HS(a);
            a = this.JS(a);
            switch (this.RR) {
                case "DD/MM/YYYY":
                    return [c, b, a].join("/");
                case "DD.MM.YYYY":
                    return [c, b, a].join(".");
                case "MM/DD/YYYY":
                    return [b, c, a].join("/");
                default:
                    return [a, b, c].join("/")
            }
        };
        d.HS = function(a) {
            return ("0" + a.getDate()).slice(-2)
        };
        d.IS = function(a) {
            return ("0" + (a.getMonth() + 1)).slice(-2)
        };
        d.JS = function(a) {
            return a.getFullYear().toString()
        };
        d.Mh = function(a) {
            var b = a % 60;
            a /= 60;
            var c = 0;
            return 60 <= a ? (c = a / 60, [Math.floor(c), this.Xr(a % 60), this.Xr(b)].join(":")) : [Math.floor(a), this.Xr(b)].join(":")
        };
        d.Xr = function(a) {
            a = Math.floor(a);
            return 9 < a ? a : "0" + a
        };

        function he(a, b) {
            switch (a) {
                case "de":
                    return new ge(".", "DD.MM.YYYY");
                case "fr":
                    return new ge(" ", "DD/MM/YYYY");
                case "ru":
                    return new ge(" ", "DD.MM.YYYY");
                case "nl":
                case "es":
                case "it":
                case "pt":
                    return new ge("", "DD/MM/YYYY");
                case "en":
                    switch (b) {
                        case "GB":
                            return new ge(",", "DD/MM/YYYY")
                    }
                    return new ge(",", "MM/DD/YYYY");
                default:
                    return new ge(",", "YYYY/MM/DD")
            }
        };

        function ie(a) {
            var b = [];
            a = je(a);
            for (var c in a) b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
            return b.join("&")
        }

        function je(a) {
            var b = {},
                c;
            for (c in a) {
                var e = a[c];
                "undefined" !== typeof e && (null !== e && "" !== e) && (b[c] = ke(e || 0))
            }
            return b
        }

        function ke(a) {
            if (!isNaN(a)) {
                var b = parseInt(a, 10);
                if (!isNaN(b)) return Number(a)
            }
            if ("string" === typeof a && "" === a.trim()) return a;
            b = String(a).toLowerCase();
            return "true" === b || !0 == a ? !0 : "false" === b || !1 == a ? !1 : a
        }

        function le(a) {
            a = a.replace(/^\?/, "");
            var b = {},
                c;
            a.split("&").forEach(function(a) {
                c = a.split("=");
                b[c.shift()] = ke(c.shift())
            });
            return b
        }

        function me(a, b) {
            $a(b) || (a += "?" + ie(b));
            return a
        };

        function ne(a, b, c) {
            this.g = a;
            this.oI = b;
            this.qI = c;
            this.GJ(this.EJ())
        }
        d = ne.prototype;
        d.GJ = function(a) {
            if (!a) throw "Unexpected locale provided, " + a;
            this.ld = a;
            this.language = a.split("_")[0];
            this.Ir && 1 < this.Ir.indexOf("_") && (this.QQ = this.Ir.split("_")[1]);
            this.mr = he(this.language, this.QQ)
        };
        d.Ni = function(a) {
            if (!a) return "";
            
            // Ensure `a` is a string using ES5-compatible method
            if (typeof a !== "string") {
                a = "" + a;  // Convert non-string values to a string
            }
        
            if (a.indexOf("[[") === -1) return a;
            
            var b = "", c, e = 0;
            
            do {
                c = a.indexOf("[[", e);
                if (e > 0) e += 2;
                
                if (c >= 0) {
                    b += a.slice(e, c);
                    e = a.indexOf("]]", c);
                } else {
                    b += a.slice(e);
                    e = -1;
                }
        
                if (c >= 0 && e >= 0) {
                    var f = a.slice(c + 2, e);
                    b += this.OU(f);
                }
                
            } while (c >= 0 && e >= 0);
            
            return b;
        };        
        d.IQ = function(a) {
            this.xg = a || {}
        };
        d.$f = function(a) {
            return this.mr.$f(a)
        };
        d.Mh = function(a) {
            return this.mr.Mh(a)
        };
        d.UH = function(a) {
            return this.mr.GT(a)
        };
        d.OU = function(a) {
            var b = a.split("|");
            if (2 > b.length) return a;
            var c;
            (a = b[b.length - 1]) && !isNaN(a) && (c = b.pop());
            a = b.pop();
            b = b.join("|");
            return this.zU(b, a, c)
        };
        d.NS = function(a, b) {
            var c = String(a + b).toLowerCase(),
                e = 0,
                f, g;
            for (f = 0; f < c.length; ++f) g = c.charCodeAt(f), e = (e << 5) - e + g, e &= 33554431;
            return String(e)
        };
        d.zU = function(a, b, c) {
            var e = a;
            $a(this.xg) || (b = this.NS(a, b), c && a === this.xg[b] && this.xg[c] ? e = this.xg[c] : this.xg[b] && (e = this.xg[b]));
            return e
        };
        d.eN = function() {
            return C(["ja_JP", "zh_CN", "zh_HK", "zh_TW"], this.ld)
        };
        d.EG = function(a) {
            var b = w(function(b) {
                this.IQ(b);
                a && a(b)
            }, this);
            if (this.Fp(this.ld)) b();
            else {
                var c = this.oI + this.ld.replace(/(.*)/, "/locale/messages-$1.json");
                this.qI.get(c).success(b).error(function() {
                    b()
                })
            }
        };
        d.Fp = function(a) {
            return "en_US" === a
        };
        d.EJ = function() {
            return this.nT() || this.lT() || this.mT() || "en_US"
        };
        d.nT = function() {
            var a = le(this.g.location.search).hl;
            return a && this.hx(a.replace("-", "_")) || null
        };
        d.lT = function() {
            var a = this.g && this.g.environment && this.g.environment.language;
            if (a)
                for (var b = this.FJ(a), c = 0; c < b.length; ++c)
                    if (a = this.Uw(b[c])) return !this.Fp(a) && a || null;
            return null
        };
        d.mT = function() {
            var a = (this.g.navigator.language || this.g.navigator.userLanguage || this.g.navigator.systemLanguage || this.g.navigator.browserLanguage || "").replace("-", "_");
            return this.hx(a)
        };
        d.FJ = function(a) {
            return Ea(a.split(","), function(a) {
                return pa(a.replace("-", "_")).split(";")[0]
            })
        };
        d.Uw = function(a) {
            function b(a) {
                a = a.toLowerCase();
                var b = this.toLowerCase();
                return 0 == a.lastIndexOf(b, 0)
            }
            if (/^[\s\xa0]*$/.test(null == a ? "" : String(a)) || 2 > a.length) return null;
            this.Ir = a;
            var c = Ha(Bb, b, a);
            if (!c)
                for (var e in Cb)
                    if (Ha(Cb[e], b, a)) {
                        c = Ab[e];
                        break
                    }!c && 1 < a.indexOf("_") && (c = Ha(Bb, b, a.split("_")[0]));
            return c
        };
        d.hx = function(a) {
            a = this.Uw(a);
            return !this.Fp(a) && a || null
        };
        ne.$inject = ["$window", "applicationPath", "$http"];

        function oe(a, b) {
            var c = a.split(b),
                e = c.shift();
            c.forEach(function(a) {
                e += a && a.length ? a.charAt(0).toUpperCase() + a.slice(1) : a
            });
            return e
        }

        function pe(a) {
            return a ? a.toLowerCase().replace(/(^\s+|\s+$)/g, "").replace(/\s+/g, "-").replace(/[^a-z0-9_\-]/g, "") : ""
        }

        function qe(a, b) {
            if (isNaN(a)) return "0%";
            b = isNaN(b) ? 100 : b;
            return Math.round(a * b) + "%"
        }

        function re(a, b, c) {
            return a.replace(/\{([^\{]*)\}([\/])*/gm, function(a, f, g) {
                (a = b[f]) && g && (a = a + "/");
                return void 0 !== a ? (c && (b[f] = null), a) : ""
            })
        };

        function se(a) {
            this.g = a;
            this.Fa = {}
        }
        se.prototype.Va = function(a) {
            switch (a) {
                case 7:
                    this.Fa = {
                        917525: 177,
                        917526: 176
                    };
                    break;
                case 1:
                    this.Fa = {
                        412: 227,
                        413: 178,
                        415: 250,
                        417: 228,
                        424: 177,
                        425: 176,
                        461: 27
                    };
                    break;
                case 2:
                    this.Fa = {
                        917507: 19,
                        917523: 227,
                        917524: 228,
                        917528: 250,
                        917777: 27
                    };
                    break;
                case 3:
                    this.Fa = {
                        195: 227,
                        196: 228,
                        425: 176,
                        424: 177
                    };
                    break;
                case 4:
                    this.Fa = {
                        29443: 13,
                        29460: 38,
                        29461: 40,
                        4: 37,
                        5: 39,
                        27: -1,
                        69: 227,
                        70: 178,
                        71: 250,
                        72: 228,
                        74: 19,
                        88: 27,
                        1078: 176,
                        1080: 177
                    };
                    break;
                case 5:
                    this.Fa = {
                        415: 250,
                        19: 19,
                        413: 178,
                        465: 228,
                        417: 228,
                        412: 227,
                        425: 176,
                        463: 177,
                        424: 177
                    };
                    break;
                case 6:
                    this.Fa = {
                        238: 227,
                        239: 228
                    };
                    break;
                case 8:
                    this.Fa = {
                        461: 27,
                        415: 250,
                        413: 178,
                        417: 228,
                        412: 227,
                        48: 83
                    };
                    break;
                case 9:
                    this.Fa = {
                        113: 227,
                        114: 228,
                        115: 177,
                        116: 176
                    }
            }
            this.g.VK_FAST_FWD && (this.Fa[this.g.VK_FAST_FWD] = 228);
            this.g.VK_REWIND && (this.Fa[this.g.VK_REWIND] = 227);
            this.g.VK_TRACK_PREV && (this.Fa[this.g.VK_TRACK_PREV] = 177);
            this.g.VK_TRACK_NEXT && (this.Fa[this.g.VK_TRACK_NEXT] = 176);
            this.g.VK_PLAY && (this.Fa[this.g.VK_PLAY] = 250);
            this.g.VK_STOP && (this.Fa[this.g.VK_STOP] = 178)
        };
        se.prototype.QT = function(a) {
            return this.Fa[a] || a
        };
        se.$inject = ["$window"];

        function te(a, b, c, e) {
            this.g = a;
            this.Is = b;
            this.ce = c;
            this.Ks = e;
            this.Gg = this.g && this.g.location || {};
            this.Ye = this.cd = "";
            this.Ym = [];
            this.Zm = [];
            this.ja = null;
            this.eV = "TVHTML5";
            this.dV = "4";
            this.Ca = this.Ib = "";
            this.ee = new ee;
            this.Xm = {};
            this.TB = this.Wi = this.ss = this.QB = this.rs = this.qs = this.PB = this.Nm = this.Jm = this.Ds = this.Vd = this.Yd = this.SB = this.RB = this.We = this.Cs = this.Es = this.Bs = this.ms = this.Lm = this.As = this.Dg = this.Hs = this.ZB = this.Wm = this.Ls = this.Gs = this.Mm = !1;
            this.Js = this.Vm = this.$e = this.Sm = this.bj = this.cj = "";
            this.Qm = null;
            this.dj = 0;
            this.dd = {};
            this.initSearchQuery = this.initPlaylistId = this.gdataRegionId = this.forcedOffExperiments = this.forcedExperiments = this.ts = this.fV = this.de = this.vs = this.cssPrefix = this.Zi = "";
            this.initTime = 0;
            this.initReversePairingCode = this.initVideoId = "";
            this.hV = this.Tm = this.aj = this.isLowPerformingSearch = this.gV = this.$d = this.isLimitedGraphics = this.isChromelessContext = this.is720pVideo = this.Wd = this.Ue = this.Ti = this.Om = this.Td = this.zc = this.Oa = this.Te = !1;
            this.keyMapId = 0;
            this.es = -1;
            this.Vi = this.Ui =
                "";
            this.reversedSelectionKeys = this.requiresSingleVideoTag = !1;
            this.ks = 300;
            this.iV = 1500;
            this.enableVideoVerificationTokens = !1;
            this.supportsAdaptiveBitrate = !0;
            this.supportsHardwareKeyboard = this.supportsDrm = this.supportsCors = !1;
            this.supportsInput = !0;
            this.supportsPaidContent = this.supportsNetworkRetry = this.supportsNativeOsk = !1;
            this.supportsPairing = !0;
            this.supportsSteelDial = this.supportsSounds = this.supportsSearchSuggestion = this.supportsPointer = !1;
            this.supportsQuickSuggest = !0;
            this.supportsAnimation = !1;
            this.supportsTranslateZ = !0;
            this.useStageGdata = !1;
            this.supportsWebM = !0;
            this.isVideoInfoVisible = this.js = this.supportsBackgrounds = this.supportsHdDrm = this.supportsLive = !1;
            this.Xi = NaN;
            this.loopRows = !1;
            this.$B = "debugjs env_cssPrefix env_forcedExperiments env_forcedOffExperiments env_gdataRegionId env_is720pVideo env_isChromelessContext env_isLimitedGraphics env_isLowPerformingSearch env_isVideoInfoVisible env_keyMapId env_requiresSingleVideoTag env_reversedSelectionKeys env_supportsAdaptiveBitrate env_supportsAnimation env_supportsBackgrounds env_supportsCors env_supportsDrm env_supportsHdDrm env_supportsLive env_supportsNetworkRetry env_supportsPaidContent env_supportsPairing env_supportsPointer env_supportsQuickSuggest env_supportsSearchSuggestion env_supportsSounds env_supportsSteelDial env_supportsTranslateZ env_useStageGdata label".split(" ");
            this.Ms = {
                e: "initErrorCode",
                isChromelessContext: "isChromelessContext",
                loopRows: "loopRows",
                p: "initPlaylistId",
                list: "initPlaylistId",
                pairingCode: "initReversePairingCode",
                q: "initSearchQuery",
                reversePairingCode: "initReversePairingCode",
                send_mdx_vvts: "enableVideoVerificationTokens",
                t: "initTime",
                v: "initVideoId"
            };
            this.aC()
        }
        d = te.prototype;
        d.aC = function() {
            this.yN();
            this.pN();
            this.xN();
            this.sN();
            this.rN();
            this.BN();
            this.wN();
            this.zN();
            this.uN();
            this.tN();
            this.AN();
            this.CN();
            this.vN();
            this.DN();
            this.qN()
        };
        d.yN = function() {
            this.Js = this.g.label;
            var a = this.g.environment || {};
            this.$e = a.platform || "";
            this.Ib = a.brand;
            this.Ca = a.model;
            this.cd = a.browser;
            this.Ye = a.browser_version;
            this.cj = a.os;
            this.bj = a.os_version;
            this.Sm = a.network;
            this.Zi = a.country;
            this.Xi = a.start_time;
            this.HF(a.experiments);
            this.Te = !!a.debug;
            this.Xm = a;
            this.gdataRegionId = C(tb, this.Zi) ? this.Zi : ""
        };
        d.pN = function() {
            if ("Steel" == this.cd) this.Dg = this.Hs = !0;
            else if ("Bamboo" == this.cd) this.Dg = this.Gs = !0;
            else if (this.me("Explorer")) this.Ls = !0;
            else if (this.me("Opera")) this.zc = !0;
            else if (this.me("Firefox")) this.Wm = !0;
            else if (this.me("Mozilla") || this.Wm) this.ZB = !0;
            else if (this.me("Chrome") || this.me("GoogleTV")) this.Dg = !0
        };
        d.tN = function() {
            this.ts = this.ee.ea().map(function(a) {
                return "exp-" + a
            }).join(" ")
        };
        d.AN = function() {
            this.supportsQuickSuggest = !this.We && !this.Ac(mb)
        };
        d.xN = function() {
            this.Lm = !(!this.Ib && !this.Ca);
            this.de = "YouTube Leanback";

            console.log("Ib " + this.Ib);
            console.log("Ca " + this.Ca);

            switch (this.Ib && this.Ib.toLowerCase()) {
                case "boxee":
                    this.Mm = !0;
                    this.de = "Boxee";
                    break;
                case "cht":
                    this.As = !0;
                    break;
                case "freesat":
                case "freesat/1.0":
                    this.Bs = !0;
                    break;
                case "realtek":
                    this.RB = !0;
                    break;
                case "roku":
                    this.SB = !0;
                    break;
                case "sony":
                    this.Vd = !0;
                    "PS3" !== this.Ca && (this.Ds = !0);
                    this.zc && xa(this.Ye, "9.80") && (this.Jm = !0);
                    break;
                case "samsung":
                    this.Yd = !0;
                    break;
                case "lg":
                    this.We = !0;
                    break;
                case "panasonic":
                    this.Nm = !0;
                    this.$d || (this.PB = !0);
                    break;
                case "philipstv":
                    this.qs = !0;
                    break;
                case "pioneer":
                    this.rs = !0;
                    break;
                case "pure":
                    this.QB = !0;
                    break;
                case "telecomitalia":
                    this.Es = !0;
                    break;
                case "toshiba":
                    this.ss = !0; - 1 < this.Ca.indexOf("13A_NAEU_") && (this.Wi = !0);
                    break;
                case "vizio":
                    this.TB = !0
            }
            switch (this.Ca && this.Ca.toLowerCase()) {
                case "ps3":
                    this.Vd && (this.Td = !0, this.de = "PlayStation/3", "steel" == this.cd.toLowerCase() && "2.00" == this.Ye && (this.Om = !0));
                    break;
                case "eureka":
                    "Google" === this.Ib && (this.Oa = !0, this.de = "Eureka");
                    break;
                case "ipc1100":
                case "vms1100":
                    this.Cs =
                        "MMI" === this.Ib;
                    break;
                case "viera":
                    this.de = "Viera";
                    break;
                case "wiiu":
                    if (this.Ti = !0, this.de = "Wii U", this.Hs) this.Wd = !0;
                    else if (this.Gs || this.g.kV) this.Ue = !0
            }
            this.me("GoogleTV") && (this.ms = !0);
            this.Dg = this.Dg || this.We || this.Yd;
            this.keyMapId = this.TC()
        };
        d.rN = function() {
            this.Oa && (this.enableVideoVerificationTokens = this.supportsDrm = this.isChromelessContext = this.is720pVideo = !0);
            this.Ac(rb) && (this.enableVideoVerificationTokens = !0);
            this.requiresSingleVideoTag = this.zc && !this.Mm || this.Oa || this.Yd || this.ms || this.Om || this.Wd;
            this.supportsAdaptiveBitrate = !this.Nm;
            this.supportsCors = this.zc && !this.td("11.10");
            this.supportsHardwareKeyboard = (this.supportsInput = !this.zc) && !this.Yd;
            this.supportsNativeOsk = this.Wd;
            this.supportsPointer = this.We;
            this.supportsPairing = !this.Ue;
            this.supportsWebM = !this.Yd;
            this.cssPrefix = this.qF();
            this.Qm = this.Ti ? "NINTENDO" : null;
            this.supportsSteelDial = !(!this.g || "undefined" == typeof this.g.DialServer);
            this.supportsDrm = this.supportsHdDrm = this.Wd;
            this.supportsNetworkRetry = this.Oa;
            "tv" === this.$e.toLowerCase() ? this.Fj = "tv" : this.Lm || (this.Fj = "desktop")
        };
        d.BN = function() {
            if (this.ja = v("devicePlugin") ? document.getElementById("devicePlugin") : "devicePlugin") this.reversedSelectionKeys = !!this.ja && void 0 !== this.ja.crossMeansAdvance && !this.ja.crossMeansAdvance, this.Vi = this.ja.psnOnlineName ? this.ja.psnOnlineName : "", this.Ui = this.ja.psnAvatarURL ? this.ja.psnAvatarURL : "", this.es = s(this.ja.licenseArea) ? this.ja.licenseArea : -1
        };
        d.CN = function() {
            var a = [],
                b = pe(this.Ib);
            b && a.push(b);
            (b = pe(this.Ca)) && a.push(b);
            this.Fj && a.push(this.Fj);
            this.zc && a.push("opera");
            this.Oa && a.push("eureka");
            this.Wi && a.push("toshiba-mstar");
            this.reversedSelectionKeys && a.push("reversed-keys");
            this.Is && a.push("lang-" + this.Is.language);
            this.isLimitedGraphics && a.push("limited-graphics");
            this.Te && this.ce.r() && a.push("debug");
            this.Jm && a.push("sony-odm-2012");
            this.supportsPointer && a.push("pointer");
            this.Wd ? a.push("wiiusteel") : this.Ue && a.push("wiiubamboo");
            this.vs = a.join(" ")
        };
        d.zN = function() {
            if (this.Gg && (this.Gg.search || this.Gg.hash)) {
                var a = this.Gg.search || "",
                    a = a + (this.Gg.hash || ""),
                    a = a.replace(/\#[^\?]*\??/, "&");
                this.gT(a)
            }
            this.supportsDrm = this.supportsDrm || this.supportsPaidContent
        };
        d.sN = function() {};
        d.gT = function(a) {
            a = le(a);
            for (var b in a) - 1 < this.$B.indexOf(b) ? (this.Te = !0, this.Zm.push(b), 0 === b.indexOf("env_") ? this[b.substr(4)] = ke(a[b]) : "label" == b && (this.Vm = ke(a[b]))) : this.Ms[b] ? this[this.Ms[b]] = ke(a[b]) : 0 === b.indexOf("env_") && this.Ym.push(b);
            0 < this.Zm.length && (this.ce.push("WARNING: REMOVE DEBUG QUERY PARAMETERS "), this.ce.push("[" + this.Zm.join(", ") + "] "), this.ce.push("BEFORE PRODUCTION RELEASE."));
            0 < this.Ym.length && (this.ce.push("\n\n"), this.ce.push("ERROR: UNEXPECTED PARAMETER(S): "), this.ce.push(this.Ym.join(", ")))
        };
        d.wN = function() {
            this.$d = this.Nm && ("DMP-BD79_89" === this.Ca || "DMP-MS10" === this.Ca || this.td("BD 13S01") || this.td("BD 13S02") || this.td("BDT220"));
            this.Vd && (this.aj = this.td("BDP") || this.td("CTV") || this.td("BRAVIA") && this.td("mips"));
            this.Tm = this.ss && ("BDX3400KU" === this.Ca || "BDX5400KU" === this.Ca || this.Wi);
            this.hH = this.rs && "BDP-160" === this.Ca;
            this.isLimitedGraphics = this.aj || this.$d || this.Tm || this.hH || this.Mm;
            this.supportsAnimation = !(this.isLimitedGraphics || this.Jm);
            this.isLowPerformingSearch = this.$d;
            this.supportsSearchSuggestion = !this.$d && !this.Wd;
            this.js = (this.supportsBackgrounds = !this.isLimitedGraphics && !this.isChromelessContext) && !this.Ue && !this.qs && this.Ac(lb);
            if (this.aj || this.$d || this.Tm) this.ks = 1E3;
            this.supportsTranslateZ = this.supportsAnimation && !this.zc
        };
        d.vN = function() {
            this.Ks.Va(this.keyMapId)
        };
        d.DN = function() {
            this.Sw = "hqdefault";
            if (this.Ac(kb)) {
                var a = this.g.screen && this.g.screen.width;
                if (a) {
                    this.isLimitedGraphics && (a = Math.max(0, a - 560));
                    for (var b in Gb) {
                        var c = Gb[b];
                        if (a >= c[0] && a <= c[1]) {
                            this.Sw = b;
                            break
                        }
                    }
                }
            }
        };
        d.qN = function() {
            "desktop" === this.Fj ? (this.dj = 100, this.dd = {}) : this.$d || this.aj ? (this.dj = 0, this.dd = {}) : (this.dj = 0, this.dd = {}, this.dd.branding = 10);
            this.dd.subscription = 200;
            this.dd.channel_paid_info = 200;
            this.dd.video_like_value = 200
        };
        d.uN = function() {
            this.forcedExperiments && this.AB(String(this.forcedExperiments), !0);
            this.forcedOffExperiments && this.AB(String(this.forcedOffExperiments), !1)
        };
        d.AB = function(a, b) {
            var c = decodeURIComponent(a).split(","),
                e;
            for (e in c) {
                var f = parseInt(c[e], 10);
                b ? this.ee.Bm(f) : this.ee.remove(f)
            }
        };
        d.TC = function() {
            return this.We || this.Bs ? 1 : this.Yd ? 4 : this.Es ? 6 : this.Cs ? 2 : this.Ds ? 5 : this.Om || this.Wd ? 9 : this.As ? 7 : this.Wi ? 8 : this.zc ? 3 : 0
        };
        d.HF = function(a) {
            if (a)
                for (var b = 0; b < a.length; ++b) {
                    var c = a[b];
                    c && this.ee.Bm(c)
                }
        };
        d.Ac = function(a) {
            return this.ee.contains(a.id)
        };
        d.br = function(a) {
            return a in this.Xm && this.Xm[a]
        };
        d.me = function(a) {
            var b = this.cd || Sc() || "";
            return xa(b, a)
        };
        d.td = function(a) {
            var b = Sc() || "";
            return xa(b, a)
        };
        d.qF = function() {
            return this.zc ? "-O" : this.Wm ? "-moz" : this.Ls ? "-ms" : "-webkit"
        };
        d.ok = function() {
            return {
                c: "TVHTML5",
                cbr: this.cd,
                cbrand: this.Ib,
                cbrver: this.Ye,
                cmodel: this.Ca,
                cnetwork: this.Sm,
                cos: this.cj,
                cosver: this.bj,
                cplatform: this.$e,
                cver: "4"
            }
        };
        d.zI = function() {
            var a = {};
            this.Ib && (a.cbrand = this.Ib);
            this.Ca && (a.cmodel = this.Ca);
            this.$e && (a.cplatform = this.$e);
            a.e = this.Up();
            return a
        };
        d.Vq = function() {
            return Math.max(0, this.qz() - 1 - this.pz())
        };
        d.qz = function() {
            return this.Td && this.ja && this.ja.programStartupCount ? this.ja.programStartupCount : 1
        };
        d.pz = function() {
            return this.Td && this.ja && this.ja.programCleanExitCount ? this.ja.programCleanExitCount : 0
        };
        d.Uv = function(a) {
            a.Vi = this.Vi;
            a.Ui = this.Ui
        };
        d.AA = function() {
            this.Td && (this.ja && this.ja.requestSavegameSync) && this.ja.requestSavegameSync()
        };
        d.oN = function(a) {
            return this.Ks.QT(a)
        };
        d.OH = function() {
            return this.Sw
        };
        d.ER = function(a) {
            return this.dd[a] || this.dj
        };
        d.XG = function() {
            var a = {
                Label: this.Js,
                Platform: this.$e || "unknown",
                Brand: this.Ib || "unknown",
                Model: this.Ca || "unknown",
                Browser: "unknown",
                "User Agent": Sc(),
                OS: "unknown",
                Network: this.Sm || "unknown"
            };
            this.Vm && (a.Label += " (" + this.Vm + ")");
            this.cd && (a.Browser = this.cd, this.Ye && (a.Browser += " (" + this.Ye + ")"));
            var b = [];
            this.g.VK_FAST_FWD && b.push(" VK_FAST_FWD=" + this.g.VK_FAST_FWD);
            this.g.VK_REWIND && b.push(" VK_REWIND=" + this.g.VK_REWIND);
            this.g.VK_TRACK_PREV && b.push(" VK_TRACK_PREV=" + this.g.VK_TRACK_PREV);
            this.g.VK_TRACK_NEXT &&
                b.push(" VK_TRACK_NEXT=" + this.g.VK_TRACK_NEXT);
            this.g.VK_PLAY && b.push(" VK_PLAY=" + this.g.VK_PLAY);
            this.g.VK_STOP && b.push(" VK_STOP=" + this.g.VK_STOP);
            0 < b.length && (a.Browser += " with key map" + b.join());
            this.cj && (a.OS = this.cj, this.bj && (a.OS += " (" + this.bj + ")"));
            var b = "",
                c;
            for (c in sb) this.Ac(sb[c]) && (b += sb[c].name + ", ");
            a["Active TV Experiments"] = b || "None";
            return a
        };
        d.Up = function() {
            return this.ee && this.ee.ea().join() || ""
        };
        te.$inject = ["$window", "locale", "debugModel", "keyMapModel"];

        function ue() {
            D.call(this);
            this.message = ""
        }
        z(ue, D);
        uc(ue, ["message"]);
        var ve = {
            0: Ob,
            1: Pb,
            2: Qb,
            3: Rb,
            4: Sb,
            5: Tb,
            6: Ub
        };

        function we() {};

        function xe() {}
        z(xe, we);
        xe.prototype.O = function() {
            var a = 0;
            Sa(this.qb(!0), function() {
                a++
            });
            return a
        };
        xe.prototype.clear = function() {
            var a = Ta(this.qb(!0)),
                b = this;
            B(a, function(a) {
                b.remove(a)
            })
        };

        function ye(a) {
            this.Hb = a
        }
        z(ye, xe);
        d = ye.prototype;
        d.KS = function() {
            if (!this.Hb) return !1;
            try {
                return this.Hb.setItem("__sak", "1"), this.Hb.removeItem("__sak"), !0
            } catch (a) {
                return !1
            }
        };
        d.mm = function(a, b) {
            try {
                this.Hb.setItem(a, b)
            } catch (c) {
                if (0 == this.Hb.length) throw "Storage mechanism: Storage disabled";
                throw "Storage mechanism: Quota exceeded";
            }
        };
        d.get = function(a) {
            a = this.Hb.getItem(a);
            if (!v(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
            return a
        };
        d.remove = function(a) {
            this.Hb.removeItem(a)
        };
        d.O = function() {
            return this.Hb.length
        };
        d.qb = function(a) {
            var b = 0,
                c = this.Hb,
                e = new Qa;
            e.next = function() {
                if (b >= c.length) throw Pa;
                var e;
                e = c.key(b++);
                if (a) return e;
                e = c.getItem(e);
                if (!v(e)) throw "Storage mechanism: Invalid value was encountered";
                return e
            };
            return e
        };
        d.clear = function() {
            this.Hb.clear()
        };
        d.key = function(a) {
            return this.Hb.key(a)
        };

        function ze() {
            var a = null;
            try {
                a = window.localStorage || null
            } catch (b) {}
            this.Hb = a
        }
        z(ze, ye);

        function Ae(a, b) {
            if (K && !kd(9)) {
                Be || (Be = new eb);
                this.Na = Be.get(a);
                this.Na || (b ? this.Na = document.getElementById(b) : (this.Na = document.createElement("userdata"), this.Na.addBehavior("#default#userData"), document.body.appendChild(this.Na)), Be.tb(a, this.Na));
                this.lr = a;
                try {
                    this.rO()
                } catch (c) {
                    this.Na = null
                }
            }
        }
        z(Ae, xe);
        var Ce = {
                ".": ".2E",
                "!": ".21",
                "~": ".7E",
                "*": ".2A",
                "'": ".27",
                "(": ".28",
                ")": ".29",
                "%": "."
            },
            Be = null;
        d = Ae.prototype;
        d.Na = null;
        d.lr = null;

        function De(a) {
            return "_" + encodeURIComponent(a).replace(/[.!~*'()%]/g, function(a) {
                return Ce[a]
            })
        }
        d.LS = function() {
            return !!this.Na
        };
        d.mm = function(a, b) {
            this.Na.setAttribute(De(a), b);
            this.yr()
        };
        d.get = function(a) {
            a = this.Na.getAttribute(De(a));
            if (!v(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
            return a
        };
        d.remove = function(a) {
            this.Na.removeAttribute(De(a));
            this.yr()
        };
        d.O = function() {
            return this.Wr().attributes.length
        };
        d.qb = function(a) {
            var b = 0,
                c = this.Wr().attributes,
                e = new Qa;
            e.next = function() {
                if (b >= c.length) throw Pa;
                var e;
                e = c[b++];
                if (a) return decodeURIComponent(e.nodeName.replace(/\./g, "%")).substr(1);
                e = e.nodeValue;
                if (!v(e)) throw "Storage mechanism: Invalid value was encountered";
                return e
            };
            return e
        };
        d.clear = function() {
            for (var a = this.Wr(), b = a.attributes.length; 0 < b; b--) a.removeAttribute(a.attributes[b - 1].nodeName);
            this.yr()
        };
        d.rO = function() {
            this.Na.load(this.lr)
        };
        d.yr = function() {
            try {
                this.Na.save(this.lr)
            } catch (a) {
                throw "Storage mechanism: Quota exceeded";
            }
        };
        d.Wr = function() {
            return this.Na.XMLDocument.documentElement
        };

        function Ee(a, b) {
            this.qg = a;
            this.Pe = b + "::"
        }
        z(Ee, xe);
        d = Ee.prototype;
        d.qg = null;
        d.Pe = "";
        d.mm = function(a, b) {
            this.qg.mm(this.Pe + a, b)
        };
        d.get = function(a) {
            return this.qg.get(this.Pe + a)
        };
        d.remove = function(a) {
            this.qg.remove(this.Pe + a)
        };
        d.qb = function(a) {
            var b = this.qg.qb(!0),
                c = this,
                e = new Qa;
            e.next = function() {
                for (var e = b.next(); e.substr(0, c.Pe.length) != c.Pe;) e = b.next();
                return a ? e.substr(c.Pe.length) : c.qg.get(e)
            };
            return e
        };

        function Fe(a) {
            this.Li = a;
            this.pA = new jc
        }
        d = Fe.prototype;
        d.Li = null;
        d.pA = null;
        d.hi = function(a, b) {
            s(b) ? this.Li.mm(a, this.pA.Er(b)) : this.Li.remove(a)
        };
        d.get = function(a) {
            var b;
            try {
                b = this.Li.get(a)
            } catch (c) {
                return
            }
            if (null !== b) try {
                return hc(b)
            } catch (e) {
                throw "Storage: Invalid value was encountered";
            }
        };
        d.remove = function(a) {
            this.Li.remove(a)
        };

        function Ge(a) {
            Fe.call(this, a)
        }
        z(Ge, Fe);

        function He(a) {
            this.data = a
        }

        function Ie(a) {
            return !s(a) || a instanceof He ? a : new He(a)
        }
        Ge.prototype.hi = function(a, b) {
            Ge.f.hi.call(this, a, Ie(b))
        };
        Ge.prototype.Xp = function(a) {
            a = Ge.f.get.call(this, a);
            if (!s(a) || a instanceof Object) return a;
            throw "Storage: Invalid value was encountered";
        };
        Ge.prototype.get = function(a) {
            if (a = this.Xp(a)) {
                if (a = a.data, !s(a)) throw "Storage: Invalid value was encountered";
            } else a = void 0;
            return a
        };

        function Je(a) {
            Fe.call(this, a)
        }
        z(Je, Ge);
        Je.prototype.hi = function(a, b, c) {
            if (b = Ie(b)) {
                if (c) {
                    if (c < y()) {
                        Je.prototype.remove.call(this, a);
                        return
                    }
                    b.expiration = c
                }
                b.creation = y()
            }
            Je.f.hi.call(this, a, b)
        };
        Je.prototype.Xp = function(a, b) {
            var c = Je.f.Xp.call(this, a);
            if (c) {
                var e;
                if (e = !b) {
                    e = c.creation;
                    var f = c.expiration;
                    e = !!f && f < y() || !!e && e > y()
                }
                if (e) Je.prototype.remove.call(this, a);
                else return c
            }
        };

        function Ke(a) {
            this.uB = a
        }
        var Le = /\s*;\s*/;
        d = Ke.prototype;
        d.I2 = function() {
            return navigator.cookieEnabled
        };
        d.sT = function(a) {
            return !/[;=\s]/.test(a)
        };
        d.tT = function(a) {
            return !/[;\r\n]/.test(a)
        };
        d.Br = function(a, b, c, e, f, g) {
            if (!this.sT(a)) throw Error('Invalid cookie name "' + a + '"');
            if (!this.tT(b)) throw Error('Invalid cookie value "' + b + '"');
            s(c) || (c = -1);
            f = f ? ";domain=" + f : "";
            e = e ? ";path=" + e : "";
            g = g ? ";secure" : "";
            c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(y() + 1E3 * c)).toUTCString();
            this.wT(a + "=" + b + f + e + c + g)
        };
        d.get = function(a, b) {
            for (var c = a + "=", e = this.Ur(), f = 0, g; g = e[f]; f++) {
                if (0 == g.lastIndexOf(c, 0)) return g.substr(c.length);
                if (g == a) return ""
            }
            return b
        };
        d.remove = function(a, b, c) {
            var e = this.ET(a);
            this.Br(a, "", 0, b, c);
            return e
        };
        d.Ab = function() {
            return this.Em().keys
        };
        d.ea = function() {
            return this.Em().OA
        };
        d.va = function() {
            return !this.Vr()
        };
        d.O = function() {
            return this.Vr() ? this.Ur().length : 0
        };
        d.ET = function(a) {
            return s(this.get(a))
        };
        d.Ei = function(a) {
            for (var b = this.Em().OA, c = 0; c < b.length; c++)
                if (b[c] == a) return !0;
            return !1
        };
        d.clear = function() {
            for (var a = this.Em().keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
        };
        d.wT = function(a) {
            this.uB.cookie = a
        };
        d.Vr = function() {
            return this.uB.cookie
        };
        d.Ur = function() {
            return (this.Vr() || "").split(Le)
        };
        d.Em = function() {
            for (var a = this.Ur(), b = [], c = [], e, f, g = 0; f = a[g]; g++) e = f.indexOf("="), -1 == e ? (b.push(""), c.push(f)) : (b.push(f.substring(0, e)), c.push(f.substring(e + 1)));
            return {
                keys: b,
                OA: c
            }
        };
        var Me = new Ke(document);
        Me.W_ = 3950;
        var Ne = document.domain;

        function Oe(a, b) {
            return Me.get("yt-dev." + a, b)
        }

        function Pe(a, b, c) {
            return Me.remove("yt-dev." + a, b || "/", c || Ne)
        };

        function Qe(a) {
            var b = new ze;
            (b = b.KS() ? a ? new Ee(b, a) : b : null) || (a = new Ae(a || "UserDataSharedStore"), b = a.LS() ? a : null);
            this.rm = (a = b) ? new Je(a) : null
        }
        Qe.prototype.Dr = function() {
            return !!this.rm
        };
        Qe.prototype.zx = function(a, b, c, e) {
            c = c || 31104E3;
            if (this.Dr()) try {
                this.rm.hi(a, b, y() + 1E3 * c);
                return
            } catch (f) {}
            this.remove(a);
            var g = "";
            if (e) try {
                g = escape(I(b))
            } catch (k) {
                return
            } else g = escape(b);
            a = "yt-dev." + a;
            Me.Br(a, g, c, "/", Ne)
        };
        Qe.prototype.get = function(a, b) {
            var c = "";
            if (this.Dr()) try {
                c = this.rm.get(a)
            } catch (e) {}
            if (!c && (c = Oe(a, "")) && (c = unescape(c), b)) try {
                c = hc(c)
            } catch (f) {
                this.remove(a), c = ""
            }
            return c
        };
        Qe.prototype.remove = function(a) {
            this.Dr() && this.rm.remove(a);
            Pe(a)
        };

        function Re(a) {
            this.$y = a;
            this.uj = new Qe("yt.leanback");
            var b;
            for (a = this.get("schema-version", 31536E4, !0) || 0; 7 > a;) b = ve[a], b = new b(this), b.Rd(), a++, this.sb("schema-version", a, 31536E4)
        }
        Re.prototype.sb = function(a, b, c, e) {
            this.uj.zx(a, b, c, e);
            this.$y.AA()
        };
        Re.prototype.get = function(a, b, c) {
            var e = this.uj.get(a, c);
            e && b && this.sb(a, e, b, c);
            return e
        };
        Re.prototype.remove = function(a) {
            this.uj.remove(a);
            this.$y.AA()
        };
        Re.$inject = ["environmentModel"];

        function Se(a) {
            this.Yz = a;
            this.Ji = this.Yz.get("captions-settings") || {}
        }
        Se.prototype.yO = function() {
            return this.Ji && this.Ji.Tz ? this.Ji.Tz : 3
        };
        Se.prototype.xy = function(a) {
            this.Ji.Tz = a;
            this.Yz.sb("captions-settings", this.Ji)
        };
        Se.$inject = ["localStorage"];

        function Te(a, b, c) {
            this.Ia = a;
            this.serviceQuery = b;
            this.eb = c;
            this.en = this.bF();
            this.bu = "request-playback";
            this.Um = "";
            this.Yi = null;
            this.cn = this.Ps = "";
            this.channel = null;
            this.dislikesLabel = this.description = "";
            this.dislikesStyle = {};
            this.duration = 0;
            this.errorCode = null;
            this.pV = {};
            this.imageUrl = H.b + "/../img/no_thumbnail.jpg";
            this.oD = this.gt = !1;
            this.likesLabel = "";
            this.likesStyle = {};
            this.wt = null;
            this.videoId = this.title = this.uploadedDateLabel = "";
            this.viewCount = 0;
            this.viewCountLabel = "";
            this.Os = this.Kb = !1
        }
        Te.prototype.bF = function() {
            return Fb[this.eb] ? this.eb : this.eb + (this.serviceQuery || "")
        };
        Te.CACHE_TYPE = "video";

        function Ue(a, b) {
            this.lm = a;
            this.gO = b;
            this.video = null;
            this.gr = 0;
            this.er = !1
        }
        Ue.prototype.cH = function(a, b, c, e, f) {
            var g = {
                list: this.video.en,
                start: this.gr,
                video_id: this.video.videoId
            };
            g.dash = !!this.lm.br("dash_enabled");
            g.retryneterr = this.lm.supportsNetworkRetry && !!this.lm.br("network_retry");
            g.cenchd = this.lm.supportsHdDrm;
            g.cc_load_policy = this.gO.yO();
            this.er && (g.autoplay = 1);
            a && (g.oauth_token = a);
            this.video.Yi && (g.vvt = this.video.Yi);
            b && (g.feature = b);
            e && (g.mdx = 1);
            c && c.length && (g.ytr = c.join(","));
            f && (g.is_fling = 1);
            return g
        };
        Ue.prototype.OI = function(a, b, c) {
            this.ES();
            this.video = a;
            this.gr = b || 0;
            this.er = !!c
        };
        Ue.prototype.ES = function() {
            this.videoId = "";
            this.gr = 0;
            this.er = !1
        };
        Ue.$inject = ["environmentModel", "captionsSettingsService"];

        function Ve(a, b) {
            this.imageUrl = "";
            this.Ia = a;
            this.serviceQuery = b;
            this.bW = this.id = this.ZN = this.videoId = this.title = "";
            this.hO = "0"
        };

        function We(a, b) {
            this.top = a || 0;
            this.left = b || 0
        };

        function Xe(a, b, c) {
            Te.call(this, a, b, c);
            this.mh = "";
            this.Fc = 5
        }
        z(Xe, Te);
        Xe.prototype.HL = function(a) {
            for (var b in a) this[b] = a[b]
        };

        function Ye(a, b) {
            Cc.call(this);
            this.FL = a;
            this.Fq = b
        }
        z(Ye, Cc);
        Ye.prototype.load = function() {
            this.clear();
            var a = Gc(this.FL, "", "", this.Fq.currentVideo.videoId, {}, "postplaytile"),
                b = this.Fq.Wo();
            if (b) {
                var c = new Xe(b.Ia, b.serviceQuery, b.eb);
                c.HL(b);
                c.mh = this.Fq.Uj().model.title;
                a.Hn(c)
            }
            a.IL(3);
            this.rows.push(a)
        };
        Ye.$inject = ["relatedVideosService", "watchModel"];

        function Ze() {
            D.call(this);
            this.timeLeft = this.percentagePlayed = this.percentageLoaded = this.percentagePlayedStyle = this.percentageLoadedStyle = this.duration = this.currentTime = 0
        }
        z(Ze, D);
        uc(Ze, "currentTime duration percentageLoadedStyle percentagePlayedStyle percentageLoaded percentagePlayed timeLeft".split(" "));

        function $e(a) {
            var b = a.name || "";
            a.ua && (b = b + " (" + a.ua + ")");
            this.eh = ra(b);
            var b = a.ye ? "connected" : "disconnected",
                c = "mdx-unknown ";
            "LOUNGE_SCREEN" == a.type ? c = "mdx-screen " : a.sd && (c = 0 < a.sd.search(/tablet|ipad/g) ? "mdx-tablet " : "mdx-mobile ");
            this.Lt = c + b
        };

        function af() {
            this.Vp = this.cW = this.className = this.message = this.id = "";
            this.Bx = !1;
            this.cr = this.Ax = 0
        };

        function bf() {
            D.call(this);
            this.percentageScrolled = 0
        }
        z(bf, D);
        uc(bf, ["percentageScrolled"]);

        function cf(a) {
            Cc.call(this);
            this.ZU = a
        }
        z(cf, Cc);
        cf.prototype.load = function() {
            this.rows.push(Ec(this.ZU, "", "icon-search"))
        };
        cf.$inject = ["searchService"];
        var df = {
            OW: "complete",
            l0: "success",
            ERROR: "error",
            EW: "abort",
            e0: "ready",
            f0: "readystatechange",
            TIMEOUT: "timeout",
            YX: "incrementaldata",
            c0: "progress"
        };

        function ef(a, b) {
            this.GP = a;
            this.uT = b
        }
        d = ef.prototype;
        d.get = function(a, b, c, e, f) {
            c = this.Zr(c, e);
            b = je(b);
            a = re(a, b, !0);
            a = me(a, b);
            c.send(a, "GET", null, f)
        };
        d.post = function(a, b, c, e, f, g) {
            e = this.Zr(e, f);
            f = je(c);
            b = je(b);
            c = v(c) ? c : ie(f);
            a = re(a, b, !0);
            e.send(a, "POST", c, g)
        };
        d.$U = function(a, b, c, e, f, g) {
            e = this.Zr(e, f);
            c = je(c);
            b = je(b);
            a = re(a, b);
            a = me(a, c);
            e.send(a, "DELETE", null, g)
        };
        d.jsonp = function(a, b, c, e, f) {
            b = je(b);
            a = new this.uT(re(a, b), f);
            a.dU(3E4);
            a.send(b, c, e)
        };
        d.Zr = function(a, b) {
            var c = new this.GP;
            c.addEventListener("success", w(function(b) {
                b = b.target;
                a && a(this.transformResponse(b));
                b.ta()
            }, this));
            c.addEventListener(df.ERROR, function(a) {
                a = a.target;
                b && b(a.Aj());
                a.ta()
            });
            return c
        };
        d.transformResponse = function(a) {
            var b = a.getResponseHeader("content-type"),
                c;
            0 <= b.indexOf("xml") ? c = a.iS() : 0 <= b.indexOf("html") ? c = a.Bf() : 0 > b.indexOf("image") && (c = a.hS());
            return c
        };
        ef.$inject = ["xhrBackend", "jsonpBackend"];

        function ff(a) {
            this.eS = a;
            this.Oi = {}
        }
        ff.prototype.get = function(a, b) {
            var c = a.replace(/ /g, "_");
            if (this.Oi[c]) b(this.Oi[c].slice());
            else {
                var e = {
                        q: a
                    },
                    f = w(function(e) {
                        var f = a.split("").pop() || "";
                        this.Oi[c] = this.SA(e.results, f);
                        for (var l in e.next_predictions) this.Oi[c + l.toUpperCase()] = this.SA(e.next_predictions[l], l);
                        b(this.Oi[c].slice())
                    }, this);
                this.eS.jsonp("/quicksuggest_ajax", e, f, null, "jsonp")
            }
        };
        ff.prototype.SA = function(a, b) {
            var c = [];
            a.forEach(function(a) {
                a = a.toUpperCase();
                switch (a) {
                    case " ":
                        c.push("_");
                        break;
                    case "":
                    case b:
                        break;
                    default:
                        c.push(a)
                }
            }, this);
            return c
        };
        ff.$inject = ["ytHttp"];
        var gf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

        function hf(a) {
            if (jf) {
                jf = !1;
                var b = h.location;
                if (b) {
                    var c = b.href;
                    if (c && (c = (c = hf(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname) throw jf = !0, Error();
                }
            }
            return a.match(gf)
        }
        var jf = Yc;

        function kf(a) {
            if (a[1]) {
                var b = a[0],
                    c = b.indexOf("#");
                0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
                c = b.indexOf("?");
                0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0)
            }
            return a.join("")
        }

        function lf(a, b, c) {
            if (u(b))
                for (var e = 0; e < b.length; e++) lf(a, String(b[e]), c);
            else null != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
        }

        function mf(a, b) {
            for (var c in b) lf(c, b[c], a);
            return a
        };

        function nf() {
            this.tc = Array;
            this.GA = {}
        }
        d = nf.prototype;
        d.Ga = function(a, b) {
            this.GA[a] = w(b, this)
        };
        d.parse = function(a, b) {
            if (b) {
                var c = null,
                    e;
                for (e in b) c = this.BU(e), c.call(this, a, e, b[e])
            }
            return a
        };
        d.BU = function(a) {
            return this.GA[a] || this.KT
        };
        d.KT = function(a, b, c) {
            b = oe(b, "_");
            b in a && (a[b] = this.fa(c));
            return a
        };
        d.fa = function(a) {
            return a
        };

        function of (a) {
            return function() {
                return a
            }
        } of (!1); of (!0); of (null);

        function pf(a) {
            return function() {
                throw a;
            }
        };
        /*
         Portions of this code are from MochiKit, received by
         The Closure Authors under the MIT license. All other code is Copyright
         2005-2009 The Closure Authors. All Rights Reserved.
        */
        function qf(a, b) {
            this.Jl = [];
            this.Ey = a;
            this.Ww = b || null
        }
        d = qf.prototype;
        d.rA = !1;
        d.ti = !1;
        d.qq = !1;
        d.NK = !1;
        d.hr = !1;
        d.Nl = 0;
        d.cancel = function(a) {
            if (this.oi()) this.mi instanceof qf && this.mi.cancel();
            else {
                if (this.fg) {
                    var b = this.fg;
                    delete this.fg;
                    a ? b.cancel(a) : b.HN()
                }
                this.Ey ? this.Ey.call(this.Ww, this) : this.hr = !0;
                this.oi() || this.Al(new rf(this))
            }
        };
        d.HN = function() {
            this.Nl--;
            0 >= this.Nl && this.cancel()
        };
        d.Hx = function(a, b) {
            this.qq = !1;
            this.Hr(a, b)
        };
        d.Hr = function(a, b) {
            this.rA = !0;
            this.mi = b;
            this.ti = !a;
            this.Dz()
        };
        d.EA = function() {
            if (this.oi()) {
                if (!this.hr) throw new sf(this);
                this.hr = !1
            }
        };
        d.fy = function(a) {
            this.EA();
            this.DA(a);
            this.Hr(!0, a)
        };
        d.Al = function(a) {
            this.EA();
            this.DA(a);
            this.lx(a);
            this.Hr(!1, a)
        };
        d.lx = function() {};
        d.DA = function() {};
        d.xp = function(a, b) {
            return this.ri(a, null, b)
        };
        d.CL = function(a, b) {
            return this.ri(null, a, b)
        };
        d.u0 = function(a, b) {
            return this.ri(a, a, b)
        };
        d.ri = function(a, b, c) {
            this.Jl.push([a, b, c]);
            this.oi() && this.Dz();
            return this
        };
        d.AR = function(a) {
            this.ri(a.fy, a.Al, a);
            return this
        };
        d.w0 = function(a) {
            return this.xp(w(a.CT, a))
        };
        d.CT = function(a) {
            var b = new qf;
            this.AR(b);
            a && (b.fg = this, this.Nl++);
            return b
        };
        d.oi = function() {
            return this.rA
        };
        d.RK = function(a) {
            return a instanceof Error
        };
        d.Ix = function() {
            return Fa(this.Jl, function(a) {
                return ga(a[1])
            })
        };
        d.Dz = function() {
            this.xq && (this.oi() && this.Ix()) && (h.clearTimeout(this.xq), delete this.xq);
            this.fg && (this.fg.Nl--, delete this.fg);
            for (var a = this.mi, b = !1, c = !1; this.Jl.length && !this.qq;) {
                var e = this.Jl.shift(),
                    f = e[0],
                    g = e[1],
                    e = e[2];
                if (f = this.ti ? g : f) try {
                    var k = f.call(e || this.Ww, a);
                    s(k) && (this.ti = this.ti && (k == a || this.RK(k)), this.mi = a = k);
                    a instanceof qf && (this.qq = c = !0)
                } catch (l) {
                    a = l, this.ti = !0, this.lx(a), this.Ix() || (b = !0)
                }
            }
            this.mi = a;
            c && (a.ri(w(this.Hx, this, !0), w(this.Hx, this, !1)), a.NK = !0);
            b && (this.xq = h.setTimeout(pf(a),
                0))
        };

        function sf(a) {
            oa.call(this);
            this.k2 = a
        }
        z(sf, oa);
        sf.prototype.message = "Deferred has already fired";
        sf.prototype.name = "AlreadyCalledError";

        function rf(a) {
            oa.call(this);
            this.l2 = a
        }
        z(rf, oa);
        rf.prototype.message = "Deferred was canceled";
        rf.prototype.name = "CanceledError";

        function tf(a, b) {
            var c = b || {},
                e = c.document || document,
                f = document.createElement("SCRIPT"),
                g = {
                    wy: f,
                    w: void 0
                },
                k = new qf(uf, g),
                l = null,
                p = null != c.timeout ? c.timeout : 5E3;
            0 < p && (l = window.setTimeout(function() {
                vf(f, !0);
                k.Al(new wf(1, "Timeout reached for loading script " + a))
            }, p), g.w = l);
            f.onload = f.onreadystatechange = function() {
                f.readyState && "loaded" != f.readyState && "complete" != f.readyState || (vf(f, c.zK || !1, l), k.fy(null))
            };
            f.onerror = function() {
                vf(f, !0, l);
                k.Al(new wf(0, "Error while loading script " + a))
            };
            zd(f, {
                type: "text/javascript",
                charset: "UTF-8",
                src: a
            });
            xf(e).appendChild(f);
            return k
        }

        function xf(a) {
            var b = a.getElementsByTagName("HEAD");
            return b && 0 != b.length ? b[0] : a.documentElement
        }

        function uf() {
            if (this && this.wy) {
                var a = this.wy;
                a && "SCRIPT" == a.tagName && vf(a, !0, this.w)
            }
        }

        function vf(a, b, c) {
            null != c && h.clearTimeout(c);
            a.onload = n;
            a.onerror = n;
            a.onreadystatechange = n;
            b && window.setTimeout(function() {
                Jd(a)
            }, 0)
        }

        function wf(a, b) {
            var c = "Jsloader error (code #" + a + ")";
            b && (c += ": " + b);
            oa.call(this, c);
            this.code = a
        }
        z(wf, oa);

        function yf() {}
        d = yf.prototype;
        d.nr = !1;
        d.Kz = function() {
            return this.nr
        };
        d.g1 = yf.prototype.Kz;
        d.ta = function() {
            this.nr || (this.nr = !0, this.A())
        };
        d.hy = function(a) {
            this.qU(na(zf, a))
        };
        d.qU = function(a, b) {
            this.Ri || (this.Ri = []);
            this.Ri.push(w(a, b))
        };
        d.A = function() {
            if (this.Ri)
                for (; this.Ri.length;) this.Ri.shift()()
        };

        function zf(a) {
            a && "function" == typeof a.ta && a.ta()
        };

        function M(a, b) {
            this.type = a;
            this.currentTarget = this.target = b
        }
        d = M.prototype;
        d.HU = function() {};
        d.ta = function() {};
        d.Pd = !1;
        d.defaultPrevented = !1;
        d.Ux = !0;
        d.stopPropagation = function() {
            this.Pd = !0
        };
        d.preventDefault = function() {
            this.defaultPrevented = !0;
            this.Ux = !1
        };

        function Af(a) {
            Af[" "](a);
            return a
        }
        Af[" "] = n;
        var Bf = !K || kd(9),
            Cf = !K || kd(9),
            Df = K && !L("9");
        !Yc || L("528");
        Xc && L("1.9b") || K && L("8") || Wc && L("9.5") || Yc && L("528");
        Xc && !L("8") || K && L("9");

        function Ef(a, b) {
            a && this.kA(a, b)
        }
        z(Ef, M);
        var Ff = [1, 4, 2];
        d = Ef.prototype;
        d.target = null;
        d.IM = null;
        d.GM = 0;
        d.HM = 0;
        d.clientX = 0;
        d.clientY = 0;
        d.screenX = 0;
        d.screenY = 0;
        d.DM = 0;
        d.keyCode = 0;
        d.EM = 0;
        d.vy = !1;
        d.CM = !1;
        d.JM = !1;
        d.FM = !1;
        d.LM = !1;
        d.Hd = null;
        d.kA = function(a, b) {
            var c = this.type = a.type;
            M.call(this, c);
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            var e = a.relatedTarget;
            if (e) {
                if (Xc) {
                    var f;
                    t: {
                        try {
                            Af(e.nodeName);
                            f = !0;
                            break t
                        } catch (g) {}
                        f = !1
                    }
                    f || (e = null)
                }
            } else "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
            this.IM = e;
            this.GM = Yc || void 0 !== a.offsetX ? a.offsetX : a.layerX;
            this.HM = Yc || void 0 !== a.offsetY ? a.offsetY : a.layerY;
            this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
            this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
            this.screenX =
                a.screenX || 0;
            this.screenY = a.screenY || 0;
            this.DM = a.button;
            this.keyCode = a.keyCode || 0;
            this.EM = a.charCode || ("keypress" == c ? a.keyCode : 0);
            this.vy = a.ctrlKey;
            this.CM = a.altKey;
            this.JM = a.shiftKey;
            this.FM = a.metaKey;
            this.LM = Rc ? a.metaKey : a.ctrlKey;
            this.state = a.state;
            this.Hd = a;
            a.defaultPrevented && this.preventDefault();
            delete this.Pd
        };
        d.OT = function(a) {
            return Bf ? this.Hd.button == a : "click" == this.type ? 0 == a : !!(this.Hd.button & Ff[a])
        };
        d.k3 = function() {
            return this.OT(0) && !(Yc && Rc && this.vy)
        };
        d.stopPropagation = function() {
            Ef.f.stopPropagation.call(this);
            this.Hd.stopPropagation ? this.Hd.stopPropagation() : this.Hd.cancelBubble = !0
        };
        d.preventDefault = function() {
            Ef.f.preventDefault.call(this);
            var a = this.Hd;
            if (a.preventDefault) a.preventDefault();
            else if (a.returnValue = !1, Df) try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
            } catch (b) {}
        };
        d.$0 = function() {
            return this.Hd
        };
        d.HU = function() {};
        var Gf = "closure_listenable_" + (1E6 * Math.random() | 0);

        function Hf(a) {
            return !(!a || !a[Gf])
        }
        var If = 0;

        function Jf(a, b, c, e, f, g) {
            this.listener = a;
            this.Ex = b;
            this.src = c;
            this.type = e;
            this.capture = !!f;
            this.Wb = g;
            this.key = ++If;
            this.Qc = this.dg = !1
        }
        Jf.prototype.oq = function() {
            this.Qc = !0;
            this.Wb = this.src = this.Ex = this.listener = null
        };
        var Kf = {},
            Lf = {},
            Mf = {},
            Nf = {};

        function N(a, b, c, e, f) {
            if (u(b)) {
                for (var g = 0; g < b.length; g++) N(a, b[g], c, e, f);
                return null
            }
            c = Of(c);
            return Hf(a) ? a.zf(b, c, e, f) : Pf(a, b, c, !1, e, f)
        }

        function Pf(a, b, c, e, f, g) {
            if (!b) throw Error("Invalid event type");
            f = !!f;
            var k = Lf;
            b in k || (k[b] = {
                C: 0
            });
            k = k[b];
            f in k || (k[f] = {
                C: 0
            }, k.C++);
            var k = k[f],
                l = ia(a),
                p;
            if (k[l]) {
                p = k[l];
                for (var q = 0; q < p.length; q++)
                    if (k = p[q], k.listener == c && k.Wb == g) {
                        if (k.Qc) break;
                        e || (p[q].dg = !1);
                        return p[q]
                    }
            } else p = k[l] = [], k.C++;
            q = Qf();
            k = new Jf(c, q, a, b, f, g);
            k.dg = e;
            q.src = a;
            q.listener = k;
            p.push(k);
            Mf[l] || (Mf[l] = []);
            Mf[l].push(k);
            a.addEventListener ? a.addEventListener(b, q, f) : a.attachEvent(b in Nf ? Nf[b] : Nf[b] = "on" + b, q);
            return Kf[k.key] =
                k
        }

        function Qf() {
            var a = Rf,
                b = Cf ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        }

        function Sf(a, b, c, e, f) {
            if (u(b)) {
                for (var g = 0; g < b.length; g++) Sf(a, b[g], c, e, f);
                return null
            }
            c = Of(c);
            return Hf(a) ? a.sA(b, c, e, f) : Pf(a, b, c, !0, e, f)
        }

        function Tf(a, b, c, e, f) {
            if (u(b)) {
                for (var g = 0; g < b.length; g++) Tf(a, b[g], c, e, f);
                return null
            }
            c = Of(c);
            if (Hf(a)) return a.zl(b, c, e, f);
            e = !!e;
            a = Uf(a, b, e);
            if (!a) return !1;
            for (g = 0; g < a.length; g++)
                if (a[g].listener == c && a[g].capture == e && a[g].Wb == f) return Vf(a[g]);
            return !1
        }

        function Vf(a) {
            if (fa(a) || !a || a.Qc) return !1;
            var b = a.src;
            if (Hf(b)) return b.Ew(a);
            var c = a.type,
                e = a.Ex,
                f = a.capture;
            b.removeEventListener ? b.removeEventListener(c, e, f) : b.detachEvent && b.detachEvent(c in Nf ? Nf[c] : Nf[c] = "on" + c, e);
            b = ia(b);
            Mf[b] && (e = Mf[b], Ja(e, a), 0 == e.length && delete Mf[b]);
            a.oq();
            if (e = Lf[c][f][b]) Ja(e, a), 0 == e.length && (delete Lf[c][f][b], Lf[c][f].C--), 0 == Lf[c][f].C && (delete Lf[c][f], Lf[c].C--), 0 == Lf[c].C && delete Lf[c];
            delete Kf[a.key];
            return !0
        }

        function Uf(a, b, c) {
            var e = Lf;
            return b in e && (e = e[b], c in e && (e = e[c], a = ia(a), e[a])) ? e[a] : null
        }

        function Wf(a, b, c) {
            if (Hf(a)) return a.GU(b, c);
            a = ia(a);
            var e = Mf[a];
            if (e) {
                var f = s(b),
                    g = s(c);
                return f && g ? (e = Lf[b], !!e && !!e[c] && a in e[c]) : f || g ? Fa(e, function(a) {
                    return f && a.type == b || g && a.capture == c
                }) : !0
            }
            return !1
        }

        function Xf(a, b, c, e, f) {
            c = 1;
            b = ia(b);
            if (a[b])
                for (a = La(a[b]), b = 0; b < a.length; b++)(e = a[b]) && !e.Qc && (c &= !1 !== Yf(e, f));
            return Boolean(c)
        }

        function Yf(a, b) {
            var c = a.listener,
                e = a.Wb || a.src;
            a.dg && Vf(a);
            return c.call(e, b)
        }

        function Rf(a, b) {
            if (a.Qc) return !0;
            var c = a.type,
                e = Lf;
            if (!(c in e)) return !0;
            var e = e[c],
                f, g;
            if (!Cf) {
                f = b || ba("window.event");
                var k = !0 in e,
                    l = !1 in e;
                if (k) {
                    if (0 > f.keyCode || void 0 != f.returnValue) return !0;
                    t: {
                        var p = !1;
                        if (0 == f.keyCode) try {
                            f.keyCode = -1;
                            break t
                        } catch (q) {
                            p = !0
                        }
                        if (p || void 0 == f.returnValue) f.returnValue = !0
                    }
                }
                p = new Ef;
                p.kA(f, this);
                f = !0;
                try {
                    if (k) {
                        for (var r = [], t = p.currentTarget; t; t = t.parentNode) r.push(t);
                        g = e[!0];
                        for (var G = r.length - 1; !p.Pd && 0 <= G; G--) p.currentTarget = r[G], f &= Xf(g, r[G], c, !0, p);
                        if (l)
                            for (g =
                                e[!1], G = 0; !p.Pd && G < r.length; G++) p.currentTarget = r[G], f &= Xf(g, r[G], c, !1, p)
                    } else f = Yf(a, p)
                } finally {
                    r && (r.length = 0)
                }
                return f
            }
            c = new Ef(b, this);
            return f = Yf(a, c)
        }
        var Zf = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

        function Of(a) {
            return ga(a) ? a : a[Zf] || (a[Zf] = function(b) {
                return a.handleEvent(b)
            })
        };

        function $f(a) {
            this.src = a;
            this.wa = {};
            this.Ai = 0
        }
        d = $f.prototype;
        d.e2 = function() {
            return this.Ai
        };
        d.x2 = function() {
            var a = 0,
                b;
            for (b in this.wa) a += this.wa[b].length;
            return a
        };
        d.zA = function(a, b, c, e, f) {
            var g = this.wa[a];
            g || (g = this.wa[a] = [], this.Ai++);
            var k = ag(g, b, e, f); - 1 < k ? (a = g[k], c || (a.dg = !1)) : (a = new Jf(b, null, this.src, a, !!e, f), a.dg = c, g.push(a));
            return a
        };
        d.remove = function(a, b, c, e) {
            if (!(a in this.wa)) return !1;
            var f = this.wa[a];
            b = ag(f, b, c, e);
            return -1 < b ? (f[b].oq(), A.splice.call(f, b, 1), 0 == f.length && (delete this.wa[a], this.Ai--), !0) : !1
        };
        d.YR = function(a) {
            var b = a.type;
            if (!(b in this.wa)) return !1;
            var c = Ja(this.wa[b], a);
            c && (a.oq(), 0 == this.wa[b].length && (delete this.wa[b], this.Ai--));
            return c
        };
        d.VR = function(a) {
            var b = 0,
                c;
            for (c in this.wa)
                if (!a || c == a) {
                    for (var e = this.wa[c], f = 0; f < e.length; f++) ++b, e[f].Qc = !0;
                    delete this.wa[c];
                    this.Ai--
                }
            return b
        };
        d.MA = function(a, b) {
            var c = this.wa[a],
                e = [];
            if (c)
                for (var f = 0; f < c.length; ++f) {
                    var g = c[f];
                    g.capture == b && e.push(g)
                }
            return e
        };
        d.TR = function(a, b, c, e) {
            a = this.wa[a];
            var f = -1;
            a && (f = ag(a, b, c, e));
            return -1 < f ? a[f] : null
        };
        d.UR = function(a, b) {
            var c = s(a),
                e = s(b);
            return Wa(this.wa, function(f) {
                for (var g = 0; g < f.length; ++g)
                    if (!(c && f[g].type != a || e && f[g].capture != b)) return !0;
                return !1
            })
        };

        function ag(a, b, c, e) {
            for (var f = 0; f < a.length; ++f) {
                var g = a[f];
                if (!g.Qc && g.listener == b && g.capture == !!c && g.Wb == e) return f
            }
            return -1
        };

        function O() {
            this.yc = new $f(this);
            this.kz = this
        }
        z(O, yf);
        O.prototype[Gf] = !0;
        d = O.prototype;
        d.rp = null;
        d.$z = function() {
            return this.rp
        };
        d.PL = function(a) {
            this.rp = a
        };
        d.addEventListener = function(a, b, c, e) {
            N(this, a, b, c, e)
        };
        d.removeEventListener = function(a, b, c, e) {
            Tf(this, a, b, c, e)
        };
        d.V = function(a) {
            this.az();
            var b, c = this.$z();
            if (c) {
                b = [];
                for (var e = 1; c; c = c.$z()) b.push(c), ++e
            }
            c = this.kz;
            e = a.type || a;
            if (v(a)) a = new M(a, c);
            else if (a instanceof M) a.target = a.target || c;
            else {
                var f = a;
                a = new M(e, c);
                db(a, f)
            }
            var f = !0,
                g;
            if (b)
                for (var k = b.length - 1; !a.Pd && 0 <= k; k--) g = a.currentTarget = b[k], f = g.um(e, !0, a) && f;
            a.Pd || (g = a.currentTarget = c, f = g.um(e, !0, a) && f, a.Pd || (f = g.um(e, !1, a) && f));
            if (b)
                for (k = 0; !a.Pd && k < b.length; k++) g = a.currentTarget = b[k], f = g.um(e, !1, a) && f;
            return f
        };
        d.A = function() {
            O.f.A.call(this);
            this.gH();
            this.rp = null
        };
        d.zf = function(a, b, c, e) {
            this.az();
            return this.yc.zA(a, b, !1, c, e)
        };
        d.sA = function(a, b, c, e) {
            return this.yc.zA(a, b, !0, c, e)
        };
        d.zl = function(a, b, c, e) {
            return this.yc.remove(a, b, c, e)
        };
        d.Ew = function(a) {
            return this.yc.YR(a)
        };
        d.gH = function(a) {
            return this.yc ? this.yc.VR(a) : 0
        };
        d.um = function(a, b, c) {
            a = this.yc.wa[a];
            if (!a) return !0;
            a = La(a);
            for (var e = !0, f = 0; f < a.length; ++f) {
                var g = a[f];
                if (g && !g.Qc && g.capture == b) {
                    var k = g.listener,
                        l = g.Wb || g.src;
                    g.dg && this.Ew(g);
                    e = !1 !== k.call(l, c) && e
                }
            }
            return e && !1 != c.Ux
        };
        d.MA = function(a, b) {
            return this.yc.MA(a, b)
        };
        d.MJ = function(a, b, c, e) {
            return this.yc.TR(a, b, c, e)
        };
        d.GU = function(a, b) {
            return this.yc.UR(a, b)
        };
        d.o4 = function(a) {
            this.kz = a
        };
        d.az = function() {};

        function bg(a, b) {
            O.call(this);
            this.jg = a || 1;
            this.Qf = b || h;
            this.Zq = w(this.UP, this);
            this.ar = y()
        }
        z(bg, O);
        d = bg.prototype;
        d.enabled = !1;
        d.Gb = null;
        d.LA = function() {
            return this.jg
        };
        d.bl = function(a) {
            this.jg = a;
            this.Gb && this.enabled ? (this.Ob(), this.start()) : this.Gb && this.Ob()
        };
        d.UP = function() {
            if (this.enabled) {
                var a = y() - this.ar;
                0 < a && a < 0.8 * this.jg ? this.Gb = this.Qf.setTimeout(this.Zq, this.jg - a) : (this.Gb && (this.Qf.clearTimeout(this.Gb), this.Gb = null), this.PN(), this.enabled && (this.Gb = this.Qf.setTimeout(this.Zq, this.jg), this.ar = y()))
            }
        };
        d.PN = function() {
            this.V("tick")
        };
        d.start = function() {
            this.enabled = !0;
            this.Gb || (this.Gb = this.Qf.setTimeout(this.Zq, this.jg), this.ar = y())
        };
        d.Ob = function() {
            this.enabled = !1;
            this.Gb && (this.Qf.clearTimeout(this.Gb), this.Gb = null)
        };
        d.A = function() {
            bg.f.A.call(this);
            this.Ob();
            delete this.Qf
        };

        function cg(a, b, c) {
            if (ga(a)) c && (a = w(a, c));
            else if (a && "function" == typeof a.handleEvent) a = w(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            return 2147483647 < b ? -1 : h.setTimeout(a, b || 0)
        };

        function dg(a, b, c) {
            this.yo = a;
            this.iK = b || 0;
            this.j = c;
            this.hK = w(this.Fx, this)
        }
        z(dg, yf);
        d = dg.prototype;
        d.Id = 0;
        d.A = function() {
            dg.f.A.call(this);
            this.xh();
            delete this.yo;
            delete this.j
        };
        d.start = function(a) {
            this.xh();
            this.Id = cg(this.hK, s(a) ? a : this.iK)
        };
        d.xh = function() {
            this.isActive() && h.clearTimeout(this.Id);
            this.Id = 0
        };
        d.CU = function() {
            this.xh();
            this.Fx()
        };
        d.Q0 = function() {
            this.isActive() && this.CU()
        };
        dg.prototype.isActive = function() {
            return 0 != this.Id
        };
        dg.prototype.Fx = function() {
            this.Id = 0;
            this.yo && this.yo.call(this.j)
        };

        function eg(a, b) {
            this.Vt = a;
            this.j = b;
            this.Ff = new dg(w(this.mL, this), 0, this)
        }
        z(eg, yf);
        d = eg.prototype;
        d.ni = 0;
        d.Tp = 0;
        d.Rp = !1;
        d.A = function() {
            this.Ff.ta();
            delete this.Vt;
            delete this.j;
            eg.f.A.call(this)
        };
        d.start = function(a, b) {
            this.ZP();
            this.Rp = !1;
            var c = b || 0;
            this.ni = Math.max(a || 0, 0);
            this.Tp = 0 > c ? -1 : y() + c;
            this.Ff.start(0 > c ? this.ni : Math.min(this.ni, c))
        };
        d.ZP = function() {
            this.Ff.xh()
        };
        eg.prototype.isActive = function() {
            return this.Ff.isActive()
        };
        eg.prototype.f3 = function() {
            return this.Rp
        };
        eg.prototype.yd = function() {};
        eg.prototype.NJ = function() {};
        eg.prototype.mL = function() {
            if (this.Vt.call(this.j)) this.Rp = !0, this.yd();
            else if (0 > this.Tp) this.Ff.start(this.ni);
            else {
                var a = this.Tp - y();
                0 >= a ? this.NJ() : this.Ff.start(Math.min(this.ni, a))
            }
        };

        function fg(a, b, c) {
            this.HK = a;
            this.GK = b;
            this.j = c;
            this.FK = w(this.yL, this)
        }
        z(fg, yf);
        d = fg.prototype;
        d.ug = !1;
        d.Gi = 0;
        d.He = null;
        d.ew = function() {
            this.He || this.Gi ? this.ug = !0 : this.pr()
        };
        d.zu = function() {
            this.He && (h.clearTimeout(this.He), this.He = null, this.ug = !1)
        };
        d.pause = function() {
            this.Gi++
        };
        d.cK = function() {
            this.Gi--;
            this.Gi || (!this.ug || this.He) || (this.ug = !1, this.pr())
        };
        d.A = function() {
            fg.f.A.call(this);
            this.zu()
        };
        d.yL = function() {
            this.He = null;
            this.ug && !this.Gi && (this.ug = !1, this.pr())
        };
        d.pr = function() {
            this.He = cg(this.FK, this.GK);
            this.HK.call(this.j)
        };

        function gg() {}
        d = gg.prototype;
        d.ON = function(a, b, c) {
            return new dg(a, b, c)
        };
        d.cL = function(a, b) {
            return new eg(a, b)
        };
        d.tC = function(a, b, c) {
            return new fg(a, b, c)
        };
        d.fi = function() {
            return new Date
        };
        d.On = function(a, b) {
            return setInterval(a, b)
        };
        d.pl = function(a) {
            clearInterval(a)
        };
        d.setTimeout = function(a, b) {
            return setTimeout(a, b)
        };
        d.clearTimeout = function(a) {
            clearTimeout(a)
        };

        function hg(a, b, c) {
            this.g = a;
            this.BV = c;
            this.Ee = {};
            this.cw = b.zI();
            this.gw = !1;
            this.vl = [];
            this.g.jstiming && (this.Ee[this.g.jstiming.load.name] = this.g.jstiming.load, this.g.jstiming.load = null)
        }
        d = hg.prototype;
        d.w4 = function(a) {
            var b = new this.g.jstiming.Timer;
            b.name = a;
            return this.Ee[a] = b
        };
        d.lO = function(a) {
            this.Ee[a] = null
        };
        d.wn = function(a) {
            return this.Ee[a] || null
        };
        d.or = function(a, b) {
            var c = this.wn(a);
            return c && (b ? w(c.tick, c, b) : w(c.tick, c)) || n
        };
        d.bh = function(a, b) {
            var c = this.Ee[a];
            c && c.tick(b)
        };
        d.report = function(a, b) {
            var c = this.Ee[a];
            if (c)
                if (this.wI()) {
                    var e = b && x(b, this.cw) || this.cw;
                    this.g.jstiming.report(c, e);
                    this.Ee[a] = null
                } else this.vl.push(w(this.report, this, a, b)), this.gw || (this.gw = !0, this.xI())
        };
        d.xI = function() {
            tf(H.Lo + "/csi-tail.js").xp(w(this.AS, this))
        };
        d.AS = function() {
            for (var a = this.vl.length - 1; 0 <= a; --a) {
                var b = this.vl[a];
                ga(b) && b()
            }
            this.vl.length = 0
        };
        d.wI = function() {
            return !!ba("jstiming.report", this.g)
        };
        hg.$inject = ["$window", "environmentModel", "timeService"];

        function ig(a, b, c, e, f, g, k, l, p, q) {
            this.id = a;
            this.path = b || "";
            this.Wh = e;
            this.si = c;
            this.Od = f;
            this.qx = g;
            this.gh = k;
            this.Xh = l;
            this.ag = p || {};
            this.vK = q || null;
            this.Dl = this.Gl = this.Fl = this.Cl = n
        }
        d = ig.prototype;
        d.Ne = function() {
            return ""
        };
        d.Pk = function(a) {
            var b = this.Ne() + this.path;
            return kf(mf([b], a || {}))
        };
        d.Uq = function() {
            return "GET"
        };
        d.pc = function(a, b, c, e) {
            this.Cl = w(this.si.lO, this.si, a);
            this.Fl = b ? this.si.or(a, b) : n;
            this.Gl = c ? this.si.or(a, c) : n;
            this.Dl = e ? this.si.or(a, e) : n
        };
        d.Yp = function() {
            this.Fl();
            this.Fl = n
        };
        d.Zp = function() {
            this.Gl();
            this.Gl = n
        };
        d.Uo = function() {
            this.Dl();
            this.Cl = this.Dl = n
        };
        d.xv = function() {
            this.Cl();
            this.Cl = this.Dl = this.Gl = this.Fl = n
        };
        d.load = function(a, b) {
            return this.qA(a, b)
        };
        d.qA = function(a, b, c, e) {
            var f = {};
            this.$O(this.ag);
            this.aP(this.ag);
            x(f, this.ag);
            a && x(f, a);
            if (this.Xh && (a = this.WO(f[this.Xh]))) return b && b(a), a;
            e = e ? e : this.TO();
            this.kg(e, f, b, c);
            return e
        };
        d.TO = function() {
            return new this.gh.tc
        };
        d.kg = function(a, b, c, e) {
            c = c || n;
            var f = w(function(e) {
                    this.Zp();
                    this.gh.parse(a, e);
                    this.qM(this.Xh && b[this.Xh], a);
                    this.Uo();
                    c(a)
                }, this),
                g = w(function() {
                    this.xv();
                    c(a)
                }, this);
            this.Yp();
            "GET" === this.Uq() ? this.Wh.get(this.Ne() + this.path, b, f, e || g) : "JSONP" === this.Uq() && this.Wh.jsonp(this.Ne() + this.path, b, f, e || g)
        };
        d.tO = function(a, b, c) {
            c[a] && (c[b] = c[a], delete c[a]);
            return c
        };
        d.$O = function(a) {
            a && "" === a.hl && (a.hl = this.vK.ld, a.override_hl = 1)
        };
        d.aP = function(a) {
            a && ("" === a.regionId && this.Od.gdataRegionId) && (a.regionId = this.Od.gdataRegionId)
        };
        d.Am = function() {
            return this.gh.tc.CACHE_TYPE
        };
        d.WO = function(a) {
            return a && this.Am() ? this.qx.get(this.Am(), a) : null
        };
        d.qM = function(a, b) {
            a && this.Am() && this.qx.Bq(this.Am(), a, b)
        };

        function jg(a, b, c, e, f, g, k, l, p) {
            var q = {
                client: "youtube",
                ds: "yt"
            };
            p && angular.extend(q, p);
            ig.call(this, a, b, c, e, f, g, k, l, q)
        }
        z(jg, ig);
        jg.prototype.load = function(a, b) {
            var c = [],
                e = {};
            x(e, this.ag);
            a && (a = this.tO("query", "q", a), x(e, a));
            this.Yp();
            this.Wh.jsonp(this.Pk(), e, w(function(a) {
                this.Zp();
                a = a[1];
                for (var g = RegExp("^" + ya(e.q), "i"), k = a.length, l = 0; l < k; ++l) g.test(a[l][0]) && c.push(a[l][0].toUpperCase());
                this.Uo();
                b && b(c)
            }, this));
            return c
        };
        jg.prototype.Ne = function() {
            return "//clients1.google.com"
        };

        function kg(a, b, c, e, f, g, k) {
            D.call(this);
            this.aN = e;
            this.FN = k;
            this.GN = f;
            this.Zy = b;
            this.vL = c;
            this.RV = 1500;
            this.sL = g.ON(this.JN, 1500, this);
            this.AJ = a("[[Results for|Tooltip for search results title. Followed by an actual search query]]")();
            this.query = "";
            this.ul = null;
            this.suggestions = [];
            this.quickSuggestions = [];
            this.Nw = !1;
            this.Nx = this.Zy.supportsQuickSuggest
        }
        z(kg, D);
        uc(kg, ["query", "suggestions", "quickSuggestions"]);
        d = kg.prototype;
        d.F4 = function() {
            this.query = "";
            this.Fz();
            this.jq()
        };
        d.Fz = function() {
            this.suggestions.length = 0;
            this.Aa("suggestions:changed", this.suggestions)
        };
        d.jq = function() {
            this.quickSuggestions.length = 0;
            this.Aa("quickSuggestions:changed", this.quickSuggestions)
        };
        d.uP = function() {
            this.ul = new J
        };
        d.tk = function() {
            var a = (this.suggestions[0] || "").toLocaleUpperCase(),
                b = this.query.toLocaleUpperCase();
            return b && a !== b && 0 === a.indexOf(b) ? a : ""
        };
        d.JN = function() {
            this.query && (this.Nw = !0, this.aN.load({
                query: this.query
            }, this.eT(this.query)))
        };
        d.va = function() {
            return !this.query
        };
        d.eT = function(a) {
            return w(function(b) {
                this.Nw = !1;
                this.query === a && (b.serviceQuery = a, b.title = b.r() ? this.AJ + ' "' + a + '"' : "", this.ul = b, this.Aa("results:changed", b))
            }, this)
        };
        d.ic = function(a, b, c) {
            a != this.query && (a && (a = a.replace("\n", "")), this.query = (a = this.vL.tP(a) ? "" : a) || "", this.jq(), this.tk() || this.Fz(), this.uP(), c || this.oP(), b || this.pP(), this.sL.start())
        };
        d.zy = function(a) {
            this.ic(this.query + a)
        };
        d.fl = function() {
            this.query.length && this.ic(this.query.slice(0, -1), !0, !0)
        };
        d.pP = function() {
            this.query && this.Zy.supportsSearchSuggestion && this.GN.load({
                query: this.query
            }, w(function(a) {
                this.suggestions = a
            }, this))
        };
        d.oP = function() {
            this.query && this.Nx && this.FN.get(this.query, w(function(a) {
                this.quickSuggestions = a
            }, this))
        };
        kg.$inject = "$interpolate environmentModel debugCallService searchService suggestionService timeService quickSuggestService".split(" ");

        function lg(a) {
            this.g = a;
            this.responseType = ""
        }
        lg.prototype.get = function(a, b, c) {
            var e = new D,
                f = new XMLHttpRequest;
            f.responseType = this.responseType;
            var g = n,
                k = n;
            f.onreadystatechange = function() {
                if (f.readyState === XMLHttpRequest.DONE) {
                    b && (g = e.k("success", b));
                    c && (k = e.k("failure", c));
                    var a = f.getResponseHeader("content-type");
                    a && (a = a.match(/json/) ? this.g.JSON.parse(f.response) : a.match(/xml/) ? f.responseXML : "arraybuffer" === f.responseType ? f.response : f.responseText, e.Aa("success", a))
                }
            };
            f.open("GET", a, !0);
            f.send();
            return function() {
                g();
                k()
            }
        };

        function mg(a) {
            this.Tr = null;
            this.yT = a
        }
        mg.prototype.cQ = function(a, b) {
            var c = new lg(window);
            c.responseType = "arraybuffer";
            c.get(this.yT, w(function(c) {
                a.decodeAudioData(c, w(function(a) {
                    this.Tr = a;
                    b()
                }, this), function(a) {
                    console.error("Error in loading sound:", a)
                })
            }, this))
        };

        function ng(a, b) {
            this.templateUrl = a;
            this.data = b || {};
            this.so = 0
        };

        function og() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
                var b = 16 * Math.random() | 0;
                return ("x" == a ? b : b & 3 | 8).toString(16)
            })
        };

        function pg(a) {
            this.id = og();
            this.Hp = this.Rx = a.Xi;
            this.Kp = 0;
            this.Ip = a.Zi;
            this.rl = this.bi = this.gi = this.Gf = 0;
            this.ci = ""
        }
        pg.prototype.RN = function() {
            return I({
                id: this.id,
                recentActive: this.Rx,
                firstActive: this.Hp,
                prevActive: this.Kp,
                firstActiveGeo: this.Ip,
                loginState: this.Gf,
                recentLogin: this.gi,
                firstLogin: this.bi,
                prevLogin: this.rl,
                uga: this.ci
            })
        };

        function qg() {
            this.dB = "";
            this.dm = []
        }
        qg.prototype.Sy = function() {
            return this.dm.join("")
        };
        qg.prototype.jz = function(a) {
            this.dB = a
        };
        qg.prototype.CJ = function() {
            return this.dB
        };

        function rg() {
            this.kp = new hb(25, !0);
            this.mz = {}
        }
        rg.prototype.load = function(a, b) {
            var c = new J;
            c.i.push(this.kp.ea());
            b && b(c);
            return c
        };
        rg.prototype.FI = function(a) {
            return this.mz[a]
        };
        rg.prototype.iR = function(a, b) {
            this.kp.kh(a.videoId, a);
            if (b) {
                var c = new Dc;
                c.xa(b.activeIndex);
                this.mz[a.videoId] = c.wO(b)
            }
        };
        rg.prototype.r = function() {
            return this.kp.O()
        };

        function sg(a, b, c, e, f, g, k, l) {
            Cc.call(this);
            this.mH = a;
            this.KJ = b;
            this.Sv = c;
            this.JL = e;
            this.IJ = f;
            this.Yk = g;
            this.Rv = k;
            this.currentVideo = this.Rc = null;
            this.tp = this.YM();
            this.lI = l
        }
        z(sg, Cc);
        d = sg.prototype;
        d.af = function() {
            var a = this.lh();
            return a ? a.af() : null
        };
        d.YM = function() {
            var a = Ac(this.Yk, "[[Current Watch History|Displays previously watched videos.]]", "icon-hourglass");
            a.model.eb = "HL";
            return a
        };
        d.Hg = function(a, b, c, e) {
            this.currentVideo = a;
            this.Rv.OI(this.currentVideo, c, e);
            var f = b === this.tp;
            f && (b = this.Yk.FI(a.videoId));
            c = this.EI(a.channel);
            b && "[[VEVO Featured Playlist|Title for playlist that contains video from VEVO. VEVO is a music brand name.]]" !== b.model.title && (b.service !== this.Sv || b instanceof Fc) || (c.Hn(a), b = c);
            e = [];
            this.rows.length = 1;
            b !== this.Rc && (this.Rc = this.rows[0] = b, this.Rc.load(n));
            f || this.MI(this.currentVideo.videoId);
            f = this.DI(a);
            e.push(f);
            e.push(c);
            this.AI(a);
            0 < this.Yk.r() &&
                e.push(this.Ko());
            this.BI(e, this.rows);
            this.Us([f, this.tp]);
            this.mH.Be().$emit("active-item-changed", a);
            return b
        };
        d.IK = function() {
            var a = this.Rc;
            this.currentVideo && a && this.Yk.iR(this.currentVideo, a)
        };
        d.HP = function() {
            this.currentVideo = null
        };
        d.BI = function(a, b) {
            for (var c, e = a.length, f = 0; f < e; ++f)(c = a[f]) && (b.some(function(a) {
                return c.model.title === a.model.title
            }) || b.push(c))
        };
        d.EI = function(a) {
            return Gc(this.JL, "[[Uploads for channel:|sWqBGwb2WdBVvjLS_6hayw]] " + a.displayName, a.imageUrl, a.ua)
        };
        d.DI = function(a) {
            return Ec(this.Sv, "[[Related Videos|Title for playlist that shows videos related to the one currently is playing.]]", "icon-related", a.videoId)
        };
        d.AI = function(a) {
            a.gt && this.KJ.Qa(a.channel.ua, w(function(b) {
                if (b.El.length) {
                    var c = Ec(this.IJ, "[[VEVO Featured Playlist|Title for playlist that contains video from VEVO. VEVO is a music brand name.]]", "icon-subscribe");
                    c.serviceQuery = b.El;
                    c.Nf = {
                        videoId: a.videoId,
                        playlistId: b.El
                    };
                    this.rows.push(c)
                }
            }, this))
        };
        d.O1 = function() {
            return this.Rv
        };
        d.MI = function(a) {
            a = this.Rc.Cp("videoId", a);
            this.Rc.xa(Math.max(a, 0))
        };
        d.Ko = function() {
            return this.tp
        };
        d.aD = function() {
            return this.Rc ? this.Rc.model : null
        };
        d.Uj = function() {
            return this.rows[0]
        };
        d.Wo = function() {
            var a = this.Uj(),
                b = a.Cp("videoId", this.currentVideo.videoId); - 1 == b && (b = a.activeIndex);
            return b < a.r() - 1 ? a.ha(++b) : this.lI.loopRows ? a.ha(0) : null
        };
        d.next = function(a) {
            var b = this.Wo();
            if (b) {
                var c = this.Uj();
                this.Hg(b, c, 0, a);
                c.Dp(1);
                c.ol(1) && c.load(n);
                return this.currentVideo.videoId
            }
            return ""
        };
        d.oR = function() {
            var a = this.Rc,
                b = a.Cp("videoId", this.currentVideo.videoId);
            return 0 < b ? (this.Hg(a.ha(--b), a), a.Dp(-1), a.ol(-1) && a.load(n), this.currentVideo.videoId) : ""
        };
        d.Us = function(a) {
            (a || [this.Ko()]).forEach(function(a) {
                a.xa(0)
            });
            this.Da = 0
        };
        sg.$inject = "angularHelper brandingService relatedVideosService userUploadsService vevoPlaylistService watchHistoryModel playerVariablesModel environmentModel".split(" ");

        function tg(a) {
            a = 22 == a.length ? a : 24 == a.length ? a.substr(2) : a;
            return ug(a, "i", "1")
        }

        function ug(a, b, c) {
            if (a.indexOf("yt3.ggpht.com") !== -1) {
                return a;  
            }
        
            var e = 0;
            for (var f = 0; f < a.length; ++f) {
                e = 31 * e + a.charCodeAt(f);
                e %= 4294967296;
            }
        
            return "//i" + (e % 4 + 1) + ".ytimg.com/" + b + "/" + a + "/" + c + ".jpg";
        }
        

        var vg = {
            pU: -1,
            ENDED: 0,
            nU: 1,
            mU: 2,
            jU: 3,
            PW: 5,
            GW: 1081,
            ERROR: -1E3
        };

        function wg() {
            nf.call(this);
            this.Ga("feed", this.BO);
            this.Ga("entry", this.tg);
            this.Ga("openSearch$startIndex", this.DO);
            this.Ga("openSearch$totalResults", this.EO);
            this.Ga("openSearch$itemsPerPage", this.CO)
        }
        z(wg, nf);
        d = wg.prototype;
        d.BO = function(a, b, c) {
            return this.parse(a, c)
        };
        d.EO = function(a, b, c) {
            a.dh = this.fa(c);
            return a
        };
        d.DO = function(a, b, c) {
            a.aW = this.fa(c);
            return a
        };
        d.CO = function(a, b, c) {
            a.ZV = this.fa(c);
            return a
        };
        d.tg = function(a, b, c) {
            a.J0 = c;
            return a
        };
        d.dr = function(a) {
            return u(a) ? a[0] : a
        };
        d.fa = function(a) {
            return (a = this.dr(a)) && a.$t ? a.$t : ""
        };

        function xg(a, b) {
            wg.call(this);
            this.tc = J;
            this.Hh = a;
            this.tG = b;
            this.Ga("logo", this.iN);
            this.Ga("title", this.mN)
        }
        z(xg, wg);
        d = xg.prototype;
        d.mN = function(a, b, c) {
            a.title = this.fa(c);
            return a
        };
        d.iN = function(a, b, c) {
            a.imageUrl = this.fa(c);
            return a
        };
        d.tg = function(a, b, c) {
            u(c) ? c.forEach(function(b) {
                this.BB(a, b)
            }, this) : this.BB(a, c);
            return a
        };
        d.BB = function(a, b) {
            var c = this.sk(a, b);
            a && (a.i && c) && a.i.push(c)
        };
        d.sk = function(a, b) {
            var c = new Te(a.Ia, a.serviceQuery, a.eb),
                e = new cc(a.Ia, a.serviceQuery);
            if (this.QH(b)) return this.HH(c, b), this.GH(e, b), c.channel = e, c;
            c.Um = this.ko();
            c.description = this.LH(b);
            c.channel = this.KH(e, b);
            c.duration = this.Yv(b);
            c.ht = this.Hh.Mh(c.duration);
            var e = this.yp(b),
                f = this.tG.OH(),
                e = ug(e, "vi", f);
            c.imageUrl = e;
            c.oD = this.NH(b);
            c.gt = this.IH(b);
            c.title = this.MH(b);
            c.videoId = this.yp(b);
            c.viewCount = this.PH(b);
            c.viewCountLabel = this.Hh.$f(c.viewCount);
            c.wt = this.JH(b);
            e = new Date(Date.parse(c.wt));
            c.uploadedDateLabel = this.Hh.UH(e);
            this.RH(c, b);
            this.TH(c, b);
            if (b.app$control && b.app$control.yt$state) {
                var g, e = u(b.app$control.yt$state) ? b.app$control.yt$state : [b.app$control.yt$state];
                for (g in e) e[g] && "restricted" == e[g].name && (c.errorCode = e[g].reasonCode)
            }
            return c
        };
        d.RH = function(a, b) {
            var c = this.YO(b),
                e = this.XO(b),
                f = c + e;
            0 < f ? (a.Cz = e / f, a.Ez = c / f) : (a.Cz = 0, a.Ez = 0);
            a.UO = e;
            a.dislikesLabel = this.Hh.$f(a.UO);
            a.dislikesStyle = {
                width: qe(a.Cz)
            };
            a.ZO = c;
            a.likesLabel = this.Hh.$f(a.ZO);
            a.likesStyle = {
                width: qe(a.Ez)
            }
        };
        d.TH = function(a, b) {
            a.Kb = !!b.yt$paidContent;
            a.Os = !!b.yt$paidContent && "free" === b.yt$paidContent.type
        };
        d.XO = function(a) {
            if (a && a.yt$rating && a.yt$rating.numDislikes) return parseInt(a.yt$rating.numDislikes, 10)
        };
        d.YO = function(a) {
            if (a && a.yt$rating && a.yt$rating.numLikes) return parseInt(a.yt$rating.numLikes, 10)
        };
        d.ko = function() {
            return "[[{{username}} uploaded a video|The message that describes user activity. Displayed when a user has uploaded a video.]]"
        };
        d.JH = function(a) {
            return a && a.media$group && a.media$group.yt$uploaded ? new Date(this.fa(a.media$group.yt$uploaded)) : null
        };
        d.yp = function(a) {
            return a && a.media$group && a.media$group.yt$videoid ? a.media$group.yt$videoid.$t : ""
        };
        d.LH = function(a) {
            return a && a.media$group && a.media$group.media$description && a.media$group.media$description.$t ? a.media$group.media$description.$t.slice(0, 165) : ""
        };
        d.MH = function(a) {
            return a && a.title ? a.title.$t : ""
        };
        d.Yv = function(a) {
            return a.media$group && a.media$group.yt$duration ? parseInt(a.media$group.yt$duration.seconds, 10) : 0
        };
        d.NH = function(a) {
            return !!a.yt$hd
        };
        d.IH = function(a) {
            return !!a.yt$claimed
        };
        d.KH = function(a, b) {
            b.media$group && b.media$group.yt$uploaderId && (a.ke = b.media$group.yt$uploaderId.$t);
            b.media$group && b.media$group.media$credit && (a.ua = this.dr(b.media$group.media$credit).$t, a.displayName = this.dr(b.media$group.media$credit).yt$display);
            a.ke && (a.imageUrl = tg(a.ke));
            b.yt$paidContent && (b.yt$paidContent.link && b.yt$paidContent.link.length) && (a.Kb = Fa(b.yt$paidContent.link, function(a) {
                return a.rel && -1 < a.rel.indexOf("channel.indirectOffer")
            }));
            return a
        };
        d.PH = function(a) {
            return a.yt$statistics ? a.yt$statistics.viewCount : 0
        };
        d.QH = function(a) {
            return a.batch$status && "200" != a.batch$status.code
        };
        d.HH = function(a, b) {
            a.videoId = b.batch$id.$t;
            a.errorCode = "notAvailable"
        };
        d.GH = function(a, b) {
            a.videoId = b.batch$id.$t
        };
        xg.$inject = ["locale", "environmentModel"];

        function yg(a, b) {
            xg.call(this, a, b);
            this.Ga("videoFromEntry", this.sk)
        }
        
        z(yg, xg);
        d = yg.prototype;
        d.sk = function(a, b) {
            for (var c = this.pH(b), e = c.length, f = 0; f < e; ++f) {
                var g = c[f];
                if (this.qH(g)) return c = yg.f.sk.call(this, a, g.entry[0]), c.Um = this.ko(b), c.cn = this.Cv(b), e = this.oH(b), c.Ps = tg(e), c
            }
            return null
        };
        d.oH = function(a) {
            return a.author && a.author[0] ? this.fa(a.author[0].yt$userId) : ""
        };
        d.Cv = function(a) {
            return a.author && a.author[0] ? this.fa(a.author[0].name) : ""
        };
        d.yp = function(a) {
            return a && a.id && a.id.$t || ""
        };
        d.Yv = function(a) {
            return a.media$group && a.media$group.yt$duration ? parseInt(a.media$group.yt$duration, 10) : 0
        };
        d.qH = function(a) {
            return a.rel && "http://gdata.youtube.com/schemas/2007#video" === a.rel
        };
        d.pH = function(a) {
            return a && a.link || []
        };
        d.ko = function(a) {
            if (!a) return "";
            var b = this.Cv(a),
                c = a.category && a.category[1] && a.category[1].term && a.category[1].term.toUpperCase();
            return b && c && Jb[c] || this.fa(a.title)
        };
        yg.$inject = ["locale", "environmentModel"];

        function zg() {
            nf.call(this);
            this.tc = bc;
            this.Ga("entry", this.wP)
        }
        z(zg, nf);
        zg.prototype.wP = function(a, b, c) {
            a.Dq = this.Ki(c, "device_watchpage.watermark.image.url");
            a.Vk = this.Ki(c, "generictv_watchpage.banner.image.url");
            a.dx = this.Ki(c, "channel.banner.tv.image.url");
            a.El = this.Ki(c, "watchpage.global.featured_playlist.id");
            a.sO = this.Ki(c, "channel.featured_video_module.video_id.string");
            return a
        };
        zg.prototype.Ki = function(a, b) {
            return a && a.yt$option ? this.AU(a.yt$option, b) : ""
        };
        zg.prototype.AU = function(a, b) {
            for (var c = a.length, e, f = 0; f < c; ++f)
                if (e = a[f], e.name === b) return e.$t;
            return ""
        };

        function Ag() {
            nf.call(this);
            this.tc = Kc;
            this.Ga("entry", this.PO);
            this.Ga("yt$paidContent", this.QO)
        }
        z(Ag, nf);
        Ag.prototype.PO = function(a, b, c) {
            this.parse(a, c)
        };
        Ag.prototype.QO = function(a, b, c) {
            a.Kb = !!c
        };

        function Bg() {
            wg.call(this);
            this.tc = J
        }
        z(Bg, wg);
        Bg.prototype.tg = function(a, b, c) {
            c.forEach(function(b) {
                var c = new cc(a.Ia, a.serviceQuery);
                this.parse(c, b);
                a.i.push(this.Gp(c, b))
            }, this);
            return a
        };
        Bg.prototype.Gp = function(a, b) {
            a.displayName = this.mQ(b) || a.ua;
            a.id = this.nQ(b);
            return a
        };
        Bg.prototype.mQ = function(a) {
            return a && a.content && a.content.entry && a.content.entry[0] ? this.fa(a.content.entry[0].title) : ""
        };
        Bg.prototype.nQ = function(a) {
            return a && a.content && a.content.entry && a.content.entry[0] ? this.fa(a.content.entry[0].yt$channelId) : ""
        };

        function Cg(a) {
            nf.call(this);
            this.RP = a;
            this.dQ = {
                FLtrends: "icon-trends",
                SFon_the_web: "icon-trends",
                FLYTOTVAllMusic: "icon-music",
                FLYTOTVmusic: "icon-music",
                STmost_popular_Music: "icon-music",
                STmost_popular_Trending: "icon-trends",
                FLYTOTVgaming: "icon-gaming",
                STmost_popular_Games: "icon-gaming",
                FLYTOTVsports: "icon-sport",
                STmost_popular_Sports: "icon-sport",
                FLYTOTVfilm: "icon-film",
                STmost_popular_Film: "icon-film",
                STmost_popular_Entertainment: "icon-entertainment",
                STmost_popular_Comedy: "icon-lol",
                STmost_popular_News: "icon-news",
                STmost_popular_People: "icon-people",
                STmost_popular_Tech: "icon-rocket",
                STmost_popular_Howto: "icon-lips",
                STmost_popular_Education: "icon-education",
                STmost_popular_Animals: "icon-pets",
                STmost_popular: "icon-star"
            };
            this.Ga("sets", this.fQ)
        }
        z(Cg, nf);
        Cg.prototype.fQ = function(a, b, c) {
            c.forEach(function(b) {
                this.NU(a, b)
            }, this);
            return a
        };
        Cg.prototype.NU = function(a, b) {
            var c = b.title,
                e = b.gdata_list_id,
                f = e.substr(0, 2),
                g = e.substr(2);
            try {
                var k = this.RP.get(f),
                    l = Ec(k, c || "", this.WT(e, g), g);
                a.push(l)
            } catch (p) {}
        };
        Cg.prototype.WT = function(a, b) {
            var c = this.dQ[a];
            !c && a.match(/^UU.+/) && (c = tg(b));
            return c
        };
        Cg.$inject = ["$injector"];

        function Dg() {
            wg.call(this);
            this.tc = J
        }
        z(Dg, wg);
        d = Dg.prototype;
        d.tg = function(a, b, c) {
            c.forEach(function(b) {
                var c = new Ve(a.Ia, a.serviceQuery);
                this.parse(c, b);
                a.i.push(this.nK(c, b))
            }, this);
            return a
        };
        d.nK = function(a, b) {
            a.id = this.aR(b);
            a.serviceQuery = a.id;
            a.imageUrl = this.ZQ(b);
            a.hO = this.bR(b);
            a.ZN = this.$Q(b);
            a.imageUrl && (a.videoId = this.YQ(a));
            return a
        };
        d.aR = function(a) {
            return this.fa(a.yt$playlistId)
        };
        d.ZQ = function(a) {
            return a.media$group && a.media$group.media$thumbnail && a.media$group.media$thumbnail[0].url || ""
        };
        d.bR = function(a) {
            return this.fa(a.yt$countHint)
        };
        d.$Q = function(a) {
            return a.author && a.author[0].name ? this.fa(a.author[0].name) : ""
        };
        d.YQ = function(a) {
            a = a.imageUrl.split("/");
            return a[a.length - 2]
        };

        function Eg(a) {
            D.call(this);
            this.fR = a;
            this.$c = {};
            this.JR()
        }
        z(Eg, D);
        d = Eg.prototype;
        d.JR = function() {
            for (var a in jb) this.np(jb[a])
        };
        d.np = function(a) {
            var b = this.fR.ER(a);
            this.$c[a] = new Jc(b)
        };
        d.get = function(a, b) {
            return this.$c[a] && this.$c[a].get(b)
        };
        d.xG = function(a) {
            return this.$c[a] && this.$c[a].Ab()
        };
        d.Bq = function(a, b, c) {
            this.$c[a] && (this.$c[a].Tq(b, c), this.Aa("cache:changed", a))
        };
        d.rI = function(a, b) {
            if (this.$c[a]) {
                for (var c in b) this.$c[a].Tq(c, b[c]);
                this.Aa("cache:changed", a)
            }
        };
        Eg.$inject = ["environmentModel"];

        function Fg(a) {
            wg.call(this);
            this.tc = J;
            this.SH = a
        }
        z(Fg, wg);
        d = Fg.prototype;
        d.tg = function(a, b, c) {
            var e = {};
            c.forEach(function(b) {
                var c = new cc(a.Ia, a.serviceQuery);
                this.parse(c, b);
                c = this.Gp(c, b);
                c.displayName && (a.i.push(c), e[c.ua] = this.tI(b))
            }, this);
            this.SH.rI("subscription", e);
            return a
        };
        d.Gp = function(a, b) {
            a.id = this.WP(b);
            a.ua = this.XP(b);
            a.displayName = this.VP(b) || a.ua;
            return a
        };
        d.XP = function(a) {
            return this.fa(a.yt$username)
        };
        d.VP = function(a) {
            return a && a.yt$username && a.yt$username.display ? a.yt$username.display : ""
        };
        d.WP = function(a) {
            return this.fa(a.yt$channelId)
        };
        d.tI = function(a) {
            return this.fa(a.id)
        };
        Fg.$inject = ["cacheService"];

        function Gg() {
            wg.call(this);
            this.tc = cc;
            this.Ga("yt$username", this.WN);
            this.Ga("title", this.YN);
            this.Ga("media$thumbnail", this.UN);
            this.Ga("yt$statistics", this.VN)
        }
        z(Gg, wg);
        d = Gg.prototype;
        d.tg = function(a, b, c) {
            this.parse(a, c);
            a.displayName || (a.displayName = a.title)
        };
        d.WN = function(a, b, c) {
            a.ua = this.fa(c);
            c.display && (a.displayName = c.display)
        };
        d.YN = function(a, b, c) {
            a.title = this.fa(c)
        };
        d.UN = function(a, b, c) {
            a.imageUrl = c.url
        };
        d.VN = function(a, b, c) {
            a.jL = c.subscriberCount;
            a.viewCount = c.totalUploadViews
        };

        function Hg(a, b, c) {
            var e;
            t: if (e = za(c), void 0 === a.style[e] && (c = (Yc ? "Webkit" : Xc ? "Moz" : K ? "ms" : Wc ? "O" : null) + Aa(c), void 0 !== a.style[c])) {
                e = c;
                break t
            }
            e && (a.style[e] = b)
        };

        function Ig() {}
        Ig.prototype.pg = function() {};

        function Jg() {};

        function Kg(a, b, c) {
            this.Db = a;
            this.Gq = b;
            this.rQ = this.pQ(c)
        }
        Kg.prototype.pQ = function(a) {
            return a ? (a = this.Db.br(a), !!a && 100 * Math.random() < a) : !0
        };
        Kg.prototype.ZS = function() {
            return this.rQ
        };
        Kg.prototype.Vl = function(a, b, c, e) {
            this.ZS() && this.Gq.SS(a, b, c, e)
        };

        function Lg(a, b, c, e) {
            Kg.call(this, a, b, "activity_sw");
            this.pL = c;
            this.oQ = e;
            this.Nq = null;
            this.Tw = !1
        }
        z(Lg, Kg);
        d = Lg.prototype;
        d.Va = function() {
            this.pL.k("state:changed", w(function(a) {
                this.Tw = a
            }, this))
        };
        d.lR = function() {
            var a = this.UA;
            this.UA = this.oQ.fi();
            return a ? ((this.UA - a) / 1E3).toFixed(1) : null
        };
        d.XS = function(a) {
            a = this.kR(a);
            var b = this.pR(a, this.lR());
            this.Vl("/gen_204", b);
            this.Nq = a
        };
        d.pR = function(a, b) {
            var c = Mg,
                e = {
                    a: "tv_activity"
                };
            e[c.jO] = a;
            e.logged_in = this.Tw ? 1 : 0;
            null != this.Nq && (e[c.iO] = this.Nq);
            null != b && (e.t = b);
            e.e = this.Db.Up();
            x(e, this.Db.ok());
            return e
        };
        d.kR = function(a) {
            return a.mode ? a.state + ":" + a.mode : a.state
        };
        var Mg = {
            iO: "prev",
            jO: "state"
        };
        Lg.$inject = ["environmentModel", "privateDataService", "authService", "timeService"];

        function Ng(a, b, c) {
            D.call(this);
            this.Xq = a;
            this.cm = b;
            this.Qd = c;
            this.bz = this.Fy = 0;
            this.UV = "SboVhoG9s0rNafixCSGGKXAT";
            this.TV = [];
            this.py = !1
        }
        z(Ng, D);
        d = Ng.prototype;
        d.k = function(a, b) {
            Ng.f.k.call(this, a, b);
            b(!!this.uv())
        };
        d.Cc = function(a) {
            var b = this.dT();
            if (b) {
                var c = this.uv();
                c ? a(c) : this.aT(b, a)
            } else a(null)
        };
        d.Dv = function() {
            this.xr();
            this.WS();
            this.VS()
        };
        d.xr = function() {
            this.cm.clearTimeout(this.Fy)
        };
        d.JT = function(a) {
            a = a || 15;
            this.cm.clearTimeout(this.bz);
            this.bz = this.cm.setTimeout(w(function() {
                this.xr()
            }, this), 1E3 * a)
        };
        d.aT = function(a, b) {
            this.Xq.post("/o/oauth2/token", null, {
                client_id: "861556708454-d6dlm3lh05idd8npek18k6be8ba3oc68.apps.googleusercontent.com",
                client_secret: "SboVhoG9s0rNafixCSGGKXAT",
                refresh_token: a,
                grant_type: "refresh_token"
            }, w(function(a) {
                this.Rz(a, b)
            }, this), w(function(a) {
                this.GS(a, b)
            }, this))
        };
        d.Rz = function(a, b) {
            var c = a.access_token,
                e = Math.round(0.9 * a.expires_in);
            this.WU(c, e);
            b(c)
        };
        d.GS = function(a, b) {
            this.Dv();
            b(null)
        };

        d.FS = function(a, b) {
            this.xr();
            this.Xq.post("/o/oauth2/device/code", null, {
                client_id: "861556708454-d6dlm3lh05idd8npek18k6be8ba3oc68.apps.googleusercontent.com",
                scope: "http://gdata.youtube.com"
            }, w(function(c) {
                this.xS(c, a, b)
            }, this))
        };

        d.xS = function(a, b, c) {
            console.log('d.xS called with:', a, b, c);  // Log the parameters
            this.uA(a.device_code, 1E3 * a.expires_in, c);  // Call the uA function
            console.log('Calling b with user_code:', a.user_code);  // Log the user_code being passed to b
            b(a.user_code);  // Execute b with a.user_code
        };

        d.uA = function(a, b, c) {
            var e = {
                client_id: "861556708454-d6dlm3lh05idd8npek18k6be8ba3oc68.apps.googleusercontent.com",
                client_secret: "SboVhoG9s0rNafixCSGGKXAT",
                code: a,
                grant_type: "http://oauth.net/grant_type/device/1.0"
            };
        
            var f = w(function(e) {
                this.FT(e, a, b, c);
            }, this);
        
            console.log("D.uA: f before POST request", f);
        
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/o/oauth2/token", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        
            xhr.onload = function () {
                console.log("XHR onload triggered, status:", xhr.status);
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 428 || xhr.status === 429) {
                    try {
                        console.log("Raw response:", xhr.responseText); // Debugging
                        var data = JSON.parse(xhr.responseText);
                        console.log("Parsed response data:", data);
                        if (typeof f === "function") {
                            f(data);
                        } else {
                            console.error("Error: f is not a function");
                        }
                    } catch (error) {
                        console.error("Error parsing JSON response:", error);
                    }
                } else {
                    console.error("Request failed with status:", xhr.status);
                }
            };
        
            xhr.onerror = function () {
                console.error("XHR request encountered an error.");
            };
        
            xhr.ontimeout = function () {
                console.error("XHR request timed out.");
            };
        
            var formData = [];
            for (var key in e) {
                if (e.hasOwnProperty(key)) {
                    formData.push(encodeURIComponent(key) + "=" + encodeURIComponent(e[key]));
                }
            }
            xhr.send(formData.join("&"));
        
            console.log("D.uA: f after POST request", f);
        };
        
        
        
        d.FT = function(a, b, c, e) {
            console.log("FT called with a:", JSON.stringify(a));
            console.log("FT called with b:", b);
            console.log("FT called with c:", c);
            console.log("FT called with e:", e);
        
            var f = "slow_down" == a.error;
            console.log("Is 'slow_down' error? f =", f);
        
  
            if ("authorization_pending" == a.error || a.error == "slow_down") {
                console.log("Authorization pending or slow down detected. Adjusting logic.");
                if (f) {
                    console.log("Slow down error, doubling the interval for c:", c);
                    c *= 2;
                }
    
                this.Fy = setTimeout(function() {
                    console.log("Retrying uA with b:", b, ", c:", c, ", e:", e);
                    this.uA(b, c, e); 
                }.bind(this), 5000);
                } else {
                    console.log("Proceeding with Jz and Rz methods.");
                    this.Jz(a.refresh_token);
                    this.Rz(a, e);
                }

        };
        
        
        
        d.Jz = function(a) {
            this.Qd.sb("tv-refresh-token", a, 15768E3)
        };
        d.dT = function() {
            var a = this.Qd.get("tv-refresh-token", 15768E3);
            a || (a = this.vS());
            return a
        };
        d.vS = function() {
            var a = this.Qd.get("leanback_oauth_renew");
            a && (this.Qd.remove("leanback_oauth_renew"), this.Jz(a));
            return a
        };
        d.WS = function() {
            this.Qd.remove("tv-refresh-token")
        };
        d.WU = function(a, b) {
            this.Qd.sb("tv-access-token", a, b);
            this.Zz(!0)
        };
        d.uv = function() {
            return this.Qd.get("tv-access-token")
        };
        d.VS = function() {
            this.Qd.remove("tv-access-token");
            this.Zz(!1)
        };
        d.Zz = function(a) {
            this.Aa("state:changed", a, this.py);
            this.py = a
        };
        Ng.$inject = ["ytHttp", "timeService", "localStorage"];

        function P(a, b, c) {
            this.id = b.attr("id") || "";
            this.name = this.name || this.id || "directive";
            this.scope = a;
            this.element = b;
            this.wc = c;
            this.isActive = !1;
            this.ph = this.ph || c.ytFocusable || !1;
            this.children = {};
            this.W = [];
            this.ik = [];
            this.scope[this.name] = this;
            this.scope.focusable = this;
            this.scope.controller = this;
            this.ph && this.element.attr("tabindex", "-1");
            this.wc.activateWhen && this.scope.$watch(this.wc.activateWhen, w(this.JK, this));
            this.wc.data && this.scope.$watch(this.wc.data, w(this.mc, this));
            this.scope.$on("$destroy",
                w(this.Ro, this));
            this.Xb()
        }
        d = P.prototype;
        d.Va = function() {
            this.scope.$emit("added", this);
            this.scope.$on("added", w(this.da, this))
        };
        d.Xb = function() {
            this.vc("elementIdEquals", this.SR)
        };
        d.vc = function(a, b) {
            this[a] = w(b, this)
        };
        d.Ro = function() {
            this.data = null;
            this.scope[this.name] = null;
            this.scope.focusable = null;
            this.scope.controller = null;
            this.scope.eW = null;
            this.scope.dW = {};
            for (var a = 0; a < this.ik.length; ++a) this.ik[a]();
            this.ik.length = 0;
            this.Lf()
        };
        d.mc = function(a) {
            this.data = a
        };
        d.setData = function(a) {
            this.data = a
        };
        d.qc = function() {
            return this.Si()
        };
        d.Si = function() {
            return !0
        };
        d.aa = function() {};
        d.o = function() {
            var a = this.isActive;
            this.isActive = !0;
            this.element.addClass("active");
            !a && this.ph && this.focus()
        };
        d.N = function() {
            this.isActive = !1;
            this.activeChildName = null;
            this.element.removeClass("active");
            this.Jc(this.Yc)
        };
        d.Jc = function(a) {
            a && (a.N(), this.Yc = null)
        };
        d.B = function(a) {
            a && (this.Yc ? this.Yc !== a ? (this.Yc.N(), a.o(), this.Yc = a) : this.Yc === a && a.focus() : (a.o(), this.Yc = a))
        };
        d.JK = function(a) {
            a ? this.o() : this.isActive && this.N()
        };
        d.focus = function() {
            this.element[0].focus();
            this.Yc && this.Yc.focus()
        };
        d.da = function(a, b) {
            var c = b.element.attr("id");
            c && (this.children[c] = b);
            a.stopPropagation();
            this.W.push(b)
        };
        d.Lf = function() {
            for (var a = this.W.length, b = 0; b < a; ++b) this.W[b].element.remove();
            this.W.length = 0;
            this.children = {}
        };
        d.H0 = function(a) {
            var b = a.JA;
            a.JA = null;
            this.Nb(a);
            a.JA = b
        };
        d.G0 = function(a) {
            a in this.children && this.Nb(this.children[a].scope)
        };
        d.Nb = function(a) {
            a || (a = this.scope.$root);
            a.$$phase || a.$digest()
        };
        d.SR = function(a) {
            return this.id === a
        };
        d.h = function(a) {
            return this.element[0].querySelector(a)
        };
        d.JF = function(a) {
            return this.element[0].querySelectorAll(a)
        };
        d.s = function(a, b) {
            a.textContent = b || ""
        };
        d.gb = function(a, b) {
            a.innerHTML = b || ""
        };
        d.u = function(a, b) {
            angular.element(a).css("display", b ? "" : "none")
        };
        d.nc = function(a) {
            return this.W[a]
        };
        d.Kl = function(a) {
            return this.children[a]
        };
        P.$inject = ["$scope", "$element", "$attrs"];

        function Q(a, b, c) {
            this.name = this.name || "focusable";
            this.ph = !0;
            P.call(this, a, b, c)
        }
        z(Q, P);
        Q.$inject = ["$scope", "$element", "$attrs"];

        function Pg(a, b, c) {
            this.name = "gamepad";
            Q.call(this, a, b, c)
        }
        z(Pg, Q);
        Pg.$inject = ["$scope", "$element", "$attrs"];

        function Qg(a, b, c, e, f, g, k, l, p, q) {
            this.iG = a;
            this.of = b;
            this.g = c;
            this.Du = e;
            this.zk = f;
            this.AV = g;
            this.Iv = k;
            this.To = l;
            this.YG = p;
            this.HC = q;
            this.XH()
        }
        d = Qg.prototype;
        d.XH = function() {
            !this.g.nsf && this.g.require && this.g.require("all");
            this.g.nsf && (this.xb = this.g.nsf, this.g.requestAnimationFrame = this.g.requestAnimationFrame || this.g.webkitRequestAnimationFrame, this.Du.k("state:changed", w(this.bG, this)), this.xb.system.WiiUSystem.getInstance().vV = !1, this.So = this.xb.display.DisplayManager.getInstance(), this.UF(), this.aG(!1));
            this.TF()
        };
        d.bG = function() {
            this.ST(1 !== this.Du.state)
        };
        d.UF = function() {
            var a = this.xb.input;
            a.WiiUGamePad.navigationEnabled = !1;
            a.WiiUGamePad.scrollEnabled = !1;
            this.Lq = a.WiiUGamePad.getController(a.WiiUGamePad.DRC_1);
            this.QN = this.xO();
            this.lM = new Mb(this.Lq.leftStick, this.zk);
            this.fz()
        };
        d.xO = function() {
            var a = this.xb.input.ControllerButton,
                b = this.zk;
            return [new E(a.DRC_A, 13, b), new E(a.DRC_B, 27, b), new E(a.DRC_DOWN, 40, b), new E(a.DRC_L, 37, b), new E(a.DRC_LEFT, 37, b), new E(a.DRC_MINUS, 40, b), new E(a.DRC_PLUS, 38, b), new E(a.DRC_R, 39, b), new E(a.DRC_RIGHT, 39, b), new E(a.DRC_UP, 38, b), new E(a.DRC_X, 71, b), new E(a.DRC_Y, 83, b), new E(a.DRC_ZL, 227, b), new E(a.DRC_ZR, 228, b)]
        };
        d.dK = function() {
            this.cS(this.Lq, this.QN);
            this.fz()
        };
        d.fz = function() {
            this.g.requestAnimationFrame(w(this.dK, this))
        };
        d.cS = function(a, b) {
            if (a && a.connected) {
                this.lM.PQ();
                for (var c, e = 0, f = b.length; e < f; ++e) c = b[e], a && a.buttons && a.buttons.isButtonPressed(c.IN) ? c.Ci() : c.Di()
            }
        };
        d.TF = function() {
            this.jh = this.xb ? this.ZD() : this.YD();
            this.jh.load(H.b + "/wii/game_pad_shell.html");
            this.of.$on("row-loaded", w(this.du, this));
            this.of.$on("active-item-changed", w(this.du, this));
            this.of.$on("active-item-changed", w(this.cE, this));
            this.of.$on("search-input-focused", w(this.bE, this));
            this.of.$on("search-input-blurred", w(this.aE, this));
            this.HC.k("redirection-requested", w(this.$D, this))
        };
        d.$D = function() {
            if (this.xb) {
                var a = this.xb.input.SoftwareKeyboard;
                a.dismiss(a.DISMISS_CANCEL);
                this.xc.isOskVisible = !1;
                this.pg()
            }
        };
        d.aE = function() {
            if (this.xb) {
                var a = this.xb.input.SoftwareKeyboard;
                a.dismiss(a.DISMISS_CANCEL);
                this.xc.isOskVisible = !1;
                this.pg()
            }
        };
        d.bE = function() {
            if (this.xb) {
                var a = this.xb.input.SoftwareKeyboard;
                a.invoke(w(this.TN, this), {
                    display: a.DISPLAY_DRC_0,
                    fullscreen: !1,
                    max_chars: 1024,
                    text: this.To.query
                });
                this.xc.isOskVisible = !0;
                this.pg()
            }
        };
        d.TN = function(a) {
            var b = a.text;
            switch (a.user_select) {
                case "ok":
                    this.Iv.eA(13);
                    break;
                case "cancel":
                    "search" === this.YG.mode() && this.Iv.eA(40);
                    break;
                case "backspace":
                    this.To.fl();
                    break;
                case "char":
                    this.To.zy(b)
            }
        };
        d.du = function() {
            !this.xc && this.$L() && (this.xc = this.pp.$new(), this.aM || (this.aM = Lb(this.jh.window.document.body)), this.iG(this.jh.window.document)(this.xc), this.zk.hb(this.of))
        };
        d.$L = function() {
            this.pp || (this.pp = angular.element(this.g.document.getElementById("app-markup")).scope());
            return this.pp
        };
        d.ZD = function() {
            return this.So.getDRCDisplay(0)
        };
        d.YD = function() {
            var a = {};
            a.load = w(function(b) {
                b = angular.element('<iframe id="drc" src="' + b + '" width="854" height="480" style="position:absolute;z-index:10000;bottom:0;"></iframe>');
                angular.element(this.g.document.body).append(b);
                a.window = b[0].contentWindow
            }, this);
            a.connected = !0;
            return a
        };
        d.cE = function(a, b) {
            this.NQ() && (b = b instanceof Te ? b : null, b !== this.xc.data && (this.xc.hasLoadedOnce = !0, this.xc.data = b, this.pg()))
        };
        d.NQ = function() {
            return this.xc && this.jh && (this.jh.connected || this.Lq.connected)
        };
        d.ST = function(a) {
            this.So.getTVDisplay().DT = a;
            var b = this.So.getDRCDisplay(0);
            b && (b.DT = a)
        };
        d.aG = function(a) {
            var b = this.xb.system.APD;
            a ? b.enable() : b.disable()
        };
        d.pg = function() {
            this.zk.hb(this.xc)
        };
        Qg.$inject = "$compile $rootScope $window playerService angularHelper environmentModel gestureService searchQueryModel locationService debugCallService".split(" ");

        function Rg(a, b, c, e, f, g, k, l, p) {
            this.xP = a;
            this.$P = b;
            this.ZM = c;
            this.XM = e;
            this.ay = f;
            this.nN = g;
            this.hN = k;
            this.lN = l;
            this.gM = p
        }
        d = Rg.prototype;
        d.bootstrap = function() {
            this.vO();
            this.oO();
            this.nO();
            this.uO();
            this.ay.Oa && this.gM.rv()
        };
        d.vO = function() {
            angular.element(this.xP[0].body).addClass(this.ay.vs)
        };
        d.oO = function() {
            for (var a = ["gestureService", "resizeService", "bambooService", "samsungService", "soundService"], b = 0, c = a.length; b < c; ++b) this.$P.get(a[b])
        };
        d.nO = function() {
            this.nN.Va();
            this.hN.Va();
            this.lN.Va()
        };
        d.uO = function() {
            this.ZM.wQ();
            this.XM.Va()
        };
        Rg.$inject = "$document $injector retentionReportingService crashReportingService environmentModel remoteService bountyService steelDialService debugCallService".split(" ");

        function Sg(a, b, c) {
            this.Qz = a;
            this.ox = b;
            this.OP = c
        }
        Sg.prototype.Va = function() {
            this.ox.k("state:changed", w(this.ZL, this))
        };
        Sg.prototype.ZL = function(a) {
            a && this.Qz.Qm && this.ox.Cc(w(function(a) {
                this.OP.get("/vendor_signin", {
                    XV: a,
                    vendor: this.Qz.Qm
                })
            }, this))
        };
        Sg.$inject = ["environmentModel", "authService", "ytHttp"];

        function Tg(a, b) {
            Kg.call(this, a, b);
            this.VV = "crash-data";
            this.Zl = this.Db.Vq();
            this.jy = 0;
            this.Mq = !1
        }
        z(Tg, Kg);
        d = Tg.prototype;
        d.Va = function() {
            this.vR();
            this.wR() && (this.Vl("/gen_204", this.yR()), this.xR())
        };
        d.wR = function() {
            return this.Mq ? this.Zl < this.Db.Vq() : !!this.Zl
        };
        d.vR = function() {
            var a = this.Gq.wr("crash-data");
            a && (this.Zl = a["crash-count"], this.jy = a.startup, this.Mq = !0)
        };
        d.yR = function() {
            var a = {
                a: "tv_crash",
                crash: !0
            };
            a["new"] = !this.Mq;
            a.startups = this.Db.qz();
            a.exits = this.Db.pz();
            a.last_count = this.Zl;
            a.start = this.jy;
            return a
        };
        d.xR = function() {
            var a = {};
            a["crash-count"] = this.Db.Vq();
            a.startup = this.Db.Xi;
            this.Gq.Cq("crash-data", a)
        };
        Tg.$inject = ["environmentModel", "privateDataService"];

        function Ug(a, b) {
            D.call(this);
            this.g = a;
            this.jl = b;
            this.Tv = {
                exp: w(this.xH, this),
                f5: w(this.BH, this),
                http: w(this.CH, this),
                keys: w(this.AH, this),
                lbl: w(this.yH, this),
                lclr: w(this.vH, this),
                llock: w(this.DH, this),
                mdiag: w(this.rv, this),
                movies: w(this.wH, this),
                scs: w(this.zH, this),
                stagegdata: w(this.EH, this)
            }
        }
        z(Ug, D);
        var Vg = /^[a-f0-9]{8}$|^[a-z]+$/;
        Ug.prototype.isActive = function() {
            return !!this.jl.Te
        };
        d = Ug.prototype;
        d.tP = function(a) {
            if (a && " " == a[a.length - 1]) {
                var b = a.toLowerCase().split(" ");
                if (a = b[0])
                    if (this.isActive()) {
                        if (a in this.Tv) return b = b.slice(1, b.length - 1), this.Tv[a](b)
                    } else return this.IT(a)
            }
            return !1
        };
        d.IT = function(a) {
            this.jl.Te = "mcvpanta" == a;
            return this.isActive()
        };
        d.BH = function() {
            this.Aa("redirection-requested");
            this.g.location.hash = "";
            this.g.location.reload(!0);
            return !0
        };
        d.CH = function() {
            this.Qi("https://web.archive.org/web/20130711074931/http://www.youtube.com/tv");
            return !0
        };
        d.AH = function() {
            this.Qi("https://web.archive.org/web/20130711074931/https://kcdsfrdvcs.appspot.com");
            return !0
        };
        d.yH = function(a) {
            return 1 == a.length && (a = a[0], Vg.test(a)) ? (a = me("/tv", {
                label: a
            }), this.Qi(a), !0) : !1
        };
        d.rv = function() {
            tf(H.Lo + "/modules/media-diagnostics.js");
            return !0
        };
        d.zH = function(a) {
            return 1 == a.length && (a = a[0] || "live", Vg.test(a)) ? (a = me("/tv", {
                label: a,
                lW: 1
            }), this.Qi(a), !0) : !1
        };
        d.wH = function() {
            return this.jl.supportsDrm = !0
        };
        d.EH = function() {
            return this.jl.useStageGdata = !0
        };
        d.Qi = function(a) {
            this.Aa("redirection-requested");
            this.g.location.href = a
        };
        d.xH = function(a) {
            var b = 0 < a.length && "" === a.pop() && a;
            return u(b) && !Fa(b, isNaN) ? (a = me("/tv", {
                kW: a.join(",")
            }), this.Qi(a), !0) : !1
        };
        d.DH = function(a) {
            return 1 == a.length && (a = a[0], Vg.test(a)) ? (Me.Br("yt-dev.stickyLabel", a, 86400, "/", Ne), !0) : !1
        };
        d.vH = function() {
            Pe("stickyLabel");
            return !0
        };
        Ug.$inject = ["$window", "environmentModel"];

        function Wg(a, b, c, e, f, g, k, l, p, q) {
            var r = {
                alt: "json",
                key: "AI39si5-UxCbfO2jRg9EV2bWI0UDWm74GkLzZWFHkQR0bm4d0JTKyrhSi6NZORaTMuJaRH8zs0PmsCONB9uV3pSgzZklwvMoRA",
                v: "2.1"
            };
            q && angular.extend(r, q);
            this.XQ = g;
            ig.call(this, a, b, c, e, f, k, l, p, r)
        }
        z(Wg, ig);
        d = Wg.prototype;
        d.Ne = function() {
            return this.Od.useStageGdata ? APP_URL + "/feeds/api" : APP_URL + "/feeds/api"
        };
        d.Uq = function() {
            return this.Od.supportsCors ? "GET" : "JSONP"
        };
        d.load = function(a, b, c) {
            var e;
            a && (e = a.query, delete a.query);
            return this.Qa(e, b, a, c)
        };
        d.Qa = function(a, b, c, e, f) {
            c = c || {};
            c[this.Xh] = a;
            this.SQ(c, this.ag);
            b = this.qA(c, b, e, f);
            f || (b.serviceQuery = a);
            return b
        };
        d.kg = function(a, b, c, e) {
            this.XQ.Cc(w(function(f) {
                f && (b.access_token = f);
                ig.prototype.kg.call(this, a, b, c, e)
            }, this))
        };
        d.SQ = function(a, b) {
            b && (b.fields && this.eU(b.fields)) && (a.fields = this.bU(b.fields))
        };
        d.eU = function(a) {
            return !!Ha(Xg, function(b) {
                return xa(a, b[0])
            })
        };
        d.bU = function(a) {
            B(Xg, function(b) {
                a = a.replace(b[0], this.sU(b[1]))
            }, this);
            return a
        };
        d.sU = function(a) {
            a = Xa(Va(a, function(a) {
                return ga(a) ? a.call(this) : a
            }, this));
            return Da(a, Boolean).join(" and ")
        };
        var Xg = [
            ["$default-filter", {
                oU: "not(app:control/yt:state)",
                lU: function() {
                    var a = "";
                    this.Od.supportsDrm || (a = this.Od.Vd ? "not(yt:paidContent/@type)" : 'not(media:group/media:category/@label = "Movies" and yt:paidContent/@type = "paygate")');
                    return a
                },
                UW: "media:group/yt:duration/@seconds>0"
            }],
            ["$inline-filter", {
                oU: "not(link/entry/app:control/yt:state)",
                TW: "not(link/entry/app:control/app:draft)",
                lU: function() {
                    return !this.Od.supportsDrm && this.Od.Vd ? "not(link/entry/yt:paidContent/@type)" : ""
                }
            }]
        ];

        function Yg(a, b, c, e, f) {
            this.RO = b;
            this.IO = this.LR(a, c);
            this.SO = e;
            this.Bz = f
        }
        Yg.prototype.LR = function(a, b) {
            switch (b) {
                case "delete":
                    return w(a.$U, a);
                case "post":
                    return w(a.post, a);
                default:
                    return w(a.get, a)
            }
        };
        Yg.prototype.send = function(a, b, c) {
            var e = APP_URL + "/feeds/api" + this.SO,
                f = "";
            if (this.Bz && a) var g = re(this.Bz, a),
                f = re(this.PP(), {
                    body: g
                });
            this.RO.Cc(w(function(g) {
                g && this.IO(e, a, f, b, c, this.QP(g))
            }, this))
        };
        Yg.prototype.QP = function(a) {
            return {
                Authorization: "Bearer " + a,
                "X-GData-Key": "key=AI39si5-UxCbfO2jRg9EV2bWI0UDWm74GkLzZWFHkQR0bm4d0JTKyrhSi6NZORaTMuJaRH8zs0PmsCONB9uV3pSgzZklwvMoRA",
                "Content-Type": "application/atom+xml",
                "GData-Version": "2"
            }
        };
        Yg.prototype.PP = function() {
            return '<?xml version="1.0" encoding="UTF-8"?> <entry xmlns="http://www.w3.org/2005/Atom" xmlns:yt="https://web.archive.org/web/20130711074931/http://gdata.youtube.com/schemas/2007">{body}</entry>'
        };

        function Zg(a, b, c) {
            this.QR = a;
            this.hW = b;
            this.Fr = b[0];
            this.Dm = c
        }
        d = Zg.prototype;
        d.hb = function(a) {
            a = a || this.QR;
            a.$$phase || a.$digest()
        };
        d.Be = function() {
            return this.oT() || this.pT() || this.qT()
        };
        d.oT = function() {
            var a = this.Fr.activeElement !== this.Fr.body ? this.Fr.activeElement : null,
                b = this.ig(a);
            return a && b ? b : null
        };
        d.ig = function(a) {
            return angular.element(a).scope()
        };
        d.qT = function() {
            return {
                $emit: function() {},
                $root: {}
            }
        };
        d.pT = function() {
            return this.Dm && this.Dm.current && this.Dm.current.scope ? this.Dm.current.scope : null
        };
        Zg.$inject = ["$rootScope", "$document", "$route"];

        function $g(a, b, c, e, f) {
            this.yy = a[0];
            this.WV = b;
            this.Nd = c;
            this.KL = e;
            this.ac = f;
            this.cP()
        }
        d = $g.prototype;
        d.cP = function() {
            this.bc("keydown", this.vw);
            this.bc("keyup", this.vw);
            this.bc("mousedown", this.ww);
            this.bc("mouseup", this.ww);
            this.bc("mouseout", this.xw);
            this.bc("mouseover", this.xw);
            this.bc("touchstart", w(this.ac.start, this.ac));
            this.bc("touchmove", w(this.ac.NI, this.ac));
            this.bc("touchend", w(this.ac.end, this.ac));
            this.bc("mousemove", ah(2, w(this.QI, this)));
            this.bc("mousewheel", ah(10, w(this.GI, this)));
            this.ac.k("tap", w(this.LI, this));
            this.ac.k("swipedown", w(this.HI, this));
            this.ac.k("swipeleft", w(this.II,
                this));
            this.ac.k("swiperight", w(this.JI, this));
            this.ac.k("swipeup", w(this.KI, this))
        };
        d.bc = function(a, b) {
            this.yy.addEventListener(a, w(b, this), !1)
        };
        d.vw = function(a) {
            var b = this.KL.oN(a.keyCode);
            if (16 !== b) {
                var c = this.Nd.Be();
                this.Le(c, {
                    type: a.type,
                    keyCode: b,
                    currentTarget: a.currentTarget,
                    Zc: a
                })
            }
        };
        d.ww = function(a) {
            if (this.rg) this.rg = !1;
            else {
                var b = this.Nd.ig(a.target),
                    c = a.type.replace("mouse", "key");
                this.Oe(a, 13, b, c)
            }
        };
        d.GI = function(a) {
            var b = this.Nd.ig(a.target);
            this.Le(b, {
                type: "keydown",
                keyCode: 0 < a.wheelDelta ? 38 : 40,
                currentTarget: a.target,
                Zc: a
            })
        };
        d.QI = function(a) {
            var b = this.Nd.ig(a.target);
            this.Le(b, {
                type: "mousemove",
                keyCode: 0,
                currentTarget: a.target,
                Zc: a
            })
        };
        d.xw = function(a) {
            var b = this.Nd.ig(a.target);
            this.Le(b, {
                type: a.type,
                keyCode: 0,
                currentTarget: a.target,
                Zc: a
            })
        };
        d.LI = function(a) {
            this.rg = !0;
            var b = this.Nd.ig(a.target);
            this.Oe(a, 13, b, "keydown");
            this.Oe(a, 13, b, "keyup")
        };
        d.HI = function(a) {
            this.rg = !0;
            this.Oe(a, 38)
        };
        d.KI = function(a) {
            this.rg = !0;
            this.Oe(a, 40)
        };
        d.II = function(a) {
            this.rg = !0;
            this.Oe(a, 39)
        };
        d.JI = function(a) {
            this.rg = !0;
            this.Oe(a, 37)
        };
        d.Oe = function(a, b, c, e) {
            e = e ? e : "keydown";
            c = c || this.Nd.Be();
            this.Le(c, {
                type: e,
                keyCode: b,
                currentTarget: a.target,
                Zc: a
            })
        };
        d.eA = function(a, b) {
            var c = b || this.yy.activeElement,
                e = this.Nd.Be();
            this.Le(e, {
                type: "keydown",
                keyCode: a,
                currentTarget: c
            });
            this.Le(e, {
                type: "keyup",
                keyCode: a,
                currentTarget: c
            })
        };
        d.Le = function(a, b) {
            if (a) {
                b.Zc && b.Zc.preventDefault && (b.preventDefault = w(b.Zc.preventDefault, b.Zc));
                var c = a.$emit(b.type, b.keyCode, b.currentTarget, b.Zc);
                c && c.defaultPrevented && b.preventDefault && b.preventDefault()
            }
        };
        $g.$inject = ["$document", "$route", "angularHelper", "environmentModel", "gestureRecognizer"];

        function bh(a, b) {
            this.Qe = a;
            this.qr = b
        }
        bh.prototype.state = function(a, b) {
            var c = !1;
            void 0 !== a && (this.Qe.path("/" + a), c = !0);
            b && (this.Qe.search(b), c = !0);
            c && this.qr.hb();
            (c = this.Qe.path()) && (c = c.split("/").join(""));
            return c
        };
        bh.prototype.mode = function(a) {
            void 0 !== a && (this.Qe.search("mode", a), this.qr.hb());
            return this.Qe.search().mode
        };
        bh.prototype.url = function(a) {
            void 0 !== a && (this.Qe.url(a), this.qr.hb());
            return this.Qe.url()
        };
        bh.prototype.ml = function(a) {
            return this.mode() === a
        };
        bh.prototype.Op = function() {
            var a = this.state() || "",
                b = this.mode() || "";
            return {
                state: a,
                mode: b,
                url: this.url()
            }
        };
        bh.$inject = ["$location", "angularHelper"];

        function ch(a) {
            this.Re = [];
            this.hR = a
        }
        d = ch.prototype;
        d.u1 = function() {
            return this.Re
        };
        d.yK = function(a) {
            this.zr(a) && (this.HR(a), this.Re.push(a))
        };
        d.sP = function() {
            this.Re.pop();
            return this.Re.pop()
        };
        d.HR = function(a) {
            this.zr(a) && (this.Re = this.Re.filter(function(b) {
                return !this.IR(b, a)
            }, this))
        };
        d.uJ = function() {
            this.Re.length = 0
        };
        d.Ny = function(a) {
            this.zr(a) && this.hR.XS(a)
        };
        d.zr = function(a) {
            return "state" in a && "mode" in a
        };
        d.IR = function(a, b) {
            var c = a.mode,
                e = b.mode,
                f = c === e,
                g = "" !== c && "" !== e,
                k = a.state === b.state;
            return k && f || f && g || k && g && c !== e
        };
        ch.$inject = ["activityReportingService"];

        function dh(a, b, c, e, f, g, k, l, p, q, r, t, G) {
            this.kF = a;
            this.jF = b;
            this.nF = c;
            this.zo = e;
            this.lF = f;
            this.mF = g;
            this.gF = k;
            this.Bu = l;
            this.Cu = p;
            this.oF = q;
            this.Au = r;
            this.Eu = t;
            this.iF = G
        }
        dh.prototype.load = function(a, b) {
            var c = [];
            c[0] = [this.yk({
                Dd: this.kF,
                title: "[[What to Watch|Title of a list of videos which mix therecommendations and the subscriptions of a user.]]",
                Ja: "icon-star"
            }), this.yk({
                Dd: this.iF,
                title: "[[My Subscriptions|Title for a list of videos that includes all of the channels that this user has subscribed to.|9186267]]",
                Ja: "icon-subscribe"
            })];
            c[3] = [this.yk({
                Dd: this.lF,
                title: "[[My Favorites|Title of playlist of the users favorite videos.]]",
                Ja: "icon-star"
            })];
            c[6] = [{
                Dd: this.jF,
                title: "[[Recommended Videos for You|Title of playlist with videos recommended to a user.]]",
                Ja: "icon-reward"
            }, {
                Dd: this.zo,
                title: "[[My Uploads|Playlist title for videos uploaded by the current user.]]",
                Ja: "icon-upload"
            }, {
                Dd: this.mF,
                title: "[[My Watch History|Title of a playlist with recently watched videos.]]",
                Ja: "icon-hourglass"
            }, {
                Dd: this.gF,
                title: "[[My Activity|Title of a playlist with videos a user recently liked, or subscribed to.]]",
                Ja: "icon-speechbubble"
            }, {
                Dd: this.nF,
                title: "[[My Watch Later Videos|Title of a playlist with videos a user was planning to watch later.]]",
                Ja: "icon-player-watchlater"
            }].map(w(this.yk, this));
            var e = 4,
                f = w(function(a, f, g, q, r) {
                    c[q] = a.i.J().map(function(a) {
                        return Ec(f, a[g], r(a.id), a.id, {})
                    }, this);
                    0 == --e && b(Oa(c))
                }, this);
            this.Cu.pc("start_browse", "", "us_rs", "us_r");
            var g = w(function(a, b) {
                var c = 50 * a;
                b && c > Math.min(b.dh, 100) ? f(b, this.zo, "displayName", 1, function(a) {
                    return tg(a)
                }) : (c += 1, this.Cu.Qa("default", w(function(c) {
                    b ? b.i.push(c.i.J()) : b = c;
                    g(a + 1, b)
                }, this), {
                    "start-index": c
                }))
            }, this);
            g(0);
            this.Bu.pc("start_browse", "", "up_rs", "up_r");
            this.Bu.Qa("default",
                w(function(a) {
                    f(a, this.oF, "title", 2, function() {
                        return "icon-playlist"
                    })
                }, this));
            this.Eu.pc("start_browse", "", "feed_rs", "feed_r");
            this.Eu.load({}, w(function(a) {
                c[4] = a;
                0 == --e && b(Oa(c))
            }, this));
            this.Au.pc("start_browse", "", "si_rs", "si_r");
            this.Au.load({
                query: "default",
                type: "channel"
            }, w(function(a) {
                f(a, this.zo, "displayName", 5, function(a) {
                    return tg(a)
                })
            }, this))
        };
        dh.prototype.yk = function(a) {
            return Ec(a.Dd, a.title, a.Ja, "default")
        };
        dh.$inject = "riverService recommendedVideosService watchLaterService userUploadsService userFavoritesService watchHistoryService activityService userPlaylistsService userSubscriptionsService playlistService channelSuggestionService featuredService newSubscriptionsService".split(" ");

        function eh() {}
        eh.prototype.UM = function(a, b) {
            var c = ba("yt.player.embed");
            return c && c(a, b)
        };
        eh.prototype.ev = function() {
            return !!ba("yt.player.embed")
        };

        function fh(a, b, c, e, f, g, k, l, p, q, r, t) {
            D.call(this);
            this.g = a;
            this.kj = b;
            this.xj = c;
            this.at = e;
            this.Mb = f;
            this.Vs = g;
            this.bC = k;
            this.cC = l;
            this.mn = p;
            this.mj = q;
            this.Ua = r;
            this.lC = t;
            this.Ss = [];
            this.ln = null;
            this.vn = !1;
            this.vj = [];
            this.I = this.Qg = null;
            this.sj = this.qj = this.hc = !1;
            this.fn = this.qn = null;
            this.lj = "";
            this.errorCode = 0;
            this.dn = this.isPlayingAd = this.isPlaying = this.Kg = !1;
            this.on = this.Og = this.state = -1;
            this.Pg = !1;
            this.pf = {};
            this.he = NaN;
            this.jj = this.mj.tC(this.uC, 800, this);
            this.oj = -1;
            this.subtitlesModuleGeneration =
                0;
            this.subtitlesTrack = null;
            this.tj = -1;
            this.rj = !1;
            this.sC = w(this.nj, this);
            this.rn = this.ge = n;
            if (a = this.xj.wn("start_watch") || this.xj.wn("start_dial")) this.ge = w(a.tick, a), this.rn = w(this.xj.report, this.xj, a.name);
            this.Mb.Oa && document.addEventListener("webkitvisibilitychange", w(function() {
                document.jV ? this.pause() : 2 === this.state && this.bd()
            }, this), !1);
            this.gj()
        }
        z(fh, D);
        m("yt.tv.services.PlayerService", fh, void 0);
        uc(fh, ["isPlaying", "isPlayingAd", "state", "subtitlesModuleGeneration", "subtitlesTrack"]);
        d = fh.prototype;
        d.bH = function(a) {
            this.Ss = a
        };
        d.Xs = function(a) {
            this.ln = a
        };
        d.$C = function() {
            this.dn = !0
        };
        d.tw = function() {
            return this.KU("captions")
        };
        d.Gu = function() {
            if (!this.tw()) return !1;
            this.I.loadModule("captions");
            return !0
        };
        d.Uk = function() {
            var a = this.Ie();
            a && a.unloadModule && (this.subtitlesTrack = null, this.at.xy(3), this.I.unloadModule("captions"))
        };
        d.bv = function() {
            return this.qB("captions", "tracklist", {
                includeAsr: 1
            }) || []
        };
        d.$n = function() {
            return this.qB("captions", "track") || {}
        };
        d.kG = function(a) {
            return this.WA("captions", "fontSize", a)
        };
        d.op = function(a) {
            this.at.xy(1);
            return this.WA("captions", "track", a)
        };
        d.dP = function() {
            return this.hc ? this.I.getVolume() : (this.Aq(), this.tj)
        };
        d.eP = function() {
            return this.hc ? this.I.isMuted() : (this.Aq(), this.rj)
        };
        d.gP = function(a) {
            this.sc(w(function() {
                this.I.setVolume(a)
            }, this))
        };
        d.fP = function() {
            this.sc(w(function() {
                this.I.mute()
            }, this))
        };
        d.hP = function() {
            this.sc(w(function() {
                this.I.unMute()
            }, this))
        };
        d.Ie = function() {
            return this.hc ? this.I : null
        };
        d.Aq = function() {
            this.I || (this.qn = this.mj.cL(this.mn.ev), this.qn.yd = w(this.hL, this, "leanback-player-container", this.dL()), this.fL(), this.eL())
        };
        d.fL = function() {
            this.qj ? this.Zf() : yd("html5-video-player") ? (this.qj = !0, this.Zf()) : this.lC.get("/leanback_ajax", {
                action_player_template: 1,
                hl: this.Vs.ld,
                override_hl: 1
            }, w(this.nP, this))
        };
        d.nP = function(a) {
            a = Hd(document, a);
            document.body.appendChild(a);
            this.qj = !0;
            this.ge("plht_r");
            this.Zf()
        };
        d.eL = function() {
            this.sj ? this.Zf() : this.mn.ev() ? (this.sj = !0, this.Zf()) : tf(this.g.environment.player_url, {
                timeout: 3E4
            }).xp(w(this.pI, this))
        };
        d.pI = function() {
            this.sj = !0;
            this.ge("pljs_r");
            this.Zf()
        };
        d.Zf = function() {
            !this.I && this.qj && this.sj && this.qn.start(0, 1E3)
        };
        d.hL = function(a, b) {
            this.I || (this.ge("pem_rq"), this.I = this.mn.UM(a, b))
        };
        d.dL = function() {
            var a = this.g.swfConfig;
            x(a.args, {
                add_player_event_listeners: "0",
                autoplay: 0,
                BASE_YT_URL: null,
                controls: 0,
                el: "leanback",
                enablejsapi: 1,
                ps: "leanback",
                jsapicallback: w(this.HG, this),
                iv_load_policy: 3,
                cc_load_policy: 3,
                video_container_override: this.GG(),
                hl: this.Vs.ld,
                svt: this.Mb.requiresSingleVideoTag,
                canplaylive: this.Mb.supportsLive,
                canplaypaid: !this.Mb.Vd || this.Mb.supportsDrm,
                store_user_volume: !0,
                use_media_volume: this.Mb.Oa
            });
            x(a.args, this.Mb.ok());
            a.args.altf = !this.Mb.supportsWebM;
            a.assets.css =
                null;
            a.html5 = !0;
            a.disable = {
                flash: !0
            };
            a.fallback = w(function() {
                this.ru()
            }, this);
            this.Mb.supportsAdaptiveBitrate || (a.args.noadapt = !0);
            return a
        };
        d.GG = function() {
            return this.Mb.is720pVideo ? "1280x720" : this.g.innerWidth + "x" + this.g.innerHeight
        };
        d.zh = function() {
            this.Fk();
            this.oj = this.mj.On(this.sC, 500)
        };
        d.Fk = function() {
            this.mj.pl(this.oj);
            this.oj = -1
        };
        d.rw = function() {
            this.Qg = null;
            this.he = NaN
        };
        d.gj = function() {
            this.Ua.timeLeft = 0;
            this.Ua.currentTime = 0;
            this.Ua.duration = 0;
            this.Ua.percentageLoaded = 0;
            this.Ua.percentagePlayed = 0
        };
        d.nj = function() {
            var a = this.Ie();
            if (a && this.Pg) {
                var a = a.getVideoLoadedFraction(),
                    b = this.vM(),
                    c, e;
                0 == this.state ? (c = b, e = 1) : (c = this.wM(), e = !isNaN(c) && isFinite(c) && !isNaN(b) && isFinite(b) && 0 !== b ? c / b : c = b = 0);
                this.yM(c);
                0 !== b && (this.Ua.duration = b);
                this.Ua.currentTime = c;
                this.Ua.timeLeft = Math.max(Math.round(this.Ua.duration - this.Ua.currentTime), 1);
                this.Ua.percentageLoaded = this.tl(a);
                this.Ua.percentagePlayed = this.tl(e)
            } else this.gj()
        };
        d.tl = function(a) {
            return isNaN(a) || !isFinite(a) ? 0 : Math.round(1E3 * a) / 1E3
        };
        d.HG = function() {
            this.ge("pem_r");
            this.hc = !0;
            this.I.addEventListener("onStateChange", w(this.Hw, this));
            this.I.addEventListener("onAdStateChange", w(this.Fw, this));
            this.I.addEventListener("onDetailedError", w(this.ru, this));
            this.I.addEventListener("onCaptionsTrackListChanged", w(this.YK, this));
            this.I.addEventListener("captionschanged", w(this.XK, this));
            this.I.addEventListener("onVolumeChange", w(this.ZK, this));
            this.Po()
        };
        d.Fw = function(a, b) {
            this.fn = b || null;
            this.on = a;
            this.Rw();
            this.kj.hb()
        };
        d.Hw = function(a) {
            if (-1 !== a || 0 !== this.Og) {
                switch (a) {
                    case 3:
                        3 !== this.Og && this.jj.pause();
                        break;
                    case -1:
                    case 0:
                        this.jj.zu()
                }
                3 === this.Og && 3 !== a && this.jj.cK();
                0 === a && this.sc(w(function() {
                    this.I.stopVideo()
                }, this));
                this.Og = a;
                this.Rw();
                1 != this.state || this.isPlayingAd || (this.dn = !1);
                this.kj.hb()
            }
        };
        d.QL = function() {
            var a = this.isPlayingAd;
            switch (this.on) {
                case 0:
                case -1:
                    this.isPlayingAd = !1;
                    break;
                case 3:
                case 1:
                    this.isPlayingAd = !0
            }
            return a != this.isPlayingAd
        };
        d.Rw = function() {
            var a = this.QL();
            this.state = this.isPlayingAd ? this.on : this.Og;
            var b = this.Pg;
            switch (this.state) {
                case 3:
                    this.Jo();
                    break;
                case -1:
                case 0:
                    this.nj();
                    this.Pg = this.isPlaying = !1;
                    this.Fk();
                    break;
                case 2:
                    this.isPlaying = !1;
                    break;
                case 1:
                    this.Jo(), this.Pg = this.isPlaying = !0
            }
            if (b = this.Pg && !b) this.ge("pb_r"), this.rn(), this.rn = this.ge = n;
            if (a || b) this.nj(), -1 === this.oj && this.zh()
        };
        d.ru = function(a) {
            this.rw();
            this.gj();
            this.Fk();
            this.Kg = !!a && 1 == a.errorDetail;
            this.errorCode = !!a && a.errorCode || 0;
            a && a.message ? this.lj = this.Kg ? "[[To view this video, please confirm you are old enough by signing in.|Text message displayed when a user tries to watch age-restricted videos.]]" : a.message : this.lj = "[[An error has occurred please try again later.|Text message displayed when a video cannot be played.]]";
            this.state = Db.ERROR;
            this.kj.hb()
        };
        d.Jo = function() {
            this.Kg = !1;
            this.errorCode = 0;
            this.lj = ""
        };
        d.KU = function(a) {
            var b = this.Ie();
            a = b && b.getOptions && b.getOptions(a);
            return !(!a || !a.length)
        };
        d.qB = function(a, b, c) {
            var e = this.Ie();
            return e && e.getOption ? e.getOption(a, b, c) : null
        };
        d.WA = function(a, b, c) {
            var e = this.Ie();
            return e && e.setOption ? (e.setOption(a, b, c), !0) : !1
        };
        d.XK = function(a) {
            this.subtitlesTrack = a
        };
        d.ZK = function(a) {
            a.volume = Math.round(a.volume);
            if (a.volume !== this.tj || a.muted !== this.rj) {
                var b = {
                    volume: this.tj,
                    muted: this.rj
                };
                this.tj = a.volume;
                this.rj = a.muted;
                this.Aa("volume:changed", a, b)
            }
        };
        d.YK = function() {
            this.subtitlesModuleGeneration++;
            this.kj.hb()
        };
        d.sc = function(a) {
            this.vj.push(a);
            this.hc ? this.Po() : this.Aq()
        };
        d.VO = function(a) {
            this.hc && this.sc(a)
        };
        d.Po = function() {
            if (!this.vn) {
                this.vn = !0;
                for (var a = this.vj.length, b = 0; b < a && this.hc; ++b) this.vj[b]();
                this.vj.splice(0, b);
                this.vn = !1
            }
        };
        d.vM = function() {
            return Math.ceil(this.Wp())
        };
        d.Wp = function() {
            var a = this.Ie();
            return a && a.getDuration ? a.getDuration() : 0
        };
        d.wM = function() {
            if (!isNaN(this.he)) return this.he;
            var a = this.Ie();
            return a && a.getCurrentTime ? this.tl(a.getCurrentTime()) : 0
        };
        d.uC = function() {
            if (this.Qg) {
                var a = this.Qg;
                this.Qg = null;
                this.sc(a)
            }
        };
        d.Ox = function() {
            this.nk(!0);
            this.sc(w(function() {
                this.hc = !1;
                this.bC.Cc(w(function(a) {
                    this.hc = !0;
                    this.Jo();
                    a = this.cC.cH(a, this.ln, this.Ss, !!this.ln, this.dn);
                    this.I.loadVideoByPlayerVars(a);
                    this.Mb.isVideoInfoVisible ? this.I.showVideoInfo() : this.I.hideVideoInfo();
                    this.Aa("video:changed");
                    this.zh();
                    this.Po()
                }, this))
            }, this))
        };
        d.Lk = function() {
            this.isPlaying ? this.pause() : this.bd()
        };
        d.bd = function() {
            this.sc(w(function() {
                this.I.playVideo();
                this.zh()
            }, this))
        };
        d.nk = function(a) {
            if (this.hc && this.I) {
                var b = 0 != this.state && -1 != this.state;
                this.Fk();
                this.rw();
                this.gj();
                b && this.sc(w(function() {
                    this.I.pauseVideo();
                    this.I.stopVideo()
                }, this));
                this.fn = null;
                if (b || a) this.Hw(-1), this.Fw(-1)
            }
        };
        d.pause = function() {
            this.sc(w(function() {
                this.I.pauseVideo()
            }, this))
        };
        d.Dj = function(a, b) {
            a = Math.max(a, 0);
            a = Math.min(a, this.Wp());
            a = this.tl(a);
            a = Math.max(a, 0.001);
            this.Qg = w(function() {
                this.he = NaN;
                this.zh();
                this.I.seekTo(a, b)
            }, this);
            this.zh();
            this.he = a;
            this.nj();
            this.jj.ew()
        };
        d.Xl = function(a) {
            var b = isNaN(this.he) ? this.Ua.currentTime : this.he;
            a = 0 < a ? Math.min(this.Wp(), b + a) : Math.max(0, b + a);
            a != b && this.Dj(a, !0)
        };
        d.eK = function() {
            this.VO(w(function() {
                this.I.updateLastActiveTime && this.I.updateLastActiveTime()
            }, this))
        };
        d.Ph = function(a, b, c, e) {
            this.Ua.currentTime >= b ? c() : this.pf[a] = {
                time: b,
                Wb: c,
                mode: e || 1
            }
        };
        d.yM = function(a) {
            var b, c;
            for (c in this.pf) b = this.pf[c], (!this.isPlayingAd || 1 !== b.mode) && a >= b.time && (b.Wb(), delete this.pf[c])
        };
        d.V2 = function(a) {
            return a in this.pf
        };
        d.Ih = function() {
            this.pf = {}
        };
        fh.$inject = "$window angularHelper csiService captionsSettingsService environmentModel locale authService playerVariablesModel playerFactoryService timeService progressModel templateClient".split(" ");

        function gh(a, b, c) {
            Kg.call(this, a, b, "post_play_sw");
            this.Dy = c
        }
        z(gh, Kg);
        gh.prototype.VQ = function() {
            this.Rq = this.Dy.fi()
        };
        gh.prototype.iv = function(a, b, c) {
            this.Rq && (this.Vl("/gen_204", this.rS(a, b, c)), this.Rq = null)
        };
        gh.prototype.rS = function(a, b, c) {
            var e = hh,
                f = {
                    a: "tv_postplay"
                };
            f[e.OM] = a;
            f[e.MM] = b;
            c && (f[e.NM] = c);
            f.t = ((this.Dy.fi() - this.Rq) / 1E3).toFixed(1);
            f.e = this.Db.Up();
            x(f, this.Db.ok());
            return f
        };
        var hh = {
            MM: "v",
            NM: "next",
            OM: "outcome"
        };
        gh.$inject = ["environmentModel", "privateDataService", "timeService"];

        function ih(a, b) {
            this.hA = a;
            this.sg = b;
            this.dA = [];
            var c = this.sg.get("device-retention-permission", 31536E4);
            this.ah = c ? c.enabled : !0;
            this.$V = "private_data"
        }
        d = ih.prototype;
        d.HQ = function(a) {
            this.ah = a;
            this.sg.sb("device-retention-permission", {
                enabled: a
            }, 31536E4)
        };
        d.RI = function(a) {
            this.dA.push(a)
        };
        d.DQ = function() {
            this.sg.remove("private_data");
            this.dA.forEach(function(a) {
                a()
            }, this)
        };
        d.Cq = function(a, b) {
            this.ah && this.jT(a, b)
        };
        d.wr = function(a) {
            var b = this.sg.get("private_data", 31536E3);
            return b ? b[a] : null
        };
        d.jT = function(a, b) {
            var c = this.sg.get("private_data") || {};
            c[a] = b;
            this.sg.sb("private_data", c, 31536E3)
        };
        d.x4 = function(a, b) {
            this.Cq(a, I(b))
        };
        d.v3 = function(a) {
            a = this.wr(a);
            return /^[\s\xa0]*$/.test(null == a ? "" : String(a)) ? null : ic(a)
        };
        d.SS = function(a, b, c, e) {
            this.ah ? e ? this.hA.jsonp(a, b, c) : this.hA.get(a, b, c) : c && c()
        };
        ih.$inject = ["ytHttp", "localStorage"];

        function jh(a, b) {
            var c;
            a instanceof jh ? (this.Kd = s(b) ? b : a.aJ(), this.Sk(a.gp()), this.Tk(a.hp()), this.Dh(a.ze()), this.Eh(a.Of()), this.Rk(a.Rh()), this.Th(a.bJ().clone()), this.Qk(a.fp())) : a && (c = hf(String(a))) ? (this.Kd = !!b, this.Sk(c[1] || "", !0), this.Tk(c[2] || "", !0), this.Dh(c[3] || "", !0), this.Eh(c[4]), this.Rk(c[5] || "", !0), this.Th(c[6] || "", !0), this.Qk(c[7] || "", !0)) : (this.Kd = !!b, this.ab = new kh(null, null, this.Kd))
        }
        d = jh.prototype;
        d.wg = "";
        d.Or = "";
        d.Kr = "";
        d.xm = null;
        d.Nr = "";
        d.Lr = "";
        d.bs = !1;
        d.Kd = !1;
        d.toString = function() {
            var a = [],
                b = this.gp();
            b && a.push(lh(b, mh), ":");
            if (b = this.ze()) {
                a.push("//");
                var c = this.hp();
                c && a.push(lh(c, mh), "@");
                a.push(encodeURIComponent(String(b)));
                b = this.Of();
                null != b && a.push(":", String(b))
            }
            if (b = this.Rh()) this.ei() && "/" != b.charAt(0) && a.push("/"), a.push(lh(b, "/" == b.charAt(0) ? nh : oh));
            (b = this.Hy()) && a.push("?", b);
            (b = this.fp()) && a.push("#", lh(b, ph));
            return a.join("")
        };
        d.resolve = function(a) {
            var b = this.clone(),
                c = a.fJ();
            c ? b.Sk(a.gp()) : c = a.gJ();
            c ? b.Tk(a.hp()) : c = a.ei();
            c ? b.Dh(a.ze()) : c = a.Jp();
            var e = a.Rh();
            if (c) b.Eh(a.Of());
            else if (c = a.Gw()) {
                if ("/" != e.charAt(0))
                    if (this.ei() && !this.Gw()) e = "/" + e;
                    else {
                        var f = b.Rh().lastIndexOf("/"); - 1 != f && (e = b.Rh().substr(0, f + 1) + e)
                    }
                f = e;
                if (".." == f || "." == f) e = "";
                else if (xa(f, "./") || xa(f, "/.")) {
                    for (var e = 0 == f.lastIndexOf("/", 0), f = f.split("/"), g = [], k = 0; k < f.length;) {
                        var l = f[k++];
                        "." == l ? e && k == f.length && g.push("") : ".." == l ? ((1 < g.length || 1 == g.length &&
                            "" != g[0]) && g.pop(), e && k == f.length && g.push("")) : (g.push(l), e = !0)
                    }
                    e = g.join("/")
                } else e = f
            }
            c ? b.Rk(e) : c = a.eJ();
            c ? b.Th(a.cJ()) : c = a.dJ();
            c && b.Qk(a.fp());
            return b
        };
        d.clone = function() {
            return new jh(this)
        };
        d.gp = function() {
            return this.wg
        };
        d.Sk = function(a, b) {
            this.cc();
            if (this.wg = b ? a ? decodeURIComponent(a) : "" : a) this.wg = this.wg.replace(/:$/, "");
            return this
        };
        d.fJ = function() {
            return !!this.wg
        };
        d.hp = function() {
            return this.Or
        };
        d.Tk = function(a, b) {
            this.cc();
            this.Or = b ? a ? decodeURIComponent(a) : "" : a;
            return this
        };
        d.gJ = function() {
            return !!this.Or
        };
        d.ze = function() {
            return this.Kr
        };
        d.Dh = function(a, b) {
            this.cc();
            this.Kr = b ? a ? decodeURIComponent(a) : "" : a;
            return this
        };
        d.ei = function() {
            return !!this.Kr
        };
        d.Of = function() {
            return this.xm
        };
        d.Eh = function(a) {
            this.cc();
            if (a) {
                a = Number(a);
                if (isNaN(a) || 0 > a) throw Error("Bad port number " + a);
                this.xm = a
            } else this.xm = null;
            return this
        };
        d.Jp = function() {
            return null != this.xm
        };
        d.Rh = function() {
            return this.Nr
        };
        d.Rk = function(a, b) {
            this.cc();
            this.Nr = b ? a ? decodeURIComponent(a) : "" : a;
            return this
        };
        d.Gw = function() {
            return !!this.Nr
        };
        d.eJ = function() {
            return "" !== this.ab.toString()
        };
        d.Th = function(a, b) {
            this.cc();
            a instanceof kh ? (this.ab = a, this.ab.Xy(this.Kd)) : (b || (a = lh(a, qh)), this.ab = new kh(a, null, this.Kd));
            return this
        };
        d.j2 = function(a, b) {
            return this.Th(a, b)
        };
        d.Hy = function() {
            return this.ab.toString()
        };
        d.cJ = function() {
            return this.ab.rR()
        };
        d.bJ = function() {
            return this.ab
        };
        d.S1 = function() {
            return this.Hy()
        };
        d.ia = function(a, b) {
            this.cc();
            this.ab.CP(a, b);
            return this
        };
        d.lf = function(a, b) {
            this.cc();
            u(b) || (b = [String(b)]);
            this.ab.Cx(a, b);
            return this
        };
        d.M1 = function(a) {
            return this.ab.ea(a)
        };
        d.L1 = function(a) {
            return this.ab.get(a)
        };
        d.fp = function() {
            return this.Lr
        };
        d.Qk = function(a, b) {
            this.cc();
            this.Lr = b ? a ? decodeURIComponent(a) : "" : a;
            return this
        };
        d.dJ = function() {
            return !!this.Lr
        };
        d.W2 = function(a) {
            return (!this.ei() && !a.ei() || this.ze() == a.ze()) && (!this.Jp() && !a.Jp() || this.Of() == a.Of())
        };
        d.Mf = function() {
            this.cc();
            this.ia("zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ y()).toString(36));
            return this
        };
        d.L3 = function(a) {
            this.cc();
            this.ab.remove(a);
            return this
        };
        d.j4 = function(a) {
            this.bs = a;
            return this
        };
        d.o3 = function() {
            return this.bs
        };
        d.cc = function() {
            if (this.bs) throw Error("Tried to modify a read-only Uri");
        };
        d.i2 = function(a) {
            this.Kd = a;
            this.ab && this.ab.Xy(a);
            return this
        };
        d.aJ = function() {
            return this.Kd
        };

        function rh(a, b, c, e, f, g, k, l) {
            l = new jh(null, l);
            a && l.Sk(a);
            b && l.Tk(b);
            c && l.Dh(c);
            e && l.Eh(e);
            f && l.Rk(f);
            g && l.Th(g);
            k && l.Qk(k);
            return l
        }

        function lh(a, b) {
            return v(a) ? encodeURI(a).replace(b, sh) : null
        }

        function sh(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        }
        var mh = /[#\/\?@]/g,
            oh = /[\#\?:]/g,
            nh = /[\#\?]/g,
            qh = /[\#\?@]/g,
            ph = /#/g;

        function kh(a, b, c) {
            this.Ld = a || null;
            this.Jq = !!c
        }
        d = kh.prototype;
        d.uc = function() {
            if (!this.T && (this.T = new eb, this.C = 0, this.Ld))
                for (var a = this.Ld.split("&"), b = 0; b < a.length; b++) {
                    var c = a[b].indexOf("="),
                        e = null,
                        f = null;
                    0 <= c ? (e = a[b].substring(0, c), f = a[b].substring(c + 1)) : e = a[b];
                    e = qa(e);
                    e = this.De(e);
                    this.Dx(e, f ? qa(f) : "")
                }
        };
        d.T = null;
        d.C = null;
        d.O = function() {
            this.uc();
            return this.C
        };
        d.Dx = function(a, b) {
            this.uc();
            this.bg();
            a = this.De(a);
            var c = this.T.get(a);
            c || this.T.tb(a, c = []);
            c.push(b);
            this.C++;
            return this
        };
        d.remove = function(a) {
            this.uc();
            a = this.De(a);
            return this.T.xl(a) ? (this.bg(), this.C -= this.T.get(a).length, this.T.remove(a)) : !1
        };
        d.clear = function() {
            this.bg();
            this.T = null;
            this.C = 0
        };
        d.va = function() {
            this.uc();
            return 0 == this.C
        };
        d.$v = function(a) {
            this.uc();
            a = this.De(a);
            return this.T.xl(a)
        };
        d.Ei = function(a) {
            var b = this.ea();
            return C(b, a)
        };
        d.Ab = function() {
            this.uc();
            for (var a = this.T.ea(), b = this.T.Ab(), c = [], e = 0; e < b.length; e++)
                for (var f = a[e], g = 0; g < f.length; g++) c.push(b[e]);
            return c
        };
        d.ea = function(a) {
            this.uc();
            var b = [];
            if (a) this.$v(a) && (b = Ka(b, this.T.get(this.De(a))));
            else {
                a = this.T.ea();
                for (var c = 0; c < a.length; c++) b = Ka(b, a[c])
            }
            return b
        };
        d.CP = function(a, b) {
            this.uc();
            this.bg();
            a = this.De(a);
            this.$v(a) && (this.C -= this.T.get(a).length);
            this.T.tb(a, [b]);
            this.C++;
            return this
        };
        d.get = function(a, b) {
            var c = a ? this.ea(a) : [];
            return 0 < c.length ? String(c[0]) : b
        };
        d.Cx = function(a, b) {
            this.remove(a);
            0 < b.length && (this.bg(), this.T.tb(this.De(a), La(b)), this.C += b.length)
        };
        d.toString = function() {
            if (this.Ld) return this.Ld;
            if (!this.T) return "";
            for (var a = [], b = this.T.Ab(), c = 0; c < b.length; c++)
                for (var e = b[c], f = encodeURIComponent(String(e)), e = this.ea(e), g = 0; g < e.length; g++) {
                    var k = f;
                    "" !== e[g] && (k += "=" + encodeURIComponent(String(e[g])));
                    a.push(k)
                }
            return this.Ld = a.join("&")
        };
        d.rR = function() {
            return this.toString() ? decodeURIComponent(this.toString()) : ""
        };
        d.bg = function() {
            this.Ld = null
        };
        d.L0 = function(a) {
            this.uc();
            ce(this.T, function(b, c) {
                C(a, c) || this.remove(c)
            }, this);
            return this
        };
        d.clone = function() {
            var a = new kh;
            a.Ld = this.Ld;
            this.T && (a.T = this.T.clone(), a.C = this.C);
            return a
        };
        d.De = function(a) {
            a = String(a);
            this.Jq && (a = a.toLowerCase());
            return a
        };
        d.Xy = function(a) {
            a && !this.Jq && (this.uc(), this.bg(), ce(this.T, function(a, c) {
                var e = c.toLowerCase();
                c != e && (this.remove(c), this.Cx(e, a))
            }, this));
            this.Jq = a
        };
        d.extend = function(a) {
            for (var b = 0; b < arguments.length; b++) ce(arguments[b], function(a, b) {
                this.Dx(b, a)
            }, this)
        };

        function th() {
            this.Cb = [];
            this.Zb = {}
        }
        z(th, yf);
        d = th.prototype;
        d.Mz = 1;
        d.em = 0;
        d.Jr = function(a, b, c) {
            var e = this.Zb[a];
            e || (e = this.Zb[a] = []);
            var f = this.Mz;
            this.Cb[f] = a;
            this.Cb[f + 1] = b;
            this.Cb[f + 2] = c;
            this.Mz = f + 3;
            e.push(f);
            return f
        };
        d.y4 = function(a, b, c) {
            var e = this.Jr(a, function(a) {
                b.apply(c, arguments);
                this.Me(e)
            }, this);
            return e
        };
        d.QS = function(a, b, c) {
            if (a = this.Zb[a]) {
                var e = this.Cb;
                if (a = Ha(a, function(a) {
                        return e[a + 1] == b && e[a + 2] == c
                    })) return this.Me(a)
            }
            return !1
        };
        d.Me = function(a) {
            if (0 != this.em) return this.Kh || (this.Kh = []), this.Kh.push(a), !1;
            var b = this.Cb[a];
            if (b) {
                var c = this.Zb[b];
                c && Ja(c, a);
                delete this.Cb[a];
                delete this.Cb[a + 1];
                delete this.Cb[a + 2]
            }
            return !!b
        };
        d.Gr = function(a, b) {
            var c = this.Zb[a];
            if (c) {
                this.em++;
                for (var e = Na(arguments, 1), f = 0, g = c.length; f < g; f++) {
                    var k = c[f];
                    this.Cb[k + 1].apply(this.Cb[k + 2], e)
                }
                this.em--;
                if (this.Kh && 0 == this.em)
                    for (; c = this.Kh.pop();) this.Me(c);
                return 0 != f
            }
            return !1
        };
        d.clear = function(a) {
            if (a) {
                var b = this.Zb[a];
                b && (B(b, this.Me, this), delete this.Zb[a])
            } else this.Cb.length = 0, this.Zb = {}
        };
        d.O = function(a) {
            if (a) {
                var b = this.Zb[a];
                return b ? b.length : 0
            }
            a = 0;
            for (b in this.Zb) a += this.O(b);
            return a
        };
        d.A = function() {
            th.f.A.call(this);
            delete this.Cb;
            delete this.Zb;
            delete this.Kh
        };
        var uh = window.yt && window.yt.config_ || {};
        m("yt.config_", uh, void 0);
        var vh = window.yt && window.yt.tokens_ || {};
        m("yt.tokens_", vh, void 0);
        m("yt.globals_", window.yt && window.yt.globals_ || {}, void 0);
        m("yt.msgs_", window.yt && window.yt.msgs_ || {}, void 0);
        var wh = window.yt && window.yt.timeouts_ || [];
        m("yt.timeouts_", wh, void 0);
        m("yt.intervals_", window.yt && window.yt.intervals_ || [], void 0);

        function xh(a) {
            yh(uh, arguments)
        }

        function zh(a) {
            yh(vh, arguments)
        }

        function Ah(a, b) {
            ga(a) && (a = Bh(a));
            var c = window.setTimeout(a, b);
            wh.push(c);
            return c
        }

        function Bh(a) {
            return a && window.yterr ? function() {
                try {
                    return a.apply(this, arguments)
                } catch (b) {
                    var c = b;
                    if (window.yterr) {
                        var e = ba("yt.www.errors.log");
                        e ? e(c) : (e = ("ERRORS" in uh ? uh.ERRORS : void 0) || [], e.push(c), xh("ERRORS", e))
                    }
                    throw b;
                }
            } : a
        }

        function yh(a, b) {
            if (1 < b.length) {
                var c = b[0];
                a[c] = b[1]
            } else {
                var e = b[0];
                for (c in e) a[c] = e[c]
            }
        };
        var Ch = ba("yt.pubsub.instance_") || new th;
        th.prototype.subscribe = th.prototype.Jr;
        th.prototype.unsubscribeByKey = th.prototype.Me;
        th.prototype.publish = th.prototype.Gr;
        th.prototype.clear = th.prototype.clear;
        m("yt.pubsub.instance_", Ch, void 0);

        function Dh(a, b) {
            this.action = a;
            this.params = b || null
        }
        var Eh = {
            lB: "onStateOpened",
            CLOSED: "onStateClosed",
            ERROR: "onError",
            MESSAGE: "onMessage"
        };

        function Fh(a) {
            a && (this.name = a.name, this.Tc = a.screenId, this.rc = a.loungeToken, this.tr = a.dialId || "")
        }
        d = Fh.prototype;
        d.name = "";
        d.Tc = "";
        d.rc = "";
        d.tr = "";
        d.KM = function() {
            return !!this.Tc
        };
        d.K0 = function() {
            return {
                key: this.Tc,
                name: this.name
            }
        };
        d.zL = function() {
            return {
                name: this.name,
                screenId: this.Tc,
                loungeToken: this.rc,
                dialId: this.tr
            }
        };
        d.i3 = function(a) {
            return a == this.Tc || a == this.tr
        };

        function Gh() {
            this.DB = y()
        }
        var Hh = new Gh;
        Gh.prototype.FU = function(a) {
            this.DB = a
        };
        Gh.prototype.rT = function() {
            this.FU(y())
        };
        Gh.prototype.get = function() {
            return this.DB
        };

        function Ih(a) {
            this.DP = a || "";
            this.om = Hh
        }
        d = Ih.prototype;
        d.my = !0;
        d.t4 = !0;
        d.s4 = !0;
        d.ny = !1;
        d.u4 = !1;
        d.m4 = function(a) {
            this.om = a
        };
        d.b2 = function() {
            return this.om
        };
        d.N3 = function() {
            this.om.rT()
        };

        function Jh(a) {
            a = new Date(a.pB());
            return Kh(a.getFullYear() - 2E3) + Kh(a.getMonth() + 1) + Kh(a.getDate()) + " " + Kh(a.getHours()) + ":" + Kh(a.getMinutes()) + ":" + Kh(a.getSeconds()) + "." + Kh(Math.floor(a.getMilliseconds() / 10))
        }

        function Kh(a) {
            return 10 > a ? "0" + a : String(a)
        }

        function Lh(a, b) {
            var c = (a.pB() - b) / 1E3,
                e = c.toFixed(3),
                f = 0;
            if (1 > c) f = 2;
            else
                for (; 100 > c;) f++, c *= 10;
            for (; 0 < f--;) e = " " + e;
            return e
        }

        function Mh(a) {
            Ih.call(this, a)
        }
        z(Mh, Ih);
        Mh.prototype.sQ = function(a) {
            var b = [];
            b.push(this.DP, " ");
            this.my && b.push("[", Jh(a), "] ");
            b.push("[", Lh(a, this.om.get()), "s] ");
            b.push("[", a.By(), "] ");
            b.push(a.xz(), "\n");
            this.ny && a.KP() && b.push(a.LP(), "\n");
            return b.join("")
        };

        function Nh(a, b) {
            this.PS = new jc(a);
            this.YT = b ? ic : hc
        }
        Nh.prototype.A2 = function(a) {
            return this.PS.Er(a)
        };
        Nh.prototype.parse = function(a) {
            return this.YT(a)
        };

        function Oh(a, b) {
            try {
                var c;
                var e = ba("window.location.href");
                if (v(a)) c = {
                    message: a,
                    name: "Unknown error",
                    lineNumber: "Not available",
                    fileName: e,
                    stack: "Not available"
                };
                else {
                    var f, g, k = !1;
                    try {
                        f = a.lineNumber || a.t3 || "Not available"
                    } catch (l) {
                        f = "Not available", k = !0
                    }
                    try {
                        g = a.fileName || a.filename || a.sourceURL || h.$googDebugFname || e
                    } catch (p) {
                        g = "Not available", k = !0
                    }
                    c = !k && a.lineNumber && a.fileName && a.stack ? a : {
                        message: a.message,
                        name: a.name,
                        lineNumber: f,
                        fileName: g,
                        stack: a.stack || "Not available"
                    }
                }
                return "Message: " + ra(c.message) +
                    '\nUrl: <a href="view-source:' + c.fileName + '" target="_new">' + c.fileName + "</a>\nLine: " + c.lineNumber + "\n\nBrowser stack:\n" + ra(c.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + ra(Ph(b) + "-> ")
            } catch (q) {
                return "Exception trying to expose exception! You win, we lose. " + q
            }
        }

        function Ph(a) {
            return Qh(a || arguments.callee.caller, [])
        }

        function Qh(a, b) {
            var c = [];
            if (C(b, a)) c.push("[...circular reference...]");
            else if (a && 50 > b.length) {
                c.push(Rh(a) + "(");
                for (var e = a.arguments, f = 0; f < e.length; f++) {
                    0 < f && c.push(", ");
                    var g;
                    g = e[f];
                    switch (typeof g) {
                        case "object":
                            g = g ? "object" : "null";
                            break;
                        case "string":
                            break;
                        case "number":
                            g = String(g);
                            break;
                        case "boolean":
                            g = g ? "true" : "false";
                            break;
                        case "function":
                            g = (g = Rh(g)) ? g : "[fn]";
                            break;
                        default:
                            g = typeof g
                    }
                    40 < g.length && (g = g.substr(0, 40) + "...");
                    c.push(g)
                }
                b.push(a);
                c.push(")\n");
                try {
                    c.push(Qh(a.caller, b))
                } catch (k) {
                    c.push("[exception trying to get caller]\n")
                }
            } else a ?
                c.push("[...long stack...]") : c.push("[end]");
            return c.join("")
        }

        function Rh(a) {
            if (Sh[a]) return Sh[a];
            a = String(a);
            if (!Sh[a]) {
                var b = /function ([^\(]+)/.exec(a);
                Sh[a] = b ? b[1] : "[Anonymous]"
            }
            return Sh[a]
        }
        var Sh = {};

        function Th(a, b, c, e, f) {
            this.DU(a, b, c, e, f)
        }
        Th.prototype.Wz = 0;
        Th.prototype.vr = null;
        Th.prototype.ur = null;
        var Uh = 0;
        d = Th.prototype;
        d.DU = function(a, b, c, e, f) {
            this.Wz = "number" == typeof f ? f : Uh++;
            this.Xz = e || y();
            this.Sz = a;
            this.Vz = b;
            this.Uz = c;
            delete this.vr;
            delete this.ur
        };
        d.By = function() {
            return this.Uz
        };
        d.KP = function() {
            return this.vr
        };
        d.hT = function(a) {
            this.vr = a
        };
        d.LP = function() {
            return this.ur
        };
        d.iT = function(a) {
            this.ur = a
        };
        d.d4 = function(a) {
            this.Uz = a
        };
        d.tQ = function() {
            return this.Sz
        };
        d.m2 = function(a) {
            this.Sz = a
        };
        d.xz = function() {
            return this.Vz
        };
        d.g4 = function(a) {
            this.Vz = a
        };
        d.pB = function() {
            return this.Xz
        };
        d.h4 = function(a) {
            this.Xz = a
        };
        d.Y1 = function() {
            return this.Wz
        };

        function Vh(a) {
            this.cB = a
        }
        Vh.prototype.tB = null;
        Vh.prototype.p2 = null;
        Vh.prototype.Yr = null;
        Vh.prototype.handlers_ = null;

        function Wh(a, b) {
            this.name = a;
            this.value = b
        }
        Wh.prototype.toString = function() {
            return this.name
        };
        var Xh = new Wh("OFF", Infinity),
            Yh = new Wh("SHOUT", 1200),
            Zh = new Wh("SEVERE", 1E3),
            $h = new Wh("WARNING", 900),
            ai = new Wh("INFO", 800),
            bi = new Wh("CONFIG", 700),
            ci = new Wh("FINE", 500),
            di = new Wh("FINER", 400),
            ei = new Wh("FINEST", 300),
            fi = new Wh("ALL", 0),
            gi = [Xh, Yh, Zh, $h, ai, bi, ci, di, ei, fi],
            hi = null;

        function ii(a) {
            if (!hi) {
                hi = {};
                for (var b = 0, c; c = gi[b]; b++) hi[c.value] = c, hi[c.name] = c
            }
            if (a in hi) return hi[a];
            for (b = 0; b < gi.length; ++b)
                if (c = gi[b], c.value <= a) return c;
            return null
        }
        d = Vh.prototype;
        d.o2 = function() {
            return this.cB
        };
        d.KR = function() {};
        d.OR = function() {
            return !1
        };
        d.fT = function() {
            return this.tB
        };
        d.EU = function() {
            this.Yr || (this.Yr = {});
            return this.Yr
        };
        d.lp = function() {};
        d.n2 = function() {
            return Xh
        };
        d.l1 = function() {
            return Xh
        };
        d.j3 = function() {
            return !1
        };
        d.log = function() {};
        d.B1 = function(a, b, c) {
            var e = new Th(a, String(b), this.cB);
            c && (e.hT(c), e.iT(Oh(c, arguments.callee.caller)));
            return e
        };
        d.r4 = function() {};
        d.we = function() {};
        d.q2 = function() {};
        d.info = function() {};
        d.config = function() {};
        d.kc = function() {};
        d.Nh = function() {};
        d.P0 = function() {};
        d.x3 = function() {};
        d.I0 = function(a) {
            var b = "log:" + a.xz();
            h.console && (h.console.timeStamp ? h.console.timeStamp(b) : h.console.markTimeline && h.console.markTimeline(b));
            h.msWriteProfilerMark && h.msWriteProfilerMark(b);
            for (b = this; b;) b.$S(a), b = b.fT()
        };
        d.$S = function(a) {
            if (this.handlers_)
                for (var b = 0, c; c = this.handlers_[b]; b++) c(a)
        };
        d.cU = function(a) {
            this.tB = a
        };
        d.UT = function(a, b) {
            this.EU()[a] = b
        };
        var ji = {},
            ki = null;

        function li() {
            ki || (ki = new Vh(""), ji[""] = ki, ki.lp(bi))
        }

        function mi(a) {
            li();
            var b;
            if (!(b = ji[a])) {
                b = new Vh(a);
                var c = a.lastIndexOf("."),
                    e = a.substr(0, c),
                    c = a.substr(c + 1),
                    e = mi(e);
                e.UT(c, b);
                b.cU(e);
                ji[a] = b
            }
            return b
        };

        function ni() {};

        function oi(a) {
            this.Ar = a || 100;
            this.ad = []
        }
        d = oi.prototype;
        d.vg = 0;
        d.N2 = function(a) {
            var b = this.ad[this.vg];
            this.ad[this.vg] = a;
            this.vg = (this.vg + 1) % this.Ar;
            return b
        };
        d.get = function(a) {
            a = this.NA(a);
            return this.ad[a]
        };
        d.P2 = function(a, b) {
            a = this.NA(a);
            this.ad[a] = b
        };
        d.O = function() {
            return this.ad.length
        };
        d.va = function() {
            return 0 == this.ad.length
        };
        d.clear = function() {
            this.vg = this.ad.length = 0
        };
        d.ea = function() {
            return this.AP(this.O())
        };
        d.AP = function(a) {
            var b = this.O(),
                c = [];
            for (a = this.O() - a; a < b; a++) c[a] = this.get(a);
            return c
        };
        d.Ab = function() {
            for (var a = [], b = this.O(), c = 0; c < b; c++) a[c] = c;
            return a
        };
        d.O2 = function(a) {
            return a < this.O()
        };
        d.Ei = function(a) {
            for (var b = this.O(), c = 0; c < b; c++)
                if (this.get(c) == a) return !0;
            return !1
        };
        d.y1 = function() {
            return 0 == this.O() ? null : this.get(this.O() - 1)
        };
        d.NA = function(a) {
            if (a >= this.ad.length) throw Error("Out of bounds exception");
            return this.ad.length < this.Ar ? a : (this.vg + Number(a)) % this.Ar
        };

        function pi(a) {
            this.j = a;
            this.Ge = {}
        }
        z(pi, yf);
        var qi = [];
        d = pi.prototype;
        d.zf = function(a, b, c, e, f) {
            u(b) || (qi[0] = b, b = qi);
            for (var g = 0; g < b.length; g++) {
                var k = N(a, b[g], c || this, e || !1, f || this.j || this);
                this.Ge[k.key] = k
            }
            return this
        };
        d.xL = function(a, b, c, e, f) {
            if (u(b))
                for (var g = 0; g < b.length; g++) this.xL(a, b[g], c, e, f);
            else a = Sf(a, b, c || this, e, f || this.j || this), this.Ge[a.key] = a;
            return this
        };
        d.u3 = function(a, b, c, e, f) {
            b.zf(a, c, e, f || this.j || this, this);
            return this
        };
        d.w2 = function() {
            var a = 0,
                b;
            for (b in this.Ge) Object.prototype.hasOwnProperty.call(this.Ge, b) && a++;
            return a
        };
        d.zl = function(a, b, c, e, f) {
            if (u(b))
                for (var g = 0; g < b.length; g++) this.zl(a, b[g], c, e, f);
            else {
                t: if (f = f || this.j || this, e = !!e, c = Of(c || this), Hf(a)) a = a.MJ(b, c, e, f);
                    else {
                        if (a = Uf(a, b, e))
                            for (b = 0; b < a.length; b++)
                                if (!a[b].Qc && a[b].listener == c && a[b].capture == e && a[b].Wb == f) {
                                    a = a[b];
                                    break t
                                }
                        a = null
                    }a && (Vf(a), delete this.Ge[a.key])
            }
            return this
        };
        d.B4 = function(a, b, c, e, f) {
            b.zl(a, c, e, f || this.j || this, this);
            return this
        };
        d.tu = function() {
            Ua(this.Ge, Vf);
            this.Ge = {}
        };
        d.A = function() {
            pi.f.A.call(this);
            this.tu()
        };
        d.handleEvent = function() {
            throw Error("EventHandler.handleEvent not implemented");
        };

        function ri() {}
        ri.prototype.kB = null;
        ri.prototype.mu = function() {
            return this.kB || (this.kB = this.NT())
        };
        var si;

        function ti() {}
        z(ti, ri);
        ti.prototype.aB = function() {
            var a = this.rB();
            return a ? new ActiveXObject(a) : new XMLHttpRequest
        };
        ti.prototype.NT = function() {
            var a = {};
            this.rB() && (a[0] = !0, a[1] = !0);
            return a
        };
        ti.prototype.rB = function() {
            if (!this.vB && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b = 0; b < a.length; b++) {
                    var c = a[b];
                    try {
                        return new ActiveXObject(c), this.vB = c
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            return this.vB
        };
        si = new ti;

        function ui(a, b, c, e, f) {
            this.Sa = a;
            this.P = b;
            this.Dc = c;
            this.fb = e;
            this.Lg = f || 1;
            this.w = 45E3;
            this.Cn = new pi(this);
            this.rk = new bg;
            this.rk.bl(250)
        }
        d = ui.prototype;
        d.Ao = null;
        d.Rb = !1;
        d.og = null;
        d.kq = null;
        d.Tj = null;
        d.Lh = null;
        d.pe = null;
        d.Ta = null;
        d.Hf = null;
        d.la = null;
        d.ih = 0;
        d.Tb = null;
        d.uf = null;
        d.Ic = null;
        d.Wt = -1;
        d.gu = !0;
        d.se = !1;
        d.Bo = 0;
        d.Vj = null;

        function vi(a, b) {
            switch (a) {
                case 0:
                    return "Non-200 return code (" + b + ")";
                case 1:
                    return "XMLHTTP failure (no data)";
                case 2:
                    return "HttpConnection timeout";
                default:
                    return "Unknown error"
            }
        }
        var wi = {},
            xi = {};
        d = ui.prototype;
        d.Tg = function(a) {
            this.Ao = a
        };
        d.setTimeout = function(a) {
            this.w = a
        };
        d.jG = function(a) {
            this.Bo = a
        };
        d.Yu = function(a, b, c) {
            this.Lh = 1;
            this.pe = a.clone().Mf();
            this.Hf = b;
            this.Gt = c;
            this.Ly(null)
        };
        d.Ln = function(a, b, c, e) {
            this.Lh = 1;
            this.pe = a.clone().Mf();
            this.Hf = null;
            this.Gt = b;
            e && (this.gu = !1);
            this.Ly(c)
        };
        d.Ly = function(a) {
            this.Tj = y();
            this.kf();
            this.Ta = this.pe.clone();
            this.Ta.lf("t", this.Lg);
            this.ih = 0;
            var b = this.Sa.Yj();
            this.la = this.Sa.ro(b ? a : null);
            0 < this.Bo && (this.Vj = new fg(w(this.ou, this, this.la), this.Bo));
            this.Cn.zf(this.la, "readystatechange", this.rF);
            a = this.Ao ? ab(this.Ao) : {};
            this.Hf ? (this.uf = "POST", a["Content-Type"] = "application/x-www-form-urlencoded", this.la.send(this.Ta, this.uf, this.Hf, a)) : (this.uf = "GET", this.gu && !Yc && (a.Connection = "close"), this.la.send(this.Ta, this.uf, null, a));
            this.Sa.Lb(1);
            this.P.sF(this.uf, this.Ta, this.fb, this.Lg, this.Hf)
        };
        d.rF = function(a) {
            a = a.target;
            var b = this.Vj;
            b && 3 == a.jd() ? (this.P.debug("Throttling readystatechange."), b.ew()) : this.ou(a)
        };
        d.ou = function(a) {
            try {
                a == this.la ? this.gL() : this.P.Ug("Called back with an unexpected xmlhttp")
            } catch (b) {
                this.P.debug("Failed call to OnXmlHttpReadyStateChanged_"), this.la && this.la.Bf() ? this.P.Bd(b, "ResponseText: " + this.la.Bf()) : this.P.Bd(b, "No response text")
            } finally {}
        };
        d.gL = function() {
            var a = this.la.jd(),
                b = this.la.OD(),
                c = this.la.qf();
            if (K && !kd(10) || Yc && !L("420+")) {
                if (4 > a) return
            } else if (3 > a || 3 == a && !Wc && !this.la.Bf()) return;
            this.se || (4 != a || 7 == b) || (8 == b || 0 >= c ? this.Sa.Lb(3) : this.Sa.Lb(2));
            this.Ij();
            this.Wt = b = this.la.qf();
            (c = this.la.Bf()) || this.P.debug("No response text for uri " + this.Ta + " status " + b);
            this.Rb = 200 == b;
            this.P.QD(this.uf, this.Ta, this.fb, this.Lg, a, b);
            this.Rb ? (4 == a && this.md(), this.Gt ? (this.Pt(a, c), Wc && 3 == a && this.PD()) : (this.P.qh(this.fb, c, null), this.Yn(c)),
                this.Rb && !this.se && (4 == a ? this.Sa.Xg(this) : (this.Rb = !1, this.kf()))) : (400 == b && 0 < c.indexOf("Unknown SID") ? (this.Ic = 3, R(13), this.P.Ug("XMLHTTP Unknown SID (" + this.fb + ")")) : (this.Ic = 0, R(14), this.P.Ug("XMLHTTP Bad status " + b + " (" + this.fb + ")")), this.md(), this.Yg())
        };
        d.Pt = function(a, b) {
            for (var c = !0; !this.se && this.ih < b.length;) {
                var e = this.iJ(b);
                if (e == xi) {
                    4 == a && (this.Ic = 4, R(15), c = !1);
                    this.P.qh(this.fb, null, "[Incomplete Response]");
                    break
                } else if (e == wi) {
                    this.Ic = 4;
                    R(16);
                    this.P.qh(this.fb, b, "[Invalid Chunk]");
                    c = !1;
                    break
                } else this.P.qh(this.fb, e, null), this.Yn(e)
            }
            4 == a && 0 == b.length && (this.Ic = 1, R(17), c = !1);
            this.Rb = this.Rb && c;
            c || (this.P.qh(this.fb, b, "[Invalid Chunked Response]"), this.md(), this.Yg())
        };
        d.TQ = function() {
            var a = this.la.jd(),
                b = this.la.Bf();
            this.ih < b.length && (this.Ij(), this.Pt(a, b), this.Rb && 4 != a && this.kf())
        };
        d.PD = function() {
            this.Cn.zf(this.rk, "tick", this.TQ);
            this.rk.start()
        };
        d.x0 = function() {
            this.Rb && this.P.Ec("Received browser offline event even though request completed successfully");
            this.P.ZJ(this.Ta);
            this.md();
            this.Ic = 6;
            R(21);
            this.Yg()
        };
        d.iJ = function(a) {
            var b = this.ih,
                c = a.indexOf("\n", b);
            if (-1 == c) return xi;
            b = a.substring(b, c);
            b = Number(b);
            if (isNaN(b)) return wi;
            c += 1;
            if (c + b > a.length) return xi;
            a = a.substr(c, b);
            this.ih = c + b;
            return a
        };
        d.Tt = function(a, b) {
            this.Lh = 3;
            this.pe = a.clone().Mf();
            this.hQ(b)
        };
        d.hQ = function(a) {
            this.Tj = y();
            this.kf();
            var b = a ? window.location.hostname : "";
            this.Ta = this.pe.clone();
            this.Ta.ia("DOMAIN", b);
            this.Ta.ia("t", this.Lg);
            try {
                this.Tb = new ActiveXObject("htmlfile")
            } catch (c) {
                this.P.Ec("ActiveX blocked");
                this.md();
                this.Ic = 7;
                R(22);
                this.Yg();
                return
            }
            var e = "<html><body>";
            a && (e += '<script>document.domain="' + b + '"\x3c/script>');
            e += "</body></html>";
            this.Tb.open();
            this.Tb.write(e);
            this.Tb.close();
            this.Tb.parentWindow.m = w(this.DF, this);
            this.Tb.parentWindow.d = w(this.av, this, !0);
            this.Tb.parentWindow.rpcClose =
                w(this.av, this, !1);
            a = this.Tb.createElement("div");
            this.Tb.parentWindow.document.body.appendChild(a);
            a.innerHTML = '<iframe src="' + this.Ta + '"></iframe>';
            this.P.EF("GET", this.Ta, this.fb, this.Lg);
            this.Sa.Lb(1)
        };
        d.DF = function(a) {
            yi(w(this.UU, this, a), 0)
        };
        d.UU = function(a) {
            this.se || (this.P.oL(this.fb, a), this.Ij(), this.Yn(a), this.kf())
        };
        d.av = function(a) {
            yi(w(this.TU, this, a), 0)
        };
        d.TU = function(a) {
            this.se || (this.P.jJ(this.fb, a), this.md(), this.Rb = a, this.Sa.Xg(this), this.Sa.Lb(4))
        };
        d.rH = function(a) {
            this.Lh = 2;
            this.pe = a.clone().Mf();
            this.eQ()
        };
        d.eQ = function() {
            (new Image).src = this.pe;
            this.Tj = y();
            this.kf()
        };
        d.cancel = function() {
            this.se = !0;
            this.md()
        };
        d.kf = function() {
            this.kq = y() + this.w;
            this.nx(this.w)
        };
        d.nx = function(a) {
            if (null != this.og) throw Error("WatchDog timer not null");
            this.og = yi(w(this.US, this), a)
        };
        d.Ij = function() {
            this.og && (h.clearTimeout(this.og), this.og = null)
        };
        d.US = function() {
            this.og = null;
            var a = y();
            0 <= a - this.kq ? this.sM() : (this.P.Ug("WatchDog timer called too early"), this.nx(this.kq - a))
        };
        d.sM = function() {
            this.Rb && this.P.Ec("Received watchdog timeout even though request loaded successfully");
            this.P.FH(this.Ta);
            2 != this.Lh && this.Sa.Lb(3);
            this.md();
            this.Ic = 2;
            R(18);
            this.Yg()
        };
        d.Yg = function() {
            this.Sa.Az() || this.se || this.Sa.Xg(this)
        };
        d.md = function() {
            this.Ij();
            zf(this.Vj);
            this.Vj = null;
            this.rk.Ob();
            this.Cn.tu();
            if (this.la) {
                var a = this.la;
                this.la = null;
                a.Mu();
                a.ta()
            }
            this.Tb && (this.Tb = null)
        };
        d.ot = function() {
            return this.Rb
        };
        d.Aj = function() {
            return this.Ic
        };
        d.pj = function() {
            return this.Wt
        };
        d.H2 = function() {
            return this.Dc
        };
        d.KF = function() {
            return this.fb
        };
        d.Fn = function() {
            return this.Hf
        };
        d.jo = function() {
            return this.Tj
        };
        d.Yn = function(a) {
            try {
                this.Sa.Zx(this, a), this.Sa.Lb(4)
            } catch (b) {
                this.P.Bd(b, "Error in httprequest callback")
            }
        };

        function zi() {
            this.G2 = null
        }
        d = zi.prototype;
        d.C1 = function() {
            return null
        };
        d.ZJ = function(a) {
            this.info("BROWSER_OFFLINE: " + a)
        };
        d.sF = function(a, b, c, e, f) {
            this.info("XMLHTTP REQ (" + c + ") [attempt " + e + "]: " + a + "\n" + b + "\n" + this.SU(f))
        };
        d.QD = function(a, b, c, e, f, g) {
            this.info("XMLHTTP RESP (" + c + ") [ attempt " + e + "]: " + a + "\n" + b + "\n" + f + " " + g)
        };
        d.qh = function(a, b, c) {
            this.info("XMLHTTP TEXT (" + a + "): " + this.CB(b) + (c ? " " + c : ""))
        };
        d.EF = function(a, b, c, e) {
            this.info("TRIDENT REQ (" + c + ") [ attempt " + e + "]: " + a + "\n" + b)
        };
        d.oL = function(a, b) {
            this.info("TRIDENT TEXT (" + a + "): " + this.CB(b))
        };
        d.jJ = function(a, b) {
            this.info("TRIDENT TEXT (" + a + "): " + b ? "success" : "failure")
        };
        d.FH = function(a) {
            this.info("TIMEOUT: " + a)
        };
        d.debug = function(a) {
            this.info(a)
        };
        d.Bd = function(a, b) {
            this.Ec((b || "Exception") + a)
        };
        d.info = function() {};
        d.Ug = function() {};
        d.Ec = function() {};
        d.CB = function(a) {
            if (!a || "y2f%" == a) return a;
            try {
                var b = ic(a);
                if (b)
                    for (var c = 0; c < b.length; c++) u(b[c]) && this.QU(b[c]);
                return I(b)
            } catch (e) {
                return this.debug("Exception parsing expected JS array - probably was not JS"), a
            }
        };
        d.QU = function(a) {
            if (!(2 > a.length || (a = a[1], !u(a) || 1 > a.length))) {
                var b = a[0];
                if ("noop" != b && "stop" != b)
                    for (b = 1; b < a.length; b++) a[b] = ""
            }
        };
        d.SU = function(a) {
            if (!a) return null;
            var b = "";
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var e = a[c].split("=");
                if (1 < e.length) var f = e[0],
                    e = e[1],
                    g = f.split("_"),
                    b = 2 <= g.length && "type" == g[1] ? b + (f + "=" + e + "&") : b + (f + "=redacted&")
            }
            return b
        };

        function Ai(a, b, c, e, f) {
            (new zi).debug("TestLoadImageWithRetries: " + f);
            if (0 == e) c(!1);
            else {
                var g = f || 0;
                e--;
                Bi(a, b, function(f) {
                    f ? c(!0) : h.setTimeout(function() {
                        Ai(a, b, c, e, g)
                    }, g)
                })
            }
        }

        function Bi(a, b, c) {
            var e = new zi;
            e.debug("TestLoadImage: loading " + a);
            var f = new Image;
            f.onload = function() {
                try {
                    e.debug("TestLoadImage: loaded"), Ci(f), c(!0)
                } catch (a) {
                    e.Bd(a)
                }
            };
            f.onerror = function() {
                try {
                    e.debug("TestLoadImage: error"), Ci(f), c(!1)
                } catch (a) {
                    e.Bd(a)
                }
            };
            f.onabort = function() {
                try {
                    e.debug("TestLoadImage: abort"), Ci(f), c(!1)
                } catch (a) {
                    e.Bd(a)
                }
            };
            f.ontimeout = function() {
                try {
                    e.debug("TestLoadImage: timeout"), Ci(f), c(!1)
                } catch (a) {
                    e.Bd(a)
                }
            };
            h.setTimeout(function() {
                if (f.ontimeout) f.ontimeout()
            }, b);
            f.src =
                a
        }

        function Ci(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        };

        function Di(a, b) {
            this.na = a;
            this.mb = b;
            this.Jv = new Nh(null, !0)
        }
        d = Di.prototype;
        d.ip = null;
        d.Ya = null;
        d.Mk = !1;
        d.qp = null;
        d.Kk = null;
        d.$o = null;
        d.jp = null;
        d.nb = null;
        d.Oh = -1;
        d.Bh = null;
        d.uh = null;
        d.pK = function(a) {
            this.ip = a
        };
        d.qK = function(a) {
            this.Jv = a
        };
        d.oK = function(a) {
            this.jp = a;
            a = this.na.Pu(this.jp);
            R(3);
            this.qp = y();
            var b = this.na.nH();
            null != b ? (this.Bh = this.na.zn(b[0]), (this.uh = b[1]) ? (this.nb = 1, this.cv()) : (this.nb = 2, this.Co())) : (a.lf("MODE", "init"), this.Ya = new ui(this, this.mb, void 0, void 0, void 0), this.Ya.Tg(this.ip), this.Ya.Ln(a, !1, null, !0), this.nb = 0)
        };
        d.cv = function() {
            var a = this.na.Lp(this.uh, "/mail/images/cleardot.gif");
            a.Mf();
            Ai(a.toString(), 5E3, w(this.kM, this), 3, 2E3);
            this.Lb(1)
        };
        d.kM = function(a) {
            a ? (this.nb = 2, this.Co()) : (R(4), this.na.oM(this));
            a && this.Lb(2)
        };
        d.Co = function() {
            this.mb.debug("TestConnection: starting stage 2");
            var a = this.na.sJ();
            null != a ? (this.mb.debug("TestConnection: skipping stage 2, precomputed result is " + a ? "Buffered" : "Unbuffered"), R(5), a ? (R(11), this.na.Ch(this, !1)) : (R(12), this.na.Ch(this, !0))) : (this.Ya = new ui(this, this.mb, void 0, void 0, void 0), this.Ya.Tg(this.ip), a = this.na.St(this.Bh, this.jp), R(5), !K || kd(10) ? (a.lf("TYPE", "xmlhttp"), this.Ya.Ln(a, !1, this.Bh, !1)) : (a.lf("TYPE", "html"), this.Ya.Tt(a, Boolean(this.Bh))))
        };
        d.ro = function(a) {
            return this.na.ro(a)
        };
        d.wK = function() {
            this.Ya && (this.Ya.cancel(), this.Ya = null);
            this.Oh = -1
        };
        d.Az = function() {
            return !1
        };
        d.Zx = function(a, b) {
            this.Oh = a.pj();
            if (0 == this.nb)
                if (this.mb.debug("TestConnection: Got data for stage 1"), b) {
                    try {
                        var c = this.Jv.parse(b)
                    } catch (e) {
                        this.mb.Bd(e);
                        this.na.ap(this, 4);
                        return
                    }
                    this.Bh = this.na.zn(c[0]);
                    this.uh = c[1]
                } else this.mb.debug("TestConnection: Null responseText"), this.na.ap(this, 4);
            else 2 == this.nb && (this.Mk ? (R(7), this.$o = y()) : "11111" == b ? (R(6), this.Mk = !0, this.Kk = y(), this.$G() && (this.Oh = 200, this.Ya.cancel(), this.mb.debug("Test connection succeeded; using streaming connection"), R(12), this.na.Ch(this, !0))) : (R(8), this.Kk = this.$o = y(), this.Mk = !1))
        };
        d.Xg = function() {
            this.Oh = this.Ya.pj();
            if (!this.Ya.ot()) this.mb.debug("TestConnection: request failed, in state " + this.nb), 0 == this.nb ? R(9) : 2 == this.nb && R(10), this.na.ap(this, this.Ya.Aj());
            else if (0 == this.nb) this.mb.debug("TestConnection: request complete for initial check"), this.uh ? (this.nb = 1, this.cv()) : (this.nb = 2, this.Co());
            else if (2 == this.nb) {
                this.mb.debug("TestConnection: request complete for stage 2");
                var a = !1;
                (a = !K || kd(10) ? this.Mk : 200 > this.$o - this.Kk ? !1 : !0) ? (this.mb.debug("Test connection succeeded; using streaming connection"),
                    R(12), this.na.Ch(this, !0)) : (this.mb.debug("Test connection failed; not using streaming"), R(11), this.na.Ch(this, !1))
            }
        };
        d.Qp = function() {
            return this.Oh
        };
        d.Yj = function() {
            return this.na.Yj()
        };
        Di.prototype.isActive = function() {
            return this.na.isActive()
        };
        Di.prototype.$G = function() {
            var a = this.Kk - this.qp;
            return !K || kd(10) || 500 > a
        };
        Di.prototype.Lb = function(a) {
            this.na.Lb(a)
        };

        function Ei(a) {
            O.call(this);
            this.headers = new eb;
            this.ak = a || null;
            this.gd = !1;
            this.Mj = this.n = null;
            this.Nt = this.rh = "";
            this.vf = 0;
            this.qd = "";
            this.ne = this.ao = this.Jj = this.Sn = !1;
            this.te = 0;
            this.bk = null;
            this.th = "";
            this.ck = this.ho = !1
        }
        z(Ei, O);
        Ei.prototype.L2 = null;
        var Fi = /^https?$/i,
            Gi = ["POST", "PUT"],
            Hi = [];
        Ei.send = function(a, b, c, e, f, g, k) {
            var l = new Ei;
            Hi.push(l);
            b && l.zf("complete", b);
            l.sA("ready", l.RQ);
            g && l.WQ(g);
            k && l.bA(k);
            l.send(a, c, e, f)
        };
        d = Ei.prototype;
        d.RQ = function() {
            this.ta();
            Ja(Hi, this)
        };
        d.d2 = function() {
            return this.te
        };
        d.WQ = function(a) {
            this.te = Math.max(0, a)
        };
        d.k4 = function(a) {
            this.th = a
        };
        d.X1 = function() {
            return this.th
        };
        d.bA = function(a) {
            this.ho = a
        };
        d.h2 = function() {
            return this.ho
        };
        Ei.prototype.send = function(a, b, c, e) {
            if (this.n) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.rh + "; newUri=" + a);
            b = b ? b.toUpperCase() : "GET";
            this.rh = a;
            this.qd = "";
            this.vf = 0;
            this.Nt = b;
            this.Sn = !1;
            this.gd = !0;
            this.n = this.XE();
            this.Mj = this.ak ? this.ak.mu() : si.mu();
            this.n.onreadystatechange = w(this.zt, this);
            try {
                ni(null, this.Lc("Opening Xhr")), this.ao = !0, this.n.open(b, a, !0), this.ao = !1
            } catch (f) {
                ni(null, this.Lc("Error opening Xhr: " + f.message));
                this.lu(5, f);
                return
            }
            a = c || "";
            var g = this.headers.clone();
            e && ce(e, function(a, b) {
                g.tb(b, a)
            });
            e = Ha(g.Ab(), Ii);
            c = h.FormData && a instanceof h.FormData;
            !C(Gi, b) || (e || c) || g.tb("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
            ce(g, function(a, b) {
                this.n.setRequestHeader(b, a)
            }, this);
            this.th && (this.n.responseType = this.th);
            "withCredentials" in this.n && (this.n.withCredentials = this.ho);
            try {
                this.Rt(), 0 < this.te && (this.ck = K && L(9) && fa(this.n.timeout) && s(this.n.ontimeout), ni(null, this.Lc("Will abort after " + this.te + "ms if incomplete, xhr2 " + this.ck)), this.ck ?
                    (this.n.timeout = this.te, this.n.ontimeout = w(this.w, this)) : this.bk = cg(this.w, this.te, this)), ni(null, this.Lc("Sending request")), this.Jj = !0, this.n.send(a), this.Jj = !1
            } catch (k) {
                ni(null, this.Lc("Send error: " + k.message)), this.lu(5, k)
            }
        };

        function Ii(a) {
            return "content-type" == a.toLowerCase()
        }
        d = Ei.prototype;
        d.XE = function() {
            return this.ak ? this.ak.aB() : si.aB()
        };
        d.w = function() {
            "undefined" != typeof aa && this.n && (this.qd = "Timed out after " + this.te + "ms, aborting", this.vf = 8, this.Lc(this.qd), this.V("timeout"), this.Mu(8))
        };
        d.lu = function(a, b) {
            this.gd = !1;
            this.n && (this.ne = !0, this.n.abort(), this.ne = !1);
            this.qd = b;
            this.vf = a;
            this.mv();
            this.Pj()
        };
        d.mv = function() {
            this.Sn || (this.Sn = !0, this.V("complete"), this.V(df.ERROR))
        };
        d.Mu = function(a) {
            this.n && this.gd && (this.Lc("Aborting"), this.gd = !1, this.ne = !0, this.n.abort(), this.ne = !1, this.vf = a || 7, this.V("complete"), this.V("abort"), this.Pj())
        };
        d.A = function() {
            this.n && (this.gd && (this.gd = !1, this.ne = !0, this.n.abort(), this.ne = !1), this.Pj(!0));
            Ei.f.A.call(this)
        };
        d.zt = function() {
            this.Kz() || (this.ao || this.Jj || this.ne ? this.Nz() : this.MP())
        };
        d.MP = function() {
            this.Nz()
        };
        d.Nz = function() {
            if (this.gd && "undefined" != typeof aa)
                if (this.Mj[1] && 4 == this.jd() && 2 == this.qf()) this.Lc("Local request error detected and ignored");
                else if (this.Jj && 4 == this.jd()) cg(this.zt, 0, this);
            else if (this.V("readystatechange"), this.ep()) {
                this.Lc("Request complete");
                this.gd = !1;
                try {
                    this.UI() ? (this.V("complete"), this.V("success")) : (this.vf = 6, this.qd = this.TI() + " [" + this.qf() + "]", this.mv())
                } finally {
                    this.Pj()
                }
            }
        };
        d.Pj = function(a) {
            if (this.n) {
                this.Rt();
                var b = this.n,
                    c = this.Mj[0] ? n : null;
                this.Mj = this.n = null;
                a || this.V("ready");
                try {
                    b.onreadystatechange = c
                } catch (e) {}
            }
        };
        d.Rt = function() {
            this.n && this.ck && (this.n.ontimeout = null);
            fa(this.bk) && (h.clearTimeout(this.bk), this.bk = null)
        };
        Ei.prototype.isActive = function() {
            return !!this.n
        };
        d = Ei.prototype;
        d.ep = function() {
            return 4 == this.jd()
        };
        d.UI = function() {
            var a = this.qf(),
                b;
            t: switch (a) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                    b = !0;
                    break t;
                default:
                    b = !1
            }
            return b || 0 === a && !this.RS()
        };
        d.RS = function() {
            var a;
            a = hf(String(this.rh))[1] || null;
            !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1));
            a = a ? a.toLowerCase() : "";
            return Fi.test(a)
        };
        d.jd = function() {
            return this.n ? this.n.readyState : 0
        };
        d.qf = function() {
            try {
                return 2 < this.jd() ? this.n.status : -1
            } catch (a) {
                return -1
            }
        };
        d.TI = function() {
            try {
                return 2 < this.jd() ? this.n.statusText : ""
            } catch (a) {
                return ""
            }
        };
        d.A1 = function() {
            return String(this.rh)
        };
        d.Bf = function() {
            try {
                return this.n ? this.n.responseText : ""
            } catch (a) {
                return ""
            }
        };
        d.W1 = function() {
            try {
                if (this.n && "responseBody" in this.n) return this.n.responseBody
            } catch (a) {}
            return null
        };
        d.iS = function() {
            try {
                return this.n ? this.n.responseXML : null
            } catch (a) {
                return null
            }
        };
        d.hS = function(a) {
            if (this.n) {
                var b = this.n.responseText;
                a && 0 == b.indexOf(a) && (b = b.substring(a.length));
                return hc(b)
            }
        };
        d.V1 = function() {
            try {
                if (!this.n) return null;
                if ("response" in this.n) return this.n.response;
                switch (this.th) {
                    case "":
                    case "text":
                        return this.n.responseText;
                    case "arraybuffer":
                        if ("mozResponseArrayBuffer" in this.n) return this.n.mozResponseArrayBuffer
                }
                return null
            } catch (a) {
                return null
            }
        };
        d.getResponseHeader = function(a) {
            return this.n && this.ep() ? this.n.getResponseHeader(a) : void 0
        };
        d.K2 = function() {
            return this.n && this.ep() ? this.n.getAllResponseHeaders() : ""
        };
        d.OD = function() {
            return this.vf
        };
        d.Aj = function() {
            return v(this.qd) ? this.qd : String(this.qd)
        };
        d.Lc = function(a) {
            return a + " [" + this.Nt + " " + this.rh + " " + this.qf() + "]"
        };

        function Ji(a, b, c) {
            this.Uu = a || null;
            this.ka = 1;
            this.Wa = [];
            this.lc = [];
            this.l = new zi;
            this.hk = new Nh(null, !0);
            this.ZI = b || null;
            this.$I = null != c ? c : null
        }

        function Ki(a, b, c) {
            this.Yw = a;
            this.map = b;
            this.context = c || null
        }
        d = Ji.prototype;
        d.Af = null;
        d.ai = null;
        d.sa = null;
        d.ca = null;
        d.qo = null;
        d.ek = null;
        d.xt = null;
        d.Sj = null;
        d.Hq = !0;
        d.yh = 0;
        d.tJ = 0;
        d.dw = !1;
        d.j = null;
        d.Yb = null;
        d.Sc = null;
        d.Fe = null;
        d.Ed = null;
        d.Io = null;
        d.wq = !0;
        d.Vg = -1;
        d.Jx = -1;
        d.Hc = -1;
        d.kd = 0;
        d.Df = 0;
        d.gy = 5E3;
        d.iy = 1E4;
        d.fB = 2;
        d.Mo = 2E4;
        d.ov = 0;
        d.Fm = !1;
        d.fe = 8;
        var Li = {
                CLOSED: 0,
                INIT: 1,
                X_: 2,
                lB: 3
            },
            Mi = new O;

        function Ni(a, b) {
            M.call(this, "statevent", a);
            this.D2 = b
        }
        z(Ni, M);

        function Oi(a, b, c, e) {
            M.call(this, "timingevent", a);
            this.sW = b;
            this.vW = c;
            this.uW = e
        }
        z(Oi, M);

        function Pi(a, b) {
            M.call(this, "serverreachability", a);
            this.H3 = b
        }
        z(Pi, M);
        d = Ji.prototype;
        d.a1 = function() {
            return this.l
        };
        d.U3 = function(a) {
            null != a && (this.l = a)
        };
        d.Pp = function(a, b, c, e, f) {
            this.l.debug("connect()");
            R(0);
            this.qo = b;
            this.ai = c || {};
            e && s(f) && (this.ai.OSID = e, this.ai.OAID = f);
            this.OL(a)
        };
        d.Mv = function() {
            this.l.debug("disconnect()");
            this.Wu();
            if (3 == this.ka) {
                var a = this.yh++,
                    b = this.ek.clone();
                b.ia("SID", this.Dc);
                b.ia("RID", a);
                b.ia("TYPE", "terminate");
                this.fh(b);
                (new ui(this, this.l, this.Dc, a, void 0)).rH(b)
            }
            this.Xu()
        };
        d.Bw = function() {
            return this.Dc
        };
        d.OL = function(a) {
            this.l.debug("connectTest_()");
            this.bo() && (this.Ed = new Di(this, this.l), this.Ed.pK(this.Af), this.Ed.qK(this.hk), this.Ed.oK(a))
        };
        d.OK = function() {
            this.l.debug("connectChannel_()");
            this.lL(1, Li.CLOSED);
            this.ek = this.Pu(this.qo);
            this.Tn()
        };
        d.Wu = function() {
            this.Ed && (this.Ed.wK(), this.Ed = null);
            this.ca && (this.ca.cancel(), this.ca = null);
            this.Sc && (h.clearTimeout(this.Sc), this.Sc = null);
            this.Qj();
            this.sa && (this.sa.cancel(), this.sa = null);
            this.Yb && (h.clearTimeout(this.Yb), this.Yb = null)
        };
        d.o1 = function() {
            return this.Af
        };
        d.ax = function(a) {
            this.Af = a
        };
        d.F2 = function(a) {
            this.ov = a
        };
        d.n4 = function(a) {
            this.Fm = a
        };
        d.t1 = function() {
            return this.j
        };
        d.Mw = function(a) {
            this.j = a
        };
        d.V0 = function() {
            return this.Hq
        };
        d.T3 = function(a) {
            this.Hq = a
        };
        d.gz = function() {
            return !this.Io
        };
        d.U0 = function() {
            return this.wq
        };
        d.S3 = function(a) {
            this.wq = a
        };
        d.eM = function(a, b) {
            if (this.ka == Li.CLOSED) throw Error("Invalid operation: sending map when state is closed");
            1E3 == this.Wa.length && this.l.Ec("Already have 1000 queued maps upon queueing " + I(a));
            this.Wa.push(new Ki(this.tJ++, a, b));
            2 != this.ka && 3 != this.ka || this.Tn()
        };
        d.X3 = function(a) {
            this.dw = a;
            this.l.info("setFailFast: " + a);
            (this.sa || this.Yb) && this.kd > this.dp() && (this.l.info("Retry count " + this.kd + " > new maxRetries " + this.dp() + ". Fail immediately!"), this.sa ? (this.sa.cancel(), this.Xg(this.sa)) : (h.clearTimeout(this.Yb), this.Yb = null, this.ib(2)))
        };
        d.dp = function() {
            return this.dw ? 0 : this.fB
        };
        d.Z3 = function(a) {
            this.fB = a
        };
        d.a4 = function(a) {
            this.Mo = a
        };
        d.CI = function() {
            return 3
        };
        d.Az = function() {
            return this.ka == Li.CLOSED
        };
        d.Vc = function() {
            return this.ka
        };
        d.uQ = function() {
            return this.Hc
        };
        d.Aw = function() {
            return this.Vg
        };
        d.sw = function() {
            return 0 != this.VU()
        };
        d.E2 = function(a) {
            this.hk = a
        };
        d.VU = function() {
            var a = 0;
            this.ca && a++;
            this.sa && a++;
            return a
        };
        d.Tn = function() {
            this.sa || this.Yb || (this.Yb = yi(w(this.Ov, this), 0), this.kd = 0)
        };
        d.$E = function(a) {
            if (this.sa || this.Yb) return this.l.Ec("Request already in progress"), !1;
            if (1 == this.ka || this.kd >= this.dp()) return !1;
            this.l.debug("Going to retry POST");
            this.Yb = yi(w(this.Ov, this, a), this.dv(this.kd));
            this.kd++;
            return !0
        };
        d.Ov = function(a) {
            this.Yb = null;
            this.px(a)
        };
        d.px = function(a) {
            this.l.debug("startForwardChannel_");
            this.bo() && (1 == this.ka ? a ? this.l.Ec("Not supposed to retry the open") : (this.WH(), this.ka = 2) : 3 == this.ka && (a ? this.aw(a) : 0 == this.Wa.length ? this.l.debug("startForwardChannel_ returned: nothing to send") : this.sa ? this.l.Ec("startForwardChannel_ returned: connection already in progress") : (this.aw(), this.l.debug("startForwardChannel_ finished, sent request"))))
        };
        d.WH = function() {
            this.l.debug("open_()");
            this.yh = Math.floor(1E5 * Math.random());
            var a = this.yh++,
                b = new ui(this, this.l, "", a, void 0);
            b.Tg(this.Af);
            var c = this.Ho(),
                e = this.ek.clone();
            e.ia("RID", a);
            this.Uu && e.ia("CVER", this.Uu);
            this.fh(e);
            b.Yu(e, c, !0);
            this.sa = b
        };
        d.aw = function(a) {
            var b;
            a ? 6 < this.fe ? (this.MF(), b = this.yh - 1, a = this.Ho()) : (b = a.KF(), a = a.Fn()) : (b = this.yh++, a = this.Ho());
            var c = this.ek.clone();
            c.ia("SID", this.Dc);
            c.ia("RID", b);
            c.ia("AID", this.Vg);
            this.fh(c);
            b = new ui(this, this.l, this.Dc, b, this.kd + 1);
            b.Tg(this.Af);
            b.setTimeout(Math.round(0.5 * this.Mo) + Math.round(0.5 * this.Mo * Math.random()));
            this.sa = b;
            b.Yu(c, a, !0)
        };
        d.fh = function(a) {
            if (this.j) {
                var b = this.j.yx(this);
                b && ce(b, function(b, e) {
                    a.ia(e, b)
                })
            }
        };
        d.Ho = function() {
            var a = Math.min(this.Wa.length, 1E3),
                b = ["count=" + a],
                c;
            6 < this.fe && 0 < a ? (c = this.Wa[0].Yw, b.push("ofs=" + c)) : c = 0;
            for (var e = 0; e < a; e++) {
                var f = this.Wa[e].Yw,
                    g = this.Wa[e].map,
                    f = 6 >= this.fe ? e : f - c;
                try {
                    ce(g, function(a, c) {
                        b.push("req" + f + "_" + c + "=" + encodeURIComponent(a))
                    })
                } catch (k) {
                    b.push("req" + f + "_type=" + encodeURIComponent("_badmap")), this.j && this.j.DJ(this, g)
                }
            }
            this.lc = this.lc.concat(this.Wa.splice(0, a));
            return b.join("&")
        };
        d.MF = function() {
            this.Wa = this.lc.concat(this.Wa);
            this.lc.length = 0
        };
        d.jt = function() {
            this.ca || this.Sc || (this.Fu = 1, this.Sc = yi(w(this.ow, this), 0), this.Df = 0)
        };
        d.fo = function() {
            if (this.ca || this.Sc) return this.l.Ec("Request already in progress"), !1;
            if (this.Df >= this.CI()) return !1;
            this.l.debug("Going to retry GET");
            this.Fu++;
            this.Sc = yi(w(this.ow, this), this.dv(this.Df));
            this.Df++;
            return !0
        };
        d.ow = function() {
            this.Sc = null;
            this.pS()
        };
        d.pS = function() {
            if (this.bo()) {
                this.l.debug("Creating new HttpRequest");
                this.ca = new ui(this, this.l, this.Dc, "rpc", this.Fu);
                this.ca.Tg(this.Af);
                this.ca.jG(this.ov);
                var a = this.xt.clone();
                a.ia("RID", "rpc");
                a.ia("SID", this.Dc);
                a.ia("CI", this.Io ? "0" : "1");
                a.ia("AID", this.Vg);
                this.fh(a);
                !K || kd(10) ? (a.ia("TYPE", "xmlhttp"), this.ca.Ln(a, !0, this.Sj, !1)) : (a.ia("TYPE", "html"), this.ca.Tt(a, Boolean(this.Sj)));
                this.l.debug("New Request created")
            }
        };
        d.bo = function() {
            if (this.j) {
                var a = this.j.cI(this);
                if (0 != a) return this.l.debug("Handler returned error code from okToMakeRequest"), this.ib(a), !1
            }
            return !0
        };
        d.Ch = function(a, b) {
            this.l.debug("Test Connection Finished");
            this.Io = this.wq && b;
            this.Hc = a.Qp();
            this.OK()
        };
        d.ap = function(a) {
            this.l.debug("Test Connection Failed");
            this.Hc = a.Qp();
            this.ib(2)
        };
        d.oM = function() {
            this.l.debug("Test Connection Blocked");
            this.Hc = this.Ed.Qp();
            this.ib(9)
        };
        d.Zx = function(a, b) {
            if (this.ka != Li.CLOSED && (this.ca == a || this.sa == a))
                if (this.Hc = a.pj(), this.sa == a && 3 == this.ka)
                    if (7 < this.fe) {
                        var c;
                        try {
                            c = this.hk.parse(b)
                        } catch (e) {
                            c = null
                        }
                        u(c) && 3 == c.length ? this.nG(c) : (this.l.debug("Bad POST response data returned"), this.ib(11))
                    } else "y2f%" != b && (this.l.debug("Bad data returned - missing/invald magic cookie"), this.ib(11));
            else this.ca == a && this.Qj(), /^[\s\xa0]*$/.test(b) || (c = this.hk.parse(b), u(c), this.oG(c))
        };
        d.nG = function(a) {
            if (0 == a[0]) this.QK();
            else {
                this.Jx = a[1];
                var b = this.Jx - this.Vg;
                0 < b && (a = a[2], this.l.debug(a + " bytes (in " + b + " arrays) are outstanding on the BackChannel"), this.VK(a) && !this.Fe && (this.Fe = yi(w(this.SK, this), 6E3)))
            }
        };
        d.QK = function() {
            this.l.debug("Server claims our backchannel is missing.");
            if (this.Sc) this.l.debug("But we are currently starting the request.");
            else {
                if (this.ca)
                    if (this.ca.jo() + 3E3 < this.sa.jo()) this.Qj(), this.ca.cancel(), this.ca = null;
                    else return;
                else this.l.Ug("We do not have a BackChannel established");
                this.fo();
                R(19)
            }
        };
        d.VK = function(a) {
            return 37500 > a && !this.gz() && 0 == this.Df
        };
        d.zn = function(a) {
            return this.Hq ? this.j ? this.j.LL(a) : a : null
        };
        d.SK = function() {
            null != this.Fe && (this.Fe = null, this.ca.cancel(), this.ca = null, this.fo(), R(20))
        };
        d.Qj = function() {
            null != this.Fe && (h.clearTimeout(this.Fe), this.Fe = null)
        };
        d.Xg = function(a) {
            this.l.debug("Request complete");
            var b;
            if (this.ca == a) this.Qj(), this.ca = null, b = 2;
            else if (this.sa == a) this.sa = null, b = 1;
            else return;
            this.Hc = a.pj();
            if (this.ka != Li.CLOSED)
                if (a.ot()) 1 == b ? (b = a.Fn() ? a.Fn().length : 0, a = y() - a.jo(), Mi.V(new Oi(Mi, b, a, this.kd)), this.Tn(), this.aF(), this.lc.length = 0) : this.jt();
                else {
                    var c = a.Aj();
                    if (3 == c || 7 == c || 0 == c && 0 < this.Hc) this.l.debug("Not retrying due to error type");
                    else {
                        this.l.debug("Maybe retrying, last error: " + vi(c, this.Hc));
                        if (1 == b && this.$E(a) || 2 == b && this.fo()) return;
                        this.l.debug("Exceeded max number of retries")
                    }
                    this.l.debug("Error: HTTP request failed");
                    switch (c) {
                        case 1:
                            this.ib(5);
                            break;
                        case 4:
                            this.ib(10);
                            break;
                        case 3:
                            this.ib(6);
                            break;
                        case 7:
                            this.ib(12);
                            break;
                        default:
                            this.ib(2)
                    }
                }
        };
        d.dv = function(a) {
            var b = this.gy + Math.floor(Math.random() * this.iy);
            this.isActive() || (this.l.debug("Inactive channel"), b *= 2);
            return b * a
        };
        d.l4 = function(a, b) {
            this.gy = a;
            this.iy = b
        };
        d.oG = function(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                this.Vg = c[0];
                c = c[1];
                2 == this.ka ? "c" == c[0] ? (this.Dc = c[1], this.Sj = this.zn(c[2]), c = c[3], null != c ? this.fe = c : this.fe = 6, this.ka = 3, this.j && this.j.tv(this), this.xt = this.St(this.Sj, this.qo), this.jt()) : "stop" == c[0] && this.ib(7) : 3 == this.ka && ("stop" == c[0] ? this.ib(7) : "noop" != c[0] && this.j && this.j.sv(this, c), this.Df = 0)
            }
        };
        d.lL = function(a) {
            if (!C(arguments, this.ka)) throw Error("Unexpected channel state: " + this.ka);
        };
        d.ib = function(a) {
            this.l.info("Error code " + a);
            if (2 == a || 9 == a) {
                var b = null;
                this.j && (b = this.j.bI(this));
                var c = w(this.fI, this);
                b || (b = new jh("//web.archive.org/web/20130711074931/https://www.google.com/images/cleardot.gif"), b.Mf());
                Bi(b.toString(), 1E4, c)
            } else R(2);
            this.fw(a)
        };
        d.fI = function(a) {
            a ? (this.l.info("Successfully pinged google.com"), R(2)) : (this.l.info("Failed to ping google.com"), R(1), this.fw(8))
        };
        d.aF = function() {
            this.j && this.j.kL(this, this.lc)
        };
        d.fw = function(a) {
            this.l.debug("HttpChannel: error - " + a);
            this.ka = Li.CLOSED;
            this.j && this.j.Lv(this, a);
            this.Xu();
            this.Wu()
        };
        d.Xu = function() {
            this.ka = Li.CLOSED;
            this.Hc = -1;
            if (this.j)
                if (0 == this.lc.length && 0 == this.Wa.length) this.j.Zo(this);
                else {
                    this.l.debug("Number of undelivered maps, pending: " + this.lc.length + ", outgoing: " + this.Wa.length);
                    var a = La(this.lc),
                        b = La(this.Wa);
                    this.lc.length = 0;
                    this.Wa.length = 0;
                    this.j.Zo(this, a, b)
                }
        };
        d.Pu = function(a) {
            a = this.Lp(null, a);
            this.l.debug("GetForwardChannelUri: " + a);
            return a
        };
        d.nH = function() {
            return this.ZI
        };
        d.sJ = function() {
            return this.$I
        };
        d.St = function(a, b) {
            var c = this.Lp(this.Yj() ? a : null, b);
            this.l.debug("GetBackChannelUri: " + c);
            return c
        };
        d.Lp = function(a, b, c) {
            var e = b instanceof jh ? b.clone() : new jh(b, void 0);
            if ("" != e.ze()) a && e.Dh(a + "." + e.ze()), e.Eh(c || e.Of());
            else var f = window.location,
                e = rh(f.protocol, null, a ? a + "." + f.hostname : f.hostname, c || f.port, b);
            this.ai && ce(this.ai, function(a, b) {
                e.ia(b, a)
            });
            e.ia("VER", this.fe);
            this.fh(e);
            return e
        };
        d.ro = function(a) {
            if (a && !this.Fm) throw Error("Can't create secondary domain capable XhrIo object.");
            a = new Ei;
            a.bA(this.Fm);
            return a
        };
        Ji.prototype.isActive = function() {
            return !!this.j && this.j.isActive(this)
        };

        function yi(a, b) {
            if (!ga(a)) throw Error("Fn must not be null and must be a function");
            return h.setTimeout(function() {
                a()
            }, b)
        }
        Ji.prototype.Lb = function(a) {
            Mi.V(new Pi(Mi, a))
        };

        function R(a) {
            Mi.V(new Ni(Mi, a))
        }
        Ji.prototype.Yj = function() {
            return this.Fm || !(!K || kd(10))
        };
        new oi(1E3);
        new Mh;

        function Qi() {}
        d = Qi.prototype;
        d.A0 = null;
        d.cI = function() {
            return 0
        };
        d.tv = function() {};
        d.sv = function() {};
        d.kL = function() {};
        d.Lv = function() {};
        d.Zo = function() {};
        d.yx = function() {
            return {}
        };
        d.bI = function() {
            return null
        };
        Qi.prototype.isActive = function() {
            return !0
        };
        Qi.prototype.DJ = function() {};
        Qi.prototype.LL = function(a) {
            return a
        };

        function Ri(a, b) {
            bg.call(this);
            if (ga(a)) b && (a = w(a, b));
            else if (a && ga(a.handleEvent)) a = w(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.OQ = a;
            N(this, "tick", w(this.kT, this));
            this.ez()
        }
        z(Ri, bg);
        Ri.prototype.kT = function() {
            if (this.MR()) {
                var a = this.LA();
                24E4 > 2 * a && (a *= 2);
                this.bl(a)
            }
            this.OQ()
        };
        Ri.prototype.ez = function() {
            this.Ob();
            var a = 5E3 + 2E4 * Math.random();
            this.bl(a)
        };
        Ri.prototype.gQ = function() {
            this.Ob();
            this.bl(500)
        };
        Ri.prototype.MR = function() {
            return 500 < this.LA()
        };

        function Si(a, b) {
            this.kw = a;
            this.di = b;
            this.gg = new th;
            this.lb = new Ri(this.jM, this);
            this.oa = null
        }
        z(Si, Qi);
        d = Si.prototype;
        d.nl = "";
        d.Zh = 0;
        d.Il = 0;
        d.debug = function() {};
        d.e1 = function() {
            return this.di
        };
        d.wl = function(a, b, c) {
            return this.gg.Jr(a, b, c)
        };
        d.D4 = function(a, b, c) {
            return this.gg.QS(a, b, c)
        };
        d.Me = function(a) {
            return this.gg.Me(a)
        };
        d.ir = function(a, b) {
            return this.gg.Gr.apply(this.gg, arguments)
        };
        d.Gd = function() {
            return this.oa
        };
        d.Z0 = function() {
            return {
                firstTestResults: [""],
                secondTestResults: this.oa.gz(),
                sessionId: this.oa.Bw(),
                arrayId: this.oa.Aw()
            }
        };
        d.nw = function(a) {
            return 2 == a && 401 == this.oa.uQ()
        };
        d.bx = function(a, b, c) {
            if (!this.oa || 2 != this.oa.Vc()) {
                this.nl = "";
                this.lb.Ob();
                this.kl = a || null;
                this.Zh = b || 0;
                a = this.kw + "/test";
                b = APP_URL + "/api/lounge/bc/bind";
                var e = new Ji("1", c ? c.firstTestResults : null, c ? c.secondTestResults : null),
                    f = this.oa;
                f && f.Mw(null);
                e.Mw(this);
                this.oa = e;
                f ? ((3 == f.Vc() || f.sw()) && this.debug("BrowserChannelServices.Channel: unexpected reconnect state: " + f.Vc()), this.oa.Pp(a, b, this.di, f.Bw(), f.Aw())) : c ? this.oa.Pp(a, b, this.di, c.sessionId, c.arrayId) : this.oa.Pp(a, b, this.di)
            }
        };
        d.E4 = function(a) {
            this.Il = a || 0;
            this.lb.Ob();
            this.oa && this.oa.Vc() != Li.CLOSED && this.oa.Mv();
            this.Il = 0
        };
        d.AL = function(a, b) {
            if (!this.oa || this.oa.Vc() == Li.CLOSED || 2 != this.oa.Vc() && 3 != this.oa.Vc() && !this.lb.enabled) this.debug("Ignoring message: " + a);
            else {
                var c = {
                    _sc: a
                };
                b && db(c, b);
                this.debug("Sending message: " + I(c));
                this.Gd().eM(c)
            }
        };
        d.tv = function() {
            this.lb.ez();
            this.kl = null;
            this.Zh = 0;
            this.ir("onStateOpened")
        };
        d.Lv = function(a, b) {
            var c = this.nw(b);
            4 == b || c || (6 == b && this.lb.gQ(), this.lb.start());
            this.ir(Eh.ERROR, b)
        };
        d.Zo = function() {
            this.ir(Eh.CLOSED)
        };
        d.yx = function() {
            var a = {
                v: 2
            };
            this.nl && (a.gsessionid = this.nl);
            0 != this.Zh && (a.ui = "" + this.Zh);
            0 != this.Il && (a.ui = "" + this.Il);
            this.kl && db(a, this.kl);
            return a
        };
        d.sv = function(a, b) {
            this.debug("Channel received array: " + b);
            if ("S" == b[0]) this.nl = b[1];
            else {
                var c = this.oA(b[0], b[1]);
                this.gg.Gr(Eh.MESSAGE, c)
            }
        };
        d.oA = function(a, b) {
            return new Dh(a, b)
        };
        d.e4 = function(a) {
            (this.di.loungeIdToken = a) || this.lb.Ob()
        };
        d.jM = function() {
            this.lb.Ob();
            this.oa.sw() ? this.lb.start() : this.bx(this.kl, this.Zh)
        };

        function Ti(a, b, c) {
            Si.call(this, a, {
                device: "LOUNGE_SCREEN",
                id: b.id,
                name: b.name,
                app: b.sd,
                loungeIdToken: c,
                hasCc: ""
            });
            this.bm = [];
            this.wl("onStateOpened", this.gA, this);
            this.wl(Eh.ERROR, this.gA, this)
        }

        z(Ti, Si);
        d = Ti.prototype;
        d.gA = function() {
            var a = 3 == this.Gd().Vc();
            if (0 < this.bm.length) {
                var b = this.bm;
                this.bm = [];
                B(b, function(b) {
                    b(a)
                })
            }
        };
        d.OJ = function(a, b) {
            this.Gd() && 3 == this.Gd().Vc() ? a(!0) : (this.bm.push(a), this.bx(), b && this.Gd().ax({
                Authorization: "OAuth " + b
            }))
        };
        d.tx = function(a) {
            return a.videoId || a.video_id || ""
        };
        d.ux = function(a) {
            a = a.videoIds || a.video_ids || "";
            return 0 < a.length ? a.split(",") : []
        };
        d.vx = function(a) {
            a = a.videoSources || "";
            return 0 < a.length ? a.split(",") : []
        };
        d.sx = function(a) {
            a = a.vvts || "";
            var b = {};
            0 < a.length && (a = a.split(","), B(a, function(a) {
                a = a.split(":");
                b[a[0]] = a[1]
            }));
            return b
        };
        d.mq = function(a) {
            a = parseInt(a.currentTime || a.newTime, 10);
            if (isNaN(a) || 0 > a) a = 0;
            return a
        };
        d.oA = function(a, b) {
            var c = b || {},
                e = {};
            switch (a) {
                case "play":
                case "pause":
                case "stopVideo":
                    break;
                case "seekTo":
                    e.currentTime = this.mq(c);
                    break;
                case "setVideo":
                    e.videoId = this.tx(c);
                    e.currentTime = this.mq(c);
                    break;
                case "setPlaylist":
                    e.Cf = this.ux(c);
                    e.currentTime = this.mq(c);
                    e.oh = parseInt(c.currentIndex, 10);
                    e.Xn = this.vx(c);
                    e.Wn = this.sx(c);
                    if (isNaN(e.oh) || -1 == e.oh) {
                        var f = this.tx(c);
                        f && e.Cf ? (this.debug("Using deprecated version of setPlaylist with videoId."), e.oh = Ia(e.Cf, function(a) {
                            return a == f
                        })) : e.oh = -1
                    }
                    break;
                case "updatePlaylist":
                    e.Cf = this.ux(c);
                    e.Xn = this.vx(c);
                    e.Wn = this.sx(c);
                    break;
                case "setVolume":
                    e.volume = parseInt(c.volume, 10) || 0;
                    "delta" in c && (e.Jt = parseInt(c.delta, 10));
                    e.muted = "true" == c.muted || "1" == c.muted;
                    break;
                case "getVolume":
                    break;
                case "setSubtitlesTrack":
                    e.videoId = c.videoId;
                    var g = {};
                    if (c.trackName || c.languageCode) g.name = c.trackName, g.languageName = c.languageName, g.languageCode = c.languageCode, g.format = parseInt(c.format, 10) || 1, g.kind = c.kind;
                    e.track = g;
                    break;
                case "getSubtitlesTrack":
                    e.videoId = c.videoId ||
                        "";
                    break;
                case "getNowPlaying":
                case "getPlaylist":
                    e.rK = c.recipientDevice || "";
                    e.vk = function(a) {
                        e.EV && (a.recipientDevice = e.rK)
                    };
                    break;
                case "remoteConnected":
                case "remoteDisconnected":
                    e.Ze = new mc(hc(c.device));
                    e.Un = !!c.ui;
                    break;
                case "loungeStatus":
                    c = hc(c.devices);
                    u(c) ? e.bb = Ea(c, function(a) {
                        return new mc(a)
                    }) : e.bb = [];
                    break;
                case "showQrCode":
                    e.url = c.url || "";
                    break;
                case "hideQrCode":
                    break;
                default:
                    this.debug("Unknown or deprecated action: " + a)
            }
            return new Dh(a, e)
        };

        function Ui(a, b, c) {
            for (var e = a.elements, f, g = 0; f = e[g]; g++)
                if (f.form == a && !f.disabled && "fieldset" != f.tagName.toLowerCase()) {
                    var k = f.name;
                    switch (f.type.toLowerCase()) {
                        case "file":
                        case "submit":
                        case "reset":
                        case "button":
                            break;
                        case "select-multiple":
                            f = Vi(f);
                            if (null != f)
                                for (var l, p = 0; l = f[p]; p++) c(b, k, l);
                            break;
                        default:
                            l = Vi(f), null != l && c(b, k, l)
                    }
                }
            e = a.getElementsByTagName("input");
            for (g = 0; f = e[g]; g++) f.form == a && "image" == f.type.toLowerCase() && (k = f.name, c(b, k, f.value), c(b, k + ".x", "0"), c(b, k + ".y", "0"))
        }

        function Wi(a, b, c) {
            var e = a.get(b);
            e || (e = [], a.tb(b, e));
            e.push(c)
        }

        function Xi(a, b, c) {
            a.push(encodeURIComponent(b) + "=" + encodeURIComponent(c))
        }

        function Vi(a) {
            var b = a.type;
            if (!s(b)) return null;
            switch (b.toLowerCase()) {
                case "checkbox":
                case "radio":
                    return a.checked ? a.value : null;
                case "select-one":
                    return b = a.selectedIndex, 0 <= b ? a.options[b].value : null;
                case "select-multiple":
                    for (var b = [], c, e = 0; c = a.options[e]; e++) c.selected && b.push(c.value);
                    return b.length ? b : null;
                default:
                    return s(a.value) ? a.value : null
            }
        };

        function Yi(a) {
            "?" == a.charAt(0) && (a = a.substr(1));
            a = a.split("&");
            for (var b = {}, c = 0, e = a.length; c < e; c++) {
                var f = a[c].split("=");
                if (1 == f.length && f[0] || 2 == f.length) {
                    var g = qa(f[0] || ""),
                        f = qa(f[1] || "");
                    g in b ? u(b[g]) ? Ma(b[g], f) : b[g] = [b[g], f] : b[g] = f
                }
            }
            return b
        }

        function Zi(a) {
            a = mf([], a);
            a[0] = "";
            return a.join("")
        }

        function $i(a) {
            var b = hf(a);
            a = b[1];
            var c = b[2],
                e = b[3],
                b = b[4],
                f = "";
            a && (f += a + ":");
            e && (f += "//", c && (f += c + "@"), f += e, b && (f += ":" + b));
            return f
        }

        function aj(a, b) {
            var c = a.split("#", 2);
            a = c[0];
            var c = 1 < c.length ? "#" + c[1] : "",
                e = a.split("?", 2);
            a = e[0];
            var e = Yi(e[1] || ""),
                f;
            for (f in b) e[f] = b[f];
            return kf(mf([a], e)) + c
        };
        var bj = null;
        "undefined" != typeof XMLHttpRequest ? bj = function() {
            return new XMLHttpRequest
        } : "undefined" != typeof ActiveXObject && (bj = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });

        function cj(a) {
            switch (a && "status" in a ? a.status : -1) {
                case 0:
                case 200:
                case 204:
                case 304:
                    return !0;
                default:
                    return !1
            }
        };
        var S = {
            send: function(a, b, c, e, f, g, k) {
                var l = bj && bj();
                if ("open" in l) {
                    l.onreadystatechange = function() {
                        4 == (l && "readyState" in l ? l.readyState : 0) && b && Bh(b)(l)
                    };
                    c = (c || "GET").toUpperCase();
                    e = e || "";
                    l.open(c, a, !0);
                    g && (l.responseType = g);
                    k && (l.withCredentials = !0);
                    a = "POST" == c;
                    "PAGE_CL" in uh && uh.PAGE_CL && ("PAGE_BUILD_TIMESTAMP" in uh && uh.PAGE_BUILD_TIMESTAMP) && (f = f || {}, f["X-YouTube-Page-CL"] = "PAGE_CL" in uh ? uh.PAGE_CL : void 0, f["X-YouTube-Page-Timestamp"] = "PAGE_BUILD_TIMESTAMP" in uh ? uh.PAGE_BUILD_TIMESTAMP : void 0);
                    if (f)
                        for (var p in f) l.setRequestHeader(p, f[p]), "content-type" == p.toLowerCase() && (a = !1);
                    a && l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    l.send(e);
                    return l
                }
            },
            eg: function(a, b) {
                var c = b.format || "JSON";
                b.SV && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
                var e = b.Kq;
                e && (a = aj(a, e));
                var f = b.RM || "";
                if (e = b.Sp) f = Yi(f), db(f, e), f = Zi(f);
                var g = !1,
                    k, l = S.send(a, function(a) {
                        if (!g) {
                            g = !0;
                            k && window.clearTimeout(k);
                            var e =
                                cj(a),
                                f = null;
                            if (e || 400 <= a.status && 500 > a.status) f = S.FO(c, a);
                            e && (e = S.zO(c, a, f));
                            var f = f || {},
                                l = b.context || h;
                            e ? b.yd && b.yd.call(l, a, f) : b.onError && b.onError.call(l, a, f);
                            b.ky && b.ky.call(l, a, f)
                        }
                    }, b.method, f, b.headers, b.responseType, b.withCredentials);
                b.AO && 0 < b.timeout && (k = Ah(function() {
                    g || (g = !0, l.abort(), window.clearTimeout(k), b.AO.call(b.context || h, l))
                }, b.timeout));
                return l
            },
            Q3: function(a, b) {
                var c = b || {};
                c.method = a.method.toUpperCase();
                if ("POST" == c.method) {
                    var e;
                    e = [];
                    Ui(a, e, Xi);
                    e = e.join("&");
                    c.RM = e
                } else {
                    e =
                        new eb;
                    Ui(a, e, Wi);
                    e = e.sR();
                    var f = c.Kq || {};
                    db(f, e);
                    c.Kq = f
                }
                return S.eg(a.action, c)
            },
            FO: function(a, b) {
                var c = null;
                switch (a) {
                    case "JSON":
                        var e = b.responseText,
                            f = b.getResponseHeader("Content-Type") || "";
                        e && 0 <= f.indexOf("json") && (c = ic(e));
                        break;
                    case "XML":
                        if (e = (e = b.responseXML) ? S.RA(e) : null) c = {}, e = e.getElementsByTagName("*"), B(e, function(a) {
                            c[a.tagName] = S.gB(a)
                        })
                }
                return c
            },
            zO: function(a, b, c) {
                switch (a) {
                    case "XML":
                        return 0 == parseInt(c && c.return_code, 10);
                    case "RAW":
                        return !0
                }
                return !!c
            },
            R3: function(a, b) {
                var c =
                    b.onComplete || null,
                    e = b.onException || null,
                    f = b.onError || null,
                    g = b.update || null,
                    k = b.json || !1;
                return S.send(a, function(a) {
                    if (cj(a)) {
                        var b = a.responseXML,
                            q = b ? S.RA(b) : null,
                            b = !(!b || !q),
                            r, t;
                        if (b && (r = S.Pi(q, "return_code"), t = S.Pi(q, "html_content"), 0 == r)) {
                            g && t && ((v(g) ? document.getElementById(g) : g).innerHTML = t);
                            var G = S.Pi(q, "js_content");
                            if (G) {
                                var oc = document.createElement("script");
                                oc.text = G;
                                document.getElementsByTagName("head")[0].appendChild(oc)
                            }
                        }
                        c && (b ? (b = S.Pi(q, "redirect_on_success"), r && b ? window.location = b :
                            ((q = S.Pi(q, 0 == r ? "success_message" : "error_message")) && alert(q), a = k ? eval("(" + t + ")") : a, 0 == r ? c(a) : e && e(a))) : a.responseText && c(a))
                    } else f && f(a)
                }, b.method || "POST", b.postBody || null, b.headers || null)
            },
            RA: function(a) {
                return a ? (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null : null
            },
            Pi: function(a, b) {
                if (!a) return null;
                var c = a.getElementsByTagName(b);
                return c && 0 < c.length ? S.gB(c[0]) : null
            },
            gB: function(a) {
                var b = "";
                B(a.childNodes, function(a) {
                    b += a.nodeValue
                });
                return b
            },
            sm: {}
        };
        S.sm.html5_ajax = "action_get_html5_token";
        S.sm.watch_actions_ajax = "action_get_watch_actions_token";
        S.sm.addto_ajax = "action_get_wl_token";
        S.tm = {};
        S.tm.html5_ajax = "html5_ajax_token";
        S.tm.watch_actions_ajax = "watch_actions_ajax_token";
        S.tm.addto_ajax = "addto_ajax_token";
        S.w3 = function(a, b, c) {
            if (a in vh && vh[a]) b && window.setTimeout(b, 0);
            else {
                var e = $i(document.location.href) + "/token_ajax",
                    f = {};
                f[S.sm[a]] = 1;
                S.eg(e, {
                    format: "RAW",
                    method: "GET",
                    Kq: f,
                    ky: function(e) {
                        var f = Yi(e.responseText),
                            l = f[S.tm[a]];
                        l ? (zh(a, l), b && b()) : c && c(e, f)
                    }
                })
            }
        };

        function dj(a) {
            this.lq = a || new Qe("yt.leanback");
            a = this.lq.get("yt_mdx_screen", !0);
            this.qa = new Fh(a);
            this.qa.KM() || this.Tx();
            this.cy();
            this.hg = [];
            this.Sl = []
        }
        d = dj.prototype;
        d.Kw = function() {
            return this.qa
        };
        d.Yl = function(a) {
            if (0 < this.hg.length) this.hg.push(a);
            else {
                var b = w(function(a) {
                    a || (this.qa.rc = "");
                    this.lq.zx("yt_mdx_screen", this.qa.zL(), 0, !0);
                    a = this.hg;
                    this.hg = [];
                    B(a, function(a) {
                        a(this.qa)
                    }, this)
                }, this);
                this.qa ? "" == this.qa.rc ? (this.hg.push(a), this.Xx(this.qa.Tc, b)) : a(this.qa) : (this.hg.push(a), this.wL(w(function(a) {
                    this.Xx(a, b)
                }, this)))
            }
        };
        d.dS = function(a, b, c) {
            this.Sl.push(c);
            if (!(1 < this.Sl.length)) {
                var e = w(function(a) {
                    var b = this.Sl;
                    this.Sl = [];
                    B(b, function(b) {
                        b(a)
                    })
                }, this);
                this.Yl(w(this.Jy, this, a, b, w(function(c) {
                    c ? e(c) : (this.qa.rc = "", this.Yl(w(this.Jy, this, a, b, e)))
                }, this)))
            }
        };
        d.YS = function(a, b) {
            this.Yl(w(this.vT, this, a, !0, b))
        };
        d.Tx = function() {
            this.lq.remove("yt_mdx_screen");
            this.qa = null
        };
        
        d.Ml = function(a) {
            return PROXY_URL + "/http://youtube.com/" + a;
        };
        

        d.cy = function() {
            this.qa && (this.qa.rc = "");
            Ah(w(this.cy, this), 864E5)
        };
        d.wL = function(a) {
            S.eg((PROXY_URL + "/https://www.youtube.com/api/lounge/pairing/generate_screen_id"), {
                method: "GET",
                format: "RAW",
                yd: function(b) {
                    a(b.responseText)
                },
                onError: na(a, "")
            })
        };
        d.Jy = function(a, b, c) {
            a = {
                lounge_token: this.qa.rc,
                access_type: a ? "permanent" : "temporary",
                screen_id: this.qa.Tc || "",
                screen_name: b
            };
            S.eg((PROXY_URL + "/https://www.youtube.com/api/lounge/pairing/get_pairing_code"), {
                Sp: a,
                method: "POST",
                format: "RAW",
                yd: function(a) {
                    c(a.responseText)
                },
                onError: na(c, "")
            })
        };
        d.vT = function(a, b, c) {
            S.eg((PROXY_URL + "/https://www.youtube.com/api/lounge/pairing/register_pairing_code"), {
                Sp: {
                    screen_id: this.qa.Tc,
                    pairing_code: a,
                    access_type: b ? "permanent" : "temporary"
                },
                method: "POST",
                format: "RAW",
                yd: w(c, this, !0),
                onError: w(c, this, !1)
            })
        };
        d.Xx = function(a, b) {
            var c = w(function(c) {
                c = hc(c.responseText);
                var f = !1;
                c.screens && B(c.screens, function(b) {
                    b.screenId == a && (this.qa ? this.qa.rc = b.loungeToken : this.qa = new Fh(b), f = !0)
                }, this);
                b(f)
            }, this);
            S.eg((PROXY_URL + "/https://www.youtube.com/api/lounge/pairing/get_lounge_token_batch"), {
                Sp: {
                    screen_ids: a
                },
                method: "POST",
                yd: c,
                onError: na(b, !1)
            })
        };

        function ej(a, b, c) {
            this.videoId = a;
            this.reason = b;
            this.error = c
        }
        ej.prototype.Wf = function() {
            return {
                videoId: this.videoId,
                reason: this.reason,
                error: this.error
            }
        };

        function fj(a, b, c) {
            this.F = b;
            this.Gh = c;
            this.Pf = new dj(a);
            this.j = null;
            this.qe = {};
            this.hh = !0;
            N(window, "unload", w(this.iw, this));
            N(window, "beforeunload", w(this.iw, this))
        }
        d = fj.prototype;
        d.aH = function() {
            var a = [];
            Ua(this.qe, function(b) {
                a.push(b)
            });
            return a.sort()
        };
        d.uo = function(a) {
            this.Gh = a;
            this.j && this.j.Gd().ax(a ? {
                Authorization: "OAuth " + a
            } : {})
        };
        d.an = function() {
            return !!this.Gh
        };
        d.MS = function() {
            return this.j ? this.Pf.Kw().Tc || null : null
        };
        d.gk = function(a) {
            this.Pf.Yl(w(this.CR, this, a || n))
        };
        d.Pq = function() {
            this.j && (this.j.Gd().px(), this.j.Gd().Mv(), this.j = null)
        };
        d.Oo = function() {
            this.Pq();
            this.Pf.Tx();
            this.xd("mdx-pairing-topic", new Dh("manualReset"))
        };
        d.WK = function(a) {
            this.Pf.dS(!0, this.yA(), a)
        };
        d.xT = function(a, b) {
            this.Pf.YS(a, b)
        };
        d.Xo = function(a, b) {
            var c = a;
            a == vg.ERROR && (c = -1);
            c = {
                currentTime: this.F.cf(),
                state: c
            };
            a == vg.ERROR && (b || (b = this.F.kx()), c.currentError = I(b.Wf()));
            this.zb("onStateChange", c);
            a == vg.ERROR && this.zb("onError", {
                errors: I([b.Wf()])
            })
        };
        d.Fg = function() {
            this.oo()
        };
        d.Gj = function(a, b) {
            this.zb("onVolumeChanged", {
                volume: a,
                muted: b
            })
        };
        d.fF = function(a) {
            this.hu(a || [])
        };
        d.au = function(a) {
            a = Ea(a, function(a) {
                return a.Wf()
            });
            this.zb("onError", {
                errors: I(a)
            })
        };
        d.Zt = function(a, b) {
            var c = {
                videoId: a
            };
            if (b) {
                var e = b.languageCode || "";
                db(c, {
                    trackName: b.name || "",
                    languageCode: e,
                    sourceLanguageCode: b.sourceLanguageCode || e,
                    languageName: b.languageName,
                    format: b.format || 1,
                    kind: b.kind || ""
                })
            }
            this.zb("onSubtitlesTrackChanged", c)
        };
        d.pG = function() {
            this.zb("getLoungeStatus")
        };
        d.kv = function(a) {
            this.zb("updateUsername", {
                username: a
            })
        };
        d.zb = function(a, b) {
            !$a(this.qe) && this.j && this.j.AL(a, b)
        };
        d.oo = function(a) {
            var b = {};
            0 < this.F.Jn().length && this.Wv(b);
            a && a.params.vk && a.params.vk(b);
            this.zb("nowPlaying", b)
        };
        d.hu = function(a, b) {
            var c = {},
                e = this.F.Jn(),
                f = this.F.VH();
            0 < e.length && (c.video_ids = e.join(","), f.length == e.length ? c.videoSources = f.join(",") : this.j.debug("Sources and playlist length differ."), this.Wv(c));
            b && b.params.vk && b.params.vk(c);
            0 < a.length && (e = Ea(a, function(a) {
                return a.Wf()
            }), c.errors = I(e));
            this.zb("nowPlayingPlaylist", c)
        };
        d.iw = function() {
            this.oo();
            this.Pq()
        };
        d.CR = function(a, b) {
            b && !this.j ? (this.j = new Ti("/api/lounge/bc", this.QJ(), b.rc), this.j.wl(Eh.MESSAGE, this.PJ, this), this.j.wl(Eh.ERROR, function(a) {
                this.j.nw(a) && this.RJ()
            }, this), this.j.OJ(a, this.Gh || void 0)) : a(!!this.j)
        };
        d.RJ = function() {
            this.Gh && (this.Gh = null, this.Pf.Kw().rc = "", this.Pq(), this.gk())
        };
        d.PJ = function(a) {
            switch (a.action) {
                case "play":
                    this.F.Pn();
                    break;
                case "pause":
                    this.F.pause();
                    break;
                case "seekTo":
                    this.F.Bt(a.params.currentTime);
                    break;
                case "stopVideo":
                    this.F.Ns();
                    break;
                case "setVideo":
                    var b = this.F.Jn(),
                        b = Ia(b, function(b) {
                            return b == a.params.videoId
                        });
                    if (0 <= b) {
                        var c = this.F.Ra() != a.params.videoId ? -1 : this.F.jf();
                        c == vg.ERROR && (c = -1);
                        this.zb("nowPlaying", {
                            video_id: a.params.videoId,
                            current_time: a.params.currentTime,
                            state: c
                        });
                        this.F.SE(a.params.videoId, b, a.params.currentTime)
                    }
                    this.hh = !1;
                    break;
                case "setPlaylist":
                    this.F.kn(w(this.fu, this), a.params.Cf, a.params.Xn, a.params.Wn, a.params.oh, a.params.currentTime, this.hh);
                    this.hh = !1;
                    break;
                case "updatePlaylist":
                    var b = !0,
                        e = this.F.Ra();
                    e && (b = 0 <= Ia(a.params.Cf, function(a) {
                        return a == e
                    }));
                    b && this.F.kn(w(this.fu, this), a.params.Cf, a.params.Xn, a.params.Wn);
                    this.hh = !1;
                    this.zb("confirmPlaylistUpdate", {
                        updated: b
                    });
                    break;
                case "setVolume":
                    a.params.Jt && (b = this.F.io(), 0 <= b && (a.params.volume = Math.max(0, Math.min(b + a.params.Jt, 100))));
                    this.F.Ct(a.params.volume);
                    a.params.muted ? this.F.At() : this.F.Dt();
                    break;
                case "getVolume":
                    this.Gj(this.F.io(), this.F.Oj());
                    break;
                case "setSubtitlesTrack":
                    b = a.params.videoId || this.F.Ra();
                    b == this.F.Ra() && this.F.RE(b, a.params.track);
                    break;
                case "getSubtitlesTrack":
                    var c = this.F.Yt(),
                        f = this.Ra();
                    (b = a.params.videoId || f) && b == f || (c = null);
                    this.Zt(b, c);
                    break;
                case "getNowPlaying":
                    this.oo(a);
                    break;
                case "getPlaylist":
                    this.F.PE(w(function(b) {
                        this.hu(b, a)
                    }, this));
                    break;
                case "remoteConnected":
                    $a(this.qe) && a.params.Un && (this.hh = !0);
                    this.qe[a.params.Ze.id] =
                        a.params.Ze.sd;
                    this.xd("mdx-pairing-topic", a);
                    a.params.Un && this.xd("mdx-toast-topic", a);
                    break;
                case "remoteDisconnected":
                    delete this.qe[a.params.Ze.id];
                    this.xd("mdx-pairing-topic", a);
                    a.params.Un && this.xd("mdx-toast-topic", a);
                    break;
                case "loungeStatus":
                    a.params.bb = Da(a.params.bb, function(a) {
                        return "REMOTE_CONTROL" == a.type
                    });
                    this.QE(a.params.bb);
                    this.xd("mdx-pairing-topic", a);
                    break;
                case "showQrCode":
                case "hideQrCode":
                    this.xd("mdx-toast-topic", a)
            }
        };
        d.QE = function(a) {
            this.qe = {};
            B(a, function(a) {
                this.qe[a.id] = a.sd
            }, this)
        };
        d.Wv = function(a) {
            var b = this.F.Ra();
            if (b) {
                var c = this.F.jf();
                c == vg.ERROR && (c = -1);
                a.video_id = b;
                a.current_time = this.F.cf();
                a.state = c;
                c == vg.ERROR && (b = this.F.kx(), a.currentError = I(b.Wf()))
            }
        };
        d.fu = function(a) {
            0 < a.length && (a = Ea(a, function(a) {
                return a.Wf()
            }), this.zb("onError", {
                errors: I(a)
            }))
        };
        d.QJ = function() {
            return new mc({
                id: this.cT(),
                name: this.yA(),
                type: "LOUNGE_SCREEN",
                app: this.bT()
            })
        };
        m("cast.receiver.VERSION", "0.9.2", void 0);
        var gj = mi("cast");
        m("cast.receiver.logger", gj, void 0);
        gj.YU = function(a) {
            gj.lp(ii(a))
        };
        gj.setLevelValue = gj.YU;

        function hj(a, b, c) {
            M.call(this, a, c);
            this.message = b
        }
        z(hj, M);
        m("cast.receiver.MessageEvent", hj, void 0);

        function ij(a, b) {
            for (var c = 1; c < arguments.length; ++c)
                if (!(arguments[c] in a)) throw Error("Mandatory field missing: " + arguments[c]);
        };

        function T() {
            O.call(this)
        }
        z(T, O);
        m("cast.receiver.Channel", T, void 0);
        var jj = {
            OPEN: "a",
            CLOSED: "b",
            ERROR: "c",
            MESSAGE: "d"
        };
        T.EventType = jj;
        T.prototype.Ub = mi("cast.receiver.Channel");
        T.prototype.pa = function() {
            return "unknown"
        };
        T.prototype.getDebugString = T.prototype.pa;
        T.prototype.onOpen = function() {
            this.Ub.info("Dispatch OPEN event to " + this.pa());
            this.V(jj.OPEN)
        };
        T.prototype.onOpen = T.prototype.onOpen;
        T.prototype.onClosed = function() {
            this.Ub.info("Dispatch CLOSED event to " + this.pa());
            this.V(jj.CLOSED)
        };
        T.prototype.onClosed = T.prototype.onClosed;
        T.prototype.onError = function() {
            this.Ub.we("Dispatch ERROR event to " + this.pa());
            this.V(jj.ERROR)
        };
        T.prototype.onError = T.prototype.onError;
        T.prototype.onMessage = function(a) {
            this.Ub.Nh("Dispatch MESSAGE event to " + this.pa() + ", message=" + a);
            this.V(new hj(jj.MESSAGE, a, this))
        };
        T.prototype.onMessage = T.prototype.onMessage;
        T.prototype.open = ca;
        T.prototype.close = ca;
        T.prototype.isOpen = function() {
            return !1
        };
        T.prototype.send = ca;
        T.prototype.A = function() {
            T.f.A.call(this);
            this.Ub.kc("Disposed " + this.pa())
        };

        function kj(a, b, c) {
            M.call(this, a, c);
            this.channel = b
        }
        z(kj, M);
        m("cast.receiver.ChannelFactoryEvent", kj, void 0);

        function U() {
            O.call(this)
        }
        z(U, O);
        m("cast.receiver.ChannelFactory", U, void 0);
        var lj = {
            CHANNEL_CREATED: "e"
        };
        U.EventType = lj;
        U.prototype.Ba = mi("cast.receiver.ChannelFactory");
        U.prototype.zd = function() {
            return "unknown"
        };
        U.prototype.getDebugString = U.prototype.zd;
        U.prototype.tq = function(a) {
            this.Ba.kc("Dispatch CHANNEL_CREATED event to " + this.zd());
            this.V(new kj(lj.CHANNEL_CREATED, a, this))
        };
        U.prototype.onChannelCreated = U.prototype.tq;
        U.prototype.A = function() {
            U.f.A.call(this);
            this.Ba.kc("Disposed " + this.zd())
        };

        function V(a) {
            O.call(this);
            this.MQ = a;
            this.Cd = [];
            this.Ad = []
        }
        z(V, O);
        m("cast.receiver.ChannelHandler", V, void 0);
        V.prototype.Mc = mi("cast.receiver.ChannelHandler");
        V.prototype.oc = function() {
            return this.MQ
        };
        V.prototype.getDebugString = V.prototype.oc;
        V.prototype.uy = function(a) {
            for (var b = this.Cd.length, c = 0; c < b; ++c)
                if (this.Cd[c][0] == a) return c;
            return -1
        };
        V.prototype.$p = function(a) {
            if (0 <= this.uy(a)) return !1;
            this.Cd.push([a, N(a, lj.CHANNEL_CREATED, w(this.QM, this))]);
            this.Mc.info("New channel factory added: " + a.zd() + " to " + this.oc());
            return !0
        };
        V.prototype.addChannelFactory = V.prototype.$p;
        V.prototype.XU = function(a) {
            var b = this.uy(a);
            if (0 > b) return !1;
            Vf(this.Cd[b][1]);
            this.Cd.splice(b, 1);
            this.Mc.info("Channel factory removed: " + a.zd() + " from " + this.oc());
            return !0
        };
        V.prototype.removeChannelFactory = V.prototype.XU;
        V.prototype.QM = function(a) {
            var b = a.channel;
            if (!b) throw Error("Channel is not specified on event: " + a.type);
            0 <= this.Ad.indexOf(b) ? this.Mc.we("Duplicated channel: " + b.pa() + " in " + this.oc()) : (this.Ad.push(b), b.PL(this), N(b, jj.OPEN, w(this.onOpen, this)), N(b, jj.CLOSED, w(this.onClosed, this)), N(b, jj.ERROR, w(this.onError, this)), N(b, jj.MESSAGE, w(this.onMessage, this)), this.Mc.info("New channel added: " + b.pa() + " to " + this.oc()), b.open())
        };
        V.prototype.onOpen = function(a) {
            this.Mc.kc("Channel open: " + a.target.pa() + " in " + this.oc())
        };
        V.prototype.onClosed = function(a) {
            var b = a.target;
            a = this.Ad.indexOf(b);
            0 <= a && (this.Ad.splice(a, 1), this.Mc.info("Channel removed: " + b.pa() + " from " + this.oc()), cg(function() {
                b.ta()
            }, 0))
        };
        V.prototype.onError = function(a) {
            a = a.target;
            this.Mc.we("Channel error: " + a.pa() + " in " + this.oc());
            a.close()
        };
        V.prototype.onMessage = function(a) {
            this.Mc.Nh("Message received: " + a.target.pa() + " in " + this.oc() + ", message=" + a.message)
        };
        V.prototype.km = function() {
            return this.Ad
        };
        V.prototype.getChannels = V.prototype.km;
        V.prototype.A = function() {
            V.f.A.call(this);
            for (var a = this.Cd.length, b = 0; b < a; ++b) this.Cd[b][0].ta();
            this.Cd = [];
            a = this.Ad.length;
            for (b = 0; b < a; ++b) this.Ad[b].ta();
            this.Ad = [];
            this.Mc.kc("Disposed " + this.oc())
        };

        function mj() {
            this.dz = w(this.kP, this);
            this.fm = new Mh;
            this.fm.my = !1;
            this.cz = this.fm.ny = !1;
            this.Vy = "";
            this.fr = {}
        }
        d = mj.prototype;
        d.q1 = function() {
            return this.fm
        };
        d.nS = function(a) {
            if (a != this.cz) {
                var b;
                li();
                b = ki;
                a ? b.KR(this.dz) : (b.OR(this.dz), this.gW = "");
                this.cz = a
            }
        };
        d.kP = function(a) {
            if (!this.fr[a.By()]) {
                var b = this.fm.sQ(a),
                    c = nj;
                if (c) switch (a.tQ()) {
                    case Yh:
                        oj(c, "info", b);
                        break;
                    case Zh:
                        oj(c, "error", b);
                        break;
                    case $h:
                        oj(c, "warn", b);
                        break;
                    default:
                        oj(c, "debug", b)
                } else window.opera ? window.opera.postError(b) : this.Vy += b
            }
        };
        d.v0 = function(a) {
            this.fr[a] = !0
        };
        d.K3 = function(a) {
            delete this.fr[a]
        };
        var nj = window.console;

        function oj(a, b, c) {
            if (a[b]) a[b](c);
            else a.log(c)
        };

        function W(a) {
            O.call(this);
            this.ob = a;
            this.Gk = !0;
            this.Vf = [];
            this.Vf.push(N(this.ob, jj.OPEN, w(this.onOpen, this)));
            this.Vf.push(N(this.ob, jj.CLOSED, w(this.onClosed, this)));
            this.Vf.push(N(this.ob, jj.ERROR, w(this.onError, this)));
            this.Vf.push(N(this.ob, jj.MESSAGE, w(this.zP, this)))
        }
        z(W, T);
        W.prototype.SP = function() {
            return this.ob
        };
        W.prototype.pa = function() {
            return this.ob.pa()
        };
        W.prototype.zP = function(a) {
            this.onMessage(a.message)
        };
        W.prototype.open = function() {
            this.Gk = !1;
            if (this.ob.isOpen()) this.onOpen();
            else this.ob.open()
        };
        W.prototype.close = function() {
            this.Gk = !0;
            this.onClosed()
        };
        W.prototype.isOpen = function() {
            return this.ob.isOpen() && !this.Gk
        };
        W.prototype.send = function(a) {
            this.ob.send(a)
        };
        W.prototype.A = function() {
            W.f.A.call(this);
            this.Gk = !0;
            for (var a = this.Vf.length, b = 0; b < a; ++b) Vf(this.Vf[b]);
            Wf(this.ob) || (this.ob.close(), this.ob.ta())
        };

        function pj(a, b) {
            W.call(this, b);
            this.Bp = a
        }
        z(pj, W);
        pj.prototype.pa = function() {
            return this.Bp + ":" + this.SP().pa()
        };
        pj.prototype.onMessage = function(a) {
            a instanceof Array && (2 == a.length && a[0] == this.Bp) && pj.f.onMessage.call(this, a[1])
        };
        pj.prototype.send = function(a) {
            pj.f.send.call(this, [this.Bp, a])
        };

        function qj(a, b) {
            O.call(this);
            this.Hz = a;
            this.Jk = b;
            this.sG = N(this.Jk, lj.CHANNEL_CREATED, w(this.PR, this))
        }
        z(qj, U);
        qj.prototype.zd = function() {
            return this.Hz + ":" + this.Jk.zd()
        };
        qj.prototype.PR = function(a) {
            a.channel && this.tq(new pj(this.Hz, a.channel))
        };
        qj.prototype.A = function() {
            qj.f.A.call(this);
            Vf(this.sG);
            Wf(this.Jk) || this.Jk.ta()
        };

        function rj(a, b) {
            O.call(this);
            this.aK = s(a) ? a : !0;
            this.aq = b || sj;
            this.bq = this.aq(this.qi)
        }
        z(rj, O);
        d = rj.prototype;
        d.Eb = null;
        d.ki = null;
        d.li = void 0;
        d.cq = !1;
        d.qi = 0;
        d.J2 = null;
        var tj = {
                CLOSED: "f",
                ERROR: "g",
                MESSAGE: "h",
                lB: "i"
            },
            uj = {
                CONNECTING: 0,
                OPEN: 1,
                NW: 2,
                CLOSED: 3
            };

        function sj(a) {
            a = 1E3 * Math.pow(2, a);
            return Math.min(a, 6E4)
        }
        rj.prototype.open = function(a, b) {
            this.isOpen();
            this.Gy();
            this.ki = a;
            this.Eb = (this.li = b) ? new WebSocket(this.ki, this.li) : new WebSocket(this.ki);
            this.Eb.onopen = w(this.NN, this);
            this.Eb.onclose = w(this.KN, this);
            this.Eb.onmessage = w(this.MN, this);
            this.Eb.onerror = w(this.LN, this)
        };
        rj.prototype.close = function() {
            this.Gy();
            this.Eb && (this.cq = !0, this.Eb.close(), this.Eb = null)
        };
        rj.prototype.send = function(a) {
            this.isOpen();
            this.Eb.send(a)
        };
        rj.prototype.isOpen = function() {
            return !!this.Eb && this.Eb.readyState == uj.OPEN
        };
        d = rj.prototype;
        d.NN = function() {
            this.V("i");
            this.qi = 0;
            this.bq = this.aq(this.qi)
        };
        d.KN = function() {
            this.V(tj.CLOSED);
            this.Eb = null;
            this.cq ? (this.ki = null, this.li = void 0) : this.aK && (this.lb = cg(w(this.open, this, this.ki, this.li), this.bq, this), this.qi++, this.bq = this.aq(this.qi));
            this.cq = !1
        };
        d.MN = function(a) {
            this.V(new vj(a.data))
        };
        d.LN = function(a) {
            this.V(new wj(a.data))
        };
        d.Gy = function() {
            null != this.lb && h.clearTimeout(this.lb);
            this.lb = null
        };
        d.A = function() {
            rj.f.A.call(this);
            this.close()
        };

        function vj(a) {
            M.call(this, tj.MESSAGE);
            this.message = a
        }
        z(vj, M);

        function wj(a) {
            M.call(this, tj.ERROR);
            this.data = a
        }
        z(wj, M);

        function xj(a) {
            O.call(this);
            this.gm = a;
            this.Bb = new rj(!1);
            this.hz = !1
        }
        z(xj, T);
        xj.prototype.Ub = mi("cast.receiver.ChannelOverWebSocket");
        xj.prototype.pa = function() {
            return this.gm
        };
        xj.prototype.kO = function(a) {
            this.onMessage(a.message)
        };
        xj.prototype.open = function() {
            this.hz || (this.hz = !0, this.Ub.info("Open websocket: url=" + this.gm), N(this.Bb, "i", w(this.onOpen, this)), N(this.Bb, tj.CLOSED, w(this.onClosed, this)), N(this.Bb, tj.ERROR, w(this.onError, this)), N(this.Bb, tj.MESSAGE, w(this.kO, this)), this.Bb.open(this.gm))
        };
        xj.prototype.close = function() {
            this.Ub.info("Close websocket: url=" + this.gm);
            this.Bb.close()
        };
        xj.prototype.isOpen = function() {
            return this.Bb.isOpen()
        };
        xj.prototype.send = function(a) {
            if ("string" != typeof a) throw Error("Invalid message to send via " + this.pa());
            this.Ub.Nh("Sending message: " + a + " from " + this.pa());
            this.Bb.send(a)
        };
        xj.prototype.A = function() {
            xj.f.A.call(this);
            this.Bb.ta()
        };
        xj.prototype.y0 = function(a) {
            this.Bb && this.Bb.ta();
            this.Bb = a
        };

        function yj(a) {
            W.call(this, a);
            this.Dw = 0
        }
        z(yj, W);
        yj.prototype.onMessage = function(a) {
            a instanceof Array && 2 == a.length && "cm" == a[0] ? "pong" == a[1].type ? this.Dw = 0 : this.Ub.info("Unknown cm message: " + a[1]) : yj.f.onMessage.call(this, a)
        };
        yj.prototype.lP = function(a) {
            if (!this.isOpen()) return !0;
            if (++this.Dw > a) return !1;
            this.send(["cm", {
                type: "ping"
            }]);
            return !0
        };

        function zj(a) {
            W.call(this, a)
        }
        z(zj, W);
        zj.prototype.onMessage = function(a) {
            try {
                zj.f.onMessage.call(this, hc(a))
            } catch (b) {
                this.Ub.we(b), this.onError()
            }
        };
        zj.prototype.send = function(a) {
            zj.f.send.call(this, I(a))
        };

        function X(a, b, c, e) {
            O.call(this);
            this.sl = a;
            this.dq = b;
            this.Ap = null != e ? e : 0;
            this.ix = c || null;
            this.Xa = new rj(!1);
            this.Pl = new V("heartbeatChannelHandler");
            this.hy(this.Pl);
            this.Pl.$p(this);
            this.gl = new bg(1E3 * this.Ap);
            this.hy(this.gl);
            N(this.gl, "tick", w(this.hM, this))
        }
        z(X, U);
        m("cast.receiver.ConnectionService", X, void 0);
        X.VERSION = 2;
        X.prototype.Ba = mi("cast.receiver.ConnectionService");
        X.prototype.zd = function() {
            return this.sl
        };
        X.prototype.ZA = function(a) {
            return 0 <= this.dq.indexOf(a)
        };
        X.prototype.support = X.prototype.ZA;
        X.prototype.onClosed = function(a) {
            this.Ba.info("Got event: " + a.type)
        };
        X.prototype.onError = function(a) {
            this.Ba.we("Got event: " + a.type);
            this.vq()
        };
        X.prototype.dO = function(a) {
            this.Ba.info("Got event: " + a.type);
            this.UQ()
        };
        X.prototype.onChannelRequest = void 0;
        X.prototype.$N = function(a) {
            this.Ba.Nh("Got event: type=" + a.type + ", message=" + a.message);
            try {
                var b = hc(a.message);
                ij(b, "type");
                if ("ERROR" == b.type) this.onError(new M(tj.ERROR, this));
                else if ("CHANNELREQUEST" == b.type) ij(b, "requestId"), this.Ba.kc("Got CHANNELREQUEST: requestId=" + b.requestId), !this.onChannelRequest || this.onChannelRequest(this.sl, b.senderId) ? this.MK(b.requestId) : this.TK(b.requestId);
                else if ("NEWCHANNEL" == b.type) {
                    ij(b, "requestId", "URL");
                    this.Ba.kc("Got NEWCHANNEL: requestId=" + b.requestId +
                        ", URL=" + b.URL);
                    var c = new yj(new zj(new xj(b.URL)));
                    this.tq(c);
                    0 < this.Ap && this.gl.start()
                } else throw Error("Unknown message type: " + b.type);
            } catch (e) {
                e instanceof SyntaxError ? this.Ba.we("Invalid JSON error: message=" + a.message) : this.Ba.we(e), this.Ba.Nh("Disconnect on any type of error."), this.vq()
            }
        };
        X.prototype.QA = function(a) {
            a = a || "ws://localhost:8008/connection";
            this.Ba.info("Open connection service websocket: url=" + a);
            N(this.Xa, "i", w(this.dO, this));
            N(this.Xa, tj.CLOSED, w(this.onClosed, this));
            N(this.Xa, tj.ERROR, w(this.onError, this));
            N(this.Xa, tj.MESSAGE, w(this.$N, this));
            this.Xa.open(a)
        };
        X.prototype.connect = X.prototype.QA;
        X.prototype.vq = function() {
            this.Ba.info("Close connection service websocket");
            this.Xa.close()
        };
        X.prototype.disconnect = X.prototype.vq;
        X.prototype.LU = function() {
            return this.Xa.isOpen()
        };
        X.prototype.isConnected = X.prototype.LU;
        d = X.prototype;
        d.UQ = function() {
            this.Ba.kc("Register: app=" + this.sl + ", protocols=" + this.dq + ", appContext=" + this.ix);
            this.Xa.send(I({
                type: "REGISTER",
                version: 2,
                name: this.sl,
                protocols: this.dq,
                pingInterval: this.Ap,
                eventChannel: 0,
                appContext: this.ix
            }))
        };
        d.MK = function(a) {
            this.Ba.kc("Accept: requiestId=" + a);
            this.Xa.send(I({
                type: "CHANNELRESPONSE",
                requestId: a,
                action: 0
            }))
        };
        d.TK = function(a) {
            this.Ba.kc("Reject: requiestId=" + a);
            this.Xa.send(I({
                type: "CHANNELRESPONSE",
                requestId: a,
                action: 1
            }))
        };
        d.hM = function() {
            var a = [];
            this.Pl.km().forEach(function(b) {
                b.lP(2) || a.push(b)
            });
            a.forEach(function(a) {
                a.close();
                a.onClosed()
            });
            0 == this.Pl.km().length && this.gl.Ob()
        };
        d.A = function() {
            X.f.A.call(this);
            this.Xa.ta()
        };
        d.z0 = function(a) {
            this.Xa && this.Xa.ta();
            this.Xa = a
        };

        function Y(a, b, c, e) {
            (this.TA = new mj) && this.TA.nS(!0);
            this.Bi = new X(a, b, c, e)
        }
        m("cast.receiver.Receiver", Y, void 0);
        Y.prototype.zz = mi("cast.receiver.Receiver");
        Y.prototype.wU = function() {
            return this.Bi
        };
        Y.prototype.getConnectionService = Y.prototype.wU;
        Y.prototype.Qy = function(a) {
            if (this.Bi.ZA(a)) return new qj(a, this.Bi);
            throw Error("Not supported namespace: " + a);
        };
        Y.prototype.createChannelFactory = Y.prototype.Qy;
        Y.prototype.start = function(a) {
            this.Bi.QA(a);
            this.zz.info("Receiver started.")
        };
        Y.prototype.start = Y.prototype.start;
        Y.prototype.uU = function() {
            this.Bi.ta();
            this.zz.info("Receiver stopped.")
        };
        Y.prototype.stop = Y.prototype.uU;
        var Aj = {};
        Aj[vg.ERROR] = 0;
        Aj[-1] = 1;
        Aj[0] = 1;
        Aj[1] = 2;
        Aj[2] = 1;
        Aj[3] = 2;
        Aj[5] = 1;
        Aj[1081] = 1;

        function Bj(a) {
            V.call(this, "ramp");
            this.Ea = a;
            this.ll = 0;
            this.Jd = null;
            this.Uy = new Y("YouTube", ["ramp"]);
            this.$p(this.Uy.Qy("ramp"));
            this.Uy.start()
        }
        z(Bj, V);
        Bj.prototype.onOpen = function(a) {
            Bj.f.onOpen.call(this, a);
            this.Sf(a.target, {
                cmd_id: 0,
                type: "STATUS",
                status: this.Rf()
            })
        };
        Bj.prototype.onMessage = function(a) {
            Bj.f.onMessage.call(this, a);
            var b = a.target;
            a = a.message;
            s(a.cmd_id) && s(a.type) && this.LJ(b, a)
        };
        d = Bj.prototype;
        d.Sf = function(a, b) {
            try {
                a.send(b)
            } catch (c) {}
        };
        d.nA = function(a) {
            B(this.km(), function(b) {
                b.isOpen() && this.Sf(b, a)
            }, this)
        };
        d.Ep = function() {
            var a = this.Ea.io();
            return 0 <= a ? a / 100 : 1
        };
        d.Rf = function(a, b) {
            var c = this.Ea.Ra(),
                e = s(a) ? a : this.Ea.jf();
            if (!this.Jd || !c || this.Jd.FV != c) return {
                event_sequence: this.ll++,
                state: 0,
                muted: this.Ea.Oj(),
                volume: this.Ep()
            };
            if (e == vg.ERROR) return {
                event_sequence: this.ll++,
                content_id: this.Ea.Ra(),
                state: 0,
                error: {
                    domain: "YouTube.MDx",
                    code: 2
                }
            };
            var f = Aj[e] || 0,
                c = {
                    event_sequence: this.ll++,
                    state: f,
                    content_id: c,
                    current_time: this.Ea.cf(),
                    duration: this.Jd.duration,
                    image_url: this.Jd.GV,
                    muted: this.Ea.Oj(),
                    time_progress: 1 == e,
                    title: this.Jd.title,
                    volume: this.Ep()
                };
            ha(b) &&
                db(c, b);
            return c
        };
        d.lw = function(a) {
            this.nA({
                cmd_id: 0,
                type: "STATUS",
                status: this.Rf(a)
            })
        };
        d.CA = function(a) {
            this.Jd = a || null;
            this.nA({
                cmd_id: 0,
                type: "STATUS",
                status: this.Rf()
            })
        };
        d.LJ = function(a, b) {
            switch (b.type) {
                case "PLAY":
                    var c = this.Ea.jf(),
                        e = 3;
                    this.Jd && s(b.position) && fa(b.position) ? (Math.max(0, Math.min(b.position, this.Jd.duration)), this.Ea.Bt(b.position), 2 == c && this.Ea.Pn()) : this.Ea.Pn();
                    if (2 == c || 1 == c) e = 1;
                    this.Sf(a, {
                        cmd_id: b.cmd_id,
                        type: "RESPONSE",
                        status: this.Rf(e)
                    });
                    break;
                case "STOP":
                    this.Ea.pause();
                    break;
                case "INFO":
                    this.Sf(a, {
                        cmd_id: b.cmd_id,
                        type: "RESPONSE",
                        status: this.Rf()
                    });
                    break;
                case "VOLUME":
                    c = this.Ep();
                    s(b.volume) && fa(b.volume) && (this.Ea.Ct(Math.round(100 * b.volume)),
                        c = b.volume);
                    e = this.Ea.Oj();
                    s(b.muted) && (b.muted ? this.Ea.At() : this.Ea.Dt(), e = b.muted);
                    this.Sf(a, {
                        cmd_id: b.cmd_id,
                        type: "RESPONSE",
                        status: this.Rf(void 0, {
                            volume: c,
                            muted: e
                        })
                    });
                    break;
                default:
                    this.Sf(a, {
                        cmd_id: b.cmd_id,
                        type: "RESPONSE",
                        status: {
                            event_sequence: this.ll++,
                            original_operation: b.type,
                            error: {
                                domain: "YouTube.MDx",
                                code: 1
                            }
                        }
                    })
            }
        };

        function Cj(a) {
            if ("undefined" != typeof XMLSerializer) return (new XMLSerializer).serializeToString(a);
            if (a = a.xml) return a;
            throw Error("Your browser does not support serializing XML documents");
        }

        function Dj(a, b) {
            for (var c in b) b.hasOwnProperty(c) && a.setAttribute(c, b[c])
        }

        function Ej() {
            var a = new ActiveXObject("MSXML2.DOMDocument");
            if (a) {
                a.resolveExternals = !1;
                a.validateOnParse = !1;
                try {
                    a.setProperty("ProhibitDTD", !0), a.setProperty("MaxXMLSize", 2048), a.setProperty("MaxElementDepth", 256)
                } catch (b) {}
            }
            return a
        };

        function Fj(a) {
            var b = {};
            if (1 == a.nodeType && 0 < a.attributes.length)
                for (var c = 0; c < a.attributes.length; ++c) {
                    var e = a.attributes.item(c);
                    b[e.nodeName.replace(":", "$")] = e.nodeValue
                }
            if (a.hasChildNodes())
                for (a = a.firstChild; a;) 3 == a.nodeType ? (c = "$t", e = a.nodeValue) : (c = a.nodeName.replace(":", "$"), e = Fj(a)), c in b ? (u(b[c]) || (b[c] = [b[c]]), b[c].push(e)) : b[c] = e, a = a.nextSibling;
            return b
        };

        function Gj(a, b, c, e, f, g, k, l, p, q, r, t) {
            this.AM = f;
            this.BG = g;
            this.RG = l;
            this.Xt = new hb;
            this.Oq = [];
            this.lo = {};
            this.hv = 1;
            this.Qo = 0;
            this.nh = {};
            t: if (document.implementation && document.implementation.createDocument) g = document.implementation.createDocument("http://www.w3.org/2005/Atom", "feed", null);
                else {
                    if ("undefined" != typeof ActiveXObject && (g = Ej())) {
                        g.appendChild(g.createNode(1, "feed", "http://www.w3.org/2005/Atom"));
                        break t
                    }
                    throw Error("Your browser does not support creating new documents");
                }
            this.dc = new Zd(g);
            ig.call(this, a, b, c, e, f, k, q, r, t)
        }
        z(Gj, ig);
        d = Gj.prototype;
        d.st = function(a, b) {
            this.Oq = a;
            return this.load({
                rW: "rq"
            }, b)
        };
        d.cD = function(a) {
            db(this.nh, a)
        };
        d.bD = function(a) {
            this.lo = a
        };
        d.xo = function() {
            return this.Oq
        };
        d.Pk = function(a) {
            a = a || {};
            a.vpsid = this.id;
            return Gj.f.Pk.call(this, a)
        };
        d.Ne = function() {
            return this.AM.useStageGdata ? APP_URL + "feeds/api" : APP_URL + "feeds/api"
        };
        d.lJ = function(a, b, c, e, f) {
            var g = this.xo(),
                k = this.hv++;
            this.BG.Cc(w(function(l) {
                l && (c.access_token = l);
                this.uI(c, e, w(function(c) {
                    this.Qo > k ? (this.xv(), f && f(b)) : (this.Qo = k, b.i.clear(), B(c, function(a) {
                            if ("string" == typeof a)
                                if ("undefined" != typeof DOMParser) a = (new DOMParser).parseFromString(a, "application/xml");
                                else if ("undefined" != typeof ActiveXObject) {
                                var c = Ej();
                                c.loadXML(a);
                                a = c
                            } else throw Error("Your browser does not support loading xml documents");
                            a = Fj(a);
                            this.gh.parse(b, a)
                        }, this), this.Hv(b, g, a), this.Uo(),
                        f && f(b))
                }, this))
            }, this))
        };
        d.kg = function(a, b, c) {
            var e = {},
                f = this.kJ(e);
            a.eb = this.RG;
            0 < f.length ? this.lJ(e, a, b, f, c) : (a.i.clear(), this.Qo = this.hv++, this.Hv(a, this.xo(), e), c && c(a))
        };
        d.sh = function(a, b) {
            var c = this.Ne() + "/videos/" + a,
                e = ab(this.ag || {});
            b && db(e, b);
            return kf(mf([c], e))
        };
        d.kJ = function(a) {
            var b = [];
            B(this.Oq, function(c) {
                var e = this.sh(c),
                    f = this.Xt.get(e);
                f ? a[e] = f : b.push(c)
            }, this);
            return b
        };
        d.uI = function(a, b, c) {
            var e = [],
                f = [];
            B(b, function(a) {
                a in this.nh ? e.push({
                    video: a,
                    fN: this.nh[a]
                }) : f.push(a)
            }, this);
            for (b = 0; b < f.length;) {
                var g = Math.min(b + 50, f.length);
                e.push({
                    Py: Na(f, b, g)
                });
                b += 50
            }
            var k = 0,
                l = [],
                p = w(function(a, b) {
                    l[a] = b;
                    ++k == e.length && (this.Zp(), c(l))
                }, this),
                q = this.Pk(a),
                r = ab(a);
            r.access_token = null;
            var t = {
                "X-GData-Key": "key=AI39si5-UxCbfO2jRg9EV2bWI0UDWm74GkLzZWFHkQR0bm4d0JTKyrhSi6NZORaTMuJaRH8zs0PmsCONB9uV3pSgzZklwvMoRA",
                "Content-Type": "application/atom+xml"
            };
            this.Yp();
            B(e, function(a,
                b) {
                var c = na(p, b);
                if (a.Py) this.Wh.post(q, null, this.dN(q, a.Py), c, null, t);
                else {
                    var e = {
                        "X-GData-Key": "key=AI39si5-UxCbfO2jRg9EV2bWI0UDWm74GkLzZWFHkQR0bm4d0JTKyrhSi6NZORaTMuJaRH8zs0PmsCONB9uV3pSgzZklwvMoRA",
                        "X-YouTube-VVT": a.fN
                    };
                    this.Wh.get(this.sh(a.video, r), null, c, null, e)
                }
            }, this)
        };
        d.uF = function(a) {
            var b = new Te(this.id, "rq", "RQ");
            b.channel = new cc(this.id, "rq");
            b.videoId = a;
            b.errorCode = "notAvailable";
            b.channel.videoId = a;
            return b
        };
        d.Hv = function(a, b, c) {
            a.Ia = this.id;
            0 < a.i.r() && (B(a.i.J(), function(a) {
                var b = this.sh(a.videoId);
                this.Xt.kh(b, a);
                c[b] = a
            }, this), a.i.clear());
            B(b, function(b) {
                var f = this.sh(b),
                    f = c[f] || this.uF(b);
                this.lo[b] && (f.en = this.lo[b]);
                this.nh[b] && (f.Yi = this.nh[b]);
                a.i.push(f)
            }, this);
            a.title = "[[Queued Videos|Title above a list of videos that are queued up to be viewed.]]";
            a.Ja = "icon-playlist"
        };
        d.createElement = function(a, b) {
            var c = this.dc.xA();
            return c.createElementNS(b || c.documentElement.namespaceURI, a)
        };
        d.mR = function(a) {
            var b = this.sh(a),
                c = this.createElement("entry"),
                e = this.createElement("id");
            this.dc.append(e, b);
            var f = this.createElement("batch:id", "https://web.archive.org/web/20130711074931/http://schemas.google.com/gdata/batch");
            this.dc.append(f, a);
            a = this.createElement("link");
            Dj(a, {
                rel: "https://web.archive.org/web/20130711074931/http://schemas.google.com/g/2005#batch",
                type: "application/atom+xml",
                href: b
            });
            this.dc.appendChild(c, e);
            this.dc.appendChild(c, f);
            this.dc.appendChild(c, a);
            return c
        };
        d.dN = function(a, b) {
            var c = this.dc.xA().documentElement;
            Id(c);
            var e = this.createElement("id");
            this.dc.append(e, a);
            var f = this.createElement("batch:operation", "https://web.archive.org/web/20130711074931/http://schemas.google.com/gdata/batch");
            Dj(f, {
                type: "query"
            });
            this.dc.appendChild(c, e);
            this.dc.appendChild(c, f);
            B(b, function(a) {
                this.dc.appendChild(c, this.mR(a))
            }, this);
            return '<?xml version="1.0" encoding="UTF-8"?>' + Cj(c)
        };

        function Hj(a, b, c, e, f, g, k, l, p, q, r, t) {
            fj.call(this, f.uj, this, "");
            this.xC = b;
            this.Fs = c;
            this.Cg = e;
            this.Eg = f;
            this.H = g;
            this.ft = k;
            this.dC = p;
            this.fc = l;
            this.dt = t;
            this.ae = null;
            this.Xd = q;
            this.K = null;
            this.gc = "";
            this.zg = r;
            this.Bc = new nc;
            this.et = !1;
            b = this.Eg.get("mdx-device-id");
            b || (b = og(), this.Eg.sb("mdx-device-id", b));
            this.Jb = new nc;
            if (c = this.Eg.get("mdx-paired-devices", 31536E3, !0)) this.Jb.Mg(c.map(function(a) {
                return new mc(a)
            })), this.ij(null);
            this.yC = b;
            a.$on("mdxClearVideo", w(this.BC, this));
            a.$on("mdxPlaylistChange",
                w(this.Ys, this));
            a.$on("mdx-pairing-topic", w(this.DC, this));
            this.Zd = "";
            this.wb = -1;
            this.hf = 0;
            this.Km = "ytremote";
            this.ft.k("currentTime:changed", w(function() {
                var a = this.cf();
                2 <= Math.abs(this.hf - a) && this.wj(this.wb);
                this.hf = a
            }, this));
            this.mf = this.bt = null;
            this.H.k("subtitlesModuleGeneration:changed", w(this.EC, this));
            this.H.k("subtitlesTrack:changed", w(this.FC, this));
            this.H.k("volume:changed", w(this.CC, this));
            this.H.k("state:changed", w(this.wj, this));
            this.H.k("adPlaying:changed", w(this.zC, this));
            this.H.k("video:changed",
                w(this.AC, this));
            this.ed = null;
            this.zg.Oa && (this.ed = new Bj(this));
            this.be = null
        }
        z(Hj, fj);
        d = Hj.prototype;
        d.Va = function() {
            new jh(window.location);
            var a = this.zg.initReversePairingCode;
            this.Km = a ? "ytremote_d" : "ytremote";
            var b = !1;
            this.dC.Cc(w(function(c) {
                b || (b = !0, this.uo(c || ""), (a || this.an() || this.Jb.r()) && this.Vw(a))
            }, this))
        };
        d.Xo = function(a, b) {
            Hj.f.Xo.call(this, a, b);
            this.ed && this.ed.lw(a)
        };
        d.Fg = function() {
            Hj.f.Fg.call(this);
            this.jn()
        };
        d.jn = function() {
            if (this.ed) {
                var a = this.Ol();
                a ? this.ed.CA({
                    content_id: a.videoId,
                    title: a.title,
                    duration: a.duration,
                    thumbnail_url: a.imageUrl
                }) : this.ed.CA()
            }
        };
        d.Gj = function(a, b) {
            Hj.f.Gj.call(this, a, b);
            this.ed && this.ed.lw()
        };
        d.Vw = function(a) {
            this.gk(w(function() {
                a && this.xT(a, n)
            }, this))
        };
        d.Oo = function() {
            this.Eg.remove("mdx-paired-devices");
            this.Jb.clear();
            this.Bc.clear();
            Hj.f.Oo.call(this);
            this.an() && this.gk()
        };
        d.xd = function(a, b) {
            this.Cg.Be().$emit(a, b)
        };
        d.cT = function() {
            return this.yC
        };
        d.bT = function() {
            return "lb-v4"
        };
        d.yA = function() {
            return this.zg.de
        };
        d.Pn = function() {
            this.En();
            this.rf(this.Ra()) && this.vi()
        };
        d.pause = function() {
            this.H.pause();
            this.vi()
        };
        d.Ns = function() {
            this.H.nk();
            this.rf("")
        };
        d.Bt = function(a) {
            var b = this.jf();
            1081 != b && (0 == b || -1 == b ? this.rf(this.Ra(), a) && this.vi() : (this.H.Dj(a, !0), this.vi()))
        };
        d.SE = function(a, b, c) {
            this.En();
            this.rf(a, c) && this.vi()
        };
        d.Ct = function(a) {
            this.H.gP(a)
        };
        d.io = function() {
            var a = this.H.dP();
            return fa(a) ? Math.round(a) : -1
        };
        d.Oj = function() {
            return this.H.eP()
        };
        d.At = function() {
            this.H.fP()
        };
        d.Dt = function() {
            this.H.hP()
        };
        d.RE = function(a, b) {
            (b.name || b.languageCode) && this.H.Gu() ? (this.mf = b, this.mf.videoId = a) : (this.mf = null, this.H.Uk())
        };
        d.Yt = function() {
            var a = this.H.subtitlesTrack;
            return !$a(a) && a || null
        };
        d.cf = function() {
            return this.gc != this.Zd || this.H.isPlayingAd ? 0 : 1 == this.wb || 2 == this.wb || 3 == this.wb || 0 == this.wb ? this.ft.currentTime : 0
        };
        d.jf = function() {
            return this.H.isPlayingAd ? 1081 : this.gc != this.Zd ? 3 : this.wb == Db.ERROR ? vg.ERROR : this.wb
        };
        d.Ra = function() {
            return this.gc || ""
        };
        d.bf = function(a, b) {
            return a != this.gc ? (this.gc = a || "", this.wb = a ? 3 : -1, this.hf = 0, this.mf = null, b || this.Fg(), !0) : !1
        };
        d.kn = function(a, b, c, e, f, g, k, l) {
            this.be && (this.be(), this.be = null);
            if (0 == b.length) this.Ns(), this.fc.st([], n), this.K = null, a([]);
            else {
                this.ae || (this.ae = Ac(this.fc, "[[YouTube Remote Playlist|Title of playlist created by a user using a remote mobile device (like an Android phone).]]", "icon-remote", "rq"));
                var p = "",
                    q = f;
                f = !1;
                this.K && this.K === this.ae || (this.K = this.ae, f = !0);
                var r = !1;
                if (void 0 === q) {
                    var t = this.Ra(),
                        q = t ? b.indexOf(t) : -1;
                    f && t && this.Xd.Hg(this.Xd.currentVideo, this.K)
                } else 0 > q ? (this.Zd = "", this.rf("")) :
                    (this.En(), p = b[q], r = this.bf(p, !0) || !!k);
                k && p && this.H.$C();
                var G = {};
                c.forEach(function(a, c) {
                    G[b[c]] = a
                });
                0 <= q && this.ae.xa(q);
                this.fc.bD(G);
                this.zg.enableVideoVerificationTokens && this.fc.cD(e);
                this.fc.st(b, w(function(b) {
                    this.ae.model = b;
                    this.H.Xs(this.Km);
                    if (p) {
                        if (this.rf(p, g, k, l)) {
                            var c = this.Xd.aD();
                            c && c.Ia == this.fc.id || (c = b.i.ha(q), this.Xd.Hg(c, this.K))
                        }
                        this.jn()
                    }
                    a(this.hj(b))
                }, this));
                r && this.Fg()
            }
        };
        d.Jn = function() {
            return this.K ? this.K.service && this.K.service.id == this.fc.id ? this.fc.xo() : this.K instanceof Fc && 0 == this.K.numLoadedPages ? this.K.Nn.map(function(a) {
                return a.videoId
            }) : this.K.model.i.J().map(function(a) {
                return a.videoId
            }) : []
        };
        d.VH = function() {
            return this.K ? this.K.model.i.J().map(function(a) {
                return a.en.substring(0, 2)
            }) : []
        };
        d.PE = function(a) {
            this.K ? a(this.hj(this.K.model)) : a([])
        };
        d.kx = function() {
            return this.$x(this.Ol())
        };
        d.zC = function() {
            this.wj(this.wb)
        };
        d.wj = function(a) {
            this.Zd != this.gc || this.wb == Db.ERROR && -1 == a || (this.hf = this.cf(), this.wb = a, this.dt.clearTimeout(this.jw), 0 == a ? this.dy() : this.jw = this.dt.setTimeout(w(this.dy, this), 50))
        };
        d.dy = function() {
            this.jw = 0;
            var a = this.Ol(),
                b = this.jf(),
                c = null;
            b == vg.ERROR ? c = this.$x(this.Ol()) : 1 == b && (a && a.errorCode) && (a.errorCode = null, a = this.hj(this.K.model), this.au(a));
            this.Xo(b, c)
        };
        d.$x = function(a) {
            var b = "unknown";
            this.H.Kg ? b = "needsLogin" : a && (a.errorCode || (a.errorCode = 205 == this.H.errorCode ? "liveNotSupported" : "notAvailable"), b = a.errorCode);
            return new ej(this.gc, b, "PLAYER_ERROR")
        };
        d.AC = function() {
            var a = this.Xd.currentVideo;
            this.hf = (this.Zd = a = a ? a.videoId : "") ? this.cf() : 0;
            this.bf(a) || (this.jn(), this.wj(this.wb))
        };
        d.BC = function() {
            this.Zd = "";
            this.bf("")
        };
        d.Ys = function(a, b) {
            var c = !1;
            if (!this.K || !this.K.equals(b)) {
                var e = "";
                e = b && b != this.ae ? (c = b.af()) ? c.videoId || "" : "" : this.gc;
                c = this.bf(e, !0);
                this.Zd = e;
                this.hf = 0;
                this.be && (this.be(), this.be = null);
                b instanceof Dc && (this.be = b.k("numPagesLoaded:changed", w(function() {
                    this.Ys(null, b)
                }, this)))
            }
            e = !(!b.service || b.service.id != this.fc.id);
            this.H.Xs(e ? this.Km : null);
            this.K = b;
            var f = this.hj(this.K.model);
            e ? (c && this.Fg(), f && 0 != f.length && this.au(f)) : this.fF(f)
        };
        d.rf = function(a, b, c, e) {
            var f = angular.element(document.getElementById("app-markup")).scope().application;
            if (!a) return this.bf(""), f.Ha() && (this.Fs.state("browse", {}), this.Cg.hb()), !1;
            if (f.Ha() && this.Xd.currentVideo && this.Xd.currentVideo.videoId == a) return this.H.bd(), void 0 === b || c || this.H.Dj(b, !0), !0;
            if (!this.K) return !1;
            this.bf(a);
            var g = this.K,
                k = Ha(g.model.i.J(), function(b) {
                    return b.videoId == a
                });
            if (!k) return this.fc.load({
                q: "rq"
            }, w(function(k) {
                this.Ra() == a && g == this.K && (!(k = Ha(k.i.J(), function(b) {
                    return b.videoId ==
                        a
                })) || c && e && !this.an() && k.Kb && !k.Os && this.zg.enableVideoVerificationTokens && !k.Yi || (f.scope.$emit("request-playback", k, g, b), this.Cg.hb()))
            }, this)), !1;
            f.scope.$emit("request-playback", k, g, b);
            this.Cg.hb();
            return !1
        };
        d.hj = function(a) {
            var b = [];
            a.i.J().forEach(function(a) {
                a.errorCode && "limitedSyndication" != a.errorCode && b.push(new ej(a.videoId, a.errorCode, "NOT_PLAYABLE"))
            }, this);
            return b
        };
        d.Ol = function() {
            return this.gc && this.K && this.K.model && this.K.model.i ? Ha(this.K.model.i.J(), function(a) {
                return a.videoId == this.gc
            }, this) : null
        };
        d.vi = function() {
            var a = this.Cg.Be().application;
            !a.Ha() || a.Gc && !a.Ig() || this.Fs.mode("transport")
        };
        d.ij = function(a) {
            if (a) {
                var b = new mc(a.$w());
                a = b.id.indexOf("#");
                0 < a && (b.id = b.id.substr(0, a));
                var c = !1;
                a = this.Jb.J();
                this.Jb.Mg(a.map(function(a) {
                    return a.id == b.id ? (c = !0, b) : a
                }));
                c || (this.Jb.gf(b), this.Eg.sb("mdx-paired-devices", this.Jb.J().map(function(a) {
                    return a.$w()
                }), 31536E3, !0))
            }
            this.Jb.JJ(function(a, b) {
                var c = (a.ye ? 0 : 1) - (b.ye ? 0 : 1);
                if (0 != c) return c;
                var k = (new $e(a)).eh,
                    c = (new $e(b)).eh,
                    k = String(k).toLowerCase(),
                    c = String(c).toLowerCase();
                return k < c ? -1 : k == c ? 0 : 1
            })
        };
        d.DC = function(a, b) {
            var c = b.params.Ze;
            switch (b.action) {
                case "loungeStatus":
                    this.Jb.J().forEach(function(a) {
                        a.ye = !1
                    });
                    this.Bc.Mg(b.params.bb);
                    this.Bc.J().forEach(w(function(a) {
                        a.ye = !0;
                        this.ij(a)
                    }, this));
                    break;
                case "remoteConnected":
                    this.Bc.Mg(this.Bc.J().filter(function(a) {
                        return a.id != c.id
                    }));
                    c.ye = !0;
                    this.Bc.gf(c);
                    this.ij(c);
                    break;
                case "remoteDisconnected":
                    this.Bc.Mg(this.Bc.J().filter(function(a) {
                        return a.id != c.id
                    })), this.Jb.J().forEach(function(a) {
                        a.id == c.id && (a.ye = !1)
                    }), this.ij(null)
            }
            this.H.bH(this.aH())
        };
        d.FC = function() {
            var a = this.Ra();
            if (a) {
                var b = this.Yt();
                !b || (b.name || b.languageCode) || (b = null);
                this.wx(this.bt, b) || (this.bt = b, this.Zt(a, b))
            }
        };
        d.CC = function(a, b) {
            this.Gj(a.volume, a.muted);
            if (-1 != b.volume) {
                var c = new Dh("setVolume", {
                    volume: a.volume,
                    delta: a.volume - b.volume,
                    muted: a.muted
                });
                this.xd("mdx-toast-topic", c)
            }
        };
        d.wx = function(a, b) {
            return a && b ? a.id && b.id && a.id == b.id ? !0 : a.type == b.type && a.format == b.format && a.name == b.name && a.languageCode == b.languageCode : !a == !b
        };
        d.EC = function() {
            var a = this.mf;
            this.mf = null;
            if (a && a.videoId && a.videoId == this.Ra()) {
                var b = this.H.bv();
                Fa(b, function(b) {
                    return this.wx(b, a) ? (this.H.op(b), !0) : !1
                }, this) || this.H.Uk()
            }
        };
        d.ej = function() {
            return this.Bc
        };
        d.Qn = function() {
            return this.Jb
        };
        d.En = function() {
            this.et || (this.et = !0, this.xC.bh("start_dial", "rply_rqd"))
        };
        Hj.$inject = "$rootScope csiService locationService angularHelper localStorage playerService progressModel remoteQueueService authService watchModel environmentModel timeService".split(" ");

        function Ij(a) {
            this.eB = angular.element(a.document.body);
            a.addEventListener("resize", w(this.hB, this));
            this.hB()
        }
        Ij.prototype.hB = function() {
            this.eB.css("fontSize", qe(this.eB[0].offsetHeight / 720))
        };
        Ij.$inject = ["$window"];

        function Jj(a, b, c) {
            Kg.call(this, a, b);
            this.FP = c
        }
        z(Jj, Kg);
        Jj.prototype.wQ = function() {
            var a = this.Db.ok();
            x(a, this.FP.BP());
            this.Vl("//web.archive.org/web/20130711074931/https://www.youtube-nocookie.com/device_204", a, null, !0)
        };
        Jj.$inject = ["environmentModel", "privateDataService", "statsService"];

        function Kj(a, b, c) {
            this.hJ = a;
            this.g = b;
            this.nI = c;
            this.mI = 0;
            this.CV = 5E3;
            this.ii = null;
            this.nJ()
        }
        Kj.prototype.nJ = function() {
            if (this.ii = this.g.document.getElementById("pluginObjectNetwork")) this.mI = this.nI.On(w(function() {
                this.mJ()
            }, this), 5E3)
        };
        Kj.prototype.mJ = function() {
            this.VT() || this.hJ.$emit("network-failure")
        };
        Kj.prototype.VT = function() {
            var a = 0,
                a = 0,
                b = this.ii.GetActiveType();
            if (-1 === b) return !1;
            a = this.ii.CheckPhysicalConnection(b);
            if (1 !== a) return !1;
            a = this.ii.CheckGateway(b);
            return 1 !== a ? !1 : !0
        };
        Kj.prototype.WG = function() {
            this.g.curWidget && this.g.curWidget.setPreference("return", "true")
        };
        Kj.$inject = ["$rootScope", "$window", "timeService"];

        function Lj(a) {
            this.kr = a;
            this.zi = new hb(10, !0);
            this.XR()
        }
        d = Lj.prototype;
        d.$M = function(a, b, c) {
            this.zi.kh(a, this.wz(a, b, c));
            a = this.zi.map(function(a, b) {
                return this.wz(b, a.video, a.totalResults)
            }, this);
            this.kr.sb("recent-searches", a)
        };
        d.load = function() {
            return this.zi.ea()
        };
        d.clear = function() {
            this.zi.clear();
            this.kr.remove("recent-searches")
        };
        d.wz = function(a, b, c) {
            return {
                query: a,
                video: b,
                totalResults: c
            }
        };
        d.XR = function() {
            var a = this.kr.get("recent-searches") || [];
            Ca(a, function(a) {
                this.zi.kh(a.query, a)
            }, this)
        };
        Lj.$inject = ["localStorage"];

        function Mj(a, b, c) {
            this.OG = a;
            this.NG = b;
            this.pF = c;
            this.hF = new tc(H.b + "/tiles/clear_searches_tile.html", "request-clear-searches")
        }
        Mj.prototype.load = function(a, b) {
            var c = new J,
                e = this.pF.load();
            c.i.push(new tc(H.b + "/tiles/search_tile.html", "request-search", {
                resultCount: e.length
            }));
            e.forEach(function(a) {
                c.i.push(new tc(H.b + "/tiles/recent_search_tile.html", "request-search", a))
            });
            0 < e.length && c.i.push(this.hF);
            b && b(c)
        };
        Mj.prototype.aQ = function() {
            var a = this.NG("[[Search|Clicking this launches the search interface.]]")(this.OG);
            return Ac(this, a, "icon-search", "searchRow", null, "actiontile")
        };
        Mj.$inject = ["$rootScope", "$interpolate", "searchHistoryService"];

        function Nj(a, b, c, e, f, g, k, l, p, q, r, t) {
            Wg.call(this, a, b, c, e, f, g, k, q, r, t);
            this.YP = l;
            this.EK = p
        }
        z(Nj, Wg);
        Nj.prototype.kg = function(a, b, c, e) {
            a.eb = this.YP;
            Wg.prototype.kg.call(this, a, b, c, e)
        };

        function Oj(a, b, c, e, f, g, k, l, p, q, r, t) {
            Nj.call(this, a, b, c, e, f, g, k, l, p, q, r, t);
            this.filters = {};
            this.FB = "relevance";
            this.serviceQuery = ""
        }
        z(Oj, Nj);
        Oj.prototype.load = function(a, b) {
            var c = this.sI(a);
            return c.query ? Oj.f.load.call(this, c, b) : (c = new this.gh.tc, b && b(c), c)
        };
        Oj.prototype.sI = function(a) {
            var b = {};
            x(b, this.filters);
            !1 === b.hd && delete b.hd;
            a && x(b, a);
            this.FB && (b.orderby = this.FB);
            return b
        };
        Oj.prototype.B0 = function() {
            this.serviceQuery = ""
        };

        function Pj(a, b, c, e, f, g, k, l, p) {
            this.wD = a;
            this.vD = b;
            this.mV = c;
            this.rD = e;
            this.pD = f;
            this.qD = g;
            this.Wj = k;
            this.ub = l;
            this.rC = p;
            this.lV = {};
            this.$s = this.ub.supportsPairing && new tc(H.b + "/tiles/remote_pairing_tile.html", "request-pairing", {
                bb: this.Wj.ej().r()
            }) || null;
            this.tn = this.ub.supportsPairing && new tc(H.b + "/tiles/remote_reset_tile.html", "request-remote-reset", {
                bb: this.Wj.Qn().r()
            }) || null;
            this.mC = new tc(H.b + "/tiles/credits_tile.html", "request-view-credits");
            this.qC = new tc(H.b + "/tiles/tos_and_privacy_tile.html",
                "request-view-tos");
            this.nC = new tc(H.b + "/tiles/debug_info_tile.html", "request-debug-info");
            this.oC = new tc(H.b + "/tiles/kenko_tile.html", "request-view-kenko");
            this.pC = new tc(H.b + "/tiles/shiyojo_tile.html", "request-view-shiyojo");
            this.ub.supportsPairing && a.$on("mdx-pairing-topic", w(this.yD, this))
        }
        d = Pj.prototype;
        d.yD = function() {
            this.eR();
            this.rD.hb()
        };
        d.eR = function() {
            this.ub.supportsPairing && (this.$s.ya.bb = this.Wj.ej().r(), this.tn.ya.bb = this.Wj.Qn().r())
        };
        d.load = function(a, b) {
            var c = new J;
            this.pD.Cc(w(function(a) {
                a ? this.qD.Qa("default", w(function(a) {
                    this.ub.Uv(a);
                    this.qy("/tiles/logout_tile.html", "request-logout", c, a, b)
                }, this)) : this.qy("/tiles/login_tile.html", "request-login", c, null, b)
            }, this))
        };
        d.qy = function(a, b, c, e, f) {
            a = new tc(H.b + a, b, e);
            c.i.clear();
            c.i.push(a);
            this.ub.supportsPairing && (c.i.push(this.$s), 0 < this.tn.ya.bb && c.i.push(this.tn));
            c.i.push(new tc(H.b + "/tiles/togglable_tile.html", "request-device-retention", {
                Rs: w(function() {
                    return this.rC.ah
                }, this),
                title: "[[Improve YouTube|Title for a tile that indicates whether a user can enable or disable whether the application gathers statistics about them.]]",
                description: "[[Help improve YouTube by sending anonymous usage data.|Description for a tile that indicates whether a user can enable or disable whether the application gathers statistics about them.]]"
            }));
            this.ub.Te && (c.i.push(new tc(H.b + "/tiles/togglable_tile.html", "request-toggle-video-info", {
                Rs: w(function() {
                    return this.ub.isVideoInfoVisible
                }, this),
                title: "Show Video Info"
            })), c.i.push(this.nC));
            (this.ub.Td || this.ub.Ti) && c.i.push(this.mC);
            this.ub.Td && 0 == this.ub.es && (c.i.push(this.oC), c.i.push(this.pC));
            c.i.push(this.qC);
            f && f(c)
        };
        d.bQ = function() {
            var a = this.vD("[[Sign In & Settings|Menu item title that allows a user to sign in or change settings of the application.|18105560]]")(this.wD);
            return Ac(this, a, "icon-player-settings", "settingsRowService", null, "actiontile")
        };
        Pj.$inject = "$rootScope $interpolate locationService angularHelper authService userProfileService remoteService environmentModel privateDataService".split(" ");

        function Qj(a, b) {
            this.Pz = new Jc(50);
            var c = typeof b.webkitAudioContext,
                e = typeof b.AudioContext;
            if ("function" == c || "object" == c) this.nm = new webkitAudioContext;
            else if ("function" == e || "object" == e) this.nm = new AudioContext;
            a.$on("play-sound", w(this.yS, this))
        }
        Qj.prototype.yS = function(a, b) {
            var c = this.Pz.get(b);
            c ? this.cA(c) : (c = new mg(H.Lo + "/sound/" + b + ".wav"), this.Pz.Tq(b, c), c.cQ(this.nm, w(this.cA, this, c)))
        };
        Qj.prototype.cA = function(a) {
            if (a.Tr) {
                var b = this.nm.createBufferSource();
                b.buffer = a.Tr;
                b.connect(this.nm.destination);
                b.start(0)
            }
        };
        Qj.$inject = ["$rootScope", "$window"];

        function Rj(a, b, c) {
            this.L = new pg(a);
            this.Av = a;
            this.zp = b;
            this.YI = c;
            (a = this.VI()) && this.XI(hc(a));
            this.Bv();
            this.zp.RI(w(this.SI, this));
            this.YI.k("state:changed", w(this.WI, this))
        }
        d = Rj.prototype;
        d.WI = function(a, b) {
            if (this.L.Gf = a) this.L.ci = b || this.L.ci, this.L.rl = this.L.gi, this.L.gi = this.Av.Xi, this.L.bi || (this.L.bi = this.L.gi);
            this.Bv()
        };
        d.BP = function() {
            return {
                app_anon_id: this.L.id,
                firstactive: this.L.Hp,
                prevactive: this.L.Kp,
                firstactivegeo: this.L.Ip,
                loginstate: this.L.Gf,
                firstlogin: this.L.bi,
                prevlogin: this.L.rl,
                uga: this.L.ci
            }
        };
        d.Bv = function() {
            this.zp.Cq("device-statistics", this.L.RN())
        };
        d.VI = function() {
            return this.zp.wr("device-statistics")
        };
        d.XI = function(a) {
            this.L.id = a.id;
            this.L.Hp = a.firstActive;
            this.L.Ip = a.firstActiveGeo;
            this.L.gi = a.recentLogin;
            this.L.Gf = a.loginState;
            this.L.bi = a.firstLogin;
            this.L.rl = a.prevLogin;
            this.L.ci = a.uga;
            this.L.Kp = a.recentActive
        };
        d.SI = function() {
            this.L = new pg(this.Av)
        };
        Rj.$inject = ["environmentModel", "privateDataService", "authService"];

        function Sj(a, b) {
            this.iQ = a;
            this.wA = b;
            this.tA = !1;
            this.iW = "pairingCode"
        }
        Sj.prototype.Va = function() {
            if (!this.Pr && this.iQ.supportsSteelDial) try {
                this.Pr = this.DR(), this.Pr.onGet("/", w(this.FR, this)), this.Pr.onPost("/", w(this.GR, this))
            } catch (a) {
                console.error("Steel Dial Server Creation exception: " + a)
            }
        };
        Sj.prototype.DR = function() {
            return new DialServer("YouTube")
        };
        Sj.prototype.FR = function(a, b) {
            var c = this.wA.MS(),
                e = '<?xml version="1.0" encoding="UTF-8"?><service xmlns="urn:dial-multiscreen-org:schemas:dial"><name>YouTube</name><options allowStop="false" /><state>' + (null != c || this.tA ? "running" : "stopped") + "</state>";
            null != c && (e += '<additionalData xmlns="https://web.archive.org/web/20130711074931/http://www.youtube.com/dial"><screenId>' + c + "</screenId></additionalData>");
            b.mimeType = 'text/xml; charset="utf-8"';
            b.responseCode = 200;
            b.body = e + "</service>";
            return !0
        };
        Sj.prototype.GR = function(a, b) {
            var c = le(a.body);
            return c.hasOwnProperty("pairingCode") && c.pairingCode ? (this.wA.Vw(c.pairingCode), this.tA = !0, b.responseCode = 201, b.addHeader("LOCATION", "http://" + a.host + a.path + "/run"), b.mimeType = 'text/plain; charset="utf-8"', b.body = "", !0) : !1
        };
        Sj.$inject = ["environmentModel", "remoteService"];
        String.fromCharCode(160);
        var Tj = {};

        function Uj(a, b) {
            this.$R = a;
            this.lg = b;
            this.qS = [a, b].join("|")
        }
        var Vj = {};

        function Wj(a, b) {
            "iw" == a ? a = "he" : "iw" == b && (b = "he");
            var c = [a, b].join("|");
            return Vj[c] || (Vj[c] = new Uj(a, b))
        }
        Uj.prototype.toString = function() {
            return this.qS
        };
        Uj.prototype.y2 = function() {
            return Wj(this.lg, this.$R)
        };
        var Xj = {
            ZX: "zh-hans-t-i0-cangjie-1982",
            aY: "zh-hans-t-i0-cangjie-1987",
            $X: "zh-hant-t-i0-cangjie-1982",
            bY: "zh-hant-t-i0-cangjie-1987",
            cY: "yue-hant-t-i0-und",
            dY: "zh-t-i0-pinyin",
            eY: "zh-hant-t-i0-pinyin",
            fY: "am-t-i0-und",
            gY: "ar-t-i0-und",
            hY: "be-t-i0-und",
            iY: "bn-t-i0-und",
            jY: "bg-t-i0-und",
            lY: "en-t-i0-und",
            kY: "nl-t-i0-und",
            mY: "fr-t-i0-und",
            nY: "de-t-i0-und",
            oY: "el-t-i0-und",
            pY: "gu-t-i0-und",
            qY: "he-t-i0-und",
            rY: "hi-t-i0-und",
            sY: "ja-hira-t-i0-und",
            tY: "it-t-i0-und",
            uY: "ja-t-ja-hira-i0-und",
            vY: "kn-t-i0-und",
            wY: "ml-t-i0-und",
            xY: "mr-t-i0-und",
            yY: "ne-t-i0-und",
            zY: "or-t-i0-und",
            AY: "fa-t-i0-und",
            BY: "pl-t-i0-und",
            CY: "pt-t-i0-und",
            DY: "pa-t-i0-und",
            EY: "ru-t-i0-und",
            FY: "sa-t-i0-und",
            GY: "sr-t-i0-und",
            HY: "si-t-i0-und",
            IY: "es-t-i0-und",
            JY: "ta-t-i0-und",
            KY: "te-t-i0-und",
            LY: "ti-t-i0-und",
            MY: "tr-t-i0-und",
            NY: "uk-t-i0-und",
            OY: "ur-t-i0-und",
            PY: "vi-t-i0-und",
            QY: "zh-t-i0-wubi-1986",
            RY: "zh-hant-t-i0-und",
            TY: "sq-t-k0-und",
            UY: "ar-t-k0-und",
            VY: "hy-hyr-t-k0-und",
            WY: "hy-hyt-t-k0-und",
            XY: "eu-t-k0-und",
            YY: "be-t-k0-und",
            ZY: "bn-t-k0-und",
            $Y: "bn-t-und-latn-k0-und",
            aZ: "bs-t-k0-und",
            bZ: "pt-br-t-k0-und",
            cZ: "bg-t-k0-und",
            dZ: "bg-t-k0-qwerty",
            eZ: "ca-t-k0-und",
            fZ: "chr-t-k0-und",
            gZ: "chr-t-und-latn-k0-und",
            hZ: "hr-t-k0-und",
            iZ: "cs-t-k0-und",
            jZ: "cs-t-k0-qwertz",
            kZ: "da-t-k0-und",
            lZ: "prs-t-k0-und",
            mZ: "hi-t-k0-qwerty",
            nZ: "nl-t-k0-und",
            oZ: "dz-t-k0-und",
            pZ: "en-t-k0-und",
            qZ: "en-t-k0-dvorak",
            rZ: "et-t-k0-und",
            sZ: "und-ethi-t-k0-und",
            tZ: "fi-t-k0-und",
            uZ: "fr-t-k0-und",
            vZ: "gl-t-k0-und",
            wZ: "ka-t-k0-und",
            xZ: "ka-t-k0-legacy",
            yZ: "de-t-k0-und",
            zZ: "el-t-k0-und",
            AZ: "gu-t-k0-und",
            BZ: "gu-t-und-latn-k0-qwerty",
            CZ: "pa-guru-t-k0-und",
            DZ: "pa-guru-t-und-latn-k0-und",
            EZ: "he-t-k0-und",
            FZ: "hi-t-k0-und",
            GZ: "hu-t-k0-101key",
            HZ: "is-t-k0-und",
            IZ: "it-t-k0-und",
            JZ: "kn-t-k0-und",
            KZ: "kn-t-und-latn-k0-und",
            LZ: "kk-t-k0-und",
            MZ: "km-t-k0-und",
            NZ: "ko-t-k0-und",
            OZ: "ky-cyrl-t-k0-und",
            PZ: "lo-t-k0-und",
            QZ: "lv-t-k0-und",
            RZ: "lt-t-k0-und",
            SZ: "mk-t-k0-und",
            TZ: "ml-t-k0-und",
            UZ: "ml-t-und-latn-k0-und",
            VZ: "mt-t-k0-und",
            ZZ: "my-t-k0-und",
            WZ: "mi-t-k0-und",
            XZ: "mn-cyrl-t-k0-und",
            YZ: "srp-t-k0-und",
            $Z: "no-t-k0-und",
            a_: "or-t-k0-und",
            b_: "or-t-und-latn-k0-und",
            c_: "latn-002-t-k0-und",
            d_: "ps-t-k0-und",
            e_: "fa-t-k0-und",
            f_: "pl-t-k0-und",
            g_: "pt-pt-t-k0-und",
            h_: "rom-t-k0-und",
            i_: "ro-t-k0-und",
            j_: "ro-t-k0-legacy",
            k_: "ro-t-k0-extended",
            l_: "ru-t-k0-und",
            m_: "sa-t-und-latn-k0-und",
            n_: "sr-cyrl-t-k0-und",
            o_: "sr-latn-t-k0-und",
            p_: "si-t-k0-und",
            q_: "sk-t-k0-und",
            r_: "sk-t-k0-qwerty",
            s_: "sl-t-k0-und",
            t_: "uzs-t-k0-und",
            u_: "es-t-k0-und",
            v_: "sv-t-k0-und",
            w_: "de-ch-t-k0-und",
            x_: "ta-t-k0-ta99",
            y_: "ta-t-k0-und",
            A_: "ta-t-und-latn-k0-und",
            B_: "ta-t-k0-typewriter",
            z_: "ta-t-k0-itrans",
            C_: "tt-t-k0-und",
            D_: "te-t-k0-und",
            E_: "te-t-und-latn-k0-und",
            F_: "th-t-k0-und",
            G_: "th-t-k0-pattajoti",
            H_: "th-t-k0-tis",
            I_: "tr-t-k0-legacy",
            J_: "tr-t-k0-und",
            K_: "ug-t-k0-und",
            L_: "uk-t-k0-101key",
            M_: "ur-t-k0-und",
            N_: "uz-cyrl-t-k0-und",
            O_: "uz-cyrl-t-k0-legacy",
            P_: "uz-latn-t-k0-und",
            Q_: "vi-t-k0-und",
            R_: "vi-t-k0-legacy",
            S_: "vi-t-k0-viqr",
            T_: "yi-t-k0-und",
            XW: "af-t-i0-handwrit",
            $W: "be-t-i0-handwrit",
            aX: "bg-t-i0-handwrit",
            bX: "ca-t-i0-handwrit",
            gX: "cs-t-i0-handwrit",
            VX: "cy-t-i0-handwrit",
            hX: "da-t-i0-handwrit",
            pX: "de-t-i0-handwrit",
            jX: "en-t-i0-handwrit",
            PX: "es-t-i0-handwrit",
            kX: "et-t-i0-handwrit",
            ZW: "eu-t-i0-handwrit",
            mX: "fi-t-i0-handwrit",
            lX: "fil-t-i0-handwrit",
            nX: "fr-t-i0-handwrit",
            uX: "ga-t-i0-handwrit",
            oX: "gl-t-i0-handwrit",
            fX: "hr-t-i0-handwrit",
            qX: "ht-t-i0-handwrit",
            rX: "hu-t-i0-handwrit",
            tX: "id-t-i0-handwrit",
            sX: "is-t-i0-handwrit",
            vX: "it-t-i0-handwrit",
            wX: "ja-t-i0-handwrit",
            xX: "ko-t-i0-handwrit",
            yX: "la-t-i0-handwrit",
            AX: "lt-t-i0-handwrit",
            zX: "lv-t-i0-handwrit",
            BX: "mk-t-i0-handwrit",
            CX: "ms-t-i0-handwrit",
            EX: "nb-t-i0-handwrit",
            iX: "nl-t-i0-handwrit",
            FX: "nn-t-i0-handwrit",
            DX: "no-t-i0-handwrit",
            GX: "pl-t-i0-handwrit",
            HX: "pt-t-i0-handwrit",
            IX: "pt-br-t-i0-handwrit",
            JX: "pt-pt-t-i0-handwrit",
            KX: "ro-t-i0-handwrit",
            LX: "ru-t-i0-handwrit",
            NX: "sk-t-i0-handwrit",
            OX: "sl-t-i0-handwrit",
            YW: "sq-t-i0-handwrit",
            MX: "sr-t-i0-handwrit",
            RX: "sv-t-i0-handwrit",
            QX: "sw-t-i0-handwrit",
            SX: "tr-t-i0-handwrit",
            TX: "uk-t-i0-handwrit",
            UX: "vi-t-i0-handwrit",
            cX: "zh-t-i0-handwrit",
            dX: "zh-hans-t-i0-handwrit",
            eX: "zh-hant-t-i0-handwrit"
        };

        function Yj(a) {
            this.code = a;
            this.type = null;
            this.JQ = this.mg = "en";
            this.NR();
            this.fW = a
        }
        var Zj = "ar-t-k0-und prs-t-k0-und he-t-k0-und ps-t-k0-und fa-t-k0-und uzs-t-k0-und ug-t-k0-und ur-t-k0-und yi-t-k0-und".split(" "),
            ak = {};

        function bk(a) {
            if (!a) return null;
            Za(Xj, a) || (a = ck(a));
            a = a.replace(/_/g, "-");
            Za(Xj, a) || (a = ck(a + "-und"));
            return ak[a] ? ak[a] : Za(Xj, a) ? (ak[a] = new Yj(a), ak[a]) : null
        }
        var dk = "bn gu pa kn ml or sa ta te".split(" "),
            ek = {
                im_pinyin_zh_hans: "zh-t-i0-pinyin",
                im_wubi_zh_hans: "zh-t-i0-wubi-1986",
                im_pinyin_zh_hant: "zh-hant-t-i0-pinyin",
                im_zhuyin_zh_hant: "zh-hant-t-i0-und",
                im_t13n_ja: "ja-t-ja-hira-i0-und",
                "im_t13n_ja-Hira": "ja-hira-t-i0-und",
                vkd_en_dvorak: "en-t-k0-dvorak",
                vkd_hy_east: "hy-hyr-t-k0-und",
                vkd_hy_west: "hy-hyt-t-k0-und",
                vkd_bg_phone: "bg-t-k0-qwerty",
                vkd_cs_qwertz: "cs-t-k0-qwertz",
                vkd_deva_phone: "hi-t-k0-qwerty",
                vkd_ethi: "und-ethi-t-k0-und",
                vkd_ka_qwerty: "ka-t-k0-und",
                vkd_ka_typewriter: "ka-t-k0-legacy",
                vkd_guru_inscript: "pa-guru-t-k0-und",
                vkd_guru_phone: "pa-guru-t-und-latn-k0-und",
                vkd_gu_phone: "gu-t-und-latn-k0-qwerty",
                vkd_hu_101: "hu-t-k0-101key",
                vkd_ro_sr13392_primary: "ro-t-k0-legacy",
                vkd_ro_sr13392_secondary: "ro-t-k0-extended",
                vkd_sk_qwerty: "sk-t-k0-qwerty",
                vkd_es_es: "es-t-k0-und",
                vkd_ta_tamil99: "ta-t-k0-ta99",
                vkd_ta_typewriter: "ta-t-k0-typewriter",
                vkd_ta_itrans: "ta-t-k0-itrans",
                vkd_tr_f: "tr-t-k0-legacy",
                vkd_tr_q: "tr-t-k0-und",
                vkd_uk_101: "uk-t-k0-101key",
                vkd_uz_cyrl_phone: "uz-cyrl-t-k0-und",
                vkd_uz_cyrl_type: "uz-cyrl-t-k0-legacy",
                vkd_vi_tcvn: "vi-t-k0-und",
                vkd_vi_telex: "vi-t-k0-legacy",
                vkd_vi_viqr: "vi-t-k0-viqr",
                vkd_chr_phone: "chr-t-und-latn-k0-und",
                vkd_th_pattajoti: "th-t-k0-pattajoti",
                vkd_th_tis: "th-t-k0-tis"
            },
            fk = bb(ek);

        function ck(a) {
            if (ek[a]) return ek[a];
            if ("vkd_iw" == a) return "he-t-k0-und";
            if ("im_t13n_iw" == a) return "he-t-i0-und";
            if ("tr-t-k0-lagacy" == a) return "tr-t-k0-legacy";
            var b = a.split("_"),
                b = 0 == a.lastIndexOf("im_t13n", 0) ? b[2] + "-t-i0-und" : 2 == b.length ? b[1] + "-t-k0-und" : C(dk, b[1]) ? "inscript" == b[2] ? b[1] + "-t-k0-und" : b[1] + "-t-und-latn-k0-und" : b[1] + "-" + b[2] + "-t-k0-und";
            return Za(Xj, b) ? b : a
        }
        d = Yj.prototype;
        d.uR = function() {
            if (fk[this.code]) this.xB = fk[this.code].slice(4);
            else {
                var a = this.code.split("-t-"),
                    b = a[0],
                    a = a[1],
                    b = b.replace(/-/g, "_");
                !C(dk, b) || "und-latn-k0-und" != a && "k0-und" != a ? "k0-und" == a && (this.xB = b) : this.xB = b + ("k0-und" == a ? "_inscript" : "_phone")
            }
        };
        d.NR = function() {
            if (0 <= this.code.indexOf("-i0")) {
                this.type = "im";
                var a = this.code,
                    b = a.length - 9;
                0 <= b && a.indexOf("-handwrit", b) == b && (this.type = "hw")
            } else 0 <= this.code.indexOf("-k0") && (this.type = "vkd");
            a = this.code.split(/-t|-i0|-k0/);
            "yue-hant" == a[0] && (a[0] = "zh-Hant");
            switch (this.code) {
                case "yue-hant-t-i0-und":
                    a[0] = "zh-Hant";
                    break;
                case "zh-t-i0-pinyin":
                case "zh-t-i0-wubi-1986":
                    a[0] = "zh-Hans"
            }
            this.mg = this.HA(a[0]);
            a[1] && (this.JQ = this.HA(a[1]));
            "vkd" == this.type && this.uR()
        };
        d.toString = function() {
            return this.code
        };
        d.x1 = function() {
            return "im" == this.type ? "ja" == this.mg ? Wj("ja-Hira", this.mg) : Wj("en", this.mg) : null
        };
        d.f1 = function() {
            return this.IU() ? "rtl" : "ltr"
        };
        d.IU = function() {
            if ("im" == this.type) {
                var a = Tj[this.mg];
                return a ? a.jW() : !1
            }
            return C(Zj, this.code)
        };
        d.X2 = function() {
            return "im" == this.type ? /^(zh|yue)/.test(this.code) : !1
        };
        d.HA = function(a) {
            a = a.split("-");
            return 2 == a.length ? 2 == a[1].length ? a[0] + "-" + a[1].toUpperCase() : a[0] + "-" + a[1].charAt(0).toUpperCase() + a[1].slice(1) : a[0]
        };
        var gk, hk, ik, jk, kk, lk, mk;
        mk = lk = kk = jk = ik = hk = gk = !1;
        var nk = Sc();
        nk && (-1 != nk.indexOf("Firefox") ? gk = !0 : -1 != nk.indexOf("Camino") ? hk = !0 : -1 != nk.indexOf("iPhone") || -1 != nk.indexOf("iPod") ? ik = !0 : -1 != nk.indexOf("iPad") ? jk = !0 : -1 != nk.indexOf("Android") ? kk = !0 : -1 != nk.indexOf("Chrome") ? lk = !0 : -1 != nk.indexOf("Safari") && (mk = !0));
        var ok = gk,
            pk = hk,
            qk = ik,
            rk = jk,
            sk = kk,
            tk = lk,
            uk = mk;

        function vk(a) {
            return (a = a.exec(Sc())) ? a[1] : ""
        }(function() {
            if (ok) return vk(/Firefox\/([0-9.]+)/);
            if (K || Wc) return id;
            if (tk) return vk(/Chrome\/([0-9.]+)/);
            if (uk) return vk(/Version\/([0-9.]+)/);
            if (qk || rk) {
                var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Sc());
                if (a) return a[1] + "." + a[2]
            } else {
                if (sk) return (a = vk(/Android\s+([0-9.]+)/)) ? a : vk(/Version\/([0-9.]+)/);
                if (pk) return vk(/Camino\/([0-9.]+)/)
            }
            return ""
        })();

        function wk(a, b, c) {
            this.url = a;
            this.Uc = b;
            this.data = c ? c : null
        };

        function xk(a, b, c) {
            this.text = u(a) ? a : [a];
            this.Wq = !!b;
            this.jr = void 0 == c ? 0 : c;
            this.status = "i"
        }
        xk.prototype.Xw = function() {
            return this.text[0]
        };
        xk.prototype.z2 = function() {
            return "s" == this.status || "f" == this.status
        };

        function yk(a, b) {
            null != a && this.append.apply(this, arguments)
        }
        d = yk.prototype;
        d.Sd = "";
        d.M2 = function(a) {
            this.Sd = "" + a
        };
        d.append = function(a, b, c) {
            this.Sd += a;
            if (null != b)
                for (var e = 1; e < arguments.length; e++) this.Sd += arguments[e];
            return this
        };
        d.clear = function() {
            this.Sd = ""
        };
        d.r = function() {
            return this.Sd.length
        };
        d.toString = function() {
            return this.Sd
        };

        function zk(a, b, c, e, f) {
            xk.call(this, a, c);
            this.Ll = this.Ql = 1;
            this.uq = !!e;
            this.MV = this.LV = !1;
            this.Eq = "";
            this.Ay = !0;
            this.Xc = null;
            this.Vx = f ? La(f) : null;
            b instanceof Yj ? this.Xc = b : this.Xc = "zh" == b.lg || "zh-Hans" == b.lg ? bk("zh-t-i0-pinyin") : "zh-Hant" == b.lg ? bk("zh-hant-t-i0-und") : "ja" == b.lg ? bk("ja-t-ja-hira-i0-und") : bk(b.lg + "-t-i0-und")
        }
        z(zk, xk);
        d = zk.prototype;
        d.l3 = function() {
            return !1
        };
        d.C4 = function() {
            return this.Ay
        };
        d.q4 = function(a) {
            this.Ay = a
        };
        d.b4 = function(a) {
            this.Eq = a
        };
        d.R1 = function() {
            return this.Ll || 0
        };
        d.ry = function(a) {
            this.Ll = 0 < a ? a : 0
        };
        d.hm = function() {
            return this.Ql || 0
        };
        d.sy = function(a) {
            this.Ql = 0 < a ? a : 0
        };
        d.Xw = function() {
            return zk.f.Xw.call(this)
        };
        d.Y2 = function() {
            return [this.Xc.toString()]
        };
        d.z3 = function(a) {
            return this.Xc != a.Xc || this.uq || a.uq || this.Wq || a.Wq || !(5 > this.text.length + a.text.length && 0 == this.jr && 0 == a.jr) ? !1 : (C(this.text, a.text) || Ma(this.text, a.text), a.hm() > this.hm() && this.sy(a.hm()), !0)
        };
        d.O3 = function(a) {
            return Ga(a.text, function(b) {
                return C(this.text, b) && 0 == a.jr
            }, this) && this.Ql >= a.hm()
        };
        d.v1 = function() {
            return this.Xc.code
        };
        d.iz = function(a) {
            for (var b = new yk, c = 0; c < a.length; c++) {
                var e = a.charAt(c);
                switch (e) {
                    case ",":
                        b.append("%2C");
                        break;
                    case "|":
                        b.append("%7C");
                        break;
                    case "%":
                        b.append("%25");
                        break;
                    default:
                        b.append(e)
                }
            }
            return b.toString()
        };
        d.tR = function(a, b) {
            var c = "";
            switch (this.Xc.mg) {
                case "ja-Hira":
                case "ja":
                    c = ",||t:1"
            }
            var e = new yk;
            this.Eq && (e.append("|"), e.append(this.iz(this.Eq)), e.append(","));
            B(this.text, function(a, b) {
                e.append(this.iz(a));
                b != this.text.length - 1 && e.append(",")
            }, this);
            e.append(c);
            c = {
                text: e.toString(),
                itc: this.Xc.code,
                num: this.Ll,
                cp: "0",
                cs: "1",
                ie: "utf-8",
                oe: "utf-8",
                app: "jsapi"
            };
            a.fO && (c.sct = a.fO);
            db(c, b);
            var f = this.Vx ? {
                feedback: Ea(this.Vx, function(a) {
                    return a.toJSON()
                })
            } : null;
            return new wk("/request", c, f)
        };
        d.a2 = function(a) {
            var b = "";
            0 <= a && a < this.text.length && (b = this.text[a]);
            a = new zk(b, this.Xc, this.Wq, this.uq);
            a.ry(this.Ll);
            a.sy(this.Ql);
            return a
        };

        function Ak(a) {
            this.fU = a
        }
        Ak.prototype.XT = function(a, b) {
            var c = new zk(a, b);
            c.ry(15);
            c = c.tR({}, {});
            c.Uc.app = "youtubetv";
            return aj("//web.archive.org/web/20130711074931/https://inputtools.google.com" + c.url, c.Uc)
        };
        Ak.prototype.bS = function(a, b, c) {
            this.fU.jsonp(this.XT(a, b), null, c, null, "cb")
        };
        Ak.$inject = ["ytHttp"];

        function Bk(a, b) {
            this.pJ = a;
            this.qJ = b
        }
        Bk.prototype.load = function(a, b) {
            var c = new J;
            this.pJ.load({
                query: a.DV
            }, w(function(e) {
                c.i.push(e.i.J());
                this.qJ.load({
                    query: a.videoId
                }, w(function(a) {
                    c.i.push(a.i.J());
                    b && b(c)
                }, this))
            }, this))
        };
        Bk.$inject = ["playlistService", "relatedVideosService"];
        for (var Ck = "\u1100 \u1101 \u1100\u1109 \u1102 \u1102\u110c \u1102\u1112 \u1103 \u1105 \u1105\u1100 \u1105\u1106 \u1105\u1107 \u1105\u1109 \u1105\u1110 \u1105\u1111 \u1105\u1112 \u1106 \u1107 \u1107\u1109 \u1109 \u110a \u110b \u110c \u110e \u110f \u1110 \u1111 \u1112 \u1100\u1105".split(" "), Dk = {
                "\u1104": "\u1104",
                "\u1108": "\u1108",
                "\u110d": "\u110d"
            }, Ek = 0; Ek < Ck.length; ++Ek) Dk[Ck[Ek]] = String.fromCharCode(4520 + Ek);
        var Fk = {
                "\u1169\u1161": "\u116a",
                "\u1169\u1162": "\u116b",
                "\u1169\u1175": "\u116c",
                "\u116e\u1165": "\u116f",
                "\u116e\u1166": "\u1170",
                "\u116e\u1175": "\u1171",
                "\u1173\u1175": "\u1174"
            },
            Gk = /[\u11a8-\u11c3]/g,
            Hk = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g"),
            Ik = /[\uac00-\ud7af]/g,
            Jk = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g,
            Kk = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])", "g"),
            Lk = RegExp("([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))",
                "g"),
            Mk = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))", "g"),
            Nk = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))", "g");

        function Ok(a) {
            a = a.charCodeAt(0) - 44032;
            var b = 4449 + a % 588 / 28,
                c = 4519 + a % 28;
            return String.fromCharCode(4352 + a / 588) + String.fromCharCode(b) + (4519 == c ? "" : String.fromCharCode(c))
        }

        function Pk(a) {
            return a.replace(Gk, function(a) {
                return Ck[a.charCodeAt(0) - 4519 - 1]
            })
        }

        function Qk(a) {
            return a.replace(Hk, function(a) {
                return Fk[a]
            })
        }

        function Rk(a) {
            return a.replace(Ik, Ok)
        }

        function Sk(a) {
            var b = a.charCodeAt(0) - 4352,
                c = a.charCodeAt(1) - 4449;
            a = 3 <= a.length ? a.charCodeAt(2) - 4519 : 0;
            return String.fromCharCode(28 * (21 * b + c) + a + 44032)
        }

        function Tk(a) {
            return a.replace(Jk, Sk)
        }

        function Uk(a, b, c, e) {
            return b + Dk[c] + e
        }

        function Vk(a) {
            return Qk(Pk(a)).replace(Kk, Uk).replace(Kk, Uk).replace(Lk, Uk).replace(Mk, Uk).replace(Nk, Uk)
        };

        function Wk() {
            this.as = new Image
        }
        Wk.prototype.tS = function(a, b, c) {
            a.css("background-image", "");
            this.Iq(a, b, c)
        };
        Wk.prototype.Iq = function(a, b, c) {
            b && !c || a.css("background-image", "");
            c && a.toggleClass(c, !0);
            this.as.onload = function() {
                c && a.toggleClass(c, !1);
                a.css("background-image", "url(" + this.src + ")")
            };
            this.as.src = "";
            this.as.src = b
        };

        function ah(a, b, c) {
            var e, f = 1E3 / a;
            return function(a) {
                var k = new Date - (e || 0),
                    l = !0;
                c && (l = c.apply(this, arguments));
                l && (!isNaN(k) && k <= f ? a.stopPropagation() : (b.apply(this, arguments), e = new Date))
            }
        };

        function Xk(a, b, c, e) {
            ef.call(this, a, b);
            this.PA = c;
            this.aS = e
        }
        z(Xk, ef);
        Xk.prototype.get = function(a, b, c, e) {
            var f = this.aS.get(a);
            f && c ? c(this.PA.Ni(f)) : ef.prototype.get.call(this, a, b, c, e)
        };
        Xk.prototype.transformResponse = function(a) {
            a = ef.prototype.transformResponse.call(this, a);
            return this.PA.Ni(a)
        };
        Xk.$inject = ["xhrBackend", "jsonpBackend", "locale", "$templateCache", "$injector"];

        function Yk(a, b, c) {
            this.name = "tile";
            Q.call(this, a, b, c);
            this.className = "tile";
            this.scope.$on("keyup", w(this.aV, this))
        }
        z(Yk, Q);
        Yk.prototype.aa = function() {
            this.element.addClass(this.className)
        };
        Yk.prototype.aV = function(a, b, c, e) {
            13 === b && (a.stopPropagation(), this.data && (this.isActive || "mouseup" === e.type || "touchend" === e.type) && (this.scope.$emit("play-sound", "cross-enter"), this.scope.$emit(this.data.bu, this.data)))
        };
        Yk.$inject = ["$scope", "$element", "$attrs"];

        function Zk(a, b, c, e, f, g, k) {
            Yk.call(this, a, b, c);
            this.Cj = f;
            this.WC = g;
            this.wV = k;
            this.Ce = {};
            this.bn = "actiontile";
            this.className = "action-tile";
            a = H.b;
            this.Ce[a + "/tiles/logout_tile.html"] = this.VF;
            this.Ce[a + "/tiles/recent_search_tile.html"] = this.WF;
            this.Ce[a + "/tiles/remote_pairing_tile.html"] = this.XF;
            this.Ce[a + "/tiles/remote_reset_tile.html"] = this.YF;
            this.Ce[a + "/tiles/search_tile.html"] = this.ZF;
            this.Ce[a + "/tiles/togglable_tile.html"] = this.$F
        }
        z(Zk, Yk);
        d = Zk.prototype;
        d.setData = function(a) {
            Zk.f.setData.call(this, a);
            this.aa()
        };
        d.aa = function() {
            Zk.f.aa.call(this);
            this.u(this.element[0], this.data);
            this.data && this.WC.get(this.data.templateUrl, {}, w(this.uG, this))
        };
        d.uG = function(a) {
            this.gb(this.element[0], a);
            (a = this.Ce[this.data.templateUrl]) && a.call(this)
        };
        d.$F = function() {
            var a = this.data.ya,
                b = a.Rs(),
                c = this.Cj(a.title)(this.scope),
                a = this.Cj(a.description)(this.scope),
                e = this.JF(".status");
            this.u(e[0], b);
            this.u(e[1], !b);
            this.s(this.h(".title"), c);
            this.s(this.h(".description"), a)
        };
        d.VF = function() {
            this.s(this.h(".title"), this.data.ya.displayName);
            this.s(this.h(".platform-user-name"), this.data.ya.platformUserName);
            this.h(".platform-user-icon").style.backgroundImage = "url(" + this.data.ya.platformUserIcon + ")";
            this.h(".sign-out-user-icon").style.backgroundImage = "url(" + this.data.ya.imageUrl + ")"
        };
        d.WF = function() {
            var a = this.data.ya.video;
            if (a) {
                this.s(this.h(".title"), a.serviceQuery.toLowerCase());
                var b = this.data.ya.totalResults;
                b && 0 < b && (b = this.Cj("[[{{totalResults | formatNumber}} results|Displays how many different searches a user has performed.]]")({
                    totalResults: b
                }), this.s(this.h(".overlay"), b));
                this.h(".video-thumb").style.backgroundImage = "url(" + a.imageUrl + ")";
                this.element.addClass("video-tile");
                this.element.addClass("recent-search-tile");
                this.element.removeClass("action-tile")
            }
        };
        d.XF = function() {
            this.u(this.h(".title"), 1 > this.data.ya.bb);
            this.u(this.h(".long-title"), 1 <= this.data.ya.bb)
        };
        d.YF = function() {
            this.gb(this.h(".remote-count"), this.data.ya.bb)
        };
        d.ZF = function() {
            var a = this.data.ya.resultCount,
                a = this.Cj("[[{{resultCount | formatNumber}} recent search(es)|Displays how many search a user has performed recently.]]")({
                    resultCount: a
                });
            this.s(this.h(".search-tile-subtitle"), a)
        };
        Zk.$inject = "$scope $element $attrs $compile $interpolate templateClient environmentModel".split(" ");

        function $k(a, b, c, e, f, g) {
            this.name = "advertisementCallout";
            P.call(this, a, b, c);
            this.yV = e;
            this.PG = f;
            this.FF = g;
            this.IF = this.h(".time-left");
            this.PG.k("isPlayingAd:changed", w(this.QG, this))
        }
        z($k, P);
        $k.prototype.QG = function(a) {
            this.u(this.element[0], a);
            a ? this.Zw = this.FF.k("timeLeft:changed", w(this.HJ, this)) : (this.Zw(), this.Zw = null)
        };
        $k.prototype.HJ = function(a) {
            this.s(this.IF, String(a))
        };
        $k.$inject = "$scope $element $attrs $interpolate playerService progressModel".split(" ");

        function al(a, b, c, e, f, g, k, l, p, q, r, t, G, oc, Og, tl, Tl, Ul, Vl, Wl, Xl, Yl, Zl, $l, am, bm, cm, dm, em, fm, gm, hm, im, jm) {
            this.name = "application";
            P.call(this, a, b, c);
            this.hs = tl;
            this.Ud = Og;
            this.Pa = r;
            this.GB = e;
            this.fs = f;
            this.w = g;
            this.g = k;
            this.Im = l;
            this.ga = G;
            this.Z = Yl;
            this.dialogModel = null;
            this.Ag = Zl;
            this.KB = $l;
            this.watchModel = Ul;
            this.Hm = p;
            this.G = q;
            this.HB = Tl;
            this.ws = t;
            this.gs = oc;
            this.MB = Vl;
            this.Rm = Wl;
            this.Se = Xl;
            this.NB = am;
            this.LB = bm;
            this.ls = cm;
            this.OB = dm;
            this.IB = em;
            this.Ve = fm;
            this.is = gm;
            this.UB = hm;
            this.VB = im;
            this.WB = jm;
            this.ys = new Wk;
            this.legendTemplatePath = H.b + "/legend.html";
            this.Pm = this.XB();
            this.Xe = this.cV = null;
            this.bV = 0;
            this.us = this.ns = !1;
            this.searchQuery = this.zs = "";
            this.JB = this.h("#spinner-container");
            this.xs = -1;
            this.yg = null;
            this.YB()
        }
        z(al, P);
        d = al.prototype;
        d.YB = function() {
            this.iP();
            this.Ag.load();
            var a = this.Im[0].getElementById("loader");
            Jd(a);
            this.bP();
            this.Xf();
            this.le()
        };
        d.Ts = function() {
            var a = this.Z.pv;
            if (!a || this.Z.Rn) this.Z.load(w(function() {
                this.Bg();
                a || this.g.requestAnimationFrame(w(function() {
                    this.MB.bh("start_browse", "b_rn")
                }, this))
            }, this)), this.Z.pv = !0, this.Z.Rn = !1
        };
        d.XB = function() {
            return {
                browse: {
                    search: {
                        down: this.je,
                        up: this.$i,
                        enter: this.je,
                        esc: this.rd
                    },
                    none: {
                        esc: this.yj
                    }
                },
                watch: {
                    browse: {
                        esc: this.XL
                    },
                    search: {
                        down: this.je,
                        up: this.$i,
                        enter: this.je,
                        esc: this.WL
                    },
                    title: {
                        down: this.Wl,
                        esc: this.rd,
                        enter: this.Vb,
                        fastforward: this.Vb,
                        rewind: this.Vb
                    },
                    transport: {
                        up: this.UL,
                        down: this.Wl,
                        esc: this.rd
                    },
                    "post-play": {
                        esc: this.SL
                    },
                    none: {
                        up: this.Vb,
                        down: this.Wl,
                        esc: this.TL,
                        enter: this.Vb,
                        pause: this.Vb,
                        fastforward: this.Vb,
                        rewind: this.Vb,
                        mousemove: this.Vb
                    }
                },
                dialog: {
                    none: {
                        esc: this.Wl
                    }
                }
            }
        };
        d.iP = function() {
            "loading" == this.Im[0].readyState ? this.Im.ready(w(this.eu, this)) : this.Se.setTimeout(w(this.eu, this), 1);
            this.ga.k("state:changed", w(this.NE, this));
            this.scope.$on("active-item-changed", w(this.HE, this));
            this.scope.$on("$routeChangeSuccess", w(this.IE, this));
            this.scope.$on("keydown", w(this.JE, this));
            this.scope.$on("keyup", w(this.KE, this));
            this.scope.$on("mousemove", w(this.LE, this));
            this.scope.$on("loaded", w(this.FE, this));
            this.scope.$on("row-changed", w(this.EE, this));
            this.scope.$on("item-changed",
                w(this.vt, this));
            this.scope.$on("toggle-loading", w(this.GE, this));
            this.scope.$on("row-loaded", w(this.OE, this));
            this.scope.$on("next-video", w(function() {
                this.wf()
            }, this));
            this.scope.$on("previous-video", w(this.hE, this));
            this.scope.$on("native-osk-status", w(this.gE, this));
            this.scope.$on("request-login", w(this.Mt, this));
            this.scope.$on("request-logout", w(this.rE, this));
            this.scope.$on("request-playback", w(this.hn, this));
            this.scope.$on("request-view-credits", w(this.AE, this));
            this.scope.$on("request-view-kenko",
                w(this.BE, this));
            this.scope.$on("request-view-shiyojo", w(this.CE, this));
            this.scope.$on("request-view-tos", w(this.DE, this));
            this.scope.$on("request-pairing", w(this.vE, this));
            this.scope.$on("request-remote-reset", w(this.wE, this));
            this.scope.$on("request-device-retention", w(this.mE, this));
            this.scope.$on("request-search", w(this.xE, this));
            this.scope.$on("request-clear-searches", w(this.iE, this));
            this.scope.$on("request-flag-options", w(this.co, this));
            this.scope.$on("request-flag-video", w(this.pE, this));
            this.scope.$on("request-flag-claim", w(this.oE, this));
            this.scope.$on("request-playback-authorization", w(this.tE, this));
            this.scope.$on("request-player-error", w(this.uE, this));
            this.scope.$on("request-cc-options", w(this.kE, this));
            this.scope.$on("request-dialog", w(this.nE, this));
            this.scope.$on("request-toggle-subscription", w(this.yE, this));
            this.scope.$on("request-like-video", w(this.qE, this));
            this.scope.$on("request-debug-info", w(this.lE, this));
            this.scope.$on("request-toggle-video-info", w(this.zE, this));
            this.scope.$on("request-close-dialog", w(this.jE, this));
            this.scope.$on("focus-search", w(this.$i, this));
            this.scope.$on("mdx-pairing-topic", w(this.ME, this));
            this.GB.$on("network-failure", w(this.sE, this));
            this.Hm.k("state:changed", w(this.fE, this));
            this.scope.$on("exit-application", w(this.yj, this))
        };
        d.eu = function() {
            if (!this.Pa.state())
                if (0 < this.g.location.href.indexOf("pairingCode=")) {
                    var a = this.G.Oa ? n : w(function() {
                        this.Ts();
                        this.ud()
                    }, this);
                    this.gn(a)
                } else this.ud()
        };
        d.NE = function(a) {
            switch (a) {
                case 1:
                    this.lS();
                    break;
                case 0:
                    this.fS(), this.Xf()
            }
        };
        d.mw = function() {
            return this.cb() ? this.Ag : this.Ha() ? this.watchModel : this.Z
        };
        d.GE = function(a, b) {
            this.w.cancel(this.KK);
            var c = w(function(a) {
                this.u(this.JB, a);
                this.children.watch.LK(a)
            }, this);
            b ? this.KK = this.w(function() {
                c(!0)
            }, 40, !1) : c(!1)
        };
        d.lS = function() {
            this.nn() ? this.$m() : (this.w(w(function() {
                var a = this.NB.duration;
                0 < a && (a = Math.min(a / 4, 10), this.ga.Ph("add-to-history", a, w(this.BK, this)))
            }, this), 500, !1), this.ga.Ph("clear-background", 0.01, w(this.CK, this), 2))
        };
        d.BK = function() {
            this.watchModel.IK();
            !this.ns && 0 < this.HB.r() && (this.Z.DK(this.watchModel.Ko()), this.ns = !0)
        };
        d.FE = function(a, b) {
            var c = this.Ag.vd()[0];
            c.model = b ? b.clone() : new J;
            c.model.Ja = "icon-search";
            c.xa(0);
            this.cb() && this.scope.$emit("active-item-changed", this.Ag.vd()[0].af());
            this.Se.setTimeout(w(this.Nb, this), 0)
        };
        d.OE = function(a, b) {
            (this.Zg() || this.cb()) && this.scope.$emit("active-item-changed", b.af())
        };
        d.HE = function() {
            this.UB.pg()
        };
        d.r3 = function(a) {
            return "UU" === a.eb
        };
        d.UK = function(a) {
            this.Se.clearTimeout(this.xs);
            this.xs = this.Se.setTimeout(w(function() {
                this.OB.Qa(a, w(this.it, this))
            }, this), 500)
        };
        d.EE = function(a, b, c) {
            var e = this.mw().vd()[b];
            if (this.G.js && this.nn() && e) {
                var f = e.model.serviceQuery;
                e.service.EK && f ? this.UK(f) : (this.yg = null, this.Xf())
            }
            this.vt(a, b, c)
        };
        d.vt = function(a, b, c) {
            (this.Zg() || this.cb()) && (a = this.mw().vd()[b].ha(c)) && this.scope.$emit("active-item-changed", a)
        };
        d.Fb = function(a) {
            var b = this.Gc || "none";
            this.Pm[this.yb] && this.Pm[this.yb][b] && ("esc" === a && this.scope.$emit("play-sound", "cross-back"), b = this.Pm[this.yb][b][a]) && (b.call(this, a), this.Nb())
        };
        d.$i = function() {
            this.activeChildName = "search";
            this.le();
            this.B(this.children.search)
        };
        d.je = function() {
            this.activeChildName = "browse";
            this.le()
        };
        d.YC = function() {
            this.activeChildName = "watch";
            this.le()
        };
        d.TL = function() {
            this.G.isChromelessContext ? this.yj() : this.aO()
        };
        d.SL = function() {
            this.ud();
            this.sS()
        };
        d.aO = function() {
            this.scope.$emit("mdxClearVideo");
            this.rd()
        };
        d.rd = function() {
            var a = this.ws.sP();
            a && a.url ? this.Pa.url(a.url) : this.ud()
        };
        d.Rj = function() {
            this.Pa.mode("search")
        };
        d.ud = function(a) {
            this.Pa.state("browse", {});
            this.Pa.mode(a)
        };
        d.Wl = function() {
            this.Pa.mode("browse")
        };
        d.Vb = function(a) {
            if ("mousemove" !== a || this.Pa.ml("transport")) this.w.cancel(this.aL), this.aL = this.w(w(function() {
                this.Ha() && this.Pa.mode("transport")
            }, this), 250, !1)
        };
        d.mx = function() {
            this.w.cancel(this.tL);
            this.tL = this.w(w(function() {
                this.Ha() && this.Pa.mode("title")
            }, this), 250, !1)
        };
        d.tM = function() {
            this.Pa.mode("post-play");
            this.WB.VQ()
        };
        d.fS = function() {
            !this.Ha() || (this.Zg() || this.cb()) || this.XN()
        };
        d.XN = function() {
            !this.G.isChromelessContext && this.G.Ac(nb) ? this.tM() : this.wf(!0)
        };
        d.WL = function() {
            0 === this.ga.state ? this.wf() : this.rd()
        };
        d.XL = function(a) {
            0 === this.ga.state ? this.wf(a) : this.Vb()
        };
        d.hE = function() {
            var a = this.watchModel.oR();
            a && (this.Xf(), this.to(a), this.mx())
        };
        d.wf = function(a) {
            (a = this.watchModel.next(a)) ? (this.Xf(), this.to(a), this.mx()) : (this.G.Oa ? this.gn() : this.G.isChromelessContext && this.yj(), this.ud())
        };
        d.UL = function() {
            this.Pa.mode(null)
        };
        d.JE = function(a, b) {
            switch (b) {
                case 40:
                    this.Fb("down");
                    break;
                case 38:
                    this.Fb("up");
                    break;
                case 37:
                    this.Fb("left");
                    break;
                case 39:
                    this.Fb("right");
                    break;
                case 19:
                    this.Fb("pause");
                    break;
                case 228:
                    this.Fb("fastforward");
                    break;
                case 227:
                    this.Fb("rewind");
                    break;
                case 8:
                case 27:
                    this.jx() || (a.stopPropagation(), a.preventDefault())
            }
        };
        d.KE = function(a, b, c) {
            switch (b) {
                case 170:
                case 83:
                    this.cb() || this.Rj();
                    break;
                case 172:
                case 71:
                    this.ud();
                    break;
                case 8:
                case 27:
                    this.jx() || (a.stopPropagation(), a.preventDefault());
                    this.Fb("esc");
                    break;
                case 13:
                    a.stopPropagation();
                    this.bK(c) || this.Fb("enter");
                    break;
                case 178:
                    this.Ha() && this.ud()
            }
            this.ga.eK()
        };
        d.bK = function(a) {
            return !(!a || !Xd(a, w(function(a) {
                a = (a.className || "").split(" ");
                return C(a, "more") ? (this.Fb("down"), !0) : C(a, "back") || C(a, "reversed-back") ? (this.Fb("esc"), !0) : C(a, "search") ? (this.Rj(), !0) : C(a, "home") ? (this.ud(), !0) : C(a, "delete") ? (this.KB.fl(), !0) : !1
            }, this)))
        };
        d.LE = function() {
            this.Fb("mousemove")
        };
        d.Bl = function() {
            this.Z.lQ()
        };
        d.to = function(a) {
            this.Pa.state("watch", a ? {
                v: a
            } : {});
            this.Bg()
        };
        d.IE = function(a, b) {
            if (this.fs.current && (b = b || this.fs.current) && b.$$route && b.$$route.state) {
                var c = this.Gc,
                    e = this.yb;
                this.Gc = b.params.mode;
                this.yb = b.$$route.state();
                b.scope = this.children[this.yb].scope;
                if (this.Pa.state()) {
                    this.XC();
                    var f = !0;
                    this.cb() ? this.$i() : this.Lj() && this.dialogModel && this.dialogModel.Qs ? this.activeChildName = "dialog" : this.Zg() ? this.G.isChromelessContext ? (this.je(), this.gn(), this.activeChildName = "dialog") : (this.Ts(), this.je()) : (this.YC(), this.Ig() || (f = !1));
                    if (this.nn()) this.$m(),
                        this.cb() || (this.searchQuery = "", this.watchModel.Us());
                    else if (this.Ha())
                        if ("browse" !== this.Gc && ("watch" !== e || "browse" === c)) this.watchModel.currentVideo && this.scope.$emit("active-item-changed", this.watchModel.currentVideo);
                        else if ("browse" === this.Gc) {
                        var g = this.watchModel.af();
                        g && this.scope.$emit("active-item-changed", g)
                    }
                    this.ZC(e, c) && this.Bg();
                    this.le();
                    this.kt() || e == this.yb || this.it(this.yg);
                    this.u(this.h("#browse"), f)
                }
            }
        };
        d.ZC = function(a, b) {
            return a !== this.yb || this.KQ(b) || this.Ig()
        };
        d.KQ = function(a) {
            return this.cb() || "search" === a
        };
        d.XC = function() {
            var a = this.G.initPlaylistId,
                b = this.G.initSearchQuery,
                c = this.G.initTime,
                e = this.G.initVideoId;
            this.G.initErrorCode ? this.scope.$emit("request-dialog", "[[There was an error retrieving the requested video.|Error displayed when a video cannot be loaded.]]") : e && this.Ha() ? this.watchModel.currentVideo || (this.G.initReversePairingCode ? this.Ud.kn(n, [e], ["fling"], null, 0, this.G.initTime || 0, !0, !0) : this.hs.Qa(e, w(function(a) {
                if (a && a.i && a.i.ha(0)) {
                    var b = a.i.ha(0),
                        e = Ac(this.hs, b.title, b.channel.imageUrl);
                    a.title = b.title;
                    e.model = a;
                    e.model.Ja = b.channel.imageUrl;
                    this.hn(null, b, e, c || 0)
                } else this.rd(), this.scope.$emit("request-dialog", "[[There was an error retrieving the requested video.|Error displayed when a video cannot be loaded.]]")
            }, this))) : a && this.Ha() ? this.watchModel.currentVideo || this.gs.Qa(a, w(function(a) {
                var b = Ac(this.gs, a.title, a.serviceQuery);
                b.model = a;
                this.hn(null, b.ha(0), b, c || 0)
            }, this)) : b && this.cb() && (this.searchQuery = decodeURI(b).toUpperCase(), this.Rj())
        };
        d.$m = function() {
            this.ga.nk();
            this.watchModel.HP()
        };
        d.le = function() {
            var a = [this.G.ts, (this.yb || "no") + "-state", (this.Gc || "no") + "-mode", this.activeChildName + "-active"];
            this.us && a.push("nativeosk");
            var a = a.join(" "),
                b = this.element[0];
            b.className != a && (b.className = a)
        };
        d.bP = function() {
            this.zs = "bg" + Math.floor(56 * Math.random() + 1) + ".jpg"
        };
        d.Xf = function(a) {
            if (this.G.supportsBackgrounds && !this.kt()) {
                a = a || this.yg && this.yg.dx || H.An + "/" + this.zs;
                var b = this.element.css("background-image");
                (!b || 0 > b.indexOf(a)) && this.ys.Iq(this.element, a)
            }
        };
        d.CK = function() {
            this.element.css("background-image") && this.ys.Iq(this.element, "")
        };
        d.it = function(a) {
            this.yg = a;
            this.Xf()
        };
        d.sS = function() {
            this.ws.Ny(this.Pa.Op())
        };
        d.jx = function() {
            return this.Zg() && !this.cb() && !this.Lj() && !this.Ha()
        };
        d.Zg = function() {
            return "browse" === this.Gc || "browse" === this.yb
        };
        d.cb = function() {
            return "search" === this.Gc
        };
        d.Ha = function() {
            return "watch" === this.yb
        };
        d.Ig = function() {
            return "post-play" == this.Gc && this.Ha()
        };
        d.Lj = function() {
            return "dialog" === this.activeChildName
        };
        d.kt = function() {
            return this.Lj() && -1 != this.dialogModel.className.indexOf("no-app-background")
        };
        d.nn = function() {
            return "browse" === this.yb
        };
        d.M = function(a, b) {
            this.activeChildName = a ? "dialog" : this.yb;
            this.dialogModel = b ? b : null;
            this.le();
            this.Nb();
            this.u(this.h("#legend"), !a)
        };
        d.No = function(a, b) {
            var c = new qc(a, b);
            this.M(!0, c)
        };
        d.wh = function(a, b, c, e, f, g) {
            a = new sc(a, b, c, e, f, g);
            this.M(!0, a)
        };
        d.c1 = function() {
            return this.Lj() ? this.dialogModel : null
        };
        d.gn = function(a) {
            this.M(!0, new Vb(a || n))
        };
        d.gE = function(a, b) {
            this.us = b;
            this.le()
        };
        d.Mt = function() {
            this.M(!0, new ac(w(this.dl, this)))
        };
        d.tE = function(a, b) {
            this.G.Oa ? this.wh("", H.b + "/dialogs/eureka_authorization_info.html", "status-dialog") : (this.M(!0, new ac(w(this.dF, this), b, w(this.cF, this))), this.G.loopRows && this.Ut())
        };
        d.qE = function(a, b, c) {
            a = w(this.PT, this, b, c);
            this.bB(a, "[[Please sign in to like or dislike...|Dialog title asking a user to sign in before they can like or dislike this video.]]")
        };
        d.yE = function(a, b) {
            this.bB(w(this.TT, this, b), "[[Please sign in to subscribe...|Dialog title asking a user to sign in before they can subscribe.]]")
        };
        d.TT = function(a) {
            if (this.watchModel.currentVideo.channel.Kb) this.fM(a);
            else {
                var b = w(this.dM, this);
                this.IB.send({
                    channelName: a.ua
                }, w(function() {
                    this.Ve.Bq("subscription", a.ua, a);
                    this.dl()
                }, this), b)
            }
        };
        d.fM = function(a) {
            var b = this.ga.isPlaying;
            b && this.ga.pause();
            this.M(!0, new ec(a.ke, null, w(function() {
                b && this.ga.bd()
            }, this)))
        };
        d.PT = function(a, b) {
            this.VB.send({
                likeValue: b,
                videoId: a
            });
            this.Ve.Bq("video_like_value", a, b)
        };
        d.bB = function(a, b) {
            this.Hm.Cc(w(function(c) {
                if (c) a();
                else {
                    var e = !1;
                    this.ga.isPlaying && (e = !0, this.ga.pause());
                    var f = w(function() {
                        e && this.ga.bd()
                    }, this);
                    this.M(!0, new ac(w(function() {
                        a();
                        f();
                        this.dl()
                    }, this), b, f))
                }
            }, this))
        };
        d.dF = function() {
            this.dl();
            this.ga.Ih();
            this.ga.Ox()
        };
        d.cF = function() {
            this.M(!1);
            this.rd()
        };
        d.dl = function() {
            this.M(!1);
            this.Ud.kv("default");
            var a;
            this.Z.lh() && (a = this.Z.lh().model.title);
            this.Z.load(w(function(b) {
                var c = this.Ve.xG("subscription");
                this.Z.Rn = c.some(function(a) {
                    return !this.Ve.get("subscription", a).id
                }, this);
                this.Ud.uo(b);
                b = a ? this.Z.wG(a) : -1;
                this.Z.Da = -1 != b ? b : this.Z.r() - 1;
                this.Bg()
            }, this))
        };
        d.rE = function(a, b) {
            var c = b.ya;
            this.G.Uv(c);
            this.M(!0, new dc(c, w(this.uK, this)))
        };
        d.uK = function() {
            this.M(!1);
            this.Hm.Dv();
            this.Ud.uo("");
            this.Ud.kv("");
            this.Z.load(w(function() {
                this.Z.Da = this.Z.r() - 1;
                this.Bg()
            }, this));
            this.Ve.np("subscription");
            this.Ve.np("video_like_value")
        };
        d.hn = function(a, b, c, e, f) {
            this.cb() ? (this.Z.gG(c), this.G.Ac(pb) || (c = Gc(this.is, "[[Now Playing|Title for currently playing playlists.]]", H.An + "/icon-related.png", b.videoId), c.Hn(b))) : this.Ig() && (c = "RV" === b.eb ? Ec(this.is, "[[Related Videos|Title for playlist that shows videos related to the one currently is playing.]]", H.An + "/icon-related.png", b.videoId) : this.watchModel.Uj());
            this.M(!1);
            a = this.watchModel.Hg(b, c, e, f);
            this.scope.$emit("mdxPlaylistChange", a);
            this.to(b.videoId);
            this.Vb()
        };
        d.Bg = function() {
            this.cb() ? this.Kl("browse").setData(this.Ag) : this.Ig() ? (this.ls.load(), this.Kl("browse").setData(this.ls), this.je()) : this.Ha() ? this.Kl("browse").setData(this.watchModel) : this.Kl("browse").setData(this.Z)
        };
        d.vE = function() {
            this.M(!0, new gc)
        };
        d.wE = function() {
            this.M(!0, new pc(this.Ud, w(this.eO, this)))
        };
        d.eO = function() {
            this.Ud.Oo();
            this.M(!1);
            this.Bl()
        };
        d.mE = function() {
            this.Rm.HQ(!this.Rm.ah);
            this.Rm.DQ();
            this.Bl()
        };
        d.xE = function(a, b) {
            this.searchQuery = b && b.ya ? b.ya.query : null;
            this.Rj()
        };
        d.iE = function() {
            this.Z.jQ()
        };
        d.lE = function() {
            this.M(!0, new Xb(this.G))
        };
        d.zE = function() {
            this.G.isVideoInfoVisible = !this.G.isVideoInfoVisible;
            this.Bl()
        };
        d.co = function(a) {
            this.M(!0, new Zb);
            a && a.stopPropagation()
        };
        d.kE = function(a) {
            var b = this.ga.isPlaying,
                c = this.ga.$n();
            this.M(!0, new Wb(null, w(function() {
                $a(c) ? this.ga.Uk() : this.ga.op(c);
                b && this.ga.bd()
            }, this)));
            a && a.stopPropagation()
        };
        d.pE = function(a) {
            this.M(!0, new $b(this.watchModel.currentVideo, w(this.co, this)));
            a.stopPropagation()
        };
        d.oE = function(a) {
            this.M(!0, new Yb(this.watchModel.currentVideo, w(this.co, this)));
            a.stopPropagation()
        };
        d.ME = function() {
            this.Bl()
        };
        d.nE = function(a, b) {
            var c = new F;
            c.title = b;
            this.M(!0, c);
            a.stopPropagation()
        };
        d.uE = function(a, b) {
            this.Ha() && (this.G.Oa ? this.zJ() : this.M(!0, new fc(b, w(this.xJ, this), w(this.wJ, this))));
            a.stopPropagation();
            this.G.loopRows && this.Ut()
        };
        d.zJ = function() {
            this.wh("", H.b + "/dialogs/eureka_player_error_info.html", "status-dialog")
        };
        d.xJ = function() {
            this.M(!1);
            this.wf()
        };
        d.wJ = function() {
            this.M(!1);
            this.rd()
        };
        d.Ut = function() {
            this.Se.clearTimeout(this.WM);
            this.WM = this.Se.setTimeout(w(function() {
                this.M(!1);
                this.wf(!0)
            }, this), 5E3)
        };
        d.AE = function() {
            this.No("[[Credits|Dialog title that shows credit information, giving credit to all open-source software used in building this product.]]", H.b + "/dialogs/" + (this.G.Td ? "licenses.html" : "bamboo_licenses.html"))
        };
        d.BE = function() {
            this.No("\u5065\u5eb7\u306e\u305f\u3081\u306e\u3054\u6ce8\u610f", H.b + "/dialogs/kenko_warning.html")
        };
        d.CE = function() {
            this.No("\u4f7f\u7528\u4e0a\u306e\u3054\u6ce8\u610f", H.b + "/dialogs/shiyojo_warning.html")
        };
        d.DE = function() {
            this.wh("[[Terms of Service and Privacy Policy|Dialog title that shows links to terms of use and privacy documents on youtube.com.]]", H.b + "/dialogs/tos_info.html")
        };
        d.fE = function(a, b) {
            !a && b && this.M(!0, new rc(w(this.Mt, this)))
        };
        d.jE = function() {
            this.M(!1)
        };
        d.sE = function() {
            this.$m();
            this.wh("[[A network error has occurred|Dialog title that tells the user that a network error has occurred]]", H.b + "/dialogs/network_error_info.html")
        };
        d.dM = function() {
            this.wh("[[A subscription error has occurred please try again later.|Text message displayed when an error occurs while user tries to subscribe to a channel.]]")
        };
        d.yj = function() {
            this.G.We && this.g.NetCastBack ? this.g.NetCastBack() : this.G.Yd ? this.LB.WG() : this.G.Lm && this.g.close && this.g.close()
        };
        al.$inject = "$scope $element $attrs $rootScope $route $timeout $window $document authService environmentModel locationService navigationService playerService playlistService remoteService videoPlaybackInfoService watchHistoryModel watchModel csiService privateDataService timeService browseModel searchModel searchQueryModel progressModel samsungService postPlayModel brandingService subscribeService cacheService relatedVideosService bambooService likeService postPlayReportingService".split(" ");

        function bl(a, b, c) {
            if (c.ytBackgroundImage) {
                var e = new Image;
                a.$watch(c.ytBackgroundImage, function(a) {
                    b.css("background-image", "");
                    a && (e.onload = function() {
                        e.src = "";
                        b.css("background-image", "url(" + a + ")")
                    }, e.src = a)
                })
            }
        }
        bl.$inject = ["$scope", "$element", "$attrs", "angularHelper"];

        function cl(a, b, c, e, f, g) {
            Q.call(this, a, b, c);
            this.$b = e;
            this.sp = f;
            this.cR = g
        }
        z(cl, Q);
        d = cl.prototype;
        d.o = function() {
            Q.prototype.o.call(this);
            var a = this.$b.Op();
            this.rq() && this.sp.yK(a);
            this.sq() && this.Cw(a)
        };
        d.N = function() {
            Q.prototype.N.call(this);
            this.rb()
        };
        d.rq = function() {
            return !0
        };
        d.sq = function() {
            return !0
        };
        d.Cw = function(a) {
            a = a || this.$b.Op();
            this.sp.Ny(a)
        };
        d.rb = function(a) {
            this.cR.message = a || ""
        };

        function dl(a, b, c, e, f, g, k, l, p, q, r, t) {
            this.name = "browse";
            cl.call(this, a, b, c, g, k, l);
            this.rt = f;
            this.w = p;
            this.g = e;
            this.Vu = q;
            this.Bn = r;
            this.VC = t;
            this.uV = "nav-arrows-enabled";
            this.Da = 0;
            this.Dn = !0;
            this.Bn.supportsPointer && this.scope.$on("keyup", w(this.PF, this));
            this.scope.$on("button-click", w(this.OF, this));
            this.scope.$on("mousemove", w(this.QF, this));
            this.scope.$on("request-playback", w(this.RF, this));
            this.fv(100, this.NF);
            this.fv(8, this.LF);
            this.element[0].addEventListener("scroll", w(function() {
                this.element[0].scrollTop =
                    0;
                this.element[0].scrollLeft = 0
            }, this))
        }
        z(dl, cl);
        d = dl.prototype;
        d.o = function() {
            "browse" != this.$b.state() || this.$b.mode() || this.sp.uJ();
            cl.prototype.o.call(this);
            this.B(this.Wg());
            this.data && this.setData(this.data)
        };
        d.rq = function() {
            return "browse" == this.$b.state()
        };
        d.sq = function() {
            return "search" != this.$b.mode()
        };
        d.setData = function(a) {
            this.data = a;
            (a = this.vp()) && a.setData(this.data.vd());
            this.ey(this.data.Da);
            (a = this.Wg()) && a.setData(this.Pb())
        };
        d.V3 = function(a) {
            this.data && (this.data.Da = a)
        };
        d.PF = function(a, b, c) {
            switch (b) {
                case 38:
                case 40:
                case 37:
                case 39:
                    a.stopPropagation();
                    this.Ty();
                    break;
                case 13:
                    this.RT(c)
            }
        };
        d.OF = function(a, b) {
            for (var c = 0, e = this.data.rows.length, f; c < e; c++)
                if (f = this.data.rows[c], f.equals(b)) {
                    c -= this.data.Da;
                    0 != c && this.Hi(c);
                    break
                }
        };
        d.QF = function() {
            this.KA()
        };
        d.fv = function(a, b) {
            this.scope.$on("keydown", ah(a, w(b, this)))
        };
        d.LF = function(a, b) {
            switch (b) {
                case 37:
                    this.ym(-1);
                    break;
                case 39:
                    this.ym(1)
            }
        };
        d.ym = function(a) {
            var b = this.Pb(),
                c = this.Mn(),
                e = c + a,
                f = b.r() - 1;
            0 <= e && e <= f ? (this.scope.$emit("play-sound", "same-toggle"), this.nL(c + a, a), b.ol(a) && this.Vv()) : 0 > e && this.scope.$emit("play-sound", "same-heavy")
        };
        d.NF = function(a, b) {
            switch (b) {
                case 38:
                    this.Hi(-1);
                    break;
                case 40:
                    this.Hi(1)
            }
        };
        d.Hi = function(a) {
            this.Kt(!0);
            this.scope.$emit("play-sound", "same-light");
            this.ey(this.data.Da, a)
        };
        d.ey = function(a, b) {
            if (this.data) {
                b = b || 0;
                var c = this.data.r(),
                    e = (a + b) % c || 0;
                0 > e && (e += c);
                this.vp().xa(e);
                e != this.data.Da && (this.Wg().element.toggleClass("disabled", !0), 0 !== this.data.Da && this.rJ(), this.Jc(this.Wg()), this.data.Da = e);
                this.Vv()
            }
        };
        d.G4 = function() {
            var a = 100 / this.data.vd().length;
            this.Vu.VL = a;
            this.Vu.percentageScrolled = a * this.data.Da
        };
        d.T1 = function(a) {
            a = this.data.Da + a;
            var b = this.data.length;
            0 > a ? a += b : a >= b && (a %= b);
            return this.data.vd()[a]
        };
        d.e3 = function(a) {
            return this.isActive && this.Pb() === a
        };
        d.Pb = function() {
            return this.data.lh()
        };
        d.Mn = function() {
            var a = this.Pb();
            return a ? a.activeIndex : 0
        };
        d.p3 = function(a) {
            return !!this.data.vd()[a].r()
        };
        d.KA = function() {
            td(this.element[0], "nav-arrows-enabled");
            this.w.cancel(this.Yy);
            this.Yy = this.w(w(function() {
                this.Ty()
            }, this), 3E3, !1)
        };
        d.Ty = function() {
            this.w.cancel(this.Yy);
            ud(this.element[0], "nav-arrows-enabled")
        };
        d.RT = function(a) {
            this.KA();
            switch (a.id) {
                case "up-arrow":
                    this.Hi(-1);
                    break;
                case "down-arrow":
                    this.Hi(1);
                    break;
                case "left-arrow":
                    this.ym(-2);
                    break;
                case "right-arrow":
                    this.ym(2)
            }
        };
        d.rJ = function() {
            var a = this.Pb();
            a && (a.clear(), this.focus())
        };
        d.nL = function(a, b) {
            var c = this.Pb();
            c.xa(a);
            c.Dp(b);
            this.scope.$emit("item-changed", this.data.Da, this.Mn())
        };
        d.Vv = function() {
            this.w.cancel(this.YL);
            this.YL = this.w(w(function() {
                this.RL()
            }, this), this.Bn.ks, !1);
            this.isActive && this.rb()
        };
        d.RL = function() {
            var a = this.Pb();
            a && (this.isActive && this.scope.$emit("toggle-loading", !0), a.load(w(this.gR, this, a), this.Dn))
        };
        d.gR = function(a) {
            var b = this.Pb();
            b === a && (this.scope.$emit("row-loaded", b), 0 == b.r() && this.isActive ? (a = b.model.serviceQuery, this.Bn.Vd && a ? (b = w(this.uD, this, a), this.VC.Qa(a, b, null, b)) : this.rb("[[No videos are available|The message shown when a row has no videos to show.]]")) : 0 < b.r() && this.rb(), this.Kt(!1), a = this.Wg(), a.setData(this.Pb()), this.scope.$emit("toggle-loading", !1), this.scope.$emit("row-changed", this.data.Da, this.Mn()), a.element.toggleClass("disabled", !1), this.isActive && this.B(this.children["browse-row"]),
                this.Dn && (this.Dn = !1, this.g.requestAnimationFrame(w(function() {
                    this.rt.bh("start_browse", "fr_rn");
                    this.rt.report("start_browse")
                }, this))))
        };
        d.Kt = function(a) {
            this.vp().element.toggleClass("enabled", a)
        };
        d.RF = function(a, b, c, e, f) {
            a.targetScope !== this.scope && (a.stopPropagation(), (a = c || this.Pb()) && this.scope.$emit("request-playback", b, a, e, f))
        };
        d.Wg = function() {
            return this.children["browse-row"]
        };
        d.vp = function() {
            return this.children["super-scroller"]
        };
        d.uD = function(a, b) {
            var c = this.Pb();
            a === (c && c.model && c.model.serviceQuery) && (b && b.Kb ? this.rb("[[Paid channels are not available on this device.|Message that is displayed for a video channel on a device that doesn't support paid subscriptions.]]") : this.rb("[[No videos are available|The message shown when a row has no videos to show.]]"))
        };
        dl.$inject = "$scope $element $attrs $window csiService locationService navigationService messageModel $timeout scrollbarModel environmentModel channelPaidInfoService".split(" ");

        function Z(a, b, c, e) {
            this.name = this.name || "list";
            Q.call(this, a, b, c);
            this.tF = e;
            this.activeIndex = 0;
            this.Px = c.orientation || "vertical";
            this.qk = this.scope.$eval(c.displayCount);
            this.Gx = c.loop ? !!this.scope.$eval(c.loop) : !1;
            this.iL = c.paging ? !!this.scope.$eval(c.paging) : !0;
            this.$ = null;
            c.activeIndex && this.scope.$watch(c.activeIndex, w(this.xa, this));
            this.scope.$on("keyup", w(this.BL, this));
            c.repeatRate ? this.scope.$on("keydown", ah(this.scope.$eval(c.repeatRate), w(this.Ul, this))) : this.scope.$on("keydown", w(this.Ul,
                this));
            this.scope.list = this
        }
        z(Z, Q);
        d = Z.prototype;
        d.o = function() {
            Z.f.o.call(this);
            this.Qh(this.activeIndex, !1)
        };
        d.mc = function(a) {
            a && this.data && a.length === this.data.length ? this.data = a : (this.data = a, this.xe(), this.data && this.qc())
        };
        d.setData = function(a) {
            Z.f.setData.call(this, a);
            this.qc() || (this.Dk(), this.isActive && this.xe())
        };
        d.Dk = function() {
            for (var a = this.W.length, b = 0; b < a; ++b) this.W[b].setData(this.ha(b))
        };
        d.qc = function() {
            if (!Z.f.qc.call(this)) return !1;
            for (var a = "", b = Math.min(this.qk ? this.qk : this.data.length, this.data.length), c = 0; c < b; ++c) a += this.Vo(this.data[c].vu, c);
            this.$ && (this.$.$destroy(), this.Lf());
            this.$ = this.scope.$new();
            this.element.html(a);
            this.tF(this.element.contents())(this.$);
            this.Nb();
            this.isActive && this.xe();
            return !0
        };
        d.Vo = function(a) {
            a = a || this.wc.itemRenderer;
            return "<" + a + ' class="item"></' + a + ">"
        };
        d.da = function(a, b) {
            Z.f.da.call(this, a, b);
            var c = this.W.length - 1;
            b.setData(this.ha(c));
            b.scope.Kn = c;
            this.isActive && c == this.activeIndex && this.B(b)
        };
        d.xa = function(a) {
            a != this.activeIndex && this.$A(a, !1)
        };
        d.YA = function() {};
        d.iB = function() {};
        d.BL = function(a, b, c) {
            switch (b) {
                case 37:
                case 39:
                    this.XA() || a.stopPropagation()
            }
            this.iB(a, b, c)
        };
        d.Ul = function(a, b, c) {
            var e = this.TS(b);
            0 !== e && this.$A(this.activeIndex + e, !0, a);
            this.YA(a, b, c)
        };
        d.TS = function(a) {
            if (this.XA()) switch (a) {
                case 40:
                    return 1;
                case 38:
                    return -1
            } else switch (a) {
                case 37:
                    return -1;
                case 39:
                    return 1
            }
            if (this.iL) switch (a) {
                case 176:
                    return 8;
                case 177:
                    return -8
            }
            return 0
        };
        d.wB = function() {
            return !0
        };
        d.kS = function(a) {
            return this.wB(a) && this.activeIndex !== a
        };
        d.xe = function() {
            this.B(this.nc(this.activeIndex))
        };
        d.Qh = function(a, b) {
            this.activeIndex = a;
            this.B(this.nc(this.activeIndex));
            b && this.scope.$emit("list-item-index-change", this.activeIndex)
        };
        d.$A = function(a, b, c) {
            var e = this.data ? this.data.length : 0,
                f = this.Gx ? (a + e) % e : Math.min(Math.max(a, 0), e - 1);
            if (f != this.activeIndex) {
                a = a < this.activeIndex ? -1 : 1;
                for (var e = this.Gx ? e : 0 > a ? f + 1 : e - f, g = 0; g < e; ++g) {
                    var k = f + g * a;
                    if (this.kS(k)) {
                        c && c.stopPropagation();
                        this.Qh(k, b);
                        break
                    }
                }
            }
        };
        d.ha = function(a) {
            return this.data ? this.data[a] : null
        };
        d.jb = function(a) {
            this.W[this.activeIndex].jb(a)
        };
        d.XA = function() {
            return "vertical" === this.Px
        };
        Z.$inject = ["$scope", "$element", "$attrs", "$compile"];

        function el(a, b, c, e) {
            Z.call(this, a, b, c, e);
            this.qk = 3;
            this.Px = "horizontal";
            this.fA = ""
        }
        z(el, Z);
        d = el.prototype;
        d.o = function() {
            el.f.o.call(this);
            this.B(this.W[0])
        };
        d.N = function() {
            el.f.N.call(this);
            this.Jc(this.W[0])
        };
        d.Si = function() {
            var a = this.scope.$eval(this.wc.itemRenderer);
            return this.fA !== a && 0 < this.data.length ? (this.fA = a, !0) : !1
        };
        d.Vo = function(a) {
            a = this.scope.$eval(this.wc.itemRenderer);
            return "<yt:" + a + '  class="item"></yt:' + a + ">"
        };
        d.Ul = function() {};
        d.da = function(a, b) {
            el.f.da.call(this, a, b);
            this.isActive && this.B(this.nc(0))
        };
        d.xa = function(a) {
            this.activeIndex = a;
            this.Dk();
            this.isActive && this.B(this.W[0])
        };
        d.ha = function(a) {
            return this.data ? this.data[this.activeIndex + a] : null
        };
        el.$inject = ["$scope", "$element", "$attrs", "$compile"];

        function fl(a, b, c, e, f) {
            this.name = "browseRow";
            P.call(this, a, b, c);
            this.qW = e;
            this.pW = f;
            this.mW = "[[Now Playing:|Tooltip that indicates what video is currently playing. This is followed by a video title.]]";
            this.oW = "[[New|Label that follows the unread count number.]]"
        }
        z(fl, P);
        d = fl.prototype;
        d.o = function() {
            fl.f.o.call(this);
            this.B(this.children["tile-row"])
        };
        d.N = function() {
            fl.f.N.call(this);
            this.Jc(this.children["tile-row"])
        };
        d.setData = function(a) {
            a && a !== this.data && (this.data = a, this.Gv && (this.Gv(), this.$k(), this.SG()), this.Gv = a.k("model:changed", w(this.UG, this)), this.$k = a.model.i.k("items:changed", w(this.Zk, this)), this.SG = a.k("activeIndex:changed", w(this.Ev, this)), this.Ev(a.activeIndex), this.Zk())
        };
        d.Ev = function(a) {
            var b = this.children["tile-row"];
            b && b.xa(a)
        };
        d.UG = function(a) {
            this.$k && this.$k();
            this.$k = a.i.k("items:changed", w(this.Zk, this));
            this.Zk()
        };
        d.Zk = function() {
            var a = this.data.model.i.J(),
                b = this.children["tile-row"];
            b && (b.setData(a), this.isActive && b.o())
        };
        fl.$inject = ["$scope", "$element", "$attrs", "watchModel", "timeService"];

        function gl(a, b, c, e) {
            this.name = "button";
            Q.call(this, a, b, c);
            this.pM = e;
            this.scope.$on("keyup", w(this.gU, this))
        }
        z(gl, Q);
        gl.prototype.mc = function(a) {
            a && (this.data = new Ic(a.text, a.Uc.type, a.Uc), this.s(this.element[0], this.pM(a.text || "")(this.scope)))
        };
        gl.prototype.setData = function(a) {
            gl.f.setData.call(this, a);
            this.mc(a)
        };
        gl.prototype.gU = function(a, b) {
            switch (b) {
                case 13:
                    this.scope.$emit("button-click", this.data.Uc), a.stopPropagation()
            }
        };
        gl.$inject = ["$scope", "$element", "$attrs", "$interpolate"];

        function hl(a, b, c, e, f) {
            this.name = "callToCast";
            Q.call(this, a, b, c);
            this.yw = f;
            e.isChromelessContext && (this.gS(), this.zw = this.yw.setTimeout(w(this.mS, this), 3E5))
        }
        z(hl, Q);
        hl.prototype.mS = function() {
            this.scope.$emit("exit-application")
        };
        hl.prototype.gS = function() {
            var a = document.getElementById("dialog-wrapper");
            v("background-color") ? Hg(a, "transparent", "background-color") : Ua("background-color", na(Hg, a));
            a = document.getElementsByClassName("logo-container");
            td(a.item(0), "no-app-background")
        };
        hl.prototype.Ro = function() {
            hl.f.Ro.call(this);
            this.zw && this.yw.clearTimeout(this.zw)
        };
        hl.$inject = ["$scope", "$element", "$attrs", "environmentModel", "timeService"];

        function il(a, b, c, e, f) {
            this.name = "carousel";
            Q.call(this, a, b, c);
            this.activeIndex = 0;
            this.am = f;
            this.cG = e;
            this.OV = 7;
            this.PV = 4;
            this.QV = 2;
            this.ty = !1;
            this.$ = null;
            this.NV = "200ms";
            this.vh = "";
            a.$on("keydown", w(function() {
                this.ty = this.am.supportsAnimation
            }, this))
        }
        z(il, Q);
        d = il.prototype;
        d.o = function() {
            il.f.o.call(this);
            var a = this.dk();
            this.B(this.W[a])
        };
        d.N = function() {
            il.f.N.call(this);
            this.Jc(this.W[this.dk()])
        };
        d.setData = function(a) {
            il.f.setData.call(this, a);
            this.qc() || this.W.forEach(this.Yo, this)
        };
        d.Si = function() {
            var a = this.scope.$eval(this.wc.itemRenderer);
            if (this.vh === a) return !1;
            this.vh = a;
            return !0
        };
        d.qc = function() {
            if (!il.f.qc.call(this)) return !1;
            for (var a = 0, b = ""; 7 > a;) b += "<yt:" + this.vh + ' class="item"></yt:' + this.vh + ">", a++;
            this.$ && (this.$.$destroy(), this.Lf());
            this.$ = this.scope.$new();
            this.element.html(b);
            this.cG(this.element.contents())(this.$);
            this.Nb();
            return !0
        };
        d.Yo = function(a, b) {
            a.setData(this.LT(b));
            this.Oz(a, b)
        };
        d.G3 = function() {
            this.W.forEach(this.Oz, this)
        };
        d.Oz = function(a, b) {
            var c = this.dk();
            this.jN(a, b);
            this.kN(a, b);
            c === b && this.isActive && this.B(a)
        };
        d.da = function(a, b) {
            b.bn === this.vh && (il.f.da.call(this, a, b), this.Yo(b, this.W.length - 1))
        };
        d.xa = function(a) {
            this.activeIndex = a;
            this.W.forEach(this.Yo, this)
        };
        d.LT = function(a) {
            var b = Math.max(0, this.activeIndex - 2);
            a = this.Mr(a) - this.FA();
            return this.data ? this.data[b + a] : null
        };
        d.jN = function(a, b) {
            a.element.toggleClass("obscured", 0 > this.Mr(b))
        };
        d.kN = function(a, b) {
            b = this.Mr(b);
            var c = this.am.supportsTranslateZ ? "translateZ(0)" : "",
                e = this.am.cssPrefix + "-transform",
                c = "translateX(" + qe(104 * b, 1) + ") " + c,
                f = this.am.cssPrefix + "-transition",
                g = this.oS(b) ? e + " 200ms" : "none 0s";
            a.element.css(e, c);
            a.element.css(f, g)
        };
        d.FA = function() {
            return Math.max(-this.activeIndex, -2)
        };
        d.IA = function() {
            return Math.min(this.activeIndex, 2)
        };
        d.oS = function(a) {
            return this.ty && -2 != a && a != 6 - this.IA()
        };
        d.Mr = function(a) {
            a -= this.dk();
            a += this.IA();
            a %= 7;
            0 > a && (a += 7);
            return a += this.FA()
        };
        d.dk = function() {
            return this.activeIndex % 7
        };
        il.$inject = ["$scope", "$element", "$attrs", "$compile", "environmentModel"];

        function $(a, b, c, e, f, g) {
            this.name = "keyboard";
            Q.call(this, a, b, c);
            this.CG = e;
            this.SF = f;
            this.Ae = g;
            this.jk = [];
            this.uk = 0;
            this.X = new We;
            this.scope.$on("keyup", w(this.zG, this));
            this.scope.$on("keydown", ah(20, w(this.DG, this)));
            this.scope.$on("letter-tile-key-press", w(this.Ik, this));
            this.scope.$on("grid-point-change", w(this.yG, this));
            this.scope.$on("mouseover", w(this.AG, this));
            this.Ae.k("quickSuggestions:changed", w(function(a) {
                this.isActive && (0 < a.length && this.Do(this.Kf()), this.wd().setData(this.Nc()))
            }, this));
            this.vG()
        }
        z($, Q);
        d = $.prototype;
        d.o = function() {
            $.f.o.call(this);
            this.nu();
            this.od();
            this.Kc()
        };
        d.N = function() {
            $.f.N.call(this);
            this.YH()
        };
        d.da = function(a, b) {
            $.f.da.call(this, a, b);
            "keyboard-grid" == b.id && this.Ka().setData(this.ue())
        };
        d.Xb = function() {
            $.f.Xb.call(this);
            this.vc("getLetters", this.ue);
            this.vc("isLetterSuggestVisible", this.lk);
            this.vc("getKeyRepeatRate", this.fH)
        };
        d.od = function() {
            var a = this.Ka();
            a.isActive || this.B(a)
        };
        d.YH = function() {
            this.Jc(this.Ka())
        };
        d.Qw = function() {
            this.B(this.wd())
        };
        d.Ka = function() {
            return this.children["keyboard-grid"]
        };
        d.wd = function() {
            return this.children["letter-suggest"]
        };
        d.Nc = function() {
            return this.Ae.quickSuggestions.slice(0, 4)
        };
        d.fH = function() {
            return this.CG.isLowPerformingSearch ? 4 : 20
        };
        d.Ok = function() {
            return this.Ka().isActive
        };
        d.Hk = function() {
            return this.wd().isActive
        };
        d.lk = function() {
            var a = this.Nc();
            return !!(this.jS() && a && a.length)
        };
        d.jS = function() {
            return this.wd().element.hasClass("enabled")
        };
        d.Ky = function() {
            return "EN" == this.oB()
        };
        d.oB = function() {
            return this.jk[this.uk].language
        };
        d.ue = function() {
            return this.jk[this.uk].pO
        };
        d.Kf = function() {
            return this.ue()[this.X.top][this.X.left]
        };
        d.zG = function(a, b) {
            switch (b) {
                case 83:
                    this.kb();
                    break;
                case 8:
                case 27:
                    this.lk() && (a.stopPropagation(), a.preventDefault(), this.kb())
            }
        };
        d.DG = function(a, b) {
            switch (b) {
                case 37:
                    this.qP() && a.stopPropagation();
                    break;
                case 39:
                    this.rP() && a.stopPropagation();
                    break;
                case 40:
                    this.im() && a.stopPropagation();
                    break;
                case 38:
                    this.jm() && a.stopPropagation();
                    break;
                case 172:
                case 71:
                    this.kb()
            }
        };
        d.AG = function(a) {
            if (a.targetScope.tile) {
                var b = a.targetScope.Kn;
                a = a.targetScope.$parent.$parent.Kn;
                fa(b) && fa(a) && (this.scope.$emit("focus-search"), this.X.left = b, this.X.top = a, b = this.Ka(), this.od(), b.jb(!0), b.If(this.X), this.Kc())
            }
        };
        d.Ik = function(a, b) {
            this.kb();
            this.gq(a, b) || (b != this.Kf() && this.SN(b), this.Kc())
        };
        d.yG = function(a, b) {
            this.X.top = b.top;
            this.X.left = b.left;
            this.isActive && this.Kc()
        };
        d.yB = function(a) {
            if (this.Hk()) {
                var b = this.Ka();
                b.jb(!0);
                this.X.left += a;
                b.If(this.X);
                (a = this.Nc()) && a.length && b.jb(!1);
                this.Kc();
                return !0
            }
            return !1
        };
        d.gq = function(a, b) {
            if (this.sK(b)) {
                var c = this.Ka();
                this.uk = ++this.uk % this.jk.length;
                c.setData(this.ue());
                c.If(this.X);
                this.nu();
                this.Kc();
                a.stopPropagation();
                return !0
            }
            return !1
        };
        d.kb = function() {
            this.Np(0);
            this.Ka().jb(!0);
            this.od();
            this.Ow(!1)
        };
        d.Np = function(a) {
            this.wd().xa(a)
        };
        d.im = function() {
            if (this.Ok() && this.lk()) return this.Np(0), this.Qw(), this.Ka().jb(!1), !0;
            this.kb();
            return !1
        };
        d.qP = function() {
            return this.yB(-1)
        };
        d.rP = function() {
            return this.yB(1)
        };
        d.jm = function() {
            if (this.Hk()) return this.kb(), !0;
            this.kb();
            return !1
        };
        d.Do = function() {
            this.Ow(!0);
            var a = this.Ka().ha(this.X);
            a && (a = a.element[0].getBoundingClientRect(), this.wd().element.css("left", a.left + "px").css("top", a.bottom + "px"))
        };
        d.Kc = function() {
            this.Ae.jq();
            var a = this.Nc();
            a && a.length ? (this.Do(this.Kf()), this.wd().setData(a)) : this.kb()
        };
        d.SN = function(a) {
            B(this.ue(), function(b, c) {
                if (u(b)) {
                    var e = Ba(b, a);
                    0 <= e && (this.X.left = e, this.X.top = c, e = this.Ka(), e.If(this.X), e.jb(!0), this.od())
                }
            }, this)
        };
        d.vG = function() {
            var a = [],
                b, c;
            switch (this.SF.ld) {
                case "ru_RU":
                case "uk_UA":
                    a.push("RU");
                    break;
                case "ko_KR":
                    a.push("KO");
                    break;
                case "ja_JP":
                    a.push("JP")
            }
            a.push("EN");
            for (b = 0; b < a.length; ++b) c = this.yP(a[b]), c[c.length - 1].push({
                ji: "delete-icon"
            }), 1 < a.length && c[c.length - 1].push({
                ji: "language-toggle-icon"
            }), this.jk.push({
                language: a[b],
                pO: c
            })
        };
        d.yP = function(a) {
            var b;
            b = "" + Eb[a];
            "JP" !== a && (b += "1234567890_");
            a = b.split("\n");
            return Ea(a, function(a) {
                return a.split("")
            })
        };
        d.sK = function(a) {
            return !(!a || "language-toggle-icon" !== a.ji)
        };
        d.Ow = function(a) {
            this.wd().element.toggleClass("enabled", a)
        };
        d.nu = function() {
            var a = "lang-" + this.oB().toLowerCase();
            this.element.hasClass(a) || (a = this.element.attr("class").replace(zb, "") + " " + a, this.element.attr("class", a))
        };
        $.$inject = "$scope $element $attrs environmentModel locale searchQueryModel".split(" ");

        function jl(a, b, c, e, f, g, k) {
            $.call(this, a, b, c, e, f, g);
            this.Uf = "keyboard-grid";
            this.vI = k;
            g.Nx = !1;
            this.element.addClass("transliterable");
            this.scope.$on("transliteration-selected", w(function() {
                this.od();
                this.Kc()
            }, this))
        }
        z(jl, $);
        jl.prototype.Xv = function() {
            return this.children.transliteration.isActive
        };
        jl.prototype.o = function() {
            $.prototype.o.call(this);
            this.children["keyboard-grid"].jb(!0);
            "keyboard-grid" === this.Uf ? this.od() : "transliteration" === this.Uf && this.B(this.children.transliteration);
            this.activeChildName = this.Uf
        };
        jl.prototype.im = function() {
            if (this.Xv()) return this.od(), this.Kc(), !0;
            if (this.Ok() && this.lk()) return this.Np(0), this.Qw(), this.children["keyboard-grid"].jb(!1), !0;
            this.Uf = "keyboard-grid";
            this.kb();
            return !1
        };
        jl.prototype.jm = function() {
            if (this.Ok() && this.vI.CJ()) return this.kb(), this.B(this.children.transliteration), !0;
            if (this.Hk()) return this.od(), this.children["keyboard-grid"].jb(!0), !0;
            this.Xv() ? this.Uf = "transliteration" : (this.Uf = "keyboard-grid", this.kb());
            return !1
        };
        jl.$inject = "$scope $element $attrs environmentModel locale searchQueryModel transliterationModel".split(" ");

        function kl(a, b, c, e, f, g, k) {
            jl.call(this, a, b, c, e, f, g, k);
            this.langCodePair = Wj("en", "zh-Hans")
        }
        z(kl, jl);
        kl.prototype.Nc = function() {
            return []
        };
        kl.$inject = "$scope $element $attrs environmentModel locale searchQueryModel transliterationModel".split(" ");

        function ll(a, b, c, e) {
            this.name = "closedCaptions";
            Q.call(this, a, b, c);
            this.Oc = e;
            this.options = [];
            this.yu = this.h("#captions-not-available");
            this.xu = this.h("#captions-loading");
            this.X = new We;
            this.rowCount = 6;
            this.scope.$on("button-click", w(this.mG, this));
            this.scope.$watch(w(function() {
                return this.Oc.subtitlesModuleGeneration
            }, this), w(function(a, b) {
                a !== b && this.lG()
            }, this));
            this.Oc.Gu() && this.Oc.kG(0.5) ? this.u(this.yu, !1) : (this.u(this.xu, !1), this.isActive = !0)
        }
        z(ll, Q);
        d = ll.prototype;
        d.hI = function() {
            var a = this.Ka();
            a.isActive || this.B(a)
        };
        d.Ka = function() {
            return this.children["cc-languages"]
        };
        d.lG = function() {
            this.options = [];
            var a = this.Oc.bv(),
                b = this.Oc.$n(),
                c = !$a(b) && b || this.Oc.subtitlesTrack || {};
            a && a.length && (a = Ea(a, function(a) {
                return new Ic(a.displayName, "captions-language", {
                    track: a
                })
            }), a.unshift(new Ic("[[Turn Captions Off|Button which is displayed on the subtitles settings dialog. Turns off on screen subtitles.]]", "captions-off")), B(a, function(a, b) {
                0 == b % 3 && this.options.push([]);
                this.options[this.options.length - 1].push(a);
                a.Uc && (a.Uc.track && c && a.Uc.track.id === c.id) && (this.X = new We(Math.floor(b /
                    3), b % 3))
            }, this));
            this.u(this.xu, !1);
            this.u(this.yu, !this.options.length);
            this.hI();
            this.Ka().setData(this.options);
            this.Ka().If(this.X)
        };
        d.mG = function(a, b) {
            switch (b.type) {
                case "captions-off":
                    this.Oc.Uk();
                    break;
                case "captions-language":
                    b.track && this.Oc.op(b.track)
            }
            a.stopPropagation();
            this.vQ()
        };
        d.vQ = function() {
            this.scope.$emit("request-close-dialog");
            this.Oc.bd()
        };
        ll.$inject = ["$scope", "$element", "$attrs", "playerService"];

        function ml(a, b, c, e, f) {
            this.name = "debug";
            P.call(this, a, b, c);
            this.g = e;
            this.po = f;
            this.po.k("items:changed", w(this.aa, this));
            this.po.r() && this.aa()
        }
        z(ml, P);
        ml.prototype.aa = function() {
            td(this.g.document.body, "debug");
            this.element[0].textContent = this.po.J().join("");
            this.element[0].innerHTML = this.element[0].innerHTML.replace(/\n/g, "<br />")
        };
        ml.$inject = ["$scope", "$element", "$attrs", "$window", "debugModel"];

        function nl(a, b, c, e) {
            Q.call(this, a, b, c);
            this.w = e;
            this.nq = 0;
            this.un = 5E3;
            this.rM = w(this.Yq, this)
        }
        z(nl, Q);
        nl.prototype.o = function() {
            Q.prototype.o.call(this);
            this.Sb()
        };
        nl.prototype.N = function() {
            this.w.cancel(this.nq);
            Q.prototype.N.call(this)
        };
        nl.prototype.Sb = function() {
            this.w.cancel(this.nq);
            this.nq = this.w(this.rM, this.un)
        };
        nl.prototype.Yq = function() {};

        function ol(a, b, c, e, f, g) {
            this.name = "dialog";
            Q.call(this, a, b, c);
            this.GC = e;
            this.ef = f;
            this.hC = g;
            this.$ = null;
            this.fj = this.h("#inner-dialog-container");
            this.iC = this.h(".title");
            this.eC = this.h(".buttons");
            this.fC = this.h("#confirm-dialog-cancel-button");
            this.gC = this.h("#confirm-dialog-ok-button");
            this.scope.$on("keyup", w(this.nD, this));
            this.scope.$on("keydown", w(this.mD, this));
            this.scope.$on("request-close-dialog", w(this.In, this));
            this.jc = {};
            a = H.b;
            this.jc[a + "/dialogs/simple_dialog.html"] = this.Gn;
            this.jc[a +
                "/dialogs/scrollable_dialog.html"] = this.Gn;
            this.jc[a + "/dialogs/flag_claim.html"] = this.gD;
            this.jc[a + "/dialogs/flag_video.html"] = this.hD;
            this.jc[a + "/dialogs/logout_info.html"] = this.iD;
            this.jc[a + "/dialogs/paid_channel_info.html"] = this.jD;
            this.jc[a + "/dialogs/player_error_info.html"] = this.kD;
            this.jc[a + "/dialogs/remote_reset_info.html"] = this.lD;
            this.jc[a + "/dialogs/debug_info.html"] = this.fD
        }
        z(ol, Q);
        d = ol.prototype;
        d.da = function(a, b) {
            "confirm-dialog-cancel-button" != b.id && "confirm-dialog-ok-button" != b.id && ol.f.da.call(this, a, b)
        };
        d.jA = function() {
            this.data.yz();
            this.In()
        };
        d.mp = function() {
            return !(!this.data || !this.data.Jh)
        };
        d.mc = function(a) {
            Q.prototype.mc.call(this, a);
            this.data ? (this.mp() && (this.activeChildName = "confirm-dialog-cancel-button"), this.data.widgetName ? this.lH() : this.data.templateUrl && this.hC.get(a.templateUrl, {}, w(this.kH, this)), this.Qv && this.element.removeClass(this.Qv), this.element.addClass(this.data.className), this.Qv = this.data.className, this.element.html() && (this.s(this.iC, this.ef(this.data.title)(this.scope)), this.u(this.eC, this.mp()), this.s(this.fC, this.ef(this.data.Et || "")(this.scope)), this.s(this.gC,
                this.ef(this.data.Ft || "")(this.scope)))) : this.Ju()
        };
        d.Ju = function() {
            this.$ && (this.$.$destroy(), this.Lf())
        };
        d.lH = function() {
            this.gb(this.fj, "<" + this.data.widgetName + ' activate-when="dialog.isActive" data="dialog.data"></' + this.data.widgetName + ">");
            this.Gn()
        };
        d.kH = function(a) {
            this.gb(this.fj, a);
            this.o();
            this.focus();
            (a = this.jc[this.data.templateUrl]) && a.call(this)
        };
        d.Gn = function() {
            this.Ju();
            this.$ = this.scope.$new();
            this.GC(angular.element(this.fj).contents())(this.$);
            this.o()
        };
        d.nD = function(a, b, c) {
            a.stopPropagation();
            a.preventDefault();
            switch (b) {
                case 8:
                case 27:
                    this.jA();
                    break;
                case 13:
                    c && Yd(c, "back") && this.jA()
            }
            this.mp() && this.qQ(b, c);
            this.Nb(this.scope)
        };
        d.mD = function(a) {
            a.preventDefault();
            a.stopPropagation()
        };
        d.qQ = function(a, b) {
            switch (a) {
                case 39:
                    this.activeChildName = "confirm-dialog-ok-button";
                    break;
                case 37:
                    this.activeChildName = "confirm-dialog-cancel-button";
                    break;
                case 13:
                    if ("confirm-dialog-ok-button" === this.activeChildName || b && "confirm-dialog-ok-button" === b.id) this.data.Yx();
                    else if ("confirm-dialog-cancel-button" === this.activeChildName || b && "confirm-dialog-cancel-button" === b.id) this.data.yz(), this.In()
            }
        };
        d.In = function(a) {
            this.$ && (this.$.$destroy(), this.$ = null, this.Lf());
            a || this.scope.$parent.$emit("request-close-dialog")
        };
        d.gD = function() {
            this.s(this.h(".text"), this.ef(this.data.video.title)(this.scope));
            this.s(this.h(".url"), this.data.Zn)
        };
        d.hD = function() {
            this.s(this.h(".url"), this.data.Zn)
        };
        d.iD = function() {
            this.s(this.h(".display-name"), this.data.xf.displayName);
            this.s(this.h(".platform-user-name"), this.data.xf.Vi);
            this.h(".login-user-icon").style.backgroundImage = "url(" + this.data.xf.imageUrl + ")";
            this.h(".platform-user-icon").style.backgroundImage = "url(" + this.data.xf.Ui + ")";
            var a = this.ef("[[<div>You're signed in as <strong>" + this.data.xf.displayName + "&nbsp;</strong></div>|Tooltip displaying the YouTube username of the currently signed-in user.]]")({
                xV: this
            });
            this.gb(this.h(".signed-in-message"),
                a)
        };
        d.jD = function() {
            this.s(this.h(".channel-url"), this.data.aI())
        };
        d.kD = function() {
            this.s(this.h(".player-error"), this.ef(this.data.uH())(this.scope))
        };
        d.lD = function() {
            var a = this.data.mk().J();
            this.u(this.fj, 0 < a.length);
            var b = "";
            a.forEach(function(a) {
                a = new $e(a);
                b += '<li class="' + a.Lt + '">' + a.eh + "</li>"
            });
            this.gb(this.h(".devices"), b)
        };
        d.fD = function() {
            var a = "<ul>",
                b;
            for (b in this.data.iu) a += "<li>" + b + ": " + this.data.iu[b] + "</li>";
            a += "</ul>";
            this.gb(this.h(".message"), a)
        };
        ol.$inject = "$scope $element $attrs $compile $interpolate templateClient".split(" ");

        function pl(a, b, c, e) {
            this.name = "feedIcon";
            P.call(this, a, b, c);
            this.JG = e;
            this.KG = this.h("h2");
            this.gx = this.h(".icon");
            this.scope.$on("keyup", w(this.$J, this))
        }
        z(pl, P);
        pl.prototype.setData = function(a) {
            pl.f.setData.call(this, a);
            this.aa()
        };
        pl.prototype.aa = function() {
            this.data && (this.s(this.KG, this.JG(this.data.model.title)(this.scope)), this.ML(this.data.model.Ja))
        };
        pl.prototype.ML = function(a) {
            var b = "",
                c = "icon";
            a && -1 !== a.indexOf(".jpg") ? b = "url(" + a + ")" : c += " " + a;
            this.gx.className = c;
            this.gx.style.backgroundImage = b
        };
        pl.prototype.$J = function(a, b, c, e) {
            switch (b) {
                case 13:
                    C(sd(e.target), "icon") && (this.scope.$emit("button-click", this.data), a.stopPropagation())
            }
        };
        pl.$inject = ["$scope", "$element", "$attrs", "$interpolate"];

        function ql(a, b, c) {
            this.name = "flag";
            Q.call(this, a, b, c);
            this.activeItemIndex = this.activeIndex = 0;
            this.flagData = [
                [new Ic("[[Sexual Content|GTGC4NgMTyty-lg7bvKq5g]]", "flag-normal"), new Ic("[[Violent or Repulsive Content|qhVb-TasMDalcVlh0-bVNQ]]", "flag-normal"), new Ic("[[Hateful or Abusive Content|VlY1sRyrA4TwmawjC86xFw]]", "flag-normal"), new Ic("[[Harmful Dangerous Acts|rCIBQRDFyfIBja9x497u6A]]", "flag-normal")],
                [new Ic("[[Child Abuse|IngFQG4SEoOLkyKZJEPR6g]]", "flag-normal"), new Ic("[[Spam|Pnw-OErhkCrqYT5klcLesw]]",
                    "flag-normal"), new Ic("[[Infringes My Rights|GwQ2vMHBH9Ls3VHHIixT-Q]]", "flag-rights")]
            ];
            this.scope.$on("keyup", w(this.AT, this));
            this.scope.$on("list-item-index-change", w(this.BT, this));
            this.scope.$on("button-click", w(this.zT, this))
        }
        z(ql, Q);
        d = ql.prototype;
        d.da = function(a, b) {
            ql.f.da.call(this, a, b);
            b.setData(this.flagData[this.W.length - 1])
        };
        d.Xb = function() {
            ql.f.Xb.call(this);
            this.vc("activeIndexEquals", this.iI)
        };
        d.AT = function(a, b) {
            switch (b) {
                case 37:
                    this.activeIndex = Math.max(this.activeIndex - 1, 0);
                    this.Nb(this.scope);
                    a.stopPropagation();
                    break;
                case 39:
                    this.activeIndex = Math.min(++this.activeIndex, this.flagData.length - 1);
                    this.Nb(this.scope);
                    a.stopPropagation();
                    break;
                case 8:
                case 13:
                case 27:
                    break;
                default:
                    a.stopPropagation()
            }
        };
        d.zT = function(a, b) {
            switch (b.type) {
                case "flag-normal":
                    this.scope.$emit("request-flag-video");
                    a.stopPropagation();
                    break;
                case "flag-rights":
                    this.scope.$emit("request-flag-claim"), a.stopPropagation()
            }
        };
        d.BT = function(a, b) {
            this.activeItemIndex = b
        };
        d.iI = function(a) {
            return this.activeIndex === a
        };
        ql.$inject = ["$scope", "$element", "$attrs"];

        function rl(a, b, c, e, f) {
            this.name = "grid";
            Q.call(this, a, b, c);
            this.wF = e;
            this.oy = f;
            this.ma = new We;
            this.vu = c.itemRenderer || "";
            this.BM = c.loop || !1;
            this.Iy = Number(this.scope.$eval(c.rowCount));
            this.Cy = c.repeatRate;
            this.scope.$on("keydown", w(this.SM, this));
            this.scope.$on("list-item-index-change", w(this.TM, this))
        }
        z(rl, Q);
        d = rl.prototype;
        d.o = function() {
            rl.f.o.call(this);
            this.B(this.nc(this.ma.top))
        };
        d.N = function() {
            rl.f.N.call(this);
            this.Jc(this.nc(this.ma.top))
        };
        d.setData = function(a) {
            rl.f.setData.call(this, a);
            this.qc();
            this.cl(0, 0)
        };
        d.qc = function() {
            if (!rl.f.qc.call(this)) return !1;
            for (var a = "", b = 0, c = this.data.length; b < c; ++b) a += this.qG(this.data[b], b);
            this.$u() && (a += this.rG());
            this.$ && (this.$.$destroy(), this.Lf());
            this.$ = this.scope.$new();
            this.element.html(a);
            this.wF(this.element.contents())(this.$);
            this.mo();
            this.Nb();
            return !0
        };
        d.Xb = function() {
            rl.f.Xb.call(this);
            this.vc("getDataRow", this.jI)
        };
        d.If = function(a) {
            a && this.ma != a && this.cl(a.top, a.left, !0)
        };
        d.qG = function(a, b) {
            var c = [];
            c.push('class="grid-row"');
            c.push('data="grid.getDataRow(' + b + ')"');
            c.push('item-renderer="' + this.vu + '"');
            c.push('loop="' + this.BM + '"');
            c.push('orientation="horizontal"');
            this.Cy && c.push('repeat-rate="' + this.Cy + '"');
            return "<yt:list " + c.join(" ") + "></yt:list>"
        };
        d.rG = function() {
            return '<yt:scrollbar class="grid-scrollbar"></yt:scrollbar>'
        };
        d.SM = function(a, b) {
            switch (b) {
                case 40:
                    this.zB(1) && (a.stopPropagation(), a.preventDefault());
                    break;
                case 38:
                    this.zB(-1) && (a.stopPropagation(), a.preventDefault())
            }
        };
        d.zB = function(a) {
            if (void 0 === this.wc.consumeKeys || this.scope.$eval(this.wc.consumeKeys))
                if (a = this.ma.top + a, this.data[a]) return this.cl(a, this.ma.left), !0;
            return !1
        };
        d.TM = function(a, b) {
            this.cl(this.ma.top, b, !1, !0);
            a.stopPropagation()
        };
        d.cl = function(a, b, c, e) {
            this.ma.top = a;
            this.ma.left = b;
            this.mP();
            e || this.jv();
            c || this.scope.$emit("grid-point-change", this.ma);
            this.mo()
        };
        d.mo = function() {
            if (this.$u()) {
                var a = 100 / this.data.length;
                this.oy.VL = a;
                this.oy.percentageScrolled = this.ma.top * a
            }
        };
        d.da = function(a, b) {
            rl.f.da.call(this, a, b);
            var c = this.W.length - 1;
            b.scope.Kn = c;
            this.isActive && c == this.ma.top && this.jv();
            b.element.hasClass("scrollbar") && this.mo()
        };
        d.jv = function() {
            var a = this.nc(this.ma.top);
            a && (this.B(a), a.xa(this.ma.left))
        };
        d.mP = function() {
            this.data && this.data.length && (this.ma.top = Math.min(Math.max(this.ma.top, 0), this.data.length - 1), this.ma.left = Math.min(Math.max(this.ma.left, 0), this.data[this.ma.top].length - 1))
        };
        d.jI = function(a) {
            return this.data.length && this.data[a]
        };
        d.jb = function(a) {
            var b = this.nc(this.ma.top);
            b && (b = b.nc(this.ma.left)) && b.jb(a)
        };
        d.ha = function(a) {
            var b = this.nc(a.top);
            return b && b.nc(a.left) || null
        };
        d.$u = function() {
            return !!(this.Iy && this.data && this.data.length > this.Iy)
        };
        rl.$inject = ["$scope", "$element", "$attrs", "$compile", "scrollbarModel"];

        function sl(a, b, c, e, f, g, k) {
            jl.call(this, a, b, c, e, f, g, k);
            this.langCodePair = Wj("ja-Hira", "ja")
        }
        z(sl, jl);
        sl.prototype.Ik = function(a, b) {
            if (!this.gq(a, b)) {
                if (this.xM(b)) {
                    var c = this.Ae.query,
                        e = c.slice(-1);
                    if (e = yb[b][e]) c = c.slice(0, c.length - 1) + e, this.Ae.ic(c), this.scope.$emit("letter-tile-key-press");
                    a.stopPropagation()
                }
                this.Nc() && this.Do(this.Kf())
            }
        };
        sl.prototype.Nc = function() {
            return vb[this.Kf()] || []
        };
        sl.prototype.xM = function(a) {
            return C(ub, a)
        };
        sl.$inject = "$scope $element $attrs environmentModel locale searchQueryModel transliterationModel".split(" ");

        function ul(a, b, c, e, f, g) {
            $.call(this, a, b, c, e, f, g);
            this.AK = bb(xb);
            this.Ae.k("query:changed", w(this.qL, this))
        }
        z(ul, $);
        d = ul.prototype;
        d.qL = function(a) {
            a = Ea(a.split(""), function(a) {
                return xb[a] || a
            }).join("");
            a = Tk(Vk(Rk(a.replace("\u001d", ""))));
            a = Ea(a.split(""), function(a) {
                return this.AK[a] || a
            }, this).join("");
            this.Ae.ic(a)
        };
        d.im = function() {
            return this.Hk() && this.aA(1) || $.prototype.im.call(this)
        };
        d.jm = function() {
            return this.Ok() && this.aA(-1) || $.prototype.jm.call(this)
        };
        d.aA = function(a) {
            return this.ue() && this.ue()[this.X.top + a] ? (this.kb(), this.X.top += a, this.children["keyboard-grid"].If(this.X), this.Kc(), !0) : !1
        };
        d.Nc = function() {
            return this.Ky() ? $.prototype.Nc.call(this) : wb[this.Kf()] || []
        };
        d.Ik = function(a, b) {
            this.Ky() ? $.prototype.Ik.call(this, a, b) : (this.kb(), this.gq(a, b))
        };
        ul.$inject = "$scope $element $attrs environmentModel locale searchQueryModel".split(" ");

        function vl(a, b, c, e) {
            Z.call(this, a, b, c, e)
        }
        z(vl, Z);
        vl.prototype.xe = function() {
            if (!this.data || this.activeIndex >= this.data.length) this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.data.length - 1);
            vl.f.xe.call(this)
        };
        vl.prototype.Si = function() {
            return this.data.length !== this.W.length
        };
        vl.$inject = ["$scope", "$element", "$attrs", "$compile"];

        function wl(a, b, c) {
            this.name = "tile";
            Q.call(this, a, b, c);
            this.yW = "letter-tile";
            this.zW = this.element[0].children[0];
            this.scope.$on("keydown", w(function(a, b) {
                switch (b) {
                    case 13:
                        this.scope.$emit("letter-tile-key-press", this.data)
                }
            }, this))
        }
        z(wl, Q);
        d = wl.prototype;
        d.setData = function(a) {
            wl.f.setData.call(this, a);
            this.aa()
        };
        d.mc = function(a) {
            wl.f.mc.call(this, a);
            this.aa()
        };
        d.aa = function() {
            this.u(this.element[0], this.data);
            if (this.data) {
                var a, b = ["letter-tile"];
                this.data.ji ? (b.push(this.data.ji), a = "\u00a0") : a = this.data;
                this.s(this.element[0], a);
                this.tK(b)
            }
        };
        d.tK = function(a) {
            var b = this.element[0].className.split(" ");
            b.push.apply(b, a);
            a = {};
            for (var c = 0, e = 0; e < b.length;) {
                var f = b[e++],
                    g = ha(f) ? "o" + ia(f) : (typeof f).charAt(0) + f;
                Object.prototype.hasOwnProperty.call(a, g) || (a[g] = !0, b[c++] = f)
            }
            b.length = c;
            this.element[0].className = b.join(" ")
        };
        d.jb = function(a) {
            this.element.toggleClass("disabled", !a)
        };
        wl.$inject = ["$scope", "$element", "$attrs"];

        function xl(a, b, c, e, f, g) {
            this.name = "loginInfo";
            Q.call(this, a, b, c);
            this.gI = e;
            this.pw = f;
            this.jH = g;
            this.dI = "";
            this.Gf = "guest";
            this.eI = this.h("#pairing-code-container");
            this.scope.$on("keyup", w(this.oJ, this))
        }
        z(xl, Q);
        d = xl.prototype;
        d.o = function() {
            this.ZG();
            xl.f.o.call(this)
        };
        d.oJ = function(a, b) {
            switch (b) {
                case 8:
                case 27:
                    this.tU()
            }
        };
        d.ZG = function() {
            this.pw.FS(w(this.wS, this), w(this.zS, this, this.scope.dialog.data))
        };
        d.wS = function(a) {
            this.dI = a;
            a = this.gI('[[<h4>Enter</h4> <div class="pairing-code">{{loginInfo.pairingCode}}</div>|Step that a user needs to perform in order to pair her YouTube account with the application.]]')({
                loginInfo: {
                    pairingCode: a
                }
            });
            this.gb(this.eI, a)
        };
        d.zS = function(a) {
            this.jH.Qa("default", w(function(b) {
                this.xf = b;
                this.Gf = "authenticated";
                a.title = "";
                a.Yx()
            }, this))
        };
        d.tU = function() {
            this.pw.JT()
        };
        xl.$inject = "$scope $element $attrs $interpolate authService userProfileService".split(" ");

        function yl(a, b, c, e, f) {
            this.name = "message";
            P.call(this, a, b, c);
            this.BJ = e;
            this.data = f;
            this.by(this.data.message);
            this.data.k("message:changed", w(this.by, this))
        }
        z(yl, P);
        yl.prototype.by = function(a) {
            this.s(this.element[0], this.BJ(a || "")(this.scope))
        };
        yl.$inject = ["$scope", "$element", "$attrs", "$interpolate", "messageModel"];

        function zl(a, b, c, e, f, g, k, l) {
            this.name = "pair";
            P.call(this, a, b, c);
            this.LD = f;
            this.Rg = g;
            this.oV = k;
            this.zD = l;
            this.w = e;
            this.Bj = 0;
            this.displayPairingCode = "[[Loading...|Tooltip displayed while mobile devices are connecting with the application.]]";
            this.pn = "";
            this.KD = this.h(".phone-content");
            this.vC = this.h(".connected-list");
            this.xD = this.h(".qr-code-image");
            this.wC = this.h(".devices");
            this.scope.$on("$destroy", w(this.N, this));
            this.Rg.ej().k("items:changed", w(this.cu, this));
            this.cu()
        }
        z(zl, P);
        d = zl.prototype;
        d.o = function() {
            zl.f.o.call(this);
            this.displayPairingCode = "[[Loading...|Tooltip displaying while connecting a mobile device with the application.]]";
            this.pn = "";
            this.qu();
            this.Rg.gk(w(function() {
                this.Rg.pG();
                this.pu()
            }, this))
        };
        d.N = function() {
            zl.f.N.call(this);
            0 != this.Bj && (this.w.cancel(this.Bj), this.Bj = 0)
        };
        d.PK = function(a) {
            return a.match(/.../g).join(" ")
        };
        d.pu = function() {
            this.Bj = this.w(w(this.pu, this), 3E5, !1);
            this.Rg.WK(w(function(a) {
                this.displayPairingCode = this.PK(a);
                this.pn = APP_URL + "/api/chart?cht=qr&chs=350x350&chl=http%3A%2F%2Fm.youtube.com%2Fpair%3FpairingCode%3D" + a;
                this.zD.Ti || (this.xD.src = this.pn);
                this.qu()
            }, this))
        };
        d.qu = function() {
            var a = this.LD('[[<div class="step1">Go To</div> <div class="pair-url">youtube.com/pair</div> <div class="step2">Enter</div> <div class="pair-code">{{pair.displayPairingCode}}</div>|Steps that a user needs to perform in order to pair her mobile device with the application.]]')({
                pair: this
            });
            this.gb(this.KD, a)
        };
        d.cu = function() {
            this.u(this.vC, 0 < this.mk().r());
            var a = "";
            this.mk().J().forEach(function(b) {
                b = new $e(b);
                a += '<li class="' + b.Lt + '">' + b.eh + "</li>"
            }, this);
            this.gb(this.wC, a)
        };
        d.mk = function() {
            return this.Rg.ej()
        };
        zl.$inject = "$scope $element $attrs $timeout $interpolate remoteService angularHelper environmentModel".split(" ");

        function Al(a, b, c) {
            P.call(this, a, b, c);
            setInterval(w(this.PU, this), 3E3)
        }
        z(Al, P);
        Al.prototype.PU = function() {
            var a = (this.scope.$root.$perfLog || []).slice(-15);
            this.element[0].innerHTML = a.map(function(a) {
                return "<li>" + a + "</li>"
            }, this).join("")
        };
        Al.$inject = ["$scope", "$element", "$attrs"];

        function Bl(a, b, c, e, f, g, k, l) {
            this.name = "postPlayTile";
            Yk.call(this, a, b, c);
            this.className = "post-play-tile";
            this.SC = e;
            this.Ej = f;
            this.MD = g;
            this.It = k;
            this.Ht = l;
            this.PC = this.h(".default-title");
            this.QC = this.h(".next-up-title");
            this.RC = this.h(".row-title");
            this.yn = this.h(".post-play-countdown");
            this.tf = -1;
            this.bn = "postplaytile";
            this.scope.$on("keydown", w(this.sH, this));
            this.scope.$on("request-playback", w(this.tH, this))
        }
        z(Bl, Yk);
        d = Bl.prototype;
        d.setData = function(a) {
            Bl.f.setData.call(this, a);
            var b = this.W[0];
            b && (b.setData(a), a && (-1 == this.tf && 0 < this.data.Fc) && (this.tf = this.Ej.On(w(this.dG, this), 1E3), this.no(!0)));
            this.aa()
        };
        d.da = function(a, b) {
            Bl.f.da.call(this, a, b);
            this.setData(this.data)
        };
        d.aa = function() {
            Bl.f.aa.call(this);
            this.u(this.element[0], this.data);
            this.data && (this.u(this.QC, this.data.mh), this.u(this.PC, !this.data.mh), this.data.mh && this.s(this.RC, this.SC(this.data.mh)(this.scope)), this.u(this.yn, this.data.Fc), this.s(this.yn, this.data.Fc))
        };
        d.sH = function(a, b) {
            this.data && this.data.Fc && (this.data.Fc = 0);
            this.no(!1);
            this.Ej.pl(this.tf);
            this.tf = -1;
            this.aa();
            switch (b) {
                case 8:
                case 27:
                    this.Ht.iv("back", this.It.currentVideo.videoId)
            }
        };
        d.dG = function() {
            this.data ? (--this.data.Fc, this.s(this.yn, this.data.Fc), 0 === this.data.Fc && (this.no(!1), this.Ej.pl(this.tf), this.scope.$emit("request-playback", this.data, null, null, !0))) : this.Ej.pl(this.tf)
        };
        d.no = function(a) {
            this.element.toggleClass("countdown-active", a)
        };
        d.tH = function(a, b) {
            var c;
            0 === b.Fc ? c = "timeout" : (c = Ba(this.MD.lh().model.i.J(), b), c = re("play{n}", {
                zV: c + 1
            }));
            this.Ht.iv(c, this.It.currentVideo.videoId, b.videoId)
        };
        Bl.$inject = "$scope $element $attrs $interpolate timeService postPlayModel watchModel postPlayReportingService".split(" ");

        function Cl(a, b, c, e, f) {
            P.call(this, a, b, c);
            this.Fh = e;
            this.Eo = f;
            this.Fo = this.h(".player-seek-buffer");
            this.Go = this.h(".player-seek-active");
            this.Tf = []
        }
        z(Cl, P);
        d = Cl.prototype;
        d.enable = function() {
            this.yl(this.Fo, this.Fh.percentageLoaded);
            this.yl(this.Go, this.Fh.percentagePlayed);
            this.Iw(this.Eo.isPlayingAd);
            this.jP()
        };
        d.disable = function() {
            this.Pw()
        };
        d.jP = function() {
            this.Pw();
            this.Tf.push(this.Eo.k("isPlayingAd:changed", w(this.Iw, this)));
            this.Tf.push(this.Fh.k("percentageLoaded:changed", w(this.yl, this, this.Fo)));
            this.Tf.push(this.Fh.k("percentagePlayed:changed", w(this.yl, this, this.Go)));
            this.Tf.push(this.scope.$on("keyup", w(function(a, b, c, e) {
                this.vJ(e.target) && this.yJ(e)
            }, this)))
        };
        d.Pw = function() {
            this.Tf.forEach(function(a) {
                a()
            });
            this.Tf.length = 0
        };
        d.yl = function(a, b) {
            a.style.width = qe(b)
        };
        d.Iw = function(a) {
            this.Go.className = a ? "player-seek-ad" : "player-seek-active";
            this.Fo.className = "player-seek-buffer"
        };
        d.vJ = function(a) {
            return "progress-bar" === a.id || "player-seek-buffer" === a.className || "player-seek-active" === a.className
        };
        d.yJ = function(a) {
            this.Eo.Dj(this.Fh.duration * (a.offsetX / this.element[0].offsetWidth), !0)
        };
        Cl.$inject = ["$scope", "$element", "$attrs", "progressModel", "playerService"];

        function Dl(a, b, c, e) {
            Z.call(this, a, b, c, e);
            this.nW = 2;
            this.qk = 12
        }
        z(Dl, Z);
        Dl.prototype.Ul = function() {};
        Dl.prototype.ha = function(a) {
            a = a + this.activeIndex - 2;
            0 > a && (a += this.data.length);
            a = a % this.data.length;
            return this.data ? this.data[a] : null
        };
        Dl.prototype.Qh = function(a, b) {
            this.activeIndex = a;
            b && this.scope.$emit("list-item-index-change", this.activeIndex)
        };
        Dl.prototype.xa = function(a) {
            Dl.f.xa.call(this, a);
            this.Dk()
        };
        Dl.$inject = ["$scope", "$element", "$attrs", "$compile"];

        function El(a, b, c, e) {
            this.name = "scrollpane";
            Q.call(this, a, b, c);
            this.hU = e;
            this.scope.$on("keydown", w(this.iU, this))
        }
        z(El, Q);
        El.prototype.iU = function(a, b) {
            switch (b) {
                case 40:
                    this.EB(1);
                    break;
                case 38:
                    this.EB(-1)
            }
        };
        El.prototype.EB = function(a) {
            var b = this.element[0],
                c = Math.min(b.scrollHeight / 100, 0.5 * b.offsetHeight);
            b.scrollTop += a * c;
            a = b.scrollHeight - b.offsetHeight;
            this.hU.percentageScrolled = 0 == a ? 0 : 100 * b.scrollTop / a
        };
        El.$inject = ["$scope", "$element", "$attrs", "scrollbarModel"];

        function Fl(a, b, c, e) {
            this.name = "scrollbar";
            P.call(this, a, b, c);
            this.zv = e;
            this.yv = this.h(".handle");
            this.ik.push(this.zv.k("percentageScrolled:changed", w(this.LG, this)))
        }
        z(Fl, P);
        Fl.prototype.LG = function() {
            this.VA || (this.VA = 0.01 * (this.element[0].offsetHeight - this.yv.offsetHeight));
            this.yv.style.top = Math.floor(this.VA * this.zv.percentageScrolled) + "px"
        };
        Fl.$inject = ["$scope", "$element", "$attrs", "scrollbarModel"];

        function Gl(a, b, c, e, f, g, k, l, p) {
            this.name = "search";
            cl.call(this, a, b, c, e, f, g);
            this.fd = k;
            this.kC = l;
            this.ba = p;
            this.Jg = !1;
            this.sf = !0;
            this.df = !1;
            this.IC = this.h("#search-suggestion");
            this.JC = this.h(".suggestion-text");
            this.nV = this.h(".suggestion-trigger");
            this.vb = this.h("#search-input");
            this.jC = this.h("#search-query");
            this.eo = !1;
            this.scope.$watch(c.query, w(function(a) {
                a && this.ba.ic(a)
            }, this));
            this.fd.supportsInput || this.vb.setAttribute("disabled", "true");
            this.vb.addEventListener("keydown", w(this.CD, this), !0);
            this.vb.addEventListener("keyup", w(this.DD, this), !0);
            this.vb.addEventListener("input", w(this.BD, this), !0);
            this.fd.supportsNativeOsk && (this.vb.addEventListener("focus", w(this.Ot, this), !0), this.vb.addEventListener("blur", w(this.Ot, this), !0));
            this.scope.$on("letter-tile-key-press", w(function(a, b) {
                this.sf = !0;
                this.ED(b)
            }, this));
            this.scope.$on("keydown", w(this.FD, this));
            this.scope.$on("keyup", w(this.GD, this));
            this.ba.k("suggestions:changed", w(this.Ws, this));
            this.ba.k("query:changed", w(this.ct, this));
            this.ba.k("results:changed", w(this.HD, this))
        }
        z(Gl, cl);
        d = Gl.prototype;
        d.CD = function(a) {
            this.Lz(a.keyCode) && a.stopPropagation()
        };
        d.DD = function(a) {
            this.Lz(a.keyCode) && (this.sf = !1, a.stopPropagation());
            switch (a.keyCode) {
                case 8:
                    a.stopPropagation();
                    break;
                case 13:
                    this.Jg ? this.Zv() : this.df = !0, a.stopPropagation(), a.preventDefault()
            }
        };
        d.BD = function(a) {
            this.ba.ic(a.target.value, !1, !0)
        };
        d.Ot = function() {
            var a = document.activeElement == this.vb;
            a !== this.eo && (this.eo = a, this.scope.$emit("native-osk-status", this.eo))
        };
        d.Lz = function(a) {
            return 27 != a && 172 != a && 40 != a && 37 != a && 39 != a
        };
        d.da = function(a, b) {
            Gl.f.da.call(this, a, b);
            "search-suggestion" == b.id && this.ct();
            this.nv()
        };
        d.o = function() {
            Gl.f.o.call(this);
            this.kC.setTimeout(w(this.nv, this), 0)
        };
        d.Xb = function() {
            Gl.f.Xb.call(this);
            this.vc("isActiveAndQueryModelIsEmpty", this.kI)
        };
        d.nv = function() {
            this.isActive && (this.fd.supportsNativeOsk ? this.B(this.$h()) : this.B(this.Ef()))
        };
        d.GD = function(a, b, c) {
            switch (b) {
                case 13:
                    if (this.Zj() || c && C(sd(c), "suggestion-trigger")) this.ba.ic(this.ba.tk(), !1, !0), this.df = !0, this.sf && this.B(this.Ef());
                    a.stopPropagation();
                    break;
                case 172:
                case 71:
                    a.stopPropagation()
            }
        };
        d.FD = function(a, b, c, e) {
            switch (b) {
                case 40:
                    this.jK() && (a.stopPropagation(), a.preventDefault());
                    break;
                case 38:
                    this.mK() && (a.stopPropagation(), a.preventDefault());
                    break;
                case 37:
                    this.kK() && (a.stopPropagation(), a.preventDefault());
                    break;
                case 39:
                    this.lK() && (a.stopPropagation(), a.preventDefault());
                    break;
                case 172:
                case 71:
                    a.stopPropagation();
                    this.ba.fl();
                    break;
                default:
                    e instanceof KeyboardEvent && (13 != b && 27 != b && 8 != b && 83 != b && 170 != b && this.fd.supportsHardwareKeyboard) && this.B(this.$h())
            }
        };
        d.Qx = function() {
            return this.Ef().isActive
        };
        d.hw = function() {
            var a = this.$h();
            return a && a.isActive
        };
        d.Zj = function() {
            var a = this.fq();
            return a && a.isActive
        };
        d.jK = function() {
            return (this.Zj() || this.hw()) && this.Ef() ? (this.B(this.Ef()), !0) : this.ba.va() || !this.Jg
        };
        d.mK = function() {
            return this.Qx() && this.$j() && this.sf ? (this.B(this.fq()), !0) : this.Qx() && !this.sf && this.fd.supportsHardwareKeyboard ? (this.B(this.$h()), !0) : !1
        };
        d.kK = function() {
            return this.Zj() && !this.sf && this.fd.supportsHardwareKeyboard ? (this.B(this.$h()), !0) : !1
        };
        d.lK = function() {
            return this.hw() && this.$j() && this.vb.selectionEnd == this.vb.value.length ? (this.B(this.fq()), !0) : !1
        };
        d.Zv = function() {
            this.isActive && (this.N(), this.scope.$emit("keydown", 40), this.scope.$emit("keypress", 40), this.scope.$emit("keyup", 40))
        };
        d.g3 = function() {
            return !!this.ba.ul && 0 === this.ba.ul.r()
        };
        d.kI = function() {
            return this.isActive && this.ba.va()
        };
        d.$j = function() {
            return !!this.ba.tk()
        };
        d.ED = function(a) {
            "string" == typeof a ? this.ba.zy(a.replace("_", " ")) : this.JO(a) && this.ba.fl()
        };
        d.JO = function(a) {
            return !(!a || "delete-icon" !== a.ji)
        };
        d.ct = function() {
            !this.Zj() || (this.$j() || this.df) || this.B(this.Ef());
            this.df = !1;
            var a = this.ba.query;
            this.u(this.vb, this.fd.supportsInput || this.ba.va());
            this.fd.supportsInput ? this.vb.value != a && (this.vb.value = a) : this.s(this.jC, a);
            this.Jg = !1;
            this.u(this.children["search-pairing-help"].element, this.ba.va());
            this.rb();
            this.scope.$emit("toggle-loading", !this.ba.va());
            this.scope.$emit("loaded");
            this.Ws()
        };
        d.HD = function(a) {
            this.scope.$emit("toggle-loading", !1);
            this.scope.$emit("loaded", a);
            0 === a.r() ? (this.Jg = !1, this.ba.va() || this.rb("[[No videos are available|The message shown when a row has no videos to show.]]")) : (this.Jg = !0, this.df && this.Zv());
            this.df = !1
        };
        d.Ws = function() {
            this.s(this.JC, this.ba.tk() || "\u00a0");
            this.u(this.IC, this.$j())
        };
        d.Ef = function() {
            return this.children["search-keyboard"]
        };
        d.fq = function() {
            return this.children["search-suggestion"]
        };
        d.$h = function() {
            return this.children["search-input"]
        };
        Gl.$inject = "$scope $element $attrs locationService navigationService messageModel environmentModel timeService searchQueryModel".split(" ");

        function Hl(a, b, c, e, f, g, k, l, p) {
            this.name = "search";
            this.ph = !1;
            cl.call(this, a, b, c, f, g, k);
            this.sV = p;
            this.ve = l;
            this.qV = e("[[search|A tooltip indicating that a user can start searching within a text box]]...")(a);
            this.Zs = e("[[Use your GamePad to search.|A message that tells Wii U users to use their GamePad controller to enter a search.]]")(a);
            this.rV = this.Ng = !1;
            this.Sg = this.h("#search-query");
            this.scope.$watch(c.query, w(function(a) {
                a && this.ve.ic(a)
            }, this));
            this.scope.$on("keydown", w(this.zF, this));
            this.scope.$on("keyup",
                w(this.AF, this));
            this.ve.k("query:changed", w(this.Qu, this));
            this.ve.k("results:changed", w(this.BF, this));
            this.Sg.addEventListener("focus", w(function() {
                this.scope.$emit("search-input-focused")
            }, this), !1);
            this.Sg.addEventListener("blur", w(function() {
                this.scope.$emit("search-input-blurred")
            }, this), !1);
            this.Qu()
        }
        z(Hl, cl);
        d = Hl.prototype;
        d.AF = function(a, b) {
            switch (b) {
                case 40:
                case 37:
                case 39:
                case 38:
                    a.stopPropagation();
                    a.preventDefault();
                    break;
                case 13:
                case 27:
                    break;
                default:
                    this.ve.ic(this.Sg.textContent, !0, !0), a.stopPropagation()
            }
        };
        d.zF = function(a, b) {
            switch (b) {
                case 40:
                    if (this.ve.va() || !this.Ng) a.stopPropagation(), a.preventDefault();
                    break;
                case 38:
                    a.stopPropagation();
                    a.preventDefault();
                    break;
                case 27:
                    break;
                default:
                    a.stopPropagation()
            }
        };
        d.q3 = function() {
            return "search-query" === this.activeChildName
        };
        d.o = function() {
            Hl.f.o.call(this);
            this.yF = angular.element(this.Sg).scope();
            this.B(this.yF.focusable);
            this.Ng || this.rb(this.Zs)
        };
        d.Qu = function(a) {
            this.isActive && (a ? this.rb("") : (this.rb(this.Zs), this.Ng = !1));
            this.Sg.textContent = a || "";
            this.scope.$emit("toggle-loading", !this.ve.va());
            this.scope.$emit("loaded")
        };
        d.BF = function(a) {
            this.scope.$emit("toggle-loading", !1);
            this.scope.$emit("loaded", a);
            0 === a.r() ? (this.Ng = !1, this.ve.va() || this.rb("[[No videos are available|The message shown when a row has no videos to show.]]")) : this.Ng = !0
        };
        Hl.$inject = "$scope $element $attrs $interpolate locationService navigationService messageModel searchQueryModel timeService".split(" ");

        function Il() {
            this.$r = !1
        }
        Il.prototype.zR = function() {
            this.$r = !1
        };
        Il.prototype.Je = function(a) {
            return a ? "icon-unsubscribe" : "icon-subscribe"
        };
        Il.prototype.pq = function() {
            this.$r = !0
        };
        Il.prototype.Yf = function(a) {
            return a ? this.$r ? "[[Now Subscribed!|Tooltip suggesting that the user has just subscribed to the current video.]]" : "[[Already Subscribed!|Tooltip stating that the user is subscribed to the current video, but has tried to subscribe again.]]" : "[[Subscribe?|Tooltip suggesting that the user can subscribe tothe current video.]]"
        };

        function Jl(a, b, c, e, f, g, k) {
            this.name = "toasts";
            Q.call(this, a, b, c);
            this.$g = e;
            this.ut = g;
            this.xF = k;
            this.nd = [];
            this.La = null;
            this.zj = this.h(".static-toasts");
            this.wk = this.h(".rolling-toasts");
            this.Ou = this.eG();
            f.$on("mdx-toast-topic", w(this.fG, this));
            this.u(this.zj, !1)
        }
        z(Jl, Q);
        d = Jl.prototype;
        d.VE = function() {
            return 0 < this.nd.length || null != this.La
        };
        d.eG = function() {
            return {
                "android-phone": {
                    "true": "android-phone-connected",
                    "false": "android-phone-disconnected"
                },
                "android-tablet": {
                    "true": "android-tablet-connected",
                    "false": "android-tablet-disconnected"
                },
                "youtube-desktop": {
                    "true": "laptop-connected",
                    "false": "laptop-disconnected"
                },
                "blazer-phone": {
                    "true": "remote-connected",
                    "false": "remote-disconnected"
                },
                "blazer-tablet": {
                    "true": "remote-connected",
                    "false": "remote-disconnected"
                },
                "ytios-phone": {
                    "true": "ios-phone-connected",
                    "false": "ios-phone-disconnected"
                },
                "ytios-tablet": {
                    "true": "ios-tablet-connected",
                    "false": "ios-tablet-disconnected"
                }
            }
        };
        d.fG = function(a, b) {
            switch (b.action) {
                case "remoteConnected":
                    if ("remote-pair" != this.data && "remote-reset" != this.data) {
                        var c = b.params.Ze;
                        this.ju(c, !0)
                    }
                    break;
                case "remoteDisconnected":
                    "remote-pair" != this.data && "remote-reset" != this.data && (c = b.params.Ze, this.ju(c, !1));
                    break;
                case "setVolume":
                    this.WE(b.params.volume);
                    break;
                case "showQrCode":
                    this.La && this.La.so && this.$g.clearTimeout(this.La.so);
                    this.La = new ng(H.b + "/remote_share_toast.html", {
                        Kj: "shown",
                        UC: b.params.url
                    });
                    this.UE();
                    break;
                case "hideQrCode":
                    this.La &&
                        "shown" == this.La.data.Kj && (this.u(this.zj, !1), this.La.data.Kj = "", this.La.so = this.$g.setTimeout(w(function() {
                            this.La && "" === this.La.Kj && (this.La = null)
                        }, this), 700));
                    break;
                default:
                    return
            }
            this.TE();
            this.u(this.element[0], this.VE())
        };
        d.UE = function() {
            this.ut.get(this.La.templateUrl, {}, w(this.GQ, this))
        };
        d.GQ = function(a) {
            this.gb(this.zj, a);
            this.h(".qr-code-container").className += " " + this.La.data.Kj;
            this.h(".qr-code-image").src = this.La.data.UC;
            this.u(this.zj, !0)
        };
        d.TE = function() {
            0 < this.nd.length && this.ut.get(H.b + "/rolling_toast.html", {}, w(this.IG, this))
        };
        d.IG = function(a) {
            this.gb(this.wk, "");
            var b, c, e, f, g;
            this.nd.forEach(function(k) {
                this.wk.innerHTML += a;
                var l = this.wk.children;
                b = l[l.length - 1];
                b.id = this.Tl(k.id);
                b.className += " " + k.className + " ";
                c = b.querySelector(".toast-icon");
                c.className += " " + k.Vp;
                e = b.querySelector(".toast-progress");
                e.style.display = k.Bx ? "" : "none";
                f = b.querySelector(".progress");
                f.style.width = k.Ax + "%";
                g = b.querySelector(".toast-msg");
                this.gb(g, k.message)
            }, this)
        };
        d.WE = function(a) {
            if (!this.xF.Oa) {
                var b = this.ly("vol", !0, 7500),
                    c = Math.round(a / 10);
                b.className = "volume-toast";
                b.Bx = !0;
                b.Ax = a;
                b.message = "" + c;
                b.Vp = 8 <= c ? "volume-high" : 4 <= c ? "volume-mid" : 1 <= c ? "volume-low" : "volume-muted"
            }
        };
        d.ju = function(a, b) {
            var c = this.ly(a.id, !1, 5E3);
            c.className = "remote-connect";
            var e = a.sd.match(/^[^-]+-[^-]+/),
                e = e ? e[0] : "";
            c.Vp = this.Ou[e] ? this.Ou[e][b] : b ? "remote-connected" : "remote-disconnected";
            c.message = (new $e(a)).eh
        };
        d.ly = function(a, b, c) {
            var e = a ? Ha(this.nd, function(b) {
                return b.id === a
            }) : null;
            e ? (this.$g.clearTimeout(e.cr), (b = document.getElementById(this.Tl(e.id))) && ud(b, "")) : (e = new af, e.id = a || ia(e).toString(), b ? this.nd.unshift(e) : this.nd.push(e));
            e.cr = this.$g.setTimeout(w(this.NP, this, e), c);
            return e
        };
        d.NP = function(a) {
            var b = document.getElementById(this.Tl(a.id));
            td(b, "toast-roll");
            a.cr = this.$g.setTimeout(w(this.dR, this, a.id), 700)
        };
        d.dR = function(a) {
            this.nd = this.nd.filter(function(b) {
                return b.id != a
            });
            Jd(document.getElementById(this.Tl(a)))
        };
        d.Tl = function(a) {
            return "toast-" + a
        };
        Jl.$inject = "$scope $element $attrs timeService $rootScope templateClient environmentModel".split(" ");

        function Kl(a, b, c, e, f, g, k) {
            this.name = "transliteration";
            P.call(this, a, b, c);
            this.Pv = e;
            this.uM = f;
            this.Ke = g;
            this.langCodePair_ = this.scope.$eval(c.langCodePair);
            this.Sx = new dg(this.cN, 500, this);
            this.activeItemIndex = 0;
            this.$l = [];
            this.Hl = this.Rl = "";
            k.eN() && this.gN()
        }
        z(Kl, P);
        d = Kl.prototype;
        d.o = function() {
            Kl.f.o.call(this);
            this.B(this.children.transliteration)
        };
        d.N = function() {
            Kl.f.N.call(this);
            this.Jc(this.children.transliteration)
        };
        d.gN = function() {
            this.Pv.k("query:changed", w(this.GL, this));
            this.scope.$on("letter-tile-key-press", w(this.EL, this));
            this.scope.$on("list-item-index-change", w(this.DL, this))
        };
        d.GL = function(a) {
            if (a) {
                a = a.toLowerCase();
                var b = a.length < this.Hl.length,
                    c = this.Oy(a);
                !c && b && (c = this.cO(a));
                this.Ke.jz(c);
                (this.Rl = c) && this.Sx.start();
                this.Hl = a
            } else this.zq(), this.Ke.jz(""), this.Rl = ""
        };
        d.cN = function() {
            this.uM.bS(this.Rl, this.langCodePair_, w(this.WR, this))
        };
        d.Oy = function(a) {
            var b = "",
                c = this.Ke.Sy(); - 1 != a.indexOf(c) && (b = a.replace(c, ""));
            return b
        };
        d.cO = function(a) {
            for (var b = ""; !b && 0 < this.Ke.dm.length;) this.Ke.dm.pop(), b = this.Oy(a);
            return b
        };
        d.WR = function(a) {
            0 < a[1][0].length && this.Rl ? (this.$l = a[1][0][1], this.children.transliteration.setData(this.$l), this.activeItemIndex = 0) : this.zq()
        };
        d.zq = function() {
            this.$l.length = 0;
            this.Sx.xh();
            this.children.transliteration.setData(this.$l)
        };
        d.EL = function(a, b) {
            this.Ke.dm.push(b);
            this.Hl = this.Ke.Sy();
            this.Pv.ic(this.Hl);
            this.zq();
            this.scope.$emit("transliteration-selected");
            a.stopPropagation()
        };
        d.DL = function(a, b) {
            this.activeItemIndex = b
        };
        Kl.$inject = "$scope $element $attrs searchQueryModel transliterationService transliterationModel locale".split(" ");

        function Ll(a, b, c, e, f, g, k, l, p, q, r, t, G) {
            this.name = "transport";
            nl.call(this, a, b, c, e);
            this.tD = f;
            this.za = g;
            this.AD = k;
            this.YE = l;
            this.Hj = p;
            this.Vn = q;
            this.Xj = r;
            this.xn = t;
            this.ZE = G;
            this.un = 3E3;
            this.Qb = [];
            this.D = Ib;
            this.pd = Hb;
            this.ff = this.eF();
            this.uu = v("player-controls-container") ? document.getElementById("player-controls-container") : "player-controls-container";
            this.pk = yd("html5-video-controls");
            this.pt = this.h(".player-time-elapsed");
            this.qt = this.h(".player-time-total");
            this.sD = this.h(".button-tooltip")
        }
        z(Ll, nl);
        d = Ll.prototype;
        d.eF = function() {
            var a = [];
            this.il() && a.push(this.CQ());
            var a = a.concat(this.zQ()),
                b = [];
            (3 > a.length ? a : b).push(this.BQ());
            b.push(this.xQ());
            b.push(this.yQ());
            return a.concat(this.AQ()).concat(b)
        };
        d.BQ = function() {
            return {
                id: this.D.Qq,
                className: this.pd.Qq,
                Fd: w(function() {
                    this.scope.transport.cM()
                }, this)
            }
        };
        d.AQ = function() {
            return [{
                disabled: !0,
                id: this.D.Xk,
                className: this.pd.Xk,
                hq: w(function() {
                    this.scope.transport.gK()
                }, this)
            }, {
                dE: !0,
                id: this.D.wv,
                className: this.pd.vv,
                Fd: w(function() {
                    this.scope.transport.Lk()
                }, this)
            }, {
                disabled: !0,
                id: this.D.Wk,
                className: this.pd.Wk,
                hq: w(function() {
                    this.scope.transport.fK()
                }, this)
            }]
        };
        d.CQ = function() {
            var a = this.Vn;
            return {
                checked: !1,
                id: this.D.al,
                Je: function() {
                    return a.Je(this.checked)
                },
                Fd: w(function() {
                    this.scope.transport.pq()
                }, this),
                disabled: !1,
                Yf: function() {
                    return a.Yf(this.checked)
                }
            }
        };
        d.zQ = function() {
            return [{
                checked: !1,
                id: this.D.Vh,
                Je: function() {
                    return this.checked ? "icon-like-checked" : "icon-like"
                },
                Fd: w(function() {
                    this.scope.transport.Lx(!0)
                }, this),
                disabled: !1,
                Yf: function() {
                    return this.checked ? "[[Liked!|Tooltip stating that the user has liked the current video.]]" : "[[Like?|Tooltip stating that the user can like the video by clicking the button.]]"
                }
            }, {
                checked: !1,
                id: this.D.Uh,
                Je: function() {
                    return this.checked ? "icon-dislike-checked" : "icon-dislike"
                },
                Fd: w(function() {
                        this.scope.transport.Lx(!1)
                    },
                    this),
                disabled: !1,
                Yf: function() {
                    return this.checked ? "[[Disliked!|Tooltip stating that the user has disliked the current video.]]" : "[[Dislike?|Tooltip stating that the user can dislike the video by clicking the button.]]"
                }
            }]
        };
        d.xQ = function() {
            return {
                qw: !1,
                id: this.D.Sh,
                className: this.pd.Sh,
                Fd: w(function() {
                    this.scope.transport.NL()
                }, this)
            }
        };
        d.yQ = function() {
            return {
                disabled: !0,
                id: this.D.ql,
                className: this.pd.ql,
                Fd: w(function() {
                    this.scope.transport.bM()
                }, this)
            }
        };
        d.Va = function() {
            Ll.f.Va.call(this);
            this.za.k("video:changed", w(this.GF, this));
            this.Qt()
        };
        d.Qt = function() {
            this.gv();
            this.Qb.push(this.scope.$on("keydown", w(function(a, b) {
                this.Sb();
                switch (b) {
                    case 37:
                    case 39:
                        a.stopPropagation()
                }
            }, this)));
            this.Qb.push(this.scope.$on("keyup", w(function(a, b) {
                this.Sb();
                switch (b) {
                    case 37:
                    case 39:
                        a.stopPropagation()
                }
            }, this)));
            this.Qb.push(this.scope.$on("list-item-index-change", w(function(a) {
                this.Fv();
                a.stopPropagation()
            }, this)));
            this.Qb.push(this.scope.$root.$on("mousemove", w(this.VG, this)));
            this.Qb.push(this.za.k("isPlaying:changed", w(this.Ru, this)));
            this.Qb.push(this.za.k("isPlayingAd:changed",
                w(this.Su, this)));
            this.Qb.push(this.za.k("state:changed", w(this.Tu, this)));
            this.Qb.push(this.Hj.k("duration:changed", w(this.Ck, this, this.qt)));
            this.Qb.push(this.Hj.k("currentTime:changed", w(this.Ck, this, this.pt)));
            this.xn.k("cache:changed", w(this.TG, this))
        };
        d.gv = function() {
            this.Qb.forEach(function(a) {
                a()
            });
            this.Qb.length = 0
        };
        d.o = function() {
            this.B(this.children[this.D.nf]);
            this.enable();
            this.za.isPlaying ? nl.prototype.o.call(this) : Q.prototype.o.call(this);
            this.lv()
        };
        d.N = function() {
            nl.prototype.N.call(this);
            this.lv();
            this.Jc(this.children[this.D.nf]);
            this.disable()
        };
        d.enable = function() {
            this.Su(this.za.isPlayingAd);
            this.Ru(this.za.isPlaying);
            this.Tu(this.za.state);
            this.Ck(this.qt, this.Hj.duration);
            this.Ck(this.pt, this.Hj.currentTime);
            this.ex();
            this.Qt();
            var a = this.children[this.D.cx];
            a && a.enable()
        };
        d.disable = function() {
            this.gv();
            this.children[this.D.cx].disable()
        };
        d.Yq = function() {
            this.za.isPlaying && this.isActive ? (this.YE.mode(null), this.scope.$emit("hidden")) : this.Sb()
        };
        d.da = function(a, b) {
            Ll.f.da.call(this, a, b);
            b.id === this.D.nf && this.yf()
        };
        d.Su = function(a) {
            this.wp(!a);
            this.children[this.D.nf].xe()
        };
        d.Ck = function(a, b) {
            this.s(a, this.AD.Mh(b))
        };
        d.Ru = function(a) {
            a && this.Sb();
            this.wp(!this.za.isPlayingAd);
            this.uw();
            this.$a(this.D.wv).className = a ? this.pd.vv : this.pd.yI;
            this.yf()
        };
        d.Tu = function(a) {
            a === Db.ERROR && this.wp(!1);
            this.uw()
        };
        d.VG = function() {
            this.Sb()
        };
        d.TG = function(a) {
            "subscription" === a ? this.ex() : "video_like_value" === a && this.vA()
        };
        d.ex = function() {
            this.il() && (this.$a(this.D.al).checked = this.rx(), this.yf())
        };
        d.vA = function() {
            var a = this.xn.get("video_like_value", this.Xj.currentVideo.videoId);
            this.$a(this.D.Vh).checked = "like" == a;
            this.$a(this.D.Uh).checked = "dislike" == a;
            this.yf()
        };
        d.il = function() {
            return this.ZE.Ac(qb)
        };
        d.rx = function() {
            return !!this.xn.get("subscription", this.HT())
        };
        d.uw = function() {
            var a = this.za.tw(),
                b = this.$a(this.D.Sh);
            b.disabled = !a;
            a && (b.qw = !$a(this.za.$n()))
        };
        d.wp = function(a) {
            this.$a(this.D.Wk).disabled = !a;
            this.$a(this.D.Xk).disabled = !a;
            this.$a(this.D.ql).disabled = !a;
            this.$a(this.D.Sh).disabled = !a;
            this.$a(this.D.Vh).disabled = !a;
            this.$a(this.D.Uh).disabled = !a;
            this.il() && (this.$a(this.D.al).disabled = !a);
            this.yf()
        };
        d.Lk = function() {
            this.za.Lk()
        };
        d.pq = function() {
            this.Vn.pq();
            this.rx() || this.scope.$emit("request-toggle-subscription", this.Xj.currentVideo.channel)
        };
        d.GF = function() {
            this.vA();
            this.il() && this.Vn.zR()
        };
        d.Lx = function(a) {
            var b = this.$a(this.D.Vh),
                c = this.$a(this.D.Uh);
            (a ? b : c).checked || this.scope.$emit("request-like-video", this.Xj.currentVideo.videoId, a ? "like" : "dislike")
        };
        d.z4 = function(a) {
            a.checked = !a.checked;
            this.yf()
        };
        d.fK = function() {
            this.Sb();
            this.za.Xl(10)
        };
        d.gK = function() {
            this.Sb();
            this.za.Xl(-10)
        };
        d.cM = function() {
            this.scope.$emit("request-search")
        };
        d.bM = function() {
            this.za.pause();
            this.scope.$emit("request-flag-options")
        };
        d.NL = function() {
            this.za.pause();
            this.scope.$emit("request-cc-options")
        };
        d.$a = function(a) {
            return Ha(this.ff, function(b) {
                return b.id === a
            })
        };
        d.y3 = function() {
            this.ff = this.ff.slice()
        };
        d.yf = function() {
            this.children[this.D.nf].setData(this.ff);
            this.aa()
        };
        d.aa = function() {
            this.Fv()
        };
        d.Fv = function() {
            var a = this.ff[this.children[this.D.nf].activeIndex],
                a = a.Yf ? this.tD(a.Yf())(this.scope) : "";
            this.s(this.sD, a)
        };
        d.HT = function() {
            var a = this.Xj.currentVideo;
            return a && a.channel ? a.channel.ua : ""
        };
        d.lv = function() {
            this.pk = this.pk || yd("html5-video-controls");
            if (this.uu && this.pk) {
                var a = this.uu.getBoundingClientRect(),
                    b = "2em";
                a.top && (b = Math.round(Dd(window) - a.top) + "px");
                a = this.pk;
                v("bottom") ? Hg(a, b, "bottom") : Ua("bottom", na(Hg, a))
            }
        };
        Ll.$inject = "$scope $element $attrs $timeout $interpolate playerService locale locationService progressModel subscribeLogic watchModel cacheService environmentModel".split(" ");

        function Ml(a, b, c, e) {
            this.name = "transportControlsList";
            Z.call(this, a, b, c, e)
        }
        z(Ml, Z);
        d = Ml.prototype;
        d.o = function() {
            Ml.f.o.call(this);
            for (var a = this.scope.transport.ff.length, b = 0; b < a; ++b)
                if (this.data[b].dE) {
                    this.Qh(b, !1);
                    break
                }
        };
        d.Si = function() {
            return 0 === this.element.children().length
        };
        d.Vo = function(a, b) {
            return "<div yt:focusable " + this.Gm(b) + "></div>"
        };
        d.Dk = function() {
            for (var a = this.element.children(), b = a.length, c = 0; c < b; ++c) a[c].className = this.Gm(c)
        };
        d.Gm = function(a) {
            var b = ["item"];
            if (this.data) {
                var c = this.data[a];
                c && (b.push(c.className), c.Je && b.push(c.Je()), c.disabled && b.push("disabled-button"), c.qw && b.push("highlighted"))
            }
            a === this.activeIndex && b.push("active");
            return b.join(" ")
        };
        d.YA = function(a, b, c) {
            if (this.isActive) switch (this.scope.transport.Sb(), b) {
                case 37:
                case 39:
                    a.stopPropagation();
                    break;
                case 13:
                    this.jR(this.data[this.lA(c)]), a.stopPropagation()
            }
        };
        d.iB = function(a, b, c) {
            if (this.isActive) switch (this.scope.transport.Sb(), b) {
                case 37:
                case 39:
                    a.stopPropagation();
                    break;
                case 13:
                    this.qR(this.data[this.lA(c)]), a.stopPropagation()
            }
        };
        d.lA = function(a) {
            if (a && a.className) {
                a = a.className.split(" ");
                for (var b = a.length, c = this.data, e = c.length, f, g = 0; g < e; ++g) {
                    f = c[g];
                    for (var k = 0; k < b; ++k)
                        if ((f.className || f.Je()) === a[k]) return g
                }
            }
            return this.activeIndex
        };
        d.qR = function(a) {
            a && !a.disabled && a.Fd && a.Fd(this.activeIndex)
        };
        d.jR = function(a) {
            a && !a.disabled && a.hq && a.hq()
        };
        d.wB = function(a) {
            return !this.data[a].disabled
        };
        d.xe = function() {};
        d.Qh = function(a, b) {
            var c = this.element.children(),
                e = this.activeIndex;
            this.activeIndex = a;
            var f = c[e];
            f && (f.className = this.Gm(e));
            if (c = c[this.activeIndex]) c.className = this.Gm(this.activeIndex), c.focus();
            b && this.scope.$emit("list-item-index-change", this.activeIndex)
        };
        Ml.$inject = ["$scope", "$element", "$attrs", "$compile"];

        function Nl(a, b, c, e) {
            this.name = "videoTile";
            Yk.call(this, a, b, c);
            this.className = "video-tile";
            this.NC = e;
            this.OC = this.h(".title");
            this.MC = this.h(".name");
            this.LC = this.h(".updated");
            this.lt = this.h(".activity");
            this.nt = this.h(".duration");
            this.mt = this.h(".description");
            this.ZH = angular.element(this.h(".video-thumb"));
            this.KC = this.h(".details");
            this.bn = "videotile";
            this.$H = new Wk;
            this.bw = ""
        }
        z(Nl, Yk);
        Nl.prototype.F0 = 90;
        Nl.prototype.setData = function(a) {
            Nl.f.setData.call(this, a);
            this.aa()
        };
        Nl.prototype.aa = function() {
            Nl.f.aa.call(this);
            this.u(this.element[0], this.data);
            if (this.data) {
                this.s(this.OC, this.data.title);
                this.s(this.MC, this.data.channel.displayName);
                this.s(this.LC, this.data.uploadedDateLabel);
                var a = this.data.channel.ke == this.data.channel.serviceQuery ? this.data.cn || this.data.channel.displayName : this.NC(this.data.Um)({
                    username: this.data.cn || this.data.channel.displayName
                });
                this.u(this.lt, a);
                this.s(this.lt, a);
                this.u(this.nt, this.data.ht);
                this.s(this.nt, this.data.ht);
                this.u(this.mt,
                    this.data.description);
                var a = this.data.description,
                    b = 86,
                    a = a || "";
                if (!(a.length < b || 0 > b)) {
                    for (var c = b; 0 < c; c--)
                        if (" " == a[c]) {
                            b = c;
                            break
                        }
                    a = a.substr(0, b) + "..."
                }
                this.s(this.mt, a);
                this.KC.style.backgroundImage = "url(" + (this.data.Ps || this.data.channel.imageUrl || "") + ")";
                this.RD()
            }
        };
        Nl.prototype.RD = function() {
            this.data && this.data.imageUrl !== this.bw && (this.$H.tS(this.ZH, this.data.imageUrl, "preloaded"), this.bw = this.data.imageUrl)
        };
        Nl.$inject = ["$scope", "$element", "$attrs", "$interpolate"];

        function Ol(a, b, c, e, f, g, k, l, p, q, r, t, G, oc, Og) {
            this.name = "watch";
            cl.call(this, a, b, c, l, p, e);
            this.tV = c;
            this.eD = k;
            this.ND = f;
            this.dD = g;
            this.fk = r;
            this.ID = t;
            this.JD = G;
            this.Iu = oc;
            this.eE = Og;
            this.su = this.Nj = null;
            this.ku = 0;
            this.tt = null;
            this.Y = q;
            this.Lu = this.h("#branding-container");
            this.Jf = this.wo = this.wu = this.Ah = null;
            this.vo = !0;
            this.kk = !1;
            this.Ku = -1;
            this.CF()
        }
        z(Ol, cl);
        d = Ol.prototype;
        d.o = function() {
            this.$b.ml("transport") && (this.activeChildName = "transport");
            cl.prototype.o.call(this)
        };
        d.rq = function() {
            return this.$b.ml("search") || !this.$b.mode()
        };
        d.sq = function() {
            return !1
        };
        d.N = function() {
            cl.prototype.N.call(this);
            this.xi(0)
        };
        d.mc = function(a) {
            this.kk = !1;
            (this.su = a) ? (this.Cw(), this.OO = a.videoId, this.MO(), this.NO(), this.LO()) : (this.OO = "", this.Kx().nk())
        };
        d.Xb = function() {
            Ol.f.Xb.call(this);
            this.vc("isTitleMode", this.iH);
            this.vc("getCurrentVideo", this.re);
            this.vc("isTransportActive", this.Nu)
        };
        d.LO = function() {
            this.vo = !0;
            this.bN();
            this.Y.Ih();
            this.Kx().Ox()
        };
        d.v4 = function(a) {
            this.qp = a || 0
        };
        d.Nu = function() {
            return this.isActive && "transport" === this.activeChildName
        };
        d.iH = function() {
            return this.$b.ml("title")
        };
        d.CF = function() {
            this.scope.$on("$routeChangeSuccess", w(this.WJ, this));
            this.scope.$on("hidden", w(this.VJ, this));
            this.scope.$on("keyup", w(this.YJ, this));
            this.scope.$on("keydown", ah(5, w(this.XJ, this), function(a, b) {
                return 228 === b || 227 === b
            }));
            this.Y.k("isPlayingAd:changed", w(this.TJ, this));
            this.Y.k("state:changed", w(this.UJ, this))
        };
        d.WJ = function(a, b) {
            b && b.params && b.params.mode && "transport" === b.params.mode ? this.activeChildName = "transport" : this.isActive && (this.activeChildName = null, this.focus())
        };
        d.VJ = function() {
            this.ku = this.fk.fi().getTime()
        };
        d.TJ = function(a) {
            a ? (this.Lu.style.display = "none", (a = this.Y.fn) && this.qO(a)) : (this.Lu.style.display = "block", this.mO())
        };
        d.UJ = function(a) {
            switch (a) {
                case 3:
                    this.kk && this.xi(1);
                    break;
                case 2:
                    this.kk && this.BA(!1);
                    break;
                case 1:
                    this.BA(!0);
                    this.kk = !0;
                    break;
                case Db.ERROR:
                    this.xi(0), this.nR()
            }
        };
        d.xi = function(a) {
            this.scope.$emit("toggle-loading", a)
        };
        d.bN = function() {
            this.element.toggleClass("play", !1);
            this.element.toggleClass("pause", !1)
        };
        d.BA = function(a) {
            !a || a && !this.vo ? (this.element.toggleClass("play", a), this.element.toggleClass("pause", !a), this.xi(0)) : this.Iz(this.Iu.currentTime + 0.1, 0.1);
            this.vo = a
        };
        d.Iz = function(a, b) {
            this.fk.clearTimeout(this.Ku);
            this.Iu.currentTime > a ? this.xi(0) : this.Ku = this.fk.setTimeout(w(this.Iz, this, a, b), 1E3 * b)
        };
        d.LK = function(a) {
            this.element.toggleClass("loading", a)
        };
        d.qO = function(a) {
            this.eD.Qa(a, w(function(a) {
                if (a = a.i.ha(0)) this.Nj = a, this.tt = this.dD.Qa(this.Nj.channel.ua)
            }, this))
        };
        d.mO = function() {
            this.tt = this.Nj = null
        };
        d.XJ = function(a, b) {
            switch (b) {
                case 228:
                    this.Y.Xl(10);
                    break;
                case 227:
                    this.Y.Xl(-10)
            }
        };
        d.YJ = function(a, b) {
            switch (b) {
                case 39:
                case 176:
                    this.Y.isPlayingAd || this.scope.$emit("next-video");
                    a.stopPropagation();
                    break;
                case 37:
                case 177:
                    this.Y.isPlayingAd || this.scope.$emit("previous-video");
                    a.stopPropagation();
                    break;
                case 179:
                    this.Y.Lk();
                    a.stopPropagation();
                    break;
                case 19:
                    this.Y.pause();
                    break;
                case 250:
                    this.Y.bd();
                    a.stopPropagation();
                    break;
                case 8:
                case 27:
                    this.Y.isPlaying && this.Nu() && (this.$b.mode(null), a.stopPropagation(), a.preventDefault(), this.scope.$emit("play-sound", "cross-back"))
            }(27 === b ||
                8 === b) && this.ku + 1E3 > this.fk.fi().getTime() && (a.stopPropagation(), a.preventDefault())
        };
        d.Ry = function() {
            var a = this.re();
            return a && a.channel ? a.channel.bp : null
        };
        d.MO = function() {
            var a = this.re();
            a && (this.Nv(), this.Y.Ih(), this.ND.Qa(a.channel.ua, w(this.xK, this)))
        };
        d.Jw = function() {
            this.Ah || (this.Ah = this.h("#branding-banner"), this.wu = this.h("#branding-banner-image"), this.wo = this.h("#branding-banner-overlay"));
            this.Jf || (this.Jf = this.h("#branding-watermark"))
        };
        d.xK = function(a) {
            this.re().channel.bp = a;
            var b = 15;
            this.Jw();
            this.Y.Ih();
            if (a && a.Vk) this.Y.Ph("show-branding-banner-start", 0.1, w(this.fx, this)), this.Y.Ph("hide-branding-banner", 5, w(this.SJ, this));
            else if (this.ID.Ac(ob)) {
                b = this.JD.Wo();
                if (!b || !b.channel) return;
                a = new bc;
                a.Kv = !0;
                a.Vk = ug(b.videoId, "vi", "mqdefault");
                this.re().channel.bp = a;
                b = 8
            } else {
                this.Nv();
                this.Y.Ih();
                return
            }
            this.Y.Ph("show-branding-banner-end", this.re().duration - b, w(this.fx, this))
        };
        d.Nv = function() {
            this.Jw();
            this.Ah.style.display = "none";
            this.Jf.style.display = "none"
        };
        d.SJ = function() {
            this.Ah.style.display = "none";
            this.wo.style.display = "none";
            var a = this.Ry();
            this.Jf.style.display = a && a.Dq ? "block" : "none"
        };
        d.fx = function() {
            var a = this.Ry();
            this.Jf.src = a.Dq;
            this.wu.src = a.Vk;
            this.Jf.style.display = "none";
            this.Ah.style.display = "block";
            this.wo.style.display = a.Kv ? "block" : "none"
        };
        d.NO = function() {
            var a = this.re();
            a && (a.Kb && a.channel.ke) && this.eE.Qa(a.channel.ke, w(this.zM, this, a.channel))
        };
        d.zM = function(a, b) {
            a.Kb = b.Kb
        };
        d.nR = function() {
            this.scope.$emit(this.Y.Kg ? "request-playback-authorization" : "request-player-error", this.Y.lj)
        };
        d.Kx = function() {
            return this.Y
        };
        d.re = function() {
            return this.Y.isPlayingAd ? this.IP() : this.su
        };
        d.IP = function() {
            return this.Nj
        };
        Ol.$inject = "$scope $element $attrs messageModel brandingService userProfileService videoPlaybackInfoService locationService navigationService playerService timeService environmentModel watchModel progressModel channelPaidInfoService".split(" ");

        function Pl(a, b, c, e, f, g) {
            this.name = "title";
            nl.call(this, a, b, c, e);
            this.vF = f;
            this.Hu = g;
            this.un = 3E3;
            this.SD = this.h("img");
            this.VD = this.h(".player-video-title");
            this.TD = this.h(".username");
            this.UD = this.h(".uploaded-date");
            this.XD = this.h(".view-count-label");
            this.WD = this.h(".view-count");
            this.Hu.k("isPlayingAd:changed", w(function(a) {
                this.u(this.element[0], !a)
            }, this))
        }
        z(Pl, nl);
        Pl.prototype.Yq = function() {
            this.Hu.isPlaying ? this.vF.mode(null) : this.Sb()
        };

        Pl.prototype.mc = function(a) {
            a && (this.SD.src = a.channel.imageUrl, this.s(this.VD, a.title), this.s(this.TD, a.channel.displayName), this.s(this.UD, a.uploadedDateLabel), this.s(this.XD, a.viewCountLabel), this.u(this.WD, !!a.viewCount))
        };

        Pl.$inject = "$scope $element $attrs $timeout locationService playerService".split(" ");
        var H = angular.module("leanback-app", ["leanback-templates", "ngResource", "localization"]);
        H.config(["$routeProvider", "$locationProvider", function(a) {
            a.when("/browse", {
                state: function() {
                    return "browse"
                }
            });
            a.when("/watch", {
                state: function() {
                    return "watch"
                }
            });
            a.when("", {
                state: function() {
                    return -1 < window.location.href.indexOf("pairingCode=") ? "dialog" : "browse"
                }
            });
            a.otherwise({
                redirectTo: "/browse",
                state: function() {
                    return "browse"
                }
            })
        }]);
        H.run(["bootstrapService", function(a) {
            a.bootstrap()
        }]);
        H.filters = function(a) {
            a.filter("formatTime", ["locale", function(a) {
                return function(c) {
                    return a.Mh(c)
                }
            }]);
            a.filter("truncate", function() {
                return function(a, c, e) {
                    var f = 4 <= c ? c - 4 : c;
                    a = a || "";
                    return a.length < c ? a : e ? "..." + a.substr(a.length - f, a.length) : a.substr(0, f) + "..."
                }
            });
            a.filter("formatNumber", ["locale", function(a) {
                return function(c) {
                    return a.$f(c)
                }
            }]);
            a.filter("toEncodedUrl", function() {
                return function(a) {
                    a = a ? encodeURI(a) : void 0;
                    return a
                }
            })
        };

        function Ql(a, b) {
            this.uL = new jh(a);
            this.rL = b ? b : "callback";
            this.w = 5E3
        }
        var Rl = 0;
        Ql.prototype.dU = function(a) {
            this.w = a
        };
        Ql.prototype.U1 = function() {
            return this.w
        };
        Ql.prototype.send = function(a, b, c, e) {
            a = a || null;
            e = e || "_" + (Rl++).toString(36) + y().toString(36);
            h._callbacks_ || (h._callbacks_ = {});
            var f = this.uL.clone();
            if (a)
                for (var g in a) a.hasOwnProperty && !a.hasOwnProperty(g) || f.lf(g, a[g]);
            b && (b = Sl(e, b), h._callbacks_[e] = b, f.lf(this.rL, "_callbacks_." + e));
            b = tf(f.toString(), {
                timeout: this.w,
                zK: !0
            });
            c = km(e, a, c);
            b.CL(c);
            return {
                Id: e,
                Wx: b
            }
        };
        Ql.prototype.cancel = function(a) {
            a && (a.Wx && a.Wx.cancel(), a.Id && lm(a.Id, !1))
        };

        function km(a, b, c) {
            return function() {
                lm(a, !1);
                c && c(b)
            }
        }

        function Sl(a, b) {
            return function(c) {
                lm(a, !0);
                b.apply(void 0, arguments)
            }
        }

        function lm(a, b) {
            h._callbacks_[a] && (b ? delete h._callbacks_[a] : h._callbacks_[a] = n)
        };

        function mm(a, b) {
            function c(a) {
                a.controller.Va()
            }

            function e(b, c) {
                a.factory(b.name, ["$injector", function(a) {
                    return a.instantiate(c, b)
                }]);
                b.altName && a.factory(b.altName, [b.name, function(a) {
                    return a
                }])
            }
            H.filters(a);
            H.value("locale", b);
            H.value("brandable", !1);
            [{
                    name: "activityParser",
                    constructor: yg
                }, {
                    name: "activityReportingService",
                    constructor: Lg
                }, {
                    name: "angularHelper",
                    constructor: Zg
                }, {
                    name: "authService",
                    constructor: Ng
                }, {
                    name: "bootstrapService",
                    constructor: Rg
                }, {
                    name: "bountyService",
                    constructor: Sg
                }, {
                    name: "brandingParser",
                    constructor: zg
                }, {
                    name: "browseModel",
                    constructor: Hc
                }, {
                    name: "cacheService",
                    constructor: Eg
                }, {
                    name: "channelPaidInfoParser",
                    constructor: Ag
                }, {
                    name: "channelSuggestionParser",
                    constructor: Bg
                }, {
                    name: "captionsSettingsService",
                    constructor: Se
                }, {
                    name: "crashReportingService",
                    constructor: Tg
                }, {
                    name: "csiService",
                    constructor: hg
                }, {
                    name: "debugModel",
                    constructor: nc,
                    hG: {
                        opt_value: []
                    }
                }, {
                    name: "debugCallService",
                    constructor: Ug
                }, {
                    name: "environmentModel",
                    constructor: te
                }, {
                    name: "featuredParser",
                    constructor: Cg
                }, {
                    name: "gestureRecognizer",
                    constructor: Kb
                }, {
                    name: "gestureService",
                    constructor: $g
                }, {
                    name: "keyMapModel",
                    constructor: se
                }, {
                    name: "localStorage",
                    constructor: Re
                }, {
                    name: "locationService",
                    constructor: bh
                }, {
                    name: "messageModel",
                    constructor: ue
                }, {
                    name: "navigationService",
                    constructor: ch
                }, {
                    name: "personalDataService",
                    constructor: dh
                }, {
                    name: "playerFactoryService",
                    constructor: eh
                }, {
                    name: "playerService",
                    constructor: fh
                }, {
                    name: "playerVariablesModel",
                    constructor: Ue
                }, {
                    name: "playlistParser",
                    constructor: Dg
                }, {
                    name: "postPlayModel",
                    constructor: Ye
                }, {
                    name: "postPlayReportingService",
                    constructor: gh
                }, {
                    name: "privateDataService",
                    constructor: ih
                }, {
                    name: "progressModel",
                    constructor: Ze
                }, {
                    name: "quickSuggestService",
                    constructor: ff
                }, {
                    name: "remoteService",
                    constructor: Hj
                }, {
                    name: "resizeService",
                    constructor: Ij
                }, {
                    name: "retentionReportingService",
                    constructor: Jj
                }, {
                    name: "samsungService",
                    constructor: Kj
                }, {
                    name: "scrollbarModel",
                    constructor: bf
                }, {
                    name: "settingsRowService",
                    constructor: Pj
                }, {
                    name: "searchModel",
                    constructor: cf
                }, {
                    name: "searchRowService",
                    constructor: Mj
                }, {
                    name: "searchHistoryService",
                    constructor: Lj
                },
                {
                    name: "searchQueryModel",
                    constructor: kg
                }, {
                    name: "statsService",
                    constructor: Rj
                }, {
                    name: "steelDialService",
                    constructor: Sj
                }, {
                    name: "subscribeLogic",
                    constructor: Il
                }, {
                    name: "subscriptionsParser",
                    constructor: Fg
                }, {
                    name: "templateClient",
                    constructor: Xk
                }, {
                    name: "timeService",
                    constructor: gg
                }, {
                    name: "transliterationModel",
                    constructor: qg
                }, {
                    name: "transliterationService",
                    constructor: Ak
                }, {
                    name: "userProfileParser",
                    constructor: Gg
                }, {
                    name: "vevoPlaylistService",
                    constructor: Bk
                }, {
                    name: "videoParser",
                    constructor: xg
                }, {
                    name: "watchHistoryModel",
                    constructor: rg
                }, {
                    name: "watchModel",
                    constructor: sg
                }, {
                    name: "ytHttp",
                    constructor: ef
                }
            ].forEach(function(b) {
                a.factory(b.name, ["$injector", function(a) {
                    return a.instantiate(b.constructor, b.hG)
                }])
            });
            a.factory("bambooService", ["$injector", "environmentModel", function(a, b) {
                return a.instantiate(b.Ue ? Qg : Ig)
            }]);
            a.factory("soundService", ["$injector", "environmentModel", function(a, b) {
                return a.instantiate(b.supportsSounds ? Qj : Jg)
            }]);
            [{
                    name: "likeService",
                    httpMethod: "post",
                    path: "/videos/{videoId}/ratings",
                    template: '<yt:rating value="{likeValue}"/>'
                },
                {
                    name: "subscribeService",
                    httpMethod: "post",
                    path: "/users/default/subscriptions",
                    template: '<category scheme="https://web.archive.org/web/20130711074931/http://gdata.youtube.com/schemas/2007/subscriptiontypes.cat" term="channel"/><yt:username>{channelName}</yt:username>'
                }, {
                    name: "unsubscribeService",
                    httpMethod: "delete",
                    path: "/users/default/subscriptions/{subscriptionId}",
                    template: ""
                }
            ].forEach(function(a) {
                e(a, ["ytHttp", "authService", "httpMethod", "path", "template", Yg])
            });
            [{
                name: "brandingService",
                path: "/partners/{userName}/branding/default",
                parser: "brandingParser",
                paramKey: "userName",
                params: {
                    fields: "yt:option[@name='device_watchpage.watermark.image.url' or @name='generictv_watchpage.banner.image.url' or @name='channel.banner.tv.image.url' or @name='watchpage.global.featured_playlist.id' or @name='channel.featured_video_module.video_id.string']"
                }
            }, {
                name: "userPlaylistsService",
                path: "/users/{userName}/playlists",
                parser: "playlistParser",
                paramKey: "userName",
                params: {
                    fields: "entry(yt:playlistId,title,summary,author,yt:countHint)"
                }
            }, {
                name: "channelPaidInfoService",
                path: "/channels/{channelId}",
                parser: "channelPaidInfoParser",
                paramKey: "channelId",
                params: {
                    fields: "yt:paidContent"
                }
            }, {
                name: "channelPaidInfoService",
                path: "/channels/{channelId}",
                parser: "channelPaidInfoParser",
                paramKey: "channelId",
                params: {
                    fields: "yt:paidContent"
                }
            }, {
                name: "userSubscriptionsService",
                path: "/users/{userName}/subscriptions",
                parser: "subscriptionsParser",
                paramKey: "userName",
                params: {
                    fields: "entry(id,yt:username,yt:channelId),openSearch:totalResults",
                    "max-results": 50
                }
            }, {
                name: "userProfileService",
                path: "/users/{userName}",
                parser: "userProfileParser",
                paramKey: "userName",
                params: {
                    fields: "yt:userId,yt:username,title,media:thumbnail,yt:statistics"
                }
            }, {
                name: "channelSuggestionService",
                path: "/users/{userName}/suggestion",
                parser: "channelSuggestionParser",
                paramKey: "userName",
                params: {
                    fields: "entry",
                    inline: !0,
                    "max-results": 3
                }
            }].forEach(function(a) {
                e(a, ["name", "path", "csiService", "ytHttp", "environmentModel", "authService", "cacheService", a.parser, "paramKey", "params", "locale", a.altConstructor || Wg])
            });
            [{
                    altConstructor: Gj,
                    listType: "RQ",
                    name: "remoteQueueService",
                    path: "/videos/batch",
                    paramKey: null,
                    params: {
                        v: "2.1"
                    }
                }, {
                    altConstructor: Oj,
                    listType: "SR",
                    name: "searchService",
                    path: "/videos",
                    paramKey: "q",
                    params: {
                        fields: "title,logo,entry[$default-filter](title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaded,yt:uploaderId,media:credit,media:description)),openSearch:totalResults",
                        "max-results": 50
                    }
                }, {
                    altName: "FL",
                    listType: "FL",
                    name: "userFavoritesService",
                    path: "/users/{userName}/favorites",
                    paramKey: "userName",
                    params: {
                        fields: "title,logo,entry[$default-filter](title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
                    }
                }, {
                    altName: "UU",
                    listType: "UU",
                    brandable: !0,
                    name: "userUploadsService",
                    path: "/users/{userName}/uploads",
                    paramKey: "userName",
                    params: {
                        fields: "title,logo,entry[$default-filter](title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
                    }
                },
                {
                    altName: "SF",
                    listType: "SF",
                    name: "videoService",
                    path: "/standardfeeds/{regionId}/{feedName}",
                    paramKey: "feedName",
                    params: {
                        fields: "title,logo,entry[$default-filter](title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults",
                        regionId: ""
                    }
                }, {
                    name: "newSubscriptionsService",
                    listType: "SU",
                    path: "/users/default/newsubscriptionvideos",
                    paramKey: "noParamKeyRequired",
                    params: {
                        fields: "title,logo,entry[$default-filter](title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
                    }
                },
                {
                    altName: "ST",
                    listType: "SF",
                    name: "standardFeedService",
                    path: "/standardfeeds/{regionId}/{feedName}",
                    paramKey: "feedName",
                    params: {
                        time: "today",
                        fields: "title,logo,entry[$default-filter](title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults",
                        regionId: ""
                    }
                }, {
                    name: "activityService",
                    listType: "AF",
                    path: "/users/{userName}/events",
                    parser: "activityParser",
                    paramKey: "userName",
                    params: {
                        fields: "title,logo,entry[$inline-filter],openSearch:totalResults",
                        inline: !0
                    }
                }, {
                    name: "riverService",
                    listType: "RC",
                    path: "/users/{userName}/river",
                    paramKey: "userName",
                    params: {
                        fields: "title,logo,entry[$default-filter](title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
                    }
                }, {
                    name: "playlistService",
                    altName: "PL",
                    listType: "PL",
                    path: "/playlists/{playlistId}",
                    paramKey: "playlistId",
                    params: {
                        fields: "title,logo,entry[$default-filter](title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
                    }
                },
                {
                    name: "relatedVideosService",
                    listType: "RV",
                    path: "/videos/{relatedId}/related",
                    paramKey: "relatedId",
                    params: {
                        fields: "title,logo,entry[$default-filter](title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
                    }
                }, {
                    name: "videoPlaybackInfoService",
                    listType: "VI",
                    path: "/videos/{videoId}",
                    paramKey: "videoId",
                    params: {
                        fields: "title,yt:statistics,yt:hd,yt:claimed,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit)"
                    }
                },
                {
                    name: "recommendedVideosService",
                    listType: "RC",
                    path: "/users/{userName}/recommendations",
                    paramKey: "userName",
                    params: {
                        fields: "title,logo,entry[$default-filter](title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
                    }
                }, {
                    name: "watchLaterService",
                    listType: "WL",
                    path: "/users/{userName}/watch_later",
                    paramKey: "userName",
                    params: {
                        fields: "title,logo,entry[$default-filter](title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
                    }
                },
                {
                    name: "watchHistoryService",
                    listType: "HL",
                    path: "/users/{userName}/watch_history",
                    paramKey: "userName",
                    params: {
                        fields: "title,logo,entry[$default-filter](title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
                    }
                }
            ].forEach(function(a) {
                e(a, ["name", "path", "csiService", "ytHttp", "environmentModel", "authService", "cacheService", "listType", "brandable", a.parser || "videoParser", "paramKey",
                    "params", "locale", a.altConstructor || Nj
                ])
            });
            [{
                name: "featuredService",
                path: "/leanback_ajax",
                parser: "featuredParser",
                paramKey: null,
                params: {
                    action_featured: 1,
                    client: "lb4",
                    hl: ""
                }
            }, {
                altConstructor: jg,
                name: "suggestionService",
                path: "/complete/search",
                parser: "videoParser",
                paramKey: "q",
                params: {}
            }].forEach(function(a) {
                e(a, ["name", "path", "csiService", "ytHttp", "environmentModel", "cacheService", a.parser, "paramKey", "params", "locale", a.altConstructor || ig])
            });
            [{
                    name: "ytActiontile",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/tiles/action_tile.html",
                    controller: Zk
                }, {
                    name: "ytAdvertisementcallout",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/advertisement_callout.html",
                    controller: $k
                }, {
                    name: "ytApplication",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/app.html",
                    controller: al
                }, {
                    name: "ytBackgroundImage",
                    restrict: "A",
                    replace: !1,
                    scope: !0,
                    controller: bl
                }, {
                    name: "ytBrowse",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/browse.html",
                    controller: dl
                }, {
                    name: "ytBrowserow",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/browse_row.html",
                    controller: fl
                }, {
                    name: "ytButton",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/button.html",
                    controller: gl
                }, {
                    name: "ytCalltocast",
                    restrict: "E",
                    replace: !0,
                    scope: !1,
                    templateUrl: H.b + "/dialogs/call_to_cast.html",
                    controller: hl
                }, {
                    name: "ytClosedcaptions",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/dialogs/closed_captions.html",
                    controller: ll
                }, {
                    name: "ytDebug",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/debug.html",
                    controller: ml
                }, {
                    name: "ytDialog",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/dialogs/dialog.html",
                    controller: ol
                }, {
                    name: "ytFeedicon",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/feed_icon.html",
                    controller: pl
                }, {
                    name: "ytFlagoptions",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/dialogs/flag_options.html",
                    controller: ql
                }, {
                    name: "ytGrid",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/grid.html",
                    controller: rl
                }, {
                    name: "ytLettertile",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/letter_tile.html",
                    controller: wl
                }, {
                    name: "ytLettersuggestlist",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/list.html",
                    controller: vl
                }, {
                    name: "ytList",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/list.html",
                    controller: Z
                }, {
                    name: "ytLogininfo",
                    restrict: "E",
                    replace: !0,
                    scope: !1,
                    templateUrl: H.b + "/dialogs/login_info.html",
                    controller: xl
                }, {
                    name: "ytMessage",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/message.html",
                    controller: yl
                }, {
                    name: "ytPair",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/dialogs/remote_pairing_info.html",
                    controller: zl
                }, {
                    name: "ytPerflog",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/perflog.html",
                    controller: Al
                }, {
                    name: "ytPostplaytile",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/tiles/post_play_tile.html",
                    controller: Bl
                }, {
                    name: "ytProgressbar",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/progress_bar.html",
                    controller: Cl
                }, {
                    name: "ytRotatelist",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/list.html",
                    controller: Dl
                }, {
                    name: "ytScrollpane",
                    restrict: "A",
                    replace: !1,
                    scope: !0,
                    controller: El
                }, {
                    name: "ytScrollbar",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/scrollbar.html",
                    controller: Fl
                }, {
                    name: "ytToasts",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/toasts.html",
                    controller: Jl
                }, {
                    name: "ytVideotile",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/tiles/video_tile.html",
                    controller: Nl
                }, {
                    name: "ytTransliteration",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/transliteration.html",
                    controller: Kl
                }, {
                    name: "ytTransportcontrols",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/transport_controls.html",
                    controller: Ll
                },
                {
                    name: "ytTransportcontrolslist",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/list.html",
                    controller: Ml
                }, {
                    name: "ytWatch",
                    restrict: "E",
                    replace: !1,
                    scope: !0,
                    templateUrl: H.b + "/watch.html",
                    controller: Ol
                }, {
                    name: "ytWatchtitletray",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/watch_title_tray.html",
                    controller: Pl
                }, {
                    name: "ytWiigamepad",
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/wii/game_pad.html",
                    controller: Pg
                }
            ].forEach(function(b) {
                a.directive(b.name, function() {
                    var a = {
                        restrict: b.restrict,
                        replace: b.replace,
                        scope: b.scope,
                        templateUrl: b.templateUrl,
                        controller: b.controller
                    };
                    "E" === b.restrict && (a.link = c);
                    return a
                })
            });
            a.directive("ytFocusable", ["timeService", function(a) {
                return {
                    restrict: "A",
                    replace: !1,
                    scope: !0,
                    controller: Q,
                    link: function(b) {
                        a.setTimeout(function() {
                            c(b)
                        }, 0)
                    }
                }
            }]);
            a.directive("ytSearch", ["$injector", "environmentModel", function(a, b) {
                var e = {
                    restrict: "E",
                    replace: !1,
                    scope: !0,
                    controller: Gl,
                    templateUrl: H.b + "/search.html",
                    link: c
                };
                b.Ue && (e.templateUrl = H.b + "/search_bamboo.html", e.controller =
                    Hl);
                return e
            }]);
            a.directive("ytKeyboard", ["$injector", "locale", "environmentModel", function(a, b, e) {
                a = $;
                switch (b.ld) {
                    case "ja_JP":
                        a = sl;
                        break;
                    case "ko_KR":
                        a = ul;
                        break;
                    case "zh_CN":
                    case "zh_HK":
                    case "zh_TW":
                        a = kl
                }
                return e.supportsNativeOsk ? {
                    restrict: "E",
                    replace: !0,
                    template: ""
                } : {
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + "/keyboard.html",
                    controller: a,
                    link: c
                }
            }]);
            a.directive("ytTilerow", ["environmentModel", function(a) {
                var b = il,
                    e = "/carousel.html";
                a.isLimitedGraphics && (b = el, e = "/list.html");
                return {
                    restrict: "E",
                    replace: !0,
                    scope: !0,
                    templateUrl: H.b + e,
                    controller: b,
                    link: c
                }
            }]);
            a.value("xhrBackend", Ei);
            a.value("jsonpBackend", Ql)
        };
        var nm = angular.module("localization", ["ng"]);
        nm.config(["$provide", "$httpProvider", function(a, b) {
            a.service("locale", ne);
            a.value("applicationPath", "");
            a.decorator("$interpolate", ["$delegate", "locale", function(a, e) {
                function f(b, f) {
                    var l = e.Ni(b),
                        p = a(l, l === b && f);
                    if (p) return function(a) {
                        a = p(a);
                        return e.Ni(a)
                    }
                }
                b.defaults.transformResponse.push(function(a) {
                    return angular.isString(a) ? e.Ni(a) : a
                });
                f.startSymbol = a.startSymbol;
                f.endSymbol = a.endSymbol;
                return f
            }])
        }]);
        m("yt.tv.initializer", function(a) {
            var b = "start_browse";
            window.location.href.match(/[?&]v=[\w\+\/\-_=]+/) ? b = "start_watch" : window.location.href.match(/[?&]pairingCode=/) && (b = "start_dial");
            window.jstiming.load.name = b;
            if (b = Oe("stickyLabel"))
                if (0 <= window.location.href.indexOf("stick=0&")) Pe("stickyLabel");
                else if (!window.location.href.match("label=")) {
                window.location.href = window.location.href.replace(/\?/, "?label=" + b + "&");
                return
            }
            mi("goog.net.BrowserChannel").lp(Zh);
            a && (H.Lo = a, H.b = a + "/html", H.An = a + "/img");
            ic = hc = JSON.parse;
            I = JSON.stringify;
            Nh.prototype.parse = function(a) {
                return JSON.parse(a)
            };
            window.requestAnimationFrame = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                    window.setTimeout(a, 16)
                }
            }();
            nm.value("applicationPath", a);
            a = angular.injector(["localization"]).get("locale");
            mm(H, a);
            window.jstiming.load.tick("msg_rq");
            a.EG(om)
        }, void 0);

        function om() {
            var a = window.jstiming.load;
            a.tick("msg_r");
            var b = [];
            0 <= Sc().indexOf("PS3") && b.push('<object id="devicePlugin" class="device-plugin" type="x-youtube/x-device"></object>');
            0 <= Sc().indexOf("SmartHub") && (b.push('<object id="pluginObjectTV" class="device-plugin" border=0 classid="clsid:SAMSUNG-INFOLINK-TV"></object>'), b.push('<object id="pluginObjectWindow" class="device-plugin" border=0 classid="clsid:SAMSUNG-INFOLINK-WINDOW"></object>'), b.push('<object id="pluginObjectTVMW" class="device-plugin" border=0 classid="clsid:SAMSUNG-INFOLINK-TVMW"></object>'),
                b.push('<object id="pluginObjectNNavi" class="device-plugin" border=0 classid="clsid:SAMSUNG-INFOLINK-NNAVI"></object>'), b.push('<object id="pluginObjectNetwork" class="device-plugin" border=0 classid="clsid:SAMSUNG-INFOLINK-NETWORK"></object>'));
            b.push('<div id="app-container">');
            b.push("<yt:application></yt:application>");
            b.push("</div>");
            var c = document.getElementById("leanback");
            angular.element(c).html(b.join(""));
            angular.bootstrap(c, ["leanback-app"]);
            a.tick("app_r")
        };
        angular.module("leanback-templates", []).run(["$templateCache", function(a) {
            a.put(H.b + "/advertisement_callout.html", '<div class="advertisement-callout" style="display: none">  [[Advertisement|Tooltip says that the video currently playing is an advertisement.]]  <div class="time-left-label">[[Your video will play in <span class="time-left">&nbsp;</span>s|Label preceeding the number of seconds countdown for when the currently playing ad will finish, and when the main video will begin.]]</div></div>');
            a.put(H.b + "/app.html", '<div id="app-markup">  <yt:watch id="watch" activate-when="focusable.elementIdEquals(application.activeChildName)" data="application.watchModel.currentVideo"></yt:watch>  <yt:browse id="browse" activate-when="focusable.elementIdEquals(application.activeChildName)"></yt:browse>  <yt:search id="search" activate-when="focusable.elementIdEquals(application.activeChildName)" query="application.searchQuery"></yt:search>  <div class="logo-container"></div>  <div ng-include="application.legendTemplatePath" id="legend" class="legend"></div>  <yt:message id="message"></yt:message>  <div id="spinner-container" style="display: none;">    <div class="fallback-loading-indicator">[[LOADING...|Indicator that content is loading from the network.]]</div>    <div class="carousel-loading-indicator"></div>  </div>  <yt:debug id="debug-watermark"></yt:debug>  <yt:dialog id="dialog" activate-when="focusable.elementIdEquals(application.activeChildName)" data="application.dialogModel"></yt:dialog>  <yt:toasts data="application.getCurrentDialogType()"></yt:toasts></div>');
            a.put(H.b + "/browse.html", '<div>  <yt:browserow id="browse-row" class="item"></yt:browserow>  <yt:rotatelist id="super-scroller" item-renderer="yt:feedicon" orientation="vertical"></yt:rotatelist>  <yt:scrollbar id="browse-scrollbar"></yt:scrollbar>  <div id="up-arrow" class="nav-arrow"></div>  <div id="down-arrow" class="nav-arrow"></div>  <div id="left-arrow" class="nav-arrow"></div>  <div id="right-arrow" class="nav-arrow"></div>  <div id="scroller-background"></div></div>');
            a.put(H.b + "/browse_row.html",
                '<div class="browse-row">  <h2>{{browseRow.data.model.title}}</h2> <yt:tilerow id="tile-row" class="feed-row" item-renderer="browseRow.data.widgetName"></yt:tilerow></div>');
            a.put(H.b + "/button.html", "<div></div>");
            a.put(H.b + "/carousel.html", '<ul class="carousel">  \x3c!-- Item renderers inserted here by compile phase. --\x3e</ul>');
            a.put(H.b + "/debug.html", "<h1></h1>");
            a.put(H.b + "/delayed_image.html", '<img ng-src="{{imageUrl}}" />');
            a.put(H.b + "/dialogs/call_to_cast.html", '<div>  <div class="info">    <h2 class="call-to-cast-text">[[Ready to watch?|Title of the instructions screen encouraging user to take action.]]</h2>    <h3 class="call-to-cast-text">[[Choose a YouTube video on your mobile device or laptop, then watch it here.|Steps to be taken on paired device such as phone, laptop or tablet, to trigger a playback on TV, acting as a screen.]]</h3>  </div></div>');
            a.put(H.b + "/dialogs/closed_captions.html", '<div id="closed-captions-widget">  <yt:grid id="cc-languages" class="cc-list" item-renderer="yt:button" row-count="closedCaptions.rowCount"></yt:grid>  <h3 id="captions-not-available">[[Captions are not available for this video|Tooltip displayed when there is no subtitles available for this video.]]</h3>  <h3 id="captions-loading">[[Loading...|Tooltip displayed when some data is loading.]]</h3></div>');
            a.put(H.b + "/dialogs/debug_info.html", '<div class="message"></div>');
            a.put(H.b + "/dialogs/dialog.html", '<div>  <div id="dialog-wrapper">    <div class="title"></div>    <div id="inner-dialog-container"></div>    <div class="buttons">      <div id="confirm-dialog-cancel-button" yt:focusable activate-when="focusable.elementIdEquals(dialog.activeChildName)"></div>      <div id="confirm-dialog-ok-button" yt:focusable activate-when="focusable.elementIdEquals(dialog.activeChildName)"></div>    </div>    <div ng-include="application.legendTemplatePath" id="dialog-legend" class="legend"></div>  </div></div>');
            a.put(H.b + "/dialogs/eureka_authorization_info.html", '<div class="icon"></div><div class="info">  <div class="title">[[This video can\'t be played on this device.|Informs the user that this video can\'t be played on this device.]]</div>  <div class="message">    [[Please choose another video.|Informs the user to please choose another video for playback.]]  </div></div>');
            a.put(H.b + "/dialogs/eureka_player_error_info.html", '<div class="icon"></div><div class="info">  <div class="title">[[There was an error playing this video.|Informs the user of a video playback error.]]</div>  <div class="message">    [[Please choose another video.|Informs the user to please choose another video for playback.]]  </div></div>');
            a.put(H.b + "/dialogs/flag_claim.html", '<div class="flag-claim">  <div class="metadata">    <span class="text"></span>    <div class="url"></div>  </div>  <div class="copyright-infringment">    [[<div class="subtitle">Infringes my copyright</div> youtube.com/t/dmca_policy <div class="email">or email</div> copyright@youtube.com|Provides a way, via email or web site, to claim that a video infringes the current user\'s copyright.]]  </div>  <div class="privacy-invasion">    [[<div class="subtitle">Invades my privacy</div> youtube.com/t/privacy_guidelines|Provides a way to claim, via email or web site, that a given video invades the current user\'s privacy.]]  </div></div>');
            a.put(H.b + "/dialogs/flag_options.html", '<div class="flag-list-container">  <yt:list class="flag-list" data="flag.flagData[0]" item-renderer="yt:button" activate-when="flag.activeIndexEquals(0)" active-index="flag.activeItemIndex"></yt:list>  <yt:list class="flag-list" data="flag.flagData[1]" item-renderer="yt:button" activate-when="flag.activeIndexEquals(1)" active-index="flag.activeItemIndex"></yt:list></div>');
            a.put(H.b + "/dialogs/flag_video.html", '<div class="flag-video">  [[Visit this video on your computer or laptop and click the flag icon to submit a claim:|Provides a URL which a user can access in order to flag the video as inappropriate. Followed by actual URL.]]  <span class="url"></span></div><div class="flag-example"></div>');
            a.put(H.b + "/dialogs/kenko_warning.html", '\x3c!--  Kenko is a health warning required for PS3 devices licensed in JAPAN.  - The first warning is about flashing lights and seizures.  - The second warning is about fatigue and pain.  - The third warning is about limiting exposure of young children to 3D content.  - The last warning is about sleep deprivation.//--\x3e<div>  <div id="kenko">    <div>      <p><div class="warning"></div>\u8b66\u544a</p>      <p>\u5149\u306e\u523a\u6fc0\u306b\u3088\u3063\u3066\u5f15\u304d\u8d77\u3053\u3055\u308c\u308b\u767a\u4f5c\u306b\u3064\u3044\u3066</p>      <p>\u70b9\u6ec5\u3092\u7e70\u308a\u8fd4\u3059\u753b\u9762\u3084\u3001\u305d\u306e\u4ed6\u306e\u5149\u306e\u523a\u6fc0\u306b\u3088\u3063\u3066\u3001\u307e\u308c\u306b\u3001\u76ee\u306e\u75db\u307f\u3001\u8996\u899a\u7570\u5e38\u3001\u504f\u982d\u75db\u3001\u3051\u3044\u308c\u3093\u3084\u610f\u8b58\u969c\u5bb3\uff08\u5931\u795e\u306a\u3069\uff09\u306a\u3069\u306e\u75c7\u72b6\uff08\u5149\u611f\u53d7\u6027\u767a\u4f5c\uff09\u304c\u8d77\u304d\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u3046\u3057\u305f\u75c7\u72b6\u306e\u3042\u308b\u65b9\u306f\u3001\u4e8b\u524d\u306b\u5fc5\u305a\u533b\u5e2b\u306b\u76f8\u8ac7\u3057\u3066\u304f\u3060\u3055\u3044</p>    </div>    <div>      <p><div class="warning"></div>\u6ce8\u610f</p>      <p>\u3053\u3093\u306a\u3068\u304d\u306f\u3059\u3050\u306b\u30d7\u30ec\u30a4\u3092\u4e2d\u6b62\u3059\u308b</p>      <p>\u4e0a\u8a18\u306e\u75c7\u72b6\u306b\u52a0\u3048\u3001\u982d\u75db\u3001\u3081\u307e\u3044\u3001\u5410\u304d\u6c17\u3001\u75b2\u52b4\u611f\u3001\u4e57\u308a\u7269\u9154\u3044\u306b\u4f3c\u305f\u75c7\u72b6\u306a\u3069\u3092\u611f\u3058\u305f\u3068\u304d\u3084\u3001\u76ee\u3001\u8033\u3001\u624b\u3001\u8155\u3001\u8db3\u306a\u3069\u3001\u8eab\u4f53\u306e\u4e00\u90e8\u306b\u4e0d\u5feb\u611f\u3084\u75db\u307f\u3092\u611f\u3058\u305f\u3068\u304d\u306f\u3001\u3059\u3050\u306b\u30d7\u30ec\u30a4\u3092\u4e2d\u6b62\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30d7\u30ec\u30a4\u3092\u4e2d\u6b62\u3057\u3066\u3082\u6cbb\u3089\u306a\u3044\u3068\u304d\u306f\u3001\u533b\u5e2b\u306e\u8a3a\u5bdf\u3092\u53d7\u3051\u3066\u304f\u3060\u3055\u3044\u3002</p>    </div>    <div>      <p>3D\u6620\u50cf\u30013D\u7acb\u4f53\u8996\u30b2\u30fc\u30e0\u306b\u3064\u3044\u3066</p>    3D\u6620\u50cf\u306e\u898b\u3048\u65b9\u306b\u306f\u500b\u4eba\u5dee\u304c\u3042\u308a\u307e\u3059\u3002\u9055\u548c\u611f\u3092\u611f\u3058\u305f\u308a\u3001\u7acb\u4f53\u306b\u898b\u3048\u306a\u3044\u5834\u5408\u306f\u30013D\u6a5f\u80fd\u306e\u3054\u4f7f\u7528\u3092\u304a\u63a7\u3048\u304f\u3060\u3055\u3044\u3002\u6700\u65b0\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u4e0b\u8a18URL\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002    http://www.jp.playstation.com/support/</p>      <p>\u306a\u304a\u3001\u304a\u5b50\u3055\u307e\uff08\u7279\u306b6\u6b73\u672a\u6e80\u306e\u5b50\uff09\u306e\u8996\u899a\u306f\u767a\u9054\u6bb5\u968e\u306b\u3042\u308a\u307e\u3059\u3002\u304a\u5b50\u3055\u307e\u304c3D\u6620\u50cf\u3092\u8996\u8074\u3057\u305f\u308a\u30013D\u7acb\u4f53\u8996\u30b2\u30fc\u30e0\u3092\u30d7\u30ec\u30a4\u3059\u308b\u524d\u306b\u3001\u5c0f\u5150\u79d1\u3084\u773c\u79d1\u306a\u3069\u306e\u533b\u5e2b\u306b\u3054\u76f8\u8ac7\u3044\u305f\u3060\u304f\u3053\u3068\u3092\u304a\u3059\u3059\u3081\u3057\u307e\u3059\u3002</p>    </div>    <div>      <p>\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u632f\u52d5\u6a5f\u80fd\u306b\u5bfe\u5fdc\u3057\u305f\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306b\u3064\u3044\u3066</p>      <p>\u632f\u52d5\u969c\u5bb3\u306e\u3042\u308b\u65b9\u306f\u3001\u30d0\u30a4\u30d6\u30ec\u30fc\u30b7\u30e7\u30f3\uff08\u632f\u52d5\uff09\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002</p>      <p>\u203b\u632f\u52d5\u6a5f\u80fd\u306e\u5165\uff0f\u5207\u306f\u3001\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306ePS\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u8868\u793a\u3055\u308c\u308b\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002</p>    </div>    <div>      <ul class="ul">        <li>\u30d7\u30ec\u30a4\u3059\u308b\u3068\u304d\u306f\u3001\u90e8\u5c4b\u3092\u660e\u308b\u304f\u3057\u3001\u3067\u304d\u308b\u3060\u3051\u753b\u9762\u304b\u3089\u96e2\u308c\u3066\u304f\u3060\u3055\u3044\u3002</li>        <li>\u75b2\u308c\u3066\u3044\u308b\u3068\u304d\u3084\u7761\u7720\u4e0d\u8db3\u306e\u3068\u304d\u306f\u3001\u30d7\u30ec\u30a4\u3092\u907f\u3051\u3066\u304f\u3060\u3055\u3044\u3002</li>        <li>\u30d7\u30ec\u30a4\u3059\u308b\u3068\u304d\u306f\u5065\u5eb7\u306e\u305f\u3081\u30011\u6642\u9593\u3054\u3068\u306b15\u5206\u7a0b\u5ea6\u306e\u4f11\u61a9\u3092\u53d6\u3063\u3066\u304f\u3060\u3055\u3044\u3002</li>        <li>\u30d7\u30ec\u30a4\u4e2d\u306b\u4f53\u8abf\u304c\u60aa\u304f\u306a\u3063\u305f\u3089\u3001\u3059\u3050\u306b\u30d7\u30ec\u30a4\u3092\u3084\u3081\u3066\u304f\u3060\u3055\u3044\u3002</li>      </ul>    </div>  </div></div>');
            a.put(H.b + "/dialogs/login_info.html", '<div>  <div class="login-guest-info">    <ul class="login-instructions">      <li>[[<h4>Go To</h4> <div class="activate-url">www.youtube.com/activate</div>|Step that a user needs to perform in order to pair her YouTube account with the application.]]</li>      <li id="pairing-code-container"></li>    </ul>  </div></div>');
            a.put(H.b + "/dialogs/logout_info.html", '<div>  <div class="logout-authenticated-info">    <div class="login-user-icon"></div>    <div class="login-user-info">      <h3 class="display-name"></h3>      <div class="platform-container">        <div class="platform-user-icon"></div>        <span class="platform-user-name"></span>      </div>      <div class="signed-in-message"></div>    </div>  </div></div>');
            a.put(H.b + "/dialogs/network_error_info.html", "<div>[[A network error has occurred. Please check your network connection.|Dialog subtitle telling user that a network error has occurred, and asking the user to check their network connection]]</div>");
            a.put(H.b + "/dialogs/paid_channel_info.html", '<div class="paid-channel-info">[[This is a paid channel, which requires a recurring subscription payment to view the content. To find out more about this channel visit <span class="channel-url"></span> on your computer.|Message that is displayed when user tries to subscribe to a paid channel.]]</div>');
            a.put(H.b + "/dialogs/player_error_info.html", '<span class="player-error"></span>');
            a.put(H.b + "/dialogs/remote_pairing_info.html", '<div class="pairing">  <div class="pairing-area">    <div class="alternatives">      <div class="phone-content"></div>      <div class="qr-code-wrapper">        <div class="or-box">[[OR|Conjunction that is used to offer a user two different options of logging into their account.]]</div>        <div class="qr-code">          <div class="scan">[[Scan|Title above QR code telling a user that it is possible to sign into account by using QR-code scanner.]]</div>          <img class="qr-code-image" />        </div>      </div>      <div class="connected-list">        <div class="connected-header">[[Connected|Tooltip showing status of a device connected to the application.]]</div>        <ul class="devices"></ul>      </div>    </div>    <div class="search-message">      <div class="title">[[Did you know?|Search pairing hint title]]</div>      [[You can use your phone or tablet to find and play videos on your TV.|Search pairing hint details.]]    </div>  </div></div>');
            a.put(H.b + "/dialogs/remote_reset_info.html", '<div class="connected-list">  <div class="connected-header">[[Paired Devices|Tooltip showing status of paired devices, connected to the application or not.]]</div>  <ul class="devices"></ul></div><span class="reset-help">[[Selecting \'OK\' will disconnect all paired devices.|Tooltip displayed when a user is going to disconnect her mobile device from the application.]]</span>');
            a.put(H.b + "/dialogs/scrollable_dialog.html", '<div yt-scrollpane activate-when="dialog.isActive" class="scrolling-text" ng-include="dialog.data.contentUrl"></div><yt:scrollbar id="dialog-scrollbar"></yt:scrollbar>');
            a.put(H.b + "/dialogs/shiyojo_warning.html", '\x3c!--  Shiyojo is a warning required for PS3 devices licensed in Japan.  - This is a PS3 only app.  - When displayed in a TV other than an LCD TV an afterimage may be burned  into the device if the game/app is left paused for too long.//--\x3e<div id="shiyojo">  <ul>    <li>\u3053\u306e\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306fPlayStation&#174;3\u5c02\u7528\u3067\u3059\u3002</li>    <li>PlayStation&#174;3\u3092\u30d7\u30e9\u30ba\u30de\u30c6\u30ec\u30d3\u3084\u3001\u6db2\u6676\u65b9\u5f0f\u4ee5\u5916\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30b7\u30e7\u30f3\u30c6\u30ec\u30d3\uff08\u30b9\u30af\u30ea\u30fc\u30f3\u6295\u5f71\u65b9\u5f0f\u30c6\u30ec\u30d3\uff09\u306b\u3064\u306a\u3050\u3068\u3001\u753b\u50cf\u306e\u713c\u304d\u4ed8\u304d\uff08\u6b8b\u50cf\u6620\u50cf\uff09\u304c\u8d77\u3053\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u7279\u306b\u3001\u9759\u6b62\u753b\u3092\u30c6\u30ec\u30d3\u753b\u9762\u306b\u8868\u793a\u3057\u305f\u307e\u307e\u9577\u6642\u9593\u653e\u7f6e\u3059\u308b\u3068\u3001\u713c\u304d\u4ed8\u304d\u304c\u8d77\u3053\u308a\u3084\u3059\u304f\u306a\u308a\u307e\u3059\u3002</li>    <li>PlayStation&#174;3\u306e\u30b7\u30b9\u30c6\u30e0\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306f\u3001\u5e38\u306b\u6700\u65b0\u306e\u3082\u306e\u306b\u30d0\u30fc\u30b8\u30e7\u30f3\u30a2\u30c3\u30d7\u3057\u3066\u304a\u4f7f\u3044\u304f\u3060\u3055\u3044\u3002</li>  </ul>  <div class="small-print">    "<div class="playstation-logo"></div>", "PlayStation", "<div class="ps3-logo"></div>", "PSN logo", "DUALSHOCK" and "SIXAXIS" are registered trademarks of Sony Computer Entertainment Inc.    <p>"XMB" and "\u30af\u30ed\u30b9\u30e1\u30c7\u30a3\u30a2\u30d0\u30fc" are trademarks of Sony Corporation and Sony Computer Entertainment Inc.</p>    <p>Library programs &#169;Sony Computer Entertainment Inc.</p>    "<div class="playstation-logo"></div>"&#169;1994 Sony Computer Entertainment Inc.</p>  <div></div>');
            a.put(H.b + "/dialogs/signed_out_info.html", "<div>  [[You have been signed out by the application.|Message that tells the user that they have been signed out by the application]]</div><div>  [[Would you like to sign in again?|Message that asks the user if they would like to sign in again]]</div>");
            a.put(H.b + "/dialogs/simple_dialog.html", '<div ng-include="dialog.data.contentUrl"></div>');
            a.put(H.b + "/dialogs/tos_info.html", "<div>[[To view the Terms of Service go to:|Dialog subtitle telling user to go to the following URL to view youtube terms of service.]]</div><div class='url'>http://www.youtube.com/terms</div><div>[[To view the Privacy Policy go to:|Dialog subtitle telling user to go to the following URL to view youtube privacy policy document]]</div><div class='url'>http://www.youtube.com/privacy</div>");
            a.put(H.b + "/feed_icon.html", '<div class="feed-icon">  <div class="icon"></div>  <h2></h2></div>');
            a.put(H.b + "/grid.html", '<div class="grid-content"></div>');
            a.put(H.b + "/keyboard.html", '<div>  <div id="transliteration-container">    <yt:transliteration id="transliteration" lang-code-pair="keyboard.langCodePair"></yt:transliteration>  </div>  <yt:grid id="keyboard-grid" item-renderer="yt:lettertile" loop="true" consume-keys="!keyboard.isLetterSuggestVisible()" repeat-rate="keyboard.getKeyRepeatRate()"></yt:grid>  <yt:lettersuggestlist id="letter-suggest" class="letter-suggest" item-renderer="yt:lettertile" orientation="vertical"></yt:lettersuggestlist></div>');
            a.put(H.b + "/legend.html", '<div class="more"><span class="icon dpad-down"></span><span class="title">[[More|A button that shows more content in the application.]]</span></div><div class="back"><span class="icon"></span><span class="title">[[Back|A button that navigates to the previous screen a user has visited.]]</span></div><div class="reversed-back"><span class="icon cross"></span><span class="title">[[Back|A button that navigates to the previous screen a user has visited.]]</span></div><div class="backspace"><span class="icon"></span><span class="title">[[Backspace|Button is visible only in Search on WiiU that works as Backspace.]]</span></div><div class="search"><span class="icon"></span><span class="title">[[Search|Clicking this launches the search interface.]]</span></div><div class="home"><span class="icon"></span><span class="title">[[Home|Clicking this navigates to the main screen.]]</span></div><div class="delete"><span class="icon"></span><span class="title">[[Delete|A button that deletes a video from a user\'s playlist.]]</span></div><div class="switch-displays"><span class="icon"></span><span class="title">[[Switch displays|A button that switches the application from big to a small screen and vise versa.]]</span></div>');
            a.put(H.b + "/letter_tile.html", "<li></li>");
            a.put(H.b + "/list.html", '<div class="list-content"></div>');
            a.put(H.b + "/message.html", "<div></div>");
            a.put(H.b + "/perflog.html", "<ul></ul>");
            a.put(H.b + "/progress_bar.html", '<div>  <div class="player-seek-buffer"></div>  <div class="player-seek-active"></div></div>');
            a.put(H.b + "/remote_share_toast.html", '<div class="qr-code-container">  <img class="qr-code-image" alt="QR Code" /></div>');
            a.put(H.b + "/rolling_toast.html", '<div class="toast">  <div class="toast-container">    <div class="toast-icon">&nbsp;</div>    <div class="toast-progress">      <div class="progress">&nbsp;</div>    </div>    <div class="toast-msg"></div>  </div></div>');
            a.put(H.b + "/scrollbar.html", '<div class="scrollbar">  <div class="handle"></div></div>');
            a.put(H.b + "/search.html", '<div class="controls">  <div id="search-text-box">    <span id="search-suggestion" yt:focusable><span class="suggestion-text"></span><span class="suggestion-trigger"></span></span>    <input id="search-input" autocomplete="off" yt:focusable placeholder="[[search...|Placeholder indicating that a user can start searching within a text box]]"/>    <span id="search-query"></span>  </div>  <yt:keyboard id="search-keyboard"></yt:keyboard></div><yt:pair id="search-pairing-help" activate-when="search.isActiveAndQueryModelIsEmpty()"></yt:pair>');
            a.put(H.b + "/search_bamboo.html", '<div class="controls">  <div id="search-text-box">    <span id="search-query" yt:focusable></span>    <span id="search-query-cursor"></span>  </div></div>');
            a.put(H.b + "/tiles/action_tile.html", "<div></div>");
            a.put(H.b + "/tiles/clear_searches_tile.html", '<div class="content">  <div class="title">[[CLEAR|A button that clears all of a users recent searches.]]</div>  <div class="large-action-icon clear-search-icon"></div>  <div class="search-tile-subtitle">    [[Clear search history|Displayed as menu item subtitle. Explains to a user that this item will clear previous search history.]]  </div></div>');
            a.put(H.b + "/tiles/credits_tile.html", '<div class="content">  <div class="title">[[CREDITS|Button that shows credit information, giving credit to all open-source software used in building this product.]]</div></div>');
            a.put(H.b + "/tiles/debug_info_tile.html", '\x3c!-- This is used for debugging and does not need translation --\x3e<div class="content">  <div class="title">SHOW DEBUG INFO</div>  <div class="large-action-icon warning"></div></div>');
            a.put(H.b + "/tiles/kenko_tile.html", '<div class="content">  <div class="title">\u5065\u5eb7\u306e\u305f\u3081\u306e<br>\u3054\u6ce8\u610f</div></div>');
            a.put(H.b + "/tiles/login_tile.html", '<div class="content">  <div class="title">[[SIGN IN|Title of menu item which allows a user to sign in to the application with a YouTube account and see personalized content.]]</div>  <div class="sign-in-user-icon"></div>  <div class="sign-in-help-text">[[View your subscriptions, uploads, playlists, likes and more.|Explanatory text on a menu item. Explains access to what features a user will get access when she logs in.]]</div></div>');
            a.put(H.b + "/tiles/logout_tile.html",
                '<div class="content">  <div class="title display-name">&nbsp;</div>  <div class="platform-container">    <div class="platform-user-icon"></div>    <span class="platform-user-name">&nbsp;</span>  </div>  <div class="sign-out-user-icon"></div>  <div class="sign-out-help-text">[[Sign Out?|Tooltip in a dialog when a user is going to sign out.]]</div></div>');
            a.put(H.b + "/tiles/post_play_tile.html", '<div>  <div class="post-play-title">    <span class="default-title">[[You may also like...|Label informing the user that they may enjoy these videos.]]</span>    <span class="next-up-title">[[Next up in <span class="row-title"></span>|Informs the user of the next video that will play in this playlist. This is followed by the title of the playlist.]]</span>  </div>  <yt:videoTile></yt:videoTile>  <div class="post-play-countdown">0</div></div>');
            a.put(H.b + "/tiles/recent_search_tile.html", '<div class="top">  <div class="video-thumb"></div></div><div class="bottom">  <div class="title"></div>  <div class="overlay"></div></div>');
            a.put(H.b + "/tiles/remote_pairing_tile.html", '<div class="content">  <div class="title">[[PAIR DEVICE|Title of menu item that allows a user to pair one mobile device with the application.]]</div>  <div class="long-title">[[PAIR ANOTHER DEVICE|Title of menu item that allows a user to pair an additional mobile device with the application.]]</div>  <div class="remote-pair-icon"></div>  <div class="remote-pair-text">[[Find videos on your mobile device and watch on your TV.|Tooltip explains that a user will be able to use their mobile device to find videos and watch them via the application.]]</div></div>');
            a.put(H.b + "/tiles/remote_reset_tile.html", '<div class="content">  <div class="title">[[DELETE|Title of the button that disconnects mobile phones from the application]]</div>  <div class="remote-reset-phone">    <div class="remote-count"></div>  </div>  <div class="remote-reset-help">[[Delete all paired devices?|Button that allows a user to disconnect mobile phones from the application.]]</div></div>');
            a.put(H.b + "/tiles/search_tile.html", '<div class="content">  <div class="title">[[Search|Clicking this launches the search interface.]]</div>  <div class="large-action-icon search-icon"></div>  <div class="search-tile-subtitle"></div></div>');
            a.put(H.b + "/tiles/shiyojo_tile.html", '<div class="content">  <div class="title">\u4f7f\u7528\u4e0a\u306e<br>\u3054\u6ce8\u610f</div></div>');
            a.put(H.b + "/tiles/togglable_tile.html", '<div class="content">  <div class="title"></div>  <div class="status">    <div>[[Enabled|Explanatory text that says a feature is currently enabled.]]</div>    <div class="icon enabled"></div>  </div>  <div class="status">    <div>[[Disabled|Explanatory text that says a feature is currently Disabled.]]</div>    <div class="icon disabled"></div>  </div>  <div class="description"></div></div>');
            a.put(H.b + "/tiles/tos_and_privacy_tile.html", '<div class="content">  <div class="title">[[Terms of Service and Privacy|Title of menu item which shows links to terms of service and privacy documents on youtube.com]]</div></div>');
            a.put(H.b + "/tiles/video_tile.html", '<div>  <div class="top">    <div class="video-thumb"></div>    <div class="duration"></div>  </div>  <div class="bottom">    <div class="title"></div>    <div class="overlay">      [[Published on <span class="updated"></span> by <span class="name"></span>|Label that represents the date when a video was uploaded.]]    </div>    <div class="details">      <div class="activity"></div>      <div class="description"></div>    </div>  </div></div>');
            a.put(H.b + "/toasts.html", '<div id="toast">  <div class="static-toasts"></div>  <div class="rolling-toasts"></div></div>');
            a.put(H.b + "/transliteration.html", '<div>  <yt:list id="transliteration" orientation="horizontal" item-renderer="yt:lettertile" loop="true"></yt:list></div>');
            a.put(H.b + "/transport_controls.html", '<div id="player-controls-container">  <div class="player-controls-widget">    <div class="player-controls-border"></div>    <div class="button-tooltip"></div>    <yt:transportcontrolslist id="player-controls" class="player-controls" orientation="horizontal" paging="false"></yt:transportcontrolslist>    <div class="player-seekbar">      <yt:progressbar id="progress-bar"></yt:progressbar>      <div class="player-time-elapsed"></div>      <div class="player-time-total"></div>    </div>  </div></div>');
            a.put(H.b + "/watch.html", '<div id="leanback-player-container"></div><yt:watchtitletray id="watch-title" activate-when="watch.isTitleMode()" data="watch.getCurrentVideo()"></yt:watchtitletray><div id="eureka-player-controls-container">  <div id="eureka-player-controls"></div></div><yt:transportcontrols activate-when="watch.isTransportActive()"></yt:transportcontrols><yt:advertisementcallout></yt:advertisementcallout><div id="branding-container">  <div class="branding-element">    <div id="branding-banner">      <img id="branding-banner-image" />      <div id="branding-banner-overlay">[[Up Next|Message indicating what video is coming next.]]</div>    </div>  </div>  <img id="branding-watermark" class="branding-element" /></div>');
            a.put(H.b + "/watch_title_tray.html", '<div class="title-card">  <div class="player-meta">    <div class="player-video-avatar">      <img />    </div>    <div class="player-video-title">&nbsp;</div>    <div class="player-video-details">      <div class="username">&nbsp;</div>      <div class="uploaded-date"></div>      <div class="view-count"><span>[[Views:|VIEWS]] </span><span class="view-count-label"></span></div>    </div>  </div></div>');
            a.put(H.b + "/wii/game_pad.html", '<div id="drc-widget" ng-show="data" ng-class="application.applicationStyles">  <div id="media-details">    <div id="drc-title">      <h2 class="no-select">[[Active Video|A page title that refers to a focused, selected or playing video.]]</h2>    </div>    <div id="drc-content">      <div>        <div class="left" yt-background-image="data.imageUrl"></div>        <div class="right">          <div id="view-count">{{data.viewCountLabel}}</div>          <div class="likes-dislikes-bar">            <div class="likes-bar" ng-style="data.likesStyle"></div>            <div class="dislikes-bar" ng-style="data.dislikesStyle"></div>          </div>          <div id="likes-label">{{data.likesLabel}}<span class="label">[[likes|A label describing the number of YouTube likes.]]</span></div>          <div id="dislikes-label">{{data.dislikesLabel}}<span class="label">[[dislikes|A label describing the number of YouTube dislikes.]]</span></div>        </div>        <div class="center">          <div id="video-title" class="title">{{data.title}}</div>          <div id="uploaded-by" class="uploader">{{data.channel.displayName}}</div>          <div id="uploaded-at" class="uploaded-at">{{data.uploadedDateLabel}}</div>          <div id="video-description" class="description">{{data.description}}</div>        </div>      </div>    </div>    <div id="drc-footer"></div>  </div></div>');
            a.put(H.b + "/wii/game_pad_shell.html", "<!DOCTYPE html><html><head>  <title>YouTube</title>  \x3c!-- TODO(lbayes): Extract CSS to a separate file. --\x3e  <style>    @font-face {      font-family: 'roboto-condensed-regular';      /** NOTE(lbayes): Removed local() declarations. These fail on Wii U */      src: url('../../img/RobotoCondensed-Regular.ttf') format('truetype');    }    body, html {      background-color: #fff;      font-family: 'roboto-condensed-regular', arial, sans-serif;      font-size: 100%;      margin: auto;      padding: 0;      overflow: hidden;    }    #logo {      background-position: center center;      background-repeat: no-repeat;      background-image: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAABRCAYAAACAE3ncAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAFT5JREFUeNrsXQt0VMd5/u/dldATrc1DL7CW99ssYLBz7FTysXvS1LjGTXN63KY2rtu6rmkCOYnrnDjBaW2T06YFHyc9OTGtcezUCfgY4UdsXkZOwAriIQJYAgESxAhJi0G7q7d270z/2V2JlXRn7nNXWvn+OnNWe+/8/z8zd775/39mdq4EDn1u6NiKJV788CZZTWDFsVMn0q1tJKd7jC06umKJDz88wx5ShUrWcpVrjM83xqt4MZ6GEwNPMPECjV0LJF677dipKgcIaUxHli9hnbRCinXgxM5a4bSOJUoEC/v8PQKoauVxY4BxgJBkqlm+mLkiG7Gh1zqtkTqiMVC8iGnLquOnAw4QRhMEyxZvxhZe77TEqCIigKD4we21p7c4QEgx/W7ZYg827IE08Nc/T7QNAbHhjlp16+AAwWaq9i1yQDCG4wkEw91fOPHJCDC4nbaxjz5GEFAHBGOZfPh8NuPno8NvyE7b2OiOUtgYb2xw0thMSGsPLV203nGNkkQHly70YmM2OS2RDvFzdEZpxl2/rws4rlESrAF1miFdiK3pMKvwrGMRbKTf3LqQNWy70xJpRRf/6GTdDMci2GoNaIXTCmlH3o+WLPCVn6qP7otyzyrzshmOzSKOC5cu3q1HMspipqZckOVFlFU5Dn1O7iyR94knk6q7dVcl9F5pTr4vsXIVeG5bqXqP6WflSENiA1gMCIFg8LqnoEA4os28pWxN4x8uadYUR8ZHJEny8u739vVuHKfxgSr4r4YjUJ5kILQfOQI9zckHgnvZCijj1CWAZWipTEsgDG5udLcH2lvycnMPulyuuwQM7EFXaoCFAcCLYOCBxN/S2np0PAKBAPWoBVs9REmBNYr9JZsilGqWIg1pcABzE4CwQkilLAKCDh846idL/Ng7oih7UFf3+AwSYmsHo2SNgNLRrv7ol8FkuQctQnRBrbOzs3KwRdUS+sAzpt/i1ZD7gEgGUZSq8YiBvQvne7gLODRFnRBSthg1JsphY318Q4AQ6AhdCEfCH1AQ/GlYBXafx0so7Wppa90xPo0B9REarePIlAJ3gfJ025y0UE1SVA67056F8zyDQGCkKMouEXyoYDaobNr02K+qOLwo+wC6RaFxGiiPqkUAxyJYTb4hQGjz+yvZyM0b1fGprhHFECJrQggZl27RwNQp1yNMoX+e7DQWypDMurlvzHxAKxu5XS7Xat5U0y2l03x/aL58QqUhykVPvaurq3LcAkHQSzIlCTZ7y7j3+yiBpy99KpQv4s9xyVCWmZkyqyO6SWnabjBhLn/VkJVlDGgrXS55tYCJWQWVEwr41kKJKL8LdnZcGK9AwAFkKW+ubLLbHU08au4Pa3ag+dlZ5juozYDnTo2n6+RpAg15Sm1X/TtKiktekCRpqta86wBNLymtED1LdLf2wXimeIxgtzVJnB5NB/8wXQ0CQrhsBBBYQKsokQNul/sveWZkWnGJ53LLlUBifCBS1N/fVzmeccAW05LibtyQP1b6uvAeSV+b4B0BhKjf2t//C1c2FwgDPlXlkPiA9xAJaWoPBE4aKRUCzRsvXAABN+YPisKR0JdMIIyZkZamSTntcI0YBQKB/VkTsvwa7lEUCKVFxR7R+oISW00OiwrAZEDsqJNHIDoDQxPvsY+LcX0vNre2XNRTKeQbkKdGJ1DOBjt4Bvxj09aEak9M6pE/d90/c+81/PilEdeyS0th+oN/boiHCiZRh2/zmIayi+65B4rvvXfwWrD+DDT+/FW4vPMt4500fyIUoSwmc/Kq2yFjYv7gvXCoAz6rOQyt+/dD6759EOkIGR3I1C0C2waBI/kel8v1NUHAvCHBOoAACDvEHbaIyXoFhp3spmK62I8o1mNn3cLrkCo8FSZMZIXhgdLCSKhnrUHr/meRCKx+ch33/tmXRnbqrqmFMNcgj3AaNX6PAWzZph/CpFWrRpR94vz54HthE0xf8yB8/PDf6G4jBgDfpk2QgWBQaxN3fj4C5N5oCn/nO3ACEwOEUddI9TfL4Uh4m2BdwFtSWOSNB3vl/NVk4r/efr2apx1lPIv12Yl5PcIV7aF/65GvFpNHaxQV/dnF89bs2ZZ+n6zHmGjJ6CPUML8ZHq38+fMXQHll5SAIeMTuMwump318CKqVP/7JEBCIiOVj+Rmf0YVCVSC0t7dXU0L9As6KQYvAyYNWpYa3yQ47MnNDNppc3vTFrYj53mMTDwOxpSV+HRW2KkONh9rMk1NaAnei25ORn6/rIc5Ei+DCvKJ6LcKRffqDa0wNMYyP8evePsIDAuvAaBVeE+w7eqB4aiEbyX1ci6AQ1dki5GNbtTcbsAJqf2tQztrRtgiWVzTp6MgAm1dms0tKo3683vxRnx/9fd59ZjVmPvyIpTIxfiZHT943Z83ycY9zCYfDb/L3HUW3VKzh3qe069r1azs4HW4jCPYl6U1xOaNsEawlPVOOVmXYtW/I7qW7AnSleGWb8U/2/Jhp/rp1ep+Fh7vs2dHRcTIrizt7xDryN6ik3jhoDWq5m+worOHx4b0utERvIwhPY7A+NTMz8yHB7JW3aMpUX+tV/wk7ZnJM8VicM6Q6tiZo3xfnUbsnWiXm82iXpam6Gmp3xMa/Lzz2GBQvWsTNy4JnNXlKcTGU3H47V1dvKATHUUf97t2w4EtfguVf/SpkTVSPISatXIXWqgS6dfyCz81fyInNHskyd/bIx+s7yKfqFhVOmVpBB6yBWiV7e3/U0RH6H/y3ldUjIyNjj8fj2Q4g5QpmsE7YMZNjhodYPNJd34KaNRkkBTy9oSDs/ta34dqHH0KBywVBRYFte/bAP77/Ptw0fTp34FHTU4wuk0jPe3/1NehvOAs5+P340aNwfPsOWLf7A2Fw3rlzp2Y7C0+6i4Qj28w4aL19vZWc3ubj8VBC/AiCl7BxPmVrD2wTIFqGvUpEeVegq9yU824Tz8DI+nlP7XX1EK6qgomyHP3OPot7e6EOR20ez+SVq1Sv58YthVpq3bcfKIIgg80QsalVtxvkcw1wbPt2Lk+BQF5iEgIhGApWY1TtN+L3KoSc7uzuvsAZvbh791HPIez814aNTGG8vpevT317Q4pCBJv2+ItzWJWRCh6XytVcBMN5tApG9LDfReeXlnLzN+/dN+LqzWiBGquruTxRIOhoQ7eGiezGkbpGkoU7Uod2Do5bFB9CudsxJAnqVH03l+uCwG/x2ebnUJoKFv2LVDp1aMlQu2eGJ2q1qbGFwSxJNqSnm1DIys/n8vRjfDD8ngwShJuvGC6b7hhhMHjBjm0ECBjsVprzZ6WIWT96tHiI1WAZqGYAqqVDS4YavykeQbBME+bjEykbRzcjetj3ooULDesR1ccdX6+wDIRgMFA56eZJW3V2jKbOzs56W4fQMcxjdUKR6lhephZl2HVHe6+RyHnUp4fqKJfR+njmz9P1nDSBwPx2QkmtJEnLtB8sOSQ6siVl05opmz61CASd06NWZKi7RtQEj0APNcGjokfPtK5d9TEMhNh0KK2SZW0gRCLKtjQd3M3xgB3rCNZ0aPr7KvzEBE/M/eC7OKp6BDxqerT8+YIF81Vbg8yZbbg+poCAI30V+vAbNEamrs7OjiNjw3tPDQ9JgUUgFi0CofzR1QiP2CJQ4zwqerTyL336aaG1sPKcdAEhFApVeTw3aTwwonlky7izCJZXlnX8HkHXyrPxlWU7eXiuiVE9etrDfDvb4RphB0er0IRxwgyuMtG06Ti1CJaDZT0d3aIMahuP6Mf79ughkJzTMGwJlm+QdAnLyAWCLLsuaCNzvFkE67NGloNlOvrBMj+INRosJwkI1EYg2HFgx3ibNbL6g3WiZx0BqCUZavxaQDDKQznHWxrVo2ddxWw722cR7Cjf+PKM4Hxf36lZmRMstYdViwAmLIKW32zUihCeRQBqq0VoqauDnlCHoSbOjC7qORYhqTxFbneIWmwP6zECNezva4LHaIxA1VuPGtSjVZeDz/8QmmtqDLUx2/OUK7sci5BMnmxJDlsx5bH5fGJpxkNLBuU470Z5qECPaNbIiB6qURcPdup+l/HX/tk2a+RYBH4ntDouEGJ9HUEkQ+2WZIInGgcQ0R4g62UjVJyf9WeShPOTvt56+ZR+INhQAGdl2VgwqUeH5gyQiSCWmgiW1VewjemhOgL/ZJyyyrYRuY2NX45vlEjfaG0+taWw1FJraLtG1mSo8UvUOA8RuDlEOH2qX4+e/Gp6brptBfzJtpe5fG8sXm6ja+RYBNWRxNIBX6O1jgDU1lkj1nntWK/Q3kDIAVxRoelNdwrQLmPBsmMRuObaSsykGSPoOBJS6Ier8EvUOI8wRiCcdQSDZWM6ugNB7o/xea/jKigp5urp7+gQtmEPIQ2jYBEY+qRxYxEYdRPSlC3JM8xbBIuukQk3B0zw0BS4Riznlfp6mLFqpSHXSFS26/VnhG2Izy6YcouABf5EkuA+jvSlnBHPK/HlnbarrKinXDJRJ+S5irzmgBB7rZa1YFlDhhr//HsqDPNER2NCDAXLNC/HkJ4Bq8PjKZg3B9qOHlUb1Q2XbYAiFKKukWx0hkOUdMi4yOWltCInO9ujwvSAQN8lM2UdTqj3leh74EzULQOkbhKf1jOaBvx7UbIqw52XPyR/2f33wa1//ZBhnWIduao8M++u4PJ0Nl8ZkX+CJENTTQ2Xp6TiiyN4sCPD4gdWC+pChO3XSZQGY0AAsPTWxQGLIDptDNPmIWYrO3stXlsjOPmixkRZvQnyPZhewWtrzdbtmqKctnI0IYmPZrxkVYb3/j+N5snIy4NFjz8Gq559xqROys1fMGc23P2zn0BOcfFgfqZ3HoKOx9NxuXmEDjab1VZ/lsszZfmyaPkTee7A7wXFxVye9jMNwrbLl1whY66RDUFCf1/f0QlZWX78l3d63drsrCx2MkUVsA4repMnRN/5tsdEWb2ooxbYwWCxdzt4rdQpT5KCZue2YwtOVl0jsYyl3/w6lJTfBZ65cyEjP09TnxnXiNHk5T647503IdBwLvrdM3eOMD/vV22XD/wGuoPB6GkWalS2+stYny+ingZddbqw611hG15VIo3GgmUb5oyip+dRulOSpMcF2XwA2m+hYfFBJBw+ySlrpwa7Lh16qJfQZrcsmQZCstcRBjop6MhnNlge4sfPmaVLV9uRY6p6ctE9qn7t/6Diib/nz/lj7KGnTv6jtdB+9pywHDmS3JJyixCdt41Etrjc7gclvlXQVxxC/ot3UADew6BcMtopu5Aj12g5+ii5mAPmgKA1yuqZPmUvl22sOQre25br1tt6tgGK5s01MX1KwC66jmVQ05OLg0rtL96AW9G18pQUW9Jx5D+3aLafX4k0pzxGiEbpinIGwfAvrOOZPkWa0p+jNfgV90EiEAzK248P+nUzdQsRcsl0jAAQnyXhJ80j1hGELWfOasoZSHVvvwcH/mOzYZ2E8vM3IRBrd72juwwdGChfrvott06erl745fpvo4sU0i1zePpo43MQPHtes/1+Frp+0RAQLL+efahvvx3B8FR0XcFg78HR/u1If/8zomNjUHYL5jutRx6WZSvKe1RiBw+bqNvLHdcvmg+WqeVgOROBcOT1X2rKYan6p1vh+A82gawRYKvqIvyysnNIP/j+c3AiCgbtchzGMmjVCc41wqt/9wS0Y1CtR2ZiOoAguPLubs2266PUP9CPUm4RBmMFRXkdO+w/MF9f58jtVwh5AS3BOnZQsIZ8dmbqRg2r41cU5Sksw/eYPLN1Y3VB98hv6nUnemaNdPxBqx92ff9fuTKajhyFtx5fB41bX40+cKIBQPVXgfF5JATJNFcG7H/2efjVN5+C9mb1ztuDQXAV5vEfq9WsEztIOONCE2x96GGo+unLUV6ttjrzYRW89md/AW2/3q2r3bBOFxPWg/SR2+3+Hn4sEGR5LhKJ1Bnx4eTYocZzJVm+B9Md6Ncvic8oscQWOpqwt7QhWA4jcN7D76e1TspIlI0y18iy/DhI0ky8xBa9/CivMS5vO5s5GhgRsH5fwY+vcMTVY93+jafruxOnHM6UpFVGfdgQUcCzbCk/kMPO0Fmr7+28V5UIkKKpcOvqL4OnuAgm5OdBW8N5uPTRQYicb4I8+caYF8rJAs+c2YZ09hdOgayiQvXV2e4e6DoX+8l6J3bIqyQCM8rvgsK5c6BsxTJow4A12NIKzb/eA7mY1+AEC7RjO7G2KsEA+RaUl5WXB4Xz5kDwSgsEUC77vIZlltv8bKVYt+wuSl7599Bnf2sICCh+IsQ6Lv+5arxKVgMQRRDTUZC4gwFiHb9V5AppyGUH9E9KKDs7cbtlOKAwLztyP5sjKiwC4LfyJ/8vdrRHYZSJjdp9bL8OJTBBkqILVBmSNCplQSsJYSwLS+wwYFYe2WJZmCx2YnYYYnJz4p0+W5bNynv++dDVZwzNGukdiU1OqzIAfZokuY3xpOmugQmwRUdLSk5QKo02DqKjWhZ2tizJNWS2ZzSI+fns98KJQ63VsrDO6mb1A3vktijh2kTZDlmkc+H+mpWZ2U5DpBEp6Blt6wpUOUCwkXb3dZ6cn5F5OleSFzutkR4UJMpvE19M43KaxDqhYQ5PkVxKoey+32mN9KCP+3uevEwiFxyLYDO919f5/ky3YxXSga4RZf/hcM/BxGuORbDPKoQyAXpKXRl/zGJFO96v5iT7E4sN3u3reOw6JY0OEJJEaGobJ8vugkmS6w6nNcYmfRTu3lAX6XuHDnuLrgMEe61CX4PS/8kk2SVjcsAwxuis0v/igf7u/yYqu5MdICTBRTqHYLhZcskeybXEcZPGhjt0KtL3o/f7u9h7vFvVnpsDhCSCoY/SK1Ml1/QMkKY6rTI61E3J6b3hru8eifS+KdqjJjlNlTyKb0tZdqc7+855rsz7J0qy4y6lEACfKP1vHIr0HMKvtVo7IxwgpAYQbL/TzMmSq3iuK3NmqeQenGItkOQliXlznOlXXdQHtEmhscO5GHUBbYzg9y4gfozTTp0n4fN4uZHo3LrjACG1gGAb+9gGwJz4pUnDsozY2OhzTZiRI0l5A9+zQM69edg5ShmSlJsD8szh+rJAmiFLxn91l5SOS7HjxnYUDx25gTSGEzp0vFP7g1TxJ177ONJ7SkUsG+UTN3qyM4rY9lbDmzQdIIx91yoRGOz/gmHZshOAlUiTtOQvZSCDGyCzQtWKakdVo2tqnky8Aw+/NqQzE3VeW8gBwucTYJOSKL6HmNzFO5r0/wIMAKFEkg2NbM+BAAAAAElFTkSuQmCC);      height: 100%;      left: 0;      position: absolute;      top: 0;      width: 100%;      z-index: 0;    }    body > div {      -webkit-overflow-scrolling: auto;    }    h1, h2, h3, h4 {      font-weight: bold;      margin: 0;      padding: 0;    }    .ng-binding, .no-select {      -webkit-touch-callout: none;      -webkit-user-select: none;      user-select: none;    }    #drc {      height: 100%;      position: absolute;      width: 100%;    }    #drc-title {      background: rgba(230, 230, 230, 1);      color: rgba(102, 102, 102, 1);      height: 10%;      text-align: center;      text-shadow: 0 2px 0 rgba(250, 250, 250, 1);    }    #drc-title > div {      height: 100%;    }    #drc-title h2 {      border-bottom: 1px solid #aaa;      box-shadow: 0px 0px 20pt #CCC;      font-size: 120%;      font-weight: normal;      padding: 1.2% 0 1.2%;      text-align: center;    }    #drc-content {      height: 70%;      width: 100%;    }    #drc-footer {      height: 20%;      width: 100%;    }    #drc-content > div {      position: absolute;      width: 100%;      top: 4.5em;    }    #drc-content > div > div {      position: relative;    }    #drc-content .left {      background-position: center;      background-repeat: no-repeat;      background-size: 100%;      border: 1px solid #ccc;      font-size: 92%;      height: 7.2em;      left: 3%;      position: absolute;      width: 12.8em;    }    #drc-content .center {      margin: 0 auto;      width: 46%;    }    #drc-content .center .title {      font-size: 240%;      font-weight: 300;    }    #drc-content .center .uploader {      color: rgba(133, 0, 0, .9);      font-size: 150%;      margin-top: 5%;    }    #drc-content .center .uploaded-at {      font-size: 104%;    }    #drc-content .center .description {      color: rgb(102, 102, 102);      font-size: 100%;      font-weight: normal;      margin: 10% 0;    }    #drc-content .right {      position: absolute;      right: 3%;      top: 5%;      width: 20%;    }    #view-count {      font-size: 150%;      text-align: right;    }    #drc-content .right .likes-dislikes-bar {      height: .4em;      margin-bottom: .2em;      width: 100%;    }    #drc-content .right .likes-bar {      background: rgba(68, 110, 34, 1);      float: left;      height: 100%;      top: 0;    }    #drc-content .right .dislikes-bar {      background: rgba(102, 102, 102, .2);      float: right;      height: 100%;    }    #likes-label {      float: left;      font-size: 150%;      font-weight: 300;      text-transform: uppercase;    }    #dislikes-label {      float: right;      font-size: 140%;      font-weight: 300;      text-align: right;      text-transform: uppercase;    }    #drc-content .right .label {      display: block;      font-size: 60%;    }    #media-details {      display: block;    }    #spinner {      background-position: center center;      background-repeat: no-repeat;      background-image: url(data:image/gif;base64,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);      width: 100px;      height: 100px;      bottom: 1em;      right: 1em;      position: absolute;    }  </style></head><body>  <yt:wiigamepad></yt:wiigamepad>  <div ng-hide=\"data || isOskVisible\">    <div id=\"logo\"></div>    <div id=\"spinner\" ng-hide=\"hasLoadedOnce\"></div>  </div></body></html>")
        }]);
    })();

/*
     FILE ARCHIVED ON 07:49:31 Jul 11, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:38:44 Feb 11, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.518
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.009
  esindex: 0.011
  cdx.remote: 7.839
  LoadShardBlock: 122.314 (3)
  PetaboxLoader3.datanode: 141.379 (4)
  load_resource: 107.366
  PetaboxLoader3.resolve: 63.625
*/