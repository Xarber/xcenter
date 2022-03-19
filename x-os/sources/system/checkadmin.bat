@echo off
REG QUERY HKU\S-1-5-19\Environment >NUL 2>&1
IF %ERRORLEVEL% EQU 0 goto :ok
exit /b 0
:ok
exit /b 1