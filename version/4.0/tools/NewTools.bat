:: __  __    _    ____  ____  _____ ____  
:: \ \/ /   / \  |  _ \| __ )| ____|  _ \ 
::  \  /   / _ \ | |_) |  _ \|  _| | |_) |
::  /  \  / ___ \|  _ <| |_) | |___|  _ < 
:: /_/\_\/_/   \_\_| \_\____/|_____|_| \_\       
::
::USEFUL COMMANDS TO REMEMBER:
::powershell -Command Write-Host "TEXT" -foreground "COLOR"
::chdir /d "%~dp0" && ( if exist "%temp%\getadmin.vbs" del /Q "%temp%\getadmin.vbs" ) && fsutil dirty query %systemdrive% 1>nul 2>nul || (  echo Set UAC = CreateObject^("Shell.Application"^) : UAC.ShellExecute "cmd.exe", "/k cd ""%~sdp0"" && %~s0 %params%", "", "runas", 1 >> "%temp%\getadmin.vbs" && "%temp%\getadmin.vbs" && exit /B )                            
@echo off
title Tools Run
set "programver=11.0.0.0"
set "params=%*"
::SYSTOOLS
set "admin=true"
:params
    if /i "%1"=="" goto afterparams
    if /i "%1"=="/offline" set "mode=offline"
    if /i "%1"=="/noadmin" set "admin=false"
    if /i "%1"=="/downloadtype" set "downloadtype=%2"
    if /i "%1"=="/getowner" set "tool=getownership"
    if /i "%1"=="/resetowner" set "tool=resetownership"
    if /i "%1"=="/download" set "tool=download"
    if /i "%1"=="/activate" set "tool=winactivate"
    if /i "%1"=="/defender" set "tool=windefender"
    if /i "%1"=="/iso" set "tool=iso"
    if /i "%1"=="/optimize" set "tool=optimize"
    if /i "%1"=="/plugin" set "tool=plugin"
    if /i "%1"=="/update" set "tool=checkupds"
    if /i "%1"=="/dbupdate" set "tool=db"
    if /i "%1"=="/uninstall" set "tool=remove"
    if /i "%1"=="/restore" set "tool=restore"
    if /i "%1"=="/restart" set "tool=restart"
    shift
    goto params
:afterparams
set "download=bitsadmin /transfer SmartToolsDownload /download /priority foreground"
set "smarttools=%cd%"
set "programdir=%programfiles%\com.xcenter.apps\smart-tools"
chdir "%programfiles%"
if not exist "%cd%\com.xcenter.apps\taskchecker" mkdir "%cd%\com.xcenter.apps\taskchecker"
if not exist "%cd%\com.xcenter.apps\smart-tools" mkdir "%cd%\com.xcenter.apps\smart-tools"
chdir "%programdir%"
if not exist "%cd%\Temp" mkdir "%cd%\Temp"
if not exist "%cd%\assets\tools" mkdir "%cd%\assets\tools"
if not exist "%cd%\Functions\Plugins" mkdir "%cd%\Functions\Plugins"
if not exist "%cd%\Functions\downloadfunction-Customs" mkdir "%cd%\Functions\downloadfunction-Customs"
if not exist "%cd%\Settings" mkdir "%cd%\Settings"
chdir %smarttools%
set "programname=%~nx0"
set "program=SMARTTOOLS"
if "%admin%"=="true" (
    set "params=%*"
    chdir /d "%~dp0" && ( if exist "%temp%\getadmin.vbs" del /Q "%temp%\getadmin.vbs" ) && fsutil dirty query %systemdrive% 1>nul 2>nul || (  echo Set UAC = CreateObject^("Shell.Application"^) : UAC.ShellExecute "cmd.exe", "/k cd ""%~sdp0"" && %~s0 %params%", "", "runas", 1 >> "%temp%\getadmin.vbs" && "%temp%\getadmin.vbs" && exit /B )
)
net session >nul 2>&1
if %errorLevel% == 0 (
    set "%admin%=true"
) else (
    set "%admin%=false"
)
goto %tool%
::APPTOOLS

:getownership
if "%admin%"=="false" exit /b 2
takeown /F %2
exit /b 1

:resetownership
if "%admin%"=="false" exit /b 2
icacls %2 /grant Administrators:F
icacls %2 /setowner "NT SERVICE\TrustedInstaller" /C 
exit /b 1

:download
%download% "%2" "%userprofile%\Downloads\"
exit /b 1

:winactivate
if "%admin%"=="false" exit /b 2
set "productkey=%2"
if "%2"=="HOME" set "productkey=TX9XD-98N7V-6WMQ6-BX7FG-H8Q99"
if "%2"=="HOMEN" set "productkey=3KHY7-WNT83-DGQKR-F7HPR-844BM"
if "%2"=="PRO" set "productkey=W269N-WFGWX-YVC9B-4J6C9-T83GX"
if "%2"=="PRON" set "productkey=MH37W-N47XK-V7XM9-C7227-GCQG9"
if "%2"=="EDU" set "productkey=NW6C2-QMPVW-D7KKK-3GKT6-VCFB2"
if "%2"=="ENTER" set "productkey=NPPR9-FWDCX-D2C8J-H872K-2YT43"
::powershell -command "(Get-WmiObject -query ‘select * from SoftwareLicensingService’).OA3xOriginalProductKey"
slmgr.vbs /ipk %productkey%
slmgr.vbs /skms kms.lotro.cc
slmgr.vbs /ato
exit /b 1

:windefender
if "%admin%"=="false" exit /b 2
set "windef=1"
if "%2"=="enable" set "windef=0"
if "%2"=="disable" set "windef=1"
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows Defender" /v "DisableAntiSpyware" /t "REG_DWORD" /d "%windef%" /f >nul
exit /b 1

:iso


:optimize
if "%admin%"=="false" exit /b 2
if "%2"=="" (

)
if "%2"=="" (

)
if "%2"=="" (

)
if "%2"=="" (

)
exit /b 1
:plugin
if "%admin%"=="false" exit /b 2


:checkupds


:db


:remove


:restore


:restart
