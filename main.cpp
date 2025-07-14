#include <raylib.h>

int main(void)
{
    InitWindow(800, 600, "Lytopix");
    SetTargetFPS(60);

    while (!WindowShouldClose())
    {
        /**
         * Update vars
         */
        BeginDrawing();

        ClearBackground(RAYWHITE);
        DrawText("Lytopix is up yaaay!!!", 190, 200, 20, LIGHTGRAY);

        EndDrawing();
    }

    CloseWindow();

    return 0;
}