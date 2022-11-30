(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/misterBitCoin-anguler/misterBitCoin-anguler/src/main.ts */"zUnb");


/***/ }),

/***/ "0NuV":
/*!*********************************************!*\
  !*** ./src/app/services/bitcoin.service.ts ***!
  \*********************************************/
/*! exports provided: BitcoinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitcoinService", function() { return BitcoinService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.service */ "n90K");





class BitcoinService {
    constructor(storageService) {
        this.storageService = storageService;
        this.RATE_URL = 'https://blockchain.info/tobtc?currency=USD&value=1';
        this.MARKET_URL = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true';
        this.TRADE_URL = 'https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true';
        this.AVG_BLOCK = 'https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true';
    }
    getRate(coins = 1) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const rate = this.storageService.load('currRate');
            if (rate)
                return Promise.resolve(rate * coins);
            const res = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.RATE_URL);
            this.storageService.save('currRate', res.data);
            return res.data * coins;
        });
    }
    getMarketPrice() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const marketPrice = this.storageService.load('marketPrice');
            if (marketPrice)
                return Promise.resolve(marketPrice);
            const res = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.MARKET_URL);
            this.storageService.save('marketPrice', res.data);
            return res.data;
        });
    }
    getConfirmedTransactions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const marketPrice = this.storageService.load('Trans');
            if (marketPrice)
                return Promise.resolve(marketPrice);
            const res = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.TRADE_URL);
            this.storageService.save('Trans', res.data);
            return res.data;
        });
    }
    getAvgBlock() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const avg = this.storageService.load('avgBlock');
            if (avg)
                return Promise.resolve(avg);
            const res = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.AVG_BLOCK);
            this.storageService.save('avgBlock', res.data);
            return res.data;
        });
    }
}
BitcoinService.ɵfac = function BitcoinService_Factory(t) { return new (t || BitcoinService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"])); };
BitcoinService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BitcoinService, factory: BitcoinService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BitcoinService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "1ogN":
/*!***************************************************************!*\
  !*** ./src/app/cmps/convert-money/convert-money.component.ts ***!
  \***************************************************************/
/*! exports provided: ConvertMoneyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertMoneyComponent", function() { return ConvertMoneyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ConvertMoneyComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConvertMoneyComponent_div_12_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.addCoinsEmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Money To Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "} ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("BTC Rate: ", ctx_r0.rate, " Your Bitcoin Money: ", ctx_r0.res, "");
} }
class ConvertMoneyComponent {
    constructor() {
        this.addCoins = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    convertMoney() {
        this.res = this.money * this.rate;
    }
    addCoinsEmit() {
        this.addCoins.emit(this.money);
        this.money = null;
        this.res = null;
    }
}
ConvertMoneyComponent.ɵfac = function ConvertMoneyComponent_Factory(t) { return new (t || ConvertMoneyComponent)(); };
ConvertMoneyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConvertMoneyComponent, selectors: [["convert-money"]], inputs: { rate: "rate" }, outputs: { addCoins: "addCoins" }, decls: 13, vars: 2, consts: [[1, "convert-money", "flex", "column", "align-center"], [1, "convert-money-form", "flex", "space-between"], [1, "converter-main", "flex", "column", "space-around"], [1, "converter", "flex", "wrap", "space-around"], ["type", "number", "name", "money", "placeholder", "Enter a money in Dollars", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "text", "disabled", "", "placeholder", "BTC", 1, "input"], [3, "click"], ["class", "res-container flex column align-center justify-center", 4, "ngIf"], [1, "res-container", "flex", "column", "align-center", "justify-center"]], template: function ConvertMoneyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Buy Bitcoin instantly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Buy both Bitcoin Cash (BCH) and Bitcoin (BTC) now using a credit or debit card. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConvertMoneyComponent_Template_input_ngModelChange_8_listener($event) { return ctx.money = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConvertMoneyComponent_Template_button_click_10_listener() { return ctx.convertMoney(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Buy BTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ConvertMoneyComponent_div_12_Template, 6, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.money);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.res);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".convert-money[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 100vw;\n  background-color: #131620;\n  padding: 3rem 0;\n}\n.convert-money[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  line-height: 1.5;\n  color: white;\n}\n.convert-money[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #e5e8f0;\n  opacity: 0.6;\n  margin-bottom: 8px;\n}\n.convert-money[_ngcontent-%COMP%]   .converter-main[_ngcontent-%COMP%]   .converter[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.convert-money[_ngcontent-%COMP%]   .converter-main[_ngcontent-%COMP%]   .converter[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.convert-money[_ngcontent-%COMP%]   .converter-main[_ngcontent-%COMP%]   .res-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  margin-bottom: 15px;\n}\n.convert-money[_ngcontent-%COMP%]   .converter-main[_ngcontent-%COMP%]   .res-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 17px;\n  padding: 10px 16px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbnZlcnQtbW9uZXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFBSjtBQUlJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBRlI7QUFJSTtFQUNJLGNBQUE7RUFDUixZQUFBO0VBQ0Esa0JBQUE7QUFGQTtBQU1JO0VBQ0ksbUJBQUE7QUFKUjtBQUtRO0VBQ0ksaUJBQUE7QUFIWjtBQWNRO0VBQ0ksWUFBQTtFQUVBLG1CQUFBO0FBYlo7QUFlUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQWJaIiwiZmlsZSI6ImNvbnZlcnQtbW9uZXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udmVydC1tb25leSB7XG4gXG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5LDIyLDMyKTtcbiAgICBwYWRkaW5nOiAzcmVtIDA7XG4gICAgLy8gQGluY2x1ZGUgZm9yLW1heC1uYXJyb3ctbGF5b3V0IHtcbiAgICAvLyAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIH1cbiAgICBoMXtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgY29sb3I6IHdoaXRlOyAgXG4gICAgfVxuICAgIGgze1xuICAgICAgICBjb2xvcjogcmdiKDIyOSwgMjMyLCAyNDApO1xub3BhY2l0eTogMC42O1xubWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbi5jb252ZXJ0ZXItbWFpbntcblxuICAgIC5jb252ZXJ0ZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICA+KntcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC8vIEBpbmNsdWRlIGZvci1tYXgtbmFycm93LWxheW91dCB7XG4gICAgICAgIC8vICAgICBpbnB1dHtcbiAgICAgICAgLy8gICAgICAgICBtYXJnaW46IDdweCAwO1xuICAgICAgICAvLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvLyAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxuICAgIC5yZXMtY29udGFpbmVye1xuICAgICAgICBoMntcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgLy8gY29sb3I6ICNlNWU4ZjA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgfVxuXG4gICAgfVxufVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConvertMoneyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'convert-money',
                templateUrl: './convert-money.component.html',
                styleUrls: ['./convert-money.component.scss']
            }]
    }], function () { return []; }, { rate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addCoins: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "2Rin":
/*!******************************************!*\
  !*** ./src/app/services/util.service.ts ***!
  \******************************************/
/*! exports provided: utilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utilService", function() { return utilService; });
const utilService = {
    makeId
};
function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}


/***/ }),

