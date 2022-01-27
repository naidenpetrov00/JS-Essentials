(function () {
    const initRenderer = function (ctx) {
        this.ctx = ctx;
        return this;
    }

    const rendererDot = function (left, top) {
        const { ctx } = this;
        ctx.fillRect(left, top, 15, 15);
    };

    const renderer = {
        init: initRenderer,
        rendererDot,
    }

    const init = function (selector, width, height) {
        const gameContainer = document.querySelector(selector);
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        gameContainer.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        this.renderer = renderer.init(ctx);
        return this;
    };

    const dot = {
        left: 0,
        top: 100,
    };

    const gameLoop = function () {
        const { left, top } = dot;
        this.renderer.rendererDot(left, top);
        dot.left += 5;
        setTimeout(() => {
            this.gameLoop();
        }, 100);
    }

    const start = function () {
        this.gameLoop();
    };

    const game = {
        init,
        start,
        gameLoop,
    };

    window.game = game;
}());