/*!
 * VERSION: beta 1.10.2
 * DATE: 2013-08-05
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var s = [].slice, r = function(t, e, s) {
            i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
        }, n = function(t) {
            return t.jquery || t.length && t !== window && t[0] && (t[0] === window || t[0].nodeType && t[0].style && !t.nodeType)
        }, a = r.prototype = i.to({}, .1, {}), o = [];
        r.version = "1.10.2", a.constructor = r, a.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.ticker = i.ticker, a.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
        }, a.updateTo = function(t, e) {
            var s, r = this.ratio;
            e && this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (s in t)
                this.vars[s] = t[s];
            if (this._initted)
                if (e)
                    this._initted = !1;
                else if (this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                    var n = this._time;
                    this.render(0, !0, !1), this._initted = !1, this.render(n, !0, !1)
                } else if (this._time > 0) {
                    this._initted = !1, this._init();
                    for (var a, o = 1 / (1 - r), h = this._firstPT; h; )
                        a = h.s + h.c, h.c *= o, h.s = a - h.c, h = h._next
                }
            return this
        }, a.render = function(t, e, i) {
            var s, r, n, a, h, l, _, u = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time, f = this._totalTime, c = this._cycle;
            if (t >= u ? (this._totalTime = u, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete"), 0 === this._duration && ((0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && (i = !0, this._rawPrevTime > 0 && (r = "onReverseComplete", e && (t = -1))), this._rawPrevTime = t)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== f || 0 === this._duration && this._rawPrevTime > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = t)) : this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (a = this._duration + this._repeatDelay, this._cycle = this._totalTime / a >> 0, 0 !== this._cycle && this._cycle === this._totalTime / a && this._cycle--, this._time = this._totalTime - this._cycle * a, this._yoyo && 0 !== (1 & this._cycle) && (this._time = this._duration - this._time), this._time > this._duration ? this._time = this._duration : 0 > this._time && (this._time = 0)), this._easeType ? (h = this._time / this._duration, l = this._easeType, _ = this._easePower, (1 === l || 3 === l && h >= .5) && (h = 1 - h), 3 === l && (h *= 2), 1 === _ ? h *= h : 2 === _ ? h *= h * h : 3 === _ ? h *= h * h * h : 4 === _ && (h *= h * h * h * h), this.ratio = 1 === l ? 1 - h : 2 === l ? h : .5 > this._time / this._duration ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / this._duration)), p === this._time && !i)
                return f !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)), void 0;
            if (!this._initted) {
                if (this._init(), !this._initted)
                    return;
                this._time && !s ? this.ratio = this._ease.getRatio(this._time / this._duration) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0), 0 === f && (this._startAt && (t >= 0?this._startAt.render(t, e, i):r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === this._duration) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || o))), n = this._firstPT; n; )
                n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
            this._onUpdate && (0 > t && this._startAt && this._startAt.render(t, e, i), e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)), this._cycle !== c && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || o)), r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || o)))
        }, r.to = function(t, e, i) {
            return new r(t, e, i)
        }, r.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
        }, r.fromTo = function(t, e, i, s) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new r(t, e, s)
        }, r.staggerTo = r.allTo = function(t, e, a, h, l, _, u) {
            h = h || 0;
            var p, f, c, m, d = a.delay || 0, g = [], v = function() {
                a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), l.apply(u || this, _ || o)
            };
            for (t instanceof Array || ("string" == typeof t && (t = i.selector(t) || t), n(t) && (t = s.call(t, 0))), p = t.length, c = 0; p > c; c++) {
                f = {};
                for (m in a)
                    f[m] = a[m];
                f.delay = d, c === p - 1 && l && (f.onComplete = v), g[c] = new r(t[c], e, f), d += h
            }
            return g
        }, r.staggerFrom = r.allFrom = function(t, e, i, s, n, a, o) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, s, n, a, o)
        }, r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, a, o, h) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, s, n, a, o, h)
        }, r.delayedCall = function(t, e, i, s, n) {
            return new r(e, 0, {delay: t, onComplete: e, onCompleteParams: i, onCompleteScope: s, onReverseComplete: e, onReverseCompleteParams: i, onReverseCompleteScope: s, immediateRender: !1, useFrames: n, overwrite: 0})
        }, r.set = function(t, e) {
            return new r(t, 0, e)
        }, r.isTweening = function(t) {
            for (var e, s = i.getTweensOf(t), r = s.length; --r > - 1; )
                if (e = s[r], e._active || e._startTime === e._timeline._time && e._timeline._active)
                    return!0;
            return!1
        };
        var h = function(t, e) {
            for (var s = [], r = 0, n = t._first; n; )
                n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(h(n, e)), r = s.length), n = n._next;
            return s
        }, l = r.getAllTweens = function(e) {
            return h(t._rootTimeline, e).concat(h(t._rootFramesTimeline, e))
        };
        r.killAll = function(t, i, s, r) {
            null == i && (i = !0), null == s && (s = !0);
            var n, a, o, h = l(0 != r), _ = h.length, u = i && s && r;
            for (o = 0; _ > o; o++)
                a = h[o], (u || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a.totalDuration()) : a._enabled(!1, !1))
        }, r.killChildTweensOf = function(t, e) {
            if (null != t) {
                var a, o, h, l, _, u = i._tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t), n(t) && (t = s(t, 0)), t instanceof Array)
                    for (l = t.length; --l > - 1; )
                        r.killChildTweensOf(t[l], e);
                else {
                    a = [];
                    for (h in u)
                        for (o = u[h].target.parentNode; o; )
                            o === t && (a = a.concat(u[h].tweens)), o = o.parentNode;
                    for (_ = a.length, l = 0; _ > l; l++)
                        e && a[l].totalTime(a[l].totalDuration()), a[l]._enabled(!1, !1)
                }
            }
        };
        var _ = function(t, i, s, r) {
            i = i !== !1, s = s !== !1, r = r !== !1;
            for (var n, a, o = l(r), h = i && s && r, _ = o.length; --_ > - 1; )
                a = o[_], (h || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
        };
        return r.pauseAll = function(t, e, i) {
            _(!0, t, e, i)
        }, r.resumeAll = function(t, e, i) {
            _(!1, t, e, i)
        }, r.globalTimeScale = function(e) {
            var s = t._rootTimeline, r = i.ticker.time;
            return arguments.length ? (e = e || 1e-6, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
        }, a.progress = function(t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, a.totalProgress = function(t) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
        }, a.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, a.duration = function(e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }, a.totalDuration = function(t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, a.repeat = function(t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, a.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, a.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, r
    }, !0), window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var s = function(t) {
            e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
            var i, s, r = this.vars;
            for (s in r)
                i = r[s], i instanceof Array && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
            r.tweens instanceof Array && this.add(r.tweens, 0, r.align, r.stagger)
        }, r = [], n = function(t) {
            var e, i = {};
            for (e in t)
                i[e] = t[e];
            return i
        }, a = function(t, e, i, s) {
            t._timeline.pause(t._startTime), e && e.apply(s || t._timeline, i || r)
        }, o = r.slice, h = s.prototype = new e;
        return s.version = "1.10.2", h.constructor = s, h.kill()._gc = !1, h.to = function(t, e, s, r) {
            return e ? this.add(new i(t, e, s), r) : this.set(t, s, r)
        }, h.from = function(t, e, s, r) {
            return this.add(i.from(t, e, s), r)
        }, h.fromTo = function(t, e, s, r, n) {
            return e ? this.add(i.fromTo(t, e, s, r), n) : this.set(t, r, n)
        }, h.staggerTo = function(t, e, r, a, h, l, _, u) {
            var p, f = new s({onComplete: l, onCompleteParams: _, onCompleteScope: u});
            for ("string" == typeof t && (t = i.selector(t) || t), !(t instanceof Array) && t.length && t !== window && t[0] && (t[0] === window || t[0].nodeType && t[0].style && !t.nodeType) && (t = o.call(t, 0)), a = a || 0, p = 0; t.length > p; p++)
                r.startAt && (r.startAt = n(r.startAt)), f.to(t[p], e, n(r), p * a);
            return this.add(f, h)
        }, h.staggerFrom = function(t, e, i, s, r, n, a, o) {
            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
        }, h.staggerFromTo = function(t, e, i, s, r, n, a, o, h) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h)
        }, h.call = function(t, e, s, r) {
            return this.add(i.delayedCall(0, t, e, s), r)
        }, h.set = function(t, e, s) {
            return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
        }, s.exportRoot = function(t, e) {
            t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var r, n, a = new s(t), o = a._timeline;
            for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r; )
                n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
            return o.add(a, 0), a
        }, h.add = function(r, n, a, o) {
            var h, l, _, u, p;
            if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                if (r instanceof Array) {
                    for (a = a || "normal", o = o || 0, h = n, l = r.length, _ = 0; l > _; _++)
                        (u = r[_])instanceof Array && (u = new s({tweens: u})), this.add(u, h), "string" != typeof u && "function" != typeof u && ("sequence" === a ? h = u._startTime + u.totalDuration() / u._timeScale : "start" === a && (u._startTime -= u.delay())), h += o;
                    return this._uncache(!0)
                }
                if ("string" == typeof r)
                    return this.addLabel(r, n);
                if ("function" != typeof r)
                    throw"Cannot add " + r + " into the timeline; it is neither a tween, timeline, function, nor a string.";
                r = i.delayedCall(0, r)
            }
            if (e.prototype.add.call(this, r, n), this._gc && !this._paused && this._time === this._duration && this._time < this.duration())
                for (p = this; p._gc && p._timeline; )
                    p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._enabled(!0, !1), p = p._timeline;
            return this
        }, h.remove = function(e) {
            if (e instanceof t)
                return this._remove(e, !1);
            if (e instanceof Array) {
                for (var i = e.length; --i > - 1; )
                    this.remove(e[i]);
                return this
            }
            return"string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }, h._remove = function(t, i) {
            return e.prototype._remove.call(this, t, i), this._last ? this._time > this._last._startTime && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = 0, this
        }, h.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }, h.insert = h.insertMultiple = function(t, e, i, s) {
            return this.add(t, e || 0, i, s)
        }, h.appendMultiple = function(t, e, i, s) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
        }, h.addLabel = function(t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e), this
        }, h.addPause = function(t, e, i, s) {
            return this.call(a, ["{self}", e, i, s], this, t)
        }, h.removeLabel = function(t) {
            return delete this._labels[t], this
        }, h.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }, h._parseTimeOrLabel = function(e, i, s, r) {
            var n;
            if (r instanceof t && r.timeline === this)
                this.remove(r);
            else if (r instanceof Array)
                for (n = r.length; --n > - 1; )
                    r[n]instanceof t && r[n].timeline === this && this.remove(r[n]);
            if ("string" == typeof i)
                return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
            if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e])
                null == e && (e = this.duration());
            else {
                if (n = e.indexOf("="), -1 === n)
                    return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
            }
            return Number(e) + i
        }, h.seek = function(t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
        }, h.stop = function() {
            return this.paused(!0)
        }, h.gotoAndPlay = function(t, e) {
            return this.play(t, e)
        }, h.gotoAndStop = function(t, e) {
            return this.pause(t, e)
        }, h.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s, n, a, o, h, l = this._dirty ? this.totalDuration() : this._totalDuration, _ = this._time, u = this._startTime, p = this._timeScale, f = this._paused;
            if (t >= l ? (this._totalTime = this._time = l, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > 0 && (o = "onReverseComplete"))), this._rawPrevTime = t, t = l + 1e-6) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== _ || 0 === this._duration && this._rawPrevTime > 0) && (o = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t) : (this._rawPrevTime = t, t = 0, this._initted || (h = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== _ && this._first || i || h) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== _ && t > 0 && (this._active = !0), 0 === _ && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || r)), this._time >= _)
                    for (s = this._first; s && (a = s._next, !this._paused || f); )
                        (s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                else
                    for (s = this._last; s && (a = s._prev, !this._paused || f); )
                        (s._active || _ >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)), o && (this._gc || (u === this._startTime || p !== this._timeScale) && (0 === this._time || l >= this.totalDuration()) && (n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || r)))
            }
        }, h._hasPausedChild = function() {
            for (var t = this._first; t; ) {
                if (t._paused || t instanceof s && t._hasPausedChild())
                    return!0;
                t = t._next
            }
            return!1
        }, h.getChildren = function(t, e, s, r) {
            r = r || -9999999999;
            for (var n = [], a = this._first, o = 0; a; )
                r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
            return n
        }, h.getTweensOf = function(t, e) {
            for (var s = i.getTweensOf(t), r = s.length, n = [], a = 0; --r > - 1; )
                (s[r].timeline === this || e && this._contains(s[r])) && (n[a++] = s[r]);
            return n
        }, h._contains = function(t) {
            for (var e = t.timeline; e; ) {
                if (e === this)
                    return!0;
                e = e.timeline
            }
            return!1
        }, h.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var s, r = this._first, n = this._labels; r; )
                r._startTime >= i && (r._startTime += t), r = r._next;
            if (e)
                for (s in n)
                    n[s] >= i && (n[s] += t);
            return this._uncache(!0)
        }, h._kill = function(t, e) {
            if (!t && !e)
                return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > - 1; )
                i[s]._kill(t, e) && (r = !0);
            return r
        }, h.clear = function(t) {
            var e = this.getChildren(!1, !0, !0), i = e.length;
            for (this._time = this._totalTime = 0; --i > - 1; )
                e[i]._enabled(!1, !1);
            return t !== !1 && (this._labels = {}), this._uncache(!0)
        }, h.invalidate = function() {
            for (var t = this._first; t; )
                t.invalidate(), t = t._next;
            return this
        }, h._enabled = function(t, i) {
            if (t === this._gc)
                for (var s = this._first; s; )
                    s._enabled(t, !0), s = s._next;
            return e.prototype._enabled.call(this, t, i)
        }, h.progress = function(t) {
            return arguments.length ? this.totalTime(this.duration() * t, !1) : this._time / this.duration()
        }, h.duration = function(t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        }, h.totalDuration = function(t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, s = 0, r = this._last, n = 999999999999; r; )
                        e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                    this._duration = this._totalDuration = s, this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
        }, h.usesFrames = function() {
            for (var e = this._timeline; e._timeline; )
                e = e._timeline;
            return e === t._rootFramesTimeline
        }, h.rawTime = function() {
            return this._paused || 0 !== this._totalTime && this._totalTime !== this._totalDuration ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, s
    }, !0), window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
        var s = function(e) {
            t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
        }, r = [], n = new i(null, null, 1, 0), a = function(t) {
            for (; t; ) {
                if (t._paused)
                    return!0;
                t = t._timeline
            }
            return!1
        }, o = s.prototype = new t;
        return o.constructor = s, o.kill()._gc = !1, s.version = "1.10.2", o.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
        }, o.addCallback = function(t, i, s, r) {
            return this.add(e.delayedCall(0, t, s, r), i)
        }, o.removeCallback = function(t, e) {
            if (t)
                if (null == e)
                    this._kill(null, t);
                else
                    for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > - 1; )
                        i[s]._startTime === r && i[s]._enabled(!1, !1);
            return this
        }, o.tweenTo = function(t, i) {
            i = i || {};
            var s, a, o = {ease: n, overwrite: 2, useFrames: this.usesFrames(), immediateRender: !1};
            for (s in i)
                o[s] = i[s];
            return o.time = this._parseTimeOrLabel(t), a = new e(this, Math.abs(Number(o.time) - this._time) / this._timeScale || .001, o), o.onStart = function() {
                a.target.paused(!0), a.vars.time !== a.target.time() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || r)
            }, a
        }, o.tweenFromTo = function(t, e, i) {
            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {onComplete: this.seek, onCompleteParams: [t], onCompleteScope: this}, i.immediateRender = i.immediateRender !== !1;
            var s = this.tweenTo(e, i);
            return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
        }, o.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s, n, a, o, h, l, _ = this._dirty ? this.totalDuration() : this._totalDuration, u = this._duration, p = this._time, f = this._totalTime, c = this._startTime, m = this._timeScale, d = this._rawPrevTime, g = this._paused, v = this._cycle;
            if (t >= _ ? (this._locked || (this._totalTime = _, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", 0 === u && (0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > 0 && (o = "onReverseComplete"))), this._rawPrevTime = t, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = u, t = u + 1e-6)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== p || 0 === u && this._rawPrevTime > 0 && !this._locked) && (o = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, 0 === u && this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t) : (this._rawPrevTime = t, t = 0, this._initted || (h = !0))) : (this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (l = u + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = u - this._time), this._time > u ? (this._time = u, t = u + 1e-6) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== v && !this._locked) {
                var y = this._yoyo && 0 !== (1 & v), T = y === (this._yoyo && 0 !== (1 & this._cycle)), w = this._totalTime, x = this._cycle, b = this._rawPrevTime, P = this._time;
                if (this._totalTime = v * u, v > this._cycle ? y = !y : this._totalTime += u, this._time = p, this._rawPrevTime = 0 === u ? d - 1e-5 : d, this._cycle = v, this._locked = !0, p = y ? 0 : u, this.render(p, e, 0 === u), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || r), T && (p = y ? u + 1e-6 : -1e-6, this.render(p, !0, !1)), this._locked = !1, this._paused && !g)
                    return;
                this._time = P, this._totalTime = w, this._cycle = x, this._rawPrevTime = b
            }
            if (!(this._time !== p && this._first || i || h))
                return f !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)), void 0;
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || r)), this._time >= p)
                for (s = this._first; s && (a = s._next, !this._paused || g); )
                    (s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
            else
                for (s = this._last; s && (a = s._prev, !this._paused || g); )
                    (s._active || p >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
            this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)), o && (this._locked || this._gc || (c === this._startTime || m !== this._timeScale) && (0 === this._time || _ >= this.totalDuration()) && (n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || r)))
        }, o.getActive = function(t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var s, r, n = [], o = this.getChildren(t, e, i), h = 0, l = o.length;
            for (s = 0; l > s; s++)
                r = o[s], r._paused || r._timeline._time >= r._startTime && r._timeline._time < r._startTime + r._totalDuration / r._timeScale && (a(r._timeline) || (n[h++] = r));
            return n
        }, o.getLabelAfter = function(t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), s = i.length;
            for (e = 0; s > e; e++)
                if (i[e].time > t)
                    return i[e].name;
            return null
        }, o.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > - 1; )
                if (t > e[i].time)
                    return e[i].name;
            return null
        }, o.getLabelsArray = function() {
            var t, e = [], i = 0;
            for (t in this._labels)
                e[i++] = {time: this._labels[t], name: t};
            return e.sort(function(t, e) {
                return t.time - e.time
            }), e
        }, o.progress = function(t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, o.totalProgress = function(t) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
        }, o.totalDuration = function(e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, o.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, o.repeat = function(t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, o.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, o.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, o.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }, s
    }, !0), function() {
        var t = 180 / Math.PI, e = Math.PI / 180, i = [], s = [], r = [], n = {}, a = function(t, e, i, s) {
            this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
        }, o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", h = function(t, e, i, s) {
            var r = {a: t}, n = {}, a = {}, o = {c: s}, h = (t + e) / 2, l = (e + i) / 2, _ = (i + s) / 2, u = (h + l) / 2, p = (l + _) / 2, f = (p - u) / 8;
            return r.b = h + (t - h) / 4, n.b = u + f, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + p) / 2, a.b = p - f, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
        }, l = function(t, e, n, a, o) {
            var l, _, u, p, f, c, m, d, g, v, y, T, w, x = t.length - 1, b = 0, P = t[0].a;
            for (l = 0; x > l; l++)
                f = t[b], _ = f.a, u = f.d, p = t[b + 1].d, o ? (y = i[l], T = s[l], w = .25 * (T + y) * e / (a ? .5 : r[l] || .5), c = u - (u - _) * (a ? .5 * e : 0 !== y ? w / y : 0), m = u + (p - u) * (a ? .5 * e : 0 !== T ? w / T : 0), d = u - (c + ((m - c) * (3 * y / (y + T) + .5) / 4 || 0))) : (c = u - .5 * (u - _) * e, m = u + .5 * (p - u) * e, d = u - (c + m) / 2), c += d, m += d, f.c = g = c, f.b = 0 !== l ? P : P = f.a + .6 * (f.c - f.a), f.da = u - _, f.ca = g - _, f.ba = P - _, n ? (v = h(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = m;
            f = t[b], f.b = P, f.c = P + .4 * (f.d - P), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = P - f.a, n && (v = h(f.a, P, f.c, f.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
        }, _ = function(t, e, r, n) {
            var o, h, l, _, u, p, f = [];
            if (n)
                for (t = [n].concat(t), h = t.length; --h > - 1; )
                    "string" == typeof(p = t[h][e]) && "=" === p.charAt(1) && (t[h][e] = n[e] + Number(p.charAt(0) + p.substr(2)));
            if (o = t.length - 2, 0 > o)
                return f[0] = new a(t[0][e], 0, 0, t[-1 > o ? 0 : 1][e]), f;
            for (h = 0; o > h; h++)
                l = t[h][e], _ = t[h + 1][e], f[h] = new a(l, 0, 0, _), r && (u = t[h + 2][e], i[h] = (i[h] || 0) + (_ - l) * (_ - l), s[h] = (s[h] || 0) + (u - _) * (u - _));
            return f[h] = new a(t[h][e], 0, 0, t[h + 1][e]), f
        }, u = function(t, e, a, h, u, p) {
            var f, c, m, d, g, v, y, T, w = {}, x = [], b = p || t[0];
            u = "string" == typeof u ? "," + u + "," : o, null == e && (e = 1);
            for (c in t[0])
                x.push(c);
            if (t.length > 1) {
                for (T = t[t.length - 1], y = !0, f = x.length; --f > - 1; )
                    if (c = x[f], Math.abs(b[c] - T[c]) > .05) {
                        y = !1;
                        break
                    }
                y && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3])
            }
            for (i.length = s.length = r.length = 0, f = x.length; --f > - 1; )
                c = x[f], n[c] = -1 !== u.indexOf("," + c + ","), w[c] = _(t, c, n[c], p);
            for (f = i.length; --f > - 1; )
                i[f] = Math.sqrt(i[f]), s[f] = Math.sqrt(s[f]);
            if (!h) {
                for (f = x.length; --f > - 1; )
                    if (n[c])
                        for (m = w[x[f]], v = m.length - 1, d = 0; v > d; d++)
                            g = m[d + 1].da / s[d] + m[d].da / i[d], r[d] = (r[d] || 0) + g * g;
                for (f = r.length; --f > - 1; )
                    r[f] = Math.sqrt(r[f])
            }
            for (f = x.length, d = a?4:1; --f > - 1; )
                c = x[f], m = w[c], l(m, e, a, h, n[c]), y && (m.splice(0, d), m.splice(m.length - d, d));
            return w
        }, p = function(t, e, i) {
            e = e || "soft";
            var s, r, n, o, h, l, _, u, p, f, c, m = {}, d = "cubic" === e ? 3 : 2, g = "soft" === e, v = [];
            if (g && i && (t = [i].concat(t)), null == t || d + 1 > t.length)
                throw"invalid Bezier data";
            for (p in t[0])
                v.push(p);
            for (l = v.length; --l > -1; ) {
                for (p = v[l], m[p] = h = [], f = 0, u = t.length, _ = 0; u > _; _++)
                    s = null == i ? t[_][p] : "string" == typeof(c = t[_][p]) && "=" === c.charAt(1) ? i[p] + Number(c.charAt(0) + c.substr(2)) : Number(c), g && _ > 1 && u - 1 > _ && (h[f++] = (s + h[f - 2]) / 2), h[f++] = s;
                for (u = f - d + 1, f = 0, _ = 0; u > _; _ += d)
                    s = h[_], r = h[_ + 1], n = h[_ + 2], o = 2 === d ? 0 : h[_ + 3], h[f++] = c = 3 === d ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                h.length = f
            }
            return m
        }, f = function(t, e, i) {
            for (var s, r, n, a, o, h, l, _, u, p, f, c = 1 / i, m = t.length; --m > - 1; )
                for (p = t[m], n = p.a, a = p.d - n, o = p.c - n, h = p.b - n, s = r = 0, _ = 1; i >= _; _++)
                    l = c * _, u = 1 - l, s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l), f = m * i + _ - 1, e[f] = (e[f] || 0) + s * s
        }, c = function(t, e) {
            e = e >> 0 || 6;
            var i, s, r, n, a = [], o = [], h = 0, l = 0, _ = e - 1, u = [], p = [];
            for (i in t)
                f(t[i], a, e);
            for (r = a.length, s = 0; r > s; s++)
                h += Math.sqrt(a[s]), n = s % e, p[n] = h, n === _ && (l += h, n = s / e >> 0, u[n] = p, o[n] = l, h = 0, p = []);
            return{length: l, lengths: o, segments: u}
        }, m = window._gsDefine.plugin({propName: "bezier", priority: -1, API: 2, global: !0, init: function(t, e, i) {
                this._target = t, e instanceof Array && (e = {values: e}), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var s, r, n, a, o, h = e.values || [], l = {}, _ = h[0], f = e.autoRotate || i.vars.orientToBezier;
                this._autoRotate = f ? f instanceof Array ? f : [["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]] : null;
                for (s in _)
                    this._props.push(s);
                for (n = this._props.length; --n > - 1; )
                    s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], l[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || l[s] !== h[0][s] && (o = l);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : p(h, e.type, l), this._segCount = this._beziers[s].length, this._timeRes) {
                    var m = c(this._beziers, this._timeRes);
                    this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (f = this._autoRotate)
                    for (f[0]instanceof Array || (this._autoRotate = f = [f]), n = f.length; --n > - 1; )
                        for (a = 0; 3 > a; a++)
                            s = f[n][a], this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)] : !1;
                return!0
            }, set: function(e) {
                var i, s, r, n, a, o, h, l, _, u, p = this._segCount, f = this._func, c = this._target;
                if (this._timeRes) {
                    if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && p - 1 > r) {
                        for (l = p - 1; l > r && e >= (this._l2 = _[++r]); )
                            ;
                        this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                    } else if (this._l1 > e && r > 0) {
                        for (; r > 0 && (this._l1 = _[--r]) >= e; )
                            ;
                        0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                    }
                    if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
                        for (l = u.length - 1; l > r && e >= (this._s2 = u[++r]); )
                            ;
                        this._s1 = u[r - 1], this._si = r
                    } else if (this._s1 > e && r > 0) {
                        for (; r > 0 && (this._s1 = u[--r]) >= e; )
                            ;
                        0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                    }
                    o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                } else
                    i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, o = (e - i * (1 / p)) * p;
                for (s = 1 - o, r = this._props.length; --r > - 1; )
                    n = this._props[r], a = this._beziers[n][i], h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._round[n] && (h = h + (h > 0 ? .5 : -.5) >> 0), f[n] ? c[n](h) : c[n] = h;
                if (this._autoRotate) {
                    var m, d, g, v, y, T, w, x = this._autoRotate;
                    for (r = x.length; --r > - 1; )
                        n = x[r][2], T = x[r][3] || 0, w = x[r][4] === !0 ? 1 : t, a = this._beziers[x[r][0]], m = this._beziers[x[r][1]], a && m && (a = a[i], m = m[i], d = a.a + (a.b - a.a) * o, v = a.b + (a.c - a.b) * o, d += (v - d) * o, v += (a.c + (a.d - a.c) * o - v) * o, g = m.a + (m.b - m.a) * o, y = m.b + (m.c - m.b) * o, g += (y - g) * o, y += (m.c + (m.d - m.c) * o - y) * o, h = Math.atan2(y - g, v - d) * w + T, f[n] ? c[n](h) : c[n] = h)
                }
            }}), d = m.prototype;
        m.bezierThrough = u, m.cubicToQuadratic = h, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
            return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        }, m._cssRegister = function() {
            var t = window._gsDefine.globals.CSSPlugin;
            if (t) {
                var i = t._internals, s = i._parseToProxy, r = i._setPluginRatio, n = i.CSSPropTween;
                i._registerComplexSpecialProp("bezier", {parser: function(t, i, a, o, h, l) {
                        i instanceof Array && (i = {values: i}), l = new m;
                        var _, u, p, f = i.values, c = f.length - 1, d = [], g = {};
                        if (0 > c)
                            return h;
                        for (_ = 0; c >= _; _++)
                            p = s(t, f[_], o, h, l, c !== _), d[_] = p.end;
                        for (u in i)
                            g[u] = i[u];
                        return g.values = d, h = new n(t, "bezier", 0, 0, p.pt, 2), h.data = p, h.plugin = l, h.setRatio = r, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (_ = g.autoRotate === !0 ? 0 : Number(g.autoRotate) * e, g.autoRotate = null != p.end.left ? [["left", "top", "rotation", _, !0]] : null != p.end.x ? [["x", "y", "rotation", _, !0]] : !1), g.autoRotate && (o._transform || o._enableTransforms(!1), p.autoRotate = o._target._gsTransform), l._onInitTween(p.proxy, g, o._tween), h
                    }})
            }
        }, d._roundProps = function(t, e) {
            for (var i = this._overwriteProps, s = i.length; --s > - 1; )
                (t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
        }, d._kill = function(t) {
            var e, i, s = this._props;
            for (e in this._beziers)
                if (e in t)
                    for (delete this._beziers[e], delete this._func[e], i = s.length; --i > - 1; )
                        s[i] === e && s.splice(i, 1);
            return this._super._kill.call(this, t)
        }
    }(), window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
        var i, s, r, n, a = function() {
            t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
        }, o = {}, h = a.prototype = new t("css");
        h.constructor = a, a.version = "1.10.2", a.API = 2, a.defaultTransformPerspective = 0, h = "px", a.suffixMap = {top: h, right: h, bottom: h, left: h, width: h, height: h, fontSize: h, padding: h, margin: h, perspective: h};
        var l, _, u, p, f, c, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g, d = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, v = /[^\d\-\.]/g, y = /(?:\d|\-|\+|=|#|\.)*/g, T = /opacity *= *([^)]*)/, w = /opacity:([^;]*)/, x = /alpha\(opacity *=.+?\)/i, b = /^(rgb|hsl)/, P = /([A-Z])/g, k = /-([a-z])/gi, S = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, R = function(t, e) {
            return e.toUpperCase()
        }, A = /(?:Left|Right|Width)/i, C = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, D = /,(?=[^\)]*(?:\(|$))/gi, M = Math.PI / 180, I = 180 / Math.PI, F = {}, E = document, N = E.createElement("div"), L = E.createElement("img"), X = a._internals = {_specialProps: o}, z = navigator.userAgent, U = function() {
            var t, e = z.indexOf("Android"), i = E.createElement("div");
            return u = -1 !== z.indexOf("Safari") && -1 === z.indexOf("Chrome") && (-1 === e || Number(z.substr(e + 8, 1)) > 3), f = u && 6 > Number(z.substr(z.indexOf("Version/") + 8, 1)), p = -1 !== z.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(z), c = parseFloat(RegExp.$1), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = i.getElementsByTagName("a")[0], t ? /^0.55/.test(t.style.opacity) : !1
        }(), Y = function(t) {
            return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, j = function(t) {
            window.console && console.log(t)
        }, B = "", q = "", V = function(t, e) {
            e = e || N;
            var i, s, r = e.style;
            if (void 0 !== r[t])
                return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > - 1 && void 0 === r[i[s] + t]; )
                ;
            return s >= 0 ? (q = 3 === s ? "ms" : i[s], B = "-" + q.toLowerCase() + "-", q + t) : null
        }, Z = E.defaultView ? E.defaultView.getComputedStyle : function() {
        }, G = a.getStyle = function(t, e, i, s, r) {
            var n;
            return U || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Z(t, null)) ? (t = i.getPropertyValue(e.replace(P, "-$1").toLowerCase()), n = t || i.length ? t : i[e]) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : Y(t)
        }, $ = function(t, e, i, s, r) {
            if ("px" === s || !s)
                return i;
            if ("auto" === s || !i)
                return 0;
            var n, a = A.test(e), o = t, h = N.style, l = 0 > i;
            return l && (i = -i), "%" === s && -1 !== e.indexOf("border") ? n = i / 100 * (a ? t.clientWidth : t.clientHeight) : (h.cssText = "border-style:solid; border-width:0; position:absolute; line-height:0;", "%" !== s && o.appendChild ? h[a ? "borderLeftWidth" : "borderTopWidth"] = i + s : (o = t.parentNode || E.body, h[a ? "width" : "height"] = i + s), o.appendChild(N), n = parseFloat(N[a ? "offsetWidth" : "offsetHeight"]), o.removeChild(N), 0 !== n || r || (n = $(t, e, i, s, !0))), l ? -n : n
        }, Q = function(t, e, i) {
            if ("absolute" !== G(t, "position", i))
                return 0;
            var s = "left" === e ? "Left" : "Top", r = G(t, "margin" + s, i);
            return t["offset" + s] - ($(t, e, parseFloat(r), r.replace(y, "")) || 0)
        }, W = function(t, e) {
            var i, s, r = {};
            if (e = e || Z(t, null))
                if (i = e.length)
                    for (; --i > - 1; )
                        r[e[i].replace(k, R)] = e.getPropertyValue(e[i]);
                else
                    for (i in e)
                        r[i] = e[i];
            else if (e = t.currentStyle || t.style)
                for (i in e)
                    r[i.replace(k, R)] = e[i];
            return U || (r.opacity = Y(t)), s = be(t, e, !1), r.rotation = s.rotation * I, r.skewX = s.skewX * I, r.scaleX = s.scaleX, r.scaleY = s.scaleY, r.x = s.x, r.y = s.y, xe && (r.z = s.z, r.rotationX = s.rotationX * I, r.rotationY = s.rotationY * I, r.scaleZ = s.scaleZ), r.filters && delete r.filters, r
        }, H = function(t, e, i, s, r) {
            var n, a, o, h = {}, l = t.style;
            for (a in i)
                "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (h[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(v, "") ? n : 0 : Q(t, a), void 0 !== l[a] && (o = new ue(l, a, l[a], o)));
            if (s)
                for (a in s)
                    "className" !== a && (h[a] = s[a]);
            return{difs: h, firstMPT: o}
        }, K = {width: ["Left", "Right"], height: ["Top", "Bottom"]}, J = ["marginLeft", "marginRight", "marginTop", "marginBottom"], te = function(t, e, i) {
            var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight), r = K[e], n = r.length;
            for (i = i || Z(t, null); --n > - 1; )
                s -= parseFloat(G(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(G(t, "border" + r[n] + "Width", i, !0)) || 0;
            return s
        }, ee = function(t, e) {
            (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
            var i = t.split(" "), s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0], r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
            return null == r ? r = "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(v, "")), e.oy = parseFloat(r.replace(v, ""))), s + " " + r + (i.length > 2 ? " " + i[2] : "")
        }, ie = function(t, e) {
            return"string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
        }, se = function(t, e) {
            return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e : parseFloat(t)
        }, re = function(t, e, i, s) {
            var r, n, a, o, h = 1e-6;
            return null == t ? o = e : "number" == typeof t ? o = t * M : (r = 2 * Math.PI, n = t.split("_"), a = Number(n[0].replace(v, "")) * (-1 === t.indexOf("rad") ? M : 1) - ("=" === t.charAt(1) ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), h > o && o > -h && (o = 0), o
        }, ne = {aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0]}, ae = function(t, e, i) {
            return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
        }, oe = function(t) {
            var e, i, s, r, n, a;
            return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ne[t] ? ne[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), r = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = ae(r + 1 / 3, e, i), t[1] = ae(r, e, i), t[2] = ae(r - 1 / 3, e, i), t) : (t = t.match(m) || ne.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : ne.black
        }, he = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (h in ne)
            he += "|" + h + "\\b";
        he = RegExp(he + ")", "gi");
        var le = function(t, e, i, s) {
            if (null == t)
                return function(t) {
                    return t
                };
            var r, n = e ? (t.match(he) || [""])[0] : "", a = t.split(n).join("").match(g) || [], o = t.substr(0, t.indexOf(a[0])), h = ")" === t.charAt(t.length - 1) ? ")" : "", l = -1 !== t.indexOf(" ") ? " " : ",", _ = a.length, u = _ > 0 ? a[0].replace(m, "") : "";
            return _ ? r = e ? function(t) {
                var e, p, f, c;
                if ("number" == typeof t)
                    t += u;
                else if (s && D.test(t)) {
                    for (c = t.replace(D, "|").split("|"), f = 0; c.length > f; f++)
                        c[f] = r(c[f]);
                    return c.join(",")
                }
                if (e = (t.match(he) || [n])[0], p = t.split(e).join("").match(g) || [], f = p.length, _ > f--)
                    for (; _ > ++f; )
                        p[f] = i ? p[0 | (f - 1) / 2] : a[f];
                return o + p.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
            } : function(t) {
                var e, n, p;
                if ("number" == typeof t)
                    t += u;
                else if (s && D.test(t)) {
                    for (n = t.replace(D, "|").split("|"), p = 0; n.length > p; p++)
                        n[p] = r(n[p]);
                    return n.join(",")
                }
                if (e = t.match(g) || [], p = e.length, _ > p--)
                    for (; _ > ++p; )
                        e[p] = i ? e[0 | (p - 1) / 2] : a[p];
                return o + e.join(l) + h
            } : function(t) {
                return t
            }
        }, _e = function(t) {
            return t = t.split(","), function(e, i, s, r, n, a, o) {
                var h, l = (i + "").split(" ");
                for (o = {}, h = 0; 4 > h; h++)
                    o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                return r.parse(e, o, n, a)
            }
        }, ue = (X._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, h = 1e-6; o; )
                e = a[o.v], o.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : h > e && e > -h && (e = 0), o.t[o.p] = e, o = o._next;
            if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                for (o = n.firstMPT; o; ) {
                    if (i = o.t, i.type) {
                        if (1 === i.type) {
                            for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++)
                                r += i["xn" + s] + i["xs" + (s + 1)];
                            i.e = r
                        }
                    } else
                        i.e = i.s + i.xs0;
                    o = o._next
                }
        }, function(t, e, i, s, r) {
            this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s)
        }), pe = (X._parseToProxy = function(t, e, i, s, r, n) {
            var a, o, h, l, _, u = s, p = {}, f = {}, c = i._transform, m = F;
            for (i._transform = null, F = e, s = _ = i.parse(t, e, s, r), F = m, n && (i._transform = c, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u; ) {
                if (1 >= s.type && (o = s.p, f[o] = s.s + s.c, p[o] = s.s, n || (l = new ue(s, "s", o, l, s.r), s.c = 0), 1 === s.type))
                    for (a = s.l; --a > 0; )
                        h = "xn" + a, o = s.p + "_" + h, f[o] = s.data[h], p[o] = s[h], n || (l = new ue(s, h, o, l, s.rxp[h]));
                s = s._next
            }
            return{proxy: p, end: f, firstMPT: l, pt: _}
        }, X.CSSPropTween = function(t, e, s, r, a, o, h, l, _, u, p) {
            this.t = t, this.p = e, this.s = s, this.c = r, this.n = h || e, t instanceof pe || n.push(this.n), this.r = l, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === p ? s + r : p, a && (this._next = a, a._prev = this)
        }), fe = a.parseComplex = function(t, e, i, s, r, n, a, o, h, _) {
            i = i || n || "", a = new pe(t, e, 0, 0, a, _ ? 2 : 1, null, !1, o, i, s), s += "";
            var u, p, f, c, g, v, y, T, w, x, P, k, S = i.split(", ").join(",").split(" "), R = s.split(", ").join(",").split(" "), A = S.length, C = l !== !1;
            for (( - 1 !== s.indexOf(",") || - 1 !== i.indexOf(",")) && (S = S.join(" ").replace(D, ", ").split(" "), R = R.join(" ").replace(D, ", ").split(" "), A = S.length), A !== R.length && (S = (n || "").split(" "), A = S.length), a.plugin = h, a.setRatio = _, u = 0; A > u; u++)
                if (c = S[u], g = R[u], T = parseFloat(c), T || 0 === T)
                    a.appendXtra("", T, ie(g, T), g.replace(d, ""), C && -1 !== g.indexOf("px"), !0);
                else if (r && ("#" === c.charAt(0) || ne[c] || b.test(c)))
                    k = "," === g.charAt(g.length - 1) ? ")," : ")", c = oe(c), g = oe(g), w = c.length + g.length > 6, w && !U && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[u]).join("transparent")) : (U || (w = !1), a.appendXtra(w ? "rgba(" : "rgb(", c[0], g[0] - c[0], ",", !0, !0).appendXtra("", c[1], g[1] - c[1], ",", !0).appendXtra("", c[2], g[2] - c[2], w ? "," : k, !0), w && (c = 4 > c.length ? 1 : c[3], a.appendXtra("", c, (4 > g.length ? 1 : g[3]) - c, k, !1)));
                else if (v = c.match(m)) {
                    if (y = g.match(d), !y || y.length !== v.length)
                        return a;
                    for (f = 0, p = 0; v.length > p; p++)
                        P = v[p], x = c.indexOf(P, f), a.appendXtra(c.substr(f, x - f), Number(P), ie(y[p], P), "", C && "px" === c.substr(x + P.length, 2), 0 === p), f = x + P.length;
                    a["xs" + a.l] += c.substr(f)
                } else
                    a["xs" + a.l] += a.l ? " " + c : c;
            if (-1 !== s.indexOf("=") && a.data) {
                for (k = a.xs0 + a.data.s, u = 1; a.l > u; u++)
                    k += a["xs" + u] + a.data["xn" + u];
                a.e = k + a["xs" + u]
            }
            return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
        }, ce = 9;
        for (h = pe.prototype, h.l = h.pr = 0; --ce > 0; )
            h["xn" + ce] = 0, h["xs" + ce] = "";
        h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, s, r, n) {
            var a = this, o = a.l;
            return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new pe(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {s: e + i}, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
        };
        var me = function(t, e) {
            e = e || {}, this.p = e.prefix ? V(t) || t : t, o[t] = o[this.p] = this, this.format = e.formatter || le(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
        }, de = X._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = {parser: i});
            var s, r, n = t.split(","), a = e.defaultValue;
            for (i = i || [a], s = 0; n.length > s; s++)
                e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, r = new me(n[s], e)
        }, ge = function(t) {
            if (!o[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                de(t, {parser: function(t, i, s, r, n, a, h) {
                        var l = (window.GreenSockGlobals || window).com.greensock.plugins[e];
                        return l ? (l._cssRegister(), o[s].parse(t, i, s, r, n, a, h)) : (j("Error: " + e + " js file not loaded."), n)
                    }})
            }
        };
        h = me.prototype, h.parseComplex = function(t, e, i, s, r, n) {
            var a, o, h, l, _, u, p = this.keyword;
            if (this.multi && (D.test(i) || D.test(e) ? (o = e.replace(D, "|").split("|"), h = i.replace(D, "|").split("|")) : p && (o = [e], h = [i])), h) {
                for (l = h.length > o.length?h.length:o.length, a = 0; l > a; a++)
                    e = o[a] = o[a] || this.dflt, i = h[a] = h[a] || this.dflt, p && (_ = e.indexOf(p), u = i.indexOf(p), _ !== u && (i = -1 === u ? h : o, i[a] += " " + p));
                e = o.join(", "), i = h.join(", ")
            }
            return fe(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
        }, h.parse = function(t, e, i, s, n, a) {
            return this.parseComplex(t.style, this.format(G(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
        }, a.registerSpecialProp = function(t, e, i) {
            de(t, {parser: function(t, s, r, n, a, o) {
                    var h = new pe(t, r, 0, 0, a, 2, r, !1, i);
                    return h.plugin = o, h.setRatio = e(t, s, n._tween, r), h
                }, priority: i})
        };
        var ve = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","), ye = V("transform"), Te = B + "transform", we = V("transformOrigin"), xe = null !== V("perspective"), be = function(t, e, i, s) {
            if (t._gsTransform && i && !s)
                return t._gsTransform;
            var r, n, o, h, l, _, u, p, f, c, m, d, g, v = i ? t._gsTransform || {skewY: 0} : {skewY: 0}, y = 0 > v.scaleX, T = 2e-5, w = 1e5, x = -Math.PI + 1e-4, b = Math.PI - 1e-4, P = xe ? parseFloat(G(t, we, e, !1, "0 0 0").split(" ")[2]) || v.zOrigin || 0 : 0;
            for (ye?r = G(t, Te, e, !0):t.currentStyle && (r = t.currentStyle.filter.match(C), r = r && 4 === r.length?[r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), v.x || 0, v.y || 0].join(","):""), n = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], o = n.length; --o > - 1; )
                h = Number(n[o]), n[o] = (l = h - (h |= 0)) ? (0 | l * w + (0 > l ? -.5 : .5)) / w + h : h;
            if (16 === n.length) {
                var k = n[8], S = n[9], R = n[10], A = n[12], O = n[13], D = n[14];
                if (v.zOrigin && (D = -v.zOrigin, A = k * D - n[12], O = S * D - n[13], D = R * D + v.zOrigin - n[14]), !i || s || null == v.rotationX) {
                    var M, I, F, E, N, L, X, z = n[0], U = n[1], Y = n[2], j = n[3], B = n[4], q = n[5], V = n[6], Z = n[7], $ = n[11], Q = v.rotationX = Math.atan2(V, R), W = x > Q || Q > b;
                    Q && (E = Math.cos(-Q), N = Math.sin(-Q), M = B * E + k * N, I = q * E + S * N, F = V * E + R * N, k = B * -N + k * E, S = q * -N + S * E, R = V * -N + R * E, $ = Z * -N + $ * E, B = M, q = I, V = F), Q = v.rotationY = Math.atan2(k, z), Q && (L = x > Q || Q > b, E = Math.cos(-Q), N = Math.sin(-Q), M = z * E - k * N, I = U * E - S * N, F = Y * E - R * N, S = U * N + S * E, R = Y * N + R * E, $ = j * N + $ * E, z = M, U = I, Y = F), Q = v.rotation = Math.atan2(U, q), Q && (X = x > Q || Q > b, E = Math.cos(-Q), N = Math.sin(-Q), z = z * E + B * N, I = U * E + q * N, q = U * -N + q * E, V = Y * -N + V * E, U = I), X && W ? v.rotation = v.rotationX = 0 : X && L ? v.rotation = v.rotationY = 0 : L && W && (v.rotationY = v.rotationX = 0), v.scaleX = (0 | Math.sqrt(z * z + U * U) * w + .5) / w, v.scaleY = (0 | Math.sqrt(q * q + S * S) * w + .5) / w, v.scaleZ = (0 | Math.sqrt(V * V + R * R) * w + .5) / w, v.skewX = 0, v.perspective = $ ? 1 / (0 > $ ? -$ : $) : 0, v.x = A, v.y = O, v.z = D
                }
            } else if (!(xe && !s && n.length && v.x === n[4] && v.y === n[5] && (v.rotationX || v.rotationY) || void 0 !== v.x && "none" === G(t, "display", e))) {
                var H = n.length >= 6, K = H ? n[0] : 1, J = n[1] || 0, te = n[2] || 0, ee = H ? n[3] : 1;
                v.x = n[4] || 0, v.y = n[5] || 0, _ = Math.sqrt(K * K + J * J), u = Math.sqrt(ee * ee + te * te), p = K || J ? Math.atan2(J, K) : v.rotation || 0, f = te || ee ? Math.atan2(te, ee) + p : v.skewX || 0, c = _ - Math.abs(v.scaleX || 0), m = u - Math.abs(v.scaleY || 0), Math.abs(f) > Math.PI / 2 && Math.abs(f) < 1.5 * Math.PI && (y ? (_ *= -1, f += 0 >= p ? Math.PI : -Math.PI, p += 0 >= p ? Math.PI : -Math.PI) : (u *= -1, f += 0 >= f ? Math.PI : -Math.PI)), d = (p - v.rotation) % Math.PI, g = (f - v.skewX) % Math.PI, (void 0 === v.skewX || c > T || -T > c || m > T || -T > m || d > x && b > d && false | d * w || g > x && b > g && false | g * w) && (v.scaleX = _, v.scaleY = u, v.rotation = p, v.skewX = f), xe && (v.rotationX = v.rotationY = v.z = 0, v.perspective = parseFloat(a.defaultTransformPerspective) || 0, v.scaleZ = 1)
            }
            v.zOrigin = P;
            for (o in v)
                T > v[o] && v[o] > -T && (v[o] = 0);
            return i && (t._gsTransform = v), v
        }, Pe = function(t) {
            var e, i, s = this.data, r = -s.rotation, n = r + s.skewX, a = 1e5, o = (0 | Math.cos(r) * s.scaleX * a) / a, h = (0 | Math.sin(r) * s.scaleX * a) / a, l = (0 | Math.sin(n) * -s.scaleY * a) / a, _ = (0 | Math.cos(n) * s.scaleY * a) / a, u = this.t.style, p = this.t.currentStyle;
            if (p) {
                i = h, h = -l, l = -i, e = p.filter, u.filter = "";
                var f, m, d = this.t.offsetWidth, g = this.t.offsetHeight, v = "absolute" !== p.position, w = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + _, x = s.x, b = s.y;
                if (null != s.ox && (f = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2, m = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, x += f - (f * o + m * h), b += m - (f * l + m * _)), v)
                    f = d / 2, m = g / 2, w += ", Dx=" + (f - (f * o + m * h) + x) + ", Dy=" + (m - (f * l + m * _) + b) + ")";
                else {
                    var P, k, S, R = 8 > c ? 1 : -1;
                    for (f = s.ieOffsetX || 0, m = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o? - o:o) * d + (0 > h? - h:h) * g)) / 2 + x), s.ieOffsetY = Math.round((g - ((0 > _? - _:_) * g + (0 > l? - l:l) * d)) / 2 + b), ce = 0; 4 > ce; ce++)
                        k = J[ce], P = p[k], i = -1 !== P.indexOf("px") ? parseFloat(P) : $(this.t, k, parseFloat(P), P.replace(y, "")) || 0, S = i !== s[k] ? 2 > ce ? -s.ieOffsetX : -s.ieOffsetY : 2 > ce ? f - s.ieOffsetX : m - s.ieOffsetY, u[k] = (s[k] = Math.round(i - S * (0 === ce || 2 === ce ? 1 : R))) + "px";
                    w += ", sizingMethod='auto expand')"
                }
                u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(O, w) : w + " " + e, (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === _ && (v && -1 === w.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(") && u.removeAttribute("filter"))
            }
        }, ke = function() {
            var t, e, i, s, r, n, a, o, h, l, _, u, f, c, m, d, g, v, y, T, w, x, b, P, k, S, R, A = this.data, C = this.t.style, O = A.rotation, D = A.scaleX, M = A.scaleY, I = A.scaleZ;
            if (p && (k = C.top ? "top" : C.bottom ? "bottom" : parseFloat(G(this.t, "top", null, !1)) ? "bottom" : "top", w = G(this.t, k, null, !1), S = parseFloat(w) || 0, R = w.substr((S + "").length) || "px", A._ffFix = !A._ffFix, C[k] = (A._ffFix ? S + .05 : S - .05) + R), O || A.skewX)
                y = Math.cos(O), T = Math.sin(O), t = y, r = T, A.skewX && (O -= A.skewX, y = Math.cos(O), T = Math.sin(O)), e = -T, n = y;
            else {
                if (!A.rotationY && !A.rotationX && 1 === I)
                    return C[ye] = "translate3d(" + A.x + "px," + A.y + "px," + A.z + "px)" + (1 !== D || 1 !== M ? " scale(" + D + "," + M + ")" : ""), void 0;
                t = n = 1, e = r = 0
            }
            _ = 1, i = s = a = o = h = l = u = f = c = 0, d = A.perspective, m = d ? -1 / d : 0, g = A.zOrigin, v = 1e5, O = A.rotationY, O && (y = Math.cos(O), T = Math.sin(O), h = _ * -T, f = m * -T, i = t * T, a = r * T, _ *= y, m *= y, t *= y, r *= y), O = A.rotationX, O && (y = Math.cos(O), T = Math.sin(O), w = e * y + i * T, x = n * y + a * T, b = l * y + _ * T, P = c * y + m * T, i = e * -T + i * y, a = n * -T + a * y, _ = l * -T + _ * y, m = c * -T + m * y, e = w, n = x, l = b, c = P), 1 !== I && (i *= I, a *= I, _ *= I, m *= I), 1 !== M && (e *= M, n *= M, l *= M, c *= M), 1 !== D && (t *= D, r *= D, h *= D, f *= D), g && (u -= g, s = i * u, o = a * u, u = _ * u + g), s = (w = (s += A.x) - (s |= 0)) ? (0 | w * v + (0 > w ? -.5 : .5)) / v + s : s, o = (w = (o += A.y) - (o |= 0)) ? (0 | w * v + (0 > w ? -.5 : .5)) / v + o : o, u = (w = (u += A.z) - (u |= 0)) ? (0 | w * v + (0 > w ? -.5 : .5)) / v + u : u, C[ye] = "matrix3d(" + [(0 | t * v) / v, (0 | r * v) / v, (0 | h * v) / v, (0 | f * v) / v, (0 | e * v) / v, (0 | n * v) / v, (0 | l * v) / v, (0 | c * v) / v, (0 | i * v) / v, (0 | a * v) / v, (0 | _ * v) / v, (0 | m * v) / v, s, o, u, d ? 1 + -u / d : 1].join(",") + ")"
        }, Se = function() {
            var t, e, i, s, r, n, a, o, h, l = this.data, _ = this.t, u = _.style;
            p && (t = u.top ? "top" : u.bottom ? "bottom" : parseFloat(G(_, "top", null, !1)) ? "bottom" : "top", e = G(_, t, null, !1), i = parseFloat(e) || 0, s = e.substr((i + "").length) || "px", l._ffFix = !l._ffFix, u[t] = (l._ffFix ? i + .05 : i - .05) + s), l.rotation || l.skewX ? (r = l.rotation, n = r - l.skewX, a = 1e5, o = l.scaleX * a, h = l.scaleY * a, u[ye] = "matrix(" + (0 | Math.cos(r) * o) / a + "," + (0 | Math.sin(r) * o) / a + "," + (0 | Math.sin(n) * -h) / a + "," + (0 | Math.cos(n) * h) / a + "," + l.x + "," + l.y + ")") : u[ye] = "matrix(" + l.scaleX + ",0,0," + l.scaleY + "," + l.x + "," + l.y + ")"
        };
        de("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {parser: function(t, e, i, s, n, a, o) {
                if (s._transform)
                    return n;
                var h, l, _, u, p, f, c, m = s._transform = be(t, r, !0, o.parseTransform), d = t.style, g = 1e-6, v = ve.length, y = o, T = {};
                if ("string" == typeof y.transform && ye)
                    _ = d.cssText, d[ye] = y.transform, d.display = "block", h = be(t, null, !1), d.cssText = _;
                else if ("object" == typeof y) {
                    if (h = {scaleX: se(null != y.scaleX ? y.scaleX : y.scale, m.scaleX), scaleY: se(null != y.scaleY ? y.scaleY : y.scale, m.scaleY), scaleZ: se(null != y.scaleZ ? y.scaleZ : y.scale, m.scaleZ), x: se(y.x, m.x), y: se(y.y, m.y), z: se(y.z, m.z), perspective: se(y.transformPerspective, m.perspective)}, c = y.directionalRotation, null != c)
                        if ("object" == typeof c)
                            for (_ in c)
                                y[_] = c[_];
                        else
                            y.rotation = c;
                    h.rotation = re("rotation"in y ? y.rotation : "shortRotation"in y ? y.shortRotation + "_short" : "rotationZ"in y ? y.rotationZ : m.rotation * I, m.rotation, "rotation", T), xe && (h.rotationX = re("rotationX"in y ? y.rotationX : "shortRotationX"in y ? y.shortRotationX + "_short" : m.rotationX * I || 0, m.rotationX, "rotationX", T), h.rotationY = re("rotationY"in y ? y.rotationY : "shortRotationY"in y ? y.shortRotationY + "_short" : m.rotationY * I || 0, m.rotationY, "rotationY", T)), h.skewX = null == y.skewX ? m.skewX : re(y.skewX, m.skewX), h.skewY = null == y.skewY ? m.skewY : re(y.skewY, m.skewY), (l = h.skewY - m.skewY) && (h.skewX += l, h.rotation += l)
                }
                for (null != y.force3D && (m.force3D = y.force3D, f = !0), p = m.force3D || m.z || m.rotationX || m.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, p || null == y.scale || (h.scaleZ = 1); --v > - 1; )
                    i = ve[v], u = h[i] - m[i], (u > g || -g > u || null != F[i]) && (f = !0, n = new pe(m, i, m[i], u, n), i in T && (n.e = T[i]), n.xs0 = 0, n.plugin = a, s._overwriteProps.push(n.n));
                return u = y.transformOrigin, (u || xe && p && m.zOrigin) && (ye ? (f = !0, i = we, u = (u || G(t, i, r, !1, "50% 50%")) + "", n = new pe(d, i, 0, 0, n, -1, "transformOrigin"), n.b = d[i], n.plugin = a, xe ? (_ = m.zOrigin, u = u.split(" "), m.zOrigin = (u.length > 2 && (0 === _ || "0px" !== u[2]) ? parseFloat(u[2]) : _) || 0, n.xs0 = n.e = d[i] = u[0] + " " + (u[1] || "50%") + " 0px", n = new pe(m, "zOrigin", 0, 0, n, -1, n.n), n.b = _, n.xs0 = n.e = m.zOrigin) : n.xs0 = n.e = d[i] = u) : ee(u + "", m)), f && (s._transformType = p || 3 === this._transformType ? 3 : 2), n
            }, prefix: !0}), de("boxShadow", {defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset"}), de("borderRadius", {defaultValue: "0px", parser: function(t, e, i, n, a) {
                e = this.format(e);
                var o, h, l, _, u, p, f, c, m, d, g, v, y, T, w, x, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], P = t.style;
                for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), h = 0; b.length > h; h++)
                    this.p.indexOf("border") && (b[h] = V(b[h])), u = _ = G(t, b[h], r, !1, "0px"), -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]), p = l = o[h], f = parseFloat(u), v = u.substr((f + "").length), y = "=" === p.charAt(1), y ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), g = p.substr((c + "").length - (0 > c ? 1 : 0)) || "") : (c = parseFloat(p), g = p.substr((c + "").length)), "" === g && (g = s[i] || v), g !== v && (T = $(t, "borderLeft", f, v), w = $(t, "borderTop", f, v), "%" === g ? (u = 100 * (T / m) + "%", _ = 100 * (w / d) + "%") : "em" === g ? (x = $(t, "borderLeft", 1, "em"), u = T / x + "em", _ = w / x + "em") : (u = T + "px", _ = w + "px"), y && (p = parseFloat(u) + c + g, l = parseFloat(_) + c + g)), a = fe(P, b[h], u + " " + _, p + " " + l, !1, "0px", a);
                return a
            }, prefix: !0, formatter: le("0px 0px 0px 0px", !1, !0)}), de("backgroundPosition", {defaultValue: "0 0", parser: function(t, e, i, s, n, a) {
                var o, h, l, _, u, p, f = "background-position", m = r || Z(t, null), d = this.format((m ? c ? m.getPropertyValue(f + "-x") + " " + m.getPropertyValue(f + "-y") : m.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), g = this.format(e);
                if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (p = G(t, "backgroundImage").replace(S, ""), p && "none" !== p)) {
                    for (o = d.split(" "), h = g.split(" "), L.setAttribute("src", p), l = 2; --l > - 1; )
                        d = o[l], _ = -1 !== d.indexOf("%"), _ !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - L.width : t.offsetHeight - L.height, o[l] = _ ? parseFloat(d) / 100 * u + "px" : 100 * (parseFloat(d) / u) + "%");
                    d = o.join(" ")
                }
                return this.parseComplex(t.style, d, g, n, a)
            }, formatter: ee}), de("backgroundSize", {defaultValue: "0 0", formatter: ee}), de("perspective", {defaultValue: "0px", prefix: !0}), de("perspectiveOrigin", {defaultValue: "50% 50%", prefix: !0}), de("transformStyle", {prefix: !0}), de("backfaceVisibility", {prefix: !0}), de("margin", {parser: _e("marginTop,marginRight,marginBottom,marginLeft")}), de("padding", {parser: _e("paddingTop,paddingRight,paddingBottom,paddingLeft")}), de("clip", {defaultValue: "rect(0px,0px,0px,0px)", parser: function(t, e, i, s, n, a) {
                var o, h, l;
                return 9 > c ? (h = t.currentStyle, l = 8 > c ? " " : ",", o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(G(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
            }}), de("textShadow", {defaultValue: "0px 0px 0px #999", color: !0, multi: !0}), de("autoRound,strictUnits", {parser: function(t, e, i, s, r) {
                return r
            }}), de("border", {defaultValue: "0px solid #000", parser: function(t, e, i, s, n, a) {
                return this.parseComplex(t.style, this.format(G(t, "borderTopWidth", r, !1, "0px") + " " + G(t, "borderTopStyle", r, !1, "solid") + " " + G(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
            }, color: !0, formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(he) || ["#000"])[0]
            }}), de("float,cssFloat,styleFloat", {parser: function(t, e, i, s, r) {
                var n = t.style, a = "cssFloat"in n ? "cssFloat" : "styleFloat";
                return new pe(n, a, 0, 0, r, -1, i, !1, 0, n[a], e)
            }});
        var Re = function(t) {
            var e, i = this.t, s = i.filter || G(this.data, "filter"), r = 0 | this.s + this.c * t;
            100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") ? (i.removeAttribute("filter"), e = !G(this.data, "filter")) : (i.filter = s.replace(x, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("opacity") ? 0 === r && this.xn1 || (i.filter += " alpha(opacity=" + r + ")") : i.filter = s.replace(T, "opacity=" + r))
        };
        de("opacity,alpha,autoAlpha", {defaultValue: "1", parser: function(t, e, i, s, n, a) {
                var o = parseFloat(G(t, "opacity", r, !1, "1")), h = t.style, l = "autoAlpha" === i;
                return e = parseFloat(e), l && 1 === o && "hidden" === G(t, "visibility", r) && 0 !== e && (o = 0), U ? n = new pe(h, "opacity", o, e - o, n) : (n = new pe(h, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = l ? 1 : 0, h.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Re), l && (n = new pe(h, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n)), n
            }});
        var Ae = function(t, e) {
            e && (t.removeProperty ? t.removeProperty(e.replace(P, "-$1").toLowerCase()) : t.removeAttribute(e))
        }, Ce = function(t) {
            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                this.t.className = 0 === t ? this.b : this.e;
                for (var e = this.data, i = this.t.style; e; )
                    e.v ? i[e.p] = e.v : Ae(i, e.p), e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else
                this.t.className !== this.e && (this.t.className = this.e)
        };
        de("className", {parser: function(t, e, s, n, a, o, h) {
                var l, _, u, p, f, c = t.className, m = t.style.cssText;
                if (a = n._classNamePT = new pe(t, s, 0, 0, a, 2), a.setRatio = Ce, a.pr = -11, i = !0, a.b = c, _ = W(t, r), u = t._gsClassPT) {
                    for (p = {}, f = u.data; f; )
                        p[f.p] = 1, f = f._next;
                    u.setRatio(1)
                }
                return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : c.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), n._tween._duration && (t.className = a.e, l = H(t, _, W(t), h, p), t.className = c, a.data = l.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, l.difs, a, o)), a
            }});
        var Oe = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration) {
                if ("all" === this.e)
                    return this.t.style.cssText = "", this.t._gsTransform && delete this.t._gsTransform, void 0;
                for (var e, i = this.t.style, s = this.e.split(","), r = s.length, n = o.transform.parse; --r > - 1; )
                    e = s[r], o[e] && (e = o[e].parse === n ? ye : o[e].p), Ae(i, e)
            }
        };
        for (de("clearProps", {parser:function(t, e, s, r, n) {
            return n = new pe(t, s, 0, 0, n, 2), n.setRatio = Oe, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n
        }}), h = "bezier,throwProps,physicsProps,physics2D".split(","), ce = h.length; ce--; )
            ge(h[ce]);
        h = a.prototype, h._firstPT = null, h._onInitTween = function(t, e, o) {
            if (!t.nodeType)
                return!1;
            this._target = t, this._tween = o, this._vars = e, l = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = Z(t, ""), n = this._overwriteProps;
            var h, p, c, m, d, g, v, y, T, x = t.style;
            if (_ && "" === x.zIndex && (h = G(t, "zIndex", r), ("auto" === h || "" === h) && (x.zIndex = 0)), "string" == typeof e && (m = x.cssText, h = W(t, r), x.cssText = m + ";" + e, h = H(t, h, W(t)).difs, !U && w.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, x.cssText = m), this._firstPT = p = this.parse(t, e, null), this._transformType) {
                for (T = 3 === this._transformType, ye?u && (_ = !0, "" === x.zIndex && (v = G(t, "zIndex", r), ("auto" === v || "" === v) && (x.zIndex = 0)), f && (x.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (T?"visible":"hidden"))):x.zoom = 1, c = p; c && c._next; )
                    c = c._next;
                y = new pe(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, c), y.setRatio = T && xe ? ke : ye ? Se : Pe, y.data = this._transform || be(t, r, !0), n.pop()
            }
            if (i) {
                for (; p; ) {
                    for (g = p._next, c = m; c && c.pr > p.pr; )
                        c = c._next;
                    (p._prev = c ? c._prev : d) ? p._prev._next = p : m = p, (p._next = c) ? c._prev = p : d = p, p = g
                }
                this._firstPT = m
            }
            return!0
        }, h.parse = function(t, e, i, n) {
            var a, h, _, u, p, f, c, m, d, g, v = t.style;
            for (a in e)
                f = e[a], h = o[a], h ? i = h.parse(t, f, a, this, i, n, e) : (p = G(t, a, r) + "", d = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && b.test(f) ? (d || (f = oe(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = fe(v, a, p, f, !0, "transparent", i, 0, n)) : !d || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (_ = parseFloat(p), c = _ || 0 === _ ? p.substr((_ + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (_ = te(t, a, r), c = "px") : "left" === a || "top" === a ? (_ = Q(t, a, r), c = "px") : (_ = "opacity" !== a ? 0 : 1, c = "")), g = d && "=" === f.charAt(1), g ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), m = f.replace(y, "")) : (u = parseFloat(f), m = d ? f.substr((u + "").length) || "" : ""), "" === m && (m = s[a] || c), f = u || 0 === u ? (g ? u + _ : u) + m : e[a], c !== m && "" !== m && (u || 0 === u) && (_ || 0 === _) && (_ = $(t, a, _, c), "%" === m ? (_ /= $(t, a, 100, "%") / 100, _ > 100 && (_ = 100), e.strictUnits !== !0 && (p = _ + "%")) : "em" === m ? _ /= $(t, a, 1, "em") : (u = $(t, a, u, m), m = "px"), g && (u || 0 === u) && (f = u + _ + m)), g && (u += _), !_ && 0 !== _ || !u && 0 !== u ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new pe(v, a, u || _ || 0, 0, i, -1, a, !1, 0, p, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : p) : j("invalid " + a + " tween value: " + e[a]) : (i = new pe(v, a, _, u - _, i, 0, a, l !== !1 && ("px" === m || "zIndex" === a), 0, p, f), i.xs0 = m)) : i = fe(v, a, p, f, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
            return i
        }, h.setRatio = function(t) {
            var e, i, s, r = this._firstPT, n = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                    for (; r; ) {
                        if (e = r.c * t + r.s, r.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : n > e && e > -n && (e = 0), r.type)
                            if (1 === r.type)
                                if (s = r.l, 2 === s)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                else if (3 === s)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === s)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === s)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++)
                                        i += r["xn" + s] + r["xs" + (s + 1)];
                                    r.t[r.p] = i
                                }
                            else
                                -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                        else
                            r.t[r.p] = e + r.xs0;
                        r = r._next
                    }
                else
                    for (; r; )
                        2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
            else
                for (; r; )
                    2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
        }, h._enableTransforms = function(t) {
            this._transformType = t || 3 === this._transformType ? 3 : 2, this._transform = this._transform || be(this._target, r, !0)
        }, h._linkCSSP = function(t, e, i, s) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
        }, h._kill = function(e) {
            var i, s, r, n = e;
            if (e.autoAlpha || e.alpha) {
                n = {};
                for (s in e)
                    n[s] = e[s];
                n.opacity = 1, n.autoAlpha && (n.visibility = 1)
            }
            return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
        };
        var De = function(t, e, i) {
            var s, r, n, a;
            if (t.slice)
                for (r = t.length; --r > - 1; )
                    De(t[r], e, i);
            else
                for (s = t.childNodes, r = s.length; --r > - 1; )
                    n = s[r], a = n.type, n.style && (e.push(W(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || De(n, e, i)
        };
        return a.cascadeTo = function(t, i, s) {
            var r, n, a, o = e.to(t, i, s), h = [o], l = [], _ = [], u = [], p = e._internals.reservedProps;
            for (t = o._targets || o.target, De(t, l, u), o.render(i, !0), De(t, _), o.render(0, !0), o._enabled(!0), r = u.length; --r > - 1; )
                if (n = H(u[r], l[r], _[r]), n.firstMPT) {
                    n = n.difs;
                    for (a in s)
                        p[a] && (n[a] = s[a]);
                    h.push(e.to(u[r], i, n))
                }
            return h
        }, t.activate([a]), a
    }, !0), function() {
        var t = window._gsDefine.plugin({propName: "roundProps", priority: -1, API: 2, init: function(t, e, i) {
                return this._tween = i, !0
            }}), e = t.prototype;
        e._onInitAllProps = function() {
            for (var t, e, i, s = this._tween, r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; --n > - 1; )
                a[r[n]] = 1;
            for (n = r.length; --n > - 1; )
                for (t = r[n], e = s._firstPT; e; )
                    i = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[t] = o), e = i;
            return!1
        }, e._add = function(t, e, i, s) {
            this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e)
        }
    }(), window._gsDefine.plugin({propName: "attr", API: 2, init: function(t, e) {
            var i;
            if ("function" != typeof t.setAttribute)
                return!1;
            this._target = t, this._proxy = {};
            for (i in e)
                this._addTween(this._proxy, i, parseFloat(t.getAttribute(i)), e[i], i) && this._overwriteProps.push(i);
            return!0
        }, set: function(t) {
            this._super.setRatio.call(this, t);
            for (var e, i = this._overwriteProps, s = i.length; --s > - 1; )
                e = i[s], this._target.setAttribute(e, this._proxy[e] + "")
        }}), window._gsDefine.plugin({propName: "directionalRotation", API: 2, init: function(t, e) {
            "object" != typeof e && (e = {rotation: e}), this.finals = {};
            var i, s, r, n, a, o, h = e.useRadians === !0 ? 2 * Math.PI : 360, l = 1e-6;
            for (i in e)
                "useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (s = o.join("_"), -1 !== s.indexOf("short") && (a %= h, a !== a % (h / 2) && (a = 0 > a ? a + h : a - h)), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (0 | a / h) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (0 | a / h) * h)), (a > l || -l > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i)));
            return!0
        }, set: function(t) {
            var e;
            if (1 !== t)
                this._super.setRatio.call(this, t);
            else
                for (e = this._firstPT; e; )
                    e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
        }})._autoCSS = !0, window._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, i, s, r = window.GreenSockGlobals || window, n = r.com.greensock, a = 2 * Math.PI, o = Math.PI / 2, h = n._class, l = function(e, i) {
            var s = h("easing." + e, function() {
            }, !0), r = s.prototype = new t;
            return r.constructor = s, r.getRatio = i, s
        }, _ = t.register || function() {
        }, u = function(t, e, i, s) {
            var r = h("easing." + t, {easeOut: new e, easeIn: new i, easeInOut: new s}, !0);
            return _(r, t), r
        }, p = function(t, e, i) {
            this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
        }, f = function(e, i) {
            var s = h("easing." + e, function(t) {
                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
            }, !0), r = s.prototype = new t;
            return r.constructor = s, r.getRatio = i, r.config = function(t) {
                return new s(t)
            }, s
        }, c = u("Back", f("BackOut", function(t) {
            return(t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), f("BackIn", function(t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), f("BackInOut", function(t) {
            return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })), m = h("easing.SlowMo", function(t, e, i) {
            e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
        }, !0), d = m.prototype = new t;
        return d.constructor = m, d.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
            return new m(t, e, i)
        }, e = h("easing.SteppedEase", function(t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, d.config = e.config = function(t) {
            return new e(t)
        }, i = h("easing.RoughEase", function(e) {
            e = e || {};
            for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), f = u, c = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > - 1; )
                i = c ? Math.random() : 1 / u * f, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), c ? s += Math.random() * r - .5 * r : f % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {x: i, y: s};
            for (l.sort(function(t, e) {
                return t.x - e.x
            }), o = new p(1, 1, null), f = u; --f > - 1; )
                a = l[f], o = new p(a.x, a.y, o);
            this._prev = new p(0, 0, 0 !== o.t ? o : o.next)
        }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t; )
                    e = e.next;
                e = e.prev
            } else
                for (; e.prev && e.t >= t; )
                    e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, d.config = function(t) {
            return new i(t)
        }, i.ease = new i, u("Bounce", l("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), l("BounceIn", function(t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), l("BounceInOut", function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), u("Circ", l("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), l("CircIn", function(t) {
            return-(Math.sqrt(1 - t * t) - 1)
        }), l("CircInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), s = function(e, i, s) {
            var r = h("easing." + e, function(t, e) {
                this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
            }, !0), n = r.prototype = new t;
            return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                return new r(t, e)
            }, r
        }, u("Elastic", s("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .3), s("ElasticIn", function(t) {
            return-(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
        }, .3), s("ElasticInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .45)), u("Expo", l("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), l("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), l("ExpoInOut", function(t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), u("Sine", l("SineOut", function(t) {
            return Math.sin(t * o)
        }), l("SineIn", function(t) {
            return-Math.cos(t * o) + 1
        }), l("SineInOut", function(t) {
            return-.5 * (Math.cos(Math.PI * t) - 1)
        })), h("easing.EaseLookup", {find: function(e) {
                return t.map[e]
            }}, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), c
    }, !0)
}), function(t) {
    "use strict";
    var e, i, s, r, n, a = t.GreenSockGlobals || t, o = function(t) {
        var e, i = t.split("."), s = a;
        for (e = 0; i.length > e; e++)
            s[i[e]] = s = s[i[e]] || {};
        return s
    }, h = o("com.greensock"), l = [].slice, _ = function() {
    }, u = {}, p = function(e, i, s, r) {
        this.sc = u[e] ? u[e].sc : [], u[e] = this, this.gsClass = null, this.func = s;
        var n = [];
        this.check = function(h) {
            for (var l, _, f, c, m = i.length, d = m; --m > - 1; )
                (l = u[i[m]] || new p(i[m], [])).gsClass ? (n[m] = l.gsClass, d--) : h && l.sc.push(this);
            if (0 === d && s)
                for (_ = ("com.greensock." + e).split("."), f = _.pop(), c = o(_.join("."))[f] = this.gsClass = s.apply(s, n), r && (a[f] = c, "function" == typeof define && define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath + "/":"") + e.split(".").join("/"), [], function() {
                    return c
                }):"undefined" != typeof module && module.exports && (module.exports = c)), m = 0; this.sc.length > m; m++)
                    this.sc[m].check()
        }, this.check(!0)
    }, f = t._gsDefine = function(t, e, i, s) {
        return new p(t, e, i, s)
    }, c = h._class = function(t, e, i) {
        return e = e || function() {
        }, f(t, [], function() {
            return e
        }, i), e
    };
    f.globals = a;
    var m = [0, 0, 1, 1], d = [], g = c("easing.Ease", function(t, e, i, s) {
        this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? m.concat(e) : m
    }, !0), v = g.map = {}, y = g.register = function(t, e, i, s) {
        for (var r, n, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > - 1; )
            for (n = l[_], r = s?c("easing." + n, null, !0):h.easing[n] || {}, a = u.length; --a > - 1; )
                o = u[a], v[n + "." + o] = v[o + n] = r[o] = t.getRatio ? t : t[o] || new t
    };
    for (s = g.prototype, s._calcEnd = !1, s.getRatio = function(t) {
        if (this._func)
            return this._params[0] = t, this._func.apply(null, this._params);
        var e = this._type, i = this._power, s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
        return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
    }, e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], i = e.length; --i > - 1; )
        s = e[i] + ",Power" + i, y(new g(null, null, 1, i), s, "easeOut", !0), y(new g(null, null, 2, i), s, "easeIn" + (0 === i ? ",easeNone" : "")), y(new g(null, null, 3, i), s, "easeInOut");
    v.linear = h.easing.Linear.easeIn, v.swing = h.easing.Quad.easeInOut;
    var T = c("events.EventDispatcher", function(t) {
        this._listeners = {}, this._eventTarget = t || this
    });
    s = T.prototype, s.addEventListener = function(t, e, i, s, a) {
        a = a || 0;
        var o, h, l = this._listeners[t], _ = 0;
        for (null == l && (this._listeners[t] = l = []), h = l.length; --h > - 1; )
            o = l[h], o.c === e && o.s === i ? l.splice(h, 1) : 0 === _ && a > o.pr && (_ = h + 1);
        l.splice(_, 0, {c: e, s: i, up: s, pr: a}), this !== r || n || r.wake()
    }, s.removeEventListener = function(t, e) {
        var i, s = this._listeners[t];
        if (s)
            for (i = s.length; --i > - 1; )
                if (s[i].c === e)
                    return s.splice(i, 1), void 0
    }, s.dispatchEvent = function(t) {
        var e, i, s, r = this._listeners[t];
        if (r)
            for (e = r.length, i = this._eventTarget; --e > - 1; )
                s = r[e], s.up ? s.c.call(s.s || i, {type: t, target: i}) : s.c.call(s.s || i)
    };
    var w = t.requestAnimationFrame, x = t.cancelAnimationFrame, b = Date.now || function() {
        return(new Date).getTime()
    }, P = b();
    for (e = ["ms", "moz", "webkit", "o"], i = e.length; --i > - 1 && !w; )
        w = t[e[i] + "RequestAnimationFrame"], x = t[e[i] + "CancelAnimationFrame"] || t[e[i] + "CancelRequestAnimationFrame"];
    c("Ticker", function(t, e) {
        var i, s, a, o, h, l = this, u = b(), p = e !== !1 && w, f = function(t) {
            P = b(), l.time = (P - u) / 1e3;
            var e, r = l.time - h;
            (!i || r > 0 || t === !0) && (l.frame++, h += r + (r >= o ? .004 : o - r), e = !0), t !== !0 && (a = s(f)), e && l.dispatchEvent("tick")
        };
        T.call(l), this.time = this.frame = 0, this.tick = function() {
            f(!0)
        }, this.sleep = function() {
            null != a && (p && x ? x(a) : clearTimeout(a), s = _, a = null, l === r && (n = !1))
        }, this.wake = function() {
            null !== a && l.sleep(), s = 0 === i ? _ : p && w ? w : function(t) {
                return setTimeout(t, 0 | 1e3 * (h - l.time) + 1)
            }, l === r && (n = !0), f(2)
        }, this.fps = function(t) {
            return arguments.length ? (i = t, o = 1 / (i || 60), h = this.time + o, l.wake(), void 0) : i
        }, this.useRAF = function(t) {
            return arguments.length ? (l.sleep(), p = t, l.fps(i), void 0) : p
        }, l.fps(t), setTimeout(function() {
            p && (!a || 5 > l.frame) && l.useRAF(!1)
        }, 1500)
    }), s = h.Ticker.prototype = new h.events.EventDispatcher, s.constructor = h.Ticker;
    var k = c("core.Animation", function(t, e) {
        if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, X) {
            n || r.wake();
            var i = this.vars.useFrames ? L : X;
            i.add(this, i._time), this.vars.paused && this.paused(!0)
        }
    });
    r = k.ticker = new h.Ticker, s = k.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
    var S = function() {
        b() - P > 2e3 && r.wake(), setTimeout(S, 2e3)
    };
    S(), s.play = function(t, e) {
        return arguments.length && this.seek(t, e), this.reversed(!1).paused(!1)
    }, s.pause = function(t, e) {
        return arguments.length && this.seek(t, e), this.paused(!0)
    }, s.resume = function(t, e) {
        return arguments.length && this.seek(t, e), this.paused(!1)
    }, s.seek = function(t, e) {
        return this.totalTime(Number(t), e !== !1)
    }, s.restart = function(t, e) {
        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
    }, s.reverse = function(t, e) {
        return arguments.length && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
    }, s.render = function() {
    }, s.invalidate = function() {
        return this
    }, s._enabled = function(t, e) {
        return n || r.wake(), this._gc = !t, this._active = t && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration, e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
    }, s._kill = function() {
        return this._enabled(!1, !1)
    }, s.kill = function(t, e) {
        return this._kill(t, e), this
    }, s._uncache = function(t) {
        for (var e = t ? this : this.timeline; e; )
            e._dirty = !0, e = e.timeline;
        return this
    }, s._swapSelfInParams = function(t) {
        for (var e = t.length, i = t.concat(); --e > - 1; )
            "{self}" === t[e] && (i[e] = this);
        return i
    }, s.eventCallback = function(t, e, i, s) {
        if ("on" === (t || "").substr(0, 2)) {
            var r = this.vars;
            if (1 === arguments.length)
                return r[t];
            null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = i instanceof Array && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
        }
        return this
    }, s.delay = function(t) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
    }, s.duration = function(t) {
        return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
    }, s.totalDuration = function(t) {
        return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
    }, s.time = function(t, e) {
        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
    }, s.totalTime = function(t, e, i) {
        if (n || r.wake(), !arguments.length)
            return this._totalTime;
        if (this._timeline) {
            if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                this._dirty && this.totalDuration();
                var s = this._totalDuration, a = this._timeline;
                if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : a._time) - (this._reversed ? s - t : t) / this._timeScale, a._dirty || this._uncache(!1), a._timeline)
                    for (; a._timeline; )
                        a._timeline._time !== (a._startTime + a._totalTime) / a._timeScale && a.totalTime(a._totalTime, !0), a = a._timeline
            }
            this._gc && this._enabled(!0, !1), this._totalTime !== t && this.render(t, e, !1)
        }
        return this
    }, s.startTime = function(t) {
        return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
    }, s.timeScale = function(t) {
        if (!arguments.length)
            return this._timeScale;
        if (t = t || 1e-6, this._timeline && this._timeline.smoothChildTiming) {
            var e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime();
            this._startTime = i - (i - this._startTime) * this._timeScale / t
        }
        return this._timeScale = t, this._uncache(!1)
    }, s.reversed = function(t) {
        return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._totalTime, !0)), this) : this._reversed
    }, s.paused = function(t) {
        if (!arguments.length)
            return this._paused;
        if (t != this._paused && this._timeline) {
            n || t || r.wake();
            var e = this._timeline, i = e.rawTime(), s = i - this._pauseTime;
            !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = !t && this._totalTime > 0 && this._totalTime < this._totalDuration, t || 0 === s || 0 === this._duration || this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
        }
        return this._gc && !t && this._enabled(!0, !1), this
    };
    var R = c("core.SimpleTimeline", function(t) {
        k.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
    });
    s = R.prototype = new k, s.constructor = R, s.kill()._gc = !1, s._first = s._last = null, s._sortChildren = !1, s.add = s.insert = function(t, e) {
        var i, s;
        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
            for (s = t._startTime; i && i._startTime > s; )
                i = i._prev;
        return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._timeline && this._uncache(!0), this
    }, s._remove = function(t, e) {
        return t.timeline === this && (e || t._enabled(!1, !0), t.timeline = null, t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), this._timeline && this._uncache(!0)), this
    }, s.render = function(t, e, i) {
        var s, r = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = t; r; )
            s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
    }, s.rawTime = function() {
        return n || r.wake(), this._totalTime
    };
    var A = c("TweenLite", function(e, i, s) {
        if (k.call(this, i, s), this.render = A.prototype.render, null == e)
            throw"Cannot tween a null target.";
        this.target = e = "string" != typeof e ? e : A.selector(e) || e;
        var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), h = this.vars.overwrite;
        if (this._overwrite = h = null == h ? N[A.defaultOverwrite] : "number" == typeof h ? h >> 0 : N[h], (o || e instanceof Array) && "number" != typeof e[0])
            for (this._targets = a = l.call(e, 0), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++)
                n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(l.call(n, 0))) : (this._siblings[r] = z(n, this, !1), 1 === h && this._siblings[r].length > 1 && U(n, this, null, 1, this._siblings[r])) : (n = a[r--] = A.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
        else
            this._propLookup = {}, this._siblings = z(e, this, !1), 1 === h && this._siblings.length > 1 && U(e, this, null, 1, this._siblings);
        (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
    }, !0), C = function(e) {
        return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
    }, O = function(t, e) {
        var i, s = {};
        for (i in t)
            E[i] || i in e && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!M[i] || M[i] && M[i]._autoCSS) || (s[i] = t[i], delete t[i]);
        t.css = s
    };
    s = A.prototype = new k, s.constructor = A, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = !1, A.version = "1.10.2", A.defaultEase = s._ease = new g(null, null, 1, 1), A.defaultOverwrite = "auto", A.ticker = r, A.autoSleep = !0, A.selector = t.$ || t.jQuery || function(e) {
        return t.$ ? (A.selector = t.$, t.$(e)) : t.document ? t.document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e
    };
    var D = A._internals = {}, M = A._plugins = {}, I = A._tweenLookup = {}, F = 0, E = D.reservedProps = {ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1}, N = {none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0}, L = k._rootFramesTimeline = new R, X = k._rootTimeline = new R;
    X._startTime = r.time, L._startTime = r.frame, X._active = L._active = !0, k._updateRoot = function() {
        if (X.render((r.time - X._startTime) * X._timeScale, !1, !1), L.render((r.frame - L._startTime) * L._timeScale, !1, !1), !(r.frame % 120)) {
            var t, e, i;
            for (i in I) {
                for (e = I[i].tweens, t = e.length; --t > - 1; )
                    e[t]._gc && e.splice(t, 1);
                0 === e.length && delete I[i]
            }
            if (i = X._first, (!i || i._paused) && A.autoSleep && !L._first && 1 === r._listeners.tick.length) {
                for (; i && i._paused; )
                    i = i._next;
                i || r.sleep()
            }
        }
    }, r.addEventListener("tick", k._updateRoot);
    var z = function(t, e, i) {
        var s, r, n = t._gsTweenID;
        if (I[n || (t._gsTweenID = n = "t" + F++)] || (I[n] = {target: t, tweens: []}), e && (s = I[n].tweens, s[r = s.length] = e, i))
            for (; --r > - 1; )
                s[r] === e && s.splice(r, 1);
        return I[n].tweens
    }, U = function(t, e, i, s, r) {
        var n, a, o, h;
        if (1 === s || s >= 4) {
            for (h = r.length, n = 0; h > n; n++)
                if ((o = r[n]) !== e)
                    o._gc || o._enabled(!1, !1) && (a = !0);
                else if (5 === s)
                    break;
            return a
        }
        var l, _ = e._startTime + 1e-10, u = [], p = 0, f = 0 === e._duration;
        for (n = r.length; --n > - 1; )
            (o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || Y(e, 0, f), 0 === Y(o, l, f) && (u[p++] = o)) : _ >= o._startTime && o._startTime + o.totalDuration() / o._timeScale + 1e-10 > _ && ((f || !o._initted) && 2e-10 >= _ - o._startTime || (u[p++] = o)));
        for (n = p; --n > - 1; )
            o = u[n], 2 === s && o._kill(i, t) && (a = !0), (2 !== s || !o._firstPT && o._initted) && o._enabled(!1, !1) && (a = !0);
        return a
    }, Y = function(t, e, i) {
        for (var s = t._timeline, r = s._timeScale, n = t._startTime, a = 1e-10; s._timeline; ) {
            if (n += s._startTime, r *= s._timeScale, s._paused)
                return-100;
            s = s._timeline
        }
        return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * a > n - e ? a : (n += t.totalDuration() / t._timeScale / r) > e + a ? 0 : n - e - a
    };
    s._init = function() {
        var t, e, i, s, r = this.vars, n = this._overwrittenProps, a = this._duration, o = r.immediateRender, h = r.ease;
        if (r.startAt) {
            if (this._startAt && this._startAt.render(-1, !0), r.startAt.overwrite = 0, r.startAt.immediateRender = !0, this._startAt = A.to(this.target, 0, r.startAt), o)
                if (this._time > 0)
                    this._startAt = null;
                else if (0 !== a)
                    return
        } else if (r.runBackwards && r.immediateRender && 0 !== a)
            if (this._startAt)
                this._startAt.render(-1, !0), this._startAt = null;
            else if (0 === this._time) {
                i = {};
                for (s in r)
                    E[s] && "autoCSS" !== s || (i[s] = r[s]);
                return i.overwrite = 0, this._startAt = A.to(this.target, 0, i), void 0
            }
        if (this._ease = h ? h instanceof g ? r.easeParams instanceof Array ? h.config.apply(h, r.easeParams) : h : "function" == typeof h ? new g(h, r.easeParams) : v[h] || A.defaultEase : A.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
            for (t = this._targets.length; --t > - 1; )
                this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], n ? n[t] : null) && (e = !0);
        else
            e = this._initProps(this.target, this._propLookup, this._siblings, n);
        if (e && A._onPluginEvent("_onInitAllProps", this), n && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
            for (i = this._firstPT; i; )
                i.s += i.c, i.c = -i.c, i = i._next;
        this._onUpdate = r.onUpdate, this._initted = !0
    }, s._initProps = function(e, i, s, r) {
        var n, a, o, h, l, _;
        if (null == e)
            return!1;
        this.vars.css || e.style && e !== t && e.nodeType && M.css && this.vars.autoCSS !== !1 && O(this.vars, e);
        for (n in this.vars) {
            if (_ = this.vars[n], E[n])
                _ instanceof Array && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
            else if (M[n] && (h = new M[n])._onInitTween(e, this.vars[n], this)) {
                for (this._firstPT = l = {_next:this._firstPT, t:h, p:"setRatio", s:0, c:1, f:!0, n:n, pg:!0, pr:h._priority}, a = h._overwriteProps.length; --a > - 1; )
                    i[h._overwriteProps[a]] = this._firstPT;
                (h._priority || h._onInitAllProps) && (o = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
            } else
                this._firstPT = i[n] = l = {_next: this._firstPT, t: e, p: n, f: "function" == typeof e[n], n: n, pg: !1, pr: 0}, l.s = l.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), l.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - l.s || 0;
            l && l._next && (l._next._prev = l)
        }
        return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && U(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : o
    }, s.render = function(t, e, i) {
        var s, r, n, a = this._time;
        if (t >= this._duration)
            this._totalTime = this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete"), 0 === this._duration && ((0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && (i = !0, this._rawPrevTime > 0 && (r = "onReverseComplete", e && (t = -1))), this._rawPrevTime = t);
        else if (1e-7 > t)
            this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === this._duration && this._rawPrevTime > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = t)) : this._initted || (i = !0);
        else if (this._totalTime = this._time = t, this._easeType) {
            var o = t / this._duration, h = this._easeType, l = this._easePower;
            (1 === h || 3 === h && o >= .5) && (o = 1 - o), 3 === h && (o *= 2), 1 === l ? o *= o : 2 === l ? o *= o * o : 3 === l ? o *= o * o * o : 4 === l && (o *= o * o * o * o), this.ratio = 1 === h ? 1 - o : 2 === h ? o : .5 > t / this._duration ? o / 2 : 1 - o / 2
        } else
            this.ratio = this._ease.getRatio(t / this._duration);
        if (this._time !== a || i) {
            if (!this._initted) {
                if (this._init(), !this._initted)
                    return;
                this._time && !s ? this.ratio = this._ease.getRatio(this._time / this._duration) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0?this._startAt.render(t, e, i):r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === this._duration) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || d))), n = this._firstPT; n; )
                n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
            this._onUpdate && (0 > t && this._startAt && this._startAt.render(t, e, i), e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || d)), r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || d)))
        }
    }, s._kill = function(t, e) {
        if ("all" === t && (t = null), null == t && (null == e || e === this.target))
            return this._enabled(!1, !1);
        e = "string" != typeof e ? e || this._targets || this.target : A.selector(e) || e;
        var i, s, r, n, a, o, h, l;
        if ((e instanceof Array || C(e)) && "number" != typeof e[0])
            for (i = e.length; --i > - 1; )
                this._kill(t, e[i]) && (o = !0);
        else {
            if (this._targets) {
                for (i = this._targets.length; --i > - 1; )
                    if (e === this._targets[i]) {
                        a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                        break
                    }
            } else {
                if (e !== this.target)
                    return!1;
                a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
            }
            if (a) {
                h = t || a, l = t !== s && "all" !== s && t !== a && (null == t || t._tempKill !== !0);
                for (r in h)
                    (n = a[r]) && (n.pg && n.t._kill(h) && (o = !0), n.pg && 0 !== n.t._overwriteProps.length || (n._prev ? n._prev._next = n._next : n === this._firstPT && (this._firstPT = n._next), n._next && (n._next._prev = n._prev), n._next = n._prev = null), delete a[r]), l && (s[r] = 1);
                !this._firstPT && this._initted && this._enabled(!1, !1)
            }
        }
        return o
    }, s.invalidate = function() {
        return this._notifyPluginsOfEnabled && A._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
    }, s._enabled = function(t, e) {
        if (n || r.wake(), t && this._gc) {
            var i, s = this._targets;
            if (s)
                for (i = s.length; --i > - 1; )
                    this._siblings[i] = z(s[i], this, !0);
            else
                this._siblings = z(this.target, this, !0)
        }
        return k.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? A._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
    }, A.to = function(t, e, i) {
        return new A(t, e, i)
    }, A.from = function(t, e, i) {
        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new A(t, e, i)
    }, A.fromTo = function(t, e, i, s) {
        return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new A(t, e, s)
    }, A.delayedCall = function(t, e, i, s, r) {
        return new A(e, 0, {delay: t, onComplete: e, onCompleteParams: i, onCompleteScope: s, onReverseComplete: e, onReverseCompleteParams: i, onReverseCompleteScope: s, immediateRender: !1, useFrames: r, overwrite: 0})
    }, A.set = function(t, e) {
        return new A(t, 0, e)
    }, A.killTweensOf = A.killDelayedCallsTo = function(t, e) {
        for (var i = A.getTweensOf(t), s = i.length; --s > - 1; )
            i[s]._kill(e, t)
    }, A.getTweensOf = function(t) {
        if (null == t)
            return[];
        t = "string" != typeof t ? t : A.selector(t) || t;
        var e, i, s, r;
        if ((t instanceof Array || C(t)) && "number" != typeof t[0]) {
            for (e = t.length, i = []; --e > - 1; )
                i = i.concat(A.getTweensOf(t[e]));
            for (e = i.length; --e > - 1; )
                for (r = i[e], s = e; --s > - 1; )
                    r === i[s] && i.splice(e, 1)
        } else
            for (i = z(t).concat(), e = i.length; --e > - 1; )
                i[e]._gc && i.splice(e, 1);
        return i
    };
    var j = c("plugins.TweenPlugin", function(t, e) {
        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = j.prototype
    }, !0);
    if (s = j.prototype, j.version = "1.10.1", j.API = 2, s._firstPT = null, s._addTween = function(t, e, i, s, r, n) {
        var a, o;
        return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {_next: this._firstPT, t: t, p: e, s: i, c: a, f: "function" == typeof t[e], n: r || e, r: n}, o._next && (o._next._prev = o), o) : void 0
    }, s.setRatio = function(t) {
        for (var e, i = this._firstPT, s = 1e-6; i; )
            e = i.c * t + i.s, i.r ? e = 0 | e + (e > 0 ? .5 : -.5) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
    }, s._kill = function(t) {
        var e, i = this._overwriteProps, s = this._firstPT;
        if (null != t[this._propName])
            this._overwriteProps = [];
        else
            for (e = i.length; --e > - 1; )
                null != t[i[e]] && i.splice(e, 1);
        for (; s; )
            null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
        return!1
    }, s._roundProps = function(t, e) {
        for (var i = this._firstPT; i; )
            (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
    }, A._onPluginEvent = function(t, e) {
        var i, s, r, n, a, o = e._firstPT;
        if ("_onInitAllProps" === t) {
            for (; o; ) {
                for (a = o._next, s = r; s && s.pr > o.pr; )
                    s = s._next;
                (o._prev = s ? s._prev : n) ? o._prev._next = o : r = o, (o._next = s) ? s._prev = o : n = o, o = a
            }
            o = e._firstPT = r
        }
        for (; o; )
            o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
        return i
    }, j.activate = function(t) {
        for (var e = t.length; --e > - 1; )
            t[e].API === j.API && (M[(new t[e])._propName] = t[e]);
        return!0
    }, f.plugin = function(t) {
        if (!(t && t.propName && t.init && t.API))
            throw"illegal plugin definition.";
        var e, i = t.propName, s = t.priority || 0, r = t.overwriteProps, n = {init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_roundProps", initAll: "_onInitAllProps"}, a = c("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
            j.call(this, i, s), this._overwriteProps = r || []
        }, t.global === !0), o = a.prototype = new j(i);
        o.constructor = a, a.API = t.API;
        for (e in n)
            "function" == typeof t[e] && (o[n[e]] = t[e]);
        return a.version = t.version, j.activate([a]), a
    }, e = t._gsQueue) {
        for (i = 0; e.length > i; i++)
            e[i]();
        for (s in u)
            u[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
    }
    n = !1
}(window);


