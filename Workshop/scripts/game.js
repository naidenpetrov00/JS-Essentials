(function () {
    const initRenderer = function (ctx, bounds) {
        this.ctx = ctx;
        this.bounds = bounds;
        return this;
    };

    const clear = function () {
        const { ctx } = this;
        const { width, height } = this.bounds;
        ctx.clearReact(0, 0, width, height);
    };

    const rendererDot = function (left, top) {
        const { ctx } = this;
        ctx.fillRect(left, top, 15, 15);
    };

    const renderer = {
        init: initRenderer,
        rendererDot,
        clear,
    };

    const init = function (selector, width, height) {
        const gameContainer = document.querySelector(selector);
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        gameContainer.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        this.bounds = {
            width,
            height,
        };

        this.renderer = renderer.init(ctx, this.bounds);
        return this;
    };

    const dot = {
        left: 0,
        top: 100,
    };

    const gameLoop = function () {
        this.renderer.clear();
        const { left, top } = dot;
        
        this.renderer.rendererDot(left, top);
        dot.left += 5; 
        setTimeout(() => {
            this.gameLoop();
        }, 100);
    };

    const start = function () 
        this.gameLoop();
    };

    const game = {
        init,
        start,
        gameLoop,
    };

    window.game = game;
}());