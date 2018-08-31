function WidgetMarkedDoc() {
    // this._menuFoldCtrl = new WidgetMenuFold();
    // this._flexCtrl = new WidgetFlex();
    // this._nowFolder = "/";
}

WidgetMarkedDoc.prototype.create = function (elementParent, page) {
    this._divMain = WidgetHtml.addDiv(elementParent);
    this._divMain.classList.add("widgetMarkedDocMain");

    this._divLeft = WidgetHtml.addDiv(this._divMain);
    this._divLeft._widgetMarkedDoc = this;
    this._divLeft.classList.add("widgetMarkedDocLeft");

    this._divMiddle = WidgetHtml.addDiv(this._divMain);
    this._divMiddle.classList.add("widgetMarkedDocMiddle");

    this._divRight = WidgetHtml.addDiv(this._divMain);
    this._divRight.classList.add("widgetMarkedDocRight");

    this._currentPage = page;
    this._currentHash = '';
    this._renderedPage = '';

    this.init(this._divLeft, this._divMiddle, this._divRight);
}

WidgetMarkedDoc.prototype.init = function (left, middle, right) {
    middle.onmousedown = function (e) {
        var x = (e || event).clientX;
        middle.left = middle.offsetLeft;
        document.onmousemove = function (e) {
            var iT = middle.left + ((e || event).clientX - x);
            var maxT = document.body.clientWidth;
            iT < 30 && (iT = 30);
            iT > maxT && (iT = maxT);
            middle.style.left = left.style.width = iT + "px";
            return false
        };
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
            middle.releaseCapture && middle.releaseCapture()
        };
        middle.setCapture && middle.setCapture();
        return false
    };

    this.initLeft(left);
    this.initRight(right);
};
WidgetMarkedDoc.prototype.initLeft = function (left) {
    $(left).load("../menu/menuHelp.html", function () {
        if (!window.Promise) {
            window.Promise = ES6Promise;
        }
        if (!window.fetch) {
            window.fetch = unfetch;
        }
        var widgetMarkedDoc = this._widgetMarkedDoc;
        widgetMarkedDoc._linkList = this.querySelectorAll('a');
        widgetMarkedDoc._linkList.forEach(function(link) {
            link._widgetMarkedDoc = this;
            link.onclick = function () {
                this._widgetMarkedDoc.hashChange();
            }
        }, widgetMarkedDoc);

        widgetMarkedDoc.hashChange();
    });
};
WidgetMarkedDoc.prototype.initRight = function (right) {
    this._divRightContent = WidgetHtml.addDiv(right);
    this._divRightContent.classList.add("widgetMarkedDocRightContent");
};
WidgetMarkedDoc.prototype.hashChange = function() {
    var hash = location.hash.slice(1);
    if (!hash) {
        hash = 'README.md';
    }
    var uri = hash.split('#');
    if (uri[0].match(/^\//)) {
        this._currentPage = uri[0].slice(1);
        if (uri.length > 1) {
            this._currentHash = uri[1];
        } else {
            this._currentHash = '';
        }
    } else {
        this._currentHash = uri[0];
    }
    this.fetchPage(this._currentPage).then(function () {
        WidgetMarkedDoc.fetchAnchor(this._currentHash)
    });

    var url = '#/' + this._currentPage + (this._currentHash ? '#' + this._currentHash : '');
    var fullUrl = window.location.origin + '/' + url;

    this._linkList.forEach(function(link) {
        link.className = link.href === fullUrl ? 'selected' : '';
    });

    history.replaceState('', document.title, url);
}
WidgetMarkedDoc.prototype.fetchPage = function(page) {
    if (page === this._renderedPage) {
        return Promise.resolve();
    }
    var widgetMarkedDoc = this;
    return fetch(page, widgetMarkedDoc)
        .then(function (res) {
            if (!res.ok) {
                throw new Error('Error ' + res.status + ': ' + res.statusText);
            }
            return res.text();
        })
        .then(function (text) {
            widgetMarkedDoc._renderedPage = page;
            widgetMarkedDoc._divRightContent.innerHTML = marked(text);
            widgetMarkedDoc._divRightContent.scrollTop = 0;
        }).catch(function (e) {
            widgetMarkedDoc._divRightContent.innerHTML = '<p>Oops! There was a problem rendering the page.</p>'
                + '<p>' + e.message + '</p>';
        });
}
WidgetMarkedDoc.fetchAnchor = function(anchor) {
    if (!anchor) {
        return;
    }
    var hashElement = document.getElementById(anchor);
    if (hashElement) {
        hashElement.scrollIntoView();
    }
}
