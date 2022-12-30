!(function () {
    function t(t) {
        return t && t.__esModule ? t.default : t;
    }
    /**
     * @license
     * Copyright 2010-2021 Three.js Authors
     * SPDX-License-Identifier: MIT
     */ const e = 100,
        n = 301,
        i = 302,
        r = 306,
        s = 307,
        a = 1e3,
        o = 1001,
        l = 1002,
        c = 1003,
        h = 1004,
        u = 1005,
        d = 1006,
        p = 1008,
        f = 1009,
        m = 1012,
        g = 1014,
        v = 1015,
        y = 1016,
        _ = 1020,
        x = 1022,
        w = 1023,
        b = 1026,
        M = 1027,
        S = 2300,
        T = 2301,
        E = 2302,
        A = 2400,
        L = 2401,
        R = 2402,
        C = 2500,
        P = 3e3,
        D = 3001,
        I = 3007,
        N = 3002,
        z = 7680,
        O = 35044,
        B = 35048,
        F = "300 es";
    class H {
        addEventListener(t, e) {
            void 0 === this._listeners && (this._listeners = {});
            const n = this._listeners;
            void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e);
        }
        hasEventListener(t, e) {
            if (void 0 === this._listeners) return !1;
            const n = this._listeners;
            return void 0 !== n[t] && -1 !== n[t].indexOf(e);
        }
        removeEventListener(t, e) {
            if (void 0 === this._listeners) return;
            const n = this._listeners[t];
            if (void 0 !== n) {
                const t = n.indexOf(e);
                -1 !== t && n.splice(t, 1);
            }
        }
        dispatchEvent(t) {
            if (void 0 === this._listeners) return;
            const e = this._listeners[t.type];
            if (void 0 !== e) {
                t.target = this;
                const n = e.slice(0);
                for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t);
                t.target = null;
            }
        }
    }
    const U = [];
    for (let t = 0; t < 256; t++) U[t] = (t < 16 ? "0" : "") + t.toString(16);
    const k = Math.PI / 180,
        G = 180 / Math.PI;
    function V() {
        const t = (4294967295 * Math.random()) | 0,
            e = (4294967295 * Math.random()) | 0,
            n = (4294967295 * Math.random()) | 0,
            i = (4294967295 * Math.random()) | 0;
        return (
            U[255 & t] +
            U[(t >> 8) & 255] +
            U[(t >> 16) & 255] +
            U[(t >> 24) & 255] +
            "-" +
            U[255 & e] +
            U[(e >> 8) & 255] +
            "-" +
            U[((e >> 16) & 15) | 64] +
            U[(e >> 24) & 255] +
            "-" +
            U[(63 & n) | 128] +
            U[(n >> 8) & 255] +
            "-" +
            U[(n >> 16) & 255] +
            U[(n >> 24) & 255] +
            U[255 & i] +
            U[(i >> 8) & 255] +
            U[(i >> 16) & 255] +
            U[(i >> 24) & 255]
        ).toUpperCase();
    }
    function W(t, e, n) {
        return Math.max(e, Math.min(n, t));
    }
    function j(t, e) {
        return ((t % e) + e) % e;
    }
    function q(t, e, n) {
        return (1 - n) * t + n * e;
    }
    function X(t) {
        return 0 == (t & (t - 1)) && 0 !== t;
    }
    function Y(t) {
        return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
    }
    class Z {
        constructor(t = 0, e = 0) {
            (this.x = t), (this.y = e);
        }
        get width() {
            return this.x;
        }
        set width(t) {
            this.x = t;
        }
        get height() {
            return this.y;
        }
        set height(t) {
            this.y = t;
        }
        set(t, e) {
            return (this.x = t), (this.y = e), this;
        }
        setScalar(t) {
            return (this.x = t), (this.y = t), this;
        }
        setX(t) {
            return (this.x = t), this;
        }
        setY(t) {
            return (this.y = t), this;
        }
        setComponent(t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t);
            }
            return this;
        }
        getComponent(t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + t);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y);
        }
        copy(t) {
            return (this.x = t.x), (this.y = t.y), this;
        }
        add(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : ((this.x += t.x), (this.y += t.y), this);
        }
        addScalar(t) {
            return (this.x += t), (this.y += t), this;
        }
        addVectors(t, e) {
            return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
        }
        addScaledVector(t, e) {
            return (this.x += t.x * e), (this.y += t.y * e), this;
        }
        sub(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : ((this.x -= t.x), (this.y -= t.y), this);
        }
        subScalar(t) {
            return (this.x -= t), (this.y -= t), this;
        }
        subVectors(t, e) {
            return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
        }
        multiply(t) {
            return (this.x *= t.x), (this.y *= t.y), this;
        }
        multiplyScalar(t) {
            return (this.x *= t), (this.y *= t), this;
        }
        divide(t) {
            return (this.x /= t.x), (this.y /= t.y), this;
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t);
        }
        applyMatrix3(t) {
            const e = this.x,
                n = this.y,
                i = t.elements;
            return (this.x = i[0] * e + i[3] * n + i[6]), (this.y = i[1] * e + i[4] * n + i[7]), this;
        }
        min(t) {
            return (this.x = Math.min(this.x, t.x)), (this.y = Math.min(this.y, t.y)), this;
        }
        max(t) {
            return (this.x = Math.max(this.x, t.x)), (this.y = Math.max(this.y, t.y)), this;
        }
        clamp(t, e) {
            return (this.x = Math.max(t.x, Math.min(e.x, this.x))), (this.y = Math.max(t.y, Math.min(e.y, this.y))), this;
        }
        clampScalar(t, e) {
            return (this.x = Math.max(t, Math.min(e, this.x))), (this.y = Math.max(t, Math.min(e, this.y))), this;
        }
        clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
        }
        floor() {
            return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
        }
        ceil() {
            return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
        }
        round() {
            return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
        }
        roundToZero() {
            return (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)), (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)), this;
        }
        negate() {
            return (this.x = -this.x), (this.y = -this.y), this;
        }
        dot(t) {
            return this.x * t.x + this.y * t.y;
        }
        cross(t) {
            return this.x * t.y - this.y * t.x;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        angle() {
            return Math.atan2(-this.y, -this.x) + Math.PI;
        }
        distanceTo(t) {
            return Math.sqrt(this.distanceToSquared(t));
        }
        distanceToSquared(t) {
            const e = this.x - t.x,
                n = this.y - t.y;
            return e * e + n * n;
        }
        manhattanDistanceTo(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
            return (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this;
        }
        lerpVectors(t, e, n) {
            return (this.x = t.x + (e.x - t.x) * n), (this.y = t.y + (e.y - t.y) * n), this;
        }
        equals(t) {
            return t.x === this.x && t.y === this.y;
        }
        fromArray(t, e = 0) {
            return (this.x = t[e]), (this.y = t[e + 1]), this;
        }
        toArray(t = [], e = 0) {
            return (t[e] = this.x), (t[e + 1] = this.y), t;
        }
        fromBufferAttribute(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), (this.x = t.getX(e)), (this.y = t.getY(e)), this;
        }
        rotateAround(t, e) {
            const n = Math.cos(e),
                i = Math.sin(e),
                r = this.x - t.x,
                s = this.y - t.y;
            return (this.x = r * n - s * i + t.x), (this.y = r * i + s * n + t.y), this;
        }
        random() {
            return (this.x = Math.random()), (this.y = Math.random()), this;
        }
    }
    Z.prototype.isVector2 = !0;
    class J {
        constructor() {
            (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]), arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
        }
        set(t, e, n, i, r, s, a, o, l) {
            const c = this.elements;
            return (c[0] = t), (c[1] = i), (c[2] = a), (c[3] = e), (c[4] = r), (c[5] = o), (c[6] = n), (c[7] = s), (c[8] = l), this;
        }
        identity() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
        }
        copy(t) {
            const e = this.elements,
                n = t.elements;
            return (e[0] = n[0]), (e[1] = n[1]), (e[2] = n[2]), (e[3] = n[3]), (e[4] = n[4]), (e[5] = n[5]), (e[6] = n[6]), (e[7] = n[7]), (e[8] = n[8]), this;
        }
        extractBasis(t, e, n) {
            return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
        }
        setFromMatrix4(t) {
            const e = t.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
        }
        multiply(t) {
            return this.multiplyMatrices(this, t);
        }
        premultiply(t) {
            return this.multiplyMatrices(t, this);
        }
        multiplyMatrices(t, e) {
            const n = t.elements,
                i = e.elements,
                r = this.elements,
                s = n[0],
                a = n[3],
                o = n[6],
                l = n[1],
                c = n[4],
                h = n[7],
                u = n[2],
                d = n[5],
                p = n[8],
                f = i[0],
                m = i[3],
                g = i[6],
                v = i[1],
                y = i[4],
                _ = i[7],
                x = i[2],
                w = i[5],
                b = i[8];
            return (
                (r[0] = s * f + a * v + o * x),
                (r[3] = s * m + a * y + o * w),
                (r[6] = s * g + a * _ + o * b),
                (r[1] = l * f + c * v + h * x),
                (r[4] = l * m + c * y + h * w),
                (r[7] = l * g + c * _ + h * b),
                (r[2] = u * f + d * v + p * x),
                (r[5] = u * m + d * y + p * w),
                (r[8] = u * g + d * _ + p * b),
                this
            );
        }
        multiplyScalar(t) {
            const e = this.elements;
            return (e[0] *= t), (e[3] *= t), (e[6] *= t), (e[1] *= t), (e[4] *= t), (e[7] *= t), (e[2] *= t), (e[5] *= t), (e[8] *= t), this;
        }
        determinant() {
            const t = this.elements,
                e = t[0],
                n = t[1],
                i = t[2],
                r = t[3],
                s = t[4],
                a = t[5],
                o = t[6],
                l = t[7],
                c = t[8];
            return e * s * c - e * a * l - n * r * c + n * a * o + i * r * l - i * s * o;
        }
        invert() {
            const t = this.elements,
                e = t[0],
                n = t[1],
                i = t[2],
                r = t[3],
                s = t[4],
                a = t[5],
                o = t[6],
                l = t[7],
                c = t[8],
                h = c * s - a * l,
                u = a * o - c * r,
                d = l * r - s * o,
                p = e * h + n * u + i * d;
            if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            const f = 1 / p;
            return (
                (t[0] = h * f),
                (t[1] = (i * l - c * n) * f),
                (t[2] = (a * n - i * s) * f),
                (t[3] = u * f),
                (t[4] = (c * e - i * o) * f),
                (t[5] = (i * r - a * e) * f),
                (t[6] = d * f),
                (t[7] = (n * o - l * e) * f),
                (t[8] = (s * e - n * r) * f),
                this
            );
        }
        transpose() {
            let t;
            const e = this.elements;
            return (t = e[1]), (e[1] = e[3]), (e[3] = t), (t = e[2]), (e[2] = e[6]), (e[6] = t), (t = e[5]), (e[5] = e[7]), (e[7] = t), this;
        }
        getNormalMatrix(t) {
            return this.setFromMatrix4(t).invert().transpose();
        }
        transposeIntoArray(t) {
            const e = this.elements;
            return (t[0] = e[0]), (t[1] = e[3]), (t[2] = e[6]), (t[3] = e[1]), (t[4] = e[4]), (t[5] = e[7]), (t[6] = e[2]), (t[7] = e[5]), (t[8] = e[8]), this;
        }
        setUvTransform(t, e, n, i, r, s, a) {
            const o = Math.cos(r),
                l = Math.sin(r);
            return this.set(n * o, n * l, -n * (o * s + l * a) + s + t, -i * l, i * o, -i * (-l * s + o * a) + a + e, 0, 0, 1), this;
        }
        scale(t, e) {
            const n = this.elements;
            return (n[0] *= t), (n[3] *= t), (n[6] *= t), (n[1] *= e), (n[4] *= e), (n[7] *= e), this;
        }
        rotate(t) {
            const e = Math.cos(t),
                n = Math.sin(t),
                i = this.elements,
                r = i[0],
                s = i[3],
                a = i[6],
                o = i[1],
                l = i[4],
                c = i[7];
            return (i[0] = e * r + n * o), (i[3] = e * s + n * l), (i[6] = e * a + n * c), (i[1] = -n * r + e * o), (i[4] = -n * s + e * l), (i[7] = -n * a + e * c), this;
        }
        translate(t, e) {
            const n = this.elements;
            return (n[0] += t * n[2]), (n[3] += t * n[5]), (n[6] += t * n[8]), (n[1] += e * n[2]), (n[4] += e * n[5]), (n[7] += e * n[8]), this;
        }
        equals(t) {
            const e = this.elements,
                n = t.elements;
            for (let t = 0; t < 9; t++) if (e[t] !== n[t]) return !1;
            return !0;
        }
        fromArray(t, e = 0) {
            for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
            return this;
        }
        toArray(t = [], e = 0) {
            const n = this.elements;
            return (t[e] = n[0]), (t[e + 1] = n[1]), (t[e + 2] = n[2]), (t[e + 3] = n[3]), (t[e + 4] = n[4]), (t[e + 5] = n[5]), (t[e + 6] = n[6]), (t[e + 7] = n[7]), (t[e + 8] = n[8]), t;
        }
        clone() {
            return new this.constructor().fromArray(this.elements);
        }
    }
    let Q;
    J.prototype.isMatrix3 = !0;
    class K {
        static getDataURL(t) {
            if (/^data:/i.test(t.src)) return t.src;
            if ("undefined" == typeof HTMLCanvasElement) return t.src;
            let e;
            if (t instanceof HTMLCanvasElement) e = t;
            else {
                void 0 === Q && (Q = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), (Q.width = t.width), (Q.height = t.height);
                const n = Q.getContext("2d");
                t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), (e = Q);
            }
            return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", 0.6)) : e.toDataURL("image/png");
        }
    }
    let $ = 0;
    class tt extends H {
        constructor(t = tt.DEFAULT_IMAGE, e = tt.DEFAULT_MAPPING, n = 1001, i = 1001, r = 1006, s = 1008, a = 1023, o = 1009, l = 1, c = 3e3) {
            super(),
                Object.defineProperty(this, "id", { value: $++ }),
                (this.uuid = V()),
                (this.name = ""),
                (this.image = t),
                (this.mipmaps = []),
                (this.mapping = e),
                (this.wrapS = n),
                (this.wrapT = i),
                (this.magFilter = r),
                (this.minFilter = s),
                (this.anisotropy = l),
                (this.format = a),
                (this.internalFormat = null),
                (this.type = o),
                (this.offset = new Z(0, 0)),
                (this.repeat = new Z(1, 1)),
                (this.center = new Z(0, 0)),
                (this.rotation = 0),
                (this.matrixAutoUpdate = !0),
                (this.matrix = new J()),
                (this.generateMipmaps = !0),
                (this.premultiplyAlpha = !1),
                (this.flipY = !0),
                (this.unpackAlignment = 4),
                (this.encoding = c),
                (this.version = 0),
                (this.onUpdate = null);
        }
        updateMatrix() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
        }
        clone() {
            return new this.constructor().copy(this);
        }
        copy(t) {
            return (
                (this.name = t.name),
                (this.image = t.image),
                (this.mipmaps = t.mipmaps.slice(0)),
                (this.mapping = t.mapping),
                (this.wrapS = t.wrapS),
                (this.wrapT = t.wrapT),
                (this.magFilter = t.magFilter),
                (this.minFilter = t.minFilter),
                (this.anisotropy = t.anisotropy),
                (this.format = t.format),
                (this.internalFormat = t.internalFormat),
                (this.type = t.type),
                this.offset.copy(t.offset),
                this.repeat.copy(t.repeat),
                this.center.copy(t.center),
                (this.rotation = t.rotation),
                (this.matrixAutoUpdate = t.matrixAutoUpdate),
                this.matrix.copy(t.matrix),
                (this.generateMipmaps = t.generateMipmaps),
                (this.premultiplyAlpha = t.premultiplyAlpha),
                (this.flipY = t.flipY),
                (this.unpackAlignment = t.unpackAlignment),
                (this.encoding = t.encoding),
                this
            );
        }
        toJSON(t) {
            const e = void 0 === t || "string" == typeof t;
            if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
            const n = {
                metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                center: [this.center.x, this.center.y],
                rotation: this.rotation,
                wrap: [this.wrapS, this.wrapT],
                format: this.format,
                type: this.type,
                encoding: this.encoding,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY,
                premultiplyAlpha: this.premultiplyAlpha,
                unpackAlignment: this.unpackAlignment,
            };
            if (void 0 !== this.image) {
                const i = this.image;
                if ((void 0 === i.uuid && (i.uuid = V()), !e && void 0 === t.images[i.uuid])) {
                    let e;
                    if (Array.isArray(i)) {
                        e = [];
                        for (let t = 0, n = i.length; t < n; t++) i[t].isDataTexture ? e.push(et(i[t].image)) : e.push(et(i[t]));
                    } else e = et(i);
                    t.images[i.uuid] = { uuid: i.uuid, url: e };
                }
                n.image = i.uuid;
            }
            return e || (t.textures[this.uuid] = n), n;
        }
        dispose() {
            this.dispatchEvent({ type: "dispose" });
        }
        transformUv(t) {
            if (300 !== this.mapping) return t;
            if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
                switch (this.wrapS) {
                    case a:
                        t.x = t.x - Math.floor(t.x);
                        break;
                    case o:
                        t.x = t.x < 0 ? 0 : 1;
                        break;
                    case l:
                        1 === Math.abs(Math.floor(t.x) % 2) ? (t.x = Math.ceil(t.x) - t.x) : (t.x = t.x - Math.floor(t.x));
                }
            if (t.y < 0 || t.y > 1)
                switch (this.wrapT) {
                    case a:
                        t.y = t.y - Math.floor(t.y);
                        break;
                    case o:
                        t.y = t.y < 0 ? 0 : 1;
                        break;
                    case l:
                        1 === Math.abs(Math.floor(t.y) % 2) ? (t.y = Math.ceil(t.y) - t.y) : (t.y = t.y - Math.floor(t.y));
                }
            return this.flipY && (t.y = 1 - t.y), t;
        }
        set needsUpdate(t) {
            !0 === t && this.version++;
        }
    }
    function et(t) {
        return ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement) || ("undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement) || ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
            ? K.getDataURL(t)
            : t.data
            ? { data: Array.prototype.slice.call(t.data), width: t.width, height: t.height, type: t.data.constructor.name }
            : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
    }
    (tt.DEFAULT_IMAGE = void 0), (tt.DEFAULT_MAPPING = 300), (tt.prototype.isTexture = !0);
    class nt {
        constructor(t = 0, e = 0, n = 0, i = 1) {
            (this.x = t), (this.y = e), (this.z = n), (this.w = i);
        }
        get width() {
            return this.z;
        }
        set width(t) {
            this.z = t;
        }
        get height() {
            return this.w;
        }
        set height(t) {
            this.w = t;
        }
        set(t, e, n, i) {
            return (this.x = t), (this.y = e), (this.z = n), (this.w = i), this;
        }
        setScalar(t) {
            return (this.x = t), (this.y = t), (this.z = t), (this.w = t), this;
        }
        setX(t) {
            return (this.x = t), this;
        }
        setY(t) {
            return (this.y = t), this;
        }
        setZ(t) {
            return (this.z = t), this;
        }
        setW(t) {
            return (this.w = t), this;
        }
        setComponent(t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                case 3:
                    this.w = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t);
            }
            return this;
        }
        getComponent(t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + t);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z, this.w);
        }
        copy(t) {
            return (this.x = t.x), (this.y = t.y), (this.z = t.z), (this.w = void 0 !== t.w ? t.w : 1), this;
        }
        add(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : ((this.x += t.x), (this.y += t.y), (this.z += t.z), (this.w += t.w), this);
        }
        addScalar(t) {
            return (this.x += t), (this.y += t), (this.z += t), (this.w += t), this;
        }
        addVectors(t, e) {
            return (this.x = t.x + e.x), (this.y = t.y + e.y), (this.z = t.z + e.z), (this.w = t.w + e.w), this;
        }
        addScaledVector(t, e) {
            return (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), (this.w += t.w * e), this;
        }
        sub(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : ((this.x -= t.x), (this.y -= t.y), (this.z -= t.z), (this.w -= t.w), this);
        }
        subScalar(t) {
            return (this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this;
        }
        subVectors(t, e) {
            return (this.x = t.x - e.x), (this.y = t.y - e.y), (this.z = t.z - e.z), (this.w = t.w - e.w), this;
        }
        multiply(t) {
            return (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), (this.w *= t.w), this;
        }
        multiplyScalar(t) {
            return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this;
        }
        applyMatrix4(t) {
            const e = this.x,
                n = this.y,
                i = this.z,
                r = this.w,
                s = t.elements;
            return (
                (this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r),
                (this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r),
                (this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r),
                (this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r),
                this
            );
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t);
        }
        setAxisAngleFromQuaternion(t) {
            this.w = 2 * Math.acos(t.w);
            const e = Math.sqrt(1 - t.w * t.w);
            return e < 1e-4 ? ((this.x = 1), (this.y = 0), (this.z = 0)) : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)), this;
        }
        setAxisAngleFromRotationMatrix(t) {
            let e, n, i, r;
            const s = 0.01,
                a = 0.1,
                o = t.elements,
                l = o[0],
                c = o[4],
                h = o[8],
                u = o[1],
                d = o[5],
                p = o[9],
                f = o[2],
                m = o[6],
                g = o[10];
            if (Math.abs(c - u) < s && Math.abs(h - f) < s && Math.abs(p - m) < s) {
                if (Math.abs(c + u) < a && Math.abs(h + f) < a && Math.abs(p + m) < a && Math.abs(l + d + g - 3) < a) return this.set(1, 0, 0, 0), this;
                e = Math.PI;
                const t = (l + 1) / 2,
                    o = (d + 1) / 2,
                    v = (g + 1) / 2,
                    y = (c + u) / 4,
                    _ = (h + f) / 4,
                    x = (p + m) / 4;
                return (
                    t > o && t > v
                        ? t < s
                            ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
                            : ((n = Math.sqrt(t)), (i = y / n), (r = _ / n))
                        : o > v
                        ? o < s
                            ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
                            : ((i = Math.sqrt(o)), (n = y / i), (r = x / i))
                        : v < s
                        ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
                        : ((r = Math.sqrt(v)), (n = _ / r), (i = x / r)),
                    this.set(n, i, r, e),
                    this
                );
            }
            let v = Math.sqrt((m - p) * (m - p) + (h - f) * (h - f) + (u - c) * (u - c));
            return Math.abs(v) < 0.001 && (v = 1), (this.x = (m - p) / v), (this.y = (h - f) / v), (this.z = (u - c) / v), (this.w = Math.acos((l + d + g - 1) / 2)), this;
        }
        min(t) {
            return (this.x = Math.min(this.x, t.x)), (this.y = Math.min(this.y, t.y)), (this.z = Math.min(this.z, t.z)), (this.w = Math.min(this.w, t.w)), this;
        }
        max(t) {
            return (this.x = Math.max(this.x, t.x)), (this.y = Math.max(this.y, t.y)), (this.z = Math.max(this.z, t.z)), (this.w = Math.max(this.w, t.w)), this;
        }
        clamp(t, e) {
            return (this.x = Math.max(t.x, Math.min(e.x, this.x))), (this.y = Math.max(t.y, Math.min(e.y, this.y))), (this.z = Math.max(t.z, Math.min(e.z, this.z))), (this.w = Math.max(t.w, Math.min(e.w, this.w))), this;
        }
        clampScalar(t, e) {
            return (this.x = Math.max(t, Math.min(e, this.x))), (this.y = Math.max(t, Math.min(e, this.y))), (this.z = Math.max(t, Math.min(e, this.z))), (this.w = Math.max(t, Math.min(e, this.w))), this;
        }
        clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
        }
        floor() {
            return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), (this.z = Math.floor(this.z)), (this.w = Math.floor(this.w)), this;
        }
        ceil() {
            return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), (this.z = Math.ceil(this.z)), (this.w = Math.ceil(this.w)), this;
        }
        round() {
            return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), (this.z = Math.round(this.z)), (this.w = Math.round(this.w)), this;
        }
        roundToZero() {
            return (
                (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
                (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
                (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
                (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
                this
            );
        }
        negate() {
            return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), (this.w = -this.w), this;
        }
        dot(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
            return (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), (this.z += (t.z - this.z) * e), (this.w += (t.w - this.w) * e), this;
        }
        lerpVectors(t, e, n) {
            return (this.x = t.x + (e.x - t.x) * n), (this.y = t.y + (e.y - t.y) * n), (this.z = t.z + (e.z - t.z) * n), (this.w = t.w + (e.w - t.w) * n), this;
        }
        equals(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
        }
        fromArray(t, e = 0) {
            return (this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), (this.w = t[e + 3]), this;
        }
        toArray(t = [], e = 0) {
            return (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), (t[e + 3] = this.w), t;
        }
        fromBufferAttribute(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), (this.x = t.getX(e)), (this.y = t.getY(e)), (this.z = t.getZ(e)), (this.w = t.getW(e)), this;
        }
        random() {
            return (this.x = Math.random()), (this.y = Math.random()), (this.z = Math.random()), (this.w = Math.random()), this;
        }
    }
    nt.prototype.isVector4 = !0;
    class it extends H {
        constructor(t, e, n) {
            super(),
                (this.width = t),
                (this.height = e),
                (this.depth = 1),
                (this.scissor = new nt(0, 0, t, e)),
                (this.scissorTest = !1),
                (this.viewport = new nt(0, 0, t, e)),
                (n = n || {}),
                (this.texture = new tt(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding)),
                (this.texture.image = {}),
                (this.texture.image.width = t),
                (this.texture.image.height = e),
                (this.texture.image.depth = 1),
                (this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps),
                (this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : d),
                (this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer),
                (this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer),
                (this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null);
        }
        setTexture(t) {
            (t.image = { width: this.width, height: this.height, depth: this.depth }), (this.texture = t);
        }
        setSize(t, e, n = 1) {
            (this.width === t && this.height === e && this.depth === n) ||
                ((this.width = t), (this.height = e), (this.depth = n), (this.texture.image.width = t), (this.texture.image.height = e), (this.texture.image.depth = n), this.dispose()),
                this.viewport.set(0, 0, t, e),
                this.scissor.set(0, 0, t, e);
        }
        clone() {
            return new this.constructor().copy(this);
        }
        copy(t) {
            return (
                (this.width = t.width),
                (this.height = t.height),
                (this.depth = t.depth),
                this.viewport.copy(t.viewport),
                (this.texture = t.texture.clone()),
                (this.texture.image = { ...this.texture.image }),
                (this.depthBuffer = t.depthBuffer),
                (this.stencilBuffer = t.stencilBuffer),
                (this.depthTexture = t.depthTexture),
                this
            );
        }
        dispose() {
            this.dispatchEvent({ type: "dispose" });
        }
    }
    it.prototype.isWebGLRenderTarget = !0;
    (class extends it {
        constructor(t, e, n) {
            super(t, e);
            const i = this.texture;
            this.texture = [];
            for (let t = 0; t < n; t++) this.texture[t] = i.clone();
        }
        setSize(t, e, n = 1) {
            if (this.width !== t || this.height !== e || this.depth !== n) {
                (this.width = t), (this.height = e), (this.depth = n);
                for (let i = 0, r = this.texture.length; i < r; i++) (this.texture[i].image.width = t), (this.texture[i].image.height = e), (this.texture[i].image.depth = n);
                this.dispose();
            }
            return this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e), this;
        }
        copy(t) {
            this.dispose(),
                (this.width = t.width),
                (this.height = t.height),
                (this.depth = t.depth),
                this.viewport.set(0, 0, this.width, this.height),
                this.scissor.set(0, 0, this.width, this.height),
                (this.depthBuffer = t.depthBuffer),
                (this.stencilBuffer = t.stencilBuffer),
                (this.depthTexture = t.depthTexture),
                (this.texture.length = 0);
            for (let e = 0, n = t.texture.length; e < n; e++) this.texture[e] = t.texture[e].clone();
            return this;
        }
    }.prototype.isWebGLMultipleRenderTargets = !0);
    (class extends it {
        constructor(t, e, n) {
            super(t, e, n), (this.samples = 4);
        }
        copy(t) {
            return super.copy.call(this, t), (this.samples = t.samples), this;
        }
    }.prototype.isWebGLMultisampleRenderTarget = !0);
    class rt {
        constructor(t = 0, e = 0, n = 0, i = 1) {
            (this._x = t), (this._y = e), (this._z = n), (this._w = i);
        }
        static slerp(t, e, n, i) {
            return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), n.slerpQuaternions(t, e, i);
        }
        static slerpFlat(t, e, n, i, r, s, a) {
            let o = n[i + 0],
                l = n[i + 1],
                c = n[i + 2],
                h = n[i + 3];
            const u = r[s + 0],
                d = r[s + 1],
                p = r[s + 2],
                f = r[s + 3];
            if (0 === a) return (t[e + 0] = o), (t[e + 1] = l), (t[e + 2] = c), void (t[e + 3] = h);
            if (1 === a) return (t[e + 0] = u), (t[e + 1] = d), (t[e + 2] = p), void (t[e + 3] = f);
            if (h !== f || o !== u || l !== d || c !== p) {
                let t = 1 - a;
                const e = o * u + l * d + c * p + h * f,
                    n = e >= 0 ? 1 : -1,
                    i = 1 - e * e;
                if (i > Number.EPSILON) {
                    const r = Math.sqrt(i),
                        s = Math.atan2(r, e * n);
                    (t = Math.sin(t * s) / r), (a = Math.sin(a * s) / r);
                }
                const r = a * n;
                if (((o = o * t + u * r), (l = l * t + d * r), (c = c * t + p * r), (h = h * t + f * r), t === 1 - a)) {
                    const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
                    (o *= t), (l *= t), (c *= t), (h *= t);
                }
            }
            (t[e] = o), (t[e + 1] = l), (t[e + 2] = c), (t[e + 3] = h);
        }
        static multiplyQuaternionsFlat(t, e, n, i, r, s) {
            const a = n[i],
                o = n[i + 1],
                l = n[i + 2],
                c = n[i + 3],
                h = r[s],
                u = r[s + 1],
                d = r[s + 2],
                p = r[s + 3];
            return (t[e] = a * p + c * h + o * d - l * u), (t[e + 1] = o * p + c * u + l * h - a * d), (t[e + 2] = l * p + c * d + a * u - o * h), (t[e + 3] = c * p - a * h - o * u - l * d), t;
        }
        get x() {
            return this._x;
        }
        set x(t) {
            (this._x = t), this._onChangeCallback();
        }
        get y() {
            return this._y;
        }
        set y(t) {
            (this._y = t), this._onChangeCallback();
        }
        get z() {
            return this._z;
        }
        set z(t) {
            (this._z = t), this._onChangeCallback();
        }
        get w() {
            return this._w;
        }
        set w(t) {
            (this._w = t), this._onChangeCallback();
        }
        set(t, e, n, i) {
            return (this._x = t), (this._y = e), (this._z = n), (this._w = i), this._onChangeCallback(), this;
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._w);
        }
        copy(t) {
            return (this._x = t.x), (this._y = t.y), (this._z = t.z), (this._w = t.w), this._onChangeCallback(), this;
        }
        setFromEuler(t, e) {
            if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            const n = t._x,
                i = t._y,
                r = t._z,
                s = t._order,
                a = Math.cos,
                o = Math.sin,
                l = a(n / 2),
                c = a(i / 2),
                h = a(r / 2),
                u = o(n / 2),
                d = o(i / 2),
                p = o(r / 2);
            switch (s) {
                case "XYZ":
                    (this._x = u * c * h + l * d * p), (this._y = l * d * h - u * c * p), (this._z = l * c * p + u * d * h), (this._w = l * c * h - u * d * p);
                    break;
                case "YXZ":
                    (this._x = u * c * h + l * d * p), (this._y = l * d * h - u * c * p), (this._z = l * c * p - u * d * h), (this._w = l * c * h + u * d * p);
                    break;
                case "ZXY":
                    (this._x = u * c * h - l * d * p), (this._y = l * d * h + u * c * p), (this._z = l * c * p + u * d * h), (this._w = l * c * h - u * d * p);
                    break;
                case "ZYX":
                    (this._x = u * c * h - l * d * p), (this._y = l * d * h + u * c * p), (this._z = l * c * p - u * d * h), (this._w = l * c * h + u * d * p);
                    break;
                case "YZX":
                    (this._x = u * c * h + l * d * p), (this._y = l * d * h + u * c * p), (this._z = l * c * p - u * d * h), (this._w = l * c * h - u * d * p);
                    break;
                case "XZY":
                    (this._x = u * c * h - l * d * p), (this._y = l * d * h - u * c * p), (this._z = l * c * p + u * d * h), (this._w = l * c * h + u * d * p);
                    break;
                default:
                    console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s);
            }
            return !1 !== e && this._onChangeCallback(), this;
        }
        setFromAxisAngle(t, e) {
            const n = e / 2,
                i = Math.sin(n);
            return (this._x = t.x * i), (this._y = t.y * i), (this._z = t.z * i), (this._w = Math.cos(n)), this._onChangeCallback(), this;
        }
        setFromRotationMatrix(t) {
            const e = t.elements,
                n = e[0],
                i = e[4],
                r = e[8],
                s = e[1],
                a = e[5],
                o = e[9],
                l = e[2],
                c = e[6],
                h = e[10],
                u = n + a + h;
            if (u > 0) {
                const t = 0.5 / Math.sqrt(u + 1);
                (this._w = 0.25 / t), (this._x = (c - o) * t), (this._y = (r - l) * t), (this._z = (s - i) * t);
            } else if (n > a && n > h) {
                const t = 2 * Math.sqrt(1 + n - a - h);
                (this._w = (c - o) / t), (this._x = 0.25 * t), (this._y = (i + s) / t), (this._z = (r + l) / t);
            } else if (a > h) {
                const t = 2 * Math.sqrt(1 + a - n - h);
                (this._w = (r - l) / t), (this._x = (i + s) / t), (this._y = 0.25 * t), (this._z = (o + c) / t);
            } else {
                const t = 2 * Math.sqrt(1 + h - n - a);
                (this._w = (s - i) / t), (this._x = (r + l) / t), (this._y = (o + c) / t), (this._z = 0.25 * t);
            }
            return this._onChangeCallback(), this;
        }
        setFromUnitVectors(t, e) {
            let n = t.dot(e) + 1;
            return (
                n < Number.EPSILON
                    ? ((n = 0), Math.abs(t.x) > Math.abs(t.z) ? ((this._x = -t.y), (this._y = t.x), (this._z = 0), (this._w = n)) : ((this._x = 0), (this._y = -t.z), (this._z = t.y), (this._w = n)))
                    : ((this._x = t.y * e.z - t.z * e.y), (this._y = t.z * e.x - t.x * e.z), (this._z = t.x * e.y - t.y * e.x), (this._w = n)),
                this.normalize()
            );
        }
        angleTo(t) {
            return 2 * Math.acos(Math.abs(W(this.dot(t), -1, 1)));
        }
        rotateTowards(t, e) {
            const n = this.angleTo(t);
            if (0 === n) return this;
            const i = Math.min(1, e / n);
            return this.slerp(t, i), this;
        }
        identity() {
            return this.set(0, 0, 0, 1);
        }
        invert() {
            return this.conjugate();
        }
        conjugate() {
            return (this._x *= -1), (this._y *= -1), (this._z *= -1), this._onChangeCallback(), this;
        }
        dot(t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
        }
        lengthSq() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
        }
        length() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
        }
        normalize() {
            let t = this.length();
            return 0 === t ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1)) : ((t = 1 / t), (this._x = this._x * t), (this._y = this._y * t), (this._z = this._z * t), (this._w = this._w * t)), this._onChangeCallback(), this;
        }
        multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t);
        }
        premultiply(t) {
            return this.multiplyQuaternions(t, this);
        }
        multiplyQuaternions(t, e) {
            const n = t._x,
                i = t._y,
                r = t._z,
                s = t._w,
                a = e._x,
                o = e._y,
                l = e._z,
                c = e._w;
            return (this._x = n * c + s * a + i * l - r * o), (this._y = i * c + s * o + r * a - n * l), (this._z = r * c + s * l + n * o - i * a), (this._w = s * c - n * a - i * o - r * l), this._onChangeCallback(), this;
        }
        slerp(t, e) {
            if (0 === e) return this;
            if (1 === e) return this.copy(t);
            const n = this._x,
                i = this._y,
                r = this._z,
                s = this._w;
            let a = s * t._w + n * t._x + i * t._y + r * t._z;
            if ((a < 0 ? ((this._w = -t._w), (this._x = -t._x), (this._y = -t._y), (this._z = -t._z), (a = -a)) : this.copy(t), a >= 1)) return (this._w = s), (this._x = n), (this._y = i), (this._z = r), this;
            const o = 1 - a * a;
            if (o <= Number.EPSILON) {
                const t = 1 - e;
                return (this._w = t * s + e * this._w), (this._x = t * n + e * this._x), (this._y = t * i + e * this._y), (this._z = t * r + e * this._z), this.normalize(), this._onChangeCallback(), this;
            }
            const l = Math.sqrt(o),
                c = Math.atan2(l, a),
                h = Math.sin((1 - e) * c) / l,
                u = Math.sin(e * c) / l;
            return (this._w = s * h + this._w * u), (this._x = n * h + this._x * u), (this._y = i * h + this._y * u), (this._z = r * h + this._z * u), this._onChangeCallback(), this;
        }
        slerpQuaternions(t, e, n) {
            this.copy(t).slerp(e, n);
        }
        equals(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
        }
        fromArray(t, e = 0) {
            return (this._x = t[e]), (this._y = t[e + 1]), (this._z = t[e + 2]), (this._w = t[e + 3]), this._onChangeCallback(), this;
        }
        toArray(t = [], e = 0) {
            return (t[e] = this._x), (t[e + 1] = this._y), (t[e + 2] = this._z), (t[e + 3] = this._w), t;
        }
        fromBufferAttribute(t, e) {
            return (this._x = t.getX(e)), (this._y = t.getY(e)), (this._z = t.getZ(e)), (this._w = t.getW(e)), this;
        }
        _onChange(t) {
            return (this._onChangeCallback = t), this;
        }
        _onChangeCallback() {}
    }
    rt.prototype.isQuaternion = !0;
    class st {
        constructor(t = 0, e = 0, n = 0) {
            (this.x = t), (this.y = e), (this.z = n);
        }
        set(t, e, n) {
            return void 0 === n && (n = this.z), (this.x = t), (this.y = e), (this.z = n), this;
        }
        setScalar(t) {
            return (this.x = t), (this.y = t), (this.z = t), this;
        }
        setX(t) {
            return (this.x = t), this;
        }
        setY(t) {
            return (this.y = t), this;
        }
        setZ(t) {
            return (this.z = t), this;
        }
        setComponent(t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t);
            }
            return this;
        }
        getComponent(t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + t);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z);
        }
        copy(t) {
            return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
        }
        add(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : ((this.x += t.x), (this.y += t.y), (this.z += t.z), this);
        }
        addScalar(t) {
            return (this.x += t), (this.y += t), (this.z += t), this;
        }
        addVectors(t, e) {
            return (this.x = t.x + e.x), (this.y = t.y + e.y), (this.z = t.z + e.z), this;
        }
        addScaledVector(t, e) {
            return (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this;
        }
        sub(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : ((this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this);
        }
        subScalar(t) {
            return (this.x -= t), (this.y -= t), (this.z -= t), this;
        }
        subVectors(t, e) {
            return (this.x = t.x - e.x), (this.y = t.y - e.y), (this.z = t.z - e.z), this;
        }
        multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : ((this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this);
        }
        multiplyScalar(t) {
            return (this.x *= t), (this.y *= t), (this.z *= t), this;
        }
        multiplyVectors(t, e) {
            return (this.x = t.x * e.x), (this.y = t.y * e.y), (this.z = t.z * e.z), this;
        }
        applyEuler(t) {
            return (t && t.isEuler) || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(ot.setFromEuler(t));
        }
        applyAxisAngle(t, e) {
            return this.applyQuaternion(ot.setFromAxisAngle(t, e));
        }
        applyMatrix3(t) {
            const e = this.x,
                n = this.y,
                i = this.z,
                r = t.elements;
            return (this.x = r[0] * e + r[3] * n + r[6] * i), (this.y = r[1] * e + r[4] * n + r[7] * i), (this.z = r[2] * e + r[5] * n + r[8] * i), this;
        }
        applyNormalMatrix(t) {
            return this.applyMatrix3(t).normalize();
        }
        applyMatrix4(t) {
            const e = this.x,
                n = this.y,
                i = this.z,
                r = t.elements,
                s = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
            return (this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * s), (this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * s), (this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * s), this;
        }
        applyQuaternion(t) {
            const e = this.x,
                n = this.y,
                i = this.z,
                r = t.x,
                s = t.y,
                a = t.z,
                o = t.w,
                l = o * e + s * i - a * n,
                c = o * n + a * e - r * i,
                h = o * i + r * n - s * e,
                u = -r * e - s * n - a * i;
            return (this.x = l * o + u * -r + c * -a - h * -s), (this.y = c * o + u * -s + h * -r - l * -a), (this.z = h * o + u * -a + l * -s - c * -r), this;
        }
        project(t) {
            return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
        }
        unproject(t) {
            return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
        }
        transformDirection(t) {
            const e = this.x,
                n = this.y,
                i = this.z,
                r = t.elements;
            return (this.x = r[0] * e + r[4] * n + r[8] * i), (this.y = r[1] * e + r[5] * n + r[9] * i), (this.z = r[2] * e + r[6] * n + r[10] * i), this.normalize();
        }
        divide(t) {
            return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t);
        }
        min(t) {
            return (this.x = Math.min(this.x, t.x)), (this.y = Math.min(this.y, t.y)), (this.z = Math.min(this.z, t.z)), this;
        }
        max(t) {
            return (this.x = Math.max(this.x, t.x)), (this.y = Math.max(this.y, t.y)), (this.z = Math.max(this.z, t.z)), this;
        }
        clamp(t, e) {
            return (this.x = Math.max(t.x, Math.min(e.x, this.x))), (this.y = Math.max(t.y, Math.min(e.y, this.y))), (this.z = Math.max(t.z, Math.min(e.z, this.z))), this;
        }
        clampScalar(t, e) {
            return (this.x = Math.max(t, Math.min(e, this.x))), (this.y = Math.max(t, Math.min(e, this.y))), (this.z = Math.max(t, Math.min(e, this.z))), this;
        }
        clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
        }
        floor() {
            return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), (this.z = Math.floor(this.z)), this;
        }
        ceil() {
            return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), (this.z = Math.ceil(this.z)), this;
        }
        round() {
            return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), (this.z = Math.round(this.z)), this;
        }
        roundToZero() {
            return (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)), (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)), (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)), this;
        }
        negate() {
            return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
        }
        dot(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
            return (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), (this.z += (t.z - this.z) * e), this;
        }
        lerpVectors(t, e, n) {
            return (this.x = t.x + (e.x - t.x) * n), (this.y = t.y + (e.y - t.y) * n), (this.z = t.z + (e.z - t.z) * n), this;
        }
        cross(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t);
        }
        crossVectors(t, e) {
            const n = t.x,
                i = t.y,
                r = t.z,
                s = e.x,
                a = e.y,
                o = e.z;
            return (this.x = i * o - r * a), (this.y = r * s - n * o), (this.z = n * a - i * s), this;
        }
        projectOnVector(t) {
            const e = t.lengthSq();
            if (0 === e) return this.set(0, 0, 0);
            const n = t.dot(this) / e;
            return this.copy(t).multiplyScalar(n);
        }
        projectOnPlane(t) {
            return at.copy(this).projectOnVector(t), this.sub(at);
        }
        reflect(t) {
            return this.sub(at.copy(t).multiplyScalar(2 * this.dot(t)));
        }
        angleTo(t) {
            const e = Math.sqrt(this.lengthSq() * t.lengthSq());
            if (0 === e) return Math.PI / 2;
            const n = this.dot(t) / e;
            return Math.acos(W(n, -1, 1));
        }
        distanceTo(t) {
            return Math.sqrt(this.distanceToSquared(t));
        }
        distanceToSquared(t) {
            const e = this.x - t.x,
                n = this.y - t.y,
                i = this.z - t.z;
            return e * e + n * n + i * i;
        }
        manhattanDistanceTo(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
        }
        setFromSpherical(t) {
            return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
        }
        setFromSphericalCoords(t, e, n) {
            const i = Math.sin(e) * t;
            return (this.x = i * Math.sin(n)), (this.y = Math.cos(e) * t), (this.z = i * Math.cos(n)), this;
        }
        setFromCylindrical(t) {
            return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
        }
        setFromCylindricalCoords(t, e, n) {
            return (this.x = t * Math.sin(e)), (this.y = n), (this.z = t * Math.cos(e)), this;
        }
        setFromMatrixPosition(t) {
            const e = t.elements;
            return (this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this;
        }
        setFromMatrixScale(t) {
            const e = this.setFromMatrixColumn(t, 0).length(),
                n = this.setFromMatrixColumn(t, 1).length(),
                i = this.setFromMatrixColumn(t, 2).length();
            return (this.x = e), (this.y = n), (this.z = i), this;
        }
        setFromMatrixColumn(t, e) {
            return this.fromArray(t.elements, 4 * e);
        }
        setFromMatrix3Column(t, e) {
            return this.fromArray(t.elements, 3 * e);
        }
        equals(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z;
        }
        fromArray(t, e = 0) {
            return (this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this;
        }
        toArray(t = [], e = 0) {
            return (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), t;
        }
        fromBufferAttribute(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), (this.x = t.getX(e)), (this.y = t.getY(e)), (this.z = t.getZ(e)), this;
        }
        random() {
            return (this.x = Math.random()), (this.y = Math.random()), (this.z = Math.random()), this;
        }
    }
    st.prototype.isVector3 = !0;
    const at = new st(),
        ot = new rt();
    class lt {
        constructor(t = new st(1 / 0, 1 / 0, 1 / 0), e = new st(-1 / 0, -1 / 0, -1 / 0)) {
            (this.min = t), (this.max = e);
        }
        set(t, e) {
            return this.min.copy(t), this.max.copy(e), this;
        }
        setFromArray(t) {
            let e = 1 / 0,
                n = 1 / 0,
                i = 1 / 0,
                r = -1 / 0,
                s = -1 / 0,
                a = -1 / 0;
            for (let o = 0, l = t.length; o < l; o += 3) {
                const l = t[o],
                    c = t[o + 1],
                    h = t[o + 2];
                l < e && (e = l), c < n && (n = c), h < i && (i = h), l > r && (r = l), c > s && (s = c), h > a && (a = h);
            }
            return this.min.set(e, n, i), this.max.set(r, s, a), this;
        }
        setFromBufferAttribute(t) {
            let e = 1 / 0,
                n = 1 / 0,
                i = 1 / 0,
                r = -1 / 0,
                s = -1 / 0,
                a = -1 / 0;
            for (let o = 0, l = t.count; o < l; o++) {
                const l = t.getX(o),
                    c = t.getY(o),
                    h = t.getZ(o);
                l < e && (e = l), c < n && (n = c), h < i && (i = h), l > r && (r = l), c > s && (s = c), h > a && (a = h);
            }
            return this.min.set(e, n, i), this.max.set(r, s, a), this;
        }
        setFromPoints(t) {
            this.makeEmpty();
            for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
            return this;
        }
        setFromCenterAndSize(t, e) {
            const n = ht.copy(e).multiplyScalar(0.5);
            return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
        }
        setFromObject(t) {
            return this.makeEmpty(), this.expandByObject(t);
        }
        clone() {
            return new this.constructor().copy(this);
        }
        copy(t) {
            return this.min.copy(t.min), this.max.copy(t.max), this;
        }
        makeEmpty() {
            return (this.min.x = this.min.y = this.min.z = 1 / 0), (this.max.x = this.max.y = this.max.z = -1 / 0), this;
        }
        isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
        }
        getCenter(t) {
            return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"), (t = new st())), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
        }
        getSize(t) {
            return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"), (t = new st())), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
        }
        expandByPoint(t) {
            return this.min.min(t), this.max.max(t), this;
        }
        expandByVector(t) {
            return this.min.sub(t), this.max.add(t), this;
        }
        expandByScalar(t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this;
        }
        expandByObject(t) {
            t.updateWorldMatrix(!1, !1);
            const e = t.geometry;
            void 0 !== e && (null === e.boundingBox && e.computeBoundingBox(), ut.copy(e.boundingBox), ut.applyMatrix4(t.matrixWorld), this.union(ut));
            const n = t.children;
            for (let t = 0, e = n.length; t < e; t++) this.expandByObject(n[t]);
            return this;
        }
        containsPoint(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z);
        }
        containsBox(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
        }
        getParameter(t, e) {
            return (
                void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"), (e = new st())),
                e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
            );
        }
        intersectsBox(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z);
        }
        intersectsSphere(t) {
            return this.clampPoint(t.center, ht), ht.distanceToSquared(t.center) <= t.radius * t.radius;
        }
        intersectsPlane(t) {
            let e, n;
            return (
                t.normal.x > 0 ? ((e = t.normal.x * this.min.x), (n = t.normal.x * this.max.x)) : ((e = t.normal.x * this.max.x), (n = t.normal.x * this.min.x)),
                t.normal.y > 0 ? ((e += t.normal.y * this.min.y), (n += t.normal.y * this.max.y)) : ((e += t.normal.y * this.max.y), (n += t.normal.y * this.min.y)),
                t.normal.z > 0 ? ((e += t.normal.z * this.min.z), (n += t.normal.z * this.max.z)) : ((e += t.normal.z * this.max.z), (n += t.normal.z * this.min.z)),
                e <= -t.constant && n >= -t.constant
            );
        }
        intersectsTriangle(t) {
            if (this.isEmpty()) return !1;
            this.getCenter(yt), _t.subVectors(this.max, yt), dt.subVectors(t.a, yt), pt.subVectors(t.b, yt), ft.subVectors(t.c, yt), mt.subVectors(pt, dt), gt.subVectors(ft, pt), vt.subVectors(dt, ft);
            let e = [0, -mt.z, mt.y, 0, -gt.z, gt.y, 0, -vt.z, vt.y, mt.z, 0, -mt.x, gt.z, 0, -gt.x, vt.z, 0, -vt.x, -mt.y, mt.x, 0, -gt.y, gt.x, 0, -vt.y, vt.x, 0];
            return !!bt(e, dt, pt, ft, _t) && ((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !!bt(e, dt, pt, ft, _t) && (xt.crossVectors(mt, gt), (e = [xt.x, xt.y, xt.z]), bt(e, dt, pt, ft, _t)));
        }
        clampPoint(t, e) {
            return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"), (e = new st())), e.copy(t).clamp(this.min, this.max);
        }
        distanceToPoint(t) {
            return ht.copy(t).clamp(this.min, this.max).sub(t).length();
        }
        getBoundingSphere(t) {
            return void 0 === t && console.error("THREE.Box3: .getBoundingSphere() target is now required"), this.getCenter(t.center), (t.radius = 0.5 * this.getSize(ht).length()), t;
        }
        intersect(t) {
            return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
        }
        union(t) {
            return this.min.min(t.min), this.max.max(t.max), this;
        }
        applyMatrix4(t) {
            return (
                this.isEmpty() ||
                    (ct[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
                    ct[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
                    ct[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
                    ct[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
                    ct[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
                    ct[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
                    ct[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
                    ct[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
                    this.setFromPoints(ct)),
                this
            );
        }
        translate(t) {
            return this.min.add(t), this.max.add(t), this;
        }
        equals(t) {
            return t.min.equals(this.min) && t.max.equals(this.max);
        }
    }
    lt.prototype.isBox3 = !0;
    const ct = [new st(), new st(), new st(), new st(), new st(), new st(), new st(), new st()],
        ht = new st(),
        ut = new lt(),
        dt = new st(),
        pt = new st(),
        ft = new st(),
        mt = new st(),
        gt = new st(),
        vt = new st(),
        yt = new st(),
        _t = new st(),
        xt = new st(),
        wt = new st();
    function bt(t, e, n, i, r) {
        for (let s = 0, a = t.length - 3; s <= a; s += 3) {
            wt.fromArray(t, s);
            const a = r.x * Math.abs(wt.x) + r.y * Math.abs(wt.y) + r.z * Math.abs(wt.z),
                o = e.dot(wt),
                l = n.dot(wt),
                c = i.dot(wt);
            if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > a) return !1;
        }
        return !0;
    }
    const Mt = new lt(),
        St = new st(),
        Tt = new st(),
        Et = new st();
    class At {
        constructor(t = new st(), e = -1) {
            (this.center = t), (this.radius = e);
        }
        set(t, e) {
            return this.center.copy(t), (this.radius = e), this;
        }
        setFromPoints(t, e) {
            const n = this.center;
            void 0 !== e ? n.copy(e) : Mt.setFromPoints(t).getCenter(n);
            let i = 0;
            for (let e = 0, r = t.length; e < r; e++) i = Math.max(i, n.distanceToSquared(t[e]));
            return (this.radius = Math.sqrt(i)), this;
        }
        copy(t) {
            return this.center.copy(t.center), (this.radius = t.radius), this;
        }
        isEmpty() {
            return this.radius < 0;
        }
        makeEmpty() {
            return this.center.set(0, 0, 0), (this.radius = -1), this;
        }
        containsPoint(t) {
            return t.distanceToSquared(this.center) <= this.radius * this.radius;
        }
        distanceToPoint(t) {
            return t.distanceTo(this.center) - this.radius;
        }
        intersectsSphere(t) {
            const e = this.radius + t.radius;
            return t.center.distanceToSquared(this.center) <= e * e;
        }
        intersectsBox(t) {
            return t.intersectsSphere(this);
        }
        intersectsPlane(t) {
            return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
        }
        clampPoint(t, e) {
            const n = this.center.distanceToSquared(t);
            return (
                void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"), (e = new st())),
                e.copy(t),
                n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)),
                e
            );
        }
        getBoundingBox(t) {
            return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), (t = new lt())), this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
        }
        applyMatrix4(t) {
            return this.center.applyMatrix4(t), (this.radius = this.radius * t.getMaxScaleOnAxis()), this;
        }
        translate(t) {
            return this.center.add(t), this;
        }
        expandByPoint(t) {
            Et.subVectors(t, this.center);
            const e = Et.lengthSq();
            if (e > this.radius * this.radius) {
                const t = Math.sqrt(e),
                    n = 0.5 * (t - this.radius);
                this.center.add(Et.multiplyScalar(n / t)), (this.radius += n);
            }
            return this;
        }
        union(t) {
            return Tt.subVectors(t.center, this.center).normalize().multiplyScalar(t.radius), this.expandByPoint(St.copy(t.center).add(Tt)), this.expandByPoint(St.copy(t.center).sub(Tt)), this;
        }
        equals(t) {
            return t.center.equals(this.center) && t.radius === this.radius;
        }
        clone() {
            return new this.constructor().copy(this);
        }
    }
    const Lt = new st(),
        Rt = new st(),
        Ct = new st(),
        Pt = new st(),
        Dt = new st(),
        It = new st(),
        Nt = new st();
    class zt {
        constructor(t = new st(), e = new st(0, 0, -1)) {
            (this.origin = t), (this.direction = e);
        }
        set(t, e) {
            return this.origin.copy(t), this.direction.copy(e), this;
        }
        copy(t) {
            return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
        }
        at(t, e) {
            return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"), (e = new st())), e.copy(this.direction).multiplyScalar(t).add(this.origin);
        }
        lookAt(t) {
            return this.direction.copy(t).sub(this.origin).normalize(), this;
        }
        recast(t) {
            return this.origin.copy(this.at(t, Lt)), this;
        }
        closestPointToPoint(t, e) {
            void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), (e = new st())), e.subVectors(t, this.origin);
            const n = e.dot(this.direction);
            return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin);
        }
        distanceToPoint(t) {
            return Math.sqrt(this.distanceSqToPoint(t));
        }
        distanceSqToPoint(t) {
            const e = Lt.subVectors(t, this.origin).dot(this.direction);
            return e < 0 ? this.origin.distanceToSquared(t) : (Lt.copy(this.direction).multiplyScalar(e).add(this.origin), Lt.distanceToSquared(t));
        }
        distanceSqToSegment(t, e, n, i) {
            Rt.copy(t).add(e).multiplyScalar(0.5), Ct.copy(e).sub(t).normalize(), Pt.copy(this.origin).sub(Rt);
            const r = 0.5 * t.distanceTo(e),
                s = -this.direction.dot(Ct),
                a = Pt.dot(this.direction),
                o = -Pt.dot(Ct),
                l = Pt.lengthSq(),
                c = Math.abs(1 - s * s);
            let h, u, d, p;
            if (c > 0)
                if (((h = s * o - a), (u = s * a - o), (p = r * c), h >= 0))
                    if (u >= -p)
                        if (u <= p) {
                            const t = 1 / c;
                            (h *= t), (u *= t), (d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l);
                        } else (u = r), (h = Math.max(0, -(s * u + a))), (d = -h * h + u * (u + 2 * o) + l);
                    else (u = -r), (h = Math.max(0, -(s * u + a))), (d = -h * h + u * (u + 2 * o) + l);
                else
                    u <= -p
                        ? ((h = Math.max(0, -(-s * r + a))), (u = h > 0 ? -r : Math.min(Math.max(-r, -o), r)), (d = -h * h + u * (u + 2 * o) + l))
                        : u <= p
                        ? ((h = 0), (u = Math.min(Math.max(-r, -o), r)), (d = u * (u + 2 * o) + l))
                        : ((h = Math.max(0, -(s * r + a))), (u = h > 0 ? r : Math.min(Math.max(-r, -o), r)), (d = -h * h + u * (u + 2 * o) + l));
            else (u = s > 0 ? -r : r), (h = Math.max(0, -(s * u + a))), (d = -h * h + u * (u + 2 * o) + l);
            return n && n.copy(this.direction).multiplyScalar(h).add(this.origin), i && i.copy(Ct).multiplyScalar(u).add(Rt), d;
        }
        intersectSphere(t, e) {
            Lt.subVectors(t.center, this.origin);
            const n = Lt.dot(this.direction),
                i = Lt.dot(Lt) - n * n,
                r = t.radius * t.radius;
            if (i > r) return null;
            const s = Math.sqrt(r - i),
                a = n - s,
                o = n + s;
            return a < 0 && o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e);
        }
        intersectsSphere(t) {
            return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
        }
        distanceToPlane(t) {
            const e = t.normal.dot(this.direction);
            if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
            const n = -(this.origin.dot(t.normal) + t.constant) / e;
            return n >= 0 ? n : null;
        }
        intersectPlane(t, e) {
            const n = this.distanceToPlane(t);
            return null === n ? null : this.at(n, e);
        }
        intersectsPlane(t) {
            const e = t.distanceToPoint(this.origin);
            if (0 === e) return !0;
            return t.normal.dot(this.direction) * e < 0;
        }
        intersectBox(t, e) {
            let n, i, r, s, a, o;
            const l = 1 / this.direction.x,
                c = 1 / this.direction.y,
                h = 1 / this.direction.z,
                u = this.origin;
            return (
                l >= 0 ? ((n = (t.min.x - u.x) * l), (i = (t.max.x - u.x) * l)) : ((n = (t.max.x - u.x) * l), (i = (t.min.x - u.x) * l)),
                c >= 0 ? ((r = (t.min.y - u.y) * c), (s = (t.max.y - u.y) * c)) : ((r = (t.max.y - u.y) * c), (s = (t.min.y - u.y) * c)),
                n > s || r > i
                    ? null
                    : ((r > n || n != n) && (n = r),
                      (s < i || i != i) && (i = s),
                      h >= 0 ? ((a = (t.min.z - u.z) * h), (o = (t.max.z - u.z) * h)) : ((a = (t.max.z - u.z) * h), (o = (t.min.z - u.z) * h)),
                      n > o || a > i ? null : ((a > n || n != n) && (n = a), (o < i || i != i) && (i = o), i < 0 ? null : this.at(n >= 0 ? n : i, e)))
            );
        }
        intersectsBox(t) {
            return null !== this.intersectBox(t, Lt);
        }
        intersectTriangle(t, e, n, i, r) {
            Dt.subVectors(e, t), It.subVectors(n, t), Nt.crossVectors(Dt, It);
            let s,
                a = this.direction.dot(Nt);
            if (a > 0) {
                if (i) return null;
                s = 1;
            } else {
                if (!(a < 0)) return null;
                (s = -1), (a = -a);
            }
            Pt.subVectors(this.origin, t);
            const o = s * this.direction.dot(It.crossVectors(Pt, It));
            if (o < 0) return null;
            const l = s * this.direction.dot(Dt.cross(Pt));
            if (l < 0) return null;
            if (o + l > a) return null;
            const c = -s * Pt.dot(Nt);
            return c < 0 ? null : this.at(c / a, r);
        }
        applyMatrix4(t) {
            return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
        }
        equals(t) {
            return t.origin.equals(this.origin) && t.direction.equals(this.direction);
        }
        clone() {
            return new this.constructor().copy(this);
        }
    }
    class Ot {
        constructor() {
            (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
        }
        set(t, e, n, i, r, s, a, o, l, c, h, u, d, p, f, m) {
            const g = this.elements;
            return (g[0] = t), (g[4] = e), (g[8] = n), (g[12] = i), (g[1] = r), (g[5] = s), (g[9] = a), (g[13] = o), (g[2] = l), (g[6] = c), (g[10] = h), (g[14] = u), (g[3] = d), (g[7] = p), (g[11] = f), (g[15] = m), this;
        }
        identity() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        clone() {
            return new Ot().fromArray(this.elements);
        }
        copy(t) {
            const e = this.elements,
                n = t.elements;
            return (
                (e[0] = n[0]),
                (e[1] = n[1]),
                (e[2] = n[2]),
                (e[3] = n[3]),
                (e[4] = n[4]),
                (e[5] = n[5]),
                (e[6] = n[6]),
                (e[7] = n[7]),
                (e[8] = n[8]),
                (e[9] = n[9]),
                (e[10] = n[10]),
                (e[11] = n[11]),
                (e[12] = n[12]),
                (e[13] = n[13]),
                (e[14] = n[14]),
                (e[15] = n[15]),
                this
            );
        }
        copyPosition(t) {
            const e = this.elements,
                n = t.elements;
            return (e[12] = n[12]), (e[13] = n[13]), (e[14] = n[14]), this;
        }
        setFromMatrix3(t) {
            const e = t.elements;
            return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
        }
        extractBasis(t, e, n) {
            return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
        }
        makeBasis(t, e, n) {
            return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this;
        }
        extractRotation(t) {
            const e = this.elements,
                n = t.elements,
                i = 1 / Bt.setFromMatrixColumn(t, 0).length(),
                r = 1 / Bt.setFromMatrixColumn(t, 1).length(),
                s = 1 / Bt.setFromMatrixColumn(t, 2).length();
            return (
                (e[0] = n[0] * i),
                (e[1] = n[1] * i),
                (e[2] = n[2] * i),
                (e[3] = 0),
                (e[4] = n[4] * r),
                (e[5] = n[5] * r),
                (e[6] = n[6] * r),
                (e[7] = 0),
                (e[8] = n[8] * s),
                (e[9] = n[9] * s),
                (e[10] = n[10] * s),
                (e[11] = 0),
                (e[12] = 0),
                (e[13] = 0),
                (e[14] = 0),
                (e[15] = 1),
                this
            );
        }
        makeRotationFromEuler(t) {
            (t && t.isEuler) || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            const e = this.elements,
                n = t.x,
                i = t.y,
                r = t.z,
                s = Math.cos(n),
                a = Math.sin(n),
                o = Math.cos(i),
                l = Math.sin(i),
                c = Math.cos(r),
                h = Math.sin(r);
            if ("XYZ" === t.order) {
                const t = s * c,
                    n = s * h,
                    i = a * c,
                    r = a * h;
                (e[0] = o * c), (e[4] = -o * h), (e[8] = l), (e[1] = n + i * l), (e[5] = t - r * l), (e[9] = -a * o), (e[2] = r - t * l), (e[6] = i + n * l), (e[10] = s * o);
            } else if ("YXZ" === t.order) {
                const t = o * c,
                    n = o * h,
                    i = l * c,
                    r = l * h;
                (e[0] = t + r * a), (e[4] = i * a - n), (e[8] = s * l), (e[1] = s * h), (e[5] = s * c), (e[9] = -a), (e[2] = n * a - i), (e[6] = r + t * a), (e[10] = s * o);
            } else if ("ZXY" === t.order) {
                const t = o * c,
                    n = o * h,
                    i = l * c,
                    r = l * h;
                (e[0] = t - r * a), (e[4] = -s * h), (e[8] = i + n * a), (e[1] = n + i * a), (e[5] = s * c), (e[9] = r - t * a), (e[2] = -s * l), (e[6] = a), (e[10] = s * o);
            } else if ("ZYX" === t.order) {
                const t = s * c,
                    n = s * h,
                    i = a * c,
                    r = a * h;
                (e[0] = o * c), (e[4] = i * l - n), (e[8] = t * l + r), (e[1] = o * h), (e[5] = r * l + t), (e[9] = n * l - i), (e[2] = -l), (e[6] = a * o), (e[10] = s * o);
            } else if ("YZX" === t.order) {
                const t = s * o,
                    n = s * l,
                    i = a * o,
                    r = a * l;
                (e[0] = o * c), (e[4] = r - t * h), (e[8] = i * h + n), (e[1] = h), (e[5] = s * c), (e[9] = -a * c), (e[2] = -l * c), (e[6] = n * h + i), (e[10] = t - r * h);
            } else if ("XZY" === t.order) {
                const t = s * o,
                    n = s * l,
                    i = a * o,
                    r = a * l;
                (e[0] = o * c), (e[4] = -h), (e[8] = l * c), (e[1] = t * h + r), (e[5] = s * c), (e[9] = n * h - i), (e[2] = i * h - n), (e[6] = a * c), (e[10] = r * h + t);
            }
            return (e[3] = 0), (e[7] = 0), (e[11] = 0), (e[12] = 0), (e[13] = 0), (e[14] = 0), (e[15] = 1), this;
        }
        makeRotationFromQuaternion(t) {
            return this.compose(Ht, t, Ut);
        }
        lookAt(t, e, n) {
            const i = this.elements;
            return (
                Vt.subVectors(t, e),
                0 === Vt.lengthSq() && (Vt.z = 1),
                Vt.normalize(),
                kt.crossVectors(n, Vt),
                0 === kt.lengthSq() && (1 === Math.abs(n.z) ? (Vt.x += 1e-4) : (Vt.z += 1e-4), Vt.normalize(), kt.crossVectors(n, Vt)),
                kt.normalize(),
                Gt.crossVectors(Vt, kt),
                (i[0] = kt.x),
                (i[4] = Gt.x),
                (i[8] = Vt.x),
                (i[1] = kt.y),
                (i[5] = Gt.y),
                (i[9] = Vt.y),
                (i[2] = kt.z),
                (i[6] = Gt.z),
                (i[10] = Vt.z),
                this
            );
        }
        multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t);
        }
        premultiply(t) {
            return this.multiplyMatrices(t, this);
        }
        multiplyMatrices(t, e) {
            const n = t.elements,
                i = e.elements,
                r = this.elements,
                s = n[0],
                a = n[4],
                o = n[8],
                l = n[12],
                c = n[1],
                h = n[5],
                u = n[9],
                d = n[13],
                p = n[2],
                f = n[6],
                m = n[10],
                g = n[14],
                v = n[3],
                y = n[7],
                _ = n[11],
                x = n[15],
                w = i[0],
                b = i[4],
                M = i[8],
                S = i[12],
                T = i[1],
                E = i[5],
                A = i[9],
                L = i[13],
                R = i[2],
                C = i[6],
                P = i[10],
                D = i[14],
                I = i[3],
                N = i[7],
                z = i[11],
                O = i[15];
            return (
                (r[0] = s * w + a * T + o * R + l * I),
                (r[4] = s * b + a * E + o * C + l * N),
                (r[8] = s * M + a * A + o * P + l * z),
                (r[12] = s * S + a * L + o * D + l * O),
                (r[1] = c * w + h * T + u * R + d * I),
                (r[5] = c * b + h * E + u * C + d * N),
                (r[9] = c * M + h * A + u * P + d * z),
                (r[13] = c * S + h * L + u * D + d * O),
                (r[2] = p * w + f * T + m * R + g * I),
                (r[6] = p * b + f * E + m * C + g * N),
                (r[10] = p * M + f * A + m * P + g * z),
                (r[14] = p * S + f * L + m * D + g * O),
                (r[3] = v * w + y * T + _ * R + x * I),
                (r[7] = v * b + y * E + _ * C + x * N),
                (r[11] = v * M + y * A + _ * P + x * z),
                (r[15] = v * S + y * L + _ * D + x * O),
                this
            );
        }
        multiplyScalar(t) {
            const e = this.elements;
            return (e[0] *= t), (e[4] *= t), (e[8] *= t), (e[12] *= t), (e[1] *= t), (e[5] *= t), (e[9] *= t), (e[13] *= t), (e[2] *= t), (e[6] *= t), (e[10] *= t), (e[14] *= t), (e[3] *= t), (e[7] *= t), (e[11] *= t), (e[15] *= t), this;
        }
        determinant() {
            const t = this.elements,
                e = t[0],
                n = t[4],
                i = t[8],
                r = t[12],
                s = t[1],
                a = t[5],
                o = t[9],
                l = t[13],
                c = t[2],
                h = t[6],
                u = t[10],
                d = t[14];
            return (
                t[3] * (+r * o * h - i * l * h - r * a * u + n * l * u + i * a * d - n * o * d) +
                t[7] * (+e * o * d - e * l * u + r * s * u - i * s * d + i * l * c - r * o * c) +
                t[11] * (+e * l * h - e * a * d - r * s * h + n * s * d + r * a * c - n * l * c) +
                t[15] * (-i * a * c - e * o * h + e * a * u + i * s * h - n * s * u + n * o * c)
            );
        }
        transpose() {
            const t = this.elements;
            let e;
            return (
                (e = t[1]),
                (t[1] = t[4]),
                (t[4] = e),
                (e = t[2]),
                (t[2] = t[8]),
                (t[8] = e),
                (e = t[6]),
                (t[6] = t[9]),
                (t[9] = e),
                (e = t[3]),
                (t[3] = t[12]),
                (t[12] = e),
                (e = t[7]),
                (t[7] = t[13]),
                (t[13] = e),
                (e = t[11]),
                (t[11] = t[14]),
                (t[14] = e),
                this
            );
        }
        setPosition(t, e, n) {
            const i = this.elements;
            return t.isVector3 ? ((i[12] = t.x), (i[13] = t.y), (i[14] = t.z)) : ((i[12] = t), (i[13] = e), (i[14] = n)), this;
        }
        invert() {
            const t = this.elements,
                e = t[0],
                n = t[1],
                i = t[2],
                r = t[3],
                s = t[4],
                a = t[5],
                o = t[6],
                l = t[7],
                c = t[8],
                h = t[9],
                u = t[10],
                d = t[11],
                p = t[12],
                f = t[13],
                m = t[14],
                g = t[15],
                v = h * m * l - f * u * l + f * o * d - a * m * d - h * o * g + a * u * g,
                y = p * u * l - c * m * l - p * o * d + s * m * d + c * o * g - s * u * g,
                _ = c * f * l - p * h * l + p * a * d - s * f * d - c * a * g + s * h * g,
                x = p * h * o - c * f * o - p * a * u + s * f * u + c * a * m - s * h * m,
                w = e * v + n * y + i * _ + r * x;
            if (0 === w) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const b = 1 / w;
            return (
                (t[0] = v * b),
                (t[1] = (f * u * r - h * m * r - f * i * d + n * m * d + h * i * g - n * u * g) * b),
                (t[2] = (a * m * r - f * o * r + f * i * l - n * m * l - a * i * g + n * o * g) * b),
                (t[3] = (h * o * r - a * u * r - h * i * l + n * u * l + a * i * d - n * o * d) * b),
                (t[4] = y * b),
                (t[5] = (c * m * r - p * u * r + p * i * d - e * m * d - c * i * g + e * u * g) * b),
                (t[6] = (p * o * r - s * m * r - p * i * l + e * m * l + s * i * g - e * o * g) * b),
                (t[7] = (s * u * r - c * o * r + c * i * l - e * u * l - s * i * d + e * o * d) * b),
                (t[8] = _ * b),
                (t[9] = (p * h * r - c * f * r - p * n * d + e * f * d + c * n * g - e * h * g) * b),
                (t[10] = (s * f * r - p * a * r + p * n * l - e * f * l - s * n * g + e * a * g) * b),
                (t[11] = (c * a * r - s * h * r - c * n * l + e * h * l + s * n * d - e * a * d) * b),
                (t[12] = x * b),
                (t[13] = (c * f * i - p * h * i + p * n * u - e * f * u - c * n * m + e * h * m) * b),
                (t[14] = (p * a * i - s * f * i - p * n * o + e * f * o + s * n * m - e * a * m) * b),
                (t[15] = (s * h * i - c * a * i + c * n * o - e * h * o - s * n * u + e * a * u) * b),
                this
            );
        }
        scale(t) {
            const e = this.elements,
                n = t.x,
                i = t.y,
                r = t.z;
            return (e[0] *= n), (e[4] *= i), (e[8] *= r), (e[1] *= n), (e[5] *= i), (e[9] *= r), (e[2] *= n), (e[6] *= i), (e[10] *= r), (e[3] *= n), (e[7] *= i), (e[11] *= r), this;
        }
        getMaxScaleOnAxis() {
            const t = this.elements,
                e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
                n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
                i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
            return Math.sqrt(Math.max(e, n, i));
        }
        makeTranslation(t, e, n) {
            return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
        }
        makeRotationX(t) {
            const e = Math.cos(t),
                n = Math.sin(t);
            return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
        }
        makeRotationY(t) {
            const e = Math.cos(t),
                n = Math.sin(t);
            return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
        }
        makeRotationZ(t) {
            const e = Math.cos(t),
                n = Math.sin(t);
            return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        makeRotationAxis(t, e) {
            const n = Math.cos(e),
                i = Math.sin(e),
                r = 1 - n,
                s = t.x,
                a = t.y,
                o = t.z,
                l = r * s,
                c = r * a;
            return this.set(l * s + n, l * a - i * o, l * o + i * a, 0, l * a + i * o, c * a + n, c * o - i * s, 0, l * o - i * a, c * o + i * s, r * o * o + n, 0, 0, 0, 0, 1), this;
        }
        makeScale(t, e, n) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
        }
        makeShear(t, e, n, i, r, s) {
            return this.set(1, n, r, 0, t, 1, s, 0, e, i, 1, 0, 0, 0, 0, 1), this;
        }
        compose(t, e, n) {
            const i = this.elements,
                r = e._x,
                s = e._y,
                a = e._z,
                o = e._w,
                l = r + r,
                c = s + s,
                h = a + a,
                u = r * l,
                d = r * c,
                p = r * h,
                f = s * c,
                m = s * h,
                g = a * h,
                v = o * l,
                y = o * c,
                _ = o * h,
                x = n.x,
                w = n.y,
                b = n.z;
            return (
                (i[0] = (1 - (f + g)) * x),
                (i[1] = (d + _) * x),
                (i[2] = (p - y) * x),
                (i[3] = 0),
                (i[4] = (d - _) * w),
                (i[5] = (1 - (u + g)) * w),
                (i[6] = (m + v) * w),
                (i[7] = 0),
                (i[8] = (p + y) * b),
                (i[9] = (m - v) * b),
                (i[10] = (1 - (u + f)) * b),
                (i[11] = 0),
                (i[12] = t.x),
                (i[13] = t.y),
                (i[14] = t.z),
                (i[15] = 1),
                this
            );
        }
        decompose(t, e, n) {
            const i = this.elements;
            let r = Bt.set(i[0], i[1], i[2]).length();
            const s = Bt.set(i[4], i[5], i[6]).length(),
                a = Bt.set(i[8], i[9], i[10]).length();
            this.determinant() < 0 && (r = -r), (t.x = i[12]), (t.y = i[13]), (t.z = i[14]), Ft.copy(this);
            const o = 1 / r,
                l = 1 / s,
                c = 1 / a;
            return (
                (Ft.elements[0] *= o),
                (Ft.elements[1] *= o),
                (Ft.elements[2] *= o),
                (Ft.elements[4] *= l),
                (Ft.elements[5] *= l),
                (Ft.elements[6] *= l),
                (Ft.elements[8] *= c),
                (Ft.elements[9] *= c),
                (Ft.elements[10] *= c),
                e.setFromRotationMatrix(Ft),
                (n.x = r),
                (n.y = s),
                (n.z = a),
                this
            );
        }
        makePerspective(t, e, n, i, r, s) {
            void 0 === s && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
            const a = this.elements,
                o = (2 * r) / (e - t),
                l = (2 * r) / (n - i),
                c = (e + t) / (e - t),
                h = (n + i) / (n - i),
                u = -(s + r) / (s - r),
                d = (-2 * s * r) / (s - r);
            return (a[0] = o), (a[4] = 0), (a[8] = c), (a[12] = 0), (a[1] = 0), (a[5] = l), (a[9] = h), (a[13] = 0), (a[2] = 0), (a[6] = 0), (a[10] = u), (a[14] = d), (a[3] = 0), (a[7] = 0), (a[11] = -1), (a[15] = 0), this;
        }
        makeOrthographic(t, e, n, i, r, s) {
            const a = this.elements,
                o = 1 / (e - t),
                l = 1 / (n - i),
                c = 1 / (s - r),
                h = (e + t) * o,
                u = (n + i) * l,
                d = (s + r) * c;
            return (a[0] = 2 * o), (a[4] = 0), (a[8] = 0), (a[12] = -h), (a[1] = 0), (a[5] = 2 * l), (a[9] = 0), (a[13] = -u), (a[2] = 0), (a[6] = 0), (a[10] = -2 * c), (a[14] = -d), (a[3] = 0), (a[7] = 0), (a[11] = 0), (a[15] = 1), this;
        }
        equals(t) {
            const e = this.elements,
                n = t.elements;
            for (let t = 0; t < 16; t++) if (e[t] !== n[t]) return !1;
            return !0;
        }
        fromArray(t, e = 0) {
            for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
            return this;
        }
        toArray(t = [], e = 0) {
            const n = this.elements;
            return (
                (t[e] = n[0]),
                (t[e + 1] = n[1]),
                (t[e + 2] = n[2]),
                (t[e + 3] = n[3]),
                (t[e + 4] = n[4]),
                (t[e + 5] = n[5]),
                (t[e + 6] = n[6]),
                (t[e + 7] = n[7]),
                (t[e + 8] = n[8]),
                (t[e + 9] = n[9]),
                (t[e + 10] = n[10]),
                (t[e + 11] = n[11]),
                (t[e + 12] = n[12]),
                (t[e + 13] = n[13]),
                (t[e + 14] = n[14]),
                (t[e + 15] = n[15]),
                t
            );
        }
    }
    Ot.prototype.isMatrix4 = !0;
    const Bt = new st(),
        Ft = new Ot(),
        Ht = new st(0, 0, 0),
        Ut = new st(1, 1, 1),
        kt = new st(),
        Gt = new st(),
        Vt = new st(),
        Wt = new Ot(),
        jt = new rt();
    class qt {
        constructor(t = 0, e = 0, n = 0, i = qt.DefaultOrder) {
            (this._x = t), (this._y = e), (this._z = n), (this._order = i);
        }
        get x() {
            return this._x;
        }
        set x(t) {
            (this._x = t), this._onChangeCallback();
        }
        get y() {
            return this._y;
        }
        set y(t) {
            (this._y = t), this._onChangeCallback();
        }
        get z() {
            return this._z;
        }
        set z(t) {
            (this._z = t), this._onChangeCallback();
        }
        get order() {
            return this._order;
        }
        set order(t) {
            (this._order = t), this._onChangeCallback();
        }
        set(t, e, n, i) {
            return (this._x = t), (this._y = e), (this._z = n), (this._order = i || this._order), this._onChangeCallback(), this;
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._order);
        }
        copy(t) {
            return (this._x = t._x), (this._y = t._y), (this._z = t._z), (this._order = t._order), this._onChangeCallback(), this;
        }
        setFromRotationMatrix(t, e, n) {
            const i = t.elements,
                r = i[0],
                s = i[4],
                a = i[8],
                o = i[1],
                l = i[5],
                c = i[9],
                h = i[2],
                u = i[6],
                d = i[10];
            switch ((e = e || this._order)) {
                case "XYZ":
                    (this._y = Math.asin(W(a, -1, 1))), Math.abs(a) < 0.9999999 ? ((this._x = Math.atan2(-c, d)), (this._z = Math.atan2(-s, r))) : ((this._x = Math.atan2(u, l)), (this._z = 0));
                    break;
                case "YXZ":
                    (this._x = Math.asin(-W(c, -1, 1))), Math.abs(c) < 0.9999999 ? ((this._y = Math.atan2(a, d)), (this._z = Math.atan2(o, l))) : ((this._y = Math.atan2(-h, r)), (this._z = 0));
                    break;
                case "ZXY":
                    (this._x = Math.asin(W(u, -1, 1))), Math.abs(u) < 0.9999999 ? ((this._y = Math.atan2(-h, d)), (this._z = Math.atan2(-s, l))) : ((this._y = 0), (this._z = Math.atan2(o, r)));
                    break;
                case "ZYX":
                    (this._y = Math.asin(-W(h, -1, 1))), Math.abs(h) < 0.9999999 ? ((this._x = Math.atan2(u, d)), (this._z = Math.atan2(o, r))) : ((this._x = 0), (this._z = Math.atan2(-s, l)));
                    break;
                case "YZX":
                    (this._z = Math.asin(W(o, -1, 1))), Math.abs(o) < 0.9999999 ? ((this._x = Math.atan2(-c, l)), (this._y = Math.atan2(-h, r))) : ((this._x = 0), (this._y = Math.atan2(a, d)));
                    break;
                case "XZY":
                    (this._z = Math.asin(-W(s, -1, 1))), Math.abs(s) < 0.9999999 ? ((this._x = Math.atan2(u, l)), (this._y = Math.atan2(a, r))) : ((this._x = Math.atan2(-c, d)), (this._y = 0));
                    break;
                default:
                    console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
            }
            return (this._order = e), !1 !== n && this._onChangeCallback(), this;
        }
        setFromQuaternion(t, e, n) {
            return Wt.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Wt, e, n);
        }
        setFromVector3(t, e) {
            return this.set(t.x, t.y, t.z, e || this._order);
        }
        reorder(t) {
            return jt.setFromEuler(this), this.setFromQuaternion(jt, t);
        }
        equals(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
        }
        fromArray(t) {
            return (this._x = t[0]), (this._y = t[1]), (this._z = t[2]), void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this;
        }
        toArray(t = [], e = 0) {
            return (t[e] = this._x), (t[e + 1] = this._y), (t[e + 2] = this._z), (t[e + 3] = this._order), t;
        }
        toVector3(t) {
            return t ? t.set(this._x, this._y, this._z) : new st(this._x, this._y, this._z);
        }
        _onChange(t) {
            return (this._onChangeCallback = t), this;
        }
        _onChangeCallback() {}
    }
    (qt.prototype.isEuler = !0), (qt.DefaultOrder = "XYZ"), (qt.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"]);
    class Xt {
        constructor() {
            this.mask = 1;
        }
        set(t) {
            this.mask = (1 << t) | 0;
        }
        enable(t) {
            this.mask |= (1 << t) | 0;
        }
        enableAll() {
            this.mask = -1;
        }
        toggle(t) {
            this.mask ^= (1 << t) | 0;
        }
        disable(t) {
            this.mask &= ~((1 << t) | 0);
        }
        disableAll() {
            this.mask = 0;
        }
        test(t) {
            return 0 != (this.mask & t.mask);
        }
    }
    let Yt = 0;
    const Zt = new st(),
        Jt = new rt(),
        Qt = new Ot(),
        Kt = new st(),
        $t = new st(),
        te = new st(),
        ee = new rt(),
        ne = new st(1, 0, 0),
        ie = new st(0, 1, 0),
        re = new st(0, 0, 1),
        se = { type: "added" },
        ae = { type: "removed" };
    class oe extends H {
        constructor() {
            super(), Object.defineProperty(this, "id", { value: Yt++ }), (this.uuid = V()), (this.name = ""), (this.type = "Object3D"), (this.parent = null), (this.children = []), (this.up = oe.DefaultUp.clone());
            const t = new st(),
                e = new qt(),
                n = new rt(),
                i = new st(1, 1, 1);
            e._onChange(function () {
                n.setFromEuler(e, !1);
            }),
                n._onChange(function () {
                    e.setFromQuaternion(n, void 0, !1);
                }),
                Object.defineProperties(this, {
                    position: { configurable: !0, enumerable: !0, value: t },
                    rotation: { configurable: !0, enumerable: !0, value: e },
                    quaternion: { configurable: !0, enumerable: !0, value: n },
                    scale: { configurable: !0, enumerable: !0, value: i },
                    modelViewMatrix: { value: new Ot() },
                    normalMatrix: { value: new J() },
                }),
                (this.matrix = new Ot()),
                (this.matrixWorld = new Ot()),
                (this.matrixAutoUpdate = oe.DefaultMatrixAutoUpdate),
                (this.matrixWorldNeedsUpdate = !1),
                (this.layers = new Xt()),
                (this.visible = !0),
                (this.castShadow = !1),
                (this.receiveShadow = !1),
                (this.frustumCulled = !0),
                (this.renderOrder = 0),
                (this.animations = []),
                (this.userData = {});
        }
        onBeforeRender() {}
        onAfterRender() {}
        applyMatrix4(t) {
            this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
        }
        applyQuaternion(t) {
            return this.quaternion.premultiply(t), this;
        }
        setRotationFromAxisAngle(t, e) {
            this.quaternion.setFromAxisAngle(t, e);
        }
        setRotationFromEuler(t) {
            this.quaternion.setFromEuler(t, !0);
        }
        setRotationFromMatrix(t) {
            this.quaternion.setFromRotationMatrix(t);
        }
        setRotationFromQuaternion(t) {
            this.quaternion.copy(t);
        }
        rotateOnAxis(t, e) {
            return Jt.setFromAxisAngle(t, e), this.quaternion.multiply(Jt), this;
        }
        rotateOnWorldAxis(t, e) {
            return Jt.setFromAxisAngle(t, e), this.quaternion.premultiply(Jt), this;
        }
        rotateX(t) {
            return this.rotateOnAxis(ne, t);
        }
        rotateY(t) {
            return this.rotateOnAxis(ie, t);
        }
        rotateZ(t) {
            return this.rotateOnAxis(re, t);
        }
        translateOnAxis(t, e) {
            return Zt.copy(t).applyQuaternion(this.quaternion), this.position.add(Zt.multiplyScalar(e)), this;
        }
        translateX(t) {
            return this.translateOnAxis(ne, t);
        }
        translateY(t) {
            return this.translateOnAxis(ie, t);
        }
        translateZ(t) {
            return this.translateOnAxis(re, t);
        }
        localToWorld(t) {
            return t.applyMatrix4(this.matrixWorld);
        }
        worldToLocal(t) {
            return t.applyMatrix4(Qt.copy(this.matrixWorld).invert());
        }
        lookAt(t, e, n) {
            t.isVector3 ? Kt.copy(t) : Kt.set(t, e, n);
            const i = this.parent;
            this.updateWorldMatrix(!0, !1),
                $t.setFromMatrixPosition(this.matrixWorld),
                this.isCamera || this.isLight ? Qt.lookAt($t, Kt, this.up) : Qt.lookAt(Kt, $t, this.up),
                this.quaternion.setFromRotationMatrix(Qt),
                i && (Qt.extractRotation(i.matrixWorld), Jt.setFromRotationMatrix(Qt), this.quaternion.premultiply(Jt.invert()));
        }
        add(t) {
            if (arguments.length > 1) {
                for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
                return this;
            }
            return t === this
                ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this)
                : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), (t.parent = this), this.children.push(t), t.dispatchEvent(se)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
        }
        remove(t) {
            if (arguments.length > 1) {
                for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
                return this;
            }
            const e = this.children.indexOf(t);
            return -1 !== e && ((t.parent = null), this.children.splice(e, 1), t.dispatchEvent(ae)), this;
        }
        removeFromParent() {
            const t = this.parent;
            return null !== t && t.remove(this), this;
        }
        clear() {
            for (let t = 0; t < this.children.length; t++) {
                const e = this.children[t];
                (e.parent = null), e.dispatchEvent(ae);
            }
            return (this.children.length = 0), this;
        }
        attach(t) {
            return (
                this.updateWorldMatrix(!0, !1),
                Qt.copy(this.matrixWorld).invert(),
                null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), Qt.multiply(t.parent.matrixWorld)),
                t.applyMatrix4(Qt),
                this.add(t),
                t.updateWorldMatrix(!1, !0),
                this
            );
        }
        getObjectById(t) {
            return this.getObjectByProperty("id", t);
        }
        getObjectByName(t) {
            return this.getObjectByProperty("name", t);
        }
        getObjectByProperty(t, e) {
            if (this[t] === e) return this;
            for (let n = 0, i = this.children.length; n < i; n++) {
                const i = this.children[n].getObjectByProperty(t, e);
                if (void 0 !== i) return i;
            }
        }
        getWorldPosition(t) {
            return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), (t = new st())), this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
        }
        getWorldQuaternion(t) {
            return void 0 === t && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), (t = new rt())), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose($t, t, te), t;
        }
        getWorldScale(t) {
            return void 0 === t && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), (t = new st())), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose($t, ee, t), t;
        }
        getWorldDirection(t) {
            void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), (t = new st())), this.updateWorldMatrix(!0, !1);
            const e = this.matrixWorld.elements;
            return t.set(e[8], e[9], e[10]).normalize();
        }
        raycast() {}
        traverse(t) {
            t(this);
            const e = this.children;
            for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t);
        }
        traverseVisible(t) {
            if (!1 === this.visible) return;
            t(this);
            const e = this.children;
            for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t);
        }
        traverseAncestors(t) {
            const e = this.parent;
            null !== e && (t(e), e.traverseAncestors(t));
        }
        updateMatrix() {
            this.matrix.compose(this.position, this.quaternion, this.scale), (this.matrixWorldNeedsUpdate = !0);
        }
        updateMatrixWorld(t) {
            this.matrixAutoUpdate && this.updateMatrix(),
                (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), (this.matrixWorldNeedsUpdate = !1), (t = !0));
            const e = this.children;
            for (let n = 0, i = e.length; n < i; n++) e[n].updateMatrixWorld(t);
        }
        updateWorldMatrix(t, e) {
            const n = this.parent;
            if (
                (!0 === t && null !== n && n.updateWorldMatrix(!0, !1),
                this.matrixAutoUpdate && this.updateMatrix(),
                null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
                !0 === e)
            ) {
                const t = this.children;
                for (let e = 0, n = t.length; e < n; e++) t[e].updateWorldMatrix(!1, !0);
            }
        }
        toJSON(t) {
            const e = void 0 === t || "string" == typeof t,
                n = {};
            e && ((t = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {} }), (n.metadata = { version: 4.5, type: "Object", generator: "Object3D.toJSON" }));
            const i = {};
            function r(e, n) {
                return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid;
            }
            if (
                ((i.uuid = this.uuid),
                (i.type = this.type),
                "" !== this.name && (i.name = this.name),
                !0 === this.castShadow && (i.castShadow = !0),
                !0 === this.receiveShadow && (i.receiveShadow = !0),
                !1 === this.visible && (i.visible = !1),
                !1 === this.frustumCulled && (i.frustumCulled = !1),
                0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
                "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData),
                (i.layers = this.layers.mask),
                (i.matrix = this.matrix.toArray()),
                !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
                this.isInstancedMesh && ((i.type = "InstancedMesh"), (i.count = this.count), (i.instanceMatrix = this.instanceMatrix.toJSON()), null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())),
                this.isMesh || this.isLine || this.isPoints)
            ) {
                i.geometry = r(t.geometries, this.geometry);
                const e = this.geometry.parameters;
                if (void 0 !== e && void 0 !== e.shapes) {
                    const n = e.shapes;
                    if (Array.isArray(n))
                        for (let e = 0, i = n.length; e < i; e++) {
                            const i = n[e];
                            r(t.shapes, i);
                        }
                    else r(t.shapes, n);
                }
            }
            if ((this.isSkinnedMesh && ((i.bindMode = this.bindMode), (i.bindMatrix = this.bindMatrix.toArray()), void 0 !== this.skeleton && (r(t.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))), void 0 !== this.material))
                if (Array.isArray(this.material)) {
                    const e = [];
                    for (let n = 0, i = this.material.length; n < i; n++) e.push(r(t.materials, this.material[n]));
                    i.material = e;
                } else i.material = r(t.materials, this.material);
            if (this.children.length > 0) {
                i.children = [];
                for (let e = 0; e < this.children.length; e++) i.children.push(this.children[e].toJSON(t).object);
            }
            if (this.animations.length > 0) {
                i.animations = [];
                for (let e = 0; e < this.animations.length; e++) {
                    const n = this.animations[e];
                    i.animations.push(r(t.animations, n));
                }
            }
            if (e) {
                const e = s(t.geometries),
                    i = s(t.materials),
                    r = s(t.textures),
                    a = s(t.images),
                    o = s(t.shapes),
                    l = s(t.skeletons),
                    c = s(t.animations);
                e.length > 0 && (n.geometries = e),
                    i.length > 0 && (n.materials = i),
                    r.length > 0 && (n.textures = r),
                    a.length > 0 && (n.images = a),
                    o.length > 0 && (n.shapes = o),
                    l.length > 0 && (n.skeletons = l),
                    c.length > 0 && (n.animations = c);
            }
            return (n.object = i), n;
            function s(t) {
                const e = [];
                for (const n in t) {
                    const i = t[n];
                    delete i.metadata, e.push(i);
                }
                return e;
            }
        }
        clone(t) {
            return new this.constructor().copy(this, t);
        }
        copy(t, e = !0) {
            if (
                ((this.name = t.name),
                this.up.copy(t.up),
                this.position.copy(t.position),
                (this.rotation.order = t.rotation.order),
                this.quaternion.copy(t.quaternion),
                this.scale.copy(t.scale),
                this.matrix.copy(t.matrix),
                this.matrixWorld.copy(t.matrixWorld),
                (this.matrixAutoUpdate = t.matrixAutoUpdate),
                (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
                (this.layers.mask = t.layers.mask),
                (this.visible = t.visible),
                (this.castShadow = t.castShadow),
                (this.receiveShadow = t.receiveShadow),
                (this.frustumCulled = t.frustumCulled),
                (this.renderOrder = t.renderOrder),
                (this.userData = JSON.parse(JSON.stringify(t.userData))),
                !0 === e)
            )
                for (let e = 0; e < t.children.length; e++) {
                    const n = t.children[e];
                    this.add(n.clone());
                }
            return this;
        }
    }
    (oe.DefaultUp = new st(0, 1, 0)), (oe.DefaultMatrixAutoUpdate = !0), (oe.prototype.isObject3D = !0);
    const le = new st(),
        ce = new st(),
        he = new J();
    class ue {
        constructor(t = new st(1, 0, 0), e = 0) {
            (this.normal = t), (this.constant = e);
        }
        set(t, e) {
            return this.normal.copy(t), (this.constant = e), this;
        }
        setComponents(t, e, n, i) {
            return this.normal.set(t, e, n), (this.constant = i), this;
        }
        setFromNormalAndCoplanarPoint(t, e) {
            return this.normal.copy(t), (this.constant = -e.dot(this.normal)), this;
        }
        setFromCoplanarPoints(t, e, n) {
            const i = le.subVectors(n, e).cross(ce.subVectors(t, e)).normalize();
            return this.setFromNormalAndCoplanarPoint(i, t), this;
        }
        copy(t) {
            return this.normal.copy(t.normal), (this.constant = t.constant), this;
        }
        normalize() {
            const t = 1 / this.normal.length();
            return this.normal.multiplyScalar(t), (this.constant *= t), this;
        }
        negate() {
            return (this.constant *= -1), this.normal.negate(), this;
        }
        distanceToPoint(t) {
            return this.normal.dot(t) + this.constant;
        }
        distanceToSphere(t) {
            return this.distanceToPoint(t.center) - t.radius;
        }
        projectPoint(t, e) {
            return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"), (e = new st())), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t);
        }
        intersectLine(t, e) {
            void 0 === e && (console.warn("THREE.Plane: .intersectLine() target is now required"), (e = new st()));
            const n = t.delta(le),
                i = this.normal.dot(n);
            if (0 === i) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
            const r = -(t.start.dot(this.normal) + this.constant) / i;
            return r < 0 || r > 1 ? null : e.copy(n).multiplyScalar(r).add(t.start);
        }
        intersectsLine(t) {
            const e = this.distanceToPoint(t.start),
                n = this.distanceToPoint(t.end);
            return (e < 0 && n > 0) || (n < 0 && e > 0);
        }
        intersectsBox(t) {
            return t.intersectsPlane(this);
        }
        intersectsSphere(t) {
            return t.intersectsPlane(this);
        }
        coplanarPoint(t) {
            return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), (t = new st())), t.copy(this.normal).multiplyScalar(-this.constant);
        }
        applyMatrix4(t, e) {
            const n = e || he.getNormalMatrix(t),
                i = this.coplanarPoint(le).applyMatrix4(t),
                r = this.normal.applyMatrix3(n).normalize();
            return (this.constant = -i.dot(r)), this;
        }
        translate(t) {
            return (this.constant -= t.dot(this.normal)), this;
        }
        equals(t) {
            return t.normal.equals(this.normal) && t.constant === this.constant;
        }
        clone() {
            return new this.constructor().copy(this);
        }
    }
    ue.prototype.isPlane = !0;
    const de = new st(),
        pe = new st(),
        fe = new st(),
        me = new st(),
        ge = new st(),
        ve = new st(),
        ye = new st(),
        _e = new st(),
        xe = new st(),
        we = new st();
    class be {
        constructor(t = new st(), e = new st(), n = new st()) {
            (this.a = t), (this.b = e), (this.c = n);
        }
        static getNormal(t, e, n, i) {
            void 0 === i && (console.warn("THREE.Triangle: .getNormal() target is now required"), (i = new st())), i.subVectors(n, e), de.subVectors(t, e), i.cross(de);
            const r = i.lengthSq();
            return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
        }
        static getBarycoord(t, e, n, i, r) {
            de.subVectors(i, e), pe.subVectors(n, e), fe.subVectors(t, e);
            const s = de.dot(de),
                a = de.dot(pe),
                o = de.dot(fe),
                l = pe.dot(pe),
                c = pe.dot(fe),
                h = s * l - a * a;
            if ((void 0 === r && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), (r = new st())), 0 === h)) return r.set(-2, -1, -1);
            const u = 1 / h,
                d = (l * o - a * c) * u,
                p = (s * c - a * o) * u;
            return r.set(1 - d - p, p, d);
        }
        static containsPoint(t, e, n, i) {
            return this.getBarycoord(t, e, n, i, me), me.x >= 0 && me.y >= 0 && me.x + me.y <= 1;
        }
        static getUV(t, e, n, i, r, s, a, o) {
            return this.getBarycoord(t, e, n, i, me), o.set(0, 0), o.addScaledVector(r, me.x), o.addScaledVector(s, me.y), o.addScaledVector(a, me.z), o;
        }
        static isFrontFacing(t, e, n, i) {
            return de.subVectors(n, e), pe.subVectors(t, e), de.cross(pe).dot(i) < 0;
        }
        set(t, e, n) {
            return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
        }
        setFromPointsAndIndices(t, e, n, i) {
            return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
        }
        clone() {
            return new this.constructor().copy(this);
        }
        copy(t) {
            return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
        }
        getArea() {
            return de.subVectors(this.c, this.b), pe.subVectors(this.a, this.b), 0.5 * de.cross(pe).length();
        }
        getMidpoint(t) {
            return (
                void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), (t = new st())),
                t
                    .addVectors(this.a, this.b)
                    .add(this.c)
                    .multiplyScalar(1 / 3)
            );
        }
        getNormal(t) {
            return be.getNormal(this.a, this.b, this.c, t);
        }
        getPlane(t) {
            return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"), (t = new ue())), t.setFromCoplanarPoints(this.a, this.b, this.c);
        }
        getBarycoord(t, e) {
            return be.getBarycoord(t, this.a, this.b, this.c, e);
        }
        getUV(t, e, n, i, r) {
            return be.getUV(t, this.a, this.b, this.c, e, n, i, r);
        }
        containsPoint(t) {
            return be.containsPoint(t, this.a, this.b, this.c);
        }
        isFrontFacing(t) {
            return be.isFrontFacing(this.a, this.b, this.c, t);
        }
        intersectsBox(t) {
            return t.intersectsTriangle(this);
        }
        closestPointToPoint(t, e) {
            void 0 === e && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), (e = new st()));
            const n = this.a,
                i = this.b,
                r = this.c;
            let s, a;
            ge.subVectors(i, n), ve.subVectors(r, n), _e.subVectors(t, n);
            const o = ge.dot(_e),
                l = ve.dot(_e);
            if (o <= 0 && l <= 0) return e.copy(n);
            xe.subVectors(t, i);
            const c = ge.dot(xe),
                h = ve.dot(xe);
            if (c >= 0 && h <= c) return e.copy(i);
            const u = o * h - c * l;
            if (u <= 0 && o >= 0 && c <= 0) return (s = o / (o - c)), e.copy(n).addScaledVector(ge, s);
            we.subVectors(t, r);
            const d = ge.dot(we),
                p = ve.dot(we);
            if (p >= 0 && d <= p) return e.copy(r);
            const f = d * l - o * p;
            if (f <= 0 && l >= 0 && p <= 0) return (a = l / (l - p)), e.copy(n).addScaledVector(ve, a);
            const m = c * p - d * h;
            if (m <= 0 && h - c >= 0 && d - p >= 0) return ye.subVectors(r, i), (a = (h - c) / (h - c + (d - p))), e.copy(i).addScaledVector(ye, a);
            const g = 1 / (m + f + u);
            return (s = f * g), (a = u * g), e.copy(n).addScaledVector(ge, s).addScaledVector(ve, a);
        }
        equals(t) {
            return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
        }
    }
    let Me = 0;
    class Se extends H {
        constructor() {
            super(),
                Object.defineProperty(this, "id", { value: Me++ }),
                (this.uuid = V()),
                (this.name = ""),
                (this.type = "Material"),
                (this.fog = !0),
                (this.blending = 1),
                (this.side = 0),
                (this.vertexColors = !1),
                (this.opacity = 1),
                (this.transparent = !1),
                (this.blendSrc = 204),
                (this.blendDst = 205),
                (this.blendEquation = e),
                (this.blendSrcAlpha = null),
                (this.blendDstAlpha = null),
                (this.blendEquationAlpha = null),
                (this.depthFunc = 3),
                (this.depthTest = !0),
                (this.depthWrite = !0),
                (this.stencilWriteMask = 255),
                (this.stencilFunc = 519),
                (this.stencilRef = 0),
                (this.stencilFuncMask = 255),
                (this.stencilFail = z),
                (this.stencilZFail = z),
                (this.stencilZPass = z),
                (this.stencilWrite = !1),
                (this.clippingPlanes = null),
                (this.clipIntersection = !1),
                (this.clipShadows = !1),
                (this.shadowSide = null),
                (this.colorWrite = !0),
                (this.precision = null),
                (this.polygonOffset = !1),
                (this.polygonOffsetFactor = 0),
                (this.polygonOffsetUnits = 0),
                (this.dithering = !1),
                (this.alphaTest = 0),
                (this.alphaToCoverage = !1),
                (this.premultipliedAlpha = !1),
                (this.visible = !0),
                (this.toneMapped = !0),
                (this.userData = {}),
                (this.version = 0);
        }
        onBuild() {}
        onBeforeCompile() {}
        customProgramCacheKey() {
            return this.onBeforeCompile.toString();
        }
        setValues(t) {
            if (void 0 !== t)
                for (const e in t) {
                    const n = t[e];
                    if (void 0 === n) {
                        console.warn("THREE.Material: '" + e + "' parameter is undefined.");
                        continue;
                    }
                    if ("shading" === e) {
                        console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), (this.flatShading = 1 === n);
                        continue;
                    }
                    const i = this[e];
                    void 0 !== i ? (i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : (this[e] = n)) : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.");
                }
        }
        toJSON(t) {
            const e = void 0 === t || "string" == typeof t;
            e && (t = { textures: {}, images: {} });
            const n = { metadata: { version: 4.5, type: "Material", generator: "Material.toJSON" } };
            function i(t) {
                const e = [];
                for (const n in t) {
                    const i = t[n];
                    delete i.metadata, e.push(i);
                }
                return e;
            }
            if (
                ((n.uuid = this.uuid),
                (n.type = this.type),
                "" !== this.name && (n.name = this.name),
                this.color && this.color.isColor && (n.color = this.color.getHex()),
                void 0 !== this.roughness && (n.roughness = this.roughness),
                void 0 !== this.metalness && (n.metalness = this.metalness),
                this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()),
                this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
                this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity),
                this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
                void 0 !== this.shininess && (n.shininess = this.shininess),
                void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
                void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness),
                this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
                this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
                this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid), (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
                this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
                this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid),
                this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid),
                this.lightMap && this.lightMap.isTexture && ((n.lightMap = this.lightMap.toJSON(t).uuid), (n.lightMapIntensity = this.lightMapIntensity)),
                this.aoMap && this.aoMap.isTexture && ((n.aoMap = this.aoMap.toJSON(t).uuid), (n.aoMapIntensity = this.aoMapIntensity)),
                this.bumpMap && this.bumpMap.isTexture && ((n.bumpMap = this.bumpMap.toJSON(t).uuid), (n.bumpScale = this.bumpScale)),
                this.normalMap && this.normalMap.isTexture && ((n.normalMap = this.normalMap.toJSON(t).uuid), (n.normalMapType = this.normalMapType), (n.normalScale = this.normalScale.toArray())),
                this.displacementMap && this.displacementMap.isTexture && ((n.displacementMap = this.displacementMap.toJSON(t).uuid), (n.displacementScale = this.displacementScale), (n.displacementBias = this.displacementBias)),
                this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
                this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
                this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
                this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid),
                this.envMap && this.envMap.isTexture && ((n.envMap = this.envMap.toJSON(t).uuid), void 0 !== this.combine && (n.combine = this.combine)),
                void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity),
                void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity),
                void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio),
                this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid),
                void 0 !== this.transmission && (n.transmission = this.transmission),
                this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid),
                void 0 !== this.thickness && (n.thickness = this.thickness),
                this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid),
                void 0 !== this.attenuationDistance && (n.attenuationDistance = this.attenuationDistance),
                void 0 !== this.attenuationColor && (n.attenuationColor = this.attenuationColor.getHex()),
                void 0 !== this.size && (n.size = this.size),
                null !== this.shadowSide && (n.shadowSide = this.shadowSide),
                void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation),
                1 !== this.blending && (n.blending = this.blending),
                0 !== this.side && (n.side = this.side),
                this.vertexColors && (n.vertexColors = !0),
                this.opacity < 1 && (n.opacity = this.opacity),
                !0 === this.transparent && (n.transparent = this.transparent),
                (n.depthFunc = this.depthFunc),
                (n.depthTest = this.depthTest),
                (n.depthWrite = this.depthWrite),
                (n.colorWrite = this.colorWrite),
                (n.stencilWrite = this.stencilWrite),
                (n.stencilWriteMask = this.stencilWriteMask),
                (n.stencilFunc = this.stencilFunc),
                (n.stencilRef = this.stencilRef),
                (n.stencilFuncMask = this.stencilFuncMask),
                (n.stencilFail = this.stencilFail),
                (n.stencilZFail = this.stencilZFail),
                (n.stencilZPass = this.stencilZPass),
                this.rotation && 0 !== this.rotation && (n.rotation = this.rotation),
                !0 === this.polygonOffset && (n.polygonOffset = !0),
                0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor),
                0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits),
                this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth),
                void 0 !== this.dashSize && (n.dashSize = this.dashSize),
                void 0 !== this.gapSize && (n.gapSize = this.gapSize),
                void 0 !== this.scale && (n.scale = this.scale),
                !0 === this.dithering && (n.dithering = !0),
                this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
                !0 === this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage),
                !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha),
                !0 === this.wireframe && (n.wireframe = this.wireframe),
                this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
                "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap),
                "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin),
                !0 === this.morphTargets && (n.morphTargets = !0),
                !0 === this.morphNormals && (n.morphNormals = !0),
                !0 === this.flatShading && (n.flatShading = this.flatShading),
                !1 === this.visible && (n.visible = !1),
                !1 === this.toneMapped && (n.toneMapped = !1),
                "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
                e)
            ) {
                const e = i(t.textures),
                    r = i(t.images);
                e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r);
            }
            return n;
        }
        clone() {
            return new this.constructor().copy(this);
        }
        copy(t) {
            (this.name = t.name),
                (this.fog = t.fog),
                (this.blending = t.blending),
                (this.side = t.side),
                (this.vertexColors = t.vertexColors),
                (this.opacity = t.opacity),
                (this.transparent = t.transparent),
                (this.blendSrc = t.blendSrc),
                (this.blendDst = t.blendDst),
                (this.blendEquation = t.blendEquation),
                (this.blendSrcAlpha = t.blendSrcAlpha),
                (this.blendDstAlpha = t.blendDstAlpha),
                (this.blendEquationAlpha = t.blendEquationAlpha),
                (this.depthFunc = t.depthFunc),
                (this.depthTest = t.depthTest),
                (this.depthWrite = t.depthWrite),
                (this.stencilWriteMask = t.stencilWriteMask),
                (this.stencilFunc = t.stencilFunc),
                (this.stencilRef = t.stencilRef),
                (this.stencilFuncMask = t.stencilFuncMask),
                (this.stencilFail = t.stencilFail),
                (this.stencilZFail = t.stencilZFail),
                (this.stencilZPass = t.stencilZPass),
                (this.stencilWrite = t.stencilWrite);
            const e = t.clippingPlanes;
            let n = null;
            if (null !== e) {
                const t = e.length;
                n = new Array(t);
                for (let i = 0; i !== t; ++i) n[i] = e[i].clone();
            }
            return (
                (this.clippingPlanes = n),
                (this.clipIntersection = t.clipIntersection),
                (this.clipShadows = t.clipShadows),
                (this.shadowSide = t.shadowSide),
                (this.colorWrite = t.colorWrite),
                (this.precision = t.precision),
                (this.polygonOffset = t.polygonOffset),
                (this.polygonOffsetFactor = t.polygonOffsetFactor),
                (this.polygonOffsetUnits = t.polygonOffsetUnits),
                (this.dithering = t.dithering),
                (this.alphaTest = t.alphaTest),
                (this.alphaToCoverage = t.alphaToCoverage),
                (this.premultipliedAlpha = t.premultipliedAlpha),
                (this.visible = t.visible),
                (this.toneMapped = t.toneMapped),
                (this.userData = JSON.parse(JSON.stringify(t.userData))),
                this
            );
        }
        dispose() {
            this.dispatchEvent({ type: "dispose" });
        }
        set needsUpdate(t) {
            !0 === t && this.version++;
        }
    }
    Se.prototype.isMaterial = !0;
    const Te = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074,
        },
        Ee = { h: 0, s: 0, l: 0 },
        Ae = { h: 0, s: 0, l: 0 };
    function Le(t, e, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < 0.5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t;
    }
    function Re(t) {
        return t < 0.04045 ? 0.0773993808 * t : Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
    }
    function Ce(t) {
        return t < 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 0.41666) - 0.055;
    }
    class Pe {
        constructor(t, e, n) {
            return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n);
        }
        set(t) {
            return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this;
        }
        setScalar(t) {
            return (this.r = t), (this.g = t), (this.b = t), this;
        }
        setHex(t) {
            return (t = Math.floor(t)), (this.r = ((t >> 16) & 255) / 255), (this.g = ((t >> 8) & 255) / 255), (this.b = (255 & t) / 255), this;
        }
        setRGB(t, e, n) {
            return (this.r = t), (this.g = e), (this.b = n), this;
        }
        setHSL(t, e, n) {
            if (((t = j(t, 1)), (e = W(e, 0, 1)), (n = W(n, 0, 1)), 0 === e)) this.r = this.g = this.b = n;
            else {
                const i = n <= 0.5 ? n * (1 + e) : n + e - n * e,
                    r = 2 * n - i;
                (this.r = Le(r, i, t + 1 / 3)), (this.g = Le(r, i, t)), (this.b = Le(r, i, t - 1 / 3));
            }
            return this;
        }
        setStyle(t) {
            function e(e) {
                void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
            }
            let n;
            if ((n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t))) {
                let t;
                const i = n[1],
                    r = n[2];
                switch (i) {
                    case "rgb":
                    case "rgba":
                        if ((t = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)))
                            return (this.r = Math.min(255, parseInt(t[1], 10)) / 255), (this.g = Math.min(255, parseInt(t[2], 10)) / 255), (this.b = Math.min(255, parseInt(t[3], 10)) / 255), e(t[4]), this;
                        if ((t = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)))
                            return (this.r = Math.min(100, parseInt(t[1], 10)) / 100), (this.g = Math.min(100, parseInt(t[2], 10)) / 100), (this.b = Math.min(100, parseInt(t[3], 10)) / 100), e(t[4]), this;
                        break;
                    case "hsl":
                    case "hsla":
                        if ((t = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))) {
                            const n = parseFloat(t[1]) / 360,
                                i = parseInt(t[2], 10) / 100,
                                r = parseInt(t[3], 10) / 100;
                            return e(t[4]), this.setHSL(n, i, r);
                        }
                }
            } else if ((n = /^\#([A-Fa-f\d]+)$/.exec(t))) {
                const t = n[1],
                    e = t.length;
                if (3 === e) return (this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255), (this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255), (this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255), this;
                if (6 === e) return (this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255), (this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255), (this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255), this;
            }
            return t && t.length > 0 ? this.setColorName(t) : this;
        }
        setColorName(t) {
            const e = Te[t.toLowerCase()];
            return void 0 !== e ? this.setHex(e) : console.warn("THREE.Color: Unknown color " + t), this;
        }
        clone() {
            return new this.constructor(this.r, this.g, this.b);
        }
        copy(t) {
            return (this.r = t.r), (this.g = t.g), (this.b = t.b), this;
        }
        copyGammaToLinear(t, e = 2) {
            return (this.r = Math.pow(t.r, e)), (this.g = Math.pow(t.g, e)), (this.b = Math.pow(t.b, e)), this;
        }
        copyLinearToGamma(t, e = 2) {
            const n = e > 0 ? 1 / e : 1;
            return (this.r = Math.pow(t.r, n)), (this.g = Math.pow(t.g, n)), (this.b = Math.pow(t.b, n)), this;
        }
        convertGammaToLinear(t) {
            return this.copyGammaToLinear(this, t), this;
        }
        convertLinearToGamma(t) {
            return this.copyLinearToGamma(this, t), this;
        }
        copySRGBToLinear(t) {
            return (this.r = Re(t.r)), (this.g = Re(t.g)), (this.b = Re(t.b)), this;
        }
        copyLinearToSRGB(t) {
            return (this.r = Ce(t.r)), (this.g = Ce(t.g)), (this.b = Ce(t.b)), this;
        }
        convertSRGBToLinear() {
            return this.copySRGBToLinear(this), this;
        }
        convertLinearToSRGB() {
            return this.copyLinearToSRGB(this), this;
        }
        getHex() {
            return ((255 * this.r) << 16) ^ ((255 * this.g) << 8) ^ ((255 * this.b) << 0);
        }
        getHexString() {
            return ("000000" + this.getHex().toString(16)).slice(-6);
        }
        getHSL(t) {
            void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"), (t = { h: 0, s: 0, l: 0 }));
            const e = this.r,
                n = this.g,
                i = this.b,
                r = Math.max(e, n, i),
                s = Math.min(e, n, i);
            let a, o;
            const l = (s + r) / 2;
            if (s === r) (a = 0), (o = 0);
            else {
                const t = r - s;
                switch (((o = l <= 0.5 ? t / (r + s) : t / (2 - r - s)), r)) {
                    case e:
                        a = (n - i) / t + (n < i ? 6 : 0);
                        break;
                    case n:
                        a = (i - e) / t + 2;
                        break;
                    case i:
                        a = (e - n) / t + 4;
                }
                a /= 6;
            }
            return (t.h = a), (t.s = o), (t.l = l), t;
        }
        getStyle() {
            return "rgb(" + ((255 * this.r) | 0) + "," + ((255 * this.g) | 0) + "," + ((255 * this.b) | 0) + ")";
        }
        offsetHSL(t, e, n) {
            return this.getHSL(Ee), (Ee.h += t), (Ee.s += e), (Ee.l += n), this.setHSL(Ee.h, Ee.s, Ee.l), this;
        }
        add(t) {
            return (this.r += t.r), (this.g += t.g), (this.b += t.b), this;
        }
        addColors(t, e) {
            return (this.r = t.r + e.r), (this.g = t.g + e.g), (this.b = t.b + e.b), this;
        }
        addScalar(t) {
            return (this.r += t), (this.g += t), (this.b += t), this;
        }
        sub(t) {
            return (this.r = Math.max(0, this.r - t.r)), (this.g = Math.max(0, this.g - t.g)), (this.b = Math.max(0, this.b - t.b)), this;
        }
        multiply(t) {
            return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this;
        }
        multiplyScalar(t) {
            return (this.r *= t), (this.g *= t), (this.b *= t), this;
        }
        lerp(t, e) {
            return (this.r += (t.r - this.r) * e), (this.g += (t.g - this.g) * e), (this.b += (t.b - this.b) * e), this;
        }
        lerpColors(t, e, n) {
            return (this.r = t.r + (e.r - t.r) * n), (this.g = t.g + (e.g - t.g) * n), (this.b = t.b + (e.b - t.b) * n), this;
        }
        lerpHSL(t, e) {
            this.getHSL(Ee), t.getHSL(Ae);
            const n = q(Ee.h, Ae.h, e),
                i = q(Ee.s, Ae.s, e),
                r = q(Ee.l, Ae.l, e);
            return this.setHSL(n, i, r), this;
        }
        equals(t) {
            return t.r === this.r && t.g === this.g && t.b === this.b;
        }
        fromArray(t, e = 0) {
            return (this.r = t[e]), (this.g = t[e + 1]), (this.b = t[e + 2]), this;
        }
        toArray(t = [], e = 0) {
            return (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), t;
        }
        fromBufferAttribute(t, e) {
            return (this.r = t.getX(e)), (this.g = t.getY(e)), (this.b = t.getZ(e)), !0 === t.normalized && ((this.r /= 255), (this.g /= 255), (this.b /= 255)), this;
        }
        toJSON() {
            return this.getHex();
        }
    }
    (Pe.NAMES = Te), (Pe.prototype.isColor = !0), (Pe.prototype.r = 1), (Pe.prototype.g = 1), (Pe.prototype.b = 1);
    class De extends Se {
        constructor(t) {
            super(),
                (this.type = "MeshBasicMaterial"),
                (this.color = new Pe(16777215)),
                (this.map = null),
                (this.lightMap = null),
                (this.lightMapIntensity = 1),
                (this.aoMap = null),
                (this.aoMapIntensity = 1),
                (this.specularMap = null),
                (this.alphaMap = null),
                (this.envMap = null),
                (this.combine = 0),
                (this.reflectivity = 1),
                (this.refractionRatio = 0.98),
                (this.wireframe = !1),
                (this.wireframeLinewidth = 1),
                (this.wireframeLinecap = "round"),
                (this.wireframeLinejoin = "round"),
                (this.morphTargets = !1),
                this.setValues(t);
        }
        copy(t) {
            return (
                super.copy(t),
                this.color.copy(t.color),
                (this.map = t.map),
                (this.lightMap = t.lightMap),
                (this.lightMapIntensity = t.lightMapIntensity),
                (this.aoMap = t.aoMap),
                (this.aoMapIntensity = t.aoMapIntensity),
                (this.specularMap = t.specularMap),
                (this.alphaMap = t.alphaMap),
                (this.envMap = t.envMap),
                (this.combine = t.combine),
                (this.reflectivity = t.reflectivity),
                (this.refractionRatio = t.refractionRatio),
                (this.wireframe = t.wireframe),
                (this.wireframeLinewidth = t.wireframeLinewidth),
                (this.wireframeLinecap = t.wireframeLinecap),
                (this.wireframeLinejoin = t.wireframeLinejoin),
                (this.morphTargets = t.morphTargets),
                this
            );
        }
    }
    De.prototype.isMeshBasicMaterial = !0;
    const Ie = new st(),
        Ne = new Z();
    class ze {
        constructor(t, e, n) {
            if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            (this.name = ""), (this.array = t), (this.itemSize = e), (this.count = void 0 !== t ? t.length / e : 0), (this.normalized = !0 === n), (this.usage = O), (this.updateRange = { offset: 0, count: -1 }), (this.version = 0);
        }
        onUploadCallback() {}
        set needsUpdate(t) {
            !0 === t && this.version++;
        }
        setUsage(t) {
            return (this.usage = t), this;
        }
        copy(t) {
            return (this.name = t.name), (this.array = new t.array.constructor(t.array)), (this.itemSize = t.itemSize), (this.count = t.count), (this.normalized = t.normalized), (this.usage = t.usage), this;
        }
        copyAt(t, e, n) {
            (t *= this.itemSize), (n *= e.itemSize);
            for (let i = 0, r = this.itemSize; i < r; i++) this.array[t + i] = e.array[n + i];
            return this;
        }
        copyArray(t) {
            return this.array.set(t), this;
        }
        copyColorsArray(t) {
            const e = this.array;
            let n = 0;
            for (let i = 0, r = t.length; i < r; i++) {
                let r = t[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), (r = new Pe())), (e[n++] = r.r), (e[n++] = r.g), (e[n++] = r.b);
            }
            return this;
        }
        copyVector2sArray(t) {
            const e = this.array;
            let n = 0;
            for (let i = 0, r = t.length; i < r; i++) {
                let r = t[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), (r = new Z())), (e[n++] = r.x), (e[n++] = r.y);
            }
            return this;
        }
        copyVector3sArray(t) {
            const e = this.array;
            let n = 0;
            for (let i = 0, r = t.length; i < r; i++) {
                let r = t[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), (r = new st())), (e[n++] = r.x), (e[n++] = r.y), (e[n++] = r.z);
            }
            return this;
        }
        copyVector4sArray(t) {
            const e = this.array;
            let n = 0;
            for (let i = 0, r = t.length; i < r; i++) {
                let r = t[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), (r = new nt())), (e[n++] = r.x), (e[n++] = r.y), (e[n++] = r.z), (e[n++] = r.w);
            }
            return this;
        }
        applyMatrix3(t) {
            if (2 === this.itemSize) for (let e = 0, n = this.count; e < n; e++) Ne.fromBufferAttribute(this, e), Ne.applyMatrix3(t), this.setXY(e, Ne.x, Ne.y);
            else if (3 === this.itemSize) for (let e = 0, n = this.count; e < n; e++) Ie.fromBufferAttribute(this, e), Ie.applyMatrix3(t), this.setXYZ(e, Ie.x, Ie.y, Ie.z);
            return this;
        }
        applyMatrix4(t) {
            for (let e = 0, n = this.count; e < n; e++) (Ie.x = this.getX(e)), (Ie.y = this.getY(e)), (Ie.z = this.getZ(e)), Ie.applyMatrix4(t), this.setXYZ(e, Ie.x, Ie.y, Ie.z);
            return this;
        }
        applyNormalMatrix(t) {
            for (let e = 0, n = this.count; e < n; e++) (Ie.x = this.getX(e)), (Ie.y = this.getY(e)), (Ie.z = this.getZ(e)), Ie.applyNormalMatrix(t), this.setXYZ(e, Ie.x, Ie.y, Ie.z);
            return this;
        }
        transformDirection(t) {
            for (let e = 0, n = this.count; e < n; e++) (Ie.x = this.getX(e)), (Ie.y = this.getY(e)), (Ie.z = this.getZ(e)), Ie.transformDirection(t), this.setXYZ(e, Ie.x, Ie.y, Ie.z);
            return this;
        }
        set(t, e = 0) {
            return this.array.set(t, e), this;
        }
        getX(t) {
            return this.array[t * this.itemSize];
        }
        setX(t, e) {
            return (this.array[t * this.itemSize] = e), this;
        }
        getY(t) {
            return this.array[t * this.itemSize + 1];
        }
        setY(t, e) {
            return (this.array[t * this.itemSize + 1] = e), this;
        }
        getZ(t) {
            return this.array[t * this.itemSize + 2];
        }
        setZ(t, e) {
            return (this.array[t * this.itemSize + 2] = e), this;
        }
        getW(t) {
            return this.array[t * this.itemSize + 3];
        }
        setW(t, e) {
            return (this.array[t * this.itemSize + 3] = e), this;
        }
        setXY(t, e, n) {
            return (t *= this.itemSize), (this.array[t + 0] = e), (this.array[t + 1] = n), this;
        }
        setXYZ(t, e, n, i) {
            return (t *= this.itemSize), (this.array[t + 0] = e), (this.array[t + 1] = n), (this.array[t + 2] = i), this;
        }
        setXYZW(t, e, n, i, r) {
            return (t *= this.itemSize), (this.array[t + 0] = e), (this.array[t + 1] = n), (this.array[t + 2] = i), (this.array[t + 3] = r), this;
        }
        onUpload(t) {
            return (this.onUploadCallback = t), this;
        }
        clone() {
            return new this.constructor(this.array, this.itemSize).copy(this);
        }
        toJSON() {
            const t = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.prototype.slice.call(this.array), normalized: this.normalized };
            return "" !== this.name && (t.name = this.name), this.usage !== O && (t.usage = this.usage), (0 === this.updateRange.offset && -1 === this.updateRange.count) || (t.updateRange = this.updateRange), t;
        }
    }
    ze.prototype.isBufferAttribute = !0;
    class Oe extends ze {
        constructor(t, e, n) {
            super(new Uint16Array(t), e, n);
        }
    }
    class Be extends ze {
        constructor(t, e, n) {
            super(new Uint32Array(t), e, n);
        }
    }
    (class extends ze {
        constructor(t, e, n) {
            super(new Uint16Array(t), e, n);
        }
    }.prototype.isFloat16BufferAttribute = !0);
    class Fe extends ze {
        constructor(t, e, n) {
            super(new Float32Array(t), e, n);
        }
    }
    function He(t) {
        if (0 === t.length) return -1 / 0;
        let e = t[0];
        for (let n = 1, i = t.length; n < i; ++n) t[n] > e && (e = t[n]);
        return e;
    }
    Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array;
    let Ue = 0;
    const ke = new Ot(),
        Ge = new oe(),
        Ve = new st(),
        We = new lt(),
        je = new lt(),
        qe = new st();
    class Xe extends H {
        constructor() {
            super(),
                Object.defineProperty(this, "id", { value: Ue++ }),
                (this.uuid = V()),
                (this.name = ""),
                (this.type = "BufferGeometry"),
                (this.index = null),
                (this.attributes = {}),
                (this.morphAttributes = {}),
                (this.morphTargetsRelative = !1),
                (this.groups = []),
                (this.boundingBox = null),
                (this.boundingSphere = null),
                (this.drawRange = { start: 0, count: 1 / 0 }),
                (this.userData = {});
        }
        getIndex() {
            return this.index;
        }
        setIndex(t) {
            return Array.isArray(t) ? (this.index = new (He(t) > 65535 ? Be : Oe)(t, 1)) : (this.index = t), this;
        }
        getAttribute(t) {
            return this.attributes[t];
        }
        setAttribute(t, e) {
            return (this.attributes[t] = e), this;
        }
        deleteAttribute(t) {
            return delete this.attributes[t], this;
        }
        hasAttribute(t) {
            return void 0 !== this.attributes[t];
        }
        addGroup(t, e, n = 0) {
            this.groups.push({ start: t, count: e, materialIndex: n });
        }
        clearGroups() {
            this.groups = [];
        }
        setDrawRange(t, e) {
            (this.drawRange.start = t), (this.drawRange.count = e);
        }
        applyMatrix4(t) {
            const e = this.attributes.position;
            void 0 !== e && (e.applyMatrix4(t), (e.needsUpdate = !0));
            const n = this.attributes.normal;
            if (void 0 !== n) {
                const e = new J().getNormalMatrix(t);
                n.applyNormalMatrix(e), (n.needsUpdate = !0);
            }
            const i = this.attributes.tangent;
            return void 0 !== i && (i.transformDirection(t), (i.needsUpdate = !0)), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
        }
        applyQuaternion(t) {
            return ke.makeRotationFromQuaternion(t), this.applyMatrix4(ke), this;
        }
        rotateX(t) {
            return ke.makeRotationX(t), this.applyMatrix4(ke), this;
        }
        rotateY(t) {
            return ke.makeRotationY(t), this.applyMatrix4(ke), this;
        }
        rotateZ(t) {
            return ke.makeRotationZ(t), this.applyMatrix4(ke), this;
        }
        translate(t, e, n) {
            return ke.makeTranslation(t, e, n), this.applyMatrix4(ke), this;
        }
        scale(t, e, n) {
            return ke.makeScale(t, e, n), this.applyMatrix4(ke), this;
        }
        lookAt(t) {
            return Ge.lookAt(t), Ge.updateMatrix(), this.applyMatrix4(Ge.matrix), this;
        }
        center() {
            return this.computeBoundingBox(), this.boundingBox.getCenter(Ve).negate(), this.translate(Ve.x, Ve.y, Ve.z), this;
        }
        setFromPoints(t) {
            const e = [];
            for (let n = 0, i = t.length; n < i; n++) {
                const i = t[n];
                e.push(i.x, i.y, i.z || 0);
            }
            return this.setAttribute("position", new Fe(e, 3)), this;
        }
        computeBoundingBox() {
            null === this.boundingBox && (this.boundingBox = new lt());
            const t = this.attributes.position,
                e = this.morphAttributes.position;
            if (t && t.isGLBufferAttribute)
                return (
                    console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this),
                    void this.boundingBox.set(new st(-1 / 0, -1 / 0, -1 / 0), new st(1 / 0, 1 / 0, 1 / 0))
                );
            if (void 0 !== t) {
                if ((this.boundingBox.setFromBufferAttribute(t), e))
                    for (let t = 0, n = e.length; t < n; t++) {
                        const n = e[t];
                        We.setFromBufferAttribute(n),
                            this.morphTargetsRelative
                                ? (qe.addVectors(this.boundingBox.min, We.min), this.boundingBox.expandByPoint(qe), qe.addVectors(this.boundingBox.max, We.max), this.boundingBox.expandByPoint(qe))
                                : (this.boundingBox.expandByPoint(We.min), this.boundingBox.expandByPoint(We.max));
                    }
            } else this.boundingBox.makeEmpty();
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) &&
                console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
        }
        computeBoundingSphere() {
            null === this.boundingSphere && (this.boundingSphere = new At());
            const t = this.attributes.position,
                e = this.morphAttributes.position;
            if (t && t.isGLBufferAttribute)
                return (
                    console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new st(), 1 / 0)
                );
            if (t) {
                const n = this.boundingSphere.center;
                if ((We.setFromBufferAttribute(t), e))
                    for (let t = 0, n = e.length; t < n; t++) {
                        const n = e[t];
                        je.setFromBufferAttribute(n),
                            this.morphTargetsRelative ? (qe.addVectors(We.min, je.min), We.expandByPoint(qe), qe.addVectors(We.max, je.max), We.expandByPoint(qe)) : (We.expandByPoint(je.min), We.expandByPoint(je.max));
                    }
                We.getCenter(n);
                let i = 0;
                for (let e = 0, r = t.count; e < r; e++) qe.fromBufferAttribute(t, e), (i = Math.max(i, n.distanceToSquared(qe)));
                if (e)
                    for (let r = 0, s = e.length; r < s; r++) {
                        const s = e[r],
                            a = this.morphTargetsRelative;
                        for (let e = 0, r = s.count; e < r; e++) qe.fromBufferAttribute(s, e), a && (Ve.fromBufferAttribute(t, e), qe.add(Ve)), (i = Math.max(i, n.distanceToSquared(qe)));
                    }
                (this.boundingSphere.radius = Math.sqrt(i)),
                    isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
            }
        }
        computeFaceNormals() {}
        computeTangents() {
            const t = this.index,
                e = this.attributes;
            if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            const n = t.array,
                i = e.position.array,
                r = e.normal.array,
                s = e.uv.array,
                a = i.length / 3;
            void 0 === e.tangent && this.setAttribute("tangent", new ze(new Float32Array(4 * a), 4));
            const o = e.tangent.array,
                l = [],
                c = [];
            for (let t = 0; t < a; t++) (l[t] = new st()), (c[t] = new st());
            const h = new st(),
                u = new st(),
                d = new st(),
                p = new Z(),
                f = new Z(),
                m = new Z(),
                g = new st(),
                v = new st();
            function y(t, e, n) {
                h.fromArray(i, 3 * t), u.fromArray(i, 3 * e), d.fromArray(i, 3 * n), p.fromArray(s, 2 * t), f.fromArray(s, 2 * e), m.fromArray(s, 2 * n), u.sub(h), d.sub(h), f.sub(p), m.sub(p);
                const r = 1 / (f.x * m.y - m.x * f.y);
                isFinite(r) &&
                    (g.copy(u).multiplyScalar(m.y).addScaledVector(d, -f.y).multiplyScalar(r),
                    v.copy(d).multiplyScalar(f.x).addScaledVector(u, -m.x).multiplyScalar(r),
                    l[t].add(g),
                    l[e].add(g),
                    l[n].add(g),
                    c[t].add(v),
                    c[e].add(v),
                    c[n].add(v));
            }
            let _ = this.groups;
            0 === _.length && (_ = [{ start: 0, count: n.length }]);
            for (let t = 0, e = _.length; t < e; ++t) {
                const e = _[t],
                    i = e.start;
                for (let t = i, r = i + e.count; t < r; t += 3) y(n[t + 0], n[t + 1], n[t + 2]);
            }
            const x = new st(),
                w = new st(),
                b = new st(),
                M = new st();
            function S(t) {
                b.fromArray(r, 3 * t), M.copy(b);
                const e = l[t];
                x.copy(e), x.sub(b.multiplyScalar(b.dot(e))).normalize(), w.crossVectors(M, e);
                const n = w.dot(c[t]) < 0 ? -1 : 1;
                (o[4 * t] = x.x), (o[4 * t + 1] = x.y), (o[4 * t + 2] = x.z), (o[4 * t + 3] = n);
            }
            for (let t = 0, e = _.length; t < e; ++t) {
                const e = _[t],
                    i = e.start;
                for (let t = i, r = i + e.count; t < r; t += 3) S(n[t + 0]), S(n[t + 1]), S(n[t + 2]);
            }
        }
        computeVertexNormals() {
            const t = this.index,
                e = this.getAttribute("position");
            if (void 0 !== e) {
                let n = this.getAttribute("normal");
                if (void 0 === n) (n = new ze(new Float32Array(3 * e.count), 3)), this.setAttribute("normal", n);
                else for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
                const i = new st(),
                    r = new st(),
                    s = new st(),
                    a = new st(),
                    o = new st(),
                    l = new st(),
                    c = new st(),
                    h = new st();
                if (t)
                    for (let u = 0, d = t.count; u < d; u += 3) {
                        const d = t.getX(u + 0),
                            p = t.getX(u + 1),
                            f = t.getX(u + 2);
                        i.fromBufferAttribute(e, d),
                            r.fromBufferAttribute(e, p),
                            s.fromBufferAttribute(e, f),
                            c.subVectors(s, r),
                            h.subVectors(i, r),
                            c.cross(h),
                            a.fromBufferAttribute(n, d),
                            o.fromBufferAttribute(n, p),
                            l.fromBufferAttribute(n, f),
                            a.add(c),
                            o.add(c),
                            l.add(c),
                            n.setXYZ(d, a.x, a.y, a.z),
                            n.setXYZ(p, o.x, o.y, o.z),
                            n.setXYZ(f, l.x, l.y, l.z);
                    }
                else
                    for (let t = 0, a = e.count; t < a; t += 3)
                        i.fromBufferAttribute(e, t + 0),
                            r.fromBufferAttribute(e, t + 1),
                            s.fromBufferAttribute(e, t + 2),
                            c.subVectors(s, r),
                            h.subVectors(i, r),
                            c.cross(h),
                            n.setXYZ(t + 0, c.x, c.y, c.z),
                            n.setXYZ(t + 1, c.x, c.y, c.z),
                            n.setXYZ(t + 2, c.x, c.y, c.z);
                this.normalizeNormals(), (n.needsUpdate = !0);
            }
        }
        merge(t, e) {
            if (!t || !t.isBufferGeometry) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
            void 0 === e && ((e = 0), console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
            const n = this.attributes;
            for (const i in n) {
                if (void 0 === t.attributes[i]) continue;
                const r = n[i].array,
                    s = t.attributes[i],
                    a = s.array,
                    o = s.itemSize * e,
                    l = Math.min(a.length, r.length - o);
                for (let t = 0, e = o; t < l; t++, e++) r[e] = a[t];
            }
            return this;
        }
        normalizeNormals() {
            const t = this.attributes.normal;
            for (let e = 0, n = t.count; e < n; e++) qe.fromBufferAttribute(t, e), qe.normalize(), t.setXYZ(e, qe.x, qe.y, qe.z);
        }
        toNonIndexed() {
            function t(t, e) {
                const n = t.array,
                    i = t.itemSize,
                    r = t.normalized,
                    s = new n.constructor(e.length * i);
                let a = 0,
                    o = 0;
                for (let t = 0, r = e.length; t < r; t++) {
                    a = e[t] * i;
                    for (let t = 0; t < i; t++) s[o++] = n[a++];
                }
                return new ze(s, i, r);
            }
            if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
            const e = new Xe(),
                n = this.index.array,
                i = this.attributes;
            for (const r in i) {
                const s = t(i[r], n);
                e.setAttribute(r, s);
            }
            const r = this.morphAttributes;
            for (const i in r) {
                const s = [],
                    a = r[i];
                for (let e = 0, i = a.length; e < i; e++) {
                    const i = t(a[e], n);
                    s.push(i);
                }
                e.morphAttributes[i] = s;
            }
            e.morphTargetsRelative = this.morphTargetsRelative;
            const s = this.groups;
            for (let t = 0, n = s.length; t < n; t++) {
                const n = s[t];
                e.addGroup(n.start, n.count, n.materialIndex);
            }
            return e;
        }
        toJSON() {
            const t = { metadata: { version: 4.5, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
            if (((t.uuid = this.uuid), (t.type = this.type), "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters)) {
                const e = this.parameters;
                for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
                return t;
            }
            t.data = { attributes: {} };
            const e = this.index;
            null !== e && (t.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) });
            const n = this.attributes;
            for (const e in n) {
                const i = n[e];
                t.data.attributes[e] = i.toJSON(t.data);
            }
            const i = {};
            let r = !1;
            for (const e in this.morphAttributes) {
                const n = this.morphAttributes[e],
                    s = [];
                for (let e = 0, i = n.length; e < i; e++) {
                    const i = n[e];
                    s.push(i.toJSON(t.data));
                }
                s.length > 0 && ((i[e] = s), (r = !0));
            }
            r && ((t.data.morphAttributes = i), (t.data.morphTargetsRelative = this.morphTargetsRelative));
            const s = this.groups;
            s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
            const a = this.boundingSphere;
            return null !== a && (t.data.boundingSphere = { center: a.center.toArray(), radius: a.radius }), t;
        }
        clone() {
            return new Xe().copy(this);
        }
        copy(t) {
            (this.index = null), (this.attributes = {}), (this.morphAttributes = {}), (this.groups = []), (this.boundingBox = null), (this.boundingSphere = null);
            const e = {};
            this.name = t.name;
            const n = t.index;
            null !== n && this.setIndex(n.clone(e));
            const i = t.attributes;
            for (const t in i) {
                const n = i[t];
                this.setAttribute(t, n.clone(e));
            }
            const r = t.morphAttributes;
            for (const t in r) {
                const n = [],
                    i = r[t];
                for (let t = 0, r = i.length; t < r; t++) n.push(i[t].clone(e));
                this.morphAttributes[t] = n;
            }
            this.morphTargetsRelative = t.morphTargetsRelative;
            const s = t.groups;
            for (let t = 0, e = s.length; t < e; t++) {
                const e = s[t];
                this.addGroup(e.start, e.count, e.materialIndex);
            }
            const a = t.boundingBox;
            null !== a && (this.boundingBox = a.clone());
            const o = t.boundingSphere;
            return null !== o && (this.boundingSphere = o.clone()), (this.drawRange.start = t.drawRange.start), (this.drawRange.count = t.drawRange.count), (this.userData = t.userData), this;
        }
        dispose() {
            this.dispatchEvent({ type: "dispose" });
        }
    }
    Xe.prototype.isBufferGeometry = !0;
    const Ye = new Ot(),
        Ze = new zt(),
        Je = new At(),
        Qe = new st(),
        Ke = new st(),
        $e = new st(),
        tn = new st(),
        en = new st(),
        nn = new st(),
        rn = new st(),
        sn = new st(),
        an = new st(),
        on = new Z(),
        ln = new Z(),
        cn = new Z(),
        hn = new st(),
        un = new st();
    class dn extends oe {
        constructor(t = new Xe(), e = new De()) {
            super(), (this.type = "Mesh"), (this.geometry = t), (this.material = e), this.updateMorphTargets();
        }
        copy(t) {
            return (
                super.copy(t),
                void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
                void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)),
                (this.material = t.material),
                (this.geometry = t.geometry),
                this
            );
        }
        updateMorphTargets() {
            const t = this.geometry;
            if (t.isBufferGeometry) {
                const e = t.morphAttributes,
                    n = Object.keys(e);
                if (n.length > 0) {
                    const t = e[n[0]];
                    if (void 0 !== t) {
                        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
                        for (let e = 0, n = t.length; e < n; e++) {
                            const n = t[e].name || String(e);
                            this.morphTargetInfluences.push(0), (this.morphTargetDictionary[n] = e);
                        }
                    }
                }
            } else {
                const e = t.morphTargets;
                void 0 !== e && e.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
            }
        }
        raycast(t, e) {
            const n = this.geometry,
                i = this.material,
                r = this.matrixWorld;
            if (void 0 === i) return;
            if ((null === n.boundingSphere && n.computeBoundingSphere(), Je.copy(n.boundingSphere), Je.applyMatrix4(r), !1 === t.ray.intersectsSphere(Je))) return;
            if ((Ye.copy(r).invert(), Ze.copy(t.ray).applyMatrix4(Ye), null !== n.boundingBox && !1 === Ze.intersectsBox(n.boundingBox))) return;
            let s;
            if (n.isBufferGeometry) {
                const r = n.index,
                    a = n.attributes.position,
                    o = n.morphAttributes.position,
                    l = n.morphTargetsRelative,
                    c = n.attributes.uv,
                    h = n.attributes.uv2,
                    u = n.groups,
                    d = n.drawRange;
                if (null !== r)
                    if (Array.isArray(i))
                        for (let n = 0, p = u.length; n < p; n++) {
                            const p = u[n],
                                f = i[p.materialIndex];
                            for (let n = Math.max(p.start, d.start), i = Math.min(p.start + p.count, d.start + d.count); n < i; n += 3) {
                                const i = r.getX(n),
                                    u = r.getX(n + 1),
                                    d = r.getX(n + 2);
                                (s = pn(this, f, t, Ze, a, o, l, c, h, i, u, d)), s && ((s.faceIndex = Math.floor(n / 3)), (s.face.materialIndex = p.materialIndex), e.push(s));
                            }
                        }
                    else {
                        for (let n = Math.max(0, d.start), u = Math.min(r.count, d.start + d.count); n < u; n += 3) {
                            const u = r.getX(n),
                                d = r.getX(n + 1),
                                p = r.getX(n + 2);
                            (s = pn(this, i, t, Ze, a, o, l, c, h, u, d, p)), s && ((s.faceIndex = Math.floor(n / 3)), e.push(s));
                        }
                    }
                else if (void 0 !== a)
                    if (Array.isArray(i))
                        for (let n = 0, r = u.length; n < r; n++) {
                            const r = u[n],
                                p = i[r.materialIndex];
                            for (let n = Math.max(r.start, d.start), i = Math.min(r.start + r.count, d.start + d.count); n < i; n += 3) {
                                (s = pn(this, p, t, Ze, a, o, l, c, h, n, n + 1, n + 2)), s && ((s.faceIndex = Math.floor(n / 3)), (s.face.materialIndex = r.materialIndex), e.push(s));
                            }
                        }
                    else {
                        for (let n = Math.max(0, d.start), r = Math.min(a.count, d.start + d.count); n < r; n += 3) {
                            (s = pn(this, i, t, Ze, a, o, l, c, h, n, n + 1, n + 2)), s && ((s.faceIndex = Math.floor(n / 3)), e.push(s));
                        }
                    }
            } else n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
    }
    function pn(t, e, n, i, r, s, a, o, l, c, h, u) {
        Qe.fromBufferAttribute(r, c), Ke.fromBufferAttribute(r, h), $e.fromBufferAttribute(r, u);
        const d = t.morphTargetInfluences;
        if (e.morphTargets && s && d) {
            rn.set(0, 0, 0), sn.set(0, 0, 0), an.set(0, 0, 0);
            for (let t = 0, e = s.length; t < e; t++) {
                const e = d[t],
                    n = s[t];
                0 !== e &&
                    (tn.fromBufferAttribute(n, c),
                    en.fromBufferAttribute(n, h),
                    nn.fromBufferAttribute(n, u),
                    a ? (rn.addScaledVector(tn, e), sn.addScaledVector(en, e), an.addScaledVector(nn, e)) : (rn.addScaledVector(tn.sub(Qe), e), sn.addScaledVector(en.sub(Ke), e), an.addScaledVector(nn.sub($e), e)));
            }
            Qe.add(rn), Ke.add(sn), $e.add(an);
        }
        t.isSkinnedMesh && (t.boneTransform(c, Qe), t.boneTransform(h, Ke), t.boneTransform(u, $e));
        const p = (function (t, e, n, i, r, s, a, o) {
            let l;
            if (((l = 1 === e.side ? i.intersectTriangle(a, s, r, !0, o) : i.intersectTriangle(r, s, a, 2 !== e.side, o)), null === l)) return null;
            un.copy(o), un.applyMatrix4(t.matrixWorld);
            const c = n.ray.origin.distanceTo(un);
            return c < n.near || c > n.far ? null : { distance: c, point: un.clone(), object: t };
        })(t, e, n, i, Qe, Ke, $e, hn);
        if (p) {
            o && (on.fromBufferAttribute(o, c), ln.fromBufferAttribute(o, h), cn.fromBufferAttribute(o, u), (p.uv = be.getUV(hn, Qe, Ke, $e, on, ln, cn, new Z()))),
                l && (on.fromBufferAttribute(l, c), ln.fromBufferAttribute(l, h), cn.fromBufferAttribute(l, u), (p.uv2 = be.getUV(hn, Qe, Ke, $e, on, ln, cn, new Z())));
            const t = { a: c, b: h, c: u, normal: new st(), materialIndex: 0 };
            be.getNormal(Qe, Ke, $e, t.normal), (p.face = t);
        }
        return p;
    }
    dn.prototype.isMesh = !0;
    class fn extends Xe {
        constructor(t = 1, e = 1, n = 1, i = 1, r = 1, s = 1) {
            super(), (this.type = "BoxGeometry"), (this.parameters = { width: t, height: e, depth: n, widthSegments: i, heightSegments: r, depthSegments: s });
            const a = this;
            (i = Math.floor(i)), (r = Math.floor(r)), (s = Math.floor(s));
            const o = [],
                l = [],
                c = [],
                h = [];
            let u = 0,
                d = 0;
            function p(t, e, n, i, r, s, p, f, m, g, v) {
                const y = s / m,
                    _ = p / g,
                    x = s / 2,
                    w = p / 2,
                    b = f / 2,
                    M = m + 1,
                    S = g + 1;
                let T = 0,
                    E = 0;
                const A = new st();
                for (let s = 0; s < S; s++) {
                    const a = s * _ - w;
                    for (let o = 0; o < M; o++) {
                        const u = o * y - x;
                        (A[t] = u * i), (A[e] = a * r), (A[n] = b), l.push(A.x, A.y, A.z), (A[t] = 0), (A[e] = 0), (A[n] = f > 0 ? 1 : -1), c.push(A.x, A.y, A.z), h.push(o / m), h.push(1 - s / g), (T += 1);
                    }
                }
                for (let t = 0; t < g; t++)
                    for (let e = 0; e < m; e++) {
                        const n = u + e + M * t,
                            i = u + e + M * (t + 1),
                            r = u + (e + 1) + M * (t + 1),
                            s = u + (e + 1) + M * t;
                        o.push(n, i, s), o.push(i, r, s), (E += 6);
                    }
                a.addGroup(d, E, v), (d += E), (u += T);
            }
            p("z", "y", "x", -1, -1, n, e, t, s, r, 0),
                p("z", "y", "x", 1, -1, n, e, -t, s, r, 1),
                p("x", "z", "y", 1, 1, t, n, e, i, s, 2),
                p("x", "z", "y", 1, -1, t, n, -e, i, s, 3),
                p("x", "y", "z", 1, -1, t, e, n, i, r, 4),
                p("x", "y", "z", -1, -1, t, e, -n, i, r, 5),
                this.setIndex(o),
                this.setAttribute("position", new Fe(l, 3)),
                this.setAttribute("normal", new Fe(c, 3)),
                this.setAttribute("uv", new Fe(h, 2));
        }
    }
    function mn(t) {
        const e = {};
        for (const n in t) {
            e[n] = {};
            for (const i in t[n]) {
                const r = t[n][i];
                r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? (e[n][i] = r.clone()) : Array.isArray(r) ? (e[n][i] = r.slice()) : (e[n][i] = r);
            }
        }
        return e;
    }
    function gn(t) {
        const e = {};
        for (let n = 0; n < t.length; n++) {
            const i = mn(t[n]);
            for (const t in i) e[t] = i[t];
        }
        return e;
    }
    const vn = { clone: mn, merge: gn };
    class yn extends Se {
        constructor(t) {
            super(),
                (this.type = "ShaderMaterial"),
                (this.defines = {}),
                (this.uniforms = {}),
                (this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"),
                (this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}"),
                (this.linewidth = 1),
                (this.wireframe = !1),
                (this.wireframeLinewidth = 1),
                (this.fog = !1),
                (this.lights = !1),
                (this.clipping = !1),
                (this.morphTargets = !1),
                (this.morphNormals = !1),
                (this.extensions = { derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1 }),
                (this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv2: [0, 0] }),
                (this.index0AttributeName = void 0),
                (this.uniformsNeedUpdate = !1),
                (this.glslVersion = null),
                void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t));
        }
        copy(t) {
            return (
                super.copy(t),
                (this.fragmentShader = t.fragmentShader),
                (this.vertexShader = t.vertexShader),
                (this.uniforms = mn(t.uniforms)),
                (this.defines = Object.assign({}, t.defines)),
                (this.wireframe = t.wireframe),
                (this.wireframeLinewidth = t.wireframeLinewidth),
                (this.lights = t.lights),
                (this.clipping = t.clipping),
                (this.morphTargets = t.morphTargets),
                (this.morphNormals = t.morphNormals),
                (this.extensions = Object.assign({}, t.extensions)),
                (this.glslVersion = t.glslVersion),
                this
            );
        }
        toJSON(t) {
            const e = super.toJSON(t);
            (e.glslVersion = this.glslVersion), (e.uniforms = {});
            for (const n in this.uniforms) {
                const i = this.uniforms[n].value;
                i && i.isTexture
                    ? (e.uniforms[n] = { type: "t", value: i.toJSON(t).uuid })
                    : i && i.isColor
                    ? (e.uniforms[n] = { type: "c", value: i.getHex() })
                    : i && i.isVector2
                    ? (e.uniforms[n] = { type: "v2", value: i.toArray() })
                    : i && i.isVector3
                    ? (e.uniforms[n] = { type: "v3", value: i.toArray() })
                    : i && i.isVector4
                    ? (e.uniforms[n] = { type: "v4", value: i.toArray() })
                    : i && i.isMatrix3
                    ? (e.uniforms[n] = { type: "m3", value: i.toArray() })
                    : i && i.isMatrix4
                    ? (e.uniforms[n] = { type: "m4", value: i.toArray() })
                    : (e.uniforms[n] = { value: i });
            }
            Object.keys(this.defines).length > 0 && (e.defines = this.defines), (e.vertexShader = this.vertexShader), (e.fragmentShader = this.fragmentShader);
            const n = {};
            for (const t in this.extensions) !0 === this.extensions[t] && (n[t] = !0);
            return Object.keys(n).length > 0 && (e.extensions = n), e;
        }
    }
    yn.prototype.isShaderMaterial = !0;
    class _n extends oe {
        constructor() {
            super(), (this.type = "Camera"), (this.matrixWorldInverse = new Ot()), (this.projectionMatrix = new Ot()), (this.projectionMatrixInverse = new Ot());
        }
        copy(t, e) {
            return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this;
        }
        getWorldDirection(t) {
            void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), (t = new st())), this.updateWorldMatrix(!0, !1);
            const e = this.matrixWorld.elements;
            return t.set(-e[8], -e[9], -e[10]).normalize();
        }
        updateMatrixWorld(t) {
            super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        updateWorldMatrix(t, e) {
            super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        clone() {
            return new this.constructor().copy(this);
        }
    }
    _n.prototype.isCamera = !0;
    class xn extends _n {
        constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
            super(),
                (this.type = "PerspectiveCamera"),
                (this.fov = t),
                (this.zoom = 1),
                (this.near = n),
                (this.far = i),
                (this.focus = 10),
                (this.aspect = e),
                (this.view = null),
                (this.filmGauge = 35),
                (this.filmOffset = 0),
                this.updateProjectionMatrix();
        }
        copy(t, e) {
            return (
                super.copy(t, e),
                (this.fov = t.fov),
                (this.zoom = t.zoom),
                (this.near = t.near),
                (this.far = t.far),
                (this.focus = t.focus),
                (this.aspect = t.aspect),
                (this.view = null === t.view ? null : Object.assign({}, t.view)),
                (this.filmGauge = t.filmGauge),
                (this.filmOffset = t.filmOffset),
                this
            );
        }
        setFocalLength(t) {
            const e = (0.5 * this.getFilmHeight()) / t;
            (this.fov = 2 * G * Math.atan(e)), this.updateProjectionMatrix();
        }
        getFocalLength() {
            const t = Math.tan(0.5 * k * this.fov);
            return (0.5 * this.getFilmHeight()) / t;
        }
        getEffectiveFOV() {
            return 2 * G * Math.atan(Math.tan(0.5 * k * this.fov) / this.zoom);
        }
        getFilmWidth() {
            return this.filmGauge * Math.min(this.aspect, 1);
        }
        getFilmHeight() {
            return this.filmGauge / Math.max(this.aspect, 1);
        }
        setViewOffset(t, e, n, i, r, s) {
            (this.aspect = t / e),
                null === this.view && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }),
                (this.view.enabled = !0),
                (this.view.fullWidth = t),
                (this.view.fullHeight = e),
                (this.view.offsetX = n),
                (this.view.offsetY = i),
                (this.view.width = r),
                (this.view.height = s),
                this.updateProjectionMatrix();
        }
        clearViewOffset() {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
            const t = this.near;
            let e = (t * Math.tan(0.5 * k * this.fov)) / this.zoom,
                n = 2 * e,
                i = this.aspect * n,
                r = -0.5 * i;
            const s = this.view;
            if (null !== this.view && this.view.enabled) {
                const t = s.fullWidth,
                    a = s.fullHeight;
                (r += (s.offsetX * i) / t), (e -= (s.offsetY * n) / a), (i *= s.width / t), (n *= s.height / a);
            }
            const a = this.filmOffset;
            0 !== a && (r += (t * a) / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return (
                (e.object.fov = this.fov),
                (e.object.zoom = this.zoom),
                (e.object.near = this.near),
                (e.object.far = this.far),
                (e.object.focus = this.focus),
                (e.object.aspect = this.aspect),
                null !== this.view && (e.object.view = Object.assign({}, this.view)),
                (e.object.filmGauge = this.filmGauge),
                (e.object.filmOffset = this.filmOffset),
                e
            );
        }
    }
    xn.prototype.isPerspectiveCamera = !0;
    const wn = 90;
    class bn extends oe {
        constructor(t, e, n) {
            if ((super(), (this.type = "CubeCamera"), !0 !== n.isWebGLCubeRenderTarget)) return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
            this.renderTarget = n;
            const i = new xn(wn, 1, t, e);
            (i.layers = this.layers), i.up.set(0, -1, 0), i.lookAt(new st(1, 0, 0)), this.add(i);
            const r = new xn(wn, 1, t, e);
            (r.layers = this.layers), r.up.set(0, -1, 0), r.lookAt(new st(-1, 0, 0)), this.add(r);
            const s = new xn(wn, 1, t, e);
            (s.layers = this.layers), s.up.set(0, 0, 1), s.lookAt(new st(0, 1, 0)), this.add(s);
            const a = new xn(wn, 1, t, e);
            (a.layers = this.layers), a.up.set(0, 0, -1), a.lookAt(new st(0, -1, 0)), this.add(a);
            const o = new xn(wn, 1, t, e);
            (o.layers = this.layers), o.up.set(0, -1, 0), o.lookAt(new st(0, 0, 1)), this.add(o);
            const l = new xn(wn, 1, t, e);
            (l.layers = this.layers), l.up.set(0, -1, 0), l.lookAt(new st(0, 0, -1)), this.add(l);
        }
        update(t, e) {
            null === this.parent && this.updateMatrixWorld();
            const n = this.renderTarget,
                [i, r, s, a, o, l] = this.children,
                c = t.xr.enabled,
                h = t.getRenderTarget();
            t.xr.enabled = !1;
            const u = n.texture.generateMipmaps;
            (n.texture.generateMipmaps = !1),
                t.setRenderTarget(n, 0),
                t.render(e, i),
                t.setRenderTarget(n, 1),
                t.render(e, r),
                t.setRenderTarget(n, 2),
                t.render(e, s),
                t.setRenderTarget(n, 3),
                t.render(e, a),
                t.setRenderTarget(n, 4),
                t.render(e, o),
                (n.texture.generateMipmaps = u),
                t.setRenderTarget(n, 5),
                t.render(e, l),
                t.setRenderTarget(h),
                (t.xr.enabled = c);
        }
    }
    class Mn extends tt {
        constructor(t, e, i, r, s, a, o, l, c, h) {
            super((t = void 0 !== t ? t : []), (e = void 0 !== e ? e : n), i, r, s, a, (o = void 0 !== o ? o : x), l, c, h), (this._needsFlipEnvMap = !0), (this.flipY = !1);
        }
        get images() {
            return this.image;
        }
        set images(t) {
            this.image = t;
        }
    }
    Mn.prototype.isCubeTexture = !0;
    class Sn extends it {
        constructor(t, e, n) {
            Number.isInteger(e) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), (e = n)),
                super(t, t, e),
                (e = e || {}),
                (this.texture = new Mn(void 0, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding)),
                (this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps),
                (this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : d),
                (this.texture._needsFlipEnvMap = !1);
        }
        fromEquirectangularTexture(t, e) {
            (this.texture.type = e.type), (this.texture.format = w), (this.texture.encoding = e.encoding), (this.texture.generateMipmaps = e.generateMipmaps), (this.texture.minFilter = e.minFilter), (this.texture.magFilter = e.magFilter);
            const n = {
                    uniforms: { tEquirect: { value: null } },
                    vertexShader:
                        "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
                    fragmentShader:
                        "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",
                },
                i = new fn(5, 5, 5),
                r = new yn({ name: "CubemapFromEquirect", uniforms: mn(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: 1, blending: 0 });
            r.uniforms.tEquirect.value = e;
            const s = new dn(i, r),
                a = e.minFilter;
            e.minFilter === p && (e.minFilter = d);
            return new bn(1, 10, this).update(t, s), (e.minFilter = a), s.geometry.dispose(), s.material.dispose(), this;
        }
        clear(t, e, n, i) {
            const r = t.getRenderTarget();
            for (let r = 0; r < 6; r++) t.setRenderTarget(this, r), t.clear(e, n, i);
            t.setRenderTarget(r);
        }
    }
    Sn.prototype.isWebGLCubeRenderTarget = !0;
    const Tn = new At(),
        En = new st();
    class An {
        constructor(t = new ue(), e = new ue(), n = new ue(), i = new ue(), r = new ue(), s = new ue()) {
            this.planes = [t, e, n, i, r, s];
        }
        set(t, e, n, i, r, s) {
            const a = this.planes;
            return a[0].copy(t), a[1].copy(e), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(s), this;
        }
        copy(t) {
            const e = this.planes;
            for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
            return this;
        }
        setFromProjectionMatrix(t) {
            const e = this.planes,
                n = t.elements,
                i = n[0],
                r = n[1],
                s = n[2],
                a = n[3],
                o = n[4],
                l = n[5],
                c = n[6],
                h = n[7],
                u = n[8],
                d = n[9],
                p = n[10],
                f = n[11],
                m = n[12],
                g = n[13],
                v = n[14],
                y = n[15];
            return (
                e[0].setComponents(a - i, h - o, f - u, y - m).normalize(),
                e[1].setComponents(a + i, h + o, f + u, y + m).normalize(),
                e[2].setComponents(a + r, h + l, f + d, y + g).normalize(),
                e[3].setComponents(a - r, h - l, f - d, y - g).normalize(),
                e[4].setComponents(a - s, h - c, f - p, y - v).normalize(),
                e[5].setComponents(a + s, h + c, f + p, y + v).normalize(),
                this
            );
        }
        intersectsObject(t) {
            const e = t.geometry;
            return null === e.boundingSphere && e.computeBoundingSphere(), Tn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(Tn);
        }
        intersectsSprite(t) {
            return Tn.center.set(0, 0, 0), (Tn.radius = 0.7071067811865476), Tn.applyMatrix4(t.matrixWorld), this.intersectsSphere(Tn);
        }
        intersectsSphere(t) {
            const e = this.planes,
                n = t.center,
                i = -t.radius;
            for (let t = 0; t < 6; t++) {
                if (e[t].distanceToPoint(n) < i) return !1;
            }
            return !0;
        }
        intersectsBox(t) {
            const e = this.planes;
            for (let n = 0; n < 6; n++) {
                const i = e[n];
                if (((En.x = i.normal.x > 0 ? t.max.x : t.min.x), (En.y = i.normal.y > 0 ? t.max.y : t.min.y), (En.z = i.normal.z > 0 ? t.max.z : t.min.z), i.distanceToPoint(En) < 0)) return !1;
            }
            return !0;
        }
        containsPoint(t) {
            const e = this.planes;
            for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return !1;
            return !0;
        }
        clone() {
            return new this.constructor().copy(this);
        }
    }
    function Ln() {
        let t = null,
            e = !1,
            n = null,
            i = null;
        function r(e, s) {
            n(e, s), (i = t.requestAnimationFrame(r));
        }
        return {
            start: function () {
                !0 !== e && null !== n && ((i = t.requestAnimationFrame(r)), (e = !0));
            },
            stop: function () {
                t.cancelAnimationFrame(i), (e = !1);
            },
            setAnimationLoop: function (t) {
                n = t;
            },
            setContext: function (e) {
                t = e;
            },
        };
    }
    function Rn(t, e) {
        const n = e.isWebGL2,
            i = new WeakMap();
        return {
            get: function (t) {
                return t.isInterleavedBufferAttribute && (t = t.data), i.get(t);
            },
            remove: function (e) {
                e.isInterleavedBufferAttribute && (e = e.data);
                const n = i.get(e);
                n && (t.deleteBuffer(n.buffer), i.delete(e));
            },
            update: function (e, r) {
                if (e.isGLBufferAttribute) {
                    const t = i.get(e);
                    return void ((!t || t.version < e.version) && i.set(e, { buffer: e.buffer, type: e.type, bytesPerElement: e.elementSize, version: e.version }));
                }
                e.isInterleavedBufferAttribute && (e = e.data);
                const s = i.get(e);
                void 0 === s
                    ? i.set(
                          e,
                          (function (e, i) {
                              const r = e.array,
                                  s = e.usage,
                                  a = t.createBuffer();
                              t.bindBuffer(i, a), t.bufferData(i, r, s), e.onUploadCallback();
                              let o = 5126;
                              return (
                                  r instanceof Float32Array
                                      ? (o = 5126)
                                      : r instanceof Float64Array
                                      ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.")
                                      : r instanceof Uint16Array
                                      ? e.isFloat16BufferAttribute
                                          ? n
                                              ? (o = 5131)
                                              : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.")
                                          : (o = 5123)
                                      : r instanceof Int16Array
                                      ? (o = 5122)
                                      : r instanceof Uint32Array
                                      ? (o = 5125)
                                      : r instanceof Int32Array
                                      ? (o = 5124)
                                      : r instanceof Int8Array
                                      ? (o = 5120)
                                      : (r instanceof Uint8Array || r instanceof Uint8ClampedArray) && (o = 5121),
                                  { buffer: a, type: o, bytesPerElement: r.BYTES_PER_ELEMENT, version: e.version }
                              );
                          })(e, r)
                      )
                    : s.version < e.version &&
                      (!(function (e, i, r) {
                          const s = i.array,
                              a = i.updateRange;
                          t.bindBuffer(r, e),
                              -1 === a.count
                                  ? t.bufferSubData(r, 0, s)
                                  : (n ? t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s, a.offset, a.count) : t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s.subarray(a.offset, a.offset + a.count)), (a.count = -1));
                      })(s.buffer, e, r),
                      (s.version = e.version));
            },
        };
    }
    class Cn extends Xe {
        constructor(t = 1, e = 1, n = 1, i = 1) {
            super(), (this.type = "PlaneGeometry"), (this.parameters = { width: t, height: e, widthSegments: n, heightSegments: i });
            const r = t / 2,
                s = e / 2,
                a = Math.floor(n),
                o = Math.floor(i),
                l = a + 1,
                c = o + 1,
                h = t / a,
                u = e / o,
                d = [],
                p = [],
                f = [],
                m = [];
            for (let t = 0; t < c; t++) {
                const e = t * u - s;
                for (let n = 0; n < l; n++) {
                    const i = n * h - r;
                    p.push(i, -e, 0), f.push(0, 0, 1), m.push(n / a), m.push(1 - t / o);
                }
            }
            for (let t = 0; t < o; t++)
                for (let e = 0; e < a; e++) {
                    const n = e + l * t,
                        i = e + l * (t + 1),
                        r = e + 1 + l * (t + 1),
                        s = e + 1 + l * t;
                    d.push(n, i, s), d.push(i, r, s);
                }
            this.setIndex(d), this.setAttribute("position", new Fe(p, 3)), this.setAttribute("normal", new Fe(f, 3)), this.setAttribute("uv", new Fe(m, 2));
        }
    }
    const Pn = {
            alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
            alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
            alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
            aomap_fragment:
                "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
            aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
            begin_vertex: "vec3 transformed = vec3( position );",
            beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
            bsdfs:
                "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
            bumpmap_pars_fragment:
                "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
            clipping_planes_fragment:
                "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
            clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
            clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
            clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
            color_fragment: "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
            color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
            color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
            color_vertex:
                "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
            common:
                "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
            cube_uv_reflection_fragment:
                "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y += texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
            defaultnormal_vertex:
                "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
            displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
            displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
            emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
            emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
            encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
            encodings_pars_fragment:
                "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
            envmap_fragment:
                "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
            envmap_common_pars_fragment:
                "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
            envmap_pars_fragment:
                "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
            envmap_pars_vertex:
                "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
            envmap_physical_pars_fragment:
                "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
            envmap_vertex:
                "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
            fog_vertex: "#ifdef USE_FOG\n\tfogDepth = - mvPosition.z;\n#endif",
            fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
            fog_fragment:
                "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
            fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
            gradientmap_pars_fragment:
                "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
            lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
            lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
            lights_lambert_vertex:
                "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
            lights_pars_begin:
                "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
            lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
            lights_toon_pars_fragment:
                "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
            lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
            lights_phong_pars_fragment:
                "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
            lights_physical_fragment:
                "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), rawDiffuseColor, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), rawDiffuseColor, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
            lights_physical_pars_fragment:
                "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
            lights_fragment_begin:
                "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
            lights_fragment_maps:
                "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
            lights_fragment_end:
                "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
            logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
            logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
            logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
            logdepthbuf_vertex:
                "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
            map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
            map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
            map_particle_fragment:
                "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
            map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
            metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
            metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
            morphnormal_vertex:
                "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
            morphtarget_pars_vertex:
                "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
            morphtarget_vertex:
                "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
            normal_fragment_begin:
                "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
            normal_fragment_maps:
                "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
            normalmap_pars_fragment:
                "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",
            clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
            clearcoat_normal_fragment_maps:
                "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif",
            clearcoat_pars_fragment:
                "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
            packing:
                "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
            premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
            project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
            dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
            dithering_pars_fragment:
                "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
            roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
            roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
            shadowmap_pars_fragment:
                "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
            shadowmap_pars_vertex:
                "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
            shadowmap_vertex:
                "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
            shadowmask_pars_fragment:
                "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
            skinbase_vertex:
                "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
            skinning_pars_vertex:
                "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
            skinning_vertex:
                "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
            skinnormal_vertex:
                "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
            specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
            specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
            tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
            tonemapping_pars_fragment:
                "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
            transmission_fragment:
                "#ifdef USE_TRANSMISSION\n\t#ifdef USE_TRANSMISSIONMAP\n\t\ttotalTransmission *= texture2D( transmissionMap, vUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSNMAP\n\t\tthicknessFactor *= texture2D( thicknessMap, vUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition.xyz / vWorldPosition.w;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n\tfloat ior = ( 1.0 + 0.4 * reflectivity ) / ( 1.0 - 0.4 * reflectivity );\n\tvec3 f0 = vec3( pow( ior - 1.0, 2.0 ) / pow( ior + 1.0, 2.0 ) );\n\tvec3 f90 = vec3( 1.0 );\n\tvec3 f_transmission = totalTransmission * getIBLVolumeRefraction(\n\t\tnormal, v, viewDir, roughnessFactor, diffuseColor.rgb, f0, f90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,\n\t\tattenuationColor, attenuationDistance);\n\tdiffuseColor.rgb = mix( diffuseColor.rgb, f_transmission, totalTransmission );\n#endif",
            transmission_pars_fragment:
                "#ifdef USE_TRANSMISSION\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec4 vWorldPosition;\n\tvec3 getVolumeTransmissionRay(vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix) {\n\t\tvec3 refractionVector = refract(-v, normalize(n), 1.0 / ior);\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length(vec3(modelMatrix[0].xyz));\n\t\tmodelScale.y = length(vec3(modelMatrix[1].xyz));\n\t\tmodelScale.z = length(vec3(modelMatrix[2].xyz));\n\t\treturn normalize(refractionVector) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness(float roughness, float ior) {\n\t\treturn roughness * clamp(ior * 2.0 - 2.0, 0.0, 1.0);\n\t}\n\tvec3 getTransmissionSample(vec2 fragCoord, float roughness, float ior) {\n\t\tfloat framebufferLod = log2(transmissionSamplerSize.x) * applyIorToRoughness(roughness, ior);\n\t\treturn texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod).rgb;\n\t}\n\tvec3 applyVolumeAttenuation(vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance) {\n\t\tif (attenuationDistance == 0.0) {\n\t\t\treturn radiance;\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log(attenuationColor) / attenuationDistance;\n\t\t\tvec3 transmittance = exp(-attenuationCoefficient * transmissionDistance);\t\t\treturn transmittance * radiance;\n\t\t}\n\t}\n\tvec3 getIBLVolumeRefraction(vec3 n, vec3 v, vec3 viewDir, float perceptualRoughness, vec3 baseColor, vec3 f0, vec3 f90,\n\t\tvec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness, vec3 attenuationColor, float attenuationDistance) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay(n, v, thickness, ior, modelMatrix);\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4(refractedRayExit, 1.0);\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec3 transmittedLight = getTransmissionSample(refractionCoords, perceptualRoughness, ior);\n\t\tvec3 attenuatedColor = applyVolumeAttenuation(transmittedLight, length(transmissionRay), attenuationColor, attenuationDistance);\n\t\tfloat NdotV = saturate(dot(n, viewDir));\n\t\tvec2 brdf = integrateSpecularBRDF(NdotV, perceptualRoughness);\n\t\tvec3 specularColor = f0 * brdf.x + f90 * brdf.y;\n\t\treturn (1.0 - specularColor) * attenuatedColor * baseColor;\n\t}\n#endif",
            uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
            uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
            uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
            uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
            uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
            uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
            worldpos_vertex:
                "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
            background_frag:
                "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
            background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
            cube_frag:
                "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
            cube_vert:
                "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
            depth_frag:
                "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
            depth_vert:
                "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
            distanceRGBA_frag:
                "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
            distanceRGBA_vert:
                "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
            equirect_frag:
                "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
            equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
            linedashed_frag:
                "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
            linedashed_vert:
                "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
            meshbasic_frag:
                "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
            meshbasic_vert:
                "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
            meshlambert_frag:
                "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
            meshlambert_vert:
                "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
            meshmatcap_frag:
                "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
            meshmatcap_vert:
                "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
            meshtoon_frag:
                "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
            meshtoon_vert:
                "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
            meshphong_frag:
                "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
            meshphong_vert:
                "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
            meshphysical_frag:
                "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform vec3 attenuationColor;\n\tuniform float attenuationDistance;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <transmission_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#ifdef USE_TRANSMISSION\n\t\tfloat totalTransmission = transmission;\n\t\tfloat thicknessFactor = thickness;\n\t#endif\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\tvec3 rawDiffuseColor = diffuseColor.rgb;\n\t#include <transmission_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
            meshphysical_vert:
                "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#ifdef USE_TRANSMISSION\n\tvarying vec4 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition;\n#endif\n}",
            normal_frag:
                "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
            normal_vert:
                "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
            points_frag:
                "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
            points_vert:
                "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
            shadow_frag:
                "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
            shadow_vert:
                "#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
            sprite_frag:
                "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
            sprite_vert:
                "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
        },
        Dn = {
            common: { diffuse: { value: new Pe(16777215) }, opacity: { value: 1 }, map: { value: null }, uvTransform: { value: new J() }, uv2Transform: { value: new J() }, alphaMap: { value: null } },
            specularmap: { specularMap: { value: null } },
            envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, refractionRatio: { value: 0.98 }, maxMipLevel: { value: 0 } },
            aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
            lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
            emissivemap: { emissiveMap: { value: null } },
            bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
            normalmap: { normalMap: { value: null }, normalScale: { value: new Z(1, 1) } },
            displacementmap: { displacementMap: { value: null }, displacementScale: { value: 1 }, displacementBias: { value: 0 } },
            roughnessmap: { roughnessMap: { value: null } },
            metalnessmap: { metalnessMap: { value: null } },
            gradientmap: { gradientMap: { value: null } },
            fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Pe(16777215) } },
            lights: {
                ambientLightColor: { value: [] },
                lightProbe: { value: [] },
                directionalLights: { value: [], properties: { direction: {}, color: {} } },
                directionalLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } },
                directionalShadowMap: { value: [] },
                directionalShadowMatrix: { value: [] },
                spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } },
                spotLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } },
                spotShadowMap: { value: [] },
                spotShadowMatrix: { value: [] },
                pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } },
                pointLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } },
                pointShadowMap: { value: [] },
                pointShadowMatrix: { value: [] },
                hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } },
                rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } },
                ltc_1: { value: null },
                ltc_2: { value: null },
            },
            points: { diffuse: { value: new Pe(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, uvTransform: { value: new J() } },
            sprite: { diffuse: { value: new Pe(16777215) }, opacity: { value: 1 }, center: { value: new Z(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, alphaMap: { value: null }, uvTransform: { value: new J() } },
        },
        In = {
            basic: { uniforms: gn([Dn.common, Dn.specularmap, Dn.envmap, Dn.aomap, Dn.lightmap, Dn.fog]), vertexShader: Pn.meshbasic_vert, fragmentShader: Pn.meshbasic_frag },
            lambert: {
                uniforms: gn([Dn.common, Dn.specularmap, Dn.envmap, Dn.aomap, Dn.lightmap, Dn.emissivemap, Dn.fog, Dn.lights, { emissive: { value: new Pe(0) } }]),
                vertexShader: Pn.meshlambert_vert,
                fragmentShader: Pn.meshlambert_frag,
            },
            phong: {
                uniforms: gn([
                    Dn.common,
                    Dn.specularmap,
                    Dn.envmap,
                    Dn.aomap,
                    Dn.lightmap,
                    Dn.emissivemap,
                    Dn.bumpmap,
                    Dn.normalmap,
                    Dn.displacementmap,
                    Dn.fog,
                    Dn.lights,
                    { emissive: { value: new Pe(0) }, specular: { value: new Pe(1118481) }, shininess: { value: 30 } },
                ]),
                vertexShader: Pn.meshphong_vert,
                fragmentShader: Pn.meshphong_frag,
            },
            standard: {
                uniforms: gn([
                    Dn.common,
                    Dn.envmap,
                    Dn.aomap,
                    Dn.lightmap,
                    Dn.emissivemap,
                    Dn.bumpmap,
                    Dn.normalmap,
                    Dn.displacementmap,
                    Dn.roughnessmap,
                    Dn.metalnessmap,
                    Dn.fog,
                    Dn.lights,
                    { emissive: { value: new Pe(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } },
                ]),
                vertexShader: Pn.meshphysical_vert,
                fragmentShader: Pn.meshphysical_frag,
            },
            toon: {
                uniforms: gn([Dn.common, Dn.aomap, Dn.lightmap, Dn.emissivemap, Dn.bumpmap, Dn.normalmap, Dn.displacementmap, Dn.gradientmap, Dn.fog, Dn.lights, { emissive: { value: new Pe(0) } }]),
                vertexShader: Pn.meshtoon_vert,
                fragmentShader: Pn.meshtoon_frag,
            },
            matcap: { uniforms: gn([Dn.common, Dn.bumpmap, Dn.normalmap, Dn.displacementmap, Dn.fog, { matcap: { value: null } }]), vertexShader: Pn.meshmatcap_vert, fragmentShader: Pn.meshmatcap_frag },
            points: { uniforms: gn([Dn.points, Dn.fog]), vertexShader: Pn.points_vert, fragmentShader: Pn.points_frag },
            dashed: { uniforms: gn([Dn.common, Dn.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Pn.linedashed_vert, fragmentShader: Pn.linedashed_frag },
            depth: { uniforms: gn([Dn.common, Dn.displacementmap]), vertexShader: Pn.depth_vert, fragmentShader: Pn.depth_frag },
            normal: { uniforms: gn([Dn.common, Dn.bumpmap, Dn.normalmap, Dn.displacementmap, { opacity: { value: 1 } }]), vertexShader: Pn.normal_vert, fragmentShader: Pn.normal_frag },
            sprite: { uniforms: gn([Dn.sprite, Dn.fog]), vertexShader: Pn.sprite_vert, fragmentShader: Pn.sprite_frag },
            background: { uniforms: { uvTransform: { value: new J() }, t2D: { value: null } }, vertexShader: Pn.background_vert, fragmentShader: Pn.background_frag },
            cube: { uniforms: gn([Dn.envmap, { opacity: { value: 1 } }]), vertexShader: Pn.cube_vert, fragmentShader: Pn.cube_frag },
            equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Pn.equirect_vert, fragmentShader: Pn.equirect_frag },
            distanceRGBA: {
                uniforms: gn([Dn.common, Dn.displacementmap, { referencePosition: { value: new st() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]),
                vertexShader: Pn.distanceRGBA_vert,
                fragmentShader: Pn.distanceRGBA_frag,
            },
            shadow: { uniforms: gn([Dn.lights, Dn.fog, { color: { value: new Pe(0) }, opacity: { value: 1 } }]), vertexShader: Pn.shadow_vert, fragmentShader: Pn.shadow_frag },
        };
    function Nn(t, e, n, i, s) {
        const a = new Pe(0);
        let o,
            l,
            c = 0,
            h = null,
            u = 0,
            d = null;
        function p(t, e) {
            n.buffers.color.setClear(t.r, t.g, t.b, e, s);
        }
        return {
            getClearColor: function () {
                return a;
            },
            setClearColor: function (t, e = 1) {
                a.set(t), (c = e), p(a, c);
            },
            getClearAlpha: function () {
                return c;
            },
            setClearAlpha: function (t) {
                (c = t), p(a, c);
            },
            render: function (n, s) {
                let f = !1,
                    m = !0 === s.isScene ? s.background : null;
                m && m.isTexture && (m = e.get(m));
                const g = t.xr,
                    v = g.getSession && g.getSession();
                v && "additive" === v.environmentBlendMode && (m = null),
                    null === m ? p(a, c) : m && m.isColor && (p(m, 1), (f = !0)),
                    (t.autoClear || f) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil),
                    m && (m.isCubeTexture || m.mapping === r)
                        ? (void 0 === l &&
                              ((l = new dn(
                                  new fn(1, 1, 1),
                                  new yn({ name: "BackgroundCubeMaterial", uniforms: mn(In.cube.uniforms), vertexShader: In.cube.vertexShader, fragmentShader: In.cube.fragmentShader, side: 1, depthTest: !1, depthWrite: !1, fog: !1 })
                              )),
                              l.geometry.deleteAttribute("normal"),
                              l.geometry.deleteAttribute("uv"),
                              (l.onBeforeRender = function (t, e, n) {
                                  this.matrixWorld.copyPosition(n.matrixWorld);
                              }),
                              Object.defineProperty(l.material, "envMap", {
                                  get: function () {
                                      return this.uniforms.envMap.value;
                                  },
                              }),
                              i.update(l)),
                          (l.material.uniforms.envMap.value = m),
                          (l.material.uniforms.flipEnvMap.value = m.isCubeTexture && m._needsFlipEnvMap ? -1 : 1),
                          (h === m && u === m.version && d === t.toneMapping) || ((l.material.needsUpdate = !0), (h = m), (u = m.version), (d = t.toneMapping)),
                          n.unshift(l, l.geometry, l.material, 0, 0, null))
                        : m &&
                          m.isTexture &&
                          (void 0 === o &&
                              ((o = new dn(
                                  new Cn(2, 2),
                                  new yn({
                                      name: "BackgroundMaterial",
                                      uniforms: mn(In.background.uniforms),
                                      vertexShader: In.background.vertexShader,
                                      fragmentShader: In.background.fragmentShader,
                                      side: 0,
                                      depthTest: !1,
                                      depthWrite: !1,
                                      fog: !1,
                                  })
                              )),
                              o.geometry.deleteAttribute("normal"),
                              Object.defineProperty(o.material, "map", {
                                  get: function () {
                                      return this.uniforms.t2D.value;
                                  },
                              }),
                              i.update(o)),
                          (o.material.uniforms.t2D.value = m),
                          !0 === m.matrixAutoUpdate && m.updateMatrix(),
                          o.material.uniforms.uvTransform.value.copy(m.matrix),
                          (h === m && u === m.version && d === t.toneMapping) || ((o.material.needsUpdate = !0), (h = m), (u = m.version), (d = t.toneMapping)),
                          n.unshift(o, o.geometry, o.material, 0, 0, null));
            },
        };
    }
    function zn(t, e, n, i) {
        const r = t.getParameter(34921),
            s = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
            a = i.isWebGL2 || null !== s,
            o = {},
            l = d(null);
        let c = l;
        function h(e) {
            return i.isWebGL2 ? t.bindVertexArray(e) : s.bindVertexArrayOES(e);
        }
        function u(e) {
            return i.isWebGL2 ? t.deleteVertexArray(e) : s.deleteVertexArrayOES(e);
        }
        function d(t) {
            const e = [],
                n = [],
                i = [];
            for (let t = 0; t < r; t++) (e[t] = 0), (n[t] = 0), (i[t] = 0);
            return { geometry: null, program: null, wireframe: !1, newAttributes: e, enabledAttributes: n, attributeDivisors: i, object: t, attributes: {}, index: null };
        }
        function p() {
            const t = c.newAttributes;
            for (let e = 0, n = t.length; e < n; e++) t[e] = 0;
        }
        function f(t) {
            m(t, 0);
        }
        function m(n, r) {
            const s = c.newAttributes,
                a = c.enabledAttributes,
                o = c.attributeDivisors;
            if (((s[n] = 1), 0 === a[n] && (t.enableVertexAttribArray(n), (a[n] = 1)), o[n] !== r)) {
                (i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), (o[n] = r);
            }
        }
        function g() {
            const e = c.newAttributes,
                n = c.enabledAttributes;
            for (let i = 0, r = n.length; i < r; i++) n[i] !== e[i] && (t.disableVertexAttribArray(i), (n[i] = 0));
        }
        function v(e, n, r, s, a, o) {
            !0 !== i.isWebGL2 || (5124 !== r && 5125 !== r) ? t.vertexAttribPointer(e, n, r, s, a, o) : t.vertexAttribIPointer(e, n, r, a, o);
        }
        function y() {
            _(), c !== l && ((c = l), h(c.object));
        }
        function _() {
            (l.geometry = null), (l.program = null), (l.wireframe = !1);
        }
        return {
            setup: function (r, l, u, y, _) {
                let x = !1;
                if (a) {
                    const e = (function (e, n, r) {
                        const a = !0 === r.wireframe;
                        let l = o[e.id];
                        void 0 === l && ((l = {}), (o[e.id] = l));
                        let c = l[n.id];
                        void 0 === c && ((c = {}), (l[n.id] = c));
                        let h = c[a];
                        void 0 === h && ((h = d(i.isWebGL2 ? t.createVertexArray() : s.createVertexArrayOES())), (c[a] = h));
                        return h;
                    })(y, u, l);
                    c !== e && ((c = e), h(c.object)),
                        (x = (function (t, e) {
                            const n = c.attributes,
                                i = t.attributes;
                            let r = 0;
                            for (const t in i) {
                                const e = n[t],
                                    s = i[t];
                                if (void 0 === e) return !0;
                                if (e.attribute !== s) return !0;
                                if (e.data !== s.data) return !0;
                                r++;
                            }
                            return c.attributesNum !== r || c.index !== e;
                        })(y, _)),
                        x &&
                            (function (t, e) {
                                const n = {},
                                    i = t.attributes;
                                let r = 0;
                                for (const t in i) {
                                    const e = i[t],
                                        s = {};
                                    (s.attribute = e), e.data && (s.data = e.data), (n[t] = s), r++;
                                }
                                (c.attributes = n), (c.attributesNum = r), (c.index = e);
                            })(y, _);
                } else {
                    const t = !0 === l.wireframe;
                    (c.geometry === y.id && c.program === u.id && c.wireframe === t) || ((c.geometry = y.id), (c.program = u.id), (c.wireframe = t), (x = !0));
                }
                !0 === r.isInstancedMesh && (x = !0),
                    null !== _ && n.update(_, 34963),
                    x &&
                        (!(function (r, s, a, o) {
                            if (!1 === i.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays")) return;
                            p();
                            const l = o.attributes,
                                c = a.getAttributes(),
                                h = s.defaultAttributeValues;
                            for (const e in c) {
                                const i = c[e];
                                if (i >= 0) {
                                    const s = l[e];
                                    if (void 0 !== s) {
                                        const e = s.normalized,
                                            r = s.itemSize,
                                            a = n.get(s);
                                        if (void 0 === a) continue;
                                        const l = a.buffer,
                                            c = a.type,
                                            h = a.bytesPerElement;
                                        if (s.isInterleavedBufferAttribute) {
                                            const n = s.data,
                                                a = n.stride,
                                                u = s.offset;
                                            n && n.isInstancedInterleavedBuffer ? (m(i, n.meshPerAttribute), void 0 === o._maxInstanceCount && (o._maxInstanceCount = n.meshPerAttribute * n.count)) : f(i),
                                                t.bindBuffer(34962, l),
                                                v(i, r, c, e, a * h, u * h);
                                        } else
                                            s.isInstancedBufferAttribute ? (m(i, s.meshPerAttribute), void 0 === o._maxInstanceCount && (o._maxInstanceCount = s.meshPerAttribute * s.count)) : f(i),
                                                t.bindBuffer(34962, l),
                                                v(i, r, c, e, 0, 0);
                                    } else if ("instanceMatrix" === e) {
                                        const e = n.get(r.instanceMatrix);
                                        if (void 0 === e) continue;
                                        const s = e.buffer,
                                            a = e.type;
                                        m(i + 0, 1),
                                            m(i + 1, 1),
                                            m(i + 2, 1),
                                            m(i + 3, 1),
                                            t.bindBuffer(34962, s),
                                            t.vertexAttribPointer(i + 0, 4, a, !1, 64, 0),
                                            t.vertexAttribPointer(i + 1, 4, a, !1, 64, 16),
                                            t.vertexAttribPointer(i + 2, 4, a, !1, 64, 32),
                                            t.vertexAttribPointer(i + 3, 4, a, !1, 64, 48);
                                    } else if ("instanceColor" === e) {
                                        const e = n.get(r.instanceColor);
                                        if (void 0 === e) continue;
                                        const s = e.buffer,
                                            a = e.type;
                                        m(i, 1), t.bindBuffer(34962, s), t.vertexAttribPointer(i, 3, a, !1, 12, 0);
                                    } else if (void 0 !== h) {
                                        const n = h[e];
                                        if (void 0 !== n)
                                            switch (n.length) {
                                                case 2:
                                                    t.vertexAttrib2fv(i, n);
                                                    break;
                                                case 3:
                                                    t.vertexAttrib3fv(i, n);
                                                    break;
                                                case 4:
                                                    t.vertexAttrib4fv(i, n);
                                                    break;
                                                default:
                                                    t.vertexAttrib1fv(i, n);
                                            }
                                    }
                                }
                            }
                            g();
                        })(r, l, u, y),
                        null !== _ && t.bindBuffer(34963, n.get(_).buffer));
            },
            reset: y,
            resetDefaultState: _,
            dispose: function () {
                y();
                for (const t in o) {
                    const e = o[t];
                    for (const t in e) {
                        const n = e[t];
                        for (const t in n) u(n[t].object), delete n[t];
                        delete e[t];
                    }
                    delete o[t];
                }
            },
            releaseStatesOfGeometry: function (t) {
                if (void 0 === o[t.id]) return;
                const e = o[t.id];
                for (const t in e) {
                    const n = e[t];
                    for (const t in n) u(n[t].object), delete n[t];
                    delete e[t];
                }
                delete o[t.id];
            },
            releaseStatesOfProgram: function (t) {
                for (const e in o) {
                    const n = o[e];
                    if (void 0 === n[t.id]) continue;
                    const i = n[t.id];
                    for (const t in i) u(i[t].object), delete i[t];
                    delete n[t.id];
                }
            },
            initAttributes: p,
            enableAttribute: f,
            disableUnusedAttributes: g,
        };
    }
    function On(t, e, n, i) {
        const r = i.isWebGL2;
        let s;
        (this.setMode = function (t) {
            s = t;
        }),
            (this.render = function (e, i) {
                t.drawArrays(s, e, i), n.update(i, s, 1);
            }),
            (this.renderInstances = function (i, a, o) {
                if (0 === o) return;
                let l, c;
                if (r) (l = t), (c = "drawArraysInstanced");
                else if (((l = e.get("ANGLE_instanced_arrays")), (c = "drawArraysInstancedANGLE"), null === l))
                    return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                l[c](s, i, a, o), n.update(a, s, o);
            });
    }
    function Bn(t, e, n) {
        let i;
        function r(e) {
            if ("highp" === e) {
                if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
                e = "mediump";
            }
            return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
        }
        const s = ("undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext) || ("undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext);
        let a = void 0 !== n.precision ? n.precision : "highp";
        const o = r(a);
        o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."), (a = o));
        const l = s || e.has("WEBGL_draw_buffers"),
            c = !0 === n.logarithmicDepthBuffer,
            h = t.getParameter(34930),
            u = t.getParameter(35660),
            d = t.getParameter(3379),
            p = t.getParameter(34076),
            f = t.getParameter(34921),
            m = t.getParameter(36347),
            g = t.getParameter(36348),
            v = t.getParameter(36349),
            y = u > 0,
            _ = s || e.has("OES_texture_float");
        return {
            isWebGL2: s,
            drawBuffers: l,
            getMaxAnisotropy: function () {
                if (void 0 !== i) return i;
                if (!0 === e.has("EXT_texture_filter_anisotropic")) {
                    const n = e.get("EXT_texture_filter_anisotropic");
                    i = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                } else i = 0;
                return i;
            },
            getMaxPrecision: r,
            precision: a,
            logarithmicDepthBuffer: c,
            maxTextures: h,
            maxVertexTextures: u,
            maxTextureSize: d,
            maxCubemapSize: p,
            maxAttributes: f,
            maxVertexUniforms: m,
            maxVaryings: g,
            maxFragmentUniforms: v,
            vertexTextures: y,
            floatFragmentTextures: _,
            floatVertexTextures: y && _,
            maxSamples: s ? t.getParameter(36183) : 0,
        };
    }
    function Fn(t) {
        const e = this;
        let n = null,
            i = 0,
            r = !1,
            s = !1;
        const a = new ue(),
            o = new J(),
            l = { value: null, needsUpdate: !1 };
        function c() {
            l.value !== n && ((l.value = n), (l.needsUpdate = i > 0)), (e.numPlanes = i), (e.numIntersection = 0);
        }
        function h(t, n, i, r) {
            const s = null !== t ? t.length : 0;
            let c = null;
            if (0 !== s) {
                if (((c = l.value), !0 !== r || null === c)) {
                    const e = i + 4 * s,
                        r = n.matrixWorldInverse;
                    o.getNormalMatrix(r), (null === c || c.length < e) && (c = new Float32Array(e));
                    for (let e = 0, n = i; e !== s; ++e, n += 4) a.copy(t[e]).applyMatrix4(r, o), a.normal.toArray(c, n), (c[n + 3] = a.constant);
                }
                (l.value = c), (l.needsUpdate = !0);
            }
            return (e.numPlanes = s), (e.numIntersection = 0), c;
        }
        (this.uniform = l),
            (this.numPlanes = 0),
            (this.numIntersection = 0),
            (this.init = function (t, e, s) {
                const a = 0 !== t.length || e || 0 !== i || r;
                return (r = e), (n = h(t, s, 0)), (i = t.length), a;
            }),
            (this.beginShadows = function () {
                (s = !0), h(null);
            }),
            (this.endShadows = function () {
                (s = !1), c();
            }),
            (this.setState = function (e, a, o) {
                const u = e.clippingPlanes,
                    d = e.clipIntersection,
                    p = e.clipShadows,
                    f = t.get(e);
                if (!r || null === u || 0 === u.length || (s && !p)) s ? h(null) : c();
                else {
                    const t = s ? 0 : i,
                        e = 4 * t;
                    let r = f.clippingState || null;
                    (l.value = r), (r = h(u, a, e, o));
                    for (let t = 0; t !== e; ++t) r[t] = n[t];
                    (f.clippingState = r), (this.numIntersection = d ? this.numPlanes : 0), (this.numPlanes += t);
                }
            });
    }
    function Hn(t) {
        let e = new WeakMap();
        function r(t, e) {
            return 303 === e ? (t.mapping = n) : 304 === e && (t.mapping = i), t;
        }
        function s(t) {
            const n = t.target;
            n.removeEventListener("dispose", s);
            const i = e.get(n);
            void 0 !== i && (e.delete(n), i.dispose());
        }
        return {
            get: function (n) {
                if (n && n.isTexture) {
                    const i = n.mapping;
                    if (303 === i || 304 === i) {
                        if (e.has(n)) {
                            return r(e.get(n).texture, n.mapping);
                        }
                        {
                            const i = n.image;
                            if (i && i.height > 0) {
                                const a = t.getRenderTarget(),
                                    o = new Sn(i.height / 2);
                                return o.fromEquirectangularTexture(t, n), e.set(n, o), t.setRenderTarget(a), n.addEventListener("dispose", s), r(o.texture, n.mapping);
                            }
                            return null;
                        }
                    }
                }
                return n;
            },
            dispose: function () {
                e = new WeakMap();
            },
        };
    }
    function Un(t) {
        const e = {};
        function n(n) {
            if (void 0 !== e[n]) return e[n];
            let i;
            switch (n) {
                case "WEBGL_depth_texture":
                    i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case "EXT_texture_filter_anisotropic":
                    i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                default:
                    i = t.getExtension(n);
            }
            return (e[n] = i), i;
        }
        return {
            has: function (t) {
                return null !== n(t);
            },
            init: function (t) {
                t.isWebGL2
                    ? n("EXT_color_buffer_float")
                    : (n("WEBGL_depth_texture"),
                      n("OES_texture_float"),
                      n("OES_texture_half_float"),
                      n("OES_texture_half_float_linear"),
                      n("OES_standard_derivatives"),
                      n("OES_element_index_uint"),
                      n("OES_vertex_array_object"),
                      n("ANGLE_instanced_arrays")),
                    n("OES_texture_float_linear"),
                    n("EXT_color_buffer_half_float");
            },
            get: function (t) {
                const e = n(t);
                return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."), e;
            },
        };
    }
    function kn(t, e, n, i) {
        const r = {},
            s = new WeakMap();
        function a(t) {
            const o = t.target;
            null !== o.index && e.remove(o.index);
            for (const t in o.attributes) e.remove(o.attributes[t]);
            o.removeEventListener("dispose", a), delete r[o.id];
            const l = s.get(o);
            l && (e.remove(l), s.delete(o)), i.releaseStatesOfGeometry(o), !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount, n.memory.geometries--;
        }
        function o(t) {
            const n = [],
                i = t.index,
                r = t.attributes.position;
            let a = 0;
            if (null !== i) {
                const t = i.array;
                a = i.version;
                for (let e = 0, i = t.length; e < i; e += 3) {
                    const i = t[e + 0],
                        r = t[e + 1],
                        s = t[e + 2];
                    n.push(i, r, r, s, s, i);
                }
            } else {
                const t = r.array;
                a = r.version;
                for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
                    const t = e + 0,
                        i = e + 1,
                        r = e + 2;
                    n.push(t, i, i, r, r, t);
                }
            }
            const o = new (He(n) > 65535 ? Be : Oe)(n, 1);
            o.version = a;
            const l = s.get(t);
            l && e.remove(l), s.set(t, o);
        }
        return {
            get: function (t, e) {
                return !0 === r[e.id] || (e.addEventListener("dispose", a), (r[e.id] = !0), n.memory.geometries++), e;
            },
            update: function (t) {
                const n = t.attributes;
                for (const t in n) e.update(n[t], 34962);
                const i = t.morphAttributes;
                for (const t in i) {
                    const n = i[t];
                    for (let t = 0, i = n.length; t < i; t++) e.update(n[t], 34962);
                }
            },
            getWireframeAttribute: function (t) {
                const e = s.get(t);
                if (e) {
                    const n = t.index;
                    null !== n && e.version < n.version && o(t);
                } else o(t);
                return s.get(t);
            },
        };
    }
    function Gn(t, e, n, i) {
        const r = i.isWebGL2;
        let s, a, o;
        (this.setMode = function (t) {
            s = t;
        }),
            (this.setIndex = function (t) {
                (a = t.type), (o = t.bytesPerElement);
            }),
            (this.render = function (e, i) {
                t.drawElements(s, i, a, e * o), n.update(i, s, 1);
            }),
            (this.renderInstances = function (i, l, c) {
                if (0 === c) return;
                let h, u;
                if (r) (h = t), (u = "drawElementsInstanced");
                else if (((h = e.get("ANGLE_instanced_arrays")), (u = "drawElementsInstancedANGLE"), null === h))
                    return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                h[u](s, l, a, i * o, c), n.update(l, s, c);
            });
    }
    function Vn(t) {
        const e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
        return {
            memory: { geometries: 0, textures: 0 },
            render: e,
            programs: null,
            autoReset: !0,
            reset: function () {
                e.frame++, (e.calls = 0), (e.triangles = 0), (e.points = 0), (e.lines = 0);
            },
            update: function (t, n, i) {
                switch ((e.calls++, n)) {
                    case 4:
                        e.triangles += i * (t / 3);
                        break;
                    case 1:
                        e.lines += i * (t / 2);
                        break;
                    case 3:
                        e.lines += i * (t - 1);
                        break;
                    case 2:
                        e.lines += i * t;
                        break;
                    case 0:
                        e.points += i * t;
                        break;
                    default:
                        console.error("THREE.WebGLInfo: Unknown draw mode:", n);
                }
            },
        };
    }
    function Wn(t, e) {
        return t[0] - e[0];
    }
    function jn(t, e) {
        return Math.abs(e[1]) - Math.abs(t[1]);
    }
    function qn(t) {
        const e = {},
            n = new Float32Array(8),
            i = [];
        for (let t = 0; t < 8; t++) i[t] = [t, 0];
        return {
            update: function (r, s, a, o) {
                const l = r.morphTargetInfluences,
                    c = void 0 === l ? 0 : l.length;
                let h = e[s.id];
                if (void 0 === h) {
                    h = [];
                    for (let t = 0; t < c; t++) h[t] = [t, 0];
                    e[s.id] = h;
                }
                for (let t = 0; t < c; t++) {
                    const e = h[t];
                    (e[0] = t), (e[1] = l[t]);
                }
                h.sort(jn);
                for (let t = 0; t < 8; t++) t < c && h[t][1] ? ((i[t][0] = h[t][0]), (i[t][1] = h[t][1])) : ((i[t][0] = Number.MAX_SAFE_INTEGER), (i[t][1] = 0));
                i.sort(Wn);
                const u = a.morphTargets && s.morphAttributes.position,
                    d = a.morphNormals && s.morphAttributes.normal;
                let p = 0;
                for (let t = 0; t < 8; t++) {
                    const e = i[t],
                        r = e[0],
                        a = e[1];
                    r !== Number.MAX_SAFE_INTEGER && a
                        ? (u && s.getAttribute("morphTarget" + t) !== u[r] && s.setAttribute("morphTarget" + t, u[r]), d && s.getAttribute("morphNormal" + t) !== d[r] && s.setAttribute("morphNormal" + t, d[r]), (n[t] = a), (p += a))
                        : (u && !0 === s.hasAttribute("morphTarget" + t) && s.deleteAttribute("morphTarget" + t), d && !0 === s.hasAttribute("morphNormal" + t) && s.deleteAttribute("morphNormal" + t), (n[t] = 0));
                }
                const f = s.morphTargetsRelative ? 1 : 1 - p;
                o.getUniforms().setValue(t, "morphTargetBaseInfluence", f), o.getUniforms().setValue(t, "morphTargetInfluences", n);
            },
        };
    }
    function Xn(t, e, n, i) {
        let r = new WeakMap();
        function s(t) {
            const e = t.target;
            e.removeEventListener("dispose", s), n.remove(e.instanceMatrix), null !== e.instanceColor && n.remove(e.instanceColor);
        }
        return {
            update: function (t) {
                const a = i.render.frame,
                    o = t.geometry,
                    l = e.get(t, o);
                return (
                    r.get(l) !== a && (e.update(l), r.set(l, a)),
                    t.isInstancedMesh && (!1 === t.hasEventListener("dispose", s) && t.addEventListener("dispose", s), n.update(t.instanceMatrix, 34962), null !== t.instanceColor && n.update(t.instanceColor, 34962)),
                    l
                );
            },
            dispose: function () {
                r = new WeakMap();
            },
        };
    }
    In.physical = {
        uniforms: gn([
            In.standard.uniforms,
            {
                clearcoat: { value: 0 },
                clearcoatMap: { value: null },
                clearcoatRoughness: { value: 0 },
                clearcoatRoughnessMap: { value: null },
                clearcoatNormalScale: { value: new Z(1, 1) },
                clearcoatNormalMap: { value: null },
                sheen: { value: new Pe(0) },
                transmission: { value: 0 },
                transmissionMap: { value: null },
                transmissionSamplerSize: { value: new Z() },
                transmissionSamplerMap: { value: null },
                thickness: { value: 0 },
                thicknessMap: { value: null },
                attenuationDistance: { value: 0 },
                attenuationColor: { value: new Pe(0) },
            },
        ]),
        vertexShader: Pn.meshphysical_vert,
        fragmentShader: Pn.meshphysical_frag,
    };
    class Yn extends tt {
        constructor(t = null, e = 1, n = 1, i = 1) {
            super(null),
                (this.image = { data: t, width: e, height: n, depth: i }),
                (this.magFilter = c),
                (this.minFilter = c),
                (this.wrapR = o),
                (this.generateMipmaps = !1),
                (this.flipY = !1),
                (this.unpackAlignment = 1),
                (this.needsUpdate = !0);
        }
    }
    Yn.prototype.isDataTexture2DArray = !0;
    class Zn extends tt {
        constructor(t = null, e = 1, n = 1, i = 1) {
            super(null),
                (this.image = { data: t, width: e, height: n, depth: i }),
                (this.magFilter = c),
                (this.minFilter = c),
                (this.wrapR = o),
                (this.generateMipmaps = !1),
                (this.flipY = !1),
                (this.unpackAlignment = 1),
                (this.needsUpdate = !0);
        }
    }
    Zn.prototype.isDataTexture3D = !0;
    const Jn = new tt(),
        Qn = new Yn(),
        Kn = new Zn(),
        $n = new Mn(),
        ti = [],
        ei = [],
        ni = new Float32Array(16),
        ii = new Float32Array(9),
        ri = new Float32Array(4);
    function si(t, e, n) {
        const i = t[0];
        if (i <= 0 || i > 0) return t;
        const r = e * n;
        let s = ti[r];
        if ((void 0 === s && ((s = new Float32Array(r)), (ti[r] = s)), 0 !== e)) {
            i.toArray(s, 0);
            for (let i = 1, r = 0; i !== e; ++i) (r += n), t[i].toArray(s, r);
        }
        return s;
    }
    function ai(t, e) {
        if (t.length !== e.length) return !1;
        for (let n = 0, i = t.length; n < i; n++) if (t[n] !== e[n]) return !1;
        return !0;
    }
    function oi(t, e) {
        for (let n = 0, i = e.length; n < i; n++) t[n] = e[n];
    }
    function li(t, e) {
        let n = ei[e];
        void 0 === n && ((n = new Int32Array(e)), (ei[e] = n));
        for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
        return n;
    }
    function ci(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1f(this.addr, e), (n[0] = e));
    }
    function hi(t, e) {
        const n = this.cache;
        if (void 0 !== e.x) (n[0] === e.x && n[1] === e.y) || (t.uniform2f(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
        else {
            if (ai(n, e)) return;
            t.uniform2fv(this.addr, e), oi(n, e);
        }
    }
    function ui(t, e) {
        const n = this.cache;
        if (void 0 !== e.x) (n[0] === e.x && n[1] === e.y && n[2] === e.z) || (t.uniform3f(this.addr, e.x, e.y, e.z), (n[0] = e.x), (n[1] = e.y), (n[2] = e.z));
        else if (void 0 !== e.r) (n[0] === e.r && n[1] === e.g && n[2] === e.b) || (t.uniform3f(this.addr, e.r, e.g, e.b), (n[0] = e.r), (n[1] = e.g), (n[2] = e.b));
        else {
            if (ai(n, e)) return;
            t.uniform3fv(this.addr, e), oi(n, e);
        }
    }
    function di(t, e) {
        const n = this.cache;
        if (void 0 !== e.x) (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), (n[0] = e.x), (n[1] = e.y), (n[2] = e.z), (n[3] = e.w));
        else {
            if (ai(n, e)) return;
            t.uniform4fv(this.addr, e), oi(n, e);
        }
    }
    function pi(t, e) {
        const n = this.cache,
            i = e.elements;
        if (void 0 === i) {
            if (ai(n, e)) return;
            t.uniformMatrix2fv(this.addr, !1, e), oi(n, e);
        } else {
            if (ai(n, i)) return;
            ri.set(i), t.uniformMatrix2fv(this.addr, !1, ri), oi(n, i);
        }
    }
    function fi(t, e) {
        const n = this.cache,
            i = e.elements;
        if (void 0 === i) {
            if (ai(n, e)) return;
            t.uniformMatrix3fv(this.addr, !1, e), oi(n, e);
        } else {
            if (ai(n, i)) return;
            ii.set(i), t.uniformMatrix3fv(this.addr, !1, ii), oi(n, i);
        }
    }
    function mi(t, e) {
        const n = this.cache,
            i = e.elements;
        if (void 0 === i) {
            if (ai(n, e)) return;
            t.uniformMatrix4fv(this.addr, !1, e), oi(n, e);
        } else {
            if (ai(n, i)) return;
            ni.set(i), t.uniformMatrix4fv(this.addr, !1, ni), oi(n, i);
        }
    }
    function gi(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1i(this.addr, e), (n[0] = e));
    }
    function vi(t, e) {
        const n = this.cache;
        ai(n, e) || (t.uniform2iv(this.addr, e), oi(n, e));
    }
    function yi(t, e) {
        const n = this.cache;
        ai(n, e) || (t.uniform3iv(this.addr, e), oi(n, e));
    }
    function _i(t, e) {
        const n = this.cache;
        ai(n, e) || (t.uniform4iv(this.addr, e), oi(n, e));
    }
    function xi(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1ui(this.addr, e), (n[0] = e));
    }
    function wi(t, e) {
        const n = this.cache;
        ai(n, e) || (t.uniform2uiv(this.addr, e), oi(n, e));
    }
    function bi(t, e) {
        const n = this.cache;
        ai(n, e) || (t.uniform3uiv(this.addr, e), oi(n, e));
    }
    function Mi(t, e) {
        const n = this.cache;
        ai(n, e) || (t.uniform4uiv(this.addr, e), oi(n, e));
    }
    function Si(t, e, n) {
        const i = this.cache,
            r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)), n.safeSetTexture2D(e || Jn, r);
    }
    function Ti(t, e, n) {
        const i = this.cache,
            r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)), n.setTexture3D(e || Kn, r);
    }
    function Ei(t, e, n) {
        const i = this.cache,
            r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)), n.safeSetTextureCube(e || $n, r);
    }
    function Ai(t, e, n) {
        const i = this.cache,
            r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)), n.setTexture2DArray(e || Qn, r);
    }
    function Li(t, e) {
        t.uniform1fv(this.addr, e);
    }
    function Ri(t, e) {
        const n = si(e, this.size, 2);
        t.uniform2fv(this.addr, n);
    }
    function Ci(t, e) {
        const n = si(e, this.size, 3);
        t.uniform3fv(this.addr, n);
    }
    function Pi(t, e) {
        const n = si(e, this.size, 4);
        t.uniform4fv(this.addr, n);
    }
    function Di(t, e) {
        const n = si(e, this.size, 4);
        t.uniformMatrix2fv(this.addr, !1, n);
    }
    function Ii(t, e) {
        const n = si(e, this.size, 9);
        t.uniformMatrix3fv(this.addr, !1, n);
    }
    function Ni(t, e) {
        const n = si(e, this.size, 16);
        t.uniformMatrix4fv(this.addr, !1, n);
    }
    function zi(t, e) {
        t.uniform1iv(this.addr, e);
    }
    function Oi(t, e) {
        t.uniform2iv(this.addr, e);
    }
    function Bi(t, e) {
        t.uniform3iv(this.addr, e);
    }
    function Fi(t, e) {
        t.uniform4iv(this.addr, e);
    }
    function Hi(t, e) {
        t.uniform1uiv(this.addr, e);
    }
    function Ui(t, e) {
        t.uniform2uiv(this.addr, e);
    }
    function ki(t, e) {
        t.uniform3uiv(this.addr, e);
    }
    function Gi(t, e) {
        t.uniform4uiv(this.addr, e);
    }
    function Vi(t, e, n) {
        const i = e.length,
            r = li(n, i);
        t.uniform1iv(this.addr, r);
        for (let t = 0; t !== i; ++t) n.safeSetTexture2D(e[t] || Jn, r[t]);
    }
    function Wi(t, e, n) {
        const i = e.length,
            r = li(n, i);
        t.uniform1iv(this.addr, r);
        for (let t = 0; t !== i; ++t) n.safeSetTextureCube(e[t] || $n, r[t]);
    }
    function ji(t, e, n) {
        (this.id = t),
            (this.addr = n),
            (this.cache = []),
            (this.setValue = (function (t) {
                switch (t) {
                    case 5126:
                        return ci;
                    case 35664:
                        return hi;
                    case 35665:
                        return ui;
                    case 35666:
                        return di;
                    case 35674:
                        return pi;
                    case 35675:
                        return fi;
                    case 35676:
                        return mi;
                    case 5124:
                    case 35670:
                        return gi;
                    case 35667:
                    case 35671:
                        return vi;
                    case 35668:
                    case 35672:
                        return yi;
                    case 35669:
                    case 35673:
                        return _i;
                    case 5125:
                        return xi;
                    case 36294:
                        return wi;
                    case 36295:
                        return bi;
                    case 36296:
                        return Mi;
                    case 35678:
                    case 36198:
                    case 36298:
                    case 36306:
                    case 35682:
                        return Si;
                    case 35679:
                    case 36299:
                    case 36307:
                        return Ti;
                    case 35680:
                    case 36300:
                    case 36308:
                    case 36293:
                        return Ei;
                    case 36289:
                    case 36303:
                    case 36311:
                    case 36292:
                        return Ai;
                }
            })(e.type));
    }
    function qi(t, e, n) {
        (this.id = t),
            (this.addr = n),
            (this.cache = []),
            (this.size = e.size),
            (this.setValue = (function (t) {
                switch (t) {
                    case 5126:
                        return Li;
                    case 35664:
                        return Ri;
                    case 35665:
                        return Ci;
                    case 35666:
                        return Pi;
                    case 35674:
                        return Di;
                    case 35675:
                        return Ii;
                    case 35676:
                        return Ni;
                    case 5124:
                    case 35670:
                        return zi;
                    case 35667:
                    case 35671:
                        return Oi;
                    case 35668:
                    case 35672:
                        return Bi;
                    case 35669:
                    case 35673:
                        return Fi;
                    case 5125:
                        return Hi;
                    case 36294:
                        return Ui;
                    case 36295:
                        return ki;
                    case 36296:
                        return Gi;
                    case 35678:
                    case 36198:
                    case 36298:
                    case 36306:
                    case 35682:
                        return Vi;
                    case 35680:
                    case 36300:
                    case 36308:
                    case 36293:
                        return Wi;
                }
            })(e.type));
    }
    function Xi(t) {
        (this.id = t), (this.seq = []), (this.map = {});
    }
    (qi.prototype.updateCache = function (t) {
        const e = this.cache;
        t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), oi(e, t);
    }),
        (Xi.prototype.setValue = function (t, e, n) {
            const i = this.seq;
            for (let r = 0, s = i.length; r !== s; ++r) {
                const s = i[r];
                s.setValue(t, e[s.id], n);
            }
        });
    const Yi = /(\w+)(\])?(\[|\.)?/g;
    function Zi(t, e) {
        t.seq.push(e), (t.map[e.id] = e);
    }
    function Ji(t, e, n) {
        const i = t.name,
            r = i.length;
        for (Yi.lastIndex = 0; ; ) {
            const s = Yi.exec(i),
                a = Yi.lastIndex;
            let o = s[1];
            const l = "]" === s[2],
                c = s[3];
            if ((l && (o |= 0), void 0 === c || ("[" === c && a + 2 === r))) {
                Zi(n, void 0 === c ? new ji(o, t, e) : new qi(o, t, e));
                break;
            }
            {
                let t = n.map[o];
                void 0 === t && ((t = new Xi(o)), Zi(n, t)), (n = t);
            }
        }
    }
    function Qi(t, e) {
        (this.seq = []), (this.map = {});
        const n = t.getProgramParameter(e, 35718);
        for (let i = 0; i < n; ++i) {
            const n = t.getActiveUniform(e, i);
            Ji(n, t.getUniformLocation(e, n.name), this);
        }
    }
    function Ki(t, e, n) {
        const i = t.createShader(e);
        return t.shaderSource(i, n), t.compileShader(i), i;
    }
    (Qi.prototype.setValue = function (t, e, n, i) {
        const r = this.map[e];
        void 0 !== r && r.setValue(t, n, i);
    }),
        (Qi.prototype.setOptional = function (t, e, n) {
            const i = e[n];
            void 0 !== i && this.setValue(t, n, i);
        }),
        (Qi.upload = function (t, e, n, i) {
            for (let r = 0, s = e.length; r !== s; ++r) {
                const s = e[r],
                    a = n[s.id];
                !1 !== a.needsUpdate && s.setValue(t, a.value, i);
            }
        }),
        (Qi.seqWithValue = function (t, e) {
            const n = [];
            for (let i = 0, r = t.length; i !== r; ++i) {
                const r = t[i];
                r.id in e && n.push(r);
            }
            return n;
        });
    let $i = 0;
    function tr(t) {
        switch (t) {
            case P:
                return ["Linear", "( value )"];
            case D:
                return ["sRGB", "( value )"];
            case N:
                return ["RGBE", "( value )"];
            case 3004:
                return ["RGBM", "( value, 7.0 )"];
            case 3005:
                return ["RGBM", "( value, 16.0 )"];
            case 3006:
                return ["RGBD", "( value, 256.0 )"];
            case I:
                return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
            case 3003:
                return ["LogLuv", "( value )"];
            default:
                return console.warn("THREE.WebGLProgram: Unsupported encoding:", t), ["Linear", "( value )"];
        }
    }
    function er(t, e, n) {
        const i = t.getShaderParameter(e, 35713),
            r = t.getShaderInfoLog(e).trim();
        if (i && "" === r) return "";
        return (
            "THREE.WebGLShader: gl.getShaderInfoLog() " +
            n +
            "\n" +
            r +
            (function (t) {
                const e = t.split("\n");
                for (let t = 0; t < e.length; t++) e[t] = t + 1 + ": " + e[t];
                return e.join("\n");
            })(t.getShaderSource(e))
        );
    }
    function nr(t, e) {
        const n = tr(e);
        return "vec4 " + t + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }";
    }
    function ir(t, e) {
        const n = tr(e);
        return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }";
    }
    function rr(t, e) {
        let n;
        switch (e) {
            case 1:
                n = "Linear";
                break;
            case 2:
                n = "Reinhard";
                break;
            case 3:
                n = "OptimizedCineon";
                break;
            case 4:
                n = "ACESFilmic";
                break;
            case 5:
                n = "Custom";
                break;
            default:
                console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), (n = "Linear");
        }
        return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
    }
    function sr(t) {
        return "" !== t;
    }
    function ar(t, e) {
        return t
            .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
            .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
            .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
            .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
            .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
            .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
            .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
            .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
    }
    function or(t, e) {
        return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
    }
    const lr = /^[ \t]*#include +<([\w\d./]+)>/gm;
    function cr(t) {
        return t.replace(lr, hr);
    }
    function hr(t, e) {
        const n = Pn[e];
        if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
        return cr(n);
    }
    const ur = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
        dr = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
    function pr(t) {
        return t.replace(dr, mr).replace(ur, fr);
    }
    function fr(t, e, n, i) {
        return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), mr(t, e, n, i);
    }
    function mr(t, e, n, i) {
        let r = "";
        for (let t = parseInt(e); t < parseInt(n); t++) r += i.replace(/\[\s*i\s*\]/g, "[ " + t + " ]").replace(/UNROLLED_LOOP_INDEX/g, t);
        return r;
    }
    function gr(t) {
        let e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
        return "highp" === t.precision ? (e += "\n#define HIGH_PRECISION") : "mediump" === t.precision ? (e += "\n#define MEDIUM_PRECISION") : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e;
    }
    function vr(t, e, a, o) {
        const l = t.getContext(),
            c = a.defines;
        let h = a.vertexShader,
            u = a.fragmentShader;
        const d = (function (t) {
                let e = "SHADOWMAP_TYPE_BASIC";
                return 1 === t.shadowMapType ? (e = "SHADOWMAP_TYPE_PCF") : 2 === t.shadowMapType ? (e = "SHADOWMAP_TYPE_PCF_SOFT") : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"), e;
            })(a),
            p = (function (t) {
                let e = "ENVMAP_TYPE_CUBE";
                if (t.envMap)
                    switch (t.envMapMode) {
                        case n:
                        case i:
                            e = "ENVMAP_TYPE_CUBE";
                            break;
                        case r:
                        case s:
                            e = "ENVMAP_TYPE_CUBE_UV";
                    }
                return e;
            })(a),
            f = (function (t) {
                let e = "ENVMAP_MODE_REFLECTION";
                if (t.envMap)
                    switch (t.envMapMode) {
                        case i:
                        case s:
                            e = "ENVMAP_MODE_REFRACTION";
                    }
                return e;
            })(a),
            m = (function (t) {
                let e = "ENVMAP_BLENDING_NONE";
                if (t.envMap)
                    switch (t.combine) {
                        case 0:
                            e = "ENVMAP_BLENDING_MULTIPLY";
                            break;
                        case 1:
                            e = "ENVMAP_BLENDING_MIX";
                            break;
                        case 2:
                            e = "ENVMAP_BLENDING_ADD";
                    }
                return e;
            })(a),
            g = t.gammaFactor > 0 ? t.gammaFactor : 1,
            v = a.isWebGL2
                ? ""
                : (function (t) {
                      return [
                          t.extensionDerivatives || t.envMapCubeUV || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "",
                          (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
                          t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
                          (t.extensionShaderTextureLOD || t.envMap || t.transmission > 0) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : "",
                      ]
                          .filter(sr)
                          .join("\n");
                  })(a),
            y = (function (t) {
                const e = [];
                for (const n in t) {
                    const i = t[n];
                    !1 !== i && e.push("#define " + n + " " + i);
                }
                return e.join("\n");
            })(c),
            _ = l.createProgram();
        let x,
            w,
            b = a.glslVersion ? "#version " + a.glslVersion + "\n" : "";
        a.isRawShaderMaterial
            ? ((x = [y].filter(sr).join("\n")), x.length > 0 && (x += "\n"), (w = [v, y].filter(sr).join("\n")), w.length > 0 && (w += "\n"))
            : ((x = [
                  gr(a),
                  "#define SHADER_NAME " + a.shaderName,
                  y,
                  a.instancing ? "#define USE_INSTANCING" : "",
                  a.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
                  a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
                  "#define GAMMA_FACTOR " + g,
                  "#define MAX_BONES " + a.maxBones,
                  a.useFog && a.fog ? "#define USE_FOG" : "",
                  a.useFog && a.fogExp2 ? "#define FOG_EXP2" : "",
                  a.map ? "#define USE_MAP" : "",
                  a.envMap ? "#define USE_ENVMAP" : "",
                  a.envMap ? "#define " + f : "",
                  a.lightMap ? "#define USE_LIGHTMAP" : "",
                  a.aoMap ? "#define USE_AOMAP" : "",
                  a.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
                  a.bumpMap ? "#define USE_BUMPMAP" : "",
                  a.normalMap ? "#define USE_NORMALMAP" : "",
                  a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
                  a.normalMap && a.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
                  a.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
                  a.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
                  a.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
                  a.displacementMap && a.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
                  a.specularMap ? "#define USE_SPECULARMAP" : "",
                  a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
                  a.metalnessMap ? "#define USE_METALNESSMAP" : "",
                  a.alphaMap ? "#define USE_ALPHAMAP" : "",
                  a.transmission ? "#define USE_TRANSMISSION" : "",
                  a.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
                  a.thicknessMap ? "#define USE_THICKNESSMAP" : "",
                  a.vertexTangents ? "#define USE_TANGENT" : "",
                  a.vertexColors ? "#define USE_COLOR" : "",
                  a.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
                  a.vertexUvs ? "#define USE_UV" : "",
                  a.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
                  a.flatShading ? "#define FLAT_SHADED" : "",
                  a.skinning ? "#define USE_SKINNING" : "",
                  a.useVertexTexture ? "#define BONE_TEXTURE" : "",
                  a.morphTargets ? "#define USE_MORPHTARGETS" : "",
                  a.morphNormals && !1 === a.flatShading ? "#define USE_MORPHNORMALS" : "",
                  a.doubleSided ? "#define DOUBLE_SIDED" : "",
                  a.flipSided ? "#define FLIP_SIDED" : "",
                  a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
                  a.shadowMapEnabled ? "#define " + d : "",
                  a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
                  a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
                  a.logarithmicDepthBuffer && a.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
                  "uniform mat4 modelMatrix;",
                  "uniform mat4 modelViewMatrix;",
                  "uniform mat4 projectionMatrix;",
                  "uniform mat4 viewMatrix;",
                  "uniform mat3 normalMatrix;",
                  "uniform vec3 cameraPosition;",
                  "uniform bool isOrthographic;",
                  "#ifdef USE_INSTANCING",
                  "\tattribute mat4 instanceMatrix;",
                  "#endif",
                  "#ifdef USE_INSTANCING_COLOR",
                  "\tattribute vec3 instanceColor;",
                  "#endif",
                  "attribute vec3 position;",
                  "attribute vec3 normal;",
                  "attribute vec2 uv;",
                  "#ifdef USE_TANGENT",
                  "\tattribute vec4 tangent;",
                  "#endif",
                  "#if defined( USE_COLOR_ALPHA )",
                  "\tattribute vec4 color;",
                  "#elif defined( USE_COLOR )",
                  "\tattribute vec3 color;",
                  "#endif",
                  "#ifdef USE_MORPHTARGETS",
                  "\tattribute vec3 morphTarget0;",
                  "\tattribute vec3 morphTarget1;",
                  "\tattribute vec3 morphTarget2;",
                  "\tattribute vec3 morphTarget3;",
                  "\t#ifdef USE_MORPHNORMALS",
                  "\t\tattribute vec3 morphNormal0;",
                  "\t\tattribute vec3 morphNormal1;",
                  "\t\tattribute vec3 morphNormal2;",
                  "\t\tattribute vec3 morphNormal3;",
                  "\t#else",
                  "\t\tattribute vec3 morphTarget4;",
                  "\t\tattribute vec3 morphTarget5;",
                  "\t\tattribute vec3 morphTarget6;",
                  "\t\tattribute vec3 morphTarget7;",
                  "\t#endif",
                  "#endif",
                  "#ifdef USE_SKINNING",
                  "\tattribute vec4 skinIndex;",
                  "\tattribute vec4 skinWeight;",
                  "#endif",
                  "\n",
              ]
                  .filter(sr)
                  .join("\n")),
              (w = [
                  v,
                  gr(a),
                  "#define SHADER_NAME " + a.shaderName,
                  y,
                  a.alphaTest ? "#define ALPHATEST " + a.alphaTest + (a.alphaTest % 1 ? "" : ".0") : "",
                  "#define GAMMA_FACTOR " + g,
                  a.useFog && a.fog ? "#define USE_FOG" : "",
                  a.useFog && a.fogExp2 ? "#define FOG_EXP2" : "",
                  a.map ? "#define USE_MAP" : "",
                  a.matcap ? "#define USE_MATCAP" : "",
                  a.envMap ? "#define USE_ENVMAP" : "",
                  a.envMap ? "#define " + p : "",
                  a.envMap ? "#define " + f : "",
                  a.envMap ? "#define " + m : "",
                  a.lightMap ? "#define USE_LIGHTMAP" : "",
                  a.aoMap ? "#define USE_AOMAP" : "",
                  a.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
                  a.bumpMap ? "#define USE_BUMPMAP" : "",
                  a.normalMap ? "#define USE_NORMALMAP" : "",
                  a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
                  a.normalMap && a.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
                  a.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
                  a.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
                  a.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
                  a.specularMap ? "#define USE_SPECULARMAP" : "",
                  a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
                  a.metalnessMap ? "#define USE_METALNESSMAP" : "",
                  a.alphaMap ? "#define USE_ALPHAMAP" : "",
                  a.sheen ? "#define USE_SHEEN" : "",
                  a.transmission ? "#define USE_TRANSMISSION" : "",
                  a.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
                  a.thicknessMap ? "#define USE_THICKNESSMAP" : "",
                  a.vertexTangents ? "#define USE_TANGENT" : "",
                  a.vertexColors || a.instancingColor ? "#define USE_COLOR" : "",
                  a.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
                  a.vertexUvs ? "#define USE_UV" : "",
                  a.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
                  a.gradientMap ? "#define USE_GRADIENTMAP" : "",
                  a.flatShading ? "#define FLAT_SHADED" : "",
                  a.doubleSided ? "#define DOUBLE_SIDED" : "",
                  a.flipSided ? "#define FLIP_SIDED" : "",
                  a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
                  a.shadowMapEnabled ? "#define " + d : "",
                  a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
                  a.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
                  a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
                  a.logarithmicDepthBuffer && a.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
                  (a.extensionShaderTextureLOD || a.envMap) && a.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "",
                  "uniform mat4 viewMatrix;",
                  "uniform vec3 cameraPosition;",
                  "uniform bool isOrthographic;",
                  0 !== a.toneMapping ? "#define TONE_MAPPING" : "",
                  0 !== a.toneMapping ? Pn.tonemapping_pars_fragment : "",
                  0 !== a.toneMapping ? rr("toneMapping", a.toneMapping) : "",
                  a.dithering ? "#define DITHERING" : "",
                  Pn.encodings_pars_fragment,
                  a.map ? nr("mapTexelToLinear", a.mapEncoding) : "",
                  a.matcap ? nr("matcapTexelToLinear", a.matcapEncoding) : "",
                  a.envMap ? nr("envMapTexelToLinear", a.envMapEncoding) : "",
                  a.emissiveMap ? nr("emissiveMapTexelToLinear", a.emissiveMapEncoding) : "",
                  a.lightMap ? nr("lightMapTexelToLinear", a.lightMapEncoding) : "",
                  ir("linearToOutputTexel", a.outputEncoding),
                  a.depthPacking ? "#define DEPTH_PACKING " + a.depthPacking : "",
                  "\n",
              ]
                  .filter(sr)
                  .join("\n"))),
            (h = cr(h)),
            (h = ar(h, a)),
            (h = or(h, a)),
            (u = cr(u)),
            (u = ar(u, a)),
            (u = or(u, a)),
            (h = pr(h)),
            (u = pr(u)),
            a.isWebGL2 &&
                !0 !== a.isRawShaderMaterial &&
                ((b = "#version 300 es\n"),
                (x = ["#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + x),
                (w =
                    [
                        "#define varying in",
                        a.glslVersion === F ? "" : "out highp vec4 pc_fragColor;",
                        a.glslVersion === F ? "" : "#define gl_FragColor pc_fragColor",
                        "#define gl_FragDepthEXT gl_FragDepth",
                        "#define texture2D texture",
                        "#define textureCube texture",
                        "#define texture2DProj textureProj",
                        "#define texture2DLodEXT textureLod",
                        "#define texture2DProjLodEXT textureProjLod",
                        "#define textureCubeLodEXT textureLod",
                        "#define texture2DGradEXT textureGrad",
                        "#define texture2DProjGradEXT textureProjGrad",
                        "#define textureCubeGradEXT textureGrad",
                    ].join("\n") +
                    "\n" +
                    w));
        const M = b + w + u,
            S = Ki(l, 35633, b + x + h),
            T = Ki(l, 35632, M);
        if (
            (l.attachShader(_, S),
            l.attachShader(_, T),
            void 0 !== a.index0AttributeName ? l.bindAttribLocation(_, 0, a.index0AttributeName) : !0 === a.morphTargets && l.bindAttribLocation(_, 0, "position"),
            l.linkProgram(_),
            t.debug.checkShaderErrors)
        ) {
            const t = l.getProgramInfoLog(_).trim(),
                e = l.getShaderInfoLog(S).trim(),
                n = l.getShaderInfoLog(T).trim();
            let i = !0,
                r = !0;
            if (!1 === l.getProgramParameter(_, 35714)) {
                i = !1;
                const e = er(l, S, "vertex"),
                    n = er(l, T, "fragment");
                console.error("THREE.WebGLProgram: shader error: ", l.getError(), "35715", l.getProgramParameter(_, 35715), "gl.getProgramInfoLog", t, e, n);
            } else "" !== t ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", t) : ("" !== e && "" !== n) || (r = !1);
            r && (this.diagnostics = { runnable: i, programLog: t, vertexShader: { log: e, prefix: x }, fragmentShader: { log: n, prefix: w } });
        }
        let E, A;
        return (
            l.deleteShader(S),
            l.deleteShader(T),
            (this.getUniforms = function () {
                return void 0 === E && (E = new Qi(l, _)), E;
            }),
            (this.getAttributes = function () {
                return (
                    void 0 === A &&
                        (A = (function (t, e) {
                            const n = {},
                                i = t.getProgramParameter(e, 35721);
                            for (let r = 0; r < i; r++) {
                                const i = t.getActiveAttrib(e, r).name;
                                n[i] = t.getAttribLocation(e, i);
                            }
                            return n;
                        })(l, _)),
                    A
                );
            }),
            (this.destroy = function () {
                o.releaseStatesOfProgram(this), l.deleteProgram(_), (this.program = void 0);
            }),
            (this.name = a.shaderName),
            (this.id = $i++),
            (this.cacheKey = e),
            (this.usedTimes = 1),
            (this.program = _),
            (this.vertexShader = S),
            (this.fragmentShader = T),
            this
        );
    }
    function yr(t, e, n, i, a, o) {
        const l = [],
            c = i.isWebGL2,
            h = i.logarithmicDepthBuffer,
            u = i.floatVertexTextures,
            d = i.maxVertexUniforms,
            p = i.vertexTextures;
        let f = i.precision;
        const m = {
                MeshDepthMaterial: "depth",
                MeshDistanceMaterial: "distanceRGBA",
                MeshNormalMaterial: "normal",
                MeshBasicMaterial: "basic",
                MeshLambertMaterial: "lambert",
                MeshPhongMaterial: "phong",
                MeshToonMaterial: "toon",
                MeshStandardMaterial: "physical",
                MeshPhysicalMaterial: "physical",
                MeshMatcapMaterial: "matcap",
                LineBasicMaterial: "basic",
                LineDashedMaterial: "dashed",
                PointsMaterial: "points",
                ShadowMaterial: "shadow",
                SpriteMaterial: "sprite",
            },
            g = [
                "precision",
                "isWebGL2",
                "supportsVertexTextures",
                "outputEncoding",
                "instancing",
                "instancingColor",
                "map",
                "mapEncoding",
                "matcap",
                "matcapEncoding",
                "envMap",
                "envMapMode",
                "envMapEncoding",
                "envMapCubeUV",
                "lightMap",
                "lightMapEncoding",
                "aoMap",
                "emissiveMap",
                "emissiveMapEncoding",
                "bumpMap",
                "normalMap",
                "objectSpaceNormalMap",
                "tangentSpaceNormalMap",
                "clearcoatMap",
                "clearcoatRoughnessMap",
                "clearcoatNormalMap",
                "displacementMap",
                "specularMap",
                "roughnessMap",
                "metalnessMap",
                "gradientMap",
                "alphaMap",
                "combine",
                "vertexColors",
                "vertexAlphas",
                "vertexTangents",
                "vertexUvs",
                "uvsVertexOnly",
                "fog",
                "useFog",
                "fogExp2",
                "flatShading",
                "sizeAttenuation",
                "logarithmicDepthBuffer",
                "skinning",
                "maxBones",
                "useVertexTexture",
                "morphTargets",
                "morphNormals",
                "premultipliedAlpha",
                "numDirLights",
                "numPointLights",
                "numSpotLights",
                "numHemiLights",
                "numRectAreaLights",
                "numDirLightShadows",
                "numPointLightShadows",
                "numSpotLightShadows",
                "shadowMapEnabled",
                "shadowMapType",
                "toneMapping",
                "physicallyCorrectLights",
                "alphaTest",
                "doubleSided",
                "flipSided",
                "numClippingPlanes",
                "numClipIntersection",
                "depthPacking",
                "dithering",
                "sheen",
                "transmission",
                "transmissionMap",
                "thicknessMap",
            ];
        function v(t) {
            let e;
            return (
                t && t.isTexture
                    ? (e = t.encoding)
                    : t && t.isWebGLRenderTarget
                    ? (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), (e = t.texture.encoding))
                    : (e = P),
                e
            );
        }
        return {
            getParameters: function (a, l, g, y, _) {
                const x = y.fog,
                    w = a.isMeshStandardMaterial ? y.environment : null,
                    b = e.get(a.envMap || w),
                    M = m[a.type],
                    S = _.isSkinnedMesh
                        ? (function (t) {
                              const e = t.skeleton.bones;
                              if (u) return 1024;
                              {
                                  const t = d,
                                      n = Math.floor((t - 20) / 4),
                                      i = Math.min(n, e.length);
                                  return i < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + i + "."), 0) : i;
                              }
                          })(_)
                        : 0;
                let T, E;
                if ((null !== a.precision && ((f = i.getMaxPrecision(a.precision)), f !== a.precision && console.warn("THREE.WebGLProgram.getParameters:", a.precision, "not supported, using", f, "instead.")), M)) {
                    const t = In[M];
                    (T = t.vertexShader), (E = t.fragmentShader);
                } else (T = a.vertexShader), (E = a.fragmentShader);
                const A = t.getRenderTarget();
                return {
                    isWebGL2: c,
                    shaderID: M,
                    shaderName: a.type,
                    vertexShader: T,
                    fragmentShader: E,
                    defines: a.defines,
                    isRawShaderMaterial: !0 === a.isRawShaderMaterial,
                    glslVersion: a.glslVersion,
                    precision: f,
                    instancing: !0 === _.isInstancedMesh,
                    instancingColor: !0 === _.isInstancedMesh && null !== _.instanceColor,
                    supportsVertexTextures: p,
                    outputEncoding: null !== A ? v(A.texture) : t.outputEncoding,
                    map: !!a.map,
                    mapEncoding: v(a.map),
                    matcap: !!a.matcap,
                    matcapEncoding: v(a.matcap),
                    envMap: !!b,
                    envMapMode: b && b.mapping,
                    envMapEncoding: v(b),
                    envMapCubeUV: !!b && (b.mapping === r || b.mapping === s),
                    lightMap: !!a.lightMap,
                    lightMapEncoding: v(a.lightMap),
                    aoMap: !!a.aoMap,
                    emissiveMap: !!a.emissiveMap,
                    emissiveMapEncoding: v(a.emissiveMap),
                    bumpMap: !!a.bumpMap,
                    normalMap: !!a.normalMap,
                    objectSpaceNormalMap: 1 === a.normalMapType,
                    tangentSpaceNormalMap: 0 === a.normalMapType,
                    clearcoatMap: !!a.clearcoatMap,
                    clearcoatRoughnessMap: !!a.clearcoatRoughnessMap,
                    clearcoatNormalMap: !!a.clearcoatNormalMap,
                    displacementMap: !!a.displacementMap,
                    roughnessMap: !!a.roughnessMap,
                    metalnessMap: !!a.metalnessMap,
                    specularMap: !!a.specularMap,
                    alphaMap: !!a.alphaMap,
                    gradientMap: !!a.gradientMap,
                    sheen: !!a.sheen,
                    transmission: !!a.transmission,
                    transmissionMap: !!a.transmissionMap,
                    thicknessMap: !!a.thicknessMap,
                    combine: a.combine,
                    vertexTangents: a.normalMap && a.vertexTangents,
                    vertexColors: a.vertexColors,
                    vertexAlphas: !0 === a.vertexColors && _.geometry && _.geometry.attributes.color && 4 === _.geometry.attributes.color.itemSize,
                    vertexUvs: !!(
                        a.map ||
                        a.bumpMap ||
                        a.normalMap ||
                        a.specularMap ||
                        a.alphaMap ||
                        a.emissiveMap ||
                        a.roughnessMap ||
                        a.metalnessMap ||
                        a.clearcoatMap ||
                        a.clearcoatRoughnessMap ||
                        a.clearcoatNormalMap ||
                        a.displacementMap ||
                        a.transmission ||
                        a.transmissionMap ||
                        a.thicknessMap
                    ),
                    uvsVertexOnly: !(
                        a.map ||
                        a.bumpMap ||
                        a.normalMap ||
                        a.specularMap ||
                        a.alphaMap ||
                        a.emissiveMap ||
                        a.roughnessMap ||
                        a.metalnessMap ||
                        a.clearcoatNormalMap ||
                        a.transmission ||
                        a.transmissionMap ||
                        a.thicknessMap ||
                        !a.displacementMap
                    ),
                    fog: !!x,
                    useFog: a.fog,
                    fogExp2: x && x.isFogExp2,
                    flatShading: !!a.flatShading,
                    sizeAttenuation: a.sizeAttenuation,
                    logarithmicDepthBuffer: h,
                    skinning: !0 === _.isSkinnedMesh && S > 0,
                    maxBones: S,
                    useVertexTexture: u,
                    morphTargets: a.morphTargets,
                    morphNormals: a.morphNormals,
                    numDirLights: l.directional.length,
                    numPointLights: l.point.length,
                    numSpotLights: l.spot.length,
                    numRectAreaLights: l.rectArea.length,
                    numHemiLights: l.hemi.length,
                    numDirLightShadows: l.directionalShadowMap.length,
                    numPointLightShadows: l.pointShadowMap.length,
                    numSpotLightShadows: l.spotShadowMap.length,
                    numClippingPlanes: o.numPlanes,
                    numClipIntersection: o.numIntersection,
                    dithering: a.dithering,
                    shadowMapEnabled: t.shadowMap.enabled && g.length > 0,
                    shadowMapType: t.shadowMap.type,
                    toneMapping: a.toneMapped ? t.toneMapping : 0,
                    physicallyCorrectLights: t.physicallyCorrectLights,
                    premultipliedAlpha: a.premultipliedAlpha,
                    alphaTest: a.alphaTest,
                    doubleSided: 2 === a.side,
                    flipSided: 1 === a.side,
                    depthPacking: void 0 !== a.depthPacking && a.depthPacking,
                    index0AttributeName: a.index0AttributeName,
                    extensionDerivatives: a.extensions && a.extensions.derivatives,
                    extensionFragDepth: a.extensions && a.extensions.fragDepth,
                    extensionDrawBuffers: a.extensions && a.extensions.drawBuffers,
                    extensionShaderTextureLOD: a.extensions && a.extensions.shaderTextureLOD,
                    rendererExtensionFragDepth: c || n.has("EXT_frag_depth"),
                    rendererExtensionDrawBuffers: c || n.has("WEBGL_draw_buffers"),
                    rendererExtensionShaderTextureLod: c || n.has("EXT_shader_texture_lod"),
                    customProgramCacheKey: a.customProgramCacheKey(),
                };
            },
            getProgramCacheKey: function (e) {
                const n = [];
                if ((e.shaderID ? n.push(e.shaderID) : (n.push(e.fragmentShader), n.push(e.vertexShader)), void 0 !== e.defines)) for (const t in e.defines) n.push(t), n.push(e.defines[t]);
                if (!1 === e.isRawShaderMaterial) {
                    for (let t = 0; t < g.length; t++) n.push(e[g[t]]);
                    n.push(t.outputEncoding), n.push(t.gammaFactor);
                }
                return n.push(e.customProgramCacheKey), n.join();
            },
            getUniforms: function (t) {
                const e = m[t.type];
                let n;
                if (e) {
                    const t = In[e];
                    n = vn.clone(t.uniforms);
                } else n = t.uniforms;
                return n;
            },
            acquireProgram: function (e, n) {
                let i;
                for (let t = 0, e = l.length; t < e; t++) {
                    const e = l[t];
                    if (e.cacheKey === n) {
                        (i = e), ++i.usedTimes;
                        break;
                    }
                }
                return void 0 === i && ((i = new vr(t, n, e, a)), l.push(i)), i;
            },
            releaseProgram: function (t) {
                if (0 == --t.usedTimes) {
                    const e = l.indexOf(t);
                    (l[e] = l[l.length - 1]), l.pop(), t.destroy();
                }
            },
            programs: l,
        };
    }
    function _r() {
        let t = new WeakMap();
        return {
            get: function (e) {
                let n = t.get(e);
                return void 0 === n && ((n = {}), t.set(e, n)), n;
            },
            remove: function (e) {
                t.delete(e);
            },
            update: function (e, n, i) {
                t.get(e)[n] = i;
            },
            dispose: function () {
                t = new WeakMap();
            },
        };
    }
    function xr(t, e) {
        return t.groupOrder !== e.groupOrder
            ? t.groupOrder - e.groupOrder
            : t.renderOrder !== e.renderOrder
            ? t.renderOrder - e.renderOrder
            : t.program !== e.program
            ? t.program.id - e.program.id
            : t.material.id !== e.material.id
            ? t.material.id - e.material.id
            : t.z !== e.z
            ? t.z - e.z
            : t.id - e.id;
    }
    function wr(t, e) {
        return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id;
    }
    function br(t) {
        const e = [];
        let n = 0;
        const i = [],
            r = [],
            s = [],
            a = { id: -1 };
        function o(i, r, s, o, l, c) {
            let h = e[n];
            const u = t.get(s);
            return (
                void 0 === h
                    ? ((h = { id: i.id, object: i, geometry: r, material: s, program: u.program || a, groupOrder: o, renderOrder: i.renderOrder, z: l, group: c }), (e[n] = h))
                    : ((h.id = i.id), (h.object = i), (h.geometry = r), (h.material = s), (h.program = u.program || a), (h.groupOrder = o), (h.renderOrder = i.renderOrder), (h.z = l), (h.group = c)),
                n++,
                h
            );
        }
        return {
            opaque: i,
            transmissive: r,
            transparent: s,
            init: function () {
                (n = 0), (i.length = 0), (r.length = 0), (s.length = 0);
            },
            push: function (t, e, n, a, l, c) {
                const h = o(t, e, n, a, l, c);
                n.transmission > 0 ? r.push(h) : !0 === n.transparent ? s.push(h) : i.push(h);
            },
            unshift: function (t, e, n, a, l, c) {
                const h = o(t, e, n, a, l, c);
                n.transmission > 0 ? r.unshift(h) : !0 === n.transparent ? s.unshift(h) : i.unshift(h);
            },
            finish: function () {
                for (let t = n, i = e.length; t < i; t++) {
                    const n = e[t];
                    if (null === n.id) break;
                    (n.id = null), (n.object = null), (n.geometry = null), (n.material = null), (n.program = null), (n.group = null);
                }
            },
            sort: function (t, e) {
                i.length > 1 && i.sort(t || xr), r.length > 1 && r.sort(e || wr), s.length > 1 && s.sort(e || wr);
            },
        };
    }
    function Mr(t) {
        let e = new WeakMap();
        return {
            get: function (n, i) {
                let r;
                return !1 === e.has(n) ? ((r = new br(t)), e.set(n, [r])) : i >= e.get(n).length ? ((r = new br(t)), e.get(n).push(r)) : (r = e.get(n)[i]), r;
            },
            dispose: function () {
                e = new WeakMap();
            },
        };
    }
    function Sr() {
        const t = {};
        return {
            get: function (e) {
                if (void 0 !== t[e.id]) return t[e.id];
                let n;
                switch (e.type) {
                    case "DirectionalLight":
                        n = { direction: new st(), color: new Pe() };
                        break;
                    case "SpotLight":
                        n = { position: new st(), direction: new st(), color: new Pe(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
                        break;
                    case "PointLight":
                        n = { position: new st(), color: new Pe(), distance: 0, decay: 0 };
                        break;
                    case "HemisphereLight":
                        n = { direction: new st(), skyColor: new Pe(), groundColor: new Pe() };
                        break;
                    case "RectAreaLight":
                        n = { color: new Pe(), position: new st(), halfWidth: new st(), halfHeight: new st() };
                }
                return (t[e.id] = n), n;
            },
        };
    }
    let Tr = 0;
    function Er(t, e) {
        return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0);
    }
    function Ar(t, e) {
        const n = new Sr(),
            i = (function () {
                const t = {};
                return {
                    get: function (e) {
                        if (void 0 !== t[e.id]) return t[e.id];
                        let n;
                        switch (e.type) {
                            case "DirectionalLight":
                            case "SpotLight":
                                n = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Z() };
                                break;
                            case "PointLight":
                                n = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Z(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
                        }
                        return (t[e.id] = n), n;
                    },
                };
            })(),
            r = {
                version: 0,
                hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1 },
                ambient: [0, 0, 0],
                probe: [],
                directional: [],
                directionalShadow: [],
                directionalShadowMap: [],
                directionalShadowMatrix: [],
                spot: [],
                spotShadow: [],
                spotShadowMap: [],
                spotShadowMatrix: [],
                rectArea: [],
                rectAreaLTC1: null,
                rectAreaLTC2: null,
                point: [],
                pointShadow: [],
                pointShadowMap: [],
                pointShadowMatrix: [],
                hemi: [],
            };
        for (let t = 0; t < 9; t++) r.probe.push(new st());
        const s = new st(),
            a = new Ot(),
            o = new Ot();
        return {
            setup: function (s) {
                let a = 0,
                    o = 0,
                    l = 0;
                for (let t = 0; t < 9; t++) r.probe[t].set(0, 0, 0);
                let c = 0,
                    h = 0,
                    u = 0,
                    d = 0,
                    p = 0,
                    f = 0,
                    m = 0,
                    g = 0;
                s.sort(Er);
                for (let t = 0, e = s.length; t < e; t++) {
                    const e = s[t],
                        v = e.color,
                        y = e.intensity,
                        _ = e.distance,
                        x = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
                    if (e.isAmbientLight) (a += v.r * y), (o += v.g * y), (l += v.b * y);
                    else if (e.isLightProbe) for (let t = 0; t < 9; t++) r.probe[t].addScaledVector(e.sh.coefficients[t], y);
                    else if (e.isDirectionalLight) {
                        const t = n.get(e);
                        if ((t.color.copy(e.color).multiplyScalar(e.intensity), e.castShadow)) {
                            const t = e.shadow,
                                n = i.get(e);
                            (n.shadowBias = t.bias),
                                (n.shadowNormalBias = t.normalBias),
                                (n.shadowRadius = t.radius),
                                (n.shadowMapSize = t.mapSize),
                                (r.directionalShadow[c] = n),
                                (r.directionalShadowMap[c] = x),
                                (r.directionalShadowMatrix[c] = e.shadow.matrix),
                                f++;
                        }
                        (r.directional[c] = t), c++;
                    } else if (e.isSpotLight) {
                        const t = n.get(e);
                        if (
                            (t.position.setFromMatrixPosition(e.matrixWorld),
                            t.color.copy(v).multiplyScalar(y),
                            (t.distance = _),
                            (t.coneCos = Math.cos(e.angle)),
                            (t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra))),
                            (t.decay = e.decay),
                            e.castShadow)
                        ) {
                            const t = e.shadow,
                                n = i.get(e);
                            (n.shadowBias = t.bias),
                                (n.shadowNormalBias = t.normalBias),
                                (n.shadowRadius = t.radius),
                                (n.shadowMapSize = t.mapSize),
                                (r.spotShadow[u] = n),
                                (r.spotShadowMap[u] = x),
                                (r.spotShadowMatrix[u] = e.shadow.matrix),
                                g++;
                        }
                        (r.spot[u] = t), u++;
                    } else if (e.isRectAreaLight) {
                        const t = n.get(e);
                        t.color.copy(v).multiplyScalar(y), t.halfWidth.set(0.5 * e.width, 0, 0), t.halfHeight.set(0, 0.5 * e.height, 0), (r.rectArea[d] = t), d++;
                    } else if (e.isPointLight) {
                        const t = n.get(e);
                        if ((t.color.copy(e.color).multiplyScalar(e.intensity), (t.distance = e.distance), (t.decay = e.decay), e.castShadow)) {
                            const t = e.shadow,
                                n = i.get(e);
                            (n.shadowBias = t.bias),
                                (n.shadowNormalBias = t.normalBias),
                                (n.shadowRadius = t.radius),
                                (n.shadowMapSize = t.mapSize),
                                (n.shadowCameraNear = t.camera.near),
                                (n.shadowCameraFar = t.camera.far),
                                (r.pointShadow[h] = n),
                                (r.pointShadowMap[h] = x),
                                (r.pointShadowMatrix[h] = e.shadow.matrix),
                                m++;
                        }
                        (r.point[h] = t), h++;
                    } else if (e.isHemisphereLight) {
                        const t = n.get(e);
                        t.skyColor.copy(e.color).multiplyScalar(y), t.groundColor.copy(e.groundColor).multiplyScalar(y), (r.hemi[p] = t), p++;
                    }
                }
                d > 0 &&
                    (e.isWebGL2 || !0 === t.has("OES_texture_float_linear")
                        ? ((r.rectAreaLTC1 = Dn.LTC_FLOAT_1), (r.rectAreaLTC2 = Dn.LTC_FLOAT_2))
                        : !0 === t.has("OES_texture_half_float_linear")
                        ? ((r.rectAreaLTC1 = Dn.LTC_HALF_1), (r.rectAreaLTC2 = Dn.LTC_HALF_2))
                        : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),
                    (r.ambient[0] = a),
                    (r.ambient[1] = o),
                    (r.ambient[2] = l);
                const v = r.hash;
                (v.directionalLength === c && v.pointLength === h && v.spotLength === u && v.rectAreaLength === d && v.hemiLength === p && v.numDirectionalShadows === f && v.numPointShadows === m && v.numSpotShadows === g) ||
                    ((r.directional.length = c),
                    (r.spot.length = u),
                    (r.rectArea.length = d),
                    (r.point.length = h),
                    (r.hemi.length = p),
                    (r.directionalShadow.length = f),
                    (r.directionalShadowMap.length = f),
                    (r.pointShadow.length = m),
                    (r.pointShadowMap.length = m),
                    (r.spotShadow.length = g),
                    (r.spotShadowMap.length = g),
                    (r.directionalShadowMatrix.length = f),
                    (r.pointShadowMatrix.length = m),
                    (r.spotShadowMatrix.length = g),
                    (v.directionalLength = c),
                    (v.pointLength = h),
                    (v.spotLength = u),
                    (v.rectAreaLength = d),
                    (v.hemiLength = p),
                    (v.numDirectionalShadows = f),
                    (v.numPointShadows = m),
                    (v.numSpotShadows = g),
                    (r.version = Tr++));
            },
            setupView: function (t, e) {
                let n = 0,
                    i = 0,
                    l = 0,
                    c = 0,
                    h = 0;
                const u = e.matrixWorldInverse;
                for (let e = 0, d = t.length; e < d; e++) {
                    const d = t[e];
                    if (d.isDirectionalLight) {
                        const t = r.directional[n];
                        t.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(s), t.direction.transformDirection(u), n++;
                    } else if (d.isSpotLight) {
                        const t = r.spot[l];
                        t.position.setFromMatrixPosition(d.matrixWorld),
                            t.position.applyMatrix4(u),
                            t.direction.setFromMatrixPosition(d.matrixWorld),
                            s.setFromMatrixPosition(d.target.matrixWorld),
                            t.direction.sub(s),
                            t.direction.transformDirection(u),
                            l++;
                    } else if (d.isRectAreaLight) {
                        const t = r.rectArea[c];
                        t.position.setFromMatrixPosition(d.matrixWorld),
                            t.position.applyMatrix4(u),
                            o.identity(),
                            a.copy(d.matrixWorld),
                            a.premultiply(u),
                            o.extractRotation(a),
                            t.halfWidth.set(0.5 * d.width, 0, 0),
                            t.halfHeight.set(0, 0.5 * d.height, 0),
                            t.halfWidth.applyMatrix4(o),
                            t.halfHeight.applyMatrix4(o),
                            c++;
                    } else if (d.isPointLight) {
                        const t = r.point[i];
                        t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), i++;
                    } else if (d.isHemisphereLight) {
                        const t = r.hemi[h];
                        t.direction.setFromMatrixPosition(d.matrixWorld), t.direction.transformDirection(u), t.direction.normalize(), h++;
                    }
                }
            },
            state: r,
        };
    }
    function Lr(t, e) {
        const n = new Ar(t, e),
            i = [],
            r = [];
        return {
            init: function () {
                (i.length = 0), (r.length = 0);
            },
            state: { lightsArray: i, shadowsArray: r, lights: n },
            setupLights: function () {
                n.setup(i);
            },
            setupLightsView: function (t) {
                n.setupView(i, t);
            },
            pushLight: function (t) {
                i.push(t);
            },
            pushShadow: function (t) {
                r.push(t);
            },
        };
    }
    function Rr(t, e) {
        let n = new WeakMap();
        return {
            get: function (i, r = 0) {
                let s;
                return !1 === n.has(i) ? ((s = new Lr(t, e)), n.set(i, [s])) : r >= n.get(i).length ? ((s = new Lr(t, e)), n.get(i).push(s)) : (s = n.get(i)[r]), s;
            },
            dispose: function () {
                n = new WeakMap();
            },
        };
    }
    class Cr extends Se {
        constructor(t) {
            super(),
                (this.type = "MeshDepthMaterial"),
                (this.depthPacking = 3200),
                (this.morphTargets = !1),
                (this.map = null),
                (this.alphaMap = null),
                (this.displacementMap = null),
                (this.displacementScale = 1),
                (this.displacementBias = 0),
                (this.wireframe = !1),
                (this.wireframeLinewidth = 1),
                (this.fog = !1),
                this.setValues(t);
        }
        copy(t) {
            return (
                super.copy(t),
                (this.depthPacking = t.depthPacking),
                (this.morphTargets = t.morphTargets),
                (this.map = t.map),
                (this.alphaMap = t.alphaMap),
                (this.displacementMap = t.displacementMap),
                (this.displacementScale = t.displacementScale),
                (this.displacementBias = t.displacementBias),
                (this.wireframe = t.wireframe),
                (this.wireframeLinewidth = t.wireframeLinewidth),
                this
            );
        }
    }
    Cr.prototype.isMeshDepthMaterial = !0;
    class Pr extends Se {
        constructor(t) {
            super(),
                (this.type = "MeshDistanceMaterial"),
                (this.referencePosition = new st()),
                (this.nearDistance = 1),
                (this.farDistance = 1e3),
                (this.morphTargets = !1),
                (this.map = null),
                (this.alphaMap = null),
                (this.displacementMap = null),
                (this.displacementScale = 1),
                (this.displacementBias = 0),
                (this.fog = !1),
                this.setValues(t);
        }
        copy(t) {
            return (
                super.copy(t),
                this.referencePosition.copy(t.referencePosition),
                (this.nearDistance = t.nearDistance),
                (this.farDistance = t.farDistance),
                (this.morphTargets = t.morphTargets),
                (this.map = t.map),
                (this.alphaMap = t.alphaMap),
                (this.displacementMap = t.displacementMap),
                (this.displacementScale = t.displacementScale),
                (this.displacementBias = t.displacementBias),
                this
            );
        }
    }
    Pr.prototype.isMeshDistanceMaterial = !0;
    function Dr(t, e, n) {
        let i = new An();
        const r = new Z(),
            s = new Z(),
            a = new nt(),
            o = [],
            l = [],
            h = {},
            u = n.maxTextureSize,
            p = { 0: 1, 1: 0, 2: 2 },
            f = new yn({
                defines: { SAMPLE_RATE: 2 / 8, HALF_SAMPLE_RATE: 1 / 8 },
                uniforms: { shadow_pass: { value: null }, resolution: { value: new Z() }, radius: { value: 4 } },
                vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
                fragmentShader:
                    "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}",
            }),
            m = f.clone();
        m.defines.HORIZONTAL_PASS = 1;
        const g = new Xe();
        g.setAttribute("position", new ze(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
        const v = new dn(g, f),
            y = this;
        function _(n, i) {
            const r = e.update(v);
            (f.uniforms.shadow_pass.value = n.map.texture),
                (f.uniforms.resolution.value = n.mapSize),
                (f.uniforms.radius.value = n.radius),
                t.setRenderTarget(n.mapPass),
                t.clear(),
                t.renderBufferDirect(i, null, r, f, v, null),
                (m.uniforms.shadow_pass.value = n.mapPass.texture),
                (m.uniforms.resolution.value = n.mapSize),
                (m.uniforms.radius.value = n.radius),
                t.setRenderTarget(n.map),
                t.clear(),
                t.renderBufferDirect(i, null, r, m, v, null);
        }
        function x(t) {
            const e = t << 0;
            let n = o[e];
            return void 0 === n && ((n = new Cr({ depthPacking: 3201, morphTargets: t })), (o[e] = n)), n;
        }
        function b(t) {
            const e = t << 0;
            let n = l[e];
            return void 0 === n && ((n = new Pr({ morphTargets: t })), (l[e] = n)), n;
        }
        function M(e, n, i, r, s, a, o) {
            let l = null,
                c = x,
                u = e.customDepthMaterial;
            if ((!0 === r.isPointLight && ((c = b), (u = e.customDistanceMaterial)), void 0 === u)) {
                let t = !1;
                !0 === i.morphTargets && (t = n.morphAttributes && n.morphAttributes.position && n.morphAttributes.position.length > 0), (l = c(t));
            } else l = u;
            if (t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) {
                const t = l.uuid,
                    e = i.uuid;
                let n = h[t];
                void 0 === n && ((n = {}), (h[t] = n));
                let r = n[e];
                void 0 === r && ((r = l.clone()), (n[e] = r)), (l = r);
            }
            return (
                (l.visible = i.visible),
                (l.wireframe = i.wireframe),
                (l.side = 3 === o ? (null !== i.shadowSide ? i.shadowSide : i.side) : null !== i.shadowSide ? i.shadowSide : p[i.side]),
                (l.clipShadows = i.clipShadows),
                (l.clippingPlanes = i.clippingPlanes),
                (l.clipIntersection = i.clipIntersection),
                (l.wireframeLinewidth = i.wireframeLinewidth),
                (l.linewidth = i.linewidth),
                !0 === r.isPointLight && !0 === l.isMeshDistanceMaterial && (l.referencePosition.setFromMatrixPosition(r.matrixWorld), (l.nearDistance = s), (l.farDistance = a)),
                l
            );
        }
        function S(n, r, s, a, o) {
            if (!1 === n.visible) return;
            if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || (n.receiveShadow && 3 === o)) && (!n.frustumCulled || i.intersectsObject(n))) {
                n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, n.matrixWorld);
                const i = e.update(n),
                    r = n.material;
                if (Array.isArray(r)) {
                    const e = i.groups;
                    for (let l = 0, c = e.length; l < c; l++) {
                        const c = e[l],
                            h = r[c.materialIndex];
                        if (h && h.visible) {
                            const e = M(n, i, h, a, s.near, s.far, o);
                            t.renderBufferDirect(s, null, i, e, n, c);
                        }
                    }
                } else if (r.visible) {
                    const e = M(n, i, r, a, s.near, s.far, o);
                    t.renderBufferDirect(s, null, i, e, n, null);
                }
            }
            const l = n.children;
            for (let t = 0, e = l.length; t < e; t++) S(l[t], r, s, a, o);
        }
        (this.enabled = !1),
            (this.autoUpdate = !0),
            (this.needsUpdate = !1),
            (this.type = 1),
            (this.render = function (e, n, o) {
                if (!1 === y.enabled) return;
                if (!1 === y.autoUpdate && !1 === y.needsUpdate) return;
                if (0 === e.length) return;
                const l = t.getRenderTarget(),
                    h = t.getActiveCubeFace(),
                    p = t.getActiveMipmapLevel(),
                    f = t.state;
                f.setBlending(0), f.buffers.color.setClear(1, 1, 1, 1), f.buffers.depth.setTest(!0), f.setScissorTest(!1);
                for (let l = 0, h = e.length; l < h; l++) {
                    const h = e[l],
                        p = h.shadow;
                    if (void 0 === p) {
                        console.warn("THREE.WebGLShadowMap:", h, "has no shadow.");
                        continue;
                    }
                    if (!1 === p.autoUpdate && !1 === p.needsUpdate) continue;
                    r.copy(p.mapSize);
                    const m = p.getFrameExtents();
                    if (
                        (r.multiply(m),
                        s.copy(p.mapSize),
                        (r.x > u || r.y > u) && (r.x > u && ((s.x = Math.floor(u / m.x)), (r.x = s.x * m.x), (p.mapSize.x = s.x)), r.y > u && ((s.y = Math.floor(u / m.y)), (r.y = s.y * m.y), (p.mapSize.y = s.y))),
                        null === p.map && !p.isPointLightShadow && 3 === this.type)
                    ) {
                        const t = { minFilter: d, magFilter: d, format: w };
                        (p.map = new it(r.x, r.y, t)), (p.map.texture.name = h.name + ".shadowMap"), (p.mapPass = new it(r.x, r.y, t)), p.camera.updateProjectionMatrix();
                    }
                    if (null === p.map) {
                        const t = { minFilter: c, magFilter: c, format: w };
                        (p.map = new it(r.x, r.y, t)), (p.map.texture.name = h.name + ".shadowMap"), p.camera.updateProjectionMatrix();
                    }
                    t.setRenderTarget(p.map), t.clear();
                    const g = p.getViewportCount();
                    for (let t = 0; t < g; t++) {
                        const e = p.getViewport(t);
                        a.set(s.x * e.x, s.y * e.y, s.x * e.z, s.y * e.w), f.viewport(a), p.updateMatrices(h, t), (i = p.getFrustum()), S(n, o, p.camera, h, this.type);
                    }
                    p.isPointLightShadow || 3 !== this.type || _(p, o), (p.needsUpdate = !1);
                }
                (y.needsUpdate = !1), t.setRenderTarget(l, h, p);
            });
    }
    function Ir(t, n, i) {
        const r = i.isWebGL2;
        const s = new (function () {
                let e = !1;
                const n = new nt();
                let i = null;
                const r = new nt(0, 0, 0, 0);
                return {
                    setMask: function (n) {
                        i === n || e || (t.colorMask(n, n, n, n), (i = n));
                    },
                    setLocked: function (t) {
                        e = t;
                    },
                    setClear: function (e, i, s, a, o) {
                        !0 === o && ((e *= a), (i *= a), (s *= a)), n.set(e, i, s, a), !1 === r.equals(n) && (t.clearColor(e, i, s, a), r.copy(n));
                    },
                    reset: function () {
                        (e = !1), (i = null), r.set(-1, 0, 0, 0);
                    },
                };
            })(),
            a = new (function () {
                let e = !1,
                    n = null,
                    i = null,
                    r = null;
                return {
                    setTest: function (t) {
                        t ? F(2929) : H(2929);
                    },
                    setMask: function (i) {
                        n === i || e || (t.depthMask(i), (n = i));
                    },
                    setFunc: function (e) {
                        if (i !== e) {
                            if (e)
                                switch (e) {
                                    case 0:
                                        t.depthFunc(512);
                                        break;
                                    case 1:
                                        t.depthFunc(519);
                                        break;
                                    case 2:
                                        t.depthFunc(513);
                                        break;
                                    case 3:
                                        t.depthFunc(515);
                                        break;
                                    case 4:
                                        t.depthFunc(514);
                                        break;
                                    case 5:
                                        t.depthFunc(518);
                                        break;
                                    case 6:
                                        t.depthFunc(516);
                                        break;
                                    case 7:
                                        t.depthFunc(517);
                                        break;
                                    default:
                                        t.depthFunc(515);
                                }
                            else t.depthFunc(515);
                            i = e;
                        }
                    },
                    setLocked: function (t) {
                        e = t;
                    },
                    setClear: function (e) {
                        r !== e && (t.clearDepth(e), (r = e));
                    },
                    reset: function () {
                        (e = !1), (n = null), (i = null), (r = null);
                    },
                };
            })(),
            o = new (function () {
                let e = !1,
                    n = null,
                    i = null,
                    r = null,
                    s = null,
                    a = null,
                    o = null,
                    l = null,
                    c = null;
                return {
                    setTest: function (t) {
                        e || (t ? F(2960) : H(2960));
                    },
                    setMask: function (i) {
                        n === i || e || (t.stencilMask(i), (n = i));
                    },
                    setFunc: function (e, n, a) {
                        (i === e && r === n && s === a) || (t.stencilFunc(e, n, a), (i = e), (r = n), (s = a));
                    },
                    setOp: function (e, n, i) {
                        (a === e && o === n && l === i) || (t.stencilOp(e, n, i), (a = e), (o = n), (l = i));
                    },
                    setLocked: function (t) {
                        e = t;
                    },
                    setClear: function (e) {
                        c !== e && (t.clearStencil(e), (c = e));
                    },
                    reset: function () {
                        (e = !1), (n = null), (i = null), (r = null), (s = null), (a = null), (o = null), (l = null), (c = null);
                    },
                };
            })();
        let l = {},
            c = null,
            h = {},
            u = null,
            d = !1,
            p = null,
            f = null,
            m = null,
            g = null,
            v = null,
            y = null,
            _ = null,
            x = !1,
            w = null,
            b = null,
            M = null,
            S = null,
            T = null;
        const E = t.getParameter(35661);
        let A = !1,
            L = 0;
        const R = t.getParameter(7938);
        -1 !== R.indexOf("WebGL") ? ((L = parseFloat(/^WebGL (\d)/.exec(R)[1])), (A = L >= 1)) : -1 !== R.indexOf("OpenGL ES") && ((L = parseFloat(/^OpenGL ES (\d)/.exec(R)[1])), (A = L >= 2));
        let C = null,
            P = {};
        const D = t.getParameter(3088),
            I = t.getParameter(2978),
            N = new nt().fromArray(D),
            z = new nt().fromArray(I);
        function O(e, n, i) {
            const r = new Uint8Array(4),
                s = t.createTexture();
            t.bindTexture(e, s), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728);
            for (let e = 0; e < i; e++) t.texImage2D(n + e, 0, 6408, 1, 1, 0, 6408, 5121, r);
            return s;
        }
        const B = {};
        function F(e) {
            !0 !== l[e] && (t.enable(e), (l[e] = !0));
        }
        function H(e) {
            !1 !== l[e] && (t.disable(e), (l[e] = !1));
        }
        (B[3553] = O(3553, 3553, 1)), (B[34067] = O(34067, 34069, 6)), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), F(2929), a.setFunc(3), V(!1), W(1), F(2884), G(0);
        const U = { [e]: 32774, 101: 32778, 102: 32779 };
        if (r) (U[103] = 32775), (U[104] = 32776);
        else {
            const t = n.get("EXT_blend_minmax");
            null !== t && ((U[103] = t.MIN_EXT), (U[104] = t.MAX_EXT));
        }
        const k = { 200: 0, 201: 1, 202: 768, 204: 770, 210: 776, 208: 774, 206: 772, 203: 769, 205: 771, 209: 775, 207: 773 };
        function G(n, i, r, s, a, o, l, c) {
            if (0 !== n) {
                if ((!1 === d && (F(3042), (d = !0)), 5 === n))
                    (a = a || i),
                        (o = o || r),
                        (l = l || s),
                        (i === f && a === v) || (t.blendEquationSeparate(U[i], U[a]), (f = i), (v = a)),
                        (r === m && s === g && o === y && l === _) || (t.blendFuncSeparate(k[r], k[s], k[o], k[l]), (m = r), (g = s), (y = o), (_ = l)),
                        (p = n),
                        (x = null);
                else if (n !== p || c !== x) {
                    if (((f === e && v === e) || (t.blendEquation(32774), (f = e), (v = e)), c))
                        switch (n) {
                            case 1:
                                t.blendFuncSeparate(1, 771, 1, 771);
                                break;
                            case 2:
                                t.blendFunc(1, 1);
                                break;
                            case 3:
                                t.blendFuncSeparate(0, 0, 769, 771);
                                break;
                            case 4:
                                t.blendFuncSeparate(0, 768, 0, 770);
                                break;
                            default:
                                console.error("THREE.WebGLState: Invalid blending: ", n);
                        }
                    else
                        switch (n) {
                            case 1:
                                t.blendFuncSeparate(770, 771, 1, 771);
                                break;
                            case 2:
                                t.blendFunc(770, 1);
                                break;
                            case 3:
                                t.blendFunc(0, 769);
                                break;
                            case 4:
                                t.blendFunc(0, 768);
                                break;
                            default:
                                console.error("THREE.WebGLState: Invalid blending: ", n);
                        }
                    (m = null), (g = null), (y = null), (_ = null), (p = n), (x = c);
                }
            } else !0 === d && (H(3042), (d = !1));
        }
        function V(e) {
            w !== e && (e ? t.frontFace(2304) : t.frontFace(2305), (w = e));
        }
        function W(e) {
            0 !== e ? (F(2884), e !== b && (1 === e ? t.cullFace(1029) : 2 === e ? t.cullFace(1028) : t.cullFace(1032))) : H(2884), (b = e);
        }
        function j(e, n, i) {
            e ? (F(32823), (S === n && T === i) || (t.polygonOffset(n, i), (S = n), (T = i))) : H(32823);
        }
        function q(e) {
            void 0 === e && (e = 33984 + E - 1), C !== e && (t.activeTexture(e), (C = e));
        }
        return {
            buffers: { color: s, depth: a, stencil: o },
            enable: F,
            disable: H,
            bindFramebuffer: function (e, n) {
                return null === n && null !== c && (n = c), h[e] !== n && (t.bindFramebuffer(e, n), (h[e] = n), r && (36009 === e && (h[36160] = n), 36160 === e && (h[36009] = n)), !0);
            },
            bindXRFramebuffer: function (e) {
                e !== c && (t.bindFramebuffer(36160, e), (c = e));
            },
            useProgram: function (e) {
                return u !== e && (t.useProgram(e), (u = e), !0);
            },
            setBlending: G,
            setMaterial: function (t, e) {
                2 === t.side ? H(2884) : F(2884);
                let n = 1 === t.side;
                e && (n = !n),
                    V(n),
                    1 === t.blending && !1 === t.transparent ? G(0) : G(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha),
                    a.setFunc(t.depthFunc),
                    a.setTest(t.depthTest),
                    a.setMask(t.depthWrite),
                    s.setMask(t.colorWrite);
                const i = t.stencilWrite;
                o.setTest(i),
                    i && (o.setMask(t.stencilWriteMask), o.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), o.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)),
                    j(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits),
                    !0 === t.alphaToCoverage ? F(32926) : H(32926);
            },
            setFlipSided: V,
            setCullFace: W,
            setLineWidth: function (e) {
                e !== M && (A && t.lineWidth(e), (M = e));
            },
            setPolygonOffset: j,
            setScissorTest: function (t) {
                t ? F(3089) : H(3089);
            },
            activeTexture: q,
            bindTexture: function (e, n) {
                null === C && q();
                let i = P[C];
                void 0 === i && ((i = { type: void 0, texture: void 0 }), (P[C] = i)), (i.type === e && i.texture === n) || (t.bindTexture(e, n || B[e]), (i.type = e), (i.texture = n));
            },
            unbindTexture: function () {
                const e = P[C];
                void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null), (e.type = void 0), (e.texture = void 0));
            },
            compressedTexImage2D: function () {
                try {
                    t.compressedTexImage2D.apply(t, arguments);
                } catch (t) {
                    console.error("THREE.WebGLState:", t);
                }
            },
            texImage2D: function () {
                try {
                    t.texImage2D.apply(t, arguments);
                } catch (t) {
                    console.error("THREE.WebGLState:", t);
                }
            },
            texImage3D: function () {
                try {
                    t.texImage3D.apply(t, arguments);
                } catch (t) {
                    console.error("THREE.WebGLState:", t);
                }
            },
            scissor: function (e) {
                !1 === N.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), N.copy(e));
            },
            viewport: function (e) {
                !1 === z.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), z.copy(e));
            },
            reset: function () {
                t.disable(3042),
                    t.disable(2884),
                    t.disable(2929),
                    t.disable(32823),
                    t.disable(3089),
                    t.disable(2960),
                    t.disable(32926),
                    t.blendEquation(32774),
                    t.blendFunc(1, 0),
                    t.blendFuncSeparate(1, 0, 1, 0),
                    t.colorMask(!0, !0, !0, !0),
                    t.clearColor(0, 0, 0, 0),
                    t.depthMask(!0),
                    t.depthFunc(513),
                    t.clearDepth(1),
                    t.stencilMask(4294967295),
                    t.stencilFunc(519, 0, 4294967295),
                    t.stencilOp(7680, 7680, 7680),
                    t.clearStencil(0),
                    t.cullFace(1029),
                    t.frontFace(2305),
                    t.polygonOffset(0, 0),
                    t.activeTexture(33984),
                    t.bindFramebuffer(36160, null),
                    !0 === r && (t.bindFramebuffer(36009, null), t.bindFramebuffer(36008, null)),
                    t.useProgram(null),
                    t.lineWidth(1),
                    t.scissor(0, 0, t.canvas.width, t.canvas.height),
                    t.viewport(0, 0, t.canvas.width, t.canvas.height),
                    (l = {}),
                    (C = null),
                    (P = {}),
                    (c = null),
                    (h = {}),
                    (u = null),
                    (d = !1),
                    (p = null),
                    (f = null),
                    (m = null),
                    (g = null),
                    (v = null),
                    (y = null),
                    (_ = null),
                    (x = !1),
                    (w = null),
                    (b = null),
                    (M = null),
                    (S = null),
                    (T = null),
                    N.set(0, 0, t.canvas.width, t.canvas.height),
                    z.set(0, 0, t.canvas.width, t.canvas.height),
                    s.reset(),
                    a.reset(),
                    o.reset();
            },
        };
    }
    function Nr(t, e, n, i, r, s, f) {
        const S = r.isWebGL2,
            T = r.maxTextures,
            E = r.maxCubemapSize,
            A = r.maxTextureSize,
            L = r.maxSamples,
            R = new WeakMap();
        let C,
            P = !1;
        try {
            P = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
        } catch (t) {}
        function D(t, e) {
            return P ? new OffscreenCanvas(t, e) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
        }
        function I(t, e, n, i) {
            let r = 1;
            if (((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)), r < 1 || !0 === e)) {
                if (
                    ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement) ||
                    ("undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement) ||
                    ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
                ) {
                    const i = e ? Y : Math.floor,
                        s = i(r * t.width),
                        a = i(r * t.height);
                    void 0 === C && (C = D(s, a));
                    const o = n ? D(s, a) : C;
                    (o.width = s), (o.height = a);
                    return o.getContext("2d").drawImage(t, 0, 0, s, a), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + s + "x" + a + ")."), o;
                }
                return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t;
            }
            return t;
        }
        function N(t) {
            return X(t.width) && X(t.height);
        }
        function z(t, e) {
            return t.generateMipmaps && e && t.minFilter !== c && t.minFilter !== d;
        }
        function O(e, n, r, s) {
            t.generateMipmap(e);
            i.get(n).__maxMipLevel = Math.log2(Math.max(r, s));
        }
        function B(n, i, r) {
            if (!1 === S) return i;
            if (null !== n) {
                if (void 0 !== t[n]) return t[n];
                console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
            }
            let s = i;
            return (
                6403 === i && (5126 === r && (s = 33326), 5131 === r && (s = 33325), 5121 === r && (s = 33321)),
                6407 === i && (5126 === r && (s = 34837), 5131 === r && (s = 34843), 5121 === r && (s = 32849)),
                6408 === i && (5126 === r && (s = 34836), 5131 === r && (s = 34842), 5121 === r && (s = 32856)),
                (33325 !== s && 33326 !== s && 34842 !== s && 34836 !== s) || e.get("EXT_color_buffer_float"),
                s
            );
        }
        function F(t) {
            return t === c || t === h || t === u ? 9728 : 9729;
        }
        function H(e) {
            const n = e.target;
            n.removeEventListener("dispose", H),
                (function (e) {
                    const n = i.get(e);
                    if (void 0 === n.__webglInit) return;
                    t.deleteTexture(n.__webglTexture), i.remove(e);
                })(n),
                n.isVideoTexture && R.delete(n),
                f.memory.textures--;
        }
        function U(e) {
            const n = e.target;
            n.removeEventListener("dispose", U),
                (function (e) {
                    const n = e.texture,
                        r = i.get(e),
                        s = i.get(n);
                    if (!e) return;
                    void 0 !== s.__webglTexture && (t.deleteTexture(s.__webglTexture), f.memory.textures--);
                    e.depthTexture && e.depthTexture.dispose();
                    if (e.isWebGLCubeRenderTarget) for (let e = 0; e < 6; e++) t.deleteFramebuffer(r.__webglFramebuffer[e]), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer[e]);
                    else
                        t.deleteFramebuffer(r.__webglFramebuffer),
                            r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer),
                            r.__webglMultisampledFramebuffer && t.deleteFramebuffer(r.__webglMultisampledFramebuffer),
                            r.__webglColorRenderbuffer && t.deleteRenderbuffer(r.__webglColorRenderbuffer),
                            r.__webglDepthRenderbuffer && t.deleteRenderbuffer(r.__webglDepthRenderbuffer);
                    if (e.isWebGLMultipleRenderTargets)
                        for (let e = 0, r = n.length; e < r; e++) {
                            const r = i.get(n[e]);
                            r.__webglTexture && (t.deleteTexture(r.__webglTexture), f.memory.textures--), i.remove(n[e]);
                        }
                    i.remove(n), i.remove(e);
                })(n);
        }
        let k = 0;
        function G(t, e) {
            const r = i.get(t);
            if (
                (t.isVideoTexture &&
                    (function (t) {
                        const e = f.render.frame;
                        R.get(t) !== e && (R.set(t, e), t.update());
                    })(t),
                t.version > 0 && r.__version !== t.version)
            ) {
                const n = t.image;
                if (void 0 === n) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
                else {
                    if (!1 !== n.complete) return void J(r, t, e);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
                }
            }
            n.activeTexture(33984 + e), n.bindTexture(3553, r.__webglTexture);
        }
        function V(e, r) {
            const a = i.get(e);
            e.version > 0 && a.__version !== e.version
                ? (function (e, i, r) {
                      if (6 !== i.image.length) return;
                      Z(e, i), n.activeTexture(33984 + r), n.bindTexture(34067, e.__webglTexture), t.pixelStorei(37440, i.flipY), t.pixelStorei(37441, i.premultiplyAlpha), t.pixelStorei(3317, i.unpackAlignment), t.pixelStorei(37443, 0);
                      const a = i && (i.isCompressedTexture || i.image[0].isCompressedTexture),
                          o = i.image[0] && i.image[0].isDataTexture,
                          l = [];
                      for (let t = 0; t < 6; t++) l[t] = a || o ? (o ? i.image[t].image : i.image[t]) : I(i.image[t], !1, !0, E);
                      const c = l[0],
                          h = N(c) || S,
                          u = s.convert(i.format),
                          d = s.convert(i.type),
                          p = B(i.internalFormat, u, d);
                      let f;
                      if ((q(34067, i, h), a)) {
                          for (let t = 0; t < 6; t++) {
                              f = l[t].mipmaps;
                              for (let e = 0; e < f.length; e++) {
                                  const r = f[e];
                                  i.format !== w && i.format !== x
                                      ? null !== u
                                          ? n.compressedTexImage2D(34069 + t, e, p, r.width, r.height, 0, r.data)
                                          : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()")
                                      : n.texImage2D(34069 + t, e, p, r.width, r.height, 0, u, d, r.data);
                              }
                          }
                          e.__maxMipLevel = f.length - 1;
                      } else {
                          f = i.mipmaps;
                          for (let t = 0; t < 6; t++)
                              if (o) {
                                  n.texImage2D(34069 + t, 0, p, l[t].width, l[t].height, 0, u, d, l[t].data);
                                  for (let e = 0; e < f.length; e++) {
                                      const i = f[e].image[t].image;
                                      n.texImage2D(34069 + t, e + 1, p, i.width, i.height, 0, u, d, i.data);
                                  }
                              } else {
                                  n.texImage2D(34069 + t, 0, p, u, d, l[t]);
                                  for (let e = 0; e < f.length; e++) {
                                      const i = f[e];
                                      n.texImage2D(34069 + t, e + 1, p, u, d, i.image[t]);
                                  }
                              }
                          e.__maxMipLevel = f.length;
                      }
                      z(i, h) && O(34067, i, c.width, c.height);
                      (e.__version = i.version), i.onUpdate && i.onUpdate(i);
                  })(a, e, r)
                : (n.activeTexture(33984 + r), n.bindTexture(34067, a.__webglTexture));
        }
        const W = { [a]: 10497, [o]: 33071, [l]: 33648 },
            j = { [c]: 9728, [h]: 9984, [u]: 9986, [d]: 9729, 1007: 9985, [p]: 9987 };
        function q(n, s, a) {
            if (
                (a
                    ? (t.texParameteri(n, 10242, W[s.wrapS]),
                      t.texParameteri(n, 10243, W[s.wrapT]),
                      (32879 !== n && 35866 !== n) || t.texParameteri(n, 32882, W[s.wrapR]),
                      t.texParameteri(n, 10240, j[s.magFilter]),
                      t.texParameteri(n, 10241, j[s.minFilter]))
                    : (t.texParameteri(n, 10242, 33071),
                      t.texParameteri(n, 10243, 33071),
                      (32879 !== n && 35866 !== n) || t.texParameteri(n, 32882, 33071),
                      (s.wrapS === o && s.wrapT === o) || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),
                      t.texParameteri(n, 10240, F(s.magFilter)),
                      t.texParameteri(n, 10241, F(s.minFilter)),
                      s.minFilter !== c && s.minFilter !== d && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),
                !0 === e.has("EXT_texture_filter_anisotropic"))
            ) {
                const a = e.get("EXT_texture_filter_anisotropic");
                if (s.type === v && !1 === e.has("OES_texture_float_linear")) return;
                if (!1 === S && s.type === y && !1 === e.has("OES_texture_half_float_linear")) return;
                (s.anisotropy > 1 || i.get(s).__currentAnisotropy) && (t.texParameterf(n, a.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, r.getMaxAnisotropy())), (i.get(s).__currentAnisotropy = s.anisotropy));
            }
        }
        function Z(e, n) {
            void 0 === e.__webglInit && ((e.__webglInit = !0), n.addEventListener("dispose", H), (e.__webglTexture = t.createTexture()), f.memory.textures++);
        }
        function J(e, i, r) {
            let a = 3553;
            i.isDataTexture2DArray && (a = 35866),
                i.isDataTexture3D && (a = 32879),
                Z(e, i),
                n.activeTexture(33984 + r),
                n.bindTexture(a, e.__webglTexture),
                t.pixelStorei(37440, i.flipY),
                t.pixelStorei(37441, i.premultiplyAlpha),
                t.pixelStorei(3317, i.unpackAlignment),
                t.pixelStorei(37443, 0);
            const l =
                    (function (t) {
                        return !S && (t.wrapS !== o || t.wrapT !== o || (t.minFilter !== c && t.minFilter !== d));
                    })(i) && !1 === N(i.image),
                h = I(i.image, l, !1, A),
                u = N(h) || S,
                p = s.convert(i.format);
            let f,
                y = s.convert(i.type),
                T = B(i.internalFormat, p, y);
            q(a, i, u);
            const E = i.mipmaps;
            if (i.isDepthTexture)
                (T = 6402),
                    S ? (T = i.type === v ? 36012 : i.type === g ? 33190 : i.type === _ ? 35056 : 33189) : i.type === v && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),
                    i.format === b && 6402 === T && i.type !== m && i.type !== g && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), (i.type = m), (y = s.convert(i.type))),
                    i.format === M && 6402 === T && ((T = 34041), i.type !== _ && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), (i.type = _), (y = s.convert(i.type)))),
                    n.texImage2D(3553, 0, T, h.width, h.height, 0, p, y, null);
            else if (i.isDataTexture)
                if (E.length > 0 && u) {
                    for (let t = 0, e = E.length; t < e; t++) (f = E[t]), n.texImage2D(3553, t, T, f.width, f.height, 0, p, y, f.data);
                    (i.generateMipmaps = !1), (e.__maxMipLevel = E.length - 1);
                } else n.texImage2D(3553, 0, T, h.width, h.height, 0, p, y, h.data), (e.__maxMipLevel = 0);
            else if (i.isCompressedTexture) {
                for (let t = 0, e = E.length; t < e; t++)
                    (f = E[t]),
                        i.format !== w && i.format !== x
                            ? null !== p
                                ? n.compressedTexImage2D(3553, t, T, f.width, f.height, 0, f.data)
                                : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()")
                            : n.texImage2D(3553, t, T, f.width, f.height, 0, p, y, f.data);
                e.__maxMipLevel = E.length - 1;
            } else if (i.isDataTexture2DArray) n.texImage3D(35866, 0, T, h.width, h.height, h.depth, 0, p, y, h.data), (e.__maxMipLevel = 0);
            else if (i.isDataTexture3D) n.texImage3D(32879, 0, T, h.width, h.height, h.depth, 0, p, y, h.data), (e.__maxMipLevel = 0);
            else if (E.length > 0 && u) {
                for (let t = 0, e = E.length; t < e; t++) (f = E[t]), n.texImage2D(3553, t, T, p, y, f);
                (i.generateMipmaps = !1), (e.__maxMipLevel = E.length - 1);
            } else n.texImage2D(3553, 0, T, p, y, h), (e.__maxMipLevel = 0);
            z(i, u) && O(a, i, h.width, h.height), (e.__version = i.version), i.onUpdate && i.onUpdate(i);
        }
        function Q(e, r, a, o, l) {
            const c = s.convert(a.format),
                h = s.convert(a.type),
                u = B(a.internalFormat, c, h);
            32879 === l || 35866 === l ? n.texImage3D(l, 0, u, r.width, r.height, r.depth, 0, c, h, null) : n.texImage2D(l, 0, u, r.width, r.height, 0, c, h, null),
                n.bindFramebuffer(36160, e),
                t.framebufferTexture2D(36160, o, l, i.get(a).__webglTexture, 0),
                n.bindFramebuffer(36160, null);
        }
        function K(e, n, i) {
            if ((t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer)) {
                let r = 33189;
                if (i) {
                    const e = n.depthTexture;
                    e && e.isDepthTexture && (e.type === v ? (r = 36012) : e.type === g && (r = 33190));
                    const i = tt(n);
                    t.renderbufferStorageMultisample(36161, i, r, n.width, n.height);
                } else t.renderbufferStorage(36161, r, n.width, n.height);
                t.framebufferRenderbuffer(36160, 36096, 36161, e);
            } else if (n.depthBuffer && n.stencilBuffer) {
                if (i) {
                    const e = tt(n);
                    t.renderbufferStorageMultisample(36161, e, 35056, n.width, n.height);
                } else t.renderbufferStorage(36161, 34041, n.width, n.height);
                t.framebufferRenderbuffer(36160, 33306, 36161, e);
            } else {
                const e = !0 === n.isWebGLMultipleRenderTargets ? n.texture[0] : n.texture,
                    r = s.convert(e.format),
                    a = s.convert(e.type),
                    o = B(e.internalFormat, r, a);
                if (i) {
                    const e = tt(n);
                    t.renderbufferStorageMultisample(36161, e, o, n.width, n.height);
                } else t.renderbufferStorage(36161, o, n.width, n.height);
            }
            t.bindRenderbuffer(36161, null);
        }
        function $(e) {
            const r = i.get(e),
                s = !0 === e.isWebGLCubeRenderTarget;
            if (e.depthTexture) {
                if (s) throw new Error("target.depthTexture not supported in Cube render targets");
                !(function (e, r) {
                    if (r && r.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
                    if ((n.bindFramebuffer(36160, e), !r.depthTexture || !r.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    (i.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height) ||
                        ((r.depthTexture.image.width = r.width), (r.depthTexture.image.height = r.height), (r.depthTexture.needsUpdate = !0)),
                        G(r.depthTexture, 0);
                    const s = i.get(r.depthTexture).__webglTexture;
                    if (r.depthTexture.format === b) t.framebufferTexture2D(36160, 36096, 3553, s, 0);
                    else {
                        if (r.depthTexture.format !== M) throw new Error("Unknown depthTexture format");
                        t.framebufferTexture2D(36160, 33306, 3553, s, 0);
                    }
                })(r.__webglFramebuffer, e);
            } else if (s) {
                r.__webglDepthbuffer = [];
                for (let i = 0; i < 6; i++) n.bindFramebuffer(36160, r.__webglFramebuffer[i]), (r.__webglDepthbuffer[i] = t.createRenderbuffer()), K(r.__webglDepthbuffer[i], e, !1);
            } else n.bindFramebuffer(36160, r.__webglFramebuffer), (r.__webglDepthbuffer = t.createRenderbuffer()), K(r.__webglDepthbuffer, e, !1);
            n.bindFramebuffer(36160, null);
        }
        function tt(t) {
            return S && t.isWebGLMultisampleRenderTarget ? Math.min(L, t.samples) : 0;
        }
        let et = !1,
            nt = !1;
        (this.allocateTextureUnit = function () {
            const t = k;
            return t >= T && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + T), (k += 1), t;
        }),
            (this.resetTextureUnits = function () {
                k = 0;
            }),
            (this.setTexture2D = G),
            (this.setTexture2DArray = function (t, e) {
                const r = i.get(t);
                t.version > 0 && r.__version !== t.version ? J(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(35866, r.__webglTexture));
            }),
            (this.setTexture3D = function (t, e) {
                const r = i.get(t);
                t.version > 0 && r.__version !== t.version ? J(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(32879, r.__webglTexture));
            }),
            (this.setTextureCube = V),
            (this.setupRenderTarget = function (e) {
                const a = e.texture,
                    o = i.get(e),
                    l = i.get(a);
                e.addEventListener("dispose", U), !0 !== e.isWebGLMultipleRenderTargets && ((l.__webglTexture = t.createTexture()), (l.__version = a.version), f.memory.textures++);
                const c = !0 === e.isWebGLCubeRenderTarget,
                    h = !0 === e.isWebGLMultipleRenderTargets,
                    u = !0 === e.isWebGLMultisampleRenderTarget,
                    d = a.isDataTexture3D || a.isDataTexture2DArray,
                    p = N(e) || S;
                if ((!S || a.format !== x || (a.type !== v && a.type !== y) || ((a.format = w), console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), c)) {
                    o.__webglFramebuffer = [];
                    for (let e = 0; e < 6; e++) o.__webglFramebuffer[e] = t.createFramebuffer();
                } else if (((o.__webglFramebuffer = t.createFramebuffer()), h))
                    if (r.drawBuffers) {
                        const n = e.texture;
                        for (let e = 0, r = n.length; e < r; e++) {
                            const r = i.get(n[e]);
                            void 0 === r.__webglTexture && ((r.__webglTexture = t.createTexture()), f.memory.textures++);
                        }
                    } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
                else if (u)
                    if (S) {
                        (o.__webglMultisampledFramebuffer = t.createFramebuffer()), (o.__webglColorRenderbuffer = t.createRenderbuffer()), t.bindRenderbuffer(36161, o.__webglColorRenderbuffer);
                        const i = s.convert(a.format),
                            r = s.convert(a.type),
                            l = B(a.internalFormat, i, r),
                            c = tt(e);
                        t.renderbufferStorageMultisample(36161, c, l, e.width, e.height),
                            n.bindFramebuffer(36160, o.__webglMultisampledFramebuffer),
                            t.framebufferRenderbuffer(36160, 36064, 36161, o.__webglColorRenderbuffer),
                            t.bindRenderbuffer(36161, null),
                            e.depthBuffer && ((o.__webglDepthRenderbuffer = t.createRenderbuffer()), K(o.__webglDepthRenderbuffer, e, !0)),
                            n.bindFramebuffer(36160, null);
                    } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
                if (c) {
                    n.bindTexture(34067, l.__webglTexture), q(34067, a, p);
                    for (let t = 0; t < 6; t++) Q(o.__webglFramebuffer[t], e, a, 36064, 34069 + t);
                    z(a, p) && O(34067, a, e.width, e.height), n.bindTexture(34067, null);
                } else if (h) {
                    const t = e.texture;
                    for (let r = 0, s = t.length; r < s; r++) {
                        const s = t[r],
                            a = i.get(s);
                        n.bindTexture(3553, a.__webglTexture), q(3553, s, p), Q(o.__webglFramebuffer, e, s, 36064 + r, 3553), z(s, p) && O(3553, s, e.width, e.height);
                    }
                    n.bindTexture(3553, null);
                } else {
                    let t = 3553;
                    if (d)
                        if (S) {
                            t = a.isDataTexture3D ? 32879 : 35866;
                        } else console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.");
                    n.bindTexture(t, l.__webglTexture), q(t, a, p), Q(o.__webglFramebuffer, e, a, 36064, t), z(a, p) && O(3553, a, e.width, e.height), n.bindTexture(3553, null);
                }
                e.depthBuffer && $(e);
            }),
            (this.updateRenderTargetMipmap = function (t) {
                const e = N(t) || S,
                    r = !0 === t.isWebGLMultipleRenderTargets ? t.texture : [t.texture];
                for (let s = 0, a = r.length; s < a; s++) {
                    const a = r[s];
                    if (z(a, e)) {
                        const e = t.isWebGLCubeRenderTarget ? 34067 : 3553,
                            r = i.get(a).__webglTexture;
                        n.bindTexture(e, r), O(e, a, t.width, t.height), n.bindTexture(e, null);
                    }
                }
            }),
            (this.updateMultisampleRenderTarget = function (e) {
                if (e.isWebGLMultisampleRenderTarget)
                    if (S) {
                        const r = e.width,
                            s = e.height;
                        let a = 16384;
                        e.depthBuffer && (a |= 256), e.stencilBuffer && (a |= 1024);
                        const o = i.get(e);
                        n.bindFramebuffer(36008, o.__webglMultisampledFramebuffer),
                            n.bindFramebuffer(36009, o.__webglFramebuffer),
                            t.blitFramebuffer(0, 0, r, s, 0, 0, r, s, a, 9728),
                            n.bindFramebuffer(36008, null),
                            n.bindFramebuffer(36009, o.__webglMultisampledFramebuffer);
                    } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
            }),
            (this.safeSetTexture2D = function (t, e) {
                t && t.isWebGLRenderTarget && (!1 === et && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), (et = !0)), (t = t.texture)), G(t, e);
            }),
            (this.safeSetTextureCube = function (t, e) {
                t && t.isWebGLCubeRenderTarget && (!1 === nt && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), (nt = !0)), (t = t.texture)), V(t, e);
            });
    }
    function zr(t, e, n) {
        const i = n.isWebGL2;
        return {
            convert: function (t) {
                let n;
                if (t === f) return 5121;
                if (1017 === t) return 32819;
                if (1018 === t) return 32820;
                if (1019 === t) return 33635;
                if (1010 === t) return 5120;
                if (1011 === t) return 5122;
                if (t === m) return 5123;
                if (1013 === t) return 5124;
                if (t === g) return 5125;
                if (t === v) return 5126;
                if (t === y) return i ? 5131 : ((n = e.get("OES_texture_half_float")), null !== n ? n.HALF_FLOAT_OES : null);
                if (1021 === t) return 6406;
                if (t === x) return 6407;
                if (t === w) return 6408;
                if (1024 === t) return 6409;
                if (1025 === t) return 6410;
                if (t === b) return 6402;
                if (t === M) return 34041;
                if (1028 === t) return 6403;
                if (1029 === t) return 36244;
                if (1030 === t) return 33319;
                if (1031 === t) return 33320;
                if (1032 === t) return 36248;
                if (1033 === t) return 36249;
                if (33776 === t || 33777 === t || 33778 === t || 33779 === t) {
                    if (((n = e.get("WEBGL_compressed_texture_s3tc")), null === n)) return null;
                    if (33776 === t) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (33777 === t) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (33778 === t) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (33779 === t) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                }
                if (35840 === t || 35841 === t || 35842 === t || 35843 === t) {
                    if (((n = e.get("WEBGL_compressed_texture_pvrtc")), null === n)) return null;
                    if (35840 === t) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (35841 === t) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (35842 === t) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (35843 === t) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
                }
                if (36196 === t) return (n = e.get("WEBGL_compressed_texture_etc1")), null !== n ? n.COMPRESSED_RGB_ETC1_WEBGL : null;
                if ((37492 === t || 37496 === t) && ((n = e.get("WEBGL_compressed_texture_etc")), null !== n)) {
                    if (37492 === t) return n.COMPRESSED_RGB8_ETC2;
                    if (37496 === t) return n.COMPRESSED_RGBA8_ETC2_EAC;
                }
                return 37808 === t ||
                    37809 === t ||
                    37810 === t ||
                    37811 === t ||
                    37812 === t ||
                    37813 === t ||
                    37814 === t ||
                    37815 === t ||
                    37816 === t ||
                    37817 === t ||
                    37818 === t ||
                    37819 === t ||
                    37820 === t ||
                    37821 === t ||
                    37840 === t ||
                    37841 === t ||
                    37842 === t ||
                    37843 === t ||
                    37844 === t ||
                    37845 === t ||
                    37846 === t ||
                    37847 === t ||
                    37848 === t ||
                    37849 === t ||
                    37850 === t ||
                    37851 === t ||
                    37852 === t ||
                    37853 === t
                    ? ((n = e.get("WEBGL_compressed_texture_astc")), null !== n ? t : null)
                    : 36492 === t
                    ? ((n = e.get("EXT_texture_compression_bptc")), null !== n ? t : null)
                    : t === _
                    ? i
                        ? 34042
                        : ((n = e.get("WEBGL_depth_texture")), null !== n ? n.UNSIGNED_INT_24_8_WEBGL : null)
                    : void 0;
            },
        };
    }
    class Or extends xn {
        constructor(t = []) {
            super(), (this.cameras = t);
        }
    }
    Or.prototype.isArrayCamera = !0;
    class Br extends oe {
        constructor() {
            super(), (this.type = "Group");
        }
    }
    Br.prototype.isGroup = !0;
    const Fr = { type: "move" };
    class Hr {
        constructor() {
            (this._targetRay = null), (this._grip = null), (this._hand = null);
        }
        getHandSpace() {
            return null === this._hand && ((this._hand = new Br()), (this._hand.matrixAutoUpdate = !1), (this._hand.visible = !1), (this._hand.joints = {}), (this._hand.inputState = { pinching: !1 })), this._hand;
        }
        getTargetRaySpace() {
            return (
                null === this._targetRay &&
                    ((this._targetRay = new Br()),
                    (this._targetRay.matrixAutoUpdate = !1),
                    (this._targetRay.visible = !1),
                    (this._targetRay.hasLinearVelocity = !1),
                    (this._targetRay.linearVelocity = new st()),
                    (this._targetRay.hasAngularVelocity = !1),
                    (this._targetRay.angularVelocity = new st())),
                this._targetRay
            );
        }
        getGripSpace() {
            return (
                null === this._grip &&
                    ((this._grip = new Br()),
                    (this._grip.matrixAutoUpdate = !1),
                    (this._grip.visible = !1),
                    (this._grip.hasLinearVelocity = !1),
                    (this._grip.linearVelocity = new st()),
                    (this._grip.hasAngularVelocity = !1),
                    (this._grip.angularVelocity = new st())),
                this._grip
            );
        }
        dispatchEvent(t) {
            return null !== this._targetRay && this._targetRay.dispatchEvent(t), null !== this._grip && this._grip.dispatchEvent(t), null !== this._hand && this._hand.dispatchEvent(t), this;
        }
        disconnect(t) {
            return this.dispatchEvent({ type: "disconnected", data: t }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this;
        }
        update(t, e, n) {
            let i = null,
                r = null,
                s = null;
            const a = this._targetRay,
                o = this._grip,
                l = this._hand;
            if (t && "visible-blurred" !== e.session.visibilityState)
                if (
                    (null !== a &&
                        ((i = e.getPose(t.targetRaySpace, n)),
                        null !== i &&
                            (a.matrix.fromArray(i.transform.matrix),
                            a.matrix.decompose(a.position, a.rotation, a.scale),
                            i.linearVelocity ? ((a.hasLinearVelocity = !0), a.linearVelocity.copy(i.linearVelocity)) : (a.hasLinearVelocity = !1),
                            i.angularVelocity ? ((a.hasAngularVelocity = !0), a.angularVelocity.copy(i.angularVelocity)) : (a.hasAngularVelocity = !1),
                            this.dispatchEvent(Fr))),
                    l && t.hand)
                ) {
                    s = !0;
                    for (const i of t.hand.values()) {
                        const t = e.getJointPose(i, n);
                        if (void 0 === l.joints[i.jointName]) {
                            const t = new Br();
                            (t.matrixAutoUpdate = !1), (t.visible = !1), (l.joints[i.jointName] = t), l.add(t);
                        }
                        const r = l.joints[i.jointName];
                        null !== t && (r.matrix.fromArray(t.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), (r.jointRadius = t.radius)), (r.visible = null !== t);
                    }
                    const i = l.joints["index-finger-tip"],
                        r = l.joints["thumb-tip"],
                        a = i.position.distanceTo(r.position),
                        o = 0.02,
                        c = 0.005;
                    l.inputState.pinching && a > o + c
                        ? ((l.inputState.pinching = !1), this.dispatchEvent({ type: "pinchend", handedness: t.handedness, target: this }))
                        : !l.inputState.pinching && a <= o - c && ((l.inputState.pinching = !0), this.dispatchEvent({ type: "pinchstart", handedness: t.handedness, target: this }));
                } else
                    null !== o &&
                        t.gripSpace &&
                        ((r = e.getPose(t.gripSpace, n)),
                        null !== r &&
                            (o.matrix.fromArray(r.transform.matrix),
                            o.matrix.decompose(o.position, o.rotation, o.scale),
                            r.linearVelocity ? ((o.hasLinearVelocity = !0), o.linearVelocity.copy(r.linearVelocity)) : (o.hasLinearVelocity = !1),
                            r.angularVelocity ? ((o.hasAngularVelocity = !0), o.angularVelocity.copy(r.angularVelocity)) : (o.hasAngularVelocity = !1)));
            return null !== a && (a.visible = null !== i), null !== o && (o.visible = null !== r), null !== l && (l.visible = null !== s), this;
        }
    }
    class Ur extends H {
        constructor(t, e) {
            super();
            const n = this,
                i = t.state;
            let r = null,
                s = 1,
                a = null,
                o = "local-floor",
                l = null;
            const c = [],
                h = new Map(),
                u = new xn();
            u.layers.enable(1), (u.viewport = new nt());
            const d = new xn();
            d.layers.enable(2), (d.viewport = new nt());
            const p = [u, d],
                f = new Or();
            f.layers.enable(1), f.layers.enable(2);
            let m = null,
                g = null;
            function v(t) {
                const e = h.get(t.inputSource);
                e && e.dispatchEvent({ type: t.type, data: t.inputSource });
            }
            function y() {
                h.forEach(function (t, e) {
                    t.disconnect(e);
                }),
                    h.clear(),
                    (m = null),
                    (g = null),
                    i.bindXRFramebuffer(null),
                    t.setRenderTarget(t.getRenderTarget()),
                    S.stop(),
                    (n.isPresenting = !1),
                    n.dispatchEvent({ type: "sessionend" });
            }
            function _(t) {
                const e = r.inputSources;
                for (let t = 0; t < c.length; t++) h.set(e[t], c[t]);
                for (let e = 0; e < t.removed.length; e++) {
                    const n = t.removed[e],
                        i = h.get(n);
                    i && (i.dispatchEvent({ type: "disconnected", data: n }), h.delete(n));
                }
                for (let e = 0; e < t.added.length; e++) {
                    const n = t.added[e],
                        i = h.get(n);
                    i && i.dispatchEvent({ type: "connected", data: n });
                }
            }
            (this.cameraAutoUpdate = !0),
                (this.enabled = !1),
                (this.isPresenting = !1),
                (this.getController = function (t) {
                    let e = c[t];
                    return void 0 === e && ((e = new Hr()), (c[t] = e)), e.getTargetRaySpace();
                }),
                (this.getControllerGrip = function (t) {
                    let e = c[t];
                    return void 0 === e && ((e = new Hr()), (c[t] = e)), e.getGripSpace();
                }),
                (this.getHand = function (t) {
                    let e = c[t];
                    return void 0 === e && ((e = new Hr()), (c[t] = e)), e.getHandSpace();
                }),
                (this.setFramebufferScaleFactor = function (t) {
                    (s = t), !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
                }),
                (this.setReferenceSpaceType = function (t) {
                    (o = t), !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
                }),
                (this.getReferenceSpace = function () {
                    return a;
                }),
                (this.getSession = function () {
                    return r;
                }),
                (this.setSession = async function (t) {
                    if (((r = t), null !== r)) {
                        r.addEventListener("select", v),
                            r.addEventListener("selectstart", v),
                            r.addEventListener("selectend", v),
                            r.addEventListener("squeeze", v),
                            r.addEventListener("squeezestart", v),
                            r.addEventListener("squeezeend", v),
                            r.addEventListener("end", y),
                            r.addEventListener("inputsourceschange", _);
                        const t = e.getContextAttributes();
                        !0 !== t.xrCompatible && (await e.makeXRCompatible());
                        const i = { antialias: t.antialias, alpha: t.alpha, depth: t.depth, stencil: t.stencil, framebufferScaleFactor: s },
                            l = new XRWebGLLayer(r, e, i);
                        r.updateRenderState({ baseLayer: l }), (a = await r.requestReferenceSpace(o)), S.setContext(r), S.start(), (n.isPresenting = !0), n.dispatchEvent({ type: "sessionstart" });
                    }
                });
            const x = new st(),
                w = new st();
            function b(t, e) {
                null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.copy(t.matrixWorld).invert();
            }
            (this.updateCamera = function (t) {
                if (null === r) return;
                (f.near = d.near = u.near = t.near), (f.far = d.far = u.far = t.far), (m === f.near && g === f.far) || (r.updateRenderState({ depthNear: f.near, depthFar: f.far }), (m = f.near), (g = f.far));
                const e = t.parent,
                    n = f.cameras;
                b(f, e);
                for (let t = 0; t < n.length; t++) b(n[t], e);
                t.matrixWorld.copy(f.matrixWorld), t.matrix.copy(f.matrix), t.matrix.decompose(t.position, t.quaternion, t.scale);
                const i = t.children;
                for (let t = 0, e = i.length; t < e; t++) i[t].updateMatrixWorld(!0);
                2 === n.length
                    ? (function (t, e, n) {
                          x.setFromMatrixPosition(e.matrixWorld), w.setFromMatrixPosition(n.matrixWorld);
                          const i = x.distanceTo(w),
                              r = e.projectionMatrix.elements,
                              s = n.projectionMatrix.elements,
                              a = r[14] / (r[10] - 1),
                              o = r[14] / (r[10] + 1),
                              l = (r[9] + 1) / r[5],
                              c = (r[9] - 1) / r[5],
                              h = (r[8] - 1) / r[0],
                              u = (s[8] + 1) / s[0],
                              d = a * h,
                              p = a * u,
                              f = i / (-h + u),
                              m = f * -h;
                          e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(m), t.translateZ(f), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.copy(t.matrixWorld).invert();
                          const g = a + f,
                              v = o + f,
                              y = d - m,
                              _ = p + (i - m),
                              b = ((l * o) / v) * g,
                              M = ((c * o) / v) * g;
                          t.projectionMatrix.makePerspective(y, _, b, M, g, v);
                      })(f, u, d)
                    : f.projectionMatrix.copy(u.projectionMatrix);
            }),
                (this.getCamera = function () {
                    return f;
                });
            let M = null;
            const S = new Ln();
            S.setAnimationLoop(function (t, e) {
                if (((l = e.getViewerPose(a)), null !== l)) {
                    const t = l.views,
                        e = r.renderState.baseLayer;
                    i.bindXRFramebuffer(e.framebuffer);
                    let n = !1;
                    t.length !== f.cameras.length && ((f.cameras.length = 0), (n = !0));
                    for (let i = 0; i < t.length; i++) {
                        const r = t[i],
                            s = e.getViewport(r),
                            a = p[i];
                        a.matrix.fromArray(r.transform.matrix), a.projectionMatrix.fromArray(r.projectionMatrix), a.viewport.set(s.x, s.y, s.width, s.height), 0 === i && f.matrix.copy(a.matrix), !0 === n && f.cameras.push(a);
                    }
                }
                const n = r.inputSources;
                for (let t = 0; t < c.length; t++) {
                    const i = c[t],
                        r = n[t];
                    i.update(r, e, a);
                }
                M && M(t, e);
            }),
                (this.setAnimationLoop = function (t) {
                    M = t;
                }),
                (this.dispose = function () {});
        }
    }
    function kr(t) {
        function e(e, n) {
            (e.opacity.value = n.opacity),
                n.color && e.diffuse.value.copy(n.color),
                n.emissive && e.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),
                n.map && (e.map.value = n.map),
                n.alphaMap && (e.alphaMap.value = n.alphaMap),
                n.specularMap && (e.specularMap.value = n.specularMap);
            const i = t.get(n).envMap;
            if (i) {
                (e.envMap.value = i), (e.flipEnvMap.value = i.isCubeTexture && i._needsFlipEnvMap ? -1 : 1), (e.reflectivity.value = n.reflectivity), (e.refractionRatio.value = n.refractionRatio);
                const r = t.get(i).__maxMipLevel;
                void 0 !== r && (e.maxMipLevel.value = r);
            }
            let r, s;
            n.lightMap && ((e.lightMap.value = n.lightMap), (e.lightMapIntensity.value = n.lightMapIntensity)),
                n.aoMap && ((e.aoMap.value = n.aoMap), (e.aoMapIntensity.value = n.aoMapIntensity)),
                n.map
                    ? (r = n.map)
                    : n.specularMap
                    ? (r = n.specularMap)
                    : n.displacementMap
                    ? (r = n.displacementMap)
                    : n.normalMap
                    ? (r = n.normalMap)
                    : n.bumpMap
                    ? (r = n.bumpMap)
                    : n.roughnessMap
                    ? (r = n.roughnessMap)
                    : n.metalnessMap
                    ? (r = n.metalnessMap)
                    : n.alphaMap
                    ? (r = n.alphaMap)
                    : n.emissiveMap
                    ? (r = n.emissiveMap)
                    : n.clearcoatMap
                    ? (r = n.clearcoatMap)
                    : n.clearcoatNormalMap
                    ? (r = n.clearcoatNormalMap)
                    : n.clearcoatRoughnessMap && (r = n.clearcoatRoughnessMap),
                void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture), !0 === r.matrixAutoUpdate && r.updateMatrix(), e.uvTransform.value.copy(r.matrix)),
                n.aoMap ? (s = n.aoMap) : n.lightMap && (s = n.lightMap),
                void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture), !0 === s.matrixAutoUpdate && s.updateMatrix(), e.uv2Transform.value.copy(s.matrix));
        }
        function n(e, n) {
            (e.roughness.value = n.roughness),
                (e.metalness.value = n.metalness),
                n.roughnessMap && (e.roughnessMap.value = n.roughnessMap),
                n.metalnessMap && (e.metalnessMap.value = n.metalnessMap),
                n.emissiveMap && (e.emissiveMap.value = n.emissiveMap),
                n.bumpMap && ((e.bumpMap.value = n.bumpMap), (e.bumpScale.value = n.bumpScale), 1 === n.side && (e.bumpScale.value *= -1)),
                n.normalMap && ((e.normalMap.value = n.normalMap), e.normalScale.value.copy(n.normalScale), 1 === n.side && e.normalScale.value.negate()),
                n.displacementMap && ((e.displacementMap.value = n.displacementMap), (e.displacementScale.value = n.displacementScale), (e.displacementBias.value = n.displacementBias));
            t.get(n).envMap && (e.envMapIntensity.value = n.envMapIntensity);
        }
        return {
            refreshFogUniforms: function (t, e) {
                t.fogColor.value.copy(e.color), e.isFog ? ((t.fogNear.value = e.near), (t.fogFar.value = e.far)) : e.isFogExp2 && (t.fogDensity.value = e.density);
            },
            refreshMaterialUniforms: function (t, i, r, s, a) {
                i.isMeshBasicMaterial
                    ? e(t, i)
                    : i.isMeshLambertMaterial
                    ? (e(t, i),
                      (function (t, e) {
                          e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
                      })(t, i))
                    : i.isMeshToonMaterial
                    ? (e(t, i),
                      (function (t, e) {
                          e.gradientMap && (t.gradientMap.value = e.gradientMap);
                          e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
                          e.bumpMap && ((t.bumpMap.value = e.bumpMap), (t.bumpScale.value = e.bumpScale), 1 === e.side && (t.bumpScale.value *= -1));
                          e.normalMap && ((t.normalMap.value = e.normalMap), t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
                          e.displacementMap && ((t.displacementMap.value = e.displacementMap), (t.displacementScale.value = e.displacementScale), (t.displacementBias.value = e.displacementBias));
                      })(t, i))
                    : i.isMeshPhongMaterial
                    ? (e(t, i),
                      (function (t, e) {
                          t.specular.value.copy(e.specular), (t.shininess.value = Math.max(e.shininess, 1e-4)), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
                          e.bumpMap && ((t.bumpMap.value = e.bumpMap), (t.bumpScale.value = e.bumpScale), 1 === e.side && (t.bumpScale.value *= -1));
                          e.normalMap && ((t.normalMap.value = e.normalMap), t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
                          e.displacementMap && ((t.displacementMap.value = e.displacementMap), (t.displacementScale.value = e.displacementScale), (t.displacementBias.value = e.displacementBias));
                      })(t, i))
                    : i.isMeshStandardMaterial
                    ? (e(t, i),
                      i.isMeshPhysicalMaterial
                          ? (function (t, e, i) {
                                n(t, e), (t.reflectivity.value = e.reflectivity), (t.clearcoat.value = e.clearcoat), (t.clearcoatRoughness.value = e.clearcoatRoughness), e.sheen && t.sheen.value.copy(e.sheen);
                                e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap);
                                e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap);
                                e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), (t.clearcoatNormalMap.value = e.clearcoatNormalMap), 1 === e.side && t.clearcoatNormalScale.value.negate());
                                (t.transmission.value = e.transmission), e.transmissionMap && (t.transmissionMap.value = e.transmissionMap);
                                e.transmission > 0 && ((t.transmissionSamplerMap.value = i.texture), t.transmissionSamplerSize.value.set(i.width, i.height));
                                (t.thickness.value = e.thickness), e.thicknessMap && (t.thicknessMap.value = e.thicknessMap);
                                (t.attenuationDistance.value = e.attenuationDistance), t.attenuationColor.value.copy(e.attenuationColor);
                            })(t, i, a)
                          : n(t, i))
                    : i.isMeshMatcapMaterial
                    ? (e(t, i),
                      (function (t, e) {
                          e.matcap && (t.matcap.value = e.matcap);
                          e.bumpMap && ((t.bumpMap.value = e.bumpMap), (t.bumpScale.value = e.bumpScale), 1 === e.side && (t.bumpScale.value *= -1));
                          e.normalMap && ((t.normalMap.value = e.normalMap), t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
                          e.displacementMap && ((t.displacementMap.value = e.displacementMap), (t.displacementScale.value = e.displacementScale), (t.displacementBias.value = e.displacementBias));
                      })(t, i))
                    : i.isMeshDepthMaterial
                    ? (e(t, i),
                      (function (t, e) {
                          e.displacementMap && ((t.displacementMap.value = e.displacementMap), (t.displacementScale.value = e.displacementScale), (t.displacementBias.value = e.displacementBias));
                      })(t, i))
                    : i.isMeshDistanceMaterial
                    ? (e(t, i),
                      (function (t, e) {
                          e.displacementMap && ((t.displacementMap.value = e.displacementMap), (t.displacementScale.value = e.displacementScale), (t.displacementBias.value = e.displacementBias));
                          t.referencePosition.value.copy(e.referencePosition), (t.nearDistance.value = e.nearDistance), (t.farDistance.value = e.farDistance);
                      })(t, i))
                    : i.isMeshNormalMaterial
                    ? (e(t, i),
                      (function (t, e) {
                          e.bumpMap && ((t.bumpMap.value = e.bumpMap), (t.bumpScale.value = e.bumpScale), 1 === e.side && (t.bumpScale.value *= -1));
                          e.normalMap && ((t.normalMap.value = e.normalMap), t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
                          e.displacementMap && ((t.displacementMap.value = e.displacementMap), (t.displacementScale.value = e.displacementScale), (t.displacementBias.value = e.displacementBias));
                      })(t, i))
                    : i.isLineBasicMaterial
                    ? ((function (t, e) {
                          t.diffuse.value.copy(e.color), (t.opacity.value = e.opacity);
                      })(t, i),
                      i.isLineDashedMaterial &&
                          (function (t, e) {
                              (t.dashSize.value = e.dashSize), (t.totalSize.value = e.dashSize + e.gapSize), (t.scale.value = e.scale);
                          })(t, i))
                    : i.isPointsMaterial
                    ? (function (t, e, n, i) {
                          t.diffuse.value.copy(e.color), (t.opacity.value = e.opacity), (t.size.value = e.size * n), (t.scale.value = 0.5 * i), e.map && (t.map.value = e.map);
                          e.alphaMap && (t.alphaMap.value = e.alphaMap);
                          let r;
                          e.map ? (r = e.map) : e.alphaMap && (r = e.alphaMap);
                          void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), t.uvTransform.value.copy(r.matrix));
                      })(t, i, r, s)
                    : i.isSpriteMaterial
                    ? (function (t, e) {
                          t.diffuse.value.copy(e.color), (t.opacity.value = e.opacity), (t.rotation.value = e.rotation), e.map && (t.map.value = e.map);
                          e.alphaMap && (t.alphaMap.value = e.alphaMap);
                          let n;
                          e.map ? (n = e.map) : e.alphaMap && (n = e.alphaMap);
                          void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix));
                      })(t, i)
                    : i.isShadowMaterial
                    ? (t.color.value.copy(i.color), (t.opacity.value = i.opacity))
                    : i.isShaderMaterial && (i.uniformsNeedUpdate = !1);
            },
        };
    }
    function Gr(t) {
        const e =
                void 0 !== (t = t || {}).canvas
                    ? t.canvas
                    : (function () {
                          const t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                          return (t.style.display = "block"), t;
                      })(),
            n = void 0 !== t.context ? t.context : null,
            i = void 0 !== t.alpha && t.alpha,
            r = void 0 === t.depth || t.depth,
            s = void 0 === t.stencil || t.stencil,
            a = void 0 !== t.antialias && t.antialias,
            l = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
            h = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
            u = void 0 !== t.powerPreference ? t.powerPreference : "default",
            d = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat;
        let m = null,
            g = null;
        const _ = [],
            x = [];
        (this.domElement = e),
            (this.debug = { checkShaderErrors: !0 }),
            (this.autoClear = !0),
            (this.autoClearColor = !0),
            (this.autoClearDepth = !0),
            (this.autoClearStencil = !0),
            (this.sortObjects = !0),
            (this.clippingPlanes = []),
            (this.localClippingEnabled = !1),
            (this.gammaFactor = 2),
            (this.outputEncoding = P),
            (this.physicallyCorrectLights = !1),
            (this.toneMapping = 0),
            (this.toneMappingExposure = 1);
        const b = this;
        let M = !1,
            S = 0,
            T = 0,
            E = null,
            A = -1,
            L = null;
        const R = new nt(),
            C = new nt();
        let D = null,
            I = e.width,
            N = e.height,
            z = 1,
            O = null,
            B = null;
        const F = new nt(0, 0, I, N),
            H = new nt(0, 0, I, N);
        let U = !1;
        const k = [],
            G = new An();
        let V = !1,
            W = !1,
            j = null;
        const q = new Ot(),
            X = new st(),
            Y = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
        function J() {
            return null === E ? z : 1;
        }
        let Q,
            K,
            $,
            tt,
            et,
            rt,
            at,
            ot,
            lt,
            ct,
            ht,
            ut,
            dt,
            pt,
            ft,
            mt,
            gt,
            vt,
            yt,
            _t,
            xt,
            wt,
            bt = n;
        function Mt(t, n) {
            for (let i = 0; i < t.length; i++) {
                const r = t[i],
                    s = e.getContext(r, n);
                if (null !== s) return s;
            }
            return null;
        }
        try {
            const t = { alpha: i, depth: r, stencil: s, antialias: a, premultipliedAlpha: l, preserveDrawingBuffer: h, powerPreference: u, failIfMajorPerformanceCaveat: d };
            if ((e.addEventListener("webglcontextlost", Et, !1), e.addEventListener("webglcontextrestored", At, !1), null === bt)) {
                const e = ["webgl2", "webgl", "experimental-webgl"];
                if ((!0 === b.isWebGL1Renderer && e.shift(), (bt = Mt(e, t)), null === bt)) throw Mt(e) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
            }
            void 0 === bt.getShaderPrecisionFormat &&
                (bt.getShaderPrecisionFormat = function () {
                    return { rangeMin: 1, rangeMax: 1, precision: 1 };
                });
        } catch (t) {
            throw (console.error("THREE.WebGLRenderer: " + t.message), t);
        }
        function St() {
            (Q = new Un(bt)),
                (K = new Bn(bt, Q, t)),
                Q.init(K),
                (xt = new zr(bt, Q, K)),
                ($ = new Ir(bt, Q, K)),
                (k[0] = 1029),
                (tt = new Vn(bt)),
                (et = new _r()),
                (rt = new Nr(bt, Q, $, et, K, xt, tt)),
                (at = new Hn(b)),
                (ot = new Rn(bt, K)),
                (wt = new zn(bt, Q, ot, K)),
                (lt = new kn(bt, ot, tt, wt)),
                (ct = new Xn(bt, lt, ot, tt)),
                (vt = new qn(bt)),
                (ft = new Fn(et)),
                (ht = new yr(b, at, Q, K, wt, ft)),
                (ut = new kr(et)),
                (dt = new Mr(et)),
                (pt = new Rr(Q, K)),
                (gt = new Nn(b, at, $, ct, l)),
                (mt = new Dr(b, ct, K)),
                (yt = new On(bt, Q, tt, K)),
                (_t = new Gn(bt, Q, tt, K)),
                (tt.programs = ht.programs),
                (b.capabilities = K),
                (b.extensions = Q),
                (b.properties = et),
                (b.renderLists = dt),
                (b.shadowMap = mt),
                (b.state = $),
                (b.info = tt);
        }
        St();
        const Tt = new Ur(b, bt);
        function Et(t) {
            t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), (M = !0);
        }
        function At() {
            console.log("THREE.WebGLRenderer: Context Restored."), (M = !1);
            const t = tt.autoReset,
                e = mt.enabled,
                n = mt.autoUpdate,
                i = mt.needsUpdate,
                r = mt.type;
            St(), (tt.autoReset = t), (mt.enabled = e), (mt.autoUpdate = n), (mt.needsUpdate = i), (mt.type = r);
        }
        function Lt(t) {
            const e = t.target;
            e.removeEventListener("dispose", Lt),
                (function (t) {
                    (function (t) {
                        const e = et.get(t).programs;
                        void 0 !== e &&
                            e.forEach(function (t) {
                                ht.releaseProgram(t);
                            });
                    })(t),
                        et.remove(t);
                })(e);
        }
        (this.xr = Tt),
            (this.getContext = function () {
                return bt;
            }),
            (this.getContextAttributes = function () {
                return bt.getContextAttributes();
            }),
            (this.forceContextLoss = function () {
                const t = Q.get("WEBGL_lose_context");
                t && t.loseContext();
            }),
            (this.forceContextRestore = function () {
                const t = Q.get("WEBGL_lose_context");
                t && t.restoreContext();
            }),
            (this.getPixelRatio = function () {
                return z;
            }),
            (this.setPixelRatio = function (t) {
                void 0 !== t && ((z = t), this.setSize(I, N, !1));
            }),
            (this.getSize = function (t) {
                return void 0 === t && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), (t = new Z())), t.set(I, N);
            }),
            (this.setSize = function (t, n, i) {
                Tt.isPresenting
                    ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.")
                    : ((I = t), (N = n), (e.width = Math.floor(t * z)), (e.height = Math.floor(n * z)), !1 !== i && ((e.style.width = t + "px"), (e.style.height = n + "px")), this.setViewport(0, 0, t, n));
            }),
            (this.getDrawingBufferSize = function (t) {
                return void 0 === t && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), (t = new Z())), t.set(I * z, N * z).floor();
            }),
            (this.setDrawingBufferSize = function (t, n, i) {
                (I = t), (N = n), (z = i), (e.width = Math.floor(t * i)), (e.height = Math.floor(n * i)), this.setViewport(0, 0, t, n);
            }),
            (this.getCurrentViewport = function (t) {
                return void 0 === t && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), (t = new nt())), t.copy(R);
            }),
            (this.getViewport = function (t) {
                return t.copy(F);
            }),
            (this.setViewport = function (t, e, n, i) {
                t.isVector4 ? F.set(t.x, t.y, t.z, t.w) : F.set(t, e, n, i), $.viewport(R.copy(F).multiplyScalar(z).floor());
            }),
            (this.getScissor = function (t) {
                return t.copy(H);
            }),
            (this.setScissor = function (t, e, n, i) {
                t.isVector4 ? H.set(t.x, t.y, t.z, t.w) : H.set(t, e, n, i), $.scissor(C.copy(H).multiplyScalar(z).floor());
            }),
            (this.getScissorTest = function () {
                return U;
            }),
            (this.setScissorTest = function (t) {
                $.setScissorTest((U = t));
            }),
            (this.setOpaqueSort = function (t) {
                O = t;
            }),
            (this.setTransparentSort = function (t) {
                B = t;
            }),
            (this.getClearColor = function (t) {
                return void 0 === t && (console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"), (t = new Pe())), t.copy(gt.getClearColor());
            }),
            (this.setClearColor = function () {
                gt.setClearColor.apply(gt, arguments);
            }),
            (this.getClearAlpha = function () {
                return gt.getClearAlpha();
            }),
            (this.setClearAlpha = function () {
                gt.setClearAlpha.apply(gt, arguments);
            }),
            (this.clear = function (t, e, n) {
                let i = 0;
                (void 0 === t || t) && (i |= 16384), (void 0 === e || e) && (i |= 256), (void 0 === n || n) && (i |= 1024), bt.clear(i);
            }),
            (this.clearColor = function () {
                this.clear(!0, !1, !1);
            }),
            (this.clearDepth = function () {
                this.clear(!1, !0, !1);
            }),
            (this.clearStencil = function () {
                this.clear(!1, !1, !0);
            }),
            (this.dispose = function () {
                e.removeEventListener("webglcontextlost", Et, !1),
                    e.removeEventListener("webglcontextrestored", At, !1),
                    dt.dispose(),
                    pt.dispose(),
                    et.dispose(),
                    at.dispose(),
                    ct.dispose(),
                    wt.dispose(),
                    Tt.dispose(),
                    Tt.removeEventListener("sessionstart", Ct),
                    Tt.removeEventListener("sessionend", Pt),
                    j && (j.dispose(), (j = null)),
                    Dt.stop();
            }),
            (this.renderBufferImmediate = function (t, e) {
                wt.initAttributes();
                const n = et.get(t);
                t.hasPositions && !n.position && (n.position = bt.createBuffer()),
                    t.hasNormals && !n.normal && (n.normal = bt.createBuffer()),
                    t.hasUvs && !n.uv && (n.uv = bt.createBuffer()),
                    t.hasColors && !n.color && (n.color = bt.createBuffer());
                const i = e.getAttributes();
                t.hasPositions && (bt.bindBuffer(34962, n.position), bt.bufferData(34962, t.positionArray, 35048), wt.enableAttribute(i.position), bt.vertexAttribPointer(i.position, 3, 5126, !1, 0, 0)),
                    t.hasNormals && (bt.bindBuffer(34962, n.normal), bt.bufferData(34962, t.normalArray, 35048), wt.enableAttribute(i.normal), bt.vertexAttribPointer(i.normal, 3, 5126, !1, 0, 0)),
                    t.hasUvs && (bt.bindBuffer(34962, n.uv), bt.bufferData(34962, t.uvArray, 35048), wt.enableAttribute(i.uv), bt.vertexAttribPointer(i.uv, 2, 5126, !1, 0, 0)),
                    t.hasColors && (bt.bindBuffer(34962, n.color), bt.bufferData(34962, t.colorArray, 35048), wt.enableAttribute(i.color), bt.vertexAttribPointer(i.color, 3, 5126, !1, 0, 0)),
                    wt.disableUnusedAttributes(),
                    bt.drawArrays(4, 0, t.count),
                    (t.count = 0);
            }),
            (this.renderBufferDirect = function (t, e, n, i, r, s) {
                null === e && (e = Y);
                const a = r.isMesh && r.matrixWorld.determinant() < 0,
                    o = Ht(t, e, i, r);
                $.setMaterial(i, a);
                let l = n.index;
                const c = n.attributes.position;
                if (null === l) {
                    if (void 0 === c || 0 === c.count) return;
                } else if (0 === l.count) return;
                let h,
                    u = 1;
                !0 === i.wireframe && ((l = lt.getWireframeAttribute(n)), (u = 2)), (i.morphTargets || i.morphNormals) && vt.update(r, n, i, o), wt.setup(r, i, o, n, l);
                let d = yt;
                null !== l && ((h = ot.get(l)), (d = _t), d.setIndex(h));
                const p = null !== l ? l.count : c.count,
                    f = n.drawRange.start * u,
                    m = n.drawRange.count * u,
                    g = null !== s ? s.start * u : 0,
                    v = null !== s ? s.count * u : 1 / 0,
                    y = Math.max(f, g),
                    _ = Math.min(p, f + m, g + v) - 1,
                    x = Math.max(0, _ - y + 1);
                if (0 !== x) {
                    if (r.isMesh) !0 === i.wireframe ? ($.setLineWidth(i.wireframeLinewidth * J()), d.setMode(1)) : d.setMode(4);
                    else if (r.isLine) {
                        let t = i.linewidth;
                        void 0 === t && (t = 1), $.setLineWidth(t * J()), r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3);
                    } else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
                    if (r.isInstancedMesh) d.renderInstances(y, x, r.count);
                    else if (n.isInstancedBufferGeometry) {
                        const t = Math.min(n.instanceCount, n._maxInstanceCount);
                        d.renderInstances(y, x, t);
                    } else d.render(y, x);
                }
            }),
            (this.compile = function (t, e) {
                (g = pt.get(t)),
                    g.init(),
                    t.traverseVisible(function (t) {
                        t.isLight && t.layers.test(e.layers) && (g.pushLight(t), t.castShadow && g.pushShadow(t));
                    }),
                    g.setupLights(),
                    t.traverse(function (e) {
                        const n = e.material;
                        if (n)
                            if (Array.isArray(n))
                                for (let i = 0; i < n.length; i++) {
                                    Bt(n[i], t, e);
                                }
                            else Bt(n, t, e);
                    });
            });
        let Rt = null;
        function Ct() {
            Dt.stop();
        }
        function Pt() {
            Dt.start();
        }
        const Dt = new Ln();
        function It(t, e, n, i) {
            if (!1 === t.visible) return;
            if (t.layers.test(e.layers))
                if (t.isGroup) n = t.renderOrder;
                else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
                else if (t.isLight) g.pushLight(t), t.castShadow && g.pushShadow(t);
                else if (t.isSprite) {
                    if (!t.frustumCulled || G.intersectsSprite(t)) {
                        i && X.setFromMatrixPosition(t.matrixWorld).applyMatrix4(q);
                        const e = ct.update(t),
                            r = t.material;
                        r.visible && m.push(t, e, r, n, X.z, null);
                    }
                } else if (t.isImmediateRenderObject) i && X.setFromMatrixPosition(t.matrixWorld).applyMatrix4(q), m.push(t, null, t.material, n, X.z, null);
                else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== tt.render.frame && (t.skeleton.update(), (t.skeleton.frame = tt.render.frame)), !t.frustumCulled || G.intersectsObject(t))) {
                    i && X.setFromMatrixPosition(t.matrixWorld).applyMatrix4(q);
                    const e = ct.update(t),
                        r = t.material;
                    if (Array.isArray(r)) {
                        const i = e.groups;
                        for (let s = 0, a = i.length; s < a; s++) {
                            const a = i[s],
                                o = r[a.materialIndex];
                            o && o.visible && m.push(t, e, o, n, X.z, a);
                        }
                    } else r.visible && m.push(t, e, r, n, X.z, null);
                }
            const r = t.children;
            for (let t = 0, s = r.length; t < s; t++) It(r[t], e, n, i);
        }
        function Nt(t, e, n) {
            const i = !0 === e.isScene ? e.overrideMaterial : null;
            for (let r = 0, s = t.length; r < s; r++) {
                const s = t[r],
                    a = s.object,
                    o = s.geometry,
                    l = null === i ? s.material : i,
                    c = s.group;
                if (n.isArrayCamera) {
                    const t = n.cameras;
                    for (let n = 0, i = t.length; n < i; n++) {
                        const i = t[n];
                        a.layers.test(i.layers) && ($.viewport(R.copy(i.viewport)), g.setupLightsView(i), zt(a, e, i, o, l, c));
                    }
                } else zt(a, e, n, o, l, c);
            }
        }
        function zt(t, e, n, i, r, s) {
            if ((t.onBeforeRender(b, e, n, i, r, s), t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject)) {
                const i = Ht(n, e, r, t);
                $.setMaterial(r),
                    wt.reset(),
                    (function (t, e) {
                        t.render(function (t) {
                            b.renderBufferImmediate(t, e);
                        });
                    })(t, i);
            } else b.renderBufferDirect(n, e, i, r, t, s);
            t.onAfterRender(b, e, n, i, r, s);
        }
        function Bt(t, e, n) {
            !0 !== e.isScene && (e = Y);
            const i = et.get(t),
                r = g.state.lights,
                s = g.state.shadowsArray,
                a = r.state.version,
                o = ht.getParameters(t, r.state, s, e, n),
                l = ht.getProgramCacheKey(o);
            let c = i.programs;
            (i.environment = t.isMeshStandardMaterial ? e.environment : null), (i.fog = e.fog), (i.envMap = at.get(t.envMap || i.environment)), void 0 === c && (t.addEventListener("dispose", Lt), (c = new Map()), (i.programs = c));
            let h = c.get(l);
            if (void 0 !== h) {
                if (i.currentProgram === h && i.lightsStateVersion === a) return Ft(t, o), h;
            } else (o.uniforms = ht.getUniforms(t)), t.onBuild(o, b), t.onBeforeCompile(o, b), (h = ht.acquireProgram(o, l)), c.set(l, h), (i.uniforms = o.uniforms);
            const u = i.uniforms;
            ((t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping) || (u.clippingPlanes = ft.uniform),
                Ft(t, o),
                (i.needsLights = (function (t) {
                    return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || (t.isShaderMaterial && !0 === t.lights);
                })(t)),
                (i.lightsStateVersion = a),
                i.needsLights &&
                    ((u.ambientLightColor.value = r.state.ambient),
                    (u.lightProbe.value = r.state.probe),
                    (u.directionalLights.value = r.state.directional),
                    (u.directionalLightShadows.value = r.state.directionalShadow),
                    (u.spotLights.value = r.state.spot),
                    (u.spotLightShadows.value = r.state.spotShadow),
                    (u.rectAreaLights.value = r.state.rectArea),
                    (u.ltc_1.value = r.state.rectAreaLTC1),
                    (u.ltc_2.value = r.state.rectAreaLTC2),
                    (u.pointLights.value = r.state.point),
                    (u.pointLightShadows.value = r.state.pointShadow),
                    (u.hemisphereLights.value = r.state.hemi),
                    (u.directionalShadowMap.value = r.state.directionalShadowMap),
                    (u.directionalShadowMatrix.value = r.state.directionalShadowMatrix),
                    (u.spotShadowMap.value = r.state.spotShadowMap),
                    (u.spotShadowMatrix.value = r.state.spotShadowMatrix),
                    (u.pointShadowMap.value = r.state.pointShadowMap),
                    (u.pointShadowMatrix.value = r.state.pointShadowMatrix));
            const d = h.getUniforms(),
                p = Qi.seqWithValue(d.seq, u);
            return (i.currentProgram = h), (i.uniformsList = p), h;
        }
        function Ft(t, e) {
            const n = et.get(t);
            (n.outputEncoding = e.outputEncoding), (n.instancing = e.instancing), (n.skinning = e.skinning), (n.numClippingPlanes = e.numClippingPlanes), (n.numIntersection = e.numClipIntersection), (n.vertexAlphas = e.vertexAlphas);
        }
        function Ht(t, e, n, i) {
            !0 !== e.isScene && (e = Y), rt.resetTextureUnits();
            const r = e.fog,
                s = n.isMeshStandardMaterial ? e.environment : null,
                a = null === E ? b.outputEncoding : E.texture.encoding,
                o = at.get(n.envMap || s),
                l = !0 === n.vertexColors && i.geometry && i.geometry.attributes.color && 4 === i.geometry.attributes.color.itemSize,
                c = et.get(n),
                h = g.state.lights;
            if (!0 === V && (!0 === W || t !== L)) {
                const e = t === L && n.id === A;
                ft.setState(n, t, e);
            }
            let u = !1;
            n.version === c.__version
                ? (c.needsLights && c.lightsStateVersion !== h.state.version) || c.outputEncoding !== a || (i.isInstancedMesh && !1 === c.instancing)
                    ? (u = !0)
                    : i.isInstancedMesh || !0 !== c.instancing
                    ? i.isSkinnedMesh && !1 === c.skinning
                        ? (u = !0)
                        : i.isSkinnedMesh || !0 !== c.skinning
                        ? c.envMap !== o || (n.fog && c.fog !== r)
                            ? (u = !0)
                            : void 0 === c.numClippingPlanes || (c.numClippingPlanes === ft.numPlanes && c.numIntersection === ft.numIntersection)
                            ? c.vertexAlphas !== l && (u = !0)
                            : (u = !0)
                        : (u = !0)
                    : (u = !0)
                : ((u = !0), (c.__version = n.version));
            let d = c.currentProgram;
            !0 === u && (d = Bt(n, e, i));
            let p = !1,
                f = !1,
                m = !1;
            const v = d.getUniforms(),
                y = c.uniforms;
            if (($.useProgram(d.program) && ((p = !0), (f = !0), (m = !0)), n.id !== A && ((A = n.id), (f = !0)), p || L !== t)) {
                if (
                    (v.setValue(bt, "projectionMatrix", t.projectionMatrix),
                    K.logarithmicDepthBuffer && v.setValue(bt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)),
                    L !== t && ((L = t), (f = !0), (m = !0)),
                    n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap)
                ) {
                    const e = v.map.cameraPosition;
                    void 0 !== e && e.setValue(bt, X.setFromMatrixPosition(t.matrixWorld));
                }
                (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && v.setValue(bt, "isOrthographic", !0 === t.isOrthographicCamera),
                    (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || i.isSkinnedMesh) &&
                        v.setValue(bt, "viewMatrix", t.matrixWorldInverse);
            }
            if (i.isSkinnedMesh) {
                v.setOptional(bt, i, "bindMatrix"), v.setOptional(bt, i, "bindMatrixInverse");
                const t = i.skeleton;
                t &&
                    (K.floatVertexTextures ? (null === t.boneTexture && t.computeBoneTexture(), v.setValue(bt, "boneTexture", t.boneTexture, rt), v.setValue(bt, "boneTextureSize", t.boneTextureSize)) : v.setOptional(bt, t, "boneMatrices"));
            }
            var _, x;
            return (
                (f || c.receiveShadow !== i.receiveShadow) && ((c.receiveShadow = i.receiveShadow), v.setValue(bt, "receiveShadow", i.receiveShadow)),
                f &&
                    (v.setValue(bt, "toneMappingExposure", b.toneMappingExposure),
                    c.needsLights &&
                        ((x = m),
                        ((_ = y).ambientLightColor.needsUpdate = x),
                        (_.lightProbe.needsUpdate = x),
                        (_.directionalLights.needsUpdate = x),
                        (_.directionalLightShadows.needsUpdate = x),
                        (_.pointLights.needsUpdate = x),
                        (_.pointLightShadows.needsUpdate = x),
                        (_.spotLights.needsUpdate = x),
                        (_.spotLightShadows.needsUpdate = x),
                        (_.rectAreaLights.needsUpdate = x),
                        (_.hemisphereLights.needsUpdate = x)),
                    r && n.fog && ut.refreshFogUniforms(y, r),
                    ut.refreshMaterialUniforms(y, n, z, N, j),
                    Qi.upload(bt, c.uniformsList, y, rt)),
                n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (Qi.upload(bt, c.uniformsList, y, rt), (n.uniformsNeedUpdate = !1)),
                n.isSpriteMaterial && v.setValue(bt, "center", i.center),
                v.setValue(bt, "modelViewMatrix", i.modelViewMatrix),
                v.setValue(bt, "normalMatrix", i.normalMatrix),
                v.setValue(bt, "modelMatrix", i.matrixWorld),
                d
            );
        }
        Dt.setAnimationLoop(function (t) {
            Rt && Rt(t);
        }),
            "undefined" != typeof window && Dt.setContext(window),
            (this.setAnimationLoop = function (t) {
                (Rt = t), Tt.setAnimationLoop(t), null === t ? Dt.stop() : Dt.start();
            }),
            Tt.addEventListener("sessionstart", Ct),
            Tt.addEventListener("sessionend", Pt),
            (this.render = function (t, e) {
                if (void 0 !== e && !0 !== e.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                if (!0 === M) return;
                !0 === t.autoUpdate && t.updateMatrixWorld(),
                    null === e.parent && e.updateMatrixWorld(),
                    !0 === Tt.enabled && !0 === Tt.isPresenting && (!0 === Tt.cameraAutoUpdate && Tt.updateCamera(e), (e = Tt.getCamera())),
                    !0 === t.isScene && t.onBeforeRender(b, t, e, E),
                    (g = pt.get(t, x.length)),
                    g.init(),
                    x.push(g),
                    q.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
                    G.setFromProjectionMatrix(q),
                    (W = this.localClippingEnabled),
                    (V = ft.init(this.clippingPlanes, W, e)),
                    (m = dt.get(t, _.length)),
                    m.init(),
                    _.push(m),
                    It(t, e, 0, b.sortObjects),
                    m.finish(),
                    !0 === b.sortObjects && m.sort(O, B),
                    !0 === V && ft.beginShadows();
                const n = g.state.shadowsArray;
                mt.render(n, t, e), g.setupLights(), g.setupLightsView(e), !0 === V && ft.endShadows(), !0 === this.info.autoReset && this.info.reset(), gt.render(m, t);
                const i = m.opaque,
                    r = m.transmissive,
                    s = m.transparent;
                i.length > 0 && Nt(i, t, e),
                    r.length > 0 &&
                        (function (t, e, n, i) {
                            null === j && (j = new it(1024, 1024, { generateMipmaps: !0, minFilter: p, magFilter: c, wrapS: o, wrapT: o }));
                            const r = b.getRenderTarget();
                            b.setRenderTarget(j), b.clear(), Nt(t, n, i), rt.updateRenderTargetMipmap(j), b.setRenderTarget(r), Nt(e, n, i);
                        })(i, r, t, e),
                    s.length > 0 && Nt(s, t, e),
                    null !== E && (rt.updateRenderTargetMipmap(E), rt.updateMultisampleRenderTarget(E)),
                    !0 === t.isScene && t.onAfterRender(b, t, e),
                    $.buffers.depth.setTest(!0),
                    $.buffers.depth.setMask(!0),
                    $.buffers.color.setMask(!0),
                    $.setPolygonOffset(!1),
                    wt.resetDefaultState(),
                    (A = -1),
                    (L = null),
                    x.pop(),
                    (g = x.length > 0 ? x[x.length - 1] : null),
                    _.pop(),
                    (m = _.length > 0 ? _[_.length - 1] : null);
            }),
            (this.getActiveCubeFace = function () {
                return S;
            }),
            (this.getActiveMipmapLevel = function () {
                return T;
            }),
            (this.getRenderTarget = function () {
                return E;
            }),
            (this.setRenderTarget = function (t, e = 0, n = 0) {
                (E = t), (S = e), (T = n), t && void 0 === et.get(t).__webglFramebuffer && rt.setupRenderTarget(t);
                let i = null,
                    r = !1,
                    s = !1;
                if (t) {
                    const n = t.texture;
                    (n.isDataTexture3D || n.isDataTexture2DArray) && (s = !0);
                    const a = et.get(t).__webglFramebuffer;
                    t.isWebGLCubeRenderTarget ? ((i = a[e]), (r = !0)) : (i = t.isWebGLMultisampleRenderTarget ? et.get(t).__webglMultisampledFramebuffer : a), R.copy(t.viewport), C.copy(t.scissor), (D = t.scissorTest);
                } else R.copy(F).multiplyScalar(z).floor(), C.copy(H).multiplyScalar(z).floor(), (D = U);
                if ($.bindFramebuffer(36160, i) && K.drawBuffers) {
                    let e = !1;
                    if (t)
                        if (t.isWebGLMultipleRenderTargets) {
                            const n = t.texture;
                            if (k.length !== n.length || 36064 !== k[0]) {
                                for (let t = 0, e = n.length; t < e; t++) k[t] = 36064 + t;
                                (k.length = n.length), (e = !0);
                            }
                        } else (1 === k.length && 36064 === k[0]) || ((k[0] = 36064), (k.length = 1), (e = !0));
                    else (1 === k.length && 1029 === k[0]) || ((k[0] = 1029), (k.length = 1), (e = !0));
                    e && (K.isWebGL2 ? bt.drawBuffers(k) : Q.get("WEBGL_draw_buffers").drawBuffersWEBGL(k));
                }
                if (($.viewport(R), $.scissor(C), $.setScissorTest(D), r)) {
                    const i = et.get(t.texture);
                    bt.framebufferTexture2D(36160, 36064, 34069 + e, i.__webglTexture, n);
                } else if (s) {
                    const i = et.get(t.texture),
                        r = e || 0;
                    bt.framebufferTextureLayer(36160, 36064, i.__webglTexture, n || 0, r);
                }
            }),
            (this.readRenderTargetPixels = function (t, e, n, i, r, s, a) {
                if (!t || !t.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                let o = et.get(t).__webglFramebuffer;
                if ((t.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]), o)) {
                    $.bindFramebuffer(36160, o);
                    try {
                        const a = t.texture,
                            o = a.format,
                            l = a.type;
                        if (o !== w && xt.convert(o) !== bt.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                        const c = l === y && (Q.has("EXT_color_buffer_half_float") || (K.isWebGL2 && Q.has("EXT_color_buffer_float")));
                        if (!(l === f || xt.convert(l) === bt.getParameter(35738) || (l === v && (K.isWebGL2 || Q.has("OES_texture_float") || Q.has("WEBGL_color_buffer_float"))) || c))
                            return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        36053 === bt.checkFramebufferStatus(36160)
                            ? e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && bt.readPixels(e, n, i, r, xt.convert(o), xt.convert(l), s)
                            : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
                    } finally {
                        const t = null !== E ? et.get(E).__webglFramebuffer : null;
                        $.bindFramebuffer(36160, t);
                    }
                }
            }),
            (this.copyFramebufferToTexture = function (t, e, n = 0) {
                const i = Math.pow(2, -n),
                    r = Math.floor(e.image.width * i),
                    s = Math.floor(e.image.height * i);
                let a = xt.convert(e.format);
                K.isWebGL2 && (6407 === a && (a = 32849), 6408 === a && (a = 32856)), rt.setTexture2D(e, 0), bt.copyTexImage2D(3553, n, a, t.x, t.y, r, s, 0), $.unbindTexture();
            }),
            (this.copyTextureToTexture = function (t, e, n, i = 0) {
                const r = e.image.width,
                    s = e.image.height,
                    a = xt.convert(n.format),
                    o = xt.convert(n.type);
                rt.setTexture2D(n, 0),
                    bt.pixelStorei(37440, n.flipY),
                    bt.pixelStorei(37441, n.premultiplyAlpha),
                    bt.pixelStorei(3317, n.unpackAlignment),
                    e.isDataTexture
                        ? bt.texSubImage2D(3553, i, t.x, t.y, r, s, a, o, e.image.data)
                        : e.isCompressedTexture
                        ? bt.compressedTexSubImage2D(3553, i, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, a, e.mipmaps[0].data)
                        : bt.texSubImage2D(3553, i, t.x, t.y, a, o, e.image),
                    0 === i && n.generateMipmaps && bt.generateMipmap(3553),
                    $.unbindTexture();
            }),
            (this.copyTextureToTexture3D = function (t, e, n, i, r = 0) {
                if (b.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
                const { width: s, height: a, data: o } = n.image,
                    l = xt.convert(i.format),
                    c = xt.convert(i.type);
                let h;
                if (i.isDataTexture3D) rt.setTexture3D(i, 0), (h = 32879);
                else {
                    if (!i.isDataTexture2DArray) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
                    rt.setTexture2DArray(i, 0), (h = 35866);
                }
                bt.pixelStorei(37440, i.flipY), bt.pixelStorei(37441, i.premultiplyAlpha), bt.pixelStorei(3317, i.unpackAlignment);
                const u = bt.getParameter(3314),
                    d = bt.getParameter(32878),
                    p = bt.getParameter(3316),
                    f = bt.getParameter(3315),
                    m = bt.getParameter(32877);
                bt.pixelStorei(3314, s),
                    bt.pixelStorei(32878, a),
                    bt.pixelStorei(3316, t.min.x),
                    bt.pixelStorei(3315, t.min.y),
                    bt.pixelStorei(32877, t.min.z),
                    bt.texSubImage3D(h, r, e.x, e.y, e.z, t.max.x - t.min.x + 1, t.max.y - t.min.y + 1, t.max.z - t.min.z + 1, l, c, o),
                    bt.pixelStorei(3314, u),
                    bt.pixelStorei(32878, d),
                    bt.pixelStorei(3316, p),
                    bt.pixelStorei(3315, f),
                    bt.pixelStorei(32877, m),
                    0 === r && i.generateMipmaps && bt.generateMipmap(h),
                    $.unbindTexture();
            }),
            (this.initTexture = function (t) {
                rt.setTexture2D(t, 0), $.unbindTexture();
            }),
            (this.resetState = function () {
                (S = 0), (T = 0), (E = null), $.reset(), wt.reset();
            }),
            "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
    (class extends Gr {}.prototype.isWebGL1Renderer = !0);
    class Vr {
        constructor(t, e = 25e-5) {
            (this.name = ""), (this.color = new Pe(t)), (this.density = e);
        }
        clone() {
            return new Vr(this.color, this.density);
        }
        toJSON() {
            return { type: "FogExp2", color: this.color.getHex(), density: this.density };
        }
    }
    Vr.prototype.isFogExp2 = !0;
    class Wr {
        constructor(t, e = 1, n = 1e3) {
            (this.name = ""), (this.color = new Pe(t)), (this.near = e), (this.far = n);
        }
        clone() {
            return new Wr(this.color, this.near, this.far);
        }
        toJSON() {
            return { type: "Fog", color: this.color.getHex(), near: this.near, far: this.far };
        }
    }
    Wr.prototype.isFog = !0;
    class jr extends oe {
        constructor() {
            super(),
                (this.type = "Scene"),
                (this.background = null),
                (this.environment = null),
                (this.fog = null),
                (this.overrideMaterial = null),
                (this.autoUpdate = !0),
                "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
        }
        copy(t, e) {
            return (
                super.copy(t, e),
                null !== t.background && (this.background = t.background.clone()),
                null !== t.environment && (this.environment = t.environment.clone()),
                null !== t.fog && (this.fog = t.fog.clone()),
                null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()),
                (this.autoUpdate = t.autoUpdate),
                (this.matrixAutoUpdate = t.matrixAutoUpdate),
                this
            );
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.environment && (e.object.environment = this.environment.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e;
        }
    }
    jr.prototype.isScene = !0;
    class qr {
        constructor(t, e) {
            (this.array = t), (this.stride = e), (this.count = void 0 !== t ? t.length / e : 0), (this.usage = O), (this.updateRange = { offset: 0, count: -1 }), (this.version = 0), (this.uuid = V());
        }
        onUploadCallback() {}
        set needsUpdate(t) {
            !0 === t && this.version++;
        }
        setUsage(t) {
            return (this.usage = t), this;
        }
        copy(t) {
            return (this.array = new t.array.constructor(t.array)), (this.count = t.count), (this.stride = t.stride), (this.usage = t.usage), this;
        }
        copyAt(t, e, n) {
            (t *= this.stride), (n *= e.stride);
            for (let i = 0, r = this.stride; i < r; i++) this.array[t + i] = e.array[n + i];
            return this;
        }
        set(t, e = 0) {
            return this.array.set(t, e), this;
        }
        clone(t) {
            void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
                void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = V()),
                void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
            const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),
                n = new this.constructor(e, this.stride);
            return n.setUsage(this.usage), n;
        }
        onUpload(t) {
            return (this.onUploadCallback = t), this;
        }
        toJSON(t) {
            return (
                void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
                void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = V()),
                void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))),
                { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride }
            );
        }
    }
    qr.prototype.isInterleavedBuffer = !0;
    const Xr = new st();
    class Yr {
        constructor(t, e, n, i) {
            (this.name = ""), (this.data = t), (this.itemSize = e), (this.offset = n), (this.normalized = !0 === i);
        }
        get count() {
            return this.data.count;
        }
        get array() {
            return this.data.array;
        }
        set needsUpdate(t) {
            this.data.needsUpdate = t;
        }
        applyMatrix4(t) {
            for (let e = 0, n = this.data.count; e < n; e++) (Xr.x = this.getX(e)), (Xr.y = this.getY(e)), (Xr.z = this.getZ(e)), Xr.applyMatrix4(t), this.setXYZ(e, Xr.x, Xr.y, Xr.z);
            return this;
        }
        applyNormalMatrix(t) {
            for (let e = 0, n = this.count; e < n; e++) (Xr.x = this.getX(e)), (Xr.y = this.getY(e)), (Xr.z = this.getZ(e)), Xr.applyNormalMatrix(t), this.setXYZ(e, Xr.x, Xr.y, Xr.z);
            return this;
        }
        transformDirection(t) {
            for (let e = 0, n = this.count; e < n; e++) (Xr.x = this.getX(e)), (Xr.y = this.getY(e)), (Xr.z = this.getZ(e)), Xr.transformDirection(t), this.setXYZ(e, Xr.x, Xr.y, Xr.z);
            return this;
        }
        setX(t, e) {
            return (this.data.array[t * this.data.stride + this.offset] = e), this;
        }
        setY(t, e) {
            return (this.data.array[t * this.data.stride + this.offset + 1] = e), this;
        }
        setZ(t, e) {
            return (this.data.array[t * this.data.stride + this.offset + 2] = e), this;
        }
        setW(t, e) {
            return (this.data.array[t * this.data.stride + this.offset + 3] = e), this;
        }
        getX(t) {
            return this.data.array[t * this.data.stride + this.offset];
        }
        getY(t) {
            return this.data.array[t * this.data.stride + this.offset + 1];
        }
        getZ(t) {
            return this.data.array[t * this.data.stride + this.offset + 2];
        }
        getW(t) {
            return this.data.array[t * this.data.stride + this.offset + 3];
        }
        setXY(t, e, n) {
            return (t = t * this.data.stride + this.offset), (this.data.array[t + 0] = e), (this.data.array[t + 1] = n), this;
        }
        setXYZ(t, e, n, i) {
            return (t = t * this.data.stride + this.offset), (this.data.array[t + 0] = e), (this.data.array[t + 1] = n), (this.data.array[t + 2] = i), this;
        }
        setXYZW(t, e, n, i, r) {
            return (t = t * this.data.stride + this.offset), (this.data.array[t + 0] = e), (this.data.array[t + 1] = n), (this.data.array[t + 2] = i), (this.data.array[t + 3] = r), this;
        }
        clone(t) {
            if (void 0 === t) {
                console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
                const t = [];
                for (let e = 0; e < this.count; e++) {
                    const n = e * this.data.stride + this.offset;
                    for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[n + e]);
                }
                return new ze(new this.array.constructor(t), this.itemSize, this.normalized);
            }
            return (
                void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
                void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)),
                new Yr(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized)
            );
        }
        toJSON(t) {
            if (void 0 === t) {
                console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
                const t = [];
                for (let e = 0; e < this.count; e++) {
                    const n = e * this.data.stride + this.offset;
                    for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[n + e]);
                }
                return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized };
            }
            return (
                void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
                void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)),
                { isInterleavedBufferAttribute: !0, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized }
            );
        }
    }
    Yr.prototype.isInterleavedBufferAttribute = !0;
    class Zr extends Se {
        constructor(t) {
            super(), (this.type = "SpriteMaterial"), (this.color = new Pe(16777215)), (this.map = null), (this.alphaMap = null), (this.rotation = 0), (this.sizeAttenuation = !0), (this.transparent = !0), this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), (this.map = t.map), (this.alphaMap = t.alphaMap), (this.rotation = t.rotation), (this.sizeAttenuation = t.sizeAttenuation), this;
        }
    }
    let Jr;
    Zr.prototype.isSpriteMaterial = !0;
    const Qr = new st(),
        Kr = new st(),
        $r = new st(),
        ts = new Z(),
        es = new Z(),
        ns = new Ot(),
        is = new st(),
        rs = new st(),
        ss = new st(),
        as = new Z(),
        os = new Z(),
        ls = new Z();
    class cs extends oe {
        constructor(t) {
            if ((super(), (this.type = "Sprite"), void 0 === Jr)) {
                Jr = new Xe();
                const t = new Float32Array([-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1]),
                    e = new qr(t, 5);
                Jr.setIndex([0, 1, 2, 0, 2, 3]), Jr.setAttribute("position", new Yr(e, 3, 0, !1)), Jr.setAttribute("uv", new Yr(e, 2, 3, !1));
            }
            (this.geometry = Jr), (this.material = void 0 !== t ? t : new Zr()), (this.center = new Z(0.5, 0.5));
        }
        raycast(t, e) {
            null === t.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),
                Kr.setFromMatrixScale(this.matrixWorld),
                ns.copy(t.camera.matrixWorld),
                this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld),
                $r.setFromMatrixPosition(this.modelViewMatrix),
                t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && Kr.multiplyScalar(-$r.z);
            const n = this.material.rotation;
            let i, r;
            0 !== n && ((r = Math.cos(n)), (i = Math.sin(n)));
            const s = this.center;
            hs(is.set(-0.5, -0.5, 0), $r, s, Kr, i, r), hs(rs.set(0.5, -0.5, 0), $r, s, Kr, i, r), hs(ss.set(0.5, 0.5, 0), $r, s, Kr, i, r), as.set(0, 0), os.set(1, 0), ls.set(1, 1);
            let a = t.ray.intersectTriangle(is, rs, ss, !1, Qr);
            if (null === a && (hs(rs.set(-0.5, 0.5, 0), $r, s, Kr, i, r), os.set(0, 1), (a = t.ray.intersectTriangle(is, ss, rs, !1, Qr)), null === a)) return;
            const o = t.ray.origin.distanceTo(Qr);
            o < t.near || o > t.far || e.push({ distance: o, point: Qr.clone(), uv: be.getUV(Qr, is, rs, ss, as, os, ls, new Z()), face: null, object: this });
        }
        copy(t) {
            return super.copy(t), void 0 !== t.center && this.center.copy(t.center), (this.material = t.material), this;
        }
    }
    function hs(t, e, n, i, r, s) {
        ts.subVectors(t, n).addScalar(0.5).multiply(i), void 0 !== r ? ((es.x = s * ts.x - r * ts.y), (es.y = r * ts.x + s * ts.y)) : es.copy(ts), t.copy(e), (t.x += es.x), (t.y += es.y), t.applyMatrix4(ns);
    }
    cs.prototype.isSprite = !0;
    const us = new st(),
        ds = new nt(),
        ps = new nt(),
        fs = new st(),
        ms = new Ot();
    class gs extends dn {
        constructor(t, e) {
            super(t, e), (this.type = "SkinnedMesh"), (this.bindMode = "attached"), (this.bindMatrix = new Ot()), (this.bindMatrixInverse = new Ot());
        }
        copy(t) {
            return super.copy(t), (this.bindMode = t.bindMode), this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), (this.skeleton = t.skeleton), this;
        }
        bind(t, e) {
            (this.skeleton = t), void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), (e = this.matrixWorld)), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert();
        }
        pose() {
            this.skeleton.pose();
        }
        normalizeSkinWeights() {
            const t = new nt(),
                e = this.geometry.attributes.skinWeight;
            for (let n = 0, i = e.count; n < i; n++) {
                (t.x = e.getX(n)), (t.y = e.getY(n)), (t.z = e.getZ(n)), (t.w = e.getW(n));
                const i = 1 / t.manhattanLength();
                i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0), e.setXYZW(n, t.x, t.y, t.z, t.w);
            }
        }
        updateMatrixWorld(t) {
            super.updateMatrixWorld(t),
                "attached" === this.bindMode
                    ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
                    : "detached" === this.bindMode
                    ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
                    : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
        }
        boneTransform(t, e) {
            const n = this.skeleton,
                i = this.geometry;
            ds.fromBufferAttribute(i.attributes.skinIndex, t), ps.fromBufferAttribute(i.attributes.skinWeight, t), us.fromBufferAttribute(i.attributes.position, t).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
            for (let t = 0; t < 4; t++) {
                const i = ps.getComponent(t);
                if (0 !== i) {
                    const r = ds.getComponent(t);
                    ms.multiplyMatrices(n.bones[r].matrixWorld, n.boneInverses[r]), e.addScaledVector(fs.copy(us).applyMatrix4(ms), i);
                }
            }
            return e.applyMatrix4(this.bindMatrixInverse);
        }
    }
    gs.prototype.isSkinnedMesh = !0;
    class vs extends oe {
        constructor() {
            super(), (this.type = "Bone");
        }
    }
    vs.prototype.isBone = !0;
    class ys extends tt {
        constructor(t, e, n, i, r, s, a, o, l, h, u, d) {
            super(null, s, a, o, l, h, i, r, u, d),
                (this.image = { data: t || null, width: e || 1, height: n || 1 }),
                (this.magFilter = void 0 !== l ? l : c),
                (this.minFilter = void 0 !== h ? h : c),
                (this.generateMipmaps = !1),
                (this.flipY = !1),
                (this.unpackAlignment = 1),
                (this.needsUpdate = !0);
        }
    }
    ys.prototype.isDataTexture = !0;
    const _s = new Ot(),
        xs = new Ot(),
        ws = [],
        bs = new dn();
    class Ms extends dn {
        constructor(t, e, n) {
            super(t, e), (this.instanceMatrix = new ze(new Float32Array(16 * n), 16)), (this.instanceColor = null), (this.count = n), (this.frustumCulled = !1);
        }
        copy(t) {
            return super.copy(t), this.instanceMatrix.copy(t.instanceMatrix), null !== t.instanceColor && (this.instanceColor = t.instanceColor.clone()), (this.count = t.count), this;
        }
        getColorAt(t, e) {
            e.fromArray(this.instanceColor.array, 3 * t);
        }
        getMatrixAt(t, e) {
            e.fromArray(this.instanceMatrix.array, 16 * t);
        }
        raycast(t, e) {
            const n = this.matrixWorld,
                i = this.count;
            if (((bs.geometry = this.geometry), (bs.material = this.material), void 0 !== bs.material))
                for (let r = 0; r < i; r++) {
                    this.getMatrixAt(r, _s), xs.multiplyMatrices(n, _s), (bs.matrixWorld = xs), bs.raycast(t, ws);
                    for (let t = 0, n = ws.length; t < n; t++) {
                        const n = ws[t];
                        (n.instanceId = r), (n.object = this), e.push(n);
                    }
                    ws.length = 0;
                }
        }
        setColorAt(t, e) {
            null === this.instanceColor && (this.instanceColor = new ze(new Float32Array(3 * this.count), 3)), e.toArray(this.instanceColor.array, 3 * t);
        }
        setMatrixAt(t, e) {
            e.toArray(this.instanceMatrix.array, 16 * t);
        }
        updateMorphTargets() {}
        dispose() {
            this.dispatchEvent({ type: "dispose" });
        }
    }
    Ms.prototype.isInstancedMesh = !0;
    class Ss extends Se {
        constructor(t) {
            super(), (this.type = "LineBasicMaterial"), (this.color = new Pe(16777215)), (this.linewidth = 1), (this.linecap = "round"), (this.linejoin = "round"), (this.morphTargets = !1), this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), (this.linewidth = t.linewidth), (this.linecap = t.linecap), (this.linejoin = t.linejoin), (this.morphTargets = t.morphTargets), this;
        }
    }
    Ss.prototype.isLineBasicMaterial = !0;
    const Ts = new st(),
        Es = new st(),
        As = new Ot(),
        Ls = new zt(),
        Rs = new At();
    class Cs extends oe {
        constructor(t = new Xe(), e = new Ss()) {
            super(), (this.type = "Line"), (this.geometry = t), (this.material = e), this.updateMorphTargets();
        }
        copy(t) {
            return super.copy(t), (this.material = t.material), (this.geometry = t.geometry), this;
        }
        computeLineDistances() {
            const t = this.geometry;
            if (t.isBufferGeometry)
                if (null === t.index) {
                    const e = t.attributes.position,
                        n = [0];
                    for (let t = 1, i = e.count; t < i; t++) Ts.fromBufferAttribute(e, t - 1), Es.fromBufferAttribute(e, t), (n[t] = n[t - 1]), (n[t] += Ts.distanceTo(Es));
                    t.setAttribute("lineDistance", new Fe(n, 1));
                } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            else t.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
            return this;
        }
        raycast(t, e) {
            const n = this.geometry,
                i = this.matrixWorld,
                r = t.params.Line.threshold,
                s = n.drawRange;
            if ((null === n.boundingSphere && n.computeBoundingSphere(), Rs.copy(n.boundingSphere), Rs.applyMatrix4(i), (Rs.radius += r), !1 === t.ray.intersectsSphere(Rs))) return;
            As.copy(i).invert(), Ls.copy(t.ray).applyMatrix4(As);
            const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                o = a * a,
                l = new st(),
                c = new st(),
                h = new st(),
                u = new st(),
                d = this.isLineSegments ? 2 : 1;
            if (n.isBufferGeometry) {
                const i = n.index,
                    r = n.attributes.position;
                if (null !== i) {
                    for (let n = Math.max(0, s.start), a = Math.min(i.count, s.start + s.count) - 1; n < a; n += d) {
                        const s = i.getX(n),
                            a = i.getX(n + 1);
                        l.fromBufferAttribute(r, s), c.fromBufferAttribute(r, a);
                        if (Ls.distanceSqToSegment(l, c, u, h) > o) continue;
                        u.applyMatrix4(this.matrixWorld);
                        const d = t.ray.origin.distanceTo(u);
                        d < t.near || d > t.far || e.push({ distance: d, point: h.clone().applyMatrix4(this.matrixWorld), index: n, face: null, faceIndex: null, object: this });
                    }
                } else {
                    for (let n = Math.max(0, s.start), i = Math.min(r.count, s.start + s.count) - 1; n < i; n += d) {
                        l.fromBufferAttribute(r, n), c.fromBufferAttribute(r, n + 1);
                        if (Ls.distanceSqToSegment(l, c, u, h) > o) continue;
                        u.applyMatrix4(this.matrixWorld);
                        const i = t.ray.origin.distanceTo(u);
                        i < t.near || i > t.far || e.push({ distance: i, point: h.clone().applyMatrix4(this.matrixWorld), index: n, face: null, faceIndex: null, object: this });
                    }
                }
            } else n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
        updateMorphTargets() {
            const t = this.geometry;
            if (t.isBufferGeometry) {
                const e = t.morphAttributes,
                    n = Object.keys(e);
                if (n.length > 0) {
                    const t = e[n[0]];
                    if (void 0 !== t) {
                        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
                        for (let e = 0, n = t.length; e < n; e++) {
                            const n = t[e].name || String(e);
                            this.morphTargetInfluences.push(0), (this.morphTargetDictionary[n] = e);
                        }
                    }
                }
            } else {
                const e = t.morphTargets;
                void 0 !== e && e.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
            }
        }
    }
    Cs.prototype.isLine = !0;
    const Ps = new st(),
        Ds = new st();
    class Is extends Cs {
        constructor(t, e) {
            super(t, e), (this.type = "LineSegments");
        }
        computeLineDistances() {
            const t = this.geometry;
            if (t.isBufferGeometry)
                if (null === t.index) {
                    const e = t.attributes.position,
                        n = [];
                    for (let t = 0, i = e.count; t < i; t += 2) Ps.fromBufferAttribute(e, t), Ds.fromBufferAttribute(e, t + 1), (n[t] = 0 === t ? 0 : n[t - 1]), (n[t + 1] = n[t] + Ps.distanceTo(Ds));
                    t.setAttribute("lineDistance", new Fe(n, 1));
                } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            else t.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
            return this;
        }
    }
    Is.prototype.isLineSegments = !0;
    class Ns extends Cs {
        constructor(t, e) {
            super(t, e), (this.type = "LineLoop");
        }
    }
    Ns.prototype.isLineLoop = !0;
    class zs extends Se {
        constructor(t) {
            super(), (this.type = "PointsMaterial"), (this.color = new Pe(16777215)), (this.map = null), (this.alphaMap = null), (this.size = 1), (this.sizeAttenuation = !0), (this.morphTargets = !1), this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), (this.map = t.map), (this.alphaMap = t.alphaMap), (this.size = t.size), (this.sizeAttenuation = t.sizeAttenuation), (this.morphTargets = t.morphTargets), this;
        }
    }
    zs.prototype.isPointsMaterial = !0;
    const Os = new Ot(),
        Bs = new zt(),
        Fs = new At(),
        Hs = new st();
    class Us extends oe {
        constructor(t = new Xe(), e = new zs()) {
            super(), (this.type = "Points"), (this.geometry = t), (this.material = e), this.updateMorphTargets();
        }
        copy(t) {
            return super.copy(t), (this.material = t.material), (this.geometry = t.geometry), this;
        }
        raycast(t, e) {
            const n = this.geometry,
                i = this.matrixWorld,
                r = t.params.Points.threshold,
                s = n.drawRange;
            if ((null === n.boundingSphere && n.computeBoundingSphere(), Fs.copy(n.boundingSphere), Fs.applyMatrix4(i), (Fs.radius += r), !1 === t.ray.intersectsSphere(Fs))) return;
            Os.copy(i).invert(), Bs.copy(t.ray).applyMatrix4(Os);
            const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                o = a * a;
            if (n.isBufferGeometry) {
                const r = n.index,
                    a = n.attributes.position;
                if (null !== r) {
                    for (let n = Math.max(0, s.start), l = Math.min(r.count, s.start + s.count); n < l; n++) {
                        const s = r.getX(n);
                        Hs.fromBufferAttribute(a, s), ks(Hs, s, o, i, t, e, this);
                    }
                } else {
                    for (let n = Math.max(0, s.start), r = Math.min(a.count, s.start + s.count); n < r; n++) Hs.fromBufferAttribute(a, n), ks(Hs, n, o, i, t, e, this);
                }
            } else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
        updateMorphTargets() {
            const t = this.geometry;
            if (t.isBufferGeometry) {
                const e = t.morphAttributes,
                    n = Object.keys(e);
                if (n.length > 0) {
                    const t = e[n[0]];
                    if (void 0 !== t) {
                        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
                        for (let e = 0, n = t.length; e < n; e++) {
                            const n = t[e].name || String(e);
                            this.morphTargetInfluences.push(0), (this.morphTargetDictionary[n] = e);
                        }
                    }
                }
            } else {
                const e = t.morphTargets;
                void 0 !== e && e.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
            }
        }
    }
    function ks(t, e, n, i, r, s, a) {
        const o = Bs.distanceSqToPoint(t);
        if (o < n) {
            const n = new st();
            Bs.closestPointToPoint(t, n), n.applyMatrix4(i);
            const l = r.ray.origin.distanceTo(n);
            if (l < r.near || l > r.far) return;
            s.push({ distance: l, distanceToRay: Math.sqrt(o), point: n, index: e, face: null, object: a });
        }
    }
    Us.prototype.isPoints = !0;
    (class extends tt {
        constructor(t, e, n, i, r, s, a, o, l) {
            super(t, e, n, i, r, s, a, o, l), (this.format = void 0 !== a ? a : x), (this.minFilter = void 0 !== s ? s : d), (this.magFilter = void 0 !== r ? r : d), (this.generateMipmaps = !1);
            const c = this;
            "requestVideoFrameCallback" in t &&
                t.requestVideoFrameCallback(function e() {
                    (c.needsUpdate = !0), t.requestVideoFrameCallback(e);
                });
        }
        clone() {
            return new this.constructor(this.image).copy(this);
        }
        update() {
            const t = this.image;
            !1 === "requestVideoFrameCallback" in t && t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
        }
    }.prototype.isVideoTexture = !0);
    class Gs extends tt {
        constructor(t, e, n, i, r, s, a, o, l, c, h, u) {
            super(null, s, a, o, l, c, i, r, h, u), (this.image = { width: e, height: n }), (this.mipmaps = t), (this.flipY = !1), (this.generateMipmaps = !1);
        }
    }
    Gs.prototype.isCompressedTexture = !0;
    (class extends tt {
        constructor(t, e, n, i, r, s, a, o, l) {
            super(t, e, n, i, r, s, a, o, l), (this.needsUpdate = !0);
        }
    }.prototype.isCanvasTexture = !0);
    (class extends tt {
        constructor(t, e, n, i, r, s, a, o, l, h) {
            if ((h = void 0 !== h ? h : b) !== b && h !== M) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
            void 0 === n && h === b && (n = m),
                void 0 === n && h === M && (n = _),
                super(null, i, r, s, a, o, h, n, l),
                (this.image = { width: t, height: e }),
                (this.magFilter = void 0 !== a ? a : c),
                (this.minFilter = void 0 !== o ? o : c),
                (this.flipY = !1),
                (this.generateMipmaps = !1);
        }
    }.prototype.isDepthTexture = !0);
    class Vs extends Xe {
        constructor(t, e, n = 1, i = 0) {
            super(), (this.type = "PolyhedronGeometry"), (this.parameters = { vertices: t, indices: e, radius: n, detail: i });
            const r = [],
                s = [];
            function a(t, e, n, i) {
                const r = i + 1,
                    s = [];
                for (let i = 0; i <= r; i++) {
                    s[i] = [];
                    const a = t.clone().lerp(n, i / r),
                        o = e.clone().lerp(n, i / r),
                        l = r - i;
                    for (let t = 0; t <= l; t++) s[i][t] = 0 === t && i === r ? a : a.clone().lerp(o, t / l);
                }
                for (let t = 0; t < r; t++)
                    for (let e = 0; e < 2 * (r - t) - 1; e++) {
                        const n = Math.floor(e / 2);
                        e % 2 == 0 ? (o(s[t][n + 1]), o(s[t + 1][n]), o(s[t][n])) : (o(s[t][n + 1]), o(s[t + 1][n + 1]), o(s[t + 1][n]));
                    }
            }
            function o(t) {
                r.push(t.x, t.y, t.z);
            }
            function l(e, n) {
                const i = 3 * e;
                (n.x = t[i + 0]), (n.y = t[i + 1]), (n.z = t[i + 2]);
            }
            function c(t, e, n, i) {
                i < 0 && 1 === t.x && (s[e] = t.x - 1), 0 === n.x && 0 === n.z && (s[e] = i / 2 / Math.PI + 0.5);
            }
            function h(t) {
                return Math.atan2(t.z, -t.x);
            }
            !(function (t) {
                const n = new st(),
                    i = new st(),
                    r = new st();
                for (let s = 0; s < e.length; s += 3) l(e[s + 0], n), l(e[s + 1], i), l(e[s + 2], r), a(n, i, r, t);
            })(i),
                (function (t) {
                    const e = new st();
                    for (let n = 0; n < r.length; n += 3) (e.x = r[n + 0]), (e.y = r[n + 1]), (e.z = r[n + 2]), e.normalize().multiplyScalar(t), (r[n + 0] = e.x), (r[n + 1] = e.y), (r[n + 2] = e.z);
                })(n),
                (function () {
                    const t = new st();
                    for (let n = 0; n < r.length; n += 3) {
                        (t.x = r[n + 0]), (t.y = r[n + 1]), (t.z = r[n + 2]);
                        const i = h(t) / 2 / Math.PI + 0.5,
                            a = ((e = t), Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI + 0.5);
                        s.push(i, 1 - a);
                    }
                    var e;
                    (function () {
                        const t = new st(),
                            e = new st(),
                            n = new st(),
                            i = new st(),
                            a = new Z(),
                            o = new Z(),
                            l = new Z();
                        for (let u = 0, d = 0; u < r.length; u += 9, d += 6) {
                            t.set(r[u + 0], r[u + 1], r[u + 2]),
                                e.set(r[u + 3], r[u + 4], r[u + 5]),
                                n.set(r[u + 6], r[u + 7], r[u + 8]),
                                a.set(s[d + 0], s[d + 1]),
                                o.set(s[d + 2], s[d + 3]),
                                l.set(s[d + 4], s[d + 5]),
                                i.copy(t).add(e).add(n).divideScalar(3);
                            const p = h(i);
                            c(a, d + 0, t, p), c(o, d + 2, e, p), c(l, d + 4, n, p);
                        }
                    })(),
                        (function () {
                            for (let t = 0; t < s.length; t += 6) {
                                const e = s[t + 0],
                                    n = s[t + 2],
                                    i = s[t + 4],
                                    r = Math.max(e, n, i),
                                    a = Math.min(e, n, i);
                                r > 0.9 && a < 0.1 && (e < 0.2 && (s[t + 0] += 1), n < 0.2 && (s[t + 2] += 1), i < 0.2 && (s[t + 4] += 1));
                            }
                        })();
                })(),
                this.setAttribute("position", new Fe(r, 3)),
                this.setAttribute("normal", new Fe(r.slice(), 3)),
                this.setAttribute("uv", new Fe(s, 2)),
                0 === i ? this.computeVertexNormals() : this.normalizeNormals();
        }
    }
    new st(), new st(), new st(), new be();
    const Ws = function (t, e, n) {
        n = n || 2;
        const i = e && e.length,
            r = i ? e[0] * n : t.length;
        let s = js(t, 0, r, n, !0);
        const a = [];
        if (!s || s.next === s.prev) return a;
        let o, l, c, h, u, d, p;
        if (
            (i &&
                (s = (function (t, e, n, i) {
                    const r = [];
                    let s, a, o, l, c;
                    for (s = 0, a = e.length; s < a; s++) (o = e[s] * i), (l = s < a - 1 ? e[s + 1] * i : t.length), (c = js(t, o, l, i, !1)), c === c.next && (c.steiner = !0), r.push(na(c));
                    for (r.sort(Ks), s = 0; s < r.length; s++) $s(r[s], n), (n = qs(n, n.next));
                    return n;
                })(t, e, s, n)),
            t.length > 80 * n)
        ) {
            (o = c = t[0]), (l = h = t[1]);
            for (let e = n; e < r; e += n) (u = t[e]), (d = t[e + 1]), u < o && (o = u), d < l && (l = d), u > c && (c = u), d > h && (h = d);
            (p = Math.max(c - o, h - l)), (p = 0 !== p ? 1 / p : 0);
        }
        return Xs(s, a, n, o, l, p), a;
    };
    function js(t, e, n, i, r) {
        let s, a;
        if (
            r ===
            (function (t, e, n, i) {
                let r = 0;
                for (let s = e, a = n - i; s < n; s += i) (r += (t[a] - t[s]) * (t[s + 1] + t[a + 1])), (a = s);
                return r;
            })(t, e, n, i) >
                0
        )
            for (s = e; s < n; s += i) a = da(s, t[s], t[s + 1], a);
        else for (s = n - i; s >= e; s -= i) a = da(s, t[s], t[s + 1], a);
        return a && aa(a, a.next) && (pa(a), (a = a.next)), a;
    }
    function qs(t, e) {
        if (!t) return t;
        e || (e = t);
        let n,
            i = t;
        do {
            if (((n = !1), i.steiner || (!aa(i, i.next) && 0 !== sa(i.prev, i, i.next)))) i = i.next;
            else {
                if ((pa(i), (i = e = i.prev), i === i.next)) break;
                n = !0;
            }
        } while (n || i !== e);
        return e;
    }
    function Xs(t, e, n, i, r, s, a) {
        if (!t) return;
        !a &&
            s &&
            (function (t, e, n, i) {
                let r = t;
                do {
                    null === r.z && (r.z = ea(r.x, r.y, e, n, i)), (r.prevZ = r.prev), (r.nextZ = r.next), (r = r.next);
                } while (r !== t);
                (r.prevZ.nextZ = null),
                    (r.prevZ = null),
                    (function (t) {
                        let e,
                            n,
                            i,
                            r,
                            s,
                            a,
                            o,
                            l,
                            c = 1;
                        do {
                            for (n = t, t = null, s = null, a = 0; n; ) {
                                for (a++, i = n, o = 0, e = 0; e < c && (o++, (i = i.nextZ), i); e++);
                                for (l = c; o > 0 || (l > 0 && i); ) 0 !== o && (0 === l || !i || n.z <= i.z) ? ((r = n), (n = n.nextZ), o--) : ((r = i), (i = i.nextZ), l--), s ? (s.nextZ = r) : (t = r), (r.prevZ = s), (s = r);
                                n = i;
                            }
                            (s.nextZ = null), (c *= 2);
                        } while (a > 1);
                    })(r);
            })(t, i, r, s);
        let o,
            l,
            c = t;
        for (; t.prev !== t.next; )
            if (((o = t.prev), (l = t.next), s ? Zs(t, i, r, s) : Ys(t))) e.push(o.i / n), e.push(t.i / n), e.push(l.i / n), pa(t), (t = l.next), (c = l.next);
            else if ((t = l) === c) {
                a ? (1 === a ? Xs((t = Js(qs(t), e, n)), e, n, i, r, s, 2) : 2 === a && Qs(t, e, n, i, r, s)) : Xs(qs(t), e, n, i, r, s, 1);
                break;
            }
    }
    function Ys(t) {
        const e = t.prev,
            n = t,
            i = t.next;
        if (sa(e, n, i) >= 0) return !1;
        let r = t.next.next;
        for (; r !== t.prev; ) {
            if (ia(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) && sa(r.prev, r, r.next) >= 0) return !1;
            r = r.next;
        }
        return !0;
    }
    function Zs(t, e, n, i) {
        const r = t.prev,
            s = t,
            a = t.next;
        if (sa(r, s, a) >= 0) return !1;
        const o = r.x < s.x ? (r.x < a.x ? r.x : a.x) : s.x < a.x ? s.x : a.x,
            l = r.y < s.y ? (r.y < a.y ? r.y : a.y) : s.y < a.y ? s.y : a.y,
            c = r.x > s.x ? (r.x > a.x ? r.x : a.x) : s.x > a.x ? s.x : a.x,
            h = r.y > s.y ? (r.y > a.y ? r.y : a.y) : s.y > a.y ? s.y : a.y,
            u = ea(o, l, e, n, i),
            d = ea(c, h, e, n, i);
        let p = t.prevZ,
            f = t.nextZ;
        for (; p && p.z >= u && f && f.z <= d; ) {
            if (p !== t.prev && p !== t.next && ia(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && sa(p.prev, p, p.next) >= 0) return !1;
            if (((p = p.prevZ), f !== t.prev && f !== t.next && ia(r.x, r.y, s.x, s.y, a.x, a.y, f.x, f.y) && sa(f.prev, f, f.next) >= 0)) return !1;
            f = f.nextZ;
        }
        for (; p && p.z >= u; ) {
            if (p !== t.prev && p !== t.next && ia(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && sa(p.prev, p, p.next) >= 0) return !1;
            p = p.prevZ;
        }
        for (; f && f.z <= d; ) {
            if (f !== t.prev && f !== t.next && ia(r.x, r.y, s.x, s.y, a.x, a.y, f.x, f.y) && sa(f.prev, f, f.next) >= 0) return !1;
            f = f.nextZ;
        }
        return !0;
    }
    function Js(t, e, n) {
        let i = t;
        do {
            const r = i.prev,
                s = i.next.next;
            !aa(r, s) && oa(r, i, i.next, s) && ha(r, s) && ha(s, r) && (e.push(r.i / n), e.push(i.i / n), e.push(s.i / n), pa(i), pa(i.next), (i = t = s)), (i = i.next);
        } while (i !== t);
        return qs(i);
    }
    function Qs(t, e, n, i, r, s) {
        let a = t;
        do {
            let t = a.next.next;
            for (; t !== a.prev; ) {
                if (a.i !== t.i && ra(a, t)) {
                    let o = ua(a, t);
                    return (a = qs(a, a.next)), (o = qs(o, o.next)), Xs(a, e, n, i, r, s), void Xs(o, e, n, i, r, s);
                }
                t = t.next;
            }
            a = a.next;
        } while (a !== t);
    }
    function Ks(t, e) {
        return t.x - e.x;
    }
    function $s(t, e) {
        if (
            (e = (function (t, e) {
                let n = e;
                const i = t.x,
                    r = t.y;
                let s,
                    a = -1 / 0;
                do {
                    if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
                        const t = n.x + ((r - n.y) * (n.next.x - n.x)) / (n.next.y - n.y);
                        if (t <= i && t > a) {
                            if (((a = t), t === i)) {
                                if (r === n.y) return n;
                                if (r === n.next.y) return n.next;
                            }
                            s = n.x < n.next.x ? n : n.next;
                        }
                    }
                    n = n.next;
                } while (n !== e);
                if (!s) return null;
                if (i === a) return s;
                const o = s,
                    l = s.x,
                    c = s.y;
                let h,
                    u = 1 / 0;
                n = s;
                do {
                    i >= n.x &&
                        n.x >= l &&
                        i !== n.x &&
                        ia(r < c ? i : a, r, l, c, r < c ? a : i, r, n.x, n.y) &&
                        ((h = Math.abs(r - n.y) / (i - n.x)), ha(n, t) && (h < u || (h === u && (n.x > s.x || (n.x === s.x && ta(s, n))))) && ((s = n), (u = h))),
                        (n = n.next);
                } while (n !== o);
                return s;
            })(t, e))
        ) {
            const n = ua(e, t);
            qs(e, e.next), qs(n, n.next);
        }
    }
    function ta(t, e) {
        return sa(t.prev, t, e.prev) < 0 && sa(e.next, t, t.next) < 0;
    }
    function ea(t, e, n, i, r) {
        return (
            (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * r) | (t << 8))) | (t << 4))) | (t << 2))) | (t << 1))) |
            ((e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | (e << 8))) | (e << 4))) | (e << 2))) | (e << 1))) << 1)
        );
    }
    function na(t) {
        let e = t,
            n = t;
        do {
            (e.x < n.x || (e.x === n.x && e.y < n.y)) && (n = e), (e = e.next);
        } while (e !== t);
        return n;
    }
    function ia(t, e, n, i, r, s, a, o) {
        return (r - a) * (e - o) - (t - a) * (s - o) >= 0 && (t - a) * (i - o) - (n - a) * (e - o) >= 0 && (n - a) * (s - o) - (r - a) * (i - o) >= 0;
    }
    function ra(t, e) {
        return (
            t.next.i !== e.i &&
            t.prev.i !== e.i &&
            !(function (t, e) {
                let n = t;
                do {
                    if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && oa(n, n.next, t, e)) return !0;
                    n = n.next;
                } while (n !== t);
                return !1;
            })(t, e) &&
            ((ha(t, e) &&
                ha(e, t) &&
                (function (t, e) {
                    let n = t,
                        i = !1;
                    const r = (t.x + e.x) / 2,
                        s = (t.y + e.y) / 2;
                    do {
                        n.y > s != n.next.y > s && n.next.y !== n.y && r < ((n.next.x - n.x) * (s - n.y)) / (n.next.y - n.y) + n.x && (i = !i), (n = n.next);
                    } while (n !== t);
                    return i;
                })(t, e) &&
                (sa(t.prev, t, e.prev) || sa(t, e.prev, e))) ||
                (aa(t, e) && sa(t.prev, t, t.next) > 0 && sa(e.prev, e, e.next) > 0))
        );
    }
    function sa(t, e, n) {
        return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
    }
    function aa(t, e) {
        return t.x === e.x && t.y === e.y;
    }
    function oa(t, e, n, i) {
        const r = ca(sa(t, e, n)),
            s = ca(sa(t, e, i)),
            a = ca(sa(n, i, t)),
            o = ca(sa(n, i, e));
        return (r !== s && a !== o) || !(0 !== r || !la(t, n, e)) || !(0 !== s || !la(t, i, e)) || !(0 !== a || !la(n, t, i)) || !(0 !== o || !la(n, e, i));
    }
    function la(t, e, n) {
        return e.x <= Math.max(t.x, n.x) && e.x >= Math.min(t.x, n.x) && e.y <= Math.max(t.y, n.y) && e.y >= Math.min(t.y, n.y);
    }
    function ca(t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0;
    }
    function ha(t, e) {
        return sa(t.prev, t, t.next) < 0 ? sa(t, e, t.next) >= 0 && sa(t, t.prev, e) >= 0 : sa(t, e, t.prev) < 0 || sa(t, t.next, e) < 0;
    }
    function ua(t, e) {
        const n = new fa(t.i, t.x, t.y),
            i = new fa(e.i, e.x, e.y),
            r = t.next,
            s = e.prev;
        return (t.next = e), (e.prev = t), (n.next = r), (r.prev = n), (i.next = n), (n.prev = i), (s.next = i), (i.prev = s), i;
    }
    function da(t, e, n, i) {
        const r = new fa(t, e, n);
        return i ? ((r.next = i.next), (r.prev = i), (i.next.prev = r), (i.next = r)) : ((r.prev = r), (r.next = r)), r;
    }
    function pa(t) {
        (t.next.prev = t.prev), (t.prev.next = t.next), t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ);
    }
    function fa(t, e, n) {
        (this.i = t), (this.x = e), (this.y = n), (this.prev = null), (this.next = null), (this.z = null), (this.prevZ = null), (this.nextZ = null), (this.steiner = !1);
    }
    class ma {
        static area(t) {
            const e = t.length;
            let n = 0;
            for (let i = e - 1, r = 0; r < e; i = r++) n += t[i].x * t[r].y - t[r].x * t[i].y;
            return 0.5 * n;
        }
        static isClockWise(t) {
            return ma.area(t) < 0;
        }
        static triangulateShape(t, e) {
            const n = [],
                i = [],
                r = [];
            ga(t), va(n, t);
            let s = t.length;
            e.forEach(ga);
            for (let t = 0; t < e.length; t++) i.push(s), (s += e[t].length), va(n, e[t]);
            const a = Ws(n, i);
            for (let t = 0; t < a.length; t += 3) r.push(a.slice(t, t + 3));
            return r;
        }
    }
    function ga(t) {
        const e = t.length;
        e > 2 && t[e - 1].equals(t[0]) && t.pop();
    }
    function va(t, e) {
        for (let n = 0; n < e.length; n++) t.push(e[n].x), t.push(e[n].y);
    }
    class ya extends Xe {
        constructor(t, e) {
            super(), (this.type = "ExtrudeGeometry"), (this.parameters = { shapes: t, options: e }), (t = Array.isArray(t) ? t : [t]);
            const n = this,
                i = [],
                r = [];
            for (let e = 0, n = t.length; e < n; e++) {
                s(t[e]);
            }
            function s(t) {
                const s = [],
                    a = void 0 !== e.curveSegments ? e.curveSegments : 12,
                    o = void 0 !== e.steps ? e.steps : 1;
                let l = void 0 !== e.depth ? e.depth : 100,
                    c = void 0 === e.bevelEnabled || e.bevelEnabled,
                    h = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
                    u = void 0 !== e.bevelSize ? e.bevelSize : h - 2,
                    d = void 0 !== e.bevelOffset ? e.bevelOffset : 0,
                    p = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
                const f = e.extrudePath,
                    m = void 0 !== e.UVGenerator ? e.UVGenerator : _a;
                void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), (l = e.amount));
                let g,
                    v,
                    y,
                    _,
                    x,
                    w = !1;
                f && ((g = f.getSpacedPoints(o)), (w = !0), (c = !1), (v = f.computeFrenetFrames(o, !1)), (y = new st()), (_ = new st()), (x = new st())), c || ((p = 0), (h = 0), (u = 0), (d = 0));
                const b = t.extractPoints(a);
                let M = b.shape;
                const S = b.holes;
                if (!ma.isClockWise(M)) {
                    M = M.reverse();
                    for (let t = 0, e = S.length; t < e; t++) {
                        const e = S[t];
                        ma.isClockWise(e) && (S[t] = e.reverse());
                    }
                }
                const T = ma.triangulateShape(M, S),
                    E = M;
                for (let t = 0, e = S.length; t < e; t++) {
                    const e = S[t];
                    M = M.concat(e);
                }
                function A(t, e, n) {
                    return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(n).add(t);
                }
                const L = M.length,
                    R = T.length;
                function C(t, e, n) {
                    let i, r, s;
                    const a = t.x - e.x,
                        o = t.y - e.y,
                        l = n.x - t.x,
                        c = n.y - t.y,
                        h = a * a + o * o,
                        u = a * c - o * l;
                    if (Math.abs(u) > Number.EPSILON) {
                        const u = Math.sqrt(h),
                            d = Math.sqrt(l * l + c * c),
                            p = e.x - o / u,
                            f = e.y + a / u,
                            m = ((n.x - c / d - p) * c - (n.y + l / d - f) * l) / (a * c - o * l);
                        (i = p + a * m - t.x), (r = f + o * m - t.y);
                        const g = i * i + r * r;
                        if (g <= 2) return new Z(i, r);
                        s = Math.sqrt(g / 2);
                    } else {
                        let t = !1;
                        a > Number.EPSILON ? l > Number.EPSILON && (t = !0) : a < -Number.EPSILON ? l < -Number.EPSILON && (t = !0) : Math.sign(o) === Math.sign(c) && (t = !0),
                            t ? ((i = -o), (r = a), (s = Math.sqrt(h))) : ((i = a), (r = o), (s = Math.sqrt(h / 2)));
                    }
                    return new Z(i / s, r / s);
                }
                const P = [];
                for (let t = 0, e = E.length, n = e - 1, i = t + 1; t < e; t++, n++, i++) n === e && (n = 0), i === e && (i = 0), (P[t] = C(E[t], E[n], E[i]));
                const D = [];
                let I,
                    N = P.concat();
                for (let t = 0, e = S.length; t < e; t++) {
                    const e = S[t];
                    I = [];
                    for (let t = 0, n = e.length, i = n - 1, r = t + 1; t < n; t++, i++, r++) i === n && (i = 0), r === n && (r = 0), (I[t] = C(e[t], e[i], e[r]));
                    D.push(I), (N = N.concat(I));
                }
                for (let t = 0; t < p; t++) {
                    const e = t / p,
                        n = h * Math.cos((e * Math.PI) / 2),
                        i = u * Math.sin((e * Math.PI) / 2) + d;
                    for (let t = 0, e = E.length; t < e; t++) {
                        const e = A(E[t], P[t], i);
                        B(e.x, e.y, -n);
                    }
                    for (let t = 0, e = S.length; t < e; t++) {
                        const e = S[t];
                        I = D[t];
                        for (let t = 0, r = e.length; t < r; t++) {
                            const r = A(e[t], I[t], i);
                            B(r.x, r.y, -n);
                        }
                    }
                }
                const z = u + d;
                for (let t = 0; t < L; t++) {
                    const e = c ? A(M[t], N[t], z) : M[t];
                    w ? (_.copy(v.normals[0]).multiplyScalar(e.x), y.copy(v.binormals[0]).multiplyScalar(e.y), x.copy(g[0]).add(_).add(y), B(x.x, x.y, x.z)) : B(e.x, e.y, 0);
                }
                for (let t = 1; t <= o; t++)
                    for (let e = 0; e < L; e++) {
                        const n = c ? A(M[e], N[e], z) : M[e];
                        w ? (_.copy(v.normals[t]).multiplyScalar(n.x), y.copy(v.binormals[t]).multiplyScalar(n.y), x.copy(g[t]).add(_).add(y), B(x.x, x.y, x.z)) : B(n.x, n.y, (l / o) * t);
                    }
                for (let t = p - 1; t >= 0; t--) {
                    const e = t / p,
                        n = h * Math.cos((e * Math.PI) / 2),
                        i = u * Math.sin((e * Math.PI) / 2) + d;
                    for (let t = 0, e = E.length; t < e; t++) {
                        const e = A(E[t], P[t], i);
                        B(e.x, e.y, l + n);
                    }
                    for (let t = 0, e = S.length; t < e; t++) {
                        const e = S[t];
                        I = D[t];
                        for (let t = 0, r = e.length; t < r; t++) {
                            const r = A(e[t], I[t], i);
                            w ? B(r.x, r.y + g[o - 1].y, g[o - 1].x + n) : B(r.x, r.y, l + n);
                        }
                    }
                }
                function O(t, e) {
                    let n = t.length;
                    for (; --n >= 0; ) {
                        const i = n;
                        let r = n - 1;
                        r < 0 && (r = t.length - 1);
                        for (let t = 0, n = o + 2 * p; t < n; t++) {
                            const n = L * t,
                                s = L * (t + 1);
                            H(e + i + n, e + r + n, e + r + s, e + i + s);
                        }
                    }
                }
                function B(t, e, n) {
                    s.push(t), s.push(e), s.push(n);
                }
                function F(t, e, r) {
                    U(t), U(e), U(r);
                    const s = i.length / 3,
                        a = m.generateTopUV(n, i, s - 3, s - 2, s - 1);
                    k(a[0]), k(a[1]), k(a[2]);
                }
                function H(t, e, r, s) {
                    U(t), U(e), U(s), U(e), U(r), U(s);
                    const a = i.length / 3,
                        o = m.generateSideWallUV(n, i, a - 6, a - 3, a - 2, a - 1);
                    k(o[0]), k(o[1]), k(o[3]), k(o[1]), k(o[2]), k(o[3]);
                }
                function U(t) {
                    i.push(s[3 * t + 0]), i.push(s[3 * t + 1]), i.push(s[3 * t + 2]);
                }
                function k(t) {
                    r.push(t.x), r.push(t.y);
                }
                !(function () {
                    const t = i.length / 3;
                    if (c) {
                        let t = 0,
                            e = L * t;
                        for (let t = 0; t < R; t++) {
                            const n = T[t];
                            F(n[2] + e, n[1] + e, n[0] + e);
                        }
                        (t = o + 2 * p), (e = L * t);
                        for (let t = 0; t < R; t++) {
                            const n = T[t];
                            F(n[0] + e, n[1] + e, n[2] + e);
                        }
                    } else {
                        for (let t = 0; t < R; t++) {
                            const e = T[t];
                            F(e[2], e[1], e[0]);
                        }
                        for (let t = 0; t < R; t++) {
                            const e = T[t];
                            F(e[0] + L * o, e[1] + L * o, e[2] + L * o);
                        }
                    }
                    n.addGroup(t, i.length / 3 - t, 0);
                })(),
                    (function () {
                        const t = i.length / 3;
                        let e = 0;
                        O(E, e), (e += E.length);
                        for (let t = 0, n = S.length; t < n; t++) {
                            const n = S[t];
                            O(n, e), (e += n.length);
                        }
                        n.addGroup(t, i.length / 3 - t, 1);
                    })();
            }
            this.setAttribute("position", new Fe(i, 3)), this.setAttribute("uv", new Fe(r, 2)), this.computeVertexNormals();
        }
        toJSON() {
            const t = super.toJSON();
            return (function (t, e, n) {
                if (((n.shapes = []), Array.isArray(t)))
                    for (let e = 0, i = t.length; e < i; e++) {
                        const i = t[e];
                        n.shapes.push(i.uuid);
                    }
                else n.shapes.push(t.uuid);
                void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON());
                return n;
            })(this.parameters.shapes, this.parameters.options, t);
        }
    }
    const _a = {
        generateTopUV: function (t, e, n, i, r) {
            const s = e[3 * n],
                a = e[3 * n + 1],
                o = e[3 * i],
                l = e[3 * i + 1],
                c = e[3 * r],
                h = e[3 * r + 1];
            return [new Z(s, a), new Z(o, l), new Z(c, h)];
        },
        generateSideWallUV: function (t, e, n, i, r, s) {
            const a = e[3 * n],
                o = e[3 * n + 1],
                l = e[3 * n + 2],
                c = e[3 * i],
                h = e[3 * i + 1],
                u = e[3 * i + 2],
                d = e[3 * r],
                p = e[3 * r + 1],
                f = e[3 * r + 2],
                m = e[3 * s],
                g = e[3 * s + 1],
                v = e[3 * s + 2];
            return Math.abs(o - h) < Math.abs(a - c) ? [new Z(a, 1 - l), new Z(c, 1 - u), new Z(d, 1 - f), new Z(m, 1 - v)] : [new Z(o, 1 - l), new Z(h, 1 - u), new Z(p, 1 - f), new Z(g, 1 - v)];
        },
    };
    class xa extends Vs {
        constructor(t = 1, e = 0) {
            const n = (1 + Math.sqrt(5)) / 2;
            super(
                [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1],
                [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1],
                t,
                e
            ),
                (this.type = "IcosahedronGeometry"),
                (this.parameters = { radius: t, detail: e });
        }
    }
    class wa extends Xe {
        constructor(t, e = 12) {
            super(), (this.type = "ShapeGeometry"), (this.parameters = { shapes: t, curveSegments: e });
            const n = [],
                i = [],
                r = [],
                s = [];
            let a = 0,
                o = 0;
            if (!1 === Array.isArray(t)) l(t);
            else for (let e = 0; e < t.length; e++) l(t[e]), this.addGroup(a, o, e), (a += o), (o = 0);
            function l(t) {
                const a = i.length / 3,
                    l = t.extractPoints(e);
                let c = l.shape;
                const h = l.holes;
                !1 === ma.isClockWise(c) && (c = c.reverse());
                for (let t = 0, e = h.length; t < e; t++) {
                    const e = h[t];
                    !0 === ma.isClockWise(e) && (h[t] = e.reverse());
                }
                const u = ma.triangulateShape(c, h);
                for (let t = 0, e = h.length; t < e; t++) {
                    const e = h[t];
                    c = c.concat(e);
                }
                for (let t = 0, e = c.length; t < e; t++) {
                    const e = c[t];
                    i.push(e.x, e.y, 0), r.push(0, 0, 1), s.push(e.x, e.y);
                }
                for (let t = 0, e = u.length; t < e; t++) {
                    const e = u[t],
                        i = e[0] + a,
                        r = e[1] + a,
                        s = e[2] + a;
                    n.push(i, r, s), (o += 3);
                }
            }
            this.setIndex(n), this.setAttribute("position", new Fe(i, 3)), this.setAttribute("normal", new Fe(r, 3)), this.setAttribute("uv", new Fe(s, 2));
        }
        toJSON() {
            const t = super.toJSON();
            return (function (t, e) {
                if (((e.shapes = []), Array.isArray(t)))
                    for (let n = 0, i = t.length; n < i; n++) {
                        const i = t[n];
                        e.shapes.push(i.uuid);
                    }
                else e.shapes.push(t.uuid);
                return e;
            })(this.parameters.shapes, t);
        }
    }
    class ba extends Se {
        constructor(t) {
            super(), (this.type = "ShadowMaterial"), (this.color = new Pe(0)), (this.transparent = !0), this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this;
        }
    }
    ba.prototype.isShadowMaterial = !0;
    class Ma extends yn {
        constructor(t) {
            super(t), (this.type = "RawShaderMaterial");
        }
    }
    Ma.prototype.isRawShaderMaterial = !0;
    class Sa extends Se {
        constructor(t) {
            super(),
                (this.defines = { STANDARD: "" }),
                (this.type = "MeshStandardMaterial"),
                (this.color = new Pe(16777215)),
                (this.roughness = 1),
                (this.metalness = 0),
                (this.map = null),
                (this.lightMap = null),
                (this.lightMapIntensity = 1),
                (this.aoMap = null),
                (this.aoMapIntensity = 1),
                (this.emissive = new Pe(0)),
                (this.emissiveIntensity = 1),
                (this.emissiveMap = null),
                (this.bumpMap = null),
                (this.bumpScale = 1),
                (this.normalMap = null),
                (this.normalMapType = 0),
                (this.normalScale = new Z(1, 1)),
                (this.displacementMap = null),
                (this.displacementScale = 1),
                (this.displacementBias = 0),
                (this.roughnessMap = null),
                (this.metalnessMap = null),
                (this.alphaMap = null),
                (this.envMap = null),
                (this.envMapIntensity = 1),
                (this.refractionRatio = 0.98),
                (this.wireframe = !1),
                (this.wireframeLinewidth = 1),
                (this.wireframeLinecap = "round"),
                (this.wireframeLinejoin = "round"),
                (this.morphTargets = !1),
                (this.morphNormals = !1),
                (this.flatShading = !1),
                (this.vertexTangents = !1),
                this.setValues(t);
        }
        copy(t) {
            return (
                super.copy(t),
                (this.defines = { STANDARD: "" }),
                this.color.copy(t.color),
                (this.roughness = t.roughness),
                (this.metalness = t.metalness),
                (this.map = t.map),
                (this.lightMap = t.lightMap),
                (this.lightMapIntensity = t.lightMapIntensity),
                (this.aoMap = t.aoMap),
                (this.aoMapIntensity = t.aoMapIntensity),
                this.emissive.copy(t.emissive),
                (this.emissiveMap = t.emissiveMap),
                (this.emissiveIntensity = t.emissiveIntensity),
                (this.bumpMap = t.bumpMap),
                (this.bumpScale = t.bumpScale),
                (this.normalMap = t.normalMap),
                (this.normalMapType = t.normalMapType),
                this.normalScale.copy(t.normalScale),
                (this.displacementMap = t.displacementMap),
                (this.displacementScale = t.displacementScale),
                (this.displacementBias = t.displacementBias),
                (this.roughnessMap = t.roughnessMap),
                (this.metalnessMap = t.metalnessMap),
                (this.alphaMap = t.alphaMap),
                (this.envMap = t.envMap),
                (this.envMapIntensity = t.envMapIntensity),
                (this.refractionRatio = t.refractionRatio),
                (this.wireframe = t.wireframe),
                (this.wireframeLinewidth = t.wireframeLinewidth),
                (this.wireframeLinecap = t.wireframeLinecap),
                (this.wireframeLinejoin = t.wireframeLinejoin),
                (this.morphTargets = t.morphTargets),
                (this.morphNormals = t.morphNormals),
                (this.flatShading = t.flatShading),
                (this.vertexTangents = t.vertexTangents),
                this
            );
        }
    }
    Sa.prototype.isMeshStandardMaterial = !0;
    class Ta extends Sa {
        constructor(t) {
            super(),
                (this.defines = { STANDARD: "", PHYSICAL: "" }),
                (this.type = "MeshPhysicalMaterial"),
                (this.clearcoat = 0),
                (this.clearcoatMap = null),
                (this.clearcoatRoughness = 0),
                (this.clearcoatRoughnessMap = null),
                (this.clearcoatNormalScale = new Z(1, 1)),
                (this.clearcoatNormalMap = null),
                (this.reflectivity = 0.5),
                Object.defineProperty(this, "ior", {
                    get: function () {
                        return (1 + 0.4 * this.reflectivity) / (1 - 0.4 * this.reflectivity);
                    },
                    set: function (t) {
                        this.reflectivity = W((2.5 * (t - 1)) / (t + 1), 0, 1);
                    },
                }),
                (this.sheen = null),
                (this.transmission = 0),
                (this.transmissionMap = null),
                (this.thickness = 0.01),
                (this.thicknessMap = null),
                (this.attenuationDistance = 0),
                (this.attenuationColor = new Pe(1, 1, 1)),
                this.setValues(t);
        }
        copy(t) {
            return (
                super.copy(t),
                (this.defines = { STANDARD: "", PHYSICAL: "" }),
                (this.clearcoat = t.clearcoat),
                (this.clearcoatMap = t.clearcoatMap),
                (this.clearcoatRoughness = t.clearcoatRoughness),
                (this.clearcoatRoughnessMap = t.clearcoatRoughnessMap),
                (this.clearcoatNormalMap = t.clearcoatNormalMap),
                this.clearcoatNormalScale.copy(t.clearcoatNormalScale),
                (this.reflectivity = t.reflectivity),
                t.sheen ? (this.sheen = (this.sheen || new Pe()).copy(t.sheen)) : (this.sheen = null),
                (this.transmission = t.transmission),
                (this.transmissionMap = t.transmissionMap),
                (this.thickness = t.thickness),
                (this.thicknessMap = t.thicknessMap),
                (this.attenuationDistance = t.attenuationDistance),
                this.attenuationColor.copy(t.attenuationColor),
                this
            );
        }
    }
    Ta.prototype.isMeshPhysicalMaterial = !0;
    class Ea extends Se {
        constructor(t) {
            super(),
                (this.type = "MeshPhongMaterial"),
                (this.color = new Pe(16777215)),
                (this.specular = new Pe(1118481)),
                (this.shininess = 30),
                (this.map = null),
                (this.lightMap = null),
                (this.lightMapIntensity = 1),
                (this.aoMap = null),
                (this.aoMapIntensity = 1),
                (this.emissive = new Pe(0)),
                (this.emissiveIntensity = 1),
                (this.emissiveMap = null),
                (this.bumpMap = null),
                (this.bumpScale = 1),
                (this.normalMap = null),
                (this.normalMapType = 0),
                (this.normalScale = new Z(1, 1)),
                (this.displacementMap = null),
                (this.displacementScale = 1),
                (this.displacementBias = 0),
                (this.specularMap = null),
                (this.alphaMap = null),
                (this.envMap = null),
                (this.combine = 0),
                (this.reflectivity = 1),
                (this.refractionRatio = 0.98),
                (this.wireframe = !1),
                (this.wireframeLinewidth = 1),
                (this.wireframeLinecap = "round"),
                (this.wireframeLinejoin = "round"),
                (this.morphTargets = !1),
                (this.morphNormals = !1),
                (this.flatShading = !1),
                this.setValues(t);
        }
        copy(t) {
            return (
                super.copy(t),
                this.color.copy(t.color),
                this.specular.copy(t.specular),
                (this.shininess = t.shininess),
                (this.map = t.map),
                (this.lightMap = t.lightMap),
                (this.lightMapIntensity = t.lightMapIntensity),
                (this.aoMap = t.aoMap),
                (this.aoMapIntensity = t.aoMapIntensity),
                this.emissive.copy(t.emissive),
                (this.emissiveMap = t.emissiveMap),
                (this.emissiveIntensity = t.emissiveIntensity),
                (this.bumpMap = t.bumpMap),
                (this.bumpScale = t.bumpScale),
                (this.normalMap = t.normalMap),
                (this.normalMapType = t.normalMapType),
                this.normalScale.copy(t.normalScale),
                (this.displacementMap = t.displacementMap),
                (this.displacementScale = t.displacementScale),
                (this.displacementBias = t.displacementBias),
                (this.specularMap = t.specularMap),
                (this.alphaMap = t.alphaMap),
                (this.envMap = t.envMap),
                (this.combine = t.combine),
                (this.reflectivity = t.reflectivity),
                (this.refractionRatio = t.refractionRatio),
                (this.wireframe = t.wireframe),
                (this.wireframeLinewidth = t.wireframeLinewidth),
                (this.wireframeLinecap = t.wireframeLinecap),
                (this.wireframeLinejoin = t.wireframeLinejoin),
                (this.morphTargets = t.morphTargets),
                (this.morphNormals = t.morphNormals),
                (this.flatShading = t.flatShading),
                this
            );
        }
    }
    Ea.prototype.isMeshPhongMaterial = !0;
    class Aa extends Se {
        constructor(t) {
            super(),
                (this.defines = { TOON: "" }),
                (this.type = "MeshToonMaterial"),
                (this.color = new Pe(16777215)),
                (this.map = null),
                (this.gradientMap = null),
                (this.lightMap = null),
                (this.lightMapIntensity = 1),
                (this.aoMap = null),
                (this.aoMapIntensity = 1),
                (this.emissive = new Pe(0)),
                (this.emissiveIntensity = 1),
                (this.emissiveMap = null),
                (this.bumpMap = null),
                (this.bumpScale = 1),
                (this.normalMap = null),
                (this.normalMapType = 0),
                (this.normalScale = new Z(1, 1)),
                (this.displacementMap = null),
                (this.displacementScale = 1),
                (this.displacementBias = 0),
                (this.alphaMap = null),
                (this.wireframe = !1),
                (this.wireframeLinewidth = 1),
                (this.wireframeLinecap = "round"),
                (this.wireframeLinejoin = "round"),
                (this.morphTargets = !1),
                (this.morphNormals = !1),
                this.setValues(t);
        }
        copy(t) {
            return (
                super.copy(t),
                this.color.copy(t.color),
                (this.map = t.map),
                (this.gradientMap = t.gradientMap),
                (this.lightMap = t.lightMap),
                (this.lightMapIntensity = t.lightMapIntensity),
                (this.aoMap = t.aoMap),
                (this.aoMapIntensity = t.aoMapIntensity),
                this.emissive.copy(t.emissive),
                (this.emissiveMap = t.emissiveMap),
                (this.emissiveIntensity = t.emissiveIntensity),
                (this.bumpMap = t.bumpMap),
                (this.bumpScale = t.bumpScale),
                (this.normalMap = t.normalMap),
                (this.normalMapType = t.normalMapType),
                this.normalScale.copy(t.normalScale),
                (this.displacementMap = t.displacementMap),
                (this.displacementScale = t.displacementScale),
                (this.displacementBias = t.displacementBias),
                (this.alphaMap = t.alphaMap),
                (this.wireframe = t.wireframe),
                (this.wireframeLinewidth = t.wireframeLinewidth),
                (this.wireframeLinecap = t.wireframeLinecap),
                (this.wireframeLinejoin = t.wireframeLinejoin),
                (this.morphTargets = t.morphTargets),
                (this.morphNormals = t.morphNormals),
                this
            );
        }
    }
    Aa.prototype.isMeshToonMaterial = !0;
    class La extends Se {
        constructor(t) {
            super(),
                (this.type = "MeshNormalMaterial"),
                (this.bumpMap = null),
                (this.bumpScale = 1),
                (this.normalMap = null),
                (this.normalMapType = 0),
                (this.normalScale = new Z(1, 1)),
                (this.displacementMap = null),
                (this.displacementScale = 1),
                (this.displacementBias = 0),
                (this.wireframe = !1),
                (this.wireframeLinewidth = 1),
                (this.fog = !1),
                (this.morphTargets = !1),
                (this.morphNormals = !1),
                (this.flatShading = !1),
                this.setValues(t);
        }
        copy(t) {
            return (
                super.copy(t),
                (this.bumpMap = t.bumpMap),
                (this.bumpScale = t.bumpScale),
                (this.normalMap = t.normalMap),
                (this.normalMapType = t.normalMapType),
                this.normalScale.copy(t.normalScale),
                (this.displacementMap = t.displacementMap),
                (this.displacementScale = t.displacementScale),
                (this.displacementBias = t.displacementBias),
                (this.wireframe = t.wireframe),
                (this.wireframeLinewidth = t.wireframeLinewidth),
                (this.morphTargets = t.morphTargets),
                (this.morphNormals = t.morphNormals),
                (this.flatShading = t.flatShading),
                this
            );
        }
    }
    La.prototype.isMeshNormalMaterial = !0;
    class Ra extends Se {
        constructor(t) {
            super(),
                (this.type = "MeshLambertMaterial"),
                (this.color = new Pe(16777215)),
                (this.map = null),
                (this.lightMap = null),
                (this.lightMapIntensity = 1),
                (this.aoMap = null),
                (this.aoMapIntensity = 1),
                (this.emissive = new Pe(0)),
                (this.emissiveIntensity = 1),
                (this.emissiveMap = null),
                (this.specularMap = null),
                (this.alphaMap = null),
                (this.envMap = null),
                (this.combine = 0),
                (this.reflectivity = 1),
                (this.refractionRatio = 0.98),
                (this.wireframe = !1),
                (this.wireframeLinewidth = 1),
                (this.wireframeLinecap = "round"),
                (this.wireframeLinejoin = "round"),
                (this.morphTargets = !1),
                (this.morphNormals = !1),
                this.setValues(t);
        }
        copy(t) {
            return (
                super.copy(t),
                this.color.copy(t.color),
                (this.map = t.map),
                (this.lightMap = t.lightMap),
                (this.lightMapIntensity = t.lightMapIntensity),
                (this.aoMap = t.aoMap),
                (this.aoMapIntensity = t.aoMapIntensity),
                this.emissive.copy(t.emissive),
                (this.emissiveMap = t.emissiveMap),
                (this.emissiveIntensity = t.emissiveIntensity),
                (this.specularMap = t.specularMap),
                (this.alphaMap = t.alphaMap),
                (this.envMap = t.envMap),
                (this.combine = t.combine),
                (this.reflectivity = t.reflectivity),
                (this.refractionRatio = t.refractionRatio),
                (this.wireframe = t.wireframe),
                (this.wireframeLinewidth = t.wireframeLinewidth),
                (this.wireframeLinecap = t.wireframeLinecap),
                (this.wireframeLinejoin = t.wireframeLinejoin),
                (this.morphTargets = t.morphTargets),
                (this.morphNormals = t.morphNormals),
                this
            );
        }
    }
    Ra.prototype.isMeshLambertMaterial = !0;
    class Ca extends Se {
        constructor(t) {
            super(),
                (this.defines = { MATCAP: "" }),
                (this.type = "MeshMatcapMaterial"),
                (this.color = new Pe(16777215)),
                (this.matcap = null),
                (this.map = null),
                (this.bumpMap = null),
                (this.bumpScale = 1),
                (this.normalMap = null),
                (this.normalMapType = 0),
                (this.normalScale = new Z(1, 1)),
                (this.displacementMap = null),
                (this.displacementScale = 1),
                (this.displacementBias = 0),
                (this.alphaMap = null),
                (this.morphTargets = !1),
                (this.morphNormals = !1),
                (this.flatShading = !1),
                this.setValues(t);
        }
        copy(t) {
            return (
                super.copy(t),
                (this.defines = { MATCAP: "" }),
                this.color.copy(t.color),
                (this.matcap = t.matcap),
                (this.map = t.map),
                (this.bumpMap = t.bumpMap),
                (this.bumpScale = t.bumpScale),
                (this.normalMap = t.normalMap),
                (this.normalMapType = t.normalMapType),
                this.normalScale.copy(t.normalScale),
                (this.displacementMap = t.displacementMap),
                (this.displacementScale = t.displacementScale),
                (this.displacementBias = t.displacementBias),
                (this.alphaMap = t.alphaMap),
                (this.morphTargets = t.morphTargets),
                (this.morphNormals = t.morphNormals),
                (this.flatShading = t.flatShading),
                this
            );
        }
    }
    Ca.prototype.isMeshMatcapMaterial = !0;
    class Pa extends Ss {
        constructor(t) {
            super(), (this.type = "LineDashedMaterial"), (this.scale = 1), (this.dashSize = 3), (this.gapSize = 1), this.setValues(t);
        }
        copy(t) {
            return super.copy(t), (this.scale = t.scale), (this.dashSize = t.dashSize), (this.gapSize = t.gapSize), this;
        }
    }
    Pa.prototype.isLineDashedMaterial = !0;
    const Da = {
        arraySlice: function (t, e, n) {
            return Da.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n);
        },
        convertArray: function (t, e, n) {
            return !t || (!n && t.constructor === e) ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t);
        },
        isTypedArray: function (t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView);
        },
        getKeyframeOrder: function (t) {
            const e = t.length,
                n = new Array(e);
            for (let t = 0; t !== e; ++t) n[t] = t;
            return (
                n.sort(function (e, n) {
                    return t[e] - t[n];
                }),
                n
            );
        },
        sortedArray: function (t, e, n) {
            const i = t.length,
                r = new t.constructor(i);
            for (let s = 0, a = 0; a !== i; ++s) {
                const i = n[s] * e;
                for (let n = 0; n !== e; ++n) r[a++] = t[i + n];
            }
            return r;
        },
        flattenJSON: function (t, e, n, i) {
            let r = 1,
                s = t[0];
            for (; void 0 !== s && void 0 === s[i]; ) s = t[r++];
            if (void 0 === s) return;
            let a = s[i];
            if (void 0 !== a)
                if (Array.isArray(a))
                    do {
                        (a = s[i]), void 0 !== a && (e.push(s.time), n.push.apply(n, a)), (s = t[r++]);
                    } while (void 0 !== s);
                else if (void 0 !== a.toArray)
                    do {
                        (a = s[i]), void 0 !== a && (e.push(s.time), a.toArray(n, n.length)), (s = t[r++]);
                    } while (void 0 !== s);
                else
                    do {
                        (a = s[i]), void 0 !== a && (e.push(s.time), n.push(a)), (s = t[r++]);
                    } while (void 0 !== s);
        },
        subclip: function (t, e, n, i, r = 30) {
            const s = t.clone();
            s.name = e;
            const a = [];
            for (let t = 0; t < s.tracks.length; ++t) {
                const e = s.tracks[t],
                    o = e.getValueSize(),
                    l = [],
                    c = [];
                for (let t = 0; t < e.times.length; ++t) {
                    const s = e.times[t] * r;
                    if (!(s < n || s >= i)) {
                        l.push(e.times[t]);
                        for (let n = 0; n < o; ++n) c.push(e.values[t * o + n]);
                    }
                }
                0 !== l.length && ((e.times = Da.convertArray(l, e.times.constructor)), (e.values = Da.convertArray(c, e.values.constructor)), a.push(e));
            }
            s.tracks = a;
            let o = 1 / 0;
            for (let t = 0; t < s.tracks.length; ++t) o > s.tracks[t].times[0] && (o = s.tracks[t].times[0]);
            for (let t = 0; t < s.tracks.length; ++t) s.tracks[t].shift(-1 * o);
            return s.resetDuration(), s;
        },
        makeClipAdditive: function (t, e = 0, n = t, i = 30) {
            i <= 0 && (i = 30);
            const r = n.tracks.length,
                s = e / i;
            for (let e = 0; e < r; ++e) {
                const i = n.tracks[e],
                    r = i.ValueTypeName;
                if ("bool" === r || "string" === r) continue;
                const a = t.tracks.find(function (t) {
                    return t.name === i.name && t.ValueTypeName === r;
                });
                if (void 0 === a) continue;
                let o = 0;
                const l = i.getValueSize();
                i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (o = l / 3);
                let c = 0;
                const h = a.getValueSize();
                a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (c = h / 3);
                const u = i.times.length - 1;
                let d;
                if (s <= i.times[0]) {
                    const t = o,
                        e = l - o;
                    d = Da.arraySlice(i.values, t, e);
                } else if (s >= i.times[u]) {
                    const t = u * l + o,
                        e = t + l - o;
                    d = Da.arraySlice(i.values, t, e);
                } else {
                    const t = i.createInterpolant(),
                        e = o,
                        n = l - o;
                    t.evaluate(s), (d = Da.arraySlice(t.resultBuffer, e, n));
                }
                if ("quaternion" === r) {
                    new rt().fromArray(d).normalize().conjugate().toArray(d);
                }
                const p = a.times.length;
                for (let t = 0; t < p; ++t) {
                    const e = t * h + c;
                    if ("quaternion" === r) rt.multiplyQuaternionsFlat(a.values, e, d, 0, a.values, e);
                    else {
                        const t = h - 2 * c;
                        for (let n = 0; n < t; ++n) a.values[e + n] -= d[n];
                    }
                }
            }
            return (t.blendMode = 2501), t;
        },
    };
    class Ia {
        constructor(t, e, n, i) {
            (this.parameterPositions = t), (this._cachedIndex = 0), (this.resultBuffer = void 0 !== i ? i : new e.constructor(n)), (this.sampleValues = e), (this.valueSize = n), (this.settings = null), (this.DefaultSettings_ = {});
        }
        evaluate(t) {
            const e = this.parameterPositions;
            let n = this._cachedIndex,
                i = e[n],
                r = e[n - 1];
            t: {
                e: {
                    let s;
                    n: {
                        i: if (!(t < i)) {
                            for (let s = n + 2; ; ) {
                                if (void 0 === i) {
                                    if (t < r) break i;
                                    return (n = e.length), (this._cachedIndex = n), this.afterEnd_(n - 1, t, r);
                                }
                                if (n === s) break;
                                if (((r = i), (i = e[++n]), t < i)) break e;
                            }
                            s = e.length;
                            break n;
                        }
                        if (t >= r) break t;
                        {
                            const a = e[1];
                            t < a && ((n = 2), (r = a));
                            for (let s = n - 2; ; ) {
                                if (void 0 === r) return (this._cachedIndex = 0), this.beforeStart_(0, t, i);
                                if (n === s) break;
                                if (((i = r), (r = e[--n - 1]), t >= r)) break e;
                            }
                            (s = n), (n = 0);
                        }
                    }
                    for (; n < s; ) {
                        const i = (n + s) >>> 1;
                        t < e[i] ? (s = i) : (n = i + 1);
                    }
                    if (((i = e[n]), (r = e[n - 1]), void 0 === r)) return (this._cachedIndex = 0), this.beforeStart_(0, t, i);
                    if (void 0 === i) return (n = e.length), (this._cachedIndex = n), this.afterEnd_(n - 1, r, t);
                }
                (this._cachedIndex = n), this.intervalChanged_(n, r, i);
            }
            return this.interpolate_(n, r, t, i);
        }
        getSettings_() {
            return this.settings || this.DefaultSettings_;
        }
        copySampleValue_(t) {
            const e = this.resultBuffer,
                n = this.sampleValues,
                i = this.valueSize,
                r = t * i;
            for (let t = 0; t !== i; ++t) e[t] = n[r + t];
            return e;
        }
        interpolate_() {
            throw new Error("call to abstract method");
        }
        intervalChanged_() {}
    }
    (Ia.prototype.beforeStart_ = Ia.prototype.copySampleValue_), (Ia.prototype.afterEnd_ = Ia.prototype.copySampleValue_);
    class Na extends Ia {
        constructor(t, e, n, i) {
            super(t, e, n, i), (this._weightPrev = -0), (this._offsetPrev = -0), (this._weightNext = -0), (this._offsetNext = -0), (this.DefaultSettings_ = { endingStart: A, endingEnd: A });
        }
        intervalChanged_(t, e, n) {
            const i = this.parameterPositions;
            let r = t - 2,
                s = t + 1,
                a = i[r],
                o = i[s];
            if (void 0 === a)
                switch (this.getSettings_().endingStart) {
                    case L:
                        (r = t), (a = 2 * e - n);
                        break;
                    case R:
                        (r = i.length - 2), (a = e + i[r] - i[r + 1]);
                        break;
                    default:
                        (r = t), (a = n);
                }
            if (void 0 === o)
                switch (this.getSettings_().endingEnd) {
                    case L:
                        (s = t), (o = 2 * n - e);
                        break;
                    case R:
                        (s = 1), (o = n + i[1] - i[0]);
                        break;
                    default:
                        (s = t - 1), (o = e);
                }
            const l = 0.5 * (n - e),
                c = this.valueSize;
            (this._weightPrev = l / (e - a)), (this._weightNext = l / (o - n)), (this._offsetPrev = r * c), (this._offsetNext = s * c);
        }
        interpolate_(t, e, n, i) {
            const r = this.resultBuffer,
                s = this.sampleValues,
                a = this.valueSize,
                o = t * a,
                l = o - a,
                c = this._offsetPrev,
                h = this._offsetNext,
                u = this._weightPrev,
                d = this._weightNext,
                p = (n - e) / (i - e),
                f = p * p,
                m = f * p,
                g = -u * m + 2 * u * f - u * p,
                v = (1 + u) * m + (-1.5 - 2 * u) * f + (-0.5 + u) * p + 1,
                y = (-1 - d) * m + (1.5 + d) * f + 0.5 * p,
                _ = d * m - d * f;
            for (let t = 0; t !== a; ++t) r[t] = g * s[c + t] + v * s[l + t] + y * s[o + t] + _ * s[h + t];
            return r;
        }
    }
    class za extends Ia {
        constructor(t, e, n, i) {
            super(t, e, n, i);
        }
        interpolate_(t, e, n, i) {
            const r = this.resultBuffer,
                s = this.sampleValues,
                a = this.valueSize,
                o = t * a,
                l = o - a,
                c = (n - e) / (i - e),
                h = 1 - c;
            for (let t = 0; t !== a; ++t) r[t] = s[l + t] * h + s[o + t] * c;
            return r;
        }
    }
    class Oa extends Ia {
        constructor(t, e, n, i) {
            super(t, e, n, i);
        }
        interpolate_(t) {
            return this.copySampleValue_(t - 1);
        }
    }
    class Ba {
        constructor(t, e, n, i) {
            if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
            if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
            (this.name = t), (this.times = Da.convertArray(e, this.TimeBufferType)), (this.values = Da.convertArray(n, this.ValueBufferType)), this.setInterpolation(i || this.DefaultInterpolation);
        }
        static toJSON(t) {
            const e = t.constructor;
            let n;
            if (e.toJSON !== this.toJSON) n = e.toJSON(t);
            else {
                n = { name: t.name, times: Da.convertArray(t.times, Array), values: Da.convertArray(t.values, Array) };
                const e = t.getInterpolation();
                e !== t.DefaultInterpolation && (n.interpolation = e);
            }
            return (n.type = t.ValueTypeName), n;
        }
        InterpolantFactoryMethodDiscrete(t) {
            return new Oa(this.times, this.values, this.getValueSize(), t);
        }
        InterpolantFactoryMethodLinear(t) {
            return new za(this.times, this.values, this.getValueSize(), t);
        }
        InterpolantFactoryMethodSmooth(t) {
            return new Na(this.times, this.values, this.getValueSize(), t);
        }
        setInterpolation(t) {
            let e;
            switch (t) {
                case S:
                    e = this.InterpolantFactoryMethodDiscrete;
                    break;
                case T:
                    e = this.InterpolantFactoryMethodLinear;
                    break;
                case E:
                    e = this.InterpolantFactoryMethodSmooth;
            }
            if (void 0 === e) {
                const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant) {
                    if (t === this.DefaultInterpolation) throw new Error(e);
                    this.setInterpolation(this.DefaultInterpolation);
                }
                return console.warn("THREE.KeyframeTrack:", e), this;
            }
            return (this.createInterpolant = e), this;
        }
        getInterpolation() {
            switch (this.createInterpolant) {
                case this.InterpolantFactoryMethodDiscrete:
                    return S;
                case this.InterpolantFactoryMethodLinear:
                    return T;
                case this.InterpolantFactoryMethodSmooth:
                    return E;
            }
        }
        getValueSize() {
            return this.values.length / this.times.length;
        }
        shift(t) {
            if (0 !== t) {
                const e = this.times;
                for (let n = 0, i = e.length; n !== i; ++n) e[n] += t;
            }
            return this;
        }
        scale(t) {
            if (1 !== t) {
                const e = this.times;
                for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t;
            }
            return this;
        }
        trim(t, e) {
            const n = this.times,
                i = n.length;
            let r = 0,
                s = i - 1;
            for (; r !== i && n[r] < t; ) ++r;
            for (; -1 !== s && n[s] > e; ) --s;
            if ((++s, 0 !== r || s !== i)) {
                r >= s && ((s = Math.max(s, 1)), (r = s - 1));
                const t = this.getValueSize();
                (this.times = Da.arraySlice(n, r, s)), (this.values = Da.arraySlice(this.values, r * t, s * t));
            }
            return this;
        }
        validate() {
            let t = !0;
            const e = this.getValueSize();
            e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), (t = !1));
            const n = this.times,
                i = this.values,
                r = n.length;
            0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), (t = !1));
            let s = null;
            for (let e = 0; e !== r; e++) {
                const i = n[e];
                if ("number" == typeof i && isNaN(i)) {
                    console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e, i), (t = !1);
                    break;
                }
                if (null !== s && s > i) {
                    console.error("THREE.KeyframeTrack: Out of order keys.", this, e, i, s), (t = !1);
                    break;
                }
                s = i;
            }
            if (void 0 !== i && Da.isTypedArray(i))
                for (let e = 0, n = i.length; e !== n; ++e) {
                    const n = i[e];
                    if (isNaN(n)) {
                        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e, n), (t = !1);
                        break;
                    }
                }
            return t;
        }
        optimize() {
            const t = Da.arraySlice(this.times),
                e = Da.arraySlice(this.values),
                n = this.getValueSize(),
                i = this.getInterpolation() === E,
                r = t.length - 1;
            let s = 1;
            for (let a = 1; a < r; ++a) {
                let r = !1;
                const o = t[a];
                if (o !== t[a + 1] && (1 !== a || o !== t[0]))
                    if (i) r = !0;
                    else {
                        const t = a * n,
                            i = t - n,
                            s = t + n;
                        for (let a = 0; a !== n; ++a) {
                            const n = e[t + a];
                            if (n !== e[i + a] || n !== e[s + a]) {
                                r = !0;
                                break;
                            }
                        }
                    }
                if (r) {
                    if (a !== s) {
                        t[s] = t[a];
                        const i = a * n,
                            r = s * n;
                        for (let t = 0; t !== n; ++t) e[r + t] = e[i + t];
                    }
                    ++s;
                }
            }
            if (r > 0) {
                t[s] = t[r];
                for (let t = r * n, i = s * n, a = 0; a !== n; ++a) e[i + a] = e[t + a];
                ++s;
            }
            return s !== t.length ? ((this.times = Da.arraySlice(t, 0, s)), (this.values = Da.arraySlice(e, 0, s * n))) : ((this.times = t), (this.values = e)), this;
        }
        clone() {
            const t = Da.arraySlice(this.times, 0),
                e = Da.arraySlice(this.values, 0),
                n = new (0, this.constructor)(this.name, t, e);
            return (n.createInterpolant = this.createInterpolant), n;
        }
    }
    (Ba.prototype.TimeBufferType = Float32Array), (Ba.prototype.ValueBufferType = Float32Array), (Ba.prototype.DefaultInterpolation = T);
    class Fa extends Ba {}
    (Fa.prototype.ValueTypeName = "bool"), (Fa.prototype.ValueBufferType = Array), (Fa.prototype.DefaultInterpolation = S), (Fa.prototype.InterpolantFactoryMethodLinear = void 0), (Fa.prototype.InterpolantFactoryMethodSmooth = void 0);
    class Ha extends Ba {}
    Ha.prototype.ValueTypeName = "color";
    class Ua extends Ba {}
    Ua.prototype.ValueTypeName = "number";
    class ka extends Ia {
        constructor(t, e, n, i) {
            super(t, e, n, i);
        }
        interpolate_(t, e, n, i) {
            const r = this.resultBuffer,
                s = this.sampleValues,
                a = this.valueSize,
                o = (n - e) / (i - e);
            let l = t * a;
            for (let t = l + a; l !== t; l += 4) rt.slerpFlat(r, 0, s, l - a, s, l, o);
            return r;
        }
    }
    class Ga extends Ba {
        InterpolantFactoryMethodLinear(t) {
            return new ka(this.times, this.values, this.getValueSize(), t);
        }
    }
    (Ga.prototype.ValueTypeName = "quaternion"), (Ga.prototype.DefaultInterpolation = T), (Ga.prototype.InterpolantFactoryMethodSmooth = void 0);
    class Va extends Ba {}
    (Va.prototype.ValueTypeName = "string"), (Va.prototype.ValueBufferType = Array), (Va.prototype.DefaultInterpolation = S), (Va.prototype.InterpolantFactoryMethodLinear = void 0), (Va.prototype.InterpolantFactoryMethodSmooth = void 0);
    class Wa extends Ba {}
    Wa.prototype.ValueTypeName = "vector";
    class ja {
        constructor(t, e = -1, n, i = 2500) {
            (this.name = t), (this.tracks = n), (this.duration = e), (this.blendMode = i), (this.uuid = V()), this.duration < 0 && this.resetDuration();
        }
        static parse(t) {
            const e = [],
                n = t.tracks,
                i = 1 / (t.fps || 1);
            for (let t = 0, r = n.length; t !== r; ++t) e.push(qa(n[t]).scale(i));
            const r = new this(t.name, t.duration, e, t.blendMode);
            return (r.uuid = t.uuid), r;
        }
        static toJSON(t) {
            const e = [],
                n = t.tracks,
                i = { name: t.name, duration: t.duration, tracks: e, uuid: t.uuid, blendMode: t.blendMode };
            for (let t = 0, i = n.length; t !== i; ++t) e.push(Ba.toJSON(n[t]));
            return i;
        }
        static CreateFromMorphTargetSequence(t, e, n, i) {
            const r = e.length,
                s = [];
            for (let t = 0; t < r; t++) {
                let a = [],
                    o = [];
                a.push((t + r - 1) % r, t, (t + 1) % r), o.push(0, 1, 0);
                const l = Da.getKeyframeOrder(a);
                (a = Da.sortedArray(a, 1, l)), (o = Da.sortedArray(o, 1, l)), i || 0 !== a[0] || (a.push(r), o.push(o[0])), s.push(new Ua(".morphTargetInfluences[" + e[t].name + "]", a, o).scale(1 / n));
            }
            return new this(t, -1, s);
        }
        static findByName(t, e) {
            let n = t;
            if (!Array.isArray(t)) {
                const e = t;
                n = (e.geometry && e.geometry.animations) || e.animations;
            }
            for (let t = 0; t < n.length; t++) if (n[t].name === e) return n[t];
            return null;
        }
        static CreateClipsFromMorphTargetSequences(t, e, n) {
            const i = {},
                r = /^([\w-]*?)([\d]+)$/;
            for (let e = 0, n = t.length; e < n; e++) {
                const n = t[e],
                    s = n.name.match(r);
                if (s && s.length > 1) {
                    const t = s[1];
                    let e = i[t];
                    e || (i[t] = e = []), e.push(n);
                }
            }
            const s = [];
            for (const t in i) s.push(this.CreateFromMorphTargetSequence(t, i[t], e, n));
            return s;
        }
        static parseAnimation(t, e) {
            if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
            const n = function (t, e, n, i, r) {
                    if (0 !== n.length) {
                        const s = [],
                            a = [];
                        Da.flattenJSON(n, s, a, i), 0 !== s.length && r.push(new t(e, s, a));
                    }
                },
                i = [],
                r = t.name || "default",
                s = t.fps || 30,
                a = t.blendMode;
            let o = t.length || -1;
            const l = t.hierarchy || [];
            for (let t = 0; t < l.length; t++) {
                const r = l[t].keys;
                if (r && 0 !== r.length)
                    if (r[0].morphTargets) {
                        const t = {};
                        let e;
                        for (e = 0; e < r.length; e++) if (r[e].morphTargets) for (let n = 0; n < r[e].morphTargets.length; n++) t[r[e].morphTargets[n]] = -1;
                        for (const n in t) {
                            const t = [],
                                s = [];
                            for (let i = 0; i !== r[e].morphTargets.length; ++i) {
                                const i = r[e];
                                t.push(i.time), s.push(i.morphTarget === n ? 1 : 0);
                            }
                            i.push(new Ua(".morphTargetInfluence[" + n + "]", t, s));
                        }
                        o = t.length * (s || 1);
                    } else {
                        const s = ".bones[" + e[t].name + "]";
                        n(Wa, s + ".position", r, "pos", i), n(Ga, s + ".quaternion", r, "rot", i), n(Wa, s + ".scale", r, "scl", i);
                    }
            }
            if (0 === i.length) return null;
            return new this(r, o, i, a);
        }
        resetDuration() {
            let t = 0;
            for (let e = 0, n = this.tracks.length; e !== n; ++e) {
                const n = this.tracks[e];
                t = Math.max(t, n.times[n.times.length - 1]);
            }
            return (this.duration = t), this;
        }
        trim() {
            for (let t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
            return this;
        }
        validate() {
            let t = !0;
            for (let e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate();
            return t;
        }
        optimize() {
            for (let t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
            return this;
        }
        clone() {
            const t = [];
            for (let e = 0; e < this.tracks.length; e++) t.push(this.tracks[e].clone());
            return new this.constructor(this.name, this.duration, t, this.blendMode);
        }
        toJSON() {
            return this.constructor.toJSON(this);
        }
    }
    function qa(t) {
        if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
        const e = (function (t) {
            switch (t.toLowerCase()) {
                case "scalar":
                case "double":
                case "float":
                case "number":
                case "integer":
                    return Ua;
                case "vector":
                case "vector2":
                case "vector3":
                case "vector4":
                    return Wa;
                case "color":
                    return Ha;
                case "quaternion":
                    return Ga;
                case "bool":
                case "boolean":
                    return Fa;
                case "string":
                    return Va;
            }
            throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t);
        })(t.type);
        if (void 0 === t.times) {
            const e = [],
                n = [];
            Da.flattenJSON(t.keys, e, n, "value"), (t.times = e), (t.values = n);
        }
        return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation);
    }
    const Xa = {
        enabled: !1,
        files: {},
        add: function (t, e) {
            !1 !== this.enabled && (this.files[t] = e);
        },
        get: function (t) {
            if (!1 !== this.enabled) return this.files[t];
        },
        remove: function (t) {
            delete this.files[t];
        },
        clear: function () {
            this.files = {};
        },
    };
    class Ya {
        constructor(t, e, n) {
            const i = this;
            let r,
                s = !1,
                a = 0,
                o = 0;
            const l = [];
            (this.onStart = void 0),
                (this.onLoad = t),
                (this.onProgress = e),
                (this.onError = n),
                (this.itemStart = function (t) {
                    o++, !1 === s && void 0 !== i.onStart && i.onStart(t, a, o), (s = !0);
                }),
                (this.itemEnd = function (t) {
                    a++, void 0 !== i.onProgress && i.onProgress(t, a, o), a === o && ((s = !1), void 0 !== i.onLoad && i.onLoad());
                }),
                (this.itemError = function (t) {
                    void 0 !== i.onError && i.onError(t);
                }),
                (this.resolveURL = function (t) {
                    return r ? r(t) : t;
                }),
                (this.setURLModifier = function (t) {
                    return (r = t), this;
                }),
                (this.addHandler = function (t, e) {
                    return l.push(t, e), this;
                }),
                (this.removeHandler = function (t) {
                    const e = l.indexOf(t);
                    return -1 !== e && l.splice(e, 2), this;
                }),
                (this.getHandler = function (t) {
                    for (let e = 0, n = l.length; e < n; e += 2) {
                        const n = l[e],
                            i = l[e + 1];
                        if ((n.global && (n.lastIndex = 0), n.test(t))) return i;
                    }
                    return null;
                });
        }
    }
    const Za = new Ya();
    class Ja {
        constructor(t) {
            (this.manager = void 0 !== t ? t : Za), (this.crossOrigin = "anonymous"), (this.withCredentials = !1), (this.path = ""), (this.resourcePath = ""), (this.requestHeader = {});
        }
        load() {}
        loadAsync(t, e) {
            const n = this;
            return new Promise(function (i, r) {
                n.load(t, i, e, r);
            });
        }
        parse() {}
        setCrossOrigin(t) {
            return (this.crossOrigin = t), this;
        }
        setWithCredentials(t) {
            return (this.withCredentials = t), this;
        }
        setPath(t) {
            return (this.path = t), this;
        }
        setResourcePath(t) {
            return (this.resourcePath = t), this;
        }
        setRequestHeader(t) {
            return (this.requestHeader = t), this;
        }
    }
    const Qa = {};
    class Ka extends Ja {
        constructor(t) {
            super(t);
        }
        load(t, e, n, i) {
            void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), (t = this.manager.resolveURL(t));
            const r = this,
                s = Xa.get(t);
            if (void 0 !== s)
                return (
                    r.manager.itemStart(t),
                    setTimeout(function () {
                        e && e(s), r.manager.itemEnd(t);
                    }, 0),
                    s
                );
            if (void 0 !== Qa[t]) return void Qa[t].push({ onLoad: e, onProgress: n, onError: i });
            const a = t.match(/^data:(.*?)(;base64)?,(.*)$/);
            let o;
            if (a) {
                const n = a[1],
                    s = !!a[2];
                let o = a[3];
                (o = decodeURIComponent(o)), s && (o = atob(o));
                try {
                    let i;
                    const s = (this.responseType || "").toLowerCase();
                    switch (s) {
                        case "arraybuffer":
                        case "blob":
                            const t = new Uint8Array(o.length);
                            for (let e = 0; e < o.length; e++) t[e] = o.charCodeAt(e);
                            i = "blob" === s ? new Blob([t.buffer], { type: n }) : t.buffer;
                            break;
                        case "document":
                            const e = new DOMParser();
                            i = e.parseFromString(o, n);
                            break;
                        case "json":
                            i = JSON.parse(o);
                            break;
                        default:
                            i = o;
                    }
                    setTimeout(function () {
                        e && e(i), r.manager.itemEnd(t);
                    }, 0);
                } catch (e) {
                    setTimeout(function () {
                        i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
                    }, 0);
                }
            } else {
                (Qa[t] = []),
                    Qa[t].push({ onLoad: e, onProgress: n, onError: i }),
                    (o = new XMLHttpRequest()),
                    o.open("GET", t, !0),
                    o.addEventListener(
                        "load",
                        function (e) {
                            const n = this.response,
                                i = Qa[t];
                            if ((delete Qa[t], 200 === this.status || 0 === this.status)) {
                                0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), Xa.add(t, n);
                                for (let t = 0, e = i.length; t < e; t++) {
                                    const e = i[t];
                                    e.onLoad && e.onLoad(n);
                                }
                                r.manager.itemEnd(t);
                            } else {
                                for (let t = 0, n = i.length; t < n; t++) {
                                    const n = i[t];
                                    n.onError && n.onError(e);
                                }
                                r.manager.itemError(t), r.manager.itemEnd(t);
                            }
                        },
                        !1
                    ),
                    o.addEventListener(
                        "progress",
                        function (e) {
                            const n = Qa[t];
                            for (let t = 0, i = n.length; t < i; t++) {
                                const i = n[t];
                                i.onProgress && i.onProgress(e);
                            }
                        },
                        !1
                    ),
                    o.addEventListener(
                        "error",
                        function (e) {
                            const n = Qa[t];
                            delete Qa[t];
                            for (let t = 0, i = n.length; t < i; t++) {
                                const i = n[t];
                                i.onError && i.onError(e);
                            }
                            r.manager.itemError(t), r.manager.itemEnd(t);
                        },
                        !1
                    ),
                    o.addEventListener(
                        "abort",
                        function (e) {
                            const n = Qa[t];
                            delete Qa[t];
                            for (let t = 0, i = n.length; t < i; t++) {
                                const i = n[t];
                                i.onError && i.onError(e);
                            }
                            r.manager.itemError(t), r.manager.itemEnd(t);
                        },
                        !1
                    ),
                    void 0 !== this.responseType && (o.responseType = this.responseType),
                    void 0 !== this.withCredentials && (o.withCredentials = this.withCredentials),
                    o.overrideMimeType && o.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");
                for (const t in this.requestHeader) o.setRequestHeader(t, this.requestHeader[t]);
                o.send(null);
            }
            return r.manager.itemStart(t), o;
        }
        setResponseType(t) {
            return (this.responseType = t), this;
        }
        setMimeType(t) {
            return (this.mimeType = t), this;
        }
    }
    class $a extends Ja {
        constructor(t) {
            super(t);
        }
        load(t, e, n, i) {
            void 0 !== this.path && (t = this.path + t), (t = this.manager.resolveURL(t));
            const r = this,
                s = Xa.get(t);
            if (void 0 !== s)
                return (
                    r.manager.itemStart(t),
                    setTimeout(function () {
                        e && e(s), r.manager.itemEnd(t);
                    }, 0),
                    s
                );
            const a = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
            function o() {
                a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1), Xa.add(t, this), e && e(this), r.manager.itemEnd(t);
            }
            function l(e) {
                a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1), i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
            }
            return a.addEventListener("load", o, !1), a.addEventListener("error", l, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(t), (a.src = t), a;
        }
    }
    class to extends Ja {
        constructor(t) {
            super(t);
        }
        load(t, e, n, i) {
            const r = new Mn(),
                s = new $a(this.manager);
            s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
            let a = 0;
            function o(n) {
                s.load(
                    t[n],
                    function (t) {
                        (r.images[n] = t), a++, 6 === a && ((r.needsUpdate = !0), e && e(r));
                    },
                    void 0,
                    i
                );
            }
            for (let e = 0; e < t.length; ++e) o(e);
            return r;
        }
    }
    class eo extends Ja {
        constructor(t) {
            super(t);
        }
        load(t, e, n, i) {
            const r = new tt(),
                s = new $a(this.manager);
            return (
                s.setCrossOrigin(this.crossOrigin),
                s.setPath(this.path),
                s.load(
                    t,
                    function (n) {
                        r.image = n;
                        const i = t.search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/);
                        (r.format = i ? x : w), (r.needsUpdate = !0), void 0 !== e && e(r);
                    },
                    n,
                    i
                ),
                r
            );
        }
    }
    class no {
        constructor() {
            (this.type = "Curve"), (this.arcLengthDivisions = 200);
        }
        getPoint() {
            return console.warn("THREE.Curve: .getPoint() not implemented."), null;
        }
        getPointAt(t, e) {
            const n = this.getUtoTmapping(t);
            return this.getPoint(n, e);
        }
        getPoints(t = 5) {
            const e = [];
            for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
            return e;
        }
        getSpacedPoints(t = 5) {
            const e = [];
            for (let n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
            return e;
        }
        getLength() {
            const t = this.getLengths();
            return t[t.length - 1];
        }
        getLengths(t = this.arcLengthDivisions) {
            if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            const e = [];
            let n,
                i = this.getPoint(0),
                r = 0;
            e.push(0);
            for (let s = 1; s <= t; s++) (n = this.getPoint(s / t)), (r += n.distanceTo(i)), e.push(r), (i = n);
            return (this.cacheArcLengths = e), e;
        }
        updateArcLengths() {
            (this.needsUpdate = !0), this.getLengths();
        }
        getUtoTmapping(t, e) {
            const n = this.getLengths();
            let i = 0;
            const r = n.length;
            let s;
            s = e || t * n[r - 1];
            let a,
                o = 0,
                l = r - 1;
            for (; o <= l; )
                if (((i = Math.floor(o + (l - o) / 2)), (a = n[i] - s), a < 0)) o = i + 1;
                else {
                    if (!(a > 0)) {
                        l = i;
                        break;
                    }
                    l = i - 1;
                }
            if (((i = l), n[i] === s)) return i / (r - 1);
            const c = n[i];
            return (i + (s - c) / (n[i + 1] - c)) / (r - 1);
        }
        getTangent(t, e) {
            const n = 1e-4;
            let i = t - n,
                r = t + n;
            i < 0 && (i = 0), r > 1 && (r = 1);
            const s = this.getPoint(i),
                a = this.getPoint(r),
                o = e || (s.isVector2 ? new Z() : new st());
            return o.copy(a).sub(s).normalize(), o;
        }
        getTangentAt(t, e) {
            const n = this.getUtoTmapping(t);
            return this.getTangent(n, e);
        }
        computeFrenetFrames(t, e) {
            const n = new st(),
                i = [],
                r = [],
                s = [],
                a = new st(),
                o = new Ot();
            for (let e = 0; e <= t; e++) {
                const n = e / t;
                (i[e] = this.getTangentAt(n, new st())), i[e].normalize();
            }
            (r[0] = new st()), (s[0] = new st());
            let l = Number.MAX_VALUE;
            const c = Math.abs(i[0].x),
                h = Math.abs(i[0].y),
                u = Math.abs(i[0].z);
            c <= l && ((l = c), n.set(1, 0, 0)), h <= l && ((l = h), n.set(0, 1, 0)), u <= l && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), s[0].crossVectors(i[0], r[0]);
            for (let e = 1; e <= t; e++) {
                if (((r[e] = r[e - 1].clone()), (s[e] = s[e - 1].clone()), a.crossVectors(i[e - 1], i[e]), a.length() > Number.EPSILON)) {
                    a.normalize();
                    const t = Math.acos(W(i[e - 1].dot(i[e]), -1, 1));
                    r[e].applyMatrix4(o.makeRotationAxis(a, t));
                }
                s[e].crossVectors(i[e], r[e]);
            }
            if (!0 === e) {
                let e = Math.acos(W(r[0].dot(r[t]), -1, 1));
                (e /= t), i[0].dot(a.crossVectors(r[0], r[t])) > 0 && (e = -e);
                for (let n = 1; n <= t; n++) r[n].applyMatrix4(o.makeRotationAxis(i[n], e * n)), s[n].crossVectors(i[n], r[n]);
            }
            return { tangents: i, normals: r, binormals: s };
        }
        clone() {
            return new this.constructor().copy(this);
        }
        copy(t) {
            return (this.arcLengthDivisions = t.arcLengthDivisions), this;
        }
        toJSON() {
            const t = { metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" } };
            return (t.arcLengthDivisions = this.arcLengthDivisions), (t.type = this.type), t;
        }
        fromJSON(t) {
            return (this.arcLengthDivisions = t.arcLengthDivisions), this;
        }
    }
    class io extends no {
        constructor(t = 0, e = 0, n = 1, i = 1, r = 0, s = 2 * Math.PI, a = !1, o = 0) {
            super(), (this.type = "EllipseCurve"), (this.aX = t), (this.aY = e), (this.xRadius = n), (this.yRadius = i), (this.aStartAngle = r), (this.aEndAngle = s), (this.aClockwise = a), (this.aRotation = o);
        }
        getPoint(t, e) {
            const n = e || new Z(),
                i = 2 * Math.PI;
            let r = this.aEndAngle - this.aStartAngle;
            const s = Math.abs(r) < Number.EPSILON;
            for (; r < 0; ) r += i;
            for (; r > i; ) r -= i;
            r < Number.EPSILON && (r = s ? 0 : i), !0 !== this.aClockwise || s || (r === i ? (r = -i) : (r -= i));
            const a = this.aStartAngle + t * r;
            let o = this.aX + this.xRadius * Math.cos(a),
                l = this.aY + this.yRadius * Math.sin(a);
            if (0 !== this.aRotation) {
                const t = Math.cos(this.aRotation),
                    e = Math.sin(this.aRotation),
                    n = o - this.aX,
                    i = l - this.aY;
                (o = n * t - i * e + this.aX), (l = n * e + i * t + this.aY);
            }
            return n.set(o, l);
        }
        copy(t) {
            return (
                super.copy(t),
                (this.aX = t.aX),
                (this.aY = t.aY),
                (this.xRadius = t.xRadius),
                (this.yRadius = t.yRadius),
                (this.aStartAngle = t.aStartAngle),
                (this.aEndAngle = t.aEndAngle),
                (this.aClockwise = t.aClockwise),
                (this.aRotation = t.aRotation),
                this
            );
        }
        toJSON() {
            const t = super.toJSON();
            return (
                (t.aX = this.aX),
                (t.aY = this.aY),
                (t.xRadius = this.xRadius),
                (t.yRadius = this.yRadius),
                (t.aStartAngle = this.aStartAngle),
                (t.aEndAngle = this.aEndAngle),
                (t.aClockwise = this.aClockwise),
                (t.aRotation = this.aRotation),
                t
            );
        }
        fromJSON(t) {
            return (
                super.fromJSON(t),
                (this.aX = t.aX),
                (this.aY = t.aY),
                (this.xRadius = t.xRadius),
                (this.yRadius = t.yRadius),
                (this.aStartAngle = t.aStartAngle),
                (this.aEndAngle = t.aEndAngle),
                (this.aClockwise = t.aClockwise),
                (this.aRotation = t.aRotation),
                this
            );
        }
    }
    io.prototype.isEllipseCurve = !0;
    class ro extends io {
        constructor(t, e, n, i, r, s) {
            super(t, e, n, n, i, r, s), (this.type = "ArcCurve");
        }
    }
    function so() {
        let t = 0,
            e = 0,
            n = 0,
            i = 0;
        function r(r, s, a, o) {
            (t = r), (e = a), (n = -3 * r + 3 * s - 2 * a - o), (i = 2 * r - 2 * s + a + o);
        }
        return {
            initCatmullRom: function (t, e, n, i, s) {
                r(e, n, s * (n - t), s * (i - e));
            },
            initNonuniformCatmullRom: function (t, e, n, i, s, a, o) {
                let l = (e - t) / s - (n - t) / (s + a) + (n - e) / a,
                    c = (n - e) / a - (i - e) / (a + o) + (i - n) / o;
                (l *= a), (c *= a), r(e, n, l, c);
            },
            calc: function (r) {
                const s = r * r;
                return t + e * r + n * s + i * (s * r);
            },
        };
    }
    ro.prototype.isArcCurve = !0;
    const ao = new st(),
        oo = new so(),
        lo = new so(),
        co = new so();
    class ho extends no {
        constructor(t = [], e = !1, n = "centripetal", i = 0.5) {
            super(), (this.type = "CatmullRomCurve3"), (this.points = t), (this.closed = e), (this.curveType = n), (this.tension = i);
        }
        getPoint(t, e = new st()) {
            const n = e,
                i = this.points,
                r = i.length,
                s = (r - (this.closed ? 0 : 1)) * t;
            let a,
                o,
                l = Math.floor(s),
                c = s - l;
            this.closed ? (l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r) : 0 === c && l === r - 1 && ((l = r - 2), (c = 1)), this.closed || l > 0 ? (a = i[(l - 1) % r]) : (ao.subVectors(i[0], i[1]).add(i[0]), (a = ao));
            const h = i[l % r],
                u = i[(l + 1) % r];
            if ((this.closed || l + 2 < r ? (o = i[(l + 2) % r]) : (ao.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), (o = ao)), "centripetal" === this.curveType || "chordal" === this.curveType)) {
                const t = "chordal" === this.curveType ? 0.5 : 0.25;
                let e = Math.pow(a.distanceToSquared(h), t),
                    n = Math.pow(h.distanceToSquared(u), t),
                    i = Math.pow(u.distanceToSquared(o), t);
                n < 1e-4 && (n = 1),
                    e < 1e-4 && (e = n),
                    i < 1e-4 && (i = n),
                    oo.initNonuniformCatmullRom(a.x, h.x, u.x, o.x, e, n, i),
                    lo.initNonuniformCatmullRom(a.y, h.y, u.y, o.y, e, n, i),
                    co.initNonuniformCatmullRom(a.z, h.z, u.z, o.z, e, n, i);
            } else "catmullrom" === this.curveType && (oo.initCatmullRom(a.x, h.x, u.x, o.x, this.tension), lo.initCatmullRom(a.y, h.y, u.y, o.y, this.tension), co.initCatmullRom(a.z, h.z, u.z, o.z, this.tension));
            return n.set(oo.calc(c), lo.calc(c), co.calc(c)), n;
        }
        copy(t) {
            super.copy(t), (this.points = []);
            for (let e = 0, n = t.points.length; e < n; e++) {
                const n = t.points[e];
                this.points.push(n.clone());
            }
            return (this.closed = t.closed), (this.curveType = t.curveType), (this.tension = t.tension), this;
        }
        toJSON() {
            const t = super.toJSON();
            t.points = [];
            for (let e = 0, n = this.points.length; e < n; e++) {
                const n = this.points[e];
                t.points.push(n.toArray());
            }
            return (t.closed = this.closed), (t.curveType = this.curveType), (t.tension = this.tension), t;
        }
        fromJSON(t) {
            super.fromJSON(t), (this.points = []);
            for (let e = 0, n = t.points.length; e < n; e++) {
                const n = t.points[e];
                this.points.push(new st().fromArray(n));
            }
            return (this.closed = t.closed), (this.curveType = t.curveType), (this.tension = t.tension), this;
        }
    }
    function uo(t, e, n, i, r) {
        const s = 0.5 * (i - e),
            a = 0.5 * (r - n),
            o = t * t;
        return (2 * n - 2 * i + s + a) * (t * o) + (-3 * n + 3 * i - 2 * s - a) * o + s * t + n;
    }
    function po(t, e, n, i) {
        return (
            (function (t, e) {
                const n = 1 - t;
                return n * n * e;
            })(t, e) +
            (function (t, e) {
                return 2 * (1 - t) * t * e;
            })(t, n) +
            (function (t, e) {
                return t * t * e;
            })(t, i)
        );
    }
    function fo(t, e, n, i, r) {
        return (
            (function (t, e) {
                const n = 1 - t;
                return n * n * n * e;
            })(t, e) +
            (function (t, e) {
                const n = 1 - t;
                return 3 * n * n * t * e;
            })(t, n) +
            (function (t, e) {
                return 3 * (1 - t) * t * t * e;
            })(t, i) +
            (function (t, e) {
                return t * t * t * e;
            })(t, r)
        );
    }
    ho.prototype.isCatmullRomCurve3 = !0;
    class mo extends no {
        constructor(t = new Z(), e = new Z(), n = new Z(), i = new Z()) {
            super(), (this.type = "CubicBezierCurve"), (this.v0 = t), (this.v1 = e), (this.v2 = n), (this.v3 = i);
        }
        getPoint(t, e = new Z()) {
            const n = e,
                i = this.v0,
                r = this.v1,
                s = this.v2,
                a = this.v3;
            return n.set(fo(t, i.x, r.x, s.x, a.x), fo(t, i.y, r.y, s.y, a.y)), n;
        }
        copy(t) {
            return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
        }
        toJSON() {
            const t = super.toJSON();
            return (t.v0 = this.v0.toArray()), (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), (t.v3 = this.v3.toArray()), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
        }
    }
    mo.prototype.isCubicBezierCurve = !0;
    class go extends no {
        constructor(t = new st(), e = new st(), n = new st(), i = new st()) {
            super(), (this.type = "CubicBezierCurve3"), (this.v0 = t), (this.v1 = e), (this.v2 = n), (this.v3 = i);
        }
        getPoint(t, e = new st()) {
            const n = e,
                i = this.v0,
                r = this.v1,
                s = this.v2,
                a = this.v3;
            return n.set(fo(t, i.x, r.x, s.x, a.x), fo(t, i.y, r.y, s.y, a.y), fo(t, i.z, r.z, s.z, a.z)), n;
        }
        copy(t) {
            return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
        }
        toJSON() {
            const t = super.toJSON();
            return (t.v0 = this.v0.toArray()), (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), (t.v3 = this.v3.toArray()), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
        }
    }
    go.prototype.isCubicBezierCurve3 = !0;
    class vo extends no {
        constructor(t = new Z(), e = new Z()) {
            super(), (this.type = "LineCurve"), (this.v1 = t), (this.v2 = e);
        }
        getPoint(t, e = new Z()) {
            const n = e;
            return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
        }
        getPointAt(t, e) {
            return this.getPoint(t, e);
        }
        getTangent(t, e) {
            const n = e || new Z();
            return n.copy(this.v2).sub(this.v1).normalize(), n;
        }
        copy(t) {
            return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
        }
        toJSON() {
            const t = super.toJSON();
            return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
        }
    }
    vo.prototype.isLineCurve = !0;
    class yo extends no {
        constructor(t = new Z(), e = new Z(), n = new Z()) {
            super(), (this.type = "QuadraticBezierCurve"), (this.v0 = t), (this.v1 = e), (this.v2 = n);
        }
        getPoint(t, e = new Z()) {
            const n = e,
                i = this.v0,
                r = this.v1,
                s = this.v2;
            return n.set(po(t, i.x, r.x, s.x), po(t, i.y, r.y, s.y)), n;
        }
        copy(t) {
            return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
        }
        toJSON() {
            const t = super.toJSON();
            return (t.v0 = this.v0.toArray()), (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
        }
    }
    yo.prototype.isQuadraticBezierCurve = !0;
    class _o extends no {
        constructor(t = new st(), e = new st(), n = new st()) {
            super(), (this.type = "QuadraticBezierCurve3"), (this.v0 = t), (this.v1 = e), (this.v2 = n);
        }
        getPoint(t, e = new st()) {
            const n = e,
                i = this.v0,
                r = this.v1,
                s = this.v2;
            return n.set(po(t, i.x, r.x, s.x), po(t, i.y, r.y, s.y), po(t, i.z, r.z, s.z)), n;
        }
        copy(t) {
            return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
        }
        toJSON() {
            const t = super.toJSON();
            return (t.v0 = this.v0.toArray()), (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
        }
    }
    _o.prototype.isQuadraticBezierCurve3 = !0;
    class xo extends no {
        constructor(t = []) {
            super(), (this.type = "SplineCurve"), (this.points = t);
        }
        getPoint(t, e = new Z()) {
            const n = e,
                i = this.points,
                r = (i.length - 1) * t,
                s = Math.floor(r),
                a = r - s,
                o = i[0 === s ? s : s - 1],
                l = i[s],
                c = i[s > i.length - 2 ? i.length - 1 : s + 1],
                h = i[s > i.length - 3 ? i.length - 1 : s + 2];
            return n.set(uo(a, o.x, l.x, c.x, h.x), uo(a, o.y, l.y, c.y, h.y)), n;
        }
        copy(t) {
            super.copy(t), (this.points = []);
            for (let e = 0, n = t.points.length; e < n; e++) {
                const n = t.points[e];
                this.points.push(n.clone());
            }
            return this;
        }
        toJSON() {
            const t = super.toJSON();
            t.points = [];
            for (let e = 0, n = this.points.length; e < n; e++) {
                const n = this.points[e];
                t.points.push(n.toArray());
            }
            return t;
        }
        fromJSON(t) {
            super.fromJSON(t), (this.points = []);
            for (let e = 0, n = t.points.length; e < n; e++) {
                const n = t.points[e];
                this.points.push(new Z().fromArray(n));
            }
            return this;
        }
    }
    xo.prototype.isSplineCurve = !0;
    var wo = Object.freeze({
        __proto__: null,
        ArcCurve: ro,
        CatmullRomCurve3: ho,
        CubicBezierCurve: mo,
        CubicBezierCurve3: go,
        EllipseCurve: io,
        LineCurve: vo,
        LineCurve3: class extends no {
            constructor(t = new st(), e = new st()) {
                super(), (this.type = "LineCurve3"), (this.isLineCurve3 = !0), (this.v1 = t), (this.v2 = e);
            }
            getPoint(t, e = new st()) {
                const n = e;
                return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
            }
            getPointAt(t, e) {
                return this.getPoint(t, e);
            }
            copy(t) {
                return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
            }
            toJSON() {
                const t = super.toJSON();
                return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
            }
            fromJSON(t) {
                return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
            }
        },
        QuadraticBezierCurve: yo,
        QuadraticBezierCurve3: _o,
        SplineCurve: xo,
    });
    class bo extends no {
        constructor() {
            super(), (this.type = "CurvePath"), (this.curves = []), (this.autoClose = !1);
        }
        add(t) {
            this.curves.push(t);
        }
        closePath() {
            const t = this.curves[0].getPoint(0),
                e = this.curves[this.curves.length - 1].getPoint(1);
            t.equals(e) || this.curves.push(new vo(e, t));
        }
        getPoint(t) {
            const e = t * this.getLength(),
                n = this.getCurveLengths();
            let i = 0;
            for (; i < n.length; ) {
                if (n[i] >= e) {
                    const t = n[i] - e,
                        r = this.curves[i],
                        s = r.getLength(),
                        a = 0 === s ? 0 : 1 - t / s;
                    return r.getPointAt(a);
                }
                i++;
            }
            return null;
        }
        getLength() {
            const t = this.getCurveLengths();
            return t[t.length - 1];
        }
        updateArcLengths() {
            (this.needsUpdate = !0), (this.cacheLengths = null), this.getCurveLengths();
        }
        getCurveLengths() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
            const t = [];
            let e = 0;
            for (let n = 0, i = this.curves.length; n < i; n++) (e += this.curves[n].getLength()), t.push(e);
            return (this.cacheLengths = t), t;
        }
        getSpacedPoints(t = 40) {
            const e = [];
            for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
            return this.autoClose && e.push(e[0]), e;
        }
        getPoints(t = 12) {
            const e = [];
            let n;
            for (let i = 0, r = this.curves; i < r.length; i++) {
                const s = r[i],
                    a = s && s.isEllipseCurve ? 2 * t : s && (s.isLineCurve || s.isLineCurve3) ? 1 : s && s.isSplineCurve ? t * s.points.length : t,
                    o = s.getPoints(a);
                for (let t = 0; t < o.length; t++) {
                    const i = o[t];
                    (n && n.equals(i)) || (e.push(i), (n = i));
                }
            }
            return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
        }
        copy(t) {
            super.copy(t), (this.curves = []);
            for (let e = 0, n = t.curves.length; e < n; e++) {
                const n = t.curves[e];
                this.curves.push(n.clone());
            }
            return (this.autoClose = t.autoClose), this;
        }
        toJSON() {
            const t = super.toJSON();
            (t.autoClose = this.autoClose), (t.curves = []);
            for (let e = 0, n = this.curves.length; e < n; e++) {
                const n = this.curves[e];
                t.curves.push(n.toJSON());
            }
            return t;
        }
        fromJSON(t) {
            super.fromJSON(t), (this.autoClose = t.autoClose), (this.curves = []);
            for (let e = 0, n = t.curves.length; e < n; e++) {
                const n = t.curves[e];
                this.curves.push(new wo[n.type]().fromJSON(n));
            }
            return this;
        }
    }
    class Mo extends bo {
        constructor(t) {
            super(), (this.type = "Path"), (this.currentPoint = new Z()), t && this.setFromPoints(t);
        }
        setFromPoints(t) {
            this.moveTo(t[0].x, t[0].y);
            for (let e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y);
            return this;
        }
        moveTo(t, e) {
            return this.currentPoint.set(t, e), this;
        }
        lineTo(t, e) {
            const n = new vo(this.currentPoint.clone(), new Z(t, e));
            return this.curves.push(n), this.currentPoint.set(t, e), this;
        }
        quadraticCurveTo(t, e, n, i) {
            const r = new yo(this.currentPoint.clone(), new Z(t, e), new Z(n, i));
            return this.curves.push(r), this.currentPoint.set(n, i), this;
        }
        bezierCurveTo(t, e, n, i, r, s) {
            const a = new mo(this.currentPoint.clone(), new Z(t, e), new Z(n, i), new Z(r, s));
            return this.curves.push(a), this.currentPoint.set(r, s), this;
        }
        splineThru(t) {
            const e = [this.currentPoint.clone()].concat(t),
                n = new xo(e);
            return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this;
        }
        arc(t, e, n, i, r, s) {
            const a = this.currentPoint.x,
                o = this.currentPoint.y;
            return this.absarc(t + a, e + o, n, i, r, s), this;
        }
        absarc(t, e, n, i, r, s) {
            return this.absellipse(t, e, n, n, i, r, s), this;
        }
        ellipse(t, e, n, i, r, s, a, o) {
            const l = this.currentPoint.x,
                c = this.currentPoint.y;
            return this.absellipse(t + l, e + c, n, i, r, s, a, o), this;
        }
        absellipse(t, e, n, i, r, s, a, o) {
            const l = new io(t, e, n, i, r, s, a, o);
            if (this.curves.length > 0) {
                const t = l.getPoint(0);
                t.equals(this.currentPoint) || this.lineTo(t.x, t.y);
            }
            this.curves.push(l);
            const c = l.getPoint(1);
            return this.currentPoint.copy(c), this;
        }
        copy(t) {
            return super.copy(t), this.currentPoint.copy(t.currentPoint), this;
        }
        toJSON() {
            const t = super.toJSON();
            return (t.currentPoint = this.currentPoint.toArray()), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this;
        }
    }
    class So extends Mo {
        constructor(t) {
            super(t), (this.uuid = V()), (this.type = "Shape"), (this.holes = []);
        }
        getPointsHoles(t) {
            const e = [];
            for (let n = 0, i = this.holes.length; n < i; n++) e[n] = this.holes[n].getPoints(t);
            return e;
        }
        extractPoints(t) {
            return { shape: this.getPoints(t), holes: this.getPointsHoles(t) };
        }
        copy(t) {
            super.copy(t), (this.holes = []);
            for (let e = 0, n = t.holes.length; e < n; e++) {
                const n = t.holes[e];
                this.holes.push(n.clone());
            }
            return this;
        }
        toJSON() {
            const t = super.toJSON();
            (t.uuid = this.uuid), (t.holes = []);
            for (let e = 0, n = this.holes.length; e < n; e++) {
                const n = this.holes[e];
                t.holes.push(n.toJSON());
            }
            return t;
        }
        fromJSON(t) {
            super.fromJSON(t), (this.uuid = t.uuid), (this.holes = []);
            for (let e = 0, n = t.holes.length; e < n; e++) {
                const n = t.holes[e];
                this.holes.push(new Mo().fromJSON(n));
            }
            return this;
        }
    }
    class To extends oe {
        constructor(t, e = 1) {
            super(), (this.type = "Light"), (this.color = new Pe(t)), (this.intensity = e);
        }
        dispose() {}
        copy(t) {
            return super.copy(t), this.color.copy(t.color), (this.intensity = t.intensity), this;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return (
                (e.object.color = this.color.getHex()),
                (e.object.intensity = this.intensity),
                void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()),
                void 0 !== this.distance && (e.object.distance = this.distance),
                void 0 !== this.angle && (e.object.angle = this.angle),
                void 0 !== this.decay && (e.object.decay = this.decay),
                void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
                void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()),
                e
            );
        }
    }
    To.prototype.isLight = !0;
    class Eo extends To {
        constructor(t, e, n) {
            super(t, n), (this.type = "HemisphereLight"), this.position.copy(oe.DefaultUp), this.updateMatrix(), (this.groundColor = new Pe(e));
        }
        copy(t) {
            return To.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this;
        }
    }
    Eo.prototype.isHemisphereLight = !0;
    const Ao = new Ot(),
        Lo = new st(),
        Ro = new st();
    class Co {
        constructor(t) {
            (this.camera = t),
                (this.bias = 0),
                (this.normalBias = 0),
                (this.radius = 1),
                (this.mapSize = new Z(512, 512)),
                (this.map = null),
                (this.mapPass = null),
                (this.matrix = new Ot()),
                (this.autoUpdate = !0),
                (this.needsUpdate = !1),
                (this._frustum = new An()),
                (this._frameExtents = new Z(1, 1)),
                (this._viewportCount = 1),
                (this._viewports = [new nt(0, 0, 1, 1)]);
        }
        getViewportCount() {
            return this._viewportCount;
        }
        getFrustum() {
            return this._frustum;
        }
        updateMatrices(t) {
            const e = this.camera,
                n = this.matrix;
            Lo.setFromMatrixPosition(t.matrixWorld),
                e.position.copy(Lo),
                Ro.setFromMatrixPosition(t.target.matrixWorld),
                e.lookAt(Ro),
                e.updateMatrixWorld(),
                Ao.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
                this._frustum.setFromProjectionMatrix(Ao),
                n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
                n.multiply(e.projectionMatrix),
                n.multiply(e.matrixWorldInverse);
        }
        getViewport(t) {
            return this._viewports[t];
        }
        getFrameExtents() {
            return this._frameExtents;
        }
        dispose() {
            this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
        }
        copy(t) {
            return (this.camera = t.camera.clone()), (this.bias = t.bias), (this.radius = t.radius), this.mapSize.copy(t.mapSize), this;
        }
        clone() {
            return new this.constructor().copy(this);
        }
        toJSON() {
            const t = {};
            return (
                0 !== this.bias && (t.bias = this.bias),
                0 !== this.normalBias && (t.normalBias = this.normalBias),
                1 !== this.radius && (t.radius = this.radius),
                (512 === this.mapSize.x && 512 === this.mapSize.y) || (t.mapSize = this.mapSize.toArray()),
                (t.camera = this.camera.toJSON(!1).object),
                delete t.camera.matrix,
                t
            );
        }
    }
    class Po extends Co {
        constructor() {
            super(new xn(50, 1, 0.5, 500)), (this.focus = 1);
        }
        updateMatrices(t) {
            const e = this.camera,
                n = 2 * G * t.angle * this.focus,
                i = this.mapSize.width / this.mapSize.height,
                r = t.distance || e.far;
            (n === e.fov && i === e.aspect && r === e.far) || ((e.fov = n), (e.aspect = i), (e.far = r), e.updateProjectionMatrix()), super.updateMatrices(t);
        }
        copy(t) {
            return super.copy(t), (this.focus = t.focus), this;
        }
    }
    Po.prototype.isSpotLightShadow = !0;
    class Do extends To {
        constructor(t, e, n = 0, i = Math.PI / 3, r = 0, s = 1) {
            super(t, e), (this.type = "SpotLight"), this.position.copy(oe.DefaultUp), this.updateMatrix(), (this.target = new oe()), (this.distance = n), (this.angle = i), (this.penumbra = r), (this.decay = s), (this.shadow = new Po());
        }
        get power() {
            return this.intensity * Math.PI;
        }
        set power(t) {
            this.intensity = t / Math.PI;
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(t) {
            return super.copy(t), (this.distance = t.distance), (this.angle = t.angle), (this.penumbra = t.penumbra), (this.decay = t.decay), (this.target = t.target.clone()), (this.shadow = t.shadow.clone()), this;
        }
    }
    Do.prototype.isSpotLight = !0;
    const Io = new Ot(),
        No = new st(),
        zo = new st();
    class Oo extends Co {
        constructor() {
            super(new xn(90, 1, 0.5, 500)),
                (this._frameExtents = new Z(4, 2)),
                (this._viewportCount = 6),
                (this._viewports = [new nt(2, 1, 1, 1), new nt(0, 1, 1, 1), new nt(3, 1, 1, 1), new nt(1, 1, 1, 1), new nt(3, 0, 1, 1), new nt(1, 0, 1, 1)]),
                (this._cubeDirections = [new st(1, 0, 0), new st(-1, 0, 0), new st(0, 0, 1), new st(0, 0, -1), new st(0, 1, 0), new st(0, -1, 0)]),
                (this._cubeUps = [new st(0, 1, 0), new st(0, 1, 0), new st(0, 1, 0), new st(0, 1, 0), new st(0, 0, 1), new st(0, 0, -1)]);
        }
        updateMatrices(t, e = 0) {
            const n = this.camera,
                i = this.matrix,
                r = t.distance || n.far;
            r !== n.far && ((n.far = r), n.updateProjectionMatrix()),
                No.setFromMatrixPosition(t.matrixWorld),
                n.position.copy(No),
                zo.copy(n.position),
                zo.add(this._cubeDirections[e]),
                n.up.copy(this._cubeUps[e]),
                n.lookAt(zo),
                n.updateMatrixWorld(),
                i.makeTranslation(-No.x, -No.y, -No.z),
                Io.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
                this._frustum.setFromProjectionMatrix(Io);
        }
    }
    Oo.prototype.isPointLightShadow = !0;
    class Bo extends To {
        constructor(t, e, n = 0, i = 1) {
            super(t, e), (this.type = "PointLight"), (this.distance = n), (this.decay = i), (this.shadow = new Oo());
        }
        get power() {
            return 4 * this.intensity * Math.PI;
        }
        set power(t) {
            this.intensity = t / (4 * Math.PI);
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(t) {
            return super.copy(t), (this.distance = t.distance), (this.decay = t.decay), (this.shadow = t.shadow.clone()), this;
        }
    }
    Bo.prototype.isPointLight = !0;
    class Fo extends _n {
        constructor(t = -1, e = 1, n = 1, i = -1, r = 0.1, s = 2e3) {
            super(), (this.type = "OrthographicCamera"), (this.zoom = 1), (this.view = null), (this.left = t), (this.right = e), (this.top = n), (this.bottom = i), (this.near = r), (this.far = s), this.updateProjectionMatrix();
        }
        copy(t, e) {
            return (
                super.copy(t, e),
                (this.left = t.left),
                (this.right = t.right),
                (this.top = t.top),
                (this.bottom = t.bottom),
                (this.near = t.near),
                (this.far = t.far),
                (this.zoom = t.zoom),
                (this.view = null === t.view ? null : Object.assign({}, t.view)),
                this
            );
        }
        setViewOffset(t, e, n, i, r, s) {
            null === this.view && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }),
                (this.view.enabled = !0),
                (this.view.fullWidth = t),
                (this.view.fullHeight = e),
                (this.view.offsetX = n),
                (this.view.offsetY = i),
                (this.view.width = r),
                (this.view.height = s),
                this.updateProjectionMatrix();
        }
        clearViewOffset() {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
            const t = (this.right - this.left) / (2 * this.zoom),
                e = (this.top - this.bottom) / (2 * this.zoom),
                n = (this.right + this.left) / 2,
                i = (this.top + this.bottom) / 2;
            let r = n - t,
                s = n + t,
                a = i + e,
                o = i - e;
            if (null !== this.view && this.view.enabled) {
                const t = (this.right - this.left) / this.view.fullWidth / this.zoom,
                    e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                (r += t * this.view.offsetX), (s = r + t * this.view.width), (a -= e * this.view.offsetY), (o = a - e * this.view.height);
            }
            this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return (
                (e.object.zoom = this.zoom),
                (e.object.left = this.left),
                (e.object.right = this.right),
                (e.object.top = this.top),
                (e.object.bottom = this.bottom),
                (e.object.near = this.near),
                (e.object.far = this.far),
                null !== this.view && (e.object.view = Object.assign({}, this.view)),
                e
            );
        }
    }
    Fo.prototype.isOrthographicCamera = !0;
    class Ho extends Co {
        constructor() {
            super(new Fo(-5, 5, 5, -5, 0.5, 500));
        }
    }
    Ho.prototype.isDirectionalLightShadow = !0;
    class Uo extends To {
        constructor(t, e) {
            super(t, e), (this.type = "DirectionalLight"), this.position.copy(oe.DefaultUp), this.updateMatrix(), (this.target = new oe()), (this.shadow = new Ho());
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(t) {
            return super.copy(t), (this.target = t.target.clone()), (this.shadow = t.shadow.clone()), this;
        }
    }
    Uo.prototype.isDirectionalLight = !0;
    class ko extends To {
        constructor(t, e) {
            super(t, e), (this.type = "AmbientLight");
        }
    }
    ko.prototype.isAmbientLight = !0;
    class Go extends To {
        constructor(t, e, n = 10, i = 10) {
            super(t, e), (this.type = "RectAreaLight"), (this.width = n), (this.height = i);
        }
        copy(t) {
            return super.copy(t), (this.width = t.width), (this.height = t.height), this;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return (e.object.width = this.width), (e.object.height = this.height), e;
        }
    }
    Go.prototype.isRectAreaLight = !0;
    class Vo {
        constructor() {
            this.coefficients = [];
            for (let t = 0; t < 9; t++) this.coefficients.push(new st());
        }
        set(t) {
            for (let e = 0; e < 9; e++) this.coefficients[e].copy(t[e]);
            return this;
        }
        zero() {
            for (let t = 0; t < 9; t++) this.coefficients[t].set(0, 0, 0);
            return this;
        }
        getAt(t, e) {
            const n = t.x,
                i = t.y,
                r = t.z,
                s = this.coefficients;
            return (
                e.copy(s[0]).multiplyScalar(0.282095),
                e.addScaledVector(s[1], 0.488603 * i),
                e.addScaledVector(s[2], 0.488603 * r),
                e.addScaledVector(s[3], 0.488603 * n),
                e.addScaledVector(s[4], n * i * 1.092548),
                e.addScaledVector(s[5], i * r * 1.092548),
                e.addScaledVector(s[6], 0.315392 * (3 * r * r - 1)),
                e.addScaledVector(s[7], n * r * 1.092548),
                e.addScaledVector(s[8], 0.546274 * (n * n - i * i)),
                e
            );
        }
        getIrradianceAt(t, e) {
            const n = t.x,
                i = t.y,
                r = t.z,
                s = this.coefficients;
            return (
                e.copy(s[0]).multiplyScalar(0.886227),
                e.addScaledVector(s[1], 1.023328 * i),
                e.addScaledVector(s[2], 1.023328 * r),
                e.addScaledVector(s[3], 1.023328 * n),
                e.addScaledVector(s[4], 0.858086 * n * i),
                e.addScaledVector(s[5], 0.858086 * i * r),
                e.addScaledVector(s[6], 0.743125 * r * r - 0.247708),
                e.addScaledVector(s[7], 0.858086 * n * r),
                e.addScaledVector(s[8], 0.429043 * (n * n - i * i)),
                e
            );
        }
        add(t) {
            for (let e = 0; e < 9; e++) this.coefficients[e].add(t.coefficients[e]);
            return this;
        }
        addScaledSH(t, e) {
            for (let n = 0; n < 9; n++) this.coefficients[n].addScaledVector(t.coefficients[n], e);
            return this;
        }
        scale(t) {
            for (let e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t);
            return this;
        }
        lerp(t, e) {
            for (let n = 0; n < 9; n++) this.coefficients[n].lerp(t.coefficients[n], e);
            return this;
        }
        equals(t) {
            for (let e = 0; e < 9; e++) if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
            return !0;
        }
        copy(t) {
            return this.set(t.coefficients);
        }
        clone() {
            return new this.constructor().copy(this);
        }
        fromArray(t, e = 0) {
            const n = this.coefficients;
            for (let i = 0; i < 9; i++) n[i].fromArray(t, e + 3 * i);
            return this;
        }
        toArray(t = [], e = 0) {
            const n = this.coefficients;
            for (let i = 0; i < 9; i++) n[i].toArray(t, e + 3 * i);
            return t;
        }
        static getBasisAt(t, e) {
            const n = t.x,
                i = t.y,
                r = t.z;
            (e[0] = 0.282095),
                (e[1] = 0.488603 * i),
                (e[2] = 0.488603 * r),
                (e[3] = 0.488603 * n),
                (e[4] = 1.092548 * n * i),
                (e[5] = 1.092548 * i * r),
                (e[6] = 0.315392 * (3 * r * r - 1)),
                (e[7] = 1.092548 * n * r),
                (e[8] = 0.546274 * (n * n - i * i));
        }
    }
    Vo.prototype.isSphericalHarmonics3 = !0;
    class Wo extends To {
        constructor(t = new Vo(), e = 1) {
            super(void 0, e), (this.sh = t);
        }
        copy(t) {
            return super.copy(t), this.sh.copy(t.sh), this;
        }
        fromJSON(t) {
            return (this.intensity = t.intensity), this.sh.fromArray(t.sh), this;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return (e.object.sh = this.sh.toArray()), e;
        }
    }
    Wo.prototype.isLightProbe = !0;
    class jo {
        static decodeText(t) {
            if ("undefined" != typeof TextDecoder) return new TextDecoder().decode(t);
            let e = "";
            for (let n = 0, i = t.length; n < i; n++) e += String.fromCharCode(t[n]);
            try {
                return decodeURIComponent(escape(e));
            } catch (t) {
                return e;
            }
        }
        static extractUrlBase(t) {
            const e = t.lastIndexOf("/");
            return -1 === e ? "./" : t.substr(0, e + 1);
        }
    }
    class qo extends Xe {
        constructor() {
            super(), (this.type = "InstancedBufferGeometry"), (this.instanceCount = 1 / 0);
        }
        copy(t) {
            return super.copy(t), (this.instanceCount = t.instanceCount), this;
        }
        clone() {
            return new this.constructor().copy(this);
        }
        toJSON() {
            const t = super.toJSON(this);
            return (t.instanceCount = this.instanceCount), (t.isInstancedBufferGeometry = !0), t;
        }
    }
    qo.prototype.isInstancedBufferGeometry = !0;
    class Xo extends ze {
        constructor(t, e, n, i) {
            "number" == typeof n && ((i = n), (n = !1), console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), super(t, e, n), (this.meshPerAttribute = i || 1);
        }
        copy(t) {
            return super.copy(t), (this.meshPerAttribute = t.meshPerAttribute), this;
        }
        toJSON() {
            const t = super.toJSON();
            return (t.meshPerAttribute = this.meshPerAttribute), (t.isInstancedBufferAttribute = !0), t;
        }
    }
    Xo.prototype.isInstancedBufferAttribute = !0;
    (class extends Ja {
        constructor(t) {
            super(t),
                "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),
                "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
                (this.options = { premultiplyAlpha: "none" });
        }
        setOptions(t) {
            return (this.options = t), this;
        }
        load(t, e, n, i) {
            void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), (t = this.manager.resolveURL(t));
            const r = this,
                s = Xa.get(t);
            if (void 0 !== s)
                return (
                    r.manager.itemStart(t),
                    setTimeout(function () {
                        e && e(s), r.manager.itemEnd(t);
                    }, 0),
                    s
                );
            const a = {};
            (a.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include"),
                (a.headers = this.requestHeader),
                fetch(t, a)
                    .then(function (t) {
                        return t.blob();
                    })
                    .then(function (t) {
                        return createImageBitmap(t, Object.assign(r.options, { colorSpaceConversion: "none" }));
                    })
                    .then(function (n) {
                        Xa.add(t, n), e && e(n), r.manager.itemEnd(t);
                    })
                    .catch(function (e) {
                        i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
                    }),
                r.manager.itemStart(t);
        }
    }.prototype.isImageBitmapLoader = !0);
    class Yo {
        constructor() {
            (this.type = "ShapePath"), (this.color = new Pe()), (this.subPaths = []), (this.currentPath = null);
        }
        moveTo(t, e) {
            return (this.currentPath = new Mo()), this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e), this;
        }
        lineTo(t, e) {
            return this.currentPath.lineTo(t, e), this;
        }
        quadraticCurveTo(t, e, n, i) {
            return this.currentPath.quadraticCurveTo(t, e, n, i), this;
        }
        bezierCurveTo(t, e, n, i, r, s) {
            return this.currentPath.bezierCurveTo(t, e, n, i, r, s), this;
        }
        splineThru(t) {
            return this.currentPath.splineThru(t), this;
        }
        toShapes(t, e) {
            function n(t) {
                const e = [];
                for (let n = 0, i = t.length; n < i; n++) {
                    const i = t[n],
                        r = new So();
                    (r.curves = i.curves), e.push(r);
                }
                return e;
            }
            function i(t, e) {
                const n = e.length;
                let i = !1;
                for (let r = n - 1, s = 0; s < n; r = s++) {
                    let n = e[r],
                        a = e[s],
                        o = a.x - n.x,
                        l = a.y - n.y;
                    if (Math.abs(l) > Number.EPSILON) {
                        if ((l < 0 && ((n = e[s]), (o = -o), (a = e[r]), (l = -l)), t.y < n.y || t.y > a.y)) continue;
                        if (t.y === n.y) {
                            if (t.x === n.x) return !0;
                        } else {
                            const e = l * (t.x - n.x) - o * (t.y - n.y);
                            if (0 === e) return !0;
                            if (e < 0) continue;
                            i = !i;
                        }
                    } else {
                        if (t.y !== n.y) continue;
                        if ((a.x <= t.x && t.x <= n.x) || (n.x <= t.x && t.x <= a.x)) return !0;
                    }
                }
                return i;
            }
            const r = ma.isClockWise,
                s = this.subPaths;
            if (0 === s.length) return [];
            if (!0 === e) return n(s);
            let a, o, l;
            const c = [];
            if (1 === s.length) return (o = s[0]), (l = new So()), (l.curves = o.curves), c.push(l), c;
            let h = !r(s[0].getPoints());
            h = t ? !h : h;
            const u = [],
                d = [];
            let p,
                f,
                m = [],
                g = 0;
            (d[g] = void 0), (m[g] = []);
            for (let e = 0, n = s.length; e < n; e++)
                (o = s[e]), (p = o.getPoints()), (a = r(p)), (a = t ? !a : a), a ? (!h && d[g] && g++, (d[g] = { s: new So(), p: p }), (d[g].s.curves = o.curves), h && g++, (m[g] = [])) : m[g].push({ h: o, p: p[0] });
            if (!d[0]) return n(s);
            if (d.length > 1) {
                let t = !1;
                const e = [];
                for (let t = 0, e = d.length; t < e; t++) u[t] = [];
                for (let n = 0, r = d.length; n < r; n++) {
                    const r = m[n];
                    for (let s = 0; s < r.length; s++) {
                        const a = r[s];
                        let o = !0;
                        for (let r = 0; r < d.length; r++) i(a.p, d[r].p) && (n !== r && e.push({ froms: n, tos: r, hole: s }), o ? ((o = !1), u[r].push(a)) : (t = !0));
                        o && u[n].push(a);
                    }
                }
                e.length > 0 && (t || (m = u));
            }
            for (let t = 0, e = d.length; t < e; t++) {
                (l = d[t].s), c.push(l), (f = m[t]);
                for (let t = 0, e = f.length; t < e; t++) l.holes.push(f[t].h);
            }
            return c;
        }
    }
    class Zo {
        constructor(t) {
            (this.type = "Font"), (this.data = t);
        }
        generateShapes(t, e = 100) {
            const n = [],
                i = (function (t, e, n) {
                    const i = Array.from(t),
                        r = e / n.resolution,
                        s = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * r,
                        a = [];
                    let o = 0,
                        l = 0;
                    for (let t = 0; t < i.length; t++) {
                        const e = i[t];
                        if ("\n" === e) (o = 0), (l -= s);
                        else {
                            const t = Jo(e, r, o, l, n);
                            (o += t.offsetX), a.push(t.path);
                        }
                    }
                    return a;
                })(t, e, this.data);
            for (let t = 0, e = i.length; t < e; t++) Array.prototype.push.apply(n, i[t].toShapes());
            return n;
        }
    }
    function Jo(t, e, n, i, r) {
        const s = r.glyphs[t] || r.glyphs["?"];
        if (!s) return void console.error('THREE.Font: character "' + t + '" does not exists in font family ' + r.familyName + ".");
        const a = new Yo();
        let o, l, c, h, u, d, p, f;
        if (s.o) {
            const t = s._cachedOutline || (s._cachedOutline = s.o.split(" "));
            for (let r = 0, s = t.length; r < s; ) {
                switch (t[r++]) {
                    case "m":
                        (o = t[r++] * e + n), (l = t[r++] * e + i), a.moveTo(o, l);
                        break;
                    case "l":
                        (o = t[r++] * e + n), (l = t[r++] * e + i), a.lineTo(o, l);
                        break;
                    case "q":
                        (c = t[r++] * e + n), (h = t[r++] * e + i), (u = t[r++] * e + n), (d = t[r++] * e + i), a.quadraticCurveTo(u, d, c, h);
                        break;
                    case "b":
                        (c = t[r++] * e + n), (h = t[r++] * e + i), (u = t[r++] * e + n), (d = t[r++] * e + i), (p = t[r++] * e + n), (f = t[r++] * e + i), a.bezierCurveTo(u, d, p, f, c, h);
                }
            }
        }
        return { offsetX: s.ha * e, path: a };
    }
    Zo.prototype.isFont = !0;
    let Qo;
    const Ko = function () {
        return void 0 === Qo && (Qo = new (window.AudioContext || window.webkitAudioContext)()), Qo;
    };
    class $o extends Ja {
        constructor(t) {
            super(t);
        }
        load(t, e, n, i) {
            const r = this,
                s = new Ka(this.manager);
            s.setResponseType("arraybuffer"),
                s.setPath(this.path),
                s.setRequestHeader(this.requestHeader),
                s.setWithCredentials(this.withCredentials),
                s.load(
                    t,
                    function (n) {
                        try {
                            const t = n.slice(0);
                            Ko().decodeAudioData(t, function (t) {
                                e(t);
                            });
                        } catch (e) {
                            i ? i(e) : console.error(e), r.manager.itemError(t);
                        }
                    },
                    n,
                    i
                );
        }
    }
    (class extends Wo {
        constructor(t, e, n = 1) {
            super(void 0, n);
            const i = new Pe().set(t),
                r = new Pe().set(e),
                s = new st(i.r, i.g, i.b),
                a = new st(r.r, r.g, r.b),
                o = Math.sqrt(Math.PI),
                l = o * Math.sqrt(0.75);
            this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o), this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l);
        }
    }.prototype.isHemisphereLightProbe = !0);
    (class extends Wo {
        constructor(t, e = 1) {
            super(void 0, e);
            const n = new Pe().set(t);
            this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI));
        }
    }.prototype.isAmbientLightProbe = !0);
    class tl {
        constructor(t = !0) {
            (this.autoStart = t), (this.startTime = 0), (this.oldTime = 0), (this.elapsedTime = 0), (this.running = !1);
        }
        start() {
            (this.startTime = el()), (this.oldTime = this.startTime), (this.elapsedTime = 0), (this.running = !0);
        }
        stop() {
            this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
        }
        getElapsedTime() {
            return this.getDelta(), this.elapsedTime;
        }
        getDelta() {
            let t = 0;
            if (this.autoStart && !this.running) return this.start(), 0;
            if (this.running) {
                const e = el();
                (t = (e - this.oldTime) / 1e3), (this.oldTime = e), (this.elapsedTime += t);
            }
            return t;
        }
    }
    function el() {
        return ("undefined" == typeof performance ? Date : performance).now();
    }
    class nl extends oe {
        constructor(t) {
            super(),
                (this.type = "Audio"),
                (this.listener = t),
                (this.context = t.context),
                (this.gain = this.context.createGain()),
                this.gain.connect(t.getInput()),
                (this.autoplay = !1),
                (this.buffer = null),
                (this.detune = 0),
                (this.loop = !1),
                (this.loopStart = 0),
                (this.loopEnd = 0),
                (this.offset = 0),
                (this.duration = void 0),
                (this.playbackRate = 1),
                (this.isPlaying = !1),
                (this.hasPlaybackControl = !0),
                (this.source = null),
                (this.sourceType = "empty"),
                (this._startedAt = 0),
                (this._progress = 0),
                (this._connected = !1),
                (this.filters = []);
        }
        getOutput() {
            return this.gain;
        }
        setNodeSource(t) {
            return (this.hasPlaybackControl = !1), (this.sourceType = "audioNode"), (this.source = t), this.connect(), this;
        }
        setMediaElementSource(t) {
            return (this.hasPlaybackControl = !1), (this.sourceType = "mediaNode"), (this.source = this.context.createMediaElementSource(t)), this.connect(), this;
        }
        setMediaStreamSource(t) {
            return (this.hasPlaybackControl = !1), (this.sourceType = "mediaStreamNode"), (this.source = this.context.createMediaStreamSource(t)), this.connect(), this;
        }
        setBuffer(t) {
            return (this.buffer = t), (this.sourceType = "buffer"), this.autoplay && this.play(), this;
        }
        play(t = 0) {
            if (!0 === this.isPlaying) return void console.warn("THREE.Audio: Audio is already playing.");
            if (!1 === this.hasPlaybackControl) return void console.warn("THREE.Audio: this Audio has no playback control.");
            this._startedAt = this.context.currentTime + t;
            const e = this.context.createBufferSource();
            return (
                (e.buffer = this.buffer),
                (e.loop = this.loop),
                (e.loopStart = this.loopStart),
                (e.loopEnd = this.loopEnd),
                (e.onended = this.onEnded.bind(this)),
                e.start(this._startedAt, this._progress + this.offset, this.duration),
                (this.isPlaying = !0),
                (this.source = e),
                this.setDetune(this.detune),
                this.setPlaybackRate(this.playbackRate),
                this.connect()
            );
        }
        pause() {
            if (!1 !== this.hasPlaybackControl)
                return (
                    !0 === this.isPlaying &&
                        ((this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate),
                        !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)),
                        this.source.stop(),
                        (this.source.onended = null),
                        (this.isPlaying = !1)),
                    this
                );
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        stop() {
            if (!1 !== this.hasPlaybackControl) return (this._progress = 0), this.source.stop(), (this.source.onended = null), (this.isPlaying = !1), this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        connect() {
            if (this.filters.length > 0) {
                this.source.connect(this.filters[0]);
                for (let t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
                this.filters[this.filters.length - 1].connect(this.getOutput());
            } else this.source.connect(this.getOutput());
            return (this._connected = !0), this;
        }
        disconnect() {
            if (this.filters.length > 0) {
                this.source.disconnect(this.filters[0]);
                for (let t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput());
            } else this.source.disconnect(this.getOutput());
            return (this._connected = !1), this;
        }
        getFilters() {
            return this.filters;
        }
        setFilters(t) {
            return t || (t = []), !0 === this._connected ? (this.disconnect(), (this.filters = t.slice()), this.connect()) : (this.filters = t.slice()), this;
        }
        setDetune(t) {
            if (((this.detune = t), void 0 !== this.source.detune)) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01), this;
        }
        getDetune() {
            return this.detune;
        }
        getFilter() {
            return this.getFilters()[0];
        }
        setFilter(t) {
            return this.setFilters(t ? [t] : []);
        }
        setPlaybackRate(t) {
            if (!1 !== this.hasPlaybackControl) return (this.playbackRate = t), !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01), this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        getPlaybackRate() {
            return this.playbackRate;
        }
        onEnded() {
            this.isPlaying = !1;
        }
        getLoop() {
            return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
        }
        setLoop(t) {
            if (!1 !== this.hasPlaybackControl) return (this.loop = t), !0 === this.isPlaying && (this.source.loop = this.loop), this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        setLoopStart(t) {
            return (this.loopStart = t), this;
        }
        setLoopEnd(t) {
            return (this.loopEnd = t), this;
        }
        getVolume() {
            return this.gain.gain.value;
        }
        setVolume(t) {
            return this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01), this;
        }
    }
    class il {
        constructor(t, e, n) {
            let i, r, s;
            switch (((this.binding = t), (this.valueSize = n), e)) {
                case "quaternion":
                    (i = this._slerp), (r = this._slerpAdditive), (s = this._setAdditiveIdentityQuaternion), (this.buffer = new Float64Array(6 * n)), (this._workIndex = 5);
                    break;
                case "string":
                case "bool":
                    (i = this._select), (r = this._select), (s = this._setAdditiveIdentityOther), (this.buffer = new Array(5 * n));
                    break;
                default:
                    (i = this._lerp), (r = this._lerpAdditive), (s = this._setAdditiveIdentityNumeric), (this.buffer = new Float64Array(5 * n));
            }
            (this._mixBufferRegion = i),
                (this._mixBufferRegionAdditive = r),
                (this._setIdentity = s),
                (this._origIndex = 3),
                (this._addIndex = 4),
                (this.cumulativeWeight = 0),
                (this.cumulativeWeightAdditive = 0),
                (this.useCount = 0),
                (this.referenceCount = 0);
        }
        accumulate(t, e) {
            const n = this.buffer,
                i = this.valueSize,
                r = t * i + i;
            let s = this.cumulativeWeight;
            if (0 === s) {
                for (let t = 0; t !== i; ++t) n[r + t] = n[t];
                s = e;
            } else {
                s += e;
                const t = e / s;
                this._mixBufferRegion(n, r, 0, t, i);
            }
            this.cumulativeWeight = s;
        }
        accumulateAdditive(t) {
            const e = this.buffer,
                n = this.valueSize,
                i = n * this._addIndex;
            0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(e, i, 0, t, n), (this.cumulativeWeightAdditive += t);
        }
        apply(t) {
            const e = this.valueSize,
                n = this.buffer,
                i = t * e + e,
                r = this.cumulativeWeight,
                s = this.cumulativeWeightAdditive,
                a = this.binding;
            if (((this.cumulativeWeight = 0), (this.cumulativeWeightAdditive = 0), r < 1)) {
                const t = e * this._origIndex;
                this._mixBufferRegion(n, i, t, 1 - r, e);
            }
            s > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);
            for (let t = e, r = e + e; t !== r; ++t)
                if (n[t] !== n[t + e]) {
                    a.setValue(n, i);
                    break;
                }
        }
        saveOriginalState() {
            const t = this.binding,
                e = this.buffer,
                n = this.valueSize,
                i = n * this._origIndex;
            t.getValue(e, i);
            for (let t = n, r = i; t !== r; ++t) e[t] = e[i + (t % n)];
            this._setIdentity(), (this.cumulativeWeight = 0), (this.cumulativeWeightAdditive = 0);
        }
        restoreOriginalState() {
            const t = 3 * this.valueSize;
            this.binding.setValue(this.buffer, t);
        }
        _setAdditiveIdentityNumeric() {
            const t = this._addIndex * this.valueSize,
                e = t + this.valueSize;
            for (let n = t; n < e; n++) this.buffer[n] = 0;
        }
        _setAdditiveIdentityQuaternion() {
            this._setAdditiveIdentityNumeric(), (this.buffer[this._addIndex * this.valueSize + 3] = 1);
        }
        _setAdditiveIdentityOther() {
            const t = this._origIndex * this.valueSize,
                e = this._addIndex * this.valueSize;
            for (let n = 0; n < this.valueSize; n++) this.buffer[e + n] = this.buffer[t + n];
        }
        _select(t, e, n, i, r) {
            if (i >= 0.5) for (let i = 0; i !== r; ++i) t[e + i] = t[n + i];
        }
        _slerp(t, e, n, i) {
            rt.slerpFlat(t, e, t, e, t, n, i);
        }
        _slerpAdditive(t, e, n, i, r) {
            const s = this._workIndex * r;
            rt.multiplyQuaternionsFlat(t, s, t, e, t, n), rt.slerpFlat(t, e, t, e, t, s, i);
        }
        _lerp(t, e, n, i, r) {
            const s = 1 - i;
            for (let a = 0; a !== r; ++a) {
                const r = e + a;
                t[r] = t[r] * s + t[n + a] * i;
            }
        }
        _lerpAdditive(t, e, n, i, r) {
            for (let s = 0; s !== r; ++s) {
                const r = e + s;
                t[r] = t[r] + t[n + s] * i;
            }
        }
    }
    const rl = "\\[\\]\\.:\\/",
        sl = new RegExp("[\\[\\]\\.:\\/]", "g"),
        al = "[^\\[\\]\\.:\\/]",
        ol = "[^" + rl.replace("\\.", "") + "]",
        ll = /((?:WC+[\/:])*)/.source.replace("WC", al),
        cl = /(WCOD+)?/.source.replace("WCOD", ol),
        hl = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", al),
        ul = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", al),
        dl = new RegExp("^" + ll + cl + hl + ul + "$"),
        pl = ["material", "materials", "bones"];
    class fl {
        constructor(t, e, n) {
            (this.path = e),
                (this.parsedPath = n || fl.parseTrackName(e)),
                (this.node = fl.findNode(t, this.parsedPath.nodeName) || t),
                (this.rootNode = t),
                (this.getValue = this._getValue_unbound),
                (this.setValue = this._setValue_unbound);
        }
        static create(t, e, n) {
            return t && t.isAnimationObjectGroup ? new fl.Composite(t, e, n) : new fl(t, e, n);
        }
        static sanitizeNodeName(t) {
            return t.replace(/\s/g, "_").replace(sl, "");
        }
        static parseTrackName(t) {
            const e = dl.exec(t);
            if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
            const n = { nodeName: e[2], objectName: e[3], objectIndex: e[4], propertyName: e[5], propertyIndex: e[6] },
                i = n.nodeName && n.nodeName.lastIndexOf(".");
            if (void 0 !== i && -1 !== i) {
                const t = n.nodeName.substring(i + 1);
                -1 !== pl.indexOf(t) && ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = t));
            }
            if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
            return n;
        }
        static findNode(t, e) {
            if (!e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
            if (t.skeleton) {
                const n = t.skeleton.getBoneByName(e);
                if (void 0 !== n) return n;
            }
            if (t.children) {
                const n = function (t) {
                        for (let i = 0; i < t.length; i++) {
                            const r = t[i];
                            if (r.name === e || r.uuid === e) return r;
                            const s = n(r.children);
                            if (s) return s;
                        }
                        return null;
                    },
                    i = n(t.children);
                if (i) return i;
            }
            return null;
        }
        _getValue_unavailable() {}
        _setValue_unavailable() {}
        _getValue_direct(t, e) {
            t[e] = this.node[this.propertyName];
        }
        _getValue_array(t, e) {
            const n = this.resolvedProperty;
            for (let i = 0, r = n.length; i !== r; ++i) t[e++] = n[i];
        }
        _getValue_arrayElement(t, e) {
            t[e] = this.resolvedProperty[this.propertyIndex];
        }
        _getValue_toArray(t, e) {
            this.resolvedProperty.toArray(t, e);
        }
        _setValue_direct(t, e) {
            this.targetObject[this.propertyName] = t[e];
        }
        _setValue_direct_setNeedsUpdate(t, e) {
            (this.targetObject[this.propertyName] = t[e]), (this.targetObject.needsUpdate = !0);
        }
        _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
            (this.targetObject[this.propertyName] = t[e]), (this.targetObject.matrixWorldNeedsUpdate = !0);
        }
        _setValue_array(t, e) {
            const n = this.resolvedProperty;
            for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
        }
        _setValue_array_setNeedsUpdate(t, e) {
            const n = this.resolvedProperty;
            for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
            this.targetObject.needsUpdate = !0;
        }
        _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
            const n = this.resolvedProperty;
            for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
            this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _setValue_arrayElement(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e];
        }
        _setValue_arrayElement_setNeedsUpdate(t, e) {
            (this.resolvedProperty[this.propertyIndex] = t[e]), (this.targetObject.needsUpdate = !0);
        }
        _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
            (this.resolvedProperty[this.propertyIndex] = t[e]), (this.targetObject.matrixWorldNeedsUpdate = !0);
        }
        _setValue_fromArray(t, e) {
            this.resolvedProperty.fromArray(t, e);
        }
        _setValue_fromArray_setNeedsUpdate(t, e) {
            this.resolvedProperty.fromArray(t, e), (this.targetObject.needsUpdate = !0);
        }
        _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
            this.resolvedProperty.fromArray(t, e), (this.targetObject.matrixWorldNeedsUpdate = !0);
        }
        _getValue_unbound(t, e) {
            this.bind(), this.getValue(t, e);
        }
        _setValue_unbound(t, e) {
            this.bind(), this.setValue(t, e);
        }
        bind() {
            let t = this.node;
            const e = this.parsedPath,
                n = e.objectName,
                i = e.propertyName;
            let r = e.propertyIndex;
            if ((t || ((t = fl.findNode(this.rootNode, e.nodeName) || this.rootNode), (this.node = t)), (this.getValue = this._getValue_unavailable), (this.setValue = this._setValue_unavailable), !t))
                return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
            if (n) {
                let i = e.objectIndex;
                switch (n) {
                    case "materials":
                        if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                        if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                        t = t.material.materials;
                        break;
                    case "bones":
                        if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                        t = t.skeleton.bones;
                        for (let e = 0; e < t.length; e++)
                            if (t[e].name === i) {
                                i = e;
                                break;
                            }
                        break;
                    default:
                        if (void 0 === t[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                        t = t[n];
                }
                if (void 0 !== i) {
                    if (void 0 === t[i]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                    t = t[i];
                }
            }
            const s = t[i];
            if (void 0 === s) {
                const n = e.nodeName;
                return void console.error("THREE.PropertyBinding: Trying to update property for track: " + n + "." + i + " but it wasn't found.", t);
            }
            let a = this.Versioning.None;
            (this.targetObject = t), void 0 !== t.needsUpdate ? (a = this.Versioning.NeedsUpdate) : void 0 !== t.matrixWorldNeedsUpdate && (a = this.Versioning.MatrixWorldNeedsUpdate);
            let o = this.BindingType.Direct;
            if (void 0 !== r) {
                if ("morphTargetInfluences" === i) {
                    if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                    if (!t.geometry.isBufferGeometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
                    if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                    void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r]);
                }
                (o = this.BindingType.ArrayElement), (this.resolvedProperty = s), (this.propertyIndex = r);
            } else
                void 0 !== s.fromArray && void 0 !== s.toArray
                    ? ((o = this.BindingType.HasFromToArray), (this.resolvedProperty = s))
                    : Array.isArray(s)
                    ? ((o = this.BindingType.EntireArray), (this.resolvedProperty = s))
                    : (this.propertyName = i);
            (this.getValue = this.GetterByBindingType[o]), (this.setValue = this.SetterByBindingTypeAndVersioning[o][a]);
        }
        unbind() {
            (this.node = null), (this.getValue = this._getValue_unbound), (this.setValue = this._setValue_unbound);
        }
    }
    (fl.Composite = class {
        constructor(t, e, n) {
            const i = n || fl.parseTrackName(e);
            (this._targetGroup = t), (this._bindings = t.subscribe_(e, i));
        }
        getValue(t, e) {
            this.bind();
            const n = this._targetGroup.nCachedObjects_,
                i = this._bindings[n];
            void 0 !== i && i.getValue(t, e);
        }
        setValue(t, e) {
            const n = this._bindings;
            for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(t, e);
        }
        bind() {
            const t = this._bindings;
            for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].bind();
        }
        unbind() {
            const t = this._bindings;
            for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].unbind();
        }
    }),
        (fl.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }),
        (fl.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }),
        (fl.prototype.GetterByBindingType = [fl.prototype._getValue_direct, fl.prototype._getValue_array, fl.prototype._getValue_arrayElement, fl.prototype._getValue_toArray]),
        (fl.prototype.SetterByBindingTypeAndVersioning = [
            [fl.prototype._setValue_direct, fl.prototype._setValue_direct_setNeedsUpdate, fl.prototype._setValue_direct_setMatrixWorldNeedsUpdate],
            [fl.prototype._setValue_array, fl.prototype._setValue_array_setNeedsUpdate, fl.prototype._setValue_array_setMatrixWorldNeedsUpdate],
            [fl.prototype._setValue_arrayElement, fl.prototype._setValue_arrayElement_setNeedsUpdate, fl.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],
            [fl.prototype._setValue_fromArray, fl.prototype._setValue_fromArray_setNeedsUpdate, fl.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate],
        ]);
    class ml {
        constructor(t, e, n = null, i = e.blendMode) {
            (this._mixer = t), (this._clip = e), (this._localRoot = n), (this.blendMode = i);
            const r = e.tracks,
                s = r.length,
                a = new Array(s),
                o = { endingStart: A, endingEnd: A };
            for (let t = 0; t !== s; ++t) {
                const e = r[t].createInterpolant(null);
                (a[t] = e), (e.settings = o);
            }
            (this._interpolantSettings = o),
                (this._interpolants = a),
                (this._propertyBindings = new Array(s)),
                (this._cacheIndex = null),
                (this._byClipCacheIndex = null),
                (this._timeScaleInterpolant = null),
                (this._weightInterpolant = null),
                (this.loop = 2201),
                (this._loopCount = -1),
                (this._startTime = null),
                (this.time = 0),
                (this.timeScale = 1),
                (this._effectiveTimeScale = 1),
                (this.weight = 1),
                (this._effectiveWeight = 1),
                (this.repetitions = 1 / 0),
                (this.paused = !1),
                (this.enabled = !0),
                (this.clampWhenFinished = !1),
                (this.zeroSlopeAtStart = !0),
                (this.zeroSlopeAtEnd = !0);
        }
        play() {
            return this._mixer._activateAction(this), this;
        }
        stop() {
            return this._mixer._deactivateAction(this), this.reset();
        }
        reset() {
            return (this.paused = !1), (this.enabled = !0), (this.time = 0), (this._loopCount = -1), (this._startTime = null), this.stopFading().stopWarping();
        }
        isRunning() {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this);
        }
        isScheduled() {
            return this._mixer._isActiveAction(this);
        }
        startAt(t) {
            return (this._startTime = t), this;
        }
        setLoop(t, e) {
            return (this.loop = t), (this.repetitions = e), this;
        }
        setEffectiveWeight(t) {
            return (this.weight = t), (this._effectiveWeight = this.enabled ? t : 0), this.stopFading();
        }
        getEffectiveWeight() {
            return this._effectiveWeight;
        }
        fadeIn(t) {
            return this._scheduleFading(t, 0, 1);
        }
        fadeOut(t) {
            return this._scheduleFading(t, 1, 0);
        }
        crossFadeFrom(t, e, n) {
            if ((t.fadeOut(e), this.fadeIn(e), n)) {
                const n = this._clip.duration,
                    i = t._clip.duration,
                    r = i / n,
                    s = n / i;
                t.warp(1, r, e), this.warp(s, 1, e);
            }
            return this;
        }
        crossFadeTo(t, e, n) {
            return t.crossFadeFrom(this, e, n);
        }
        stopFading() {
            const t = this._weightInterpolant;
            return null !== t && ((this._weightInterpolant = null), this._mixer._takeBackControlInterpolant(t)), this;
        }
        setEffectiveTimeScale(t) {
            return (this.timeScale = t), (this._effectiveTimeScale = this.paused ? 0 : t), this.stopWarping();
        }
        getEffectiveTimeScale() {
            return this._effectiveTimeScale;
        }
        setDuration(t) {
            return (this.timeScale = this._clip.duration / t), this.stopWarping();
        }
        syncWith(t) {
            return (this.time = t.time), (this.timeScale = t.timeScale), this.stopWarping();
        }
        halt(t) {
            return this.warp(this._effectiveTimeScale, 0, t);
        }
        warp(t, e, n) {
            const i = this._mixer,
                r = i.time,
                s = this.timeScale;
            let a = this._timeScaleInterpolant;
            null === a && ((a = i._lendControlInterpolant()), (this._timeScaleInterpolant = a));
            const o = a.parameterPositions,
                l = a.sampleValues;
            return (o[0] = r), (o[1] = r + n), (l[0] = t / s), (l[1] = e / s), this;
        }
        stopWarping() {
            const t = this._timeScaleInterpolant;
            return null !== t && ((this._timeScaleInterpolant = null), this._mixer._takeBackControlInterpolant(t)), this;
        }
        getMixer() {
            return this._mixer;
        }
        getClip() {
            return this._clip;
        }
        getRoot() {
            return this._localRoot || this._mixer._root;
        }
        _update(t, e, n, i) {
            if (!this.enabled) return void this._updateWeight(t);
            const r = this._startTime;
            if (null !== r) {
                const i = (t - r) * n;
                if (i < 0 || 0 === n) return;
                (this._startTime = null), (e = n * i);
            }
            e *= this._updateTimeScale(t);
            const s = this._updateTime(e),
                a = this._updateWeight(t);
            if (a > 0) {
                const t = this._interpolants,
                    e = this._propertyBindings;
                switch (this.blendMode) {
                    case 2501:
                        for (let n = 0, i = t.length; n !== i; ++n) t[n].evaluate(s), e[n].accumulateAdditive(a);
                        break;
                    case C:
                    default:
                        for (let n = 0, r = t.length; n !== r; ++n) t[n].evaluate(s), e[n].accumulate(i, a);
                }
            }
        }
        _updateWeight(t) {
            let e = 0;
            if (this.enabled) {
                e = this.weight;
                const n = this._weightInterpolant;
                if (null !== n) {
                    const i = n.evaluate(t)[0];
                    (e *= i), t > n.parameterPositions[1] && (this.stopFading(), 0 === i && (this.enabled = !1));
                }
            }
            return (this._effectiveWeight = e), e;
        }
        _updateTimeScale(t) {
            let e = 0;
            if (!this.paused) {
                e = this.timeScale;
                const n = this._timeScaleInterpolant;
                if (null !== n) {
                    (e *= n.evaluate(t)[0]), t > n.parameterPositions[1] && (this.stopWarping(), 0 === e ? (this.paused = !0) : (this.timeScale = e));
                }
            }
            return (this._effectiveTimeScale = e), e;
        }
        _updateTime(t) {
            const e = this._clip.duration,
                n = this.loop;
            let i = this.time + t,
                r = this._loopCount;
            const s = 2202 === n;
            if (0 === t) return -1 === r ? i : s && 1 == (1 & r) ? e - i : i;
            if (2200 === n) {
                -1 === r && ((this._loopCount = 0), this._setEndings(!0, !0, !1));
                t: {
                    if (i >= e) i = e;
                    else {
                        if (!(i < 0)) {
                            this.time = i;
                            break t;
                        }
                        i = 0;
                    }
                    this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1), (this.time = i), this._mixer.dispatchEvent({ type: "finished", action: this, direction: t < 0 ? -1 : 1 });
                }
            } else {
                if ((-1 === r && (t >= 0 ? ((r = 0), this._setEndings(!0, 0 === this.repetitions, s)) : this._setEndings(0 === this.repetitions, !0, s)), i >= e || i < 0)) {
                    const n = Math.floor(i / e);
                    (i -= e * n), (r += Math.abs(n));
                    const a = this.repetitions - r;
                    if (a <= 0) this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1), (i = t > 0 ? e : 0), (this.time = i), this._mixer.dispatchEvent({ type: "finished", action: this, direction: t > 0 ? 1 : -1 });
                    else {
                        if (1 === a) {
                            const e = t < 0;
                            this._setEndings(e, !e, s);
                        } else this._setEndings(!1, !1, s);
                        (this._loopCount = r), (this.time = i), this._mixer.dispatchEvent({ type: "loop", action: this, loopDelta: n });
                    }
                } else this.time = i;
                if (s && 1 == (1 & r)) return e - i;
            }
            return i;
        }
        _setEndings(t, e, n) {
            const i = this._interpolantSettings;
            n ? ((i.endingStart = L), (i.endingEnd = L)) : ((i.endingStart = t ? (this.zeroSlopeAtStart ? L : A) : R), (i.endingEnd = e ? (this.zeroSlopeAtEnd ? L : A) : R));
        }
        _scheduleFading(t, e, n) {
            const i = this._mixer,
                r = i.time;
            let s = this._weightInterpolant;
            null === s && ((s = i._lendControlInterpolant()), (this._weightInterpolant = s));
            const a = s.parameterPositions,
                o = s.sampleValues;
            return (a[0] = r), (o[0] = e), (a[1] = r + t), (o[1] = n), this;
        }
    }
    (class extends H {
        constructor(t) {
            super(), (this._root = t), this._initMemoryManager(), (this._accuIndex = 0), (this.time = 0), (this.timeScale = 1);
        }
        _bindAction(t, e) {
            const n = t._localRoot || this._root,
                i = t._clip.tracks,
                r = i.length,
                s = t._propertyBindings,
                a = t._interpolants,
                o = n.uuid,
                l = this._bindingsByRootAndName;
            let c = l[o];
            void 0 === c && ((c = {}), (l[o] = c));
            for (let t = 0; t !== r; ++t) {
                const r = i[t],
                    l = r.name;
                let h = c[l];
                if (void 0 !== h) s[t] = h;
                else {
                    if (((h = s[t]), void 0 !== h)) {
                        null === h._cacheIndex && (++h.referenceCount, this._addInactiveBinding(h, o, l));
                        continue;
                    }
                    const i = e && e._propertyBindings[t].binding.parsedPath;
                    (h = new il(fl.create(n, l, i), r.ValueTypeName, r.getValueSize())), ++h.referenceCount, this._addInactiveBinding(h, o, l), (s[t] = h);
                }
                a[t].resultBuffer = h.buffer;
            }
        }
        _activateAction(t) {
            if (!this._isActiveAction(t)) {
                if (null === t._cacheIndex) {
                    const e = (t._localRoot || this._root).uuid,
                        n = t._clip.uuid,
                        i = this._actionsByClip[n];
                    this._bindAction(t, i && i.knownActions[0]), this._addInactiveAction(t, n, e);
                }
                const e = t._propertyBindings;
                for (let t = 0, n = e.length; t !== n; ++t) {
                    const n = e[t];
                    0 == n.useCount++ && (this._lendBinding(n), n.saveOriginalState());
                }
                this._lendAction(t);
            }
        }
        _deactivateAction(t) {
            if (this._isActiveAction(t)) {
                const e = t._propertyBindings;
                for (let t = 0, n = e.length; t !== n; ++t) {
                    const n = e[t];
                    0 == --n.useCount && (n.restoreOriginalState(), this._takeBackBinding(n));
                }
                this._takeBackAction(t);
            }
        }
        _initMemoryManager() {
            (this._actions = []),
                (this._nActiveActions = 0),
                (this._actionsByClip = {}),
                (this._bindings = []),
                (this._nActiveBindings = 0),
                (this._bindingsByRootAndName = {}),
                (this._controlInterpolants = []),
                (this._nActiveControlInterpolants = 0);
            const t = this;
            this.stats = {
                actions: {
                    get total() {
                        return t._actions.length;
                    },
                    get inUse() {
                        return t._nActiveActions;
                    },
                },
                bindings: {
                    get total() {
                        return t._bindings.length;
                    },
                    get inUse() {
                        return t._nActiveBindings;
                    },
                },
                controlInterpolants: {
                    get total() {
                        return t._controlInterpolants.length;
                    },
                    get inUse() {
                        return t._nActiveControlInterpolants;
                    },
                },
            };
        }
        _isActiveAction(t) {
            const e = t._cacheIndex;
            return null !== e && e < this._nActiveActions;
        }
        _addInactiveAction(t, e, n) {
            const i = this._actions,
                r = this._actionsByClip;
            let s = r[e];
            if (void 0 === s) (s = { knownActions: [t], actionByRoot: {} }), (t._byClipCacheIndex = 0), (r[e] = s);
            else {
                const e = s.knownActions;
                (t._byClipCacheIndex = e.length), e.push(t);
            }
            (t._cacheIndex = i.length), i.push(t), (s.actionByRoot[n] = t);
        }
        _removeInactiveAction(t) {
            const e = this._actions,
                n = e[e.length - 1],
                i = t._cacheIndex;
            (n._cacheIndex = i), (e[i] = n), e.pop(), (t._cacheIndex = null);
            const r = t._clip.uuid,
                s = this._actionsByClip,
                a = s[r],
                o = a.knownActions,
                l = o[o.length - 1],
                c = t._byClipCacheIndex;
            (l._byClipCacheIndex = c), (o[c] = l), o.pop(), (t._byClipCacheIndex = null);
            delete a.actionByRoot[(t._localRoot || this._root).uuid], 0 === o.length && delete s[r], this._removeInactiveBindingsForAction(t);
        }
        _removeInactiveBindingsForAction(t) {
            const e = t._propertyBindings;
            for (let t = 0, n = e.length; t !== n; ++t) {
                const n = e[t];
                0 == --n.referenceCount && this._removeInactiveBinding(n);
            }
        }
        _lendAction(t) {
            const e = this._actions,
                n = t._cacheIndex,
                i = this._nActiveActions++,
                r = e[i];
            (t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
        }
        _takeBackAction(t) {
            const e = this._actions,
                n = t._cacheIndex,
                i = --this._nActiveActions,
                r = e[i];
            (t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
        }
        _addInactiveBinding(t, e, n) {
            const i = this._bindingsByRootAndName,
                r = this._bindings;
            let s = i[e];
            void 0 === s && ((s = {}), (i[e] = s)), (s[n] = t), (t._cacheIndex = r.length), r.push(t);
        }
        _removeInactiveBinding(t) {
            const e = this._bindings,
                n = t.binding,
                i = n.rootNode.uuid,
                r = n.path,
                s = this._bindingsByRootAndName,
                a = s[i],
                o = e[e.length - 1],
                l = t._cacheIndex;
            (o._cacheIndex = l), (e[l] = o), e.pop(), delete a[r], 0 === Object.keys(a).length && delete s[i];
        }
        _lendBinding(t) {
            const e = this._bindings,
                n = t._cacheIndex,
                i = this._nActiveBindings++,
                r = e[i];
            (t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
        }
        _takeBackBinding(t) {
            const e = this._bindings,
                n = t._cacheIndex,
                i = --this._nActiveBindings,
                r = e[i];
            (t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
        }
        _lendControlInterpolant() {
            const t = this._controlInterpolants,
                e = this._nActiveControlInterpolants++;
            let n = t[e];
            return void 0 === n && ((n = new za(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)), (n.__cacheIndex = e), (t[e] = n)), n;
        }
        _takeBackControlInterpolant(t) {
            const e = this._controlInterpolants,
                n = t.__cacheIndex,
                i = --this._nActiveControlInterpolants,
                r = e[i];
            (t.__cacheIndex = i), (e[i] = t), (r.__cacheIndex = n), (e[n] = r);
        }
        clipAction(t, e, n) {
            const i = e || this._root,
                r = i.uuid;
            let s = "string" == typeof t ? ja.findByName(i, t) : t;
            const a = null !== s ? s.uuid : t,
                o = this._actionsByClip[a];
            let l = null;
            if ((void 0 === n && (n = null !== s ? s.blendMode : C), void 0 !== o)) {
                const t = o.actionByRoot[r];
                if (void 0 !== t && t.blendMode === n) return t;
                (l = o.knownActions[0]), null === s && (s = l._clip);
            }
            if (null === s) return null;
            const c = new ml(this, s, e, n);
            return this._bindAction(c, l), this._addInactiveAction(c, a, r), c;
        }
        existingAction(t, e) {
            const n = e || this._root,
                i = n.uuid,
                r = "string" == typeof t ? ja.findByName(n, t) : t,
                s = r ? r.uuid : t,
                a = this._actionsByClip[s];
            return (void 0 !== a && a.actionByRoot[i]) || null;
        }
        stopAllAction() {
            const t = this._actions;
            for (let e = this._nActiveActions - 1; e >= 0; --e) t[e].stop();
            return this;
        }
        update(t) {
            t *= this.timeScale;
            const e = this._actions,
                n = this._nActiveActions,
                i = (this.time += t),
                r = Math.sign(t),
                s = (this._accuIndex ^= 1);
            for (let a = 0; a !== n; ++a) {
                e[a]._update(i, t, r, s);
            }
            const a = this._bindings,
                o = this._nActiveBindings;
            for (let t = 0; t !== o; ++t) a[t].apply(s);
            return this;
        }
        setTime(t) {
            this.time = 0;
            for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
            return this.update(t);
        }
        getRoot() {
            return this._root;
        }
        uncacheClip(t) {
            const e = this._actions,
                n = t.uuid,
                i = this._actionsByClip,
                r = i[n];
            if (void 0 !== r) {
                const t = r.knownActions;
                for (let n = 0, i = t.length; n !== i; ++n) {
                    const i = t[n];
                    this._deactivateAction(i);
                    const r = i._cacheIndex,
                        s = e[e.length - 1];
                    (i._cacheIndex = null), (i._byClipCacheIndex = null), (s._cacheIndex = r), (e[r] = s), e.pop(), this._removeInactiveBindingsForAction(i);
                }
                delete i[n];
            }
        }
        uncacheRoot(t) {
            const e = t.uuid,
                n = this._actionsByClip;
            for (const t in n) {
                const i = n[t].actionByRoot[e];
                void 0 !== i && (this._deactivateAction(i), this._removeInactiveAction(i));
            }
            const i = this._bindingsByRootAndName[e];
            if (void 0 !== i)
                for (const t in i) {
                    const e = i[t];
                    e.restoreOriginalState(), this._removeInactiveBinding(e);
                }
        }
        uncacheAction(t, e) {
            const n = this.existingAction(t, e);
            null !== n && (this._deactivateAction(n), this._removeInactiveAction(n));
        }
    }.prototype._controlInterpolantsResultBuffer = new Float32Array(1));
    class gl {
        constructor(t) {
            "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), (t = arguments[1])), (this.value = t);
        }
        clone() {
            return new gl(void 0 === this.value.clone ? this.value : this.value.clone());
        }
    }
    (class extends qr {
        constructor(t, e, n = 1) {
            super(t, e), (this.meshPerAttribute = n || 1);
        }
        copy(t) {
            return super.copy(t), (this.meshPerAttribute = t.meshPerAttribute), this;
        }
        clone(t) {
            const e = super.clone(t);
            return (e.meshPerAttribute = this.meshPerAttribute), e;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return (e.isInstancedInterleavedBuffer = !0), (e.meshPerAttribute = this.meshPerAttribute), e;
        }
    }.prototype.isInstancedInterleavedBuffer = !0);
    const vl = new Z();
    class yl {
        constructor(t = new Z(1 / 0, 1 / 0), e = new Z(-1 / 0, -1 / 0)) {
            (this.min = t), (this.max = e);
        }
        set(t, e) {
            return this.min.copy(t), this.max.copy(e), this;
        }
        setFromPoints(t) {
            this.makeEmpty();
            for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
            return this;
        }
        setFromCenterAndSize(t, e) {
            const n = vl.copy(e).multiplyScalar(0.5);
            return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
        }
        clone() {
            return new this.constructor().copy(this);
        }
        copy(t) {
            return this.min.copy(t.min), this.max.copy(t.max), this;
        }
        makeEmpty() {
            return (this.min.x = this.min.y = 1 / 0), (this.max.x = this.max.y = -1 / 0), this;
        }
        isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y;
        }
        getCenter(t) {
            return void 0 === t && (console.warn("THREE.Box2: .getCenter() target is now required"), (t = new Z())), this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
        }
        getSize(t) {
            return void 0 === t && (console.warn("THREE.Box2: .getSize() target is now required"), (t = new Z())), this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min);
        }
        expandByPoint(t) {
            return this.min.min(t), this.max.max(t), this;
        }
        expandByVector(t) {
            return this.min.sub(t), this.max.add(t), this;
        }
        expandByScalar(t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this;
        }
        containsPoint(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y);
        }
        containsBox(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y;
        }
        getParameter(t, e) {
            return void 0 === e && (console.warn("THREE.Box2: .getParameter() target is now required"), (e = new Z())), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y));
        }
        intersectsBox(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y);
        }
        clampPoint(t, e) {
            return void 0 === e && (console.warn("THREE.Box2: .clampPoint() target is now required"), (e = new Z())), e.copy(t).clamp(this.min, this.max);
        }
        distanceToPoint(t) {
            return vl.copy(t).clamp(this.min, this.max).sub(t).length();
        }
        intersect(t) {
            return this.min.max(t.min), this.max.min(t.max), this;
        }
        union(t) {
            return this.min.min(t.min), this.max.max(t.max), this;
        }
        translate(t) {
            return this.min.add(t), this.max.add(t), this;
        }
        equals(t) {
            return t.min.equals(this.min) && t.max.equals(this.max);
        }
    }
    yl.prototype.isBox2 = !0;
    (class extends oe {
        constructor(t) {
            super(),
                (this.material = t),
                (this.render = function () {}),
                (this.hasPositions = !1),
                (this.hasNormals = !1),
                (this.hasColors = !1),
                (this.hasUvs = !1),
                (this.positionArray = null),
                (this.normalArray = null),
                (this.colorArray = null),
                (this.uvArray = null),
                (this.count = 0);
        }
    }.prototype.isImmediateRenderObject = !0);
    const _l = new st(),
        xl = new Ot(),
        wl = new Ot();
    function bl(t) {
        const e = [];
        t && t.isBone && e.push(t);
        for (let n = 0; n < t.children.length; n++) e.push.apply(e, bl(t.children[n]));
        return e;
    }
    const Ml = new Float32Array(1);
    new Int32Array(Ml.buffer);
    Math.pow(2, 8);
    const Sl = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
        Tl = 5 + Sl.length,
        El = new De({ side: 1, depthWrite: !1, depthTest: !1 }),
        { _lodPlanes: Al, _sizeLods: Ll, _sigmas: Rl } = (new dn(new fn(), El), Cl());
    Math.sqrt(5);
    function Cl() {
        const t = [],
            e = [],
            n = [];
        let i = 8;
        for (let r = 0; r < Tl; r++) {
            const s = Math.pow(2, i);
            e.push(s);
            let a = 1 / s;
            r > 4 ? (a = Sl[r - 8 + 4 - 1]) : 0 == r && (a = 0), n.push(a);
            const o = 1 / (s - 1),
                l = -o / 2,
                c = 1 + o / 2,
                h = [l, l, c, l, c, c, l, l, c, c, l, c],
                u = 6,
                d = 6,
                p = 3,
                f = 2,
                m = 1,
                g = new Float32Array(p * d * u),
                v = new Float32Array(f * d * u),
                y = new Float32Array(m * d * u);
            for (let t = 0; t < u; t++) {
                const e = ((t % 3) * 2) / 3 - 1,
                    n = t > 2 ? 0 : -1,
                    i = [e, n, 0, e + 2 / 3, n, 0, e + 2 / 3, n + 1, 0, e, n, 0, e + 2 / 3, n + 1, 0, e, n + 1, 0];
                g.set(i, p * d * t), v.set(h, f * d * t);
                const r = [t, t, t, t, t, t];
                y.set(r, m * d * t);
            }
            const _ = new Xe();
            _.setAttribute("position", new ze(g, p)), _.setAttribute("uv", new ze(v, f)), _.setAttribute("faceIndex", new ze(y, m)), t.push(_), i > 4 && i--;
        }
        return { _lodPlanes: t, _sizeLods: e, _sigmas: n };
    }
    (no.create = function (t, e) {
        return console.log("THREE.Curve.create() has been deprecated"), (t.prototype = Object.create(no.prototype)), (t.prototype.constructor = t), (t.prototype.getPoint = e), t;
    }),
        (Mo.prototype.fromPoints = function (t) {
            return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(t);
        }),
        (class extends Is {
            constructor(t = 10, e = 10, n = 4473924, i = 8947848) {
                (n = new Pe(n)), (i = new Pe(i));
                const r = e / 2,
                    s = t / e,
                    a = t / 2,
                    o = [],
                    l = [];
                for (let t = 0, c = 0, h = -a; t <= e; t++, h += s) {
                    o.push(-a, 0, h, a, 0, h), o.push(h, 0, -a, h, 0, a);
                    const e = t === r ? n : i;
                    e.toArray(l, c), (c += 3), e.toArray(l, c), (c += 3), e.toArray(l, c), (c += 3), e.toArray(l, c), (c += 3);
                }
                const c = new Xe();
                c.setAttribute("position", new Fe(o, 3)), c.setAttribute("color", new Fe(l, 3));
                super(c, new Ss({ vertexColors: !0, toneMapped: !1 })), (this.type = "GridHelper");
            }
        }.prototype.setColors = function () {
            console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");
        }),
        (class extends Is {
            constructor(t) {
                const e = bl(t),
                    n = new Xe(),
                    i = [],
                    r = [],
                    s = new Pe(0, 0, 1),
                    a = new Pe(0, 1, 0);
                for (let t = 0; t < e.length; t++) {
                    const n = e[t];
                    n.parent && n.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(s.r, s.g, s.b), r.push(a.r, a.g, a.b));
                }
                n.setAttribute("position", new Fe(i, 3)), n.setAttribute("color", new Fe(r, 3));
                super(n, new Ss({ vertexColors: !0, depthTest: !1, depthWrite: !1, toneMapped: !1, transparent: !0 })),
                    (this.type = "SkeletonHelper"),
                    (this.isSkeletonHelper = !0),
                    (this.root = t),
                    (this.bones = e),
                    (this.matrix = t.matrixWorld),
                    (this.matrixAutoUpdate = !1);
            }
            updateMatrixWorld(t) {
                const e = this.bones,
                    n = this.geometry,
                    i = n.getAttribute("position");
                wl.copy(this.root.matrixWorld).invert();
                for (let t = 0, n = 0; t < e.length; t++) {
                    const r = e[t];
                    r.parent &&
                        r.parent.isBone &&
                        (xl.multiplyMatrices(wl, r.matrixWorld),
                        _l.setFromMatrixPosition(xl),
                        i.setXYZ(n, _l.x, _l.y, _l.z),
                        xl.multiplyMatrices(wl, r.parent.matrixWorld),
                        _l.setFromMatrixPosition(xl),
                        i.setXYZ(n + 1, _l.x, _l.y, _l.z),
                        (n += 2));
                }
                (n.getAttribute("position").needsUpdate = !0), super.updateMatrixWorld(t);
            }
        }.prototype.update = function () {
            console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
        }),
        (Ja.prototype.extractUrlBase = function (t) {
            return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), jo.extractUrlBase(t);
        }),
        (Ja.Handlers = {
            add: function () {
                console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");
            },
            get: function () {
                console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");
            },
        }),
        (yl.prototype.center = function (t) {
            return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t);
        }),
        (yl.prototype.empty = function () {
            return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty();
        }),
        (yl.prototype.isIntersectionBox = function (t) {
            return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t);
        }),
        (yl.prototype.size = function (t) {
            return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t);
        }),
        (lt.prototype.center = function (t) {
            return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t);
        }),
        (lt.prototype.empty = function () {
            return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty();
        }),
        (lt.prototype.isIntersectionBox = function (t) {
            return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t);
        }),
        (lt.prototype.isIntersectionSphere = function (t) {
            return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t);
        }),
        (lt.prototype.size = function (t) {
            return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t);
        }),
        (At.prototype.empty = function () {
            return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty();
        }),
        (An.prototype.setFromMatrix = function (t) {
            return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(t);
        }),
        (J.prototype.flattenToArrayOffset = function (t, e) {
            return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e);
        }),
        (J.prototype.multiplyVector3 = function (t) {
            return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this);
        }),
        (J.prototype.multiplyVector3Array = function () {
            console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
        }),
        (J.prototype.applyToBufferAttribute = function (t) {
            return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), t.applyMatrix3(this);
        }),
        (J.prototype.applyToVector3Array = function () {
            console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
        }),
        (J.prototype.getInverse = function (t) {
            return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(t).invert();
        }),
        (Ot.prototype.extractPosition = function (t) {
            return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t);
        }),
        (Ot.prototype.flattenToArrayOffset = function (t, e) {
            return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e);
        }),
        (Ot.prototype.getPosition = function () {
            return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), new st().setFromMatrixColumn(this, 3);
        }),
        (Ot.prototype.setRotationFromQuaternion = function (t) {
            return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t);
        }),
        (Ot.prototype.multiplyToArray = function () {
            console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
        }),
        (Ot.prototype.multiplyVector3 = function (t) {
            return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this);
        }),
        (Ot.prototype.multiplyVector4 = function (t) {
            return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this);
        }),
        (Ot.prototype.multiplyVector3Array = function () {
            console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
        }),
        (Ot.prototype.rotateAxis = function (t) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this);
        }),
        (Ot.prototype.crossVector = function (t) {
            return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this);
        }),
        (Ot.prototype.translate = function () {
            console.error("THREE.Matrix4: .translate() has been removed.");
        }),
        (Ot.prototype.rotateX = function () {
            console.error("THREE.Matrix4: .rotateX() has been removed.");
        }),
        (Ot.prototype.rotateY = function () {
            console.error("THREE.Matrix4: .rotateY() has been removed.");
        }),
        (Ot.prototype.rotateZ = function () {
            console.error("THREE.Matrix4: .rotateZ() has been removed.");
        }),
        (Ot.prototype.rotateByAxis = function () {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
        }),
        (Ot.prototype.applyToBufferAttribute = function (t) {
            return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), t.applyMatrix4(this);
        }),
        (Ot.prototype.applyToVector3Array = function () {
            console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
        }),
        (Ot.prototype.makeFrustum = function (t, e, n, i, r, s) {
            return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t, e, i, n, r, s);
        }),
        (Ot.prototype.getInverse = function (t) {
            return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(t).invert();
        }),
        (ue.prototype.isIntersectionLine = function (t) {
            return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t);
        }),
        (rt.prototype.multiplyVector3 = function (t) {
            return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this);
        }),
        (rt.prototype.inverse = function () {
            return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert();
        }),
        (zt.prototype.isIntersectionBox = function (t) {
            return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t);
        }),
        (zt.prototype.isIntersectionPlane = function (t) {
            return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t);
        }),
        (zt.prototype.isIntersectionSphere = function (t) {
            return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t);
        }),
        (be.prototype.area = function () {
            return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea();
        }),
        (be.prototype.barycoordFromPoint = function (t, e) {
            return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(t, e);
        }),
        (be.prototype.midpoint = function (t) {
            return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(t);
        }),
        (be.prototypenormal = function (t) {
            return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(t);
        }),
        (be.prototype.plane = function (t) {
            return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(t);
        }),
        (be.barycoordFromPoint = function (t, e, n, i, r) {
            return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), be.getBarycoord(t, e, n, i, r);
        }),
        (be.normal = function (t, e, n, i) {
            return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), be.getNormal(t, e, n, i);
        }),
        (So.prototype.extractAllPoints = function (t) {
            return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(t);
        }),
        (So.prototype.extrude = function (t) {
            return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new ya(this, t);
        }),
        (So.prototype.makeGeometry = function (t) {
            return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new wa(this, t);
        }),
        (Z.prototype.fromAttribute = function (t, e, n) {
            return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n);
        }),
        (Z.prototype.distanceToManhattan = function (t) {
            return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t);
        }),
        (Z.prototype.lengthManhattan = function () {
            return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
        }),
        (st.prototype.setEulerFromRotationMatrix = function () {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");
        }),
        (st.prototype.setEulerFromQuaternion = function () {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
        }),
        (st.prototype.getPositionFromMatrix = function (t) {
            return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t);
        }),
        (st.prototype.getScaleFromMatrix = function (t) {
            return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t);
        }),
        (st.prototype.getColumnFromMatrix = function (t, e) {
            return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t);
        }),
        (st.prototype.applyProjection = function (t) {
            return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t);
        }),
        (st.prototype.fromAttribute = function (t, e, n) {
            return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n);
        }),
        (st.prototype.distanceToManhattan = function (t) {
            return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t);
        }),
        (st.prototype.lengthManhattan = function () {
            return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
        }),
        (nt.prototype.fromAttribute = function (t, e, n) {
            return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n);
        }),
        (nt.prototype.lengthManhattan = function () {
            return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
        }),
        (oe.prototype.getChildByName = function (t) {
            return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t);
        }),
        (oe.prototype.renderDepth = function () {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");
        }),
        (oe.prototype.translate = function (t, e) {
            return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t);
        }),
        (oe.prototype.getWorldRotation = function () {
            console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");
        }),
        (oe.prototype.applyMatrix = function (t) {
            return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t);
        }),
        Object.defineProperties(oe.prototype, {
            eulerOrder: {
                get: function () {
                    return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order;
                },
                set: function (t) {
                    console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), (this.rotation.order = t);
                },
            },
            useQuaternion: {
                get: function () {
                    console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
                },
                set: function () {
                    console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
                },
            },
        }),
        (dn.prototype.setDrawMode = function () {
            console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
        }),
        Object.defineProperties(dn.prototype, {
            drawMode: {
                get: function () {
                    return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), 0;
                },
                set: function () {
                    console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
                },
            },
        }),
        (gs.prototype.initBones = function () {
            console.error("THREE.SkinnedMesh: initBones() has been removed.");
        }),
        (xn.prototype.setLens = function (t, e) {
            console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t);
        }),
        Object.defineProperties(To.prototype, {
            onlyShadow: {
                set: function () {
                    console.warn("THREE.Light: .onlyShadow has been removed.");
                },
            },
            shadowCameraFov: {
                set: function (t) {
                    console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), (this.shadow.camera.fov = t);
                },
            },
            shadowCameraLeft: {
                set: function (t) {
                    console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), (this.shadow.camera.left = t);
                },
            },
            shadowCameraRight: {
                set: function (t) {
                    console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), (this.shadow.camera.right = t);
                },
            },
            shadowCameraTop: {
                set: function (t) {
                    console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), (this.shadow.camera.top = t);
                },
            },
            shadowCameraBottom: {
                set: function (t) {
                    console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), (this.shadow.camera.bottom = t);
                },
            },
            shadowCameraNear: {
                set: function (t) {
                    console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), (this.shadow.camera.near = t);
                },
            },
            shadowCameraFar: {
                set: function (t) {
                    console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), (this.shadow.camera.far = t);
                },
            },
            shadowCameraVisible: {
                set: function () {
                    console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");
                },
            },
            shadowBias: {
                set: function (t) {
                    console.warn("THREE.Light: .shadowBias is now .shadow.bias."), (this.shadow.bias = t);
                },
            },
            shadowDarkness: {
                set: function () {
                    console.warn("THREE.Light: .shadowDarkness has been removed.");
                },
            },
            shadowMapWidth: {
                set: function (t) {
                    console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), (this.shadow.mapSize.width = t);
                },
            },
            shadowMapHeight: {
                set: function (t) {
                    console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), (this.shadow.mapSize.height = t);
                },
            },
        }),
        Object.defineProperties(ze.prototype, {
            length: {
                get: function () {
                    return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length;
                },
            },
            dynamic: {
                get: function () {
                    return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === B;
                },
                set: function () {
                    console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(B);
                },
            },
        }),
        (ze.prototype.setDynamic = function (t) {
            return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? B : O), this;
        }),
        (ze.prototype.copyIndicesArray = function () {
            console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
        }),
        (ze.prototype.setArray = function () {
            console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
        }),
        (Xe.prototype.addIndex = function (t) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t);
        }),
        (Xe.prototype.addAttribute = function (t, e) {
            return (
                console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),
                (e && e.isBufferAttribute) || (e && e.isInterleavedBufferAttribute)
                    ? "index" === t
                        ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this)
                        : this.setAttribute(t, e)
                    : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(t, new ze(arguments[1], arguments[2])))
            );
        }),
        (Xe.prototype.addDrawCall = function (t, e, n) {
            void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e);
        }),
        (Xe.prototype.clearDrawCalls = function () {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups();
        }),
        (Xe.prototype.computeOffsets = function () {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
        }),
        (Xe.prototype.removeAttribute = function (t) {
            return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(t);
        }),
        (Xe.prototype.applyMatrix = function (t) {
            return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t);
        }),
        Object.defineProperties(Xe.prototype, {
            drawcalls: {
                get: function () {
                    return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups;
                },
            },
            offsets: {
                get: function () {
                    return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups;
                },
            },
        }),
        (qr.prototype.setDynamic = function (t) {
            return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? B : O), this;
        }),
        (qr.prototype.setArray = function () {
            console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
        }),
        (ya.prototype.getArrays = function () {
            console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.");
        }),
        (ya.prototype.addShapeList = function () {
            console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.");
        }),
        (ya.prototype.addShape = function () {
            console.error("THREE.ExtrudeGeometry: .addShape() has been removed.");
        }),
        (jr.prototype.dispose = function () {
            console.error("THREE.Scene: .dispose() has been removed.");
        }),
        (gl.prototype.onUpdate = function () {
            return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this;
        }),
        Object.defineProperties(Se.prototype, {
            wrapAround: {
                get: function () {
                    console.warn("THREE.Material: .wrapAround has been removed.");
                },
                set: function () {
                    console.warn("THREE.Material: .wrapAround has been removed.");
                },
            },
            overdraw: {
                get: function () {
                    console.warn("THREE.Material: .overdraw has been removed.");
                },
                set: function () {
                    console.warn("THREE.Material: .overdraw has been removed.");
                },
            },
            wrapRGB: {
                get: function () {
                    return console.warn("THREE.Material: .wrapRGB has been removed."), new Pe();
                },
            },
            shading: {
                get: function () {
                    console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
                },
                set: function (t) {
                    console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), (this.flatShading = 1 === t);
                },
            },
            stencilMask: {
                get: function () {
                    return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask;
                },
                set: function (t) {
                    console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), (this.stencilFuncMask = t);
                },
            },
        }),
        Object.defineProperties(yn.prototype, {
            derivatives: {
                get: function () {
                    return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives;
                },
                set: function (t) {
                    console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), (this.extensions.derivatives = t);
                },
            },
        }),
        (Gr.prototype.clearTarget = function (t, e, n, i) {
            console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(t), this.clear(e, n, i);
        }),
        (Gr.prototype.animate = function (t) {
            console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(t);
        }),
        (Gr.prototype.getCurrentRenderTarget = function () {
            return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget();
        }),
        (Gr.prototype.getMaxAnisotropy = function () {
            return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy();
        }),
        (Gr.prototype.getPrecision = function () {
            return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision;
        }),
        (Gr.prototype.resetGLState = function () {
            return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset();
        }),
        (Gr.prototype.supportsFloatTextures = function () {
            return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float");
        }),
        (Gr.prototype.supportsHalfFloatTextures = function () {
            return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float");
        }),
        (Gr.prototype.supportsStandardDerivatives = function () {
            return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives");
        }),
        (Gr.prototype.supportsCompressedTextureS3TC = function () {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc");
        }),
        (Gr.prototype.supportsCompressedTexturePVRTC = function () {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc");
        }),
        (Gr.prototype.supportsBlendMinMax = function () {
            return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax");
        }),
        (Gr.prototype.supportsVertexTextures = function () {
            return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures;
        }),
        (Gr.prototype.supportsInstancedArrays = function () {
            return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays");
        }),
        (Gr.prototype.enableScissorTest = function (t) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t);
        }),
        (Gr.prototype.initMaterial = function () {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
        }),
        (Gr.prototype.addPrePlugin = function () {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
        }),
        (Gr.prototype.addPostPlugin = function () {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
        }),
        (Gr.prototype.updateShadowMap = function () {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
        }),
        (Gr.prototype.setFaceCulling = function () {
            console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
        }),
        (Gr.prototype.allocTextureUnit = function () {
            console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
        }),
        (Gr.prototype.setTexture = function () {
            console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
        }),
        (Gr.prototype.setTexture2D = function () {
            console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
        }),
        (Gr.prototype.setTextureCube = function () {
            console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
        }),
        (Gr.prototype.getActiveMipMapLevel = function () {
            return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel();
        }),
        Object.defineProperties(Gr.prototype, {
            shadowMapEnabled: {
                get: function () {
                    return this.shadowMap.enabled;
                },
                set: function (t) {
                    console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), (this.shadowMap.enabled = t);
                },
            },
            shadowMapType: {
                get: function () {
                    return this.shadowMap.type;
                },
                set: function (t) {
                    console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), (this.shadowMap.type = t);
                },
            },
            shadowMapCullFace: {
                get: function () {
                    console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
                },
                set: function () {
                    console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
                },
            },
            context: {
                get: function () {
                    return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext();
                },
            },
            vr: {
                get: function () {
                    return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr;
                },
            },
            gammaInput: {
                get: function () {
                    return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1;
                },
                set: function () {
                    console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");
                },
            },
            gammaOutput: {
                get: function () {
                    return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1;
                },
                set: function (t) {
                    console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), (this.outputEncoding = !0 === t ? D : P);
                },
            },
            toneMappingWhitePoint: {
                get: function () {
                    return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1;
                },
                set: function () {
                    console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.");
                },
            },
        }),
        Object.defineProperties(Dr.prototype, {
            cullFace: {
                get: function () {
                    console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
                },
                set: function () {
                    console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
                },
            },
            renderReverseSided: {
                get: function () {
                    console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
                },
                set: function () {
                    console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
                },
            },
            renderSingleSided: {
                get: function () {
                    console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
                },
                set: function () {
                    console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
                },
            },
        }),
        Object.defineProperties(it.prototype, {
            wrapS: {
                get: function () {
                    return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS;
                },
                set: function (t) {
                    console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), (this.texture.wrapS = t);
                },
            },
            wrapT: {
                get: function () {
                    return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT;
                },
                set: function (t) {
                    console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), (this.texture.wrapT = t);
                },
            },
            magFilter: {
                get: function () {
                    return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter;
                },
                set: function (t) {
                    console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), (this.texture.magFilter = t);
                },
            },
            minFilter: {
                get: function () {
                    return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter;
                },
                set: function (t) {
                    console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), (this.texture.minFilter = t);
                },
            },
            anisotropy: {
                get: function () {
                    return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy;
                },
                set: function (t) {
                    console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), (this.texture.anisotropy = t);
                },
            },
            offset: {
                get: function () {
                    return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset;
                },
                set: function (t) {
                    console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), (this.texture.offset = t);
                },
            },
            repeat: {
                get: function () {
                    return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat;
                },
                set: function (t) {
                    console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), (this.texture.repeat = t);
                },
            },
            format: {
                get: function () {
                    return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format;
                },
                set: function (t) {
                    console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), (this.texture.format = t);
                },
            },
            type: {
                get: function () {
                    return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type;
                },
                set: function (t) {
                    console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), (this.texture.type = t);
                },
            },
            generateMipmaps: {
                get: function () {
                    return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps;
                },
                set: function (t) {
                    console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), (this.texture.generateMipmaps = t);
                },
            },
        }),
        (nl.prototype.load = function (t) {
            console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
            const e = this;
            return (
                new $o().load(t, function (t) {
                    e.setBuffer(t);
                }),
                this
            );
        }),
        (bn.prototype.updateCubeMap = function (t, e) {
            return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e);
        }),
        (bn.prototype.clear = function (t, e, n, i) {
            return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(t, e, n, i);
        }),
        (K.crossOrigin = void 0),
        (K.loadTexture = function (t, e, n, i) {
            console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
            const r = new eo();
            r.setCrossOrigin(this.crossOrigin);
            const s = r.load(t, n, void 0, i);
            return e && (s.mapping = e), s;
        }),
        (K.loadTextureCube = function (t, e, n, i) {
            console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
            const r = new to();
            r.setCrossOrigin(this.crossOrigin);
            const s = r.load(t, n, void 0, i);
            return e && (s.mapping = e), s;
        }),
        (K.loadCompressedTexture = function () {
            console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
        }),
        (K.loadCompressedTextureCube = function () {
            console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
        });
    function Pl(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    function Dl(t, e) {
        (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
    }
    /*!
     * GSAP 3.7.0
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "129" } })),
        "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : (window.__THREE__ = "129"));
    var Il,
        Nl,
        zl,
        Ol,
        Bl,
        Fl,
        Hl,
        Ul,
        kl,
        Gl,
        Vl,
        Wl,
        jl,
        ql,
        Xl,
        Yl,
        Zl,
        Jl,
        Ql,
        Kl,
        $l,
        tc,
        ec,
        nc,
        ic,
        rc,
        sc,
        ac,
        oc = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
        lc = { duration: 0.5, overwrite: !1, delay: 0 },
        cc = 1e8,
        hc = 1e-8,
        uc = 2 * Math.PI,
        dc = uc / 4,
        pc = 0,
        fc = Math.sqrt,
        mc = Math.cos,
        gc = Math.sin,
        vc = function (t) {
            return "string" == typeof t;
        },
        yc = function (t) {
            return "function" == typeof t;
        },
        _c = function (t) {
            return "number" == typeof t;
        },
        xc = function (t) {
            return void 0 === t;
        },
        wc = function (t) {
            return "object" == typeof t;
        },
        bc = function (t) {
            return !1 !== t;
        },
        Mc = function () {
            return "undefined" != typeof window;
        },
        Sc = function (t) {
            return yc(t) || vc(t);
        },
        Tc = ("function" == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
        Ec = Array.isArray,
        Ac = /(?:-?\.?\d|\.)+/gi,
        Lc = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        Rc = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        Cc = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        Pc = /[+-]=-?[.\d]+/,
        Dc = /[^,'"\[\]\s]+/gi,
        Ic = /[\d.+\-=]+(?:e[-+]\d*)*/i,
        Nc = {},
        zc = {},
        Oc = function (t) {
            return (zc = oh(t, Nc)) && Xu;
        },
        Bc = function (t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
        },
        Fc = function (t, e) {
            return !e && console.warn(t);
        },
        Hc = function (t, e) {
            return (t && (Nc[t] = e) && zc && (zc[t] = e)) || Nc;
        },
        Uc = function () {
            return 0;
        },
        kc = {},
        Gc = [],
        Vc = {},
        Wc = {},
        jc = {},
        qc = 30,
        Xc = [],
        Yc = "",
        Zc = function (t) {
            var e,
                n,
                i = t[0];
            if ((wc(i) || yc(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
                for (n = Xc.length; n-- && !Xc[n].targetTest(i); );
                e = Xc[n];
            }
            for (n = t.length; n--; ) (t[n] && (t[n]._gsap || (t[n]._gsap = new yu(t[n], e)))) || t.splice(n, 1);
            return t;
        },
        Jc = function (t) {
            return t._gsap || Zc(Bh(t))[0]._gsap;
        },
        Qc = function (t, e, n) {
            return (n = t[e]) && yc(n) ? t[e]() : (xc(n) && t.getAttribute && t.getAttribute(e)) || n;
        },
        Kc = function (t, e) {
            return (t = t.split(",")).forEach(e) || t;
        },
        $c = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0;
        },
        th = function (t, e) {
            for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n; );
            return i < n;
        },
        eh = function () {
            var t,
                e,
                n = Gc.length,
                i = Gc.slice(0);
            for (Vc = {}, Gc.length = 0, t = 0; t < n; t++) (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
        },
        nh = function (t, e, n, i) {
            Gc.length && eh(), t.render(e, n, i), Gc.length && eh();
        },
        ih = function (t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(Dc).length < 2 ? e : vc(t) ? t.trim() : t;
        },
        rh = function (t) {
            return t;
        },
        sh = function (t, e) {
            for (var n in e) n in t || (t[n] = e[n]);
            return t;
        },
        ah = function (t, e) {
            for (var n in e) n in t || "duration" === n || "ease" === n || (t[n] = e[n]);
        },
        oh = function (t, e) {
            for (var n in e) t[n] = e[n];
            return t;
        },
        lh = function t(e, n) {
            for (var i in n) "__proto__" !== i && "constructor" !== i && "prototype" !== i && (e[i] = wc(n[i]) ? t(e[i] || (e[i] = {}), n[i]) : n[i]);
            return e;
        },
        ch = function (t, e) {
            var n,
                i = {};
            for (n in t) n in e || (i[n] = t[n]);
            return i;
        },
        hh = function (t) {
            var e = t.parent || Nl,
                n = t.keyframes ? ah : sh;
            if (bc(t.inherit)) for (; e; ) n(t, e.vars.defaults), (e = e.parent || e._dp);
            return t;
        },
        uh = function (t, e, n, i) {
            void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
            var r = e._prev,
                s = e._next;
            r ? (r._next = s) : t[n] === e && (t[n] = s), s ? (s._prev = r) : t[i] === e && (t[i] = r), (e._next = e._prev = e.parent = null);
        },
        dh = function (t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), (t._act = 0);
        },
        ph = function (t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0)) for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
            return t;
        },
        fh = function (t) {
            for (var e = t.parent; e && e.parent; ) (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
        },
        mh = function t(e) {
            return !e || (e._ts && t(e.parent));
        },
        gh = function (t) {
            return t._repeat ? vh(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
        },
        vh = function (t, e) {
            var n = Math.floor((t /= e));
            return t && n === t ? n - 1 : n;
        },
        yh = function (t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
        },
        _h = function (t) {
            return (t._end = $c(t._start + (t._tDur / Math.abs(t._ts || t._rts || hc) || 0)));
        },
        xh = function (t, e) {
            var n = t._dp;
            return n && n.smoothChildTiming && t._ts && ((t._start = $c(n._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts))), _h(t), n._dirty || ph(n, t)), t;
        },
        wh = function (t, e) {
            var n;
            if (((e._time || (e._initted && !e._dur)) && ((n = yh(t.rawTime(), e)), (!e._dur || Ih(0, e.totalDuration(), n) - e._tTime > hc) && e.render(n, !0)), ph(t, e)._dp && t._initted && t._time >= t._dur && t._ts)) {
                if (t._dur < t.duration()) for (n = t; n._dp; ) n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
                t._zTime = -1e-8;
            }
        },
        bh = function (t, e, n, i) {
            return (
                e.parent && dh(e),
                (e._start = $c((_c(n) ? n : n || t !== Nl ? Ch(t, n, e) : t._time) + e._delay)),
                (e._end = $c(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0))),
                (function (t, e, n, i, r) {
                    void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
                    var s,
                        a = t[i];
                    if (r) for (s = e[r]; a && a[r] > s; ) a = a._prev;
                    a ? ((e._next = a._next), (a._next = e)) : ((e._next = t[n]), (t[n] = e)), e._next ? (e._next._prev = e) : (t[i] = e), (e._prev = a), (e.parent = e._dp = t);
                })(t, e, "_first", "_last", t._sort ? "_start" : 0),
                Eh(e) || (t._recent = e),
                i || wh(t, e),
                t
            );
        },
        Mh = function (t, e) {
            return (Nc.ScrollTrigger || Bc("scrollTrigger", e)) && Nc.ScrollTrigger.create(e, t);
        },
        Sh = function (t, e, n, i) {
            return Tu(t, e), t._initted ? (!n && t._pt && ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) && Hl !== su.frame ? (Gc.push(t), (t._lazy = [e, i]), 1) : void 0) : 1;
        },
        Th = function t(e) {
            var n = e.parent;
            return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
        },
        Eh = function (t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e;
        },
        Ah = function (t, e, n, i) {
            var r = t._repeat,
                s = $c(e) || 0,
                a = t._tTime / t._tDur;
            return a && !i && (t._time *= s / t._dur), (t._dur = s), (t._tDur = r ? (r < 0 ? 1e10 : $c(s * (r + 1) + t._rDelay * r)) : s), a && !i ? xh(t, (t._tTime = t._tDur * a)) : t.parent && _h(t), n || ph(t.parent, t), t;
        },
        Lh = function (t) {
            return t instanceof xu ? ph(t) : Ah(t, t._dur);
        },
        Rh = { _start: 0, endTime: Uc, totalDuration: Uc },
        Ch = function t(e, n, i) {
            var r,
                s,
                a,
                o = e.labels,
                l = e._recent || Rh,
                c = e.duration() >= cc ? l.endTime(!1) : e._dur;
            return vc(n) && (isNaN(n) || n in o)
                ? ((s = n.charAt(0)),
                  (a = "%" === n.substr(-1)),
                  (r = n.indexOf("=")),
                  "<" === s || ">" === s
                      ? (r >= 0 && (n = n.replace(/=/, "")), ("<" === s ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (a ? (r < 0 ? l : i).totalDuration() / 100 : 1))
                      : r < 0
                      ? (n in o || (o[n] = c), o[n])
                      : ((s = parseFloat(n.charAt(r - 1) + n.substr(r + 1))), a && i && (s = (s / 100) * (Ec(i) ? i[0] : i).totalDuration()), r > 1 ? t(e, n.substr(0, r - 1), i) + s : c + s))
                : null == n
                ? c
                : +n;
        },
        Ph = function (t, e, n) {
            var i,
                r,
                s = _c(e[1]),
                a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
                o = e[a];
            if ((s && (o.duration = e[1]), (o.parent = n), t)) {
                for (i = o, r = n; r && !("immediateRender" in i); ) (i = r.vars.defaults || {}), (r = bc(r.vars.inherit) && r.parent);
                (o.immediateRender = bc(i.immediateRender)), t < 2 ? (o.runBackwards = 1) : (o.startAt = e[a - 1]);
            }
            return new Ru(e[0], o, e[a + 1]);
        },
        Dh = function (t, e) {
            return t || 0 === t ? e(t) : e;
        },
        Ih = function (t, e, n) {
            return n < t ? t : n > e ? e : n;
        },
        Nh = function (t) {
            if ("string" != typeof t) return "";
            var e = Ic.exec(t);
            return e ? t.substr(e.index + e[0].length) : "";
        },
        zh = [].slice,
        Oh = function (t, e) {
            return t && wc(t) && "length" in t && ((!e && !t.length) || (t.length - 1 in t && wc(t[0]))) && !t.nodeType && t !== zl;
        },
        Bh = function (t, e, n) {
            return !vc(t) || n || (!Ol && au())
                ? Ec(t)
                    ? (function (t, e, n) {
                          return (
                              void 0 === n && (n = []),
                              t.forEach(function (t) {
                                  var i;
                                  return (vc(t) && !e) || Oh(t, 1) ? (i = n).push.apply(i, Bh(t)) : n.push(t);
                              }) || n
                          );
                      })(t, n)
                    : Oh(t)
                    ? zh.call(t, 0)
                    : t
                    ? [t]
                    : []
                : zh.call((e || Bl).querySelectorAll(t), 0);
        },
        Fh = function (t) {
            return t.sort(function () {
                return 0.5 - Math.random();
            });
        },
        Hh = function (t) {
            if (yc(t)) return t;
            var e = wc(t) ? t : { each: t },
                n = pu(e.ease),
                i = e.from || 0,
                r = parseFloat(e.base) || 0,
                s = {},
                a = i > 0 && i < 1,
                o = isNaN(i) || a,
                l = e.axis,
                c = i,
                h = i;
            return (
                vc(i) ? (c = h = { center: 0.5, edges: 0.5, end: 1 }[i] || 0) : !a && o && ((c = i[0]), (h = i[1])),
                function (t, a, u) {
                    var d,
                        p,
                        f,
                        m,
                        g,
                        v,
                        y,
                        _,
                        x,
                        w = (u || e).length,
                        b = s[w];
                    if (!b) {
                        if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, cc])[1])) {
                            for (y = -1e8; y < (y = u[x++].getBoundingClientRect().left) && x < w; );
                            x--;
                        }
                        for (b = s[w] = [], d = o ? Math.min(x, w) * c - 0.5 : i % x, p = o ? (w * h) / x - 0.5 : (i / x) | 0, y = 0, _ = cc, v = 0; v < w; v++)
                            (f = (v % x) - d), (m = p - ((v / x) | 0)), (b[v] = g = l ? Math.abs("y" === l ? m : f) : fc(f * f + m * m)), g > y && (y = g), g < _ && (_ = g);
                        "random" === i && Fh(b),
                            (b.max = y - _),
                            (b.min = _),
                            (b.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (x > w ? w - 1 : l ? ("y" === l ? w / x : x) : Math.max(x, w / x)) || 0) * ("edges" === i ? -1 : 1)),
                            (b.b = w < 0 ? r - w : r),
                            (b.u = Nh(e.amount || e.each) || 0),
                            (n = n && w < 0 ? uu(n) : n);
                    }
                    return (w = (b[t] - b.min) / b.max || 0), $c(b.b + (n ? n(w) : w) * b.v) + b.u;
                }
            );
        },
        Uh = function (t) {
            var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
            return function (n) {
                var i = Math.round(parseFloat(n) / t) * t * e;
                return (i - (i % 1)) / e + (_c(n) ? 0 : Nh(n));
            };
        },
        kh = function (t, e) {
            var n,
                i,
                r = Ec(t);
            return (
                !r && wc(t) && ((n = r = t.radius || cc), t.values ? ((t = Bh(t.values)), (i = !_c(t[0])) && (n *= n)) : (t = Uh(t.increment))),
                Dh(
                    e,
                    r
                        ? yc(t)
                            ? function (e) {
                                  return (i = t(e)), Math.abs(i - e) <= n ? i : e;
                              }
                            : function (e) {
                                  for (var r, s, a = parseFloat(i ? e.x : e), o = parseFloat(i ? e.y : 0), l = cc, c = 0, h = t.length; h--; )
                                      (r = i ? (r = t[h].x - a) * r + (s = t[h].y - o) * s : Math.abs(t[h] - a)) < l && ((l = r), (c = h));
                                  return (c = !n || l <= n ? t[c] : e), i || c === e || _c(e) ? c : c + Nh(e);
                              }
                        : Uh(t)
                )
            );
        },
        Gh = function (t, e, n, i) {
            return Dh(Ec(t) ? !e : !0 === n ? !!(n = 0) : !i, function () {
                return Ec(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + 0.99 * n)) / n) * n * i) / i;
            });
        },
        Vh = function (t, e, n) {
            return Dh(n, function (n) {
                return t[~~e(n)];
            });
        },
        Wh = function (t) {
            for (var e, n, i, r, s = 0, a = ""; ~(e = t.indexOf("random(", s)); )
                (i = t.indexOf(")", e)), (r = "[" === t.charAt(e + 7)), (n = t.substr(e + 7, i - e - 7).match(r ? Dc : Ac)), (a += t.substr(s, e - s) + Gh(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5)), (s = i + 1);
            return a + t.substr(s, t.length - s);
        },
        jh = function (t, e, n, i, r) {
            var s = e - t,
                a = i - n;
            return Dh(r, function (e) {
                return n + (((e - t) / s) * a || 0);
            });
        },
        qh = function (t, e, n) {
            var i,
                r,
                s,
                a = t.labels,
                o = cc;
            for (i in a) (r = a[i] - e) < 0 == !!n && r && o > (r = Math.abs(r)) && ((s = i), (o = r));
            return s;
        },
        Xh = function (t, e, n) {
            var i,
                r,
                s = t.vars,
                a = s[e];
            if (a) return (i = s[e + "Params"]), (r = s.callbackScope || t), n && Gc.length && eh(), i ? a.apply(r, i) : a.call(r);
        },
        Yh = function (t) {
            return dh(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && Xh(t, "onInterrupt"), t;
        },
        Zh = function (t) {
            var e = (t = (!t.name && t.default) || t).name,
                n = yc(t),
                i =
                    e && !n && t.init
                        ? function () {
                              this._props = [];
                          }
                        : t,
                r = { init: Uc, render: Fu, add: Mu, kill: Uu, modifier: Hu, rawVars: 0 },
                s = { targetTest: 0, get: 0, getSetter: Nu, aliases: {}, register: 0 };
            if ((au(), t !== i)) {
                if (Wc[e]) return;
                sh(i, sh(ch(t, r), s)), oh(i.prototype, oh(r, ch(t, s))), (Wc[(i.prop = e)] = i), t.targetTest && (Xc.push(i), (kc[e] = 1)), (e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
            }
            Hc(e, i), t.register && t.register(Xu, i, Vu);
        },
        Jh = 255,
        Qh = {
            aqua: [0, Jh, Jh],
            lime: [0, Jh, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, Jh],
            navy: [0, 0, 128],
            white: [Jh, Jh, Jh],
            olive: [128, 128, 0],
            yellow: [Jh, Jh, 0],
            orange: [Jh, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [Jh, 0, 0],
            pink: [Jh, 192, 203],
            cyan: [0, Jh, Jh],
            transparent: [Jh, Jh, Jh, 0],
        },
        Kh = function (t, e, n) {
            return ((6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < 0.5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * Jh + 0.5) | 0;
        },
        $h = function (t, e, n) {
            var i,
                r,
                s,
                a,
                o,
                l,
                c,
                h,
                u,
                d,
                p = t ? (_c(t) ? [t >> 16, (t >> 8) & Jh, t & Jh] : 0) : Qh.black;
            if (!p) {
                if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Qh[t])) p = Qh[t];
                else if ("#" === t.charAt(0)) {
                    if ((t.length < 6 && ((i = t.charAt(1)), (r = t.charAt(2)), (s = t.charAt(3)), (t = "#" + i + i + r + r + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))), 9 === t.length))
                        return [(p = parseInt(t.substr(1, 6), 16)) >> 16, (p >> 8) & Jh, p & Jh, parseInt(t.substr(7), 16) / 255];
                    p = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & Jh, t & Jh];
                } else if ("hsl" === t.substr(0, 3))
                    if (((p = d = t.match(Ac)), e)) {
                        if (~t.indexOf("=")) return (p = t.match(Lc)), n && p.length < 4 && (p[3] = 1), p;
                    } else
                        (a = (+p[0] % 360) / 360),
                            (o = +p[1] / 100),
                            (i = 2 * (l = +p[2] / 100) - (r = l <= 0.5 ? l * (o + 1) : l + o - l * o)),
                            p.length > 3 && (p[3] *= 1),
                            (p[0] = Kh(a + 1 / 3, i, r)),
                            (p[1] = Kh(a, i, r)),
                            (p[2] = Kh(a - 1 / 3, i, r));
                else p = t.match(Ac) || Qh.transparent;
                p = p.map(Number);
            }
            return (
                e &&
                    !d &&
                    ((i = p[0] / Jh),
                    (r = p[1] / Jh),
                    (s = p[2] / Jh),
                    (l = ((c = Math.max(i, r, s)) + (h = Math.min(i, r, s))) / 2),
                    c === h ? (a = o = 0) : ((u = c - h), (o = l > 0.5 ? u / (2 - c - h) : u / (c + h)), (a = c === i ? (r - s) / u + (r < s ? 6 : 0) : c === r ? (s - i) / u + 2 : (i - r) / u + 4), (a *= 60)),
                    (p[0] = ~~(a + 0.5)),
                    (p[1] = ~~(100 * o + 0.5)),
                    (p[2] = ~~(100 * l + 0.5))),
                n && p.length < 4 && (p[3] = 1),
                p
            );
        },
        tu = function (t) {
            var e = [],
                n = [],
                i = -1;
            return (
                t.split(nu).forEach(function (t) {
                    var r = t.match(Rc) || [];
                    e.push.apply(e, r), n.push((i += r.length + 1));
                }),
                (e.c = n),
                e
            );
        },
        eu = function (t, e, n) {
            var i,
                r,
                s,
                a,
                o = "",
                l = (t + o).match(nu),
                c = e ? "hsla(" : "rgba(",
                h = 0;
            if (!l) return t;
            if (
                ((l = l.map(function (t) {
                    return (t = $h(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
                })),
                n && ((s = tu(t)), (i = n.c).join(o) !== s.c.join(o)))
            )
                for (a = (r = t.replace(nu, "1").split(Rc)).length - 1; h < a; h++) o += r[h] + (~i.indexOf(h) ? l.shift() || c + "0,0,0,0)" : (s.length ? s : l.length ? l : n).shift());
            if (!r) for (a = (r = t.split(nu)).length - 1; h < a; h++) o += r[h] + l[h];
            return o + r[a];
        },
        nu = (function () {
            var t,
                e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in Qh) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi");
        })(),
        iu = /hsl[a]?\(/,
        ru = function (t) {
            var e,
                n = t.join(" ");
            if (((nu.lastIndex = 0), nu.test(n))) return (e = iu.test(n)), (t[1] = eu(t[1], e)), (t[0] = eu(t[0], e, tu(t[1]))), !0;
        },
        su =
            ((Yl = Date.now),
            (Zl = 500),
            (Jl = 33),
            (Ql = Yl()),
            (Kl = Ql),
            (tc = $l = 1e3 / 240),
            (nc = function t(e) {
                var n,
                    i,
                    r,
                    s,
                    a = Yl() - Kl,
                    o = !0 === e;
                if ((a > Zl && (Ql += a - Jl), ((n = (r = (Kl += a) - Ql) - tc) > 0 || o) && ((s = ++jl.frame), (ql = r - 1e3 * jl.time), (jl.time = r /= 1e3), (tc += n + (n >= $l ? 4 : $l - n)), (i = 1)), o || (Gl = Vl(t)), i))
                    for (Xl = 0; Xl < ec.length; Xl++) ec[Xl](r, ql, s, e);
            }),
            (jl = {
                time: 0,
                frame: 0,
                tick: function () {
                    nc(!0);
                },
                deltaRatio: function (t) {
                    return ql / (1e3 / (t || 60));
                },
                wake: function () {
                    Fl &&
                        (!Ol &&
                            Mc() &&
                            ((zl = Ol = window),
                            (Bl = zl.document || {}),
                            (Nc.gsap = Xu),
                            (zl.gsapVersions || (zl.gsapVersions = [])).push(Xu.version),
                            Oc(zc || zl.GreenSockGlobals || (!zl.gsap && zl) || {}),
                            (Wl = zl.requestAnimationFrame)),
                        Gl && jl.sleep(),
                        (Vl =
                            Wl ||
                            function (t) {
                                return setTimeout(t, (tc - 1e3 * jl.time + 1) | 0);
                            }),
                        (kl = 1),
                        nc(2));
                },
                sleep: function () {
                    (Wl ? zl.cancelAnimationFrame : clearTimeout)(Gl), (kl = 0), (Vl = Uc);
                },
                lagSmoothing: function (t, e) {
                    (Zl = t || 1e8), (Jl = Math.min(e, Zl, 0));
                },
                fps: function (t) {
                    ($l = 1e3 / (t || 240)), (tc = 1e3 * jl.time + $l);
                },
                add: function (t) {
                    ec.indexOf(t) < 0 && ec.push(t), au();
                },
                remove: function (t) {
                    var e;
                    ~(e = ec.indexOf(t)) && ec.splice(e, 1) && Xl >= e && Xl--;
                },
                _listeners: (ec = []),
            })),
        au = function () {
            return !kl && su.wake();
        },
        ou = {},
        lu = /^[\d.\-M][\d.\-,\s]/,
        cu = /["']/g,
        hu = function (t) {
            for (var e, n, i, r = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, l = s.length; o < l; o++)
                (n = s[o]), (e = o !== l - 1 ? n.lastIndexOf(",") : n.length), (i = n.substr(0, e)), (r[a] = isNaN(i) ? i.replace(cu, "").trim() : +i), (a = n.substr(e + 1).trim());
            return r;
        },
        uu = function (t) {
            return function (e) {
                return 1 - t(1 - e);
            };
        },
        du = function t(e, n) {
            for (var i, r = e._first; r; )
                r instanceof xu ? t(r, n) : !r.vars.yoyoEase || (r._yoyo && r._repeat) || r._yoyo === n || (r.timeline ? t(r.timeline, n) : ((i = r._ease), (r._ease = r._yEase), (r._yEase = i), (r._yoyo = n))), (r = r._next);
        },
        pu = function (t, e) {
            return (
                (t &&
                    (yc(t)
                        ? t
                        : ou[t] ||
                          (function (t) {
                              var e,
                                  n,
                                  i,
                                  r,
                                  s = (t + "").split("("),
                                  a = ou[s[0]];
                              return a && s.length > 1 && a.config
                                  ? a.config.apply(
                                        null,
                                        ~t.indexOf("{") ? [hu(s[1])] : ((e = t), (n = e.indexOf("(") + 1), (i = e.indexOf(")")), (r = e.indexOf("(", n)), e.substring(n, ~r && r < i ? e.indexOf(")", i + 1) : i)).split(",").map(ih)
                                    )
                                  : ou._CE && lu.test(t)
                                  ? ou._CE("", t)
                                  : a;
                          })(t))) ||
                e
            );
        },
        fu = function (t, e, n, i) {
            void 0 === n &&
                (n = function (t) {
                    return 1 - e(1 - t);
                }),
                void 0 === i &&
                    (i = function (t) {
                        return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
                    });
            var r,
                s = { easeIn: e, easeOut: n, easeInOut: i };
            return (
                Kc(t, function (t) {
                    for (var e in ((ou[t] = Nc[t] = s), (ou[(r = t.toLowerCase())] = n), s)) ou[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = ou[t + "." + e] = s[e];
                }),
                s
            );
        },
        mu = function (t) {
            return function (e) {
                return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
            };
        },
        gu = function t(e, n, i) {
            var r = n >= 1 ? n : 1,
                s = (i || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
                a = (s / uc) * (Math.asin(1 / r) || 0),
                o = function (t) {
                    return 1 === t ? 1 : r * Math.pow(2, -10 * t) * gc((t - a) * s) + 1;
                },
                l =
                    "out" === e
                        ? o
                        : "in" === e
                        ? function (t) {
                              return 1 - o(1 - t);
                          }
                        : mu(o);
            return (
                (s = uc / s),
                (l.config = function (n, i) {
                    return t(e, n, i);
                }),
                l
            );
        },
        vu = function t(e, n) {
            void 0 === n && (n = 1.70158);
            var i = function (t) {
                    return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
                },
                r =
                    "out" === e
                        ? i
                        : "in" === e
                        ? function (t) {
                              return 1 - i(1 - t);
                          }
                        : mu(i);
            return (
                (r.config = function (n) {
                    return t(e, n);
                }),
                r
            );
        };
    Kc("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var n = e < 5 ? e + 1 : e;
        fu(
            t + ",Power" + (n - 1),
            e
                ? function (t) {
                      return Math.pow(t, n);
                  }
                : function (t) {
                      return t;
                  },
            function (t) {
                return 1 - Math.pow(1 - t, n);
            },
            function (t) {
                return t < 0.5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2;
            }
        );
    }),
        (ou.Linear.easeNone = ou.none = ou.Linear.easeIn),
        fu("Elastic", gu("in"), gu("out"), gu()),
        (ic = 7.5625),
        (sc = 1 / (rc = 2.75)),
        fu(
            "Bounce",
            function (t) {
                return 1 - ac(1 - t);
            },
            (ac = function (t) {
                return t < sc ? ic * t * t : t < 0.7272727272727273 ? ic * Math.pow(t - 1.5 / rc, 2) + 0.75 : t < 0.9090909090909092 ? ic * (t -= 2.25 / rc) * t + 0.9375 : ic * Math.pow(t - 2.625 / rc, 2) + 0.984375;
            })
        ),
        fu("Expo", function (t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0;
        }),
        fu("Circ", function (t) {
            return -(fc(1 - t * t) - 1);
        }),
        fu("Sine", function (t) {
            return 1 === t ? 1 : 1 - mc(t * dc);
        }),
        fu("Back", vu("in"), vu("out"), vu()),
        (ou.SteppedEase = ou.steps = Nc.SteppedEase = {
            config: function (t, e) {
                void 0 === t && (t = 1);
                var n = 1 / t,
                    i = t + (e ? 0 : 1),
                    r = e ? 1 : 0;
                return function (t) {
                    return (((i * Ih(0, 0.99999999, t)) | 0) + r) * n;
                };
            },
        }),
        (lc.ease = ou["quad.out"]),
        Kc("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
            return (Yc += t + "," + t + "Params,");
        });
    var yu = function (t, e) {
            (this.id = pc++), (t._gsap = this), (this.target = t), (this.harness = e), (this.get = e ? e.get : Qc), (this.set = e ? e.getSetter : Nu);
        },
        _u = (function () {
            function t(t) {
                (this.vars = t),
                    (this._delay = +t.delay || 0),
                    (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
                    (this._ts = 1),
                    Ah(this, +t.duration, 1, 1),
                    (this.data = t.data),
                    kl || su.wake();
            }
            var e = t.prototype;
            return (
                (e.delay = function (t) {
                    return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), (this._delay = t), this) : this._delay;
                }),
                (e.duration = function (t) {
                    return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
                }),
                (e.totalDuration = function (t) {
                    return arguments.length ? ((this._dirty = 0), Ah(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
                }),
                (e.totalTime = function (t, e) {
                    if ((au(), !arguments.length)) return this._tTime;
                    var n = this._dp;
                    if (n && n.smoothChildTiming && this._ts) {
                        for (xh(this, t), !n._dp || n.parent || wh(n, this); n.parent; ) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), (n = n.parent);
                        !this.parent && this._dp.autoRemoveChildren && ((this._ts > 0 && t < this._tDur) || (this._ts < 0 && t > 0) || (!this._tDur && !t)) && bh(this._dp, this, this._start - this._delay);
                    }
                    return (this._tTime !== t || (!this._dur && !e) || (this._initted && Math.abs(this._zTime) === hc) || (!t && !this._initted && (this.add || this._ptLookup))) && (this._ts || (this._pTime = t), nh(this, t, e)), this;
                }),
                (e.time = function (t, e) {
                    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + gh(this)) % this._dur || (t ? this._dur : 0), e) : this._time;
                }),
                (e.totalProgress = function (t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
                }),
                (e.progress = function (t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + gh(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
                }),
                (e.iteration = function (t, e) {
                    var n = this.duration() + this._rDelay;
                    return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? vh(this._tTime, n) + 1 : 1;
                }),
                (e.timeScale = function (t) {
                    if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                    if (this._rts === t) return this;
                    var e = this.parent && this._ts ? yh(this.parent._time, this) : this._tTime;
                    return (this._rts = +t || 0), (this._ts = this._ps || -1e-8 === t ? 0 : this._rts), fh(this.totalTime(Ih(-this._delay, this._tDur, e), !0));
                }),
                (e.paused = function (t) {
                    return arguments.length
                        ? (this._ps !== t &&
                              ((this._ps = t),
                              t
                                  ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                                  : (au(),
                                    (this._ts = this._rts),
                                    this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= hc) && Math.abs(this._zTime) !== hc))),
                          this)
                        : this._ps;
                }),
                (e.startTime = function (t) {
                    if (arguments.length) {
                        this._start = t;
                        var e = this.parent || this._dp;
                        return e && (e._sort || !this.parent) && bh(e, this, t - this._delay), this;
                    }
                    return this._start;
                }),
                (e.endTime = function (t) {
                    return this._start + (bc(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
                }),
                (e.rawTime = function (t) {
                    var e = this.parent || this._dp;
                    return e ? (t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1)) ? this._tTime % (this._dur + this._rDelay) : this._ts ? yh(e.rawTime(t), this) : this._tTime) : this._tTime;
                }),
                (e.globalTime = function (t) {
                    for (var e = this, n = arguments.length ? t : e.rawTime(); e; ) (n = e._start + n / (e._ts || 1)), (e = e._dp);
                    return n;
                }),
                (e.repeat = function (t) {
                    return arguments.length ? ((this._repeat = t === 1 / 0 ? -2 : t), Lh(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
                }),
                (e.repeatDelay = function (t) {
                    return arguments.length ? ((this._rDelay = t), Lh(this)) : this._rDelay;
                }),
                (e.yoyo = function (t) {
                    return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
                }),
                (e.seek = function (t, e) {
                    return this.totalTime(Ch(this, t), bc(e));
                }),
                (e.restart = function (t, e) {
                    return this.play().totalTime(t ? -this._delay : 0, bc(e));
                }),
                (e.play = function (t, e) {
                    return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
                }),
                (e.reverse = function (t, e) {
                    return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
                }),
                (e.pause = function (t, e) {
                    return null != t && this.seek(t, e), this.paused(!0);
                }),
                (e.resume = function () {
                    return this.paused(!1);
                }),
                (e.reversed = function (t) {
                    return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0;
                }),
                (e.invalidate = function () {
                    return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
                }),
                (e.isActive = function () {
                    var t,
                        e = this.parent || this._dp,
                        n = this._start;
                    return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - hc));
                }),
                (e.eventCallback = function (t, e, n) {
                    var i = this.vars;
                    return arguments.length > 1 ? (e ? ((i[t] = e), n && (i[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t];
                }),
                (e.then = function (t) {
                    var e = this;
                    return new Promise(function (n) {
                        var i = yc(t) ? t : rh,
                            r = function () {
                                var t = e.then;
                                (e.then = null), yc(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), n(i), (e.then = t);
                            };
                        (e._initted && 1 === e.totalProgress() && e._ts >= 0) || (!e._tTime && e._ts < 0) ? r() : (e._prom = r);
                    });
                }),
                (e.kill = function () {
                    Yh(this);
                }),
                t
            );
        })();
    sh(_u.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -1e-8, _prom: 0, _ps: !1, _rts: 1 });
    var xu = (function (t) {
        function e(e, n) {
            var i;
            return (
                void 0 === e && (e = {}),
                ((i = t.call(this, e) || this).labels = {}),
                (i.smoothChildTiming = !!e.smoothChildTiming),
                (i.autoRemoveChildren = !!e.autoRemoveChildren),
                (i._sort = bc(e.sortChildren)),
                Nl && bh(e.parent || Nl, Pl(i), n),
                e.reversed && i.reverse(),
                e.paused && i.paused(!0),
                e.scrollTrigger && Mh(Pl(i), e.scrollTrigger),
                i
            );
        }
        Dl(e, t);
        var n = e.prototype;
        return (
            (n.to = function (t, e, n) {
                return Ph(0, arguments, this), this;
            }),
            (n.from = function (t, e, n) {
                return Ph(1, arguments, this), this;
            }),
            (n.fromTo = function (t, e, n, i) {
                return Ph(2, arguments, this), this;
            }),
            (n.set = function (t, e, n) {
                return (e.duration = 0), (e.parent = this), hh(e).repeatDelay || (e.repeat = 0), (e.immediateRender = !!e.immediateRender), new Ru(t, e, Ch(this, n), 1), this;
            }),
            (n.call = function (t, e, n) {
                return bh(this, Ru.delayedCall(0, t, e), n);
            }),
            (n.staggerTo = function (t, e, n, i, r, s, a) {
                return (n.duration = e), (n.stagger = n.stagger || i), (n.onComplete = s), (n.onCompleteParams = a), (n.parent = this), new Ru(t, n, Ch(this, r)), this;
            }),
            (n.staggerFrom = function (t, e, n, i, r, s, a) {
                return (n.runBackwards = 1), (hh(n).immediateRender = bc(n.immediateRender)), this.staggerTo(t, e, n, i, r, s, a);
            }),
            (n.staggerFromTo = function (t, e, n, i, r, s, a, o) {
                return (i.startAt = n), (hh(i).immediateRender = bc(i.immediateRender)), this.staggerTo(t, e, i, r, s, a, o);
            }),
            (n.render = function (t, e, n) {
                var i,
                    r,
                    s,
                    a,
                    o,
                    l,
                    c,
                    h,
                    u,
                    d,
                    p,
                    f,
                    m = this._time,
                    g = this._dirty ? this.totalDuration() : this._tDur,
                    v = this._dur,
                    y = this !== Nl && t > g - hc && t >= 0 ? g : t < hc ? 0 : t,
                    _ = this._zTime < 0 != t < 0 && (this._initted || !v);
                if (y !== this._tTime || n || _) {
                    if ((m !== this._time && v && ((y += this._time - m), (t += this._time - m)), (i = y), (u = this._start), (l = !(h = this._ts)), _ && (v || (m = this._zTime), (t || !e) && (this._zTime = t)), this._repeat)) {
                        if (((p = this._yoyo), (o = v + this._rDelay), this._repeat < -1 && t < 0)) return this.totalTime(100 * o + t, e, n);
                        if (
                            ((i = $c(y % o)),
                            y === g ? ((a = this._repeat), (i = v)) : ((a = ~~(y / o)) && a === y / o && ((i = v), a--), i > v && (i = v)),
                            (d = vh(this._tTime, o)),
                            !m && this._tTime && d !== a && (d = a),
                            p && 1 & a && ((i = v - i), (f = 1)),
                            a !== d && !this._lock)
                        ) {
                            var x = p && 1 & d,
                                w = x === (p && 1 & a);
                            if (
                                (a < d && (x = !x),
                                (m = x ? 0 : v),
                                (this._lock = 1),
                                (this.render(m || (f ? 0 : $c(a * o)), e, !v)._lock = 0),
                                (this._tTime = y),
                                !e && this.parent && Xh(this, "onRepeat"),
                                this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1),
                                (m && m !== this._time) || l !== !this._ts || (this.vars.onRepeat && !this.parent && !this._act))
                            )
                                return this;
                            if (((v = this._dur), (g = this._tDur), w && ((this._lock = 2), (m = x ? v : -1e-4), this.render(m, !0), this.vars.repeatRefresh && !f && this.invalidate()), (this._lock = 0), !this._ts && !l)) return this;
                            du(this, f);
                        }
                    }
                    if (
                        (this._hasPause &&
                            !this._forcing &&
                            this._lock < 2 &&
                            (c = (function (t, e, n) {
                                var i;
                                if (n > e)
                                    for (i = t._first; i && i._start <= n; ) {
                                        if (!i._dur && "isPause" === i.data && i._start > e) return i;
                                        i = i._next;
                                    }
                                else
                                    for (i = t._last; i && i._start >= n; ) {
                                        if (!i._dur && "isPause" === i.data && i._start < e) return i;
                                        i = i._prev;
                                    }
                            })(this, $c(m), $c(i))) &&
                            (y -= i - (i = c._start)),
                        (this._tTime = y),
                        (this._time = i),
                        (this._act = !h),
                        this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = t), (m = 0)),
                        !m && i && !e && (Xh(this, "onStart"), this._tTime !== y))
                    )
                        return this;
                    if (i >= m && t >= 0)
                        for (r = this._first; r; ) {
                            if (((s = r._next), (r._act || i >= r._start) && r._ts && c !== r)) {
                                if (r.parent !== this) return this.render(t, e, n);
                                if ((r.render(r._ts > 0 ? (i - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (i - r._start) * r._ts, e, n), i !== this._time || (!this._ts && !l))) {
                                    (c = 0), s && (y += this._zTime = -1e-8);
                                    break;
                                }
                            }
                            r = s;
                        }
                    else {
                        r = this._last;
                        for (var b = t < 0 ? t : i; r; ) {
                            if (((s = r._prev), (r._act || b <= r._end) && r._ts && c !== r)) {
                                if (r.parent !== this) return this.render(t, e, n);
                                if ((r.render(r._ts > 0 ? (b - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (b - r._start) * r._ts, e, n), i !== this._time || (!this._ts && !l))) {
                                    (c = 0), s && (y += this._zTime = b ? -1e-8 : hc);
                                    break;
                                }
                            }
                            r = s;
                        }
                    }
                    if (c && !e && (this.pause(), (c.render(i >= m ? 0 : -1e-8)._zTime = i >= m ? 1 : -1), this._ts)) return (this._start = u), _h(this), this.render(t, e, n);
                    this._onUpdate && !e && Xh(this, "onUpdate", !0),
                        ((y === g && g >= this.totalDuration()) || (!y && m)) &&
                            ((u !== this._start && Math.abs(h) === Math.abs(this._ts)) ||
                                this._lock ||
                                ((t || !v) && ((y === g && this._ts > 0) || (!y && this._ts < 0)) && dh(this, 1),
                                e || (t < 0 && !m) || (!y && !m && g) || (Xh(this, y === g && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < g && this.timeScale() > 0) && this._prom())));
                }
                return this;
            }),
            (n.add = function (t, e) {
                var n = this;
                if ((_c(e) || (e = Ch(this, e, t)), !(t instanceof _u))) {
                    if (Ec(t))
                        return (
                            t.forEach(function (t) {
                                return n.add(t, e);
                            }),
                            this
                        );
                    if (vc(t)) return this.addLabel(t, e);
                    if (!yc(t)) return this;
                    t = Ru.delayedCall(0, t);
                }
                return this !== t ? bh(this, t, e) : this;
            }),
            (n.getChildren = function (t, e, n, i) {
                void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === i && (i = -1e8);
                for (var r = [], s = this._first; s; ) s._start >= i && (s instanceof Ru ? e && r.push(s) : (n && r.push(s), t && r.push.apply(r, s.getChildren(!0, e, n)))), (s = s._next);
                return r;
            }),
            (n.getById = function (t) {
                for (var e = this.getChildren(1, 1, 1), n = e.length; n--; ) if (e[n].vars.id === t) return e[n];
            }),
            (n.remove = function (t) {
                return vc(t) ? this.removeLabel(t) : yc(t) ? this.killTweensOf(t) : (uh(this, t), t === this._recent && (this._recent = this._last), ph(this));
            }),
            (n.totalTime = function (e, n) {
                return arguments.length
                    ? ((this._forcing = 1), !this._dp && this._ts && (this._start = $c(su.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, n), (this._forcing = 0), this)
                    : this._tTime;
            }),
            (n.addLabel = function (t, e) {
                return (this.labels[t] = Ch(this, e)), this;
            }),
            (n.removeLabel = function (t) {
                return delete this.labels[t], this;
            }),
            (n.addPause = function (t, e, n) {
                var i = Ru.delayedCall(0, e || Uc, n);
                return (i.data = "isPause"), (this._hasPause = 1), bh(this, i, Ch(this, t));
            }),
            (n.removePause = function (t) {
                var e = this._first;
                for (t = Ch(this, t); e; ) e._start === t && "isPause" === e.data && dh(e), (e = e._next);
            }),
            (n.killTweensOf = function (t, e, n) {
                for (var i = this.getTweensOf(t, n), r = i.length; r--; ) wu !== i[r] && i[r].kill(t, e);
                return this;
            }),
            (n.getTweensOf = function (t, e) {
                for (var n, i = [], r = Bh(t), s = this._first, a = _c(e); s; )
                    s instanceof Ru
                        ? th(s._targets, r) && (a ? (!wu || (s._initted && s._ts)) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && i.push(s)
                        : (n = s.getTweensOf(r, e)).length && i.push.apply(i, n),
                        (s = s._next);
                return i;
            }),
            (n.tweenTo = function (t, e) {
                e = e || {};
                var n,
                    i = this,
                    r = Ch(i, t),
                    s = e,
                    a = s.startAt,
                    o = s.onStart,
                    l = s.onStartParams,
                    c = s.immediateRender,
                    h = Ru.to(
                        i,
                        sh(
                            {
                                ease: e.ease || "none",
                                lazy: !1,
                                immediateRender: !1,
                                time: r,
                                overwrite: "auto",
                                duration: e.duration || Math.abs((r - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || hc,
                                onStart: function () {
                                    if ((i.pause(), !n)) {
                                        var t = e.duration || Math.abs((r - (a && "time" in a ? a.time : i._time)) / i.timeScale());
                                        h._dur !== t && Ah(h, t, 0, 1).render(h._time, !0, !0), (n = 1);
                                    }
                                    o && o.apply(h, l || []);
                                },
                            },
                            e
                        )
                    );
                return c ? h.render(0) : h;
            }),
            (n.tweenFromTo = function (t, e, n) {
                return this.tweenTo(e, sh({ startAt: { time: Ch(this, t) } }, n));
            }),
            (n.recent = function () {
                return this._recent;
            }),
            (n.nextLabel = function (t) {
                return void 0 === t && (t = this._time), qh(this, Ch(this, t));
            }),
            (n.previousLabel = function (t) {
                return void 0 === t && (t = this._time), qh(this, Ch(this, t), 1);
            }),
            (n.currentLabel = function (t) {
                return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + hc);
            }),
            (n.shiftChildren = function (t, e, n) {
                void 0 === n && (n = 0);
                for (var i, r = this._first, s = this.labels; r; ) r._start >= n && ((r._start += t), (r._end += t)), (r = r._next);
                if (e) for (i in s) s[i] >= n && (s[i] += t);
                return ph(this);
            }),
            (n.invalidate = function () {
                var e = this._first;
                for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
                return t.prototype.invalidate.call(this);
            }),
            (n.clear = function (t) {
                void 0 === t && (t = !0);
                for (var e, n = this._first; n; ) (e = n._next), this.remove(n), (n = e);
                return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), ph(this);
            }),
            (n.totalDuration = function (t) {
                var e,
                    n,
                    i,
                    r = 0,
                    s = this,
                    a = s._last,
                    o = cc;
                if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
                if (s._dirty) {
                    for (i = s.parent; a; )
                        (e = a._prev),
                            a._dirty && a.totalDuration(),
                            (n = a._start) > o && s._sort && a._ts && !s._lock ? ((s._lock = 1), (bh(s, a, n - a._delay, 1)._lock = 0)) : (o = n),
                            n < 0 && a._ts && ((r -= n), ((!i && !s._dp) || (i && i.smoothChildTiming)) && ((s._start += n / s._ts), (s._time -= n), (s._tTime -= n)), s.shiftChildren(-n, !1, -Infinity), (o = 0)),
                            a._end > r && a._ts && (r = a._end),
                            (a = e);
                    Ah(s, s === Nl && s._time > r ? s._time : r, 1, 1), (s._dirty = 0);
                }
                return s._tDur;
            }),
            (e.updateRoot = function (t) {
                if ((Nl._ts && (nh(Nl, yh(t, Nl)), (Hl = su.frame)), su.frame >= qc)) {
                    qc += oc.autoSleep || 120;
                    var e = Nl._first;
                    if ((!e || !e._ts) && oc.autoSleep && su._listeners.length < 2) {
                        for (; e && !e._ts; ) e = e._next;
                        e || su.sleep();
                    }
                }
            }),
            e
        );
    })(_u);
    sh(xu.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var wu,
        bu = function (t, e, n, i, r, s, a) {
            var o,
                l,
                c,
                h,
                u,
                d,
                p,
                f,
                m = new Vu(this._pt, t, e, 0, 1, Bu, null, r),
                g = 0,
                v = 0;
            for (m.b = n, m.e = i, n += "", (p = ~(i += "").indexOf("random(")) && (i = Wh(i)), s && (s((f = [n, i]), t, e), (n = f[0]), (i = f[1])), l = n.match(Cc) || []; (o = Cc.exec(i)); )
                (h = o[0]),
                    (u = i.substring(g, o.index)),
                    c ? (c = (c + 1) % 5) : "rgba(" === u.substr(-5) && (c = 1),
                    h !== l[v++] &&
                        ((d = parseFloat(l[v - 1]) || 0),
                        (m._pt = { _next: m._pt, p: u || 1 === v ? u : ",", s: d, c: "=" === h.charAt(1) ? parseFloat(h.substr(2)) * ("-" === h.charAt(0) ? -1 : 1) : parseFloat(h) - d, m: c && c < 4 ? Math.round : 0 }),
                        (g = Cc.lastIndex));
            return (m.c = g < i.length ? i.substring(g, i.length) : ""), (m.fp = a), (Pc.test(i) || p) && (m.e = 0), (this._pt = m), m;
        },
        Mu = function (t, e, n, i, r, s, a, o, l) {
            yc(i) && (i = i(r || 0, t, s));
            var c,
                h = t[e],
                u = "get" !== n ? n : yc(h) ? (l ? t[e.indexOf("set") || !yc(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]()) : h,
                d = yc(h) ? (l ? Du : Pu) : Cu;
            if ((vc(i) && (~i.indexOf("random(") && (i = Wh(i)), "=" === i.charAt(1) && ((c = parseFloat(u) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Nh(u) || 0)) || 0 === c) && (i = c)), u !== i))
                return isNaN(u * i) || "" === i
                    ? (!h && !(e in t) && Bc(e, i), bu.call(this, t, e, u, i, d, o || oc.stringFilter, l))
                    : ((c = new Vu(this._pt, t, e, +u || 0, i - (u || 0), "boolean" == typeof h ? Ou : zu, 0, d)), l && (c.fp = l), a && c.modifier(a, this, t), (this._pt = c));
        },
        Su = function (t, e, n, i, r, s) {
            var a, o, l, c;
            if (
                Wc[t] &&
                !1 !==
                    (a = new Wc[t]()).init(
                        r,
                        a.rawVars
                            ? e[t]
                            : (function (t, e, n, i, r) {
                                  if ((yc(t) && (t = Eu(t, r, e, n, i)), !wc(t) || (t.style && t.nodeType) || Ec(t) || Tc(t))) return vc(t) ? Eu(t, r, e, n, i) : t;
                                  var s,
                                      a = {};
                                  for (s in t) a[s] = Eu(t[s], r, e, n, i);
                                  return a;
                              })(e[t], i, r, s, n),
                        n,
                        i,
                        s
                    ) &&
                ((n._pt = o = new Vu(n._pt, r, t, 0, 1, a.render, a, 0, a.priority)), n !== Ul)
            )
                for (l = n._ptLookup[n._targets.indexOf(r)], c = a._props.length; c--; ) l[a._props[c]] = o;
            return a;
        },
        Tu = function t(e, n) {
            var i,
                r,
                s,
                a,
                o,
                l,
                c,
                h,
                u,
                d,
                p,
                f,
                m,
                g = e.vars,
                v = g.ease,
                y = g.startAt,
                _ = g.immediateRender,
                x = g.lazy,
                w = g.onUpdate,
                b = g.onUpdateParams,
                M = g.callbackScope,
                S = g.runBackwards,
                T = g.yoyoEase,
                E = g.keyframes,
                A = g.autoRevert,
                L = e._dur,
                R = e._startAt,
                C = e._targets,
                P = e.parent,
                D = P && "nested" === P.data ? P.parent._targets : C,
                I = "auto" === e._overwrite && !Il,
                N = e.timeline;
            if (
                (N && (!E || !v) && (v = "none"),
                (e._ease = pu(v, lc.ease)),
                (e._yEase = T ? uu(pu(!0 === T ? v : T, lc.ease)) : 0),
                T && e._yoyo && !e._repeat && ((T = e._yEase), (e._yEase = e._ease), (e._ease = T)),
                (e._from = !N && !!g.runBackwards),
                !N)
            ) {
                if (((f = (h = C[0] ? Jc(C[0]).harness : 0) && g[h.prop]), (i = ch(g, kc)), R && R.render(-1, !0).kill(), y))
                    if (
                        (dh((e._startAt = Ru.set(C, sh({ data: "isStart", overwrite: !1, parent: P, immediateRender: !0, lazy: bc(x), startAt: null, delay: 0, onUpdate: w, onUpdateParams: b, callbackScope: M, stagger: 0 }, y)))),
                        n < 0 && !_ && !A && e._startAt.render(-1, !0),
                        _)
                    ) {
                        if ((n > 0 && !A && (e._startAt = 0), L && n <= 0)) return void (n && (e._zTime = n));
                    } else !1 === A && (e._startAt = 0);
                else if (S && L)
                    if (R) !A && (e._startAt = 0);
                    else if (
                        (n && (_ = !1),
                        (s = sh({ overwrite: !1, data: "isFromStart", lazy: _ && bc(x), immediateRender: _, stagger: 0, parent: P }, i)),
                        f && (s[h.prop] = f),
                        dh((e._startAt = Ru.set(C, s))),
                        n < 0 && e._startAt.render(-1, !0),
                        _)
                    ) {
                        if (!n) return;
                    } else t(e._startAt, hc);
                for (e._pt = 0, x = (L && bc(x)) || (x && !L), r = 0; r < C.length; r++) {
                    if (
                        ((c = (o = C[r])._gsap || Zc(C)[r]._gsap),
                        (e._ptLookup[r] = d = {}),
                        Vc[c.id] && Gc.length && eh(),
                        (p = D === C ? r : D.indexOf(o)),
                        h &&
                            !1 !== (u = new h()).init(o, f || i, e, p, D) &&
                            ((e._pt = a = new Vu(e._pt, o, u.name, 0, 1, u.render, u, 0, u.priority)),
                            u._props.forEach(function (t) {
                                d[t] = a;
                            }),
                            u.priority && (l = 1)),
                        !h || f)
                    )
                        for (s in i) Wc[s] && (u = Su(s, i, e, p, o, D)) ? u.priority && (l = 1) : (d[s] = a = Mu.call(e, o, s, "get", i[s], p, D, 0, g.stringFilter));
                    e._op && e._op[r] && e.kill(o, e._op[r]), I && e._pt && ((wu = e), Nl.killTweensOf(o, d, e.globalTime(0)), (m = !e.parent), (wu = 0)), e._pt && x && (Vc[c.id] = 1);
                }
                l && Gu(e), e._onInit && e._onInit(e);
            }
            (e._onUpdate = w), (e._initted = (!e._op || e._pt) && !m);
        },
        Eu = function (t, e, n, i, r) {
            return yc(t) ? t.call(e, n, i, r) : vc(t) && ~t.indexOf("random(") ? Wh(t) : t;
        },
        Au = Yc + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Lu = (Au + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
        Ru = (function (t) {
            function e(e, n, i, r) {
                var s;
                "number" == typeof n && ((i.duration = n), (n = i), (i = null));
                var a,
                    o,
                    l,
                    c,
                    h,
                    u,
                    d,
                    p,
                    f = (s = t.call(this, r ? n : hh(n)) || this).vars,
                    m = f.duration,
                    g = f.delay,
                    v = f.immediateRender,
                    y = f.stagger,
                    _ = f.overwrite,
                    x = f.keyframes,
                    w = f.defaults,
                    b = f.scrollTrigger,
                    M = f.yoyoEase,
                    S = n.parent || Nl,
                    T = (Ec(e) || Tc(e) ? _c(e[0]) : "length" in n) ? [e] : Bh(e);
                if (((s._targets = T.length ? Zc(T) : Fc("GSAP target " + e + " not found. https://greensock.com", !oc.nullTargetWarn) || []), (s._ptLookup = []), (s._overwrite = _), x || y || Sc(m) || Sc(g))) {
                    if (((n = s.vars), (a = s.timeline = new xu({ data: "nested", defaults: w || {} })).kill(), (a.parent = a._dp = Pl(s)), (a._start = 0), x))
                        sh(a.vars.defaults, { ease: "none" }),
                            y
                                ? T.forEach(function (t, e) {
                                      return x.forEach(function (n, i) {
                                          return a.to(t, n, i ? ">" : e * y);
                                      });
                                  })
                                : x.forEach(function (t) {
                                      return a.to(T, t, ">");
                                  });
                    else {
                        if (((c = T.length), (d = y ? Hh(y) : Uc), wc(y))) for (h in y) ~Au.indexOf(h) && (p || (p = {}), (p[h] = y[h]));
                        for (o = 0; o < c; o++) {
                            for (h in ((l = {}), n)) Lu.indexOf(h) < 0 && (l[h] = n[h]);
                            (l.stagger = 0),
                                M && (l.yoyoEase = M),
                                p && oh(l, p),
                                (u = T[o]),
                                (l.duration = +Eu(m, Pl(s), o, u, T)),
                                (l.delay = (+Eu(g, Pl(s), o, u, T) || 0) - s._delay),
                                !y && 1 === c && l.delay && ((s._delay = g = l.delay), (s._start += g), (l.delay = 0)),
                                a.to(u, l, d(o, u, T));
                        }
                        a.duration() ? (m = g = 0) : (s.timeline = 0);
                    }
                    m || s.duration((m = a.duration()));
                } else s.timeline = 0;
                return (
                    !0 !== _ || Il || ((wu = Pl(s)), Nl.killTweensOf(T), (wu = 0)),
                    bh(S, Pl(s), i),
                    n.reversed && s.reverse(),
                    n.paused && s.paused(!0),
                    (v || (!m && !x && s._start === $c(S._time) && bc(v) && mh(Pl(s)) && "nested" !== S.data)) && ((s._tTime = -1e-8), s.render(Math.max(0, -g))),
                    b && Mh(Pl(s), b),
                    s
                );
            }
            Dl(e, t);
            var n = e.prototype;
            return (
                (n.render = function (t, e, n) {
                    var i,
                        r,
                        s,
                        a,
                        o,
                        l,
                        c,
                        h,
                        u,
                        d = this._time,
                        p = this._tDur,
                        f = this._dur,
                        m = t > p - hc && t >= 0 ? p : t < hc ? 0 : t;
                    if (f) {
                        if (m !== this._tTime || !t || n || (!this._initted && this._tTime) || (this._startAt && this._zTime < 0 != t < 0)) {
                            if (((i = m), (h = this.timeline), this._repeat)) {
                                if (((a = f + this._rDelay), this._repeat < -1 && t < 0)) return this.totalTime(100 * a + t, e, n);
                                if (
                                    ((i = $c(m % a)),
                                    m === p ? ((s = this._repeat), (i = f)) : ((s = ~~(m / a)) && s === m / a && ((i = f), s--), i > f && (i = f)),
                                    (l = this._yoyo && 1 & s) && ((u = this._yEase), (i = f - i)),
                                    (o = vh(this._tTime, a)),
                                    i === d && !n && this._initted)
                                )
                                    return this;
                                s !== o && (h && this._yEase && du(h, l), !this.vars.repeatRefresh || l || this._lock || ((this._lock = n = 1), (this.render($c(a * s), !0).invalidate()._lock = 0)));
                            }
                            if (!this._initted) {
                                if (Sh(this, t < 0 ? t : i, n, e)) return (this._tTime = 0), this;
                                if (f !== this._dur) return this.render(t, e, n);
                            }
                            if (
                                ((this._tTime = m),
                                (this._time = i),
                                !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                                (this.ratio = c = (u || this._ease)(i / f)),
                                this._from && (this.ratio = c = 1 - c),
                                i && !d && !e && Xh(this, "onStart"),
                                i && !d && !e && (Xh(this, "onStart"), this._tTime !== m))
                            )
                                return this;
                            for (r = this._pt; r; ) r.r(c, r.d), (r = r._next);
                            (h && h.render(t < 0 ? t : !i && l ? -1e-8 : h._dur * c, e, n)) || (this._startAt && (this._zTime = t)),
                                this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n), Xh(this, "onUpdate")),
                                this._repeat && s !== o && this.vars.onRepeat && !e && this.parent && Xh(this, "onRepeat"),
                                (m !== this._tDur && m) ||
                                    this._tTime !== m ||
                                    (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                                    (t || !f) && ((m === this._tDur && this._ts > 0) || (!m && this._ts < 0)) && dh(this, 1),
                                    e || (t < 0 && !d) || (!m && !d) || (Xh(this, m === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < p && this.timeScale() > 0) && this._prom()));
                        }
                    } else
                        !(function (t, e, n, i) {
                            var r,
                                s,
                                a,
                                o = t.ratio,
                                l = e < 0 || (!e && ((!t._start && Th(t) && (t._initted || !Eh(t))) || ((t._ts < 0 || t._dp._ts < 0) && !Eh(t)))) ? 0 : 1,
                                c = t._rDelay,
                                h = 0;
                            if (
                                (c && t._repeat && ((h = Ih(0, t._tDur, e)), (s = vh(h, c)), (a = vh(t._tTime, c)), t._yoyo && 1 & s && (l = 1 - l), s !== a && ((o = 1 - l), t.vars.repeatRefresh && t._initted && t.invalidate())),
                                l !== o || i || t._zTime === hc || (!e && t._zTime))
                            ) {
                                if (!t._initted && Sh(t, e, i, n)) return;
                                for (a = t._zTime, t._zTime = e || (n ? hc : 0), n || (n = e && !a), t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = h, r = t._pt; r; ) r.r(l, r.d), (r = r._next);
                                t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                                    t._onUpdate && !n && Xh(t, "onUpdate"),
                                    h && t._repeat && !n && t.parent && Xh(t, "onRepeat"),
                                    (e >= t._tDur || e < 0) && t.ratio === l && (l && dh(t, 1), n || (Xh(t, l ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
                            } else t._zTime || (t._zTime = e);
                        })(this, t, e, n);
                    return this;
                }),
                (n.targets = function () {
                    return this._targets;
                }),
                (n.invalidate = function () {
                    return (this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0), (this._ptLookup = []), this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this);
                }),
                (n.kill = function (t, e) {
                    if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e)))) return (this._lazy = this._pt = 0), this.parent ? Yh(this) : this;
                    if (this.timeline) {
                        var n = this.timeline.totalDuration();
                        return this.timeline.killTweensOf(t, e, wu && !0 !== wu.vars.overwrite)._first || Yh(this), this.parent && n !== this.timeline.totalDuration() && Ah(this, (this._dur * this.timeline._tDur) / n, 0, 1), this;
                    }
                    var i,
                        r,
                        s,
                        a,
                        o,
                        l,
                        c,
                        h = this._targets,
                        u = t ? Bh(t) : h,
                        d = this._ptLookup,
                        p = this._pt;
                    if (
                        (!e || "all" === e) &&
                        (function (t, e) {
                            for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n]; );
                            return n < 0;
                        })(h, u)
                    )
                        return "all" === e && (this._pt = 0), Yh(this);
                    for (
                        i = this._op = this._op || [],
                            "all" !== e &&
                                (vc(e) &&
                                    ((o = {}),
                                    Kc(e, function (t) {
                                        return (o[t] = 1);
                                    }),
                                    (e = o)),
                                (e = (function (t, e) {
                                    var n,
                                        i,
                                        r,
                                        s,
                                        a = t[0] ? Jc(t[0]).harness : 0,
                                        o = a && a.aliases;
                                    if (!o) return e;
                                    for (i in ((n = oh({}, e)), o)) if ((i in n)) for (r = (s = o[i].split(",")).length; r--; ) n[s[r]] = n[i];
                                    return n;
                                })(h, e))),
                            c = h.length;
                        c--;

                    )
                        if (~u.indexOf(h[c]))
                            for (o in ((r = d[c]), "all" === e ? ((i[c] = e), (a = r), (s = {})) : ((s = i[c] = i[c] || {}), (a = e)), a))
                                (l = r && r[o]) && (("kill" in l.d && !0 !== l.d.kill(o)) || uh(this, l, "_pt"), delete r[o]), "all" !== s && (s[o] = 1);
                    return this._initted && !this._pt && p && Yh(this), this;
                }),
                (e.to = function (t, n) {
                    return new e(t, n, arguments[2]);
                }),
                (e.from = function (t, e) {
                    return Ph(1, arguments);
                }),
                (e.delayedCall = function (t, n, i, r) {
                    return new e(n, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: n, onReverseComplete: n, onCompleteParams: i, onReverseCompleteParams: i, callbackScope: r });
                }),
                (e.fromTo = function (t, e, n) {
                    return Ph(2, arguments);
                }),
                (e.set = function (t, n) {
                    return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(t, n);
                }),
                (e.killTweensOf = function (t, e, n) {
                    return Nl.killTweensOf(t, e, n);
                }),
                e
            );
        })(_u);
    sh(Ru.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
        Kc("staggerTo,staggerFrom,staggerFromTo", function (t) {
            Ru[t] = function () {
                var e = new xu(),
                    n = zh.call(arguments, 0);
                return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n);
            };
        });
    var Cu = function (t, e, n) {
            return (t[e] = n);
        },
        Pu = function (t, e, n) {
            return t[e](n);
        },
        Du = function (t, e, n, i) {
            return t[e](i.fp, n);
        },
        Iu = function (t, e, n) {
            return t.setAttribute(e, n);
        },
        Nu = function (t, e) {
            return yc(t[e]) ? Pu : xc(t[e]) && t.setAttribute ? Iu : Cu;
        },
        zu = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
        },
        Ou = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        Bu = function (t, e) {
            var n = e._pt,
                i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
                for (; n; ) (i = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + i), (n = n._next);
                i += e.c;
            }
            e.set(e.t, e.p, i, e);
        },
        Fu = function (t, e) {
            for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
        },
        Hu = function (t, e, n, i) {
            for (var r, s = this._pt; s; ) (r = s._next), s.p === i && s.modifier(t, e, n), (s = r);
        },
        Uu = function (t) {
            for (var e, n, i = this._pt; i; ) (n = i._next), (i.p === t && !i.op) || i.op === t ? uh(this, i, "_pt") : i.dep || (e = 1), (i = n);
            return !e;
        },
        ku = function (t, e, n, i) {
            i.mSet(t, e, i.m.call(i.tween, n, i.mt), i);
        },
        Gu = function (t) {
            for (var e, n, i, r, s = t._pt; s; ) {
                for (e = s._next, n = i; n && n.pr > s.pr; ) n = n._next;
                (s._prev = n ? n._prev : r) ? (s._prev._next = s) : (i = s), (s._next = n) ? (n._prev = s) : (r = s), (s = e);
            }
            t._pt = i;
        },
        Vu = (function () {
            function t(t, e, n, i, r, s, a, o, l) {
                (this.t = e), (this.s = i), (this.c = r), (this.p = n), (this.r = s || zu), (this.d = a || this), (this.set = o || Cu), (this.pr = l || 0), (this._next = t), t && (t._prev = this);
            }
            return (
                (t.prototype.modifier = function (t, e, n) {
                    (this.mSet = this.mSet || this.set), (this.set = ku), (this.m = t), (this.mt = n), (this.tween = e);
                }),
                t
            );
        })();
    Kc(
        Yc +
            "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (t) {
            return (kc[t] = 1);
        }
    ),
        (Nc.TweenMax = Nc.TweenLite = Ru),
        (Nc.TimelineLite = Nc.TimelineMax = xu),
        (Nl = new xu({ sortChildren: !1, defaults: lc, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 })),
        (oc.stringFilter = ru);
    var Wu = {
        registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            e.forEach(function (t) {
                return Zh(t);
            });
        },
        timeline: function (t) {
            return new xu(t);
        },
        getTweensOf: function (t, e) {
            return Nl.getTweensOf(t, e);
        },
        getProperty: function (t, e, n, i) {
            vc(t) && (t = Bh(t)[0]);
            var r = Jc(t || {}).get,
                s = n ? rh : ih;
            return (
                "native" === n && (n = ""),
                t
                    ? e
                        ? s(((Wc[e] && Wc[e].get) || r)(t, e, n, i))
                        : function (e, n, i) {
                              return s(((Wc[e] && Wc[e].get) || r)(t, e, n, i));
                          }
                    : t
            );
        },
        quickSetter: function (t, e, n) {
            if ((t = Bh(t)).length > 1) {
                var i = t.map(function (t) {
                        return Xu.quickSetter(t, e, n);
                    }),
                    r = i.length;
                return function (t) {
                    for (var e = r; e--; ) i[e](t);
                };
            }
            t = t[0] || {};
            var s = Wc[e],
                a = Jc(t),
                o = (a.harness && (a.harness.aliases || {})[e]) || e,
                l = s
                    ? function (e) {
                          var i = new s();
                          (Ul._pt = 0), i.init(t, n ? e + n : e, Ul, 0, [t]), i.render(1, i), Ul._pt && Fu(1, Ul);
                      }
                    : a.set(t, o);
            return s
                ? l
                : function (e) {
                      return l(t, o, n ? e + n : e, a, 1);
                  };
        },
        isTweening: function (t) {
            return Nl.getTweensOf(t, !0).length > 0;
        },
        defaults: function (t) {
            return t && t.ease && (t.ease = pu(t.ease, lc.ease)), lh(lc, t || {});
        },
        config: function (t) {
            return lh(oc, t || {});
        },
        registerEffect: function (t) {
            var e = t.name,
                n = t.effect,
                i = t.plugins,
                r = t.defaults,
                s = t.extendTimeline;
            (i || "").split(",").forEach(function (t) {
                return t && !Wc[t] && !Nc[t] && Fc(e + " effect requires " + t + " plugin.");
            }),
                (jc[e] = function (t, e, i) {
                    return n(Bh(t), sh(e || {}, r), i);
                }),
                s &&
                    (xu.prototype[e] = function (t, n, i) {
                        return this.add(jc[e](t, wc(n) ? n : (i = n) && {}, this), i);
                    });
        },
        registerEase: function (t, e) {
            ou[t] = pu(e);
        },
        parseEase: function (t, e) {
            return arguments.length ? pu(t, e) : ou;
        },
        getById: function (t) {
            return Nl.getById(t);
        },
        exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var n,
                i,
                r = new xu(t);
            for (r.smoothChildTiming = bc(t.smoothChildTiming), Nl.remove(r), r._dp = 0, r._time = r._tTime = Nl._time, n = Nl._first; n; )
                (i = n._next), (!e && !n._dur && n instanceof Ru && n.vars.onComplete === n._targets[0]) || bh(r, n, n._start - n._delay), (n = i);
            return bh(Nl, r, 0), r;
        },
        utils: {
            wrap: function t(e, n, i) {
                var r = n - e;
                return Ec(e)
                    ? Vh(e, t(0, e.length), n)
                    : Dh(i, function (t) {
                          return ((r + ((t - e) % r)) % r) + e;
                      });
            },
            wrapYoyo: function t(e, n, i) {
                var r = n - e,
                    s = 2 * r;
                return Ec(e)
                    ? Vh(e, t(0, e.length - 1), n)
                    : Dh(i, function (t) {
                          return e + ((t = (s + ((t - e) % s)) % s || 0) > r ? s - t : t);
                      });
            },
            distribute: Hh,
            random: Gh,
            snap: kh,
            normalize: function (t, e, n) {
                return jh(t, e, 0, 1, n);
            },
            getUnit: Nh,
            clamp: function (t, e, n) {
                return Dh(n, function (n) {
                    return Ih(t, e, n);
                });
            },
            splitColor: $h,
            toArray: Bh,
            selector: function (t) {
                return (
                    (t = Bh(t)[0] || Fc("Invalid scope") || {}),
                    function (e) {
                        var n = t.current || t.nativeElement || t;
                        return Bh(e, n.querySelectorAll ? n : n === t ? Fc("Invalid scope") || Bl.createElement("div") : t);
                    }
                );
            },
            mapRange: jh,
            pipe: function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return function (t) {
                    return e.reduce(function (t, e) {
                        return e(t);
                    }, t);
                };
            },
            unitize: function (t, e) {
                return function (n) {
                    return t(parseFloat(n)) + (e || Nh(n));
                };
            },
            interpolate: function t(e, n, i, r) {
                var s = isNaN(e + n)
                    ? 0
                    : function (t) {
                          return (1 - t) * e + t * n;
                      };
                if (!s) {
                    var a,
                        o,
                        l,
                        c,
                        h,
                        u = vc(e),
                        d = {};
                    if ((!0 === i && (r = 1) && (i = null), u)) (e = { p: e }), (n = { p: n });
                    else if (Ec(e) && !Ec(n)) {
                        for (l = [], c = e.length, h = c - 2, o = 1; o < c; o++) l.push(t(e[o - 1], e[o]));
                        c--,
                            (s = function (t) {
                                t *= c;
                                var e = Math.min(h, ~~t);
                                return l[e](t - e);
                            }),
                            (i = n);
                    } else r || (e = oh(Ec(e) ? [] : {}, e));
                    if (!l) {
                        for (a in n) Mu.call(d, e, a, "get", n[a]);
                        s = function (t) {
                            return Fu(t, d) || (u ? e.p : e);
                        };
                    }
                }
                return Dh(i, s);
            },
            shuffle: Fh,
        },
        install: Oc,
        effects: jc,
        ticker: su,
        updateRoot: xu.updateRoot,
        plugins: Wc,
        globalTimeline: Nl,
        core: {
            PropTween: Vu,
            globals: Hc,
            Tween: Ru,
            Timeline: xu,
            Animation: _u,
            getCache: Jc,
            _removeLinkedListItem: uh,
            suppressOverwrites: function (t) {
                return (Il = t);
            },
        },
    };
    Kc("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return (Wu[t] = Ru[t]);
    }),
        su.add(xu.updateRoot),
        (Ul = Wu.to({}, { duration: 0 }));
    var ju = function (t, e) {
            for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; ) n = n._next;
            return n;
        },
        qu = function (t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function (t, n, i) {
                    i._onInit = function (t) {
                        var i, r;
                        if (
                            (vc(n) &&
                                ((i = {}),
                                Kc(n, function (t) {
                                    return (i[t] = 1);
                                }),
                                (n = i)),
                            e)
                        ) {
                            for (r in ((i = {}), n)) i[r] = e(n[r]);
                            n = i;
                        }
                        !(function (t, e) {
                            var n,
                                i,
                                r,
                                s = t._targets;
                            for (n in e) for (i = s.length; i--; ) (r = t._ptLookup[i][n]) && (r = r.d) && (r._pt && (r = ju(r, n)), r && r.modifier && r.modifier(e[n], t, s[i], n));
                        })(t, n);
                    };
                },
            };
        },
        Xu =
            Wu.registerPlugin(
                {
                    name: "attr",
                    init: function (t, e, n, i, r) {
                        var s, a;
                        for (s in e) (a = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], i, r, 0, 0, s)) && (a.op = s), this._props.push(s);
                    },
                },
                {
                    name: "endArray",
                    init: function (t, e) {
                        for (var n = e.length; n--; ) this.add(t, n, t[n] || 0, e[n]);
                    },
                },
                qu("roundProps", Uh),
                qu("modifiers"),
                qu("snap", kh)
            ) || Wu;
    (Ru.version = xu.version = Xu.version = "3.7.0"), (Fl = 1), Mc() && au();
    ou.Power0, ou.Power1, ou.Power2, ou.Power3, ou.Power4, ou.Linear, ou.Quad, ou.Cubic, ou.Quart, ou.Quint, ou.Strong, ou.Elastic, ou.Back, ou.SteppedEase, ou.Bounce, ou.Sine, ou.Expo, ou.Circ;
    var Yu,
        Zu,
        Ju,
        Qu,
        Ku,
        $u,
        td,
        ed = {},
        nd = 180 / Math.PI,
        id = Math.PI / 180,
        rd = Math.atan2,
        sd = /([A-Z])/g,
        ad = /(?:left|right|width|margin|padding|x)/i,
        od = /[\s,\(]\S/,
        ld = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
        cd = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
        },
        hd = function (t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
        },
        ud = function (t, e) {
            return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
        },
        dd = function (t, e) {
            var n = e.s + e.c * t;
            e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
        },
        pd = function (t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e);
        },
        fd = function (t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
        },
        md = function (t, e, n) {
            return (t.style[e] = n);
        },
        gd = function (t, e, n) {
            return t.style.setProperty(e, n);
        },
        vd = function (t, e, n) {
            return (t._gsap[e] = n);
        },
        yd = function (t, e, n) {
            return (t._gsap.scaleX = t._gsap.scaleY = n);
        },
        _d = function (t, e, n, i, r) {
            var s = t._gsap;
            (s.scaleX = s.scaleY = n), s.renderTransform(r, s);
        },
        xd = function (t, e, n, i, r) {
            var s = t._gsap;
            (s[e] = n), s.renderTransform(r, s);
        },
        wd = "transform",
        bd = wd + "Origin",
        Md = function (t, e) {
            var n = Zu.createElementNS ? Zu.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Zu.createElement(t);
            return n.style ? n : Zu.createElement(t);
        },
        Sd = function t(e, n, i) {
            var r = getComputedStyle(e);
            return r[n] || r.getPropertyValue(n.replace(sd, "-$1").toLowerCase()) || r.getPropertyValue(n) || (!i && t(e, Ed(n) || n, 1)) || "";
        },
        Td = "O,Moz,ms,Ms,Webkit".split(","),
        Ed = function (t, e, n) {
            var i = (e || Ku).style,
                r = 5;
            if (t in i && !n) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(Td[r] + t in i); );
            return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? Td[r] : "") + t;
        },
        Ad = function () {
            "undefined" != typeof window &&
                window.document &&
                ((Yu = window),
                (Zu = Yu.document),
                (Ju = Zu.documentElement),
                (Ku = Md("div") || { style: {} }),
                Md("div"),
                (wd = Ed(wd)),
                (bd = wd + "Origin"),
                (Ku.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
                (td = !!Ed("perspective")),
                (Qu = 1));
        },
        Ld = function t(e) {
            var n,
                i = Md("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
                r = this.parentNode,
                s = this.nextSibling,
                a = this.style.cssText;
            if ((Ju.appendChild(i), i.appendChild(this), (this.style.display = "block"), e))
                try {
                    (n = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = t);
                } catch (t) {}
            else this._gsapBBox && (n = this._gsapBBox());
            return r && (s ? r.insertBefore(this, s) : r.appendChild(this)), Ju.removeChild(i), (this.style.cssText = a), n;
        },
        Rd = function (t, e) {
            for (var n = e.length; n--; ) if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
        },
        Cd = function (t) {
            var e;
            try {
                e = t.getBBox();
            } catch (n) {
                e = Ld.call(t, !0);
            }
            return (e && (e.width || e.height)) || t.getBBox === Ld || (e = Ld.call(t, !0)), !e || e.width || e.x || e.y ? e : { x: +Rd(t, ["x", "cx", "x1"]) || 0, y: +Rd(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 };
        },
        Pd = function (t) {
            return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Cd(t));
        },
        Dd = function (t, e) {
            if (e) {
                var n = t.style;
                e in ed && e !== bd && (e = wd), n.removeProperty ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) || (e = "-" + e), n.removeProperty(e.replace(sd, "-$1").toLowerCase())) : n.removeAttribute(e);
            }
        },
        Id = function (t, e, n, i, r, s) {
            var a = new Vu(t._pt, e, n, 0, 1, s ? fd : pd);
            return (t._pt = a), (a.b = i), (a.e = r), t._props.push(n), a;
        },
        Nd = { deg: 1, rad: 1, turn: 1 },
        zd = function t(e, n, i, r) {
            var s,
                a,
                o,
                l,
                c = parseFloat(i) || 0,
                h = (i + "").trim().substr((c + "").length) || "px",
                u = Ku.style,
                d = ad.test(n),
                p = "svg" === e.tagName.toLowerCase(),
                f = (p ? "client" : "offset") + (d ? "Width" : "Height"),
                m = 100,
                g = "px" === r,
                v = "%" === r;
            return r === h || !c || Nd[r] || Nd[h]
                ? c
                : ("px" !== h && !g && (c = t(e, n, i, "px")),
                  (l = e.getCTM && Pd(e)),
                  (!v && "%" !== h) || (!ed[n] && !~n.indexOf("adius"))
                      ? ((u[d ? "width" : "height"] = m + (g ? h : r)),
                        (a = ~n.indexOf("adius") || ("em" === r && e.appendChild && !p) ? e : e.parentNode),
                        l && (a = (e.ownerSVGElement || {}).parentNode),
                        (a && a !== Zu && a.appendChild) || (a = Zu.body),
                        (o = a._gsap) && v && o.width && d && o.time === su.time
                            ? $c((c / o.width) * m)
                            : ((v || "%" === h) && (u.position = Sd(e, "position")),
                              a === e && (u.position = "static"),
                              a.appendChild(Ku),
                              (s = Ku[f]),
                              a.removeChild(Ku),
                              (u.position = "absolute"),
                              d && v && (((o = Jc(a)).time = su.time), (o.width = a[f])),
                              $c(g ? (s * c) / m : s && c ? (m / s) * c : 0)))
                      : ((s = l ? e.getBBox()[d ? "width" : "height"] : e[f]), $c(v ? (c / s) * m : (c / 100) * s)));
        },
        Od = function (t, e, n, i) {
            var r;
            return (
                Qu || Ad(),
                e in ld && "transform" !== e && ~(e = ld[e]).indexOf(",") && (e = e.split(",")[0]),
                ed[e] && "transform" !== e
                    ? ((r = Xd(t, i)), (r = "transformOrigin" !== e ? r[e] : r.svg ? r.origin : Yd(Sd(t, bd)) + " " + r.zOrigin + "px"))
                    : (!(r = t.style[e]) || "auto" === r || i || ~(r + "").indexOf("calc(")) && (r = (Ud[e] && Ud[e](t, e, n)) || Sd(t, e) || Qc(t, e) || ("opacity" === e ? 1 : 0)),
                n && !~(r + "").trim().indexOf(" ") ? zd(t, e, r, n) + n : r
            );
        },
        Bd = function (t, e, n, i) {
            if (!n || "none" === n) {
                var r = Ed(e, t, 1),
                    s = r && Sd(t, r, 1);
                s && s !== n ? ((e = r), (n = s)) : "borderColor" === e && (n = Sd(t, "borderTopColor"));
            }
            var a,
                o,
                l,
                c,
                h,
                u,
                d,
                p,
                f,
                m,
                g,
                v,
                y = new Vu(this._pt, t.style, e, 0, 1, Bu),
                _ = 0,
                x = 0;
            if (((y.b = n), (y.e = i), (n += ""), "auto" === (i += "") && ((t.style[e] = i), (i = Sd(t, e) || i), (t.style[e] = n)), ru((a = [n, i])), (i = a[1]), (l = (n = a[0]).match(Rc) || []), (i.match(Rc) || []).length)) {
                for (; (o = Rc.exec(i)); )
                    (d = o[0]),
                        (f = i.substring(_, o.index)),
                        h ? (h = (h + 1) % 5) : ("rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5)) || (h = 1),
                        d !== (u = l[x++] || "") &&
                            ((c = parseFloat(u) || 0),
                            (g = u.substr((c + "").length)),
                            (v = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)),
                            (p = parseFloat(d)),
                            (m = d.substr((p + "").length)),
                            (_ = Rc.lastIndex - m.length),
                            m || ((m = m || oc.units[e] || g), _ === i.length && ((i += m), (y.e += m))),
                            g !== m && (c = zd(t, e, u, m) || 0),
                            (y._pt = { _next: y._pt, p: f || 1 === x ? f : ",", s: c, c: v ? v * p : p - c, m: (h && h < 4) || "zIndex" === e ? Math.round : 0 }));
                y.c = _ < i.length ? i.substring(_, i.length) : "";
            } else y.r = "display" === e && "none" === i ? fd : pd;
            return Pc.test(i) && (y.e = 0), (this._pt = y), y;
        },
        Fd = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
        Hd = function (t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var n,
                    i,
                    r,
                    s = e.t,
                    a = s.style,
                    o = e.u,
                    l = s._gsap;
                if ("all" === o || !0 === o) (a.cssText = ""), (i = 1);
                else for (r = (o = o.split(",")).length; --r > -1; ) (n = o[r]), ed[n] && ((i = 1), (n = "transformOrigin" === n ? bd : wd)), Dd(s, n);
                i && (Dd(s, wd), l && (l.svg && s.removeAttribute("transform"), Xd(s, 1), (l.uncache = 1)));
            }
        },
        Ud = {
            clearProps: function (t, e, n, i, r) {
                if ("isFromStart" !== r.data) {
                    var s = (t._pt = new Vu(t._pt, e, n, 0, 0, Hd));
                    return (s.u = i), (s.pr = -10), (s.tween = r), t._props.push(n), 1;
                }
            },
        },
        kd = [1, 0, 0, 1, 0, 0],
        Gd = {},
        Vd = function (t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
        },
        Wd = function (t) {
            var e = Sd(t, wd);
            return Vd(e) ? kd : e.substr(7).match(Lc).map($c);
        },
        jd = function (t, e) {
            var n,
                i,
                r,
                s,
                a = t._gsap || Jc(t),
                o = t.style,
                l = Wd(t);
            return a.svg && t.getAttribute("transform")
                ? "1,0,0,1,0,0" === (l = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",")
                    ? kd
                    : l
                : (l !== kd ||
                      t.offsetParent ||
                      t === Ju ||
                      a.svg ||
                      ((r = o.display),
                      (o.display = "block"),
                      ((n = t.parentNode) && t.offsetParent) || ((s = 1), (i = t.nextSibling), Ju.appendChild(t)),
                      (l = Wd(t)),
                      r ? (o.display = r) : Dd(t, "display"),
                      s && (i ? n.insertBefore(t, i) : n ? n.appendChild(t) : Ju.removeChild(t))),
                  e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
        },
        qd = function (t, e, n, i, r, s) {
            var a,
                o,
                l,
                c = t._gsap,
                h = r || jd(t, !0),
                u = c.xOrigin || 0,
                d = c.yOrigin || 0,
                p = c.xOffset || 0,
                f = c.yOffset || 0,
                m = h[0],
                g = h[1],
                v = h[2],
                y = h[3],
                _ = h[4],
                x = h[5],
                w = e.split(" "),
                b = parseFloat(w[0]) || 0,
                M = parseFloat(w[1]) || 0;
            n
                ? h !== kd && (o = m * y - g * v) && ((l = b * (-g / o) + M * (m / o) - (m * x - g * _) / o), (b = b * (y / o) + M * (-v / o) + (v * x - y * _) / o), (M = l))
                : ((b = (a = Cd(t)).x + (~w[0].indexOf("%") ? (b / 100) * a.width : b)), (M = a.y + (~(w[1] || w[0]).indexOf("%") ? (M / 100) * a.height : M))),
                i || (!1 !== i && c.smooth) ? ((_ = b - u), (x = M - d), (c.xOffset = p + (_ * m + x * v) - _), (c.yOffset = f + (_ * g + x * y) - x)) : (c.xOffset = c.yOffset = 0),
                (c.xOrigin = b),
                (c.yOrigin = M),
                (c.smooth = !!i),
                (c.origin = e),
                (c.originIsAbsolute = !!n),
                (t.style[bd] = "0px 0px"),
                s && (Id(s, c, "xOrigin", u, b), Id(s, c, "yOrigin", d, M), Id(s, c, "xOffset", p, c.xOffset), Id(s, c, "yOffset", f, c.yOffset)),
                t.setAttribute("data-svg-origin", b + " " + M);
        },
        Xd = function (t, e) {
            var n = t._gsap || new yu(t);
            if ("x" in n && !e && !n.uncache) return n;
            var i,
                r,
                s,
                a,
                o,
                l,
                c,
                h,
                u,
                d,
                p,
                f,
                m,
                g,
                v,
                y,
                _,
                x,
                w,
                b,
                M,
                S,
                T,
                E,
                A,
                L,
                R,
                C,
                P,
                D,
                I,
                N,
                z = t.style,
                O = n.scaleX < 0,
                B = "px",
                F = "deg",
                H = Sd(t, bd) || "0";
            return (
                (i = r = s = l = c = h = u = d = p = 0),
                (a = o = 1),
                (n.svg = !(!t.getCTM || !Pd(t))),
                (g = jd(t, n.svg)),
                n.svg && ((E = (!n.uncache || "0px 0px" === H) && !e && t.getAttribute("data-svg-origin")), qd(t, E || H, !!E || n.originIsAbsolute, !1 !== n.smooth, g)),
                (f = n.xOrigin || 0),
                (m = n.yOrigin || 0),
                g !== kd &&
                    ((x = g[0]),
                    (w = g[1]),
                    (b = g[2]),
                    (M = g[3]),
                    (i = S = g[4]),
                    (r = T = g[5]),
                    6 === g.length
                        ? ((a = Math.sqrt(x * x + w * w)),
                          (o = Math.sqrt(M * M + b * b)),
                          (l = x || w ? rd(w, x) * nd : 0),
                          (u = b || M ? rd(b, M) * nd + l : 0) && (o *= Math.abs(Math.cos(u * id))),
                          n.svg && ((i -= f - (f * x + m * b)), (r -= m - (f * w + m * M))))
                        : ((N = g[6]),
                          (D = g[7]),
                          (R = g[8]),
                          (C = g[9]),
                          (P = g[10]),
                          (I = g[11]),
                          (i = g[12]),
                          (r = g[13]),
                          (s = g[14]),
                          (c = (v = rd(N, P)) * nd),
                          v &&
                              ((E = S * (y = Math.cos(-v)) + R * (_ = Math.sin(-v))),
                              (A = T * y + C * _),
                              (L = N * y + P * _),
                              (R = S * -_ + R * y),
                              (C = T * -_ + C * y),
                              (P = N * -_ + P * y),
                              (I = D * -_ + I * y),
                              (S = E),
                              (T = A),
                              (N = L)),
                          (h = (v = rd(-b, P)) * nd),
                          v && ((y = Math.cos(-v)), (I = M * (_ = Math.sin(-v)) + I * y), (x = E = x * y - R * _), (w = A = w * y - C * _), (b = L = b * y - P * _)),
                          (l = (v = rd(w, x)) * nd),
                          v && ((E = x * (y = Math.cos(v)) + w * (_ = Math.sin(v))), (A = S * y + T * _), (w = w * y - x * _), (T = T * y - S * _), (x = E), (S = A)),
                          c && Math.abs(c) + Math.abs(l) > 359.9 && ((c = l = 0), (h = 180 - h)),
                          (a = $c(Math.sqrt(x * x + w * w + b * b))),
                          (o = $c(Math.sqrt(T * T + N * N))),
                          (v = rd(S, T)),
                          (u = Math.abs(v) > 2e-4 ? v * nd : 0),
                          (p = I ? 1 / (I < 0 ? -I : I) : 0)),
                    n.svg && ((E = t.getAttribute("transform")), (n.forceCSS = t.setAttribute("transform", "") || !Vd(Sd(t, wd))), E && t.setAttribute("transform", E))),
                Math.abs(u) > 90 && Math.abs(u) < 270 && (O ? ((a *= -1), (u += l <= 0 ? 180 : -180), (l += l <= 0 ? 180 : -180)) : ((o *= -1), (u += u <= 0 ? 180 : -180))),
                (n.x = i - ((n.xPercent = i && (n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? (t.offsetWidth * n.xPercent) / 100 : 0) + B),
                (n.y = r - ((n.yPercent = r && (n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? (t.offsetHeight * n.yPercent) / 100 : 0) + B),
                (n.z = s + B),
                (n.scaleX = $c(a)),
                (n.scaleY = $c(o)),
                (n.rotation = $c(l) + F),
                (n.rotationX = $c(c) + F),
                (n.rotationY = $c(h) + F),
                (n.skewX = u + F),
                (n.skewY = d + F),
                (n.transformPerspective = p + B),
                (n.zOrigin = parseFloat(H.split(" ")[2]) || 0) && (z[bd] = Yd(H)),
                (n.xOffset = n.yOffset = 0),
                (n.force3D = oc.force3D),
                (n.renderTransform = n.svg ? ep : td ? tp : Jd),
                (n.uncache = 0),
                n
            );
        },
        Yd = function (t) {
            return (t = t.split(" "))[0] + " " + t[1];
        },
        Zd = function (t, e, n) {
            var i = Nh(e);
            return $c(parseFloat(e) + parseFloat(zd(t, "x", n + "px", i))) + i;
        },
        Jd = function (t, e) {
            (e.z = "0px"), (e.rotationY = e.rotationX = "0deg"), (e.force3D = 0), tp(t, e);
        },
        Qd = "0deg",
        Kd = "0px",
        $d = ") ",
        tp = function (t, e) {
            var n = e || this,
                i = n.xPercent,
                r = n.yPercent,
                s = n.x,
                a = n.y,
                o = n.z,
                l = n.rotation,
                c = n.rotationY,
                h = n.rotationX,
                u = n.skewX,
                d = n.skewY,
                p = n.scaleX,
                f = n.scaleY,
                m = n.transformPerspective,
                g = n.force3D,
                v = n.target,
                y = n.zOrigin,
                _ = "",
                x = ("auto" === g && t && 1 !== t) || !0 === g;
            if (y && (h !== Qd || c !== Qd)) {
                var w,
                    b = parseFloat(c) * id,
                    M = Math.sin(b),
                    S = Math.cos(b);
                (b = parseFloat(h) * id), (w = Math.cos(b)), (s = Zd(v, s, M * w * -y)), (a = Zd(v, a, -Math.sin(b) * -y)), (o = Zd(v, o, S * w * -y + y));
            }
            m !== Kd && (_ += "perspective(" + m + $d),
                (i || r) && (_ += "translate(" + i + "%, " + r + "%) "),
                (x || s !== Kd || a !== Kd || o !== Kd) && (_ += o !== Kd || x ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + $d),
                l !== Qd && (_ += "rotate(" + l + $d),
                c !== Qd && (_ += "rotateY(" + c + $d),
                h !== Qd && (_ += "rotateX(" + h + $d),
                (u === Qd && d === Qd) || (_ += "skew(" + u + ", " + d + $d),
                (1 === p && 1 === f) || (_ += "scale(" + p + ", " + f + $d),
                (v.style[wd] = _ || "translate(0, 0)");
        },
        ep = function (t, e) {
            var n,
                i,
                r,
                s,
                a,
                o = e || this,
                l = o.xPercent,
                c = o.yPercent,
                h = o.x,
                u = o.y,
                d = o.rotation,
                p = o.skewX,
                f = o.skewY,
                m = o.scaleX,
                g = o.scaleY,
                v = o.target,
                y = o.xOrigin,
                _ = o.yOrigin,
                x = o.xOffset,
                w = o.yOffset,
                b = o.forceCSS,
                M = parseFloat(h),
                S = parseFloat(u);
            (d = parseFloat(d)),
                (p = parseFloat(p)),
                (f = parseFloat(f)) && ((p += f = parseFloat(f)), (d += f)),
                d || p
                    ? ((d *= id),
                      (p *= id),
                      (n = Math.cos(d) * m),
                      (i = Math.sin(d) * m),
                      (r = Math.sin(d - p) * -g),
                      (s = Math.cos(d - p) * g),
                      p && ((f *= id), (a = Math.tan(p - f)), (r *= a = Math.sqrt(1 + a * a)), (s *= a), f && ((a = Math.tan(f)), (n *= a = Math.sqrt(1 + a * a)), (i *= a))),
                      (n = $c(n)),
                      (i = $c(i)),
                      (r = $c(r)),
                      (s = $c(s)))
                    : ((n = m), (s = g), (i = r = 0)),
                ((M && !~(h + "").indexOf("px")) || (S && !~(u + "").indexOf("px"))) && ((M = zd(v, "x", h, "px")), (S = zd(v, "y", u, "px"))),
                (y || _ || x || w) && ((M = $c(M + y - (y * n + _ * r) + x)), (S = $c(S + _ - (y * i + _ * s) + w))),
                (l || c) && ((a = v.getBBox()), (M = $c(M + (l / 100) * a.width)), (S = $c(S + (c / 100) * a.height))),
                (a = "matrix(" + n + "," + i + "," + r + "," + s + "," + M + "," + S + ")"),
                v.setAttribute("transform", a),
                b && (v.style[wd] = a);
        },
        np = function (t, e, n, i, r, s) {
            var a,
                o,
                l = 360,
                c = vc(r),
                h = parseFloat(r) * (c && ~r.indexOf("rad") ? nd : 1),
                u = s ? h * s : h - i,
                d = i + u + "deg";
            return (
                c && ("short" === (a = r.split("_")[1]) && (u %= l) !== u % 180 && (u += u < 0 ? l : -360), "cw" === a && u < 0 ? (u = ((u + 36e9) % l) - ~~(u / l) * l) : "ccw" === a && u > 0 && (u = ((u - 36e9) % l) - ~~(u / l) * l)),
                (t._pt = o = new Vu(t._pt, e, n, i, u, hd)),
                (o.e = d),
                (o.u = "deg"),
                t._props.push(n),
                o
            );
        },
        ip = function (t, e) {
            for (var n in e) t[n] = e[n];
            return t;
        },
        rp = function (t, e, n) {
            var i,
                r,
                s,
                a,
                o,
                l,
                c,
                h = ip({}, n._gsap),
                u = n.style;
            for (r in (h.svg
                ? ((s = n.getAttribute("transform")), n.setAttribute("transform", ""), (u[wd] = e), (i = Xd(n, 1)), Dd(n, wd), n.setAttribute("transform", s))
                : ((s = getComputedStyle(n)[wd]), (u[wd] = e), (i = Xd(n, 1)), (u[wd] = s)),
            ed))
                (s = h[r]) !== (a = i[r]) &&
                    "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 &&
                    ((o = Nh(s) !== (c = Nh(a)) ? zd(n, r, s, c) : parseFloat(s)), (l = parseFloat(a)), (t._pt = new Vu(t._pt, i, r, o, l - o, cd)), (t._pt.u = c || 0), t._props.push(r));
            ip(i, h);
        };
    Kc("padding,margin,Width,Radius", function (t, e) {
        var n = "Top",
            i = "Right",
            r = "Bottom",
            s = "Left",
            a = (e < 3 ? [n, i, r, s] : [n + s, n + i, r + i, r + s]).map(function (n) {
                return e < 2 ? t + n : "border" + n + t;
            });
        Ud[e > 1 ? "border" + t : t] = function (t, e, n, i, r) {
            var s, o;
            if (arguments.length < 4)
                return (
                    (s = a.map(function (e) {
                        return Od(t, e, n);
                    })),
                    5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o
                );
            (s = (i + "").split(" ")),
                (o = {}),
                a.forEach(function (t, e) {
                    return (o[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
                }),
                t.init(e, o, r);
        };
    });
    var sp,
        ap,
        op,
        lp = {
            name: "css",
            register: Ad,
            targetTest: function (t) {
                return t.style && t.nodeType;
            },
            init: function (t, e, n, i, r) {
                var s,
                    a,
                    o,
                    l,
                    c,
                    h,
                    u,
                    d,
                    p,
                    f,
                    m,
                    g,
                    v,
                    y,
                    _,
                    x,
                    w,
                    b,
                    M,
                    S = this._props,
                    T = t.style,
                    E = n.vars.startAt;
                for (u in (Qu || Ad(), e))
                    if ("autoRound" !== u && ((a = e[u]), !Wc[u] || !Su(u, e, n, i, t, r)))
                        if (((c = typeof a), (h = Ud[u]), "function" === c && (c = typeof (a = a.call(n, i, t, r))), "string" === c && ~a.indexOf("random(") && (a = Wh(a)), h)) h(this, t, u, a, n) && (_ = 1);
                        else if ("--" === u.substr(0, 2))
                            (s = (getComputedStyle(t).getPropertyValue(u) + "").trim()),
                                (a += ""),
                                (nu.lastIndex = 0),
                                nu.test(s) || ((d = Nh(s)), (p = Nh(a))),
                                p ? d !== p && (s = zd(t, u, s, p) + p) : d && (a += d),
                                this.add(T, "setProperty", s, a, i, r, 0, 0, u),
                                S.push(u);
                        else if ("undefined" !== c) {
                            if (
                                (E && u in E ? ((s = "function" == typeof E[u] ? E[u].call(n, i, t, r) : E[u]), u in oc.units && !Nh(s) && (s += oc.units[u]), "=" === (s + "").charAt(1) && (s = Od(t, u))) : (s = Od(t, u)),
                                (l = parseFloat(s)),
                                (f = "string" === c && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) && (a = a.substr(2)),
                                (o = parseFloat(a)),
                                u in ld &&
                                    ("autoAlpha" === u && (1 === l && "hidden" === Od(t, "visibility") && o && (l = 0), Id(this, T, "visibility", l ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)),
                                    "scale" !== u && "transform" !== u && ~(u = ld[u]).indexOf(",") && (u = u.split(",")[0])),
                                (m = u in ed))
                            )
                                if (
                                    (g ||
                                        (((v = t._gsap).renderTransform && !e.parseTransform) || Xd(t, e.parseTransform),
                                        (y = !1 !== e.smoothOrigin && v.smooth),
                                        ((g = this._pt = new Vu(this._pt, T, wd, 0, 1, v.renderTransform, v, 0, -1)).dep = 1)),
                                    "scale" === u)
                                )
                                    (this._pt = new Vu(this._pt, v, "scaleY", v.scaleY, (f ? f * o : o - v.scaleY) || 0)), S.push("scaleY", u), (u += "X");
                                else {
                                    if ("transformOrigin" === u) {
                                        (w = void 0),
                                            (b = void 0),
                                            (M = void 0),
                                            (w = (x = a).split(" ")),
                                            (b = w[0]),
                                            (M = w[1] || "50%"),
                                            ("top" !== b && "bottom" !== b && "left" !== M && "right" !== M) || ((x = b), (b = M), (M = x)),
                                            (w[0] = Fd[b] || b),
                                            (w[1] = Fd[M] || M),
                                            (a = w.join(" ")),
                                            v.svg ? qd(t, a, 0, y, 0, this) : ((p = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && Id(this, v, "zOrigin", v.zOrigin, p), Id(this, T, u, Yd(s), Yd(a)));
                                        continue;
                                    }
                                    if ("svgOrigin" === u) {
                                        qd(t, a, 1, y, 0, this);
                                        continue;
                                    }
                                    if (u in Gd) {
                                        np(this, v, u, l, a, f);
                                        continue;
                                    }
                                    if ("smoothOrigin" === u) {
                                        Id(this, v, "smooth", v.smooth, a);
                                        continue;
                                    }
                                    if ("force3D" === u) {
                                        v[u] = a;
                                        continue;
                                    }
                                    if ("transform" === u) {
                                        rp(this, a, t);
                                        continue;
                                    }
                                }
                            else u in T || (u = Ed(u) || u);
                            if (m || ((o || 0 === o) && (l || 0 === l) && !od.test(a) && u in T))
                                o || (o = 0),
                                    (d = (s + "").substr((l + "").length)) !== (p = Nh(a) || (u in oc.units ? oc.units[u] : d)) && (l = zd(t, u, s, p)),
                                    (this._pt = new Vu(this._pt, m ? v : T, u, l, f ? f * o : o - l, m || ("px" !== p && "zIndex" !== u) || !1 === e.autoRound ? cd : dd)),
                                    (this._pt.u = p || 0),
                                    d !== p && ((this._pt.b = s), (this._pt.r = ud));
                            else if (u in T) Bd.call(this, t, u, s, a);
                            else {
                                if (!(u in t)) {
                                    Bc(u, a);
                                    continue;
                                }
                                this.add(t, u, s || t[u], a, i, r);
                            }
                            S.push(u);
                        }
                _ && Gu(this);
            },
            get: Od,
            aliases: ld,
            getSetter: function (t, e, n) {
                var i = ld[e];
                return (
                    i && i.indexOf(",") < 0 && (e = i),
                    e in ed && e !== bd && (t._gsap.x || Od(t, "x")) ? (n && $u === n ? ("scale" === e ? yd : vd) : ($u = n || {}) && ("scale" === e ? _d : xd)) : t.style && !xc(t.style[e]) ? md : ~e.indexOf("-") ? gd : Nu(t, e)
                );
            },
            core: { _removeProperty: Dd, _getMatrix: jd },
        };
    (Xu.utils.checkPrefix = Ed),
        (op = Kc((sp = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (ap = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
            ed[t] = 1;
        })),
        Kc(ap, function (t) {
            (oc.units[t] = "deg"), (Gd[t] = 1);
        }),
        (ld[op[13]] = sp + "," + ap),
        Kc("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
            var e = t.split(":");
            ld[e[1]] = op[e[0]];
        }),
        Kc("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
            oc.units[t] = "px";
        }),
        Xu.registerPlugin(lp);
    var cp = Xu.registerPlugin(lp) || Xu;
    cp.core.Tween;
    var hp = t(
        '#define GLSLIFY 1\n'+
        '// GLSL textureless classic 3D noise "cnoise",\n//\nvec3 mod289(vec3 x)\n'+
        '{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n'+
        '{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n'+
        '{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n'+
        '{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) '+
        '{\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n// Classic Perlin noise, periodic variant\n'+
        'float pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); '+
        '// Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); '+
        '// Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  '+
        'vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); '+
        '// Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  '+
        'vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  '+
        'vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  '+
        'vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  '+
        'vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  '+
        'vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  '+
        'gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  '+
        'vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  '+
        'gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  '+
        'vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  '+
        'gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  '+
        'vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  '+
        'vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  '+
        'vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  '+
        'vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), '+
        'dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  '+
        'g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), '+
        'dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  '+
        'g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  '+
        'float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  '+
        'float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  '+
        'float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  '+
        'float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  '+
        'vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  '+
        'vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  '+
        'return 2.2 * n_xyz;\n}\n\n// https://github.com/dmnsgn/glsl-rotate\nmat3 rotation3dY(float angle) {\n    '+
        'float s = sin(angle);\n    float c = cos(angle);\n\n    return mat3(\n      c, 0.0, -s,\n     '+
        ' 0.0, 1.0, 0.0,\n      s, 0.0, c\n    );\n  }\n  \nvec3 rotateY(vec3 v, float angle) '+
        '{\n  return rotation3dY(angle) * v;\n}\n\n//\n\nuniform float uFrequency;\nuniform float '+
        'uAmplitude;\nuniform float uDensity;\nuniform float uStrength;\n\nvarying float vDistortion;\n'+
        '\nvoid main() {  \n  float distortion = pnoise(normal * uDensity, vec3(10.)) * uStrength;\n\n  '+
        ' vec3 pos = position + (normal * distortion);\n  float angle = sin(uv.y * uFrequency) * uAmplitude;\n  '+
        'pos = rotateY(pos, angle);    \n    \n  vDistortion = distortion;\n\n  '+
        'gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);\n}\n'
    );
    var up = t(
        "#define GLSLIFY 1\nuniform float uOpacity;\nuniform float uDeepPurple;\n "+
        " \nvarying float vDistortion;\n\nvec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) "+
        "{\n  return a + b * cos(6.28318 * (c * t + d));\n  \n}     \n \nvoid main() {\n  "+
        "float distort = vDistortion * 3.;\n\n  vec3 brightness = vec3(.1, .1, .9);\n "+
        " vec3 contrast = vec3(.3, .3, .3);\n  vec3 oscilation = vec3(.5, .5, .9);\n  "+
        "vec3 phase = vec3(.9, .1, .8);\n \n  vec3 color = cosPalette(distort, brightness, contrast, oscilation, phase);\n "+
        " \n  gl_FragColor = vec4(color, vDistortion);\n  "+
        "gl_FragColor += vec4(min(uDeepPurple, 1.), 0., .5, min(uOpacity, 1.));\n}\n"
    );
    new (class {
        constructor() {
            (this.element = document.querySelector(".content")),
                (this.elements = { line: this.element.querySelector(".layout__line") }),
                (this.viewport = { width: window.innerWidth, height: window.innerHeight }),
                (this.mouse = { x: 0, y: 0 }),
                (this.scroll = { height: 0, limit: 0, hard: 0, soft: 0, ease: 0.05, normalized: 0, running: !1 }),
                (this.settings = {
                    uFrequency: { start: 0, end: 4 },
                    uAmplitude: { start: 4, end: 4 },
                    uDensity: { start: 1, end: 1 },
                    uStrength: { start: 0, end: 1.1 },
                    uDeepPurple: { start: 1, end: 0 },
                    uOpacity: { start: 0.1, end: 1 },
                }),
                (this.scene = new jr()),
                (this.renderer = new Gr({ antialias: !0, alpha: !0 })),
                (this.canvas = this.renderer.domElement),
                (this.camera = new xn(75, this.viewport.width / this.viewport.height, 0.1, 10)),
                (this.clock = new tl()),
                (this.smoothScroll = new (class {
                    constructor({ element: t, viewport: e, scroll: n }) {
                        (this.element = t), (this.viewport = e), (this.scroll = n), (this.elements = { scrollContent: this.element.querySelector(".scroll__content") });
                    }
                    setSizes() {
                        (this.scroll.height = this.elements.scrollContent.getBoundingClientRect().height),
                            (this.scroll.limit = this.elements.scrollContent.clientHeight - this.viewport.height),
                            (document.body.style.height = `${this.scroll.height}px`);
                    }
                    update() {
                        (this.scroll.hard = window.scrollY),
                            (this.scroll.hard = cp.utils.clamp(0, this.scroll.limit, this.scroll.hard)),
                            (this.scroll.soft = cp.utils.interpolate(this.scroll.soft, this.scroll.hard, this.scroll.ease)),
                            this.scroll.soft < 0.01 && (this.scroll.soft = 0),
                            (this.elements.scrollContent.style.transform = `translateY(${-this.scroll.soft}px)`);
                    }
                    onResize() {
                        (this.viewport = { width: window.innerWidth, height: window.innerHeight }), this.setSizes();
                    }
                })({ element: this.element, viewport: this.viewport, scroll: this.scroll })),
                cp.defaults({ ease: "power2", duration: 6.6, overwrite: !0 }),
                (this.updateScrollAnimations = this.updateScrollAnimations.bind(this)),
                (this.update = this.update.bind(this)),
                this.init();
        }
        init() {
            this.addCanvas(), this.addCamera(), this.addMesh(), this.addEventListeners(), this.onResize(), this.update();
        }
        addCanvas() {
            this.canvas.classList.add("webgl"), document.body.appendChild(this.canvas);
        }
        addCamera() {
            this.camera.position.set(0, 0, 2.5), this.scene.add(this.camera);
        }
        addMesh() {
            (this.geometry = new xa(1, 64)),
                (this.material = new yn({
                    wireframe: !0,
                    blending: 2,
                    transparent: !0,
                    vertexShader: hp,
                    fragmentShader: up,
                    uniforms: {
                        uFrequency: { value: this.settings.uFrequency.start },
                        uAmplitude: { value: this.settings.uAmplitude.start },
                        uDensity: { value: this.settings.uDensity.start },
                        uStrength: { value: this.settings.uStrength.start },
                        uDeepPurple: { value: this.settings.uDeepPurple.start },
                        uOpacity: { value: this.settings.uOpacity.start },
                    },
                })),
                (this.mesh = new dn(this.geometry, this.material)),
                this.scene.add(this.mesh);
        }
        updateScrollAnimations() {
            (this.scroll.running = !1),
                (this.scroll.normalized = (this.scroll.hard / this.scroll.limit).toFixed(1)),
                cp.to(this.mesh.rotation, { x: this.scroll.normalized * Math.PI }),
                cp.to(this.elements.line, { scaleX: this.scroll.normalized, transformOrigin: "left", duration: 1.5, ease: "ease" });
            for (const t in this.settings)
                this.settings[t].start !== this.settings[t].end && cp.to(this.mesh.material.uniforms[t], { value: this.settings[t].start + this.scroll.normalized * (this.settings[t].end - this.settings[t].start) });
        }
        addEventListeners() {
            window.addEventListener("load", this.onLoad.bind(this)), window.addEventListener("scroll", this.onScroll.bind(this)), window.addEventListener("resize", this.onResize.bind(this));
        }
        onLoad() {
            
            document.body.classList.remove("loading"),
                (this.animations = new (class {
                    constructor(t, e) {
                        (this.element = t),
                            (this.elements = {
                                number: t.querySelector(".section__title-number"),
                                title: t.querySelector(".section__title-text"),
                                arrows: t.querySelectorAll(".section__title-arrow span"),
                                paragraph: t.querySelector(".section__paragraph"),
                                button: t.querySelector(".section__button"),
                            }),
                            (this.camera = e),
                            this.animateIn();
                    }
                    animateIn() {
                        cp.timeline({ defaults: { ease: "expo" } })
                            .from(this.camera.position, { z: 1, duration: 3 })
                            .from([this.elements.number, this.elements.title, 
                            	this.elements.text, this.elements.paragraph, this.elements.button, 
                            	this.elements.arrows], { y: -100, autoAlpha: 0, stagger: 0.2, duration: 1.6 }, "<.3");
                    }
                })(this.element, this.camera));
        }
        onMouseMove(t) {
            (this.mouse.x = 4 * (t.clientX / this.viewport.width).toFixed(2)),
                (this.mouse.y = 2 * (t.clientY / this.viewport.height).toFixed(2)),
                cp.to(this.mesh.material.uniforms.uFrequency, { value: this.mouse.x }),
                cp.to(this.mesh.material.uniforms.uAmplitude, { value: this.mouse.x }),
                cp.to(this.mesh.material.uniforms.uDensity, { value: this.mouse.y }),
                cp.to(this.mesh.material.uniforms.uStrength, { value: this.mouse.y }),
                console.info(`X: ${this.mouse.x}  |  Y: ${this.mouse.y}`);
        }
        onScroll() {
            this.scroll.running || (window.requestAnimationFrame(this.updateScrollAnimations), (this.scroll.running = !0));
        }
        onResize() {
            (this.viewport = { width: window.innerWidth, height: window.innerHeight }),
                this.smoothScroll.onResize(),
                this.viewport.width < this.viewport.height ? this.mesh.scale.set(0.75, 0.75, 0.75) : this.mesh.scale.set(1, 1, 1),
                (this.camera.aspect = this.viewport.width / this.viewport.height),
                this.camera.updateProjectionMatrix(),
                this.renderer.setSize(this.viewport.width, this.viewport.height),
                this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        }
        update() {
            const t = this.clock.getElapsedTime();
            (this.mesh.rotation.y = 0.05 * t), this.smoothScroll.update(), this.render(), window.requestAnimationFrame(this.update);
        }
        render() {
            this.renderer.render(this.scene, this.camera);
        }
    })()

    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.section-two .right-number',{
        scrollTrigger: {
            trigger: '.section-two .right-number',
            start: 'center 75%',
        },
        duration: 2,
        x: 0,
        opacity: 1,
        ease: "expo.out"
    });

    gsap.to('.section-two .right-text',{
        scrollTrigger: {
            trigger: '.section-two .right-text',
            start: 'center 75%',
        },
        duration: 2,
        x: 0,
        opacity: 1,
        delay: .2,
        ease: "expo.out"
    });

    gsap.to('.left-paragraph div',{
        scrollTrigger: {
            trigger: '.left-paragraph div',
            start: 'center 75%',
        },
        duration: 2,
        y: 0,
        opacity: 1,
        delay: .5,
        ease: "expo.out"
    });

    gsap.to('.section-three .left-number',{
        scrollTrigger: {
            trigger: '.section-two .left-number',
            start: 'center 75%',
        },
        duration: 2,
        x: 0,
        opacity: 1,
        ease: "expo.out"
    });

    gsap.to('.section-three .left-text',{
        scrollTrigger: {
            trigger: '.section-two .left-text',
            start: 'center 75%',
        },
        duration: 2,
        x: 0,
        opacity: 1,
        delay: .2,
        ease: "expo.out"
    });

    gsap.to('.section-three .circle--slider',{
        scrollTrigger: {
            trigger: '.section-two .circle--slider',
            start: 'center 75%',
        },
        duration: 2,
        scale: 1,
        opacity: 1,
        delay: .2,
        ease: "expo.out"
    });

    gsap.to('.section-four .right-number',{
        scrollTrigger: {
            trigger: '.section-four .right-number',
            start: 'center 75%',
        },
        duration: 2,
        x: 0,
        opacity: 1,
        ease: "expo.out"
    });

    gsap.to('.section-four .right-text',{
        scrollTrigger: {
            trigger: '.section-four .right-text',
            start: 'center 75%',
        },
        duration: 2,
        x: 0,
        opacity: 1,
        delay: .2,
        ease: "expo.out"
    });

    gsap.to('.section-four .porto-wrapper a',{
        scrollTrigger: {
            trigger: '.section-four .porto-wrapper a',
            start: 'center 75%',
        },
        duration: 2,
        y: 0,
        opacity: 1,
        stagger: .2,
        ease: "expo.out"
    });

    gsap.to('.section-four .left-paragraph',{
        scrollTrigger: {
            trigger: '.section-four .left-paragraph',
            start: 'center 75%',
        },
        duration: 2,
        y: 0,
        opacity: 1,
        delay: .2,
        ease: "expo.out"
    });

    gsap.to('.section-five .left-number',{
        scrollTrigger: {
            trigger: '.section-five .left-number',
            start: 'center 75%',
        },
        duration: 2,
        y: 0,
        opacity: 1,
        ease: "expo.out"
    });

    gsap.to('.section-five .left-text',{
        scrollTrigger: {
            trigger: '.section-five .left-text',
            start: 'center 75%',
        },
        duration: 2,
        y: 0,
        opacity: 1,
        delay: .2,
        ease: "expo.out"
    });

    gsap.to('.section-five .right-paragraph div',{
        scrollTrigger: {
            trigger: '.section-five .right-paragraph div',
            start: 'center 75%',
        },
        duration: 2,
        x: 0,
        opacity: 1,
        delay: .2,
        stagger: .2,
        ease: "expo.out"
    });

})();
