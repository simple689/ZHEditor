// function WidgetDockWindow(window, title) {
//     WidgetDockWindow.baseConstructor.call(this, window, title);
//     this._patternMain = new WidgetDockPatternMain(true);
//     this._$kS = null;
//     this._$kL = new Array();
//     this.cx;
//     this.cy;
//     this._$lm = new Array(4);
//     this._$3C();
//     this._$jO = 4;
// };
// WidgetDockWindow.prototype.addFixedPanel = function (element, type) {
//     element.style.position = "absolute";
//     this._patternMain.addFixedPanel(element, type);
// };
// WidgetDockWindow._$hK = null;
//
//
// WidgetDockWindow.prototype.mouseMove = function (e) {
//     if (WidgetDockWindow._$hK != null) {
//         WidgetDockWindow._$hK._$ms(e);
//     } else {
//         this._patternMain._$0a(e);
//     }
// };
// WidgetDockWindow.prototype.mouseDown = function (e) {
//     this._patternMain._$09(e);
//     var pt = new WidgetDockLocation();
//     WidgetDockElementController._$2D(e, pt);
//     var _$e0 = this._$kL.length;
//     var i;
//     for (i = 0; i < _$e0; i++) {
//         if (this._$kL[i]._$36(pt.x, pt.y)) {
//             if (i != 0) {
//                 var _$tr = this._$kL[0]._$jO;
//                 var _$tm = this._$kL[i];
//                 var j;
//                 for (j = 0; j < i; j++) {
//                     this._$kL[j]._$X(-3);
//                 }
//                 this._$kL.splice(i, 1);
//                 this._$kL.splice(0, 0, _$tm);
//                 _$tm._$6r(_$tr);
//             }
//             break;
//         }
//     }
// };
// WidgetDockWindow.prototype.mouseUp = function (e) {
//     if (WidgetDockWindow._$hK != null) {
//         WidgetDockWindow._$hK.mouseUp(e);
//         WidgetDockWindow._$hK = null;
//     }
// };
// WidgetDockWindow.prototype._$rv = function (sID) {
//     var ic = WidgetDockFloatPanel._floatPanelController.getPanelNum();
//     var i;
//     for (i = 0; i < ic; i++) {
//         var _$sR = WidgetDockFloatPanel._floatPanelController._panelList[i]._element;
//         if (_$sR != null && _$sR.id == sID) {
//             WidgetDockFloatPanel._floatPanelController._panelList[i].hasOutIFrame(true);
//             return true;
//         }
//     }
//     return false;
// };
// WidgetDockWindow.prototype._$6s = function (sch) {
//     var ic = WidgetDockFloatPanel._floatPanelController.getPanelNum();
//     var i;
//     for (i = 0; i < ic; i++) {
//         if (WidgetDockFloatPanel._floatPanelController._panelList[i] != this) WidgetDockFloatPanel._floatPanelController._panelList[i]._$0c(sch);
//     }
//     this._patternMain._$0c(sch);
// };
// WidgetDockWindow.prototype._$0g = function () {
//     var _$nR = WidgetDockFloatPanel._floatPanelController;
//     var _$e1 = 0;
//     if (_$nR == null) return;
//     _$e1 = _$nR.getPanelNum();
//     var i;
//     for (i = _$e1 - 1; i >= 0; i--) {
//         if (_$nR._panelList[i] != this) {
//             _$nR._panelList[i]._$0g();
//         }
//     }
//     this._patternMain._$5F();
//     if (this._$kL != null) {
//         _$e1 = _$K._$kL.length;
//         for (i = 0; i < _$e1; i++) {
//             this._$kL[i]._$5F();
//         }
//         this._$kL.length = 0;
//     }
//     this._patternMain._$3z();
//     var vrc = new WidgetDockRect();
//     this.getWindowRect(vrc);
//     this._patternMain.setSize(vrc.right - vrc.left, vrc.bottom - vrc.top);
//     this._$my(null);
// };
// WidgetDockWindow.prototype._$2i = function () {
//     return this._$kL;
// };
// WidgetDockWindow.prototype.getWindowRect = function (rc) {
//     var iw = 0;
//     var ih = 0;
//     if (window.innerHeight) {
//         iw = window.innerWidth;
//         ih = window.innerHeight;
//     } else if (document.documentElement && document.documentElement.clientHeight) {
//         ih = document.documentElement.clientHeight;
//         iw = document.documentElement.clientWidth;
//     } else {
//         iw = document.body.clientWidth;
//         ih = document.body.clientHeight;
//     }
//     rc.left = 0;
//     rc.top = 0;
//     rc.right = rc.left + iw;
//     rc.bottom = rc.top + ih;
// };
// WidgetDockWindow.prototype._$3C = function () {
//     window.onresize = _$7g;
//     var rect = new WidgetDockRect();
//     this.getWindowRect(rect);
//     this._patternMain.setSize(rect.right - rect.left, rect.bottom - rect.top);
//     var i;
//     for (i = 0; i < 4; i++) {
//         this._$lm[i] = new _$5h();
//     }
//     this._patternMain._$jv = 0;
// };
// WidgetDockWindow.prototype._$ml = function (mainPattern) {
//     var _$e1 = this._$kL.length;
//     var i;
//     for (i = 0; i < _$e1; i++) {
//         if (this._$kL[i] == mainPattern) {
//             this._$kL.splice(i, 1);
//             break;
//         }
//     }
//     this._$kL.splice(0, 0, mainPattern);
//     mainPattern._$6r(this._$jO);
//     this._$jO += 3;
// };
// WidgetDockWindow.prototype._$mm = function (mainPattern) {
//     var _$e1 = this._$kL.length;
//     var i;
//     for (i = 0; i < _$e1; i++) {
//         if (this._$kL[i] == mainPattern) {
//             var j;
//             for (j = 0; j < i; j++) {
//                 this._$kL[j]._$X(-3);
//             }
//             this._$kL.splice(i, 1);
//             if (this._$kL.length > 0) {
//                 this._$jO = this._$kL[0]._$jO + 3;
//             } else {
//                 this._$jO = mainPattern._$jO;
//             }
//             break;
//         }
//     }
// };
// WidgetDockWindow.prototype._$my = function (e) {
//     var rc = new WidgetDockFrame();
//     var d = new WidgetDockSize();
//     var iw = 0;
//     var ih = 0;
//     if (window.innerHeight) {
//         iw = window.innerWidth;
//         ih = window.innerHeight;
//     } else if (document.documentElement && document.documentElement.clientHeight) {
//         ih = document.documentElement.clientHeight;
//         iw = document.documentElement.clientWidth;
//     } else {
//         iw = document.body.clientWidth;
//         ih = document.body.clientHeight;
//     }
//     d.width = iw;
//     d.height = ih;
//     rc.height = ih;
//     var i;
//     for (i = 0; i < 2; i++) {
//         if (this._patternMain._elementWithType != null) {
//             if (this._patternMain._elementWithType[2 * i + 1] != null) {
//                 if (i == 0) {
//                     rc.y = this._patternMain._$jF[2 * i + 1];
//                     WidgetDockElementController.addFixedPanel(this._patternMain._elementWithType[2 * i + 1], 0, 0, d.width, this._patternMain._$jF[2 * i + 1]);
//                 } else {
//                     WidgetDockElementController.addFixedPanel(this._patternMain._elementWithType[2 * i + 1], 0, d.height - this._patternMain._$jF[2 * i + 1], d.width, this._patternMain._$jF[2 * i + 1]);
//                 }
//                 rc.height -= this._patternMain._$jF[2 * i + 1];
//             }
//         }
//     }
//     for (i = 0; i < 2; i++) {
//         if (this._patternMain._elementWithType != null) {
//             if (this._patternMain._elementWithType[2 * i] != null && d.height > 0) {
//                 rc.width = this._patternMain._$jF[2 * i];
//                 if (i == 0) {
//                     rc.x = 0;
//                 } else {
//                     rc.x = d.width - rc.width;
//                 }
//                 WidgetDockElementController.addFixedPanel(this._patternMain._elementWithType[2 * i], rc.x, rc.y, rc.width, rc.height);
//             }
//         }
//     }
//     this._patternMain._$mB(d.width, d.height);
// };
// WidgetDockWindow.prototype._$qF = function (_$a0) {
//     this._patternMain._$qF(_$a0);
// };
// WidgetDockWindow.prototype.loadStatesFromLayoutController = function (layoutController) {
//     var patternPositionPanelNumList = new Array(4);
//     var i;
//     for (i = 0; i < 4; i++) {
//         patternPositionPanelNumList[i] = this._patternMain._patternPositionList[i]._patternSub.getPanelNum();
//     }
//     this._patternMain._$41(layoutController);
//     var floatPanelController = new WidgetDockFloatPanelController();
//     if (WidgetDockFloatPanel._floatPanelController != null) {
//         var panelNum = WidgetDockFloatPanel._floatPanelController.getPanelNum();
//         var j;
//         for (j = 0; j < panelNum; j++) {
//             var panel = WidgetDockFloatPanel._floatPanelController._panelList[j];
//             if (panel._isInitLayout) floatPanelController.addFloatPanel(WidgetDockFloatPanel._floatPanelController._panelList[j]);
//         }
//     }
//     this._patternMain._$0b(patternPositionPanelNumList, 4, floatPanelController);
//     var _$rS = layoutController.read();
//     var _$e2 = parseInt(layoutController.read());
//     var _$e1 = _$e2;
//     var _$aj = new WidgetDockFloatPanelController();
//     for (i = 0; i < _$e1; i++) {
//         var _$ox = new _$J(false);
//         _$ox._$41(layoutController);
//         this._$kL.push(_$ox);
//         _$aj.addFloatPanel(_$ox);
//     }
//     var ino = floatPanelController.getPanelNum();
//     for (i = 0; i < ino; i++) {
//         var _$si = floatPanelController._panelList[i]._$c3();
//         _$e1 = _$aj.getPanelNum();
//         var j;
//         for (j = 0; j < _$e1; j++) {
//             var _$fY = _$aj._panelList[j]._patternPositionList[0]._patternSub.getPanelNum();
//             if (_$fY == 1) {
//                 var mi = _$aj._panelList[j];
//                 var _$nT = this._patternMain._$1N(_$si, mi._patternPositionList[0]._patternSub._panelList[0]._$kI);
//                 if (_$nT != null) {
//                     _$aj._panelList[j]._$53(_$nT, null, _$si, 0, 0);
//                     _$fY = _$aj._panelList[j]._patternPositionList[0]._patternSub.getPanelNum();
//                     if (_$fY == 0) {
//                         _$oh = this._$kL;
//                         _$e1 = _$oh.length;
//                         var n;
//                         for (n = 0; n < _$e1; n++) {
//                             if (_$oh[n] == _$aj._panelList[j]) {
//                                 _$oh.split(n, 1);
//                                 break;
//                             }
//                         }
//                         _$aj.deletePanel(j);
//                     }
//                     break;
//                 }
//             }
//         }
//     }
// };
// WidgetDockWindow.prototype.initLayout = function (layout) {
//     var _$eF, _$fB;
//     layout.addContent("DFIdentifier");
//     var rcWindow = new WidgetDockRect();
//     this.getWindowRect(rcWindow);
//     layout.addContent(rcWindow.left);
//     layout.addContent(rcWindow.top);
//     layout.addContent(rcWindow.right);
//     layout.addContent(rcWindow.bottom);
//     for (var i = 0; i < 4; i++) {
//         if (i == 0 || i == 2) {
//             _$eF = EnumPatternPositionType.Top;
//             _$fB = EnumPatternPositionType.Bottom;
//         } else {
//             _$eF = EnumPatternPositionType.Left;
//             _$fB = EnumPatternPositionType.Right;
//         }
//         var panelNum = this._patternMain._patternPositionList[i]._patternSub.getPanelNum();
//         var panel;
//         var index = 0;
//         for (var j = 0; j < panelNum; j++) {
//             panel = this._patternMain._patternPositionList[i]._patternSub._panelList[j];
//             index = panel.initPanelLayout(this._patternMain, layout, index, _$eF, _$fB);
//         }
//         layout.addContent("SECTIONNONE");
//     }
//     layout.addContent("MINIFRAMES");
//     // var _$e1 = this._$kL.length;
//     var _$e1 = _$K._$kL.length;
//     var panel;
//     var ino = 0;
//     var panelNum;
//     for (var i = 0; i < _$e1; i++) {
//         // _panelNum = this._$kL[i]._patternPositionList[0]._patternSub.getPanelNum();
//         panelNum = _$K._$kL[i]._patternPositionList[0]._patternSub.getPanelNum();
//         // if (_panelNum == 1) {
//         ino++;
//         // }
//     }
//     layout.addContent(ino);
//     _$eF = 1;
//     _$fB = 3;
//     for (var i = 0; i < _$e1; i++) {
//         // _panelNum = this._$kL[i]._patternPositionList[0]._patternSub.getPanelNum();
//         panelNum = _$K._$kL[i]._patternPositionList[0]._patternSub.getPanelNum();
//         if (panelNum == 1) {
//             // var _$og = this._$kL[i];
//             var _$og = _$K._$kL[i];
//             _$og.getWindowRect(rcWindow);
//             layout.addContent(rcWindow.left);
//             layout.addContent(rcWindow.top);
//             layout.addContent(rcWindow.right);
//             layout.addContent(rcWindow.bottom);
//             panel = _$og._patternPositionList[0]._patternSub._panelList[0];
//             panel.initPanelLayout(_$og, layout, 0, _$eF, _$fB);
//             layout.addContent("SECTIONNONE");
//         }
//     }
//     layout.getContent();
// };
// WidgetDockWindow.prototype._$1O = function (_$mO, _$qY, _$nO, _$dA, _$dC, _$nP, _$cX) {
//     var ino = this._$kL.length;
//     var _$og = null;
//     var _$e1;
//     var i;
//     for (i = 0; i < ino; i++) {
//         _$og = this._$kL[i];
//         _$e1 = _$og._patternPositionList[0]._patternSub.getPanelNum();
//         if (_$e1 == 1) {
//             var panel = _$og._patternPositionList[0]._patternSub._panelList[0];
//             var _$pO = this._patternMain._$1J(_$mO, _$qY, panel._$kI, _$cX, null);
//             if (_$pO != null) {
//                 if ((_$cX[0] & WidgetDockFloatPanel._$1A) > 0) {
//                     _$nO[0] = _$pO;
//                     _$nP[0] = _$og;
//                     _$dA[0] = 0;
//                     _$dC[0] = 0;
//                 } else {
//                     _$nO[1] = _$pO;
//                     _$nP[1] = _$og;
//                     _$dA[1] = 0;
//                     _$dC[1] = 0;
//                 }
//                 return;
//             }
//         }
//     }
// };
