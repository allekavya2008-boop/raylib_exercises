const r = require("raylib");

const WIDTH = 300;
const HEIGHT = 200;

let detector1_x = 0;
let detector2_x = WIDTH - 20;
let detector_y = 0;
const detectorWidth = 20;

const particle1_x = WIDTH / 4;
const particle1_width = detectorWidth * 2;

const particle2_x = WIDTH * 0.75;
const particle2_width = detectorWidth / 2;

let flag1 = 0;
let flag2 = 1;

function isRunning() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Particle detector");
    r.SetTargetFPS(90);
}

function direction(x, start, end, flag) {
    if (x === end && flag === 1) {
        flag = 0;
    }
    if (x === start && flag === 0) {
        flag = 1;
    }
    return flag;
}

function moveDetector(flag, speed, instructor) {
    return flag === instructor ? -speed : +speed;
}

function scannerColor(d_x, p_x, d_w, p_w, start) {
    if (d_x + d_w > p_x && d_x < p_x + p_w && p_x >= start) return r.RED;
    return r.WHITE;
}

function update() {

    color1 = scannerColor(detector1_x, particle1_x, detectorWidth, particle1_width, 0);
    color2 = scannerColor(detector1_x, particle2_x, detectorWidth, particle2_width, 0);
    detector1_color = color1 === r.RED || color2 === r.RED ? r.RED : r.WHITE;
    flag1 = direction(detector1_x, 0, WIDTH / 2 - detectorWidth, flag1);
    detector1_x += moveDetector(flag1, 1, 0);

    color1 = scannerColor(detector2_x, particle1_x, detectorWidth, particle1_width, WIDTH / 2);
    color2 = scannerColor(detector2_x, particle2_x, detectorWidth, particle2_width, WIDTH / 2);
    detector2_color = color1 === r.RED || color2 === r.RED ? r.RED : r.WHITE;
    flag2 = direction(detector2_x, WIDTH - detectorWidth, WIDTH / 2, flag2);
    detector2_x += moveDetector(flag2, 2, 1);

}

function draw() {
    r.BeginDrawing()
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(particle1_x, 0, particle1_width, HEIGHT, r.BLUE);
    r.DrawRectangle(particle2_x, 0, particle2_width, HEIGHT, r.BLUE);

    r.DrawRectangle(detector1_x, detector_y, detectorWidth, HEIGHT, detector1_color);
    r.DrawRectangle(detector2_x, detector_y, detectorWidth, HEIGHT, detector2_color);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    isRunning,
    setup,
    update,
    draw,
    teardown,
}