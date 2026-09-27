const r = require("raylib");

const WIDTH = 300;
const HEIGHT = 200;

const SCANNER_WIDTH = 20;
let horizontalScanner1_x = 0;
let horizontalScaner2_x = WIDTH - SCANNER_WIDTH;
const HORIZONTAL_SCANNER_Y = 0;

let horizontalScanner1_color;
let horizontalScanner2_color;
let verticleScannerColor;

const VERTICLE_SCANNER_X = 0;
let verticleScannerY = 0;

const H_PARTICLE_Y = HEIGHT / 2;
const H_PARTICLE_X = 0;
const H_PARTICLE_HEIGHT = SCANNER_WIDTH / 2;

const PARTICLE1_X = WIDTH / 4;
const PARTICLE1_WIDTH = SCANNER_WIDTH * 2;

const PARTICLE2_X = WIDTH * 0.75;
const PARTICLE2_WIDTH = SCANNER_WIDTH / 2;

let flag1 = 0;
let flag2 = 1;
let flag3 = 1;

function isRunning() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Particle Scanning");
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

    color1 = scannerColor(horizontalScanner1_x, PARTICLE1_X, SCANNER_WIDTH, PARTICLE1_WIDTH, 0);
    color2 = scannerColor(horizontalScanner1_x, PARTICLE2_X, SCANNER_WIDTH, PARTICLE2_WIDTH, 0);
    horizontalScanner1_color = color1 === r.RED || color2 === r.RED ? r.RED : r.WHITE;
    flag1 = direction(horizontalScanner1_x, 0, WIDTH / 2 - SCANNER_WIDTH, flag1);
    horizontalScanner1_x += moveDetector(flag1, 1, 0);

    color1 = scannerColor(horizontalScaner2_x, PARTICLE1_X, SCANNER_WIDTH, PARTICLE1_WIDTH, WIDTH / 2);
    color2 = scannerColor(horizontalScaner2_x, PARTICLE2_X, SCANNER_WIDTH, PARTICLE2_WIDTH, WIDTH / 2);
    horizontalScanner2_color = color1 === r.RED || color2 === r.RED ? r.RED : r.WHITE;
    flag2 = direction(horizontalScaner2_x, WIDTH - SCANNER_WIDTH, WIDTH / 2, flag2);
    horizontalScaner2_x += moveDetector(flag2, 2, 1);

    verticleScannerColor = scannerColor(verticleScannerY, H_PARTICLE_Y, SCANNER_WIDTH, H_PARTICLE_HEIGHT, 0);
    flag3 = direction(verticleScannerY, 0, HEIGHT - SCANNER_WIDTH, flag3);
    verticleScannerY += moveDetector(flag3, 2, 0);

}

function draw() {
    r.BeginDrawing()
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(PARTICLE1_X, 0, PARTICLE1_WIDTH, HEIGHT, r.BLUE);
    r.DrawRectangle(PARTICLE2_X, 0, PARTICLE2_WIDTH, HEIGHT, r.BLUE);

    r.DrawRectangle(H_PARTICLE_X, H_PARTICLE_Y, WIDTH, H_PARTICLE_HEIGHT, r.BLUE);

    r.DrawRectangle(horizontalScanner1_x, HORIZONTAL_SCANNER_Y, SCANNER_WIDTH, HEIGHT, horizontalScanner1_color);
    r.DrawRectangle(horizontalScaner2_x, HORIZONTAL_SCANNER_Y, SCANNER_WIDTH, HEIGHT, horizontalScanner2_color);

    r.DrawRectangle(VERTICLE_SCANNER_X, verticleScannerY, WIDTH, SCANNER_WIDTH, verticleScannerColor);

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