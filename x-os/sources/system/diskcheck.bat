:init
@echo off
cls
echo Remove the desidered USB device and then press a key.
pause >nul
goto usbremoved
:usbremoved
if exist "A:\" ( set "diskA=inserted" ) else ( set "diskA=notinserted" )
if exist "B:\" ( set "diskB=inserted" ) else ( set "diskB=notinserted" )
if exist "C:\" ( set "diskC=inserted" ) else ( set "diskC=notinserted" )
if exist "D:\" ( set "diskD=inserted" ) else ( set "diskD=notinserted" )
if exist "E:\" ( set "diskE=inserted" ) else ( set "diskE=notinserted" )
if exist "F:\" ( set "diskF=inserted" ) else ( set "diskF=notinserted" )
if exist "G:\" ( set "diskG=inserted" ) else ( set "diskG=notinserted" )
if exist "H:\" ( set "diskH=inserted" ) else ( set "diskH=notinserted" )
if exist "I:\" ( set "diskI=inserted" ) else ( set "diskI=notinserted" )
if exist "J:\" ( set "diskJ=inserted" ) else ( set "diskJ=notinserted" )
if exist "K:\" ( set "diskK=inserted" ) else ( set "diskK=notinserted" )
if exist "L:\" ( set "diskL=inserted" ) else ( set "diskL=notinserted" )
if exist "M:\" ( set "diskM=inserted" ) else ( set "diskM=notinserted" )
if exist "N:\" ( set "diskN=inserted" ) else ( set "diskN=notinserted" )
if exist "O:\" ( set "diskO=inserted" ) else ( set "diskO=notinserted" )
if exist "P:\" ( set "diskP=inserted" ) else ( set "diskP=notinserted" )
if exist "Q:\" ( set "diskQ=inserted" ) else ( set "diskQ=notinserted" )
if exist "R:\" ( set "diskR=inserted" ) else ( set "diskR=notinserted" )
if exist "S:\" ( set "diskS=inserted" ) else ( set "diskS=notinserted" )
if exist "T:\" ( set "diskT=inserted" ) else ( set "diskT=notinserted" )
if exist "U:\" ( set "diskU=inserted" ) else ( set "diskU=notinserted" )
if exist "V:\" ( set "diskV=inserted" ) else ( set "diskV=notinserted" )
if exist "W:\" ( set "diskW=inserted" ) else ( set "diskW=notinserted" )
if exist "X:\" ( set "diskX=inserted" ) else ( set "diskX=notinserted" )
if exist "Y:\" ( set "diskY=inserted" ) else ( set "diskY=notinserted" )
if exist "Z:\" ( set "diskZ=inserted" ) else ( set "diskZ=notinserted" )
echo Now insert the USB device and press a key.
pause >nul
goto usbinserted
:usbinserted
if "%diskA%"=="notinserted" if exist "A:\" ( set "disk=A" && set "diskA=inserted" && set "disknum=1" && goto found )
if "%diskB%"=="notinserted" if exist "B:\" ( set "disk=B" && set "diskB=inserted" && set "disknum=2" && goto found )
if "%diskC%"=="notinserted" if exist "C:\" ( set "disk=C" && set "diskC=inserted" && set "disknum=3" && goto found )
if "%diskD%"=="notinserted" if exist "D:\" ( set "disk=D" && set "diskD=inserted" && set "disknum=4" && goto found )
if "%diskE%"=="notinserted" if exist "E:\" ( set "disk=E" && set "diskE=inserted" && set "disknum=5" && goto found )
if "%diskF%"=="notinserted" if exist "F:\" ( set "disk=F" && set "diskF=inserted" && set "disknum=6" && goto found )
if "%diskG%"=="notinserted" if exist "G:\" ( set "disk=G" && set "diskG=inserted" && set "disknum=7" && goto found )
if "%diskH%"=="notinserted" if exist "H:\" ( set "disk=H" && set "diskH=inserted" && set "disknum=8" && goto found )
if "%diskI%"=="notinserted" if exist "I:\" ( set "disk=I" && set "diskI=inserted" && set "disknum=9" && goto found )
if "%diskJ%"=="notinserted" if exist "J:\" ( set "disk=J" && set "diskJ=inserted" && set "disknum=10" && goto found )
if "%diskK%"=="notinserted" if exist "K:\" ( set "disk=K" && set "diskK=inserted" && set "disknum=11" && goto found )
if "%diskL%"=="notinserted" if exist "L:\" ( set "disk=L" && set "diskL=inserted" && set "disknum=12" && goto found )
if "%diskM%"=="notinserted" if exist "M:\" ( set "disk=M" && set "diskM=inserted" && set "disknum=13" && goto found )
if "%diskN%"=="notinserted" if exist "N:\" ( set "disk=N" && set "diskN=inserted" && set "disknum=14" && goto found )
if "%diskO%"=="notinserted" if exist "O:\" ( set "disk=O" && set "diskO=inserted" && set "disknum=15" && goto found )
if "%diskP%"=="notinserted" if exist "P:\" ( set "disk=P" && set "diskP=inserted" && set "disknum=16" && goto found )
if "%diskQ%"=="notinserted" if exist "Q:\" ( set "disk=Q" && set "diskQ=inserted" && set "disknum=17" && goto found )
if "%diskR%"=="notinserted" if exist "R:\" ( set "disk=R" && set "diskR=inserted" && set "disknum=18" && goto found )
if "%diskS%"=="notinserted" if exist "S:\" ( set "disk=S" && set "diskS=inserted" && set "disknum=19" && goto found )
if "%diskT%"=="notinserted" if exist "T:\" ( set "disk=T" && set "diskT=inserted" && set "disknum=20" && goto found )
if "%diskU%"=="notinserted" if exist "U:\" ( set "disk=U" && set "diskU=inserted" && set "disknum=21" && goto found )
if "%diskV%"=="notinserted" if exist "V:\" ( set "disk=V" && set "diskV=inserted" && set "disknum=22" && goto found )
if "%diskW%"=="notinserted" if exist "W:\" ( set "disk=W" && set "diskW=inserted" && set "disknum=23" && goto found )
if "%diskX%"=="notinserted" if exist "X:\" ( set "disk=X" && set "diskX=inserted" && set "disknum=24" && goto found )
if "%diskY%"=="notinserted" if exist "Y:\" ( set "disk=Y" && set "diskY=inserted" && set "disknum=25" && goto found )
if "%diskZ%"=="notinserted" if exist "Z:\" ( set "disk=Z" && set "diskZ=inserted" && set "disknum=26" && goto found )
set "disknum=0" && set "disk=???" && goto notfound
:notfound
echo Unable to find any disk.
pause >nul
goto init
:found
echo The disk was succeffully detected, its the letter %disk%:\.
echo If you inserted multiple devices then the first alphabet letter will be choosed.
echo Press any key to close.
pause >nul
echo %disk%>"%tmp%\X-OS\lastdisk.tmp"
exit /b %disknum%