/***/ "2uUW":
/*!*******************************************************************!*\
  !*** ./src/app/cmps/contact-preview/contact-preview.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPreviewComponent", function() { return ContactPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ContactPreviewComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    goToDetails(id) {
        this.route.navigate(['/contact/' + id]);
    }
    goToEdit(ev, id) {
        ev.stopPropagation();
        console.log('id preview', id);
        this.route.navigate(['/edit', id]);
    }
}
ContactPreviewComponent.ɵfac = function ContactPreviewComponent_Factory(t) { return new (t || ContactPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ContactPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactPreviewComponent, selectors: [["contact-preview"]], inputs: { contact: "contact" }, decls: 8, vars: 2, consts: [[1, "contact-preview", "flex", "flex", "align-center", "space-between", 3, "click"], [1, "contact-container", "flex", "align-center"], [1, "profile-img", 3, "src"], [1, "btn-controls", "flex", "wrap"], [3, "click"]], template: function ContactPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactPreviewComponent_Template_li_click_0_listener() { return ctx.goToDetails(ctx.contact._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactPreviewComponent_Template_button_click_6_listener($event) { return ctx.goToEdit($event, ctx.contact._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://robohash.org/" + ctx.contact._id + "?set=set5", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contact.name, " ");
    } }, styles: [".contact-preview[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  padding: 10px;\n  font-size: 20px;\n  margin: 10px;\n  width: 60vw;\n  max-width: 100%;\n  border-radius: 10px;\n  transition-duration: 0.3s;\n  min-width: 328px;\n  cursor: pointer;\n}\n.contact-preview[_ngcontent-%COMP%]:hover {\n  background: aliceblue;\n  color: #817c7c;\n}\n.contact-preview[_ngcontent-%COMP%]   .btn-controls[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 5px;\n}\n.contact-preview[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%] {\n  width: 50px;\n  margin: 0 5px;\n}\n.contact-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbnRhY3QtcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQUo7QUFDSTtFQUNJLHFCQUFBO0VBQ0MsY0FBQTtBQUNUO0FBR087RUFDSSxpQkFBQTtBQURYO0FBSUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUZSO0FBSUk7RUFDSSxhQUFBO0FBRlIiLCJmaWxlIjoiY29udGFjdC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtcHJldmlldyAge1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgd2lkdGg6IDYwdnc7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICBtaW4td2lkdGg6IDMyOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XG4gICAgICAgICBjb2xvcjogIzgxN2M3YztcbiAgICB9XG4gICAuYnRuLWNvbnRyb2xze1xuXG4gICAgICAgPio6bm90KDpsYXN0LWNoaWxkKXtcbiAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnByb2ZpbGUtaW1ne1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICB9XG4gICAgaDN7XG4gICAgICAgIG1hcmdpbjogMCAzcHg7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact-preview',
                templateUrl: './contact-preview.component.html',
                styleUrls: ['./contact-preview.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { contact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "3ITz":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_contact_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/contact.model */ "BYzK");




const CONTACTS = [
    {
        "_id": "5a56640269f443a5d64b32ca",
        "name": "Ochoa Hyde",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824"
    },
    {
        "_id": "5a5664025f6ae9aa24a99fde",
        "name": "Hallie Mclean",
        "email": "halliemclean@renovize.com",
        "phone": "+1 (948) 464-2888"
    },
    {
        "_id": "5a56640252d6acddd183d319",
        "name": "Parsons Norris",
        "email": "parsonsnorris@renovize.com",
        "phone": "+1 (958) 502-3495"
    },
    {
        "_id": "5a566402ed1cf349f0b47b4d",
        "name": "Rachel Lowe",
        "email": "rachellowe@renovize.com",
        "phone": "+1 (911) 475-2312"
    },
    {
        "_id": "5a566402abce24c6bfe4699d",
        "name": "Dominique Soto",
        "email": "dominiquesoto@renovize.com",
        "phone": "+1 (807) 551-3258"
    },
    {
        "_id": "5a566402a6499c1d4da9220a",
        "name": "Shana Pope",
        "email": "shanapope@renovize.com",
        "phone": "+1 (970) 527-3082"
    },
    {
        "_id": "5a566402f90ae30e97f990db",
        "name": "Faulkner Flores",
        "email": "faulknerflores@renovize.com",
        "phone": "+1 (952) 501-2678"
    },
    {
        "_id": "5a5664027bae84ef280ffbdf",
        "name": "Holder Bean",
        "email": "holderbean@renovize.com",
        "phone": "+1 (989) 503-2663"
    },
    {
        "_id": "5a566402e3b846c5f6aec652",
        "name": "Rosanne Shelton",
        "email": "rosanneshelton@renovize.com",
        "phone": "+1 (968) 454-3851"
    },
    {
        "_id": "5a56640272c7dcdf59c3d411",
        "name": "Pamela Nolan",
        "email": "pamelanolan@renovize.com",
        "phone": "+1 (986) 545-2166"
    },
    {
        "_id": "5a5664029a8dd82a6178b15f",
        "name": "Roy Cantu",
        "email": "roycantu@renovize.com",
        "phone": "+1 (929) 571-2295"
    },
    {
        "_id": "5a5664028c096d08eeb13a8a",
        "name": "Ollie Christian",
        "email": "olliechristian@renovize.com",
        "phone": "+1 (977) 419-3550"
    },
    {
        "_id": "5a5664026c53582bb9ebe9d1",
        "name": "Nguyen Walls",
        "email": "nguyenwalls@renovize.com",
        "phone": "+1 (963) 471-3181"
    },
    {
        "_id": "5a56640298ab77236845b82b",
        "name": "Glenna Santana",
        "email": "glennasantana@renovize.com",
        "phone": "+1 (860) 467-2376"
    },
    {
        "_id": "5a56640208fba3e8ecb97305",
        "name": "Malone Clark",
        "email": "maloneclark@renovize.com",
        "phone": "+1 (818) 565-2557"
    },
    {
        "_id": "5a566402abb3146207bc4ec5",
        "name": "Floyd Rutledge",
        "email": "floydrutledge@renovize.com",
        "phone": "+1 (807) 597-3629"
    },
    {
        "_id": "5a56640298500fead8cb1ee5",
        "name": "Grace James",
        "email": "gracejames@renovize.com",
        "phone": "+1 (959) 525-2529"
    },
    {
        "_id": "5a56640243427b8f8445231e",
        "name": "Tanner Gates",
        "email": "tannergates@renovize.com",
        "phone": "+1 (978) 591-2291"
    },
    {
        "_id": "5a5664025c3abdad6f5e098c",
        "name": "Lilly Conner",
        "email": "lillyconner@renovize.com",
        "phone": "+1 (842) 587-3812"
    }
];
class ContactService {
    constructor() {
        //mock the server
        this._contacts$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.contacts$ = this._contacts$.asObservable();
    }
    loadContacts(filterBy = null) {
        let contacts = this._contacts$.getValue();
        if (!contacts || !contacts.length)
            contacts = CONTACTS;
        if (filterBy && filterBy.term) {
            contacts = this._filter(contacts, filterBy.term);
        }
        else {
            contacts = CONTACTS;
        }
        this._contacts$.next(this._sort(contacts));
    }
    getContactById(id) {
        //mock the server work
        const contact = this._contacts$.getValue().find(contact => contact._id === id);
        //return an observable
        return contact ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(contact) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(`Contact id ${id} not found!`);
    }
    deleteContact(id) {
        //mock the server work
        const contacts = this._contacts$.getValue().filter(contact => contact._id !== id);
        console.log('contacts:', contacts);
        const idx = CONTACTS.findIndex(contact => contact._id === id);
        CONTACTS.splice(idx, 1);
        // change the observable data in the service - let all the subscribers know
        this._contacts$.next(contacts);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(id);
    }
    saveContact(contact) {
        return contact._id ? this._updateContact(contact) : this._addContact(contact);
    }
    _updateContact(contact) {
        //mock the server work
        const contacts = this._contacts$.getValue().map(c => contact._id === c._id ? contact : c);
        console.log('contacts:', contacts);
        // change the observable data in the service - let all the subscribers know
        this._contacts$.next(this._sort(contacts));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(contact);
    }
    _addContact(contact) {
        //mock the server work
        const newContact = new _models_contact_model__WEBPACK_IMPORTED_MODULE_2__["Contact"](undefined, contact.name, contact.email, contact.phone);
        console.log('newContact:', newContact);
        newContact.setId();
        console.log('newContact after:', newContact);
        const contacts = [...this._contacts$.getValue(), newContact];
        CONTACTS.push(newContact);
        this._contacts$.next(this._sort(contacts));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(newContact);
    }
    _sort(contacts) {
        return contacts.sort((a, b) => {
            if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
                return -1;
            }
            if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                return 1;
            }
            return 0;
        });
    }
    _filter(contacts, term) {
        term = term.toLocaleLowerCase();
        return contacts.filter(contact => {
            return contact.name.toLocaleLowerCase().includes(term) ||
                contact.phone.toLocaleLowerCase().includes(term) ||
                contact.email.toLocaleLowerCase().includes(term);
        });
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "64+1":
/*!**************************************************************!*\
  !*** ./src/app/pages/contact-page/contact-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/contact.service */ "3ITz");
