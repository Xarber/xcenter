:init
@echo off
powershell Get-WinUserLanguageList | findstr LanguageTag >tmp.txt
( set /p "lang=" )<tmp.txt
del tmp.txt
set "lang=%lang:LanguageTag=%"
set "lang=%lang::=%
set "lang=%lang: =%
echo %lang% >"%tmp%\X-OS\syslang.tmp"
goto :EOF