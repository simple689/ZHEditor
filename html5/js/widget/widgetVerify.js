function draw(ctx, operation, x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + l / 2, y);
    ctx.arc(x + l / 2, y - r + 2, r, 0, 2 * PI);
    ctx.lineTo(x + l / 2, y);
    ctx.lineTo(x + l, y);
    ctx.lineTo(x + l, y + l / 2);
    ctx.arc(x + l + r - 2, y + l / 2, r, 0, 2 * PI);
    ctx.lineTo(x + l, y + l / 2);
    ctx.lineTo(x + l, y + l);
    ctx.lineTo(x, y + l);
    ctx.lineTo(x, y);
    ctx.fillStyle = '#fff';
    ctx[operation]();
    ctx.beginPath();
    ctx.arc(x, y + l / 2, r, 1.5 * PI, 0.5 * PI);
    ctx.globalCompositeOperation = "xor";
    ctx.fill();
}
function sum(x, y) {
    return x + y;
}
function square(x) {
    return x * x;
}

function WidgetVerify() {
}
WidgetVerify._w = 310; // canvas宽度
WidgetVerify._h = 155; // canvas高度
WidgetVerify._r = 10; // 滑块半径
WidgetVerify._l = 42; // 滑块边长
WidgetVerify._L = WidgetVerify._l + WidgetVerify._r * 2; // 滑块实际边长
WidgetVerify._PI = Math.PI;

WidgetVerify.prototype.create = function (elementParent, funcComplete) {
    this._elementParent = elementParent;
    this._funcComplete = funcComplete;

    this.initHtml();
    this.initImg();
    this.draw();
    this.bindEvents();
}
WidgetVerify.prototype.initHtml = function () {
    var canvas = WidgetHtml.createCanvas(WidgetVerify._w, WidgetVerify._h); // 画布

    var canvasBlock = canvas.cloneNode(true); // 滑块
    canvasBlock.className = 'canvasBlock';

    var refreshIcon = WidgetHtml.createElement('div');
    refreshIcon.className = 'refreshIcon';

    var sliderContainer = WidgetHtml.createElement('div');
    sliderContainer.className = 'sliderContainer';

    var sliderMask = WidgetHtml.createElement('div');
    sliderMask.className = 'sliderMask';

    var sliderBlock = WidgetHtml.createElement('div');
    sliderBlock.className = 'sliderBlock';

    var sliderIcon = WidgetHtml.createElement('span');
    sliderIcon.className = 'sliderIcon';

    var sliderText = WidgetHtml.createElement('span');
    sliderText.className = 'sliderText';
    sliderText.innerHTML = '向右滑动滑块填充拼图';

    this._elementParent.appendChild(canvas);
    this._elementParent.appendChild(canvasBlock);
    this._elementParent.appendChild(refreshIcon);

    this._elementParent.appendChild(sliderContainer);

    sliderContainer.appendChild(sliderMask);
    sliderMask.appendChild(sliderBlock);
    sliderBlock.appendChild(sliderIcon);

    sliderContainer.appendChild(sliderText);

    Object.assign(this, {
        _canvas: canvas,
        _canvasCtx: canvas.getContext('2d'),
        _canvasBlock: canvasBlock,
        _canvasBlockCtx: canvasBlock.getContext('2d'),
        _refreshIcon: refreshIcon,
        _sliderContainer: sliderContainer,
        _sliderMask: sliderMask,
        _sliderBlock: sliderBlock,
        _sliderIcon: sliderIcon,
        _sliderText: sliderText
    })
}
WidgetVerify.createImg = function(exec, onload) {
    var img = WidgetHtml.createElement('img');
    img._exec = exec;
    img.crossOrigin = "Anonymous";
    img.onload = onload;
    img.onerror = () => {
        img.src = WidgetVerify.getRandomImg();
    }
    img.src = WidgetVerify.getRandomImg();
    return img;
}
WidgetVerify.getRandomImg = function() {
    url("/html5/img/widget/widgetVerify/imgVerify/imgVerify_" + WidgetVerify.getRandomNumberByRange(0, 100) + ".png")
}
WidgetVerify.getRandomImgWeb = function() {
    return 'https://picsum.photos/300/150/?image=' + WidgetVerify.getRandomNumberByRange(0, 100);
}
WidgetVerify.getRandomNumberByRange = function(start, end) {
    return Math.round(Math.random() * (end - start) + start);
}
WidgetVerify.prototype.initImg = function () {
    var img = WidgetVerify.createImg(this, function () {
        var widgetVerify = this._exec;
        widgetVerify._canvasCtx.drawImage(this, 0, 0, WidgetVerify._w, WidgetVerify._h);
        widgetVerify._canvasBlockCtx.drawImage(this, 0, 0, WidgetVerify._w, WidgetVerify._h);

        var y = widgetVerify.y - WidgetVerify._r * 2 + 2;
        var imageData = widgetVerify._canvasBlockCtx.getImageData(widgetVerify.x, y, WidgetVerify._L, WidgetVerify._L);

        widgetVerify._canvasBlock.width = WidgetVerify._L;
        widgetVerify._canvasBlockCtx.putImageData(imageData, 0, y);
    });
    this._img = img;
}
WidgetVerify.prototype.draw = function () {
    // 随机创建滑块的位置
    this.x = WidgetVerify.getRandomNumberByRange(L + 10, w - (L + 10));
    this.y = WidgetVerify.getRandomNumberByRange(10 + r * 2, h - (L + 10));
    draw(this._canvasCtx, 'fill', this.x, this.y);
    draw(this._canvasBlockCtx, 'clip', this.x, this.y);
}
WidgetVerify.prototype.clean = function () {
    this._canvasCtx.clearRect(0, 0, w, h);
    this._canvasBlockCtx.clearRect(0, 0, w, h);
    this._canvasBlock.width = w;
}