/* harmony import */ var _cmps_filter_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cmps/filter/filter.component */ "kzmh");
/* harmony import */ var _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../cmps/contact-list/contact-list.component */ "QyWd");





class ContactPageComponent {
    constructor(contactService) {
        this.contactService = contactService;
        this.contacts = [];
    }
    ngOnInit() {
        this.subscription = this.contactService.contacts$.subscribe(contacts => {
            this.contacts = [...contacts];
            console.log(' this.contacts page:', this.contacts);
        });
        this.contactService.loadContacts();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    setFilter(filterBy) {
        console.log('filterBy:', filterBy);
        this.contactService.loadContacts(filterBy);
    }
}
ContactPageComponent.ɵfac = function ContactPageComponent_Factory(t) { return new (t || ContactPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"])); };
ContactPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactPageComponent, selectors: [["contact-page"]], decls: 3, vars: 1, consts: [[1, "contact-page"], [3, "setFilter"], [3, "contacts"]], template: function ContactPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "filter", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setFilter", function ContactPageComponent_Template_filter_setFilter_1_listener($event) { return ctx.setFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "contact-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contacts", ctx.contacts);
    } }, directives: [_cmps_filter_filter_component__WEBPACK_IMPORTED_MODULE_2__["FilterComponent"], _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_3__["ContactListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact-page',
                templateUrl: './contact-page.component.html',
                styleUrls: ['./contact-page.component.scss']
            }]
    }], function () { return [{ type: _services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"] }]; }, null); })();


/***/ }),

/***/ "8FSX":
/*!********************************************************************!*\
  !*** ./src/app/pages/contact-details/contact-details.component.ts ***!
  \********************************************************************/
/*! exports provided: ContactDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailsComponent", function() { return ContactDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contact.service */ "3ITz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cmps_transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cmps/transfer-fund/transfer-fund.component */ "sLIO");
/* harmony import */ var _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cmps/move-list/move-list.component */ "L8zA");







class ContactDetailsComponent {
    constructor(userService, contactService, route, router) {
        this.userService = userService;
        this.contactService = contactService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.user = this.userService.getUser();
        this.route.data.subscribe(data => {
            this.contact = data.contact;
        });
        // this.route.params.subscribe(params => this.loadContact(params.id))
    }
    get movesToShow() {
        const moves = this.user.moves.filter(move => move.todId === this.contact._id);
        return moves;
    }
    onTransferCoins(amount) {
        const updatedUser = this.userService.addMove(this.contact, amount);
        this.user = updatedUser;
    }
    // loadContact(contactId){
    //     const contact$ = this.contactService.getContactById(contactId)
    //     contact$.subscribe(contact=>this.contact=contact)
    // }
    goBack() {
        this.router.navigate(['/contact/']);
    }
    goToEdit(id) {
        this.router.navigate(['/edit', id]);
    }
    removeContact(id) {
        this.contactService.deleteContact(id).subscribe(() => {
            this.router.navigate(['/contact/']);
        });
    }
}
ContactDetailsComponent.ɵfac = function ContactDetailsComponent_Factory(t) { return new (t || ContactDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ContactDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactDetailsComponent, selectors: [["contact-details"]], decls: 19, vars: 8, consts: [[1, "contact-details", "flex", "justify-center"], [1, "contact-container", "flex", "column", "justify-center", "align-center"], ["alt", "profile", 3, "src"], ["className", "btn-controls flex"], [3, "click"], [1, "contact-transfer"], [3, "contact", "maxCoins", "onTransferCoins"], [3, "title", "moves"]], template: function ContactDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactDetailsComponent_Template_button_click_10_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Go back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactDetailsComponent_Template_button_click_12_listener() { return ctx.goToEdit(ctx.contact._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactDetailsComponent_Template_button_click_14_listener() { return ctx.removeContact(ctx.contact._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "transfer-fund", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onTransferCoins", function ContactDetailsComponent_Template_transfer_fund_onTransferCoins_17_listener($event) { return ctx.onTransferCoins($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "move-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://robohash.org/", ctx.contact._id, "?set=set5", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.contact.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Phone: ", ctx.contact.phone, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email: ", ctx.contact.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contact", ctx.contact)("maxCoins", ctx.user.coins);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Your Moves:")("moves", ctx.movesToShow);
    } }, directives: [_cmps_transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_4__["TransferFundComponent"], _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_5__["MoveListComponent"]], styles: [".contact-details[_ngcontent-%COMP%] {\n  padding-top: 5rem;\n  height: 100%;\n}\n.contact-details[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.contact-details[_ngcontent-%COMP%]   img[src*=robohash][_ngcontent-%COMP%] {\n  width: 200px;\n  margin-bottom: 2rem;\n}\n.contact-details[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%] {\n  height: 520px;\n  margin-right: 12rem;\n}\n.contact-details[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  letter-spacing: 0.5px;\n  padding: 5px;\n  font-size: 1.3rem;\n  margin-bottom: 5px;\n}\n.contact-details[_ngcontent-%COMP%]   .contact-transfer[_ngcontent-%COMP%] {\n  height: 520px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbnRhY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQUFKO0FBQ0k7RUFDSSxZQUFBO0FBQ1I7QUFDSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUFRO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVaO0FBQ0k7RUFDSSxhQUFBO0FBQ1IiLCJmaWxlIjoiY29udGFjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGFjdC1kZXRhaWxzIHtcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYnV0dG9ue1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgfVxuICAgIGltZ1tzcmMqPVwicm9ib2hhc2hcIl17XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG4gICAgLmNvbnRhY3QtY29udGFpbmVye1xuICAgICAgICBoZWlnaHQ6IDUyMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycmVtO1xuICAgICAgICAqe1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNvbnRhY3QtdHJhbnNmZXJ7XG4gICAgICAgIGhlaWdodDogNTIwcHg7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact-details',
                templateUrl: './contact-details.component.html',
                styleUrls: ['./contact-details.component.scss']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BYzK":
/*!*****************************************!*\
  !*** ./src/app/models/contact.model.ts ***!
  \*****************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/util.service */ "2Rin");

class Contact {
    constructor(_id, name = '', email = '', phone = '') {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    setId() {
        this._id = _services_util_service__WEBPACK_IMPORTED_MODULE_0__["utilService"].makeId();
    }
}


/***/ }),

/***/ "DCCE":
/*!**************************************!*\
  !*** ./src/app/models/move.model.ts ***!
  \**************************************/
/*! exports provided: Move */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Move", function() { return Move; });
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/util.service */ "2Rin");

class Move {
    constructor(_id, todId = '', to = '', at = null, amount = null) {
        this._id = _id;
        this.todId = todId;
        this.to = to;
        this.at = at;
        this.amount = amount;
    }
    setId() {
        this._id = _services_util_service__WEBPACK_IMPORTED_MODULE_0__["utilService"].makeId();
    }
}


/***/ }),

