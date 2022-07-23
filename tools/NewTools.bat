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
set "params=%*"
::SYSTOOLS
:params
    if /i "%1"=="" goto afterparams
    if /i "%1"=="/getowner" goto getownership
    if /i "%1"=="/resetowner" goto resetownership
    if /i "%1"=="/download" goto download
    if /i "%1"=="/activate" goto winactivate
    if /i "%1"=="/defender" goto windefender
    if /i "%1"=="/iso" goto iso
    if /i "%1"=="/optimize" goto optimize
    if /i "%1"=="/plugin" goto plugin
    if /i "%1"=="/update" goto checkupds
    if /i "%1"=="/dbupdate" goto db
    if /i "%1"=="/uninstall" goto remove
    if /i "%1"=="/restore" goto restore
    if /i "%1"=="/restart" goto restart
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
::APPTOOLS

:getownership

:resetownership

:download

:winactivate

:windefender

:iso

:optimize

:plugin

:checkupds

:db

:remove

:restore

:restart
