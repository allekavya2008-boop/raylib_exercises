const r = require("raylib");

r.InitWindow(800, 800, "MY first raylib code");
r.SetTargetFPS(50);

while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  r.DrawRectangle(30, 30, 200, 100, r.WHITE);

  r.EndDrawing();
}

r.CloseWindow();
