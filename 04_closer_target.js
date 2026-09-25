const r = require("raylib");

const windowWidth = 800;
const windowHeight = 700;

let sourceX = 300;
const sourceY = 300;

const target1X = 100;
const target1Y = 100;

const target2X = 500;
const target2Y = 500;

const radius = 20;

function closerTarget(sX, sY, t1X, t1Y, t2X, t2Y) {
  return sX - t1X > sX - t2X || sY - t1Y > sY - t2Y ? "t2" : "t1";
}

r.InitWindow(windowWidth, windowHeight, "finding closer target");
r.SetTargetFPS(50);

while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  if (sourceX === windowWidth) sourceX = 0;
  else sourceX += 1;
  r.DrawCircle(sourceX, sourceY, radius, r.BLUE);
  r.DrawCircle(target1X, target1Y, radius, r.RED);
  r.DrawCircle(target2X, target2Y, radius, r.RED);

  if (
    closerTarget(sourceX, sourceY, target1X, target1Y, target2X, target2Y) ===
    "t1"
  ) {
    r.DrawLine(sourceX, sourceY, target1X, target1Y, r.WHITE);
  } else {
    r.DrawLine(sourceX, sourceY, target2X, target2Y, r.WHITE);
  }

  r.EndDrawing();
}

r.CloseWindow();