/***/ "Ex7Z":
/*!************************************************************!*\
  !*** ./src/app/pages/static-page/static-page.component.ts ***!
  \************************************************************/
/*! exports provided: StaticPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticPageComponent", function() { return StaticPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_bitcoin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bitcoin.service */ "0NuV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cmps_chart_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cmps/chart/chart.component */ "ppaa");







function StaticPageComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Bitcoin Statistcs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "market price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "chart", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "avg block");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "chart", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "avg block");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "chart", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r0.marketPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r0.avgBlock);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r0.trance);
} }
class StaticPageComponent {
    constructor(bitcoinService) {
        this.bitcoinService = bitcoinService;
        this.marketPrice = null;
        this.trance = null;
        this.avgBlock = null;
    }
    ngOnInit() {
        this.loadStatics();
    }
    loadStatics() {
        this.loadAvgBlock();
        this.loadMarketPrice();
        this.loadTrance();
    }
    loadMarketPrice() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let marketData = yield this.bitcoinService.getMarketPrice();
            const marketPrice = this.convertData(marketData);
            console.log('marketPrice:', marketPrice);
            this.marketPrice = marketPrice;
        });
    }
    loadTrance() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let tranceData = yield this.bitcoinService.getConfirmedTransactions();
            this.trance = this.convertData(tranceData);
            console.log(' this.trance :', this.trance);
        });
    }
    loadAvgBlock() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let avgData = yield this.bitcoinService.getAvgBlock();
            this.avgBlock = this.convertData(avgData);
        });
    }
    convertData(data) {
        const newData = data.values.slice(0, 10);
        const convertData = newData.map(value => {
            const newDate = new Date(value.y * 1000);
            let date = moment__WEBPACK_IMPORTED_MODULE_2__(newDate).format('MMM DD');
            let newVal = Math.floor(Math.random() * value.x);
            return [date, newVal];
        });
        return convertData;
    }
}
StaticPageComponent.ɵfac = function StaticPageComponent_Factory(t) { return new (t || StaticPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_bitcoin_service__WEBPACK_IMPORTED_MODULE_3__["BitcoinService"])); };
StaticPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StaticPageComponent, selectors: [["app-static-page"]], decls: 1, vars: 1, consts: [["class", "static-page flex column center-center", 4, "ngIf"], [1, "static-page", "flex", "column", "center-center"], [3, "data"]], template: function StaticPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, StaticPageComponent_section_0_Template, 12, 3, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.marketPrice || ctx.avgBlock || ctx.trance);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _cmps_chart_chart_component__WEBPACK_IMPORTED_MODULE_5__["ChartComponent"]], styles: [".static-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  line-height: 1.2;\n  margin: 20px 0;\n  text-align: center;\n  margin-bottom: 9px;\n  font-weight: 800;\n  font-size: 35px;\n  color: white;\n  text-shadow: 1px 1px 0px #121d33;\n}\n.static-page[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin: 5px 0;\n  line-height: 2.4;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0YXRpYy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQUFSO0FBRUk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFBUiIsImZpbGUiOiJzdGF0aWMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0aWMtcGFnZXtcbiAgICBoMXtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgbWFyZ2luOjIwcHggMCA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOXB4O1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4ICMxMjFkMzM7XG4gICAgfVxuICAgIGgye1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StaticPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-static-page',
                templateUrl: './static-page.component.html',
                styleUrls: ['./static-page.component.scss']
            }]
    }], function () { return [{ type: _services_bitcoin_service__WEBPACK_IMPORTED_MODULE_3__["BitcoinService"] }]; }, null); })();


/***/ }),

/***/ "IJ3A":
/*!**********************************************!*\
  !*** ./src/app/services/contact.resolver.ts ***!
  \**********************************************/
/*! exports provided: ContactResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactResolver", function() { return ContactResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.service */ "3ITz");



class ContactResolver {
    constructor(contactService) {
        this.contactService = contactService;
    }
    resolve(route) {
        const id = route.paramMap.get('id');
        const contact$ = this.contactService.getContactById(id);
        return contact$;
    }
}
ContactResolver.ɵfac = function ContactResolver_Factory(t) { return new (t || ContactResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"])); };
ContactResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactResolver, factory: ContactResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"] }]; }, null); })();


/***/ }),