/* ScrollMagic v1.3.0 | (c) 2014 Jan Paepke (@janpaepke) | license & info: http://janpaepke.github.io/ScrollMagic */
!function(e, t) {
    if ("function" == typeof define && define.amd)
        define(["jquery", "TweenMax", "TimelineMax"], t);
    else {
        var n = t(e.jQuery, e.TweenMax, e.TimelineMax);
        e.ScrollMagic = n.Controller, e.ScrollScene = n.Scene
    }
}(this, function(e, t, n) {
    var r = function(t) {
        var n, r, a = "ScrollMagic", u = {container: window, vertical: !0, globalSceneOptions: {}, loglevel: 2, refreshInterval: 100}, f = this, g = e.extend({}, u, t), h = [], d = !1, p = 0, v = "PAUSED", w = !0, m = 0, S = !0, E = function() {
            if (f.version = f.constructor.version, e.each(g, function(e) {
                u.hasOwnProperty(e) || delete g[e]
            }), g.container = e(g.container).first(), 0 === g.container.length)
                throw a + " init failed.";
            w = !e.contains(document, g.container.get(0)), w || g.container.on("resize", function(e) {
                e.stopPropagation()
            }), m = g.vertical ? g.container.height() : g.container.width(), g.container.on("scroll resize", b), g.refreshInterval = parseInt(g.refreshInterval), g.refreshInterval > 0 && (r = window.setInterval(R, g.refreshInterval)), n = l(T)
        }, F = function() {
            return g.vertical ? g.container.scrollTop() : g.container.scrollLeft()
        }, y = function(e) {
            g.vertical ? g.container.scrollTop(e) : g.container.scrollLeft(e)
        }, T = function() {
            if (n = l(T), S && d) {
                var t = e.isArray(d) ? d : h.slice(0), r = p;
                p = f.scrollPos();
                var i = p - r;
                v = 0 === i ? "PAUSED" : i > 0 ? "FORWARD" : "REVERSE", 0 > i && t.reverse(), e.each(t, function(e, t) {
                    t.update(!0)
                }), 0 === t.length && g.loglevel >= 3, d = !1
            }
        }, b = function(e) {
            "resize" == e.type && (m = g.vertical ? g.container.height() : g.container.width()), d = !0
        }, R = function() {
            w || m != (g.vertical ? g.container.height() : g.container.width()) && g.container.trigger("resize"), e.each(h, function(e, t) {
                t.refresh()
            })
        }, z = function(e) {
            if (e.length <= 1)
                return e;
            var t = e.slice(0);
            return t.sort(function(e, t) {
                return e.scrollOffset() > t.scrollOffset() ? 1 : -1
            }), t
        };
        return this.addScene = function(t) {
            return e.isArray(t) ? e.each(t, function(e, t) {
                f.addScene(t)
            }) : t instanceof i && (t.parent() != f ? t.addTo(f) : e.inArray(t, h) < 0 && (h.push(t), h = z(h), t.on("shift." + a + "_sort", function() {
                h = z(h)
            }), e.each(g.globalSceneOptions, function(e, n) {
                t[e] && t[e].call(t, n)
            }))), f
        }, this.removeScene = function(t) {
            if (e.isArray(t))
                e.each(t, function(e, t) {
                    f.removeScene(t)
                });
            else {
                var n = e.inArray(t, h);
                n > -1 && (t.off("shift." + a + "_sort"), h.splice(n, 1), t.remove())
            }
            return f
        }, this.updateScene = function(t, n) {
            return e.isArray(t) ? e.each(t, function(e, t) {
                f.updateScene(t, n)
            }) : n ? t.update(!0) : (e.isArray(d) || (d = []), -1 == e.inArray(t, d) && d.push(t), d = z(d)), f
        }, this.update = function(e) {
            return b({type: "resize"}), e && T(), f
        }, this.scrollTo = function(t) {
            if (t instanceof i)
                t.parent() === f ? f.scrollTo(t.scrollOffset()) : log(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", t);
            else if ("string" === e.type(t) || s(t) || t instanceof e) {
                var n = e(t).first();
                if (n[0]) {
                    var r = g.vertical ? "top" : "left", a = o(g.container), l = o(n);
                    w || (a[r] -= f.scrollPos()), f.scrollTo(l[r] - a[r])
                } else
                    log(2, "scrollTo(): The supplied element could not be found. Scroll cancelled.", t)
            } else
                e.isFunction(t) ? y = t : y.call(g.container[0], t);
            return f
        }, this.scrollPos = function(t) {
            return arguments.length ? (e.isFunction(t) && (F = t), f) : F.call(f)
        }, this.info = function(e) {
            var t = {size: m, vertical: g.vertical, scrollPos: p, scrollDirection: v, container: g.container, isDocument: w};
            return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t
        }, this.loglevel = function(e) {
            return arguments.length ? (g.loglevel != e && (g.loglevel = e), f) : g.loglevel
        }, this.enabled = function(e) {
            return arguments.length ? (S != e && (S = !!e, f.updateScene(h, !0)), f) : S
        }, this.destroy = function(e) {
            window.clearTimeout(r);
            for (var t = h.length; t--; )
                h[t].destroy(e);
            return g.container.off("scroll resize", b), c(n), null
        }, E(), f
    };
    r.version = "1.3.0";
    var i = function(t) {
        var i, s, l, c, u, f, g, h = {onCenter: .5, onEnter: 1, onLeave: 0}, d = "ScrollScene", p = {duration: 0, offset: 0, triggerElement: null, triggerHook: "onCenter", reverse: !0, tweenChanges: !1, loglevel: 2}, v = this, w = e.extend({}, p, t), m = "BEFORE", S = 0, E = {start: 0, end: 0}, F = 0, y = !0, T = {unknownOptionSupplied: function() {
                e.each(w, function(e) {
                    p.hasOwnProperty(e) || delete w[e]
                })
            }, duration: function() {
                if (e.isFunction(w.duration)) {
                    i = w.duration;
                    try {
                        w.duration = parseFloat(i())
                    } catch (t) {
                        i = void 0, w.duration = p.duration
                    }
                } else
                    w.duration = parseFloat(w.duration), (!e.isNumeric(w.duration) || w.duration < 0) && (w.duration = p.duration)
            }, offset: function() {
                w.offset = parseFloat(w.offset), e.isNumeric(w.offset) || (w.offset = p.offset)
            }, triggerElement: function() {
                null !== w.triggerElement && 0 === e(w.triggerElement).length && (w.triggerElement = p.triggerElement)
            }, triggerHook: function() {
                w.triggerHook in h || (w.triggerHook = e.isNumeric(w.triggerHook) ? Math.max(0, Math.min(parseFloat(w.triggerHook), 1)) : p.triggerHook)
            }, reverse: function() {
                w.reverse = !!w.reverse
            }, tweenChanges: function() {
                w.tweenChanges = !!w.tweenChanges
            }}, b = function() {
            R(), v.on("change.internal", function(e) {
                "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? x() : "reverse" === e.what && v.update())
            }).on("shift.internal", function(e) {
                C(), v.update(), ("AFTER" === m && "duration" === e.reason || "DURING" === m && 0 === w.duration) && O()
            }).on("progress.internal", function() {
                P(), O()
            }).on("destroy", function(e) {
                e.preventDefault()
            })
        }, R = function(t) {
            if (arguments.length)
                e.isArray(t) || (t = [t]);
            else {
                t = [];
                for (var n in T)
                    t.push(n)
            }
            e.each(t, function(e, t) {
                T[t] && T[t]()
            })
        }, z = function(e, t) {
            var n = !1, r = w[e];
            return w[e] != t && (w[e] = t, R(e), n = r != w[e]), n
        }, C = function() {
            E = {start: F + w.offset}, s && w.triggerElement && (E.start -= s.info("size") * v.triggerHook()), E.end = E.start + w.duration
        }, D = function(e) {
            if (i) {
                var t = "duration";
                z(t, i.call(v)) && !e && (v.trigger("change", {what: t, newval: w[t]}), v.trigger("shift", {reason: t}))
            }
        }, x = function(t) {
            var n = 0;
            if (s && w.triggerElement) {
                for (var r = e(w.triggerElement).first(), i = s.info(), a = o(i.container), l = i.vertical ? "top" : "left"; r.parent().data("ScrollMagicPinSpacer"); )
                    r = r.parent();
                var c = o(r);
                i.isDocument || (a[l] -= s.scrollPos()), n = c[l] - a[l]
            }
            var u = n != F;
            F = n, u && !t && v.trigger("shift", {reason: "triggerElementPosition"})
        }, P = function(e) {
            if (l) {
                var t = e >= 0 && 1 >= e ? e : S;
                if (-1 === l.repeat())
                    if ("DURING" === m && l.paused())
                        l.play();
                    else {
                        if ("DURING" === m || l.paused())
                            return!1;
                        l.pause()
                    }
                else {
                    if (t == l.progress())
                        return!1;
                    0 === w.duration ? "DURING" === m ? l.play() : l.reverse() : w.tweenChanges ? l.tweenTo(t * l.duration()) : l.progress(t).pause()
                }
                return!0
            }
            return!1
        }, O = function(e) {
            if (c && s) {
                var t = s.info();
                if (e || "DURING" !== m) {
                    var n = {position: u.inFlow ? "relative" : "absolute", top: 0, left: 0}, r = c.css("position") != n.position;
                    u.pushFollowers ? w.duration > 0 && ("AFTER" === m && 0 === parseFloat(u.spacer.css("padding-top")) ? r = !0 : "BEFORE" === m && 0 === parseFloat(u.spacer.css("padding-bottom")) && (r = !0)) : n[t.vertical ? "top" : "left"] = w.duration * S, c.css(n), r && (c.removeClass(u.pinnedClass), A())
                } else {
                    "fixed" != c.css("position") && (c.css("position", "fixed"), A(), c.addClass(u.pinnedClass));
                    var i = o(u.spacer, !0), a = w.reverse || 0 === w.duration ? t.scrollPos - E.start : Math.round(S * w.duration * 10) / 10;
                    i.top -= parseFloat(u.spacer.css("margin-top")), i[t.vertical ? "top" : "left"] += a, c.css({top: i.top, left: i.left})
                }
            }
        }, A = function() {
            if (c && s && u.inFlow) {
                var t = "AFTER" === m, n = "BEFORE" === m, r = "DURING" === m, i = "fixed" == c.css("position"), o = s.info("vertical"), l = u.spacer.children().first(), f = a(u.spacer.css("display")), g = {};
                f ? (g["margin-top"] = n || r && i ? c.css("margin-top") : "auto", g["margin-bottom"] = t || r && i ? c.css("margin-bottom") : "auto") : g["margin-top"] = g["margin-bottom"] = "auto", u.relSize.width || u.relSize.autoFullWidth ? i ? e(window).width() == u.spacer.parent().width() ? c.css("width", u.relSize.autoFullWidth ? "100%" : "inherit") : c.css("width", u.spacer.width()) : c.css("width", "100%") : (g["min-width"] = l.outerWidth(!l.is(c)), g.width = i ? g["min-width"] : "auto"), u.relSize.height ? i ? e(window).height() == u.spacer.parent().height() ? c.css("height", "inherit") : c.css("height", u.spacer.height()) : c.css("height", "100%") : (g["min-height"] = l.outerHeight(!f), g.height = i ? g["min-height"] : "auto"), u.pushFollowers && (g["padding" + (o ? "Top" : "Left")] = w.duration * S, g["padding" + (o ? "Bottom" : "Right")] = w.duration * (1 - S)), u.spacer.css(g)
            }
        }, I = function() {
            s && c && "DURING" === m && !s.info("isDocument") && O()
        }, N = function() {
            s && c && "DURING" === m && ((u.relSize.width || u.relSize.autoFullWidth) && e(window).width() != u.spacer.parent().width() || u.relSize.height && e(window).height() != u.spacer.parent().height()) && A()
        }, k = function(e) {
            s && c && "DURING" === m && !s.info("isDocument") && (e.preventDefault(), s.scrollTo(s.info("scrollPos") - (e.originalEvent.wheelDelta / 3 || 30 * -e.originalEvent.detail)))
        };
        return this.parent = function() {
            return s
        }, this.duration = function(t) {
            var n = "duration";
            return arguments.length ? (e.isFunction(t) || (i = void 0), z(n, t) && (v.trigger("change", {what: n, newval: w[n]}), v.trigger("shift", {reason: n})), v) : w[n]
        }, this.offset = function(e) {
            var t = "offset";
            return arguments.length ? (z(t, e) && (v.trigger("change", {what: t, newval: w[t]}), v.trigger("shift", {reason: t})), v) : w[t]
        }, this.triggerElement = function(e) {
            var t = "triggerElement";
            return arguments.length ? (z(t, e) && v.trigger("change", {what: t, newval: w[t]}), v) : w[t]
        }, this.triggerHook = function(t) {
            var n = "triggerHook";
            return arguments.length ? (z(n, t) && (v.trigger("change", {what: n, newval: w[n]}), v.trigger("shift", {reason: n})), v) : e.isNumeric(w[n]) ? w[n] : h[w[n]]
        }, this.reverse = function(e) {
            var t = "reverse";
            return arguments.length ? (z(t, e) && v.trigger("change", {what: t, newval: w[t]}), v) : w[t]
        }, this.tweenChanges = function(e) {
            var t = "tweenChanges";
            return arguments.length ? (z(t, e) && v.trigger("change", {what: t, newval: w[t]}), v) : w[t]
        }, this.loglevel = function(e) {
            var t = "loglevel";
            return arguments.length ? (z(t, e) && v.trigger("change", {what: t, newval: w[t]}), v) : w[t]
        }, this.state = function() {
            return m
        }, this.triggerPosition = function() {
            var e = w.offset;
            return s && (e += w.triggerElement ? F : s.info("size") * v.triggerHook()), e
        }, this.triggerOffset = function() {
            return v.triggerPosition()
        }, this.scrollOffset = function() {
            return E.start
        }, this.update = function(e) {
            if (s)
                if (e)
                    if (s.enabled() && y) {
                        var t, n = s.info("scrollPos");
                        t = w.duration > 0 ? (n - E.start) / (E.end - E.start) : n >= E.start ? 1 : 0, v.trigger("update", {startPos: E.start, endPos: E.end, scrollPos: n}), v.progress(t)
                    } else
                        c && "DURING" === m && O(!0);
                else
                    s.updateScene(v, !1);
            return v
        }, this.refresh = function() {
            return D(), x(), v
        }, this.progress = function(e) {
            if (arguments.length) {
                var t = !1, n = m, r = s ? s.info("scrollDirection") : "PAUSED", i = w.reverse || e >= S;
                if (0 === w.duration ? (t = S != e, S = 1 > e && i ? 0 : 1, m = 0 === S ? "BEFORE" : "DURING") : 0 >= e && "BEFORE" !== m && i ? (S = 0, m = "BEFORE", t = !0) : e > 0 && 1 > e && i ? (S = e, m = "DURING", t = !0) : e >= 1 && "AFTER" !== m ? (S = 1, m = "AFTER", t = !0) : "DURING" !== m || i || O(), t) {
                    var o = {progress: S, state: m, scrollDirection: r}, a = m != n, l = function(e) {
                        v.trigger(e, o)
                    };
                    a && "DURING" !== n && (l("enter"), l("BEFORE" === n ? "start" : "end")), l("progress"), a && "DURING" !== m && (l("BEFORE" === m ? "start" : "end"), l("leave"))
                }
                return v
            }
            return S
        }, this.setTween = function(e) {
            if (!n)
                return v;
            l && v.removeTween();
            try {
                l = new n({smoothChildTiming: !0}).add(e).pause()
            } catch (t) {
            } finally {
                e.repeat && -1 === e.repeat() && (l.repeat(-1), l.yoyo(e.yoyo()))
            }
            return P(), v
        }, this.removeTween = function(e) {
            return l && (e && P(0), l.kill(), l = void 0), v
        }, this.setPin = function(t, n) {
            var r = {pushFollowers: !0, spacerClass: "scrollmagic-pin-spacer", pinnedClass: ""};
            if (n = e.extend({}, r, n), t = e(t).first(), 0 === t.length)
                return v;
            if ("fixed" == t.css("position"))
                return v;
            if (c) {
                if (c === t)
                    return v;
                v.removePin()
            }
            c = t, c.parent().hide();
            var i = "absolute" != c.css("position"), o = c.css(["display", "top", "left", "bottom", "right"]), s = c.css(["width", "height"]);
            c.parent().show(), "0px" === s.width && i && a(o.display), !i && n.pushFollowers && (n.pushFollowers = !1);
            var l = e("<div></div>").addClass(n.spacerClass).css(o).data("ScrollMagicPinSpacer", !0).css({position: i ? "relative" : "absolute", "margin-left": "auto", "margin-right": "auto", "box-sizing": "content-box"}), f = c[0].style;
            return u = {spacer: l, relSize: {width: "%" === s.width.slice(-1), height: "%" === s.height.slice(-1), autoFullWidth: "0px" === s.width && i && a(o.display)}, pushFollowers: n.pushFollowers, inFlow: i, origStyle: {width: f.width || "", position: f.position || "", top: f.top || "", left: f.left || "", bottom: f.bottom || "", right: f.right || "", "box-sizing": f["box-sizing"] || "", "-moz-box-sizing": f["-moz-box-sizing"] || "", "-webkit-box-sizing": f["-webkit-box-sizing"] || ""}, pinnedClass: n.pinnedClass}, u.relSize.width && l.css("width", s.width), u.relSize.height && l.css("height", s.height), c.before(l).appendTo(l).css({position: i ? "relative" : "absolute", top: "auto", left: "auto", bottom: "auto", right: "auto"}), (u.relSize.width || u.relSize.autoFullWidth) && c.css("box-sizing", "border-box"), e(window).on("scroll." + d + "_pin resize." + d + "_pin", I), c.on("mousewheel DOMMouseScroll", k), O(), v
        }, this.removePin = function(t) {
            return c && (t || !s ? (c.insertBefore(u.spacer).css(u.origStyle), u.spacer.remove()) : "DURING" === m && O(!0), e(window).off("scroll." + d + "_pin resize." + d + "_pin"), c.off("mousewheel DOMMouseScroll", k), c = void 0), v
        }, this.setClassToggle = function(t, n) {
            var r = e(t);
            return 0 === r.length || "string" !== e.type(n) ? v : (f = n, g = r, v.on("enter.internal_class leave.internal_class", function(e) {
                g.toggleClass(f, "enter" === e.type)
            }), v)
        }, this.removeClassToggle = function(e) {
            return g && e && g.removeClass(f), v.off("start.internal_class end.internal_class"), f = void 0, g = void 0, v
        }, this.addTo = function(e) {
            return e instanceof r && s != e && (s && s.removeScene(v), s = e, R(), D(!0), x(!0), C(), A(), s.info("container").on("resize." + d, function() {
                N(), v.triggerHook() > 0 && v.trigger("shift", {reason: "containerSize"})
            }), e.addScene(v), v.update()), v
        }, this.enabled = function(e) {
            return arguments.length ? (y != e && (y = !!e, v.update(!0)), v) : y
        }, this.remove = function() {
            if (s) {
                s.info("container").off("resize." + d);
                var e = s;
                s = void 0, e.removeScene(v)
            }
            return v
        }, this.destroy = function(e) {
            return v.removeTween(e), v.removePin(e), v.removeClassToggle(e), v.trigger("destroy", {reset: e}), v.remove(), v.off("start end enter leave progress change update shift destroy shift.internal change.internal progress.internal"), null
        }, this.on = function(t, n) {
            if (e.isFunction(n)) {
                var r = e.trim(t).toLowerCase().replace(/(\w+)\.(\w+)/g, "$1." + d + "_$2").replace(/( |^)(\w+)(?= |$)/g, "$1$2." + d);
                e(v).on(r, n)
            }
            return v
        }, this.off = function(t, n) {
            var r = e.trim(t).toLowerCase().replace(/(\w+)\.(\w+)/g, "$1." + d + "_$2").replace(/( |^)(\w+)(?= |$)/g, "$1$2." + d + "$3");
            return e(v).off(r, n), v
        }, this.trigger = function(t, n) {
            var r = e.Event(e.trim(t).toLowerCase(), n);
            return e(v).trigger(r), v
        }, b(), v
    }, o = function(e, t) {
        var n = {top: 0, left: 0};
        if (e = e[0], e && e.getBoundingClientRect) {
            var r = e.getBoundingClientRect();
            n.top = r.top, n.left = r.left, t || (n.top += (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), n.left += (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0))
        }
        return n
    }, s = function(e) {
        return"object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
    }, a = function(e) {
        return["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1
    }, l = window.requestAnimationFrame, c = window.cancelAnimationFrame;
    return function(e) {
        var t, n = 0, r = ["ms", "moz", "webkit", "o"];
        for (t = 0; !l && t < r.length; ++t)
            l = e[r[t] + "RequestAnimationFrame"], c = e[r[t] + "CancelAnimationFrame"] || e[r[t] + "CancelRequestAnimationFrame"];
        l || (l = function(t) {
            var r = (new Date).getTime(), i = Math.max(0, 16 - (r - n)), o = e.setTimeout(function() {
                t(r + i)
            }, i);
            return n = r + i, o
        }), c || (c = function(t) {
            e.clearTimeout(t)
        })
    }(window), {Controller: r, Scene: i}
});

/**!
 * MixItUp v2.1.7
 *
 * @copyright Copyright 2014 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://mixitup.kunkalabs.com
 *
 * @license   Commercial use requires a commercial license.
 *            https://mixitup.kunkalabs.com/licenses/
 *
 *            Non-commercial use permitted under terms of CC-BY-NC license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */
!function(a, b) {
    a.MixItUp = function() {
        var b = this;
        b._execAction("_constructor", 0), a.extend(b, {selectors: {target: ".mix", filter: ".filter", sort: ".sort"}, animation: {enable: !0, effects: "fade scale", duration: 600, easing: "ease", perspectiveDistance: "3000", perspectiveOrigin: "50% 50%", queue: !0, queueLimit: 1, animateChangeLayout: !1, animateResizeContainer: !0, animateResizeTargets: !1, staggerSequence: !1, reverseOut: !1}, callbacks: {onMixLoad: !1, onMixStart: !1, onMixBusy: !1, onMixEnd: !1, onMixFail: !1, _user: !1}, controls: {enable: !0, live: !1, toggleFilterButtons: !1, toggleLogic: "or", activeClass: "active"}, layout: {display: "inline-block", containerClass: "", containerClassFail: "fail"}, load: {filter: "all", sort: !1}, _$body: null, _$container: null, _$targets: null, _$parent: null, _$sortButtons: null, _$filterButtons: null, _suckMode: !1, _mixing: !1, _sorting: !1, _clicking: !1, _loading: !0, _changingLayout: !1, _changingClass: !1, _changingDisplay: !1, _origOrder: [], _startOrder: [], _newOrder: [], _activeFilter: null, _toggleArray: [], _toggleString: "", _activeSort: "default:asc", _newSort: null, _startHeight: null, _newHeight: null, _incPadding: !0, _newDisplay: null, _newClass: null, _targetsBound: 0, _targetsDone: 0, _queue: [], _$show: a(), _$hide: a()}), b._execAction("_constructor", 1)
    }, a.MixItUp.prototype = {constructor: a.MixItUp, _instances: {}, _handled: {_filter: {}, _sort: {}}, _bound: {_filter: {}, _sort: {}}, _actions: {}, _filters: {}, extend: function(b) {
            for (var c in b)
                a.MixItUp.prototype[c] = b[c]
        }, addAction: function(b, c, d, e) {
            a.MixItUp.prototype._addHook("_actions", b, c, d, e)
        }, addFilter: function(b, c, d, e) {
            a.MixItUp.prototype._addHook("_filters", b, c, d, e)
        }, _addHook: function(b, c, d, e, f) {
            var g = a.MixItUp.prototype[b], h = {};
            f = 1 === f || "post" === f ? "post" : "pre", h[c] = {}, h[c][f] = {}, h[c][f][d] = e, a.extend(!0, g, h)
        }, _init: function(b, c) {
            var d = this;
            if (d._execAction("_init", 0, arguments), c && a.extend(!0, d, c), d._$body = a("body"), d._domNode = b, d._$container = a(b), d._$container.addClass(d.layout.containerClass), d._id = b.id, d._platformDetect(), d._brake = d._getPrefixedCSS("transition", "none"), d._refresh(!0), d._$parent = d._$targets.parent().length ? d._$targets.parent() : d._$container, d.load.sort && (d._newSort = d._parseSort(d.load.sort), d._newSortString = d.load.sort, d._activeSort = d.load.sort, d._sort(), d._printSort()), d._activeFilter = "all" === d.load.filter ? d.selectors.target : "none" === d.load.filter ? "" : d.load.filter, d.controls.enable && d._bindHandlers(), d.controls.toggleFilterButtons) {
                d._buildToggleArray();
                for (var e = 0; e < d._toggleArray.length; e++)
                    d._updateControls({filter: d._toggleArray[e], sort: d._activeSort}, !0)
            } else
                d.controls.enable && d._updateControls({filter: d._activeFilter, sort: d._activeSort});
            d._filter(), d._init = !0, d._$container.data("mixItUp", d), d._execAction("_init", 1, arguments), d._buildState(), d._$targets.css(d._brake), d._goMix(d.animation.enable)
        }, _platformDetect: function() {
            var a = this, c = ["Webkit", "Moz", "O", "ms"], d = ["webkit", "moz"], e = window.navigator.appVersion.match(/Chrome\/(\d+)\./) || !1, f = "undefined" != typeof InstallTrigger, g = function(a) {
                for (var b = 0; b < c.length; b++)
                    if (c[b] + "Transition"in a.style)
                        return{prefix: "-" + c[b].toLowerCase() + "-", vendor: c[b]};
                return"transition"in a.style ? "" : !1
            }, h = g(a._domNode);
            a._execAction("_platformDetect", 0), a._chrome = e ? parseInt(e[1], 10) : !1, a._ff = f ? parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1]) : !1, a._prefix = h.prefix, a._vendor = h.vendor, a._suckMode = window.atob && a._prefix ? !1 : !0, a._suckMode && (a.animation.enable = !1), a._ff && a._ff <= 4 && (a.animation.enable = !1);
            for (var i = 0; i < d.length && !window.requestAnimationFrame; i++)
                window.requestAnimationFrame = window[d[i] + "RequestAnimationFrame"];
            "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof"test".__proto__ ? function(a) {
                return a.__proto__
            } : function(a) {
                return a.constructor.prototype
            }), a._domNode.nextElementSibling === b && Object.defineProperty(Element.prototype, "nextElementSibling", {get: function() {
                    for (var a = this.nextSibling; a; ) {
                        if (1 === a.nodeType)
                            return a;
                        a = a.nextSibling
                    }
                    return null
                }}), a._execAction("_platformDetect", 1)
        }, _refresh: function(a, c) {
            var d = this;
            d._execAction("_refresh", 0, arguments), d._$targets = d._$container.find(d.selectors.target);
            for (var e = 0; e < d._$targets.length; e++) {
                var f = d._$targets[e];
                if (f.dataset === b || c) {
                    f.dataset = {};
                    for (var g = 0; g < f.attributes.length; g++) {
                        var h = f.attributes[g], i = h.name, j = h.value;
                        if (i.indexOf("data-") > -1) {
                            var k = d._helpers._camelCase(i.substring(5, i.length));
                            f.dataset[k] = j
                        }
                    }
                }
                f.mixParent === b && (f.mixParent = d._id)
            }
            if (d._$targets.length && a || !d._origOrder.length && d._$targets.length) {
                d._origOrder = [];
                for (var e = 0; e < d._$targets.length; e++) {
                    var f = d._$targets[e];
                    d._origOrder.push(f)
                }
            }
            d._execAction("_refresh", 1, arguments)
        }, _bindHandlers: function() {
            var c = this, d = a.MixItUp.prototype._bound._filter, e = a.MixItUp.prototype._bound._sort;
            c._execAction("_bindHandlers", 0), c.controls.live ? c._$body.on("click.mixItUp." + c._id, c.selectors.sort, function() {
                c._processClick(a(this), "sort")
            }).on("click.mixItUp." + c._id, c.selectors.filter, function() {
                c._processClick(a(this), "filter")
            }) : (c._$sortButtons = a(c.selectors.sort), c._$filterButtons = a(c.selectors.filter), c._$sortButtons.on("click.mixItUp." + c._id, function() {
                c._processClick(a(this), "sort")
            }), c._$filterButtons.on("click.mixItUp." + c._id, function() {
                c._processClick(a(this), "filter")
            })), d[c.selectors.filter] = d[c.selectors.filter] === b ? 1 : d[c.selectors.filter] + 1, e[c.selectors.sort] = e[c.selectors.sort] === b ? 1 : e[c.selectors.sort] + 1, c._execAction("_bindHandlers", 1)
        }, _processClick: function(c, d) {
            var e = this, f = function(c, d, f) {
                var g = a.MixItUp.prototype;
                g._handled["_" + d][e.selectors[d]] = g._handled["_" + d][e.selectors[d]] === b ? 1 : g._handled["_" + d][e.selectors[d]] + 1, g._handled["_" + d][e.selectors[d]] === g._bound["_" + d][e.selectors[d]] && (c[(f ? "remove" : "add") + "Class"](e.controls.activeClass), delete g._handled["_" + d][e.selectors[d]])
            };
            if (e._execAction("_processClick", 0, arguments), !e._mixing || e.animation.queue && e._queue.length < e.animation.queueLimit) {
                if (e._clicking = !0, "sort" === d) {
                    var g = c.attr("data-sort");
                    (!c.hasClass(e.controls.activeClass) || g.indexOf("random") > -1) && (a(e.selectors.sort).removeClass(e.controls.activeClass), f(c, d), e.sort(g))
                }
                if ("filter" === d) {
                    var h, i = c.attr("data-filter"), j = "or" === e.controls.toggleLogic ? "," : "";
                    e.controls.toggleFilterButtons ? (e._buildToggleArray(), c.hasClass(e.controls.activeClass) ? (f(c, d, !0), h = e._toggleArray.indexOf(i), e._toggleArray.splice(h, 1)) : (f(c, d), e._toggleArray.push(i)), e._toggleArray = a.grep(e._toggleArray, function(a) {
                        return a
                    }), e._toggleString = e._toggleArray.join(j), e.filter(e._toggleString)) : c.hasClass(e.controls.activeClass) || (a(e.selectors.filter).removeClass(e.controls.activeClass), f(c, d), e.filter(i))
                }
                e._execAction("_processClick", 1, arguments)
            } else
                "function" == typeof e.callbacks.onMixBusy && e.callbacks.onMixBusy.call(e._domNode, e._state, e), e._execAction("_processClickBusy", 1, arguments)
        }, _buildToggleArray: function() {
            var a = this, b = a._activeFilter.replace(/\s/g, "");
            if (a._execAction("_buildToggleArray", 0, arguments), "or" === a.controls.toggleLogic)
                a._toggleArray = b.split(",");
            else {
                a._toggleArray = b.split("."), !a._toggleArray[0] && a._toggleArray.shift();
                for (var c, d = 0; c = a._toggleArray[d]; d++)
                    a._toggleArray[d] = "." + c
            }
            a._execAction("_buildToggleArray", 1, arguments)
        }, _updateControls: function(c, d) {
            var e = this, f = {filter: c.filter, sort: c.sort}, g = function(a, b) {
                d && "filter" === h && "none" !== f.filter && "" !== f.filter ? a.filter(b).addClass(e.controls.activeClass) : a.removeClass(e.controls.activeClass).filter(b).addClass(e.controls.activeClass)
            }, h = "filter", i = null;
            e._execAction("_updateControls", 0, arguments), c.filter === b && (f.filter = e._activeFilter), c.sort === b && (f.sort = e._activeSort), f.filter === e.selectors.target && (f.filter = "all");
            for (var j = 0; 2 > j; j++)
                i = e.controls.live ? a(e.selectors[h]) : e["_$" + h + "Buttons"], i && g(i, "[data-" + h + '="' + f[h] + '"]'), h = "sort";
            e._execAction("_updateControls", 1, arguments)
        }, _filter: function() {
            var b = this;
            b._execAction("_filter", 0);
            for (var c = 0; c < b._$targets.length; c++) {
                var d = a(b._$targets[c]);
                d.is(b._activeFilter) ? b._$show = b._$show.add(d) : b._$hide = b._$hide.add(d)
            }
            b._execAction("_filter", 1)
        }, _sort: function() {
            var a = this, b = function(a) {
                for (var b = a.slice(), c = b.length, d = c; d--; ) {
                    var e = parseInt(Math.random() * c), f = b[d];
                    b[d] = b[e], b[e] = f
                }
                return b
            };
            a._execAction("_sort", 0), a._startOrder = [];
            for (var c = 0; c < a._$targets.length; c++) {
                var d = a._$targets[c];
                a._startOrder.push(d)
            }
            switch (a._newSort[0].sortBy) {
                case"default":
                    a._newOrder = a._origOrder;
                    break;
                case"random":
                    a._newOrder = b(a._startOrder);
                    break;
                case"custom":
                    a._newOrder = a._newSort[0].order;
                    break;
                default:
                    a._newOrder = a._startOrder.concat().sort(function(b, c) {
                        return a._compare(b, c)
                    })
            }
            a._execAction("_sort", 1)
        }, _compare: function(a, b, c) {
            c = c ? c : 0;
            var d = this, e = d._newSort[c].order, f = function(a) {
                return a.dataset[d._newSort[c].sortBy] || 0
            }, g = isNaN(1 * f(a)) ? f(a).toLowerCase() : 1 * f(a), h = isNaN(1 * f(b)) ? f(b).toLowerCase() : 1 * f(b);
            return h > g ? "asc" === e ? -1 : 1 : g > h ? "asc" === e ? 1 : -1 : g === h && d._newSort.length > c + 1 ? d._compare(a, b, c + 1) : 0
        }, _printSort: function(a) {
            var b = this, c = a ? b._startOrder : b._newOrder, d = b._$parent[0].querySelectorAll(b.selectors.target), e = d.length ? d[d.length - 1].nextElementSibling : null, f = document.createDocumentFragment();
            b._execAction("_printSort", 0, arguments);
            for (var g = 0; g < d.length; g++) {
                var h = d[g], i = h.nextSibling;
                "absolute" !== h.style.position && (i && "#text" === i.nodeName && b._$parent[0].removeChild(i), b._$parent[0].removeChild(h))
            }
            for (var g = 0; g < c.length; g++) {
                var j = c[g];
                if ("default" !== b._newSort[0].sortBy || "desc" !== b._newSort[0].order || a)
                    f.appendChild(j), f.appendChild(document.createTextNode(" "));
                else {
                    var k = f.firstChild;
                    f.insertBefore(j, k), f.insertBefore(document.createTextNode(" "), j)
                }
            }
            e ? b._$parent[0].insertBefore(f, e) : b._$parent[0].appendChild(f), b._execAction("_printSort", 1, arguments)
        }, _parseSort: function(a) {
            for (var b = this, c = "string" == typeof a ? a.split(" ") : [a], d = [], e = 0; e < c.length; e++) {
                var f = "string" == typeof a ? c[e].split(":") : ["custom", c[e]], g = {sortBy: b._helpers._camelCase(f[0]), order: f[1] || "asc"};
                if (d.push(g), "default" === g.sortBy || "random" === g.sortBy)
                    break
            }
            return b._execFilter("_parseSort", d, arguments)
        }, _parseEffects: function() {
            var a = this, b = {opacity: "", transformIn: "", transformOut: "", filter: ""}, c = function(b, c) {
                if (a.animation.effects.indexOf(b) > -1) {
                    if (c) {
                        var d = a.animation.effects.indexOf(b + "(");
                        if (d > -1) {
                            var e = a.animation.effects.substring(d), f = /\(([^)]+)\)/.exec(e), g = f[1];
                            return{val: g}
                        }
                    }
                    return!0
                }
                return!1
            }, d = function(a, b) {
                return b ? "-" === a.charAt(0) ? a.substr(1, a.length) : "-" + a : a
            }, e = function(a, e) {
                for (var f = [["scale", ".01"], ["translateX", "20px"], ["translateY", "20px"], ["translateZ", "20px"], ["rotateX", "90deg"], ["rotateY", "90deg"], ["rotateZ", "180deg"]], g = 0; g < f.length; g++) {
                    var h = f[g][0], i = f[g][1], j = e && "scale" !== h;
                    b[a] += c(h) ? h + "(" + d(c(h, !0).val || i, j) + ") " : ""
                }
            };
            return b.opacity = c("fade") ? c("fade", !0).val || "0" : "1", e("transformIn"), a.animation.reverseOut ? e("transformOut", !0) : b.transformOut = b.transformIn, b.transition = {}, b.transition = a._getPrefixedCSS("transition", "all " + a.animation.duration + "ms " + a.animation.easing + ", opacity " + a.animation.duration + "ms linear"), a.animation.stagger = c("stagger") ? !0 : !1, a.animation.staggerDuration = parseInt(c("stagger") ? c("stagger", !0).val ? c("stagger", !0).val : 100 : 100), a._execFilter("_parseEffects", b)
        }, _buildState: function(a) {
            var b = this, c = {};
            return b._execAction("_buildState", 0), c = {activeFilter: "" === b._activeFilter ? "none" : b._activeFilter, activeSort: a && b._newSortString ? b._newSortString : b._activeSort, fail: !b._$show.length && "" !== b._activeFilter, $targets: b._$targets, $show: b._$show, $hide: b._$hide, totalTargets: b._$targets.length, totalShow: b._$show.length, totalHide: b._$hide.length, display: a && b._newDisplay ? b._newDisplay : b.layout.display}, a ? b._execFilter("_buildState", c) : (b._state = c, b._execAction("_buildState", 1), void 0)
        }, _goMix: function(a) {
            var b = this, c = function() {
                b._chrome && 31 === b._chrome && f(b._$parent[0]), b._setInter(), d()
            }, d = function() {
                var a = window.pageYOffset, c = window.pageXOffset;
                document.documentElement.scrollHeight, b._getInterMixData(), b._setFinal(), b._getFinalMixData(), window.pageYOffset !== a && window.scrollTo(c, a), b._prepTargets(), window.requestAnimationFrame ? requestAnimationFrame(e) : setTimeout(function() {
                    e()
                }, 20)
            }, e = function() {
                b._animateTargets(), 0 === b._targetsBound && b._cleanUp()
            }, f = function(a) {
                var b = a.parentElement, c = document.createElement("div"), d = document.createDocumentFragment();
                b.insertBefore(c, a), d.appendChild(a), b.replaceChild(a, c)
            }, g = b._buildState(!0);
            b._execAction("_goMix", 0, arguments), !b.animation.duration && (a = !1), b._mixing = !0, b._$container.removeClass(b.layout.containerClassFail), "function" == typeof b.callbacks.onMixStart && b.callbacks.onMixStart.call(b._domNode, b._state, g, b), b._$container.trigger("mixStart", [b._state, g, b]), b._getOrigMixData(), a && !b._suckMode ? window.requestAnimationFrame ? requestAnimationFrame(c) : c() : b._cleanUp(), b._execAction("_goMix", 1, arguments)
        }, _getTargetData: function(a, b) {
            var c, d = this;
            a.dataset[b + "PosX"] = a.offsetLeft, a.dataset[b + "PosY"] = a.offsetTop, d.animation.animateResizeTargets && (c = window.getComputedStyle(a), a.dataset[b + "MarginBottom"] = parseInt(c.marginBottom), a.dataset[b + "MarginRight"] = parseInt(c.marginRight), a.dataset[b + "Width"] = a.offsetWidth, a.dataset[b + "Height"] = a.offsetHeight)
        }, _getOrigMixData: function() {
            var a = this, b = a._suckMode ? {boxSizing: ""} : window.getComputedStyle(a._$parent[0]), c = b.boxSizing || b[a._vendor + "BoxSizing"];
            a._incPadding = "border-box" === c, a._execAction("_getOrigMixData", 0), !a._suckMode && (a.effects = a._parseEffects()), a._$toHide = a._$hide.filter(":visible"), a._$toShow = a._$show.filter(":hidden"), a._$pre = a._$targets.filter(":visible"), a._startHeight = a._incPadding ? a._$parent.outerHeight() : a._$parent.height();
            for (var d = 0; d < a._$pre.length; d++) {
                var e = a._$pre[d];
                a._getTargetData(e, "orig")
            }
            a._execAction("_getOrigMixData", 1)
        }, _setInter: function() {
            var a = this;
            a._execAction("_setInter", 0), a._changingLayout && a.animation.animateChangeLayout ? (a._$toShow.css("display", a._newDisplay), a._changingClass && a._$container.removeClass(a.layout.containerClass).addClass(a._newClass)) : a._$toShow.css("display", a.layout.display), a._execAction("_setInter", 1)
        }, _getInterMixData: function() {
            var a = this;
            a._execAction("_getInterMixData", 0);
            for (var b = 0; b < a._$toShow.length; b++) {
                var c = a._$toShow[b];
                a._getTargetData(c, "inter")
            }
            for (var b = 0; b < a._$pre.length; b++) {
                var c = a._$pre[b];
                a._getTargetData(c, "inter")
            }
            a._execAction("_getInterMixData", 1)
        }, _setFinal: function() {
            var a = this;
            a._execAction("_setFinal", 0), a._sorting && a._printSort(), a._$toHide.removeStyle("display"), a._changingLayout && a.animation.animateChangeLayout && a._$pre.css("display", a._newDisplay), a._execAction("_setFinal", 1)
        }, _getFinalMixData: function() {
            var a = this;
            a._execAction("_getFinalMixData", 0);
            for (var b = 0; b < a._$toShow.length; b++) {
                var c = a._$toShow[b];
                a._getTargetData(c, "final")
            }
            for (var b = 0; b < a._$pre.length; b++) {
                var c = a._$pre[b];
                a._getTargetData(c, "final")
            }
            a._newHeight = a._incPadding ? a._$parent.outerHeight() : a._$parent.height(), a._sorting && a._printSort(!0), a._$toShow.removeStyle("display"), a._$pre.css("display", a.layout.display), a._changingClass && a.animation.animateChangeLayout && a._$container.removeClass(a._newClass).addClass(a.layout.containerClass), a._execAction("_getFinalMixData", 1)
        }, _prepTargets: function() {
            var b = this, c = {_in: b._getPrefixedCSS("transform", b.effects.transformIn), _out: b._getPrefixedCSS("transform", b.effects.transformOut)};
            b._execAction("_prepTargets", 0), b.animation.animateResizeContainer && b._$parent.css("height", b._startHeight + "px");
            for (var d = 0; d < b._$toShow.length; d++) {
                var e = b._$toShow[d], f = a(e);
                e.style.opacity = b.effects.opacity, e.style.display = b._changingLayout && b.animation.animateChangeLayout ? b._newDisplay : b.layout.display, f.css(c._in), b.animation.animateResizeTargets && (e.style.width = e.dataset.finalWidth + "px", e.style.height = e.dataset.finalHeight + "px", e.style.marginRight = -(e.dataset.finalWidth - e.dataset.interWidth) + 1 * e.dataset.finalMarginRight + "px", e.style.marginBottom = -(e.dataset.finalHeight - e.dataset.interHeight) + 1 * e.dataset.finalMarginBottom + "px")
            }
            for (var d = 0; d < b._$pre.length; d++) {
                var e = b._$pre[d], f = a(e), g = {x: e.dataset.origPosX - e.dataset.interPosX, y: e.dataset.origPosY - e.dataset.interPosY}, c = b._getPrefixedCSS("transform", "translate(" + g.x + "px," + g.y + "px)");
                f.css(c), b.animation.animateResizeTargets && (e.style.width = e.dataset.origWidth + "px", e.style.height = e.dataset.origHeight + "px", e.dataset.origWidth - e.dataset.finalWidth && (e.style.marginRight = -(e.dataset.origWidth - e.dataset.interWidth) + 1 * e.dataset.origMarginRight + "px"), e.dataset.origHeight - e.dataset.finalHeight && (e.style.marginBottom = -(e.dataset.origHeight - e.dataset.interHeight) + 1 * e.dataset.origMarginBottom + "px"))
            }
            b._execAction("_prepTargets", 1)
        }, _animateTargets: function() {
            var b = this;
            b._execAction("_animateTargets", 0), b._targetsDone = 0, b._targetsBound = 0, b._$parent.css(b._getPrefixedCSS("perspective", b.animation.perspectiveDistance + "px")).css(b._getPrefixedCSS("perspective-origin", b.animation.perspectiveOrigin)), b.animation.animateResizeContainer && b._$parent.css(b._getPrefixedCSS("transition", "height " + b.animation.duration + "ms ease")).css("height", b._newHeight + "px");
            for (var c = 0; c < b._$toShow.length; c++) {
                var d = b._$toShow[c], e = a(d), f = {x: d.dataset.finalPosX - d.dataset.interPosX, y: d.dataset.finalPosY - d.dataset.interPosY}, g = b._getDelay(c), h = {};
                d.style.opacity = "";
                for (var i = 0; 2 > i; i++) {
                    var j = 0 === i ? j = b._prefix : "";
                    b._ff && b._ff <= 20 && (h[j + "transition-property"] = "all", h[j + "transition-timing-function"] = b.animation.easing + "ms", h[j + "transition-duration"] = b.animation.duration + "ms"), h[j + "transition-delay"] = g + "ms", h[j + "transform"] = "translate(" + f.x + "px," + f.y + "px)"
                }
                (b.effects.transform || b.effects.opacity) && b._bindTargetDone(e), b._ff && b._ff <= 20 ? e.css(h) : e.css(b.effects.transition).css(h)
            }
            for (var c = 0; c < b._$pre.length; c++) {
                var d = b._$pre[c], e = a(d), f = {x: d.dataset.finalPosX - d.dataset.interPosX, y: d.dataset.finalPosY - d.dataset.interPosY}, g = b._getDelay(c);
                (d.dataset.finalPosX !== d.dataset.origPosX || d.dataset.finalPosY !== d.dataset.origPosY) && b._bindTargetDone(e), e.css(b._getPrefixedCSS("transition", "all " + b.animation.duration + "ms " + b.animation.easing + " " + g + "ms")), e.css(b._getPrefixedCSS("transform", "translate(" + f.x + "px," + f.y + "px)")), b.animation.animateResizeTargets && (d.dataset.origWidth - d.dataset.finalWidth && 1 * d.dataset.finalWidth && (d.style.width = d.dataset.finalWidth + "px", d.style.marginRight = -(d.dataset.finalWidth - d.dataset.interWidth) + 1 * d.dataset.finalMarginRight + "px"), d.dataset.origHeight - d.dataset.finalHeight && 1 * d.dataset.finalHeight && (d.style.height = d.dataset.finalHeight + "px", d.style.marginBottom = -(d.dataset.finalHeight - d.dataset.interHeight) + 1 * d.dataset.finalMarginBottom + "px"))
            }
            b._changingClass && b._$container.removeClass(b.layout.containerClass).addClass(b._newClass);
            for (var c = 0; c < b._$toHide.length; c++) {
                for (var d = b._$toHide[c], e = a(d), g = b._getDelay(c), k = {}, i = 0; 2 > i; i++) {
                    var j = 0 === i ? j = b._prefix : "";
                    k[j + "transition-delay"] = g + "ms", k[j + "transform"] = b.effects.transformOut, k.opacity = b.effects.opacity
                }
                e.css(b.effects.transition).css(k), (b.effects.transform || b.effects.opacity) && b._bindTargetDone(e)
            }
            b._execAction("_animateTargets", 1)
        }, _bindTargetDone: function(b) {
            var c = this, d = b[0];
            c._execAction("_bindTargetDone", 0, arguments), d.dataset.bound || (d.dataset.bound = !0, c._targetsBound++, b.on("webkitTransitionEnd.mixItUp transitionend.mixItUp", function(e) {
                (e.originalEvent.propertyName.indexOf("transform") > -1 || e.originalEvent.propertyName.indexOf("opacity") > -1) && a(e.originalEvent.target).is(c.selectors.target) && (b.off(".mixItUp"), delete d.dataset.bound, c._targetDone())
            })), c._execAction("_bindTargetDone", 1, arguments)
        }, _targetDone: function() {
            var a = this;
            a._execAction("_targetDone", 0), a._targetsDone++, a._targetsDone === a._targetsBound && a._cleanUp(), a._execAction("_targetDone", 1)
        }, _cleanUp: function() {
            var b = this, c = b.animation.animateResizeTargets ? "transform opacity width height margin-bottom margin-right" : "transform opacity";
            unBrake = function() {
                b._$targets.removeStyle("transition", b._prefix)
            }, b._execAction("_cleanUp", 0), b._changingLayout ? b._$show.css("display", b._newDisplay) : b._$show.css("display", b.layout.display), b._$targets.css(b._brake), b._$targets.removeStyle(c, b._prefix).removeAttr("data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom"), b._$hide.removeStyle("display"), b._$parent.removeStyle("height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin", b._prefix), b._sorting && (b._printSort(), b._activeSort = b._newSortString, b._sorting = !1), b._changingLayout && (b._changingDisplay && (b.layout.display = b._newDisplay, b._changingDisplay = !1), b._changingClass && (b._$parent.removeClass(b.layout.containerClass).addClass(b._newClass), b.layout.containerClass = b._newClass, b._changingClass = !1), b._changingLayout = !1), b._refresh(), b._buildState(), b._state.fail && b._$container.addClass(b.layout.containerClassFail), b._$show = a(), b._$hide = a(), window.requestAnimationFrame && requestAnimationFrame(unBrake), b._mixing = !1, "function" == typeof b.callbacks._user && b.callbacks._user.call(b._domNode, b._state, b), "function" == typeof b.callbacks.onMixEnd && b.callbacks.onMixEnd.call(b._domNode, b._state, b), b._$container.trigger("mixEnd", [b._state, b]), b._state.fail && ("function" == typeof b.callbacks.onMixFail && b.callbacks.onMixFail.call(b._domNode, b._state, b), b._$container.trigger("mixFail", [b._state, b])), b._loading && ("function" == typeof b.callbacks.onMixLoad && b.callbacks.onMixLoad.call(b._domNode, b._state, b), b._$container.trigger("mixLoad", [b._state, b])), b._queue.length && (b._execAction("_queue", 0), b.multiMix(b._queue[0][0], b._queue[0][1], b._queue[0][2]), b._queue.splice(0, 1)), b._execAction("_cleanUp", 1), b._loading = !1
        }, _getPrefixedCSS: function(a, b, c) {
            var d = this, e = {};
            for (i = 0; 2 > i; i++) {
                var f = 0 === i ? d._prefix : "";
                e[f + a] = c ? f + b : b
            }
            return d._execFilter("_getPrefixedCSS", e, arguments)
        }, _getDelay: function(a) {
            var b = this, c = "function" == typeof b.animation.staggerSequence ? b.animation.staggerSequence.call(b._domNode, a, b._state) : a, d = b.animation.stagger ? c * b.animation.staggerDuration : 0;
            return b._execFilter("_getDelay", d, arguments)
        }, _parseMultiMixArgs: function(a) {
            for (var b = this, c = {command: null, animate: b.animation.enable, callback: null}, d = 0; d < a.length; d++) {
                var e = a[d];
                null !== e && ("object" == typeof e || "string" == typeof e ? c.command = e : "boolean" == typeof e ? c.animate = e : "function" == typeof e && (c.callback = e))
            }
            return b._execFilter("_parseMultiMixArgs", c, arguments)
        }, _parseInsertArgs: function(b) {
            for (var c = this, d = {index: 0, $object: a(), multiMix: {filter: c._state.activeFilter}, callback: null}, e = 0; e < b.length; e++) {
                var f = b[e];
                "number" == typeof f ? d.index = f : "object" == typeof f && f instanceof a ? d.$object = f : "object" == typeof f && c._helpers._isElement(f) ? d.$object = a(f) : "object" == typeof f && null !== f ? d.multiMix = f : "boolean" != typeof f || f ? "function" == typeof f && (d.callback = f) : d.multiMix = !1
            }
            return c._execFilter("_parseInsertArgs", d, arguments)
        }, _execAction: function(a, b, c) {
            var d = this, e = b ? "post" : "pre";
            if (!d._actions.isEmptyObject && d._actions.hasOwnProperty(a))
                for (var f in d._actions[a][e])
                    d._actions[a][e][f].call(d, c)
        }, _execFilter: function(a, b, c) {
            var d = this;
            if (d._filters.isEmptyObject || !d._filters.hasOwnProperty(a))
                return b;
            for (var e in d._filters[a])
                return d._filters[a][e].call(d, c)
        }, _helpers: {_camelCase: function(a) {
                return a.replace(/-([a-z])/g, function(a) {
                    return a[1].toUpperCase()
                })
            }, _isElement: function(a) {
                return window.HTMLElement ? a instanceof HTMLElement : null !== a && 1 === a.nodeType && "string" === a.nodeName
            }}, isMixing: function() {
            var a = this;
            return a._execFilter("isMixing", a._mixing)
        }, filter: function() {
            var a = this, b = a._parseMultiMixArgs(arguments);
            a._clicking && (a._toggleString = ""), a.multiMix({filter: b.command}, b.animate, b.callback)
        }, sort: function() {
            var a = this, b = a._parseMultiMixArgs(arguments);
            a.multiMix({sort: b.command}, b.animate, b.callback)
        }, changeLayout: function() {
            var a = this, b = a._parseMultiMixArgs(arguments);
            a.multiMix({changeLayout: b.command}, b.animate, b.callback)
        }, multiMix: function() {
            var a = this, c = a._parseMultiMixArgs(arguments);
            if (a._execAction("multiMix", 0, arguments), a._mixing)
                a.animation.queue && a._queue.length < a.animation.queueLimit ? (a._queue.push(arguments), a.controls.enable && !a._clicking && a._updateControls(c.command), a._execAction("multiMixQueue", 1, arguments)) : ("function" == typeof a.callbacks.onMixBusy && a.callbacks.onMixBusy.call(a._domNode, a._state, a), a._$container.trigger("mixBusy", [a._state, a]), a._execAction("multiMixBusy", 1, arguments));
            else {
                a.controls.enable && !a._clicking && (a.controls.toggleFilterButtons && a._buildToggleArray(), a._updateControls(c.command, a.controls.toggleFilterButtons)), a._queue.length < 2 && (a._clicking = !1), delete a.callbacks._user, c.callback && (a.callbacks._user = c.callback);
                var d = c.command.sort, e = c.command.filter, f = c.command.changeLayout;
                a._refresh(), d && (a._newSort = a._parseSort(d), a._newSortString = d, a._sorting = !0, a._sort()), e !== b && (e = "all" === e ? a.selectors.target : e, a._activeFilter = e), a._filter(), f && (a._newDisplay = "string" == typeof f ? f : f.display || a.layout.display, a._newClass = f.containerClass || "", (a._newDisplay !== a.layout.display || a._newClass !== a.layout.containerClass) && (a._changingLayout = !0, a._changingClass = a._newClass !== a.layout.containerClass, a._changingDisplay = a._newDisplay !== a.layout.display)), a._$targets.css(a._brake), a._goMix(c.animate ^ a.animation.enable ? c.animate : a.animation.enable), a._execAction("multiMix", 1, arguments)
            }
        }, insert: function() {
            var a = this, b = a._parseInsertArgs(arguments), c = "function" == typeof b.callback ? b.callback : null, d = document.createDocumentFragment(), e = function() {
                return a._refresh(), a._$targets.length ? b.index < a._$targets.length || !a._$targets.length ? a._$targets[b.index] : a._$targets[a._$targets.length - 1].nextElementSibling : a._$parent[0].children[0]
            }();
            if (a._execAction("insert", 0, arguments), b.$object) {
                for (var f = 0; f < b.$object.length; f++) {
                    var g = b.$object[f];
                    d.appendChild(g), d.appendChild(document.createTextNode(" "))
                }
                a._$parent[0].insertBefore(d, e)
            }
            a._execAction("insert", 1, arguments), "object" == typeof b.multiMix && a.multiMix(b.multiMix, c)
        }, prepend: function() {
            var a = this, b = a._parseInsertArgs(arguments);
            a.insert(0, b.$object, b.multiMix, b.callback)
        }, append: function() {
            var a = this, b = a._parseInsertArgs(arguments);
            a.insert(a._state.totalTargets, b.$object, b.multiMix, b.callback)
        }, getOption: function(a) {
            var c = this, d = function(a, c) {
                for (var d = c.split("."), e = d.pop(), f = d.length, g = 1, h = d[0] || c; (a = a[h]) && f > g; )
                    h = d[g], g++;
                return a !== b ? a[e] !== b ? a[e] : a : void 0
            };
            return a ? c._execFilter("getOption", d(c, a), arguments) : c
        }, setOptions: function(b) {
            var c = this;
            c._execAction("setOptions", 0, arguments), "object" == typeof b && a.extend(!0, c, b), c._execAction("setOptions", 1, arguments)
        }, getState: function() {
            var a = this;
            return a._execFilter("getState", a._state, a)
        }, forceRefresh: function() {
            var a = this;
            a._refresh(!1, !0)
        }, destroy: function(b) {
            var c = this;
            c._execAction("destroy", 0, arguments), c._$body.add(a(c.selectors.sort)).add(a(c.selectors.filter)).off(".mixItUp");
            for (var d = 0; d < c._$targets.length; d++) {
                var e = c._$targets[d];
                b && (e.style.display = ""), delete e.mixParent
            }
            c._execAction("destroy", 1, arguments), delete a.MixItUp.prototype._instances[c._id]
        }}, a.fn.mixItUp = function() {
        var c, d = arguments, e = [], f = function(b, c) {
            var d = new a.MixItUp, e = function() {
                return("00000" + (16777216 * Math.random() << 0).toString(16)).substr(-6).toUpperCase()
            };
            d._execAction("_instantiate", 0, arguments), b.id = b.id ? b.id : "MixItUp" + e(), d._instances[b.id] || (d._instances[b.id] = d, d._init(b, c)), d._execAction("_instantiate", 1, arguments)
        };
        return c = this.each(function() {
            if (d && "string" == typeof d[0]) {
                var c = a.MixItUp.prototype._instances[this.id];
                if ("isLoaded" === d[0])
                    e.push(c ? !0 : !1);
                else {
                    var g = c[d[0]](d[1], d[2], d[3]);
                    g !== b && e.push(g)
                }
            } else
                f(this, d[0])
        }), e.length ? e.length > 1 ? e : e[0] : c
    }, a.fn.removeStyle = function(c, d) {
        return d = d ? d : "", this.each(function() {
            for (var e = this, f = c.split(" "), g = 0; g < f.length; g++)
                for (var h = 0; 4 > h; h++) {
                    switch (h) {
                        case 0:
                            var i = f[g];
                            break;
                        case 1:
                            var i = a.MixItUp.prototype._helpers._camelCase(i);
                            break;
                        case 2:
                            var i = d + f[g];
                            break;
                        case 3:
                            var i = a.MixItUp.prototype._helpers._camelCase(d + f[g])
                    }
                    if (e.style[i] !== b && "unknown" != typeof e.style[i] && e.style[i].length > 0 && (e.style[i] = ""), !d && 1 === h)
                        break
                }
            e.attributes && e.attributes.style && e.attributes.style !== b && "" === e.attributes.style.value && e.attributes.removeNamedItem("style")
        })
    }
}(jQuery);

