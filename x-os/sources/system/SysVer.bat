@echo off
if not exist "%tmp%\X-OS\" ( mkdir "%tmp%\X-OS" )
ver | find "XP" > nul
if %ERRORLEVEL% == 0 goto ver_xp

if not exist %SystemRoot%\system32\systeminfo.exe goto undefined

systeminfo | find "OS Name" >"%TEMP%\osname.txt"
FOR /F "usebackq delims=: tokens=2" %%i IN (%TEMP%\osname.txt) DO set vers=%%i

echo %vers% | find "Windows 7" > nul
if %ERRORLEVEL% == 0 goto ver_7

echo %vers% | find "Windows Vista" > nul
if %ERRORLEVEL% == 0 goto ver_vista

echo %vers% | find "Windows 10" > nul
if %ERRORLEVEL% == 0 goto ver_win10

echo %vers% | find "Windows 11" > nul
if %ERRORLEVEL% == 0 goto ver_win11

systeminfo | find "Nome SO" >"%TEMP%\osname.txt"
FOR /F "usebackq delims=: tokens=2" %%i IN (%TEMP%\osname.txt) DO set vers=%%i

echo %vers% | find "Windows 7" > nul
if %ERRORLEVEL% == 0 goto ver_7

echo %vers% | find "Windows Vista" > nul
if %ERRORLEVEL% == 0 goto ver_vista

echo %vers% | find "Windows 10" > nul
if %ERRORLEVEL% == 0 goto ver_win10

echo %vers% | find "Windows 11" > nul
if %ERRORLEVEL% == 0 goto ver_win11

goto undefined

:ver_win11
echo Windows 11>"%tmp%\X-OS\system.ver"
exit

:ver_win10
echo Windows 10>"%tmp%\X-OS\system.ver"
exit

:ver_7
echo Windows 7>"%tmp%\X-OS\system.ver"
exit

:ver_vista
echo Windows Vista>"%tmp%\X-OS\system.ver"
exit

:ver_xp
echo Windows XP>"%tmp%\X-OS\system.ver"
exit

:undefined
echo unknown>"%tmp%\X-OS\system.ver"
exit