/***/ "IOHS":
/*!**************************************************************!*\
  !*** ./src/app/pages/contact-edit/contact-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactEditComponent", function() { return ContactEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/contact.service */ "3ITz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ContactEditComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://robohash.org/", ctx_r0.contactToEdit._id, "?set=set5", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ContactEditComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactEditComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.removeContact(ctx_r2.contactToEdit._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContactEditComponent {
    constructor(contactService, route, router) {
        this.contactService = contactService;
        this.route = route;
        this.router = router;
        this.errMsg = null;
    }
    ngOnInit() {
        console.log('created');
        this.route.data.subscribe(data => {
            this.loadContact(data.contact);
        });
    }
    loadContact(contact) {
        if (contact) {
            this.contactToEdit = contact;
        }
        else
            this.contactToEdit = this.getEmptyContact();
    }
    getEmptyContact() {
        return {
            name: '',
            phone: '',
            email: ''
        };
    }
    saveContact(ev) {
        ev.preventDefault();
        const { name, phone, email } = this.contactToEdit;
        if (!name || !phone || !email) {
            return this.errMsg = 'Must to fill All the fields';
        }
        this.contactService.saveContact(this.contactToEdit).subscribe(() => {
            this.router.navigate(['/contact/']);
            this.contactToEdit = this.getEmptyContact();
        });
    }
    removeContact(id) {
        this.contactService.deleteContact(id).subscribe(() => {
            this.router.navigate(['/contact/']);
        });
    }
}
ContactEditComponent.ɵfac = function ContactEditComponent_Factory(t) { return new (t || ContactEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ContactEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactEditComponent, selectors: [["contact-edit"]], decls: 16, vars: 6, consts: [[1, "contact-edit", "simple-form", 3, "submit"], ["class", "profile", "alt", "", "srcset", "", 3, "src", 4, "ngIf"], ["autoFocus", "", "type", "text", "name", "name", 1, "input", "input-editor", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", 1, "input", "input-editor", 3, "ngModel", "ngModelChange"], ["type", "tel", "name", "phone", 1, "input", "input-editor", 3, "ngModel", "ngModelChange"], [1, "form-errors"], ["type", "remove", 3, "click", 4, "ngIf"], ["alt", "", "srcset", "", 1, "profile", 3, "src"], ["type", "remove", 3, "click"]], template: function ContactEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ContactEditComponent_Template_form_submit_0_listener($event) { return ctx.saveContact($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactEditComponent_img_1_Template, 1, 1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactEditComponent_Template_input_ngModelChange_4_listener($event) { return ctx.contactToEdit.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactEditComponent_Template_input_ngModelChange_7_listener($event) { return ctx.contactToEdit.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactEditComponent_Template_input_ngModelChange_10_listener($event) { return ctx.contactToEdit.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ContactEditComponent_button_15_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactToEdit._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contactToEdit.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contactToEdit.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contactToEdit.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactToEdit._id);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".profile[_ngcontent-%COMP%] {\n  align-self: center;\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbnRhY3QtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImNvbnRhY3QtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxle1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogMjAwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact-edit',
                templateUrl: './contact-edit.component.html',
                styleUrls: ['./contact-edit.component.scss']
            }]
    }], function () { return [{ type: _services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "JFIp":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_bitcoin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bitcoin.service */ "0NuV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cmps/move-list/move-list.component */ "L8zA");
/* harmony import */ var _cmps_convert_money_convert_money_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cmps/convert-money/convert-money.component */ "1ogN");








function HomePageComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Total coins:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Bitcoin rate:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Your Bitcoin Money:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Your Transfers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "move-list", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "convert-money", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("addCoins", function HomePageComponent_section_0_Template_convert_money_addCoins_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.addCoins($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://robohash.org/", ctx_r0.user._id, "?set=set5", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Hello , ", ctx_r0.user.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.user.coins, "$ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.bitcoinRate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.moneyBitcoin, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Your Last 3 Moves")("moves", ctx_r0.lastMoves);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rate", ctx_r0.bitcoinRate);
} }
class HomePageComponent {
    constructor(userService, bitcoinService) {
        this.userService = userService;
        this.bitcoinService = bitcoinService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = this.userService.getUser();
            this.bitcoinRate = yield this.bitcoinService.getRate();
        });
    }
    get moneyBitcoin() {
        return this.user.coins * this.bitcoinRate;
    }
    get lastMoves() {
        const lastMoves = this.user.moves.slice(0, 3);
        return lastMoves;
    }
    addCoins(coins) {
        console.log('coins:', coins);
        const userUpdated = this.userService.addCoins(coins);
        console.log('userUpdated:', userUpdated);
        this.user = userUpdated;
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_bitcoin_service__WEBPACK_IMPORTED_MODULE_3__["BitcoinService"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["home-page"]], decls: 1, vars: 1, consts: [["class", "home-page flex column wrap align-center justify-center ", 4, "ngIf"], [1, "home-page", "flex", "column", "wrap", "align-center", "justify-center"], [1, "user-container-details", "flex", "column", "wrap", "align-center", "justify-center"], [1, "user-container", "flex", "align-center", "justify-center"], [1, "profile-container"], ["alt", "profile", 1, "profile-img", 3, "src"], [1, "flex", "align-center"], ["src", "../../../assets/icons/coins.png", "alt", "coins icon"], [1, "bolder"], ["src", "../../../assets/icons/bitcoin.png", "alt", "bitcoin icon"], [1, "last-moves", "flex", "column"], [1, "title-trans"], [1, "statics-user", "flex", "wrap", "align-center", "justify-center"], [3, "title", "moves"], [3, "rate", "addCoins"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomePageComponent_section_0_Template, 28, 8, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user || ctx.bitcoinRate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_5__["MoveListComponent"], _cmps_convert_money_convert_money_component__WEBPACK_IMPORTED_MODULE_6__["ConvertMoneyComponent"]], styles: [".home-page[_ngcontent-%COMP%]   .user-container-details[_ngcontent-%COMP%] {\n  color: white;\n  letter-spacing: 1px;\n  background-image: linear-gradient(to right, #1748ce, #1341c5, #0d3bbc, #0734b3, #002eaa);\n  padding: 50px 0;\n  width: 100%;\n  border-bottom: 1px solid #eeeeeecf;\n}\n.home-page[_ngcontent-%COMP%]   .user-container-details[_ngcontent-%COMP%]   .user-container[_ngcontent-%COMP%] {\n  margin-bottom: 11px;\n}\n.home-page[_ngcontent-%COMP%]   .user-container-details[_ngcontent-%COMP%]   .user-container[_ngcontent-%COMP%]   .profile-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  border: 1px solid #b9b9b9c4;\n  box-shadow: 0px 0 4px 0px #0000008a;\n  background: white;\n  border-radius: 50%;\n  height: 40px;\n  margin-right: 5px;\n  width: 40px;\n}\n.home-page[_ngcontent-%COMP%]   .user-container-details[_ngcontent-%COMP%]   .user-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 35px;\n  text-transform: capitalize;\n  font-weight: bolder;\n  align-self: flex-end;\n  text-shadow: 1px 1px 0px #3c3e43;\n}\n.home-page[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  margin-right: 5px;\n}\n.home-page[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.home-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0;\n  letter-spacing: 1px;\n  font-size: 1rem;\n}\n.home-page[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.home-page[_ngcontent-%COMP%]   .last-moves[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.home-page[_ngcontent-%COMP%]   .last-moves[_ngcontent-%COMP%]   .title-trans[_ngcontent-%COMP%] {\n  margin-bottom: 9px;\n  font-weight: 800;\n  font-size: 35px;\n  text-shadow: 0px 2px 0px #ffffff;\n}\n.home-page[_ngcontent-%COMP%]   .last-moves[_ngcontent-%COMP%]   .statics-user[_ngcontent-%COMP%] {\n  min-height: 325px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNKLHdGQUFBO0VBR0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtBQUZSO0FBR1E7RUFDSSxtQkFBQTtBQURaO0FBRVk7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUFoQjtBQUVZO0VBQ0ksZUFBQTtFQUNELDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNQLGdDQUFBO0FBQVI7QUFLSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUhSO0FBT0k7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQUxSO0FBT0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBTFI7QUFPSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUxSO0FBT0k7RUFDSSxnQkFBQTtBQUxSO0FBTVE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBSlo7QUFNUTtFQUNJLGlCQUFBO0FBSloiLCJmaWxlIjoiaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtcGFnZSB7XG4gICAgLnVzZXItY29udGFpbmVyLWRldGFpbHMge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTc0OGNlLCAjMTM0MWM1LCAjMGQzYmJjLCAjMDczNGIzLCAjMDAyZWFhKTtcblxuICBcbiAgICAgICAgcGFkZGluZzogNTBweCAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVlZWVjZjtcbiAgICAgICAgLnVzZXItY29udGFpbmVye1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTFweDsgXG4gICAgICAgICAgICAucHJvZmlsZS1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I5YjliOWM0O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwIDRweCAwcHggIzAwMDAwMDhhO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4ICMzYzNlNDM7XG5cbiAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfVxuICAgIH1cbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG5cblxuICAgIGg1e1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIG1hcmdpbjogNnB4IDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgPip7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5sYXN0LW1vdmVze1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAudGl0bGUtdHJhbnN7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA5cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAycHggMHB4ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXRpY3MtdXNlcntcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMyNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.scss']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _services_bitcoin_service__WEBPACK_IMPORTED_MODULE_3__["BitcoinService"] }]; }, null); })();


/***/ }),

/***/ "L8zA":
/*!*******************************************************!*\
  !*** ./src/app/cmps/move-list/move-list.component.ts ***!
  \*******************************************************/
/*! exports provided: MoveListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveListComponent", function() { return MoveListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _move_preview_move_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../move-preview/move-preview.component */ "fD3m");




function MoveListComponent_ul_0_move_preview_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "move-preview", 4);
} if (rf & 2) {
    const move_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("move", move_r4);
} }
function MoveListComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MoveListComponent_ul_0_move_preview_3_Template, 1, 1, "move-preview", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.moves);
} }
function MoveListComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You Dont have a moves yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MoveListComponent {
    constructor() { }
    ngOnInit() {
    }
}
MoveListComponent.ɵfac = function MoveListComponent_Factory(t) { return new (t || MoveListComponent)(); };
MoveListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoveListComponent, selectors: [["move-list"]], inputs: { moves: "moves", title: "title" }, decls: 3, vars: 2, consts: [["class", "clean-list move-list", 4, "ngIf", "ngIfElse"], ["err", ""], [1, "clean-list", "move-list"], [3, "move", 4, "ngFor", "ngForOf"], [3, "move"]], template: function MoveListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MoveListComponent_ul_0_Template, 4, 2, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MoveListComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moves.length > 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _move_preview_move_preview_component__WEBPACK_IMPORTED_MODULE_2__["MovePreviewComponent"]], styles: [".move-list[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  background-color: #e5f2fe;\n  min-width: 300px;\n  border-radius: 10px;\n  padding: 15px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  max-height: 362px;\n  padding: 10px 20px;\n  overflow-y: auto;\n}\n.move-list[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid #2a2a2a70;\n}\n.move-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #2a2a2a70;\n  padding-bottom: 5px;\n  line-height: 1.3;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vdmUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNBLGtDQUFBO0FBRUo7QUFDSTtFQUNJLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ1IiLCJmaWxlIjoibW92ZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmUtbGlzdCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWYyZmU7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBtYXgtaGVpZ2h0OiAzNjJweDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICA+Kjpub3QoOmxhc3QtY2hpbGQpe1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmEyYTJhNzA7XG5cbiAgICB9XG4gICAgaDJ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmEyYTJhNzA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoveListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'move-list',
                templateUrl: './move-list.component.html',
                styleUrls: ['./move-list.component.scss']
            }]
    }], function () { return []; }, { moves: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "QyWd":
/*!*************************************************************!*\
  !*** ./src/app/cmps/contact-list/contact-list.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact-preview/contact-preview.component */ "2uUW");




