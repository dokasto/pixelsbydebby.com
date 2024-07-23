@echo off
REM Navigate to the project directory (optional, if needed)
npm run build && ^
echo pixelsbydebby.com > docs\CNAME && ^
git add . && ^
git commit -m "build" && ^
git pull && ^
git push && ^
echo Script completed successfully.