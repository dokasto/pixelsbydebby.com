@echo off
REM Navigate to the project directory (optional, if needed)
npm run build && ^
git add . && ^
git commit -m "build" && ^
git pull && ^
git push && ^
echo Script completed successfully.