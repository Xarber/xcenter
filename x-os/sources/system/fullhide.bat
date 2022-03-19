@echo off
if "%1"=="" (exit /b 0)
if "%2"=="hide" (goto hide) else if "%2"=="show" (goto show) else (goto hide)
exit /b 500
:hide
attrib +S +H %1
exit /b 1
:show
attrib -S -H %1
exit /b 2