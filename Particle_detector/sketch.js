const r = require("raylib");

const WIDTH = 300;
const HEIGHT = 200;

let detector_x = 0;
let detector_y = 0;
let flag = 0;
let target = WIDTH - 20

function isRunning() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Particle detector");
    r.SetTargetFPS(20);
}

function update() {

    if (detector_x === target && flag === 1) {
        flag = 0;
    }
    if (detector_x === 0 && flag === 0) {
        flag = 1;
    }

    detector_x = flag === 0 ? detector_x - 1 : detector_x + 1;
}

function draw() {
    r.BeginDrawing()
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(WIDTH / 4, 0, 40, HEIGHT, r.BLUE);
    r.DrawRectangle(detector_x, detector_y, 20, HEIGHT, r.WHITE);

    r.EndDrawing();
}

function teardrop() {
    r.CloseWindow();
}


module.exports = {
    isRunning,
    setup,
    update,
    draw,
    teardrop,
}