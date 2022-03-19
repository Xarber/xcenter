@echo off
title Smart Tools (SSFST)
set "programdir=%programfiles%\com.xcenter.apps\smart-tools\"
if not "%~n0"=="SSFST" (
set "errorcode=7h90b34P"
set "log=        Program: %~n0, must be SSFST. ErrorCode: 7h90b34P"
goto error
) else ( goto ready )
:error
cls
mode 67, 16
echo ___________________________________________________________________
echo                   _____ ____  ____   ___  ____  
echo                  ^| ____^|  _ \^|  _ \ / _ \^|  _ \ 
echo                  ^|  _^| ^| ^|_) ^| ^|_) ^| ^| ^| ^| ^|_) ^|
echo                  ^| ^|___^|  _ ^<^|  _ ^<^| ^|_^| ^|  _ ^< 
echo                  ^|_____^|_^| \_\_^| \_\\___/^|_^| \_\
echo ___________________________________________________________________
echo           An error occurred. Try restarting second screen.
echo                Still not able to use the app? Go On:
echo     Advanced^>continue^>Fix Second Screen Issues^>'%errorcode%'
echo  If after doing this (using smart tools) you're still not able to-
echo         use the second screen, insert '7bH4905D' instead.
echo           The program will close itself in 30 seconds.
echo                               LOG:
echo %log%
timeout /t 30 /nobreak >nul
exit
:ready
if not exist "%programdir%\secondscreen.scr" (
set "errorcode=9F0bH28g"
set "log=    Program not started with Smart Tools. ErrorCode: 9F0bH28g"
goto error
)
chdir "%programdir%"
(
set /p "authkey="
set /p "userpassword="
set /p "passwordlocked="
set /p "limit="
set /p "downmode="
set /p "color="
set /p "UI="
set /p "keepopen="
)<"%cd%\Settings\Options.cfg"
color %color%
goto loop
:loop
(
set /p "scrtxt="
)<"secondscreen.scr"
if "%scrtxt%"=="offline" exit
cls
type secondscreen.scr
goto loop