/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!function(a) {
    a.flexslider = function(b, c) {
        var d = a(b);
        d.vars = a.extend({}, a.flexslider.defaults, c);
        var j, e = d.vars.namespace, f = window.navigator && window.navigator.msPointerEnabled && window.MSGesture, g = ("ontouchstart"in window || f || window.DocumentTouch && document instanceof DocumentTouch) && d.vars.touch, h = "click touchend MSPointerUp", i = "", k = "vertical" === d.vars.direction, l = d.vars.reverse, m = d.vars.itemWidth > 0, n = "fade" === d.vars.animation, o = "" !== d.vars.asNavFor, p = {}, q = !0;
        a.data(b, "flexslider", d), p = {init: function() {
                d.animating = !1, d.currentSlide = parseInt(d.vars.startAt ? d.vars.startAt : 0, 10), isNaN(d.currentSlide) && (d.currentSlide = 0), d.animatingTo = d.currentSlide, d.atEnd = 0 === d.currentSlide || d.currentSlide === d.last, d.containerSelector = d.vars.selector.substr(0, d.vars.selector.search(" ")), d.slides = a(d.vars.selector, d), d.container = a(d.containerSelector, d), d.count = d.slides.length, d.syncExists = a(d.vars.sync).length > 0, "slide" === d.vars.animation && (d.vars.animation = "swing"), d.prop = k ? "top" : "marginLeft", d.args = {}, d.manualPause = !1, d.stopped = !1, d.started = !1, d.startTimeout = null, d.transitions = !d.vars.video && !n && d.vars.useCSS && function() {
                    var a = document.createElement("div"), b = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var c in b)
                        if (void 0 !== a.style[b[c]])
                            return d.pfx = b[c].replace("Perspective", "").toLowerCase(), d.prop = "-" + d.pfx + "-transform", !0;
                    return!1
                }(), d.ensureAnimationEnd = "", "" !== d.vars.controlsContainer && (d.controlsContainer = a(d.vars.controlsContainer).length > 0 && a(d.vars.controlsContainer)), "" !== d.vars.manualControls && (d.manualControls = a(d.vars.manualControls).length > 0 && a(d.vars.manualControls)), d.vars.randomize && (d.slides.sort(function() {
                    return Math.round(Math.random()) - .5
                }), d.container.empty().append(d.slides)), d.doMath(), d.setup("init"), d.vars.controlNav && p.controlNav.setup(), d.vars.directionNav && p.directionNav.setup(), d.vars.keyboard && (1 === a(d.containerSelector).length || d.vars.multipleKeyboard) && a(document).bind("keyup", function(a) {
                    var b = a.keyCode;
                    if (!d.animating && (39 === b || 37 === b)) {
                        var c = 39 === b ? d.getTarget("next") : 37 === b ? d.getTarget("prev") : !1;
                        d.flexAnimate(c, d.vars.pauseOnAction)
                    }
                }), d.vars.mousewheel && d.bind("mousewheel", function(a, b) {
                    a.preventDefault();
                    var f = 0 > b ? d.getTarget("next") : d.getTarget("prev");
                    d.flexAnimate(f, d.vars.pauseOnAction)
                }), d.vars.pausePlay && p.pausePlay.setup(), d.vars.slideshow && d.vars.pauseInvisible && p.pauseInvisible.init(), d.vars.slideshow && (d.vars.pauseOnHover && d.hover(function() {
                    d.manualPlay || d.manualPause || d.pause()
                }, function() {
                    d.manualPause || d.manualPlay || d.stopped || d.play()
                }), d.vars.pauseInvisible && p.pauseInvisible.isHidden() || (d.vars.initDelay > 0 ? d.startTimeout = setTimeout(d.play, d.vars.initDelay) : d.play())), o && p.asNav.setup(), g && d.vars.touch && p.touch(), (!n || n && d.vars.smoothHeight) && a(window).bind("resize orientationchange focus", p.resize), d.find("img").attr("draggable", "false"), setTimeout(function() {
                    d.vars.start(d)
                }, 200)
            }, asNav: {setup: function() {
                    d.asNav = !0, d.animatingTo = Math.floor(d.currentSlide / d.move), d.currentItem = d.currentSlide, d.slides.removeClass(e + "active-slide").eq(d.currentItem).addClass(e + "active-slide"), f ? (b._slider = d, d.slides.each(function() {
                        var b = this;
                        b._gesture = new MSGesture, b._gesture.target = b, b.addEventListener("MSPointerDown", function(a) {
                            a.preventDefault(), a.currentTarget._gesture && a.currentTarget._gesture.addPointer(a.pointerId)
                        }, !1), b.addEventListener("MSGestureTap", function(b) {
                            b.preventDefault();
                            var c = a(this), e = c.index();
                            a(d.vars.asNavFor).data("flexslider").animating || c.hasClass("active") || (d.direction = d.currentItem < e ? "next" : "prev", d.flexAnimate(e, d.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : d.slides.on(h, function(b) {
                        b.preventDefault();
                        var c = a(this), f = c.index(), g = c.offset().left - a(d).scrollLeft();
                        0 >= g && c.hasClass(e + "active-slide") ? d.flexAnimate(d.getTarget("prev"), !0) : a(d.vars.asNavFor).data("flexslider").animating || c.hasClass(e + "active-slide") || (d.direction = d.currentItem < f ? "next" : "prev", d.flexAnimate(f, d.vars.pauseOnAction, !1, !0, !0))
                    })
                }}, controlNav: {setup: function() {
                    d.manualControls ? p.controlNav.setupManual() : p.controlNav.setupPaging()
                }, setupPaging: function() {
                    var f, g, b = "thumbnails" === d.vars.controlNav ? "control-thumbs" : "control-paging", c = 1;
                    if (d.controlNavScaffold = a('<ol class="' + e + "control-nav " + e + b + '"></ol>'), d.pagingCount > 1)
                        for (var j = 0; j < d.pagingCount; j++) {
                            if (g = d.slides.eq(j), f = "thumbnails" === d.vars.controlNav ? '<img src="' + g.attr("data-thumb") + '"/>' : "<a>" + c + "</a>", "thumbnails" === d.vars.controlNav && !0 === d.vars.thumbCaptions) {
                                var k = g.attr("data-thumbcaption");
                                "" != k && void 0 != k && (f += '<span class="' + e + 'caption">' + k + "</span>")
                            }
                            d.controlNavScaffold.append("<li>" + f + "</li>"), c++
                        }
                    d.controlsContainer ? a(d.controlsContainer).append(d.controlNavScaffold) : d.append(d.controlNavScaffold), p.controlNav.set(), p.controlNav.active(), d.controlNavScaffold.delegate("a, img", h, function(b) {
                        if (b.preventDefault(), "" === i || i === b.type) {
                            var c = a(this), f = d.controlNav.index(c);
                            c.hasClass(e + "active") || (d.direction = f > d.currentSlide ? "next" : "prev", d.flexAnimate(f, d.vars.pauseOnAction))
                        }
                        "" === i && (i = b.type), p.setToClearWatchedEvent()
                    })
                }, setupManual: function() {
                    d.controlNav = d.manualControls, p.controlNav.active(), d.controlNav.bind(h, function(b) {
                        if (b.preventDefault(), "" === i || i === b.type) {
                            var c = a(this), f = d.controlNav.index(c);
                            c.hasClass(e + "active") || (d.direction = f > d.currentSlide ? "next" : "prev", d.flexAnimate(f, d.vars.pauseOnAction))
                        }
                        "" === i && (i = b.type), p.setToClearWatchedEvent()
                    })
                }, set: function() {
                    var b = "thumbnails" === d.vars.controlNav ? "img" : "a";
                    d.controlNav = a("." + e + "control-nav li " + b, d.controlsContainer ? d.controlsContainer : d)
                }, active: function() {
                    d.controlNav.removeClass(e + "active").eq(d.animatingTo).addClass(e + "active")
                }, update: function(b, c) {
                    d.pagingCount > 1 && "add" === b ? d.controlNavScaffold.append(a("<li><a>" + d.count + "</a></li>")) : 1 === d.pagingCount ? d.controlNavScaffold.find("li").remove() : d.controlNav.eq(c).closest("li").remove(), p.controlNav.set(), d.pagingCount > 1 && d.pagingCount !== d.controlNav.length ? d.update(c, b) : p.controlNav.active()
                }}, directionNav: {setup: function() {
                    var b = a('<ul class="' + e + 'direction-nav"><li><a class="' + e + 'prev" href="#">' + d.vars.prevText + '</a></li><li><a class="' + e + 'next" href="#">' + d.vars.nextText + "</a></li></ul>");
                    d.controlsContainer ? (a(d.controlsContainer).append(b), d.directionNav = a("." + e + "direction-nav li a", d.controlsContainer)) : (d.append(b), d.directionNav = a("." + e + "direction-nav li a", d)), p.directionNav.update(), d.directionNav.bind(h, function(b) {
                        b.preventDefault();
                        var c;
                        ("" === i || i === b.type) && (c = a(this).hasClass(e + "next") ? d.getTarget("next") : d.getTarget("prev"), d.flexAnimate(c, d.vars.pauseOnAction)), "" === i && (i = b.type), p.setToClearWatchedEvent()
                    })
                }, update: function() {
                    var a = e + "disabled";
                    1 === d.pagingCount ? d.directionNav.addClass(a).attr("tabindex", "-1") : d.vars.animationLoop ? d.directionNav.removeClass(a).removeAttr("tabindex") : 0 === d.animatingTo ? d.directionNav.removeClass(a).filter("." + e + "prev").addClass(a).attr("tabindex", "-1") : d.animatingTo === d.last ? d.directionNav.removeClass(a).filter("." + e + "next").addClass(a).attr("tabindex", "-1") : d.directionNav.removeClass(a).removeAttr("tabindex")
                }}, pausePlay: {setup: function() {
                    var b = a('<div class="' + e + 'pauseplay"><a></a></div>');
                    d.controlsContainer ? (d.controlsContainer.append(b), d.pausePlay = a("." + e + "pauseplay a", d.controlsContainer)) : (d.append(b), d.pausePlay = a("." + e + "pauseplay a", d)), p.pausePlay.update(d.vars.slideshow ? e + "pause" : e + "play"), d.pausePlay.bind(h, function(b) {
                        b.preventDefault(), ("" === i || i === b.type) && (a(this).hasClass(e + "pause") ? (d.manualPause = !0, d.manualPlay = !1, d.pause()) : (d.manualPause = !1, d.manualPlay = !0, d.play())), "" === i && (i = b.type), p.setToClearWatchedEvent()
                    })
                }, update: function(a) {
                    "play" === a ? d.pausePlay.removeClass(e + "pause").addClass(e + "play").html(d.vars.playText) : d.pausePlay.removeClass(e + "play").addClass(e + "pause").html(d.vars.pauseText)
                }}, touch: function() {
                function r(f) {
                    d.animating ? f.preventDefault() : (window.navigator.msPointerEnabled || 1 === f.touches.length) && (d.pause(), g = k ? d.h : d.w, i = Number(new Date), o = f.touches[0].pageX, p = f.touches[0].pageY, e = m && l && d.animatingTo === d.last ? 0 : m && l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : m && d.currentSlide === d.last ? d.limit : m ? (d.itemW + d.vars.itemMargin) * d.move * d.currentSlide : l ? (d.last - d.currentSlide + d.cloneOffset) * g : (d.currentSlide + d.cloneOffset) * g, a = k ? p : o, c = k ? o : p, b.addEventListener("touchmove", s, !1), b.addEventListener("touchend", t, !1))
                }
                function s(b) {
                    o = b.touches[0].pageX, p = b.touches[0].pageY, h = k ? a - p : a - o, j = k ? Math.abs(h) < Math.abs(o - c) : Math.abs(h) < Math.abs(p - c);
                    var f = 500;
                    (!j || Number(new Date) - i > f) && (b.preventDefault(), !n && d.transitions && (d.vars.animationLoop || (h /= 0 === d.currentSlide && 0 > h || d.currentSlide === d.last && h > 0 ? Math.abs(h) / g + 2 : 1), d.setProps(e + h, "setTouch")))
                }
                function t() {
                    if (b.removeEventListener("touchmove", s, !1), d.animatingTo === d.currentSlide && !j && null !== h) {
                        var k = l ? -h : h, m = k > 0 ? d.getTarget("next") : d.getTarget("prev");
                        d.canAdvance(m) && (Number(new Date) - i < 550 && Math.abs(k) > 50 || Math.abs(k) > g / 2) ? d.flexAnimate(m, d.vars.pauseOnAction) : n || d.flexAnimate(d.currentSlide, d.vars.pauseOnAction, !0)
                    }
                    b.removeEventListener("touchend", t, !1), a = null, c = null, h = null, e = null
                }
                function u(a) {
                    a.stopPropagation(), d.animating ? a.preventDefault() : (d.pause(), b._gesture.addPointer(a.pointerId), q = 0, g = k ? d.h : d.w, i = Number(new Date), e = m && l && d.animatingTo === d.last ? 0 : m && l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : m && d.currentSlide === d.last ? d.limit : m ? (d.itemW + d.vars.itemMargin) * d.move * d.currentSlide : l ? (d.last - d.currentSlide + d.cloneOffset) * g : (d.currentSlide + d.cloneOffset) * g)
                }
                function v(a) {
                    a.stopPropagation();
                    var c = a.target._slider;
                    if (c) {
                        var d = -a.translationX, f = -a.translationY;
                        return q += k ? f : d, h = q, j = k ? Math.abs(q) < Math.abs(-d) : Math.abs(q) < Math.abs(-f), a.detail === a.MSGESTURE_FLAG_INERTIA ? (setImmediate(function() {
                            b._gesture.stop()
                        }), void 0) : ((!j || Number(new Date) - i > 500) && (a.preventDefault(), !n && c.transitions && (c.vars.animationLoop || (h = q / (0 === c.currentSlide && 0 > q || c.currentSlide === c.last && q > 0 ? Math.abs(q) / g + 2 : 1)), c.setProps(e + h, "setTouch"))), void 0)
                    }
                }
                function w(b) {
                    b.stopPropagation();
                    var d = b.target._slider;
                    if (d) {
                        if (d.animatingTo === d.currentSlide && !j && null !== h) {
                            var f = l ? -h : h, k = f > 0 ? d.getTarget("next") : d.getTarget("prev");
                            d.canAdvance(k) && (Number(new Date) - i < 550 && Math.abs(f) > 50 || Math.abs(f) > g / 2) ? d.flexAnimate(k, d.vars.pauseOnAction) : n || d.flexAnimate(d.currentSlide, d.vars.pauseOnAction, !0)
                        }
                        a = null, c = null, h = null, e = null, q = 0
                    }
                }
                var a, c, e, g, h, i, j = !1, o = 0, p = 0, q = 0;
                f ? (b.style.msTouchAction = "none", b._gesture = new MSGesture, b._gesture.target = b, b.addEventListener("MSPointerDown", u, !1), b._slider = d, b.addEventListener("MSGestureChange", v, !1), b.addEventListener("MSGestureEnd", w, !1)) : b.addEventListener("touchstart", r, !1)
            }, resize: function() {
                !d.animating && d.is(":visible") && (m || d.doMath(), n ? p.smoothHeight() : m ? (d.slides.width(d.computedW), d.update(d.pagingCount), d.setProps()) : k ? (d.viewport.height(d.h), d.setProps(d.h, "setTotal")) : (d.vars.smoothHeight && p.smoothHeight(), d.newSlides.width(d.computedW), d.setProps(d.computedW, "setTotal")))
            }, smoothHeight: function(a) {
                if (!k || n) {
                    var b = n ? d : d.viewport;
                    a ? b.animate({height: d.slides.eq(d.animatingTo).height()}, a) : b.height(d.slides.eq(d.animatingTo).height())
                }
            }, sync: function(b) {
                var c = a(d.vars.sync).data("flexslider"), e = d.animatingTo;
                switch (b) {
                    case"animate":
                        c.flexAnimate(e, d.vars.pauseOnAction, !1, !0);
                        break;
                    case"play":
                        c.playing || c.asNav || c.play();
                        break;
                    case"pause":
                        c.pause()
                }
            }, uniqueID: function(b) {
                return b.find("[id]").each(function() {
                    var b = a(this);
                    b.attr("id", b.attr("id") + "_clone")
                }), b
            }, pauseInvisible: {visProp: null, init: function() {
                    var a = ["webkit", "moz", "ms", "o"];
                    if ("hidden"in document)
                        return"hidden";
                    for (var b = 0; b < a.length; b++)
                        a[b] + "Hidden"in document && (p.pauseInvisible.visProp = a[b] + "Hidden");
                    if (p.pauseInvisible.visProp) {
                        var c = p.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(c, function() {
                            p.pauseInvisible.isHidden() ? d.startTimeout ? clearTimeout(d.startTimeout) : d.pause() : d.started ? d.play() : d.vars.initDelay > 0 ? setTimeout(d.play, d.vars.initDelay) : d.play()
                        })
                    }
                }, isHidden: function() {
                    return document[p.pauseInvisible.visProp] || !1
                }}, setToClearWatchedEvent: function() {
                clearTimeout(j), j = setTimeout(function() {
                    i = ""
                }, 3e3)
            }}, d.flexAnimate = function(b, c, f, h, i) {
            if (d.vars.animationLoop || b === d.currentSlide || (d.direction = b > d.currentSlide ? "next" : "prev"), o && 1 === d.pagingCount && (d.direction = d.currentItem < b ? "next" : "prev"), !d.animating && (d.canAdvance(b, i) || f) && d.is(":visible")) {
                if (o && h) {
                    var j = a(d.vars.asNavFor).data("flexslider");
                    if (d.atEnd = 0 === b || b === d.count - 1, j.flexAnimate(b, !0, !1, !0, i), d.direction = d.currentItem < b ? "next" : "prev", j.direction = d.direction, Math.ceil((b + 1) / d.visible) - 1 === d.currentSlide || 0 === b)
                        return d.currentItem = b, d.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"), !1;
                    d.currentItem = b, d.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"), b = Math.floor(b / d.visible)
                }
                if (d.animating = !0, d.animatingTo = b, c && d.pause(), d.vars.before(d), d.syncExists && !i && p.sync("animate"), d.vars.controlNav && p.controlNav.active(), m || d.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"), d.atEnd = 0 === b || b === d.last, d.vars.directionNav && p.directionNav.update(), b === d.last && (d.vars.end(d), d.vars.animationLoop || d.pause()), n)
                    g ? (d.slides.eq(d.currentSlide).css({opacity: 0, zIndex: 1}), d.slides.eq(b).css({opacity: 1, zIndex: 2}), d.wrapup(q)) : (d.slides.eq(d.currentSlide).css({zIndex: 1}).animate({opacity: 0}, d.vars.animationSpeed, d.vars.easing), d.slides.eq(b).css({zIndex: 2}).animate({opacity: 1}, d.vars.animationSpeed, d.vars.easing, d.wrapup));
                else {
                    var r, s, t, q = k ? d.slides.filter(":first").height() : d.computedW;
                    m ? (r = d.vars.itemMargin, t = (d.itemW + r) * d.move * d.animatingTo, s = t > d.limit && 1 !== d.visible ? d.limit : t) : s = 0 === d.currentSlide && b === d.count - 1 && d.vars.animationLoop && "next" !== d.direction ? l ? (d.count + d.cloneOffset) * q : 0 : d.currentSlide === d.last && 0 === b && d.vars.animationLoop && "prev" !== d.direction ? l ? 0 : (d.count + 1) * q : l ? (d.count - 1 - b + d.cloneOffset) * q : (b + d.cloneOffset) * q, d.setProps(s, "", d.vars.animationSpeed), d.transitions ? (d.vars.animationLoop && d.atEnd || (d.animating = !1, d.currentSlide = d.animatingTo), d.container.unbind("webkitTransitionEnd transitionend"), d.container.bind("webkitTransitionEnd transitionend", function() {
                        clearTimeout(d.ensureAnimationEnd), d.wrapup(q)
                    }), clearTimeout(d.ensureAnimationEnd), d.ensureAnimationEnd = setTimeout(function() {
                        d.wrapup(q)
                    }, d.vars.animationSpeed + 100)) : d.container.animate(d.args, d.vars.animationSpeed, d.vars.easing, function() {
                        d.wrapup(q)
                    })
                }
                d.vars.smoothHeight && p.smoothHeight(d.vars.animationSpeed)
            }
        }, d.wrapup = function(a) {
            n || m || (0 === d.currentSlide && d.animatingTo === d.last && d.vars.animationLoop ? d.setProps(a, "jumpEnd") : d.currentSlide === d.last && 0 === d.animatingTo && d.vars.animationLoop && d.setProps(a, "jumpStart")), d.animating = !1, d.currentSlide = d.animatingTo, d.vars.after(d)
        }, d.animateSlides = function() {
            !d.animating && q && d.flexAnimate(d.getTarget("next"))
        }, d.pause = function() {
            clearInterval(d.animatedSlides), d.animatedSlides = null, d.playing = !1, d.vars.pausePlay && p.pausePlay.update("play"), d.syncExists && p.sync("pause")
        }, d.play = function() {
            d.playing && clearInterval(d.animatedSlides), d.animatedSlides = d.animatedSlides || setInterval(d.animateSlides, d.vars.slideshowSpeed), d.started = d.playing = !0, d.vars.pausePlay && p.pausePlay.update("pause"), d.syncExists && p.sync("play")
        }, d.stop = function() {
            d.pause(), d.stopped = !0
        }, d.canAdvance = function(a, b) {
            var c = o ? d.pagingCount - 1 : d.last;
            return b ? !0 : o && d.currentItem === d.count - 1 && 0 === a && "prev" === d.direction ? !0 : o && 0 === d.currentItem && a === d.pagingCount - 1 && "next" !== d.direction ? !1 : a !== d.currentSlide || o ? d.vars.animationLoop ? !0 : d.atEnd && 0 === d.currentSlide && a === c && "next" !== d.direction ? !1 : d.atEnd && d.currentSlide === c && 0 === a && "next" === d.direction ? !1 : !0 : !1
        }, d.getTarget = function(a) {
            return d.direction = a, "next" === a ? d.currentSlide === d.last ? 0 : d.currentSlide + 1 : 0 === d.currentSlide ? d.last : d.currentSlide - 1
        }, d.setProps = function(a, b, c) {
            var e = function() {
                var c = a ? a : (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo, e = function() {
                    if (m)
                        return"setTouch" === b ? a : l && d.animatingTo === d.last ? 0 : l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : d.animatingTo === d.last ? d.limit : c;
                    switch (b) {
                        case"setTotal":
                            return l ? (d.count - 1 - d.currentSlide + d.cloneOffset) * a : (d.currentSlide + d.cloneOffset) * a;
                        case"setTouch":
                            return l ? a : a;
                        case"jumpEnd":
                            return l ? a : d.count * a;
                        case"jumpStart":
                            return l ? d.count * a : a;
                        default:
                            return a
                    }
                }();
                return-1 * e + "px"
            }();
            d.transitions && (e = k ? "translate3d(0," + e + ",0)" : "translate3d(" + e + ",0,0)", c = void 0 !== c ? c / 1e3 + "s" : "0s", d.container.css("-" + d.pfx + "-transition-duration", c), d.container.css("transition-duration", c)), d.args[d.prop] = e, (d.transitions || void 0 === c) && d.container.css(d.args), d.container.css("transform", e)
        }, d.setup = function(b) {
            if (n)
                d.slides.css({width: "100%", "float": "left", marginRight: "-100%", position: "relative"}), "init" === b && (g ? d.slides.css({opacity: 0, display: "block", webkitTransition: "opacity " + d.vars.animationSpeed / 1e3 + "s ease", zIndex: 1}).eq(d.currentSlide).css({opacity: 1, zIndex: 2}) : d.slides.css({opacity: 0, display: "block", zIndex: 1}).eq(d.currentSlide).css({zIndex: 2}).animate({opacity: 1}, d.vars.animationSpeed, d.vars.easing)), d.vars.smoothHeight && p.smoothHeight();
            else {
                var c, f;
                "init" === b && (d.viewport = a('<div class="' + e + 'viewport"></div>').css({overflow: "hidden", position: "relative"}).appendTo(d).append(d.container), d.cloneCount = 0, d.cloneOffset = 0, l && (f = a.makeArray(d.slides).reverse(), d.slides = a(f), d.container.empty().append(d.slides))), d.vars.animationLoop && !m && (d.cloneCount = 2, d.cloneOffset = 1, "init" !== b && d.container.find(".clone").remove(), p.uniqueID(d.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).appendTo(d.container), p.uniqueID(d.slides.last().clone().addClass("clone").attr("aria-hidden", "true")).prependTo(d.container)), d.newSlides = a(d.vars.selector, d), c = l ? d.count - 1 - d.currentSlide + d.cloneOffset : d.currentSlide + d.cloneOffset, k && !m ? (d.container.height(200 * (d.count + d.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                    d.newSlides.css({display: "block"}), d.doMath(), d.viewport.height(d.h), d.setProps(c * d.h, "init")
                }, "init" === b ? 100 : 0)) : (d.container.width(200 * (d.count + d.cloneCount) + "%"), d.setProps(c * d.computedW, "init"), setTimeout(function() {
                    d.doMath(), d.newSlides.css({width: d.computedW, "float": "left", display: "block"}), d.vars.smoothHeight && p.smoothHeight()
                }, "init" === b ? 100 : 0))
            }
            m || d.slides.removeClass(e + "active-slide").eq(d.currentSlide).addClass(e + "active-slide"), d.vars.init(d)
        }, d.doMath = function() {
            var a = d.slides.first(), b = d.vars.itemMargin, c = d.vars.minItems, e = d.vars.maxItems;
            d.w = void 0 === d.viewport ? d.width() : d.viewport.width(), d.h = a.height(), d.boxPadding = a.outerWidth() - a.width(), m ? (d.itemT = d.vars.itemWidth + b, d.minW = c ? c * d.itemT : d.w, d.maxW = e ? e * d.itemT - b : d.w, d.itemW = d.minW > d.w ? (d.w - b * (c - 1)) / c : d.maxW < d.w ? (d.w - b * (e - 1)) / e : d.vars.itemWidth > d.w ? d.w : d.vars.itemWidth, d.visible = Math.floor(d.w / d.itemW), d.move = d.vars.move > 0 && d.vars.move < d.visible ? d.vars.move : d.visible, d.pagingCount = Math.ceil((d.count - d.visible) / d.move + 1), d.last = d.pagingCount - 1, d.limit = 1 === d.pagingCount ? 0 : d.vars.itemWidth > d.w ? d.itemW * (d.count - 1) + b * (d.count - 1) : (d.itemW + b) * d.count - d.w - b) : (d.itemW = d.w, d.pagingCount = d.count, d.last = d.count - 1), d.computedW = d.itemW - d.boxPadding
        }, d.update = function(a, b) {
            d.doMath(), m || (a < d.currentSlide ? d.currentSlide += 1 : a <= d.currentSlide && 0 !== a && (d.currentSlide -= 1), d.animatingTo = d.currentSlide), d.vars.controlNav && !d.manualControls && ("add" === b && !m || d.pagingCount > d.controlNav.length ? p.controlNav.update("add") : ("remove" === b && !m || d.pagingCount < d.controlNav.length) && (m && d.currentSlide > d.last && (d.currentSlide -= 1, d.animatingTo -= 1), p.controlNav.update("remove", d.last))), d.vars.directionNav && p.directionNav.update()
        }, d.addSlide = function(b, c) {
            var e = a(b);
            d.count += 1, d.last = d.count - 1, k && l ? void 0 !== c ? d.slides.eq(d.count - c).after(e) : d.container.prepend(e) : void 0 !== c ? d.slides.eq(c).before(e) : d.container.append(e), d.update(c, "add"), d.slides = a(d.vars.selector + ":not(.clone)", d), d.setup(), d.vars.added(d)
        }, d.removeSlide = function(b) {
            var c = isNaN(b) ? d.slides.index(a(b)) : b;
            d.count -= 1, d.last = d.count - 1, isNaN(b) ? a(b, d.slides).remove() : k && l ? d.slides.eq(d.last).remove() : d.slides.eq(b).remove(), d.doMath(), d.update(c, "remove"), d.slides = a(d.vars.selector + ":not(.clone)", d), d.setup(), d.vars.removed(d)
        }, p.init()
    }, a(window).blur(function() {
        focused = !1
    }).focus(function() {
        focused = !0
    }), a.flexslider.defaults = {namespace: "flex-", selector: ".slides > li", animation: "fade", easing: "swing", direction: "horizontal", reverse: !1, animationLoop: !0, smoothHeight: !1, startAt: 0, slideshow: !0, slideshowSpeed: 7e3, animationSpeed: 600, initDelay: 0, randomize: !1, thumbCaptions: !1, pauseOnAction: !0, pauseOnHover: !1, pauseInvisible: !0, useCSS: !0, touch: !0, video: !1, controlNav: !0, directionNav: !0, prevText: "Previous", nextText: "Next", keyboard: !0, multipleKeyboard: !1, mousewheel: !1, pausePlay: !1, pauseText: "Pause", playText: "Play", controlsContainer: "", manualControls: "", sync: "", asNavFor: "", itemWidth: 0, itemMargin: 0, minItems: 1, maxItems: 0, move: 0, allowOneSlide: !0, start: function() {
        }, before: function() {
        }, after: function() {
        }, end: function() {
        }, added: function() {
        }, removed: function() {
        }, init: function() {
        }}, a.fn.flexslider = function(b) {
        if (void 0 === b && (b = {}), "object" == typeof b)
            return this.each(function() {
                var c = a(this), d = b.selector ? b.selector : ".slides > li", e = c.find(d);
                1 === e.length && b.allowOneSlide === !0 || 0 === e.length ? (e.fadeIn(400), b.start && b.start(c)) : void 0 === c.data("flexslider") && new a.flexslider(this, b)
            });
        var c = a(this).data("flexslider");
        switch (b) {
            case"play":
                c.play();
                break;
            case"pause":
                c.pause();
                break;
            case"stop":
                c.stop();
                break;
            case"next":
                c.flexAnimate(c.getTarget("next"), !0);
                break;
            case"prev":
            case"previous":
                c.flexAnimate(c.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof b && c.flexAnimate(b, !0)
        }
    }
}(jQuery);


// Generated by CoffeeScript 1.6.2
/*
 jQuery Waypoints - v2.0.2
 Copyright (c) 2011-2013 Caleb Troughton
 Dual licensed under the MIT license and GPL license.
 https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
 */
(function() {
    var t = [].indexOf || function(t) {
        for (var e = 0, n = this.length; e < n; e++) {
            if (e in this && this[e] === t)
                return e
        }
        return-1
    }, e = [].slice;
    (function(t, e) {
        if (typeof define === "function" && define.amd) {
            return define("waypoints", ["jquery"], function(n) {
                return e(n, t)
            })
        } else {
            return e(t.jQuery, t)
        }
    })(this, function(n, r) {
        var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
        i = n(r);
        c = t.call(r, "ontouchstart") >= 0;
        s = {horizontal: {}, vertical: {}};
        f = 1;
        a = {};
        u = "waypoints-context-id";
        p = "resize.waypoints";
        y = "scroll.waypoints";
        v = 1;
        w = "waypoints-waypoint-ids";
        g = "waypoint";
        m = "waypoints";
        o = function() {
            function t(t) {
                var e = this;
                this.$element = t;
                this.element = t[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + f++;
                this.oldScroll = {x: t.scrollLeft(), y: t.scrollTop()};
                this.waypoints = {horizontal: {}, vertical: {}};
                t.data(u, this.id);
                a[this.id] = this;
                t.bind(y, function() {
                    var t;
                    if (!(e.didScroll || c)) {
                        e.didScroll = true;
                        t = function() {
                            e.doScroll();
                            return e.didScroll = false
                        };
                        return r.setTimeout(t, n[m].settings.scrollThrottle)
                    }
                });
                t.bind(p, function() {
                    var t;
                    if (!e.didResize) {
                        e.didResize = true;
                        t = function() {
                            n[m]("refresh");
                            return e.didResize = false
                        };
                        return r.setTimeout(t, n[m].settings.resizeThrottle)
                    }
                })
            }
            t.prototype.doScroll = function() {
                var t, e = this;
                t = {horizontal: {newScroll: this.$element.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left"}, vertical: {newScroll: this.$element.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up"}};
                if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
                    n[m]("refresh")
                }
                n.each(t, function(t, r) {
                    var i, o, l;
                    l = [];
                    o = r.newScroll > r.oldScroll;
                    i = o ? r.forward : r.backward;
                    n.each(e.waypoints[t], function(t, e) {
                        var n, i;
                        if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
                            return l.push(e)
                        } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
                            return l.push(e)
                        }
                    });
                    l.sort(function(t, e) {
                        return t.offset - e.offset
                    });
                    if (!o) {
                        l.reverse()
                    }
                    return n.each(l, function(t, e) {
                        if (e.options.continuous || t === l.length - 1) {
                            return e.trigger([i])
                        }
                    })
                });
                return this.oldScroll = {x: t.horizontal.newScroll, y: t.vertical.newScroll}
            };
            t.prototype.refresh = function() {
                var t, e, r, i = this;
                r = n.isWindow(this.element);
                e = this.$element.offset();
                this.doScroll();
                t = {horizontal: {contextOffset: r ? 0 : e.left, contextScroll: r ? 0 : this.oldScroll.x, contextDimension: this.$element.width(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left"}, vertical: {contextOffset: r ? 0 : e.top, contextScroll: r ? 0 : this.oldScroll.y, contextDimension: r ? n[m]("viewportHeight") : this.$element.height(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top"}};
                return n.each(t, function(t, e) {
                    return n.each(i.waypoints[t], function(t, r) {
                        var i, o, l, s, f;
                        i = r.options.offset;
                        l = r.offset;
                        o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
                        if (n.isFunction(i)) {
                            i = i.apply(r.element)
                        } else if (typeof i === "string") {
                            i = parseFloat(i);
                            if (r.options.offset.indexOf("%") > -1) {
                                i = Math.ceil(e.contextDimension * i / 100)
                            }
                        }
                        r.offset = o - e.contextOffset + e.contextScroll - i;
                        if (r.options.onlyOnScroll && l != null || !r.enabled) {
                            return
                        }
                        if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
                            return r.trigger([e.backward])
                        } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
                            return r.trigger([e.forward])
                        } else if (l === null && e.oldScroll >= r.offset) {
                            return r.trigger([e.forward])
                        }
                    })
                })
            };
            t.prototype.checkEmpty = function() {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
                    this.$element.unbind([p, y].join(" "));
                    return delete a[this.id]
                }
            };
            return t
        }();
        l = function() {
            function t(t, e, r) {
                var i, o;
                r = n.extend({}, n.fn[g].defaults, r);
                if (r.offset === "bottom-in-view") {
                    r.offset = function() {
                        var t;
                        t = n[m]("viewportHeight");
                        if (!n.isWindow(e.element)) {
                            t = e.$element.height()
                        }
                        return t - n(this).outerHeight()
                    }
                }
                this.$element = t;
                this.element = t[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = e;
                this.enabled = r.enabled;
                this.id = "waypoints" + v++;
                this.offset = null;
                this.options = r;
                e.waypoints[this.axis][this.id] = this;
                s[this.axis][this.id] = this;
                i = (o = t.data(w)) != null ? o : [];
                i.push(this.id);
                t.data(w, i)
            }
            t.prototype.trigger = function(t) {
                if (!this.enabled) {
                    return
                }
                if (this.callback != null) {
                    this.callback.apply(this.element, t)
                }
                if (this.options.triggerOnce) {
                    return this.destroy()
                }
            };
            t.prototype.disable = function() {
                return this.enabled = false
            };
            t.prototype.enable = function() {
                this.context.refresh();
                return this.enabled = true
            };
            t.prototype.destroy = function() {
                delete s[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty()
            };
            t.getWaypointsByElement = function(t) {
                var e, r;
                r = n(t).data(w);
                if (!r) {
                    return[]
                }
                e = n.extend({}, s.horizontal, s.vertical);
                return n.map(r, function(t) {
                    return e[t]
                })
            };
            return t
        }();
        d = {init: function(t, e) {
                var r;
                if (e == null) {
                    e = {}
                }
                if ((r = e.handler) == null) {
                    e.handler = t
                }
                this.each(function() {
                    var t, r, i, s;
                    t = n(this);
                    i = (s = e.context) != null ? s : n.fn[g].defaults.context;
                    if (!n.isWindow(i)) {
                        i = t.closest(i)
                    }
                    i = n(i);
                    r = a[i.data(u)];
                    if (!r) {
                        r = new o(i)
                    }
                    return new l(t, r, e)
                });
                n[m]("refresh");
                return this
            }, disable: function() {
                return d._invoke(this, "disable")
            }, enable: function() {
                return d._invoke(this, "enable")
            }, destroy: function() {
                return d._invoke(this, "destroy")
            }, prev: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    if (e > 0) {
                        return t.push(n[e - 1])
                    }
                })
            }, next: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    if (e < n.length - 1) {
                        return t.push(n[e + 1])
                    }
                })
            }, _traverse: function(t, e, i) {
                var o, l;
                if (t == null) {
                    t = "vertical"
                }
                if (e == null) {
                    e = r
                }
                l = h.aggregate(e);
                o = [];
                this.each(function() {
                    var e;
                    e = n.inArray(this, l[t]);
                    return i(o, e, l[t])
                });
                return this.pushStack(o)
            }, _invoke: function(t, e) {
                t.each(function() {
                    var t;
                    t = l.getWaypointsByElement(this);
                    return n.each(t, function(t, n) {
                        n[e]();
                        return true
                    })
                });
                return this
            }};
        n.fn[g] = function() {
            var t, r;
            r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (d[r]) {
                return d[r].apply(this, t)
            } else if (n.isFunction(r)) {
                return d.init.apply(this, arguments)
            } else if (n.isPlainObject(r)) {
                return d.init.apply(this, [null, r])
            } else if (!r) {
                return n.error("jQuery Waypoints needs a callback function or handler option.")
            } else {
                return n.error("The " + r + " method does not exist in jQuery Waypoints.")
            }
        };
        n.fn[g].defaults = {context: r, continuous: true, enabled: true, horizontal: false, offset: 0, triggerOnce: false};
        h = {refresh: function() {
                return n.each(a, function(t, e) {
                    return e.refresh()
                })
            }, viewportHeight: function() {
                var t;
                return(t = r.innerHeight) != null ? t : i.height()
            }, aggregate: function(t) {
                var e, r, i;
                e = s;
                if (t) {
                    e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0
                }
                if (!e) {
                    return[]
                }
                r = {horizontal: [], vertical: []};
                n.each(r, function(t, i) {
                    n.each(e[t], function(t, e) {
                        return i.push(e)
                    });
                    i.sort(function(t, e) {
                        return t.offset - e.offset
                    });
                    r[t] = n.map(i, function(t) {
                        return t.element
                    });
                    return r[t] = n.unique(r[t])
                });
                return r
            }, above: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function(t, e) {
                    return e.offset <= t.oldScroll.y
                })
            }, below: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function(t, e) {
                    return e.offset > t.oldScroll.y
                })
            }, left: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function(t, e) {
                    return e.offset <= t.oldScroll.x
                })
            }, right: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function(t, e) {
                    return e.offset > t.oldScroll.x
                })
            }, enable: function() {
                return h._invoke("enable")
            }, disable: function() {
                return h._invoke("disable")
            }, destroy: function() {
                return h._invoke("destroy")
            }, extendFn: function(t, e) {
                return d[t] = e
            }, _invoke: function(t) {
                var e;
                e = n.extend({}, s.vertical, s.horizontal);
                return n.each(e, function(e, n) {
                    n[t]();
                    return true
                })
            }, _filter: function(t, e, r) {
                var i, o;
                i = a[n(t).data(u)];
                if (!i) {
                    return[]
                }
                o = [];
                n.each(i.waypoints[e], function(t, e) {
                    if (r(i, e)) {
                        return o.push(e)
                    }
                });
                o.sort(function(t, e) {
                    return t.offset - e.offset
                });
                return n.map(o, function(t) {
                    return t.element
                })
            }};
        n[m] = function() {
            var t, n;
            n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (h[n]) {
                return h[n].apply(null, t)
            } else {
                return h.aggregate.call(null, n)
            }
        };
        n[m].settings = {resizeThrottle: 100, scrollThrottle: 30};
        return i.load(function() {
            return n[m]("refresh")
        })
    })
}).call(this);

