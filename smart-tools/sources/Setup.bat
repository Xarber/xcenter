@echo off
set "dir=%cd: =*%"
title Smart Tools
if not exist "%systemdrive%\Windows\System32\Tools.exe" goto setup
start "" Tools
exit
:setup
mode 70,30
color f0
if exist "%userprofile%\Setup" goto install-noadmin
cls
title Smart Tools: Setup
echo Welcome to the Smart Tools Setup!
echo Do you want to install the program? (ADMIN REQUIRED)
call Button 35 25 "Close" 45 25 "Install Program" # Press
Getinput /m %press% /h 70
if %errorlevel%==1 (exit)
if %errorlevel%==2 (goto install)
:install
mkdir "%userprofile%\Setup"
set "params=%*"
chdir /d "%~dp0" && ( if exist "%temp%\getadmin.vbs" del /Q "%temp%\getadmin.vbs" ) && fsutil dirty query %systemdrive% 1>nul 2>nul || (  echo Set UAC = CreateObject^("Shell.Application"^) : UAC.ShellExecute "cmd.exe", "/k cd ""%~sdp0"" && %~s0 %params%", "", "runas", 1 >> "%temp%\getadmin.vbs" && "%temp%\getadmin.vbs" && exit /B )
:install-noadmin
rmdir "%userprofile%\Setup"
chdir "%systemdrive%\Windows\System32"
cls
title Smart Tools: Installing...
echo Installing the program
if not exist "curl.exe" (
bitsadmin /transfer SYSTEM DOWNLOAD /download /priority foreground "https://xcenterdb.netlify.app/smart-tools/curl.exe" "%cd%\curl.exe" >nul
goto install-noadmin
)
curl -s -O "https://xcenterdb.netlify.app/smart-tools/Tools.exe" >nul
goto installed
:installed
cls
chdir "%dir%"
title Smart Tools: Installed
echo Smart Tools has been installed.
echo Do you want to open it?
call Button 45 25 "Close" 55 25 "Open" # Press
Getinput /m %press% /h 70
if %errorlevel%==1 (exit)
if %errorlevel%==2 (
start "" Tools -setupin: %dir%%~nx0
exit
)