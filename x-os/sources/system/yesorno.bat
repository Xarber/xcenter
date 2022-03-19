@echo off
Call :YesNoBox "Are you sure you want to do that?"
if "%YesNo%"=="7" (
Call :MessageBox "You answered NO"
pause
)
call :MessageBox "You answered YES"
pause
:YesNoBox
REM returns 6 = Yes, 7 = No. Type=4 = Yes/No
set YesNo=
set MsgType=4
set heading=%~2
set message=%~1
echo wscript.echo msgbox(WScript.Arguments(0),%MsgType%,WScript.Arguments(1)) >"%temp%\input.vbs"
for /f "tokens=* delims=" %%a in ('cscript //nologo "%temp%\input.vbs" "%message%" "%heading%"') do set YesNo=%%a
exit /b

:MessageBox
set heading=%~2
set message=%~1
msg * "%1"
exit /b