/*!
 * Masonry PACKAGED v3.3.2
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c("object"==typeof exports?require("jquery"):a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(window),function(){function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:e.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a){function b(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function c(){}function d(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=g.length;c>b;b++){var d=g[b];a[d]=0}return a}function e(c){function e(){if(!m){m=!0;var d=a.getComputedStyle;if(j=function(){var a=d?function(a){return d(a,null)}:function(a){return a.currentStyle};return function(b){var c=a(b);return c||f("Style returned "+c+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),c}}(),k=c("boxSizing")){var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style[k]="border-box";var g=document.body||document.documentElement;g.appendChild(e);var h=j(e);l=200===b(h.width),g.removeChild(e)}}}function h(a){if(e(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var c=j(a);if("none"===c.display)return d();var f={};f.width=a.offsetWidth,f.height=a.offsetHeight;for(var h=f.isBorderBox=!(!k||!c[k]||"border-box"!==c[k]),m=0,n=g.length;n>m;m++){var o=g[m],p=c[o];p=i(a,p);var q=parseFloat(p);f[o]=isNaN(q)?0:q}var r=f.paddingLeft+f.paddingRight,s=f.paddingTop+f.paddingBottom,t=f.marginLeft+f.marginRight,u=f.marginTop+f.marginBottom,v=f.borderLeftWidth+f.borderRightWidth,w=f.borderTopWidth+f.borderBottomWidth,x=h&&l,y=b(c.width);y!==!1&&(f.width=y+(x?0:r+v));var z=b(c.height);return z!==!1&&(f.height=z+(x?0:s+w)),f.innerWidth=f.width-(r+v),f.innerHeight=f.height-(s+w),f.outerWidth=f.width+t,f.outerHeight=f.height+u,f}}function i(b,c){if(a.getComputedStyle||-1===c.indexOf("%"))return c;var d=b.style,e=d.left,f=b.runtimeStyle,g=f&&f.left;return g&&(f.left=b.currentStyle.left),d.left=c,c=d.pixelLeft,d.left=e,g&&(f.left=g),c}var j,k,l,m=!1;return h}var f="undefined"==typeof console?c:function(a){console.error(a)},g=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],e):"object"==typeof exports?module.exports=e(require("desandro-get-style-property")):a.getSize=e(a.getStyleProperty)}(window),function(a){function b(a){"function"==typeof a&&(b.isReady?a():g.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==f.readyState;b.isReady||c||d()}function d(){b.isReady=!0;for(var a=0,c=g.length;c>a;a++){var d=g[a];d()}}function e(e){return"complete"===f.readyState?d():(e.bind(f,"DOMContentLoaded",c),e.bind(f,"readystatechange",c),e.bind(a,"load",c)),b}var f=a.document,g=[];b.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],e):"object"==typeof exports?module.exports=e(require("eventie")):a.docReady=e(a.eventie)}(window),function(a){function b(a,b){return a[g](b)}function c(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function d(a,b){c(a);for(var d=a.parentNode.querySelectorAll(b),e=0,f=d.length;f>e;e++)if(d[e]===a)return!0;return!1}function e(a,d){return c(a),b(a,d)}var f,g=function(){if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(var b=["webkit","moz","ms","o"],c=0,d=b.length;d>c;c++){var e=b[c],f=e+"MatchesSelector";if(a[f])return f}}();if(g){var h=document.createElement("div"),i=b(h,"div");f=i?b:e}else f=d;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return f}):"object"==typeof exports?module.exports=f:window.matchesSelector=f}(Element.prototype),function(a,b){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("doc-ready"),require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.docReady,a.matchesSelector)}(window,function(a,b,c){var d={};d.extend=function(a,b){for(var c in b)a[c]=b[c];return a},d.modulo=function(a,b){return(a%b+b)%b};var e=Object.prototype.toString;d.isArray=function(a){return"[object Array]"==e.call(a)},d.makeArray=function(a){var b=[];if(d.isArray(a))b=a;else if(a&&"number"==typeof a.length)for(var c=0,e=a.length;e>c;c++)b.push(a[c]);else b.push(a);return b},d.indexOf=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},d.removeFrom=function(a,b){var c=d.indexOf(a,b);-1!=c&&a.splice(c,1)},d.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1==a.nodeType&&"string"==typeof a.nodeName},d.setText=function(){function a(a,c){b=b||(void 0!==document.documentElement.textContent?"textContent":"innerText"),a[b]=c}var b;return a}(),d.getParent=function(a,b){for(;a!=document.body;)if(a=a.parentNode,c(a,b))return a},d.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},d.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},d.filterFindElements=function(a,b){a=d.makeArray(a);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f];if(d.isElement(h))if(b){c(h,b)&&e.push(h);for(var i=h.querySelectorAll(b),j=0,k=i.length;k>j;j++)e.push(i[j])}else e.push(h)}return e},d.debounceMethod=function(a,b,c){var d=a.prototype[b],e=b+"Timeout";a.prototype[b]=function(){var a=this[e];a&&clearTimeout(a);var b=arguments,f=this;this[e]=setTimeout(function(){d.apply(f,b),delete f[e]},c||100)}},d.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()};var f=a.console;return d.htmlInit=function(c,e){b(function(){for(var b=d.toDashed(e),g=document.querySelectorAll(".js-"+b),h="data-"+b+"-options",i=0,j=g.length;j>i;i++){var k,l=g[i],m=l.getAttribute(h);try{k=m&&JSON.parse(m)}catch(n){f&&f.error("Error parsing "+h+" on "+l.nodeName.toLowerCase()+(l.id?"#"+l.id:"")+": "+n);continue}var o=new c(l,k),p=a.jQuery;p&&p.data(l,e,o)}})},d}),function(a,b){"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(c,d,e,f){return b(a,c,d,e,f)}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(a.Outlayer={},a.Outlayer.Item=b(a,a.EventEmitter,a.getSize,a.getStyleProperty,a.fizzyUIUtils))}(window,function(a,b,c,d,e){function f(a){for(var b in a)return!1;return b=null,!0}function g(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}function h(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}var i=a.getComputedStyle,j=i?function(a){return i(a,null)}:function(a){return a.currentStyle},k=d("transition"),l=d("transform"),m=k&&l,n=!!d("perspective"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[k],p=["transform","transition","transitionDuration","transitionProperty"],q=function(){for(var a={},b=0,c=p.length;c>b;b++){var e=p[b],f=d(e);f&&f!==e&&(a[e]=f)}return a}();e.extend(g.prototype,b.prototype),g.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.getSize=function(){this.size=c(this.element)},g.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=q[c]||c;b[d]=a[c]}},g.prototype.getPosition=function(){var a=j(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=a[c?"left":"right"],f=a[d?"top":"bottom"],g=this.layout.size,h=-1!=e.indexOf("%")?parseFloat(e)/100*g.width:parseInt(e,10),i=-1!=f.indexOf("%")?parseFloat(f)/100*g.height:parseInt(f,10);h=isNaN(h)?0:h,i=isNaN(i)?0:i,h-=c?g.paddingLeft:g.paddingRight,i-=d?g.paddingTop:g.paddingBottom,this.position.x=h,this.position.y=i},g.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={},d=b.isOriginLeft?"paddingLeft":"paddingRight",e=b.isOriginLeft?"left":"right",f=b.isOriginLeft?"right":"left",g=this.position.x+a[d];c[e]=this.getXValue(g),c[f]="";var h=b.isOriginTop?"paddingTop":"paddingBottom",i=b.isOriginTop?"top":"bottom",j=b.isOriginTop?"bottom":"top",k=this.position.y+a[h];c[i]=this.getYValue(k),c[j]="",this.css(c),this.emitEvent("layout",[this])},g.prototype.getXValue=function(a){var b=this.layout.options;return b.percentPosition&&!b.isHorizontal?a/this.layout.size.width*100+"%":a+"px"},g.prototype.getYValue=function(a){var b=this.layout.options;return b.percentPosition&&b.isHorizontal?a/this.layout.size.height*100+"%":a+"px"},g.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={};j.transform=this.getTranslate(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},g.prototype.getTranslate=function(a,b){var c=this.layout.options;return a=c.isOriginLeft?a:-a,b=c.isOriginTop?b:-b,n?"translate3d("+a+"px, "+b+"px, 0)":"translate("+a+"px, "+b+"px)"},g.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},g.prototype.moveTo=m?g.prototype._transitionTo:g.prototype.goTo,g.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},g.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},g.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var r="opacity,"+h(q.transform||"transform");g.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:r,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(o,this,!1))},g.prototype.transition=g.prototype[k?"_transition":"_nonTransition"],g.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},g.prototype.onotransitionend=function(a){this.ontransitionend(a)};var s={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};g.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,c=s[a.propertyName]||a.propertyName;if(delete b.ingProperties[c],f(b.ingProperties)&&this.disableTransition(),c in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[c]),c in b.onEnd){var d=b.onEnd[c];d.call(this),delete b.onEnd[c]}this.emitEvent("transitionEnd",[this])}},g.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(o,this,!1),this.isTransitioning=!1},g.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var t={transitionProperty:"",transitionDuration:""};return g.prototype.removeTransitionStyles=function(){this.css(t)},g.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},g.prototype.remove=function(){if(!k||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.once("transitionEnd",function(){a.removeElem()}),this.hide()},g.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("visibleStyle");b[c]=this.onRevealTransitionEnd,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},g.prototype.getHideRevealTransitionEndProperty=function(a){var b=this.layout.options[a];if(b.opacity)return"opacity";for(var c in b)return c},g.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("hiddenStyle");b[c]=this.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},g.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},g}),function(a,b){"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,d,e,f,g){return b(a,c,d,e,f,g)}):"object"==typeof exports?module.exports=b(a,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.eventie,a.EventEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)}(window,function(a,b,c,d,e,f){function g(a,b){var c=e.getQueryElement(a);if(!c)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(c||a)));this.element=c,i&&(this.$element=i(this.element)),this.options=e.extend({},this.constructor.defaults),this.option(b);var d=++k;this.element.outlayerGUID=d,l[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var h=a.console,i=a.jQuery,j=function(){},k=0,l={};return g.namespace="outlayer",g.Item=f,g.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e.extend(g.prototype,c.prototype),g.prototype.option=function(a){e.extend(this.options,a)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},g.prototype._filterFindItemElements=function(a){return e.filterFindElements(a,this.options.itemSelector)},g.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},g.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=d(this.element)},g.prototype._getMeasurement=function(a,b){var c,f=this.options[a];f?("string"==typeof f?c=this.element.querySelector(f):e.isElement(f)&&(c=f),this[a]=c?d(c)[b]:f):this[a]=0},g.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},g.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},g.prototype._layoutItems=function(a,b){if(this._emitCompleteOnItems("layout",a),a&&a.length){for(var c=[],d=0,e=a.length;e>d;d++){var f=a[d],g=this._getItemLayoutPosition(f);g.item=f,g.isInstant=b||f.isLayoutInstant,c.push(g)}this._processLayoutQueue(c)}},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},g.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},g.prototype._postLayout=function(){this.resizeContainer()},g.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},g.prototype._getContainerSize=j,g.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},g.prototype._emitCompleteOnItems=function(a,b){function c(){e.dispatchEvent(a+"Complete",null,[b])}function d(){g++,g===f&&c()}var e=this,f=b.length;if(!b||!f)return void c();for(var g=0,h=0,i=b.length;i>h;h++){var j=b[h];j.once(a,d)}},g.prototype.dispatchEvent=function(a,b,c){var d=b?[b].concat(c):c;if(this.emitEvent(a,d),i)if(this.$element=this.$element||i(this.element),b){var e=i.Event(b);e.type=a,this.$element.trigger(e,c)}else this.$element.trigger(a,c)},g.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},g.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},g.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},g.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e.removeFrom(this.stamps,d),this.unignore(d)}},g.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=e.makeArray(a)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},g.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},g.prototype._manageStamp=j,g.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,e=d(a),f={left:b.left-c.left-e.marginLeft,top:b.top-c.top-e.marginTop,right:c.right-b.right-e.marginRight,bottom:c.bottom-b.bottom-e.marginBottom};return f},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.bindResize=function(){this.isResizeBound||(b.bind(a,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){this.isResizeBound&&b.unbind(a,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},g.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},g.prototype.needsResizeLayout=function(){var a=d(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},g.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},g.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},g.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},g.prototype.reveal=function(a){this._emitCompleteOnItems("reveal",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.reveal()}},g.prototype.hide=function(a){this._emitCompleteOnItems("hide",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.hide()}},g.prototype.revealItemElements=function(a){var b=this.getItems(a);this.reveal(b)},g.prototype.hideItemElements=function(a){var b=this.getItems(a);this.hide(b)},g.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},g.prototype.getItems=function(a){a=e.makeArray(a);for(var b=[],c=0,d=a.length;d>c;c++){var f=a[c],g=this.getItem(f);g&&b.push(g)}return b},g.prototype.remove=function(a){var b=this.getItems(a);if(this._emitCompleteOnItems("remove",b),b&&b.length)for(var c=0,d=b.length;d>c;c++){var f=b[c];f.remove(),e.removeFrom(this.items,f)}},g.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,i&&i.removeData(this.element,this.constructor.namespace)},g.data=function(a){a=e.getQueryElement(a);var b=a&&a.outlayerGUID;return b&&l[b]},g.create=function(a,b){function c(){g.apply(this,arguments)}return Object.create?c.prototype=Object.create(g.prototype):e.extend(c.prototype,g.prototype),c.prototype.constructor=c,c.defaults=e.extend({},g.defaults),e.extend(c.defaults,b),c.prototype.settings={},c.namespace=a,c.data=g.data,c.Item=function(){f.apply(this,arguments)},c.Item.prototype=new f,e.htmlInit(c,a),i&&i.bridget&&i.bridget(a,c),c},g.Item=f,g}),function(a,b){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],b):"object"==typeof exports?module.exports=b(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):a.Masonry=b(a.Outlayer,a.getSize,a.fizzyUIUtils)}(window,function(a,b,c){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}var d=this.columnWidth+=this.gutter,e=this.containerWidth+this.gutter,f=e/d,g=d-e%d,h=g&&1>g?"round":"floor";f=Math[h](f),this.cols=Math.max(f,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c.indexOf(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d});


/*
                       _ _ _____                      _   _
                      | | |  __ \                    | | (_)
    ___  ___ _ __ ___ | | | |__) |_____   _____  __ _| |  _ ___
   / __|/ __| '__/ _ \| | |  _  // _ \ \ / / _ \/ _` | | | / __|
   \__ \ (__| | | (_) | | | | \ \  __/\ V /  __/ (_| | |_| \__ \
   |___/\___|_|  \___/|_|_|_|  \_\___| \_/ \___|\__,_|_(_) |___/ v2.3.2
                                                        _/ |
                                                       |__/
================================================================================
   scrollReveal.js (c) 2015 Julian Lloyd ( @julianlloyd )
   Licensed under MIT ( http://www.opensource.org/licenses/mit-license.php )
==============================================================================*/

