if "%1"=="" (exit /b 1) else (goto restart)
:restart
taskkill /f /im %1>nul
start "" %1>nul
exit /b