function ContactListComponent_contact_preview_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "contact-preview", 2);
} if (rf & 2) {
    const contact_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contact", contact_r1);
} }
class ContactListComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactListComponent.ɵfac = function ContactListComponent_Factory(t) { return new (t || ContactListComponent)(); };
ContactListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactListComponent, selectors: [["contact-list"]], inputs: { contacts: "contacts" }, decls: 2, vars: 1, consts: [[1, "clean-list", "flex", "column", "align-center"], [3, "contact", 4, "ngFor", "ngForOf"], [3, "contact"]], template: function ContactListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactListComponent_contact_preview_1_Template, 1, 1, "contact-preview", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contacts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_2__["ContactPreviewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact-list',
                templateUrl: './contact-list.component.html',
                styleUrls: ['./contact-list.component.scss']
            }]
    }], function () { return []; }, { contacts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cmps/app-header/app-header.component */ "uOz6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'mister-bitcoin';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "app"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_1__["AppHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "Tj/N":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/util.service */ "2Rin");

class User {
    constructor(_id, name = '', coins = 100, moves = []) {
        this._id = _id;
        this.name = name;
        this.coins = coins;
        this.moves = moves;
        if (!_id)
            this._id = _services_util_service__WEBPACK_IMPORTED_MODULE_0__["utilService"].makeId();
    }
}


/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate() {
        const isUserLogin = this.userService.getUser();
        if (!isUserLogin)
            this.router.navigateByUrl('/signup');
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "JFIp");
/* harmony import */ var _pages_bitcoin_app_bitcoin_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/bitcoin-app/bitcoin-app.component */ "eVyO");
/* harmony import */ var _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/contact-page/contact-page.component */ "64+1");
/* harmony import */ var _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cmps/contact-list/contact-list.component */ "QyWd");
/* harmony import */ var _cmps_contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cmps/contact-preview/contact-preview.component */ "2uUW");
/* harmony import */ var _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/contact-details/contact-details.component */ "8FSX");
/* harmony import */ var _cmps_chart_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cmps/chart/chart.component */ "ppaa");
/* harmony import */ var _pages_static_page_static_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/static-page/static-page.component */ "Ex7Z");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-google-charts */ "icpI");
/* harmony import */ var _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/contact-edit/contact-edit.component */ "IOHS");
/* harmony import */ var _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cmps/app-header/app-header.component */ "uOz6");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _cmps_filter_filter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cmps/filter/filter.component */ "kzmh");
/* harmony import */ var _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cmps/move-list/move-list.component */ "L8zA");
/* harmony import */ var _cmps_transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cmps/transfer-fund/transfer-fund.component */ "sLIO");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/signup/signup.component */ "o97b");
/* harmony import */ var _cmps_move_preview_move_preview_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cmps/move-preview/move-preview.component */ "fD3m");
/* harmony import */ var _cmps_convert_money_convert_money_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cmps/convert-money/convert-money.component */ "1ogN");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            angular_google_charts__WEBPACK_IMPORTED_MODULE_12__["GoogleChartsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
        _pages_bitcoin_app_bitcoin_app_component__WEBPACK_IMPORTED_MODULE_5__["BitcoinAppComponent"],
        _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__["ContactPageComponent"],
        _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_7__["ContactListComponent"],
        _cmps_contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_8__["ContactPreviewComponent"],
        _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_9__["ContactDetailsComponent"],
        _cmps_chart_chart_component__WEBPACK_IMPORTED_MODULE_10__["ChartComponent"],
        _pages_static_page_static_page_component__WEBPACK_IMPORTED_MODULE_11__["StaticPageComponent"],
        _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_13__["ContactEditComponent"],
        _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_14__["AppHeaderComponent"],
        _cmps_filter_filter_component__WEBPACK_IMPORTED_MODULE_16__["FilterComponent"],
        _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_17__["MoveListComponent"],
        _cmps_transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_18__["TransferFundComponent"],
        _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"],
        _cmps_move_preview_move_preview_component__WEBPACK_IMPORTED_MODULE_20__["MovePreviewComponent"],
        _cmps_convert_money_convert_money_component__WEBPACK_IMPORTED_MODULE_21__["ConvertMoneyComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        angular_google_charts__WEBPACK_IMPORTED_MODULE_12__["GoogleChartsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
                    _pages_bitcoin_app_bitcoin_app_component__WEBPACK_IMPORTED_MODULE_5__["BitcoinAppComponent"],
                    _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__["ContactPageComponent"],
                    _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_7__["ContactListComponent"],
                    _cmps_contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_8__["ContactPreviewComponent"],
                    _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_9__["ContactDetailsComponent"],
                    _cmps_chart_chart_component__WEBPACK_IMPORTED_MODULE_10__["ChartComponent"],
                    _pages_static_page_static_page_component__WEBPACK_IMPORTED_MODULE_11__["StaticPageComponent"],
                    _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_13__["ContactEditComponent"],
                    _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_14__["AppHeaderComponent"],
                    _cmps_filter_filter_component__WEBPACK_IMPORTED_MODULE_16__["FilterComponent"],
                    _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_17__["MoveListComponent"],
                    _cmps_transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_18__["TransferFundComponent"],
                    _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"],
                    _cmps_move_preview_move_preview_component__WEBPACK_IMPORTED_MODULE_20__["MovePreviewComponent"],
                    _cmps_convert_money_convert_money_component__WEBPACK_IMPORTED_MODULE_21__["ConvertMoneyComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    angular_google_charts__WEBPACK_IMPORTED_MODULE_12__["GoogleChartsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "eVyO":
/*!************************************************************!*\
  !*** ./src/app/pages/bitcoin-app/bitcoin-app.component.ts ***!
  \************************************************************/
/*! exports provided: BitcoinAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitcoinAppComponent", function() { return BitcoinAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _static_page_static_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static-page/static-page.component */ "Ex7Z");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home-page/home-page.component */ "JFIp");
/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact-page/contact-page.component */ "64+1");