WidgetVerify.prototype.bindEvents = function () {
    this._elementParent.onselectstart = () =>
    false
    this._refreshIcon.onclick = () => {
        this.reset()
    }
    let originX, originY, trail = [], isMouseDown = false;
    this._sliderBlock.addEventListener('mousedown', function (e) {
        originX = e.x, originY = e.y;
        isMouseDown = true;
    });
    document.addEventListener('mousemove', (e) => {
        if(!isMouseDown) return false;
        var moveX = e.x - originX;
        var moveY = e.y - originY;
        if (moveX < 0 || moveX + 38 >= w) return false;
        this._sliderBlock.style.left = moveX + 'px';
        var blockLeft = (w - 40 - 20) / (w - 40) * moveX;
        this._canvasBlock.style.left = blockLeft + 'px';

        WidgetHtml.classAdd(this._sliderContainer, 'sliderContainer_active');
        this._sliderMask.style.width = moveX + 'px';
        trail.push(moveY);
    });
    document.addEventListener('mouseup', (e) => {
        if(!isMouseDown) return false;
        isMouseDown = false;
        if (e.x == originX) return false;
        WidgetHtml.classRemove(this._sliderContainer, 'sliderContainer_active');
        this.trail = trail;
        const {spliced, TuringTest} = this.verify();
        if (spliced) {
            if (TuringTest) {
                WidgetHtml.classAdd(this._sliderContainer, 'sliderContainer_success');
                this._funcComplete && this._funcComplete();
            } else {
                WidgetHtml.classAdd(this._sliderContainer, 'sliderContainer_fail');
                this.text.innerHTML = '再试一次';
                this.reset();
            }
        } else {
            WidgetHtml.classAdd(this._sliderContainer, 'sliderContainer_fail');
            this.fail && this.fail();
            setTimeout(() => {
                this.reset();
            },
            1000);
        }
    });
}
WidgetVerify.prototype.verify = function () {
    var arr = this.trail; // 拖动时y轴的移动距离
    var average = arr.reduce(sum) / arr.length; // 平均值
    var deviations = arr.map(x => x - average); // 偏差数组
    var stddev = Math.sqrt(deviations.map(square).reduce(sum) / arr.length); // 标准差
    var left = parseInt(this._canvasBlock.style.left);
    return {
        spliced: Math.abs(left - this.x) < 10,
        TuringTest: average !== stddev, // 只是简单的验证拖动轨迹，相等时一般为0，表示可能非人为操作
    }
}
WidgetVerify.prototype.reset = function () {
    this._sliderContainer.className = 'sliderContainer';
    this._sliderBlock.style.left = 0;
    this._canvasBlock.style.left = 0;
    this._sliderMask.style.width = 0;
    this.clean();
    this._img.src = WidgetVerify.getRandomImg();
    this.draw();
}
