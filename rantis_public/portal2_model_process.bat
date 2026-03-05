@echo off
xcopy "models\*.vtx" "models_vt2\*.vt2" /s
for /r %%a in (*.vtx) do ren "%%a" "%%~na.dx90.vtx"
for /r %%b in (*.vt2) do ren "%%b" "%%~nb.dx80.vtx"
xcopy "models_vt2" "models" /s
rmdir "models_vt2" /s /q