class BitcoinAppComponent {
    constructor() { }
    ngOnInit() {
    }
}
BitcoinAppComponent.ɵfac = function BitcoinAppComponent_Factory(t) { return new (t || BitcoinAppComponent)(); };
BitcoinAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BitcoinAppComponent, selectors: [["bitcoin-app"]], decls: 4, vars: 0, consts: [[1, "bitcoin-app"]], template: function BitcoinAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-static-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "home-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "contact-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_static_page_static_page_component__WEBPACK_IMPORTED_MODULE_1__["StaticPageComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"], _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_3__["ContactPageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaXRjb2luLWFwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BitcoinAppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bitcoin-app',
                templateUrl: './bitcoin-app.component.html',
                styleUrls: ['./bitcoin-app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fD3m":
/*!*************************************************************!*\
  !*** ./src/app/cmps/move-preview/move-preview.component.ts ***!
  \*************************************************************/
/*! exports provided: MovePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovePreviewComponent", function() { return MovePreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);



class MovePreviewComponent {
    constructor() { }
    ngOnInit() {
    }
    get time() {
        return moment__WEBPACK_IMPORTED_MODULE_1__(this.move.at).format('MMMM D YYYY, h:mm:ss');
    }
    get amount() {
        return this.move.amount + ' coins';
    }
}
MovePreviewComponent.ɵfac = function MovePreviewComponent_Factory(t) { return new (t || MovePreviewComponent)(); };
MovePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovePreviewComponent, selectors: [["move-preview"]], inputs: { move: "move" }, decls: 13, vars: 3, consts: [[1, "move-preview"], [1, "bolder"]], template: function MovePreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "To:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "At:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Amount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.move.to);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.amount);
    } }, styles: [".move-preview[_ngcontent-%COMP%] {\n  padding: 7px 0;\n}\n.move-preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  line-height: 1.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vdmUtcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7QUFFUiIsImZpbGUiOiJtb3ZlLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW92ZS1wcmV2aWV3IHtcbiAgICBwYWRkaW5nOiA3cHggMDtcbiAgICBoNHtcbiAgICAgICAgbGluZS1oZWlnaHQ6MS44XG5cbiAgICB9XG5cblxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovePreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'move-preview',
                templateUrl: './move-preview.component.html',
                styleUrls: ['./move-preview.component.scss']
            }]
    }], function () { return []; }, { move: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "kzmh":
/*!*************************************************!*\
  !*** ./src/app/cmps/filter/filter.component.ts ***!
  \*************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class FilterComponent {
    constructor() {
        this.setFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterBy = {
            term: ''
        };
    }
    ngOnInit() {
    }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(); };
FilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterComponent, selectors: [["filter"]], outputs: { setFilter: "setFilter" }, decls: 2, vars: 1, consts: [[1, "contact-filter", "flex", "center-center"], ["type", "text", "name", "term", "placeholder", "Search a contact..", 1, "input", 3, "ngModel", "ngModelChange", "input"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_input_ngModelChange_1_listener($event) { return ctx.filterBy.term = $event; })("input", function FilterComponent_Template_input_input_1_listener() { return ctx.setFilter.emit(ctx.filterBy); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterBy.term);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".contact-filter[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px;\n  border-bottom: 1px solid #8080808c;\n  background-color: #ffffff78;\n}\n.contact-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtBQUNKO0FBQUk7RUFDSSxVQUFBO0FBRVIiLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtZmlsdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxM3B4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODA4MDgwOGM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjc4O1xuICAgIGlucHV0e1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'filter',
                templateUrl: './filter.component.html',
                styleUrls: ['./filter.component.scss']
            }]
    }], function () { return []; }, { setFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "n90K":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StorageService {
    constructor() { }
    save(key, val) {
        localStorage.setItem(key, JSON.stringify(val));
    }
    load(key) {
        const val = localStorage.getItem(key);
        return JSON.parse(val);
    }
    remove(key) {
        localStorage.removeItem(key);
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "o97b":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class SignupComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.name = '';
        this.errMsg = null;
    }
    ngOnInit() {
    }
    doSignup() {
        if (!this.name)
            return this.errMsg = 'Please fill the name';
        this.userService.signup(this.name);
        this.router.navigateByUrl('/');
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 11, vars: 2, consts: [[1, "signup-form", "flex", "column", "center-center"], [1, "title-signup"], [1, "simple-form", "flex", "wrap", "align-center", 3, "ngSubmit"], ["type", "text", "name", "name", "placeholder", "Please enter your name", 1, "input", 3, "ngModel", "ngModelChange"], [1, "form-errors"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome to MisterBitcoin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign up Or Login to manage your Bitcoin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_5_listener() { return ctx.doSignup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_6_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errMsg);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".signup-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-bottom: 20px;\n  line-height: 1.5;\n  font-size: 30px;\n  font-weight: 900;\n}\n.signup-form[_ngcontent-%COMP%]   h2.title-signup[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFSO0FBR0k7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FBRFIiLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ251cC1mb3Jte1xuICAgIGgxe1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG5cbiAgICB9XG4gICAgaDIudGl0bGUtc2lnbnVwe1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.scss']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ppaa":
/*!***********************************************!*\
  !*** ./src/app/cmps/chart/chart.component.ts ***!
  \***********************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-google-charts */ "icpI");




function ChartComponent_google_chart_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "google-chart", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.type)("data", ctx_r0.data)("columns", ctx_r0.columns);
} }
class ChartComponent {
    // @Input() type
    constructor() {
        // myData = [
        //   ['London', {v: 8136000, f: '8,1360'}],
        //   ['New York', {v: 8538000, f: '8,530'}]]
        // chartColumns = ['City', 'Inhabitants'];
        this.type = 'LineChart';
    }
    ngOnInit() {
        console.log('this.data:', this.data);
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(); };
ChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartComponent, selectors: [["chart"]], inputs: { data: "data", columns: "columns" }, decls: 1, vars: 1, consts: [["style", "width: 100%;", 3, "type", "data", "columns", 4, "ngIf"], [2, "width", "100%", 3, "type", "data", "columns"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChartComponent_google_chart_0_Template, 1, 3, "google-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data || ctx.columns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], angular_google_charts__WEBPACK_IMPORTED_MODULE_2__["GoogleChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFydC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'chart',
                templateUrl: './chart.component.html',
                styleUrls: ['./chart.component.scss']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model */ "Tj/N");
/* harmony import */ var _models_move_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/move.model */ "DCCE");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.service */ "n90K");





