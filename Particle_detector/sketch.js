const r = require("raylib");

const WIDTH = 300;
const HEIGHT = 200;

const SCANNER_WIDTH = 20;
let horizontalScanner1_x = 0;
let horizontalScanner2_x = WIDTH - SCANNER_WIDTH;
const HORIZONTAL_SCANNER_Y = 0;
scanner1_speed = -1;

let horizontalScanner1_color;
let horizontalScanner2_color;
let verticleScannerColor;
scanner2_speed = 2;

const VERTICLE_SCANNER_X = 0;
let verticleScannerY = 0;
scanner3_speed = -1;

const H_PARTICLE_Y = HEIGHT / 2;
const H_PARTICLE_X = 0;
const H_PARTICLE_HEIGHT = SCANNER_WIDTH / 2;

const PARTICLE1_X = WIDTH / 4;
const PARTICLE1_WIDTH = SCANNER_WIDTH * 2;

const PARTICLE2_X = WIDTH * 0.75;
const PARTICLE2_WIDTH = SCANNER_WIDTH / 2;

function isRunning() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Particle Scanning");
    r.SetTargetFPS(90);
}

function scannerColor(d_x, p_x, d_w, p_w, start) {
    if (d_x + d_w > p_x && d_x < p_x + p_w && p_x >= start) return r.RED;
    return r.WHITE;
}

function moveDetector(movingPoint, start, end, speed) {
    if (movingPoint === start || movingPoint === end) return -speed;
    return speed;
}

function update() {

    color1 = scannerColor(horizontalScanner1_x, PARTICLE1_X, SCANNER_WIDTH, PARTICLE1_WIDTH, 0);
    color2 = scannerColor(horizontalScanner1_x, PARTICLE2_X, SCANNER_WIDTH, PARTICLE2_WIDTH, 0);
    horizontalScanner1_color = color1 === r.RED || color2 === r.RED ? r.RED : r.WHITE;
    scanner1_speed = moveDetector(horizontalScanner1_x, 0, WIDTH / 2 - SCANNER_WIDTH, scanner1_speed);
    horizontalScanner1_x += scanner1_speed;

    color1 = scannerColor(horizontalScanner2_x, PARTICLE1_X, SCANNER_WIDTH, PARTICLE1_WIDTH, WIDTH / 2);
    color2 = scannerColor(horizontalScanner2_x, PARTICLE2_X, SCANNER_WIDTH, PARTICLE2_WIDTH, WIDTH / 2);
    horizontalScanner2_color = color1 === r.RED || color2 === r.RED ? r.RED : r.WHITE;
    scanner2_speed = moveDetector(horizontalScanner2_x, WIDTH - SCANNER_WIDTH, WIDTH / 2, scanner2_speed);
    horizontalScanner2_x += scanner2_speed;

    verticleScannerColor = scannerColor(verticleScannerY, H_PARTICLE_Y, SCANNER_WIDTH, H_PARTICLE_HEIGHT, 0);
    scanner3_speed = moveDetector(verticleScannerY, 0, HEIGHT - SCANNER_WIDTH, scanner3_speed);
    verticleScannerY += scanner3_speed;

}

function draw() {
    r.BeginDrawing()
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(PARTICLE1_X, 0, PARTICLE1_WIDTH, HEIGHT, r.BLUE);
    r.DrawRectangle(PARTICLE2_X, 0, PARTICLE2_WIDTH, HEIGHT, r.BLUE);

    r.DrawRectangle(H_PARTICLE_X, H_PARTICLE_Y, WIDTH, H_PARTICLE_HEIGHT, r.BLUE);

    r.DrawRectangle(horizontalScanner1_x, HORIZONTAL_SCANNER_Y, SCANNER_WIDTH, HEIGHT, horizontalScanner1_color);
    r.DrawRectangle(horizontalScanner2_x, HORIZONTAL_SCANNER_Y, SCANNER_WIDTH, HEIGHT, horizontalScanner2_color);

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
