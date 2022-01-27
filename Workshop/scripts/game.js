(function () {
    const init = function (selector, width, height) {
        const gameContainer = document.querySelector(selector);
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        gameContainer.appendChild(canvas);

        const ctx = canvas.getContext('2d')

        return this;
    };

    const start = function () {

    };

    const game = {
        init,
        start,
    };

    window.game = game;
}());