function getRandomNumberByRange(start, end) {
    return Math.round(Math.random() * (end - start) + start);
}

function createImg(onload) {
    var img = WidgetHtml.createElement('img');
    img.crossOrigin = "Anonymous";
    img.onload = onload;
    img.onerror = () => {
        img.src = getRandomImg();
    }
    img.src = getRandomImg();
    return img;
}

function getRandomImg() {
    return 'https://picsum.photos/300/150/?image=' + getRandomNumberByRange(0, 100);
}
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
WidgetVerify._canvasWidth = 310; // canvas宽度
WidgetVerify._canvasHeight = 155; // canvas高度
var w = 310; // canvas宽度
var h = 155; // canvas高度

var l = 42; // 滑块边长
var r = 10; // 滑块半径
var PI = Math.PI;
var L = l + r * 2; // 滑块实际边长

WidgetVerify.prototype.create = function (elementParent, funcComplete) {
    this._elementParent = elementParent;
    this._funcComplete = funcComplete;

    this.initDOM();
    this.initImg();
    this.draw();
    this.bindEvents();
}
WidgetVerify.prototype.initDOM = function () {
    var canvas = WidgetHtml.createCanvas(WidgetVerify._canvasWidth, WidgetVerify._canvasHeight); // 画布
    var canvasBlock = canvas.cloneNode(true); // 滑块

    var sliderContainer = WidgetHtml.createElement('div');
    var refreshIcon = WidgetHtml.createElement('div');
    var sliderMask = WidgetHtml.createElement('div');
    var slider = WidgetHtml.createElement('div');
    var sliderIcon = WidgetHtml.createElement('span');
    var text = WidgetHtml.createElement('span');

    canvasBlock.className = 'canvasBlock';

    sliderContainer.className = 'sliderContainer';
    refreshIcon.className = 'refreshIcon';
    sliderMask.className = 'sliderMask';
    slider.className = 'slider';
    sliderIcon.className = 'sliderIcon';
    text.className = 'sliderText';

    text.innerHTML = '向右滑动滑块填充拼图';

    this._elementParent.appendChild(canvas);
    this._elementParent.appendChild(refreshIcon);
    this._elementParent.appendChild(canvasBlock);
    slider.appendChild(sliderIcon);
    sliderMask.appendChild(slider);
    sliderContainer.appendChild(sliderMask);
    sliderContainer.appendChild(text);
    this._elementParent.appendChild(sliderContainer);

    Object.assign(this, {
        canvas,
        canvasBlock,
        sliderContainer,
        refreshIcon,
        slider,
        sliderMask,
        sliderIcon,
        text,
        canvasCtx: canvas.getContext('2d'),
        blockCtx: canvasBlock.getContext('2d')
    })
    var a = 0;
}
WidgetVerify.prototype.initImg = function () {
    var img = createImg(() => {
        this.canvasCtx.drawImage(img, 0, 0, w, h);
        this.blockCtx.drawImage(img, 0, 0, w, h);
        var y = this.y - r * 2 + 2;
        var ImageData = this.blockCtx.getImageData(this.x, y, L, L);
        this.canvasBlock.width = L;
        this.blockCtx.putImageData(ImageData, 0, y);
    });
    this.img = img;
}
WidgetVerify.prototype.draw = function () {
    // 随机创建滑块的位置
    this.x = getRandomNumberByRange(L + 10, w - (L + 10));
    this.y = getRandomNumberByRange(10 + r * 2, h - (L + 10));
    draw(this.canvasCtx, 'fill', this.x, this.y);
    draw(this.blockCtx, 'clip', this.x, this.y);
}
WidgetVerify.prototype.clean = function () {
    this.canvasCtx.clearRect(0, 0, w, h);
    this.blockCtx.clearRect(0, 0, w, h);
    this.canvasBlock.width = w;
}

WidgetVerify.prototype.bindEvents = function () {
    this._elementParent.onselectstart = () =>
    false
    this.refreshIcon.onclick = () => {
        this.reset()
    }
    let originX, originY, trail = [], isMouseDown = false;
    this.slider.addEventListener('mousedown', function (e) {
        originX = e.x, originY = e.y;
        isMouseDown = true;
    });
    document.addEventListener('mousemove', (e) => {
        if(!isMouseDown) return false;
        var moveX = e.x - originX;
        var moveY = e.y - originY;
        if (moveX < 0 || moveX + 38 >= w) return false;
        this.slider.style.left = moveX + 'px';
        var blockLeft = (w - 40 - 20) / (w - 40) * moveX;
        this.canvasBlock.style.left = blockLeft + 'px';

        WidgetHtml.classAdd(this.sliderContainer, 'sliderContainer_active');
        this.sliderMask.style.width = moveX + 'px';
        trail.push(moveY);
    });
    document.addEventListener('mouseup', (e) => {
        if(!isMouseDown) return false;
        isMouseDown = false;
        if (e.x == originX) return false;
        WidgetHtml.classRemove(this.sliderContainer, 'sliderContainer_active');
        this.trail = trail;
        const {spliced, TuringTest} = this.verify();
        if (spliced) {
            if (TuringTest) {
                WidgetHtml.classAdd(this.sliderContainer, 'sliderContainer_success');
                this._funcComplete && this._funcComplete();
            } else {
                WidgetHtml.classAdd(this.sliderContainer, 'sliderContainer_fail');
                this.text.innerHTML = '再试一次';
                this.reset();
            }
        } else {
            WidgetHtml.classAdd(this.sliderContainer, 'sliderContainer_fail');
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
    var left = parseInt(this.canvasBlock.style.left);
    return {
        spliced: Math.abs(left - this.x) < 10,
        TuringTest: average !== stddev, // 只是简单的验证拖动轨迹，相等时一般为0，表示可能非人为操作
    }
}
WidgetVerify.prototype.reset = function () {
    this.sliderContainer.className = 'sliderContainer';
    this.slider.style.left = 0;
    this.canvasBlock.style.left = 0;
    this.sliderMask.style.width = 0;
    this.clean();
    this.img.src = getRandomImg();
    this.draw();
}