class UserService {
    constructor(storageService) {
        this.storageService = storageService;
        this.gUsers = this._loadUsers();
        this.USERSDB = 'users_db';
        this.LoggedinUser = 'LoggedinUser';
    }
    getUser() {
        const user = this.storageService.load(this.LoggedinUser);
        return user;
    }
    addMove(contact, amount) {
        const user = this.storageService.load(this.LoggedinUser);
        const move = new _models_move_model__WEBPACK_IMPORTED_MODULE_2__["Move"](undefined, contact._id, contact.name, Date.now(), amount);
        move.setId();
        console.log('move:', move);
        user.coins -= amount;
        user.moves.unshift(move);
        this.storageService.save(this.LoggedinUser, user);
        this._saveUsersToStorage(user);
        return user;
    }
    addCoins(coins) {
        const user = this.storageService.load(this.LoggedinUser);
        user.coins += coins;
        this.storageService.save(this.LoggedinUser, user);
        this._saveUsersToStorage(user);
        return user;
    }
    signup(name) {
        let user = this._handleLogin(name);
        if (!user) {
            user = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"](undefined, name);
            this.gUsers.push(user);
            this._saveUsersToStorage();
        }
        this.storageService.save(this.LoggedinUser, user);
        return user;
    }
    doLogout() {
        this.storageService.remove(this.LoggedinUser);
    }
    _handleLogin(name) {
        const user = this.gUsers.find(gUser => gUser.name === name);
        const res = user ? user : null;
        return res;
    }
    _loadUsers() {
        let users = this.storageService.load(this.USERSDB);
        if (!users) {
            users = [];
            this.storageService.save(this.USERSDB, users);
        }
        return users;
    }
    _saveUsersToStorage(user = null) {
        if (user) {
            const idx = this.gUsers.findIndex(gUser => gUser._id === user._id);
            this.gUsers.splice(idx, 1, user);
        }
        this.storageService.save(this.USERSDB, this.gUsers);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "sLIO":
/*!***************************************************************!*\
  !*** ./src/app/cmps/transfer-fund/transfer-fund.component.ts ***!
  \***************************************************************/
/*! exports provided: TransferFundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferFundComponent", function() { return TransferFundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class TransferFundComponent {
    constructor() {
        this.onTransferCoins = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.errMsg = null;
        this.amount = 0;
    }
    ngOnInit() {
    }
    transferCoins() {
        if (this.amount === 0 || this.amount > this.maxCoins)
            return this.errMsg = 'Cant transfer sorry';
        this.onTransferCoins.emit(this.amount);
        this.amount = 0;
    }
}
TransferFundComponent.ɵfac = function TransferFundComponent_Factory(t) { return new (t || TransferFundComponent)(); };
TransferFundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransferFundComponent, selectors: [["transfer-fund"]], inputs: { contact: "contact", maxCoins: "maxCoins" }, outputs: { onTransferCoins: "onTransferCoins" }, decls: 15, vars: 6, consts: [[1, "transfer-fund", 3, "ngSubmit"], [1, "title"], [1, "left-amount"], [1, "transfer-container", "flex", "space-between", "align-center"], ["htmlFor", "transfer"], [1, "amount-transfar"], ["type", "range", "id", "transfer", "name", "amount", "value", "{amount}", "min", "0", 3, "ngModel", "max", "ngModelChange"], [1, "form-errors"], [1, "trade"]], template: function TransferFundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TransferFundComponent_Template_form_ngSubmit_0_listener() { return ctx.transferCoins(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TransferFundComponent_Template_input_ngModelChange_10_listener($event) { return ctx.amount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Transfer coins to ", ctx.contact.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your left coins: ", ctx.maxCoins, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx.maxCoins);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errMsg);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".transfer-fund[_ngcontent-%COMP%] {\n  background-color: aliceblue;\n  padding: 20px;\n  border-radius: 10px;\n  margin: 10px 0;\n  min-width: 310px;\n  font-size: 20px;\n}\n.transfer-fund[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 15px;\n}\n.transfer-fund[_ngcontent-%COMP%]   .transfer-container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.transfer-fund[_ngcontent-%COMP%]   .transfer-container[_ngcontent-%COMP%]   .amount-transfar[_ngcontent-%COMP%] {\n  color: #019a01;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RyYW5zZmVyLWZ1bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksbUJBQUE7QUFFUjtBQUFJO0VBQ0ksZ0JBQUE7QUFFUjtBQURRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBR1oiLCJmaWxlIjoidHJhbnNmZXItZnVuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFuc2Zlci1mdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIG1pbi13aWR0aDogMzEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgID4qOm5vdCg6bGFzdC1jaGlsZCl7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuICAgIC50cmFuc2Zlci1jb250YWluZXJ7XG4gICAgICAgIG1hcmdpbi10b3A6MTBweCA7XG4gICAgICAgIC5hbW91bnQtdHJhbnNmYXJ7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDEgLDE1NCwgMSk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICB9XG5cbiAgICB9XG4gXG5cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransferFundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transfer-fund',
                templateUrl: './transfer-fund.component.html',
                styleUrls: ['./transfer-fund.component.scss']
            }]
    }], function () { return []; }, { contact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxCoins: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onTransferCoins: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "uOz6":
/*!*********************************************************!*\
  !*** ./src/app/cmps/app-header/app-header.component.ts ***!
  \*********************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function () { return ["/signup"]; };
function AppHeaderComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function AppHeaderComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppHeaderComponent_ng_template_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.doLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return [""]; };
const _c2 = function () { return ["/contact"]; };
const _c3 = function () { return ["/edit"]; };
const _c4 = function () { return ["/static"]; };
class AppHeaderComponent {
    constructor(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.user = this.userService.getUser();
    }
    doLogout() {
        this.user = null;
        this.userService.doLogout();
        this.router.navigateByUrl('/signup');
    }
}
AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) { return new (t || AppHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppHeaderComponent, selectors: [["app-header"]], decls: 15, vars: 10, consts: [[1, "app-header-nav"], [1, "main-nav", "container", "flex", "space-between", "align-center"], [1, "logo-container"], [3, "routerLink"], [1, "btn-controls", "flex", "align-center"], [3, "routerLink", 4, "ngIf", "ngIfElse"], ["logout", ""], [3, "click"]], template: function AppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Static");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppHeaderComponent_a_12_Template, 2, 2, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppHeaderComponent_ng_template_13_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user)("ngIfElse", _r1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".app-header-nav[_ngcontent-%COMP%] {\n  background: #121d33;\n  z-index: 999;\n  color: rgba(0, 0, 0, 0.5);\n  position: sticky;\n  top: 0;\n}\n.app-header-nav[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%] {\n  height: 65px;\n  width: 100%;\n  font-size: 20px;\n  padding: 0 30px;\n  max-height: 65px;\n}\n.app-header-nav[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]   .btn-controls[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n.app-header-nav[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]   .btn-controls[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 10px;\n}\n.app-header-nav[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgba(242, 242, 242, 0.9);\n}\n.app-header-nav[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]   .curr-page[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  color: #181818;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtBQUFKO0FBQ0k7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUdJO0VBRUksWUFBQTtBQUZSO0FBSUk7RUFDSSxrQkFBQTtBQUZSO0FBS0E7RUFDSSxnQkFBQTtFQUNBLCtCQUFBO0FBSEo7QUFPQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQUxKIiwiZmlsZSI6ImFwcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWhlYWRlci1uYXYge1xuICAgIFxuICAgIGJhY2tncm91bmQ6IHJnYigxOCwgMjksIDUxKTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIC5tYWluLW5hdntcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDY1cHg7XG5cbi5idG4tY29udHJvbHN7XG4gICAgYXtcbiAgICAgICAgXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgPio6bm90KDpsYXN0LWNoaWxkKXtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbn1cbi5hY3RpdmV7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogcmdiYSgyNDIsIDI0MiwgMjQyLCAwLjkpO1xuXG5cbn1cbi5jdXJyLXBhZ2V7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xuXG59XG59XG5cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './app-header.component.html',
                styleUrls: ['./app-header.component.scss']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "JFIp");
/* harmony import */ var _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact-page/contact-page.component */ "64+1");
/* harmony import */ var _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact-details/contact-details.component */ "8FSX");
/* harmony import */ var _pages_static_page_static_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/static-page/static-page.component */ "Ex7Z");
/* harmony import */ var _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/contact-edit/contact-edit.component */ "IOHS");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/signup/signup.component */ "o97b");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _services_contact_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/contact.resolver */ "IJ3A");












const routes = [
    { path: '', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'signup', component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] },
    { path: 'contact', component: _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_3__["ContactPageComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'contact/:id', component: _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_4__["ContactDetailsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]], resolve: { contact: _services_contact_resolver__WEBPACK_IMPORTED_MODULE_9__["ContactResolver"] }, runGuardsAndResolvers: "paramsChange" },
    { path: 'static', component: _pages_static_page_static_page_component__WEBPACK_IMPORTED_MODULE_5__["StaticPageComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'edit/:id', component: _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_6__["ContactEditComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]], resolve: { contact: _services_contact_resolver__WEBPACK_IMPORTED_MODULE_9__["ContactResolver"] }, runGuardsAndResolvers: "paramsChange" },
    { path: 'edit', component: _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_6__["ContactEditComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map