const r = require("raylib");

const windowWidth = 800;
const windowHeight = 700;
const outerWidth = 500;
const outerHeight = 400;
const scaleWidth = 0.8;
const scaleHeight = 0.8;

function center(outer, inner) {
  return (outer - inner) / 2;
}

function scaleRectangle(outer, inner) {
  return outer * inner;
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
    r.BLUE,
  );

  const innerWidth = scaleRectangle(outerWidth, scaleWidth);
  const innerHeight = scaleRectangle(outerHeight, scaleHeight);

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
