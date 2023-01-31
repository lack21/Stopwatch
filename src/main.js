"use strict";
// lear
// Stopwatch
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('blurred');
    const timeText = document.querySelector('.time');
    const startBtn = document.querySelector('.start-btn');
    const stopBtn = document.querySelector('.stop-btn');
    const resetBtn = document.querySelector('.reset-btn');
    let timeCount = 0;
    // Timer
    function timer() {
        timeCount += 0.01;
        timeText.innerHTML = timeCount.toFixed(2).length == 4 ? '0' + timeCount.toFixed(2) : timeCount.toFixed(2);
    }
    // Starting Timer
    startBtn === null || startBtn === void 0 ? void 0 : startBtn.addEventListener('click', () => {
        const startTimer = setInterval(timer, 10);
        // Stop Timer
        stopBtn === null || stopBtn === void 0 ? void 0 : stopBtn.addEventListener('click', () => {
            clearInterval(startTimer);
        });
        // Reset Timer
        resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener('click', () => {
            timeCount = 0;
            timeText.innerHTML = '0' + timeCount.toFixed(2);
            clearInterval(startTimer);
        });
    });
});
//# sourceMappingURL=main.js.map