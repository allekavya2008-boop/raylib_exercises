const r = require("raylib");

const WIDTH = 800;
const HEIGHT = 900;

let x1 = WIDTH / 2;
const y1 = HEIGHT / 4;

let x2 = WIDTH * 0.75;
const y2 = HEIGHT / 4;

const r1 = 60;
const r2 = 70;

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Intersecting circles");
    r.SetTargetFPS(50);
}

function sqr(x) {
    return x * x;
}

function distance(x1, y1, x2, y2) {
    const squar = sqr(x2 - x1) + sqr(y2 - y1);
    return squar ** 0.5;
}

function isIntersecting(x1, y1, r1, x2, y2, r2) {
    dis = distance(x1, y1, x2, y2);
    if (dis < (r1 + r2)) return r.RED;
    return r.BLACK;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    const circleColor = isIntersecting(x1, y1, r1, x2, y2, r2);

    x1 = x1 === WIDTH ? WIDTH / 2 : x1 + 1;
    x2 = x2 === 0 ? WIDTH * 0.75 : x2 - 1;

    r.DrawCircle(x1, y1, r1, circleColor);
    r.DrawCircle(x2, y2, r2, circleColor);

    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        // update();
        draw();
    }
}

function main() {
    setup();
    loop();
}
main();