!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t(require,exports,module):e.scrollReveal=t()}(this,function(){return window.scrollReveal=function(e){"use strict";function t(i){return this instanceof t?(r=this,r.elems={},r.serial=1,r.blocked=!1,r.config=o(r.defaults,i),r.isMobile()&&!r.config.mobile||!r.isSupported()?void r.destroy():(r.config.viewport===e.document.documentElement?(e.addEventListener("scroll",a,!1),e.addEventListener("resize",a,!1)):r.config.viewport.addEventListener("scroll",a,!1),void r.init(!0))):new t(i)}var i,o,a,r;return t.prototype={defaults:{enter:"bottom",move:"8px",over:"0.6s",wait:"0s",easing:"ease",scale:{direction:"up",power:"5%"},rotate:{x:0,y:0,z:0},opacity:0,mobile:!1,reset:!1,viewport:e.document.documentElement,delay:"once",vFactor:.6,complete:function(){}},init:function(e){var t,i,o;o=Array.prototype.slice.call(r.config.viewport.querySelectorAll("[data-sr]")),o.forEach(function(e){t=r.serial++,i=r.elems[t]={domEl:e},i.config=r.configFactory(i),i.styles=r.styleFactory(i),i.seen=!1,e.removeAttribute("data-sr"),e.setAttribute("style",i.styles.inline+i.styles.initial)}),r.scrolled=r.scrollY(),r.animate(e)},animate:function(e){function t(e){var t=r.elems[e];setTimeout(function(){t.domEl.setAttribute("style",t.styles.inline),t.config.complete(t.domEl),delete r.elems[e]},t.styles.duration)}var i,o,a;for(i in r.elems)r.elems.hasOwnProperty(i)&&(o=r.elems[i],a=r.isElemInViewport(o),a?("always"===r.config.delay||"onload"===r.config.delay&&e||"once"===r.config.delay&&!o.seen?o.domEl.setAttribute("style",o.styles.inline+o.styles.target+o.styles.transition):o.domEl.setAttribute("style",o.styles.inline+o.styles.target+o.styles.reset),o.seen=!0,o.config.reset||o.animating||(o.animating=!0,t(i))):!a&&o.config.reset&&o.domEl.setAttribute("style",o.styles.inline+o.styles.initial+o.styles.reset));r.blocked=!1},configFactory:function(e){var t={},i={},a=e.domEl.getAttribute("data-sr").split(/[, ]+/);return a.forEach(function(e,i){switch(e){case"enter":t.enter=a[i+1];break;case"wait":t.wait=a[i+1];break;case"move":t.move=a[i+1];break;case"ease":t.move=a[i+1],t.ease="ease";break;case"ease-in":if("up"==a[i+1]||"down"==a[i+1]){t.scale.direction=a[i+1],t.scale.power=a[i+2],t.easing="ease-in";break}t.move=a[i+1],t.easing="ease-in";break;case"ease-in-out":if("up"==a[i+1]||"down"==a[i+1]){t.scale.direction=a[i+1],t.scale.power=a[i+2],t.easing="ease-in-out";break}t.move=a[i+1],t.easing="ease-in-out";break;case"ease-out":if("up"==a[i+1]||"down"==a[i+1]){t.scale.direction=a[i+1],t.scale.power=a[i+2],t.easing="ease-out";break}t.move=a[i+1],t.easing="ease-out";break;case"hustle":if("up"==a[i+1]||"down"==a[i+1]){t.scale.direction=a[i+1],t.scale.power=a[i+2],t.easing="cubic-bezier( 0.6, 0.2, 0.1, 1 )";break}t.move=a[i+1],t.easing="cubic-bezier( 0.6, 0.2, 0.1, 1 )";break;case"over":t.over=a[i+1];break;case"flip":case"pitch":t.rotate=t.rotate||{},t.rotate.x=a[i+1];break;case"spin":case"yaw":t.rotate=t.rotate||{},t.rotate.y=a[i+1];break;case"roll":t.rotate=t.rotate||{},t.rotate.z=a[i+1];break;case"reset":t.reset="no"==a[i-1]?!1:!0;break;case"scale":if(t.scale={},"up"==a[i+1]||"down"==a[i+1]){t.scale.direction=a[i+1],t.scale.power=a[i+2];break}t.scale.power=a[i+1];break;case"vFactor":case"vF":t.vFactor=a[i+1];break;case"opacity":t.opacity=a[i+1];break;default:return}}),i=o(i,r.config),i=o(i,t),"top"===i.enter||"bottom"===i.enter?i.axis="Y":("left"===i.enter||"right"===i.enter)&&(i.axis="X"),("top"===i.enter||"left"===i.enter)&&(i.move="-"+i.move),i},styleFactory:function(e){function t(){0!==parseInt(s.move)&&(o+=" translate"+s.axis+"("+s.move+")",r+=" translate"+s.axis+"(0)"),0!==parseInt(s.scale.power)&&("up"===s.scale.direction?s.scale.value=1-.01*parseFloat(s.scale.power):"down"===s.scale.direction&&(s.scale.value=1+.01*parseFloat(s.scale.power)),o+=" scale("+s.scale.value+")",r+=" scale(1)"),s.rotate.x&&(o+=" rotateX("+s.rotate.x+")",r+=" rotateX(0)"),s.rotate.y&&(o+=" rotateY("+s.rotate.y+")",r+=" rotateY(0)"),s.rotate.z&&(o+=" rotateZ("+s.rotate.z+")",r+=" rotateZ(0)"),o+="; opacity: "+s.opacity+"; ",r+="; opacity: 1; "}var i,o,a,r,n,s=e.config,c=1e3*(parseFloat(s.over)+parseFloat(s.wait));return i=e.domEl.getAttribute("style")?e.domEl.getAttribute("style")+"; visibility: visible; ":"visibility: visible; ",n="-webkit-transition: -webkit-transform "+s.over+" "+s.easing+" "+s.wait+", opacity "+s.over+" "+s.easing+" "+s.wait+"; transition: transform "+s.over+" "+s.easing+" "+s.wait+", opacity "+s.over+" "+s.easing+" "+s.wait+"; -webkit-perspective: 1000;-webkit-backface-visibility: hidden;",a="-webkit-transition: -webkit-transform "+s.over+" "+s.easing+" 0s, opacity "+s.over+" "+s.easing+" 0s; transition: transform "+s.over+" "+s.easing+" 0s, opacity "+s.over+" "+s.easing+" 0s; -webkit-perspective: 1000; -webkit-backface-visibility: hidden; ",o="transform:",r="transform:",t(),o+="-webkit-transform:",r+="-webkit-transform:",t(),{transition:n,initial:o,target:r,reset:a,inline:i,duration:c}},getViewportH:function(){var t=r.config.viewport.clientHeight,i=e.innerHeight;return r.config.viewport===e.document.documentElement&&i>t?i:t},scrollY:function(){return r.config.viewport===e.document.documentElement?e.pageYOffset:r.config.viewport.scrollTop+r.config.viewport.offsetTop},getOffset:function(e){var t=0,i=0;do isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(i+=e.offsetLeft);while(e=e.offsetParent);return{top:t,left:i}},isElemInViewport:function(t){function i(){var e=n+a*c,t=s-a*c,i=r.scrolled+r.getViewportH(),o=r.scrolled;return i>e&&t>o}function o(){var i=t.domEl,o=i.currentStyle||e.getComputedStyle(i,null);return"fixed"===o.position}var a=t.domEl.offsetHeight,n=r.getOffset(t.domEl).top,s=n+a,c=t.config.vFactor||0;return i()||o()},isMobile:function(){var t=navigator.userAgent||navigator.vendor||e.opera;return/(ipad|playbook|silk|android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))?!0:!1},isSupported:function(){for(var e=document.createElement("sensor"),t="Webkit,Moz,O,".split(","),i=("transition "+t.join("transition,")).split(","),o=0;o<i.length;o++)if(""===!e.style[i[o]])return!1;return!0},destroy:function(){var e=r.config.viewport,t=Array.prototype.slice.call(e.querySelectorAll("[data-sr]"));t.forEach(function(e){e.removeAttribute("data-sr")})}},a=function(){r.blocked||(r.blocked=!0,r.scrolled=r.scrollY(),i(function(){r.animate()}))},o=function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e},i=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(t){e.setTimeout(t,1e3/60)}}(),t}(window),scrollReveal});

/* jquery visible */

!function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);


$(window).scroll(function() {

    var x = $(this).scrollTop();

});

