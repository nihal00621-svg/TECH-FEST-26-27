@echo off
cd /d "%~dp0"
echo ========================================================
echo Pushing Tech Fest website to GitHub repository...
echo ========================================================
git push -u origin main
echo.
pause
