const r = require("raylib");

const windowWidth = 800;
const windowHeight = 700;
const outerWidth = 500;
const outerHeight = 400;
const innerWidth = 200;
const innerHeight = 100;

function center(outer, inner) {
  return (outer - inner) / 2;
}

r.InitWindow(windowWidth, windowHeight, "center_rectangle");
r.SetTargetFPS(50);

while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  r.DrawRectangle(
    center(windowWidth, outerWidth),
    center(windowHeight, outerHeight),
    outerWidth,
    outerHeight,
    r.WHITE,
  );

  r.DrawRectangle(
    center(windowWidth, innerWidth),
    center(windowHeight, innerHeight),
    innerWidth,
    innerHeight,
    r.RED,
  );
  r.EndDrawing();
}

r.CloseWindow();
