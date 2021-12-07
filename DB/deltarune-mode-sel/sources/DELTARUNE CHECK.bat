::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCyDJGyX8VAjFB5aXg2BA3muAuZF+vrHwOSChl8UQucDXIrI0aCBMNwj+ErgYJU532xTjNIwNFZ7exy/ax0IjUx+smGJI8aOpgHkB0WG4k59CGB4u3DfmTk4ZcBUvuYv5wGMyWPa0awT3hg=
::YAwzuBVtJxjWCl3EqQJgSA==
::ZR4luwNxJguZRRnk
::Yhs/ulQjdF+5
::cxAkpRVqdFKZSDk=
::cBs/ulQjdF65
::ZR41oxFsdFKZSDk=
::eBoioBt6dFKZSTk=
::cRo6pxp7LAbNWATEpSI=
::egkzugNsPRvcWATEpSI=
::dAsiuh18IRvcCxnZtBJQ
::cRYluBh/LU+EWAnk
::YxY4rhs+aU+IeA==
::cxY6rQJ7JhzQF1fEqQJhZksaHErSXA==
::ZQ05rAF9IBncCkqN+0xwdVsFAlTMbCXqZg==
::ZQ05rAF9IAHYFVzEqQIUDTdgbTa3Ek76JZ05y8Ob
::eg0/rx1wNQPfEVWB+kM9LVsJDCCnEF+bNIAyzYg=
::fBEirQZwNQPfEVWB+kM9LVsJDACHMH+7FKAS7ab45++EqS0=
::cRolqwZ3JBvQF1fEqQJQ
::dhA7uBVwLU+EWGHJ10c+PB5GLA==
::YQ03rBFzNR3SWATElA==
::dhAmsQZ3MwfNWATEphJieVtsTRaAOXna
::ZQ0/vhVqMQ3MEVWAtB9weVUEAlTMbAs=
::Zg8zqx1/OA3MEVWAtB9weVUEAlTMbAs=
::dhA7pRFwIByZRRmt8ElwIBIUFk3i
::Zh4grVQjdCyDJGyX8VAjFB5aXg2BA3muAuZF+vrHwOSChl8UQucDXIrI0aCBMNwj+ErgYJU532xTjNIwNFZ7exy/ax0IjUx+smGJI8aOpgHkB0WG4k59CGB4u0f1oB8aUuZGv4Mu/ASbskjnmsU=
::YB416Ek+ZG8=
::
::
::978f952a14a936cc963da21a135fa983
:start
@echo off
title DELTARUNE
set "params=%*"
chdir /d "%~dp0" && ( if exist "%temp%\getadmin.vbs" del /Q "%temp%\getadmin.vbs" ) && fsutil dirty query %systemdrive% 1>nul 2>nul || (  echo Set UAC = CreateObject^("Shell.Application"^) : UAC.ShellExecute "cmd.exe", "/k cd ""%~sdp0"" && %~s0 %params%", "", "runas", 1 >> "%temp%\getadmin.vbs" && "%temp%\getadmin.vbs" && exit /B )
set "programdir=%programfiles%\com.xcenter.apps\deltarune-mode-sel"
if not exist "%programdir%\INFORMATIONS\" ( mkdir "%programdir%\INFORMATIONS" )
if not exist "%programdir%\INFORMATIONS\DELTAlocation.info" goto nolocfile
(
set /p "location="
)<"%programdir%\INFORMATIONS\DELTAlocation.info"
goto locset
:nolocfile
set "location=none"
goto locset
:locset
chdir "%programfiles%\com.xcenter.apps"
attrib +H /S /D
chdir "%programfiles%"
attrib +H com.xcenter.apps
chdir "%programdir%"
mode 120, 30
if exist "%location%\DELTARUNE SELECT.exe" ( goto installed ) else ( goto notinstalled )
exit
:notinstalled
cls
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo                                             MISSING FILES. DOWNLOAD THEM?
echo                                                        1. YES
echo                                                        2. NO
set /p "installsel="
if "%installsel%"=="1" goto install
if "%installsel%"=="2" exit
goto notinstalled
:delta-download
start "DELTADOWNLOAD" "https://tobyfox.itch.io/deltarune#download"
goto install-noloccheck
:install-singleok
cls
if exist "%location%\MULTI" goto downexe
goto install
:install
cls
if "%location%"=="none" goto install-noloccheck
if "%location%"=="INSTALL" goto install-noloccheck
if "%location%"=="install" goto install-noloccheck
goto install-locset
:install-noloccheck
cls
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo                             WHERE IS THE GAME DIRECTORY? TYPE 'INSTALL' TO DOWNLOAD THE GAME.
echo                                     THE FOLDER SHOULD CONTAIN ONE OF THEESE FOLDERS:
echo                                           "DELTARUNE Chapter 1&2 Data" FOLDER
echo                                                            OR
echo                                                "MULTI" + "SINGLE" FOLDERS
echo                                        EXAMPLE: C:\Program Files (x86)\DELTARUNE
echo                                              TYPE 'EXIT' TO CLOSE THE APP.
set /p "location="
if "%location%"=="INSTALL" goto delta-download
if "%location%"=="install" goto delta-download
if "%location%"=="none" goto install
if "%location%"=="EXIT" exit
if "%location%"=="exit" exit
if exist "%location%\DELTARUNE Chapter 1&2 Data" goto install-locset
if exist "%location%\SINGLE\DELTARUNE.exe" goto install-loccheck-singleok
goto install-noloccheck
:install-loccheck-singleok
if exist "%location%\MULTI\DELTARUNE.exe" goto install-locset
goto install-noloccheck
:install-locset
rmdir /Q /S "%programdir%\INFORMATIONS"
mkdir "%programdir%\INFORMATIONS"
echo %location%>"%programdir%\INFORMATIONS\DELTAlocation.info"
cls
if exist "%location%\SINGLE" goto install-singleok
goto install-nocheck
:install-nocheck
cls
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo                                          DUPLICATE "DELTARUNE Chapter 1&2 Data";
echo                                              RENAME SINGLEPLAYER TO "SINGLE";
echo                                              RENAME MULTIPLAYER  TO "MULTI";
echo                                   PRESS ANY KEY TO OPEN THE FOLDER THEN DO WHAT ASKED.
pause >nul
cls
start "DELTARUNE" "%location%"
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo                                      PRESS ANY KEY WHEN YOU FINISHED RENAMING FOLDERS.
pause >nul
if not exist "%location%\MULTI" goto install
if not exist "%location%\SINGLE" goto install
cls
goto downexe
:downexe
cls
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo                                          HAVE YOU GOT THE MULTIPLAYER DATA.WIN?
echo                                                          1. YES
echo                                                          2. NO
echo                                                          3. EXIT
set /p "dataok="
if "%dataok%"=="1" goto downexe-ok
if "%dataok%"=="2" goto downexe-no
if "%dataok%"=="3" exit
goto downexe
:downexe-no
cls
start "MEGA" "https://mega.nz/file/y4RgDbJa#MyvqI-ln_6Htf3PFBdwGmJFQikJfX673-zeypN6O6qY"
goto downexe-rename
:downexe-rename
cls
start "MULTI" "%location%\MULTI"
cls
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo                         DOWNLOAD THE FILE, RENAME IT TO "data.win" AND MOVE IT TO "MULTI" FOLDER.
echo                                                PRESS ANY KEY WHEN DONE.
pause >nul
if exist "%location%\MULTI\data-2player.win" goto downexe-rename
if not exist "%location%\MULTI\data.win" goto downexe-no
goto downexe-ok
:downexe-ok
cls
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo                                                  DOWNLOADING FILES...
bitsadmin /transfer Download /download /priority foreground "https://xcenter.netlify.app/DB/deltarune-mode-sel/DELTARUNE SELECT.exe" "%location%\DELTARUNE SELECT.exe" >nul
timeout /T 3 >nul
cls
if exist "%location%\DELTARUNE SELECT.exe" ( goto installed ) else ( goto downexe )
:installed
if not exist "%location%\MULTI\DELTARUNE.exe" goto notinstalled
if not exist "%location%\SINGLE\DELTARUNE.exe" goto notinstalled
start "DELTARUNE" "%location%\DELTARUNE SELECT.exe"
exit