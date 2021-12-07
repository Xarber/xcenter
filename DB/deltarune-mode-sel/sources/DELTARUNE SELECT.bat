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
::ZQ05rAF9IAHYFVzEqQIUDTdgbTa3Ek76NZAwzcvPjw==
::eg0/rx1wNQPfEVWB+kM9LVsJDCCnEF+bNIAyzYg=
::fBEirQZwNQPfEVWB+kM9LVsJDACHMH+7FKAS7abo6uaCoVl9
::cRolqwZ3JBvQF1fEqQJQ
::dhA7uBVwLU+EWGHJ10c+PB5GLA==
::YQ03rBFzNR3SWATElA==
::dhAmsQZ3MwfNWATEphJieVtsTRaAOXna
::ZQ0/vhVqMQ3MEVWAtB9weVUEAlTMbAs=
::Zg8zqx1/OA3MEVWAtB9weVUEAlTMbAs=
::dhA7pRFwIByZRRmt8ElwIBIUFk3i
::Zh4grVQjdCyDJGyX8VAjFB5aXg2BA3muAuZF+vrHwOSChl8UQucDXIrI0aCBMNwj+ErgYJU532xTjNIwNFZ7exy/ax0IjUx+smGJI8aOpgHkB0WG4k59CGB4u0f1oB8aUuZGv4Mw9gyb33mxmr0VsQ==
::YB416Ek+ZG8=
::
::
::978f952a14a936cc963da21a135fa983
:start
@echo off
title DELTARUNE
set "programdir=%programfiles%\com.xcenter.apps\deltarune-mode-sel"
(
set /p "location="
)<"%programdir%\INFORMATIONS\DELTAlocation.info"
if not exist "%location%\MULTI\DELTARUNE.exe" goto fail
if not exist "%location%\SINGLE\DELTARUNE.exe" goto fail
goto deltarune-ready
:fail
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
echo                                                 DELTARUNE WAS NOT FOUND.
echo                           THE GAME DIRECTORY NEEDS TO HAVE 'SINGLE' AND 'MULTI' GAME FOLDERS.
echo                                            PLEASE INSTALL AGAIN THE APP.
pause >nul
exit
:deltarune-ready
set "programdir=%programfiles%\com.xcenter.apps\deltarune-mode-sel"
mode 120, 30
set "seltxt=WHICH MODE DO YOU WANT TO PLAY?"
set "settxt=YOUR SELECTION"
goto select
:select
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
echo                                               %seltxt%
echo                                                      1 - MULTIPLAYER
echo                                                      2 - SINGLEPLAYER
echo                                                      3 - QUIT
set /p "mode="
if "%mode%"=="1" goto multi
if "%mode%"=="2" goto single
if "%mode%"=="3" exit
set "seltxt=PLEASE, SELECT A VALID OPTION."
goto select
:multi
start "DELTARUNE Multiplayer Mode" "%location%\MULTI\DELTARUNE.exe"
exit
:single
start "DELTARUNE Singleplayer Mode" "%location%\SINGLE\DELTARUNE.exe"
exit