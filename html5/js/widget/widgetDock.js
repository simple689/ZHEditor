function _$M() {
    this._$oD = null;
    this._$lp = null;
    this._$f5 = -1;
    this._$fZ = -1;
    this._$h5 = 0;
    this._$eK = 0;
    this._$eP = 0;
    this._$gu = 0;
}

function _$4I(_$rh) {
    this._$ml = _$rh;
    this._$mo = "";
}

_$4I.prototype._$tX = function (_$rg) {
    this._$mo += _$rg;
    this._$mo += '\r\n';
}
_$4I.prototype._$1Y = function () {
    return this._$mo;
}

function _$4E(_$rp) {
    this._$kZ = 0;
    this._$i1 = _$rp.split("\r\n");
    this._$kk = 0;
    this._$kw = this._$i1.length;
    if (this._$kw == 1) {
        this._$i1 = _$rp.split("\n");
        this._$kw = this._$i1.length;
    }
}

_$4E.prototype._$qX = function () {
    if (this._$kk < this._$kw) {
        var _$tC = this._$i1[this._$kk];
        this._$kk++;
        return _$tC;
    }
    return null;
}

function _$5i() {
    this.x = 0;
    this.y = 0;
}

function _$4F() {
    this.left = 0;
    this.top = 0;
    this.right = 0;
    this.bottom = 0;
}

_$4F.prototype._$0u = function (rc) {
    this.left = rc.left;
    this.top = rc.top;
    this.right = rc.right;
    this.bottom = rc.bottom;
}

function _$67() {
    this.cx = 0;
    this.cy = 0;
}

function _$16() {
    this.width = 0;
    this.height = 0;
}

function _$5A() {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
}

_$bh = {}
;_$bh._$bg = function (_$so, _$8y) {
    function _$fr() {
    }

    _$fr.prototype = _$8y.prototype;
    _$so.prototype = new _$fr();
    _$so.prototype._$an = _$so;
    _$so.baseConstructor = _$8y;
    _$so._$sq = _$8y.prototype;
}
_$mP = {}
;_$mP._$lb = 2;
_$mP._$0C = function (_$b7, _$aK) {
    var _$mQ = document.createElement(_$b7);
    document.getElementById(_$aK).appendChild(_$mQ);
    _$mQ.style.position = "absolute";
    if (DSXDFUtil._$jP == 1 || DSXDFUtil._$jP == 2) {
        _$mQ.style.left = 0;
        _$mQ.style.top = 0;
    } else {
        _$mQ.style.pixelLeft = 0;
        _$mQ.style.pixelTop = 0;
    }
    _$mQ.width = 200;
    _$mQ.height = 200;
    _$mQ.style.visibility = "visible";
    return _$mQ;
}
_$mP._$6r = function (Com, _$dm) {
    Com.style.zIndex = _$dm;
}
_$mP._$0w = function (_$b7, _$rj) {
    var _$mQ = document.createElement(_$b7);
    _$rj.appendChild(_$mQ);
    _$mQ.style.position = "absolute";
    if (DSXDFUtil._$jP == 1 || DSXDFUtil._$jP == 2) {
        _$mQ.style.left = 0;
        _$mQ.style.top = 0;
    } else {
        _$mQ.style.pixelLeft = 0;
        _$mQ.style.pixelTop = 0;
    }
    _$mQ.width = 200;
    _$mQ.height = 200;
    _$mQ.style.visibility = "visible";
    _$mQ.style.zIndex = _$mP._$lb;
    return _$mQ;
}
_$mP._$26 = function (vC) {
    var iL = 0;
    var iT = 0;
    var iR = 0;
    var iB = 0;
    var bL = _$mP._$cC(vC, "border-Left-Width");
    var tm;
    if (bL != null && bL.length > 0) {
        tm = parseFloat(bL);
        iL += Math.round(tm);
    }
    var bR = _$mP._$cC(vC, "border-Right-Width");
    if (bR != null && bR.length > 0) {
        tm = parseFloat(bR);
        iR += Math.round(tm);
    }
    var bT = _$mP._$cC(vC, "border-Top-Width");
    if (bT != null && bT.length > 0) {
        tm = parseFloat(bT);
        iT += Math.round(tm);
    }
    var bB = _$mP._$cC(vC, "border-Bottom-Width");
    if (bB != null && bB.length > 0) {
        tm = parseFloat(bB);
        iB += Math.round(tm);
    }
    var pL = _$mP._$cC(vC, "padding-Left");
    if (pL != null && pL.length > 0) {
        tm = parseFloat(pL);
        iL += Math.round(tm);
    }
    var pR = _$mP._$cC(vC, "padding-Right");
    if (pR != null && pR.length > 0) {
        tm = parseFloat(pR);
        iR += Math.round(tm);
    }
    var pT = _$mP._$cC(vC, "padding-Top");
    if (pT != null && pT.length > 0) {
        tm = parseFloat(pT);
        iT += Math.round(tm);
    }
    var pB = _$mP._$cC(vC, "padding-Bottom");
    if (pB != null && pB.length > 0) {
        tm = parseFloat(pB);
        iB += Math.round(tm);
    }
    var mL = _$mP._$cC(vC, "margin-Left");
    if (mL != null && mL.length > 0) {
        tm = parseFloat(mL);
        iL += Math.round(tm);
    }
    var mR = _$mP._$cC(vC, "margin-Right");
    if (mR != null && mR.length > 0) {
        tm = parseFloat(mR);
        iR += Math.round(tm);
    }
    var mT = _$mP._$cC(vC, "margin-Top");
    if (mT != null && mT.length > 0) {
        tm = parseFloat(mT);
        iT += Math.round(tm);
    }
    var mB = _$mP._$cC(vC, "margin-Bottom");
    if (mB != null && mB.length > 0) {
        tm = parseFloat(mB);
        iB += Math.round(tm);
    }
    return [iL, iT, iR, iB];
}
_$mP._$3S = function (com) {
    if (com.style.visibility == "visible") return true;
    return false;
}
_$mP._$3h = function (com, _$8n) {
    if (com == null) return;
    if (_$8n) {
        com.style.visibility = "visible";
        if (DSXDFUtil._$jP == 2) com.style.display = "block";
    } else {
        com.style.visibility = "hidden";
        if (DSXDFUtil._$jP == 2) com.style.display = "none";
    }
}
_$mP._$5P = function (_$aK, _$b9) {
    var par = document.getElementById(_$aK);
    if (par != null) par.removeChild(_$b9);
}
_$mP._$2r = function (_$t3) {
    if (DSXDFUtil._$jP == 1 || DSXDFUtil._$jP == 2) {
        return parseInt(_$t3.style.left);
    } else {
        return _$t3.style.pixelLeft;
    }
}
_$mP._$2U = function (_$t3) {
    if (DSXDFUtil._$jP == 1 || DSXDFUtil._$jP == 2) {
        return parseInt(_$t3.style.top);
    } else {
        return _$t3.style.pixelTop;
    }
}
_$mP._$2W = function (_$t3, _$7W) {
    if (DSXDFUtil._$jo && _$7W) {
        return _$t3.width;
    }
    return parseInt(_$t3.style.width);
}
_$mP._$2o = function (_$t3, _$7W) {
    if (DSXDFUtil._$jo && _$7W) {
        return _$t3.height;
    }
    return parseInt(_$t3.style.height);
}
_$mP._$6s = function (_$t3, _$t5, _$t8) {
    if (DSXDFUtil._$jP == 1 || DSXDFUtil._$jP == 2) {
        _$t3.style.left = _$t5 + "px";
        _$t3.style.top = _$t8 + "px";
    } else {
        _$t3.style.pixelLeft = _$t5;
        _$t3.style.pixelTop = _$t8;
    }
}
_$mP._$6z = function (_$t3, _$e1, _$dh, _$7Y) {
    if (isNaN(_$dh)) return;
    if (DSXDFUtil._$jo && _$7Y) {
        _$t3.width = _$e1;
        _$t3.height = _$dh;
    } else {
        _$t3.style.width = _$e1 + "px";
        _$t3.style.height = _$dh + "px";
    }
}
_$mP._$6n = function (_$t4, _$dn, _$dZ, _$e1, _$dh) {
    if (isNaN(_$dh)) return;
    if (DSXDFUtil._$jP == 1 || DSXDFUtil._$jP == 2) {
        _$t4.style.left = _$dn + "px";
        _$t4.style.top = _$dZ + "px";
    } else {
        _$t4.style.pixelLeft = _$dn;
        _$t4.style.pixelTop = _$dZ;
    }
    _$t4.style.width = _$e1 + "px";
    _$t4.style.height = _$dh + "px";
}
_$mP._$4A = function (_$t3) {
    _$t3.style.zIndex = _$mP._$lb;
    _$mP._$lb++;
}
_$mP._$aF = function (fontStyle) {
    var body = document.getElementsByTagName("body")[0];
    var _$aZ = document.createElement("div");
    var _$b0 = document.createTextNode("Mj");
    _$aZ.appendChild(_$b0);
    _$aZ.setAttribute("style", fontStyle);
    body.appendChild(_$aZ);
    var result = _$aZ.offsetHeight;
    body.removeChild(_$aZ);
    return result;
}
;_$mP._$aG = function (fontStyle, _$rl) {
    var body = document.getElementsByTagName("body")[0];
    var _$aZ = document.createElement("span");
    var _$b0 = document.createTextNode(_$rl);
    _$aZ.appendChild(_$b0);
    _$aZ.setAttribute("style", fontStyle);
    body.appendChild(_$aZ);
    var result = _$aZ.offsetWidth;
    body.removeChild(_$aZ);
    return result;
}
;_$mP._$2T = function (dt, ft, _$rl, _$ao) {
    if (_$ao != null) {
        var _$tz = "font: " + ft + ";";
        _$ao.font = ft;
        dt.height = _$mP._$aF(_$tz);
        var _$sN = _$ao.measureText(_$rl);
        dt.width = _$sN.width;
    } else {
        var _$tz = "font: " + ft + ";";
        dt.height = _$mP._$aF(_$tz);
        dt.width = _$mP._$aG(_$tz, _$rl);
    }
}
_$mP._$1v = function (_$tZ, _$u1, _$tY, _$u0, cxt) {
    cxt.beginPath();
    cxt.moveTo(_$tZ, _$u1);
    cxt.lineTo(_$tY, _$u0);
    cxt.lineWidth = 1;
    cxt.closePath();
    cxt.stroke();
}
_$mP._$1s = function (_$tZ, _$u1, _$tY, _$u0, cxt) {
    cxt.beginPath();
    var _$tB = 2;
    var _$tu = 5;
    var vno;
    var i;
    if (_$tZ == _$tY) {
        vno = (_$u0 - _$u1) / (_$tB + _$tu);
        if (vno < 0) {
            vno = -vno;
            var _$tM = _$u1;
            _$u1 = _$u0;
            _$u0 = _$tM;
        }
        for (i = 0; i < vno; i++) {
            cxt.moveTo(_$tZ, _$u1 + i * (_$tB + _$tu));
            cxt.lineTo(_$tY, _$u1 + i * (_$tB + _$tu) + _$tu);
        }
    } else {
        vno = (_$tY - _$tZ) / (_$tB + _$tu);
        if (vno < 0) {
            vno = -vno;
            var _$tM = _$tZ;
            _$tZ = _$tY;
            _$tY = _$tM;
        }
        for (i = 0; i < vno; i++) {
            cxt.moveTo(_$tZ + i * (_$tB + _$tu), _$u1);
            cxt.lineTo(_$tZ + i * (_$tB + _$tu) + _$tu, _$u0);
        }
    }
    cxt.lineWidth = 1;
    cxt.closePath();
    cxt.stroke();
}
_$mP._$2L = function (e, pt) {
    var vme = null;
    if (DSXDFUtil._$iX) {
        vme = e.srcElement.document._$mO;
    } else {
        if (e.view != null) {
            vme = e.view.document._$mO;
            if (vme == undefined) {
                vme = e.view.frameElement;
            }
        }
        if (e.srcElement != null && e.srcElement.document != null) {
            vme = e.srcElement.document._$mO;
        }
    }
    if (vme != undefined) {
        var bsp = false;
        if (DSXDFUtil._$jP == 0) {
            var vs = e.srcElement.toString();
            if (vs.indexOf("HTMLHtmlElement") >= 0) {
                bsp = true;
            }
        }
        if (bsp) {
            pt.x = e.clientX - e.layerX + e.pageX;
            pt.y = e.clientY - e.layerY + e.pageY;
        } else {
            pt.x = e.clientX + vme.offsetLeft + vme.clientLeft;
            pt.y = e.clientY + vme.offsetTop + vme.clientTop;
        }
    } else {
        pt.x = e.clientX;
        pt.y = e.clientY;
    }
    pt.x = parseInt(pt.x);
    pt.y = parseInt(pt.y);
}
_$mP._$cC = function (_$b8, _$pT) {
    if (window.getComputedStyle) {
        var t = window.getComputedStyle(_$b8, null);
        if (t != null) return t.getPropertyValue(_$pT);
        return null;
    } else if (_$b8.currentStyle) return _$b8.currentStyle[_$pT];
}
_$mP._$cD = function (_$b8, _$pT) {
    var v = _$mP._$cC(_$b8, _$pT);
    if (v != null && v.length > 0) {
        return Math.round(parseFloat(v));
    }
    return 0;
}
_$mP._$cB = function (_$b8) {
    var _$ay = _$mP._$cC(_$b8, "font");
    if (_$ay != null && _$ay.length > 0) {
        return _$ay;
    } else {
        var _$bo = _$mP._$cC(_$b8, "font-family");
        var _$bN = _$mP._$cC(_$b8, "font-style");
        var fs = _$mP._$cC(_$b8, "font-size");
        var fw = _$mP._$cC(_$b8, "font-weight");
        if (_$bN != null) _$ay = _$bN + " ";
        if (fw != null) _$ay += fw + " ";
        if (fs != null) {
            _$ay += fs + " ";
        }
        if (_$bo != null) {
            _$ay += _$bo;
        }
        return _$ay;
    }
}

function _$D() {
    this._$jX = this._$jR = 10;
    this._$jW = 0;
    this._$m2 = new Array(this._$jX);
}

_$D.prototype._$c = function (_$o7) {
    this._$m2[this._$jW] = _$o7;
    this._$jW++;
    if (this._$jW == this._$jX) {
        var _$pl = new Array(this._$jW + this._$jR);
        var i;
        for (i = 0; i < this._$jW; i++) _$pl[i] = this._$m2[i];
        this._$m2 = _$pl;
        this._$jX += this._$jR;
    }
}
_$D.prototype._$5N = function (_$di) {
    if (this._$jW == 0 || _$di > (this._$jW - 1)) return;
    var i;
    for (i = _$di; i < this._$jW - 1; i++) {
        this._$m2[i] = this._$m2[i + 1];
    }
    ;this._$jW -= 1;
}
_$D.prototype._$5 = function (_$o7, _$di) {
    if (_$di > this._$jW) return false;
    if (_$di == this._$jW) {
        this._$c(_$o7);
        return true;
    }
    ;this._$jW++;
    var i;
    if (this._$jW == this._$jX) {
        var _$pm = new Array(this._$jW + this._$jR);
        for (i = 0; i < _$di; i++) {
            _$pl[i] = this._$m2[i];
        }
        for (i = _$di; i < this._$jW; i++) _$pl[i + 1] = this._$m2[i];
        _$pl[_$di] = _$o7;
        this._$m2 = _$pl;
        this._$jX += this._$jR;
    } else {
        for (i = this._$jW - 1; i > _$di; i--) this._$m2[i] = this._$m2[i - 1];
        this._$m2[_$di] = _$o7;
    }
    return true;
}
_$D.prototype._$2e = function () {
    return this._$jW;
}
_$D.prototype._$60 = function () {
    this._$jX = this._$jR = 10;
    this._$jW = 0;
    this._$m2 = new Array(this._$jX);
}

function _$1c() {
}

_$1c.prototype._$2O = function (_$oc, _$dU, _$pC, _$8q) {
}
_$1c.prototype._$6g = function (_$9u, _$oe, _$9l) {
}

function _$5o() {
}

function _$71() {
    this._$mj = new _$5o();
    this._$iU = false;
    this._$iW = false;
    this._$lj = null;
    this._$le = null;
    this._$jY = 0;
    this._$jw = 0;
    this._$lh = null;
    this._$kN = 0;
    this._$jx = 0;
    this._$jy = 0;
    this._$l2 = 0;
    this._$l7 = 0;
    this._$lf = null;
    this._$lt = null;
    this._$jg = false;
    this._$lq = null;
    this._$j5 = false;
    this._$iL = false;
}

function _$0R() {
    this._$b2 = 0;
    this._$hS = new _$D();
}

function _$5p() {
    this._$in = new _$D();
}
;

function _$F() {
    this._$g4 = 0;
    this._$b6 = 0xffffffff;
    this._$cU = 0x3FF;
    this._$pp = null;
    this._$oN = null;
    this._$pV = null;
    this._$9M = _$E._$3u;
    this._$9x = _$E._$3r;
    this._$8L = false;
    this._$9e = false;
    this._$bJ = 1.0;
    this._$p6 = null;
    this._$oP = null;
    this._$sH = "";
    this._$lI = null;
    this.prc = new _$4F();
    this._$ex = 0;
    this._$eA = 0;
    this._$sc = new _$67();
    this._$pP = false;
    this._$oG = null;
}

_$F.prototype._$f = function (_$ro, _$b3, _$q3, _$de, _$df, _$cU) {
    var _$oV = new _$5f();
    _$oV._$ro = _$ro;
    _$oV._$b3 = _$b3;
    _$oV._$q4 = _$q3;
    _$oV._$sa = _$de;
    _$oV._$sb = _$df;
    _$oV._$cU = _$cU;
    if (this._$lI == null) this._$lI = new Array(0);
    this._$lI.push(_$oV);
}
_$F.prototype._$1Q = function () {
    var _$qi = null;
    if (this._$oN != null) _$qi = this._$oN._$1Q();
    if (_$qi != null) return _$qi;
    if (this._$pV != null) _$qi = this._$pV._$1Q();
    if (_$qi != null) return _$qi;
    if (this._$pV == null && this._$oN == null && !this._$8L) return this;
    return null;
}
_$F.prototype._$5D = function (_$nL, _$9n) {
    if (this._$p6 != null) {
        if (this._$p6._$ln != null) {
            this._$p6._$ln._$5L(this._$p6);
        }
        ;this._$p6._$ln = _$nL;
        _$nL.Add(this._$p6);
    }
    if (this._$oN != null && !this._$oN._$8L) {
        this._$oN._$5D(_$nL, _$9n);
    }
    if (this._$pV != null && !this._$pV._$8L) {
        this._$pV._$5D(_$nL, _$9n);
    } else if ((this._$pV == null) && (this._$pV == null) && !this._$8L && (this._$oP != null)) {
        this._$oP._$lh = this;
        this._$oP._$jw = _$9n;
        this._$oP._$li = _$nL;
        if (this._$oG != null && this._$oG._$iv.length > 1) {
            if (this._$lI == null) this._$lI = new Array(0);
            var _$eq = this._$oG._$iv.length;
            var i;
            for (i = 0; i < _$eq; i++) {
                var _$os = this._$oG._$iv[i]._$nr;
                var _$oV = new _$5f();
                _$os._$jw = _$9n;
                _$oV._$nr = _$os;
                _$os._$li = _$nL;
                this._$lI.push(_$oV);
                _$os._$lh = this;
            }
        }
    }
}
_$F.prototype._$j = function () {
    var _$99 = false;
    var _$po = this._$pp;
    var pme = this;
    var _$pY;
    while (true) {
        if (_$po != null) {
            _$pY = null;
            if (_$po._$oN != null && _$po._$oN != pme) _$pY = _$po._$oN; else if (_$po._$pV != null && _$po._$pV != pme) _$pY = _$po._$pV;
            if (_$pY != null && !_$pY._$8L) {
                break;
            }
            _$po._$8L = true;
            pme = _$po;
            _$po = _$po._$pp;
        } else {
            _$99 = true;
            break;
        }
    }
    return _$99;
}
_$F.prototype._$2Y = function (_$nO) {
    if (this._$oN != null) this._$oN._$2Y(_$nO);
    if (this._$pV != null) this._$pV._$2Y(_$nO);
    if (this._$oN == null && this._$pV == null && !this._$8L) {
        if (this._$oG != null && this._$oG._$iv.length > 1) {
            var _$eq = this._$oG._$iv.length;
            var i;
            for (i = 0; i < _$eq; i++) {
                _$nO._$c(this._$oG._$iv[i]._$nr);
            }
        } else {
            _$nO._$c(this._$oP);
        }
    }
}
_$F.prototype._$5Q = function (_$nv) {
    var _$qi = null;
    if (_$nv != null) {
        this._$9M = _$nv._$9M;
        this._$9x = _$nv._$9x;
        this._$bJ = _$nv._$bJ;
        this._$8L = _$nv._$8L;
        this._$p6 = _$nv._$p6;
        if (this._$p6 != null) this._$p6._$ll = this;
        if (_$nv._$oN != null && !_$nv._$oN._$8L) {
            _$qi = new _$F();
            this._$oN = _$qi;
            _$qi._$pp = this;
            _$qi._$5Q(_$nv._$oN);
        }
        if (_$nv._$pV != null && !_$nv._$pV._$8L) {
            _$qi = new _$F();
            this._$pV = _$qi;
            _$qi._$pp = this;
            _$qi._$5Q(_$nv._$pV);
        } else if ((_$nv._$pV == null) && (_$nv._$pV == null) && !_$nv._$8L && (_$nv._$oP != null)) {
            this._$oP = _$nv._$oP;
            this._$8L = false;
            this._$9M = _$nv._$9M;
            this._$9x = _$nv._$9x;
            this._$bJ = _$nv._$bJ;
            this._$8L = _$nv._$8L;
            if (_$nv._$oG != null && _$nv._$oG._$iv.length > 1) {
                this._$oG = _$nv._$oG;
                this._$oG._$ll = this;
            }
        }
    }
}
_$F.prototype._$3N = function (_$nS, _$9t, _$8a, _$nE) {
    var _$oM = new _$F();
    var _$pb = _$nS;
    _$oM._$pp = this;
    _$pb._$pp = this;
    _$oM._$oN = this._$oN;
    _$oM._$pV = this._$pV;
    if (this._$oN != null) this._$oN._$pp = _$oM;
    if (this._$pV != null) this._$pV._$pp = _$oM;
    _$oM._$oP = this._$oP;
    if (this._$oP != null) {
        if (this._$oP._$lh == this) this._$oP._$lh = _$oM; else if (this._$oP._$lN == this) this._$oP._$lN = _$oM;
    }
    _$oM._$bJ = this._$bJ;
    _$oM._$lI = this._$lI;
    _$oM._$oG = this._$oG;
    _$oM._$9M = this._$9M;
    _$oM._$p6 = this._$p6;
    if (this._$p6 != null) this._$p6._$ll = _$oM;
    _$oM._$ex = this._$ex;
    _$oM._$eA = this._$eA;
    _$oM._$pP = this._$pP;
    _$oM.prc = this.prc;
    if (this._$oG != null) this._$oG._$ll = _$oM;
    _$oM._$7a(this);
    _$oM._$8L = this._$8L;
    if (_$8a) {
        this._$oN = _$pb;
        this._$pV = _$oM;
    } else {
        this._$oN = _$oM;
        this._$pV = _$pb;
    }
    if (_$9t == _$E._$3s || _$9t == _$E._$3t) {
        this._$oN._$9x = _$E._$3s;
        this._$pV._$9x = _$E._$3t;
    } else {
        this._$oN._$9x = _$E._$3u;
        this._$pV._$9x = _$E._$3r;
    }
    ;this._$8L = false;
    _$pb._$8L = true;
    this._$bJ = 1.0;
    this._$9M = this._$oN._$9x;
    this._$P(_$oM, _$pb, _$nE);
    this._$lI = null;
    this._$oG = null;
    this._$oP = null;
    this._$p6 = null;
}
_$F.prototype._$P = function (_$nH, _$nS, _$nW) {
    {
        var _$qU = new _$4F();
        _$nH._$28(_$qU);
        var _$gA = _$qU.bottom - _$qU.top;
        var _$gB = _$qU.right - _$qU.left;
        if ((this._$9M == _$E._$3u || this._$9M == _$E._$3r) && _$gA > 0 && (_$gA > _$nW.cy) && _$nW.cy > 0) {
            if (_$nS._$9x == _$E._$3u) {
                this._$bJ = 1.0 * _$nW.cy / (_$gA - _$nW.cy);
            } else {
                this._$bJ = 1.0 * (_$gA - _$nW.cy) / _$nW.cy;
            }
        } else if ((this._$9M == _$E._$3s || this._$9M == _$E._$3t) && _$gB > 0 && (_$gB > _$nW.cx) && _$nW.cx > 0) {
            if (_$nS._$9x == _$E._$3s) this._$bJ = 1.0 * _$nW.cx / (_$gB - _$nW.cx); else this._$bJ = 1.0 * (_$gB - _$nW.cx) / _$nW.cx;
        }
    }
}
_$F.prototype._$5R = function (_$nr) {
    if (this._$oG != null) {
        return this._$oG._$5R(_$nr);
    }
    return false;
}
_$F.prototype._$7a = function (_$nY) {
    if (this._$lI == null || this._$lI.length == 0) return;
    var _$gF = this._$lI.length;
    var _$qh;
    var i;
    for (i = 0; i < _$gF; i++) {
        _$qh = this._$lI[i]._$nr;
        if (_$qh != null) {
            if (_$qh._$lh == _$nY) _$qh._$lh = this;
            if (_$qh._$lN == _$nY) _$qh._$lN = this;
        }
    }
}
_$F.prototype._$6y = function (_$di, _$nL) {
    if (this._$lI == null || this._$lI.length == 0) return;
    var _$gF = this._$lI.length;
    var _$qh;
    var i;
    for (i = 0; i < _$gF; i++) {
        _$qh = this._$lI[i]._$nr;
        if (_$qh != null) {
            if (_$qh._$li == _$nL) _$qh._$jY = _$di;
            if (_$qh._$lO == _$nL) _$qh._$kH = _$di;
        }
    }
}
_$F.prototype._$p = function (_$b4, _$dC, _$np, _$nU) {
    if (_$np != this._$oP) {
        return;
    }
    if (_$b4 == null || _$dC < 2) return;
    if (this._$lI == null) this._$lI = new Array(0);
    if (this._$oG == null) {
        this._$oG = new _$G();
        this._$oG._$ba();
    }
    var _$eq = this._$lI.length;
    var i;
    for (i = 0; i < _$eq; i++) {
        if (this._$lI[i]._$nr == _$np) {
            this._$lI.splice(i, 1);
            break;
        }
    }
    ;this._$oG._$5R(_$np);
    this._$oG._$ll = this;
    for (i = 0; i < _$dC; i++) {
        _$nU.Add(_$b4[i]);
        this.Add(_$b4[i]);
        this._$oG.Add(_$b4[i]);
        _$b4[i]._$lh = this;
        _$b4[i]._$li = _$nU;
        if (_$b4[i] == _$np) {
            this._$oG._$jO = i;
            this._$oP = _$b4[i];
            this._$oG.setVisible(true);
            this._$oG._$bA = _$b4[i];
            _$b4[i]._$6(this._$oG);
        } else {
            _$b4[i]._$3h(false);
            if (_$np != null) {
                _$b4[i]._$iE = false;
                _$b4[i]._$6B(_$np._$hM, _$np._$hN, _$np._$hO, _$np._$hL);
                _$b4[i]._$iE = true;
            }
        }
    }
    ;this._$oG._$r9();
}
_$F.prototype._$0z = function (_$b4, _$dC, _$np, _$nU) {
    if (_$b4 == null || _$dC < 2) return;
    this._$lI = new Array(0);
    this._$oG = new _$G();
    this._$oG._$ba();
    this._$oG._$ll = this;
    var i;
    for (i = 0; i < _$dC; i++) {
        this.Add(_$b4[i]);
        this._$oG.Add(_$b4[i]);
        _$b4[i]._$lh = this;
        _$nU.Add(_$b4[i]);
        if (_$b4[i] == _$np) {
            this._$oG._$jO = i;
            this._$oP = _$b4[i];
            this._$oG.setVisible(true);
            this._$oG._$bA = _$b4[i];
            _$b4[i]._$6(this._$oG);
        } else {
            _$b4[i]._$3h(false);
            if (_$np != null) {
                _$b4[i]._$iE = false;
                _$b4[i]._$6B(_$np._$hM, _$np._$hN, _$np._$hO, _$np._$hL);
                _$b4[i]._$iE = true;
            }
        }
    }
}
_$F.prototype._$25 = function () {
    if (this._$lI == null || this._$lI.length == 0) return false;
    var _$gF = this._$lI.length;
    var _$qh;
    var i;
    for (i = 0; i < _$gF; i++) {
        if (!this._$8L) return true;
    }
    return false;
}
_$F.prototype._$5e = function (_$sC) {
    if (this._$lI == null || this._$lI.length == 0) return 0;
    var _$gF = this._$lI.length;
    var _$sI;
    var i;
    for (i = 0; i < _$gF; i++) {
        _$sI = this._$lI[i]._$ro;
        if (_$sI != null && (_$sI == _$sC)) {
            this._$lI.splice(i, 1);
            break;
        }
    }
    _$gF = this._$lI.length;
    return _$gF;
}
_$F.prototype._$5e = function (_$nr) {
    if (this._$lI == null || this._$lI.length == 0) return 0;
    var _$qh;
    var _$gF = this._$lI.length;
    if (_$nr == null) {
        while (_$gF > 0) {
            _$qh = this._$lI[0]._$nr;
            if (_$qh != null) {
                _$qh._$lh = null;
                this._$lI.splice(0, 1);
                _$gF = this._$lI.length;
            }
        }
        return 0;
    }
    var i;
    for (i = 0; i < _$gF; i++) {
        _$qh = this._$lI[i]._$nr;
        if (_$qh == _$nr) {
            this._$lI.splice(i, 1);
            _$qh._$lh = null;
            if (_$nr == this._$oP) this._$oP = null;
            break;
        }
    }
    _$gF = this._$lI.length;
    return _$gF;
}
_$F.prototype._$39 = function (_$nr, _$q6) {
    if (this._$oG != null && this._$oG._$iv.length >= 2) {
        return this._$oG._$0f(_$nr, _$q6);
    }
    return false;
}
_$F.prototype._$3D = function (_$q6) {
    if (this._$oG == null || this._$oG._$iv.length < 2) return false;
    var rc = new _$4F();
    this._$oG._$2X(rc);
    return _$E._$5n(rc, _$q6);
}
_$F.prototype._$6S = function (_$ns, _$nt) {
    if (this._$lI == null) return;
    var _$fj = -1;
    var _$fk = -1;
    var _$eq = this._$lI.length;
    var i;
    for (i = 0; i < _$eq; i++) {
        if (this._$lI[i]._$nr == _$ns) _$fj = i; else if (this._$lI[i]._$nr == _$nt) _$fk = i;
        if (_$fj >= 0 && _$fk >= 0) break;
    }
    if (_$fj >= 0 && _$fk >= 0) {
        var _$qh = this._$lI[_$fj];
        this._$lI[_$fj] = this._$lI[_$fk];
        this._$lI[_$fk] = _$qh;
    }
}
_$F.prototype._$3 = function (_$nr) {
    var rc = new _$4F();
    this._$oP._$2b(rc);
    var _$oQ = this._$oP._$li;
    _$oQ.Add(_$nr);
    var _$pv = this._$oP;
    this._$oP._$3h(false);
    _$nr._$lh._$oP = _$nr;
    _$nr._$li = _$oQ;
    _$nr._$6C(rc);
    var _$eP = this._$1R(_$nr);
    var _$fW = this._$1R(_$pv);
    if (this._$oG == null || (this._$oG._$iv.length == 0)) {
        this._$oG = new _$G();
        this._$oG._$ba();
        this._$oG._$ll = this;
        if ((_$fW <= _$eP) || (_$eP < 0)) {
            this._$oG.Add(_$pv);
            this._$oG.Add(_$nr);
            this._$oG._$jO = 1;
        } else {
            this._$oG.Add(_$nr);
            this._$oG.Add(_$pv);
            this._$oG._$jO = 0;
        }
        _$nr._$6(this._$oG);
    } else {
        if (_$eP >= 0) {
            this._$oG._$4(_$nr, _$eP);
            this._$oG._$jO = _$eP;
        } else {
            this._$oG.Add(_$nr);
            this._$oG._$jO = this._$oG._$iv.length - 1;
        }
        _$nr._$6(this._$oG);
    }
    _$nr._$t9();
    if (this._$lI == null) {
        this._$lI = new Array(0);
        this.Add(_$pv);
    }
    ;this._$oG._$bA = _$nr;
    this.Add(_$nr);
    _$pv._$bx(false);
}
_$F.prototype._$1R = function (_$nr) {
    if (this._$lI == null || this._$lI.length == 0) return -1;
    var _$gF = this._$lI.length;
    var _$eu = 0;
    var tmp;
    var i;
    for (i = 0; i < _$gF; i++) {
        tmp = this._$lI[i]._$nr;
        if (tmp != null) {
            if (tmp._$lh == this && !tmp._$lh._$8L && _$nr != tmp) {
                if (this._$oG != null && this._$oG._$3F(tmp)) _$eu++;
            }
            if (tmp == _$nr) {
                if ((this._$oG == null) || (this._$oG._$iv.length == 0)) return i; else return _$eu;
            }
        }
    }
    return -1;
}
_$F.prototype.Add = function (_$nr) {
    if (this._$lI == null || this._$lI.length == 0) {
        if (this._$lI == null) this._$lI = new Array(0);
        var _$oV;
        if (this._$oP != null && this._$oP != _$nr) {
            _$oV = new _$5f();
            _$oV._$nr = this._$oP;
            this._$lI.push(_$oV);
        }
        _$oV = new _$5f();
        _$oV._$nr = _$nr;
        this._$lI.push(_$oV);
        return;
    }
    var _$eq = this._$lI.length;
    var i;
    for (i = 0; i < _$eq; i++) {
        if (_$nr == this._$lI[i]._$nr) return;
    }
    var _$oV = new _$5f();
    _$oV._$nr = _$nr;
    this._$lI.push(_$oV);
}
_$F.prototype._$1P = function (_$o0, _$oj, _$pB, _$pE) {
    var rcf = new _$4F();
    var rcs = new _$4F();
    var _$qW = new _$4F();
    rcf.left = rcf.right = rcs.left = rcs.right = -6000;
    _$o0[0] = this._$oN;
    _$oj[0] = this._$pV;
    if (this._$oN != null) this._$oN._$28(rcf);
    if (this._$pV != null) this._$pV._$28(rcs);
    if ((_$oj[0] != null) && ((_$oj[0]._$9x == _$E._$3u) || (_$oj[0]._$9x == _$E._$3s))) {
        _$o0[0] = this._$pV;
        _$oj[0] = this._$oN;
        _$qW._$0u(rcf);
        rcf._$0u(rcs);
        rcs._$0u(_$qW);
    }
    if (_$pB != null) _$pB._$0u(rcf);
    if (_$pE != null) _$pE._$0u(rcs);
}
_$F.prototype._$28 = function (_$qt) {
    _$qt.left = _$qt.right = _$qt.top = _$qt.bottom = -6000;
    var _$qk, _$qm;
    _$qk = this._$oN;
    _$qm = this._$pV;
    if (this._$pV != null && (this._$pV._$9x == _$E._$3s || this._$pV._$9x == _$E._$3u)) {
        _$qk = this._$pV;
        _$qm = this._$oN;
    }
    var rcs = new _$4F();
    if (_$qk != null && _$qm == null) {
        _$qk._$28(_$qt);
        return;
    } else if (_$qk == null && _$qm != null) {
        _$qm._$28(_$qt);
        return;
    } else if (_$qk != null && _$qm != null) {
        _$qk._$28(_$qt);
        _$qm._$28(rcs);
        if (this._$9M == _$E._$3u || this._$9M == _$E._$3r) {
            if ((_$qt.top == _$qt.bottom) && (_$qt.top == -6000)) {
                _$qt._$0u(rcs);
            } else {
                if (rcs.bottom > _$qt.bottom) _$qt.bottom = rcs.bottom;
            }
        } else {
            if ((_$qt.left == _$qt.right) && (_$qt.left == -6000)) {
                _$qt._$0u(rcs);
            } else {
                if (rcs.right > _$qt.right) _$qt.right = rcs.right;
            }
        }
        return;
    } else if (!this._$8L) {
        this._$oP._$2b(_$qt);
    }
}
_$F.prototype._$04 = function (_$nA, _$q6, _$oc, _$dU, _$pk) {
    var _$9N = 0xff;
    if (this._$oN != null || this._$pV != null) {
        var _$sd = new _$67();
        _$sd.cx = _$oc.cx;
        _$sd.cy = _$oc.cy;
        if (this._$oN != null) _$9N = this._$oN._$04(_$nA, _$q6, _$oc, _$dU, _$pk);
        if (_$9N != 0xff && ((_$9N + 1) % 2) == 0) {
            return _$9N;
        }
        var _$9O = 0xff;
        var _$sR = null;
        if (this._$pV != null) {
            _$sR = new Array(1);
            _$9O = this._$pV._$04(_$nA, _$q6, _$sd, _$dU, _$sR);
        }
        if ((_$9O != 0xff) && ((((_$9O + 1) % 2) == 0) || (_$9N == 0xff))) {
            if (_$pk != null) _$pk[0] = _$sR[0];
            _$oc.cx = _$sd.cx;
            _$oc.cy = _$sd.cy;
            return _$9O;
        }
        return _$9N;
    }
    if (!this._$8L) {
        var _$qI = new _$4F();
        _$qI = _$nA._$mj;
        var _$qz = new _$4F();
        var _$9A = 0xff;
        if (this._$oP == null) {
            return _$9A;
        }
        ;this._$oP._$2b(_$qz);
        var iw = _$qz.right - _$qz.left;
        var ih = _$qz.bottom - _$qz.top;
        var _$h8 = _$qz.left;
        var _$he = _$qz.top;
        var _$qJ = new _$4F();
        this._$oP._$hT._$2X(_$qJ);
        if (this._$oP._$jT >= _$1j._$0) {
            if (this._$oP._$lo._$k2 == DSXDFUtil._$0U || this._$oP._$jw == _$E._$3s || this._$oP._$jw == _$E._$3t) {
                _$qz.top = _$qJ.bottom;
            } else {
                _$qz.left = _$qJ.right;
            }
        } else {
            if (this._$oP._$jT == _$1j._$40) {
                _$qz.left = _$qJ.right;
            } else if (this._$oP._$jT == _$1j._$6X) {
                _$qz.top = _$qJ.bottom;
            } else if (this._$oP._$jT == _$1j._$5r) _$qz.right = _$qJ.left; else _$qz.bottom = _$qJ.top;
        }
        if (_$qJ.left != 0 || _$qJ.right != 0 || _$qJ.top != 0 || _$qJ.bottom != 0) {
            if (_$E._$5n(_$qJ, _$q6) && (this._$oP == null || (this._$oP != null && !this._$oP._$iT)) && (_$nA._$le == null || (_$nA._$le != null && !_$nA._$le._$iT))) {
                {
                    _$oc.cx = iw;
                    _$pk[0] = this._$oP;
                    _$oc.cy = ih;
                    _$nA._$iL = true;
                    _$nA._$lq = this._$oP;
                    _$qJ.bottom = _$qJ.top + _$oc.cy;
                    _$nA._$jx = this._$oP._$jw;
                    _$nA._$l2 = _$h8;
                    _$nA._$l7 = _$he;
                    return (this._$oP._$jw * 2 + 1);
                }
            }
        }
        _$9N = _$E._$n(_$qz, _$q6, false);
        if (_$9N != 0xff) {
            if (((_$9N + 1) % 2) == 0) {
                _$pk[0] = this._$oP;
                if (parseInt(_$9N / 2) == _$E._$3r || parseInt(_$9N / 2) == _$E._$3u) {
                    _$oc.cx = _$E._$2I(_$qz);
                    if ((_$oc.cy >= (_$qz.bottom - _$qz.top))) {
                        if (_$qI.left != _$qz.left || _$qI.right != _$qz.right) {
                            _$oc.cy = (_$qz.bottom - _$qz.top) / 2;
                            if (_$E._$2H(_$qz) < _$dU) _$9N = 0xff;
                        }
                    }
                } else {
                    _$oc.cy = _$E._$2H(_$qz);
                    if ((_$oc.cx >= (_$qz.right - _$qz.left))) {
                        if (_$qI.top != _$qz.top || _$qI.bottom != _$qz.bottom) {
                            _$oc.cx = (_$qz.right - _$qz.left) / 2;
                            if (_$E._$2I(_$qz) < _$dU) _$9N = 0xff;
                        }
                    }
                }
                {
                    _$nA._$jx = parseInt(_$9N / 2);
                    _$E._$2j(_$nA, _$qz, _$oc);
                }
                return _$9N;
            } else if (_$9A == 0xff) {
                _$9A = _$9N;
                _$pk[0] = this._$oP;
                return _$9N;
            }
        } else {
        }
    }
    return 0xff;
}
_$F.prototype._$4B = function (_$nr, _$8t) {
    var _$eq = 0;
    if (this._$oN != null) {
        _$eq += this._$oN._$4B(_$nr, _$8t);
    }
    if (_$eq >= 2) return _$eq;
    if (this._$pV != null) _$eq += this._$pV._$4B(_$nr, _$8t);
    if (_$eq >= 2) return _$eq;
    if (this._$oN == null && this._$pV == null && !this._$8L) {
        if (this._$oP != null && this._$oP != _$nr) {
            _$eq++;
            if (!_$8t) {
                if (this._$oG != null && this._$oG._$iv.length > 1) {
                    _$eq += 2;
                    return _$eq;
                }
            }
        }
    }
    return _$eq;
}
_$F.prototype._$06 = function () {
    var _$8L;
    if (this._$oN != null) {
        _$8L = this._$oN._$06();
        if (!_$8L) return _$8L;
    }
    if (this._$pV != null) {
        _$8L = this._$pV._$06();
        if (!_$8L) return _$8L;
    }
    if (this._$pp == null) return true;
    if (this._$pV == null && this._$oN == null && this._$oP != null) return this._$8L;
    return true;
}

function _$E(_$85) {
    if (_$85) this._$m1 = new Array(4);
    this._$jv = false;
    this._$hV = null;
    this._$iW = true;
    this._$iV = false;
    this._$jr = false;
    this._$m0 = new Array(4);
    this._$m5 = null;
    this._$jK = 0;
    this._$jM = null;
    this._$hX = new Array(4);
    this._$kn = 0;
    this._$hz = null;
    this._$iq = null;
    this._$jq = false;
    this._$m3 = new Array(4);
    this._$j2 = false;
    this._$k2 = 0;
    this._$kc = new Array(4);
    var k;
    for (k = 0; k < 4; k++) {
        this._$m0[k] = new _$0R();
        this._$m3[k] = new _$5p();
        this._$kc[k] = 0;
        this._$hX[k] = null;
    }
    ;this._$mg = new _$4F();
    this._$jV = 0;
    this._$jU = 0;
    this._$iK = _$85;
    _$E._$6x(this._$mg);
    this._$jM = null;
    this._$jJ = 0;
    this._$mg.left = -4000;
    this._$mg.right = -4000;
    {
        var i;
        for (i = 0; i < 4; i++) {
        }
    }
}

_$E._$41 = 0;
_$E._$6Y = 1;
_$E._$5s = 2;
_$E._$s = 3;
_$E._$42 = 0;
_$E._$6Z = 1;
_$E._$5t = 2;
_$E._$t = 3;
_$E._$3s = 0;
_$E._$3u = 1;
_$E._$3t = 2;
_$E._$3r = 3;
_$E._$3x = 0;
_$E._$3z = 1;
_$E._$3y = 2;
_$E._$3v = 3;
_$E._$3w = 4;
_$E._$3m = 0;
_$E._$3l = 1;
_$E._$3q = 2;
_$E._$3p = 3;
_$E._$3o = 4;
_$E._$3n = 5;
_$E._$3k = 6;
_$E._$3j = 7;
_$E._$68 = 6;
_$E._$4e = 16;
_$E._$A = 12;
_$E._$6a = 0;
_$E._$6b = 1;
_$E._$lJ = null;
_$E._$kE = 0;
_$E._$iD = true;
_$E.prototype._$3H = function () {
    this._$jV = 0;
    this._$jU = 0;
    this._$mg.left = -4000;
    this._$mg.right = -4000;
    this._$jr = false;
}
_$E.prototype._$4j = function (_$nr) {
    if (this._$iK) {
        var i;
        for (i = 0; i < 4; i++) {
            if (this._$m1[i] != null) this._$5T(i, _$nr);
        }
    }
    var _$pW = null;
    var i;
    for (i = 0; i < 4; i++) {
        var _$eq = this._$m0[i]._$hS._$2e();
        var j;
        for (j = 0; j < _$eq; j++) {
            _$pW = this._$m0[i]._$hS._$m2[j];
            var _$8S = this._$4i(_$pW._$lp, _$nr);
            if (_$8S) return;
        }
    }
}
_$E.prototype._$4i = function (_$nv, _$nr) {
    var _$8S = false;
    if (_$nv == null) return false;
    if (_$nv._$oN != null) _$8S = this._$4i(_$nv._$oN, _$nr);
    if (_$8S) return true;
    if (_$nv._$pV != null) _$8S = this._$4i(_$nv._$pV, _$nr);
    if (_$8S) return true;
    if (!_$nr._$S() && _$nv._$oP == _$nr && _$nr != null) {
        _$nv._$oP = null;
        _$nv._$sH = _$nr._$2V();
        _$nv.prc = new _$4F();
        _$nv.prc.left = _$nr._$ma.x;
        _$nv.prc.top = _$nr._$ma.y;
        _$nv.prc.right = _$nr._$ma.x + _$nr._$mr.cx;
        _$nv.prc.bottom = _$nr._$ma.y + _$nr._$mr.cy;
        _$nv._$ex = _$nr._$m9.x;
        _$nv._$eA = _$nr._$m9.y;
        _$nv._$g4 = _$nr._$kJ;
        _$nv._$b6 = 0;
        _$nv._$b6 |= _$nr._$kP << 12;
        _$nv._$cU = _$nr._$jN;
        if (_$nr._$iF) _$nv._$b6 |= _$1j._$B;
        if (_$nr._$iY) _$nv._$b6 |= _$1j._$31;
        var b = _$nr._$jm;
        _$nv._$9e = false;
        if (b) {
            _$nv._$pP = true;
            if (_$nr._$iU) {
                _$nv._$9e = true;
            }
        } else {
            _$nv._$pP = false;
            if (_$nr._$li == null) {
                _$nv._$9e = true;
            }
        }
        _$nv._$8L = true;
        return true;
    } else if (_$nr._$S()) {
        if (_$nv._$lI != null) {
            var _$eq = _$nv._$lI.length;
            var i;
            for (i = 0; i < _$eq; i++) {
                var _$oV = _$nv._$lI.get(i);
                if (_$oV._$nr != null && _$oV._$nr == _$nr) {
                    _$oV._$nr = null;
                    _$oV._$ro = _$nr._$2V();
                    _$oV._$q4 = _$nr._$ma;
                    _$oV._$sa = _$nr._$mr.cx;
                    _$oV._$sb = _$nr._$mr.cy;
                    _$oV._$b3 = _$1j._$1I;
                    if (_$nr._$li == this) _$oV._$b3 |= _$1j._$1F;
                    if (_$nr._$kD == _$1j._$78) {
                        _$oV._$b3 |= _$1j._$1H;
                        _$oV._$b3 &= ~_$1j._$1I;
                    }
                    _$oV._$b3 |= _$nr._$kP << 12;
                    _$oV._$cU = _$nr._$jN;
                    if (_$nr._$iF) _$oV._$b3 |= _$1j._$B;
                    if (_$nr._$kW < 0) _$nr._$kW = 0;
                    _$oV._$b3 |= _$nr._$kW << 7;
                    if (_$nr._$iY) _$oV._$b3 |= _$1j._$31;
                    if (_$nr._$kD != _$1j._$4L) _$oV._$b3 |= _$1j._$32;
                    return true;
                }
            }
        } else {
            if (_$nv._$oP == _$nr && _$nr != null) {
                var _$b6 = _$1j._$1I;
                if (_$nr._$li == this) _$b6 |= _$1j._$1F;
                if (_$nr._$kD == _$1j._$78) {
                    _$b6 |= _$1j._$1H;
                    _$b6 &= ~_$1j._$1I;
                }
                if (_$nr._$iY) {
                    _$b6 |= _$1j._$31;
                }
                _$b6 |= _$nr._$kP << 12;
                if (_$nr._$iF) _$b6 |= _$1j._$B;
                if (_$nr._$kW < 0) _$nr._$kW = 0;
                _$b6 |= _$nr._$kW << 7;
                if (_$nr._$kD != _$1j._$4L) _$b6 |= _$1j._$32;
                _$nv._$f(_$nr._$cu(), _$b6, _$nr._$ma, _$nr._$mr.cx, _$nr._$mr.cy, _$nr._$jN);
                return true;
            }
        }
    }
    return false;
}
_$E.prototype._$6o = function (_$dY, _$ae, _$dn, _$dZ, _$e1, _$dh) {
    this._$hX[_$dY] = _$ae;
    _$mP._$6n(_$ae, _$dn, _$dZ, _$e1, _$dh);
    this._$5G();
}
_$E.prototype._$02 = function () {
}
_$E._$pU = function (_$nr) {
}
_$E.prototype._$6Q = function (_$9t, _$d5, _$dl, _$dH) {
    _$dl[0] = 0;
    _$dH[0] = 0;
    {
        var _$ev = _$d5;
        var _$qn;
        var _$eg;
        var _$eq;
        var _$9z = _$9t;
        while (_$ev != 0) {
            _$eq = this._$m0[_$9z]._$hS._$2e();
            var j;
            for (j = _$eq - 1; j >= 0; j--) {
                _$qn = this._$m0[_$9z]._$hS._$m2[j];
                if (_$9z == _$E._$3s || _$9z == _$E._$3t) _$eg = _$qn._$mc.right - _$qn._$mc.left - 2 * _$0Q._$la; else _$eg = _$qn._$mc.bottom - _$qn._$mc.top - 2 * _$0Q._$la;
                if (_$qn._$jt && _$qn._$kM == 0 && (_$eg != 0)) {
                    if (_$d5 > 0) {
                        if (_$eg > _$ev) _$eg = _$ev;
                    } else {
                        if (_$eg >= -_$ev) _$eg = -_$ev;
                        _$eg = -_$eg;
                    }
                    _$ev -= _$eg;
                    this._$l(_$qn, _$eg);
                    if (_$9z == _$E._$3t || _$9z == _$E._$3r) _$dH[0] += _$eg; else _$dl[0] += _$eg;
                }
                if (_$ev == 0) break;
            }
            if (_$9z == _$E._$3t || _$9z == _$E._$3r) break;
            _$9z += 2;
            _$d5 = -_$ev;
            _$ev = _$d5;
        }
    }
}
_$E.prototype._$6q = function (iw, ih) {
    this._$jV = iw;
    this._$jU = ih;
}
_$E.prototype._$ne = function (iw, ih) {
    var _$h5, _$eK;
    _$eK = ih;
    _$h5 = iw;
    if ((this._$jV == 0) && (this._$jU == 0)) {
        this._$jV = _$h5;
        this._$jU = _$eK;
        return 1;
    }
    if (this._$jV != _$h5) {
        this._$4w(_$E._$3t, 0, this._$jV - _$h5);
        this._$6J(_$E._$3u, -32767, 32767);
        this._$6J(_$E._$3r, -32767, 32767);
    }
    if (this._$jU != _$eK) {
        this._$4w(_$E._$3r, 0, this._$jU - _$eK);
        this._$6J(_$E._$3s, -32767, 32767);
        this._$6J(_$E._$3t, -32767, 32767);
    }
    var _$qW = new _$4F();
    _$qW.left = this._$2S(_$E._$3s, _$E._$5s);
    _$qW.top = this._$2S(_$E._$3u, _$E._$s);
    _$qW.right = this._$2S(_$E._$3t, _$E._$41);
    _$qW.bottom = this._$2S(_$E._$3r, _$E._$6Y);
    var _$eU = new Array(1);
    var _$ga = new Array(1);
    if (_$qW.right < _$qW.left) {
        this._$6Q(_$E._$3s, _$qW.right - _$qW.left, _$eU, _$ga);
        _$qW.left += _$eU[0];
        _$qW.right += _$ga[0];
    }
    if (_$qW.bottom < _$qW.top) {
        this._$6Q(_$E._$3u, _$qW.bottom - _$qW.top, _$eU, _$ga);
        _$qW.top += _$eU[0];
        _$qW.bottom += _$ga[0];
    }
    ;this._$jV = _$h5;
    this._$jU = _$eK;
    this._$mg._$0u(_$qW);
    if (this._$jM != null) {
        var _$tp = this._$jM;
        _$mP._$6n(_$tp, _$qW.left, _$qW.top, _$qW.right - _$qW.left, _$qW.bottom - _$qW.top);
    }
    var v = document.createElement("canvas");
    document.getElementById("dsx_dummyid").appendChild(v);
    setTimeout(function () {
        document.getElementById("dsx_dummyid").removeChild(v);
    }, 100);
    return 1;
}
_$E.prototype._$7d = function (_$nv) {
    if (!_$nv._$8L) {
        while (_$nv != null) {
            _$nv._$8L = false;
            _$nv = _$nv._$pp;
        }
    }
}
_$E.prototype._$2N = function (_$d7, _$oa) {
    var _$eq = this._$m0[_$d7]._$hS._$2e();
    var _$pW;
    var i;
    for (i = 0; i < _$eq; i++) {
        _$pW = this._$m0[_$d7]._$hS._$m2[i];
        if (_$pW == _$oa) {
            return i;
        }
    }
    return 0xffffffff;
}
_$E.prototype._$5O = function (_$nI, _$nT) {
    if (!this._$iK && !this._$iW) {
        _$nI._$iU = false;
        if (_$nT != null) {
            _$nI._$e(_$nT);
        }
        _$02();
        _$nI._$li = null;
        return;
    }
    if (_$nI._$jY < 0) return;
    if (this._$m0[_$nI._$jw]._$hS._$2e() < 1) return;
    var _$pW = this._$m0[_$nI._$jw]._$hS._$m2[_$nI._$jY];
    if (_$nI._$lh._$8L) return;
    var _$qU = new _$4F();
    var _$qW = new _$4F();
    _$pW._$2J(_$nI, _$qW);
    var _$99 = false;
    var _$pp = _$nI._$lh._$pp;
    var pme = _$nI._$lh;
    var _$pY;
    var _$9v = _$pW._$5R(_$nI);
    if (!_$9v) {
        _$nI._$lh._$8L = true;
        _$99 = _$pW._$g(this, _$nI._$lh, _$qW);
    }
    if (_$99 && (_$qW.left != _$qW.right || _$qW.top != _$qW.bottom)) {
        _$pW._$r8();
        var _$9M;
        var _$e3;
        if (_$nI._$jw == _$E._$3s || _$nI._$jw == _$E._$3t) {
            _$e3 = _$E._$2I(_$qW);
            _$9M = _$E._$3u;
        } else {
            _$e3 = _$E._$2H(_$qW);
            _$9M = _$E._$3s;
            _$qW.top = _$qW.left;
            _$qW.bottom = _$qW.right;
        }
        ;this._$4w(_$nI._$jw, _$nI._$jY + 1, -(_$e3 + _$pW._$cJ()));
        if (_$nI._$jw == _$E._$3t || _$nI._$jw == _$E._$3r) _$e3 += _$pW._$cJ(); else _$e3 = -(_$e3 + _$pW._$cJ());
        this._$6J(_$9M, _$qW.top, _$qW.bottom);
        this._$6J((_$9M + 2), _$qW.top, _$qW.bottom);
        this._$i();
    }
    if (_$nT == this || (_$nT != null && !_$nT._$iK && !this._$iK)) {
        this._$5b(_$nI);
    } else _$nI._$r6();
    if (!this._$iK) {
        _$nI._$iU = false;
        if (_$nT != null) {
            _$nI._$e(_$nT);
        }
        ;this._$m(_$nI);
        this._$02();
        return;
    }
}
_$E.prototype._$5d = function (_$nv, _$nI, _$sC, _$9n, _$dP) {
    if (_$dP < 0) return;
    var _$sQ = _$nv;
    if (_$sQ == null) return;
    var _$pN = this._$m0[_$9n]._$hS._$m2[_$dP];
    var _$gN;
    if (_$nI != null) _$gN = _$nv._$5e(_$nI); else _$gN = _$nv._$5e(_$sC);
    if (_$gN > 0) {
        if (_$nI != null) _$nI._$lh = null;
        return;
    }
    var _$9h = _$pN._$5b(_$sQ);
    if (_$nI != null) _$nI._$lh = null;
    if (_$9h) {
        if (_$nI != null && _$sC == null) {
            if (_$nI._$jw == _$nI._$lW._$jx && _$nI._$jY < _$nI._$lW._$kN && _$nI._$lW._$kN != -1 && _$nI._$lW._$kN != 0xffffffff) {
                _$nI._$lW._$kN -= 1;
            }
        }
        var _$qn;
        this._$m0[_$9n]._$hS._$m2[_$dP]._$lp = null;
        this._$m0[_$9n]._$hS._$5N(_$dP);
        var i;
        for (i = _$dP; i < this._$m0[_$9n]._$hS._$2e(); i++) {
            _$qn = this._$m0[_$9n]._$hS._$m2[i];
            var pb = _$qn._$lp;
            this._$6y(pb, i);
        }
        var _$pd;
        if (_$dP == 0) _$pd = null; else _$pd = this._$m0[_$9n]._$hS._$m2[_$dP - 1];
        if (_$9n == _$E._$3s || _$9n == _$E._$3t) {
            this._$5S(_$E._$3u, _$pN, _$pd);
            this._$5S(_$E._$3r, _$pN, _$pd);
        } else {
            this._$5S(_$E._$3s, _$pN, _$pd);
            this._$5S(_$E._$3t, _$pN, _$pd);
        }
    }
}
_$E.prototype._$5c = function (_$nv, _$9n, _$9s) {
    var _$os = _$nv._$oP;
    var _$pN = this._$m0[_$9n]._$hS._$m2[_$9s];
    _$nv._$5e(null);
    _$os._$lh = _$nv;
    _$5b(_$os);
}
_$E.prototype._$5b = function (_$nI) {
    this._$5d(_$nI._$lh, _$nI, null, _$nI._$jw, _$nI._$jY);
}
_$E.prototype._$6y = function (_$nv, _$di) {
    if (_$nv == null) return;
    if (_$nv._$oN != null || _$nv._$pV != null) {
        if (_$nv._$oN != null) this._$6y(_$nv._$oN, _$di);
        if (_$nv._$pV != null) this._$6y(_$nv._$pV, _$di);
        return;
    }
    if (_$nv._$oP != null) {
        if (_$nv._$oP._$li == this) _$nv._$oP._$jY = _$di; else if (_$nv._$oP._$lO == this) _$nv._$oP._$kH = _$di;
    }
    _$nv._$6y(_$di, this);
}
_$E.prototype._$5S = function (_$9n, _$nD, _$nX) {
    var _$pW;
    var i;
    for (i = 0; i < this._$m0[_$9n]._$hS._$2e(); i++) {
        _$pW = this._$m0[_$9n]._$hS._$m2[i];
        if (_$pW._$ly == _$nD) _$pW._$ly = _$nX;
        if (_$pW._$lP == _$nD) _$pW._$lP = _$nX;
    }
}
_$E.prototype._$2q = function (_$9n) {
    var _$fm = this._$m0[_$9n]._$hS._$2e();
    if (_$fm == 0) return null; else return this._$m0[_$9n]._$hS._$m2[_$fm - 1];
}
_$E.prototype._$1e = function (_$nv, _$9n, _$9s) {
    var _$pW = null;
    var _$97 = false;
    var _$nZ = null;
    var _$qW = new _$4F();
    var _$98 = true;
    if (_$nv._$pp == null) {
        _$pW = new _$0Q();
        if (_$9s != 0xffffffff) {
            _$97 = true;
            if (_$9s > 0) {
                _$nZ = this._$m0[_$9n]._$hS._$m2[_$9s - 1];
                _$pW._$ly = _$nZ._$ly;
                _$pW._$lP = _$nZ._$lP;
            } else {
                _$pW._$ly = null;
                _$pW._$lP = null;
            }
        } else {
            if (_$9n == _$E._$3s || _$9n == _$E._$3t) {
                _$pW._$ly = this._$2q(_$E._$3u);
                _$pW._$lP = this._$2q(_$E._$3r);
            } else {
                _$pW._$ly = this._$2q(_$E._$3s);
                _$pW._$lP = this._$2q(_$E._$3t);
            }
            _$9s = this._$m0[_$9n]._$hS._$2e();
        }
        _$pW._$lp = _$nv;
        _$pW._$av(this, _$9n);
        _$E._$6x(_$qW);
        this._$m0[_$9n]._$hS._$5(_$pW, _$9s);
        this._$6y(_$nv, _$9s);
        var _$qn;
        var i;
        for (i = _$9s + 1; i < this._$m0[_$9n]._$hS._$2e(); i++) {
            _$qn = this._$m0[_$9n]._$hS._$m2[i];
            this._$6y(_$qn._$lp, i);
        }
    } else {
        this._$6y(_$nv, _$9s);
        _$pW = this._$m0[_$9n]._$hS._$m2[_$9s];
        if (_$pW._$06()) {
            _$pW._$av(this, _$9n);
            _$E._$6x(_$qW);
        } else {
            _$98 = false;
        }
        _$nv._$8L = false;
        this._$7d(_$nv);
        if (!_$98) {
            _$pW._$7(this, _$nv);
        }
    }
    if (_$97) {
        if (_$9n == _$E._$3r) {
            this._$W(_$E._$3s, _$pW, _$nZ, false);
            this._$W(_$E._$3t, _$pW, _$nZ, false);
        } else if (_$9n == _$E._$3u) {
            this._$W(_$E._$3s, _$pW, _$nZ, true);
            this._$W(_$E._$3t, _$pW, _$nZ, true);
        } else if (_$9n == _$E._$3s) {
            this._$W(_$E._$3u, _$pW, _$nZ, true);
            this._$W(_$E._$3r, _$pW, _$nZ, true);
        } else {
            this._$W(_$E._$3u, _$pW, _$nZ, false);
            this._$W(_$E._$3r, _$pW, _$nZ, false);
        }
    }
    if (_$98) {
        var iw, ih;
        if ((_$pW._$mc.left != _$pW._$mc.right) && (_$pW._$mc.left >= 0)) {
            iw = _$pW._$mc.right - _$pW._$mc.left;
            ih = _$pW._$mc.bottom - _$pW._$mc.top;
        } else {
            iw = _$1j._$ms.cx;
            ih = _$1j._$ms.cy;
        }
        ;this._$4v(_$pW, _$9n, _$9s, true, iw, ih, _$nv, true);
    }
}
_$E.prototype._$4v = function (_$pW, _$9n, _$9s, _$84, _$dB, _$dz, _$nv, _$8i) {
    {
        var _$qD = new _$4F();
        this._$2d(_$qD);
        var ilt, irb;
        var ior;
        var _$p9 = null;
        var _$eX, _$f0;
        var _$gG = _$pW._$cJ();
        var _$qW = new _$4F();
        var _$qV = new _$4F();
        _$qW.left = _$qW.top = 0;
        if (_$8i) {
            _$qW.right = _$dB;
            _$qW.bottom = _$dz;
        } else {
            _$qW.right = _$pW._$mc.right - _$pW._$mc.left;
            _$qW.bottom = _$pW._$mc.bottom - _$pW._$mc.top;
        }
        var _$9H = true;
        if ((_$9n == _$E._$3s) || (_$9n == _$E._$3t)) _$9H = false;
        var _$9F;
        var _$h5, _$eK, _$e3;
        if (_$8i && _$pW != null && (_$pW instanceof _$73) && !(_$pW instanceof _$5g)) {
            if ((_$9s - 1) >= 0) _$p9 = this._$m0[_$9n]._$hS._$m2[_$9s - 1];
            ior = this._$2Q(_$9n, _$p9);
            if (!_$9H) _$9F = _$E._$3u; else _$9F = _$E._$3s;
            ilt = this._$2Q(_$9F, _$pW._$ly);
            irb = this._$2Q((_$9F + 2), _$pW._$lP);
            if (!_$9H) {
                _$eX = _$qD.top + ilt;
                _$f0 = _$qD.bottom - irb;
                _$eK = _$f0 - _$eX;
                _$qW.top = _$eX;
                _$h5 = 0;
                if (_$9n == _$E._$3s) {
                    _$qW.left = ior;
                } else {
                    _$qW.left = _$qD.right - ior - _$h5;
                }
                _$qW.right = _$qW.left;
                _$qW.bottom = _$qW.top + _$eK;
            } else {
                _$eX = _$qD.left + ilt;
                _$f0 = _$qD.right - irb;
                _$h5 = _$f0 - _$eX;
                _$eK = 0;
                _$qW.left = _$eX;
                if (_$9n == _$E._$3u) {
                    _$qW.top = ior;
                } else {
                    _$qW.top = _$qD.bottom - ior - _$eK;
                }
                _$qW.bottom = _$qW.top;
                _$qW.right = _$qW.left + _$h5;
            }
            _$pW._$jt = true;
            _$pW._$qZ(_$nv._$oP, _$qW);
            return;
        }
        if (this._$mg.right == -4000 && this._$mg.left == -4000) {
            this._$2d(this._$mg);
            this._$jV = this._$mg.right - this._$mg.left;
            this._$jU = this._$mg.bottom - this._$mg.top;
        }
        var _$g7;
        var _$eU = new Array(1);
        var _$ga = new Array(1);
        if ((_$9n == _$E._$3s) || (_$9n == _$E._$3t)) {
            _$g7 = this._$mg.right - this._$mg.left - (_$qW.right + _$pW._$cJ());
            if (_$g7 < 0) {
                if (_$84) {
                    _$g7 += _$qW.right;
                    if (_$g7 < 0) _$g7 = 0;
                    _$qW.right = _$g7;
                    _$g7 = this._$mg.right - this._$mg.left - (_$qW.right + _$pW._$cJ());
                }
                if (_$g7 < 0) {
                    this._$6Q(_$E._$3s, _$g7, _$eU, _$ga);
                }
            }
        } else {
            _$g7 = this._$mg.bottom - this._$mg.top - (_$qW.bottom + _$pW._$cJ());
            if (_$g7 < 0) {
                if (_$84) {
                    _$g7 += _$qW.bottom;
                    if (_$g7 < 0) _$g7 = 0;
                    _$qW.bottom = _$g7;
                    _$g7 = this._$mg.bottom - this._$mg.top - (_$qW.bottom + _$pW._$cJ());
                }
                if (_$g7 < 0) {
                    this._$6Q(_$E._$3u, _$g7, _$eU, _$ga);
                }
            }
        }
        if ((_$9s - 1) >= 0) _$p9 = this._$m0[_$9n]._$hS._$m2[_$9s - 1];
        ior = this._$2Q(_$9n, _$p9);
        if (!_$9H) _$9F = _$E._$3u; else _$9F = _$E._$3s;
        ilt = this._$2Q(_$9F, _$pW._$ly);
        irb = this._$2Q((_$9F + 2), _$pW._$lP);
        if (!_$9H) {
            _$eX = _$qD.top + ilt;
            _$f0 = _$qD.bottom - irb;
            _$eK = _$f0 - _$eX;
            _$qW.top = _$eX;
            _$qV.top = _$eX;
            _$qV.bottom = _$qV.top + _$eK;
            _$h5 = _$E._$2I(_$qW);
            if (_$8i) _$e3 = _$h5 + _$gG; else _$e3 = _$dB + _$gG;
            if (_$9n == _$E._$3s) {
                _$qW.left = ior;
                _$qV.left = ior + _$h5;
            } else {
                _$qW.left = _$qD.right - ior - _$h5;
                _$qV.left = _$qD.right - ior - _$h5 - _$gG;
            }
            _$qV.right = _$qV.left + _$gG;
        } else {
            _$eX = _$qD.left + ilt;
            _$f0 = _$qD.right - irb;
            _$h5 = _$f0 - _$eX;
            _$eK = _$E._$2H(_$qW);
            _$qW.left = _$eX;
            _$qV.left = _$eX;
            _$qV.right = _$qV.left + _$h5;
            if (_$8i) _$e3 = _$eK + _$gG; else _$e3 = _$dz + _$gG;
            if (_$9n == _$E._$3u) {
                _$qW.top = ior;
                _$qV.top = ior + _$eK;
            } else {
                _$qW.top = _$qD.bottom - ior - _$eK;
                _$qV.top = _$qD.bottom - ior - _$eK - _$gG;
            }
            _$qV.bottom = _$qV.top + _$gG;
        }
        _$qW.right = _$qW.left + _$h5;
        _$qW.bottom = _$qW.top + _$eK;
        if (_$nv != null) {
            if (_$nv._$oP != null) {
                _$pW._$qZ(_$nv._$oP, _$qW);
            } else {
                this._$6H(_$nv, _$qW, _$E._$3u);
                this._$6H(_$nv, _$qW, _$E._$3s);
            }
        } else if (_$8i) {
            _$pW._$qZ(null, _$qW);
        }
        if (_$8i) {
            _$pW._$mc._$0u(_$qW);
            _$pW._$jt = true;
        }
        if (_$pW._$lV != null) {
            _$pW._$lV._$6C(_$qV);
        }
        ;this._$4w(_$9n, _$9s + 1, _$e3);
        var _$9M;
        if (_$9n == _$E._$3s || _$9n == _$E._$3t) _$9M = _$E._$3u; else _$9M = _$E._$3s;
        this._$6J(_$9M, _$eX, _$f0);
        this._$6J((_$9M + 2), _$eX, _$f0);
        this._$i();
    }
}
_$E.prototype._$70 = function (_$nI) {
    var _$pW;
    if (_$nI._$lh != null || (_$nI._$jY != 0xffffffff && _$nI._$jY != -1)) return;
    var _$gI = _$nI._$jw;
    var _$oH = new _$F();
    _$nI._$lh = _$oH;
    _$oH._$8L = false;
    _$oH._$oP = _$nI;
    _$pW = _$nI._$au(null);
    if (_$gI == _$E._$3s || _$gI == _$E._$3t) {
        _$pW._$ly = this._$2q(_$E._$3u);
        _$pW._$lP = this._$2q(_$E._$3r);
    } else {
        _$pW._$ly = this._$2q(_$E._$3s);
        _$pW._$lP = this._$2q(_$E._$3t);
    }
    _$pW._$mc.left = _$pW._$mc.top = 0;
    _$pW._$mc.right = _$nI._$mq.cx;
    _$pW._$mc.bottom = _$nI._$mq.cy;
    _$nI._$jY = this._$m0[_$gI]._$hS._$2e();
    _$pW._$lp = _$oH;
    this._$m0[_$gI]._$hS._$5(_$pW, _$nI._$jY);
    var _$qn;
    var i;
    for (i = _$nI._$jY + 1; i < this._$m0[_$gI]._$hS._$2e(); i++) {
        _$qn = this._$m0[_$gI]._$hS._$m2[i];
        _$6y(_$qn._$lp, i);
    }
}
_$E.prototype._$1d = function (_$nI, _$pj) {
    var _$gI = _$nI._$jw;
    var _$98 = true;
    var _$qW = new _$4F();
    var _$pW;
    var _$97 = false;
    var _$nZ = null;
    if (_$nI._$lh == null) {
        var _$oH = new _$F();
        _$nI._$lh = _$oH;
        _$oH._$8L = false;
        _$oH._$oP = _$nI;
        _$pW = _$nI._$au(this);
        if (_$pj != null) _$pj[0] = _$pW;
        if (_$nI._$jY != 0xffffffff) {
            _$97 = true;
            if (_$nI._$jY > 0) {
                _$nZ = this._$m0[_$gI]._$hS._$m2[_$nI._$jY - 1];
                _$pW._$ly = _$nZ._$ly;
                _$pW._$lP = _$nZ._$lP;
            } else {
                _$pW._$ly = null;
                _$pW._$lP = null;
            }
        } else {
            if (_$gI == _$E._$3s || _$gI == _$E._$3t) {
                _$pW._$ly = this._$2q(_$E._$3u);
                _$pW._$lP = this._$2q(_$E._$3r);
            } else {
                _$pW._$ly = this._$2q(_$E._$3s);
                _$pW._$lP = this._$2q(_$E._$3t);
            }
            _$nI._$jY = this._$m0[_$gI]._$hS._$2e();
        }
        _$pW._$lp = _$oH;
        _$pW._$av(this, _$nI._$jw);
        _$E._$6x(_$qW);
        this._$m0[_$gI]._$hS._$5(_$pW, _$nI._$jY);
        var _$qn;
        var i;
        for (i = _$nI._$jY + 1; i < this._$m0[_$gI]._$hS._$2e(); i++) {
            _$qn = this._$m0[_$gI]._$hS._$m2[i];
            this._$6y(_$qn._$lp, i);
        }
    } else {
        if (_$nI._$lh._$25() == true) {
            _$nI._$lh._$3(_$nI);
            return;
        }
        _$nI._$lh._$oP = _$nI;
        _$pW = this._$m0[_$gI]._$hS._$m2[_$nI._$jY];
        if (_$pW._$06()) {
            _$pW._$av(this, _$nI._$jw);
            _$E._$6x(_$qW);
        } else {
            _$98 = false;
        }
        _$nI._$lh._$8L = false;
        this._$7d(_$nI._$lh);
        if (!_$98) {
            _$pW._$8(this, _$nI);
        }
    }
    if (_$97) {
        if (_$gI == _$E._$3r) {
            this._$W(_$E._$3s, _$pW, _$nZ, false);
            this._$W(_$E._$3t, _$pW, _$nZ, false);
        } else if (_$gI == _$E._$3u) {
            this._$W(_$E._$3s, _$pW, _$nZ, true);
            this._$W(_$E._$3t, _$pW, _$nZ, true);
        } else if (_$gI == _$E._$3s) {
            this._$W(_$E._$3u, _$pW, _$nZ, true);
            this._$W(_$E._$3r, _$pW, _$nZ, true);
        } else {
            this._$W(_$E._$3u, _$pW, _$nZ, false);
            this._$W(_$E._$3r, _$pW, _$nZ, false);
        }
    } else {
        if (_$gI == _$E._$3t) {
            this._$7l(_$E._$3u, _$pW, false);
            this._$7l(_$E._$3r, _$pW, false);
        } else if (_$gI == _$E._$3r) {
            this._$7l(_$E._$3s, _$pW, false);
            this._$7l(_$E._$3t, _$pW, false);
        }
    }
    if (_$98) {
        _$qW.left = _$qW.top = 0;
        var _$8U = false;
        if (_$nI._$S()) {
            if ((_$pW._$mc.left != _$pW._$mc.right) && (_$pW._$mc.left >= 0)) {
                _$qW.right = _$pW._$mc.right - _$pW._$mc.left;
                _$qW.bottom = _$pW._$mc.bottom - _$pW._$mc.top;
            } else {
                _$qW.right = _$nI._$mq.cx;
                _$qW.bottom = _$nI._$mq.cy;
            }
            _$8U = true;
        } else {
            _$qW.right = _$nI._$mq.cx;
            _$qW.bottom = _$nI._$mq.cy;
        }
        if (_$qW.right <= _$qW.left) _$qW.right = _$qW.left + 20;
        if (_$qW.bottom <= _$qW.top) _$qW.bottom = _$qW.top + 20;
        this._$4v(_$pW, _$gI, _$nI._$jY, _$8U, _$qW.right - _$qW.left, _$qW.bottom - _$qW.top, _$nI._$lh, true);
        if (this._$iK) {
            this._$5H(_$nI._$jw);
        }
    }
}
_$E.prototype._$7l = function (_$9n, _$nV, _$8g) {
}
_$E.prototype._$W = function (_$9n, _$nV, _$nZ, _$8g) {
    var s;
    for (s = 0; s < this._$m0[_$9n]._$hS._$2e(); s++) {
        var _$qn = this._$m0[_$9n]._$hS._$m2[s];
        if (_$8g && _$qn._$ly == _$nZ) {
            _$qn._$ly = _$nV;
        } else if (!_$8g && _$qn._$lP == _$nZ) {
            _$qn._$lP = _$nV;
        }
    }
}
_$E.prototype._$0e = function (_$8n) {
    if (!this._$jv) return;
    if (this._$hV == null) {
        var _$tw = "div";
        if (DSXDFUtil._$jo) _$tw = "canvas";
        this._$hV = _$mP._$0C(_$tw, DSXDFUtil._$hQ);
        this._$hV.style.border = "0px solid";
        this._$hV.style.zIndex = 7890;
    }
    if (_$8n) {
        var _$qW = this._$mg;
        _$mP._$3h(this._$hV, true);
        _$mP._$6n(this._$hV, _$qW.left, _$qW.top, _$qW.right - _$qW.left, _$qW.bottom - _$qW.top);
    } else {
        _$mP._$3h(this._$hV, false);
    }
}
_$E.prototype._$i = function () {
    var _$qW = new _$4F();
    _$qW.left = this._$2S(_$E._$3s, _$E._$5s);
    _$qW.top = this._$2S(_$E._$3u, _$E._$s);
    _$qW.right = this._$2S(_$E._$3t, _$E._$41);
    _$qW.bottom = this._$2S(_$E._$3r, _$E._$6Y);
    this._$mg._$0u(_$qW);
    if (this._$jM != null) {
        var _$tp = this._$jM;
        _$mP._$6n(_$tp, _$qW.left, _$qW.top, _$qW.right - _$qW.left, _$qW.bottom - _$qW.top);
    }
}
_$E.prototype._$5M = function () {
    var i;
    for (i = 0; i < 4; i++) {
        this._$m0[i]._$hS._$60();
    }
}
_$E.prototype._$l = function (_$ny, _$cX) {
    var _$qO = new _$4F();
    _$ny._$lV._$2b(_$qO);
    var _$9K;
    var _$eX;
    var _$f0;
    var _$9M = _$ny._$lV._$jx;
    var _$gp = this._$2N(_$9M, _$ny);
    if (_$9M == _$E._$3s || _$9M == _$E._$3t) {
        _$9K = _$E._$3u;
        _$eX = _$qO.top;
        _$f0 = _$qO.bottom;
    } else {
        _$9K = _$E._$3s;
        _$eX = _$qO.left;
        _$f0 = _$qO.right;
    }
    var _$qA = new _$4F();
    _$ny._$lp._$28(_$qA);
    if (_$9M == _$E._$3s) _$qA.right += _$cX; else if (_$9M == _$E._$3t) _$qA.left += _$cX; else if (_$9M == _$E._$3u) _$qA.bottom += _$cX; else _$qA.top += _$cX;
    _$ny._$lV._$4z(_$cX);
    this._$6H(_$ny._$lp, _$qA, _$9M);
    _$ny._$5x();
    if (_$9M == _$E._$3t || _$9M == _$E._$3r) _$cX = -_$cX;
    this._$4w(_$9M, _$gp + 1, _$cX);
    this._$6J(_$9K, _$eX, _$f0);
    this._$6J((_$9K + 2), _$eX, _$f0);
}
_$E.prototype._$4s = function (_$nv, _$cW, _$9q) {
    var _$qW = new _$4F();
    var _$qN = new _$4F();
    var plt = new _$5i();
    if (_$nv._$oN != null || _$nv._$pV != null) {
        if (_$nv._$oN != null) this._$4s(_$nv._$oN, _$cW, _$9q);
        if (_$nv._$pV != null) this._$4s(_$nv._$pV, _$cW, _$9q);
        if ((_$nv._$oN != null) && (_$nv._$pV != null) && (!_$nv._$oN._$8L) && (!_$nv._$pV._$8L)) {
            _$nv._$p6._$2b(_$qW);
            plt.x = _$qW.left;
            plt.y = _$qW.top;
            if (_$9q == _$E._$3s || _$9q == _$E._$3t) {
                if (_$9q == _$E._$3s) plt.x = _$qW.left + _$cW; else plt.x = _$qW.left - _$cW;
            } else {
                plt.x = _$qW.left;
                if (_$9q == _$E._$3u) plt.y = _$qW.top + _$cW; else plt.y = _$qW.top - _$cW;
            }
            _$qN.left = plt.x;
            _$qN.top = plt.y;
            _$qN.right = plt.x + _$E._$2I(_$qW);
            _$qN.bottom = plt.y + _$E._$2H(_$qW);
            _$nv._$p6._$6C(_$qN);
        }
        return;
    }
    if (!_$nv._$8L) {
        _$nv._$oP._$2b(_$qW);
        plt.x = _$qW.left;
        plt.y = _$qW.top;
        if (_$nv._$oP._$jw == _$E._$3s || _$nv._$oP._$jw == _$E._$3t) {
            if (_$nv._$oP._$jw == _$E._$3s) plt.x = _$qW.left + _$cW; else plt.x = _$qW.left - _$cW;
        } else {
            plt.x = _$qW.left;
            if (_$nv._$oP._$jw == _$E._$3u) plt.y = _$qW.top + _$cW; else plt.y = _$qW.top - _$cW;
        }
        _$qN.left = plt.x;
        _$qN.top = plt.y;
        _$qN.right = plt.x + _$E._$2I(_$qW);
        _$qN.bottom = plt.y + _$E._$2H(_$qW);
        _$nv._$oP._$6C(_$qN);
    }
}
_$E.prototype._$4w = function (_$9n, _$dP, _$dw) {
    var _$pW;
    var i;
    for (i = _$dP; i < this._$m0[_$9n]._$hS._$2e(); i++) {
        _$pW = this._$m0[_$9n]._$hS._$m2[i];
        _$pW._$4r(this, _$9n, _$dP, _$dw);
    }
}
_$E.prototype._$4x = function (_$9n, _$dP, _$da, _$dw) {
    var _$pW;
    var i;
    for (i = _$dP; i <= _$da; i++) {
        _$pW = this._$m0[_$9n]._$hS._$m2[i];
        _$pW._$4r(this, _$9n, _$dP, _$dw);
    }
}
_$E.prototype._$2S = function (_$9n, _$9o) {
    var _$eW;
    var _$qD = new _$4F();
    this._$2d(_$qD);
    if (_$9o == _$E._$41) _$eW = _$qD.right - this._$kc[2]; else if (_$9o == _$E._$5s) _$eW = _$qD.left + this._$kc[0]; else if (_$9o == _$E._$6Y) _$eW = _$qD.bottom - this._$kc[3]; else _$eW = _$qD.top + this._$kc[1];
    var _$pW;
    var _$qz = new _$4F();
    var i;
    for (i = 0; i < this._$m0[_$9n]._$hS._$2e(); i++) {
        _$pW = this._$m0[_$9n]._$hS._$m2[i];
        if (_$pW._$jt) {
            _$pW._$lV._$2b(_$qz);
            if (_$9o == _$E._$41) _$eW = _$qz.left; else if (_$9o == _$E._$5s) _$eW = _$qz.right; else if (_$9o == _$E._$6Y) {
                _$eW = _$qz.top;
            } else _$eW = _$qz.bottom;
        }
    }
    return _$eW;
}
_$E.prototype._$6H = function (_$nv, _$qt, _$9q) {
    if (_$nv == null) return;
    if ((_$nv._$oN != null) || (_$nv._$pV != null)) {
        var pd1 = new Array(1);
        var pd2 = new Array(1);
        var rc1 = new _$4F();
        var rc2 = new _$4F();
        _$nv._$1P(pd1, pd2, rc1, rc2);
        var b1 = false;
        var b2 = false;
        if ((rc1.left != rc1.right) || (rc1.top != rc1.bottom) || (rc1.left != -6000)) b1 = true;
        if ((rc2.left != rc2.right) || (rc2.top != rc2.bottom) || (rc2.left != -6000)) b2 = true;
        var _$gY;
        var _$qV = new _$4F();
        if (b1 && b2) {
            if (((_$nv._$9M % 2) == 0 && (_$9q % 2) == 0) || (((_$nv._$9M + 1) % 2) == 0 && (_$9q + 1) % 2 == 0)) {
                if ((_$9q == _$E._$42) || (_$9q == _$E._$5t)) _$gY = _$E._$2I(_$qt) - _$0Q._$la; else _$gY = _$E._$2H(_$qt) - _$0Q._$la;
                var id2 = (_$gY / (1 + _$nv._$bJ));
                var id1 = _$gY - id2;
                id1 = parseInt(id1);
                id2 = parseInt(id2);
                rc1._$0u(_$qt);
                rc2._$0u(_$qt);
                if ((_$9q == _$E._$42) || (_$9q == _$E._$5t)) {
                    rc1.right = rc1.left + id1;
                    rc2.left = rc2.right - id2;
                    _$qV.left = rc1.right;
                    _$qV.right = _$qV.left + _$0Q._$la;
                    _$qV.top = _$qt.top;
                    _$qV.bottom = _$qt.bottom;
                } else {
                    rc1.bottom = rc1.top + id1;
                    rc2.top = rc2.bottom - id2;
                    _$qV.top = rc1.bottom;
                    _$qV.bottom = _$qV.top + _$0Q._$la;
                    _$qV.left = _$qt.left;
                    _$qV.right = _$qt.right;
                }
                ;this._$6H(pd1[0], rc1, _$9q);
                this._$6H(pd2[0], rc2, _$9q);
                _$nv._$p6._$6C(_$qV);
            } else {
                if ((_$9q == _$E._$42) || (_$9q == _$E._$5t)) {
                    rc1.left = _$qt.left;
                    rc1.right = _$qt.right;
                    rc2.left = _$qt.left;
                    rc2.right = _$qt.right;
                    _$qV.left = _$qt.left;
                    _$qV.right = _$qt.right;
                    _$qV.top = rc1.bottom;
                    _$qV.bottom = _$qV.top + _$0Q._$la;
                } else {
                    rc1.top = _$qt.top;
                    rc1.bottom = _$qt.bottom;
                    rc2.top = _$qt.top;
                    rc2.bottom = _$qt.bottom;
                    _$qV.top = _$qt.top;
                    _$qV.bottom = _$qt.bottom;
                    _$qV.left = rc1.right;
                    _$qV.right = _$qV.left + _$0Q._$la;
                }
                if (pd1[0] != null) this._$6H(pd1[0], rc1, _$9q);
                if (pd2[0] != null) this._$6H(pd2[0], rc2, _$9q);
                if (_$nv._$p6 != null) {
                    _$nv._$p6._$6C(_$qV);
                }
            }
        } else if (b1) {
            this._$6H(pd1[0], _$qt, _$9q);
        } else if (b2) {
            this._$6H(pd2[0], _$qt, _$9q);
        }
    } else {
        if (!_$nv._$8L) {
            _$nv._$oP._$6C(_$qt);
        }
    }
}
_$E._$5F = function (_$cQ, _$qy) {
    _$E._$6A(_$cQ, null, _$qy.left, _$qy.top, _$E._$2I(_$qy), _$E._$2H(_$qy), 0);
}
_$E.prototype._$2d = function (_$qD) {
    if (!this._$jr) {
        this._$jr = true;
    }
    var iw = 0;
    var ih = 0;
    if (window.innerHeight) {
        iw = window.innerWidth;
        ih = window.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) {
        ih = document.documentElement.clientHeight;
        iw = document.documentElement.clientWidth;
    } else {
        iw = document.body.clientWidth;
        ih = document.body.clientHeight;
    }
    _$qD.right = iw;
    _$qD.left = 0;
    _$qD.bottom = ih;
    _$qD.top = 0;
}
_$E.prototype._$5w = function (_$pW, _$dP, _$9n, _$em) {
    if (_$em != 0) {
        if (_$em > 0) {
            if (_$9n == _$E._$3u || _$9n == _$E._$3r) this._$4v(_$pW, _$9n, _$dP, false, 0, _$em, null, false); else this._$4v(_$pW, _$9n, _$dP, false, _$em, 0, null, false);
        } else {
            var _$9M;
            this._$4w(_$9n, _$dP + 1, _$em);
            var ilt, irb;
            var _$qV = new _$4F();
            _$qV._$0u(_$pW._$mc);
            if (_$9n == _$E._$3t || _$9n == _$E._$3s) {
                _$9M = _$E._$3u;
                ilt = _$pW._$mc.top;
                irb = _$pW._$mc.bottom;
                if (_$9n == _$E._$3s) {
                    _$qV.left = _$pW._$mc.right;
                } else _$qV.left = _$pW._$mc.left;
                _$qV.right = _$qV.left;
            } else {
                _$9M = _$E._$3s;
                ilt = _$pW._$mc.left;
                irb = _$pW._$mc.right;
                if (_$9n == _$E._$3u) {
                    _$qV.top = _$pW._$mc.bottom;
                } else _$qV.top = _$pW._$mc.top;
                _$qV.bottom = _$qV.top;
            }
            _$pW._$lV._$rz(_$qV.left, _$qV.top, _$qV.right - _$qV.left, _$qV.bottom - _$qV.top);
            this._$6J(_$9M, ilt, irb);
            this._$6J((_$9M + 2), ilt, irb);
            this._$i();
        }
    }
}
_$E.prototype._$6J = function (_$9n, _$do, _$dp) {
    var _$pW;
    var _$h5, _$eK;
    var _$qD = new _$4F();
    var _$qV = new _$4F();
    var _$9D = 0;
    this._$2d(_$qD);
    var i;
    for (i = 0; i < this._$m0[_$9n]._$hS._$2e(); i++) {
        _$pW = this._$m0[_$9n]._$hS._$m2[i];
        var _$em = new Array(1);
        _$em[0] = 0;
        _$pW._$6G(this, _$qD, _$9n, _$do, _$dp, _$em);
        this._$5w(_$pW, i, _$9n, _$em[0]);
    }
}
_$E.prototype._$2R = function (_$9n, _$cZ, _$d8) {
    var _$eq = this._$m0[_$9n]._$hS._$2e();
    if (_$d8 == 0xffffffff || _$d8 > _$eq) _$d8 = _$eq;
    var _$pW;
    var ire = 0;
    var i;
    for (i = _$cZ; i < _$d8; i++) {
        _$pW = this._$m0[_$9n]._$hS._$m2[i];
        if (_$pW._$jt) {
            if (_$9n == _$E._$3s || _$9n == _$E._$3t) ire += _$E._$2I(_$pW._$mc); else ire += _$E._$2H(_$pW._$mc);
            ire += _$pW._$cJ();
        }
    }
    return ire;
}
_$E.prototype._$2Q = function (_$9n, _$nQ) {
    var ire = this._$kc[_$9n];
    if (_$nQ == null) return ire;
    var _$pW;
    var i;
    for (i = 0; i < this._$m0[_$9n]._$hS._$2e(); i++) {
        _$pW = this._$m0[_$9n]._$hS._$m2[i];
        if (_$pW._$jt) {
            if (_$9n == _$E._$3s || _$9n == _$E._$3t) ire += _$E._$2I(_$pW._$mc); else ire += _$E._$2H(_$pW._$mc);
            ire += _$pW._$lV._$cJ();
        }
        if (_$pW == _$nQ) break;
    }
    return ire;
}
_$E.prototype._$2k = function (_$nA, _$9n, _$oa, _$oc) {
    var rcf = new _$4F();
    rcf._$0u(_$oa._$mc);
    if (_$9n == _$E._$3s || _$9n == _$E._$3u) {
        _$nA._$l2 = rcf.left;
        _$nA._$l7 = rcf.top;
    } else if (_$9n == _$E._$3r) {
        _$nA._$l2 = rcf.left;
        _$nA._$l7 = rcf.bottom - _$oc.cy;
    } else {
        _$nA._$l2 = rcf.right - _$oc.cx;
        _$nA._$l7 = rcf.top;
    }
}
_$E._$2j = function (_$nA, _$qv, _$oc) {
    _$nA._$l2 = _$qv.left;
    _$nA._$l7 = _$qv.top;
    if (_$nA._$jx == _$E._$3t) {
        _$nA._$l2 = _$qv.right - _$oc.cx;
    } else if (_$nA._$jx == _$E._$3r) {
        _$nA._$l7 = _$qv.bottom - _$oc.cy;
    }
}
_$E.prototype._$1m = function (_$nA, _$oc, _$h5, _$eK, _$qG, _$q6) {
    if (_$nA._$le._$li != this) return true;
    if (_$E._$5n(_$qG, _$q6) && _$nA._$iW) {
        var _$qJ = new _$4F();
        _$nA._$le._$hT._$2X(_$qJ);
        var _$8B;
        _$8B = _$E._$5n(_$qJ, _$q6);
        var _$92;
        _$92 = _$nA._$le._$lh._$3D(_$q6);
        if (_$8B || _$92) {
            _$nA._$kN = _$nA._$jY;
            _$nA._$lf = _$nA._$lh;
            _$nA._$jx = _$nA._$jw;
            _$oc.cx = _$h5;
            _$oc.cy = _$eK;
            _$E._$2j(_$nA, _$qG, _$oc);
            if (_$92) {
                _$nA._$le._$39(_$q6);
                _$nA._$j5 = true;
            }
            _$nA._$jy = 0xff;
            return false;
        } else {
            if ((_$nA._$le._$k5 != _$1j._$10) || (_$nA._$le._$lh._$oG == null) || (_$nA._$le._$lh._$oG != null && _$nA._$le._$lh._$oG._$iv.length < 2)) {
                _$nA._$jx = 0xff;
                return true;
            } else {
                _$qG.top = _$qJ.bottom;
                _$qG.bottom -= _$G._$6W;
                var _$9w = _$E._$n(_$qG, _$q6, false);
                if (_$9w != 0xff) {
                    _$9w = parseInt((_$9w - 1) / 2);
                    _$nA._$kN = _$nA._$jY;
                    _$nA._$lf = _$nA._$lh;
                    if (_$9w == _$E._$3s || _$9w == _$E._$3t) {
                        _$oc.cx = _$nA._$le._$mr.cx;
                        if (_$oc.cx >= (_$qG.right - _$qG.left)) _$oc.cx = _$oc.cx / 2;
                        _$oc.cy = _$qG.bottom - _$qG.top;
                    } else {
                        _$oc.cy = _$nA._$le._$mr.cy;
                        if (_$oc.cy > (_$qG.bottom - _$qG.top)) _$oc.cy = _$oc.cy / 2;
                    }
                    if (_$9w == _$E._$3s || _$9w == _$E._$3u) {
                        _$nA._$l2 = _$qG.left;
                        _$nA._$l7 = _$qG.top;
                    } else if (_$9w == _$E._$3r) {
                        _$nA._$l2 = _$qG.left;
                        _$nA._$l7 = _$qG.bottom - _$oc.cy;
                    } else {
                        _$nA._$l2 = _$qG.right - _$oc.cx;
                        _$nA._$l7 = _$qG.top;
                    }
                    _$nA._$jx = _$nA._$jw;
                    _$nA._$jy = _$9w;
                    return false;
                }
            }
        }
    }
    return true;
}
_$E.prototype._$R = function (_$nA, _$nx, _$q6, _$oc) {
    if (!this._$iV) return 0xff;
    var _$qH = new _$4F();
    this._$2d(_$qH);
    _$qH.right = _$qH.right - _$qH.top;
    _$qH.bottom = _$qH.bottom - _$qH.top;
    _$qH.left = 0;
    _$qH.top = 0;
    _$qH.left += this._$kc[0];
    _$qH.right -= this._$kc[2];
    _$qH.top += this._$kc[1];
    _$qH.bottom -= this._$kc[3];
    var _$qG = new _$4F();
    _$qG._$0u(_$nA._$mj);
    var _$eK = _$E._$2H(_$qG);
    var _$h5 = _$E._$2I(_$qG);
    var _$gH = _$h5 < _$eK ? _$h5 : _$eK;
    _$nA._$jg = false;
    _$oc.cx = _$h5;
    _$oc.cy = _$eK;
    if (!this._$1m(_$nA, _$oc, _$h5, _$eK, _$qG, _$q6)) return _$nA._$jx;
    var _$9x = _$E._$n(_$qH, _$q6, true);
    _$nA._$kN = 0;
    _$nA._$lf = null;
    _$nA._$jx = 0;
    if ((_$9x != 0xff) && ((_$9x % 2) == 0)) {
        _$nA._$jx = parseInt(_$9x / 2);
        _$nx._$2O(_$oc, _$gH, _$qH, false);
        _$nA._$jg = true;
        _$E._$2j(_$nA, _$qH, _$oc);
        return _$nA._$jx;
    }
    var _$9N;
    var _$8Q = true;
    var _$oF = null;
    var _$qj = new Array(1);
    var _$gR = 0xff;
    _$9x = 0xff;
    var _$dA = new Array(1);
    var i;
    for (i = 0; i < 4; i++) {
        _$9N = this._$03(_$nA, i, _$q6, _$oc, _$gH, _$qj, _$dA);
        if (_$9N != 0xff) {
            if ((((_$9N + 1) % 2) == 0) || _$dA[0] >= 0) {
                _$oF = _$qj[0];
                _$gR = i;
                _$9x = _$9N;
                if (_$dA[0] >= 0) _$nA._$kN = _$dA[0];
                break;
            } else if (_$8Q) {
                _$9x = _$9N;
                _$oF = _$qj[0];
                _$gR = i;
            }
        }
    }
    var rcs = new _$4F();
    rcs._$0u(this._$mg);
    var bme = false;
    if ((_$nA._$le != null) && (_$nA._$le == _$oF)) {
        _$nA._$jx = 0xff;
        bme = true;
        if (!_$E._$5n(rcs, _$q6)) return 0xff;
    }
    if (!bme && _$9x != 0xff && ((_$9x + 1) % 2 == 0)) {
        _$nA._$jx = parseInt((_$9x / 2));
        if (_$oF != null) _$nx._$2O(_$oc, _$gH, _$qH, true); else {
            _$qH.left = _$qH.top = 0;
            _$qH.right = _$oc.cx;
            _$qH.bottom = _$oc.cy;
            _$nx._$2O(_$oc, _$gH, _$qH, false);
        }
        _$nx._$6g(_$gR, _$oF, parseInt((_$9x / 2)));
    } else {
        _$9x = _$E._$n(rcs, _$q6, false);
        if (_$9x != 0xff) {
            _$nA._$jx = parseInt((_$9x / 2));
            _$nx._$2O(_$oc, _$gH, this._$mg, false);
        }
        if (_$9x != 0xff && ((_$9x + 1) % 2 == 0)) {
            _$nA._$kN = 0xffffffff;
            _$nA._$lf = null;
            _$nA._$jx = parseInt((_$9x / 2));
            _$nA._$jy = parseInt((_$9x / 2));
            _$E._$2j(_$nA, rcs, _$oc);
        } else _$nA._$jx = 0xff;
        _$nA._$jg = true;
    }
    return _$nA._$jx;
}
_$E.prototype._$03 = function (_$nA, _$9n, _$q6, _$oc, _$dU, _$pk, _$dA) {
    if (this._$m0[_$9n] == null) {
        return 0xff;
    }
    var _$pW;
    var _$9A = 0xff;
    var _$9N = 0xff;
    _$pk[0] = null;
    var _$gn = new Array(1);
    var _$eq = this._$m0[_$9n]._$hS._$2e();
    var i;
    for (i = 0; i < _$eq; i++) {
        _$dA[0] = -1;
        _$pW = this._$m0[_$9n]._$hS._$m2[i];
        if (_$pW._$jt) {
            _$9N = _$pW._$04(this, _$nA, _$q6, _$oc, _$dU, _$pk, _$gn);
            if ((((_$9N + 1) % 2) == 0 && _$9N != 0xff) || _$gn[0] >= 1) {
                if (_$gn[0] == 0 || _$gn[0] == 1) {
                    _$dA[0] = i;
                    if (_$gn[0] == 1) {
                        this._$2k(_$nA, _$9n, _$pW, _$oc);
                    }
                } else if (_$gn[0] == 2) {
                    var j;
                    var _$8S = false;
                    for (j = i + 1; j < _$eq; j++) {
                        var _$pe = this._$m0[_$9n]._$hS._$m2[j];
                        if (_$pe._$jt) {
                            _$pW = _$pe;
                            _$8S = true;
                            break;
                        }
                    }
                    if (_$8S) this._$2k(_$nA, _$9n, _$pW, _$oc); else {
                        var _$qN = new _$4F();
                        _$qN._$0u(_$pW._$mc);
                        if (_$9n == _$E._$3u) {
                            _$nA._$l2 = _$qN.left;
                            _$nA._$l7 = _$qN.bottom;
                        } else if (_$9n == _$E._$3s) {
                            _$nA._$l2 = _$qN.right;
                            _$nA._$l7 = _$qN.top;
                        } else if (_$9n == _$E._$3t) {
                            _$nA._$l2 = _$qN.left - _$oc.cx;
                            _$nA._$l7 = _$qN.top;
                        } else {
                            _$nA._$l2 = _$qN.left;
                            _$nA._$l7 = _$qN.top - _$oc.cy;
                        }
                    }
                    _$dA[0] = i + 1;
                }
                if (_$gn[0] > 0) {
                    _$nA._$jg = true;
                } else _$nA._$jg = false;
                return _$9N;
            }
        }
    }
    return _$9N;
}
_$E._$n = function (_$o8, _$q6, _$89) {
    var _$9x = 0xff;
    if (_$E._$5n(_$o8, _$q6)) {
        if (_$89) {
            var xdL = _$q6.x - _$o8.left;
            var xdR = _$q6.x - _$o8.right;
            var ydT = _$q6.y - _$o8.top;
            var ydB = _$q6.y - _$o8.bottom;
            if (xdL > 0 && xdL <= (_$E._$A / 2)) {
                _$9x = _$E._$3m;
            } else if (xdL > (_$E._$A / 2) && xdL < _$E._$A) {
                _$9x = _$E._$3l;
            } else if (ydT > 0 && (ydT) <= (_$E._$A / 2)) {
                _$9x = _$E._$3q;
            } else if (ydT > (_$E._$A / 2) && ydT < _$E._$A) {
                _$9x = _$E._$3p;
            } else if (xdR < 0 && xdR >= (-_$E._$A / 2)) {
                _$9x = _$E._$3o;
            } else if (xdR < (-_$E._$A / 2) && xdR >= -_$E._$A) _$9x = _$E._$3n; else if (ydB < 0 && ydB >= (-_$E._$A / 2)) _$9x = _$E._$3k; else if (ydB < (-_$E._$A / 2) && ydB >= -_$E._$A) {
                _$9x = _$E._$3j;
            }
        } else {
            if ((_$q6.x - _$o8.left) > 0 && (_$q6.x - _$o8.left) <= _$E._$A) _$9x = _$E._$3l; else if ((_$q6.y - _$o8.top) > 0 && (_$q6.y - _$o8.top) <= _$E._$A) _$9x = _$E._$3p; else if ((_$q6.x - _$o8.right) < 0 && (_$q6.x - _$o8.right) >= -_$E._$A) _$9x = _$E._$3n; else if ((_$q6.y - _$o8.bottom) < 0 && (_$q6.y - _$o8.bottom) >= -_$E._$A) _$9x = _$E._$3j;
        }
    } else {
        if ((_$q6.y > _$o8.top) && (_$q6.y < _$o8.bottom)) {
            if ((_$q6.x - _$o8.left) < 0 && (_$q6.x - _$o8.left) >= -_$E._$A) _$9x = _$E._$3m; else if ((_$q6.x - _$o8.right) > 0 && (_$q6.x - _$o8.right) <= _$E._$A) _$9x = _$E._$3o;
        } else if ((_$q6.x > _$o8.left) && (_$q6.x < _$o8.right)) {
            if ((_$q6.y - _$o8.top) < 0 && (_$q6.y - _$o8.top) >= -_$E._$A) _$9x = _$E._$3q; else if ((_$q6.y - _$o8.bottom) > 0 && (_$q6.y - _$o8.bottom) <= _$E._$A) _$9x = _$E._$3k;
        }
    }
    return _$9x;
}
_$E.prototype._$24 = function (_$nA, _$nw, _$q6, _$9n, _$oc) {
    _$9n[0] = this._$R(_$nA, _$nw, _$q6, _$oc);
    if (_$9n[0] > 3 || _$9n[0] < 0) return null;
    return this;
}
_$E.prototype._$2 = function (_$nq) {
    var _$91 = false;
    if (_$nq != null && _$nq._$li != null && !_$nq._$li._$iK && this._$m5 != null && this._$m5._$li == _$nq._$li) _$91 = true;
    if (this._$m5 != null && this._$m5 != _$nq) {
        this._$m5._$rw(false, !_$91);
    }
    _$nq._$rw(true, !_$91);
    this._$m5 = _$nq;
}
_$E.prototype._$c6 = function () {
    return this._$hz;
}
_$E.prototype._$c8 = function () {
}
_$E.prototype._$rD = function (com) {
}
_$E.prototype.Add = function (com) {
}
_$E.prototype._$e = function (com) {
    var i = 0;
}
_$E.prototype._$5L = function (com) {
}
_$E.prototype._$2n = function () {
}
_$E._$2I = function (rc) {
    return (rc.right - rc.left);
}
_$E._$2H = function (rc) {
    return (rc.bottom - rc.top);
}
_$E._$5z = function (com, rc) {
    var pt = new _$5i();
    pt.x = rc.left;
    pt.y = rc.top;
    _$6j(com, pt);
    rc.left = pt.x;
    rc.top = pt.y;
    pt.x = rc.right;
    pt.y = rc.bottom;
    _$6j(com, pt);
    rc.right = pt.x;
    rc.bottom = pt.y;
}
_$E._$2b = function (com, rc) {
}
_$E._$2X = function (com, rc) {
    var i = 0;
}
_$E._$5n = function (_$qG, _$q6) {
    if ((_$q6.x > _$qG.left) && (_$q6.x < _$qG.right) && (_$q6.y > _$qG.top) && (_$q6.y < _$qG.bottom)) return true;
    return false;
}
_$E._$6A = function (com, _$qF, _$dn, _$dZ, _$e1, _$dh, _$dd) {
    _$dn = 0;
}
_$E._$0m = function (_$cQ, pt) {
    var _$qa = _$cQ._$cr();
    pt.x = pt.x + _$qa.x;
    pt.y = pt.y + _$qa.y;
}
_$E._$6j = function (_$cQ, pt) {
    var _$qa = _$cQ._$cr();
    pt.x = pt.x - _$qa.x;
    pt.y = pt.y - _$qa.y;
}
_$E._$6x = function (_$qW) {
    _$qW.left = _$qW.right = _$qW.top = _$qW.bottom = 0;
}
_$E._$6m = function (_$eE) {
}
_$E._$5y = function (_$cT, _$qH) {
    var _$qf = _$cT._$cr();
    _$qH.left = _$qH.left + _$qf.x;
    _$qH.right = _$qH.right + _$qf.x;
    _$qH.top += _$qf.y;
    _$qH.bottom += _$qf.y;
}
_$E.prototype._$1U = function (_$nr, _$dO, _$sD, _$nL, _$d7, _$dP, _$nv, _$o4) {
    var _$pW;
    _$nv[0] = _$nv[1] = null;
    var _$ff = new Array(1);
    var i;
    for (i = 0; i < 4; i++) {
        var _$eq = this._$m0[i]._$hS._$2e();
        var j;
        for (j = 0; j < _$eq; j++) {
            _$pW = this._$m0[i]._$hS._$m2[j];
            var _$qi = this._$1O(_$nr, _$sD, _$pW._$lp, _$ff, _$o4);
            if (_$qi != null && _$pW._$kM == _$dO) {
                if (_$dO != 0) {
                    _$d7[0] = i;
                    _$dP[0] = j;
                    _$nv[0] = _$qi;
                    _$nL[0] = this;
                    return _$ff[0];
                }
                if ((_$ff[0] & _$1j._$1F) > 0) {
                    _$d7[0] = i;
                    _$dP[0] = j;
                    _$nv[0] = _$qi;
                    _$nL[0] = this;
                } else {
                    _$d7[1] = i;
                    _$dP[1] = j;
                    _$nv[1] = _$qi;
                    _$nL[1] = this;
                }
                ;this._$1T(_$nr, _$sD, _$nv, _$d7, _$dP, _$nL, _$ff);
                return _$ff[0] & _$1j._$1I;
            }
        }
    }
    if (_$dO != 0) return _$ff[0] & _$1j._$1I;
    this._$1T(_$nr, _$sD, _$nv, _$d7, _$dP, _$nL, _$ff);
    return _$ff[0] & _$1j._$1I;
}
_$E.prototype._$1T = function (_$nr, _$ro, _$oq, _$e6, _$e8, _$or, _$dv) {
    _$nr._$lH._$1T(_$nr, _$ro, _$oq, _$e6, _$e8, _$or, _$dv);
}
_$E.prototype._$1O = function (_$nr, _$sD, _$nv, _$dv, _$o4) {
    if (_$nv == null) return null;
    var _$qi = null;
    if (_$nv._$oN != null) _$qi = this._$1O(_$nr, _$sD, _$nv._$oN, _$dv, _$o4);
    if (_$qi != null) return _$qi;
    if (_$nv._$pV != null) return this._$1O(_$nr, _$sD, _$nv._$pV, _$dv, _$o4);
    if (_$nv._$sH != null && (_$sD == _$nv._$sH)) return _$nv; else if (_$nv._$lI != null && _$nv._$lI.length > 0) {
        var _$eq = _$nv._$lI.length;
        var i;
        for (i = 0; i < _$eq; i++) {
            var _$sm = _$nv._$lI[i]._$ro;
            if (_$sm != null && (_$sD == _$sm)) {
                var _$oV = _$nv._$lI[i];
                _$dv[0] = _$oV._$b3;
                if (_$o4 != null) _$o4[0] = _$oV;
                _$oV._$nr = _$nr;
                _$oV._$ro = null;
                return _$nv;
            }
        }
    }
    return null;
}
_$E.prototype._$2l = function (_$nK, _$7Z) {
    var i;
    var d;
    for (i = 0; i < 4; i++) {
        _$nK[i] = 0;
        if (this._$hX[i] != null) {
            if (i == 1 || i == 3) {
                d = parseInt(this._$hX[i].style.height);
                _$nK[i] = d;
            } else {
                _$nK[i] = parseInt(this._$hX[i].style.width);
            }
        }
    }
}
_$E.prototype._$rB = function (_$oo) {
    this._$jM = _$oo;
    this._$i();
}
_$E.prototype._$r5 = function (_$ae) {
    if (_$ae == null) return;
    var i;
    for (i = 0; i < 4; i++) {
        if (this._$hX[i] == _$ae) {
            this._$hX[i] = null;
            this._$5G();
            this._$i();
            return;
        }
    }
    if (this._$jM != null) {
    }
}
_$E.prototype._$7E = function (_$ae, _$am) {
    if (DSXDFUtil._$jP == 0 && DSXDFUtil._$ki <= 7) {
        this._$jv = true;
    } else if ((!DSXDFUtil._$iX) && _$ae instanceof HTMLIFrameElement) {
        if (DSXDFUtil._$07(_$ae.id)) {
            this._$jv = true;
        }
    }
    var _$eT, _$gX, _$h5, _$eK;
    var rc = new _$4F();
    this._$2d(rc);
    if (_$am == _$E._$3w) {
        this._$rB(_$ae);
        return;
    } else if (_$am == _$E._$3x) {
        _$eT = 0;
        _$gX = this._$kc[1];
        _$eK = rc.bottom - rc.top - (this._$kc[1] + this._$kc[3]);
        _$h5 = _$ae.style.width;
        _$h5 = parseInt(_$h5, "px");
        this._$6o(0, _$ae, _$eT, _$gX, _$h5, _$eK);
    } else if (_$am == _$E._$3y) {
        _$h5 = _$ae.style.width;
        _$h5 = parseInt(_$h5, "px");
        _$eT = this._$mg.right - _$h5;
        this._$6o(2, _$ae, _$eT, this._$kc[1], _$h5, rc.bottom - rc.top - this._$kc[1] - this._$kc[3]);
    } else if (_$am == _$E._$3z) {
        _$eK = _$ae.style.height;
        _$eK = parseInt(_$eK, "px");
        this._$6o(1, _$ae, 0, 0, rc.right - rc.left, _$eK);
    } else if (_$am == _$E._$3v) {
        _$eK = _$ae.style.height;
        _$eK = parseInt(_$eK, "px");
        this._$6o(3, _$ae, 0, rc.bottom - rc.top - _$eK, rc.right - rc.left, _$eK);
        if (this._$hX[_$E._$3x] != null) {
            var _$th = this._$hX[_$E._$3x];
            var left = _$mP._$2r(_$th);
            var top = _$mP._$2U(_$th);
            var width = parseInt(_$th.style.width, "px");
            var height = parseInt(_$th.style.height, "px") - _$eK;
            _$mP._$6n(_$th, left, top, width, height);
        }
        if (this._$hX[_$E._$3y] != null) {
            var _$th = this._$hX[_$E._$3y];
            var left = _$mP._$2r(_$th);
            var top = _$mP._$2U(_$th);
            var width = parseInt(_$th.style.width, "px");
            var height = parseInt(_$th.style.height, "px") - _$eK;
            _$mP._$6n(_$th, left, top, width, height);
        }
    }
    ;this._$i();
}
_$E.prototype._$5G = function () {
    var _$h1 = new Array(4);
    var _$ev;
    this._$2l(_$h1, true);
    if ((_$h1[1] - this._$kc[1]) != 0 || (_$h1[0] - this._$kc[0]) != 0 || (_$h1[2] - this._$kc[2]) != 0 || (_$h1[3] - this._$kc[3]) != 0) {
        var k;
        var _$e4;
        for (k = 1; k < 4; k = k + 2) {
            if (_$h1[k] - this._$kc[k] != 0) {
                _$ev = _$h1[k] - this._$kc[k];
                _$e4 = _$ev - (this._$mg.bottom - this._$mg.top);
                this._$kc[k] = _$h1[k];
                this._$4w(k, 0, _$ev);
                this._$6J(_$E._$3s, -32767, 32767);
                this._$6J(_$E._$3t, -32767, 32767);
                if (_$e4 > 0) {
                    var _$f4 = new Array(1);
                    var _$fY = new Array(1);
                    this._$6Q(_$E._$3u, -_$e4, _$f4, _$fY);
                }
            }
        }
        for (k = 0; k < 3; k = k + 2) {
            if ((_$h1[k] - this._$kc[k]) != 0) {
                _$ev = _$h1[k] - this._$kc[k];
                _$e4 = _$ev - (this._$mg.right - this._$mg.left);
                this._$kc[k] = _$h1[k];
                this._$4w(k, 0, _$ev);
                this._$6J(_$E._$3u, -32767, 32767);
                this._$6J(_$E._$3r, -32767, 32767);
                if (_$e4 > 0) {
                    var _$f4 = new Array(1);
                    var _$fY = new Array(1);
                    this._$6Q(_$E._$3s, -_$e4, _$f4, _$fY);
                }
            }
        }
    }
}
_$E.prototype._$rZ = function (_$nr, _$8n) {
    _$nr._$rZ(_$8n);
}
_$E.prototype._$su = function (_$nr) {
    _$nr._$su();
}
_$E.prototype._$st = function (_$nr) {
    _$nr._$st();
}
_$E.prototype._$sw = function (_$nr, _$q6) {
    return _$nr._$sw(_$q6);
}
_$E.prototype._$sx = function (_$sf) {
    _$sf._$sx();
}
_$E.prototype._$sv = function (_$sf, _$tT, _$hm) {
    return _$sf._$sv(_$tT, _$hm);
}
_$E.prototype._$4a = function (_$nN) {
    var rc;
    {
        var _$eT, _$gX, _$g9, _$ej;
        _$eT = parseInt(_$nN._$qX());
        _$gX = parseInt(_$nN._$qX());
        _$g9 = parseInt(_$nN._$qX());
        _$ej = parseInt(_$nN._$qX());
        if (this._$iK) {
        } else {
            this._$49(_$eT, _$gX, _$g9, _$ej);
        }
        var _$gE = 1;
        if (this._$iK) _$gE = 4;
        var _$sF;
        var _$si;
        var _$h3;
        var i;
        for (i = 0; i < _$gE; i++) {
            this._$m3[i]._$in._$60();
            var _$gj = 0;
            while (true) {
                _$sF = "SEC" + _$gj;
                _$si = _$nN._$qX();
                if (_$si == _$sF) {
                    var _$pK = new _$M();
                    _$pK._$gu = 0;
                    this._$m3[i]._$in._$5(_$pK, _$gj);
                    _$h3 = parseInt(_$nN._$qX());
                    _$pK._$h5 = _$h3;
                    _$h3 = parseInt(_$nN._$qX());
                    _$pK._$eK = _$h3;
                    _$h3 = parseInt(_$nN._$qX());
                    _$pK._$f5 = _$h3;
                    if (_$pK._$f5 < 0) _$pK._$f5 = -1;
                    _$h3 = parseInt(_$nN._$qX());
                    _$pK._$fZ = _$h3;
                    if (_$pK._$fZ < 0) _$pK._$fZ = -1;
                    _$pK._$lp = new _$F();
                    _$h3 = parseInt(_$nN._$qX());
                    if (_$h3 == 0) {
                        _$si = _$nN._$qX();
                        if (_$si == "ROOTBLOCK") {
                            this._$48(_$nN, _$pK._$lp);
                        } else break;
                    } else if (_$h3 == 1 || _$h3 == 2) {
                        _$si = _$nN._$qX();
                        if (_$si == "ROOTBLOCK") {
                            _$pK._$gu = _$h3;
                            this._$4b(_$nN, _$pK._$lp);
                        } else break;
                    }
                    _$gj++;
                } else break;
            }
        }
        if (this._$iK) {
            this._$7j(0, 1, true, true);
            this._$7j(0, 3, false, true);
            this._$7j(2, 1, true, false);
            this._$7j(2, 3, false, false);
        } else {
        }
        for (i = 0; i < _$gE; i++) {
            var _$eD = this._$m0[i]._$hS._$2e();
            var _$gI;
            var _$94;
            if (i == 0 || i == 2) {
                _$gI = 1;
                if (i == 0) _$94 = true; else _$94 = false;
            } else {
                _$gI = 0;
                if (i == 1) _$94 = true; else _$94 = false;
            }
            var _$pJ;
            if (this._$iK) {
                var j;
                for (j = 0; j < 2; j++) {
                    var _$g5 = this._$m3[_$gI + 2 * j]._$in._$2e();
                    var k;
                    for (k = 0; k < _$g5; k++) {
                        _$pJ = this._$m3[_$gI + 2 * j]._$in._$m2[k];
                        if (_$94) _$pJ._$f5 = _$pJ._$f5 + _$eD; else _$pJ._$fZ = _$pJ._$fZ + _$eD;
                    }
                }
            }
        }
        for (i = 0; i < _$gE; i++) {
            var _$eq = this._$m3[i]._$in._$2e();
            var _$es = this._$m0[i]._$hS._$2e();
            var j;
            for (j = 0; j < _$eq; j++) {
                var _$pJ = this._$m3[i]._$in._$m2[j];
                _$pJ._$eP = _$es;
                var _$pW = null;
                if (_$pJ._$gu == 0) _$pW = new _$0Q(); else if (_$pJ._$gu == 1) _$pW = new _$73(); else _$pW = new _$4k();
                _$pJ._$oD = _$pW;
                _$pW._$mc.left = _$pW._$mc.top = 0;
                _$pW._$mc.right = _$pJ._$h5;
                _$pW._$mc.bottom = _$pJ._$eK;
                _$pW._$jt = false;
                _$pW._$lp = _$pJ._$lp;
                this._$m0[i]._$hS._$5(_$pW, _$es);
                _$es++;
            }
        }
        for (i = 0; i < _$gE; i++) {
            var _$eq = this._$m3[i]._$in._$2e();
            var _$p2, _$pA;
            if (i == 0 || i == 2) {
                _$p2 = this._$m0[1];
                _$pA = this._$m0[3];
            } else {
                _$p2 = this._$m0[0];
                _$pA = this._$m0[2];
            }
            if (this._$iK) {
                var j;
                for (j = 0; j < _$eq; j++) {
                    var _$pJ = this._$m3[i]._$in._$m2[j];
                    if (_$pJ._$f5 != -1) _$pJ._$oD._$ly = _$p2._$hS._$m2[_$pJ._$f5]; else _$pJ._$oD._$ly = null;
                    if (_$pJ._$fZ != -1) _$pJ._$oD._$lP = _$pA._$hS._$m2[_$pJ._$fZ]; else _$pJ._$oD._$lP = null;
                }
            }
        }
    }
}
_$E.prototype._$0d = function (_$o5, _$d6, _$o6) {
    if (_$o6 == null) return;
    var _$ed = _$o5;
    var _$e9 = new Array(4);
    var i;
    var _$ey = _$d6;
    for (i = 0; i < _$ey; i++) _$e9[i] = this._$m0[i]._$hS._$2e();
    var _$fX = _$o6._$2e();
    var nn;
    for (nn = 0; nn < _$fX; nn++) {
        var _$sE = _$o6._$m2[nn]._$2V();
        var _$8S = false;
        for (i = 0; i < _$ey; i++) {
            if (_$8S) break;
            var s;
            for (s = _$ed[i]; s < _$e9[i]; s++) {
                var pbf = this._$1S(_$sE, this._$m0[i]._$hS._$m2[s]._$lp);
                if (pbf != null) {
                    _$8S = true;
                    this._$5d(pbf, null, _$sE, i, s);
                    _$e9[i] = this._$m0[i]._$hS._$2e();
                    break;
                }
            }
        }
    }
}
_$E.prototype._$1S = function (_$sD, _$nv) {
    if (_$nv == null) return null;
    var _$qi = null;
    if (_$nv._$oN != null) _$qi = _$1S(_$sD, _$nv._$oN);
    if (_$qi != null) return _$qi;
    if (_$nv._$pV != null) return _$1S(_$sD, _$nv._$pV);
    if (_$nv._$sH != null && _$nv._$sH._$ag(_$sD) == 0) {
        return _$nv;
    } else if (_$nv._$lI != null && _$nv._$lI.size() > 0) {
        var _$eq = _$nv._$lI.length;
        var i;
        for (i = 0; i < _$eq; i++) {
            var _$sK = _$nv._$lI[i]._$ro;
            if (_$sK != null && _$sK._$ag(_$sD) == 0) {
                return _$nv;
            }
        }
    }
    return null;
}
_$E.prototype._$7j = function (_$d7, _$dx, _$8g, _$8j) {
    var _$q2, _$pa;
    _$q2 = this._$m3[_$d7];
    _$pa = this._$m3[_$dx];
    var _$eq = _$q2._$in._$2e();
    var _$fm = _$pa._$in._$2e();
    var _$eP, _$fn;
    _$eP = 0;
    _$fn = -1;
    var _$pX, _$p7;
    while (_$eP < _$eq) {
        var _$pJ = _$q2._$in._$m2[_$eP];
        if (_$8g) _$pX = _$pJ._$f5; else _$pX = _$pJ._$fZ;
        if ((_$pX) > (_$fm - 1)) _$pX = (_$fm - 1);
        if ((_$pX) < _$fn) _$pX = _$fn;
        if (_$8g) _$pJ._$f5 = _$pX; else _$pJ._$fZ = _$pX;
        if ((_$pX) != _$fn) {
            var _$eH = (_$pX) - _$fn;
            var s;
            for (s = 0; s < _$eH; s++) {
                var _$p8 = _$pa._$in._$m2[_$fn + 1 + s];
                if (_$8j) _$p7 = _$p8._$f5; else _$p7 = _$p8._$fZ;
                _$p7 = _$eP - 1;
                if (_$8j) _$p8._$f5 = _$p7; else _$p8._$fZ = _$p7;
            }
            _$fn = _$pX;
        } else {
            if ((_$fn + 1) < _$fm) {
                var _$p8 = _$pa._$in._$m2[_$fn + 1];
                if (_$8j) _$p7 = _$p8._$f5; else _$p7 = _$p8._$fZ;
                if (_$p7 < _$eP) _$p7 = _$eP;
                if (_$p7 > (_$eq - 1)) _$p7 = _$eq - 1;
                if (_$8j) _$p8._$f5 = _$p7; else _$p8._$fZ = _$p7;
                var _$eH = (_$p7) - _$eP;
                var s;
                for (s = 0; s < _$eH; s++) {
                    var _$pW = _$q2._$in._$m2[_$eP + 1 + s];
                    if (_$8g) _$pW._$f5 = _$fn; else _$pW._$fZ = _$fn;
                }
                _$fn += 1;
                _$eP += _$eH;
            }
        }
        _$eP++;
    }
    var i;
    for (i = (_$fn + 1); i < (_$fm - _$fn - 1); i++) {
        var _$p8 = _$pa._$in._$m2[i];
        if (_$8j) _$p8._$f5 = _$eP - 1; else _$p8._$fZ = _$eP - 1;
    }
}
_$E.prototype._$4b = function (_$nN, _$nv) {
}
_$E.prototype._$48 = function (_$nN, _$nv) {
    var _$hn;
    var dw;
    _$hn = parseInt(_$nN._$qX());
    _$nv._$bJ = (_$hn / 1000.0);
    _$nv._$8L = true;
    var _$ho = 0;
    var _$si = _$nN._$qX();
    var _$oz;
    if (_$si == "LEFTBLOCK") {
        _$hn = 0;
        _$oz = new _$F();
        _$nv._$oN = _$oz;
        _$oz._$pp = _$nv;
        this._$48(_$nN, _$oz);
    } else {
        _$hn = 1;
    }
    _$si = _$nN._$qX();
    if (_$si == "RIGHTBLOCK") {
        _$ho = 0;
        _$oz = new _$F();
        _$nv._$pV = _$oz;
        _$oz._$pp = _$nv;
        this._$48(_$nN, _$oz);
    } else {
        _$ho = 1;
    }
    if (_$hn == 1 && _$ho == 1) {
        this._$46(_$nN, _$nv);
    }
    _$hn = parseInt(_$nN._$qX());
    if ((_$hn & 0x01) == 1) _$nv._$9e = true; else _$nv._$9e = false;
    _$nv._$9M = ((_$hn >> 8) & 0xff);
    _$nv._$9x = ((_$hn >> 16) & 0xff);
}
_$E.prototype._$4c = function (_$nN, _$nv) {
}
_$E.prototype._$46 = function (_$nN, _$nv) {
    var _$gN = parseInt(_$nN._$qX());
    var i;
    for (i = 0; i < _$gN; i++) {
        var _$sm = _$nN._$qX();
        var _$b6 = parseInt(_$nN._$qX());
        var _$e5 = 0x3FF;
        if (_$nN._$kZ == 1) {
            _$e5 = parseInt(_$nN._$qX());
        }
        var pt = new _$5i();
        var iX, iY;
        iX = 0;
        iY = 0;
        if (this._$iK) {
            pt.x = parseInt(_$nN._$qX());
            pt.y = parseInt(_$nN._$qX());
            iX = parseInt(_$nN._$qX());
            iY = parseInt(_$nN._$qX());
        }
        _$nv._$f(_$sm, _$b6, pt, iX, iY, _$e5);
    }
}
_$E.prototype._$52 = function (_$oQ) {
    if (_$E._$lJ != null) {
        _$E._$lJ._$aJ();
        _$E._$lJ = null;
    }
    _$E._$lJ = _$oQ;
    _$E._$kE = 0;
}
_$E.prototype._$0b = function (e) {
    if (_$E._$lJ != null) {
        _$E._$lJ._$0b(e);
    }
}
_$E.prototype._$0a = function (e) {
    if (_$E._$lJ != null) {
        _$E._$lJ._$0a(e);
    }
}
_$E.prototype._$bT = function (_$dS) {
    if (this._$m1[_$dS] != null) {
        return this._$m1[_$dS]._$bU();
    }
    return null;
}
_$E.prototype._$0c = function (e) {
    for (var i = 0; i < 4; i++) {
        if (this._$m1[i] != null) {
            this._$m1[i]._$0j();
        }
    }
}
_$E.prototype._$rY = function (_$ru) {
    _$iq = _$ru;
    var i;
    for (i = 0; i < 4; i++) {
        if (this._$m1[i] != null) this._$m1[i]._$5H();
    }
}
_$E.prototype._$9 = function (_$9n, _$nr, _$8a) {
    var _$gp = 0xFFFFFFFF;
    if (_$8a) _$gp = 0; else if (this._$m1[_$9n] == null) {
        var _$eq = this._$m0[_$9n]._$hS._$2e();
        alert("Sd");
        var _$pW;
        var i;
        for (i = 0; i < _$eq; i++) {
            _$pW = this._$m0[_$9n]._$hS._$m2[i];
            if (_$pW._$kM == 0) {
                _$gp = i;
                break;
            } else if (_$pW._$kM == 1) {
                _$gp = (i + 1);
                if (_$gp == _$eq) {
                    _$gp = 0xFFFFFFFF;
                    break;
                }
            }
        }
    }
    if (this._$m1[_$9n] != null) {
        _$gp = this._$2N(_$9n, this._$m1[_$9n]);
        if (this._$m1[_$9n]._$jt == false) this._$a(_$9n, _$gp, 0);
    } else {
        this._$a(_$9n, _$gp, 0);
    }
    ;this._$m1[_$9n]._$9(_$nr);
}
_$E.prototype._$k = function (_$9n) {
    var _$pW = this._$m1[_$9n];
    if (_$pW == null) return;
    var ino;
    var _$po = _$pW._$0v();
    this._$5T(_$9n, null);
    ino = _$po.length;
    var i;
    for (i = 0; i < ino; i++) {
        this._$9(_$9n, _$po[i]._$nr, true);
    }
}
_$E.prototype._$5T = function (_$9n, _$nr) {
    var _$pW = this._$m1[_$9n];
    if (_$pW == null) return;
    var ino = this._$m1[_$9n]._$5T(_$nr);
    if (ino > 0) return;
    if (_$pW._$jt) {
        var _$qW = new _$4F();
        _$pW._$2J(null, _$qW);
        _$pW._$r8();
        var _$9M;
        var _$e3;
        if (_$9n == _$E._$3s || _$9n == _$E._$3t) {
            _$e3 = _$qW.right - _$qW.left;
            _$9M = _$E._$3u;
        } else {
            _$e3 = _$qW.bottom - _$qW.top;
            _$9M = _$E._$3s;
            _$qW.top = _$qW.left;
            _$qW.bottom = _$qW.right;
        }
        var _$eu = this._$2N(_$9n, _$pW);
        this._$4w(_$9n, _$eu + 1, -(_$e3 + _$pW._$cJ()));
        if (_$9n == _$E._$3t || _$9n == _$E._$3r) _$e3 += _$pW._$cJ(); else _$e3 = -(_$e3 + _$pW._$cJ());
        _$pW.setVisible(false);
        this._$6J(_$9M, _$qW.top, _$qW.bottom);
        this._$6J((_$9M + 2), _$qW.top, _$qW.bottom);
        this._$i();
    }
    var _$gp = this._$2N(_$9n, _$pW);
    var _$qn;
    var _$pN = this._$m1[_$9n];
    this._$m1[_$9n] = null;
    this._$m0[_$9n]._$hS._$5N(_$gp);
    var i;
    for (i = _$gp; i < this._$m0[_$9n]._$hS._$2e(); i++) {
        _$qn = this._$m0[_$9n]._$hS._$m2[i];
        var pb = _$qn._$lp;
        this._$6y(pb, i);
    }
    var _$pd;
    if (_$gp == 0) _$pd = null; else _$pd = this._$m0[_$9n]._$hS._$m2[_$gp - 1];
    if (_$9n == _$E._$3s || _$9n == _$E._$3t) {
        this._$5S(_$E._$3u, _$pN, _$pd);
        this._$5S(_$E._$3r, _$pN, _$pd);
    } else {
        this._$5S(_$E._$3s, _$pN, _$pd);
        this._$5S(_$E._$3t, _$pN, _$pd);
    }
}
_$E.prototype._$a = function (_$9n, _$dP, iWH) {
    if (_$9n < 0 || _$9n > 3) return;
    var _$pW = null;
    var _$97 = false;
    var _$nZ = null;
    var _$9b = false;
    if (this._$m1[_$9n] == null) {
        _$pW = new _$5g();
        _$pW._$ba(_$9n);
        _$pW._$k1 = _$9n;
        this._$m1[_$9n] = _$pW;
        _$pW._$rU(this);
        _$9b = true;
    }
    iWH = _$pW._$2A(_$9n);
    if (_$9b) {
        if (_$dP != 0xffffffff) {
            _$97 = true;
            if (_$dP > 0) {
                _$nZ = this._$m0[_$9n]._$hS._$m2[_$dP - 1];
                _$pW._$ly = _$nZ._$ly;
                _$pW._$lP = _$nZ._$lP;
            } else {
                _$pW._$ly = null;
                _$pW._$lP = null;
            }
        } else {
            if (_$9n == _$E._$3s || _$9n == _$E._$3t) {
                _$pW._$ly = this._$2q(_$E._$3u);
                _$pW._$lP = this._$2q(_$E._$3r);
            } else {
                _$pW._$ly = this._$2q(_$E._$3s);
                _$pW._$lP = this._$2q(_$E._$3t);
            }
            _$dP = this._$m0[_$9n]._$hS._$2e();
        }
        _$pW._$lp = null;
        _$pW._$av(this, _$9n);
        this._$m0[_$9n]._$hS._$5(_$pW, _$dP);
        var _$qn;
        var i;
        for (i = _$dP + 1; i < this._$m0[_$9n]._$hS._$2e(); i++) {
            _$qn = this._$m0[_$9n]._$hS._$m2[i];
            this._$6y(_$qn._$lp, i);
        }
    } else {
        _$pW = this._$m1[_$9n];
        _$pW._$av(this, _$9n);
    }
    if (_$97) {
        if (_$9n == _$E._$3r) {
            this._$W(_$E._$3s, _$pW, _$nZ, false);
            this._$W(_$E._$3t, _$pW, _$nZ, false);
        } else if (_$9n == _$E._$3u) {
            this._$W(_$E._$3s, _$pW, _$nZ, true);
            this._$W(_$E._$3t, _$pW, _$nZ, true);
        } else if (_$9n == _$E._$3s) {
            this._$W(_$E._$3u, _$pW, _$nZ, true);
            this._$W(_$E._$3r, _$pW, _$nZ, true);
        } else {
            this._$W(_$E._$3u, _$pW, _$nZ, false);
            this._$W(_$E._$3r, _$pW, _$nZ, false);
        }
    }
    ;this._$4v(_$pW, _$9n, _$dP, false, iWH, iWH, null, true);
    _$pW._$jt = true;
}
_$E.prototype._$5H = function (_$9m) {
    var i;
    for (i = 0; i < 4; i++) {
        if (this._$m1[i] != null) this._$m1[i]._$5H();
    }
}
_$E.prototype._$5U = function () {
    if (_$E._$lJ != null) {
        _$E._$lJ._$aJ();
        _$E._$lJ = null;
    }
}
_$E.prototype._$6F = function (_$nr) {
    if (_$nr._$kW > _$1j._$r) this._$m1[_$nr._$jw]._$5j(_$nr); else {
        this._$m1[_$nr._$kW]._$5j(_$nr);
    }
}
_$E.prototype._$3c = function (_$sh, iID, _$q5) {
}
_$E.prototype._$0h = function (_$oi, _$ow, _$oc) {
    var _$nZ = null;
    var _$p1 = null;
    var _$pz = null;
    if (_$oi._$kN > 0 && _$oi._$kN != 0xffffffff) {
        _$nZ = this._$m0[_$ow[0]]._$hS._$m2[_$oi._$kN - 1];
        _$p1 = _$nZ._$ly;
        _$pz = _$nZ._$lP;
    }
    var _$ps;
    var _$pt;
    var _$f7;
    var _$g1;
    if ((_$ow[0] == _$E._$3u) || (_$ow[0] == _$E._$3r)) {
        _$ps = this._$m1[_$E._$3s];
        _$pt = this._$m1[_$E._$3t];
        _$f7 = _$E._$3s;
        _$g1 = _$E._$3t;
    } else {
        _$ps = this._$m1[_$E._$3u];
        _$pt = this._$m1[_$E._$3r];
        _$f7 = _$E._$3u;
        _$g1 = _$E._$3r;
    }
    var _$f6 = -1;
    var _$g0 = -1;
    if (_$oi._$kN == -1 || _$oi._$kN == 0xffffffff) {
        _$f6 = 0xFFFF;
        _$g0 = 0xFFFF;
    }
    if (_$p1 != null) _$f6 = this._$2N(_$f7, _$p1);
    if (_$pz != null) _$g0 = this._$2N(_$g1, _$pz);
    var _$fO = -2;
    var _$fP = -2;
    if (_$ps != null) _$fO = this._$2N(_$f7, _$ps);
    if (_$pt != null) _$fP = this._$2N(_$g1, _$pt);
    var _$fQ;
    if (this._$m1[_$ow[0]] == null) _$fQ = -2; else _$fQ = this._$2N(_$ow[0], this._$m1[_$ow[0]]);
    var _$fo = _$oi._$kN;
    if (_$fo == 0xFFFFFFFF) _$fo = 0xFFFF;
    if (_$oi._$iW) {
        if (_$f6 >= _$fO && _$g0 >= _$fP) {
            if (_$fo > _$fQ) return;
        }
        if (_$fQ == -2) {
            if ((_$ow[0] == _$E._$3u) || (_$ow[0] == _$E._$3r)) {
                if (_$fO >= 0 && _$f6 < _$fO && _$oc.cx > 20) {
                    _$oi._$l2 += 20;
                    _$oc.cx -= 20;
                }
                if (_$fP >= 0 && _$g0 < _$fP && _$oc.cx > 20) {
                    _$oc.cx -= 20;
                }
            } else {
                if (_$fO >= 0 && _$f6 < _$fO && _$oc.cy > 20) {
                    _$oi._$l7 += 20;
                    _$oc.cy -= 20;
                }
                if (_$fP >= 0 && _$g0 < _$fP && _$oc.cy > 20) {
                    _$oc.cy -= 20;
                }
            }
            return;
        }
    } else {
        if (_$fQ == -2) {
            if (_$f6 >= _$fO && _$g0 >= _$fP) return;
            if (_$f6 == -1 && _$g0 == -1) return;
        } else {
            if (_$fQ >= _$fo || _$fo == 0xFFFF) return;
            if (_$f6 >= _$fO && _$g0 >= _$fP) return;
        }
    }
    _$ow[0] = 0xff;
    _$oi._$jx = 0xff;
    return;
}
_$E._$2T = function (d, _$cO, _$sA, _$7M) {
}
_$E._$6K = function (_$cP, _$ri, _$g2, _$dK, _$d2, _$dL, Cxt) {
    var _$rq = "";
    var dt = new _$16();
    var j;
    if (_$g2 < _$dK) {
        _$g2 = _$g2 - 2 * _$d2 - 3;
        _$g2 -= _$dL;
        if (_$g2 < 0) {
            return "";
        } else {
            var _$8D = true;
            for (j = 0; j < 3; j++) {
                _$rq = _$rq + ".";
                _$mP._$2T(dt, _$cP, _$rq, Cxt);
                if (dt.width > _$g2) {
                    return _$rq;
                }
            }
            if (_$8D) {
                var _$eV = _$ri.length;
                for (j = 0; j < _$eV; j++) {
                    var vc = _$ri.slice(0, j + 1) + _$rq;
                    _$mP._$2T(dt, _$cP, vc, Cxt);
                    if (dt.width > _$g2) {
                        return vc;
                    }
                }
            }
        }
    } else {
        return _$ri;
    }
    return _$ri;
}

function _$N() {
    this._$jK = 0;
    this._$jx = 0;
    this._$jc = false;
    this._$kq = 0;
    this._$kr = 0;
    this._$ln = null;
    this._$ll = null;
    this._$l1 = _$E._$68;
    ;this._$me = new _$4F();
    this._$mf = new _$4F();
    this._$ja = false;
    this._$jG = 0;
    this._$jL = 0;
    this._$i7 = null;
    this._$kN = 0;
    this._$i2 = null;
    this._$hE = null;
    if (DSXDFUtil._$jo) {
        this._$hu = _$mP._$0C("canvas", DSXDFUtil._$hQ);
        this._$hE = this._$hu.getContext("2d");
    } else {
        this._$hu = _$mP._$0C("div", DSXDFUtil._$hQ);
        this._$hu.style.border = "1px solid";
    }
    _$mP._$6z(this._$hu, this._$l1, this._$l1, true);
    this._$hu._$4H = this;
    this._$hu.onmousedown = _$N._$4p;
    this._$hu.onmousemove = _$N._$4o;
    this._$hu._$ni = _$N._$mU;
}

_$N._$4p = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (DSXDFUtil._$jP == 1) e.target._$4H._$n9(e); else e.srcElement._$4H._$n9(e);
    return false;
}
_$N._$4o = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (DSXDFUtil._$jP == 1) e.target._$4H._$n7(e); else e.srcElement._$4H._$n7(e);
}
_$N._$mU = function (e) {
    return false;
}
_$N._$ld = new _$D();
_$N.prototype._$rz = function (_$dn, _$dZ, _$e1, _$dh) {
}
_$N.prototype.setSize = function (_$e1, _$dh) {
    if (this._$hu == null) return;
    _$mP._$6z(this._$hu, _$e1, _$dh, true);
    if (_$e1 == 0 && _$dh == 0) {
        _$mP._$3h(this._$hu, false);
    }
    ;this._$r9();
}
_$N.prototype._$6r = function (_$dm) {
    if (this._$hu != null) {
        _$mP._$6r(this._$hu, _$dm);
    }
}
_$N.prototype._$n9 = function (e) {
    if (DSXDFUtil._$ge(e.button)) {
        _$1g._$i6 = this;
        DSXDFUtil._$6E(true);
        this._$4W(0, 0);
    }
    return false;
}
_$N.prototype._$na = function (e) {
    if (!this._$ja) return;
    DSXDFUtil._$6E(false);
    this._$1D();
    this._$ja = false;
}
_$N.prototype._$mK = function (e) {
    _$n6();
}
_$N.prototype._$n6 = function () {
}
_$N.prototype._$s4 = function (wh) {
    this._$l1 = wh;
    if (wh == 0) {
        _$mP._$3h(this._$hu, false);
    }
}
_$N.prototype._$cJ = function () {
    return this._$l1;
}
_$N.prototype._$08 = function (e, key) {
    var _$hl;
    if (e == null) {
        _$hl = window.event._$hk;
    } else {
        _$hl = e._$tU;
    }
    if (_$hl == key) {
        return true;
    }
    return false;
}
_$N.prototype._$n0 = function (e) {
    if ((_$08(e, 27) || _$08(e, 18)) && _$ja) {
        _$ja = false;
        _$ln._$i2 = null;
        _$T();
    }
}
_$N.prototype._$a1 = function () {
    if (_$ja) {
        _$ja = false;
        _$ln._$i2 = null;
        _$T();
    }
}
_$N.prototype._$n7 = function () {
    if (this._$jx == _$E._$3s || this._$jx == _$E._$3t) this._$hu.style.cursor = "e-resize"; else this._$hu.style.cursor = "n-resize"
}
_$N.prototype._$rH = function (_$oQ) {
    this._$ln = _$oQ;
    _$oQ.Add(this);
}
_$N.prototype._$n5 = function (e) {
    if (!this._$ja) return;
    var pt = new _$5i();
    _$mP._$2L(e, pt);
    this._$4r(pt);
    this._$r9();
}
_$N.prototype._$4W = function (_$tT, _$hm) {
    return this._$ln._$sv(this, _$tT, _$hm);
}
_$N.prototype._$cq = function () {
    var pt = new _$5i();
    pt.x = _$mP._$2r(this._$hu);
    pt.y = _$mP._$2U(this._$hu);
    return pt;
}
_$N.prototype._$cz = function () {
    var d = new _$16();
    d.width = _$mP._$2W(this._$hu, true);
    d.height = _$mP._$2o(this._$hu, true);
    return d;
}
_$N.prototype._$sv = function (_$tT, _$hm) {
    if (this._$ja) return;
    this._$ja = true;
    var _$qf = this._$cq();
    var dd = this._$cz();
    this._$me.left = _$qf.x;
    this._$me.top = _$qf.y;
    this._$me.right = dd.width + _$qf.x;
    this._$me.bottom = _$qf.y + dd.height;
    this._$2b(this._$mf);
    var _$pW;
    var _$pZ = new Array(1);
    var _$9j = new Array(1);
    var _$gD = new Array(1);
    _$pW = this._$2h(_$9j, _$pZ, _$gD);
    if (_$pW != null) {
        _$pW._$5x();
        var _$gv = this._$ln._$2N(this._$jx, _$pW) + 1;
        if (_$pZ[0] == null) {
            if (this._$jx == _$E._$3s) {
                this._$kq = _$pW._$mc.left + 2 * _$E._$68;
                this._$kr = this._$ln._$mg.right - 2 * _$E._$68 - this._$ln._$2R(this._$jx, _$gv, 0xffffffff);
            } else if (this._$jx == _$E._$3t) {
                this._$kq = this._$ln._$mg.left + this._$ln._$2R(this._$jx, _$gv, 0xffffffff) + _$E._$68;
                this._$kr = _$pW._$mc.right - 2 * _$E._$68;
            } else if (this._$jx == _$E._$3u) {
                this._$kq = _$pW._$mc.top + 2 * _$E._$68;
                this._$kr = this._$ln._$mg.bottom - 2 * _$E._$68 - this._$ln._$2R(this._$jx, _$gv, 0xffffffff);
            } else {
                this._$kq = this._$ln._$mg.top + this._$ln._$2R(this._$jx, _$gv, 0xffffffff) + _$E._$68;
                this._$kr = _$pW._$mc.bottom - 2 * _$E._$68;
            }
        } else {
            var iw, ih;
            iw = _$pZ[0]._$mc.right - _$pZ[0]._$mc.left;
            ih = _$pZ[0]._$mc.bottom - _$pZ[0]._$mc.top;
            if (this._$jx == _$E._$3s) {
                this._$kq = _$pW._$mc.left + 2 * _$E._$68;
                this._$kr = _$pW._$mc.right + iw - 2 * _$E._$68;
            } else if (this._$jx == _$E._$3t) {
                this._$kq = _$pW._$mc.left - iw + _$E._$68;
                this._$kr = _$pW._$mc.right - 2 * _$E._$68;
            } else if (this._$jx == _$E._$3u) {
                this._$kq = _$pW._$mc.top + 2 * _$E._$68;
                this._$kr = _$pW._$mc.bottom + ih - 2 * _$E._$68;
            } else {
                this._$kq = _$pW._$mc.top - ih + _$E._$68;
                this._$kr = _$pW._$mc.bottom - 2 * _$E._$68;
            }
        }
    } else if (this._$jc) {
        var pd1 = new Array(1);
        var pd2 = new Array(1);
        var rc1 = new _$4F();
        var rc2 = new _$4F();
        this._$ll._$1P(pd1, pd2, rc1, rc2);
        this._$kq = 0;
        this._$kr = 32666;
        if ((this._$jx == _$E._$3s) || (this._$jx == _$E._$3t)) {
            this._$kq = rc1.left + _$E._$68 * 2;
            this._$kr = rc2.right - _$E._$68 * 2;
        } else {
            this._$kq = rc1.top + _$E._$68 * 2;
            this._$kr = rc2.bottom - _$E._$68 * 2;
        }
    }
    ;this._$3J();
    return 0;
}
_$N.prototype._$4r = function (pt) {
    if (this._$jx == _$E._$3s || this._$jx == _$E._$3t) {
    } else {
    }
    var iw = _$E._$2I(this._$me);
    var ih = _$E._$2H(this._$me);
    if (this._$jx == _$E._$3s || this._$jx == _$E._$3t) {
        this._$me.left = pt.x;
        if (this._$kq > pt.x) this._$me.left = this._$kq;
        if (this._$kr < pt.x) this._$me.left = this._$kr;
    } else {
        this._$me.top = pt.y;
        if (this._$kq > pt.y) this._$me.top = this._$kq;
        if (this._$kr < pt.y) this._$me.top = this._$kr;
    }
    ;this._$me.right = iw + this._$me.left;
    this._$me.bottom = ih + this._$me.top;
    this._$1u(false);
}
_$N.prototype._$1D = function () {
    this._$T();
    this._$1V();
}
_$N.prototype._$aE = function () {
    this._$ln._$5L(this);
    if (this._$hu != null) {
        _$mP._$5P(DSXDFUtil._$hQ, this._$hu);
    }
    ;this._$hu = null;
}
_$N.prototype._$1V = function () {
    this._$ln._$sx(this);
}
_$N.prototype._$sx = function () {
    var _$eq = this._$ln._$m0[this._$jx]._$hS._$2e();
    var _$pW;
    var _$pZ = new Array(1);
    var _$9j = new Array(1);
    var _$gD = new Array(1);
    _$pW = this._$2h(_$9j, _$pZ, _$gD);
    var _$qO = this._$mf;
    var _$e3 = this._$me.left - _$qO.left;
    if (this._$jx == _$E._$3s || this._$jx == _$E._$3t) {
        _$e3 = this._$me.left - _$qO.left;
    } else {
        _$e3 = this._$me.top - _$qO.top;
    }
    ;this._$4z(_$e3);
    var _$eX, _$f0;
    var _$eY, _$f1, _$eZ, _$f2;
    _$eY = _$eZ = _$f1 = _$f2 = 0;
    var _$9K;
    if (this._$jx == _$E._$3s || this._$jx == _$E._$3t) {
        _$9K = _$E._$3u;
        _$eX = _$qO.top;
        _$f0 = _$qO.bottom;
        if (_$pZ[0] != null) {
            _$eY = _$qO.top;
            _$f1 = _$pZ[0]._$mc.top;
            _$eZ = _$pZ[0]._$mc.bottom;
            _$f2 = _$qO.bottom;
        }
    } else {
        _$9K = _$E._$3s;
        _$eX = _$qO.left;
        _$f0 = _$qO.right;
        if (_$pZ[0] != null) {
            _$eY = _$qO.left;
            _$f1 = _$pZ[0]._$mc.left;
            _$eZ = _$pZ[0]._$mc.right;
            _$f2 = _$qO.right;
        }
    }
    if (!this._$jc) {
        var _$qA = new _$4F();
        _$pW._$lp._$28(_$qA);
        if (this._$jx == _$E._$3s) _$qA.right += _$e3; else if (this._$jx == _$E._$3t) _$qA.left += _$e3; else if (this._$jx == _$E._$3u) _$qA.bottom += _$e3; else _$qA.top += _$e3;
        if (_$9j[0]) {
            this._$ln._$6H(_$pW._$lp, _$qA, this._$jx);
            _$pW._$5x();
            this._$ln._$6J(_$9K, _$eX, _$f0);
            this._$ln._$6J((_$9K + 2), _$eX, _$f0);
            this._$ln._$i();
        } else {
            var _$tj = false;
            if (!_$tj) {
                this._$ln._$6H(_$pW._$lp, _$qA, this._$jx);
                if (_$pZ[0] != null) {
                    _$pZ[0]._$lp._$28(_$qA);
                    if (this._$jx == _$E._$3s) _$qA.left += _$e3; else if (this._$jx == _$E._$3t) _$qA.right += _$e3; else if (this._$jx == _$E._$3u) _$qA.top += _$e3; else _$qA.bottom += _$e3;
                    this._$ln._$6H(_$pZ[0]._$lp, _$qA, this._$jx);
                    _$pW._$5x();
                    _$pZ[0]._$5x();
                    if (this._$jx == _$E._$3t || this._$jx == _$E._$3r) _$e3 = -_$e3;
                    this._$ln._$4x(this._$jx, this._$kN + 1, _$gD[0] - 1, _$e3);
                } else {
                    _$pW._$5x();
                    if (this._$jx == _$E._$3t || this._$jx == _$E._$3r) _$e3 = -_$e3;
                    this._$ln._$4w(this._$jx, this._$kN + 1, _$e3);
                }
                ;this._$ln._$6J(_$9K, _$eX, _$f0);
                this._$ln._$6J((_$9K + 2), _$eX, _$f0);
                this._$ln._$i();
            } else {
                this._$ln._$6H(_$pW._$lp, _$qA, this._$jx);
                _$pW._$5x();
                if (this._$jx == _$E._$3t || this._$jx == _$E._$3r) _$e3 = -_$e3;
                this._$ln._$4w(this._$jx, this._$kN + 1, _$e3);
                this._$ln._$6J(_$9K, _$eX, _$f0);
                this._$ln._$6J((_$9K + 2), _$eX, _$f0);
                this._$ln._$i();
            }
        }
    } else {
        var pd1 = new Array(1);
        var pd2 = new Array(1);
        var rc1 = new _$4F();
        var rc2 = new _$4F();
        this._$ll._$1P(pd1, pd2, rc1, rc2);
        if ((this._$jx == _$E._$3u) || (this._$jx == _$E._$3r)) {
            rc1.bottom += _$e3;
            this._$ln._$6H(pd1[0], rc1, _$E._$6Z);
            rc2.top += _$e3;
            this._$ln._$6H(pd2[0], rc2, _$E._$6Z);
            if (rc2.top == rc2.bottom) this._$ll._$bJ = 999.0; else this._$ll._$bJ = 1.0 * (_$E._$2H(rc1)) / (_$E._$2H(rc2));
        } else {
            rc1.right += _$e3;
            rc2.left += _$e3;
            this._$ln._$6H(pd1[0], rc1, _$E._$42);
            this._$ln._$6H(pd2[0], rc2, _$E._$42);
            if (rc2.left == rc2.right) this._$ll._$bJ = 999.0; else this._$ll._$bJ = 1.0 * (_$E._$2I(rc1)) / (_$E._$2I(rc2));
        }
    }
}
_$N.prototype._$4z = function (_$dw) {
    var ix, iy;
    var _$h5, _$eK;
    var _$qW = new _$4F();
    if (!this._$ja) this._$2b(_$qW); else _$qW = this._$mf;
    _$h5 = _$E._$2I(_$qW);
    _$eK = _$E._$2H(_$qW);
    ix = _$qW.left;
    iy = _$qW.top;
    if (this._$jx == _$E._$3s || this._$jx == _$E._$3t) {
        ix += _$dw;
    } else {
        iy += _$dw;
    }
    _$mP._$6s(this._$hu, ix, iy);
    _$mP._$6z(this._$hu, _$h5, _$eK, true);
    this._$r9();
}
_$N.prototype._$6C = function (rc) {
    if (this._$hu != null) {
        _$mP._$6s(this._$hu, rc.left, rc.top);
        _$mP._$6z(this._$hu, rc.right - rc.left, rc.bottom - rc.top, true);
        this._$r9();
    }
}
_$N.prototype._$2b = function (rc) {
    if (this._$hu != null) {
        rc.left = _$mP._$2r(this._$hu);
        rc.top = _$mP._$2U(this._$hu);
        rc.right = rc.left + _$mP._$2W(this._$hu, true);
        rc.bottom = rc.top + _$mP._$2o(this._$hu, true);
    }
}
_$N.prototype._$2h = function (_$8o, _$of, _$dT) {
    var _$eq = this._$ln._$m0[this._$jx]._$hS._$2e();
    var _$pW;
    _$of[0] = null;
    _$8o[0] = true;
    var _$fq;
    var i;
    for (i = _$eq - 1; i >= 0; i--) {
        _$pW = this._$ln._$m0[this._$jx]._$hS._$m2[i];
        if (_$pW._$jt) {
            if (_$pW._$lV == this) {
                this._$kN = i;
                return _$pW;
            } else {
                _$8o[0] = false;
                var _$tj = false;
                if (_$tj) {
                    _$of[0] = _$pW;
                    _$fq = i;
                    _$dT[0] = i;
                } else {
                    if (_$pW._$kM != 1) {
                        _$of[0] = _$pW;
                        _$fq = i;
                        _$dT[0] = i;
                    }
                }
            }
        }
    }
    return null;
}
_$N.prototype._$T = function () {
    this._$1u(true);
}
_$N.prototype._$1u = function (_$8l) {
    var vrc = this._$me;
    _$mP._$6s(this._$hu, vrc.left, vrc.top);
    _$mP._$6z(this._$hu, vrc.right - vrc.left, vrc.bottom - vrc.top, true);
    return;
}
_$N.prototype._$3J = function () {
}
_$N.prototype._$r9 = function () {
    var _$eT, _$gX, iw, ih;
    _$eT = _$mP._$2r(this._$hu);
    _$gX = _$mP._$2U(this._$hu);
    iw = _$mP._$2W(this._$hu, true);
    ih = _$mP._$2o(this._$hu, true);
    if (this._$hE == null) return;
    if ((this._$jx == _$E._$3s) || (this._$jx == _$E._$3t)) {
        this._$hE.strokeStyle = 'black';
        _$mP._$1v(0, 0, 0, ih, this._$hE);
        this._$hE.strokeStyle = 'black';
        _$mP._$1v(iw - 2, 0, iw - 2, ih, this._$hE);
        this._$hE.strokeStyle = 'black';
        _$mP._$1v(iw - 1, 0, iw - 1, ih, this._$hE);
        this._$hE.fillStyle = 'ButtonFace';
        if (DSXDFUtil._$jP == 4) {
            this._$hE.fillStyle = 'white';
        }
        ;this._$hE.fillRect(1, 0, iw - 3, ih);
    } else {
        this._$hE.strokeStyle = 'black';
        _$mP._$1v(0, 0, iw, 0, this._$hE);
        this._$hE.strokeStyle = 'black';
        _$mP._$1v(0, ih - 2, iw, ih - 2, this._$hE);
        this._$hE.strokeStyle = 'black';
        _$mP._$1v(0, ih - 1, iw, ih - 1, this._$hE);
        this._$hE.fillStyle = 'ButtonFace';
        if (DSXDFUtil._$jP == 4) {
            this._$hE.fillStyle = 'white';
        }
        ;this._$hE.fillRect(0, 1, iw, ih - 3);
    }
}

function _$0Q() {
    this._$lV = null;
    this._$lp = null;
    this._$ly;
    this._$lP;
    this._$jt;
    this._$mc = new _$4F();
    this._$l1 = _$0Q._$la;
    this._$kM = 0;
}

_$0Q._$la = _$E._$68;
_$0Q._$j6 = false;
_$0Q._$6p = function (iWH) {
    if (_$j6) return;
    if (iWH < 0) iWH = 0;
    _$0Q._$la = iWH;
}
_$0Q.prototype._$cJ = function () {
    return this._$l1;
}
_$0Q.prototype._$3M = function (_$pD, _$q6, _$dN) {
    var _$9N = _$E._$n(_$pD, _$q6, false);
    _$dN[0] = 0;
    if (_$9N != 0xff) {
        if (this._$lV._$jx == _$E._$3u) {
            if (_$9N == _$E._$3p) _$dN[0] = 1; else if (_$9N == _$E._$3j) _$dN[0] = 2;
        } else if (this._$lV._$jx == _$E._$3r) {
            if (_$9N == _$E._$3p) _$dN[0] = 2; else if (_$9N == _$E._$3j) _$dN[0] = 1;
        } else if (this._$lV._$jx == _$E._$3s) {
            if (_$9N == _$E._$3l) _$dN[0] = 1;
            if (_$9N == _$E._$3n) _$dN[0] = 2;
        } else if (this._$lV._$jx == _$E._$3t) {
            if (_$9N == _$E._$3l) _$dN[0] = 2;
            if (_$9N == _$E._$3n) _$dN[0] = 1;
        }
        if (_$dN[0] == 0) {
            return 0xff;
        }
        _$9N = (2 * this._$lV._$jx + 1);
    }
    return _$9N;
}
_$0Q.prototype._$av = function (_$aM, _$9n) {
    this._$lV = new _$N();
    this._$lV._$jx = _$9n;
    this._$lV._$rH(_$aM);
    this._$lV._$s4(this._$l1);
}
_$0Q.prototype._$r8 = function () {
    if (this._$lV != null) {
        if (this._$lV._$ln != null) {
            this._$lV._$ln._$5L(this._$lV);
        }
        ;this._$lV._$aE();
        this._$lV = null;
    }
    ;this._$jt = false;
}
_$0Q.prototype._$06 = function () {
    return this._$lp._$06();
}
_$0Q.prototype._$qZ = function (wnd, rc) {
    wnd._$6C(rc);
}
_$0Q.prototype._$2J = function (_$nr, pRC) {
    if (_$nr._$lh._$8L) {
        pRC.left = 0;
        pRC.top = 0;
        pRC.right = 0;
        pRC.bottom = 0;
        return;
    }
    _$nr._$2b(pRC);
}
_$0Q.prototype._$6G = function (_$aM, _$qD, _$9n, _$do, _$dp, _$d4) {
    if (this._$jt) {
        var ilt, irb;
        var _$el;
        var _$h5, _$eK;
        var _$qV = new _$4F();
        var _$9D = 0;
        _$h5 = _$E._$2I(this._$mc);
        _$eK = _$E._$2H(this._$mc);
        if ((_$9n == _$E._$3u) || (_$9n == _$E._$3r)) {
            _$el = (this._$mc.top + this._$mc.bottom) / 2;
            ilt = _$aM._$2Q(_$E._$3s, this._$ly);
            irb = _$aM._$2Q(_$E._$3t, this._$lP);
            this._$mc.left = _$qD.left + ilt;
            this._$mc.right = _$qD.right - irb;
        } else {
            _$el = (this._$mc.left + this._$mc.right) / 2;
            ilt = _$aM._$2Q(_$E._$3u, this._$ly);
            irb = _$aM._$2Q(_$E._$3r, this._$lP);
            this._$mc.top = _$qD.top + ilt;
            this._$mc.bottom = _$qD.bottom - irb;
        }
        if ((_$el >= _$do) && (_$el <= _$dp)) {
            this._$lV._$2b(_$qV);
            if ((_$9n == _$E._$3u) || (_$9n == _$E._$3r)) {
                _$qV.left = this._$mc.left;
                _$qV.right = this._$mc.right;
                _$9D = _$E._$3s;
            } else if ((_$9n == _$E._$3s) || (_$9n == _$E._$3t)) {
                _$qV.top = this._$mc.top;
                _$qV.bottom = this._$mc.bottom;
                _$9D = _$E._$3u;
            }
            ;this._$6H(_$aM, _$9D, _$d4);
            if (_$9n == _$E._$3u || _$9n == _$E._$3r) {
                _$qV.left = this._$mc.left;
                _$qV.right = _$qV.left + this._$mc.right - this._$mc.left;
            } else {
                _$qV.top = this._$mc.top;
                _$qV.bottom = _$qV.top + this._$mc.bottom - this._$mc.top;
            }
            ;this._$lV._$6C(_$qV);
        }
    }
}
_$0Q.prototype._$5x = function () {
    var pd1 = new Array(1);
    var pd2 = new Array(1);
    var rc1 = new _$4F();
    var rc2 = new _$4F();
    this._$lp._$1P(pd1, pd2, rc1, rc2);
    if (pd1[0] == null && pd2[0] == null) {
        this._$lp._$oP._$2b(this._$mc);
    } else if (pd1[0] == null) {
        this._$mc._$0u(rc2);
    } else if (pd2[0] == null) {
        this._$mc._$0u(rc1);
    } else {
        if (rc1.left != -6000 && rc2.left != -6000) {
            this._$mc._$0u(rc1);
            if (this._$lp._$9M == _$E._$3u || this._$lp._$9M == _$E._$3r) {
                this._$mc.bottom = rc2.bottom;
            } else {
                this._$mc.right = rc2.right;
            }
        } else if (rc1.left == -6000 && rc2.left != -6000) {
            this._$mc._$0u(rc2);
        } else if (rc1.left != -6000 && rc2.left == -6000) {
            this._$mc._$0u(rc1);
        } else {
            this._$mc.left = this._$mc.right = this._$mc.top = this._$mc.bottom = 0;
        }
    }
}
_$0Q.prototype._$04 = function (_$nL, _$nA, _$q6, _$oc, _$dU, _$pk, _$dN) {
    _$dN[0] = 0;
    if (_$nA._$iW) {
        return this._$lp._$04(_$nA, _$q6, _$oc, _$dU, _$pk);
    } else {
        var _$qW = new _$4F();
        _$qW._$0u(_$mc);
        _$nL._$5y(_$nL._$hC, _$qW);
        var _$9N = _$3M(_$qW, _$q6, _$dN);
        _$nA._$l2 = _$mc.right - _$mc.left;
        _$nA._$l7 = _$mc.bottom - _$mc.top;
        return _$9N;
    }
}
_$0Q.prototype._$5b = function (_$nv) {
    var _$pp = _$nv._$pp;
    if (_$pp == null) {
        return true;
    }
    if (_$nv == _$pp._$oN) {
        _$pp._$oN = null;
        if (_$pp._$pV == null) return this._$5b(_$pp); else if (_$pp._$pp != null) {
            _$pp._$pV._$pp = _$pp._$pp;
            _$pp._$pV._$9x = _$pp._$9x;
            if (_$pp._$pp._$oN == _$pp) _$pp._$pp._$oN = _$pp._$pV; else _$pp._$pp._$pV = _$pp._$pV;
        }
    } else {
        _$pp._$pV = null;
        if (_$pp._$oN == null) return this._$5b(_$pp); else if (_$pp._$pp != null) {
            _$pp._$oN._$pp = _$pp._$pp;
            _$pp._$oN._$9x = _$pp._$9x;
            if (_$pp._$pp._$oN == _$pp) _$pp._$pp._$oN = _$pp._$oN; else _$pp._$pp._$pV = _$pp._$oN;
        }
    }
    return false;
}
_$0Q.prototype._$5R = function (_$nr) {
    return _$nr._$lh._$5R(_$nr);
}
_$0Q.prototype._$g = function (_$nL, _$nv, prc) {
    var _$qU = new _$4F();
    var _$qW = new _$4F();
    _$qW._$0u(prc);
    var _$99 = false;
    var _$pp = _$nv._$pp;
    var pme = _$nv;
    var _$pY;
    while (true) {
        if (_$pp != null) {
            _$pY = null;
            if (_$pp._$oN != null && _$pp._$oN != pme) _$pY = _$pp._$oN; else if (_$pp._$pV != null && _$pp._$pV != pme) _$pY = _$pp._$pV;
            if (_$pY != null && !_$pY._$8L) {
                if (_$pp._$p6 != null) {
                    _$pp._$p6._$aE();
                    _$pp._$p6 = null;
                }
                var _$gz;
                _$pY._$28(_$qU);
                if (_$pp._$9M == _$E._$3u || _$pp._$9M == _$E._$3r) {
                    _$gz = _$E._$2H(_$qW) + _$0Q._$la;
                    if (pme._$9x == _$E._$3r) {
                        _$qU.bottom += _$gz;
                    } else _$qU.top -= _$gz;
                    _$nL._$6H(pme._$pp, _$qU, _$E._$6Z);
                } else {
                    _$gz = _$E._$2I(_$qW) + _$0Q._$la;
                    if (pme._$9x == _$E._$3t) _$qU.right += _$gz; else _$qU.left -= _$gz;
                    _$nL._$6H(pme._$pp, _$qU, _$E._$42);
                }
                break;
            }
            _$pp._$8L = true;
            pme = _$pp;
            _$pp = _$pp._$pp;
        } else {
            _$99 = true;
            break;
        }
    }
    return _$99;
}
_$0Q.prototype._$7 = function (_$nL, _$nv) {
    var pme = _$nv;
    var _$pp = pme._$pp;
    if (_$pp == null) return;
    var _$9x;
    if (pme._$9x == _$E._$3u) _$9x = _$E._$3r; else if (pme._$9x == _$E._$3r) _$9x = _$E._$3u; else if (pme._$9x == _$E._$3s) _$9x = _$E._$3t; else _$9x = _$E._$3s;
    if (_$pp._$oN != null && _$pp._$oN != pme) _$pp._$oN._$9x = _$9x; else if (_$pp._$pV != null && _$pp._$pV != pme) _$pp._$pV._$9x = _$9x;
    var _$pY;
    while (_$pp != null) {
        _$pY = null;
        if (_$pp._$oN != null && _$pp._$oN != pme) _$pY = _$pp._$oN; else if (_$pp._$pV != null && _$pp._$pV != pme) _$pY = _$pp._$pV;
        if (_$pY != null && !_$pY._$8L) {
            var _$9C;
            if (_$pp._$9M == _$E._$3u || _$pp._$9M == _$E._$3r) {
                _$9C = _$E._$3u;
            } else {
                _$9C = _$E._$3s;
            }
            var rc = new _$4F();
            _$pY._$28(rc);
            _$pp._$p6 = new _$N();
            _$pp._$p6._$s4(_$0Q._$la);
            _$pp._$p6._$rH(_$nL);
            _$pp._$p6._$jc = true;
            _$pp._$p6._$jx = _$9C;
            _$pp._$p6._$ll = _$pp;
            _$nL._$6H(_$pY._$pp, rc, 0);
            _$nL._$6H(_$pY._$pp, rc, 1);
            break;
        }
        pme = _$pp;
        _$pp = _$pp._$pp;
        if (_$pp == null) return;
    }
}
_$0Q.prototype._$8 = function (_$nL, _$nI) {
    var pme = _$nI._$lh;
    this._$7(_$nL, pme);
}
_$0Q.prototype._$4r = function (_$nL, _$9n, _$dP, _$dw) {
    if (this._$jt) {
        this._$4s(_$nL, _$dw, _$9n);
        if (_$9n == _$E._$3t) {
            this._$mc.left -= _$dw;
            this._$mc.right -= _$dw;
        } else if (_$9n == _$E._$3s) {
            this._$mc.left += _$dw;
            this._$mc.right += _$dw;
        } else if (_$9n == _$E._$3r) {
            this._$mc.top -= _$dw;
            this._$mc.bottom -= _$dw;
        } else {
            this._$mc.top += _$dw;
            this._$mc.bottom += _$dw;
        }
        var _$gU = _$dw;
        if (_$9n == _$E._$3t || _$9n == _$E._$3r) _$gU = -_$dw;
        this._$lV._$4z(_$gU);
    }
}
_$0Q.prototype._$6H = function (_$aM, _$9q, _$d4) {
    _$d4[0] = 0;
    _$aM._$6H(this._$lp, this._$mc, _$9q);
}
_$0Q.prototype._$4s = function (_$nL, _$dw, _$9n) {
    _$nL._$4s(this._$lp, _$dw, _$9n);
}
_$0Q.prototype._$0g = function (_$nv) {
    if (_$nv == null) return false;
    if (_$nv._$oP != null) return true;
    if (_$nv._$oN == null && _$nv._$pV == null && _$nv._$lI != null) {
        var _$eq = _$nv._$lI.length;
        if (_$eq > 0) {
            var i;
            for (i = 0; i < _$eq; i++) {
                var p = _$nv._$lI[i];
                var sz;
                if (p._$ro != null) sz = p._$ro; else sz = p._$nr._$mm;
                if (sz.length > 0) return true;
                return false;
            }
        } else return false;
    }
    var b = false;
    if (_$nv._$oN != null) b = this._$0g(_$nv._$oN);
    if (b) return b;
    if (_$nv._$pV != null) b = this._$0g(_$nv._$pV);
    return b;
}
_$0Q.prototype._$6h = function (_$nL, _$o1, _$dQ, _$f5, _$fZ) {
    if (!this._$0g(this._$lp)) {
        return _$dQ;
    }
    var _$sF = "";
    _$sF = "SEC" + _$dQ;
    _$o1._$tX(_$sF);
    _$o1._$tX(this._$mc.right - this._$mc.left);
    _$o1._$tX(this._$mc.bottom - this._$mc.top);
    var _$b5 = -1;
    if (this._$ly != null) {
        _$b5 = _$nL._$2N(_$f5, this._$ly);
        if (_$nL._$m1[_$f5] != null) {
            var _$fN = _$nL._$2N(_$f5, _$nL._$m1[_$f5]);
            if (_$b5 > _$fN) _$b5--;
        }
    }
    _$o1._$tX(_$b5);
    _$b5 = -1;
    if (this._$lP != null) {
        _$b5 = _$nL._$2N(_$fZ, this._$lP);
        if (_$nL._$m1[_$fZ] != null) {
            var _$fN = _$nL._$2N(_$f5, _$nL._$m1[_$fZ]);
            if (_$b5 > _$fN) _$b5--;
        }
    }
    _$o1._$tX(_$b5);
    this._$6f(_$o1);
    var _$ov = this._$lp;
    _$o1._$tX("ROOTBLOCK");
    this._$6d(_$nL, _$o1, _$ov);
    _$dQ++;
    return _$dQ;
}
_$0Q.prototype._$6c = function (_$nL, _$o1, _$nv, _$b3) {
    {
        var _$7Q = null;
        if (_$nv._$lI != null && _$nv._$lI.length >= 1) {
            var _$gF = _$nv._$lI.length;
            _$7Q = new Array(_$gF);
            var i;
            for (i = 0; i < _$gF; i++) _$7Q[i] = _$nv._$lI[i];
        } else {
            _$7Q = new Array(1);
            _$7Q[0] = new _$5f();
            _$7Q[0]._$nr = _$nv._$oP;
        }
        _$o1._$tX(_$7Q.length);
        var i;
        for (i = 0; i < _$7Q.length; i++) {
            var sti;
            var _$b6 = 0xFFF00000;
            if (_$7Q[i]._$ro != null) {
                sti = _$7Q[i]._$ro;
                _$b6 = _$7Q[i]._$b3;
            } else {
                if (_$7Q[i]._$nr != null) {
                    sti = _$7Q[i]._$nr._$2V();
                    var bvi = _$7Q[i]._$nr._$gh();
                    if (bvi) _$b6 |= _$1j._$1I;
                    if (_$7Q[i]._$nr._$li == _$nL) {
                        _$b6 |= _$1j._$1F;
                    }
                    if (_$7Q[i]._$nr._$kD == _$1j._$78) _$b6 |= _$1j._$1H;
                    if (_$7Q[i]._$nr._$kD != _$1j._$4L) _$b6 |= _$1j._$32;
                    if (_$7Q[i]._$nr._$iY) _$b6 |= _$1j._$31;
                    _$b6 |= ((_$7Q[i]._$nr._$kP & 0xF) << 12);
                    _$b6 |= ((_$7Q[i]._$nr._$kW & 0x7) << 7);
                    if (_$7Q[i]._$nr._$iF) _$b6 |= _$1j._$B;
                    _$b6 |= ((_$7Q[i]._$nr._$jT & 0x07) << 17);
                } else {
                    sti = _$nv._$sH;
                    _$b6 |= (_$1j._$1I | _$1j._$1F);
                }
            }
            var _$92 = false;
            if (_$nv._$oG != null) {
                var k;
                for (k = 0; k < _$nv._$oG._$iv.length; k++) {
                    var _$q8 = _$nv._$oG._$iv[k];
                    if (_$q8._$nr == _$7Q[i]._$nr) {
                        _$92 = true;
                        break;
                    }
                }
            }
            if (_$92) _$b6 |= _$1j._$1G; else _$b6 &= ~_$1j._$1G;
            _$o1._$tX(sti);
            _$o1._$tX(_$b6);
            var _$7K = 0x3FF;
            if (_$7Q[i]._$nr != null) {
                _$7K = _$7Q[i]._$nr._$jN;
            }
            _$o1._$tX(_$7K);
            if (_$nL._$iK) {
                if (_$7Q[i]._$nr != null) {
                    _$o1._$tX(_$7Q[i]._$nr._$ma.x);
                    _$o1._$tX(_$7Q[i]._$nr._$ma.y);
                    _$o1._$tX(_$7Q[i]._$nr._$mr.cx);
                    _$o1._$tX(_$7Q[i]._$nr._$mr.cy);
                } else {
                    if (_$7Q[i]._$q4 == null) _$7Q[i]._$q4 = new _$5i(100, 200);
                    _$o1._$tX(_$7Q[i]._$q4.x);
                    _$o1._$tX(_$7Q[i]._$q4.y);
                    _$o1._$tX(_$7Q[i]._$sa);
                    _$o1._$tX(_$7Q[i]._$sb);
                }
            }
        }
    }
}
_$0Q.prototype._$6d = function (_$nL, _$o1, _$nv) {
    _$o1._$tX(_$nv._$bJ * 1000);
    var _$b6 = new Array(1);
    _$b6[0] = _$nv._$9x;
    _$b6[0] <<= 8;
    _$b6[0] |= _$nv._$9M;
    _$b6[0] <<= 8;
    if (_$nv._$oN != null || _$nv._$pV != null) {
        if (_$nv._$oN != null) {
            _$o1._$tX("LEFTBLOCK");
            this._$6d(_$nL, _$o1, _$nv._$oN);
        } else {
            _$o1._$tX("LEFTNONE");
        }
        if (_$nv._$pV != null) {
            _$o1._$tX("RIGHTBLOCK");
            this._$6d(_$nL, _$o1, _$nv._$pV);
        } else _$o1._$tX("RIGHTNONE");
    } else {
        _$o1._$tX("LEFTNONE");
        _$o1._$tX("RIGHTNONE");
        this._$6c(_$nL, _$o1, _$nv, _$b6);
    }
    _$o1._$tX(_$b6[0]);
}
_$0Q.prototype._$6f = function (_$o1) {
    _$o1._$tX(0);
}

function _$73() {
    _$73.baseConstructor.call(this);
    this._$kM = 1;
    this._$l1 = 0;
    this.m_B = [0, 0, 0, 0];
    this._$hu = null;
    this._$j1 = false;
    this._$jZ = 1;
    this._$kR = null;
    this._$hD = null;
    if (DSXDFUtil._$jo && !_$11._$iC) {
        this._$hu = _$mP._$0C("canvas", DSXDFUtil._$hQ);
        this._$hE = this._$hu.getContext("2d");
    } else {
        this._$hu = _$mP._$0C("div", DSXDFUtil._$hQ);
    }
    ;this._$3Q();
    this._$hW = "8pt sans-serif";
    this._$iw = 'menuText';
    if (DSXDFUtil._$jP == 4) {
        this._$iw = 'black';
    }
}

_$bh._$bg(_$73, _$0Q);
_$73.prototype._$cj = function () {
    return this._$hW;
}
_$73.prototype._$ol = function (g) {
    _$0Q.prototype._$ol.call(this, g);
    var rc = _$c2();
    _$om(g, rc);
    _$51(g);
}
_$73.prototype._$2b = function (rc) {
    if (this._$hu != null) {
        rc.left = _$mP._$2r(this._$hu);
        rc.top = _$mP._$2U(this._$hu);
        rc.right = rc.left + _$mP._$2W(this._$hu, !_$11._$iC);
        rc.bottom = rc.top + _$mP._$2o(this._$hu, !_$11._$iC);
    }
}
_$73.prototype._$r9 = function () {
    this._$51();
}
_$73.prototype._$om = function (g, rc) {
}
_$73.prototype._$3Q = function () {
    this._$hu._$4J = this;
    this._$hu.onmousedown = _$73._$4p;
    this._$hu.onmousemove = _$73._$4o;
    this._$hu.onmouseup = _$73._$4q;
    this._$hu._$ni = _$73._$mU;
}
_$73._$4p = function (e) {
    if (e == null || e == undefined) {
        e = window.event;
    }
    if (DSXDFUtil._$jP == 1) e.target._$4J._$n9(e); else e.srcElement._$4J._$n9(e);
    return false;
}
_$73._$4o = function (e) {
    if (e == null || e == undefined) {
        e = window.event;
    }
    if (DSXDFUtil._$jP == 1) e.target._$4J._$n7(e); else {
        e.srcElement._$4J._$n7(e);
    }
}
_$73._$4q = function (e) {
    if (e == null || e == undefined) {
        e = window.event;
    }
    if (DSXDFUtil._$jP == 1) e.target._$4J._$na(e); else {
        e.srcElement._$4J._$na(e);
    }
}
_$73._$mU = function (e) {
    return false;
}
_$73._$18 = function (e) {
    return false;
}
_$73._$17 = function (e) {
    return false;
}
_$73.prototype._$5R = function (_$nr) {
    return false;
}
_$73.prototype._$5x = function () {
    this._$2b(this._$mc);
}
_$73.prototype._$62 = function () {
}
_$73.prototype._$2f = function () {
    return null;
}
_$73.prototype._$w = function (_$nr, _$q6) {
    var rc = new _$4F();
    var _$8A = false;
    _$nr._$2b(rc);
    if (this._$lV._$jx == _$E._$3s || this._$lV._$jx == _$E._$3t) {
        {
            if (_$q6.y < rc.top) _$8A = true; else _$8A = false;
        }
    } else {
        {
            if (_$q6.x < rc.left) _$8A = true; else _$8A = false;
        }
    }
    return _$8A;
}
_$73.prototype._$2i = function (_$q6, _$ob) {
    var _$qi = _$lp;
    var _$8K = null;
    var pf;
    while (true) {
        if (_$qi._$oN == null && _$qi._$pV == null) {
            if (_$qi._$oP != null && !_$qi._$8L) {
                _$ob[0] = _$qi._$oP._$jY;
                if (_$w(_$qi._$oP, _$q6)) {
                    _$8K = _$qi;
                }
            }
            break;
        } else {
            if (_$qi._$oN != null) {
                pf = _$qi._$oN;
                if (pf._$oP != null && !pf._$8L) {
                    _$ob[0] = pf._$oP._$jY;
                    if (_$w(pf._$oP, _$q6)) {
                        _$8K = pf;
                        break;
                    }
                }
            }
            if (_$qi._$pV != null) {
                _$qi = _$qi._$pV;
            } else {
                break;
            }
        }
    }
    return _$8K;
}
_$73.prototype._$1N = function (_$nr) {
    if (_$nr._$iU) return false;
    return false;
}
_$73.prototype._$3d = function () {
    if (this._$lp._$oN != null) return false;
    return true;
}
_$73.prototype._$04 = function (_$nL, _$nA, _$q6, _$oc, _$dU, _$pk, _$dN) {
    var _$nJ = _$nA._$le;
    var _$8S = _$1N(_$nJ);
    _$dN[0] = 0;
    _$pk[0] = null;
    var _$qW = new _$4F();
    _$E._$2X(_$jK, _$qW);
    if (!_$nJ._$S()) {
        var _$8Z = false;
        var ih = _$qW.bottom - _$qW.top;
        var iw = _$qW.right - _$qW.left;
        if (this._$lV._$jx == _$E._$3u || this._$lV._$jx == _$E._$3r) {
            if ((_$q6.y > (_$qW.top + ih / 4)) && (_$q6.y < (_$qW.top + 3 * ih / 4)) && (_$q6.x > _$qW.left) && (_$q6.x < _$qW.right)) _$8Z = true;
        } else {
            if ((_$q6.x > (_$qW.left + iw / 4)) && (_$q6.x < (_$qW.left + 3 * iw / 4)) && (_$q6.y > _$qW.top) && (_$q6.y < _$qW.bottom)) _$8Z = true;
        }
        if (_$8Z) {
            _$pk[0] = null;
            var sz = new _$67();
            var rc = new _$4F();
            _$nJ._$lW._$jx = _$lV._$jx;
            _$nJ._$2E(sz, _$dU, rc, false);
            return (byte)(2 * _$lV._$jx + 1);
        }
        var _$9N = _$3M(_$qW, _$q6, _$dN);
        if (_$9N != 0xff) {
            if (_$8S && _$3d()) {
                _$dN[0] = 0;
                return 0xff;
            }
        }
        return _$9N;
    } else {
        var _$9N = _$3M(_$qW, _$q6, _$dN);
        if (_$9N != 0xff) {
            if (this._$lV._$jx == _$E._$3s || this._$lV._$jx == _$E._$3t) _$oc.cy = _$mc.bottom - _$mc.top; else _$oc.cx = _$mc.right - _$mc.left;
        }
        return _$9N;
    }
}
_$73.prototype._$6H = function (_$aM, _$9q, _$d4) {
    this._$6C(this._$mc);
    this._$r9();
    var _$8x = new _$D();
    this._$2s(_$8x, null);
    var _$eq = _$8x._$2e();
    var _$qz = new _$4F();
    var _$eP = new Array(1);
    _$eP[0] = -1;
    var _$fg = new Array(1);
    var _$oV;
    var _$9H;
    if (this._$lV._$jx == _$E._$3u || this._$lV._$jx == _$E._$3r) _$9H = true; else _$9H = false;
    var _$8P = new Array(1);
    var _$gZ = new Array(1);
    var i;
    this._$05(_$9H, _$8x, _$8P, _$gZ, _$eP, _$fg);
    var _$s8;
    if (_$9H) {
        _$s8 = ((this._$mc.right - this._$mc.left) - _$gZ[0]);
    } else {
        _$s8 = ((this._$mc.bottom - this._$mc.top) - _$gZ[0]);
    }
    if (_$8P[0] || this._$jZ > 1) {
        this._$6I(_$8x, _$s8, _$d4);
        return;
    }
    if ((_$9H && (_$gZ[0] > (this._$mc.right - this._$mc.left))) || ((!_$9H) && (_$gZ[0] > (this._$mc.bottom - this._$mc.top)))) {
        this._$6I(_$8x, _$s8, _$d4);
        return;
    }
    for (i = 0; i < _$eq; i++) {
        _$oV = _$8x._$m2[i];
        _$oV._$os._$2b(_$qz);
        if (_$9H && (_$qz.right > (this._$mc.right - this._$mc.left))) {
            _$eP[0] = i;
            _$fg[0] = _$qz.left;
            break;
        } else if (!_$9H && (_$qz.bottom > (this._$mc.bottom - this._$mc.top))) {
            _$eP[0] = i;
            _$fg[0] = _$qz.top;
            break;
        }
    }
    var rc = new _$4F();
    if (_$eP[0] >= 0) {
        var _$fV = _$fg[0] - _$2P(_$8x, 0, _$eP[0], false);
        var _$fL;
        if (_$9H) {
            rc.top = 0;
            rc.bottom = _$8x._$m2[_$eP[0]].size.cy;
            _$fL = _$fg[0] + _$2P(_$8x, _$eP[0], _$eq, false) - (this._$mc.right - this._$mc.left);
        } else {
            rc.left = 0;
            rc.right = _$8x._$m2[_$eP[0]].size.cx;
            _$fL = _$fg[0] + _$2P(_$8x, _$eP[0], _$eq, false) - (this._$mc.bottom - this._$mc.top);
        }
        if (_$fL > _$fV) _$fg[0] -= _$fV; else _$fg[0] -= _$fL;
        if (_$9H) rc.right = _$fg[0]; else rc.bottom = _$fg[0];
        for (i = 0; i < _$eP[0]; i++) {
            _$oV = _$8x._$m2[_$eP[0] - 1 - i];
            _$oV._$os._$2b(_$qz);
            if (_$9H) {
                if (_$qz.right < rc.right) break;
                rc.left = rc.right - _$oV.size.cx;
                _$oV._$os._$6A(rc);
                rc.right = rc.left;
            } else {
                if (_$qz.bottom < rc.bottom) break;
                rc.top = rc.bottom - _$oV.size.cy;
                _$oV._$os._$6A(rc);
                rc.bottom = rc.top;
            }
        }
        if (_$9H) rc.left = _$fg[0]; else rc.top = _$fg[0];
        for (i = _$eP[0]; i < _$eq; i++) {
            _$oV = _$8x._$m2[i];
            if (_$9H) {
                rc.right = rc.left + _$oV.size.cx;
                _$oV._$os._$6A(rc);
                rc.left = rc.right;
            } else {
                rc.bottom = rc.top + _$oV.size.cy;
                _$oV._$os._$6A(rc);
                rc.top = rc.bottom;
            }
        }
    }
}
_$73.prototype._$4s = function (_$nL, _$dw, _$9n) {
    if (this._$jt) {
        var plt = new _$5i();
        var _$qW = new _$4F();
        this._$2b(_$qW);
        plt.x = _$qW.left;
        plt.y = _$qW.top;
        if (_$9n == _$E._$3s || _$9n == _$E._$3t) {
            if (_$9n == _$E._$3s) plt.x = _$qW.left + _$dw; else plt.x = _$qW.left - _$dw;
        } else {
            plt.x = _$qW.left;
            if (_$9n == _$E._$3u) plt.y = _$qW.top + _$dw; else plt.y = _$qW.top - _$dw;
        }
        var _$qN = new _$4F();
        _$qN.left = plt.x;
        _$qN.top = plt.y;
        _$qN.right = plt.x + _$E._$2I(_$qW);
        _$qN.bottom = plt.y + _$E._$2H(_$qW);
        this._$6C(_$qN);
    }
}
_$73.prototype._$2J = function (_$nr, pRC) {
    if (this._$hu == null) {
        pRC.left = pRC.right = 0;
        pRC.top = pRC.bottom = 0;
        return;
    }
    ;this._$2b(pRC);
}
_$73.prototype._$15 = function (_$nC) {
    if (_$nC._$pp == null) {
        _$nC._$oP = null;
    } else {
        var _$pF;
        if (_$nC == _$nC._$pp._$oN) {
            _$pF = _$nC._$pp._$pV;
            _$nC._$pp._$oN = _$pF._$oN;
            _$nC._$pp._$pV = _$pF._$pV;
            if (_$pF._$oN != null) _$pF._$oN._$pp = _$nC._$pp;
            if (_$pF._$pV != null) _$pF._$pV._$pp = _$nC._$pp;
            _$nC._$pp._$oP = _$pF._$oP;
            _$nC._$pp._$8L = _$pF._$8L;
            if (_$pF._$oP != null) {
                if (_$pF._$oP._$lh == _$pF) _$pF._$oP._$lh = _$nC._$pp;
                if (_$pF._$oP._$lN == _$pF) _$pF._$oP._$lN = _$nC._$pp;
            }
        } else {
            if (_$nC._$pp._$pp == null) {
                _$pF = _$nC._$pp._$oN;
                _$nC._$pp._$oN = _$nC._$pp._$pV = null;
                _$nC._$pp._$oP = _$pF._$oP;
                _$nC._$pp._$8L = _$pF._$8L;
                if (_$pF._$oP != null) {
                    if (_$pF._$oP._$lh == _$pF) _$pF._$oP._$lh = _$nC._$pp;
                    if (_$pF._$oP._$lN == _$pF) _$pF._$oP._$lN = _$nC._$pp;
                }
            } else {
                _$pF = _$nC._$pp;
                _$pF._$pp._$pV = _$pF._$oN;
                _$pF._$oN._$pp = _$pF._$pp;
            }
        }
        _$pF._$oP = null;
        _$pF._$oN = _$pF._$pV = null;
    }
}
_$73.prototype._$r8 = function () {
    if (this._$jK != null) {
        _$0Q.prototype._$r8.call(this);
        this._$jK = null;
        this._$j1 = false;
    }
}
_$73.prototype._$5b = function (_$nv) {
    _$15(_$nv);
    if (_$nv != _$lp) {
        return false;
    } else if (this._$lp._$pV == null && this._$lp._$pV == null && this._$lp._$oP == null) return true;
    return false;
}
_$73.prototype._$g = function (_$nL, _$nv, pRC) {
    if (this._$lp == _$nv) return true;
    var _$qh = _$lp;
    var _$8u = true;
    while (_$qh != null) {
        if (_$qh._$oN == null && _$qh._$pV == null && !_$qh._$8L) {
            _$8u = false;
            break;
        }
        if (_$qh._$oN != null && _$qh._$oN._$oP != null && !_$qh._$oN._$8L) {
            _$8u = false;
            break;
        }
        _$qh = _$qh._$pV;
    }
    if (!_$8u) {
        _$nv._$8L = false;
        var _$eq, _$eQ;
        var _$8x = new _$D();
        _$eQ = _$2s(_$8x, _$nv._$oP);
        _$eq = _$8x._$2e();
        _$nv._$8L = true;
        var _$9M;
        if (this._$lV != null) _$9M = this._$lV._$jx; else _$9M = _$nv._$oP._$lW._$jx;
        var _$9H = true;
        if (_$9M == _$E._$3t || _$9M == _$E._$3s) _$9H = false;
        var _$8P = new Array(1);
        var _$gZ = new Array(1);
        var iid = new Array(1);
        var imo = new Array(1);
        this._$05(_$9H, _$8x, _$8P, _$gZ, iid, imo);
        var _$p4 = _$8x._$m2[_$eQ];
        _$8x._$5N(_$eQ);
        var _$gq = _$2t(_$8x, 0, _$8x._$2e(), _$9H);
        var _$gk = new Array(1);
        if ((_$9H && (_$p4.size.cy >= (_$mc.bottom - _$mc.top))) || (!_$9H && (_$p4.size.cx >= (_$mc.right - _$mc.left)))) {
            if (_$9H && (_$gq < _$p4.size.cy)) {
                _$gk[0] = _$gq - _$p4.size.cy;
            } else if (!_$9H && (_$gq < _$p4.size.cx)) {
                _$gk[0] = _$gq - _$p4.size.cx;
            }
        }
        var _$fa = _$2P(_$8x, 0, _$8x._$2e(), false);
        if ((_$9H && (_$fa <= (this._$mc.right - this._$mc.left))) || (!_$9H && (_$fa <= (this._$mc.bottom - this._$mc.top)))) {
            var j;
            for (j = 0; j < _$8x._$2e(); j++) {
                var _$oV = _$8x._$m2[j];
                var _$p3 = _$oV._$os;
                _$p3._$61();
            }
            _$5J(null, 0, _$8x, _$9H);
            this._$jK._$r9();
            return _$8u;
        }
        if (_$8P[0]) {
            var _$fe = this._$2z(_$8x, 0, _$8x._$2e());
            if ((_$9H && (_$fe <= (this._$mc.right - this._$mc.left))) || (!_$9H && (_$fe <= (this._$mc.bottom - this._$mc.top)))) {
                var _$nl = new _$D();
                this._$2B(_$8x, 0, _$nl);
                _$eq = _$nl._$2e();
                var _$gP = 0;
                _$ta;
                var k;
                for (k = 0; k < _$eq; k++) {
                    _$oV = _$8x._$m2[k];
                    if (_$9H) {
                        _$gP += _$oV._$os._$cK();
                    } else _$gP += _$oV._$os._$cl();
                }
                var _$s8;
                if (_$9H) _$s8 = ((this._$mc.right - this._$mc.left) - _$gP); else _$s8 = ((this._$mc.bottom - this._$mc.top) - _$gP);
                _$6I(_$8x, _$s8, _$gk);
                if (_$gk[0] != 0) {
                    var _$eu = this._$lV._$ln._$2N(this._$lV._$jx, this);
                    this._$lV._$ln._$5w(this, _$eu, this._$lV._$jx, _$gk[0]);
                }
            } else {
                _$6I(_$8x, 0, _$gk);
                if (_$gk[0] != 0) {
                    var _$eu = this._$lV._$ln._$2N(this._$lV._$jx, this);
                    this._$lV._$ln._$5w(this, _$eu, this._$lV._$jx, _$gk[0]);
                }
            }
            return _$8u;
        } else {
            _$5J(null, 0, _$8x, _$9H);
            this._$jK._$r9();
            return _$8u;
        }
    }
    return _$8u;
}
_$73.prototype._$2P = function (d) {
    var _$8x = new _$D();
    _$2s(_$8x, null);
    d.width = _$2P(_$8x, 0, _$8x._$2e(), false);
    d.height = 0;
    var _$eq = _$8x._$2e();
    if (_$eq > 0) {
        var _$oV = _$8x._$m2[_$eq - 1];
        var rc = _$oV._$os._$c2();
        if (this._$lV._$jx == _$E._$3u || this._$lV._$jx == _$E._$3r) {
            d.height = rc.x + rc.width;
        } else {
            d.height = rc.y + rc.height;
        }
    }
}
_$73.prototype._$2P = function (_$ot, _$cZ, _$d8, _$81) {
    var _$fC = 0;
    var _$p0;
    var i;
    for (i = _$cZ; i < _$d8; i++) {
        _$p0 = _$ot._$m2[i];
        var _$9M;
        if (this._$lV != null) _$9M = this._$lV._$jx; else _$9M = _$p0._$os._$lW._$jx;
        if (_$9M == _$E._$3u || _$9M == _$E._$3r) {
            if (!_$81) _$fC += _$p0.size.cx; else _$fC += _$p0._$os._$cK();
        } else {
            if (!_$81) _$fC += _$p0.size.cy; else _$fC += _$p0._$os._$cl();
        }
    }
    return _$fC;
}
_$73.prototype._$2s = function (_$ot, _$nr) {
    var _$eP = 0;
    var _$eQ = -1;
    var _$qi = this._$lp;
    while (_$qi != null) {
        if (_$qi._$oN == null && _$qi._$pV == null) {
            if (!_$qi._$8L && _$qi._$oP != null) {
                var _$oV = new _$4d();
                var bts = _$qi._$oP._$lW._$jx;
                if (this._$lV != null) _$qi._$oP._$lW._$jx = this._$lV._$jx;
                _$qi._$oP._$2E(_$oV.size, 0, null, false);
                _$qi._$oP._$lW._$jx = bts;
                _$oV._$os = _$qi._$oP;
                _$ot._$c(_$oV);
                if (_$nr == _$qi._$oP) _$eQ = _$eP;
            }
            break;
        } else {
            if (_$qi._$oN != null) {
                var pf = _$qi._$oN;
                if (pf._$oP != null && !pf._$8L) {
                    if (pf._$oP == _$nr) _$eQ = _$eP;
                    var _$oV = new _$4d();
                    var bts = pf._$oP._$lW._$jx;
                    if (this._$lV != null) {
                        pf._$oP._$lW._$jx = this._$lV._$jx;
                    }
                    pf._$oP._$2E(_$oV.size, 0, null, false);
                    pf._$oP._$lW._$jx = bts;
                    _$oV._$os = pf._$oP;
                    _$ot._$c(_$oV);
                    _$eP++;
                }
            }
            if (_$qi._$pV != null) {
                _$qi = _$qi._$pV;
            } else {
                break;
            }
        }
    }
    return _$eQ;
}
_$73.prototype._$8 = function (_$nL, _$nr) {
    if (_$nr._$ct() != this._$jK) {
        this._$jK.add(_$nr);
    }
    var _$qW = new _$4F();
    var size = new _$67();
    _$nr._$2E(size, 0, null, false);
    var _$ot = new _$D();
    var _$eQ = _$2s(_$ot, _$nr);
    var _$oV = null;
    _$nr._$kx = _$1i._$ky;
    _$1i._$ky += 1;
    var _$eq = _$ot._$2e();
    var _$8P = new Array(1);
    _$8P[0] = false;
    var _$gZ = new Array(1);
    var i = 0;
    var _$eP = new Array(1);
    var _$fg = new Array(1);
    var _$9H;
    if (this._$lV._$jx == _$E._$3s || this._$lV._$jx == _$E._$3t) _$9H = false; else _$9H = true;
    if (_$eQ < 0) return;
    _$oV = _$ot._$m2[_$eQ];
    _$ot._$5N(_$eQ);
    this._$05(_$9H, _$ot, _$8P, _$gZ, _$eP, _$fg);
    _$ot._$5(_$oV, _$eQ);
    var _$f8 = 0;
    _$f8 = _$nr._$2v(_$9H);
    if (_$8P[0] || (_$9H && ((this._$mc.right - this._$mc.left) < (_$gZ[0] + _$f8))) || (!_$9H && ((this._$mc.bottom - this._$mc.top) < (_$gZ[0] + _$f8)))) {
        var _$fe = this._$2z(_$ot, 0, _$ot._$2e());
        if ((_$9H && ((this._$mc.right - this._$mc.left) >= _$fe)) || (!_$9H && ((this._$mc.bottom - this._$mc.top) >= _$fe))) {
            var _$nl = new _$D();
            this._$2B(_$ot, 0, _$nl);
            for (i = 0; i < _$eq; i++) {
                _$oV = _$ot._$m2[i];
                if (_$oV._$os != _$nr) {
                    _$oV.size.cx = _$oV._$os._$cK();
                    _$oV.size.cy = _$oV._$os._$cl();
                    if (_$9H) {
                        _$oV._$e4 = _$oV._$os._$cK();
                    } else _$oV._$e4 = _$oV._$os._$cl();
                } else {
                    var it = _$nr._$2v(_$9H);
                    if (_$nr._$kJ > it) _$nr._$kJ = it;
                    _$oV._$e4 = _$nr._$kJ;
                }
            }
            var pt = _$nr._$m9;
            if (_$nr._$jl) {
                if (pt.x < 0) {
                    pt.x = 0;
                    pt.y = 0;
                } else {
                    _$E._$6j(_$jK, pt);
                }
            }
            if (_$eQ > 0) {
                _$oV = _$ot._$m2[_$eQ - 1];
                var _$qQ = new _$4F();
                _$oV._$os._$2b(_$qQ);
                var _$fd = 0;
                _$fd = _$oV._$os._$2y();
                if (_$9H && (_$qQ.right >= pt.x)) {
                    if ((pt.x - _$qQ.left) > _$fd) {
                        _$oV._$os._$kJ = pt.x - _$qQ.left;
                    } else _$oV._$os._$kJ = _$fd;
                    _$oV._$e4 = _$oV._$os._$kJ;
                } else if (!_$9H && (_$qQ.bottom >= pt.y)) {
                    if ((pt.y - _$qQ.top) > _$fd) {
                        _$oV._$os._$kJ = pt.y - _$qQ.top;
                    } else _$oV._$os._$kJ = _$fd;
                    _$oV._$e4 = _$oV._$os._$kJ;
                }
            }
            if (_$eQ < (_$eq - 1)) {
                _$oV = _$ot._$m2[_$eQ + 1];
                var _$qQ = new _$4F();
                _$oV.bar._$2b(_$qQ);
                var _$fd = 0;
                _$fd = _$oV._$os._$2y();
                if (_$9H && (_$qQ.left <= pt.x)) {
                    if ((_$qQ.right - pt.x) > _$fd) {
                        _$oV._$os._$kJ = _$qQ.right - pt.x;
                    } else _$oV._$os._$kJ = _$fd;
                    _$oV._$e4 = _$oV._$os._$kJ;
                } else if (!_$9H && (_$qQ.top <= pt.y)) {
                    if ((_$qQ.bottom - pt.y) > _$fd) {
                        _$oV._$os._$kJ = _$qQ.bottom - pt.y;
                    } else _$oV._$os._$kJ = _$fd;
                    _$oV._$e4 = _$oV._$os._$kJ;
                }
            }
            var _$eh = 0;
            for (i = 0; i < _$eq; i++) {
                _$oV = _$ot._$m2[i];
                if (_$oV._$os != _$nr) _$eh += _$oV._$e4; else _$eh += _$oV._$os._$kJ;
            }
            var _$gY = this._$mc.right - this._$mc.left;
            if (!_$9H) _$gY = this._$mc.bottom - this._$mc.top;
            var _$s8 = (_$gY - _$eh);
            var _$eo = new Array(1);
            this._$5k(_$ot, 0, 0, _$ot._$2e(), _$nl, _$s8, _$9H, _$gY, 0, _$eo);
            _$eo[0] = this._$0p(_$9H, _$eo[0]);
            if (_$eo[0] != 0) {
                var _$eu = this._$lV._$ln._$2N(this._$lV._$jx, this);
                this._$lV._$ln._$5w(this, _$eu, this._$lV._$jx, _$eo[0]);
            }
        } else {
            var _$gl = new Array(1);
            this._$6I(_$ot, 0, _$gl);
        }
        return;
    }
    ;this._$5J(_$nr, _$eQ, _$ot, _$9H);
    return;
}
_$73.prototype._$5J = function (_$nr, _$dk, _$8x, _$9H) {
}
_$73.prototype._$2t = function (_$u, _$cZ, _$d8, _$8r) {
    var _$oV = null;
    var _$f8 = 0;
    var i;
    for (i = _$cZ; i < _$d8; i++) {
        _$oV = _$u._$m2[i];
        if (_$8r) {
            if (_$oV.size.cy > _$f8) _$f8 = _$oV.size.cy;
        } else {
            if (_$oV.size.cx > _$f8) _$f8 = _$oV.size.cx;
        }
    }
    return _$f8;
}
_$73.prototype._$3g = function (_$dc, _$nr, _$8x, _$cZ, _$d8, _$9H, _$dI) {
}
_$73.prototype._$7c = function (_$os, pRC) {
}
_$73.prototype.setVisible = function (_$8t) {
    if (this._$hu != null) {
        _$mP._$3h(this._$hu);
    }
    ;this._$jt = _$8t;
}
_$73.prototype._$51 = function (g) {
}
_$73.prototype._$qZ = function (wnd, rc) {
    if (this._$hu == null) {
    }
    if (wnd == null) {
        this._$6C(rc);
        return;
    }
    if (!this._$j1) {
        this._$mc._$0u(rc);
        _$j1 = true;
    }
    ;this._$6C(rc);
    this._$8(null, wnd);
}
_$73.prototype._$6C = function (rc) {
    if (this._$hu != null) {
        _$mP._$6s(this._$hu, rc.left, rc.top);
        _$mP._$6z(this._$hu, rc.right - rc.left - this.m_B[0] - this.m_B[2], rc.bottom - rc.top - this.m_B[1] - this.m_B[3], !_$11._$iC);
        this._$r9();
    }
}
_$73.prototype._$0p = function (_$9H, iwh) {
    var _$ew = 0;
    if (!_$9H && iwh != (this._$mc.right - this._$mc.left)) {
        _$ew = iwh - (this._$mc.right - this._$mc.left);
        if (this._$lV._$jx == _$E._$3t) this._$mc.left -= _$ew;
        this._$mc.right = this._$mc.left + iwh;
    } else if (_$9H && iwh != (this._$mc.bottom - this._$mc.top)) {
        _$ew = iwh - (this._$mc.bottom - this._$mc.top);
        if (this._$lV._$jx == _$E._$3r) this._$mc.top -= _$ew;
        this._$mc.bottom = this._$mc.top + iwh;
    }
    return _$ew;
}
_$73.prototype._$2z = function (_$8x, _$cZ, _$d8) {
    var i;
    var _$oV;
    var _$gY = 0;
    var _$fb = 0;
    for (i = _$cZ; i < _$d8; i++) {
        _$oV = _$8x._$m2[i];
        _$fb = _$oV._$os._$2y();
        _$gY += _$fb;
    }
    return _$gY;
}
_$73.prototype._$2B = function (_$8x, _$ei, _$nl) {
    var _$eq = _$8x._$2e();
    var _$fG;
    var bin;
    var i;
    var j;
    var _$oV, _$pf;
    for (i = _$ei; i < _$eq; i++) {
        _$fG = _$nl._$2e();
        bin = false;
        _$oV = _$8x._$m2[i];
        for (j = 0; j < _$fG; j++) {
            _$pf = _$nl._$m2[j];
            if (_$oV._$os._$kx < _$pf._$os._$kx) {
                _$nl._$5(_$oV, j);
                bin = true;
                break;
            }
        }
        if (!bin) {
            _$nl._$c(_$oV);
        }
    }
}
_$73.prototype._$5k = function (_$8x, _$d1, _$d0, _$d9, _$nl, _$s7, _$9H, _$gY, _$gs, _$fl) {
}
_$73.prototype._$6I = function (_$8x, _$s7, _$e7) {
}
_$73.prototype._$05 = function (_$9H, _$8x, _$8w, _$ef, _$eb, _$ec) {
}
_$73.prototype._$h = function (_$8v, _$dk, _$8r, _$q6) {
}
_$73.prototype._$5G = function (_$nr, _$q6, _$qx) {
}
_$73.prototype._$0E = function (_$nr, _$o3, _$d7) {
    if (_$o3 == null) return;
    if (_$d7 == _$E._$3s || _$d7 == _$E._$3u) {
        this._$d(_$nr, _$o3);
    } else {
        var _$po = _$o3._$pp;
        if (_$po == null || _$po._$pV == _$o3) _$o3 = null; else {
            if (_$po._$pV._$oN == null && _$po._$pV._$pV == null) _$o3 = _$po._$pV; else if (_$po._$pV._$oN != null) {
                _$o3 = _$po._$pV._$oN;
            }
        }
        ;this._$d(_$nr, _$o3);
    }
}
_$73.prototype._$0E = function (_$nr, _$q6, _$8m) {
    var _$fi = new Array(1);
    if (_$8m) _$E._$6j(_$jK, _$q6);
    var _$qh = this._$2i(_$q6, _$fi);
    _$nr._$jY = _$fi[0];
    this._$d(_$nr, _$qh);
}
_$73.prototype._$d = function (_$nr, _$nu) {
}
_$73.prototype._$av = function (_$aM, _$9n) {
    this._$l1 = 0;
    _$0Q.prototype._$av.call(this, _$aM, _$9n);
}
_$73.prototype._$7A = function (_$qs) {
    if (this._$jK != null) this._$jK.add(_$qs);
}
_$73.prototype._$rU = function (_$nL) {
    if (this._$jK != null) {
    }
}
_$73.prototype._$6f = function (_$o1) {
}
_$73.prototype._$6c = function (_$nL, _$o1, _$nv, _$b3) {
}
_$73.prototype._$6d = function (_$nL, _$o1, _$nv) {
}

function _$K(_$85) {
    _$K.baseConstructor.call(this, _$85);
    this._$lr = null;
    this._$ja = false;
    this._$m7 = null;
    this._$m4 = null;
    this._$lC = null;
    this._$iW = false;
    this._$hw = new Array();
    this._$lE = null;
}

_$bh._$bg(_$K, _$E);
_$K._$ls = new Array();
_$K.prototype._$c4 = function () {
    var _$a8 = new Array();
    var i;
    var cnt = this._$hw.length;
    for (i = 0; i < cnt; i++) {
        _$a8.push(this._$hw[i]);
    }
    return _$a8;
}
_$K.prototype._$2D = function (rc) {
    if (rc != null) {
        if (this._$m7 != null) {
            rc.x = this._$m7.x;
            rc.y = this._$m7.y;
        } else {
            rc.x = 100;
            rc.y = 100;
        }
        if (this._$m4 != null) {
            rc.width = this._$m4.width;
            rc.height = this._$m4.height;
        } else {
            rc.width = 200;
            rc.height = 300;
        }
    }
}
_$K.prototype._$49 = function (_$dn, _$dZ, _$dM, _$d3) {
    if (this._$m7 == null) this._$m7 = new _$5i();
    this._$m7.x = _$dn;
    this._$m7.y = _$dZ;
    if (this._$m4 == null) this._$m4 = new _$16();
    this._$m4.width = _$dM - _$dn;
    this._$m4.height = _$d3 - _$dZ;
    ;
}
_$K.prototype._$r5 = function (_$ae) {
    if (_$ae == null) return;
    var i;
    for (i = 0; i < 4; i++) {
        if (this._$hX[i] == _$ae) {
            this._$hX[i] = null;
            this._$5G();
            return;
        }
    }
}
_$K.prototype._$7I = function (_$ae) {
    this._$r5(this._$hX[1]);
    var _$tD = _$mP._$2r(this._$hz);
    var _$tP = _$mP._$2U(this._$hz);
    this._$hX[1] = _$ae._$hu;
    if (DSXDFUtil._$jo) {
        if (!_$11._$iC) {
            _$mP._$6s(_$ae._$hu, 3 + _$tD, 3 + _$tP);
            _$ae._$hu.width = this._$hC.width - 6;
        } else {
            _$mP._$6s(_$ae._$hu, 6 + _$tD, 6 + _$tP);
            _$ae._$hu.style.width = (this._$hC.width - 12) + "px";
        }
    } else _$mP._$6n(_$ae._$hu, 3 + _$tD, 3 + _$tP, parseInt(this._$hC.style.width) - 6, parseInt(_$ae._$hu.style.height));
    this._$5G();
}
_$K.prototype.Add = function (com) {
    var vt = 0;
}
_$K.prototype._$e = function (com) {
    var vs = 0;
}
_$K.prototype._$5L = function (com) {
}
_$K.prototype._$2n = function () {
}
_$K.prototype._$7C = function () {
    if (this._$hX[1] != null) return;
    var pan = new _$4l();
    pan._$rS(this);
    pan.setVisible(true);
    pan.setSize(pan._$cx());
    this._$7I(pan);
    this.Add(pan);
    this._$lE = pan;
    this._$lE._$r9();
}
_$K.prototype._$7z = function (_$7V) {
    if (this._$hX[1] != null) {
        this._$hX[1]._$rw(_$7V);
    }
}
_$K._$0B = function (_$qu) {
    var _$oQ = new _$K(false);
    _$oQ._$m7 = new _$5i();
    _$oQ._$m7.x = _$qu.x;
    _$oQ._$m7.y = _$qu.y;
    _$oQ._$m4 = new _$16();
    _$oQ._$m4.width = _$qu.width;
    _$oQ._$m4.height = _$qu.height;
    _$K._$ls.push(_$oQ);
    return _$oQ;
}
_$K.prototype._$0y = function (_$no) {
}
_$K.prototype._$50 = function (_$tT, _$hm) {
    this._$ja = true;
    return _$lr._$1a(_$tT, _$hm);
}
_$K.prototype._$v = function (_$nr) {
}
_$K.prototype._$o = function (_$bq) {
}
_$K.prototype._$14 = function () {
    _$hz = null;
}
_$K.prototype._$02 = function () {
    if (this._$iW) {
        var _$pW = this._$m0[0]._$hS._$m2[0];
        if (!_$pW._$jt) {
            _$m7 = _$hz._$cq();
            _$m4 = _$hz._$cz();
            _$14();
        }
    } else _$14();
}
_$K.prototype._$R = function (_$nA, _$nx, _$q6, _$oc) {
    if (!this._$iV || !this._$iW) return 0xff;
    if (!_$nA._$iW) return 0xff;
    if (this._$lr != null && this._$lr._$iT) {
        _$nA._$jx = 0xff;
        return 0xff;
    }
    var _$qH = new _$5o();
    var _$qG = new _$5o();
    _$qG = _$nA._$mj;
    var _$eK = _$E._$2H(_$qG);
    var _$h5 = _$E._$2I(_$qG);
    var _$gH = _$h5 < _$eK ? _$h5 : _$eK;
    _$nA._$jg = false;
    _$oc.cx = _$h5;
    _$oc.cy = _$eK;
    if (!this._$1m(_$nA, _$oc, _$h5, _$eK, _$qG, _$q6)) return _$nA._$jx;
    this._$2d(_$qH);
    _$qH.left += this._$kc[0];
    _$qH.right -= this._$kc[2];
    _$qH.top += this._$kc[1];
    _$qH.bottom -= this._$kc[3];
    var _$9x = _$E._$n(_$qH, _$q6);
    _$nA._$kN = 0;
    _$nA._$lf = null;
    _$nA._$jx = 0xff;
    if ((_$9x != 0xff) && ((_$9x % 2) == 0)) {
        _$nA._$jx = parseInt(_$9x / 2);
        _$nx._$2O(_$oc, _$gH, _$qH, false);
        _$nA._$jg = true;
        _$E._$2j(_$nA, _$qH, _$oc);
        return _$nA._$jx;
    }
    var _$9N;
    var _$8Q = true;
    var _$oF = null;
    var _$qj = new Array(1);
    var _$dA = new Array(1);
    _$9N = this._$03(_$nA, 0, _$q6, _$oc, _$gH, _$qj, _$dA);
    if (_$9N != 0xff) {
        if (((_$9N + 1) % 2) == 0) {
            _$oF = _$qj[0];
        }
    } else return 0xff;
    if (_$nA._$le == _$oF) {
        _$nA._$jx = 0xff;
        return 0xff;
    }
    _$nA._$jx = parseInt(_$9N / 2);
    if (_$oF != null) _$nx._$2O(_$oc, _$gH, _$qH, true); else {
        _$qH.left = _$qH.top = 0;
        _$qH.right = _$oc.cx;
        _$qH.bottom = _$oc.cy;
        _$nx._$2O(_$oc, _$gH, _$qH, false);
    }
    _$nx._$6g(0, _$oF, parseInt(_$9N / 2));
    if (_$nA._$lf == null && _$nA._$jx == 0 && !_$nA._$jg) {
        _$nA._$jx = 0xff;
    }
    return _$nA._$jx;
}
_$K.prototype._$2l = function (_$nK, _$7Z) {
    var i;
    var d;
    _$nK[0] = this._$kc[0];
    _$nK[2] = this._$kc[2];
    _$nK[3] = this._$kc[3];
    _$nK[1] = 6;
    if (this._$hX[1] != null) {
        _$nK[1] += _$mP._$2o(this._$hX[1], !_$11._$iC);
    }
}
_$K.prototype._$nf = function (_$eT, _$gX, iw, ih) {
    var _$h5, _$eK;
    _$eK = ih;
    _$h5 = iw;
    if (this._$hX[1] != null) {
        if (_$11._$iC) {
            _$mP._$6s(this._$hX[1], 6 + _$mP._$2r(this._$hz), 6 + _$mP._$2U(this._$hz));
            _$mP._$6z(this._$hX[1], iw, this._$kc[1] - 6, !_$11._$iC);
        } else {
            _$mP._$6s(this._$hX[1], 3 + _$mP._$2r(this._$hz), 3 + _$mP._$2U(this._$hz));
            _$mP._$6z(this._$hX[1], iw, this._$kc[1] - 3, !_$11._$iC);
        }
        if (this._$lE != null) this._$lE._$r9();
    }
    var _$cS = 0;
    var _$eq = this._$m0[0]._$hS._$2e();
    if (_$eq == 1) {
        var _$pW = this._$m0[0]._$hS._$m2[0];
        if (_$pW._$lV != null) {
            _$pW._$lV.setSize(0, 0);
        }
        var rc = new _$5o();
        rc.left = _$eT;
        rc.top = _$gX;
        rc.right = _$eT + iw;
        rc.bottom = _$gX + ih;
        _$pW._$mc._$0u(rc);
        this._$6H(_$pW._$lp, rc, _$E._$5t);
        this._$6J(_$E._$3s, -32767, 32767);
    }
    return 0;
}
_$K.prototype._$m = function (_$nr) {
    if (!this._$4B(_$nr, true)) {
        if (this._$hX[1] != null) _$mP._$5P(DSXDFUtil._$hQ, this._$hX[1]);
        this._$r5(this._$hX[1]);
        this._$5L(this._$lE);
    }
}
_$K.prototype._$4B = function (_$nr, _$8t) {
    var _$eq = 0;
    var _$ov = null;
    var _$gm = this._$m0[0]._$hS._$2e();
    if (_$gm < 1) return false;
    _$ov = this._$m0[0]._$hS._$m2[0]._$lp;
    _$eq = _$ov._$4B(_$nr, _$8t);
    if (_$eq < 2) return false;
    return true;
}
_$K.prototype._$cg = function () {
    var _$eq = 0;
    var _$ov = null;
    var _$gm = this._$m0[0]._$hS._$2e();
    if (_$gm < 1) return null;
    var _$oZ = new _$D();
    _$ov = this._$m0[0]._$hS._$m2[0]._$lp;
    _$ov._$2Y(_$oZ);
    var _$aH = new Array(_$oZ._$2e());
    var i;
    for (i = 0; i < _$oZ._$2e(); i++) _$aH[i] = _$oZ._$m2[i];
    return _$aH;
}
_$K.prototype._$3O = function (_$nP, _$nA, _$nE) {
    var _$pW = this._$m0[0]._$hS._$m2[0];
    var _$pS = _$pW._$lp;
    var _$8Q = false;
    if (_$nA._$jx == _$E._$3u || _$nA._$jx == _$E._$3s) _$8Q = true;
    _$nA._$kN = 0;
    _$pS._$3N(_$nP, _$nA._$jx, _$8Q, _$nE);
    _$nA._$jx = 0;
    _$nP._$6y(0, this);
}
_$K.prototype._$1l = function (_$nA, _$nE) {
    var _$pW = this._$m0[0]._$hS._$m2[0];
    var _$pS = _$pW._$lp;
    _$nA._$le._$jY = 0;
    var _$8Q = false;
    if (_$nA._$jx == _$E._$3u || _$nA._$jx == _$E._$3s) _$8Q = true;
    var _$pb = new _$F();
    _$pb._$oP = _$nA._$le;
    _$nA._$le._$lh = _$pb;
    _$pS._$3N(_$pb, _$nA._$jx, _$8Q, _$nE);
    _$nA._$le._$jw = 0;
}
_$K.prototype._$5b = function (_$nI) {
    _$E.prototype._$5b.call(this, _$nI);
    var _$eq = this._$m0[0]._$hS._$2e();
    if (_$eq > 0) {
        var _$pW = this._$m0[0]._$hS._$m2[0];
        if (_$pW._$lp._$oN == null && _$pW._$lp._$pV == null && _$pW._$lp._$oP == null && (_$pW._$lp._$lI == null || (_$pW._$lp._$lI != null && _$pW._$lp._$lI.length < 1))) {
            _$eq = _$K._$ls.length;
            var i;
            for (i = 0; i < _$eq; i++) {
                if (_$K._$ls[i] == this) {
                    _$K._$ls.splice(i, 1);
                    break;
                }
            }
        }
    } else {
        _$eq = _$K._$ls.length;
        var i;
        for (i = 0; i < _$eq; i++) {
            if (_$K._$ls[i] == this) {
                _$K._$ls.splice(i, 1);
                break;
            }
        }
    }
}

function _$6M(_$al) {
    this._$i5 = null;
    this._$kv = 0;
    this._$iN = false;
    this._$nm = new _$5i();
    this._$nn = new _$5A();
    this._$jC = null;
    this._$lx = null;
    this._$i7;
    this._$lU = null;
    this._$lM = null;
    this.m_B = [0, 0, 0, 0];
    if (DSXDFUtil._$jo) {
        this._$hu = _$mP._$0C("canvas", _$al);
    } else {
        this._$hu = _$mP._$0C("div", _$al);
    }
    ;this._$hu.className = 'dffloatframe';
    var bg = _$mP._$cC(this._$hu, "background-Color");
    if (bg == null || bg.length == 0) {
        this._$hu.style.background = 'ButtonFace';
    }
    ;this.m_B = _$mP._$26(this._$hu);
    this._$hu._$4G = this;
    this._$hu.onmousedown = _$6M._$4p;
    this._$hu.onmousemove = _$6M._$4o;
    this._$hu._$ni = _$6M._$mU;
}

_$6M._$7m = 0;
_$6M._$4M = 1;
_$6M._$1y = 2;
_$6M._$69 = 3;
_$6M._$7n = 4;
_$6M._$7o = 5;
_$6M._$1z = 6;
_$6M._$1A = 7;
_$6M.icc = 0;
_$6M._$q = 4;
_$6M._$ms = new _$67();
_$6M._$4p = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (DSXDFUtil._$jP == 1) e.target._$4G._$n9(e); else e.srcElement._$4G._$n9(e);
    return false;
}
_$6M._$4o = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (DSXDFUtil._$jP == 1) {
        e.target._$4G._$n7(e);
    } else {
        e.srcElement._$4G._$n7(e);
    }
}
_$6M._$mU = function (e) {
    return false;
}
_$6M.prototype._$na = function (e) {
    DSXDFUtil._$6E(false);
    this._$iN = false;
}
_$6M.prototype._$mK = function (e) {
    if (!this._$iN) {
    }
}
_$6M.prototype._$2b = function (rc) {
    if (this._$hu != null) {
        rc.left = _$mP._$2r(this._$hu);
        rc.top = _$mP._$2U(this._$hu);
        if (DSXDFUtil._$jo) {
            rc.right = rc.left + this._$hu.width;
            rc.bottom = rc.top + this._$hu.height;
        } else {
            rc.right = rc.left + parseInt(this._$hu.style.width);
            rc.bottom = rc.top + parseInt(this._$hu.style.height);
        }
    }
}
_$6M.prototype._$nc = function (e) {
}
_$6M.prototype._$n7 = function (e) {
    var pt = new _$5i();
    _$mP._$2L(e, pt);
    if (!this._$iN) this._$ft(pt);
    if (this._$kv >= 0) {
        if (this._$kv == _$6M._$7m || this._$kv == _$6M._$1y) {
            this._$hu.style.cursor = "e-resize";
        } else if (this._$kv == _$6M._$69 || this._$kv == _$6M._$4M) {
            this._$hu.style.cursor = "n-resize";
        } else if (this._$kv == _$6M._$7n) {
            this._$hu.style.cursor = "nw-resize";
        } else if (this._$kv == _$6M._$7o) {
            this._$hu.style.cursor = "sw-resize";
        } else if (this._$kv == _$6M._$1z) {
            this._$hu.style.cursor = "ne-resize";
        } else {
            this._$hu.style.cursor = "se-resize";
        }
    } else {
    }
}
_$6M.prototype._$n9 = function (e) {
    if (this._$iN) return;
    this.m_B = _$mP._$26(this._$hu);
    _$1g._$i6 = this;
    DSXDFUtil._$6E(true);
    this._$iN = true;
    if (this._$lU != null && this._$lU._$i5 != null && !_$lU._$i5._$iW) {
    }
    var pt = new _$5i();
    _$mP._$2L(e, pt);
    if (this._$kv >= 0) {
        this._$nm.x = _$mP._$2r(this._$hu);
        this._$nm.y = _$mP._$2U(this._$hu);
        this._$nn.x = this._$nm.x;
        this._$nn.y = this._$nm.y;
        if (DSXDFUtil._$jo) {
            this._$nn.width = this._$hu.width + this.m_B[0] + this.m_B[2];
            this._$nn.height = this._$hu.height + this.m_B[1] + this.m_B[3];
        } else {
            this._$nn.width = parseInt(this._$hu.style.width) + this.m_B[0] + this.m_B[2];
            this._$nn.height = parseInt(this._$hu.style.height) + this.m_B[1] + this.m_B[3];
        }
        ;this._$nm.x = pt.x;
        this._$nm.y = pt.y;
    }
}
_$6M.prototype._$n5 = function (e) {
    if (!this._$iN) return;
    if (this._$kv < 0) return;
    var _$qf = new _$5i();
    _$mP._$2L(e, _$qf);
    var rt = new _$5A();
    rt.x = this._$nn.x;
    rt.y = this._$nn.y;
    rt.width = this._$nn.width;
    rt.height = this._$nn.height;
    if (this._$kv == _$6M._$1y) rt.width = rt.width + _$qf.x - this._$nm.x; else if (this._$kv == _$6M._$7m) {
        rt.width = rt.width + this._$nm.x - _$qf.x;
    } else if (this._$kv == _$6M._$69) rt.height = rt.height + _$qf.y - this._$nm.y; else if (this._$kv == _$6M._$4M) {
        rt.height = rt.height + this._$nm.y - _$qf.y;
    } else if (this._$kv == _$6M._$7o) {
        rt.width = rt.width + this._$nm.x - _$qf.x;
        rt.height = rt.height + _$qf.y - this._$nm.y;
    } else if (this._$kv == _$6M._$7n) {
        rt.width = rt.width + this._$nm.x - _$qf.x;
        rt.height = rt.height + this._$nm.y - _$qf.y;
    } else if (this._$kv == _$6M._$1A) {
        rt.width = rt.width + _$qf.x - this._$nm.x;
        rt.height = rt.height + _$qf.y - this._$nm.y;
    } else {
        rt.width = rt.width + _$qf.x - this._$nm.x;
        rt.height = rt.height + this._$nm.y - _$qf.y;
    }
    ;this._$t0(_$qf, rt);
    if (this._$jC != null && !this._$jC._$S()) {
        this._$jC._$mv._$aL();
    }
    if (this._$kv >= 0) {
        if (this._$kv == _$6M._$7m || this._$kv == _$6M._$1y) {
            this._$hu.style.cursor = "e-resize";
        } else if (this._$kv == _$6M._$69 || this._$kv == _$6M._$4M) {
            this._$hu.style.cursor = "n-resize";
        } else if (this._$kv == _$6M._$7n) {
            this._$hu.style.cursor = "nw-resize";
        } else if (this._$kv == _$6M._$7o) {
            this._$hu.style.cursor = "sw-resize";
        } else if (this._$kv == _$6M._$1z) {
            this._$hu.style.cursor = "ne-resize";
        } else {
            this._$hu.style.cursor = "se-resize";
        }
    } else {
    }
}
_$6M.prototype._$t0 = function (_$qf, rt) {
    var _$8W = true;
    var _$95 = false;
    var _$96 = false;
    if (this._$kv == _$6M._$4M || this._$kv == _$6M._$69) _$8W = false;
    if (this._$jC != null) this._$jC._$bZ(rt.width, rt.height, _$ms, _$8W);
    if (this._$lU != null && this._$lU._$i5 != null && !this._$lU._$i5._$iW) {
        rt.width = _$ms.cx;
        rt.height = _$ms.cy;
    } else {
        if (rt.width < 100) {
            _$95 = true;
            rt.width = 100;
        }
        if (rt.height < 100) {
            rt.height = 100;
            _$96 = true;
        }
    }
    if (this._$kv == _$6M._$7m) {
        if (!_$95) {
            rt.x = this._$nn.x + _$qf.x - this._$nm.x;
        } else {
            rt.x = this._$nm.x + this._$nn.width - rt.width;
        }
    } else if (this._$kv == _$6M._$4M) {
        if (_$96) {
            rt.y = this._$nn.y + this._$nn.height - rt.height;
        } else rt.y = this._$nn.y + _$qf.y - this._$nm.y;
    } else if (this._$kv == _$6M._$7o) {
        if (_$95) {
            rt.x = this._$nm.x + this._$nn.width - rt.width;
        } else {
            rt.x = this._$nn.x + _$qf.x - this._$nm.x;
        }
    } else if (this._$kv == _$6M._$7n) {
        if (_$95) {
            rt.x = this._$nm.x + this._$nn.width - rt.width;
        } else rt.x = this._$nn.x + _$qf.x - this._$nm.x;
        if (_$96) {
            rt.y = this._$nn.y + this._$nn.height - rt.height;
        } else rt.y = this._$nn.y + _$qf.y - this._$nm.y;
    } else if (this._$kv == _$6M._$1z) {
        if (_$96) {
            rt.y = this._$nn.y + this._$nn.height - rt.height;
        } else rt.y = this._$nn.y + _$qf.y - this._$nm.y;
    }
    if (this._$lU != null) this._$lU._$rz(rt); else if (this._$lx != null) {
        this._$lx._$6B(rt.x, rt.y, rt.width, rt.height);
    } else if (this._$lM != null) {
        this._$lM._$6A(rt.x, rt.y, rt.width, rt.height);
    }
    if (this._$lU != null && this._$lU._$i5 != null && !this._$lU._$i5._$iW) {
        if (this._$jC == null) {
        }
        if (this._$jC != null) {
            this._$jC._$mr.cx = rt.width;
            this._$jC._$mr.cy = rt.height;
        }
    }
    if (this._$lU != null) {
        this._$lU._$t9();
        this._$lU._$r9();
    } else if (this._$lx != null) {
    }
}
_$6M.prototype._$ft = function (pt) {
    this._$kv = -1;
    var rt = new _$5A();
    rt.x = _$mP._$2r(this._$hu);
    rt.y = _$mP._$2U(this._$hu);
    if (DSXDFUtil._$jo) {
        rt.width = this._$hu.width + this.m_B[0] + this.m_B[2];
        rt.height = this._$hu.height + this.m_B[1] + this.m_B[3];
    } else {
        rt.width = parseInt(this._$hu.style.width) + this.m_B[0] + this.m_B[2];
        rt.height = parseInt(this._$hu.style.height) + this.m_B[1] + this.m_B[3];
    }
    if ((pt.x >= rt.x) && (pt.x < (rt.x + 7))) {
        if ((pt.y <= (rt.y + rt.height)) && (pt.y > (rt.y + rt.height - 7))) this._$kv = _$6M._$7o; else if ((pt.y >= rt.y) && (pt.y < (rt.y + 7))) this._$kv = _$6M._$7n; else this._$kv = _$6M._$7m;
    } else if ((pt.x <= (rt.x + rt.width)) && (pt.x > (rt.x + rt.width - 7))) {
        if ((pt.y <= (rt.y + rt.height)) && (pt.y > (rt.y + rt.height - 7))) this._$kv = _$6M._$1A; else if ((pt.y >= rt.y) && (pt.y < (rt.y + 7))) this._$kv = _$6M._$1z; else this._$kv = _$6M._$1y;
    }
    if ((pt.y >= rt.y) && (pt.y < (rt.y + 7))) {
        if ((pt.x >= rt.x) && (pt.x < (rt.x + 7))) this._$kv = _$6M._$7n; else if ((pt.x <= (rt.x + rt.width)) && (pt.x > (rt.x + rt.width - 7))) this._$kv = _$6M._$1z; else this._$kv = _$6M._$4M;
    } else if ((pt.y <= (rt.y + rt.height)) && (pt.y > (rt.y + rt.height - 7))) {
        if ((pt.x >= rt.x) && (pt.x < (rt.x + 7))) this._$kv = _$6M._$7o; else if ((pt.x <= (rt.x + rt.width)) && (pt.x > (rt.x + rt.width - 7))) this._$kv = _$6M._$1A; else this._$kv = _$6M._$69;
    }
}

function _$J(_$85) {
    _$J.baseConstructor.call(this, _$85);
    this._$lz;
    this._$lm = null;
    this.m_B = [0, 0, 0, 0];
}

_$bh._$bg(_$J, _$K);
_$J.prototype._$2d = function (_$qD) {
    if (this._$hz != null) {
        _$qD.left = _$mP._$2r(this._$hz);
        _$qD.top = _$mP._$2U(this._$hz);
        if (DSXDFUtil._$jo) {
            _$qD.right = this._$hz.width + _$qD.left + this.m_B[0] + this.m_B[2];
            _$qD.bottom = this._$hz.height + _$qD.top + this.m_B[1] + this.m_B[3];
        } else {
            _$qD.right = parseInt(this._$hz.style.width) + _$qD.left + this.m_B[0] + this.m_B[2];
            _$qD.bottom = parseInt(this._$hz.style.height) + _$qD.top + this.m_B[1] + this.m_B[3];
        }
    }
}
_$J.prototype._$3e = function (iX, iY) {
    var _$eT = _$mP._$2r(this._$hz);
    var _$gX = _$mP._$2U(this._$hz);
    var width, height;
    if (DSXDFUtil._$jo) {
        width = this._$hz.width;
        height = this._$hz.height;
    } else {
        width = parseInt(this._$hz.style.width);
        height = parseInt(this._$hz.style.height);
    }
    if ((iX >= _$eT) && (iX <= (_$eT + width)) && (iY >= _$gX) && (iY <= (_$gX + height))) return true;
    return false;
}
_$J.prototype.Add = function (com) {
    var _$ep = this._$hw.length;
    var i;
    var _$8S = false;
    for (i = 0; i < _$ep; i++) {
        if (this._$hw[i] == com) {
            _$8S = true;
            break;
        }
    }
    if (!_$8S) {
        this._$hw.push(com);
    }
    if (com instanceof _$1j) {
        com._$6r(this._$kn + 1);
    } else {
        com._$6r(this._$kn + 2);
    }
}
_$J.prototype._$e = function (com) {
    var v = 0;
}
_$J.prototype._$5L = function (com) {
    var _$ep = this._$hw.length;
    var i;
    for (i = 0; i < _$ep; i++) {
        if (this._$hw[i] == com) {
            this._$hw.splice(i, 1);
            break;
        }
    }
}
_$J.prototype._$X = function (_$u2) {
    this._$6D(this._$kn + _$u2);
}
_$J.prototype._$6D = function (_$u2) {
    this._$kn = _$u2;
    this._$7f();
}
_$J.prototype._$7f = function () {
    if (this._$hz != null) {
        _$mP._$6r(this._$hz, this._$kn);
        if (this._$hw != null) {
            var _$ep = this._$hw.length;
            var i;
            for (i = 0; i < _$ep; i++) {
                if (this._$hw[i] instanceof _$1j) {
                    this._$hw[i]._$6r(this._$kn + 1);
                } else {
                    this._$hw[i]._$6r(this._$kn + 2);
                }
            }
        }
    }
}
_$J.prototype._$2n = function () {
}
_$J._$0A = function (_$qu) {
    var _$oQ = new _$J(false);
    _$oQ._$m7 = new _$5i();
    _$oQ._$m7.x = _$qu.x;
    _$oQ._$m7.y = _$qu.y;
    _$oQ._$m4 = new _$16();
    _$oQ._$m4.width = _$qu.width;
    _$oQ._$m4.height = _$qu.height;
    return _$oQ;
}
_$J.prototype._$0y = function (_$no) {
    var sp = new _$6M(_$no);
    sp._$lx = this;
    this._$hz = sp._$hu;
    this.m_B = _$mP._$26(sp._$hu);
    this.setVisible(false);
    this._$hC = sp._$hu;
    this._$iV = true;
    this._$kc[1] = this.m_B[1] + 6;
    this._$kc[3] = this.m_B[3] + 6;
    this._$kc[0] = this.m_B[0] + 6;
    this._$kc[2] = this.m_B[2] + 6;
    this._$mg.bottom = this._$mg.top;
    return true;
}
_$J.prototype._$gh = function () {
    if (this._$hz != null && _$mP._$3S(this._$hz)) return true;
    return false;
}
_$J.prototype.setVisible = function (_$8t) {
    _$mP._$3h(this._$hz, _$8t);
}
_$J.prototype._$o = function (_$bq) {
    this._$iW = true;
    this._$iV = true;
    this._$lz = _$bq._$lH._$lz;
    this._$lm = _$bq._$lH;
    this._$lm._$mY(this);
    var _$8E = false;
    if (this._$hz != null) {
        var _$9d = false;
    }
    if (this._$hz == null || (this._$hz != null && !this._$gh())) {
        if (this._$lC == null) this._$lC = _$bq._$lo;
        this._$0y(DSXDFUtil._$hQ);
        _$8E = true;
        this._$7f();
    }
    ;this.Add(_$bq);
    this._$lr = _$bq;
    if (_$8E) {
    }
    _$bq._$li = this;
    this._$1d(_$bq, null);
    if (!this._$gh()) {
        if (this._$m4 == null) {
            this._$m4 = new _$16();
            this._$m4.width = _$bq._$mr.cx;
            this._$m4.height = _$bq._$mr.cy;
            this._$m7 = new _$5i();
            this._$m7.x = _$bq._$ma.x;
            this._$m7.y = _$bq._$ma.y;
        } else {
            _$bq._$ma.x = this._$m7.x;
            _$bq._$ma.y = this._$m7.y;
            _$bq._$mr.cx = this._$m4.width;
            _$bq._$mr.cy = this._$m4.height;
        }
        var pt = new _$5i();
        pt.x = _$bq._$ma.x;
        pt.y = _$bq._$ma.y;
        if (pt.y < 0) pt.y = 0;
        this.setVisible(true);
        this._$6B(pt.x, pt.y, _$bq._$mr.cx, _$bq._$mr.cy);
    }
    if (_$bq._$lh != null && _$bq._$lh._$oG != null) _$bq._$lh._$oG._$5G();
    if (!_$8E) {
        if (this._$4B(null, true)) this._$7C();
    }
}
_$J.prototype._$6B = function (_$dn, _$dZ, _$e1, _$dh) {
    _$mP._$6s(this._$hz, _$dn, _$dZ);
    if (DSXDFUtil._$jo) {
        this._$hz.width = _$e1 - this.m_B[0] - this.m_B[2];
        this._$hz.height = _$dh - this.m_B[1] - this.m_B[3];
    } else {
        this._$hz.style.width = _$e1 - this.m_B[0] - this.m_B[2] + "px";
        this._$hz.style.height = _$dh - this.m_B[1] - this.m_B[3] + "px";
    }
    ;this._$nf(_$dn + this._$kc[0], _$dZ, _$e1 - this._$kc[0] - this._$kc[2], _$dh);
}
_$J.prototype._$14 = function () {
    _$mP._$5P(DSXDFUtil._$hQ, this._$hz);
    this._$hz = null;
    this._$lm._$mZ(this);
    var cnt = this._$hw.length;
    var i;
    for (i = 0; i < cnt; i++) {
        if ((this._$hw[i] instanceof _$N) || (this._$hw[i] instanceof _$1q)) {
            _$mP._$5P(DSXDFUtil._$hQ, this._$hw[i]._$hu);
        }
    }
    ;this._$hX[1] = null;
}
_$J.prototype._$02 = function () {
    if (this._$iW) {
        var _$pW = this._$m0[0]._$hS._$m2[0];
        if (!_$pW._$jt) {
            this._$m7.x = _$mP._$2r(this._$hz);
            this._$m7.y = _$mP._$2U(this._$hz);
            if (DSXDFUtil._$jo) {
                this._$m4.width = this._$hz.width;
                this._$m4.height = this._$hz.height;
            } else {
                this._$m4.width = parseInt(this._$hz.style.width);
                this._$m4.height = parseInt(this._$hz.style.height);
            }
            ;this._$14();
        }
    } else this._$14();
}
_$J.prototype._$5b = function (_$nI) {
    _$K.prototype._$5b.call(this, _$nI);
}

function _$5a(_$85) {
    _$5a.baseConstructor.call(this, _$85);
    this._$iV = true;
}

_$bh._$bg(_$5a, _$E);
_$5a.prototype.Add = function (com) {
    var i = 0;
    if (com instanceof _$1j) {
        com._$6r(2);
    } else {
        com._$6r(3);
    }
}
_$5a.prototype._$e = function (com) {
    var i = 0;
    if (com instanceof _$1j) {
        com._$6r(2);
    } else {
        com._$6r(3);
    }
}
_$5a.prototype._$5L = function (com) {
}
_$5a.prototype._$2n = function () {
}

function DSXDFPanel() {
}

DSXDFPanel.dockLeft = 0;
DSXDFPanel.dockTop = 1;
DSXDFPanel.dockRight = 2;
DSXDFPanel.dockBottom = 3;
DSXDFPanel.floated = 4;
DSXDFPanel.tabbed = 4;
DSXDFPanel.LEFT_DOCK_MASK = 0x01;
DSXDFPanel.TOP_DOCK_MASK = 0x02;
DSXDFPanel.RIGHT_DOCK_MASK = 0x04;
DSXDFPanel.BOTTOM_DOCK_MASK = 0x08;
DSXDFPanel.HIDDEN_DISABLED = 0;
DSXDFPanel.HIDDEN_AUTO_HIDE = 1;
DSXDFPanel.HIDDEN_IN_TAB = 2;
DSXDFPanel.HIDDEN_IN_NORMAL = 3;

function DSXDFUtil() {
    this._$ix = "5.6";
    this._$iu = 1000;
    this._$i3 = new _$5i();
    this._$iC = true;
    this._$j8 = false;
}

DSXDFUtil._$cI = function () {
    return this._$ix;
}
DSXDFUtil._$lu = new Array();
DSXDFUtil._$iX = false;
DSXDFUtil._$jp = true;
DSXDFUtil._$0U = 0;
DSXDFUtil._$0W = 1;
DSXDFUtil._$0V = 2;
DSXDFUtil._$hQ = "";
DSXDFUtil._$jP = 0;
DSXDFUtil._$jo = true;
DSXDFUtil._$3A = 0;
DSXDFUtil._$1J = 1;
DSXDFUtil._$I = 2;
DSXDFUtil._$64 = 3;
DSXDFUtil._$4O = 4;
DSXDFUtil.fixedLeft = 0;
DSXDFUtil.fixedTop = 1;
DSXDFUtil.fixedRight = 2;
DSXDFUtil.fixedBottom = 3;
DSXDFUtil.fixedCenter = 4;
DSXDFUtil.LOCAL_STORAGE = 0;
DSXDFUtil.SESSION_STORAGE = 1;
DSXDFUtil.ALL_DSXDFPanel = 0;
DSXDFUtil.Float_DSXDFPanel = 1;
DSXDFUtil.Hidden_DSXDFPanel = 2;
DSXDFUtil.Hidden_AUTO_DSXDFPanel = 3;
DSXDFUtil._$jF = null;
DSXDFUtil._$lG = null;

function _$7v(e) {
    var vp = DSXDFUtil._$lG;
    if (vp != null) {
        if (e == null) {
            e = window.event;
        }
        vp._$n4(e);
        return false;
    }
}

function _$7y(e) {
    var vp = DSXDFUtil._$lG;
    if (vp == null) return;
    if (e == null) {
        e = window.event;
    }
    vp._$na(e);
}

function _$7x(e) {
    var vp = DSXDFUtil._$lG;
    if (vp == null) return;
    if (e == null) {
        e = window.event;
    }
}

function _$7w(e) {
    var vp = DSXDFUtil._$lG;
    var x, y;
    if (e == null) {
        e = window.event;
    }
    x = e.x;
    y = e.y;
    _$mP._$2L(e, DSXDFUtil._$jF._$i3);
    if (vp != null) vp._$n7(e);
    return false;
}

DSXDFUtil._$ge = function (_$9S) {
    if ((_$9S != 0 && !DSXDFUtil._$iX && DSXDFUtil._$jP != 0) || (_$9S != 1 && DSXDFUtil._$iX) || (DSXDFUtil._$jP == 0 && DSXDFUtil._$ki >= 9 && _$9S != 0)) {
        return false;
    }
    return true;
}
DSXDFUtil.prototype._$1C = function (_$88) {
    this._$iC = _$88;
}
DSXDFUtil.prototype.createDFPanel = function (_$9Z, sID) {
    return new _$1j(DSXDFUtil._$lG, _$9Z, sID);
}
DSXDFUtil.prototype._$a9 = function () {
    DSXDFUtil._$lG._$0i();
}
DSXDFUtil.prototype.setTimeForAutoHide = function (_$du) {
    this._$iu = _$du;
}
DSXDFUtil._$6E = function (_$8n) {
    if (DSXDFUtil._$jp) DSXDFUtil._$lG._$6E(_$8n);
}
DSXDFUtil.prototype.saveStatesIntoKey = function (_$rh, _$dX) {
    var _$pi = new _$4I("MyInfo");
    DSXDFUtil._$lG._$6e("tmp", _$pi);
    var st;
    if (_$dX == 0) st = window['localStorage']; else st = window['sessionStorage'];
    if (st != null) {
        st.setItem(_$rh, _$pi._$1Y());
    }
}
DSXDFUtil.prototype.saveStatesIntoString = function () {
    var _$pi = new _$4I("MyInfo");
    DSXDFUtil._$lG._$6e("tmp", _$pi);
    return _$pi._$1Y();
}
DSXDFUtil.prototype.loadStatesFromString = function (_$rk) {
    var pin = new _$4E(_$t7);
    DSXDFUtil._$lG._$47(pin);
}
DSXDFUtil.prototype.loadStatesFromKey = function (_$rh, _$dX) {
    var vst;
    if (_$dX == 0) vst = window['localStorage']; else vst = window['sessionStorage'];
    if (vst != null) {
        var _$t7 = vst.getItem(_$rh);
        if (_$t7 != null) {
            var pin = new _$4E(_$t7);
            DSXDFUtil._$lG._$47(pin);
        }
    }
}
DSXDFUtil.prototype._$19 = function () {
    DSXDFUtil._$lG._$jh = true;
}
DSXDFUtil.prototype.getAutoHideDSXDFPanels = function (_$dS) {
    if (DSXDFUtil._$lG._$c1 != undefined) {
        return DSXDFUtil._$lG._$c1(_$dS);
    }
    return null;
}
DSXDFUtil.prototype.getDSXDFPanels = function (_$db) {
    if (_$db == DSXDFUtil.ALL_DSXDFPanel) {
        if (DSXDFUtil._$lG._$bY != undefined) {
            return DSXDFUtil._$lG._$bY();
        }
        return null;
    } else if (_$db == DSXDFUtil.Float_DSXDFPanel) {
        if (DSXDFUtil._$lG._$bW != undefined) {
            return DSXDFUtil._$lG._$bW();
        }
        return null;
    } else if (_$db == DSXDFUtil.Hidden_DSXDFPanel) {
        if (DSXDFUtil._$lG._$bX != undefined) {
            return DSXDFUtil._$lG._$bX();
        }
        return null;
    } else if (_$db == DSXDFUtil.Hidden_AUTO_DSXDFPanel) {
        if (DSXDFUtil._$lG._$bV != undefined) {
            return DSXDFUtil._$lG._$bV();
        }
    }
    return null;
}
DSXDFUtil.prototype.addFixedPanel = function (_$tg, _$tI) {
    DSXDFUtil._$lG._$7E(_$tg, _$tI);
}
DSXDFUtil.prototype._$fs = function (_$rd) {
    if (this._$j8) return;
    this.addFixedPanel(document.getElementById(_$rd), DSXDFUtil.fixedCenter);
    this._$j8 = true;
    var vdf = document.getElementsByTagName('div');
    var c = vdf.length;
    var d = [];
    for (var m = 0; m < c; m++) {
        if (vdf[m].className == 'dsxdfPanel') {
            var dfw = this.createDFPanel(vdf[m].title, "mydfa");
            dfw.addContentDiv(document.getElementById(vdf[m].id));
        }
    }
}
DSXDFUtil.prototype._$ca = function (sID) {
    return DSXDFUtil._$lG._$2g(sID);
}
DSXDFUtil.createDSXDFUtil = function () {
    if (DSXDFUtil._$jF != null) return DSXDFUtil._$jF;
    DSXDFUtil._$jF = new DSXDFUtil();
    _$11 = DSXDFUtil._$jF;
    var _$t1 = navigator.userAgent;
    var _$tv = document.createElement("div");
    document.body.appendChild(_$tv);
    _$tv.id = "dsx_dummyid";
    if (_$t1.indexOf("Firefox") != "-1") DSXDFUtil._$jP = 1;
    if (_$t1.indexOf("MSIE") != "-1") {
        DSXDFUtil._$jP = 0;
        DSXDFUtil._$ki = 9;
        var k = _$t1.indexOf("MSIE") + 4;
        var _$sl = _$t1.slice(k, _$t1.length);
        k = _$sl.indexOf(".");
        if (k >= 0) {
            _$sl = _$sl.substr(0, k);
            DSXDFUtil._$ki = parseInt(_$sl);
        }
    }
    if (_$t1.indexOf("Chrome") != "-1") {
        DSXDFUtil._$jP = 2;
        document.addEventListener('mousewheel', function (e) {
            return false;
        }, false);
    } else if (_$t1.indexOf("Safari") != "-1") DSXDFUtil._$jP = 3; else if (_$t1.indexOf("Opera") != "-1") {
        DSXDFUtil._$jP = 4;
    } else {
        if (_$t1.indexOf(".NET") >= 0) {
            if (_$t1.indexOf("rv:") >= 0) {
                DSXDFUtil._$ki = 11;
            }
        }
    }
    DSXDFUtil._$hQ = _$tv.id;
    DSXDFUtil._$mR();
    if (DSXDFUtil._$lG == null) {
        DSXDFUtil._$lG = new _$1g(null, "MyWindow");
        if (DSXDFUtil._$iX) {
            document.body.onmousedown = _$7v;
            document.body.onmousemove = _$7w;
            document.body.onmouseup = _$7y;
        } else {
            if (DSXDFUtil._$jP == 0 && DSXDFUtil._$ki <= 8) {
                var vro = document.body;
                vro.attachEvent("onmousedown", _$7v);
                vro.attachEvent("onmouseup", _$7y);
                vro.attachEvent("onmousemove", _$7w);
            } else {
                document.body.addEventListener("mousedown", _$7v, true);
                document.body.addEventListener("mouseup", _$7y, true);
                document.body.addEventListener("mousemove", _$7w, true);
            }
        }
    }
    DSXDFUtil._$jo = !!document.createElement('canvas').getContext;
    DSXDFUtil._$i0 = "";
    if (!DSXDFUtil._$jo || _$11._$iC) {
        var _$tF = document.getElementsByTagName('script');
        if (_$tF != null) {
            var _$tE = _$tF.length;
            var i;
            for (i = 0; i < _$tE; i++) {
                var _$tG = _$tF[i].src;
                var _$ti = _$tG.indexOf("widgetDock.js");
                if (_$ti >= 0) {
                    DSXDFUtil._$i0 = _$tG.substr(0, _$ti);
                    DSXDFUtil._$i0 += "../../"
                    break;
                }
            }
        }
    }
    return DSXDFUtil._$jF;
}
DSXDFUtil._$07 = function (fID) {
    var va = DSXDFUtil._$lu;
    var _$ep = va.length;
    var i;
    for (i = 0; i < _$ep; i++) {
        if (va[i] == fID) {
            va.splice(i, 1);
            return true;
        }
    }
    return false;
}
DSXDFUtil.initIFrame = function (fID) {
    if (DSXDFUtil._$jF == null) DSXDFUtil.createDSXDFUtil();
    var vf = document.getElementById(fID);
    try {
        vf.contentWindow.document._$mO = vf;
    } catch (err) {
        {
            if (DSXDFUtil._$jp) {
                if (DSXDFUtil._$lG == null) {
                    DSXDFUtil._$lu.push(fID);
                } else {
                    var _$8O = DSXDFUtil._$lG._$rT(fID);
                    if (!_$8O) {
                        DSXDFUtil._$lu.push(fID);
                    }
                }
            }
            return;
        }
    } finally {
        var s = 0;
    }
    if (DSXDFUtil._$iX) {
        var _$ty = "iFrameDynmicDNEvent" + fID;
        var _$tm = "function " + _$ty + "(){  var vp = DSXDFUtil.m_pPanel;var vf=document.getElementById('" + fID + "');var e = vf.contentWindow.event; vp.onMouseDown(e); }";
        eval(_$tm);
        vf.contentWindow.document.onmousedown = eval(_$ty);
        _$ty = "iFrameDynmicUPEvent" + fID;
        _$tm = "function " + _$ty + "(){  var vp = DSXDFUtil.m_pPanel;var vf=document.getElementById('" + fID + "');var e = vf.contentWindow.event;  vp.onMouseUp(e); }";
        eval(_$tm);
        vf.contentWindow.document.onmouseup = eval(_$ty);
        _$ty = "iFrameDynmicMOVEEvent" + fID;
        _$tm = "function " + _$ty + "(){ var vp = DSXDFUtil.m_pPanel; var vf=document.getElementById('" + fID + "');var e = vf.contentWindow.event;  vp.onMouseMoved(e); }";
        eval(_$tm);
        vf.contentWindow.document.onmousemove = eval(_$ty);
    } else {
        if ((vf.contentWindow.attachEvent != null) && DSXDFUtil._$ki >= 7 && DSXDFUtil._$ki <= 8) {
            var vro = vf.contentWindow.document;
            vro.attachEvent("onmousedown", _$7v);
            vro.attachEvent("onmouseup", _$7y);
            vro.attachEvent("onmousemove", _$7w);
            return;
        }
        vf.contentWindow.addEventListener("mousemove", _$7w, true);
        vf.contentWindow.addEventListener("mouseup", _$7y, true);
        vf.contentWindow.addEventListener("mousedown", _$7v, true);
    }
}
DSXDFUtil._$mR = function () {
    document.body.scroll = "no";
    document.body.style.overflow = 'hidden';
}
DSXDFUtil._$2M = function (rc) {
    var iw = 0;
    var ih = 0;
    if (window.innerHeight) {
        iw = window.innerWidth;
        ih = window.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) {
        ih = document.documentElement.clientHeight;
        iw = document.documentElement.clientWidth;
    } else {
        iw = document.body.clientWidth;
        ih = document.body.clientHeight;
    }
    rc.x = 0;
    rc.y = 0;
    rc.width = iw;
    rc.height = ih;
}
DSXDFUtil._$3L = function () {
}
var _$11;

function _$1q(sID) {
    this._$bA = null;
    this._$iA = true;
    this._$jj = false;
    this._$mn = "";
    this._$lc = 0;
    this._$hW = null;
    this._$hA = null;
    this._$md = new _$4F();
    this._$mh = new _$4F();
    this._$im = new _$5i();
    this._$hW = "12px sans-serif";
    this._$hv = null;
    this._$ii = null;
    this._$hx = null;
    this.m_B = [0, 0, 0, 0];
    this._$i8 = [0, 0, 0, 0];
    this._$iz = [0, 0, 0, 0];
    this._$kA = 0;
    this._$kz = 0;
    this._$l3 = 0;
    this._$l5 = 0;
    this._$kt = _$1q._$0X;
    this._$ks = _$1q._$0X + _$1q._$0X;
    this._$ke = this._$kt;
    this._$hE = null;
    if (DSXDFUtil._$jo && !_$11._$iC) {
        this._$hu = _$mP._$0C("canvas", DSXDFUtil._$hQ);
        this._$hu.className = sID + "Title";
        this._$hE = this._$hu.getContext("2d");
    } else {
        this._$hu = _$mP._$0C("div", DSXDFUtil._$hQ);
        this._$hv = _$mP._$0w("div", this._$hu);
        this._$hv.className = sID + "Title";
        ;this._$hW = _$mP._$cB(this._$hv);
        this._$hv._$4C = this;
        this._$hv.onmousedown = _$1q._$18;
        this._$hv.onmousemove = _$1q._$17;
        if (_$11._$iC) {
            this.m_B = _$mP._$26(this._$hv);
            var h = _$mP._$cD(this._$hv, "height");
            var vth = h + this.m_B[1] + this.m_B[3];
            if (vth >= this._$kt && vth <= this._$ks) {
                this._$ke = h;
            } else if (vth < this._$kt) {
                this._$ke = this._$kt - this.m_B[1] - this.m_B[3];
            } else {
                this._$ke = this._$ks - this.m_B[1] - this.m_B[3];
            }
            if (this._$ke < 0) this._$ke = 0;
        }
    }
    ;this._$iw = 'buttonText';
    if (DSXDFUtil._$jP == 4) {
        this._$iw = 'black';
    }
    _$mP._$6z(this._$hu, 10, this._$ke + this.m_B[1] + this.m_B[3], !_$11._$iC);
    this._$hu._$4C = this;
    this._$hu.onmousedown = _$1q._$4p;
    this._$hu.onmousemove = _$1q._$4o;
    this._$hu._$ni = _$1q._$mU;
    this._$hu.onmouseout = _$1q._$n8;
}

_$1q._$0X = 20;
_$1q._$hy = null;
_$1q._$56 = 4;
_$1q._$jB = new _$16();
_$1q.prototype._$6A = function (_$dn, _$dZ, _$e1, _$dh) {
    _$mP._$6s(this._$hu, _$dn, _$dZ);
    _$mP._$6z(this._$hu, _$e1, _$dh, !_$11._$iC);
    this._$r9();
}
_$1q.prototype._$ba = function () {
    if (this._$Z != undefined) {
        this._$Z();
    }
}
_$1q.prototype.setVisible = function (_$8t) {
    _$mP._$3h(this._$hu, _$8t);
    if (this._$hE == null) {
        _$mP._$3h(this._$hv, _$8t);
        _$mP._$3h(this._$ii, _$8t);
        if (this._$bA._$cR()) _$mP._$3h(this._$hx, _$8t);
    }
}
_$1q.prototype._$cj = function () {
    return this._$hW;
}
_$1q._$18 = function (e) {
    return false;
}
_$1q._$17 = function (e) {
    return false;
}
_$1q._$4p = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (DSXDFUtil._$jP == 1) e.target._$4C._$n9(e); else e.srcElement._$4C._$n9(e);
    return false;
}
_$1q._$4o = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (DSXDFUtil._$jP == 1) e.target._$4C._$n7(e); else e.srcElement._$4C._$n7(e);
    return false;
}
_$1q._$mU = function (e) {
    return false;
}
_$1q._$n8 = function (e) {
    return true;
}
_$1q.prototype._$n9 = function (e) {
    if (this._$jj) return;
    if (!DSXDFUtil._$ge(e.button)) return; else {
        this._$jj = true;
        if (_$1g._$i6 != null && _$1g._$i6 != this) {
            if (_$1g._$i6 instanceof _$1q) {
                _$1g._$i6._$jj = false;
            }
        }
        _$1g._$i6 = this;
        var pt = new _$5i();
        _$mP._$2L(e, pt);
        if (this._$mW(pt) >= 0) {
            DSXDFUtil._$6E(true);
            this._$n5(e);
        } else {
            this._$jj = false;
        }
    }
}
_$1q.prototype._$gh = function () {
    return true;
}
_$1q.prototype._$2X = function (rc) {
    rc.left = _$mP._$2r(this._$hu);
    rc.top = _$mP._$2U(this._$hu);
    rc.right = rc.left + _$mP._$2W(this._$hu, !_$11._$iC);
    rc.bottom = rc.top + _$mP._$2o(this._$hu, !_$11._$iC);
}
_$1q.prototype._$na = function (e) {
    if (!this._$gh()) return;
    if (!this._$jj) return;
    if (!DSXDFUtil._$ge(e.button)) {
        this._$jj = false;
        this._$T();
        return;
    }
    var _$qb = new _$5i();
    _$mP._$2L(e, _$qb);
    this._$jj = false;
    DSXDFUtil._$6E(false);
    if (this._$bA._$kD == _$1j._$78) {
        this._$bA._$5X();
    }
    ;this._$bA._$1D(_$qb);
}
_$1q.prototype._$gc = function () {
    return false;
}
_$1q.prototype._$0x = function () {
}
_$1q.prototype._$b = function (tab) {
    this._$0x();
    this._$bA._$fA(_$hA, _$x._$69);
    _$hA._$rX(new _$16(150, _$G._$6W + _$bA._$k7));
}
_$1q.prototype._$12 = function (_$nv) {
    var _$7R = new _$D();
    _$nv._$2Y(_$7R);
    var ic = _$7R._$2e();
    var _$px = new Array(ic);
    var _$h4 = 0;
    var i;
    for (i = 0; i < ic; i++) {
        if (_$7R._$m2[i]._$gh()) {
            _$px[_$h4] = _$7R._$m2[i];
            _$h4++;
        }
    }
    for (i = 0; i < ic; i++) {
        if (_$7R._$m2[i] != _$bA) _$7R._$m2[i]._$5l(); else _$7R._$m2[i]._$4U();
    }
    for (i = 0; i < _$h4; i++) {
        if (!_$px[i]._$gh()) _$px[i].setVisible(true);
    }
}
_$1q.prototype._$4U = function () {
    if (_$bA._$S()) {
        var pb = _$bA._$lh;
        if (pb._$oG != null && pb._$oG._$iv.length > 1) {
            _$12(_$bA._$lh);
        } else this._$bA._$4U();
    } else this._$bA._$4U();
}
_$1q.prototype._$T = function () {
    this._$bA._$T();
}
_$1q.prototype._$a1 = function () {
    if (this._$jj) {
        this._$jj = false;
        this._$bA._$T();
    }
}
_$1q.prototype._$08 = function (e, key) {
    var _$hl;
    if (e == null) {
        _$hl = window.event._$hk;
    } else {
        _$hl = e._$tU;
    }
    if (_$hl == key) {
        return true;
    }
    return false;
}
_$1q.prototype._$n0 = function (e) {
    if (_$jj && _$08(e, 27)) {
        _$jj = false;
        _$bA._$T();
    } else if (_$jj && _$08(e, 17)) {
        _$bA._$mS();
    }
}
_$1q.prototype._$n1 = function (e) {
    if (_$jj && _$08(e, 17)) {
        _$bA._$mT();
    }
}
_$1q.prototype._$n7 = function (e) {
    if (!this._$jj) {
        var _$a3 = _$mP._$2r(this._$hu);
        var _$a4 = _$mP._$2U(this._$hu);
        var _$aj = new _$5i();
        _$mP._$2L(e, _$aj);
        _$aj.x = _$aj.x - _$a3;
        _$aj.y = _$aj.y - _$a4;
        if (this instanceof _$4l) {
            if (_$E._$5n(this._$md, _$aj)) {
                this._$hu.style.cursor = "default";
            } else {
                this._$hu.style.cursor = "move";
            }
            return;
        }
        if (!this._$bA._$gf()) {
            return;
        }
        if (this._$bA._$kD == _$1j._$78) return;
        if ((this._$bA._$kD != _$1j._$4L && _$E._$5n(this._$mh, _$aj)) || (_$E._$5n(this._$md, _$aj))) {
            this._$hu.style.cursor = "default";
        } else {
            this._$hu.style.cursor = "move";
        }
    }
}
_$1q.prototype._$mW = function (pt) {
    if (this._$bA._$m6 != null) {
        this._$bA._$m6._$rb();
    } else {
    }
    var _$a3 = _$mP._$2r(this._$hu);
    var _$a4 = _$mP._$2U(this._$hu);
    var _$aj = new _$5i();
    _$aj.x = pt.x - _$a3;
    _$aj.y = pt.y - _$a4;
    if (this._$bA._$kD != _$1j._$4L && _$E._$5n(this._$mh, _$aj)) {
        this._$bA._$0k();
        return -1;
    }
    if ((this._$bA != null) && (this._$bA._$kD == _$1j._$78)) {
        if (!_$E._$5n(this._$md, _$aj)) {
            if (this._$bA._$iP) {
            } else {
                return -1;
            }
        }
    }
    if (_$E._$5n(this._$md, _$aj)) {
        this._$bA._$ab();
        return -1;
    }
    if (!this._$bA._$gf()) {
        return -2;
    }
    _$1j._$k5 = _$1j._$0Y;
    return this._$bA._$50(pt);
}
_$1q.prototype._$n5 = function (e) {
    if (!this._$jj) return;
    var pt = new _$5i();
    _$mP._$2L(e, pt);
    this._$bA._$4r(pt);
}
_$1q.prototype._$rM = function (_$bR) {
    this._$bA = _$bR;
}
_$1q.prototype._$rw = function (_$7V) {
    this._$iA = _$7V;
    this._$r9();
}
_$1q.prototype._$s0 = function (_$rn) {
    if (_$rn != null) this._$mn = _$rn; else this._$mn = "";
    this._$s2(_$rn);
    this._$r9();
}
_$1q.prototype._$s2 = function (_$rm) {
}
_$1q.prototype._$cF = function () {
    return this._$mn;
}
_$1q.prototype._$cx = function () {
    if (this._$bA == null) return null;
    if (this._$bA._$jT == _$1j._$0) {
        if (this._$bA._$lo._$k2 == DSXDFUtil._$0U) {
            if (_$11._$iC) {
                _$1q._$jB.width = 130;
                _$1q._$jB.height = this._$ke + this.m_B[1] + this.m_B[3];
            } else {
                _$1q._$jB.width = 130;
                _$1q._$jB.height = this._$bA._$k7;
            }
        } else {
            var _$9M = this._$bA._$cc();
            if (this._$bA._$li != null && this._$bA._$li._$iK) {
                if (_$9M == _$E._$3s || _$9M == _$E._$3t) {
                    _$1q._$jB.width = 130;
                    _$1q._$jB.height = this._$bA._$k7;
                } else {
                    _$1q._$jB.width = this._$bA._$k7;
                    _$1q._$jB.height = 130;
                }
            } else {
                _$1q._$jB.width = 130;
                _$1q._$jB.height = this._$bA._$k7;
            }
        }
    } else {
        if (this._$bA._$jT == _$1j._$40 || this._$bA._$jT == _$1j._$5r) {
            _$1q._$jB.width = this._$bA._$k7;
            _$1q._$jB.height = 130;
        } else {
            _$1q._$jB.width = 130;
            _$1q._$jB.height = this._$bA._$k7;
        }
    }
    return _$1q._$jB;
}
_$1q.prototype._$on = function (_$8h, ix, iy, _$e1, _$dh, g, _$8d) {
    if (this._$hE == null) {
        return;
    }
    {
        this._$hE.fillStyle = 'ActiveCaption';
        if (DSXDFUtil._$jP == 4) {
            this._$hE.fillStyle = '#d0d0d0';
        }
    }
    var _$9y = "Demo";
}
_$1q.prototype._$r9 = function () {
    var si = new _$4F();
    this._$2X(si);
    var _$te = 0;
    var _$tk = 0;
    var iw = si.right - si.left;
    var ih = si.bottom - si.top;
    if (this._$hE == null && this._$ii == null) {
        this._$ii = _$mP._$0w("div", this._$hu);
        this._$ii.className = this._$bA.sID + "Pin";
        this._$i8 = _$mP._$26(this._$ii);
        this._$ii.style.backgroundImage = "url(" + DSXDFUtil._$i0 + "img/widget/widgetDock/dock_pinned.gif)";
        this._$ii.style.backgroundPosition = 'center';
        this._$ii._$4C = this;
        this._$hx = _$mP._$0w("div", this._$hu);
        this._$hx.className = this._$bA.sID + "Close";
        this._$iz = _$mP._$26(this._$hx);
        this._$hx._$4C = this;
        this._$hx.style.backgroundImage = "url(" + DSXDFUtil._$i0 + "img/widget/widgetDock/dock_close.gif)";
        this._$hx.style.backgroundPosition = 'center';
    }
    ;this._$kz = _$mP._$cD(this._$ii, "height");
    this._$kA = _$mP._$cD(this._$ii, "width");
    if (this._$kA == 0) {
        this._$kA = ih - this._$i8[0] - this._$i8[2];
        if (this._$kA < 0) this._$kA = 0;
    }
    ;this._$l3 = _$mP._$cD(this._$hx, "height");
    this._$l5 = _$mP._$cD(this._$hx, "width");
    if (this._$kz == 0) {
        this._$kz = ih - this.m_B[1] - this.m_B[3] - this._$i8[1] - this._$i8[3];
        if (this._$kz < 0) this._$kz = 0;
    }
    if (this._$l5 == 0) {
        this._$l5 = ih - this._$iz[0] - this._$iz[2];
        if (this._$l5 < 0) this._$l5 = 0;
    }
    if (this._$l3 == 0) {
        this._$l3 = ih - this._$iz[1] - this._$iz[3];
        if (this._$l3 < 0) this._$l3 = 0;
    }
    var _$eL;
    var _$fS;
    var _$8I = true;
    var _$9k = this._$6L();
    if (this._$bA._$lo._$k2 == DSXDFUtil._$0W) {
        if ((this._$bA._$jT >= _$1j._$0) && _$9k) _$8I = true; else _$8I = false;
    }
    var _$ez = this._$bA._$jw;
    if (this._$bA._$jT < _$1j._$0) {
        _$ez = this._$bA._$jT;
        if (_$ez == _$1j._$40 || _$ez == _$1j._$5r) {
            _$ez = _$1j._$6X;
        } else _$ez = _$1j._$40;
    }
    var _$8W = false;
    if (this._$bA._$jT >= _$1j._$0 && (this._$bA._$lo._$k2 == DSXDFUtil._$0U || _$9k)) {
        _$8W = true;
    } else if (_$ez == _$1j._$40 || _$ez == _$1j._$5r) _$8W = true;
    if (_$8W) {
        _$eL = ih - 2;
        _$fS = ih - 2;
        if (this._$bA._$kD == _$1j._$4L) _$fS = 0;
        if (!this._$bA._$cR()) _$eL = 0;
        if (_$8I) this._$aT(iw, ih, _$9k, _$ez); else {
            var _$ad = _$77._$c5("ToolBar.background");
            g._$rC(_$ad);
            g.fillRect(0, 0, si.width, si.height);
            si.width -= (_$eL + _$fS);
            if (_$eL != 0) si.width -= _$1q._$56; else si.width -= 2;
            _$aU(si, _$ez);
            if (_$fS > 0) {
                this._$mh.left = si.width;
                this._$mh.right = _$mh.left + _$fS;
                this._$mh.top = si.y + 3;
                this._$mh.bottom = si.height - 3;
                this._$aW(this._$mh, _$bA._$kD, false);
            }
            si.width += _$eL + _$fS;
            if (_$eL != 0) si.width += _$1q._$56; else si.width += 2;
            if (_$eL != 0) _$aS(si, _$ez);
        }
    } else {
        _$eL = si.width;
        _$fS = si.width - 3;
        var _$fI = si.width;
        var _$fH = si.height;
        var _$g8 = 0;
        if (_$bA._$kD == _$1j._$4L) _$fS = 0;
        if (!_$bA._$cR()) _$eL = 0;
        _$g8 = (_$eL + _$fS);
        if (_$eL != 0 && _$fS != 0) _$g8 += _$1q._$56; else if (_$eL == 0) _$g8 += 2;
        si.y += _$g8;
        si.height -= _$g8;
        var dt = new _$16();
        var _$sk = _$cb(false);
        var _$ea = new Array(1);
        _$mP._$2T(dt, this._$cj(), _$sk, this._$hE);
        _$sk = _$E._$6K(this._$cj(), _$sk, si.height, dt.width, _$G._$37, 0, this._$hE);
        if (!_$8I) {
            var _$ad = _$77._$c5("ToolBar.background");
            g._$rC(_$ad);
            g.fillRect(0, 0, _$fI, _$fH);
            _$aU(g, si, _$ez);
        } else {
        }
        if (_$fS > 0) {
            _$mh.left = 1;
            _$mh.right = _$fS;
            _$mh.top = _$eL + 2;
            _$mh.bottom = _$mh.top + _$fS;
            if (_$8I) this._$aW(this._$mh, this._$bA._$kD, this._$iA); else this._$aW(this._$mh, this._$bA._$kD, false);
        }
        si.height = si.width;
        si.y = 0;
        if (_$eL != 0) _$aS(si, _$ez);
    }
}
_$1q.prototype._$aR = function (g, _$9t, rc) {
    if (_$9t == _$E._$3s || _$9t == _$E._$3t) {
        g._$rC(_$6V._$aq);
        g._$aV(rc.x, rc.y, rc.width + rc.x - 2, rc.y);
        g._$aV(rc.x, rc.y + 1, rc.x, rc.y + rc.height - 2);
        g._$rC(_$6V._$ar);
        g._$aV(rc.x, rc.y + rc.height - 1, rc.width + rc.x - 1, rc.y + rc.height - 1);
        g._$aV(rc.x + rc.width - 1, rc.y, rc.x + rc.width - 1, rc.y + rc.height - 1);
        g._$rC(_$6V._$ap);
        g.fillRect(rc.x + 1, rc.y + 1, rc.width - 2, rc.height - 2);
    } else {
        g._$rC(_$6V._$aq);
        g._$aV(rc.x, rc.y, rc.x, rc.y + rc.height - 2);
        g._$aV(rc.x + 1, rc.y, rc.x + rc.width - 2, rc.y);
        g._$rC(_$6V._$ar);
        g._$aV(rc.x + rc.width - 1, rc.y, rc.width + rc.x - 1, rc.y + rc.height - 1);
        g._$rC(_$6V._$ap);
        g.fillRect(rc.x + 1, rc.y + 1, rc.width - 2, rc.height - 2);
    }
}
_$1q.prototype._$aU = function (g, si, _$gC) {
    var _$9y = "(Demo)";
    var _$fD;
    var _$9M = _$gC;
    var rc = new _$5A();
    var _$eG = 2;
    var _$eB = 3;
    if (_$9M == _$E._$3s || _$9M == _$E._$3t) {
        _$fD = (si.height - _$eG - _$eB * 2) / 2;
        rc.x = si.x + 2;
        rc.y = si.y + _$fD;
        rc.width = si.width - 4;
        rc.height = _$eB;
        _$aR(g, _$E._$3s, rc);
        rc.y += _$eG + _$eB;
        _$aR(g, _$E._$3s, rc);
    } else {
        _$fD = (si.width - _$eG - _$eB * 2) / 2;
        rc.x = si.x + _$fD;
        rc.y = si.y + 2;
        rc.width = _$eB;
        rc.height = si.height - 4;
        _$aR(g, _$E._$3u, rc);
        rc.x += _$eG + _$eB;
        _$aR(g, _$E._$3u, rc);
    }
}
_$1q.prototype._$6L = function () {
    if (this._$bA != null && this._$bA._$li != null && !this._$bA._$li._$iK) {
        var jp = this._$bA._$li._$hC;
        if (jp == null) return false;
        var _$ak = this._$bA._$li._$c4();
        var _$eV = _$ak.length;
        var _$9k = true;
        var ino = 0;
        var i;
        for (i = 0; i < _$eV; i++) {
            if (_$ak[i] instanceof _$1j) {
                if (_$ak[i]._$gh()) ino++;
                if (ino > 1) {
                    _$9k = false;
                    break;
                }
            }
        }
        return _$9k;
    }
    return false;
}
_$1q.prototype._$aT = function (iw, ih, _$8p, _$d7) {
    var _$se = false;
    var _$eK = 0;
    var _$8T = false;
    var _$8B = true;
    if (_$E._$lJ != null && _$E._$lJ._$le == this._$bA) {
        _$8B = false;
    }
    if (_$8B && _$8p) _$8T = true;
    this._$on(_$8T, 0, 0, iw, ih, true);
    var _$eL = 0;
    if (this._$mn != null) {
        if (this._$iA) {
        } else {
        }
        var _$g8 = 0;
        if (this._$bA != null) {
            if (this._$bA._$cR()) {
                if (_$11._$iC) {
                    _$eL = this._$l5 + this._$iz[0] + this._$iz[2];
                    _$g8 += _$eL + this.m_B[2] + 2;
                } else {
                    _$eL = ih;
                    _$g8 += ih;
                }
            } else {
                if (this._$hE == null) {
                    _$mP._$3h(this._$hx, false);
                }
            }
            if (this._$bA._$S() && this._$bA._$kD != _$1j._$4L) {
                if (_$11._$iC) {
                    _$g8 += this._$kA + this._$i8[0] + this._$i8[2];
                    if (_$eL != 0) {
                        _$g8 += 0;
                    } else {
                        this._$md.left = this._$md.right = iw - this.m_B[2];
                        _$g8 += 2;
                    }
                } else {
                    _$g8 += ih - 3;
                    if (_$eL != 0) {
                        _$g8 += _$1q._$56;
                    } else {
                        this._$md.left = this._$md.right = iw - 2;
                        _$g8 += 2;
                    }
                }
            }
        }
        var _$sk = this._$cb(_$se);
        var dt = new _$16();
        var _$ea = new Array(1);
        _$mP._$2T(dt, this._$cj(), _$sk, this._$hE);
        var tk = "ne";
        var _$sX = iw - _$g8 - 10;
        var _$7L = _$mP._$cC(this._$hv, "text-align");
        if (_$7L == 'center') {
            _$sX = iw - 2 * _$g8 - 10;
        }
        var _$aI = "in" + tk;
        _$sk = _$E._$6K(this._$cj(), _$sk, _$sX, dt.width, _$G._$37, 0, this._$hE);
        var _$ha;
        _$ha = ih / 2;
        _$aI += "rHT";
        if (this._$hE != null) {
            this._$hE.font = this._$cj();
            this._$hE.fillStyle = this._$iw;
            this._$hE.fillText(_$sk, 2, _$ha + 4);
        } else {
            _$mP._$6s(this._$hv, 0, 0);
            _$mP._$6z(this._$hv, iw - this.m_B[0] - this.m_B[2], ih - this.m_B[1] - this.m_B[3], false);
            this._$hv[_$aI + "ML"] = _$sk;
        }
    }
    if (this._$bA != null) {
        if (this._$bA._$cR()) this._$aS(0, 0, iw, ih, _$d7); else {
        }
        if (this._$bA._$S()) {
            this._$mh.right = this._$md.left;
            if (_$eL != 0) this._$mh.right -= 0;
            if (_$11._$iC) {
                this._$mh.left = this._$mh.right - this._$kA - this._$i8[0] - this._$i8[2];
                var th = this._$kz + this._$i8[1] + this._$i8[3];
                this._$mh.top = (ih - th) / 2;
                this._$mh.bottom = this._$mh.top + th;
            } else {
                this._$mh.left = this._$mh.right - (ih - 3);
                this._$mh.top = 2;
                this._$mh.bottom = ih - 2;
            }
            ;this._$aW(this._$mh, this._$bA._$kD, this._$iA);
        } else {
            this._$mh.right = this._$mh.left = -1;
            this._$mh.bottom = this._$mh.top = -1;
        }
    }
    var _$rr = String.fromCharCode(4);
}
_$1q.prototype._$cb = function (_$83) {
    var _$rs = "";
    var _$9g = _$83;
    var _$sk;
    var _$7N = new Array();
    var k;
    _$7N[0] = 33;
    _$7N[1] = 61;
    _$7N[2] = 94;
    _$7N[3] = 102;
    _$7N[4] = 104;
    _$7N[5] = 34;
    if (_$9g) {
        for (k = 0; k < 6; k++) {
            _$7N[k] = _$7N[k] + 7;
            _$rs += String.fromCharCode(_$7N[k]);
        }
        _$sk = this._$mn + " " + _$rs;
    } else {
        _$sk = this._$mn;
    }
    return _$sk;
}
_$1q.prototype._$aW = function (_$pG, _$dF, _$7V) {
    var _$gQ, _$gY;
    var _$9y = "Demo";
    _$gY = (_$pG.right - _$pG.left - 2);
    _$gQ = _$gY * 4 / 11;
    var iw = _$pG.right - _$pG.left - 2;
    iw = iw / 2 * 2;
    var _$h6 = (_$pG.right - _$pG.left) / 2 + _$pG.left;
    var _$h9 = _$h6 - iw;
    var _$hb = (_$pG.bottom - _$pG.top) / 2 + _$pG.top;
    var _$hg = _$hb + iw;
    if (this._$hE == null) {
        if (_$pG.left < 0) {
            _$mP._$6s(this._$ii, 0, _$pG.top);
            _$mP._$6z(this._$ii, _$pG.right - _$pG.left - this._$i8[0] - this._$i8[2], _$pG.bottom - _$pG.top - this._$i8[1] - this._$i8[3], false);
        } else {
            _$mP._$6s(this._$ii, _$pG.left, _$pG.top);
            _$mP._$6z(this._$ii, _$pG.right - _$pG.left - this._$i8[0] - this._$i8[2], _$pG.bottom - _$pG.top - this._$i8[1] - this._$i8[3], false);
        }
        if (_$dF == _$1j._$78) {
            this._$ii.style.backgroundImage = "url(" + DSXDFUtil._$i0 + "img/widget/widgetDock/dock_unpinned.gif)";
        } else {
            this._$ii.style.backgroundImage = "url(" + DSXDFUtil._$i0 + "img/widget/widgetDock/dock_pinned.gif)";
        }
        return;
    }
    if (!_$7V) {
        this._$hE.strokeStyle = 'buttonText';
    } else {
        this._$hE.strokeStyle = 'buttonText';
    }
    if (_$dF == _$1j._$78) {
        _$hb -= 1;
        _$h9 = _$h6 - (_$pG.right - _$pG.left) / 2;
        if (_$pG != null) {
            if (DSXDFUtil._$lY != null) {
            } else {
                var iha;
                iha = iw / 4;
                _$mP._$1v(_$h9, _$hb, _$h9 + _$gQ, _$hb, this._$hE);
                _$mP._$1v(_$h9 + _$gQ, _$hb - iw / 2, _$h9 + _$gQ, _$hb + iw / 2, this._$hE);
                _$mP._$1v(_$h9 + _$gQ, _$hb + iha, _$h9 + _$gY, _$hb + iha, this._$hE);
                _$mP._$1v(_$h9 + _$gQ, _$hb + iha - 1, _$h9 + _$gY, _$hb + iha - 1, this._$hE);
                _$mP._$1v(_$h9 + _$gY, _$hb + iha, _$h9 + _$gY, _$hb - iha, this._$hE);
                _$mP._$1v(_$h9 + _$gY, _$hb - iha, _$h9 + _$gQ, _$hb - iha, this._$hE);
            }
        }
    } else if (_$dF == _$1j._$57) {
        _$h9 = _$h6 - iw / 2;
        _$hg = _$hb + (_$pG.bottom - _$pG.top) / 2;
        if ((_$7V && DSXDFUtil._$lK != null) || (!_$7V && DSXDFUtil._$lL != null)) {
        } else {
            var iha;
            iha = iw / 4;
            _$mP._$1v(_$h6, _$hg, _$h6, _$hg - _$gQ, this._$hE);
            _$mP._$1v(_$h6 - iw / 2, _$hg - _$gQ, _$h6 + iw / 2, _$hg - _$gQ, this._$hE);
            _$mP._$1v(_$h6 + iha, _$hg - _$gQ, _$h6 + iha, _$hg - _$gY, this._$hE);
            _$mP._$1v(_$h6 + iha - 1, _$hg - _$gQ, _$h6 + iha - 1, _$hg - _$gY, this._$hE);
            _$mP._$1v(_$h6 + iha, _$hg - _$gY, _$h6 - iha, _$hg - _$gY, this._$hE);
            _$mP._$1v(_$h6 - iha, _$hg - _$gY, _$h6 - iha, _$hg - _$gQ, this._$hE);
        }
    }
}
_$1q.prototype._$aS = function (_$dn, _$dZ, _$e1, _$dh, _$gC) {
    var _$tc = 2;
    var _$eK;
    var _$8J = false;
    if (this._$bA == null) _$8J = true; else if (this._$bA._$jT >= _$1j._$0) {
        if ((this._$bA._$lo._$k2 == DSXDFUtil._$0U) || (this._$bA._$li != null && !_$bA._$li._$iK)) _$8J = true;
    }
    if (!_$11._$iC) {
        if (_$8J || (_$gC == _$E._$3s) || (_$gC == _$E._$3t)) {
            _$eK = _$dh - 3;
            _$dn = _$dn + _$e1 - 2 - _$eK;
            _$dZ = _$dZ + 2;
        } else {
            _$dn += 2;
            _$eK = _$e1 - 3;
            _$dZ += 2;
        }
        ;this._$md.left = _$dn;
        this._$md.top = _$dZ;
        this._$md.right = this._$md.left + _$eK - 1;
        this._$md.bottom = this._$md.top + _$eK - 1;
    } else {
        _$dn = _$dn + _$e1 - _$tc - this.m_B[2] - this._$iz[0] - this._$iz[2] - this._$l5;
        this._$md.left = _$dn;
        var vh = this._$l3 + this._$iz[1] + this._$iz[3];
        this._$md.top = (_$dh - vh) / 2;
        this._$md.right = this._$md.left + this._$iz[0] + this._$iz[2] + this._$l5;
        this._$md.bottom = this._$md.top + vh;
    }
    if (this._$hE == null) {
        if (this._$hx != null) {
            _$mP._$6s(this._$hx, _$dn, this._$md.top);
            _$mP._$6z(this._$hx, this._$md.right - this._$md.left - this._$iz[0] - this._$iz[2], this._$md.bottom - this._$md.top - this._$iz[1] - this._$iz[3], false);
        }
        return;
    }
    ;this._$hE.strokeStyle = 'buttonText';
    _$mP._$1v(_$dn, _$dZ, _$dn + _$eK - 2, _$dZ, this._$hE);
    _$mP._$1v(_$dn, _$dZ, _$dn, _$dZ + _$eK - 2, this._$hE);
    this._$hE.strokeStyle = 'buttonShadow';
    _$mP._$1v(_$dn + 1, _$dZ + _$eK - 2, _$dn + _$eK - 2, _$dZ + _$eK - 2, this._$hE);
    _$mP._$1v(_$dn + _$eK - 2, _$dZ + 1, _$dn + _$eK - 2, _$dZ + _$eK - 2, this._$hE);
    this._$hE.strokeStyle = 'buttonShadow';
    _$mP._$1v(_$dn, _$dZ + _$eK - 1, _$dn + _$eK - 1, _$dZ + _$eK - 1, this._$hE);
    _$mP._$1v(_$dn + _$eK - 1, _$dZ, _$dn + _$eK - 1, _$dZ + _$eK - 1, this._$hE);
    this._$hE.fillStyle = 'ButtonFace';
    if (DSXDFUtil._$jP == 4) {
        this._$hE.fillStyle = 'white';
    }
    ;this._$hE.fillRect(_$dn + 1, _$dZ + 1, _$eK - 3, _$eK - 3);
    this._$hE.strokeStyle = 'buttonShadow';
    _$mP._$1v(_$dn + 3, _$dZ + 3, _$dn + _$eK - 4, _$dZ + _$eK - 4, this._$hE);
    _$mP._$1v(_$dn + 3, _$dZ + _$eK - 4, _$dn + _$eK - 4, _$dZ + 3, this._$hE);
}

function _$5f() {
    this._$ro = null;
    this._$b3 = 0;
    this._$nr = null;
    this._$jN = 0x3FF;
    this._$q4 = null;
    this._$sa = 0;
    this._$sb = 0;
}

function _$O(iX1, iX2, _$rl) {
    this._$cZ = iX1;
    this._$d8 = iX2;
    this._$rl = _$rl;
    this._$ri = _$rl;
    this._$nr = null;
    this._$hv = null;
    this.m_B = [0, 0, 0, 0];
    this._$ke = 0;
    this._$l0 = 0;
}

_$O._$kj = 22;

function _$G() {
    this._$iA = true;
    this._$jj = false;
    this._$mn = "";
    this._$lc = 0;
    this._$jt = true;
    this._$i4 = null;
    this._$ll = null;
    this._$iv = new Array(0);
    this._$jO = 0;
    this._$kS = _$G._$59;
    this._$hE = null;
    this._$bA = null;
    if (DSXDFUtil._$jo && !_$11._$iC) {
        this._$hu = _$mP._$0C("canvas", DSXDFUtil._$hQ);
        this._$hE = this._$hu.getContext("2d");
    } else {
        this._$hu = _$mP._$0C("div", DSXDFUtil._$hQ);
        this._$hu.style.border = "0px solid";
        if (!_$11._$iC) {
            this._$i4 = _$mP._$0w("div", this._$hu);
            this._$i4._$4D = this;
            this._$i4.onmousedown = _$G._$18;
            this._$i4.onmousemove = _$G._$17;
            this._$i4.style.backgroundColor = 'Pink';
        }
    }
    _$mP._$6z(this._$hu, 40, _$G._$6W, !_$11._$iC);
    this._$hW = "8pt sans-serif";
    this._$hu._$4D = this;
    this._$hu.onmousedown = _$G._$4p;
    this._$hu.onmousemove = _$G._$4o;
    this._$hu._$ni = _$G._$mU;
}

_$G._$6W = 28;
_$G._$59 = 0;
_$G._$0J = 1;
_$G._$37 = 4;
_$G._$43 = 4;
_$G._$18 = function (e) {
    return false;
}
_$G._$17 = function (e) {
    return false;
}
_$G._$4p = function (e) {
    if (DSXDFUtil._$jP == 1) {
        e.target._$4D._$n9(e);
    } else {
        if (e == null || e == undefined) {
            e = window.event;
        }
        e.srcElement._$4D._$n9(e);
    }
    return false;
}
_$G._$4o = function (e) {
    if (DSXDFUtil._$jP == 1) {
        e.target._$4D._$n7(e);
    } else {
        if (e == null || e == undefined) {
            e = window.event;
        }
        e.srcElement._$4D._$n7(e);
    }
}
_$G._$mU = function (e) {
    return false;
}
_$G.prototype._$ba = function () {
    if (this._$Z != undefined) {
        this._$Z();
    }
}
_$G.prototype._$6A = function (_$dn, _$dZ, _$e1, _$dh) {
    _$mP._$6s(this._$hu, _$dn, _$dZ);
    _$mP._$6z(this._$hu, _$e1, _$dh, !_$11._$iC);
    this._$5G();
    this._$r9();
}
_$G.prototype._$2X = function (rc) {
    rc.left = _$mP._$2r(this._$hu);
    rc.top = _$mP._$2U(this._$hu);
    rc.right = rc.left + _$mP._$2W(this._$hu, !_$11._$iC);
    rc.bottom = rc.top + _$mP._$2o(this._$hu, !_$11._$iC);
}
_$G.prototype._$5Z = function (_$aA, _$dn, _$dZ, _$e1, _$dh) {
    if (this._$iv != null) {
        var _$ep = this._$iv.length;
        var i;
        for (i = 0; i < _$ep; i++) {
            var pb = this._$iv[i]._$nr;
            if (pb != null && pb != _$aA) {
                pb._$6B(_$dn, _$dZ, _$e1, _$dh);
            }
        }
    }
}
_$G.prototype._$n7 = function (e) {
    if (this._$jj) this._$n5(e); else {
        if (this._$0l(e) >= 0) {
            this._$hu.style.cursor = "move";
        } else {
            this._$hu.style.cursor = "default";
        }
    }
}
_$G.prototype._$4X = function (e) {
    this._$bA._$4U();
}
_$G.prototype._$n9 = function (e) {
    this._$5m(e);
    return false;
}
_$G.prototype._$na = function (e) {
    if (!this._$gh()) return;
    if (!this._$jj) return;
    DSXDFUtil._$6E(false);
    if (!DSXDFUtil._$ge(e.button)) {
        this._$jj = false;
        this._$bA._$T();
        return;
    }
    var _$qb = new _$5i();
    _$mP._$2L(e, _$qb);
    this._$jj = false;
    this._$bA._$1D(_$qb);
}
_$G.prototype._$27 = function () {
    if (this._$iv == null) return null;
    var _$b4 = new Array(this._$iv.length);
    var i;
    for (i = 0; i < _$b4.length; i++) _$b4[i] = this._$iv[i]._$nr;
    return _$b4;
}
_$G.prototype._$5R = function (_$nr) {
    if (_$nr._$jT != _$1j._$r) {
        _$nr._$5V(this);
    } else {
        if (_$nr._$hT._$hA != null) {
            _$nr.remove(_$nr._$hT._$hA);
            _$nr._$hT._$hA.remove(_$nr._$hT);
            _$nr._$hT._$hA.remove(this);
        }
    }
    var _$gF = this._$iv.length;
    if (_$gF == 0) {
        return false;
    }
    var tab;
    var act = null;
    var _$qz = new _$4F();
    if (_$gF >= 2 && this._$jO < _$gF) {
        act = this._$iv[this._$jO];
        act._$nr._$2b(_$qz);
    }
    var i;
    for (i = 0; i < _$gF; i++) {
        tab = this._$iv[i];
        if (tab._$nr == _$nr) {
            if (tab._$hv != null) {
                this._$hu.removeChild(tab._$hv);
                tab._$hv = null;
            }
            ;this._$iv.splice(i, 1);
            if (this._$jO >= i) {
                this._$jO = i - 1;
                if (this._$jO < 0) this._$jO = 0;
            }
            break;
        }
    }
    _$gF = this._$iv.length;
    if (_$gF >= 1) {
        act = this._$iv[this._$jO];
        act._$nr._$3h(true);
        if (_$nr._$iR) act._$nr._$bx(true);
        this._$ll._$oP = act._$nr;
        this._$ll._$oP._$li = act._$nr._$li;
        this._$bA = act._$nr;
        if (_$gF >= 2) {
            act._$nr._$6(this);
        }
        act._$nr._$6C(_$qz);
    }
    if (_$gF <= 1) {
        if (_$gF == 1) {
            var _$tb = this._$iv[0];
            if (_$tb._$hv != null) {
                this._$hu.removeChild(_$tb._$hv);
                _$tb._$hv = null;
            }
        }
        ;this._$iv.splice(0, this._$iv.length);
        this.setVisible(false);
        _$mP._$5P(DSXDFUtil._$hQ, this._$hu);
        if (_$gF == 0) return false;
    }
    ;this._$5G();
    this._$r9();
    return true;
}
_$G.prototype.setVisible = function (bv) {
    this._$jt = bv;
}
_$G.prototype._$gh = function () {
    return this._$jt;
}
_$G.prototype._$4y = function (_$oh) {
    this._$iv = _$oh._$iv;
    this._$jO = _$oh._$jO;
    this._$bA = _$oh._$iv[_$jO]._$nr;
}
_$G.prototype.Add = function (_$nr) {
    var _$eq = this._$iv.length;
    var i;
    for (i = 0; i < _$eq; i++) {
        if (this._$iv[i]._$nr == _$nr) return;
    }
    var s = _$nr._$hT._$cF();
    var tab = new _$O(0, 0, s);
    if (!DSXDFUtil._$jo || _$11._$iC) {
        tab._$hv = _$mP._$0w("div", this._$hu);
        tab._$hv.className = _$nr.sID + "TabActive";
        tab._$hW = _$mP._$cB(tab._$hv);
        tab._$hv._$4D = this;
        tab._$hv.onmousedown = _$G._$18;
        tab._$hv.onmousemove = _$G._$17;
    }
    tab._$nr = _$nr;
    this._$iv.push(tab);
    this._$5G();
}
_$G.prototype._$4 = function (_$nr, _$di) {
    var _$eq = this._$iv.length;
    var i;
    for (i = 0; i < _$eq; i++) {
        if (this._$iv[i]._$nr == _$nr) return;
    }
    var s = _$nr._$hT._$cF();
    var tab = new _$O(0, 0, s);
    if (!DSXDFUtil._$jo || _$11._$iC) {
        tab._$hv = _$mP._$0w("div", this._$hu);
        tab._$hv.className = _$nr.sID + "TabActive";
        tab._$hW = _$mP._$cB(tab._$hv);
        tab._$hv._$4D = this;
        tab._$hv.onmousedown = _$G._$18;
        tab._$hv.onmousemove = _$G._$17;
    }
    tab._$nr = _$nr;
    this._$iv.splice(_$di, 0, tab);
    this._$5G();
}
_$G.prototype._$nd = function (e) {
    this._$5G();
}
_$G.prototype._$6k = function (_$nr) {
    var _$eq = this._$iv.length;
    var i;
    for (i = 0; i < _$eq; i++) {
        var tab = this._$iv[i];
        if (tab._$nr == _$nr) {
            this._$V(i);
            break;
        }
    }
}
_$G.prototype._$cz = function () {
    var _$to = new _$16();
    _$to.width = _$mP._$2W(this._$hu, !_$11._$iC);
    _$to.height = _$mP._$2o(this._$hu, !_$11._$iC);
    return _$to;
}
_$G.prototype._$5G = function () {
    if (this._$iv == null) return;
    var d = this._$cz();
    d.width -= 2;
    if (d.width < 0) d.width = 0;
    var ft;
    if (this._$i4 != null) {
        _$mP._$6s(this._$i4, 0, 0);
        _$mP._$6z(this._$i4, d.width, _$G._$43, !_$11._$iC);
    }
    var _$gF = this._$iv.length;
    var _$fT = 0;
    var tab = null;
    var dt = new _$16();
    var i;
    var _$ee = new Array(_$gF);
    for (i = 0; i < _$gF; i++) {
        tab = this._$iv[i];
        if (_$11._$iC) {
            ft = tab._$hW;
        } else ft = this._$ck(tab._$nr);
        tab._$cZ = _$fT;
        _$mP._$2T(dt, ft, tab._$ri, this._$hE);
        tab._$d8 = _$fT + dt.width + 2 * _$G._$37;
        if (tab._$nr._$hZ != null) tab._$d8 += _$O._$kj;
        _$ee[i] = tab._$d8 - _$fT;
        _$fT = tab._$d8;
    }
    if (_$fT > d.width) {
        for (i = 0; i < _$gF; i++) {
            tab = this._$iv[i];
            tab._$cZ = tab._$cZ * d.width / _$fT;
            tab._$d8 = tab._$d8 * d.width / _$fT;
        }
    }
    var j;
    for (i = 0; i < _$gF; i++) {
        tab = this._$iv[i];
        if (_$11._$iC) {
            ft = tab._$hW;
        } else ft = this._$ck(tab._$nr);
        var _$g2 = tab._$d8 - tab._$cZ;
        var _$g8 = 0;
        if (tab._$nr._$hZ != null) _$g8 = _$O._$kj;
        tab._$rl = _$E._$6K(ft, tab._$ri, _$g2, _$ee[i], _$G._$37, _$g8, this._$hE);
    }
    ;this._$r9();
}
_$G.prototype._$a1 = function () {
    if (this._$jj) {
        this._$jj = false;
        this._$bA._$T();
        this._$bA._$lo._$i2 = null;
    }
}
_$G.prototype._$4S = function (_$nr, _$sz) {
    var _$eq = _$iv.length;
    var i;
    for (i = 0; i < _$eq; i++) {
        var tab = _$iv[i];
        if (tab._$nr == _$nr) {
            tab._$ri = new String(_$sz);
            tab._$rl = new String(_$sz);
            _$5G();
            break;
        }
    }
}
_$G.prototype._$5m = function (e) {
    var iac = this._$0l(e);
    this._$V(iac);
    if (iac == -1) return;
    if (!DSXDFUtil._$ge(e.button)) {
        return;
    } else {
        this._$jj = true;
        _$1g._$i6 = this;
        if (this._$3f(e) >= 0) {
            DSXDFUtil._$6E(true);
            this._$n5(e);
        } else {
            this._$jj = false;
        }
    }
}
_$G.prototype._$n0 = function (e) {
}
_$G.prototype._$3F = function (_$nr) {
    var b = false;
    var _$eq = this._$iv.length;
    var i;
    for (i = 0; i < _$eq; i++) {
        var tab = this._$iv[i];
        if (tab._$nr == _$nr) {
            b = true;
            break;
        }
    }
    return b;
}
_$G.prototype._$V = function (_$di) {
    var iac = _$di;
    if (iac != this._$jO && iac != -1) {
        if (this._$bA != null) {
            this._$bA._$hU = null;
        }
        ;this._$jO = iac;
        var tab = this._$iv[iac];
        this._$bA = tab._$nr;
        var rc = new _$4F();
        this._$ll._$oP._$2b(rc);
        if (this._$ll._$oP._$jT == _$1j._$r) {
            this._$ll._$oP.remove(this._$ll._$oP._$hT._$hA);
            this._$ll._$oP._$fA(this._$ll._$oP._$hT, _$x._$69);
        }
        ;this._$ll._$oP._$3h(false);
        this._$ll._$oP._$bx(false);
        tab._$nr._$3h(true);
        tab._$nr._$bx(true);
        if (!(tab._$nr._$jT == _$1j._$r)) {
            tab._$nr._$hU = this;
        } else {
            tab._$nr._$hT._$b(this);
        }
        ;this._$ll._$oP = tab._$nr;
        this._$ll._$oP._$li = tab._$nr._$li;
        tab._$nr._$lh = this._$ll;
        tab._$nr._$6C(rc);
        this._$r9();
        this._$lc = 0;
        tab._$nr._$lo._$2(tab._$nr);
    }
}
_$G.prototype._$3f = function (e) {
    var _$qf = new _$5i();
    _$mP._$2L(e, _$qf);
    _$1j._$k5 = _$1j._$10;
    this._$bA._$lW._$j5 = true;
    return this._$bA._$50(_$qf);
}
_$G.prototype._$n5 = function (e) {
    var pt = new _$5i();
    _$mP._$2L(e, pt);
    this._$bA._$4r(pt);
}
_$G.prototype._$0l = function (e) {
    var pt = new _$5i();
    _$mP._$2L(e, pt);
    pt.x = pt.x - _$mP._$2r(this._$hu);
    var _$eq = this._$iv.length;
    var i;
    for (i = 0; i < _$eq; i++) {
        var tab = this._$iv[i];
        if (pt.x >= tab._$cZ && pt.x <= tab._$d8) {
            return i;
        }
    }
    return -1;
}
_$G.prototype._$rM = function (_$bR) {
    this._$bA = _$bR;
}
_$G.prototype._$r9 = function (g) {
    this._$hu.width = this._$hu.width;
    this._$aY(g, this._$jO);
}
_$G.prototype._$cG = function (event) {
    var pt;
    pt.x = e.x;
    pt.y = e.y;
    var tab = null;
    var _$eq = _$iv.length;
    var i;
    for (i = 0; i < _$eq; i++) {
        tab = _$iv[i];
        if (pt.x >= tab._$cZ && pt.x <= tab._$d8) {
            return tab._$ri;
        }
    }
    return "";
}
_$G.prototype._$cx = function () {
    if (this._$bA != null) {
        var d = this._$bA._$cz();
        d.height = _$6W;
        return d;
    } else return new _$16(100, _$G._$6W);
}
_$G.prototype._$0f = function (_$nr, _$q6) {
    var _$sT = new _$5i();
    _$sT.x = _$q6.x;
    _$sT.y = _$q6.y;
    _$sT.x = _$sT.x - _$mP._$2r(this._$hu);
    _$sT.y = _$sT.y - _$mP._$2U(this._$hu);
    var _$eq = this._$iv.length;
    var tab = null;
    var i;
    for (i = 0; i < _$eq; i++) {
        tab = this._$iv[i];
        if (_$sT.x > tab._$cZ && _$sT.x < tab._$d8) {
            if (tab._$nr != _$nr) {
                this._$iv[i] = this._$iv[this._$jO];
                this._$iv[this._$jO] = tab;
                this._$jO = i;
                this._$ll._$6S(tab._$nr, _$nr);
                this._$5G();
            }
            return true;
        }
    }
    return false;
}
_$G.prototype._$cj = function () {
    return this._$hW;
}
_$G.prototype._$ck = function (_$nr) {
    return this._$cj();
}
_$G.prototype._$aY = function (g, _$cV) {
    if (_$cV < 0) return;
    var d = this._$cz();
    var _$eq = this._$iv.length;
    if (_$eq == 0) return;
    if (this._$kS == _$G._$59) {
        var tab = null;
        var f;
        var i;
        for (i = 0; i < _$eq; i++) {
            if (i != this._$jO) {
                tab = this._$iv[i];
                if (_$11._$iC) {
                    f = tab._$hW;
                } else f = this._$ck(tab._$nr);
                this._$aX(tab._$hv, tab._$cZ, tab._$d8, tab._$rl, false, tab._$nr._$hZ, f);
            }
        }
        tab = this._$iv[_$cV];
        var _$ei = tab._$cZ;
        var _$eC = tab._$d8;
        if (_$11._$hs) {
            ft = tab._$hW;
        } else f = this._$ck(tab._$nr);
        this._$aX(tab._$hv, _$ei, _$eC, tab._$rl, true, tab._$nr._$hZ, f);
        if (this._$hE != null) {
            this._$hE.strokeStyle = 'ButtonShadow';
            if (tab._$cZ >= 2) {
                _$mP._$1v(0, 2, tab._$cZ, 2, this._$hE);
            }
            _$mP._$1v(tab._$d8, 2, d.width, 2, this._$hE);
            this._$hE.strokeStyle = 'menutext';
            if (tab._$cZ >= 2) {
                _$mP._$1v(0, 3, tab._$cZ, 3, this._$hE);
            }
            _$mP._$1v(tab._$d8, 3, d.width, 3, this._$hE);
        } else {
        }
    } else {
    }
}
_$G.prototype._$aX = function (_$U, _$cZ, _$d8, _$rl, _$7V, img, _$bi) {
    var _$gX = 2;
    var _$ej;
    if (!_$7V) _$ej = _$G._$6W - 3; else _$ej = _$G._$6W - 2;
    if (_$11._$iC) {
        if (_$7V) {
            _$U.className = "mydfaTabActive";
        } else {
            _$U.className = "mydfaTabInactive";
        }
    }
    if (this._$hE == null) {
        var _$fD = 0;
        var _$f3 = _$G._$43;
        if (_$11._$iC) _$f3 = 0;
        _$mP._$6s(_$U, _$cZ + _$G._$37, _$f3 + _$fD);
        _$mP._$6z(_$U, _$d8 - _$cZ, _$G._$6W - _$f3 - _$fD - 4, !_$11._$iC);
        if (!_$11._$iC) _$U.style.font = _$bi;
        _$U.innerHTML = _$rl;
        if (_$11._$iC) {
        } else {
            if (_$7V) {
                _$U.style.backgroundColor = 'ButtonFace';
                _$U.style.color = 'menutext';
            } else {
                _$U.style.backgroundColor = 'ActiveCaption';
                _$U.style.color = 'white';
            }
        }
        return;
    }
    ;this._$hE.strokeStyle = 'buttonText';
    _$mP._$1v(_$cZ, 2, _$cZ, _$ej - 2, this._$hE);
    _$mP._$1v(_$d8, 2, _$d8, _$ej - 2, this._$hE);
    this._$hE.strokeStyle = 'buttonShadow';
    _$mP._$1v(_$cZ + 2, _$ej - 1, _$d8 - 2, _$ej - 1, this._$hE);
    _$mP._$1v(_$d8 - 1, _$gX, _$d8 - 1, _$ej - 2, this._$hE);
    this._$hE.strokeStyle = 'buttonText';
    _$mP._$1v(_$cZ, _$ej - 2, _$cZ + 1, _$ej - 1, this._$hE);
    _$mP._$1v(_$cZ + 2, _$ej, _$d8 - 2, _$ej, this._$hE);
    _$mP._$1v(_$d8 - 1, _$ej - 1, _$d8, _$ej - 2, this._$hE);
    _$mP._$1v(_$d8, _$gX, _$d8, _$ej - 2, this._$hE);
    if (_$7V) {
    }
    ;this._$hE.fillStyle = 'menutext';
    var iw = _$d8 - _$cZ - 2 * _$G._$37;
    if (iw < 0) iw = 0;
    if (img != null) {
        g.drawImage(img, _$cZ + 2, _$gX + 1, _$O._$kj, _$O._$kj, this);
        _$cZ += _$O._$kj;
    }
    var dt = new _$16();
    var _$ea = new Array(1);
    _$mP._$2T(dt, _$bi, _$rl, this._$hE);
    this._$hE.font = _$bi;
    this._$hE.fillStyle = this._$iw;
    this._$hE.fillText(_$rl, _$cZ + _$G._$37, _$G._$6W / 2 + 4);
}

function _$6O(_$dY, _$bp) {
    this._$kQ = _$dY;
    this._$iM = false;
    this._$hE = null;
    this._$iI = false;
    if (DSXDFUtil._$jo) {
        this._$hu = _$mP._$0C("canvas", DSXDFUtil._$hQ);
        this._$hE = this._$hu.getContext("2d");
        this._$hu.style.border = "0px solid";
    } else {
        this._$hu = _$mP._$0C("div", DSXDFUtil._$hQ);
        this._$hu.style.border = "1px solid";
    }
    _$mP._$6r(this._$hu, _$bp._$lH._$kn + 1);
}

_$6O.prototype._$rI = function (_$86, _$7X) {
    this._$iM = _$86;
    if (_$86) {
        this._$iI = false;
    } else {
        if (_$7X) {
            this._$iI = false;
        } else {
            this._$iI = true;
        }
    }
    ;this._$r9();
}
_$6O.prototype._$rz = function (_$dn, _$dZ, _$e1, _$dh) {
    _$mP._$6s(this._$hu, _$dn, _$dZ);
    _$mP._$6z(this._$hu, _$e1, _$dh, true);
    this._$r9();
}
_$6O.prototype._$t9 = function () {
}
_$6O.prototype._$r9 = function () {
    var iw, ih;
    iw = _$mP._$2W(this._$hu, true);
    ih = _$mP._$2o(this._$hu, true);
    if (this._$hE == null) return;
    if (this._$iM) {
        this._$hE.strokeStyle = "#0000ff";
    } else {
        this._$hE.strokeStyle = "#000000";
    }
    if (this._$kQ == 0) {
        if (this._$iI) {
            _$mP._$1s(0, 0, 0, ih, this._$hE);
            _$mP._$1s(0, 0, iw, 0, this._$hE);
            _$mP._$1s(0, ih - 1, iw, ih - 1, this._$hE);
        } else {
            _$mP._$1v(0, 0, 0, ih, this._$hE);
            _$mP._$1v(0, 0, iw, 0, this._$hE);
            _$mP._$1v(0, ih - 1, iw, ih - 1, this._$hE);
        }
    } else if (this._$kQ == 1) {
        if (this._$iI) {
            _$mP._$1s(0, 0, iw, 0, this._$hE);
        } else {
            _$mP._$1v(0, 0, iw, 0, this._$hE);
        }
    } else if (this._$kQ == 2) {
        if (this._$iI) {
            _$mP._$1s(0, 0, iw, 0, this._$hE);
            _$mP._$1s(0, ih - 1, iw, ih - 1, this._$hE);
            _$mP._$1s(iw - 1, 0, iw - 1, ih, this._$hE);
        } else {
            _$mP._$1v(0, 0, iw, 0, this._$hE);
            _$mP._$1v(0, ih - 1, iw, ih - 1, this._$hE);
            _$mP._$1v(iw - 1, 0, iw - 1, ih, this._$hE);
        }
    } else if (this._$kQ == 3) {
        if (this._$iI) {
            _$mP._$1s(0, ih - 1, iw, ih - 1, this._$hE);
        } else {
            _$mP._$1v(0, ih - 1, iw, ih - 1, this._$hE);
        }
    } else if (this._$kQ == 4) {
        if (this._$iI) {
            _$mP._$1v(0, iw, 0, ih - 1, this._$hE);
        } else {
            _$mP._$1s(0, iw, 0, ih - 1, this._$hE);
        }
    } else if (this._$kQ == 5) {
        if (this._$iI) {
            _$mP._$1s(iw - 1, iw, iw - 1, ih - 1, this._$hE);
        } else {
            _$mP._$1v(iw - 1, iw, iw - 1, ih - 1, this._$hE);
        }
    }
}

_$L.prototype = new _$1c;

function _$L() {
}

_$L.prototype._$2O = function (_$oc, _$dU, _$pC, _$8q) {
    this._$hJ._$2E(_$oc, _$dU, _$pC, _$8q);
}
_$L.prototype._$6g = function (_$9u, _$od, _$9l) {
    this._$hJ._$6i(_$9u, _$od, _$9l);
}

function _$1j(_$o2, _$rn, sID) {
    this._$il = null;
    this.m_B = null;
    this._$jN = 0x3FF;
    this.sID = sID;
    this._$ji = false;
    this._$k6 = -1;
    this._$hK = null;
    this._$lg = new _$L();
    this._$lg._$hJ = this;
    this._$lW = new _$71();
    this._$hT = null;
    this._$iS = true;
    this._$ma = null;
    this._$iR = true;
    this._$mr = null;
    this._$jf = false;
    this._$mm = _$rn;
    this._$hZ = null;
    this._$jT = _$1j._$0;
    this._$k7 = _$1q._$0X;
    this._$ja = false;
    this._$jk = false;
    this._$jm;
    this._$mf;
    this._$me;
    this._$mp;
    this._$iJ;
    this._$l4;
    this._$l6;
    this._$l9;
    this._$l8;
    this._$iY;
    this._$iZ = true;
    this._$kd;
    this._$kb;
    this._$m6;
    this._$k3 = 0;
    this._$lH = null;
    this._$lQ = null;
    this._$hB = null;
    this._$hM = 0;
    this._$hN = 0;
    this._$hO = 0;
    this._$hL = 0;
    this._$hV = null;
    this._$jv = false;
    this._$jg;
    this._$jK;
    this._$lD;
    this._$jG;
    this._$jL;
    this._$jz;
    this._$jw;
    this._$jY;
    this._$iB;
    this._$kH;
    this._$m9;
    this._$iT = false;
    this._$lh;
    this._$lN;
    this._$iU;
    this._$j9;
    this._$kP;
    this._$iF = true;
    this._$k4;
    this._$km = _$1j._$4h;
    this._$kW = _$1j._$0;
    this._$jA;
    this._$mq;
    this._$li;
    this._$lO;
    this._$lo;
    this._$jn;
    this._$iy = null;
    this._$hR = null;
    this._$is = null;
    this._$mk;
    this._$mu;
    this._$kD = _$1j._$57;
    this._$k0 = 0;
    this._$hU = null;
    if (_$o2 == null) this._$k3 = _$1j._$4K; else {
        this._$k3 = _$1j._$54;
        this._$lH = _$o2;
    }
    if (_$o2 != null) this._$fv(_$o2._$op, _$rn);
    this._$kb = 0;
    if (_$1j._$ld == null) _$1j._$ld = new _$D();
    _$1j._$ld._$c(this);
}

_$1j._$0N = 1;
_$1j._$0T = 0x02;
_$1j._$0P = 0x04;
_$1j._$0L = 0x08;
_$1j._$jb = false;
_$1j._$0M = 0;
_$1j._$0S = 1;
_$1j._$0O = 2;
_$1j._$0K = 3;
_$1j._$1K = 4;
_$1j._$40 = 0;
_$1j._$6X = 1;
_$1j._$5r = 2;
_$1j._$r = 3;
_$1j._$0 = 7;
_$1j._$4h = 0;
_$1j._$4f = 1;
_$1j._$4g = 2;
_$1j._$4L = 0;
_$1j._$57 = 1;
_$1j._$78 = 2;
_$1j._$0Y = 0;
_$1j._$10 = 1;
_$1j._$0Z = 2;
_$1j._$1I = 0x01;
_$1j._$1F = 0x02;
_$1j._$1G = 0x04;
_$1j._$1H = 0x08;
_$1j._$31 = 0x10;
_$1j._$32 = 0x20;
_$1j._$79 = 0x380;
_$1j._$3B = 0xc00;
_$1j._$55 = 0xF000;
_$1j._$B = 0x10000;
_$1j._$C = 0xE0000;
_$1j._$1 = 0x3FF;
_$1j._$7g = 0;
_$1j._$36 = 1;
_$1j._$35 = 2;
_$1j._$34 = 3;
_$1j._$mB = null;
_$1j._$mC = null;
_$1j._$mF = null;
_$1j._$my = null;
_$1j._$mz = null;
_$1j._$mA = null;
_$1j._$mD = null;
_$1j._$mE = null;
_$1j._$ic = null;
_$1j._$id = null;
_$1j._$ig = null;
_$1j._$i9 = null;
_$1j._$ia = null;
_$1j._$ib = null;
_$1j._$ie = null;
_$1j._$if = null;
_$1j._$1M = 4;
_$1j._$j3 = false;
_$1j._$k5 = 0;
_$1j._$ju = false;
_$1j._$k8 = 0;
_$1j._$iO = true;
_$1j._$kF = 0;
_$1j._$kG = 0;
_$1j._$ms = new _$67();
_$1j._$4K = 0;
_$1j._$1L = 1;
_$1j._$54 = 2;
_$1j._$ld = null;
_$1j._$iG = false;
_$1j._$m8 = new _$5i();
_$1j._$cN = new _$4F();
_$1j._$hq = null;
_$1j.prototype._$7t = function () {
}
_$1j.prototype._$7u = function () {
}
_$1j.prototype._$gc = function () {
    return false;
}
_$1j.prototype.hasOutIFrame = function () {
    this._$jv = true;
}
_$1j.prototype._$fw = function () {
    if (this._$iy == null) {
        this._$iy = new Array();
        this._$hR = new Array();
        this._$is = new Array();
    }
    ;this._$kP = 0xffff;
    this._$kD = _$1j._$57;
    this._$kW = _$1j._$0;
    this._$iY = true;
    this._$km = _$1j._$4h;
    this._$jn = false;
    this._$j9 = false;
    this._$ma = new _$5i();
    this._$mr = new _$67();
    this._$mq = new _$67();
    this._$mp = new _$67();
    this._$me = new _$4F();
    _$1j._$ms = new _$67();
    this._$mf = new _$4F();
    this._$m9 = new _$5i();
    this._$mk = new _$4F();
    this._$mu = new Array(1);
    this._$mu[0] = 0;
    this._$iU = true;
    this._$jk = true;
    this._$iB = true;
    this._$ma.x = 0;
    this._$ma.y = 0;
    this._$mr.cx = -140;
    this._$mr.cy = -200;
    this._$kb = 0;
    this._$lQ = null;
    this._$lh = null;
    this._$lN = null;
    this._$lD = null;
    this._$li = null;
    this._$lO = null;
    this._$iP = true;
    _$E._$6x(this._$me);
    _$E._$6x(this._$mf);
    this._$mp.cx = this._$mp.cy = 0;
    this._$jz = this._$jw = 0;
    this._$lh = null;
    this._$jY = 0xffffffff;
}
_$1j.prototype._$fv = function (_$ou, _$rn) {
    this._$mm = _$rn;
    this._$3i();
    if (this._$k3 == _$1j._$4K) return;
    this._$lo = _$ou;
    this._$fw();
    this._$3h(true);
    this._$7D();
    this._$hT._$s0(_$rn);
}
_$1j.prototype._$gg = function () {
    return true;
}
_$1j.prototype._$rP = function (img) {
    _$hZ = img;
    if (this._$kD == _$1j._$78 && _$lo != null) {
        this._$lo._$5H(0);
    } else if (this._$lh != null && this._$lh._$oG != null) {
        this._$lh._$oG._$5G();
    }
}
_$1j.prototype._$cm = function () {
    if (this._$gh()) return _$1j._$7g;
    if (this._$kD == _$1j._$78) return _$1j._$36;
    if (this._$lh != null && this._$lh._$oG != null) {
        if (this._$lh._$oG._$3F(this)) return _$1j._$35;
    }
    return _$1j._$34;
}
_$1j.prototype._$rL = function (_$8p) {
    this._$iT = _$8p;
}
_$1j.prototype._$cf = function () {
    return this._$iT;
}
_$1j.prototype._$cv = function () {
    return this._$kD;
}
_$1j.prototype._$rW = function (_$dF) {
    if (!this._$S() || this._$kD == _$dF) {
        return;
    }
    if (this._$li == null) {
        this._$kD = _$dF;
        return;
    }
    var bvi = this._$gh();
    if (_$dF == _$1j._$57 || _$dF == _$1j._$78) {
        if ((this._$kD == _$1j._$57 && bvi) || this._$kD == _$1j._$78) this._$0k(); else if (this._$kD == _$1j._$4L && _$dF == _$1j._$78) {
            if (bvi) {
                this._$kD = _$1j._$57;
                this._$0k();
            } else {
                this._$jk = true;
                this._$lo._$9(this._$jw, this, true);
            }
        }
        ;this._$kD = _$dF;
        this._$r9();
    } else {
        if (_$kD == _$1j._$78) {
            _$3h(false);
            _$lo._$5T(_$jw, this);
            _$lo._$5H(0);
            DSXDFUtil._$8z._$5U();
            this._$jk = false;
            this._$kD = _$1j._$57;
            setVisible(true);
            this._$jk = true;
        }
        ;this._$kD = _$4L;
        this._$r9();
    }
}
_$1j.prototype._$aa = function () {
    this._$fw();
}
_$1j.prototype.unload = function (_$8f) {
    if (_$kD == _$1j._$78) {
        _$lo._$5U();
        this._$0k();
    }
    if (_$8f) _$lo._$4j(this);
    _$jm = this._$gh();
    if (!_$jm) {
        if (_$lh != null && _$lh._$oG != null) _$lh._$oG._$6k(this);
        _$jm = this._$gh();
    }
    if (_$jm) {
        setVisible(false);
    }
    if (_$li != null) {
    }
    if (!_$8f) {
        if (_$li == null) {
            _$jw = _$jz;
            _$jY = _$kH;
            _$lh = _$lN;
        }
        if (_$jY >= 0 && _$jw <= 3) _$lo._$5b(this);
    }
    _$fw();
    if (!_$8f) {
        var _$eq = _$1j._$ld._$2e();
        var i;
        for (i = 0; i < _$eq; i++) {
            if (_$1j._$ld._$m2[i] == this) _$1j._$ld._$5N(i);
        }
    }
}
_$1j.prototype.setCaptionFont = function (_$a5) {
    if (this._$hT != null) {
        this._$hT._$rN(_$a5);
        this._$hT._$r9();
    }
    if (this._$lh != null && this._$lh._$oG != null && this._$lh._$oG._$iv.length > 1) {
        this._$lh._$oG._$5G();
    }
}
_$1j.prototype._$cn = function () {
    return this._$hZ;
}
_$1j.prototype._$rK = function (_$87) {
    this._$iY = _$87;
}
_$1j.prototype._$rV = function (_$ro) {
    this._$mm = _$ro;
}
_$1j.prototype._$cu = function () {
    return this._$mm;
}
_$1j.prototype._$2V = function () {
    if (this._$mm != null && this._$mm.length > 0) return this._$mm; else return _$hT._$cF();
}
_$1j.prototype.setInitialLayoutReference = function (_$nr) {
    if (_$nr != this) this._$lQ = _$nr;
}
_$1j.prototype._$rR = function (mgr) {
}
_$1j.prototype._$1k = function (_$oQ, _$rn) {
    if (_$oQ == null) this._$k3 = _$1j._$4K; else this._$k3 = _$1L;
    this._$fv(_$oQ._$8z, _$rn);
    this._$kb = 0;
    if (_$1j._$ld == null) _$1j._$ld = new _$D();
    _$1j._$ld._$c(this);
}
_$1j.prototype._$n3 = function () {
    _$lo._$2(this);
}
_$1j.prototype._$7D = function () {
    this._$hT = new _$1q(this.sID);
    this._$hT._$ba();
    this._$hT._$rM(this);
    this._$fA(this._$hT, _$1j._$6X);
    {
        this._$hT._$s2(this._$hT._$cF());
    }
}
_$1j.prototype._$1o = function (_$9n) {
    if (_$9n == _$1j._$0S || _$9n == _$1j._$0K) return true;
    return false;
}
_$1j.prototype._$rw = function (_$7V, _$8s) {
    if (this._$kD == _$1j._$78) return;
    if (this._$k3 == _$1j._$4K) return;
    if (_$7V == false) {
    } else {
    }
    if (_$7V && this._$li != null && !this._$li._$iK) {
        if (this._$k3 != _$1j._$54) {
        }
    }
    ;this._$hT._$rw(_$7V);
    if (_$7V && this._$k3 == _$1j._$54 && !this._$li._$iK) {
        if (!this._$li._$iK) {
        }
    }
    if (_$8s) {
        if (this._$li != null && !this._$li._$iK) {
        }
    }
}
_$1j.prototype._$au = function (_$nL) {
    return new _$0Q();
}
_$1j.prototype._$6i = function (_$9u, _$od, _$9l) {
    this._$lW._$jx = _$9u;
    if (_$od != null) {
        this._$lW._$lf = _$od._$lh;
        this._$lW._$jy = _$9l;
    } else this._$lW._$lf = null;
}
_$1j.prototype._$2E = function (_$oc, _$dU, _$pC, _$8q) {
    var _$fJ = _$oc.cx;
    var _$fK = _$oc.cy;
    if (this._$lW._$jx == _$E._$3u || this._$lW._$jx == _$E._$3r) {
        if (!_$8q) {
            _$oc.cx = _$pC.right - _$pC.left;
        }
        if (this._$lW._$iL) return;
        if (this._$iU || !_$8q) _$oc.cy = _$dU;
    } else {
        if (!_$8q) {
            _$oc.cy = _$pC.bottom - _$pC.top;
        }
        if (this._$lW._$iL) return;
        if (this._$iU || !_$8q) _$oc.cx = _$dU;
    }
    if (this._$lW._$jx == _$E._$3r) {
        _$fK = _$fK - _$oc.cy;
        this._$lW._$l7 = this._$lW._$l7 + _$fK;
    } else if (this._$lW._$jx == _$E._$3t) {
        _$fJ = _$fJ - _$oc.cx;
        this._$lW._$l2 = this._$lW._$l2 + _$fJ;
    }
}
_$1j.prototype._$n9 = function (pt) {
    var _$qf = _$cr();
    _$qf.x = _$qf.x + pt.x;
    _$qf.y = _$qf.y + pt.y;
    _$50(_$qf);
}
_$1j.prototype._$s0 = function (_$rn) {
    _$hT._$s0(_$rn);
    if (_$lh != null && _$lh._$oG != null && _$lh._$oG._$iv.length > 1) {
        _$lh._$oG._$4S(this, _$rn);
    }
    var _$fQ;
    if (this._$kW <= _$r) _$fQ = this._$kW; else _$fQ = this._$jw;
    if (_$kD == _$78 && _$fQ <= _$0K && _$lo._$m1 != null && _$lo._$m1[_$fQ] != null) {
        _$lo._$m1[_$fQ]._$4S(this, _$rn);
    }
}
_$1j.prototype._$cF = function () {
    return this._$hT._$cF();
}
_$1j.prototype._$s3 = function (_$dS) {
    var _$fE = this._$kW;
    var bre = false;
    if (_$fE != _$dS && this._$kD == _$1j._$78) {
        this._$0k();
        bre = true;
    }
    if (_$dS < 0 || _$dS > _$1j._$r) {
        this._$kW = _$1j._$0;
    } else this._$kW = _$dS;
    if (_$fE != this._$kW && bre && this._$kD == _$1j._$57) {
        this._$0k();
    }
}
_$1j.prototype._$cH = function () {
    return this._$kW;
}
_$1j.prototype._$rQ = function (_$dj) {
    if (_$dj < 0) _$dj = 0;
    if (_$dj > 2) _$dj = 2;
    _$km = _$dj;
}
_$1j.prototype._$cp = function () {
    return _$km;
}
_$1j.prototype._$n5 = function (pt) {
    var _$qf = _$cr();
    _$qf.x = _$qf.x + pt.x;
    _$qf.y = _$qf.y + pt.y;
    _$4r(_$qf);
}
_$1j.prototype._$bx = function (_$8n) {
    if (!this._$iR) return;
    var ar = this._$iy;
    var _$gF = ar.length;
    var i;
    for (i = 0; i < _$gF; i++) {
        var tmp = ar[i];
        tmp(_$8n, this);
    }
}
_$1j.prototype._$by = function (iW, iH) {
    var ar = this._$is;
    var _$gF = ar.length;
    var i;
    for (i = 0; i < _$gF; i++) {
        var tmp = ar[i];
        tmp(iW, iH, this._$hB, this);
    }
}
_$1j.prototype._$bw = function (_$d7) {
    var ar = this._$hR;
    var _$gF = ar.length;
    var i;
    for (i = 0; i < _$gF; i++) {
        var tmp = ar[i];
        tmp(_$d7, this);
    }
}
_$1j.prototype._$R = function (_$q6, _$9n, _$oc) {
    this._$lW._$jw = this._$jw;
    this._$lW._$jY = this._$jY;
    this._$lW._$lh = this._$lh;
    this._$lW._$lj = this._$li;
    this._$lW._$le = this;
    this._$lW._$iU = this._$iU;
    if (!this._$Q()) this._$lW._$iW = true; else this._$lW._$iW = false;
    if (!this._$S() || _$1j._$k5 != _$1j._$0Z) {
        this._$2b(this._$lW._$mj);
    } else {
        this._$li._$2d(this._$lW._$mj);
    }
    var _$oQ = null;
    var _$oR = null;
    if (this._$k3 == _$1j._$54) _$oR = this._$lH._$2p(); else _$oR = _$6N._$ls;
    var _$eq = _$oR.length;
    var _$qL = new _$4F();
    var _$93;
    if (this._$iT) _$eq = 0;
    var i;
    for (i = 0; i < _$eq; i++) {
        var pmi;
        if (this._$k3 == _$1j._$54) pmi = _$oR[i]; else pmi = _$6N._$ls[i]._$i5;
        if (pmi._$c6() == null) continue;
        pmi._$2d(_$qL);
        _$93 = false;
        if (!pmi._$iW) {
            _$93 = _$E._$5n(_$qL, _$q6);
            if (_$93) {
            }
        } else {
            _$1j._$cN._$0u(_$qL);
            _$1j._$cN.left -= _$E._$A;
            _$1j._$cN.right += _$E._$A;
            _$1j._$cN.top -= _$E._$A;
            _$1j._$cN.bottom += _$E._$A;
            _$93 = _$E._$5n(_$1j._$cN, _$q6);
            if (_$93) {
                if ((pmi == this._$li) && _$1j._$ju) {
                    _$oQ = null;
                    _$9n[0] = 0xff;
                    this._$lW._$jx = 0xff;
                } else {
                    _$oQ = pmi._$24(this._$lW, this._$lg, _$q6, _$9n, _$oc);
                    if (this._$lW._$jx >= 0 && this._$lW._$jx <= 7) {
                        return _$oQ;
                    }
                }
                if (_$E._$5n(_$qL, _$q6) && pmi != this._$li) {
                    return _$oQ;
                }
            }
        }
    }
    _$oQ = null;
    _$oQ = this._$lo._$24(this._$lW, this._$lg, _$q6, _$9n, _$oc);
    if (_$9n[0] >= 0 && _$9n[0] <= 7) {
        if (this._$lW._$jg) {
            this._$lo._$0h(this._$lW, _$9n, _$oc);
        }
        return _$oQ;
    } else {
        var _$tM = 0;
    }
    return _$oQ;
}
_$1j.prototype._$3h = function (_$8n) {
    if (this._$hT != null) {
        this._$hT.setVisible(_$8n);
    }
    if (this._$hB != null) {
        if (this._$il == null) {
            this._$il = this._$hB.style.overflow;
        }
        if (_$8n) {
            if (this._$il != null) this._$hB.style.overflow = this._$il;
        } else {
            this._$hB.style.overflow = "hidden";
        }
    }
    _$mP._$3h(this._$hB, _$8n);
}
_$1j.prototype._$gf = function () {
    if (this._$kP == 0 && !this._$iF) {
        return false;
    }
    return true;
}
_$1j.prototype._$ch = function () {
    return this._$iF;
}
_$1j.prototype._$rA = function (iHW) {
    if (iHW < 0) iHW = 0;
    this._$k7 = iHW;
    if (this._$lh != null && this._$lh._$oG != null && this._$lh._$oG._$iv.length > 1 && this._$lh._$oG._$bA == this) {
        if (this._$hT._$hA != null) {
            this._$hT._$hA._$rX(new _$16(_$hT._$hA._$cK(), _$k7 + _$G._$6W));
        }
        ;this._$aL();
        if (this._$hT._$hA != null) this._$hT._$hA._$aL();
    } else this._$aL();
}
_$1j.prototype._$c3 = function () {
    return this._$k7;
}
_$1j.prototype._$rJ = function (_$dS) {
    if (this._$lh != null && this._$lh._$oG != null && this._$lh._$oG._$iv.length > 1 && this._$lh._$oG._$bA == this) {
        if (_$dS != this._$jT && _$jT == _$r) {
            remove(_$hT._$hA);
            this._$fA(_$lh._$oG, _$1j._$r);
        } else if (_$dS == _$1j._$r) {
            this._$jT = _$dS;
            this._$6(_$lh._$oG);
        }
    }
    ;this._$jT = _$dS;
    this._$r0(-1);
}
_$1j.prototype._$ce = function () {
    return this._$jT;
}
_$1j.prototype._$fA = function (_$ae, _$gC) {
}
_$1j.prototype.add = function (s, _$ae) {
    return _$ae;
}
_$1j.prototype.addContentDiv = function (_$ae, _$am) {
    this._$hB = _$ae;
    this.m_B = _$mP._$26(_$ae);
    _$ae.style.position = "absolute";
    if (DSXDFUtil._$jP == 0 && DSXDFUtil._$ki <= 7) {
        this.hasOutIFrame();
        return;
    }
    if ((!DSXDFUtil._$iX) && _$ae instanceof HTMLIFrameElement) {
        if (DSXDFUtil._$07(_$ae.id)) {
            this.hasOutIFrame();
        }
    }
}
_$1j.prototype._$6B = function (_$dn, _$dZ, _$e1, _$dh) {
    {
        this._$t9();
    }
    if (!this._$iU) {
        this._$mq.cx = _$e1;
        this._$mq.cy = _$dh;
    }
    ;this._$hM = _$dn;
    this._$hN = _$dZ;
    ;this._$hO = _$e1;
    this._$hL = _$dh;
    this._$ra();
}
_$1j.prototype._$6C = function (_$qw) {
    this._$6B(_$qw.left, _$qw.top, _$E._$2I(_$qw), _$E._$2H(_$qw));
}
_$1j.prototype.setVisible = function (_$8n) {
    if (this._$k3 == _$1j._$4K) {
        this._$3h(_$8n);
        return;
    }
    ;this._$lo._$rZ(this, _$8n);
}
_$1j.prototype._$rZ = function (_$8n) {
    var _$sj = "Demo";
    if (!this._$j9) {
        this._$3h(_$8n);
        return;
    }
    if (_$8n) {
        if (!this._$gh()) {
            this._$3h(true);
            if (this._$kD == _$1j._$78) {
                if (this._$lo != null) {
                    this._$lH._$op._$6F(this);
                }
                return;
            }
            if (this._$li == null) {
                if (!this._$S()) {
                    this._$iU = false;
                    this._$1W();
                } else {
                }
            } else if (this._$lh != null) {
                if (this._$li._$iK || !this._$S()) {
                    var _$cS = 0;
                    this._$e(this._$li);
                    this._$lW._$jx = this._$jw;
                    this._$5B();
                    this._$bw(this._$jw);
                    this._$li._$1d(this, null);
                    this._$3h(true);
                    this._$r0(-1);
                    this._$r9();
                } else {
                    this._$lD = this._$li;
                    this._$00();
                }
            } else this._$1d();
            this._$jk = true;
        }
    } else {
        if (!this._$gh()) {
            if (this._$lh == null || this._$lh._$oG == null || this._$lh._$oG._$iv.length <= 1) return;
            this._$lh._$oG._$6k(this);
        } else {
            if (this._$kD == _$1j._$78) {
                this._$lo._$5U();
                return;
            }
        }
        var _$8X = false;
        if (this._$li != this._$lo) _$8X = true;
        this._$li._$5O(this, null);
        this._$iU = _$8X;
        this._$3h(false);
        this._$jk = false;
    }
    ;this._$bx(_$8n);
}
_$1j.prototype._$S = function () {
    return true;
}
_$1j.prototype._$1d = function () {
    this._$lo._$st(this);
}
_$1j.prototype._$st = function () {
    if (!this._$S()) {
        if (!this._$iU) return;
    }
    var _$8G = false;
    if (this._$li == null) {
        if (this._$kb == 0) {
            this._$li = this._$lo;
            this._$kb = 1;
        } else {
            this._$00();
            _$8G = true;
            if (this._$lO == null) this._$kb = 0;
        }
    } else {
        if (!this._$li._$iK) {
            this._$lD = this._$li;
            this._$00();
            _$8G = true;
        }
    }
    if (this._$li._$iK) this._$iU = false; else this._$iU = true;
    var rc = new _$4F();
    this._$3h(false);
    this._$e(this._$li);
    if (this._$li != null && this._$li._$iK) this._$bw(this._$jw); else this._$bw(_$1j._$1K);
    this._$3h(true);
    if (!_$8G) this._$li._$1d(this, null);
    this._$lo._$2(this);
}
_$1j.prototype._$e = function (_$nL) {
    _$nL._$e(this);
}
_$1j.prototype._$00 = function () {
    if (this._$lD == null) {
        if (this._$k3 == _$1j._$54) {
            this._$lD = new _$J(false);
        } else {
            this._$lD = new _$K(false);
        }
        ;this._$lD._$lC = this._$lo;
        this._$jw = 0;
        this._$jY = 0xffffffff;
        this._$lh = null;
    }
    ;this._$lD._$o(this);
}
_$1j.prototype._$1W = function () {
    this._$lo._$su(this);
}
_$1j.prototype._$5C = function () {
}
_$1j.prototype._$su = function () {
    var rc = new _$4F();
    rc.left = this._$ma.x;
    rc.top = this._$ma.y;
    rc.right = rc.left + this._$mr.cx;
    rc.bottom = rc.top + this._$mr.cy;
    if (this._$li != null && this._$S()) {
        var _$b4 = null;
        if (_$1j._$k5 == _$1j._$0Y && this._$lh._$oG != null && (this._$lh._$oG._$iv.length > 1)) {
            _$b4 = this._$lh._$oG._$27();
        } else {
            _$b4 = new Array(1);
            _$b4[0] = this;
        }
        if (!this._$li._$iK) {
            if (this._$li._$4B(null, false)) {
                var _$pM = this._$li;
                this._$5W(_$b4);
                var i;
                for (i = 0; i < _$b4.length; i++) {
                    _$b4[i]._$li._$5b(_$b4[i]);
                    _$b4[i]._$li._$m(_$b4[i]);
                }
                ;this._$iU = false;
            } else this._$iU = true;
        } else {
            var _$g6 = 0;
            var _$9f = new Array(_$b4.length);
            while (_$g6 < _$b4.length) {
                var i;
                for (i = 0; i < _$b4.length; i++) {
                    if (_$b4[i]._$gh() && !_$9f[i]) {
                        var _$gT = _$b4[i]._$jY;
                        var _$qi = _$b4[i]._$lh;
                        var _$9Q = _$b4[i]._$jw;
                        var _$sS = _$b4[i]._$li;
                        _$b4[i]._$jY = _$b4[i]._$kH;
                        _$b4[i]._$lh = _$b4[i]._$lN;
                        _$b4[i]._$jw = _$b4[i]._$jz;
                        _$b4[i]._$li = _$b4[i]._$lO;
                        if (_$b4[i]._$li != null && !_$b4[i]._$li._$iK) {
                            _$b4[i]._$li._$5b(_$b4[i]);
                        }
                        _$b4[i]._$kH = _$gT;
                        _$b4[i]._$lN = _$qi;
                        _$b4[i]._$jz = _$9Q;
                        _$b4[i]._$lO = _$sS;
                        _$b4[i]._$li = _$sS;
                        _$b4[i]._$lh = _$qi;
                        _$b4[i]._$jw = _$9Q;
                        _$b4[i]._$jY = _$gT;
                        if (_$b4[i]._$li != null) {
                            if (_$1j._$k5 != _$1j._$10) _$b4[i]._$iR = false;
                            _$b4[i]._$li._$5O(_$b4[i], null);
                            _$b4[i]._$iR = true;
                        }
                        _$g6++;
                        _$9f[i] = true;
                    }
                }
            }
        }
    }
    if (this._$lD != null && this._$jk) {
        this._$1X();
        return;
    }
    ;this._$bw(_$1j._$1K);
    this._$iU = true;
    if (this._$jk && !this._$S()) {
        this._$kH = this._$jY;
        this._$lN = this._$lh;
        this._$jz = this._$jw;
        this._$lO = this._$li;
        if (this._$li != null) this._$li._$5O(this, this._$lD);
    }
    if (this._$S()) {
        this._$kb = 1;
        this._$lD = null;
        this._$00();
        this._$r0(-1);
    } else {
        this._$5C();
        this._$lD = new _$K(false);
        this._$lD._$lC = _$lo;
        this._$lD._$lr = this;
        var _$eT = rc.left;
        var _$gX = rc.top;
        _$E._$6A(_$lD._$c6(), null, _$eT, _$gX, this._$mr.cx, this._$mr.cy, 0);
        this._$lD._$c6().setVisible(true);
        this._$lD._$c8()._$t9();
        this._$li = this._$lD;
        this._$r0(-1);
    }
}
_$1j.prototype._$39 = function (_$q6) {
    return this._$lh._$39(this, _$q6);
}
_$1j.prototype._$3G = function () {
    if (this._$iB && !this._$iU) {
        this._$iB = false;
        this._$1r(this._$iB);
    }
}
_$1j.prototype._$6R = function () {
    if (this._$jz <= 3 && !this._$1p(this._$lO, this._$jz)) return;
    if ((this._$lO != null) && (!this._$lO._$iK) && (!this._$iF)) return;
    var _$ql = null;
    var _$qi = null;
    var _$9P;
    var _$9Q;
    _$ql = this._$li;
    _$qi = this._$lh;
    _$9P = this._$jY;
    _$9Q = this._$jw;
    if (this._$li != null) this._$li._$5O(this, null);
    this._$li = this._$lO;
    this._$lh = this._$lN;
    this._$jY = this._$kH;
    this._$jw = this._$jz;
    this._$lO = _$ql;
    this._$lN = _$qi;
    this._$kH = _$9P;
    this._$jz = _$9Q;
    this._$lW._$jx = this._$jw;
    this._$5B();
    this._$1d();
    this._$r0(-1);
}
_$1j.prototype._$1r = function (_$7V) {
}
_$1j.prototype._$4U = function () {
    _$5l();
}
_$1j.prototype._$5l = function () {
    if (_$kD == _$1j._$78) return;
    _$7t();
    if (!_$S()) {
        if (!_$iU) {
            if (_$iF) {
                _$lD = null;
                _$1W();
            }
        } else {
            if (_$aO(_$jz)) {
                var _$ql = null;
                var _$qi = null;
                var _$9P;
                var _$9Q;
                _$ql = _$li;
                _$qi = _$lh;
                _$9P = _$jY;
                _$9Q = _$jw;
                _$li = _$lO;
                _$lh = _$lN;
                _$jY = _$kH;
                _$jw = _$jz;
                _$lO = _$ql;
                _$lN = _$qi;
                _$kH = _$9P;
                _$jz = _$9Q;
                _$lW._$jx = _$jw;
                _$5B();
                if (!_$iU) return;
                _$iU = false;
                if (_$li == null) _$li = _$lo;
                var rc = new _$4F();
                _$3h(false);
                _$e(_$li);
                _$bw(_$jw);
                _$li._$1d(this, null);
                _$3h(true);
                _$lo._$2(this);
                if (_$lO != null && !_$lO._$iK) {
                    this._$lD._$2d(rc);
                    _$ma.x = rc.left;
                    _$ma.y = rc.top;
                }
                _$li._$c8()._$r9();
                this._$r0(-1);
            }
        }
    } else {
        _$6R();
    }
}
_$1j.prototype._$ab = function () {
    if (this._$kD == _$1j._$78) {
        this._$lH._$op._$5U();
        this._$bx(false);
        return true;
    }
    ;this._$li._$5O(this, null);
    this._$3h(false);
    this._$jk = false;
    this._$bx(false);
    return true;
}
_$1j.prototype._$0k = function () {
    if (!this._$j9) return;
    if (this._$kD == _$1j._$57) {
        var b = this._$gb();
        this._$li._$5O(this, null);
        this._$3h(false);
        this._$jk = false;
        this._$kD = _$1j._$78;
        this._$bx(false);
        if (this._$kW > _$1j._$r) {
            if (b) {
                if (this._$jz >= 0 && this._$jz <= 3) {
                    this._$lo._$9(this._$jw, this, true);
                } else {
                    this._$lo._$9(this._$jw, this, true);
                }
            } else {
                this._$lo._$9(this._$jw, this, true);
            }
        } else this._$lo._$9(this._$kW, this, true);
        this._$lo._$5H(0);
        this._$r0(-1);
    } else {
        this._$3h(false);
        if (this._$kW <= _$1j._$r) this._$lo._$5T(this._$kW, this); else this._$lo._$5T(this._$jw, this);
        this._$lo._$5H(0);
        this._$lH._$op._$5U();
        this._$jk = false;
        this._$kD = _$1j._$57;
        this.setVisible(true);
    }
}
_$1j.prototype._$5X = function () {
    if (this._$lh != this._$lW._$lf) {
        var _$tM = this._$lW._$jx;
        this._$0k();
        this._$lW._$jx = _$tM;
    }
}
_$1j.prototype._$cR = function () {
    return this._$iZ;
}
_$1j.prototype._$rO = function (_$88) {
    this._$iZ = _$88;
    this._$hT._$hu.width = this._$hT._$hu.width;
    this._$hT._$r9();
}
_$1j.prototype._$5B = function () {
}
_$1j._$et = 0;
_$1j.prototype._$50 = function (_$q7) {
    return this._$lo._$sw(this, _$q7);
}
_$1j.prototype._$sw = function (_$q7) {
    _$1j._$iG = false;
    this._$lW._$jx = 0xff;
    this._$lW._$iL = false;
    this._$iO = true;
    if (this._$li != null && this._$li._$iK) {
        if ((_$1j._$k5 == _$1j._$0Y) && this._$lh._$oG != null && this._$lh._$oG._$iv.length > 1) {
            var _$fx;
            var _$py = this._$lh._$oG._$27();
            _$fx = _$py.length;
            var i;
            for (i = 0; i < _$fx; i++) {
                if ((_$py[i]._$kP & 0x0F) != 0) break;
            }
            if (i == _$fx) {
                return 0;
            }
            for (i = 0; i < _$fx; i++) {
                if (_$py[i]._$iF) break;
            }
            if (i == _$fx) this._$iO = false;
        } else {
            if (!this._$iF) {
                this._$iO = false;
            }
        }
    }
    _$1j._$ju = false;
    if (this._$li != null && !this._$li._$iK) {
        if (this._$li._$iW) {
            if (_$1j._$k5 == _$1j._$10) _$1j._$ju = !this._$li._$4B(null, false); else if (_$1j._$k5 == _$1j._$0Y) _$1j._$ju = !this._$li._$4B(null, true); else if (_$1j._$k5 == _$1j._$0Z) _$1j._$ju = true;
        }
    }
    if (this._$li != null && !this._$li._$iK && !this._$S()) _$1j._$ju = true;
    this._$2b(this._$me);
    if (_$1j._$ju) {
        if (_$1j._$k5 == _$1j._$0Z) {
            _$1j._$kF = this._$mr.cx;
            _$1j._$kG = this._$mr.cy;
        }
        {
            if (this._$li != null) {
                this._$li._$2d(this._$me);
            }
            ;this._$mr.cx = _$E._$2I(this._$me);
            this._$mr.cy = _$E._$2H(this._$me);
        }
    }
    ;this._$ja = true;
    this._$mf.left = this._$mf.right = this._$mf.right = this._$mf.bottom = 0;
    this._$l4 = _$q7.x - this._$me.left;
    this._$l6 = _$E._$2I(this._$me);
    this._$l9 = _$q7.y - this._$me.top;
    this._$l8 = _$E._$2H(this._$me);
    this._$3J();
    this._$4R();
    this._$iJ = false;
    _$1j._$ms.cx = this._$mq.cx;
    _$1j._$ms.cy = this._$mq.cy;
    this._$jf = false;
    this._$ja = false;
    return 0;
}
_$1j.prototype._$4R = function () {
}
_$1j.prototype._$1a = function (_$tT, _$hm) {
    _$kd = 0;
    return _$kd;
}
_$1j.prototype._$mS = function () {
    _$1j._$iG = true;
    this._$4r(_$1j._$m8);
}
_$1j.prototype._$mT = function () {
    _$1j._$iG = false;
    this._$4r(_$1j._$m8);
}
_$1j.prototype._$4r = function (pt) {
    _$1j._$m8.x = pt.x;
    _$1j._$m8.y = pt.y;
    this._$jf = true;
    if (this._$k3 == _$1j._$54) {
        var rcb = new _$4F();
        this._$lH._$2c(rcb);
        if (!_$E._$5n(rcb, pt)) return;
    }
    ;this._$mk._$0u(this._$me);
    var _$8G = false;
    this._$lW._$iL = false;
    this._$lW._$j5 = false;
    this._$lW._$lt = this._$R(pt, this._$mu, _$1j._$ms);
    if (_$1j._$iG) {
        this._$mu[0] = 0xff;
        this._$lW._$jx = 0xff;
    }
    if (this._$mu[0] <= 7 && !this._$aO(this._$mu[0]) && !this._$S()) {
        this._$mu[0] = 8;
        this._$lW._$jx = 0xff;
    }
    if (this._$S() && this._$mu[0] <= 7) {
        var i = 0;
        var _$fx;
        if ((_$1j._$k5 == _$1j._$0Y) && (this._$lh._$oG != null) && this._$lh._$oG._$iv.length > 1) {
            var _$py = this._$lh._$oG._$27();
            _$fx = _$py.length;
            for (i = 0; i < _$fx; i++) {
                if (_$py[i]._$1p(this._$lW._$lt, this._$mu[0])) break;
            }
            if (i == _$fx) {
                this._$mu[0] = 8;
            }
        } else {
            if (_$1j._$k5 != _$1j._$0Z) {
                if (!this._$1p(this._$lW._$lt, this._$lW._$jx)) {
                    this._$mu[0] = 8;
                }
            } else {
                var _$7S = new _$D();
                var pbk = (this._$li._$m0[0]._$hS._$m2[0])._$lp;
                pbk._$2Y(_$7S);
                var ic = _$7S._$2e();
                for (i = 0; i < ic; i++) {
                    if (_$7S._$m2[i]._$1p(this._$lW._$lt, this._$mu[0])) break;
                }
                if (i == ic) {
                    this._$mu[0] = 8;
                }
            }
        }
        if (this._$mu[0] == 8) {
            this._$lW._$jx = 0xff;
            this._$lW._$iL = false;
        }
    }
    if ((this._$mu[0] == 0xff) || (this._$mu[0] > 7)) {
        {
            this._$me.left = pt.x - this._$mr.cx * this._$l4 / this._$l6;
            this._$me.top = pt.y - this._$mr.cy * this._$l9 / this._$l8;
            var _$qT = new _$5A();
            DSXDFUtil._$2M(_$qT);
            if (this._$me.top < 0) this._$me.top = 0;
            if ((this._$me.top + 15) > (_$qT.y + _$qT.height)) {
                this._$me.top = _$qT.y + _$qT.height - 15;
            }
            if ((this._$me.left + this._$mr.cx - 15) < _$qT.x) {
                this._$me.left = _$qT.x + 15 - this._$mr.cx;
            }
            if ((this._$me.left + 15) > (_$qT.x + _$qT.width)) {
                this._$me.left = _$qT.x + _$qT.width - 15;
            }
            ;this._$me.right = this._$me.left + this._$mr.cx;
            this._$me.bottom = this._$me.top + this._$mr.cy;
        }
    } else {
        if (this._$S()) {
            if (this._$lW._$jg && this._$lW._$kN >= 0 && this._$lW._$lt != null) {
                var _$eq = this._$lW._$lt._$m0[this._$mu[0]]._$hS._$2e();
                var _$gt = this._$lW._$kN - 1;
                if (_$gt < _$eq) {
                    var _$qq = null;
                    var k;
                    for (k = 0; k <= _$gt; k++) {
                        _$qq = this._$lW._$lt._$m0[this._$mu[0]]._$hS._$m2[_$gt - k];
                        if (_$qq._$jt) break;
                        _$qq = null;
                    }
                    var rca = new _$4F();
                    if (_$qq != null) {
                        rca._$0u(_$qq._$mc);
                    } else {
                        this._$lW._$lt._$2d(rca);
                        rca.left += this._$lW._$lt._$kc[0];
                        rca.right -= this._$lW._$lt._$kc[2];
                        rca.top += this._$lW._$lt._$kc[1];
                        rca.bottom -= this._$lW._$lt._$kc[3];
                    }
                    if (this._$mu[0] == _$1j._$0M || this._$mu[0] == _$1j._$0O) {
                        _$1j._$ms.cy = rca.bottom - rca.top;
                        pt.x = 0;
                        pt.y = rca.top;
                        this._$lW._$l7 = pt.y;
                    } else {
                        _$1j._$ms.cx = rca.right - rca.left;
                        pt.x = rca.left;
                        pt.y = 0;
                        this._$lW._$l2 = pt.x;
                    }
                }
            }
            ;this._$me.left = this._$lW._$l2;
            this._$me.top = this._$lW._$l7;
        } else {
            this._$me.left = pt.x - _$1j._$ms.cx * this._$l4 / this._$l6;
            this._$me.top = pt.y - _$1j._$ms.cy * this._$l9 / this._$l8;
        }
        ;this._$me.right = this._$me.left + _$1j._$ms.cx;
        this._$me.bottom = this._$me.top + _$1j._$ms.cy;
        _$8G = true;
    }
    if (_$1j._$k5 == _$1j._$10) {
        if (this._$lW._$j5) {
            this._$T();
            return;
        } else {
            this._$3I();
        }
    }
    if (this._$k3 == _$1j._$54) {
        this._$4u(_$8G);
        return;
    }
    {
        _$mF._$rI(_$8G, this._$iF);
        _$my._$rI(_$8G, this._$iF);
        _$mB._$rI(_$8G, this._$iF);
        _$mC._$rI(_$8G, this._$iF);
        this._$mN(this._$me.left, this._$me.top, this._$me.right - this._$me.left, this._$me.bottom - this._$me.top);
        if ((_$mk.right - _$mk.left) != (this._$me.right - this._$me.left)) {
            _$mF._$t9();
            _$my._$t9();
        }
        if ((_$mk.bottom - _$mk.top) != (this._$me.bottom - this._$me.top)) {
            _$mB._$t9();
            _$mC._$t9();
        }
    }
}
_$1j.prototype._$4u = function (_$8G) {
    if (_$1j._$ig == null) return;
    _$1j._$ig._$rI(_$8G, this._$iF);
    _$1j._$i9._$rI(_$8G, this._$iF);
    _$1j._$ic._$rI(_$8G, this._$iF);
    _$1j._$id._$rI(_$8G, this._$iF);
    var pt = new _$5i();
    pt.x = this._$me.left;
    pt.y = this._$me.top;
    this._$mM(pt.x, pt.y, this._$me.right - this._$me.left, this._$me.bottom - this._$me.top);
    if ((this._$mk.right - this._$mk.left) != (this._$me.right - this._$me.left)) {
        _$1j._$ig._$t9();
        _$1j._$i9._$t9();
    }
    if ((this._$mk.bottom - this._$mk.top) != (this._$me.bottom - this._$me.top)) {
        _$1j._$ic._$t9();
        _$1j._$id._$t9();
    }
}
_$1j.prototype._$2Y = function (_$nB, _$nU, _$8k, _$82) {
    var _$7S = new _$D();
    var com = _$nB._$c4();
    var _$sU;
    var i;
    for (i = 0; i < com.length; i++) {
        if (com[i] instanceof _$1j) {
            _$sU = com[i];
            if (!_$sU._$lh._$8L) {
                if (_$sU._$lh._$oG != null && _$sU._$lh._$oG._$iv.length >= 1) {
                    var _$eq = _$sU._$lh._$oG._$iv.length;
                    var j;
                    for (j = 0; j < _$eq; j++) {
                        _$nB._$5L(_$sU._$lh._$oG._$iv[j]._$nr);
                        _$nU.Add(_$sU._$lh._$oG._$iv[j]._$nr);
                        _$7S._$c(_$sU._$lh._$oG._$iv[j]._$nr);
                    }
                    if (_$8k) {
                    }
                    _$sU._$lh._$oG = null;
                } else {
                    if (com[i]._$gh()) {
                        _$nB._$5L(com[i]);
                        _$nU.Add(com[i]);
                        _$7S._$c(com[i]);
                    }
                }
                _$sU._$lh._$8L = true;
                _$sU._$lh._$j();
            }
        } else {
            if (com[i] instanceof _$N) {
                _$nB._$5L(com[i]);
                if (_$82) {
                    com[i]._$aE();
                }
            }
        }
    }
    var _$eq = _$7S._$2e();
    if (!_$nB._$iK && !_$nU._$iK) {
        var i;
        for (i = 0; i < _$eq; i++) {
            var _$os = _$7S._$m2[i];
            _$nB._$5b(_$os);
        }
    } else if (!_$nB._$iK && _$nU._$iK) {
        var _$9Q;
        var _$qi;
        var _$ql;
        var _$gW;
        var i;
        for (i = 0; i < _$eq; i++) {
            var _$os = _$7S._$m2[i];
            _$9Q = _$os._$jw;
            _$qi = _$os._$lh;
            _$ql = _$os._$li;
            _$gW = _$os._$jY;
            _$os._$lW._$jx = this._$lW._$jx;
            _$os._$lW._$kN = this._$lW._$kN;
            _$os._$jw = _$os._$jz;
            _$os._$lh = _$os._$lN;
            _$os._$jY = _$os._$kH;
            _$os._$li = _$os._$lO;
            if (_$os._$li != null) _$os._$li._$5b(_$os);
            this._$lW._$kN = _$os._$lW._$kN;
            _$os._$lO = _$ql;
            _$os._$jz = _$9Q;
            _$os._$lN = _$qi;
            _$os._$kH = _$gW;
        }
    } else {
    }
    _$nB._$m0[0]._$hS._$m2[0]._$jt = false;
    _$nB._$02();
    return _$7S;
}
_$1j.prototype._$3b = function (_$nB, _$nU) {
    if (_$nB._$iK) return null;
    var _$pc = new _$F();
    var _$pg = _$nB._$m0[0]._$hS._$m2[0]._$lp;
    _$pc._$5Q(_$pg);
    var _$7S;
    _$7S = this._$2Y(_$nB, _$nU, false, false);
    if (!_$nU._$iK && this._$lW._$jg) {
        _$pc._$5D(_$nU, 0);
    } else _$pc._$5D(_$nU, this._$lW._$jx);
    var _$eq = _$7S._$2e();
    var i;
    for (i = 0; i < _$eq; i++) {
        if (_$7S._$m2[i] != this) _$7S._$m2[i]._$r0(-1);
    }
    return _$pc;
}
_$1j.prototype._$38 = function (_$nA) {
    this._$lW._$jx = _$nA._$jx;
    this._$lW._$kN = _$nA._$kN;
    this._$li._$5O(this, _$nA._$lt);
    this._$kd = 1;
    if (this._$li != _$nA._$lt) {
        if (this._$li != null && (this._$li._$iK != _$nA._$lt._$iK)) {
            var _$9Q;
            var _$ql;
            var _$gV;
            var _$qi;
            _$9Q = this._$jw;
            _$ql = this._$li;
            _$gV = this._$jY;
            _$qi = this._$lh;
            this._$li = this._$lO;
            this._$jw = this._$jz;
            this._$jY = this._$kH;
            this._$lh = this._$lN;
            if (this._$li != null) {
                this._$li._$5b(this);
            }
            ;this._$lO = _$ql;
            this._$jz = _$9Q;
            this._$kH = _$gV;
            this._$lN = _$qi;
        }
    }
    _$nA._$kN = this._$lW._$kN;
}
_$1j.prototype._$5W = function (_$b4) {
    var _$g6 = 0;
    var _$9f = new Array(_$b4.length);
    while (_$g6 < _$b4.length) {
        var i;
        for (i = 0; i < _$b4.length; i++) {
            if (_$b4[i]._$gh() && !_$9f[i]) {
                this._$li._$5O(_$b4[i], null);
                _$g6++;
                _$9f[i] = true;
            }
        }
    }
}
_$1j.prototype._$7i = function () {
    var _$qT = DSXDFUtil._$mi;
    if (this._$ma.y < _$qT.y) this._$ma.y = _$qT.y;
    if ((this._$ma.x + 15) > (_$qT.x + _$qT.width)) this._$ma.x = _$qT.x + _$qT.width - 15;
    if ((this._$ma.y + 15) > (_$qT.y + _$qT.height)) this._$ma.y = _$qT.y + _$qT.height - 15;
    if ((this._$ma.x + this._$mr.cx - 15) < _$qT.x) this._$ma.x = _$qT.x + 15 - this._$mr.cx;
}
_$1j.prototype._$7e = function (_$o0, _$oj) {
    var _$qp = _$oj._$pp;
    var _$pY = _$o0;
    var pb = _$oj;
    if (_$qp != null && _$pY != null) {
        var _$qU = new _$4F();
        _$pY._$28(_$qU);
        var _$gA = _$qU.bottom - _$qU.top;
        var _$gB = _$qU.right - _$qU.left;
        if ((_$qp._$9M == _$E._$3u || _$qp._$9M == _$E._$3r) && _$gA > 0 && (_$gA > this._$mq.cy) && this._$mq.cy > 0) {
            if (pb._$9x == _$E._$3u) {
                _$qp._$bJ = 1.0 * this._$mq.cy / (_$gA - this._$mq.cy);
            } else {
                _$qp._$bJ = 1.0 * (_$gA - this._$mq.cy) / this._$mq.cy;
            }
        } else if ((_$qp._$9M == _$E._$3s || _$qp._$9M == _$E._$3t) && _$gB > 0 && (_$gB > this._$mq.cx) && this._$mq.cx > 0) {
            if (pb._$9x == _$E._$3s) _$qp._$bJ = 1.0 * this._$mq.cx / (_$gB - this._$mq.cx); else _$qp._$bJ = 1.0 * (_$gB - this._$mq.cx) / this._$mq.cx;
        }
        if (_$qp._$bJ < 0.01) _$qp._$bJ = 0.01;
    }
}
_$1j.prototype._$1D = function (pt) {
    this._$7u();
    var _$cS = 0;
    this._$T();
    if (!this._$jf) return;
    if (this._$lW._$j5) return;
    var _$9E = null;
    var _$ql;
    var _$9Q;
    var _$gV;
    var _$qi;
    var _$fx = 0;
    if ((this._$lW._$jx != 0xff) && (this._$lW._$jx < 4)) {
        var _$oB = this;
        if (_$1j._$k5 != _$1j._$0Z) {
            this._$mq.cx = _$1j._$ms.cx;
            this._$mq.cy = _$1j._$ms.cy;
        }
        if ((this._$jw == this._$lW._$jx) && (this._$jY == this._$lW._$kN) && (this._$lh == this._$lW._$lf) && this._$lW._$jy == 0xff) return;
        var _$8H = false;
        var _$b4 = null;
        var pb = null;
        if (_$1j._$k5 == _$1j._$0Y && this._$lh._$oG != null && this._$lh._$oG._$iv.length > 1) {
            _$8H = true;
            var _$py = this._$lh._$oG._$27();
            _$b4 = new Array(_$py.length);
            var i;
            var _$en = 0;
            var _$eM = 0;
            _$fx = _$py.length;
            var _$pr = new Array(_$fx);
            _$9E = new Array(_$fx);
            for (i = 0; i < _$fx; i++) {
                if (_$py[i]._$1p(this._$lW._$lt, this._$lW._$jx)) {
                    _$b4[_$en] = _$py[i];
                    _$en++;
                } else {
                    _$pr[_$eM] = _$py[i];
                    _$9E[_$eM] = _$pr[_$eM]._$gh();
                    if (_$pr[_$eM] == this) _$oB = null;
                    _$eM++;
                }
            }
            if (_$en == 0) {
                return;
            }
            for (i = 0; i < _$eM; i++) {
                _$pr[i]._$iR = false;
                _$pr[i].setVisible(false);
                _$pr[i]._$iR = true;
            }
            if (_$en > 0 && _$oB == null) {
                for (i = 0; i < _$en; i++) {
                    if (_$b4[i]._$gh()) {
                        _$oB = _$b4[i];
                        break;
                    }
                }
            }
            _$fx = _$en;
            var _$g6 = 0;
            var _$9f = new Array(_$fx);
            var j;
            for (j = 0; j < _$fx; j++) {
                for (i = 0; i < _$fx; i++) {
                    if (_$b4[i]._$gh() && !_$9f[i]) {
                        _$b4[i]._$iR = false;
                        _$b4[i]._$38(this._$lW);
                        _$b4[i]._$iR = true;
                        _$g6++;
                        _$9f[i] = true;
                    }
                }
            }
            for (i = 0; i < _$eM; i++) {
                if (!_$9E[i]) _$pr[i].setVisible(true); else {
                    _$pr[i]._$iR = false;
                    _$pr[i].setVisible(true);
                    _$pr[i]._$iR = true;
                }
            }
        } else {
            if (_$1j._$k5 != _$1j._$0Z) {
                if (!this._$1p(this._$lW._$lt, this._$lW._$jx)) return;
                _$b4 = new Array(1);
                _$b4[0] = this;
                this._$38(this._$lW);
            } else {
                var _$7S = new _$D();
                var pbk = this._$li._$m0[0]._$hS._$m2[0]._$lp;
                pbk._$2Y(_$7S);
                var i;
                var ic = _$7S._$2e();
                var _$pr = new Array(ic);
                _$b4 = new Array(ic);
                _$9E = new Array(ic);
                var _$eM = 0;
                var _$fx = 0;
                for (i = 0; i < ic; i++) {
                    if (!_$7S._$m2[i]._$1p(this._$lW._$lt, this._$lW._$jx)) {
                        _$pr[_$eM] = _$7S._$m2[i];
                        _$9E[_$eM] = _$pr[_$eM]._$gh();
                        _$eM++;
                    } else {
                        _$b4[_$fx] = _$7S._$m2[i];
                        _$fx++;
                    }
                }
                if (_$eM == ic) {
                    return;
                }
                var _$oC = this._$li;
                for (i = 0; i < _$eM; i++) {
                    if (_$pr[i] == this) _$oB = null;
                    _$pr[i]._$iR = false;
                    _$pr[i].setVisible(false);
                    _$pr[i]._$iR = true;
                }
                if (!this._$lW._$iL) {
                    pb = this._$3b(_$oC, this._$lW._$lt);
                    _$oC._$m(null);
                } else {
                    var _$7T = this._$2Y(this._$li, this._$lW._$lt, true, true);
                    var ino = _$7T._$2e();
                    _$b4 = new Array(ino);
                    for (i = 0; i < ino; i++) {
                        _$b4[i] = _$7T._$m2[i];
                        if (_$oB == null && _$b4[i]._$gh()) {
                            _$oB = _$b4[i];
                        }
                    }
                }
                for (i = 0; i < _$eM; i++) {
                    if (!_$9E[i]) _$pr[i].setVisible(true); else {
                        _$pr[i]._$iR = false;
                        _$pr[i].setVisible(true);
                        _$pr[i]._$iR = true;
                    }
                }
            }
        }
        if (_$1j._$k5 != _$1j._$0Z && _$oB != null) {
            _$oB._$jw = this._$lW._$jx;
            _$oB._$jY = this._$lW._$kN;
        }
        if (this._$lW._$iL) {
            this._$lW._$lf = this._$lW._$lq._$lh;
            var i;
            for (i = 0; i < _$b4.length; i++) {
                _$b4[i]._$lh = this._$lW._$lf;
                _$b4[i]._$lh._$3(_$b4[i]);
                _$b4[i]._$li = this._$lW._$lt;
                _$b4[i]._$jw = this._$lW._$jx;
                _$b4[i]._$jY = this._$lW._$kN;
                if (_$b4[i]._$lo._$k2 != DSXDFUtil._$0U) {
                    _$b4[i]._$r0(-1);
                }
                if (_$b4[i]._$li != null && _$b4[i]._$li._$iK) {
                    _$b4[i]._$bw(_$b4[i]._$jw);
                } else _$b4[i]._$bw(_$1j._$1K);
            }
            ;this._$rw(true, true);
            return;
        }
        if (this._$lW._$lf != null) {
            _$oB._$jY = this._$lW._$lf._$oP._$jY;
            if (_$1j._$k5 != _$1j._$0Z) pb = new _$F();
            if (_$8H) {
                pb._$0z(_$b4, _$fx, _$oB, this._$lW._$lt);
                var k;
                for (k = 0; k < _$fx; k++) {
                    _$b4[k]._$jY = _$oB._$jY;
                    _$b4[k]._$jw = _$oB._$jw;
                    _$b4[k]._$li = this._$lW._$lt;
                }
            } else {
                if (_$1j._$k5 != _$1j._$0Z) pb._$oP = _$oB;
            }
            pb._$8L = true;
            var _$qp = this._$lW._$lf._$pp;
            var _$pw = new Array(1);
            _$oB._$0D(this._$lW._$lf, pb, this._$lW._$jy, _$pw);
            var _$pY = _$pw[0];
            if (_$1j._$k5 != _$1j._$0Z) _$oB._$lh = pb;
            _$qp = pb._$pp;
            _$oB._$7e(_$pY, pb);
        } else {
            if (_$1j._$k5 != _$1j._$0Z && _$oB != null) _$oB._$lh = null;
        }
        if (!this._$lW._$lt._$iK) {
            this._$lW._$lt.Add(this);
        }
        if (_$1j._$k5 != _$1j._$0Z && _$oB != null) _$oB._$jw = this._$lW._$jx;
        if (!this._$lW._$lt._$iK && this._$lW._$jg) {
            if (_$1j._$k5 != _$1j._$0Z) this._$lW._$lt._$1l(this._$lW, this._$mq); else this._$lW._$lt._$3O(pb, this._$lW, this._$mq);
        }
        if (this._$lW._$lf == null) {
            if (_$1j._$k5 != _$1j._$0Z) {
                if (_$oB != null) {
                    _$oB._$li = this._$lW._$lt;
                    if (_$oB != this) {
                        _$oB._$mq = this._$mq;
                    }
                    ;this._$lW._$lt._$1d(_$oB, null);
                    _$oB._$lh._$0z(_$b4, _$fx, _$oB, this._$lW._$lt);
                    var i;
                    for (i = 0; i < _$fx; i++) {
                        if (_$b4[i] != this) {
                            _$b4[i]._$jw = _$oB._$jw;
                            _$b4[i]._$jY = _$oB._$jY;
                            _$b4[i]._$li = this._$lW._$lt;
                            if (_$b4[i]._$lo._$k2 != DSXDFUtil._$0U) {
                                _$b4[i]._$r0(-1);
                            }
                            if (_$b4[i]._$li != null && _$b4[i]._$li._$iK) _$b4[i]._$bw(_$b4[i]._$jw); else _$b4[i]._$bw(_$1j._$1K);
                        }
                    }
                }
                if (this._$lh._$oG != null) this._$lh._$oG._$5G();
            } else {
                this._$lW._$lt._$1e(pb, this._$lW._$jx, this._$lW._$kN);
                var k;
                for (k = 0; k < _$fx; k++) {
                    if (_$b4[k] != this) {
                        if (_$b4[k]._$li != null && _$b4[k]._$li._$iK) _$b4[k]._$bw(_$b4[k]._$jw); else _$b4[k]._$bw(_$1j._$1K);
                    }
                }
            }
        } else {
            if (_$1j._$k5 != _$1j._$0Z) {
                _$oB._$li = this._$lW._$lt;
                this._$lW._$lt._$1d(_$oB, null);
            } else {
                this._$lW._$lt._$1e(pb, this._$lW._$jx, this._$lW._$kN);
            }
        }
        if (!this._$lW._$lt._$iK) {
            this._$lW._$lt._$7C();
        }
        if (_$oB != null) {
            if (this._$lW._$lt != null && this._$lW._$lt._$iK) _$oB._$bw(this._$lW._$jx); else _$oB._$bw(_$1j._$1K);
            _$oB._$r0(-1);
            if (this._$lW._$lt != null) {
            }
            _$oB._$li = this._$lW._$lt;
        }
        if (this._$lW._$jg && this._$li._$iK) {
            this._$Y(this._$li, this._$lW._$jx, this._$jY);
        }
    } else {
        this._$ma.x = this._$me.left;
        this._$ma.y = this._$me.top;
        if (!this._$li._$iK && _$1j._$ju) {
            this._$1X();
        } else {
            var _$8R = this._$iU;
            var _$pu = null;
            var _$eM = 0;
            var _$h0;
            _$fx = 0;
            if (this._$lh._$oG != null && _$1j._$k5 != _$1j._$10) _$pu = this._$lh._$oG._$27();
            if (_$pu == null || _$pu.length == 0) {
                _$pu = new Array(1);
                _$pu[0] = this;
                _$h0 = 1;
            }
            _$h0 = _$pu.length;
            var _$b4 = new Array(_$h0);
            var _$pr = new Array(_$h0);
            _$9E = new Array(_$h0);
            var i;
            for (i = 0; i < _$h0; i++) {
                if (!_$pu[i]._$iF) {
                    _$pr[_$eM] = _$pu[i];
                    _$9E[_$eM] = _$pr[_$eM]._$gh();
                    _$eM++;
                } else {
                    _$b4[_$fx] = _$pu[i];
                    _$fx++;
                }
            }
            if (_$eM == _$h0) {
                return;
            }
            var _$oA = this;
            for (i = 0; i < _$eM; i++) {
                if (_$pr[i] == this) _$oA = null;
                _$pr[i]._$iR = false;
                _$pr[i].setVisible(false);
                _$pr[i]._$iR = true;
            }
            if (_$oA == null) {
                for (i = 0; i < _$fx; i++) {
                    if (_$b4[i]._$gh()) {
                        _$oA = _$b4[i];
                        break;
                    }
                }
            }
            _$oA._$lD = null;
            _$oA._$1W();
            if (_$1j._$k5 == _$1j._$0Y) {
                if (_$b4 != null) {
                    _$oA._$lh._$p(_$b4, _$fx, _$oA, _$oA._$li);
                    for (i = 0; i < _$fx; i++) {
                        _$b4[i]._$jY = _$oA._$jY;
                        _$b4[i]._$jw = _$oA._$jw;
                        _$b4[i]._$lD = _$oA._$li;
                        _$b4[i]._$kb = 1;
                        if (_$b4[i] != this && _$b4[i]._$lo._$k2 != DSXDFUtil._$0U) {
                            _$b4[i]._$r0(-1);
                        }
                        if (_$b4[i] != this) _$b4[i]._$bw(_$1j._$1K);
                    }
                }
            }
            for (i = 0; i < _$eM; i++) {
                if (!_$9E[i]) _$pr[i].setVisible(true); else {
                    _$pr[i]._$iR = false;
                    _$pr[i].setVisible(true);
                    _$pr[i]._$iR = true;
                }
            }
            if (!_$8R) {
            }
        }
    }
}
_$1j.prototype._$r0 = function (_$9r) {
    var kst = "(Demo)";
    var _$fp = -1;
    if (this._$jT >= _$1j._$0) {
        if (this._$li != null && this._$li._$iK && this._$lo._$k2 != DSXDFUtil._$0U) {
            if ((this._$jw == _$E._$3s) || (this._$jw == _$E._$3t)) {
                this._$fA(this._$hT, _$1j._$6X);
                _$fp = _$1j._$6X;
            } else {
                this._$fA(this._$hT, _$1j._$40);
                _$fp = _$1j._$40;
            }
        } else {
            this._$fA(this._$hT, _$1j._$6X);
            _$fp = _$1j._$6X;
        }
    } else {
        var _$8C = false;
        if (this._$lh != null && this._$lh._$oG != null && this._$lh._$oG._$iv.length > 1 && this._$lh._$oG._$bA == this) _$8C = true;
        if (!_$8C) remove(this._$hT); else {
        }
        if (this._$jT == _$40) {
            this._$fA(this._$hT, _$1j._$40);
            _$fp = _$1j._$40;
        } else if (this._$jT == _$1j._$5r) {
            this._$fA(this._$hT, _$1j._$5r);
            _$fp = _$1j._$5r;
        } else if (this._$jT == _$1j._$6X) {
            this._$fA(this._$hT, _$1j._$6X);
            _$fp = _$1j._$6X;
        } else {
            if (!_$8C) {
                this._$fA(this._$hT, _$1j._$r);
                _$fp = _$1j._$r;
            } else {
            }
        }
    }
    if (_$fp != this._$k6) {
        this._$k6 = _$fp;
        this._$ra();
    }
    ;this._$t9();
}
_$1j.prototype._$bZ = function (_$e1, _$dh, _$s9, _$8W) {
    if (_$e1 < 40) _$e1 = 40;
    if (_$dh < 40) _$dh = 40;
    _$s9.cx = _$e1;
    _$s9.cy = _$dh;
}
_$1j.prototype._$6l = function (_$9n) {
    if ((_$9n <= 3) && (_$9n != 0xff)) {
        if (((this._$kP >> _$9n) & 0x01) == 1) {
            return _$9n;
        }
    }
    var i;
    for (i = 0; i < 4; i++) {
        if (((this._$kP >> i) & 0x01) == 1) {
            _$9n = i;
            return _$9n;
        }
    }
    return 0xff;
}
_$1j.prototype._$6 = function (_$nF) {
    if (this._$jT != _$1j._$r) {
        this._$fA(_$nF, _$1j._$r);
    } else {
        this._$hT._$b(_$nF);
    }
    ;this._$hU = _$nF;
    if (_$nF != null) {
        _$mP._$6r(_$nF._$hu, this._$hT._$hu.style.zIndex);
    }
    ;this._$ra();
}
_$1j.prototype._$5V = function (_$nF) {
    this._$hU = null;
    this._$ra();
}
_$1j.prototype._$1p = function (_$nL, _$9n) {
    if (_$nL != null && _$nL._$iK && (_$9n > 3)) return false;
    if (_$nL != null && (_$9n <= 3) && (_$9n != 0xff)) {
        if (_$nL._$iK && (((this._$kP >> _$9n) & 0x01) == 1)) return true; else if (!_$nL._$iK && this._$iF) return true;
        return false;
    } else if (_$9n > 3) {
        if (this._$iF) return false;
    }
    return true;
}
_$1j.prototype._$aO = function (_$aN) {
    if ((_$aN <= 3) && (((this._$kP >> _$aN) & 0x01) == 1)) return true;
    return false;
}
_$1j.prototype._$cc = function () {
    if (_$li != null && _$li._$iK) return _$jw;
    return _$1K;
}
_$1j.prototype._$gb = function () {
    if (this._$li != null && this._$li._$iK) return false;
    return true;
}
_$1j.prototype._$3I = function () {
    if (this._$k3 == _$1j._$54) {
        if (_$1j._$ig != null) return;
        if (_$1j._$ig == null) _$1j._$ig = new _$6O(1, this);
        if (_$1j._$ic == null) _$1j._$ic = new _$6O(0, this);
        if (_$1j._$id == null) _$1j._$id = new _$6O(2, this);
        if (_$1j._$i9 == null) _$1j._$i9 = new _$6O(3, this);
        return;
    }
    if (this._$mF == null) {
        var _$bG = null;
        if (this._$mF == null) this._$mF = new _$6P(_$bG, 1);
        if (this._$mB == null) this._$mB = new _$6P(_$bG, 0);
        if (this._$mC == null) this._$mC = new _$6P(_$bG, 2);
        if (this._$my == null) this._$my = new _$6P(_$bG, 3);
        this._$mN(this._$me.left, this._$me.top, this._$me.right - this._$me.left, this._$me.bottom - this._$me.top);
        this._$mF.setVisible(true);
        this._$my.setVisible(true);
        this._$mB.setVisible(true);
        this._$mC.setVisible(true);
    }
}
_$1j.prototype._$3J = function () {
    this._$lW._$iL = false;
    if (_$1j._$k5 == _$1j._$10) return;
    this._$3I();
}
_$1j.prototype._$mN = function (_$dn, _$dZ, _$e1, _$dh) {
    this._$mF._$rz(_$dn + _$1M, _$dZ, _$e1 - (2 * _$1M), _$1M);
    if (!_$lW._$iL) {
        _$mB._$rz(_$dn, _$dZ, _$1M, _$dh);
        _$mC._$rz(_$dn + _$e1 - _$1M, _$dZ, _$1M, _$dh);
        _$my._$rz(_$dn + _$1M, _$dZ + _$dh - _$1M, _$e1 - (2 * _$1M), _$1M);
        _$mF._$r9();
        _$mB._$r9();
        _$mC._$r9();
        _$my._$r9();
        if (_$mD != null) {
            _$mD._$aJ();
            _$mD = null;
        }
        if (_$mE != null) {
            _$mE._$aJ();
            _$mE = null;
        }
        if (_$mz != null) {
            _$mz._$aJ();
            _$mz = null;
        }
        if (_$mA != null) {
            _$mA._$aJ();
            _$mA = null;
        }
    } else {
        if (_$mz == null) {
            _$mz = new _$6P(_$bG, 3);
            _$mA = new _$6P(_$bG, 3);
            _$mD = new _$6P(_$bG, 4);
            _$mE = new _$6P(_$bG, 5);
            _$mz._$rI(true);
            _$mA._$rI(true);
            _$mD._$rI(true);
            _$mE._$rI(true);
            _$mD.setVisible(true);
            _$mE.setVisible(true);
            _$mz.setVisible(true);
            _$mA.setVisible(true);
        }
        var _$gL = _$G._$6W - _$1M;
        var _$gM = 10;
        var _$gO = 40;
        if (_$e1 < 50) {
            _$gM = _$e1 / 6;
            _$gO = (4 * _$e1) / 6;
        }
        if (_$dh < (_$G._$6W - _$1M)) {
            _$gL = 0;
        }
        _$dh -= 3;
        _$mB._$rz(_$dn, _$dZ, _$1M, _$dh - _$gL);
        _$mC._$rz(_$dn + _$e1 - _$1M, _$dZ, _$1M, _$dh - _$gL);
        _$mz._$rz(_$dn + _$1M, _$dZ + _$dh - _$gL - _$1M, _$gM, _$1M);
        _$mD._$rz(_$dn + _$gM + _$1M, _$dZ + _$dh - _$gL - _$1M, _$1M, _$gL + _$1M - 1);
        _$mE._$rz(_$dn + _$gM + _$gO - _$1M, _$dZ + _$dh - _$gL - _$1M, _$1M, _$gL + _$1M - 1);
        _$mA._$rz(_$dn + _$gM + _$gO, _$dZ + _$dh - _$gL - _$1M, _$e1 - _$gM - _$gO - 1, _$1M);
        _$my._$rz(_$dn + _$1M + _$gM, _$dZ + _$dh - _$1M, _$gO - _$1M, _$1M);
    }
}
_$1j.prototype._$5K = function (p) {
    _$mP._$5P(DSXDFUtil._$hQ, p._$hu);
}
_$1j.prototype._$mM = function (_$dn, _$dZ, _$e1, _$dh) {
    _$1j._$ig._$rz(_$dn + _$1j._$1M, _$dZ, _$e1 - (2 * _$1j._$1M), _$1j._$1M);
    if (!this._$lW._$iL) {
        _$1j._$ic._$rz(_$dn, _$dZ, _$1j._$1M, _$dh);
        _$1j._$id._$rz(_$dn + _$e1 - _$1j._$1M, _$dZ, _$1j._$1M, _$dh);
        _$1j._$i9._$rz(_$dn + _$1j._$1M, _$dZ + _$dh - _$1j._$1M, _$e1 - (2 * _$1j._$1M), _$1j._$1M);
        _$1j._$ig._$r9();
        _$1j._$ic._$r9();
        _$1j._$id._$r9();
        _$1j._$i9._$r9();
        var _$eP;
        if (_$1j._$ie != null) {
            this._$5K(_$1j._$ie);
            _$1j._$ie = null;
        }
        if (_$1j._$if != null) {
            this._$5K(_$1j._$if);
            _$1j._$if = null;
        }
        if (_$1j._$ia != null) {
            this._$5K(_$1j._$ia);
            _$1j._$ia = null;
        }
        if (_$1j._$ib != null) {
            this._$5K(_$1j._$ib);
            _$1j._$ib = null;
        }
    } else {
        if (_$1j._$ia == null) {
            _$1j._$ia = new _$6O(3, this);
            _$1j._$ib = new _$6O(3, this);
            _$1j._$ie = new _$6O(4, this);
            _$1j._$if = new _$6O(5, this);
            _$1j._$ia._$rI(true);
            _$1j._$ib._$rI(true);
            _$1j._$ie._$rI(true);
            _$1j._$if._$rI(true);
            _$1j._$ia._$r9();
            _$1j._$ib._$r9();
            _$1j._$ie._$r9();
            _$1j._$if._$r9();
        }
        var _$gL = _$G._$6W - _$1j._$1M;
        var _$gM = 10;
        var _$gO = 40;
        if (_$e1 < 50) {
            _$gM = _$e1 / 6;
            _$gO = (4 * _$e1) / 6;
        }
        if (_$dh < (_$G._$6W - _$1j._$1M)) {
            _$gL = 0;
        }
        _$dh -= 3;
        _$1j._$ic._$rz(_$dn, _$dZ, _$1j._$1M, _$dh - _$gL);
        _$1j._$id._$rz(_$dn + _$e1 - _$1j._$1M, _$dZ, _$1j._$1M, _$dh - _$gL);
        _$1j._$ia._$rz(_$dn + _$1j._$1M, _$dZ + _$dh - _$gL - _$1j._$1M, _$gM, _$1j._$1M);
        _$1j._$ie._$rz(_$dn + _$gM + _$1j._$1M, _$dZ + _$dh - _$gL - _$1j._$1M, _$1j._$1M, _$gL + _$1j._$1M - 1);
        _$1j._$if._$rz(_$dn + _$gM + _$gO - _$1j._$1M, _$dZ + _$dh - _$gL - _$1j._$1M, _$1j._$1M, _$gL + _$1j._$1M - 1);
        _$1j._$ib._$rz(_$dn + _$gM + _$gO, _$dZ + _$dh - _$gL - _$1j._$1M, _$e1 - _$gM - _$gO - 1, _$1j._$1M);
        _$1j._$i9._$rz(_$dn + _$1j._$1M + _$gM, _$dZ + _$dh - _$1j._$1M, _$gO - _$1j._$1M, _$1j._$1M);
    }
}
_$1j.prototype._$T = function () {
    this._$1u(true);
    if (_$1j._$k5 == _$1j._$0Z) {
        this._$mr.cx = _$1j._$kF;
        this._$mr.cy = _$1j._$kG;
    }
    if (this._$jL != null) {
        this._$jL = null;
    }
    if (_$1j._$ig != null) this._$5K(_$1j._$ig);
    if (_$1j._$i9 != null) this._$5K(_$1j._$i9);
    if (_$1j._$ic != null) this._$5K(_$1j._$ic);
    if (_$1j._$id != null) this._$5K(_$1j._$id);
    if (_$1j._$ie != null) this._$5K(_$1j._$ie);
    if (_$1j._$if != null) this._$5K(_$1j._$if);
    if (_$1j._$ia != null) this._$5K(_$1j._$ia);
    if (_$1j._$ib != null) this._$5K(_$1j._$ib);
    if (this._$k3 == _$1j._$54) {
    }
    _$1j._$mF = null;
    _$1j._$my = null;
    _$1j._$mB = null;
    _$1j._$mC = null;
    _$1j._$mD = null;
    _$1j._$mE = null;
    _$1j._$mz = null;
    _$1j._$mA = null;
    _$1j._$ig = null;
    _$1j._$i9 = null;
    _$1j._$ic = null;
    _$1j._$id = null;
    _$1j._$ie = null;
    _$1j._$if = null;
    _$1j._$ia = null;
    _$1j._$ib = null;
}
_$1j.prototype._$1u = function (_$8l) {
}
_$1j.prototype._$1w = function (_$dd, _$dg, _$dn, _$dZ, _$e1, _$dh) {
}
_$1j.prototype.initLayout = function (_$dn, _$dZ, _$e1, _$dh, _$b2, _$dR, _$cY) {
    this.setSize(_$e1, _$dh);
    this.setLocation(_$dn, _$dZ);
    if (_$dR != undefined) {
        if (_$dR == _$1j._$36) {
            this._$kD = _$1j._$78;
        }
    }
    if (_$cY != undefined) {
        this._$jN = _$cY;
    }
    if (this._$ji) {
        _$mP._$3h(this._$hT._$hu, true);
    }
    if (this._$k3 == _$1j._$4K) return;
    if (this._$j9) return;
    var ic = _$1j._$ld._$2e();
    var _$8S = false;
    var i;
    for (i = 0; i < ic; i++) {
        if (_$1j._$ld._$m2[i] == this) {
            _$8S = true;
            break;
        }
    }
    if (!_$8S) {
        _$1j._$ld._$c(this);
    }
    var _$sG = this._$2V();
    this._$63(_$b2, _$sG);
    this._$j9 = true;
    this._$t9();
    ic = _$1j._$ld._$2e();
    for (i = 0; i < ic; i++) {
        var df = _$1j._$ld._$m2[i];
        if ((!df._$j9) && df._$2V() == _$sG) {
            _$1j._$ld._$5N(i);
            break;
        }
    }
}
_$1j.prototype._$1b = function (_$b2) {
    if (!this._$gh()) {
        _$iU = false;
        _$lW._$jg = true;
        if (_$b2 < 0 || _$b2 > 3) {
            _$li = null;
            _$lO = null;
            _$lN = null;
            _$kH = 0x00;
            _$jz = 0;
            this._$jk = false;
        } else {
            _$li = _$lo;
            this._$jk = false;
            _$jw = _$b2;
            if (((_$kP >> _$jw) & 0x01) == 0) {
                var i;
                for (i = 0; i < 4; i++) {
                    if (((_$kP >> i) & 0x01) != 0) break;
                }
                if (i != 4) _$jw = i;
            }
        }
        _$fu();
        return 0;
    }
    if (_$b2 < 0 || _$b2 > 3) {
        if (!_$j9) {
            _$fu();
            _$iU = false;
            _$3h(true);
        } else {
            if (_$iU) return 0;
        }
        _$1V();
        _$5C();
        return 0;
    }
    _$jw = _$b2;
    _$lW._$jx = _$b2;
    _$fu();
    _$1d();
    _$r0(-1);
    return 0;
}
_$1j.prototype._$1n = function () {
    _$1b(_$lW._$jx);
}
_$1j.prototype._$fu = function () {
    var rc = new _$4F();
    var d = this._$cz();
    this._$mq.cx = d.width;
    this._$mq.cy = d.height;
    if (this._$mr.cx < 0 || this._$mr.cy < 0) {
        this._$mr.cx = 300;
        this._$mr.cy = 200;
    }
}
_$1j.prototype._$Q = function () {
    return false;
}
_$1j.prototype._$1V = function () {
    if (this._$mq.cx <= 0 || this._$mq.cy <= 0) {
        this._$mq.cx = this._$cK();
        this._$mq.cy = this._$cl();
    }
    if (this._$li != null && !this._$li._$iK) {
        return 0;
    }
    if (_$li == null) _$kb = 1;
    _$1W();
    if (_$lO == null) {
        _$kb = 0;
    }
    return 0;
}
_$1j.prototype._$r6 = function () {
    this._$li._$5L(this);
}
_$1j.prototype._$0F = function () {
    var _$9I;
    if (this._$kW <= _$1j._$r) _$9I = this._$kW; else _$9I = this._$jw;
    this._$lo._$9(_$9I, this, true);
    this._$lo._$5H(0);
    this._$kD = _$1j._$78;
    var _$pW = null;
    var _$eq = this._$li._$m0[_$9I]._$hS._$2e();
    if (_$eq > 0 && this._$jY >= 0 && this._$jY < _$eq) {
        _$pW = this._$li._$m0[_$9I]._$hS._$m2[this._$jY];
    }
    var ih, iw;
    if (_$pW != null) {
        iw = _$pW._$mc.right - _$pW._$mc.left;
        ih = _$pW._$mc.bottom - _$pW._$mc.top;
        if (this._$kW <= _$1j._$r) {
            if (this._$1o(this._$jw) && !this._$1o(_$9I)) {
                iw = 200;
            } else if (!this._$1o(this._$jw) && this._$1o(_$9I)) {
                ih = 200;
            }
        }
    } else {
        iw = ih = 200;
    }
}
_$1j.prototype._$c2 = function () {
    var rc = new _$5A();
    rc.x = this._$hM;
    rc.y = this._$hN;
    rc.width = this._$hO;
    rc.height = this._$hL;
    return rc;
}
_$1j.prototype._$cK = function () {
    return this._$hO;
}
_$1j.prototype._$cl = function () {
    return this._$hL;
}
_$1j.prototype._$cz = function () {
    var d = new _$16();
    d.width = this._$hO;
    d.height = this._$hL;
    return d;
}
_$1j.prototype._$2b = function (rc) {
    rc.left = this._$hM;
    rc.top = this._$hN;
    rc.right = this._$hO + this._$hM;
    rc.bottom = this._$hL + this._$hN;
}
_$1j.prototype.setSize = function (_$h5, _$eK) {
    this._$hO = _$h5;
    this._$hL = _$eK;
}
_$1j.prototype.setLocation = function (_$eT, _$gX) {
    this._$hM = _$eT;
    this._$hN = _$gX;
}
_$1j.prototype._$63 = function (_$d7, _$sB) {
    var _$gi = new Array(2);
    var _$gp = new Array(2);
    var _$7O = new Array(2);
    var _$7P = new Array(2);
    var _$qc = new _$5i();
    var _$eF = new Array(2);
    _$eF[0] = 0;
    _$eF[1] = 0;
    var _$qB = this._$c2();
    var _$go = 0;
    var _$8Y = false;
    var _$pq = new Array(1);
    var _$9Y = this._$lo._$1U(this, _$go, _$sB, _$7P, _$gi, _$gp, _$7O, _$pq);
    if (_$pq[0] != null) {
        _$qc.x = _$pq[0]._$q4.x;
        _$qc.y = _$pq[0]._$q4.y;
        _$eF[0] = _$pq[0]._$sa;
        _$eF[1] = _$pq[0]._$sb;
        if (_$eF[0] <= 0) {
            this._$ma.x = 200;
            this._$mr.cx = 200;
        } else {
            this._$ma.x = _$qc.x;
            this._$mr.cx = _$eF[0];
            _$qB.x = this._$ma.x;
            _$qB.width = _$eF[0];
        }
        if (_$eF[1] <= 0) {
            this._$ma.y = 200;
            this._$mr.cy = 200;
        } else {
            this._$ma.y = _$qc.y;
            this._$mr.cy = _$eF[1];
            _$qB.y = this._$ma.y;
            _$qB.height = _$eF[1];
        }
        if ((_$pq[0]._$b3 & _$1j._$31) != 0) this._$iY = true; else this._$iY = false;
        if ((_$pq[0]._$b3 & _$1j._$32) == 0) this._$kD = _$1j._$4L;
        this._$kW = ((_$1j._$79 & _$pq[0]._$b3) >> 7);
        if (this._$kW < 0) this._$kW = 0;
        if (this._$kW > _$1j._$0) this._$kW = _$1j._$0;
        this._$kP = (_$1j._$55 & _$pq[0]._$b3) >> 12;
        this._$jN = _$pq[0]._$cU;
        if ((_$pq[0]._$b3 & _$1j._$B) != 0) this._$iF = true; else this._$iF = false;
        this._$jT = (_$1j._$C & _$pq[0]._$b3) >> 17;
    }
    var _$ql = null;
    if (_$7O[0] == null && _$7O[1] == null) {
        _$8Y = true;
        _$9Y = 1;
        if (this._$lQ != null && this._$lQ._$lH == this._$lH) {
            if (!this._$lQ._$gh()) _$9Y = 0;
            var _$9X = true;
            _$7P[0] = this._$lQ._$li;
            if (_$7P[0] != null) {
                if (_$7P[0]._$iK) {
                    _$9X = this._$1p(_$7P[0], this._$lQ._$jw);
                } else _$9X = this._$iF;
            }
            if (_$9X) {
                _$gi[0] = this._$lQ._$jw;
                _$gp[0] = this._$lQ._$jY;
                if (_$d7 <= 3) {
                    _$7O[0] = new _$F();
                    _$7O[0]._$8L = true;
                    _$pw = new Array(1);
                    this._$0D(this._$lQ._$lh, _$7O[0], _$d7, _$pw);
                    this._$mq.cx = this._$cK();
                    this._$mq.cy = this._$cl();
                    this._$7e(_$pw[0], _$7O[0]);
                } else {
                    this._$lQ._$lh.Add(this);
                    _$7O[0] = this._$lQ._$lh;
                }
            }
        }
    }
    if (_$7O[0] == null && _$7O[1] == null) {
        _$9Y = 1;
        if (!this._$gh()) {
            _$9Y = 0;
            this._$3h(true);
        }
        ;this._$lW._$jx = _$d7;
        if (this._$k3 == _$1j._$54) {
            _$ql = _$J._$0A(_$qB);
        } else _$ql = _$K._$0B(_$qB);
        if (_$d7 >= 0 && _$d7 <= 3) {
            _$7P[0] = this._$lo;
            _$7P[1] = _$ql;
            _$gi[0] = _$d7;
            _$gp[0] = this._$jY;
        } else {
            _$7P[0] = _$ql;
            _$7P[1] = this._$lo;
            _$gi[1] = 0;
            _$gp[1] = this._$jY;
        }
        if (!_$7P[0]._$iK) {
            _$gi[0] = 0;
            _$gp[0] = 0xffffffff;
            _$7O[0] = null;
        } else {
            _$gi[1] = 0;
            _$gp[1] = 0xffffffff;
            _$7O[1] = null;
        }
    } else if (_$7O[0] == null || _$7O[1] == null) {
        var _$eu;
        if (_$7O[0] == null) _$eu = 1; else _$eu = 0;
        if (_$7P[_$eu]._$iK) {
            if (this._$k3 == _$1j._$54) {
                _$7P[_$eu ^ 0x01] = _$J._$0A(_$qB);
            } else _$7P[_$eu ^ 0x01] = _$K._$0B(_$qB);
            _$gi[_$eu ^ 0x01] = 0;
            _$gp[_$eu ^ 0x01] = 0xffffffff;
            _$7O[_$eu ^ 0x01] = null;
        } else {
            _$7P[_$eu ^ 0x01] = this._$lo;
            _$gp[_$eu ^ 0x01] = 0xffffffff;
            if (_$d7 > 3) _$gi[_$eu ^ 0x01] = 0; else _$gi[_$eu ^ 0x01] = this._$d7;
        }
    }
    if (_$7P[0] != null) {
        if (_$7P[0]._$iK) {
            if (!this._$1p(_$7P[0], _$gi[0])) {
                var bys = 0xff;
                bys = this._$6l(bys);
                if (bys != 0xff || (!this._$iF)) {
                    if (bys != 0xff) _$d7 = bys; else _$d7 = _$gi[0];
                    if (_$d7 != _$gi[0]) {
                        this._$jY = _$gp[0];
                        this._$jw = _$gi[0];
                        this._$lh = _$7O[0];
                        _$7P[0]._$5b(this);
                        if (_$d7 >= _$1j._$1K) _$d7 = _$1j._$0M;
                        _$gp[0] = 0xffffffff;
                        _$gi[0] = _$d7;
                        _$7O[0] = null;
                    }
                } else {
                    this._$lh = _$7O[0];
                    this._$jY = _$gp[0];
                    this._$li = _$7P[0];
                    this._$jw = _$gi[0];
                    _$7O[0] = _$7O[1];
                    _$gp[0] = _$gp[1];
                    _$7P[0] = _$7P[1];
                    _$gi[0] = _$gi[1];
                    _$7O[1] = this._$lh;
                    _$gp[1] = this._$jY;
                    _$gi[1] = this._$jw;
                    _$7P[1] = this._$li;
                }
            }
        } else {
            if (!this._$iF) {
                this._$lh = _$7O[0];
                this._$jY = _$gp[0];
                this._$li = _$7P[0];
                this._$jw = _$gi[0];
                _$7O[0] = _$7O[1];
                _$gp[0] = _$gp[1];
                _$7P[0] = _$7P[1];
                _$gi[0] = _$gi[1];
                _$7O[1] = this._$lh;
                _$gp[1] = this._$jY;
                _$gi[1] = this._$jw;
                _$7P[1] = this._$li;
                if (!this._$1p(_$7P[0], _$gi[0])) {
                    var bys = 0xff;
                    bys = this._$6l(bys);
                    if (bys != 0xff) _$d7 = bys; else _$d7 = _$gi[0];
                    if (_$d7 != _$gi[0]) {
                        this._$jY = _$gp[0];
                        this._$jw = _$gi[0];
                        this._$lh = _$7O[0];
                        _$7P[0]._$5b(this);
                        _$gp[0] = -1;
                        _$gi[0] = _$d7;
                        _$7O[0] = null;
                    }
                }
            } else {
                if (_$gi[1] < _$1j._$1K) {
                    if (!this._$1p(this._$lo, _$gi[1])) {
                        var bys = 0xff;
                        bys = this._$6l(bys);
                        if ((bys != 0xff) && bys != _$gi[1]) {
                            this._$jY = _$gp[1];
                            this._$jw = _$gi[1];
                            this._$lh = _$7O[1];
                            _$7P[1]._$5b(this);
                            _$gp[1] = -1;
                            _$7O[1] = null;
                            _$gi[1] = bys;
                        }
                    }
                }
            }
        }
    }
    ;this._$jY = _$gp[0];
    this._$jw = _$gi[0];
    var _$8V = false;
    if (_$7O[0] != null && _$7O[0]._$oP != null) _$8V = true;
    if (_$7O[0] != null && !_$8V) _$7O[0]._$oP = this;
    this._$lh = _$7O[0];
    this._$lN = _$7O[1];
    this._$li = _$7P[0];
    this._$lO = _$7P[1];
    this._$kH = _$gp[1];
    this._$jz = _$gi[1];
    if (_$7O[0] != null) {
        var _$h5 = _$eF[0];
        var _$eK = _$eF[1];
        if (_$h5 <= 0) {
            this._$ma.x = 200;
            this._$mr.cx = 200;
        } else {
            this._$ma.x = _$qc.x;
            this._$mr.cx = _$h5;
        }
        if (_$eK <= 0) {
            this._$ma.y = 200;
            this._$mr.cy = 200;
        } else {
            this._$ma.y = _$qc.y;
            this._$mr.cy = _$eK;
        }
    } else {
        this._$fu();
    }
    if (_$8Y) {
        if (this._$kD == _$1j._$78) {
            _$9Y = 0;
        }
        if (!this._$gh()) {
            _$9Y = 0;
            _$8Y = false;
        }
    }
    if (!_$8Y && this._$kD == _$1j._$78) this._$kD = _$1j._$57;
    this._$lW._$jx = _$gi[0];
    this._$r0(-1);
    if (_$9Y > 0) {
        this._$1d();
        this._$r9();
    } else if (_$8Y) {
        if (this._$lh == null) {
            this._$kD = _$1j._$57;
            this._$li._$70(this);
            this._$lh._$8L = true;
            this._$lo._$e(this);
            this._$3h(false);
            this._$kD = _$1j._$78;
        }
        ;this._$0F();
        this._$iU = false;
    } else {
        if (this._$lh != null && this._$lh._$lI != null && this._$lh._$lI.length >= 1) {
            var _$ok = this._$lh._$oP;
            var _$8S = false;
            var i;
            for (i = 0; i < this._$lh._$lI.length; i++) {
                var _$oV = this._$lh._$lI[i];
                if (_$oV._$nr == this && ((_$oV._$b3 & _$1j._$1G) > 0)) {
                    _$8S = true;
                }
            }
            if (_$8S) {
                this._$lW._$jx = _$gi[0];
                this._$1d();
                _$9Y = 1;
                if (_$ok != this && this._$lh._$oG != null) {
                    this._$lh._$oG._$6k(_$ok);
                }
                ;this._$r9();
            } else {
                _$8S = false;
                var i;
                for (i = 0; i < this._$lh._$lI.length; i++) {
                    var _$oJ = this._$lh._$lI[i];
                    if (_$oJ._$nr == this && (_$oJ._$b3 & _$1j._$1H) != 0) {
                        _$8S = true;
                        break;
                    }
                }
                if (_$8S) {
                    this._$0F();
                }
                ;this._$iU = !this._$li._$iK;
                this._$3h(false);
                this._$jk = false;
            }
        } else {
            if (this._$lh == null && this._$li != null) {
                this._$li._$70(this);
                if (this._$lh != null) this._$lh._$8L = true;
            }
            ;this._$iU = !this._$li._$iK;
            if (this._$iU && _$pq[0] != null && (_$pq[0]._$b3 & 8) != 0) {
                this._$lo._$9(this._$jw, this, true);
                this._$kD = _$1j._$78;
            }
            ;this._$3h(false);
            this._$jk = false;
        }
    }
    ;this._$Y(this._$lO, this._$jz, this._$kH);
    this._$Y(this._$li, this._$jw, this._$jY);
}
_$1j.prototype._$1X = function () {
    var ps = new _$5i();
    ps.x = this._$me.left;
    ps.y = this._$me.top;
    if (this._$k3 == _$1j._$54) {
    }
    ;this._$li._$6B(ps.x, ps.y, _$E._$2I(this._$me), _$E._$2H(this._$me));
}
_$1j.prototype._$3i = function () {
    if (_$1j._$j3) return;
    _$1j._$j3 = true;
}
_$1j.prototype._$mX = function (Ae) {
}
_$1j.prototype._$0D = function (_$nG, _$nR, _$9p, _$pn) {
    var _$qp = _$nG._$pp;
    var _$pY = null;
    var pb = _$nR;
    pb._$9x = _$9p;
    if ((_$qp != null) && ((_$qp._$oN == null && _$qp._$pV != null) || (_$qp._$oN != null && _$qp._$pV == null))) {
        _$qp._$9M = pb._$9x;
        if (_$qp._$oN == null) {
            _$pY = _$qp._$pV;
            _$qp._$oN = pb;
        } else {
            _$qp._$pV = pb;
            _$pY = _$qp._$oN;
        }
        pb._$pp = _$qp;
    } else {
        var pf = new _$F();
        pf._$oP = _$nG._$oP;
        pf._$8L = _$nG._$8L;
        pf._$lI = _$nG._$lI;
        pf._$oG = _$nG._$oG;
        if (pf._$oG != null) pf._$oG._$ll = pf;
        pf._$7a(_$nG);
        if (pf._$oP != null) {
            pf._$oP._$lh = pf;
        }
        _$nG._$oP = null;
        _$nG._$oN = pf;
        _$nG._$pV = pb;
        pf._$pp = _$nG;
        pb._$pp = _$nG;
        _$nG._$9M = pb._$9x;
        _$nG._$lI = null;
        _$pY = _$nG._$oN;
    }
    if (_$9p == _$E._$3u) _$pY._$9x = _$E._$3r; else if (_$9p == _$E._$3r) _$pY._$9x = _$E._$3u; else if (_$9p == _$E._$3s) _$pY._$9x = _$E._$3t; else _$pY._$9x = _$E._$3s;
    if (_$pn != null) _$pn[0] = _$pY;
}
_$1j.prototype._$Y = function (_$nL, _$d7, _$dP) {
    if (_$nL != null && _$nL._$iK && _$dP >= 0 && _$dP != 0xffffffff) {
        var _$pW = _$nL._$m0[_$d7]._$hS._$m2[_$dP];
        var _$f6, _$g0;
        var _$fO, _$fP;
        _$fO = -1;
        _$fP = -1;
        var _$9B, _$9J;
        if ((_$d7 == _$E._$3s) || _$d7 == _$E._$3t) {
            _$9B = _$E._$3u;
            _$9J = _$E._$3r;
        } else {
            _$9B = _$E._$3s;
            _$9J = _$E._$3t;
        }
        if (_$pW._$ly == null) _$f6 = -1; else _$f6 = _$nL._$2N(_$9B, _$pW._$ly);
        if (_$pW._$lP == null) _$g0 = -1; else _$g0 = _$nL._$2N(_$9J, _$pW._$lP);
        if (this._$lo._$m1[_$9B] != null) _$fO = _$nL._$2N(_$9B, this._$lo._$m1[_$9B]);
        if (this._$lo._$m1[_$9J] != null) _$fP = _$nL._$2N(_$9J, this._$lo._$m1[_$9J]);
        if (_$fO >= 0 && _$f6 < _$fO) {
            _$nL._$k(_$9B);
        }
        if (_$fP >= 0 && _$g0 < _$fP) {
            _$nL._$k(_$9J);
        }
        if (this._$lo._$m1[_$d7] != null) {
        }
    }
}
_$1j.prototype._$3F = function () {
    if (this._$lh != null && this._$lh._$oG != null) {
        if (this._$lh._$oG._$3F(this)) {
            return true;
        }
    }
    return false;
}
_$1j.prototype._$gd = function () {
    return _$3F();
}
_$1j.prototype._$ci = function () {
    if (!_$gb()) return null;
    return _$li._$cg();
}
_$1j.prototype._$gh = function () {
    if (this._$hT == null) return true;
    if (_$mP._$3S(this._$hT._$hu)) return true;
    return false;
}
_$1j.prototype._$t9 = function () {
}
_$1j.prototype._$6r = function (_$dm) {
    if (this._$hT != null) {
        _$mP._$6r(this._$hT._$hu, _$dm);
    }
    if (this._$hB != null) {
        _$mP._$6r(this._$hB, _$dm);
    }
    if (this._$hU != null) {
        _$mP._$6r(this._$hU._$hu, _$dm);
    }
}
_$1j.prototype._$ra = function () {
    if (this._$hT == null) return;
    var _$tr, _$ts, _$tt, _$tq;
    var _$tJ = this._$hT._$cx();
    if (this._$k6 == _$1j._$6X) {
        _$tr = this._$hM;
        _$ts = this._$hN + _$tJ.height;
        _$tt = this._$hO;
        _$tq = this._$hL - _$tJ.height;
        var _$aQ = _$tJ.height;
        if (_$aQ > this._$hL) _$aQ = this._$hL;
        this._$hT._$6A(this._$hM, this._$hN, this._$hO, _$aQ);
    }
    if (this._$hU != null) {
        this._$hU._$6A(this._$hM, this._$hN + this._$hL - _$G._$6W, this._$hO, _$G._$6W);
        _$tq -= _$G._$6W;
    }
    if (_$tq < 0) _$tq = 0;
    if (_$tt < 0) _$tt = 0;
    if (this._$hB != null) {
        var _$tO = _$tt - this.m_B[0] - this.m_B[2];
        if (_$tO < 0) _$tO = 0;
        var _$tN = _$tq - this.m_B[1] - this.m_B[3];
        if (_$tN < 0) _$tN = 0;
        _$mP._$6n(this._$hB, _$tr, _$ts, _$tO, _$tN);
        this._$by(_$tt, _$tq);
    }
    if (this._$hU != null && this._$hU._$bB == this) {
        this._$hU._$5Z(this, this._$hM, this._$hN, this._$hO, this._$hL);
    }
    if (this._$jv && this._$hV != null && this._$hB != null && _$mP._$3S(this._$hB)) {
        _$mP._$6n(this._$hV, this._$hM, this._$hN, this._$hO, this._$hL);
    }
}
_$1j.prototype._$r9 = function () {
}
_$1j.prototype._$0e = function (_$8n) {
    if (!this._$jv) return;
    if (this._$hV == null) {
        var _$tw = "div";
        if (DSXDFUtil._$jo) _$tw = "div";
        this._$hV = _$mP._$0C(_$tw, DSXDFUtil._$hQ);
        this._$hV.style.border = "0px solid";
        this._$hV.style.zIndex = 7890;
    }
    if (_$8n) {
        if (this._$hB != null && _$mP._$3S(this._$hB)) {
            _$mP._$3h(this._$hV, true);
            _$mP._$6n(this._$hV, this._$hM, this._$hN, this._$hO, this._$hL);
        }
    } else {
        _$mP._$3h(this._$hV, false);
    }
}

var _$tA = null;

function _$1g(_$o2, _$rn, sID) {
    _$1g.baseConstructor.call(this, _$o2, _$rn, sID);
    this._$lw = null;
    this._$lz = null;
    this._$ls = new Array();
    this.cx;
    this.cy;
    this._$op = new _$5a(true);
    this._$m3 = new Array(4);
    this._$jh = false;
    _$tA = this;
    this._$3K();
    this._$kn = 4;
}

_$bh._$bg(_$1g, _$1j);
_$1g._$i6 = null;
_$1g.prototype._$n7 = function (e) {
    if (_$1g._$i6 != null) {
        _$1g._$i6._$n5(e);
    } else {
        this._$op._$0b(e);
    }
}
_$1g.prototype._$n4 = function (e) {
    this._$op._$0a(e);
    var pt = new _$5i();
    _$mP._$2L(e, pt);
    var _$ep = this._$ls.length;
    var i;
    for (i = 0; i < _$ep; i++) {
        if (this._$ls[i]._$3e(pt.x, pt.y)) {
            if (i != 0) {
                var _$tS = this._$ls[0]._$kn;
                var _$tM = this._$ls[i];
                var j;
                for (j = 0; j < i; j++) {
                    this._$ls[j]._$X(-3);
                }
                ;this._$ls.splice(i, 1);
                this._$ls.splice(0, 0, _$tM);
                _$tM._$6D(_$tS);
            }
            break;
        }
    }
}
_$1g.prototype._$na = function (e) {
    if (_$1g._$i6 != null) {
        _$1g._$i6._$na(e);
        _$1g._$i6 = null;
    } else {
        this._$op._$0c(e);
    }
}
_$1g.prototype._$rT = function (sID) {
    var ic = _$1j._$ld._$2e();
    var i;
    for (i = 0; i < ic; i++) {
        var _$ti = _$1j._$ld._$m2[i]._$hB;
        if (_$ti != null && _$ti.id == sID) {
            _$1j._$ld._$m2[i].hasOutIFrame(true);
            return true;
        }
    }
    return false;
}
_$1g.prototype._$6E = function (_$8n) {
    var ic = _$1j._$ld._$2e();
    var i;
    for (i = 0; i < ic; i++) {
        if (_$1j._$ld._$m2[i] != this) _$1j._$ld._$m2[i]._$0e(_$8n);
    }
    ;this._$op._$0e(_$8n);
}
_$1g.prototype._$6u = function (_$dr, color) {
    this._$op._$6u(_$dr, color);
}
_$1g.prototype._$6t = function (_$dr, color) {
    this._$op._$6t(_$dr, color);
}
_$1g.prototype._$6v = function (_$dr, fn) {
    this._$op._$6v(_$dr, fn);
}
_$1g.prototype._$0i = function () {
    var _$ot = _$1j._$ld;
    var _$eq = 0;
    if (_$ot == null) return;
    _$eq = _$ot._$2e();
    var i;
    for (i = _$eq - 1; i >= 0; i--) {
        if (_$ot._$m2[i] != this) {
            if (_$ot._$m2[i]._$0i != undefined) _$ot._$m2[i]._$0i();
        }
    }
    ;this._$op._$5M();
    if (this._$ls != null) {
        _$eq = _$K._$ls.length;
        for (i = 0; i < _$eq; i++) {
            this._$ls[i]._$5M();
        }
        ;this._$ls.length = 0;
    }
    ;this._$op._$3H();
    var vrc = new _$4F();
    this._$2c(vrc);
    this._$op._$6q(vrc.right - vrc.left, vrc.bottom - vrc.top);
    this._$nb(null);
}
_$1g.prototype._$2p = function () {
    return this._$ls;
}
_$1g.prototype._$2c = function (rc) {
    var iw = 0;
    var ih = 0;
    if (window.innerHeight) {
        iw = window.innerWidth;
        ih = window.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) {
        ih = document.documentElement.clientHeight;
        iw = document.documentElement.clientWidth;
    } else {
        iw = document.body.clientWidth;
        ih = document.body.clientHeight;
    }
    rc.left = 0;
    rc.top = 0;
    rc.right = rc.left + iw;
    rc.bottom = rc.top + ih;
}

function _$7s() {
    _$tA._$nb();
}

_$1g.prototype._$3K = function () {
    window.onresize = _$7s;
    var vrc = new _$4F();
    this._$2c(vrc);
    this._$op._$6q(vrc.right - vrc.left, vrc.bottom - vrc.top);
    var i;
    for (i = 0; i < 4; i++) {
        this._$m3[i] = new _$5p();
    }
    ;this._$op._$k2 = 0;
}
_$1g.prototype._$mY = function (_$nL) {
    var _$eq = this._$ls.length;
    var i;
    for (i = 0; i < _$eq; i++) {
        if (this._$ls[i] == _$nL) {
            this._$ls.splice(i, 1);
            break;
        }
    }
    ;this._$ls.splice(0, 0, _$nL);
    _$nL._$6D(this._$kn);
    this._$kn += 3;
}
_$1g.prototype._$mZ = function (_$nL) {
    var _$eq = this._$ls.length;
    var i;
    for (i = 0; i < _$eq; i++) {
        if (this._$ls[i] == _$nL) {
            var j;
            for (j = 0; j < i; j++) {
                this._$ls[j]._$X(-3);
            }
            ;this._$ls.splice(i, 1);
            if (this._$ls.length > 0) {
                this._$kn = this._$ls[0]._$kn + 3;
            } else {
                this._$kn = _$nL._$kn;
            }
            break;
        }
    }
}
_$1g.prototype._$n2 = function (e) {
}
_$1g.prototype._$nb = function (e) {
    var rc = new _$5A();
    var d = new _$16();
    var iw = 0;
    var ih = 0;
    if (window.innerHeight) {
        iw = window.innerWidth;
        ih = window.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) {
        ih = document.documentElement.clientHeight;
        iw = document.documentElement.clientWidth;
    } else {
        iw = document.body.clientWidth;
        ih = document.body.clientHeight;
    }
    d.width = iw;
    d.height = ih;
    rc.height = ih;
    var i;
    for (i = 0; i < 2; i++) {
        if (this._$op._$hX != null) {
            if (this._$op._$hX[2 * i + 1] != null) {
                if (i == 0) {
                    rc.y = this._$op._$kc[2 * i + 1];
                    _$mP._$6n(this._$op._$hX[2 * i + 1], 0, 0, d.width, this._$op._$kc[2 * i + 1]);
                } else {
                    _$mP._$6n(this._$op._$hX[2 * i + 1], 0, d.height - this._$op._$kc[2 * i + 1], d.width, this._$op._$kc[2 * i + 1]);
                }
                rc.height -= this._$op._$kc[2 * i + 1];
            }
        }
    }
    for (i = 0; i < 2; i++) {
        if (this._$op._$hX != null) {
            if (this._$op._$hX[2 * i] != null && d.height > 0) {
                rc.width = this._$op._$kc[2 * i];
                if (i == 0) {
                    rc.x = 0;
                } else {
                    rc.x = d.width - rc.width;
                }
                _$mP._$6n(this._$op._$hX[2 * i], rc.x, rc.y, rc.width, rc.height);
            }
        }
    }
    ;this._$op._$ne(d.width, d.height);
}
_$1g.prototype._$7E = function (_$ae, _$am) {
    if (!this._$jh) {
        _$ae.style.position = "absolute";
        this._$op._$7E(_$ae, _$am);
    }
}
_$1g.prototype._$r5 = function (_$ae) {
    this._$op._$r5(_$ae);
}
_$1g.prototype._$2g = function (sID) {
    var tmp = _$1j._$ld;
    var ic = tmp._$2e();
    for (var m = 0; m < ic; m++) {
        if (!(tmp._$m2[m] instanceof _$1g)) {
            if (tmp._$m2[m]._$hB != null && tmp._$m2[m]._$hB.id == sID) return tmp._$m2[m];
        }
    }
    return null;
}
_$1g.prototype._$47 = function (p) {
    var s = 1;
    if (s == 0) {
        return;
    }
    var _$sr = p._$qX();
    if (_$sr == 'DFIdentifier') {
        p._$kZ = 0;
    } else if (_$sr == 'DFIdentifierA') {
        p._$kZ = 1;
    }
    var _$ed = new Array(4);
    var i;
    for (i = 0; i < 4; i++) _$ed[i] = this._$op._$m0[i]._$hS._$2e();
    this._$op._$4a(p);
    var _$pL = new _$D();
    if (_$1j._$ld != null) {
        var _$fy = _$1j._$ld._$2e();
        var j;
        for (j = 0; j < _$fy; j++) {
            var dfw = _$1j._$ld._$m2[j];
            if (dfw._$j9) _$pL._$c(_$1j._$ld._$m2[j]);
        }
    }
    ;this._$op._$0d(_$ed, 4, _$pL);
    var _$sg = p._$qX();
    var _$er = parseInt(p._$qX());
    var _$eq = _$er;
    var _$ax = new _$D();
    for (i = 0; i < _$eq; i++) {
        var _$p5 = new _$J(false);
        _$p5._$4a(p);
        this._$ls.push(_$p5);
        _$ax._$c(_$p5);
    }
    var ino = _$pL._$2e();
    for (i = 0; i < ino; i++) {
        var _$sE = _$pL._$m2[i]._$cu();
        _$eq = _$ax._$2e();
        var j;
        for (j = 0; j < _$eq; j++) {
            var _$gm = _$ax._$m2[j]._$m0[0]._$hS._$2e();
            if (_$gm == 1) {
                var mi = _$ax._$m2[j];
                var _$ov = this._$op._$1S(_$sE, mi._$m0[0]._$hS._$m2[0]._$lp);
                if (_$ov != null) {
                    _$ax._$m2[j]._$5b(_$ov, null, _$sE, 0, 0);
                    _$gm = _$ax._$m2[j]._$m0[0]._$hS._$2e();
                    if (_$gm == 0) {
                        _$oR = this._$ls;
                        _$eq = _$oR.length;
                        var n;
                        for (n = 0; n < _$eq; n++) {
                            if (_$oR[n] == _$ax._$m2[j]) {
                                _$oR.split(n, 1);
                                break;
                            }
                        }
                        _$ax._$5N(j);
                    }
                    break;
                }
            }
        }
    }
}
_$1g.prototype._$6e = function (_$re, p) {
    var _$f5, _$fZ;
    p._$tX("DFIdentifierA");
    var _$gJ;
    var rc = new _$4F();
    this._$2c(rc);
    p._$tX(rc.left);
    p._$tX(rc.top);
    p._$tX(rc.right);
    p._$tX(rc.bottom);
    var i;
    for (i = 0; i < 4; i++) {
        if (i == 0 || i == 2) {
            _$f5 = 1;
            _$fZ = 3;
        } else {
            _$f5 = 0;
            _$fZ = 2;
        }
        var _$gt = this._$op._$m0[i]._$hS._$2e();
        var _$pW;
        var _$gr = 0;
        var j;
        for (j = 0; j < _$gt; j++) {
            _$pW = this._$op._$m0[i]._$hS._$m2[j];
            _$gr = _$pW._$6h(this._$op, p, _$gr, _$f5, _$fZ);
        }
        p._$tX("SECTIONNONE");
    }
    p._$tX("MINIFRAMES");
    var _$eq = this._$ls.length;
    var _$pW;
    var ino = 0;
    var _$gr;
    for (i = 0; i < _$eq; i++) {
        _$gr = this._$ls[i]._$m0[0]._$hS._$2e();
        if (_$gr == 1) {
            ino++;
        }
    }
    p._$tX(ino);
    _$f5 = 1;
    _$fZ = 3;
    for (i = 0; i < _$eq; i++) {
        _$gr = this._$ls[i]._$m0[0]._$hS._$2e();
        if (_$gr == 1) {
            var _$oQ = this._$ls[i];
            _$oQ._$2d(rc);
            p._$tX(rc.left);
            p._$tX(rc.top);
            p._$tX(rc.right);
            p._$tX(rc.bottom);
            _$pW = _$oQ._$m0[0]._$hS._$m2[0];
            _$pW._$6h(_$oQ, p, 0, _$f5, _$fZ);
            p._$tX("SECTIONNONE");
        }
    }
    p._$1Y();
}
_$1g.prototype._$1T = function (_$nr, _$ro, _$oq, _$e6, _$e8, _$or, _$dv) {
    var ino = this._$ls.length;
    var _$oQ = null;
    var _$eq;
    var i;
    for (i = 0; i < ino; i++) {
        _$oQ = this._$ls[i];
        _$eq = _$oQ._$m0[0]._$hS._$2e();
        if (_$eq == 1) {
            var _$pW = _$oQ._$m0[0]._$hS._$m2[0];
            var _$qi = this._$op._$1O(_$nr, _$ro, _$pW._$lp, _$dv, null);
            if (_$qi != null) {
                if ((_$dv[0] & _$1j._$1F) > 0) {
                    _$oq[0] = _$qi;
                    _$or[0] = _$oQ;
                    _$e6[0] = 0;
                    _$e8[0] = 0;
                } else {
                    _$oq[1] = _$qi;
                    _$or[1] = _$oQ;
                    _$e6[1] = 0;
                    _$e8[1] = 0;
                }
                return;
            }
        }
    }
}

function _$4l() {
    _$4l.baseConstructor.call(this);
    this._$lF = null;
}

_$bh._$bg(_$4l, _$1q);
_$4l.prototype._$rS = function (_$nL) {
    this._$lF = _$nL;
}
_$4l.prototype.setVisible = function () {
}
_$4l.prototype.setSize = function (_$aB) {
    _$mP._$6z(this._$hu, _$aB.width, _$aB.height, !_$11._$iC);
}
_$4l.prototype._$6r = function (_$dm) {
    if (this._$hu != null) {
        _$mP._$6r(this._$hu, _$dm);
    }
}
_$4l.prototype._$mW = function (pts) {
    var _$pR;
    _$pR = this._$lF._$m0[0]._$hS._$m2[0]._$lp;
    var _$a3 = _$mP._$2r(this._$hu);
    var _$a4 = _$mP._$2U(this._$hu);
    var pt = new _$5i();
    pt.x = pts.x - _$a3;
    pt.y = pts.y - _$a4;
    if (_$E._$5n(this._$md, pt)) {
        var _$7R = new _$D();
        _$pR._$2Y(_$7R);
        var _$eq = _$7R._$2e();
        var i;
        for (i = 0; i < _$eq; i++) {
            var dfw = _$7R._$m2[i];
            if (dfw._$cR()) {
                dfw.setVisible(false);
            }
        }
        return -1;
    }
    var _$oO = _$pR._$1Q();
    this._$bA = _$oO._$oP;
    _$1j._$k5 = _$1j._$0Z;
    return this._$bA._$50(pts);
}
_$4l.prototype._$cx = function () {
    _$1q._$jB.width = 130;
    _$1q._$jB.height = 18;
    return _$1q._$jB;
}
_$4l.prototype._$r9 = function () {
    if (this._$hE == null && this._$hx == null) {
        this._$hx = _$mP._$0w("div", this._$hu);
        this._$hx.className = "mydfaClose";
        this._$iz = _$mP._$26(this._$hx);
        this._$hx.style.backgroundPosition = 'center';
        this._$hx._$4C = this;
        this._$hx.style.backgroundImage = "url(" + DSXDFUtil._$i0 + "img/widget/widgetDock/dock_close.gif)";
    }
    var si = new _$4F();
    this._$2X(si);
    var ih = si.bottom - si.top;
    this._$l3 = _$mP._$cD(this._$hx, "height");
    this._$l5 = _$mP._$cD(this._$hx, "width");
    if (this._$l5 == 0) {
        this._$l5 = ih - this._$iz[0] - this._$iz[2];
        if (this._$l5 < 0) this._$l5 = 0;
    }
    if (this._$l3 == 0) {
        this._$l3 = ih - this._$iz[1] - this._$iz[3];
        if (this._$l3 < 0) this._$l3 = 0;
    }
    var rc = new _$4F();
    this._$2X(rc);
    rc.right = rc.right - rc.left;
    rc.left = 0;
    rc.bottom = rc.bottom - rc.top;
    rc.top = 0;
    var vh = rc.bottom - rc.top;
    vh -= 2;
    var _$qh = this._$bA;
    this._$bA = null;
    this._$on(true, rc.left, rc.top, rc.right - rc.left, vh, true);
    this._$aS(rc.left, rc.top, rc.right - rc.left, vh, _$1j._$40);
    this._$hu.style.background = 'yellow';
    this._$bA = _$qh;
}
_$4l.prototype._$4U = function () {
    var _$pR = _$lF._$m0[0]._$hS._$m2[0]._$lp;
    this._$12(_$pR);
}

function _$5g() {
    _$5g.baseConstructor.call(this);
    this._$jj = false;
    this._$jQ = 0;
    this._$k9 = 0;
    this._$kT = -1;
    this._$kC = -1;
    this._$k1 = 0;
    this._$ih = new _$D();
}

_$bh._$bg(_$5g, _$73);
_$5g._$iQ = false;
_$5g._$hr = null;
_$5g._$mb = new _$5i();
_$5g._$33 = 24;
_$5g.prototype._$ba = function (_$dY) {
    if (this._$a6 != undefined) {
        this._$a6(_$dY);
        this.m_B = _$mP._$26(this._$hu);
    }
}
_$5g.prototype._$n7 = function (e) {
    var pt = new _$5i();
    _$mP._$2L(e, pt);
    this._$4Z(pt);
}
_$5g.prototype._$na = function (e) {
    var pt = new _$5i();
    _$mP._$2L(e, pt);
    this._$jj = false;
}
_$5g.prototype._$n9 = function (e) {
    if (!DSXDFUtil._$ge(e.button)) return;
    this._$jj = true;
    var pt = new _$5i();
    _$mP._$2L(e, pt);
    this._$09(pt, false);
}
_$5g.prototype._$0j = function () {
    this._$jj = false;
}
_$5g.prototype._$5m = function (e) {
}
_$5g.prototype._$qZ = function (wnd, rc) {
    _$73.prototype._$qZ.call(this, null, rc);
}
_$5g.prototype._$5G = function (_$nr, _$q6, _$8m) {
    this._$5H();
}
_$5g.prototype._$6H = function (_$aM, _$9q, _$d4) {
    _$73.prototype._$6H.call(this, _$aM, _$9q, _$d4);
}
_$5g.prototype._$60 = function () {
    if (this._$kT >= 0) {
    }
    ;this._$kT = -1;
    this._$kC = -1;
}
_$5g.prototype._$3E = function (pt) {
    _$E._$6j(this._$jK, pt);
    var rc = new _$4F();
    var _$eR;
    var _$eq = this._$ih._$2e();
    if (_$eq >= 1) {
        _$eR = _$eq - 1;
        if (this._$lV._$jx == _$E._$3s || _$lV._$jx == _$E._$3t) {
            rc.left = 0;
            rc.right = this._$mc.right - this._$mc.left;
            rc.top = this._$ih._$m2[0]._$cZ;
            rc.bottom = this._$ih._$m2[_$eR]._$d8;
        } else {
            rc.top = 0;
            rc.bottom = this._$mc.bottom - this._$mc.top;
            rc.left = this._$ih._$m2[0]._$cZ;
            rc.right = this._$ih._$m2[_$eR]._$d8;
        }
    }
    if (_$E._$5n(rc, pt)) return true;
    return false;
}
_$5g.prototype._$4Y = function () {
}
_$5g.prototype._$72 = function (_$nr) {
    this._$60();
    _$nr._$lo._$52(null);
    this._$5T(_$nr);
    _$nr._$lo._$5T(_$lV._$jx, _$nr);
    _$nr._$kD = _$1j._$57;
    _$nr.setVisible(true);
    this._$kC = -1;
}
_$5g.prototype._$3C = function (pt, _$nr) {
    if (this._$jj) return true;
    var rc = new _$4F();
    this._$2b(rc);
    var ptc = new _$5i();
    ptc.x = pt.x - rc.left;
    ptc.y = pt.y - rc.top;
    rc.right = rc.right - rc.left;
    rc.bottom = rc.bottom - rc.top;
    rc.left = 0;
    rc.top = 0;
    rc.bottom += this.m_B[1] + this.m_B[3];
    rc.right += this.m_B[0] + this.m_B[2];
    var _$tH = this._$lV._$jx;
    if (_$tH == _$E._$3r) {
        ptc.y += 1;
    } else if (_$tH == _$E._$3u) {
        ptc.y -= 1;
    } else if (_$tH == _$E._$3s) {
        ptc.x -= 1;
    } else ptc.x += 1;
    if (!_$E._$5n(rc, ptc)) return false;
    var _$eq = this._$ih._$2e();
    var i;
    for (i = 0; i < _$eq; i++) {
        var _$q8 = this._$ih._$m2[i];
        {
            if (this._$lV._$jx == _$E._$3u || this._$lV._$jx == _$E._$3r) {
                if ((ptc.x > (_$q8._$cZ + this.m_B[0]) && ptc.x < (_$q8._$d8 + this.m_B[0])) && (_$q8._$nr == _$nr)) {
                    return true;
                }
            } else {
                if ((ptc.y > (_$q8._$cZ + this.m_B[1]) && ptc.y < (_$q8._$d8 + this.m_B[1])) && (_$q8._$nr == _$nr)) {
                    return true;
                }
            }
        }
    }
    return false;
}
_$5g.prototype._$3R = function (e) {
    var rc = new _$4F();
    var pt = new _$5i();
    _$mP._$2L(e, pt);
    this._$2b(rc);
    return _$E._$5n(rc, pt);
}
_$5g.prototype._$5Y = function (_$dy) {
    var v = this._$ih;
    var _$tf = v._$2e();
    var m, idx;
    if (this._$kC >= 0 && _$dy >= 0) {
        if (_$dy > this._$kC) {
            var _$tM = v._$m2[this._$kC];
            for (m = this._$kC; m < _$dy; m++) {
                v._$m2[m] = v._$m2[m + 1];
            }
            v._$m2[_$dy] = _$tM;
            idx = _$tM._$nr._$jN;
            for (m = _$dy; m >= this._$kC + 1; m--) {
                v._$m2[m]._$nr._$jN = v._$m2[m - 1]._$nr._$jN;
            }
            v._$m2[this._$kC]._$nr._$jN = idx;
        } else if (_$dy < this._$kC) {
            var _$tM = v._$m2[this._$kC];
            for (m = this._$kC; m >= _$dy + 1; m--) {
                v._$m2[m] = v._$m2[m - 1];
            }
            v._$m2[_$dy] = _$tM;
            idx = _$tM._$nr._$jN;
            for (m = _$dy; m <= this._$kC - 1; m++) {
                v._$m2[m]._$nr._$jN = v._$m2[m + 1]._$nr._$jN;
            }
            v._$m2[this._$kC]._$nr._$jN = idx;
        }
        ;this._$kC = _$dy;
    }
    ;this._$5H();
}
_$5g.prototype._$09 = function (pt, _$8c) {
    var rc = new _$4F();
    this._$2b(rc);
    var ptc = new _$5i();
    ptc.x = pt.x - rc.left;
    ptc.y = pt.y - rc.top;
    rc.right = rc.right - rc.left;
    rc.bottom = rc.bottom - rc.top;
    rc.left = 0;
    rc.top = 0;
    rc.bottom += this.m_B[1] + this.m_B[3];
    rc.right += this.m_B[0] + this.m_B[2];
    var _$eq = this._$ih._$2e();
    var bin = false;
    var i;
    for (i = 0; i < _$eq; i++) {
        var _$q8 = this._$ih._$m2[i];
        var _$90 = false;
        var _$9X = true;
        if ((_$q8._$nr._$km == _$1j._$4h && !_$8c) || (_$q8._$nr._$km == _$1j._$4f && _$8c)) _$9X = false;
        if (_$E._$5n(rc, ptc)) {
            if (_$E._$lJ != null) {
                if (_$E._$lJ._$le == _$q8._$nr) {
                    _$90 = true;
                }
            }
            if (this._$lV._$jx == _$E._$3u || this._$lV._$jx == _$E._$3r) {
                if (ptc.x > (_$q8._$cZ + this.m_B[0]) && ptc.x < (_$q8._$d8 + this.m_B[0])) {
                    bin = true;
                    if (this._$jj) {
                        if (this._$kC >= 0 && i != this._$kC) {
                            this._$5Y(i);
                            return;
                        }
                    }
                    if (!_$8c) {
                        this._$kC = i;
                        if (!_$90 && _$9X) {
                            this._$72(_$q8._$nr);
                            return;
                        }
                    }
                    if (this._$kC == i && !_$90 && _$9X) {
                        this._$5j(_$q8._$nr);
                    } else if (!this._$jj) this._$kC = i;
                    break;
                }
            } else {
                if (ptc.y > (_$q8._$cZ + this.m_B[1]) && ptc.y < (_$q8._$d8 + this.m_B[1])) {
                    if (this._$jj) {
                        if (this._$kC >= 0 && i != this._$kC) {
                            this._$5Y(i);
                            return;
                        }
                    }
                    bin = true;
                    if (!_$8c) {
                        this._$kC = i;
                        if (!_$90 && _$9X) {
                            this._$72(_$q8._$nr);
                            return;
                        }
                    }
                    if (this._$kC == i && !_$90 && _$9X) {
                        this._$5j(_$q8._$nr);
                    } else if (!this._$jj) this._$kC = i;
                    break;
                }
            }
        }
    }
}
_$5g.prototype._$4V = function (e) {
}
_$5g.prototype._$4Z = function (pt) {
    this._$09(pt, true);
}
_$5g.prototype._$51 = function () {
    var _$d7 = this._$lV._$jx;
    var _$eq = this._$ih._$2e();
    var _$q8;
    var rc = new _$4F();
    var _$qC = new _$4F();
    var dt = new _$16();
    this._$2b(_$qC);
    _$qC.right = _$qC.right - _$qC.left;
    _$qC.left = 0;
    _$qC.bottom = _$qC.bottom - _$qC.top;
    _$qC.top = 0;
    if (this._$hE != null) {
        this._$hE.fillStyle = 'rgb( 250, 250, 250 )';
    }
    var _$oE = null;
    var _$br = null;
    var _$eN, _$eO;
    var i;
    for (i = 0; i < _$eq; i++) {
        _$q8 = this._$ih._$m2[i];
        var _$oU = _$q8._$nr._$hZ;
        if (_$oE == null) {
            _$oE = _$q8._$nr._$lo;
            if (_$11._$iC) _$br = _$q8._$hW; else _$bs = this._$cj();
        }
        if (this._$hE == null) {
            if (_$q8._$hv != null) {
                if (_$d7 == _$E._$3u || _$d7 == _$E._$3r) {
                    if (_$11._$iC) {
                        var vp = _$qC.bottom - _$qC.top;
                        var vme = _$q8._$ke + _$q8.m_B[1] + _$q8.m_B[3];
                        _$mP._$6s(_$q8._$hv, _$q8._$cZ, (vp - vme) / 2);
                        _$mP._$6z(_$q8._$hv, _$q8._$l0, _$q8._$ke, !_$11._$iC);
                    } else {
                        var _$fD = 0;
                        _$mP._$6s(_$q8._$hv, _$q8._$cZ, 2 + _$fD);
                        _$mP._$6z(_$q8._$hv, _$q8._$d8 - _$q8._$cZ, _$5g._$33 - 2 - _$fD, !_$11._$iC);
                        _$q8._$hv.style.font = this._$cj();
                    }
                } else {
                    _$fD = (_$qC.right + this.m_B[0] + this.m_B[2]) / 2 - 2;
                    _$mP._$6s(_$q8._$hv, -(_$q8._$d8 - _$q8._$cZ) / 2 + _$fD, _$q8._$cZ + (_$q8._$d8 - _$q8._$cZ) / 2 - _$q8._$ke / 2);
                    _$mP._$6z(_$q8._$hv, _$q8._$l0, _$q8._$ke, !_$11._$iC);
                    if (DSXDFUtil._$jP == DSXDFUtil._$3A || DSXDFUtil._$jP == DSXDFUtil._$I || DSXDFUtil._$jP == DSXDFUtil._$64) {
                        if (DSXDFUtil._$jP == DSXDFUtil._$3A) {
                            if (DSXDFUtil._$ki >= 9) {
                                _$q8._$hv.style['msTransform'] = ' rotate(90deg)';
                            }
                        } else _$q8._$hv.style['webkitTransform'] = ' rotate(90deg)';
                    } else if (DSXDFUtil._$jP == DSXDFUtil._$4O) {
                        _$q8._$hv.style['OTransform'] = ' rotate(90deg) ';
                    } else {
                        _$q8._$hv.style['MozTransform'] = ' rotate(90deg) ';
                    }
                    if (!_$11._$iC) _$q8._$hv.style.font = this._$cj();
                }
                _$q8._$hv.innerHTML = _$q8._$rl;
            }
            continue;
        }
        ;this._$aX(_$d7, _$qC, rc, dt, _$q8, _$br, this._$hE);
        continue;
    }
}
_$5g.prototype._$aX = function (_$d7, _$qC, rc, dt, _$q8, _$br, _$nA) {
    _$mP._$2T(dt, _$br, _$q8._$rl, _$nA);
    if (_$d7 == _$E._$3u || _$d7 == _$E._$3r) {
        rc.left = _$q8._$cZ;
        rc.right = _$q8._$d8;
        if (_$11._$iC) {
            rc.left = 0;
            rc.right = _$q8._$d8 - _$q8._$cZ;
        }
        _$nA.strokeStyle = 'ButtonShadow';
        if (_$d7 == _$E._$3u) {
            rc.top = 0;
            rc.bottom = _$qC.bottom - 3;
            _$mP._$1v(rc.left, rc.top, rc.left, rc.bottom, _$nA);
            _$mP._$1v(rc.left, rc.bottom, rc.right, rc.bottom, _$nA);
            _$mP._$1v(rc.right, rc.bottom, rc.right, rc.top, _$nA);
        } else {
            rc.top = 2;
            rc.bottom = _$qC.bottom;
            _$mP._$1v(rc.left, rc.bottom, rc.left, rc.top, _$nA);
            _$mP._$1v(rc.left, rc.top, rc.right, rc.top, _$nA);
            _$mP._$1v(rc.right, rc.top, rc.right, rc.bottom, _$nA);
            rc.top = 3;
        }
        rc.left += 2;
        _$nA.fillStyle = 'ButtonFace';
        _$nA.fillRect(rc.left, rc.top, rc.right - rc.left, rc.bottom - rc.top);
        _$eN = rc.right - _$O._$kj;
        _$eO = rc.top + (rc.bottom - rc.top - _$O._$kj) / 2;
        _$nA.font = this._$cj();
        _$nA.fillStyle = this._$iw;
        _$nA.fillText(_$q8._$rl, rc.left, (rc.bottom - rc.top) / 2 + rc.top + 4);
    } else {
        _$nA.save();
        _$nA.strokeStyle = 'ButtonShadow';
        _$nA.translate(this._$hu.width / 2, -this._$hu.width / 2);
        _$nA.rotate(3.141592653589 / 2);
        _$nA.translate(this._$hu.width / 2, -this._$hu.width / 2);
        rc.left = _$q8._$cZ;
        rc.right = _$q8._$d8;
        if (_$11._$iC) {
            rc.left = 0;
            rc.right = _$q8._$d8 - _$q8._$cZ;
        }
        if (_$d7 == _$E._$3s) {
            rc.top = 3;
            rc.bottom = _$qC.right;
            _$mP._$1v(rc.left, rc.top, rc.left, rc.bottom, _$nA);
            _$mP._$1v(rc.left, rc.top, rc.right, rc.top, _$nA);
            _$mP._$1v(rc.right, rc.top, rc.right, rc.bottom, _$nA);
            _$eN = _$qC.left + (_$qC.right - _$qC.left - _$O._$kj) / 2;
        } else {
            rc.top = 0;
            rc.bottom = _$qC.right - 2;
            _$mP._$1v(rc.left, rc.bottom, rc.left, rc.top, _$nA);
            _$mP._$1v(rc.right, rc.top, rc.right, rc.bottom, _$nA);
            _$mP._$1v(rc.left, rc.bottom, rc.right, rc.bottom, _$nA);
            _$eN = _$qC.left + (_$qC.right - _$qC.left - _$O._$kj) / 2 + 1;
            rc.bottom -= 1;
        }
        rc.left += 2;
        _$nA.fillStyle = 'ButtonFace';
        _$nA.fillRect(rc.left, rc.top, rc.right - rc.left, rc.bottom - rc.top);
        _$eO = rc.right - _$O._$kj;
        _$nA.font = this._$cj();
        _$nA.fillStyle = this._$iw;
        _$nA.fillText(_$q8._$rl, rc.left, (rc.bottom - rc.top) / 2 + rc.top + 4);
        _$nA.restore();
    }
}
_$5g.prototype._$04 = function (_$nL, _$nA, _$q6, _$oc, _$dU, _$pk, _$dN) {
    _$dN[0] = 0;
    _$pk[0] = null;
    {
        var _$qW = new _$4F();
        _$qW._$0u(this._$mc);
        var _$9N = this._$3M(_$qW, _$q6, _$dN);
        if (_$9N != 0xff) {
            if (this._$lV._$jx == _$E._$3s || this._$lV._$jx == _$E._$3t) _$oc.cy = this._$mc.bottom - this._$mc.top; else _$oc.cx = this._$mc.right - this._$mc.left;
        }
        return _$9N;
    }
}
_$5g.prototype._$5j = function (_$nr) {
    var rc = new _$4F();
    this._$2b(rc);
    var iw = _$nr._$cK();
    var ih = _$nr._$cl();
    iw += 6;
    ih += 6;
    var _$qK = new _$4F();
    var _$fR = this._$k1;
    if (_$fR == _$E._$3s) {
        rc.left = rc.right + this.m_B[0] + this.m_B[2];
        rc.right = rc.left + iw;
        rc.top += this._$jQ;
        rc.bottom -= this._$k9;
        rc.bottom += this.m_B[1] + this.m_B[3];
    } else if (_$fR == _$E._$3t) {
        rc.right = rc.left;
        rc.left = rc.right - (iw);
        rc.top += this._$jQ;
        rc.bottom -= this._$k9;
        rc.bottom += this.m_B[1] + this.m_B[3];
    } else if (_$fR == _$E._$3u) {
        rc.left += this._$jQ;
        rc.right -= this._$k9;
        rc.right += this.m_B[0] + this.m_B[2];
        rc.top = rc.bottom + this.m_B[1] + this.m_B[3];
        rc.bottom = rc.top + ih;
    } else {
        rc.bottom = rc.top;
        rc.top = rc.top - (ih);
        rc.left += this._$jQ;
        rc.right -= this._$k9;
        rc.right += this.m_B[0] + this.m_B[2];
    }
    var _$oQ = new _$5h();
    _$oQ._$lR = this;
    _$oQ._$le = _$nr;
    if (this._$kT < 0) {
        this._$kT = 1;
    }
    _$oQ._$le = _$nr;
    _$oQ.Add(_$nr);
    _$nr._$3h(true);
    _$nr._$bx(true);
    _$oQ._$6w(_$fR);
    _$oQ._$6A(rc.left, rc.top, (rc.right - rc.left), (rc.bottom - rc.top));
    _$oQ.setVisible(true);
    _$nr._$lH._$op._$52(_$oQ);
}
_$5g.prototype._$0v = function () {
    var iNo = this._$ih._$2e();
    if (iNo > 0) {
        var _$po = new Array();
        var i;
        for (i = 0; i < iNo; i++) {
            _$po[i] = this._$ih._$m2[i];
            if (!DSXDFUtil._$jo || _$11._$iC) {
                this.this._$hu.removeChild(_$po[i]._$hv);
            }
        }
        ;this._$ih._$60();
        return _$po;
    }
    return null;
}
_$5g.prototype._$4S = function (_$nr, _$sy) {
    var _$eq = _$ih._$2e();
    var i;
    for (i = 0; i < _$eq; i++) {
        if (_$nr == _$ih._$m2[i]._$nr) {
            var _$q8 = _$ih._$m2[i];
            _$q8._$ri = new String(_$sy);
            _$q8._$rl = new String(_$sy);
            this._$5H();
            break;
        }
    }
}
_$5g.prototype._$bU = function () {
    var v = new Array();
    var _$tM = this._$ih;
    var _$tf = _$tM._$2e();
    for (var m = 0; m < _$tf; m++) {
        v[v.length] = _$tM._$m2[m]._$nr;
    }
    return v;
}
_$5g.prototype._$9 = function (_$nr) {
    var _$oV = new _$O(0, 0, _$nr._$hT._$cF());
    _$oV._$nr = _$nr;
    var v = this._$ih;
    var cnt = v._$2e();
    if (_$nr._$jN == 0x3FF) {
        if (cnt > 0) {
            _$nr._$jN = v._$m2[cnt - 1]._$nr._$jN + 1;
        } else {
            _$nr._$jN = 0;
        }
        v._$c(_$oV);
    } else {
        var m;
        for (m = 0; m < cnt; m++) {
            if (_$nr._$jN < v._$m2[m]._$nr._$jN) {
                v._$5(_$oV, m);
                if ((m + 1) < cnt && v._$m2[m + 1]._$nr._$jN == _$nr._$jN) {
                    for (m = m + 1; m < cnt; m++) {
                        v._$m2[m]._$nr._$jN++;
                    }
                }
                break;
            }
        }
        if (m == cnt) {
            if (cnt > 0 && _$nr._$jN == v._$m2[cnt - 1]._$nr._$jN) {
                _$nr._$jN += 1;
            }
            v._$c(_$oV);
        }
    }
    if (!DSXDFUtil._$jo || _$11._$iC) {
        _$oV._$hv = _$mP._$0w("div", this._$hu);
        _$oV._$hv.className = _$nr.sID + "AutoHide";
        _$oV._$hW = _$mP._$cB(_$oV._$hv);
        _$oV._$hv._$4J = this;
        _$oV._$hv.onmousedown = _$73._$18;
        _$oV._$hv.onmousemove = _$73._$17;
    }
    ;this._$5H();
    this._$r9();
}
_$5g.prototype._$5T = function (_$nr) {
    var _$eq = this._$ih._$2e();
    var i;
    for (i = 0; i < _$eq; i++) {
        if (_$nr == this._$ih._$m2[i]._$nr) {
            if (this._$ih._$m2[i]._$hv != null) {
                this._$hu.removeChild(this._$ih._$m2[i]._$hv);
                this._$ih._$m2[i]._$hv = null;
            }
            ;this._$ih._$5N(i);
            break;
        }
    }
    ;this._$5H();
    if (this._$hE != null) this._$hu.width = this._$hu.width;
    this._$r9();
    return this._$ih._$2e();
}
_$5g.prototype._$5H = function () {
    var _$qR = new _$4F();
    var _$gx = 0;
    var _$gy = 0;
    var _$qM = new _$4F();
    this._$2b(_$qM);
    if (this._$lV._$jx == _$E._$3u || this._$lV._$jx == _$E._$3r) {
        this._$5I(_$gx);
    } else {
        this._$5I(_$gx);
    }
    ;this._$jQ = _$gx;
    this._$k9 = _$gy;
    this._$r9();
}
_$5g.prototype._$cz = function () {
    var d = new _$16();
    d.width = _$mP._$2W(this._$hu, !_$11._$iC);
    d.height = _$mP._$2o(this._$hu, !_$11._$iC);
    return d;
}
_$5g.prototype._$2A = function (_$9t) {
    if (_$11._$iC) {
        var oc;
        if (_$9t == _$E._$3r || _$9t == _$E._$3u) {
            oc = this.m_B[1] + this.m_B[3] + _$mP._$cD(this._$hu, 'height');
        } else {
            oc = oc = this.m_B[0] + this.m_B[2] + _$mP._$cD(this._$hu, 'width');
        }
        if (oc < _$5g._$33) oc = _$5g._$33;
        return oc;
    }
    return _$5g._$33;
}
_$5g.prototype._$5I = function (_$dD) {
    if (this._$ih == null) return;
    var d = this._$cz();
    var ft = null;
    var _$8W = false;
    if (this._$lV._$jx == _$E._$3u || this._$lV._$jx == _$E._$3r) {
        _$8W = true;
    }
    d.width += this.m_B[0] + this.m_B[2];
    d.height += this.m_B[1] + this.m_B[3];
    var _$gF = this._$ih._$2e();
    var _$fT = _$dD;
    var tab = null;
    var dt = new _$16();
    var i;
    var _$ee = new Array();
    var _$oE = null;
    for (i = 0; i < _$gF; i++) {
        tab = this._$ih._$m2[i];
        tab._$cZ = _$fT;
        {
            if (_$11._$iC) {
                ft = tab._$hW;
            } else {
                ft = this._$cj();
            }
        }
        _$mP._$2T(dt, ft, tab._$ri, this._$hE);
        if (_$11._$iC) {
            tab.m_B = _$mP._$26(tab._$hv);
            tab._$ke = _$mP._$cD(tab._$hv, "height");
            tab._$l0 = _$mP._$cD(tab._$hv, "width");
            if (tab._$l0 < (dt.width + _$G._$37)) {
                tab._$l0 = dt.width + _$G._$37;
            }
            if (tab._$ke <= 0) {
                if (_$8W) {
                    tab._$ke = d.height - this.m_B[1] - this.m_B[3] - tab.m_B[1] - tab.m_B[3];
                } else {
                    tab._$ke = d.width - this.m_B[0] - this.m_B[2] - tab.m_B[1] - tab.m_B[3];
                }
            }
            tab._$d8 = _$fT + tab._$l0 + tab.m_B[0] + tab.m_B[2];
        } else {
            tab._$d8 = _$fT + dt.width + 2 * _$G._$37;
        }
        if (tab._$nr._$hZ != null) tab._$d8 += _$O._$kj;
        _$ee[i] = tab._$d8 - _$fT;
        _$fT = tab._$d8;
    }
}

function _$5h() {
    this._$kl = 0;
    this._$le = null;
    this._$lR = null;
    this._$lT = null;
    this._$lT = new _$6M(DSXDFUtil._$hQ);
    this._$lT._$lM = this;
    this._$hP = new Date();
    this._$hF = this._$hP.getTime();
    this._$jd = false;
}

_$5h.prototype.Add = function (_$nr) {
    var it = 0;
    var _$eS = _$nr._$lH._$kn;
    _$mP._$6r(this._$lT._$hu, _$eS);
    _$nr._$6r(_$eS + 1);
    var _$sO = this;
    this._$kl = setInterval(function () {
        if (_$nr._$jv || _$sO._$jd) return;
        var rc = new _$4F();
        _$sO._$lT._$2b(rc);
        var pt = DSXDFUtil._$jF._$i3;
        if (!_$E._$5n(rc, pt)) {
            if (!_$sO._$lR._$3C(pt, _$nr)) {
                var vd = new Date();
                var _$tn = (vd.getTime() - _$sO._$hF);
                if (_$tn > DSXDFUtil._$jF._$iu) {
                    _$nr._$lH._$op._$52(null);
                }
            }
        }
    }, 50);
}
_$5h.prototype.setVisible = function (_$8t) {
}
_$5h.prototype._$6w = function (_$dS) {
    this._$kB = _$dS;
}
_$5h.prototype._$6A = function (_$dn, _$dZ, _$e1, _$dh) {
    var _$dE = this._$kB;
    _$mP._$6s(this._$lT._$hu, _$dn, _$dZ);
    var canvas = this._$lT._$hu;
    if (DSXDFUtil._$jo) {
        canvas.width = _$e1;
        canvas.height = _$dh;
    } else {
        canvas.style.width = _$e1 + "px";
        canvas.style.height = _$dh + "px";
    }
    if (this._$le != null) {
        var _$tx = 2;
        var _$tL, _$tQ, _$tR, _$tK;
        if (_$dE == _$E._$3s) {
            _$tL = _$dn + _$6M._$q;
            _$tQ = _$dZ + _$6M._$q;
            _$tR = _$e1 - 2 * _$6M._$q - _$tx;
            _$tK = _$dh - 2 * _$6M._$q;
        } else if (_$dE == _$E._$3t) {
            _$tL = _$dn + _$6M._$q + _$tx;
            _$tQ = _$dZ + _$6M._$q;
            _$tR = _$e1 - 2 * _$6M._$q - _$tx;
            _$tK = _$dh - 2 * _$6M._$q;
        } else if (_$dE == _$E._$3u) {
            _$tL = _$dn + _$6M._$q;
            _$tQ = _$dZ + _$6M._$q;
            _$tR = _$e1 - 2 * _$6M._$q;
            _$tK = _$dh - 2 * _$6M._$q - _$tx;
        } else {
            _$tL = _$dn + _$6M._$q;
            _$tQ = _$dZ + _$6M._$q + _$tx;
            _$tR = _$e1 - 2 * _$6M._$q;
            _$tK = _$dh - 2 * _$6M._$q - _$tx;
        }
        ;this._$le._$6B(_$tL, _$tQ, _$tR, _$tK);
    }
}
_$5h.prototype._$aJ = function () {
    if (this._$lR != null) this._$lR._$60();
    this._$le._$3h(false);
    this._$le._$bx(false);
    this._$le._$lo.Add(this._$le);
    _$mP._$5P(DSXDFUtil._$hQ, this._$lT._$hu);
    clearInterval(this._$kl);
}
_$5h.prototype._$0b = function (e) {
    if (this._$jd) return;
    var rc = new _$4F();
    this._$lT._$2b(rc);
    var pt = new _$5i();
    _$mP._$2L(e, pt);
    var vd = new Date();
    if (!_$E._$5n(rc, pt)) {
        if (!this._$lR._$3C(pt, this._$le)) {
            var _$tn = (vd.getTime() - this._$hF);
            if (_$tn > DSXDFUtil._$jF._$iu) {
                this._$le._$lH._$op._$52(null);
            }
        }
    } else {
        this._$hF = vd.getTime();
    }
}
_$5h.prototype._$0a = function (e) {
    var rc = new _$4F();
    this._$lT._$2b(rc);
    var pt = new _$5i();
    _$mP._$2L(e, pt);
    if (_$E._$5n(rc, pt)) {
        this._$jd = true;
    } else {
        this._$jd = false;
        if (!this._$lR._$3R(e)) {
            this._$le._$lH._$op._$52(null);
        }
    }
}

_$E.prototype._$6u = function (_$dq, color) {
    if (_$dq >= 0 && _$dq <= 3) {
        if (this._$m1[_$dq] != null) {
            this._$m1[_$dq]._$6u(color);
        }
    }
}
_$E.prototype._$6v = function (_$dq, fon) {
    if (_$dq >= 0 && _$dq <= 3) {
        if (this._$m1[_$dq] != null) {
            this._$m1[_$dq]._$6v(fon);
        }
    }
}
_$E.prototype._$6t = function (_$dq, c) {
    if (_$dq >= 0 && _$dq <= 3) {
        if (this._$m1[_$dq] != null) {
            this._$m1[_$dq]._$6t(c);
        }
    }
}
_$1j.prototype.dockIt = function () {
    if (!this._$j9) return false;
    if (!this._$gh()) return false;
    if (!this._$S()) {
        if (this._$iU) {
            this._$6R();
        }
    } else {
        if (this._$kD == _$1j._$78) {
            this._$0k();
        }
        if (this._$li != null && !this._$li._$iK) {
            this._$6R();
        }
    }
    return true;
}
_$1j.prototype.floatIt = function () {
    if (!this._$j9) return false;
    if (!this._$gh()) return false;
    var kst = "(Demo)";
    if (!this._$S()) {
        if (!this._$iU && this._$iF) this._$1W();
    } else {
        if (this._$kD == _$1j._$78) {
            this._$0k();
        }
        if (this._$li != null && this._$li._$iK) this._$6R();
    }
    return true;
}
_$1j.prototype.setFloatable = function (_$8b) {
    this._$iF = _$8b;
    if (!this._$iF && this._$li != null && !this._$li._$iK) {
        if (this._$kP != 0) {
            this.dockIt();
        } else {
        }
    }
}
_$1j.prototype.getShowState = function () {
    return this._$cm();
}
_$1j.prototype.setAutoHide = function () {
    return this._$rW(2);
}
_$1j.prototype.enableNormalHiddenButton = function (_$88) {
    return this._$rO(_$88);
}
_$1j.prototype._$0i = function () {
    if (this._$kD == _$1j._$78) {
        this._$lo._$5U();
        this._$0k();
    }
    var _$tl = this._$gh();
    if (!_$tl) {
        if (this._$lh != null && this._$lh._$oG != null) this._$lh._$oG._$6k(this);
    }
    ;this.setVisible(false);
    var _$8F = false;
    if (this._$li != null) {
        _$8F = this._$li._$iK;
        this._$li._$5b(this);
    }
    ;this._$jw = this._$jz;
    this._$jY = this._$kH;
    this._$lh = this._$lN;
    if (this._$S()) {
        if (this._$lO != null) this._$lO._$5b(this);
    } else {
        if (!_$8F && this._$lO != null) {
            this._$lO._$5b(this);
        }
    }
    ;this._$aa();
    var ic = _$1j._$ld._$2e();
    var _$8S = false;
    var i;
    for (i = 0; i < ic; i++) {
        if (_$1j._$ld._$m2[i] == this) {
            _$1j._$ld._$5N(i);
            break;
        }
    }
    ;this._$ji = _$tl;
}
_$1j.prototype.addEventListener = function (_$t6, _$rf) {
    if (_$rf != null) {
        var ar = null;
        var _$ep;
        var i;
        if (_$t6 == "visibilityChanged") {
            ar = this._$iy;
        } else if (_$t6 == "dockStyleChanged") {
            ar = this._$hR;
        } else if (_$t6 == "sizeChanged") {
            ar = this._$is;
        }
        if (ar != null) {
            _$ep = ar.length;
            for (i = 0; i < _$ep; i++) {
                if (ar[i] == _$rf) break;
            }
            if (i == _$ep) ar.push(_$rf);
        }
    }
}
_$1j.prototype.removeEventListener = function (_$t6, _$rf) {
    if (_$rf != null) {
        var ar = null;
        var _$ep;
        var i;
        if (_$t6 == "visibilityChanged") {
            ar = this._$iy;
        } else if (_$t6 == "dockStyleChanged") {
            ar = this._$hR;
        } else if (_$t6 == "sizeChanged") {
            ar = this._$is;
        }
        if (ar != null) {
            _$ep = ar.length;
            for (i = 0; i < _$ep; i++) {
                if (ar[i] == _$rf) {
                    ar.splice(i, 1);
                    break;
                }
            }
        }
    }
}
_$1j.prototype.setDockableSideMasks = function (_$ds) {
    this._$kP = _$ds;
    if ((this._$kP & 0x0f) == 0x0f) {
        return;
    }
    if (!this._$j9) return;
    if (this._$kP == 0) {
        if (this._$iF && this._$j9) {
            this.setVisible(true);
            this.floatIt();
        }
        return;
    }
    var _$9G;
    var _$9M;
    if (this._$li != null && this._$li._$iK) {
        _$9G = this._$jw;
        _$9M = this._$6l(this._$jw);
        if (_$9M == this._$jw) return; else {
            var _$92 = this._$3F();
            var _$9Y = false;
            if (_$92) {
                if (this._$lh != null && this._$lh._$oG != null) {
                    this._$lh._$oG._$6k(this);
                }
                ;this._$li._$5O(this, this._$li);
                _$9Y = true;
            } else {
                _$9Y = this._$gh();
                if (_$9Y) {
                    this._$li._$5O(this, this._$li);
                } else {
                    this._$li._$5b(this);
                }
            }
            ;this._$li = this._$lo;
            this._$jY = 0xffffffff;
            this._$jw = _$9M;
            if ((this._$1o(_$9G) && !this._$1o(_$9M)) || (!this._$1o(_$9G) && this._$1o(_$9M))) {
                var _$gR = this._$mq.cx;
                this._$mq.cx = this._$mq.cy;
                this._$mq.cy = _$gR;
            }
            if (_$9Y) {
                this._$li._$1d(this, null);
            }
            ;this._$r0(0);
        }
        return;
    }
    if (this._$li != null && !this._$li._$iK) {
        _$9G = this._$jz;
        _$9M = this._$6l(_$jz);
        if (_$9M == this._$jz) return;
        var _$9Q = this._$jw;
        var _$ql = this._$li;
        var _$qi = this._$lh;
        var _$gW = this._$jY;
        this._$jw = this._$jz;
        this._$li = this._$lO;
        this._$lh = this._$lN;
        this._$jY = this._$kH;
        if (this._$li != null) {
            this._$li._$5b(this);
            this._$lO = _$lo;
            this._$kH = 0xffffffff;
            this._$jz = _$9M;
            this._$lN = null;
            if ((this._$1o(_$9G) && !this._$1o(_$9M)) || (!this._$1o(_$9G) && this._$1o(_$9M))) {
                var _$gR = this._$mq.cx;
                this._$mq.cx = this._$mq.cy;
                this._$mq.cy = _$gR;
            }
        }
        ;this._$jw = _$9Q;
        this._$li = _$ql;
        this._$lh = _$qi;
        this._$jY = _$gW;
    }
}
_$1j.prototype._$cd = function () {
    return this._$kP;
}
_$1j.prototype.setCaptionFont = function (fontFamily, fontStyle, fontSize, fontWeight) {
    if (this._$hT != null) {
        this._$hT._$rN(fontFamily, fontStyle, fontSize, fontWeight);
    }
}
_$1j.prototype.setCaptionColor = function (color) {
    if (this._$hT != null) {
        this._$hT._$rC(color);
    }
}
_$1j.prototype.setCaptionBGColor = function (color) {
    if (this._$hT != null) {
        this._$hT._$rx(color);
    }
}
_$5g.prototype._$a6 = function (_$dY) {
    var _$td = ["dfahpanelleft", "dfahpaneltop", "dfahpanelright", "dfahpanelbottom"];
    this._$hu.className = _$td[_$dY];
    var _$ay = _$mP._$cC(this._$hu, "font");
    if (_$ay != null && _$ay.length > 0) {
        this._$hW = _$ay;
    } else {
        var _$bo = _$mP._$cC(this._$hu, "font-family");
        var _$bN = _$mP._$cC(this._$hu, "font-style");
        var fs = _$mP._$cC(this._$hu, "font-size");
        var fw = _$mP._$cC(this._$hu, "font-weight");
        if (_$bN != null) this._$hW = _$bN + " ";
        if (fw != null) this._$hW += fw + " ";
        if (fs != null) {
            this._$hW += fs + " ";
        }
        if (_$bo != null) {
            this._$hW += _$bo;
        }
    }
    var co = _$mP._$cC(this._$hu, "color");
    if (co != null && co.length > 0) {
        this._$iw = co;
    }
}
_$1q.prototype._$rN = function (fontFamily, fontStyle, fontSize, fontWeight) {
    if (fontStyle != null) this._$hW = fontStyle + " ";
    if (fontWeight != null) this._$hW += fontWeight + " ";
    if (fontSize != null) {
        this._$hW += fontSize + " ";
    }
    if (fontFamily != null) {
        this._$hW += fontFamily;
    }
    if (DSXDFUtil._$jo) {
        this._$hu.width = this._$hu.width;
    }
    ;this._$r9();
}
_$1q.prototype._$rC = function (color) {
    this._$iw = color;
    if (DSXDFUtil._$jo) {
        this._$hu.width = this._$hu.width;
    }
    ;this._$r9();
}
_$1q.prototype._$rx = function (color) {
    this._$hu.style.background = color;
    if (DSXDFUtil._$jo) {
        this._$hu.width = this._$hu.width;
    }
    ;this._$r9();
}
_$1q.prototype._$Z = function () {
    if (_$11._$iC) {
        return;
    }
    var col = _$mP._$cC(this._$hu, "color");
    if (col != null && col.length > 0) {
        this._$iw = col;
    }
    var _$ay = _$mP._$cC(this._$hu, "font");
    if (_$ay != null && _$ay.length > 0) {
        this._$hW = _$ay;
    } else {
        var _$bo = _$mP._$cC(this._$hu, "font-family");
        var _$bN = _$mP._$cC(this._$hu, "font-style");
        var fs = _$mP._$cC(this._$hu, "font-size");
        var fw = _$mP._$cC(this._$hu, "font-weight");
        if (_$bN != null) this._$hW = _$bN + " ";
        if (fw != null) this._$hW += fw + " ";
        if (fs != null) {
            this._$hW += fs + " ";
        }
        if (_$bo != null) {
            this._$hW += _$bo;
        }
    }
    var bg = _$mP._$cC(this._$hu, "background-Color");
    if (bg == null || bg.length == 0) {
        this._$hu.style.background = 'ButtonFace';
    }
}
_$G.prototype._$Z = function () {
    this._$hu.className = "dftabpanel";
    var col = _$mP._$cC(this._$hu, "color");
    if (col != null && col.length > 0) {
        this._$iw = col;
    }
    var _$ay = _$mP._$cC(this._$hu, "font");
    if (_$ay != null && _$ay.length > 0) {
        this._$hW = _$ay;
    } else {
        var _$bo = _$mP._$cC(this._$hu, "font-family");
        var _$bN = _$mP._$cC(this._$hu, "font-style");
        var fs = _$mP._$cC(this._$hu, "font-size");
        var fw = _$mP._$cC(this._$hu, "font-weight");
        if (_$bN != null) this._$hW = _$bN + " ";
        if (fw != null) this._$hW += fw + " ";
        if (fs != null) {
            this._$hW += fs + " ";
        }
        if (_$bo != null) {
            this._$hW += _$bo;
        }
    }
    var bg = _$mP._$cC(this._$hu, "background-Color");
    if (bg == null || bg.length == 0) {
        this._$hu.style.background = 'ButtonFace';
    }
}
DSXDFUtil.prototype.setAHPanelTextColor = function (_$dr, color) {
    DSXDFUtil._$lG._$6u(color);
}
DSXDFUtil.prototype.setAHPanelBGColor = function (_$dr, color) {
    DSXDFUtil._$lG._$6t(color);
}
DSXDFUtil.prototype.setAHPanelFont = function (_$dr, fontFamily, fontStyle, fontSize, fontWeight) {
    var fon = "";
    if (fontStyle != null) fon = fontStyle + " ";
    if (fontWeight != null) fon += fontWeight + " ";
    if (fontSize != null) {
        fon += fontSize + " ";
    }
    if (fontFamily != null) {
        fon += fontFamily;
    }
    DSXDFUtil._$lG._$6v(_$dr, fon);
}
_$5g.prototype._$6u = function (color) {
    if (color.length > 0) {
        this._$iw = color;
        if (DSXDFUtil._$jo) {
            this._$hu.width = this._$hu.width;
        }
        ;this._$r9();
    }
}
_$5g.prototype._$6t = function (color) {
    if (color.length > 0) {
        this._$hu.style.background = color;
        if (DSXDFUtil._$jo) {
            this._$hu.width = this._$hu.width;
        }
        ;this._$r9();
    }
}
_$5g.prototype._$6v = function (fon) {
    this._$hW = fon;
    if (DSXDFUtil._$jo) {
        this._$hu.width = this._$hu.width;
    }
    ;this._$5H();
    this._$r9();
}
_$1g.prototype._$bY = function () {
    var tmp = _$1j._$ld;
    var ic = tmp._$2e();
    var re = new Array();
    for (var m = 0; m < ic; m++) {
        if (!(tmp._$m2[m] instanceof _$1g)) {
            re[re.length] = tmp._$m2[m];
        }
    }
    return re;
}
_$1g.prototype._$bW = function () {
    var tmp = _$1j._$ld;
    var ic = tmp._$2e();
    var re = new Array();
    for (var m = 0; m < ic; m++) {
        if (!(tmp._$m2[m] instanceof _$1g) && tmp._$m2[m]._$gb()) {
            re[re.length] = tmp._$m2[m];
        }
    }
    return re;
}
_$1g.prototype._$bX = function () {
    var tmp = _$1j._$ld;
    var ic = tmp._$2e();
    var re = new Array();
    for (var m = 0; m < ic; m++) {
        if (!(tmp._$m2[m] instanceof _$1g) && !tmp._$m2[m]._$gh()) {
            re[re.length] = tmp._$m2[m];
        }
    }
    return re;
}
_$1g.prototype._$bV = function () {
    var tmp = _$1j._$ld;
    var ic = tmp._$2e();
    var re = new Array();
    for (var m = 0; m < ic; m++) {
        if (!(tmp._$m2[m] instanceof _$1g) && tmp._$m2[m]._$kD == 2) {
            re[re.length] = tmp._$m2[m];
        }
    }
    return re;
}
_$1g.prototype._$c1 = function (_$dS) {
    if (_$dS >= 0 && _$dS <= 3) {
        return this._$op._$bT(_$dS);
    }
    return null;
}

