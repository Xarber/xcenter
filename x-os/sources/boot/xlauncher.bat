@echo off
mode 120, 30
if "%1"=="" ( exit /b ) else ( goto argsget )
:argsget
title X-Launcher - Getting informations...
color f0
if "%1"=="" goto continue
if "%1"=="-f" set "boot=%2"
shift
goto argsget
:continue
cd..
chdir "%cd%\apps\"
chdir "%boot:boot.xlaunch=%"
if not exist "boot.xlaunch" ( exit /b )
title X-Launcher - Booting...
echo ^\^/   ^| X-Launcher
echo ^/^\   ^| 1.0
echo -----^/
echo.
echo.
echo.
echo.
echo.
echo.
echo                     Getting informations for boot...
tar -xf "boot.xlaunch" >nul
chdir %boot:boot.xlaunch=%
del /Q /S "%cd%\boot.xlaunch"
(
set /p "path="
set /p "title="
set /p "icon="
set /p "desc="
set /p "ver="
)<"data.info"
cls
if not "%icon%"=="none" ( ..\..\system\cmdbkg ..\apps\%boot:boot.xlaunch=%\%icon% ) 
echo ^\^/   ^|App v%ver%
echo ^/^\   ^|Launching...
echo -----^/
echo.
echo.
echo.
echo.
echo.
echo.
echo                          %title%: %desc%
timeout /t 10 /nobreak >nul
..\..\system\cmdbkg
call %path%
cls
echo ^\^/   ^| X-Launcher
echo ^/^\   ^| 1.0
echo -----^/
echo.
echo.
echo.
echo.
echo.
echo.
echo                               Cleaning up...
tar -cf boot.xlaunch *.* >nul
cd..
move "%boot%" "%cd%" >nul
chdir "%boot:boot.xlaunch=%" >nul
del /Q /S *.*
cd..
move "boot.xlaunch" "%boot:boot.xlaunch=%" >nul
exit /b