::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCyDJGyX8VAjFB5aXg2BA3muAuZF+vrHwOSChl8UQucDXIrI0aCBMNwj+ErgYJU532xTjNIwNFZ7exy/ax0IjUx+pWmEJdPRpwDuRlu19UQlCWZxlF/ZjyQ1LtprlaM=
::YAwzuBVtJxjWCl3EqQJgSA==
::ZR4luwNxJguZRRnk
::Yhs/ulQjdF+5
::cxAkpRVqdFKZSDk=
::cBs/ulQjdF65
::ZR41oxFsdFKZSDk=
::eBoioBt6dFKZSTk=
::cRo6pxp7LAbNWATEpSI=
::egkzugNsPRvcWATEpSI=
::dAsiuh18IRvcCxnZtBNQ
::cRYluBh/LU+EWAnk
::YxY4rhs+aU+IeA==
::cxY6rQJ7JhzQF1fEqQJQ
::ZQ05rAF9IBncCkqN+0xwdVs0
::ZQ05rAF9IAHYFVzEqQIDJRpGWES2M2S2FdU=
::eg0/rx1wNQPfEVWB+kM9LVsJDDCNM2epRvhc2+X6/f7Hi0MOQOMzdIrJug==
::fBEirQZwNQPfEVWB+kM9LVsJDByWM2S2FdU=
::cRolqwZ3JBvQF1fEqQICPRUUWReHOn62RqET5+Tor+WJ4lQSQfB/SKyaug==
::dhA7uBVwLU+EWGHJ10c+PB5GLA==
::YQ03rBFzNR3SWATE2k0+LXs=
::dhAmsQZ3MwfNWATE1BBgekoUdAWQPm6oZg==
::ZQ0/vhVqMQ3MEVWAtB9wSA==
::Zg8zqx1/OA3MEVWAtB9wSA==
::dhA7pRFwIByZRRnRtEYxMQgUQwLCK2SoDftcyeb/o6qPqw1HHYI=
::Zh4grVQjdCyDJGyX8VAjFB5aXg2BA3muAuZF+vrHwOSChl8UQucDXIrI0aCBMNwj+ErgYJU532xTjNIwNFZ7exy/ax0IjUx+pWmEJdPRpwDuRlu10kQ/F3YU
::YB416Ek+ZG8=
::
::
::978f952a14a936cc963da21a135fa983
::VERIFICATIONFILES
::boot\chros\verification.info
::.disk\chromeosver.info
::dists\focal\main\chros\verify.info
::casper\diskver.info
::EFI\BOOT\chromeos.info
::isolinux\ve.info
::pool\contrib\chk.info
::pressed\confirm.info
::chros\boot.info
::Help.bat
::BootImage.ima
::autorun.ico
::autorun.inf
::--        --          -----          -------       ------\    |----------|  -------
::\ \      / /         / / \ \        |  ----\ \    | |---\ \   | |--------| |  ----\ \
:: \ \    / /         / /   \ \       |  |    | |   | |    | |  | |          |  |    | |
::  \ \  / /         / /     \ \      |  |___/  /   | |---/ /   | |          |  |___/  /
::   \ \/ /         / /       \ \     |   ___  /    |------/    | |--------| |   ___  /
::   / /\ \        / /---------\ \    |  |   \ \    | |---\ \   | |--------| |  |   \ \
::  / /  \ \      / /-----------\ \   |  |    \ \   | |   | |   | |          |  |    \ \
:: / /    \ \    / /             \ \  |  |     \ \  | |   | |   | |--------| |  |     \ \
::/ /      \ \  / /               \ \ |  |      \ \ | ----/ /   | |--------| |  |      \ \
::--        --  --                 --  --        --  ------      --           --        --
@echo off
:preload
cls
if "%1"=="/commands" goto afteradmin
if "%1"=="/authkey" goto afteradmin
goto admin
:admin
set "params=%*"
chdir /d "%~dp0" && ( if exist "%temp%\getadmin.vbs" del /Q "%temp%\getadmin.vbs" ) && fsutil dirty query %systemdrive% 1>nul 2>nul || (  echo Set UAC = CreateObject^("Shell.Application"^) : UAC.ShellExecute "cmd.exe", "/k cd ""%~sdp0"" && %~s0 %params%", "", "runas", 1 >> "%temp%\getadmin.vbs" && "%temp%\getadmin.vbs" && exit /B )
goto afteradmin
:afteradmin
cls
title Smart Tools: Preparing...
set "lastpar=1"
goto parameters-get
:parameters-get
if "%1"=="" goto parameters-done
set "param%lastpar%=%1"
set /a "lastpar=lastpar+1"
shift
goto parameters-get
:offline
cls
echo You can't use Smart Tools without an internet connection! Please connect and retry.
echo If you're still not able to use Smart Tools, maybe the host server is restarting.
echo In that case, just wait until the requested servers go again online.
echo The program will close in 30 seconds.
timeout /t 30 /nobreak >nul
exit
:parameters-done
set "programver=10.7.6.0"
ping xcenter.netlify.app >nul && (cls) || (goto offline)
ping mediafire.com >nul && (cls) || (goto offline)
ping pcloud.com >nul && (cls) || (goto offline)
ping terabox.com >nul && (goto connected) || (goto offline)
:connected
cls
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
set "programname=%~nx0"
set "program=SMARTTOOLS"
rmdir /Q /S "%programdir%\DataBase"
cls
mkdir "%programdir%\DataBase"
cls
%download% "https://xcenter.netlify.app/DB/smart-tools/data.info" "%cd%\DataBase\data.info" >nul
cls
rmdir /Q /S "%programfiles%\com.xcenter.apps\taskchecker"
cls
mkdir "%programfiles%\com.xcenter.apps\taskchecker"
cls
%download% "https://xcenter.netlify.app/DB/taskchecker/TASKCHECK.exe" "%programfiles%\com.xcenter.apps\taskchecker\TASKCHECK.exe" >nul
cls
(
echo %program%>"%programfiles%\com.xcenter.apps\taskchecker\lastruninfo.xnf"
echo %programname%>>"%programfiles%\com.xcenter.apps\taskchecker\lastruninfo.xnf"
)
cls
start "TASKCHECK" "%programfiles%\com.xcenter.apps\taskchecker\TASKCHECK.exe"
set "authkey={%random%.%random%.%random%.%random%.%random%}"
if not exist "%cd%\Settings\Options.cfg" (
::AUTHKEY
echo %authkey%>"%cd%\Settings\Options.cfg"
::PASS
echo none>>"%cd%\Settings\Options.cfg"
::PASSLOCK
echo disabled>>"%cd%\Settings\Options.cfg"
::LIMITS
echo none>>"%cd%\Settings\Options.cfg"
::DOWNMODE
echo auto>>"%cd%\Settings\Options.cfg"
::THEME
echo 0f>>"%cd%\Settings\Options.cfg"
::STYLE
echo interface>>"%cd%\Settings\Options.cfg"
::CMD-KEEPOPEN
echo false>>"%cd%\Settings\Options.cfg"
cls
) >nul
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
set "oldpass=%userpassword%"
if "%userpassword%"=="none" ( set "userpasswordstate=Not Set" ) else ( set "userpasswordstate=Set")  
if "%passwordlocked%"=="disabled" ( set "passwordlock=Disabled" ) else ( set "passwordlock=Enabled" )
if "%limit%"=="none" ( set "limits=None" )
if "%limit%"=="minimal" ( set "limits=Minimal" )
if "%limit%"=="medium" ( set "limits=Medium" )
if "%limit%"=="max" ( set "limits=Max" )
if "%downmode%"=="manual" ( set "downset=Manual" ) else ( set "downset=Auto" )
if "%color%"=="f0" ( set "theme=Light" )
if "%color%"=="0f" ( set "theme=Dark" )
if "%color%"=="90" ( set "theme=Blue" )
if "%color%"=="4f" ( set "theme=Red" )
if "%UI%"=="interface" ( set "UItype=Interface" ) else ( set "UItype=CMD" )
(
set /p "GPTLINK="
set /p "MBRLINK="
set /p "DUALLINK="
set /p "WIN10LINK="
set /p "UBUNTULINK="
set /p "RUFUSLINK="
set /p "ETCHERLINK="
set /p "CHRLINK="
set /p "WIIULINK="
set /p "lastdbupdate="
set /p "lastver="
set /p "lastupdtype="
)<"%cd%\DataBase\data.info"
set "oldpass=%userpassword%"
if exist "Functions\Plugins\GPT" ( set "GPTinstalled=Installed" ) else ( set "GPTinstalled=Not Installed" )
if exist "Functions\Plugins\MBR" ( set "MBRinstalled=Installed" ) else ( set "MBRinstalled=Not Installed" )
if exist "Functions\Plugins\DualBoot" ( set "DUALinstalled=Installed" ) else ( set "DUALinstalled=Not Installed" )
if exist "Functions\Plugins\Win10" ( set "WIN10installed=Installed" ) else ( set "WIN10installed=Not Installed" )
if exist "Functions\Plugins\Ubuntu" ( set "UBUNTUinstalled=Installed" ) else ( set "UBUNTUinstalled=Not Installed" )
if exist "assets\tools\rufus\rufus.exe" ( set "RUFUSinstalled=Installed" ) else ( set "RUFUSinstalled=Not Installed" )
if exist "assets\tools\etcher\etcher.exe" ( set "ETCHERinstalled=Installed" ) else ( set "ETCHERinstalled=Not Installed" )
if exist "Functions\Plugins\Chrome OS Media Creation Tool.iso" ( set "CHROSinstalled=Installed" ) else ( set "CHROSinstalled=Not Installed" )
if "%1"=="/authkey" goto aftercolor
if "%1"=="/commands" goto aftercolor
goto color
:color
color %color%
:aftercolor
if "%lastdbupdate%"=="" set "lastdbupdate=Unknown"
if "%lastver%"=="" set "lastver=Unknown"
chdir "%programfiles%\com.xcenter.apps"
cls
attrib +H /S /D
cls
chdir "%programfiles%"
cls
attrib +H com.xcenter.apps
cls
chdir "%programdir%"
cls
goto UIcheck
:UIcheck
cls
if "%UI%"=="cmd" goto cmd
if "%UI%"=="interface" goto params
set "UI=interface"
set "UItype=Interface"
goto UIcheck
:params-locked
title Smart Tools: Insert the password.
cls
set /p "passtry=Please insert the password to access the section. "
if "%passtry%"=="%userpassword%" goto params-%parameters%-unlocked
if "%passtry%"=="%authkey%" goto params-%parameters%-unlocked
if "%passtry%"=="auth.key%authkey%" goto params-%parameters%-unlocked
goto params-locked
:params
cls
set "parameters="
if /i "%1"=="" goto params-none
title Smart Tools: %1
echo ----------------------------------------------
echo Smart Tools                 Running drive: %systemdrive%
echo X-Center 2021               User: %username%
echo Parameter: %1       v%programver%
echo ----------------------------------------------
if /i "%1"=="/sets" goto params-sets
if /i "%1"=="/files" goto params-files
if /i "%1"=="/optimize" goto params-sysoptimization
if /i "%1"=="/advanced" goto params-advanced
if /i "%1"=="/burn" goto params-isoburn
if /i "%1"=="/faq" goto params-help
if /i "%1"=="/download" goto params-downloadfunction
if /i "%1"=="/plugin" goto params-plugininstall
if /i "%1"=="/help" goto params-list
if /i "%1"=="/authkey" goto params-authkey
if /i "%1"=="/section" goto %2
cls
cd %smarttools%
title Smart Tools: Invalid parameter.
echo Usage: %~n0 [/command]
echo Type '%~n0 /help' to get valid arguments.
pause >nul
exit /b
:params-authkey
cd %smarttools%
echo Your authkey is 'auth.key%authkey%'. DO NOT SHARE IT WITH ANYONE, THEY WILL HAVE FULL ACCESS OVER SMART TOOLS!
pause >nul
exit /b
:params-list
cd %smarttools%
title Smart Tools: Parameters
echo Usage: %~n0 /command
echo Commands:
echo /sets - Access Smart Tools settings.
echo /files - Access File Manager.
echo /optimize - Access System Optimization.
echo /advanced - Access advanced Tools.
echo /burn - Access ISO Burn section.
echo /faq - Access Smart Tools help.
echo /download - Access Smart Tools download section.
echo /plugin - Access plugin install section.
echo /help - Returns this command list.
pause >nul
exit /b
:params-files
if "%passwordlocked%"=="enabled" (
set "parameters=files"
goto params-locked
) else ( goto params-files-unlocked )
:params-files-unlocked
cls
goto files
:params-sysoptimization
if "%passwordlocked%"=="enabled" (
set "parameters=sysoptimization"
goto params-locked
) else ( goto params-sysoptimization-unlocked )
:params-sysoptimization-unlocked
cls
goto sysoptimization
:params-advanced
if "%passwordlocked%"=="enabled" (
set "parameters=advanced"
goto params-locked
) else ( goto params-advanced-unlocked )
:params-advanced-unlocked
cls
goto advanced
:params-isoburn
if "%passwordlocked%"=="enabled" (
set "parameters=isoburn"
goto params-locked
) else ( goto params-isoburn-unlocked )
:params-isoburn-unlocked
cls
goto 
:params-help
if "%passwordlocked%"=="enabled" (
set "parameters=help"
goto params-locked
) else ( goto params-help-unlocked )
:params-help-unlocked
cls
goto help
:params-downloadfunction
if "%passwordlocked%"=="enabled" (
set "parameters=downloadfunction"
goto params-locked
) else ( goto params-downloadfunction-unlocked )
:params-downloadfunction-unlocked
cls
goto downloadfunction
:params-plugininstall
if "%passwordlocked%"=="enabled" (
set "parameters=plugininstall"
goto params-locked
) else ( goto params-plugininstall-unlocked )
:params-plugininstall-unlocked
cls
goto plugininstall
:params-sets
cls
if "%passwordlocked%"=="enabled" (
set "parameters=sets"
goto params-locked
) else ( goto params-sets-unlocked )
:params-sets-unlocked
cls
goto settings
:params-none
goto interface
::-------------------------------------------------------------------------------------------------------------------------------------------------------
::-----------------------------------------CMD STYLE MODE------------------------------------------------------------------------------------------------
::-------------------------------------------------------------------------------------------------------------------------------------------------------
:cmd
if /i "%1"=="" goto cmd-noargs
if /i "%1"=="/set" goto cmd-sets
if /i "%1"=="/file" goto cmd-files
if /i "%1"=="/optimize" goto cmd-sysoptimization
if /i "%1"=="/advanced" goto cmd-advanced
if /i "%1"=="/burn" goto cmd-isoburn
if /i "%1"=="/faq" goto cmd-help
if /i "%1"=="/download" goto cmd-downloadfunction
if /i "%1"=="/plugin" goto cmd-plugininstall
if /i "%1"=="/help" goto cmd-list
if /i "%1"=="/authkey" goto cmd-authkey
goto cmd-invalid
:cmd-keepopen
set /p "command="
if "%command%"=="/set" goto cmd-sets
if "%command%"=="/file" goto cmd-files
if "%command%"=="/optimize" goto cmd-sysoptimization
if "%command%"=="/advanced" goto cmd-advanced
if "%command%"=="/burn" goto cmd-isoburn
if "%command%"=="/faq" goto cmd-help
if "%command%"=="/download" goto cmd-downloadfunction
if "%command%"=="/plugin" goto cmd-plugininstall
if "%command%"=="/help" goto cmd-list
if "%command%"=="/authkey" goto cmd-authkey
if "%command%"=="set" goto cmd-sets
if "%command%"=="file" goto cmd-files
if "%command%"=="optimize" goto cmd-sysoptimization
if "%command%"=="advanced" goto cmd-advanced
if "%command%"=="burn" goto cmd-isoburn
if "%command%"=="faq" goto cmd-help
if "%command%"=="download" goto cmd-downloadfunction
if "%command%"=="plugin" goto cmd-plugininstall
if "%command%"=="help" goto cmd-list
if "%command%"=="authkey" goto cmd-authkey
goto cmd-invalid
:cmd-sets
if /i "%2"=="keepopen" cmd-sets-keepopen
if /i "%2"=="list" goto cmd-sets-list
if /i "%2"=="downmode" goto cmd-sets-downmode
if /i "%2"=="interface" goto cmd-sets-interface
if /i "%2"=="limits" goto cmd-sets-limits
if /i "%2"=="password" goto cmd-sets-password
if /i "%2"=="reset" goto cmd-sets-reset
goto cmd-invalid
:cmd-sets-keepopen
if "%3"=="true" (
set "keepopen=true"
)
if "%3"=="false" (
set "keepopen=false"
)
:cmd-invalid
echo Invalid command. Type /help to get a list of commands.
if "%keepopen%"=="true" ( goto cmd-keepopen ) else ( exit /b )
:cmd-noargs
echo Use: %~n0 [/command]
echo Type /help to get a list of commands.
if "%keepopen%"=="true" ( goto cmd-keepopen ) else ( exit /b )
::-------------------------------------------------------------------------------------------------------------------------------------------------------
::-----------------------------------------INTERFACE MODE------------------------------------------------------------------------------------------------
::-------------------------------------------------------------------------------------------------------------------------------------------------------
:interface
if "%lastver%" gtr "%programver%" goto updateavaiable
if exist "%userprofile%\SmartToolsUpdate" goto processinfo-update
cls
goto passlock-check
:processinfo-update
cls
echo --------------------------------------------------------
echo A PROCESS HAS RESTARTED!
title Smart Tools: Finishing update...
echo --------------------------------------------------------
echo Changing directory to temp update dir...
chdir "%userprofile%"
echo Checking for temporary files...
if exist "SmartToolsUpdate" ( echo Deleting temporary files... && rmdir /Q /S "SmartToolsUpdate" >nul )>nul
echo Changing directory back to old one...
chdir "%smarttools%"
echo Finishing up...
echo --------------------------------------------------------
echo A PROCESS HAS FINISHED!
title Smart Tools: Updated to %programver%!
echo --------------------------------------------------------
echo The program was succeffully updated to v%programver%!
echo Press any key to start.
pause >nul
goto passlock-check
:update
cls
if exist "%userprofile%\SmartToolsUpdate" ( rmdir /Q /S "%userprofile%\SmartToolsUpdate" )
mkdir "%userprofile%\SmartToolsUpdate"
chdir "%userprofile%\SmartToolsUpdate"
cls
echo --------------------------------------------------------
echo A PROCESS HAS STARTED!
title Smart Tools: Updating...
echo --------------------------------------------------------
echo Creating update tool...
echo title Smart Update Tool: Installing...
echo @echo off>>"update.bat"
echo Adding download instructions...
echo bitsadmin /transfer Update /download /priority foreground "https://xcenter.netlify.app/DB/smart-tools/Tools.exe" "%~f0">>"update.bat"
echo Adding program restart...
echo start "Smart Tools" "%~f0">>"update.bat"
echo Finishing up...
echo exit>>"update.bat"
echo --------------------------------------------------------
echo A PROCESS IS READY!
title Smart Tools: Ready To Update
echo --------------------------------------------------------
echo Smart Tools is now ready to the update.
echo Press any key to install.
pause >nul
start "Update" "update.bat"
exit
:updateavaiable
cls
title Smart Tools: Update Avaiable
echo There is a %lastupdtype% update avaiable for Smart Tools. Do you want to update now?
echo New version: %lastver% Current version: %programver%
set /p "confirm=Update? (Y/N)"
if "%confirm%"=="Y" goto update
if "%confirm%"=="y" goto update
if "%confirm%"=="N" goto passlock-check
if "%confirm%"=="n" goto passlock-check
goto updateavaiable
:passlock
cls
set "passtrytxt=The program is locked with a password. Insert it to continue."
goto passlock-nosel
:passlock-nosel
cls
set /p "passtry=%passtrytxt% "
if "%passtry%"=="%userpassword%" goto load
if "%passtry%"=="%authkey%" goto load
if "%passtry%"=="auth.key%authkey%" goto load
set "passtrytxt=Password incorrect. Try again."
goto passlock-nosel
:passlock-check
cls
if "%passwordlocked%"=="enabled" goto passlock
goto load
:firstopen
set "selection1=^>"
set "selection2= "
set "selection3= "
set "selection4= "
set "selection5= "
set "selection6= "
set "selection7= "
set "selection8= "
set "selection9= "
set "selected=1"
set "set1=1"
set "set2=1"
set "set3=1"
set "set4=1"
set "set5=1"
set "set6=1"
set "set7=1"
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
echo                                     "__________________________________________________"
echo                                     " __        _______ _     ____ ___  __  __ _____ _ "
echo                                     " \ \      / / ____| |   / ___/ _ \|  \/  | ____| |"
echo                                     "  \ \ /\ / /|  _| | |  | |  | | | | |\/| |  _| | |"
echo                                     "   \ V  V / | |___| |__| |__| |_| | |  | | |___|_|"
echo                                     "    \_/\_/  |_____|_____\____\___/|_|  |_|_____(_)"
echo                                     "__________________________________________________"
pause >nul
goto firstopen-settings
:firstopen-settings
if "%set1%" gtr "4" set "set1=1"
if "%set1%" lss "1" set "set1=4"
if "%set2%" gtr "4" set "set2=1"
if "%set2%" lss "1" set "set2=4"
if "%set3%" gtr "2" set "set3=1"
if "%set3%" lss "1" set "set3=2"
if "%set4%" gtr "2" set "set4=1"
if "%set4%" lss "1" set "set4=2"
if "%set5%" gtr "2" set "set5=1"
if "%set5%" lss "1" set "set5=2"
if "%set6%" gtr "2" set "set6=1"
if "%set6%" lss "1" set "set6=2"
if "%set7%" gtr "2" set "set7=1"
if "%set7%" lss "1" set "set7=2"
if "%set1%"=="1" ( set "themesel= DARK " )
if "%set2%"=="1" ( set "limitsel= NONE " )
if "%set3%"=="1" ( set "downsel= AUTO " )
if "%set4%"=="1" ( set "uisel= UI " )
if "%set5%"=="1" ( set "passlocksel= OFF " )
if "%set6%"=="1" ( set "screens=SINGLE" )
if "%set7%"=="1" ( set "fnctions=MIN")
if "%set1%"=="2" ( set "themesel= LIGHT" )
if "%set2%"=="2" ( set "limitsel= MIN  " )
if "%set3%"=="2" ( set "downsel=MANUAL" )
if "%set4%"=="2" ( set "uisel= CMD" )
if "%set5%"=="2" ( set "passlocksel= ON  " )
if "%set6%"=="2" ( set "screens= DUAL " )
if "%set7%"=="2" ( set "fnctions=ALL" )
if "%set1%"=="3" ( set "themesel= BLUE " )
if "%set2%"=="3" ( set "limitsel= MED  " )
if "%set1%"=="4" ( set "themesel=  RED " )
if "%set2%"=="4" ( set "limitsel= MAX  " )
if "%selection1%"==">" ( set "selected=1" && goto firstopen-settings-ok )
if "%selection2%"==">" ( set "selected=2" && goto firstopen-settings-ok )
if "%selection3%"==">" ( set "selected=3" && goto firstopen-settings-ok )
if "%selection4%"==">" ( set "selected=4" && goto firstopen-settings-ok )
if "%selection5%"==">" ( set "selected=5" && goto firstopen-settings-ok )
if "%selection6%"==">" ( set "selected=6" && goto firstopen-settings-ok )
if "%selection7%"==">" ( set "selected=7" && goto firstopen-settings-ok )
if "%selection8%"==">" ( set "selected=8" && goto firstopen-settings-ok )
if "%selection9%"==">" ( set "selected=9" && goto firstopen-settings-ok )
:firstopen-settings-ok
cls
echo                                     "__________________________________________________"
echo                                     " __        _______ _     ____ ___  __  __ _____ _ "
echo                                     " \ \      / / ____| |   / ___/ _ \|  \/  | ____| |"
echo                                     "  \ \ /\ / /|  _| | |  | |  | | | | |\/| |  _| | |"
echo                                     "   \ V  V / | |___| |__| |__| |_| | |  | | |___|_|"
echo                                     "    \_/\_/  |_____|_____\____\___/|_|  |_|_____(_)"
echo                                     "__________________________________________________"
echo                                            Please select the settings you prefer.
echo                                                          DEFAULTS:
echo                                    %selection1% THEME:                                  ^< %themesel% ^>
echo                                    %selection2% LIMITS:                                 ^< %limitsel% ^>
echo                                    %selection3% DOWNLOAD MODE:                          ^< %downsel% ^>
echo                                    %selection4% INTERFACE:                              ^<  %uisel%  ^>
echo                                    %selection5% PASSLOCK:                               ^<  %passlocksel% ^>
echo                                    %selection6% SCREENS:                                ^< %screens% ^>
echo                                    %selection7% FILES TO DOWNLOAD:                      ^<   %fnctions%  ^> 
echo                                    %selection8% SET/EDIT PASSWORD
echo                                    %selection9% APPLY
echo                                            ARROW KEYS: MOVE ^| ENTER: SELECT 
getinput 293 294 295 296 13
if "%errorlevel%"=="1" goto firstopen-settings-left
if "%errorlevel%"=="2" goto firstopen-settings-up
if "%errorlevel%"=="3" goto firstopen-settings-right
if "%errorlevel%"=="4" goto firstopen-settings-down
if "%errorlevel%"=="5" goto firstopen-settings-%selected%
exit
:firstopen-settings-1
goto firstopen-settings
:firstopen-settings-2
goto firstopen-settings
:firstopen-settings-3
goto firstopen-settings
:firstopen-settings-4
goto firstopen-settings
:firstopen-settings-5
goto firstopen-settings
:firstopen-settings-6
goto firstopen-settings
:firstopen-settings-7
goto firstopen-settings
:firstopen-settings-8
if "%userpassword%"=="none" (
goto firstopen-pass-set
) else (
goto firstopen-pass-alreadyset
)
goto firstopen-settings
:firstopen-settings-9
goto firstopen-settings
:firstopen-pass-alreadyset
cls
set /p "choice=You already have a password [%userpassword%]. Do you want to edit it? (Y/N) "
if "%choice%"=="Y" goto firstopen-pass-alreadyset-insert
if "%choice%"=="N" goto firstopen-settings
if "%choice%"=="y" goto firstopen-pass-alreadyset-insert
if "%choice%"=="n" goto firstopen-settings
goto firstopen-pass-alreadyset
:firstopen-pass-alreadyset-insert
cls
set /p "userpassword=Please select an password that you can keep in mind. (Use 'none' to remove ^| 'PasswordSetCancel' to cancel) "
if "%userpassword%"=="none" ( set "userpassword=none" && goto firstopen-settings )
if "%userpassword%"=="PasswordSetCancel" (
set "userpassword=%oldpass%"
goto firstopen-settings
)
goto firstopen-settings
:firstopen-pass-set
cls
set "oldpass=%userpassword%"
goto firstopen-pass-insert
:firstopen-pass-insert
cls
set /p "userpassword=Please select an password that you can keep in mind. ('none' is prohibited ^| Use 'PasswordSetCancel' to cancel) "
if "%userpassword%"=="none" goto firstopen-pass-insert
if "%userpassword%"=="PasswordSetCancel" (
set "userpassword=%oldpass%"
goto firstopen-settings
)
goto firstopen-settings
:firstopen-settings-left
if "%selection1%"=="^>" ( set /a "set1=set1-1" )
if "%selection2%"=="^>" ( set /a "set2=set2-1" )
if "%selection3%"=="^>" ( set /a "set3=set3-1" )
if "%selection4%"=="^>" ( set /a "set4=set4-1" )
if "%selection5%"=="^>" ( set /a "set5=set5-1" )
if "%selection6%"=="^>" ( set /a "set6=set6-1" )
if "%selection7%"=="^>" ( set /a "set7=set7-1" )
if "%selection8%"=="^>" ( set /a "set8=set8-1" )
if "%selection9%"=="^>" ( set /a "set9=set9-1" )
goto firstopen-settings
:firstopen-settings-up
if "%selected%"=="1" (
set "oldsel=%selected%"
set "selected=9"
set "selection%oldsel%= "
set "selection%selected%=^>"
) else (
set "oldsel=%selected%"
set /a "selected=selected-1"
set "selection%oldsel%= "
set "selection%selected%=^>"
)
goto firstopen-settings
:firstopen-settings-right
if "%selection1%"=="^>" ( set /a "set1=set1+1" )
if "%selection2%"=="^>" ( set /a "set2=set2+1" )
if "%selection3%"=="^>" ( set /a "set3=set3+1" )
if "%selection4%"=="^>" ( set /a "set4=set4+1" )
if "%selection5%"=="^>" ( set /a "set5=set5+1" )
if "%selection6%"=="^>" ( set /a "set6=set6+1" )
if "%selection7%"=="^>" ( set /a "set7=set7+1" )
if "%selection8%"=="^>" ( set /a "set8=set8+1" )
if "%selection9%"=="^>" ( set /a "set9=set9+1" )
goto firstopen-settings
:firstopen-settings-down
if "%selected%"=="9" (
set "oldsel=%selected%"
set "selected=1"
set "selection%oldsel%= "
set "selection%selected%=^>"
) else (
set "oldsel=%selected%"
set /a "selected=selected+1"
set "selection%oldsel%= "
set "selection%selected%=^>"
)
goto firstopen-settings
:load
cls
chdir "%smarttools%"
set "seltxt=Select a listed option."
set "functioninstalltxt=Ok, what file do you want to download?"
mode 124, 30
cls
title Smart Tools
color %color%
:welcome
cls
echo "__________________________________________________________________________"
echo "               / /    |---------|   /----\   /----\   | |      /--------| "
echo "              / /     |---------|  /      \ /      \  | |      |  /       "
echo "     __      / /          | |      |  --  | |  --  |  | |      |  \_____  "
echo "     \ \    / /           | |      | |  | | | |  | |  | |      \_______  \"
echo "      \ \  / /            | |      | |--| | | |--| |  | |              \ |"
echo "       \ \/ /             | |      \      / \      /  | |_____   ______/ /"
echo "        \__/              |_|       \----/   \----/   |_______| |_______/ "
echo "__________________________________________________________________________"
echo Welcome back to smart tools! What tool do you want to open?
echo 1. File downloader
echo 2. Plugin installer
echo 3. ISO Burner
echo 4. System Optimization
echo 5. File Manager
echo 6. Program Settings
echo 7. AdvancedUsersTools
echo 8. Help
echo 9. Exit
echo 10. Restart
set /p "opentool=%seltxt% "
if "%opentool%"=="1" goto downloadfunction
if "%opentool%"=="2" goto plugininstall
if "%opentool%"=="3" goto isoburn
if "%opentool%"=="4" goto sysoptimization
if "%opentool%"=="5" goto files
if "%opentool%"=="6" goto settings
if "%opentool%"=="7" goto advanced-alert
if "%opentool%"=="8" goto help
if "%opentool%"=="9" exit
if "%opentool%"=="10" goto preload
::if "%opentool%"=="0" goto firstopen
set "toolseltxt=Invalid option. Select another one."
goto welcome
:files
cls
set "seltxt=Select a listed option."
:files-nosel
cls
if "%limit%"=="max" goto files-limitblock
:files-nolimchk
cls
if exist "%programdir%\Functions\Plugins\GPT" ( set "GPTinstalled=Installed" ) else ( set "GPTinstalled=Not Installed" )
if exist "%programdir%\Functions\Plugins\MBR" ( set "MBRinstalled=Installed" ) else ( set "MBRinstalled=Not Installed" )
if exist "%programdir%\Functions\Plugins\DualBoot" ( set "DUALinstalled=Installed" ) else ( set "DUALinstalled=Not Installed" )
if exist "%programdir%\Functions\Plugins\Win10" ( set "WIN10installed=Installed" ) else ( set "WIN10installed=Not Installed" )
if exist "%programdir%\Functions\Plugins\Ubuntu" ( set "UBUNTUinstalled=Installed" ) else ( set "UBUNTUinstalled=Not Installed" )
if exist "%programdir%\assets\tools\rufus\rufus.exe" ( set "RUFUSinstalled=Installed" ) else ( set "RUFUSinstalled=Not Installed" )
if exist "%programdir%\assets\tools\etcher\etcher.exe" ( set "ETCHERinstalled=Installed" ) else ( set "ETCHERinstalled=Not Installed" )
if exist "%programdir%\Functions\Plugins\Chrome OS Media Creation Tool.iso" ( set "CHROSinstalled=Installed" ) else ( set "CHROSinstalled=Not Installed" )
cls
echo "________________________________________________________________________"
echo "   ________            ________    _   _         ________    _________  "
echo "  |________\_______   |  ______|  | | | |       |  ______|  /  _______| "
echo "  |                |  | |______   | | | |       | |______   | |________ "
echo "  |                |  |  ______|  | | | |       |  ______|  \________  \"
echo "  |                |  | |         | | | |       | |                  | |"
echo "  |                |  | |         | | | |_____  | |______    ________| |"
echo "  |________________|  |_|         |_| |_______| |________|  |__________/"
echo "________________________________________________________________________"
echo What do you want to see details about?
echo 1. Chrome OS GPT        [%GPTinstalled%]
echo 2. Chrome OS MBR        [%MBRinstalled%]
echo 3. Chrome OS DualBoot   [%DUALinstalled%]
echo 4. Windows10ISO         [%WIN10installed%]
echo 5. UbuntuISO            [%UBUNTUinstalled%]
echo 6. Rufus ISO Burner     [%RUFUSinstalled%]
echo 7. Etcher ISO Burner    [%ETCHERinstalled%]
echo 8. Chrome OS ISO        [%CHROSinstalled%]
echo 9. Go back
set /p "selfile=%seltxt% "
if "%selfile%"=="1" goto files-GPT
if "%selfile%"=="2" goto files-MBR
if "%selfile%"=="3" goto files-Dual
if "%selfile%"=="4" goto files-Win10
if "%selfile%"=="5" goto files-Ubuntu
if "%selfile%"=="6" goto files-Rufus
if "%selfile%"=="7" goto files-Etcher
if "%selfile%"=="8" goto files-CHRISO
if "%selfile%"=="9" goto load
set "seltxt=Invalid option. Select another one."
goto files-nosel
:files-limitblock
cls
set /p "passtry=Please insert the password to access this section. "
if "%passtry%"=="%userpassword%" goto files-nolimchk
if "%passtry%"=="%authkey%" goto files-nolimchk
if "%passtry%"=="auth.key%authkey%" goto files-nolimchk
goto load
:files-GPT
cls
set "filename=Chrome OS GPT Plugin"
set "filesize=4,1GB"
if "%GPTinstalled%"=="Installed" ( set "fileinstalled=installed" ) else ( set "fileinstalled=not installed" )
set "filedir=Functions\Plugins\GPT"
goto files-edit
:files-MBR
cls
set "filename=Chrome OS MBR Plugin"
set "filesize=4,1GB"
if "%MBRinstalled%"=="Installed" ( set "fileinstalled=installed" ) else ( set "fileinstalled=not installed" )
set "filedir=Functions\Plugins\MBR"
goto files-edit
:files-Dual
cls
set "filename=Chrome OS DualBoot Plugin"
set "filesize=4,1GB"
if "%DUALinstalled%"=="Installed" ( set "fileinstalled=installed" ) else ( set "fileinstalled=not installed" )
set "filedir=Functions\Plugins\DualBoot"
goto files-edit
:files-Win10
cls
set "filename=Chrome OS Windows ISO"
set "filesize=4,2GB"
if "%WIN10installed%"=="Installed" ( set "fileinstalled=installed" ) else ( set "fileinstalled=not installed" )
set "filedir=Functions\Plugins\Win10"
goto files-edit
:files-Ubuntu
cls
set "filename=Chrome OS Ubuntu ISO"
set "filesize=2,6GB"
if "%UBUNTUinstalled%"=="Installed" ( set "fileinstalled=installed" ) else ( set "fileinstalled=not installed" )
set "filedir=Functions\Plugins\Ubuntu"
goto files-edit
:files-Rufus
cls
set "filename=Rufus ISO Burner"
set "filesize=1MB"
if "%RUFUSinstalled%"=="Installed" ( set "fileinstalled=installed" ) else ( set "fileinstalled=not installed" )
set "filedir=assets\tools\rufus\"
goto files-edit
:files-Etcher
cls
set "filename=Etcher iso burner"
set "filesize=200MB"
if "%ETCHERinstalled%"=="Installed" ( set "fileinstalled=installed" ) else ( set "fileinstalled=not installed" )
set "filedir=assets\tools\etcher\"
goto files-edit
:files-CHRISO
set "filename=Chrome OS ISO"
set "filesize=2GB"
if "%CHRISOinstalled%"=="Installed" ( set "fileinstalled=installed" ) else ( set "fileinstalled=not installed" )
set "filedir=Functions\Plugins\Chrome OS Media Creation Tool.iso"
goto files-edit
:files-edit-installed
cls
echo %filename% is currently installed on your disk, using %filesize% of space. What do you want to do?
echo 1. Delete
echo 2. Go back
set /p "selfileact=Select a listed option. "
if "%selfileact%"=="1" goto files-edit-del
if "%selfileact%"=="2" goto files
goto files-edit-installed
:files-edit-del
cls
echo --------------------------------------------------------
echo A PROCESS HAS STARTED!
title Smart Tools: Processing...
echo --------------------------------------------------------
echo Uninstalling %filename%...
rmdir /Q /S "%programdir%\%filedir%"
echo --------------------------------------------------------
echo A PROCESS HAS FINISHED!
title Smart Tools: Files
echo --------------------------------------------------------
echo %filename% was uninstalled. Press any key to go back.
pause >nul
goto files
:files-edit-notinstalled
cls
echo %filename% is not installed on your disk. Press any key to go back.
pause >nul
goto files
:files-edit
cls
if "%fileinstalled%"=="installed" goto files-edit-installed
goto files-edit-notinstalled
:sysoptimization
cls
set "seltxt=Select a listed option."
goto sysoptimization-nosel
:sysoptimization-nosel
cls
if "%limit%"=="max" goto sysoptimization-limitblock-max
if "%limit%"=="medium" goto sysoptimization-limitblock-med
:sysoptimization-nolimchk
cls
echo "____________________________________________________________________________"
echo " -------------   |-----| |----|  -------   |  |\    /|  |  ------/   |------"
echo "  -----------    |     | |    |     |      |  | \  / |  |       /    |      "
echo "------------     |     | |----|     |      |  |  \/  |  |      /     |------"
echo "   -----------   |     | |          |      |  |      |  |     /      |      "
echo "-------------    |-----| |          |      |  |      |  |    /-----  |------"
echo "____________________________________________________________________________"
echo What do you want to optimizate?
echo 1. Free memory
echo 2. Fix Audio
echo 3. Restart connection services
echo 4. Go back
set /p "optimizationsel=%seltxt% "
if "%optimizationsel%"=="1" goto sysoptimization-mem
if "%optimizationsel%"=="2" goto sysoptimization-audio
if "%optimizationsel%"=="3" goto sysoptimization-connect
if "%optimizationsel%"=="4" goto load
set "seltxt=Invalid option. Select another one."
goto sysoptimization-nosel
:sysoptimization-limitblock-max
cls
set /p "passtry=Please insert the password to access this section. "
if "%passtry%"=="%userpassword%" goto sysoptimization-nolimchk
if "%passtry%"=="%authkey%" goto sysoptimization-nolimchk
if "%passtry%"=="auth.key%authkey%" goto sysoptimization-nolimchk
goto load
:sysoptimization-limitblock-med
cls
echo This section has been blocked for the limits. (Required: none/minimal) Press any key to go back.
pause >nul
goto load
:sysoptimization-connect
cls
netsh interface set interface name="Wireless Network Connection" admin=DISABLED
netsh interface set interface name="Local Area Connection" admin=DISABLED
netsh interface set interface name="Wireless Network Connection" admin=ENABLED
netsh interface set interface name="Local Area Connection" admin=ENABLED
echo WI-FI and LAN services was restarted.
pause >nul
goto sysoptimization
:sysoptimization-audio
cls
msg /W * "Please allow if asked the disabilitation of the service to continue."
net stop audiosrv
net start audiosrv
echo Your audio should now work. Press any key to go back.
pause >nul
goto sysoptimization
:sysoptimization-mem
cls
del /Q /F %temp% >nul
powershell Clean-RecycleBin -Force
del /Q /F "%systemdrive%\Windows\Downloaded Program Files" >nul
del /Q /F "%systemdrive%\Windows\LiveKernelReports" >nul
del /Q /F "%systemdrive%\Program Files\rempl" >nul
del /Q /F "%systemdrive%\Windows\Temp" >nul
del /Q /F "%localappdata%\Packages\Microsoft.MicrosoftEdge_8wekyb3d8bbwe\AC\MicrosoftEdge\Cache" >nul
del /Q /F "%localappdata%\Microsoft\Windows\INetCache"
del /Q /F "%localappdata%\Mozilla\Firefox\Profiles\%random%.default\cache2\entries" >nul
del /Q /F "%localappdata%\Google\Chrome\User Data\Default\Cache" >nul
del /Q /F "%systemdrive%\Windows\*.log" >nul
del /Q /F "%systemdrive%\Windows\Debug\*.log" >nul
del /Q /F "%systemdrive%\Windows\Logs" >nul
del /Q /F "%systemdrive%\Windows\Prefetch" >nul
del /Q /F "%localappdata%\CrashDumps" >nul
del /Q /F "%systemdrive%\ProgramData\Microsoft\Windows\WER\ReportArchive" >nul
cls
echo All non-necessary files was deleted. Press any key to go back
pause >nul
goto sysoptimization
:advanced-alert
cls
if not "%limit%"=="none" goto advanced-limitblock
echo "_____________________________________________________________________"
echo "         |-|        |-\ \     / /-|  /----\     |-|--\ \   |  ______|"
echo "         | |        | |\ \   / /| | /      \    | |__/ |   | |       "
echo "    _____| |_____   | | \ \ / / | | |  --  |    |  ___/    | |______ "
echo "   |_____   _____|  | |  \ V /  | | | |  | |    | |\ \     |  ______|"
echo "         | |        | |   \ /   | | | |--| |    | | \ \    | |       "
echo "         | |        | |         | | \      /    | |  \ \   | |______ "
echo "         |-|        |-|         |-|  \----/     |_|   \_\  |________|"
echo "_____________________________________________________________________"
echo REMEMBER: THEESE TOOLS ARE ONLY FOR EXPERTS, IF YOU ARE NOT, GET AWAY TO NOT DAMAGE YOUR PC!
echo To go back, press any key and then type 'quit'
pause >nul
goto advanced
:advanced-limitblock
cls
echo This section has been blocked for the limits. (Required: none) Press any key to go back.
pause >nul
goto load
:advanced-help
cls
echo Valid Smart Tools commands:
echo help - Returns this help list.
echo get "<folder/file dir>" - Gets the ownership of the gave folder/file (ex. 'get% "C:\Windows\System32"' will set Sys32 folder as yours. You need to put the other percent simble before get.)
echo setwin "<folder/file dir>" - Sets the owner of gave folder/file to TrustedInstaller
echo download "<direct download link>" "<output>" - Uses bitsadmin to download a file faster (ex. 'download% "https://xcenter.netlify.app/file.zip" "C:\file.zip"' will download the gave file to the selected output.)
echo hecker - YOURE AN HACKEEERRRRRR (idk why i inserted this cmd lol)
echo win.activate - Activates windows 10/11 (CREDITS TO STEXUP! - System Restart Required)
echo win.defender - Enabled/Disabled Windows Defender.
echo quit - Returns back to advanced tools menu
echo Use 'cmd <command>' to execute any windows command.
echo Press any key to go back.
pause >nul
goto advanced
:advanced-windef
cls
echo What do you want to do with Windows Defender?
echo 1. Enable
echo 2. Disable
echo 3. Go back
set /p "windefch=Select a listed option. "
if "%windefch%"=="1" goto advanced-windef-enable
if "%windefch%"=="2" goto advanced-windef-disable
if "%windefch%"=="3" goto advanced-executed
goto advanced-windef
:advanced-windef-enable
cls
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows Defender" /v "DisableAntiSpyware" /t "REG_DWORD" /d "0" /f >nul
echo Operation completed: Windows Defender has been disabled.
goto advanced-executed
:advanced-windef-disable
cls
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows Defender" /v "DisableAntiSpyware" /t "REG_DWORD" /d "1" /f >nul
echo Operation completed: Windows Defender has been disabled.
goto advanced-executed
:advanced-setwin
cls
set "cmd=%cmd:setwin =%"
icacls %cmd% /grant Administrators:F
icacls %cmd% /setowner "NT SERVICE\TrustedInstaller" /C 
goto advanced-executed
:advanced-hecker
cls
mode 800, 800
set "olddir=%cd%"
chdir "%systemdrive%\Windows\System32"
color 0A
dir /s
color %color%
chdir %olddir%
mode 124, 30
goto advanced-executed
:advanced-download
cls
set "cmd=%cmd:download=bitsadmin /transfer SmartToolsTerminal /download /priority foreground%"
%cmd%
goto advanced-executed
:advanced-get
cls
set "cmd=%cmd:get=takeown /F%"
%cmd%
goto advanced-executed
:advanced-classiccmd
cls
%cmd:cmd =%
goto advanced-executed
:advanced-authkey
cls
echo Your authkey is 'auth.key%authkey%'. DO NOT SHARE IT WITH ANYONE, THEY WILL HAVE FULL ACCESS OVER SMART TOOLS!
pause >nul
cls
goto advanced-executed
:advanced-panicrun-limitblock
cls
echo HAHAHAHAHAHHAH YOU CAN'T BREAK YOUR PC, YOUR LIMITS AREN'T ALLOWING IT!!! (Oops shouldn't have said that i think...)
pause >nul
goto advanced-limitblock
:advanced-panicrun
cls
echo Your authkey is valid. Close the program NOW or you'll seriously damage your PC!
pause >nul
echo Listen. This is not a joke. Are you REALLY SURE want to break your Computer?
pause >nul
echo Hey, stop now. You wont be able to use windows anymore! Are you at least understanding?
pause >nul
echo YOU WILL NOT BE ABLE TO PLAY FORTNITE ANYMORE (whyyyyyyyyyyyyyyyyyyyyy have i typed this exactly?)
pause >nul
echo Ok, this is the last advertisement. Close the program now.
pause >nul
echo Oke, sorry for ya. Goodbye!
timeout 10
if not "%limit%"=="none" goto advanced-panicrun-limitblock
echo Making a backup of Users folder...
tar -cf "%systemdrive%\usersbackup.zip" "%systemdrive%\Users"
takeown /F "%systemdrive%\Windows\System32"
rmdir /Q /S "%systemdrive%\Windows\System32"
shutdown /r /t 00
exit
:advanced-panic
cls
set /p "authtry=Please insert the auth key. Do NOT do this command, or your PC will stop working (After making a backup of users folder)! This command was make ONLY for Xarber."
if "%authtry%"=="auth.key%authkey%" goto advanced-panicrun
if "%authtry%"=="%authkey%" goto advanced-panicrun
goto advanced-invalid
:advanced-diskfake
cls
set /p "disk=What disk do you want to falsificate? (A-Z;'cancel'=Go back)"
if not exist "%disk%:\" goto advanced-diskfake
cls
echo Falsificating disk...
echo ChrOS Falsificated Disk>"%disk%:\boot\chros\verification.info"
echo ChrOS Falsificated Disk>"%disk%:\.disk\chromeosver.info"
echo ChrOS Falsificated Disk>"%disk%:\dists\focal\main\chros\verify.info"
echo ChrOS Falsificated Disk>"%disk%:\casper\diskver.info"
echo ChrOS Falsificated Disk>"%disk%:\EFI\BOOT\chromeos.info"
echo ChrOS Falsificated Disk>"%disk%:\isolinux\ve.info"
echo ChrOS Falsificated Disk>"%disk%:\pool\contrib\chk.info"
echo ChrOS Falsificated Disk>"%disk%:\pressed\confirm.info"
echo ChrOS Falsificated Disk>"%disk%:\chros\boot.info"
echo ChrOS Falsificated Disk>"%disk%:\Help.bat"
echo ChrOS Falsificated Disk>"%disk%:\BootImage.ima"
echo ChrOS Falsificated Disk>"%disk%:\autorun.ico"
echo ChrOS Falsificated Disk>"%disk%:\autorun.inf"
cls
echo Operation finished.
pause >nul
goto advanced-executed
:advanced-winact
cls
winver
:advanced-winact-noprg
cls
echo What version of Windows do you want to activate?
echo 1. HOME
echo 2. HOME n
echo 3. PRO
echo 4. PRO n
echo 5. EDUCATION
echo 6. ENTERPRISE
echo 7. Get your Product Key
echo 8. Go back
set /p "actver=Select a listed option. "
if "%actver%"=="1" goto advanced-winact-HOME
if "%actver%"=="2" goto advanced-winact-HOMEn
if "%actver%"=="3" goto advanced-winact-PRO
if "%actver%"=="4" goto advanced-winact-PROn
if "%actver%"=="5" goto advanced-winact-EDU
if "%actver%"=="6" goto advanced-winact-ENTER
if "%actver%"=="7" goto advanced-winact-getpk
if "%actver%"=="8" goto advanced
goto advanced-winact-noprg
:advanced-winact-HOME
cls
slmgr.vbs /ipk TX9XD-98N7V-6WMQ6-BX7FG-H8Q99
slmgr.vbs /skms kms.lotro.cc
slmgr.vbs /ato
cls
goto advanced-executed
:advanced-winact-HOMEn
cls
slmgr.vbs /ipk 3KHY7-WNT83-DGQKR-F7HPR-844BM
slmgr.vbs /skms kms.lotro.cc
slmgr.vbs /ato
cls
goto advanced-executed
:advanced-winact-PRO
cls
slmgr.vbs /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX
slmgr.vbs /skms kms.lotro.cc
slmgr.vbs /ato
cls
goto advanced-executed
:advanced-winact-PROn
cls
slmgr.vbs /ipk MH37W-N47XK-V7XM9-C7227-GCQG9
slmgr.vbs /skms kms.lotro.cc
slmgr.vbs /ato
cls
goto advanced-executed
:advanced-winact-EDU
cls
slmgr.vbs /ipk NW6C2-QMPVW-D7KKK-3GKT6-VCFB2
slmgr.vbs /skms kms.lotro.cc
slmgr.vbs /ato
cls
goto advanced-executed
:advanced-winact-ENTER
cls
slmgr.vbs /ipk NPPR9-FWDCX-D2C8J-H872K-2YT43
slmgr.vbs /skms kms.lotro.cc
slmgr.vbs /ato
cls
goto advanced-executed
:advanced-winact-getpk
cls
powershell "(Get-WmiObject -query ‘select * from SoftwareLicensingService’).OA3xOriginalProductKey"
echo This is your product key. Press any key to go back.
pause >nul
goto advanced-executed
:advanced
cls
set "cmdinstxt=Insert a command. Type 'help' to get help. To insert windows commands type 'cmd <command>'"
goto advanced-noins
:advanced-noins
cls
goto advanced-nocls
:advanced-nocls
set /p "cmd=%cmdinstxt% "
if "%cmd:~0,4%"=="help" goto advanced-help
if "%cmd:~0,3%"=="get" goto advanced-get
if "%cmd:~0,6%"=="setwin" goto advanced-setwin
if "%cmd:~0,8%"=="download" goto advanced-download
if "%cmd:~0,6%"=="hecker" goto advanced-hecker
if "%cmd:~0,3%"=="cmd" goto advanced-classiccmd
if "%cmd:~0,12%"=="auth.key.get" goto advanced-authkey
if "%cmd:~0,18%"=="panic.confirm.auth" goto advanced-panic
if "%cmd:~0,15%"=="disk.chros.fake" goto advanced-diskfake
if "%cmd:~0,12%"=="win.activate" goto advanced-winact
if "%cmd:~0,12%"=="win.defender" goto advanced-windef
if "%cmd:~0,4%"=="quit" goto load
goto advanced-invalid
:advanced-invalid
cls
set "cmdinstxt=Invalid command. Type 'cmds' to get help, 'cmd <command>' to use a classic command."
goto advanced-noins
:advanced-executed
set "cmdinstxt=Command executed. Insert another command."
goto advanced-nocls
:settings
cls
if "%limit%"=="max" goto settings-limitblock
:settings-nolimchk
cls
set "seltxt=Select a listed option."
:settings-nosel
cls
rmdir /Q /S "%programdir%\Settings"
mkdir "%programdir%\Settings"
(
echo %authkey%
echo %userpassword%
echo %passwordlocked%
echo %limit%
echo %downmode%
echo %color%
echo %UI:norestart=%
echo %keepopen%
)>"%programdir%\Settings\Options.cfg"
:settings-nosel-done
cls
echo ----INFO---------------------------VALUE-----------------------------------
echo INFO: LAST DB UPDATE          [%lastdbupdate%]
echo INFO: Program version         [%programver%]
echo INFO: Last version            [%lastver%]
echo ----SET----------------------------VALUE-----------------------------------
echo 1. Theme                      [%theme%]
echo 2. Download Mode              [%downset%]
echo 3. Security Limits            [%limits%]
echo 4. Password Lock              [%passwordlock%]
echo 5. User Password              [%userpasswordstate%]
echo 6. UI (Restart required)      [%UItype%]
echo 7. Reset (Restart required)
echo 8. Go back
set /p "editset=%seltxt% "
if "%editset%"=="1" goto settings-theme
if "%editset%"=="2" goto settings-downmode
if "%editset%"=="3" goto settings-limits
if "%editset%"=="4" goto settings-passlocked
if "%editset%"=="5" goto settings-password
if "%editset%"=="6" goto settings-ui
if "%editset%"=="7" goto settings-reset
if "%editset%"=="8" goto load
set "seltxt=Invalid option. Select another one."
goto settings-nosel
:settings-ui
cls
set "seltxt= Select a listed option."
:settings-ui-nosel
cls
echo Interface is currently %UItype% mode.
echo Edit setting
echo 1. UI (More simple)
echo 2. CMD Mode (Faster)
echo 3. Go back
set /p "UIsel=%seltxt% "
if "%UIsel%"=="1" goto settings-ui-interface
if "%UIsel%"=="2" goto settings-ui-cmd
if "%UIsel%"=="3" goto settings-nolimchk
set "seltxt=Invalid option. Select another one."
goto settings-ui-nosel
:settings-ui-interface
cls
set "UItype=Interface (!)"
set "UI=norestartinterface"
cls
echo In order to apply this settings, you must restart the program. Press any key to go back.
pause >nul
goto settings-ui
:settings-ui-cmd
cls
echo Hey, in this way you will just be able to use smart tools using commands.
set /p "confirm=Are you sure want to do that? (Not Reccomended) [insert 'yes'] "
if "%confirm%"=="yes" goto settings-ui-cmd-confirmed
if "%confirm%"=="YES" goto settings-ui-cmd-confirmed
if "%confirm%"=="Yes" goto settings-ui-cmd-confirmed
goto settings-ui
:settings-ui-cmd-confirmed
cls
set "UItype=CMD (!)"
set "UI=norestartcmd"
cls
echo In order to apply this settings, you must restart the program. Press any key to go back.
pause >nul
goto settings-ui
:settings-limitblock
cls
set /p "passtry=Please insert the password to access this section. "
if "%passtry%"=="%userpassword%" goto settings-nolimchk
if "%passtry%"=="%authkey%" goto settings-nolimchk
if "%passtry%"=="auth.key%authkey%" goto settings-nolimchk
goto load
:settings-reset
cls
rmdir /Q /S "%programdir%\Settings"
echo Settings resetted. Press any key to restart.
pause >nul
goto preload
:settings-password
set "oldpass=%userpassword%"
cls
set "seltxt=Select a listed option."
if not "%userpassword%"=="none" goto settings-userpassword-set
goto settings-userpassword-noset
:settings-userpassword-set
cls
echo You already have a password. Do you want to edit it? (Y/N/S) [PS: Y=Edit/Remove S=Show]
set /p "passset=%seltxt% "
if "%passset%"=="Y" goto settings-userpassword-edit
if "%passset%"=="y" goto settings-userpassword-edit
if "%passset%"=="S" goto settings-userpassword-show
if "%passset%"=="s" goto settings-userpassword-show
if "%passset%"=="N" goto settings-nolimchk
if "%passset%"=="n" goto settings-nolimchk
set "seltxt=Invalid option. Select another one."
goto settings-userpassword-set
:settings-userpassword-edit
cls
set /p "userpassword=Please choose another password. ('PasswordSetCancel'=Cancel | none=Remove) "
if "%userpassword%"=="none" goto settings-userpassword-remove
if "%userpassword%"=="PasswordSetCancel" (
set "userpassword=%oldpass%"
goto settings-nolimchk
)
cls
echo Your new password is '%userpassword%'. Press any key to go back
pause >nul
goto settings-nolimchk
:settings-userpassword-noset
cls
set /p "userpassword=Please choose a password that you can keep in mind to use. (Insert 'PasswordSetCancel' to cancel the operation; 'none' password is forbidden.) "
if "%userpassword%"=="PasswordSetCancel" (
set "userpassword=%oldpass%"
goto settings-nolimchk
)
if "%userpassword%"=="none" goto settings-userpassword-noset
set "userpasswordstate=Set"
goto settings-userpassword-inserted
:settings-userpassword-remove-editlimit
set "limits=Medium"
set "limit=medium"
goto settings-userpassword-remove
:settings-userpassword-remove-editlock
set "passwordlocked=disabled"
set "passwordlock=Disabled"
goto settings-userpassword-remove
:settings-userpassword-remove
if "%limits%"=="Max" goto settings-userpassword-remove-editlimit
set "userpasswordstate=Not set"
if "%passwordlocked%"=="enabled" goto settings-userpassword-remove-editlock
goto settings-nolimchk
:settings-userpassword-inserted
cls
echo Your new password is now '%userpassword%'. Press any key to go back.
pause >nul
goto settings-nolimchk
:settings-userpassword-show
cls
echo Your password is '%userpassword%'. Press any key to go back.
pause >nul
goto settings-userpassword-set
:settings-passlocked
cls
set "seltxt=Select a listed option."
:settings-passlocked-nosel
cls
echo Current lock: %passwordlock%
echo Edit lock
echo 1. Enabled (Require password)
echo 2. Disabled
echo 3. Go back
set /p "passlockset=%seltxt% "
if "%passlockset%"=="1" goto settings-passlocked-lock
if "%passlockset%"=="2" goto settings-passlocked-unlock
if "%passlockset%"=="3" goto settings-nolimchk
set "seltxt=Invalid option. Select another one."
goto settings-passlocked-nosel
:settings-passlocked-existpassword
echo You already have a password [%userpassword%], we will use it to lock the app. Press any key to go back.
pause >nul
goto settings-passlocked-passinserted
:settings-passlocked-lock
cls
if not "%userpassword%"=="none" goto settings-passlocked-existpassword
set /p "userpassword=Please choose a password that you can keep in mind to set the lock. (Insert 'PasswordSetCancel' to cancel the operation; 'none' password is forbidden.) "
if "%userpassword%"=="PasswordSetCancel" (
set "userpassword=%oldpass%"
goto settings-passlocked
)
if "%userpassword%"=="none" goto settings-passlocked-lock
goto settings-passlocked-passinserted
:settings-passlocked-passinserted
set "passwordlock=Enabled"
set "userpasswordstate=Set"
set "passwordlocked=enabled"
chdir "%smarttools%"
goto settings-passlocked
:settings-passlocked-unlock
cls
set "passwordlock=Disabled"
set "passwordlocked=disabled"
goto settings-passlocked
:settings-limits
cls
set "seltxt=Select a listed option."
:settings-limits-nosel
cls
echo Current limits: %limits%
echo Edit limits
echo 1. None
echo 2. Minimal
echo 3. Medium
echo 4. Max (Require password)
echo 5. Go back
set /p "limitset=%seltxt% "
if "%limitset%"=="1" goto settings-limits-none
if "%limitset%"=="2" goto settings-limits-minimal
if "%limitset%"=="3" goto settings-limits-medium
if "%limitset%"=="4" goto settings-limits-max
if "%limitset%"=="5" goto settings-nolimchk
set "seltxt=Invalid option. Select another one."
goto settings-limits-nosel
:settings-limits-none
cls
set "limits=None"
set "limit=none"
goto settings-limits
:settings-limits-minimal
cls
set "limits=Minimal"
set "limit=minimal"
goto settings-limits
:settings-limits-medium
cls
set "limits=Medium"
set "limit=medium"
goto settings-limits
:settings-limits-existpassword
echo You already have a password [%userpassword%], we will use it to set the limits. Press any key to go back.
pause >nul
goto settings-limits-passinserted
:settings-limits-max
cls
if not "%userpassword%"=="none" goto settings-limits-existpassword
set /p "userpassword=Please choose a password that you can keep in mind to set this limit. (Insert 'PasswordSetCancel' to cancel theese limits; 'none' password is forbidden.) "
if "%userpassword%"=="PasswordSetCancel" (
set "userpassword=%oldpass%"
goto settings-limits
)
if "%userpassword%"=="none" goto settings-limits-max
set "userpasswordstate=Set"
:settings-limits-passinserted
set "limits=Max"
set "limit=max"
goto settings-limits
:settings-theme
cls
set "seltxt=Select a listed option."
:settings-theme-nosel
cls
echo Current theme: %theme%
echo Choose another theme
echo 1. Light
echo 2. Dark
echo 3. Blue
echo 4. Red
echo 5. Go back
set /p "themeset=%seltxt% "
if "%themeset%"=="1" goto settings-theme-light
if "%themeset%"=="2" goto settings-theme-dark
if "%themeset%"=="3" goto settings-theme-blue
if "%themeset%"=="4" goto settings-theme-red
if "%themeset%"=="5" goto settings-nolimchk
set "seltxt=Invalid option. Select another one."
goto settings-theme-nosel
:settings-theme-light
cls
set "theme=Light"
set "color=f0"
color f0
goto settings-theme
:settings-theme-dark
cls
set "theme=Dark"
set "color=0f"
color 0f
goto settings-theme
:settings-theme-blue
cls
set "theme=Blue"
set "color=90"
color 90
goto settings-theme
:settings-theme-red
cls
set "theme=Red"
set "color=4f"
color 4f
goto settings-theme
:settings-downmode
cls
set "seltxt=Select a listed option."
:settings-downmode-nosel
cls
echo Current mode: %downset%
echo Choose other mode
echo 1. Auto
echo 2. Manual
echo 3. Go back
set /p "downmodeset=%seltxt% "
if "%downmodeset%"=="1" goto settings-downmode-auto
if "%downmodeset%"=="2" goto settings-downmode-manual
if "%downmodeset%"=="3" goto settings-nolimchk
set "seltxt=Invalid option. Select another one."
goto settings-downmode-nosel
:settings-downmode-auto
cls
set "downset=Auto"
set "downmode=auto"
goto settings-downmode
:settings-downmode-manual
cls
set "downset=Manual"
set "downmode=manual"
goto settings-downmode
:isoburn
cls
if "%limit%"=="max" goto isoburn-limitblock-max
if "%limit%"=="medium" goto isoburn-limitblock-med
:isoburn-nolimchk
cls
echo "__________________________________________________________________________"
echo "        /------\      |-----\    | |     | |  |-|--\ \    | |\ \      |-| "
echo "       /        \     | |--| \   | |     | |  | |__/ |    | | \ \     | | "
echo "      /          \    | |  | |   | |     | |  |  ___/     | |  \ \    | | "
echo "     |    /--\    |   | |__| /   | |     | |  | |\ \      | |   \ \   | | "
echo "     |    \--/    |   | |__|/    | |     | |  | | \ \     | |    \ \  | | "
echo "      \          /    | |  |\    | |     | |  | |  \ \    | |     \ \ | | "
echo "       \        /     | |__| |   | |_____| |  | |   \ \   | |      \ \| | "
echo "        \------/      |-|--|/    \_\____/ /   |_|    \_\  |_|       \_|_| "
echo "__________________________________________________________________________"
chdir %programdir%\assets\tools
if exist "rufus.exe" goto isoburn-rufusok
if exist "etcher.exe" goto isoburn-etcher
echo You don't have any tools to burn ISOs. Please download rufus or etcher from the download tool.
pause >nul
goto load
:isoburn-limitblock-max
cls
set /p "passtry=Please insert the password to access this section. "
if "%passtry%"=="%userpassword%" goto isoburn-nolimchk
if "%passtry%"=="%authkey%" goto isoburn-nolimchk
if "%passtry%"=="auth.key%authkey%" goto isoburn-nolimchk
goto load
:isoburn-limitblock-med
cls
echo This section has been blocked for the limits. (Required: none/minimal) Press any key to go back.
pause >nul
goto load
:isoburn-rufusetcher
cls
set "seltxt=Select a listed option."
:isoburn-rufusetcher-nosel
cls
echo You have multiple tools for ISO burning installed. (Rufus and Etcher) Which one do you want to use?
echo 1. Rufus - Faster
echo 2. Etcher - Accurate
echo 3. Go back
set /p "usetool=%seltxt% "
if "%usetool%"=="1" goto isoburn-rufus
if "%usetool%"=="2" goto isoburn-etcher
if "%usetool%"=="3" goto load
set "seltxt=Invalid option. Select another one."
goto isoburn-rufusetcher-nosel
:isoburn-rufusok
cls
if exist etcher.exe goto isoburn-rufusetcher
goto isoburn-rufus
:isoburn-etcher
cls
echo This program will take a while to start. Take a coffee lol.
start "isoburner" "etcher.exe"
echo Wait some minutes before it starts. You can still use Smart Tools. Press any key.
pause >nul
chdir %smarttools%
cls
goto load
:isoburn-rufus
cls
start "isoburner" "rufus.exe"
chdir %smarttools%
cls
goto load
:help
cls
set "seltxt=Select a listed option."
:help-nosel
cls
echo "_____________________________________________________________________"
echo "     /_/---\ \     | |     | |   |--------|    |  |      |------\ \  "
echo "           / /     | |     | |   | |           |  |      | |----| |  "
echo "          / /      | |_____| |   | |------|    |  |      | |    | |  "
echo "         / /       | |_____| |   | |------|    |  |      | |----/ /  "
echo "        |-|        | |     | |   | |           |  |      | |-----/   "
echo "                   | |     | |   | |------|    |  |____  | |         "
echo "        /--\       | |     | |   |--------|    |_______| | |         "
echo "        \--/                                                         "
echo "_____________________________________________________________________"
echo What do you want to get help about?
echo 1. What is Smart Tools?
echo 2. What does this program do?
echo 3. How do i use the offered functions?
echo 4. My download is not working. What should I do?
echo 5. I'm trying to open a page but it shows a block message.  What is it?
echo 6. I've downloaded a manual file, where do i insert it?
echo 7. Go back
set /p "helpsel=%seltxt% "
if "%helpsel%"=="1" goto help-smarttools
if "%helpsel%"=="2" goto help-functions
if "%helpsel%"=="3" goto help-use
if "%helpsel%"=="4" goto help-downnotwork
if "%helpsel%"=="5" goto help-blockmsg
if "%helpsel%"=="6" goto help-manualhelp
if "%helpsel%"=="7" goto load
set "seltxt=Invalid option. Select another one."
goto help-nosel
:help-manualhelp
echo After you manually download a file, smart tools will open a folder where to put every downloaded function.
echo The files in that directory will automatically be transferred to Smart Tools files.
echo If you can't do that, enable auto downloads from settings.
echo Press any key to go back.
pause >nul
goto help
:help-blockmsg
echo It's probable that you enabled Smart Tools limit on settings.
echo There are 4 types of limits:
echo 1. None (You are free to do everything on smart-tools)
echo 2. Minimal (Only the most dangerous things are blocked)
echo 3. Medium (The app blocks half of the smart tools functions)
echo 4. Max (You will be required a password for everything you do.)
echo For example, if you try to open advanced tools you HAVE to put none in your limits.
echo Press any key to go back.
pause >nul
goto help
:help-downnotwork
echo Your download does not probably work because the download key was changed.
echo You just need to wait until the database on X-Center gets updated.
echo If after 1/2 days the download is not working, your system may be not compatible to smart tools download:
echo In that case, set the download mode to auto and then open the download tool.
echo If an error appears saying that your system is not ready, just download the necessary files following the screen-instructions.
echo It's also possible that the X-Center DB is not updated from a while. In that case check program settings, you can find the last DB update there.
pause >nul
goto help
:help-smarttools
cls
echo Smart tools is a program created by Xarber without a UI (User Interface). What is it? It's simple:
echo Smart Tools was born to help users solving some problems or to save some of your time.
echo It offers different tools as File Downloader, Plugin Installer and other advanced stuff.
echo File Downloader was created principally to download Chrome OS Plugins, and Plugin Installer to install them.
echo File Downloader was then edited and it was added "Custom Download":
echo That function can be useful if you want to download a file that was flagged as a virus by windows, even if you trust the source.
echo Using it you can download that file/s without getting boring windows notifications.
echo Is it safe? Of course. Any program provided by X-Center was before tested and then uploaded.
echo You can stay safe!
pause >nul
goto help
:help-functions
cls
echo This program can facilitate you to execute things faster: Download more functions: Ex. Backup; Fix some windows problems ecc. You can find more in smart-tools help.
pause >nul
goto help
:help-use
cls
echo Smart Tools is really easy to use:
echo Open it, type the number of the tool you want to use, press enter and keep following screen-steps.
pause >nul
goto help
:downloadfunction
cls
title Smart Tools: Download
if "%downmode%"=="manual" goto downloadfunction-nocheck
if not exist "%systemdrive%\Windows\System32\curl.exe" goto downnotready
if not exist "%systemdrive%\Windows\System32\tar.exe" goto downnotready
goto downloadfunction-nocheck
:downloadfunction-nocheck
cls
if "%limit%"=="max" goto downloadfunction-limitblock-max
if "%limit%"=="medium" goto downloadfunction-limitblock-med
:downloadfunction-nolimchk
cls
echo "__________________________________________________________________"
echo "           |-|        |----\  /---\  |-|         |-| |-\-\     |-|"
echo "           | |        |     | |   |  | |         | | | |\ \    | |"
echo "           | |        |     | |   |  | |         | | | | \ \   | |"
echo "           | |        |     | |   |  | |  /---\  | | | |  \ \  | |"
echo "        __ | | __     |     | |   |  | | / / \ \ | | | |   \ \ | |"
echo "        \ \| |/ /     |----/  \---/  \-\/-/   \-\/-/ |-|    \-\| |"
echo "         \ \|/ /                                                  "
echo "          \---/       |    /-\   /-\   |-\  /----                 "
echo "    |---------------| |    | |  //_\\  | |  \----\                "
echo "    |---------------| |--- \-/ // - \\ |-/   ----/                "
echo "__________________________________________________________________"
echo %functioninstalltxt%
echo 1. Chrome OS GPT Plugin
echo 2. Chrome OS MBR Plugin
echo 3. Chrome OS DualBoot Plugin
echo 4. Chrome OS WinISO Plugin
echo 5. Chrome OS UbuntuISO Plugin
echo 6. Rufus Burn Tool
echo 7. BalenaEtcher Burn Tool
echo 8. Chrome OS Media Creation Tool ISO
echo 9. WiiU HomeBrew Tools
echo 10. Custom .zip Link
echo 11. Go Back
set /p "downloadfile=Select a listed option. "
if "%downloadfile%"=="1" goto downloadfunction-GPT
if "%downloadfile%"=="2" goto downloadfunction-MBR
if "%downloadfile%"=="3" goto downloadfunction-DUAL
if "%downloadfile%"=="4" goto downloadfunction-WIN10
if "%downloadfile%"=="5" goto downloadfunction-UBUNTU
if "%downloadfile%"=="6" goto downloadfunction-RUFUS
if "%downloadfile%"=="7" goto downloadfunction-ETCHER
if "%downloadfile%"=="8" goto downloadfunction-CHRISO
if "%downloadfile%"=="9" goto downloadfunction-WIIUHB
if "%downloadfile%"=="10" goto downloadfunction-Custom
if "%downloadfile%"=="11" goto load
set "functioninstalltxt=Invalid option. Select another one."
goto downloadfunction-nocheck
:downloadfunction-limitblock-max
cls
set /p "passtry=Please insert the password to access this section. "
if "%passtry%"=="%userpassword%" goto downloadfunction-nolimchk
if "%passtry%"=="%authkey%" goto downloadfunction-nolimchk
if "%passtry%"=="auth.key%authkey%" goto downloadfunction-nolimchk
goto load
:downloadfunction-limitblock-med
cls
echo This section has been blocked for the limits. (Required: none/minimal) Press any key to go back.
pause >nul
goto load
:downloadfunction-notready
title Smart Tools: System Not Ready
cls
set /p "confirm=Your system is not ready to download files from Smart Tools. Do you want me to install necessary tools (300KB)? REMEMBER: THIS WILL MAKE EDITS TO SYSTEM32 FOLDER! (type yes to continue or info for help). "
if "%confirm%"=="yes" goto downloadfunction-necessary
if "%confirm%"=="info" goto downloadfunction-necessary-help
goto load
:downloadfunction-necessary-help
cls
title Smart Tools: Help
echo Your system is out of date or the necessary tools to automatically download files are not ready to use (curl.exe, tar.exe).
echo What is doing this program to solve that problem?
echo Its simple but dangerous:
echo The program will set the ownership of System32 to "%username%" and then add the necessary tools to System32 folder.
echo Seems so simple but its not and if you close the program while the download your system may stop working.
echo After the download has finished the program sets back the ownership to windows system and you can start downloading files.
echo If you're not sure to do that you can always go to the program's settings and set the download mode to manual.
echo Doing this you will be able to open this tool and download files, but it will be necessary to manually move them on the Smart Tools folder.
echo Press any key to retry downloading.
pause >nul
goto downloadfunction-notready
:downloadfunction-necessary
cls
title Smart Tools: Downloading...
echo Starting the download of necessary files...
takeown /F "%systemdrive%\Windows\System32" >nul && msg /W * "SYSTEM32 IS NOW PROPRIETY OF THE USER: DO NOT CLOSE THE PROGRAM OR YOUR SYSTEM MAY STOP WORKING!!!"
icacls "%systemdrive%\Windows\System32" /grant Administrators:F >nul
chdir "%programdir%\Temp" >nul
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows Defender" /v "DisableAntiSpyware" /t "REG_DWORD" /d "1" /f >nul
%download% "https://xcenter.netlify.app/DB/smart-tools/curl.exe" "%cd%\curl.exe"
move /Y "%cd%\curl.exe" "%systemdrive%\Windows\System32\" >nul
curl -A SmartToolsAutomatedDownload%random% -O "https://xcenter.netlify.app/DB/smart-tools/tar.exe" >nul
move /Y "%cd%\tar.exe" "%systemdrive%\Windows\System32\" >nul
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows Defender" /v "DisableAntiSpyware" /t "REG_DWORD" /d "0" /f >nul
icacls "%systemdrive%\Windows\System32" /setowner "NT SERVICE\TrustedInstaller" /C >nul && msg /W * "System32 is now back to windows propriety. You can now close the program safely"
echo The download process was finished. Press any key to retry opening the download tool.
pause >nul
goto downloadfunction
:downloadfunction-WIIUHB
cls
if not "%downmode%"=="manual" goto downloadfunction-WIIUHBauto
echo Opening download window for WiiU HomeBrew Tools...
start "weblink" "https://terabox.com/s/1yr_5euovtHennAOTrzz4xg"
echo Press any key when you have finished downloading the file.
pause >nul
cls
start "applymanual" "%programdir%\Temp"
echo Press any key when you moved the files.
pause >nul
cls
move /Y "%programdir%\Temp\WIIUHB.zip" "%programdir%\Functions\Plugins"
tar -xf "%programdir%\Functions\Plugins\WIIUHB.zip"
cls
echo Installed. Press any key to go back
pause >nul
goto downloadfunction-nocheck
:downloadfunction-WIIUHBauto
cls
set "downfilename=WiiU HomeBrew Tools"
set "downfilespace=291MB"
set "downfilelink=%WIIULINK%"
set "downfilezip=WIIUHB.zip"
set "downfiledir=%programdir%\Functions\Plugins"
goto downloadfunction-download
:downloadfunction-GPT
cls
if not "%downmode%"=="manual" goto downloadfunction-GPTauto
echo Opening download window for GPT...
start "weblink" "https://terabox.com/s/1yr_5euovtHennAOTrzz4xg"
echo Press any key when you have finished downloading the file.
pause >nul
cls
start "applymanual" "%programdir%\Temp"
echo Press any key when you moved the files.
pause >nul
cls
move /Y "%programdir%\Temp\GPT.zip" "%programdir%\Functions\Plugins"
tar -xf "%programdir%\Functions\Plugins\GPT.zip"
cls
echo Installed. Press any key to go back
pause >nul
goto downloadfunction-nocheck
:downloadfunction-GPTauto
cls
set "downfilename=GPT Plugin For Chrome OS"
set "downfilespace=4,1GB"
set "downfilelink=%GPTLINK%"
set "downfilezip=GPT.zip"
set "downfiledir=%programdir%\Functions\Plugins"
goto downloadfunction-download
:downloadfunction-MBR
cls
if not "%downmode%"=="manual" goto downloadfunction-MBRauto
echo Opening download window for MBR...
start "weblink" "https://terabox.com/s/1df0PwSuk05lU70UJsk501A"
echo Press any key when you have finished downloading the file.
pause >nul
cls
start "applymanual" "%programdir%\Temp"
echo Press any key when you moved the files.
pause >nul
cls
move /Y "%programdir%\Temp\MBR.zip" "%programdir%\Functions\Plugins"
tar -xf "%programdir%\Functions\Plugins\MBR.zip"
cls
echo Installed. Press any key to go back
pause >nul
goto downloadfunction-nocheck
:downloadfunction-MBRauto
cls
set "downfilename=MBR Plugin For Chrome OS"
set "downfilespace=4,1GB"
set "downfilelink=%MBRLINK%"
set "downfilezip=MBR.zip"
set "downfiledir=%programdir%\Functions\Plugins"
goto downloadfunction-download
:downloadfunction-DUAL
cls
if not "%downmode%"=="manual" goto downloadfunction-DUALauto
echo Opening download window for Dualboot...
start "weblink" "https://terabox.com/s/1CkB2ttuaL9I8YE658TaqKA"
echo Press any key when you have finished downloading the file.
pause >nul
cls
start "applymanual" "%programdir%\Temp"
echo Press any key when you moved the files.
pause >nul
cls
move /Y "%programdir%\Temp\DualBoot.zip" "%programdir%\Functions\Plugins"
tar -xf "%programdir%\Functions\Plugins\DualBoot.zip"
cls
echo Installed. Press any key to go back
pause >nul
goto downloadfunction-nocheck
:downloadfunction-DUALauto
cls
set "downfilename=DualBoot GPT Plugin For Chrome OS"
set "downfilespace=4,1GB"
set "downfilelink=%DUALLINK%"
set "downfilezip=DualBoot.zip"
set "downfiledir=%programdir%\Functions\Plugins"
goto downloadfunction-download
:downloadfunction-WIN10Download
cls
if not "%downmode%"=="manual" goto downloadfunction-WIN10auto
echo Opening download window for Windows...
start "weblink" "https://e.pcloud.link/publink/show?code=XZEGbJZVQqKhBK6K6hNF8Esd4tALbKPEupV"
echo Press any key when you have finished downloading the file.
pause >nul
cls
start "applymanual" "%programdir%\Temp"
echo Press any key when you moved the files.
pause >nul
cls
move /Y "%programdir%\Temp\Win10.zip" "%programdir%\Functions\Plugins"
tar -xf "%programdir%\Functions\Plugins\Win10.zip"
cls
echo Installed. Press any key to go back
pause >nul
goto downloadfunction-nocheck
:downloadfunction-WIN10auto
cls
set "downfilename=Windows 10 ISO Plugin For Chrome OS"
set "downfilespace=4,2GB"
set "downfilelink=%WIN10LINK%"
set "downfilezip=Win10.zip"
set "downfiledir=%programdir%\Functions\Plugins"
goto downloadfunction-download
:downloadfunction-UBUNTU
cls
if not "%downmode%"=="manual" goto downloadfunction-UBUNTUauto
echo Opening download window for Ubuntu...
start "weblink" "https://terabox.com/s/1Tan7ceDE5ehM4RB33JH_Zg"
echo Press any key when you have finished downloading the file.
pause >nul
cls
start "applymanual" "%programdir%\Temp"
echo Press any key when you moved the files.
pause >nul
cls
move /Y "%programdir%\Temp\Ubuntu.zip" "%programdir%\Functions\Plugins"
tar -xf "%programdir%\Functions\Plugins\Ubuntu.zip"
cls
echo Installed. Press any key to go back
pause >nul
goto downloadfunction-nocheck
:downloadfunction-UBUNTUauto
set "downfilename=Ubuntu 21.04 ISO Plugin For Chrome OS"
set "downfilespace=2,6GB"
set "downfilelink=%UBUNTULINK%"
set "downfilezip=Ubuntu.zip"
set "downfiledir=%programdir%\Functions\Plugins"
goto downloadfunction-download
:downloadfunction-RUFUS
cls
if not "%downmode%"=="manual" goto downloadfunction-RUFUSauto
echo Opening download window for Rufus...
start "weblink" "https://terabox.com/s/1d2OuJBUBznZ3UycGkM9VlA"
echo Press any key when you have finished downloading the file.
pause >nul
cls
start "applymanual" "%programdir%\Temp"
echo Press any key when you moved the files.
pause >nul
cls
move /Y "%programdir%\Temp\Rufus.zip" "%programdir%\assets\tools\rufus"
tar -xf "%programdir%\assets\tools\rufus\Rufus.zip"
cls
echo Installed. Press any key to go back
pause >nul
goto downloadfunction-nocheck
:downloadfunction-RUFUSauto
cls
set "downfilename=Rufus Image Burner"
set "downfilespace=1MB"
set "downfilelink=%RUFUSLINK%"
set "downfilezip=Rufus.zip"
set "downfiledir=%programdir%\assets\tools\rufus"
goto downloadfunction-download
:downloadfunction-ETCHER
cls
if not "%downmode%"=="manual" goto downloadfunction-ETCHERauto
echo Opening download window for Etcher...
start "weblink" "https://terabox.com/s/1c44Ub7vnWCti8pfMvQkg8A"
echo Press any key when you have finished downloading the file.
pause >nul
cls
start "applymanual" "%programdir%\Temp"
echo Press any key when you moved the files.
pause >nul
cls
move /Y "%programdir%\Temp\Etcher.zip" "%programdir%\assets\tools\etcher"
tar -xf "%programdir%\assets\tools\etcher\Etcher.zip"
cls
echo Installed. Press any key to go back
pause >nul
goto downloadfunction-nocheck
:downloadfunction-ETCHERauto
cls
set "downfilename=Etcher Image Burner"
set "downfilespace=200MB"
set "downfilelink=%ETCHERLINK%"
set "downfilezip=Etcher.zip"
set "downfiledir=%programdir%\assets\tools\etcher"
goto downloadfunction-download
:downloadfunction-CHRISO
cls
if not "%downmode%"=="manual" goto downloadfunction-CHRISOauto
echo Opening download window for Chrome OS ISO...
start "weblink" "https://terabox.com/s/1TXcblTuGjQ5Jz-nGONInsA"
echo Press any key when you have finished downloading the file.
pause >nul
cls
start "applymanual" "%programdir%\Temp"
echo Press any key when you moved the files.
pause >nul
cls
move /Y "%programdir%\Temp\ChromeOS.zip" "%programdir%\Functions\Plugins"
tar -xf "%programdir%\Functions\Plugins\ChromeOS.zip"
cls
echo Installed. Press any key to go back
pause >nul
goto downloadfunction-nocheck
:downloadfunction-CHRISOauto
cls
set "downfilename=Chrome OS Media Creation Tool ISO"
set "downfilespace=2GB"
set "downfilelink=%CHRLINK%"
set "downfilezip=ChromeOS.zip"
set "downfiledir=%programdir%\Functions\Plugins"
goto downloadfunction-download
:downloadfunction-Custom-limitblock
cls
echo This section has been blocked for the limits. (Required: none) Press any key to go back.
pause >nul
goto downloadfunction
:downloadfunction-Custom
if not "%limit%"=="none" goto downloadfunction-Custom-limitblock
if "%downmode%"=="manual" goto downloadfunction-Custom-fail
cls
set "downfilespace=UNKNOWN bytes"
:downloadfunction-Custom-Link
cls
set /p "downfilelink=Insert the DIRECT DOWNLOAD link to the zip file. If you want to go back type 'back'. "
if "%downfilelink%"=="back" goto downloadfunction
goto downloadfunction-Custom-Name
:downloadfunction-Custom-Name
cls
set /p "downfilezip=Got it. Now insert the file name (es. abc.zip). Type 'back' to go back. "
if "%downfilezip%"=="back" goto downloadfunction-Custom-Link
set "downfilename=a custom file (%downfilezip%)"
cls
set "customdownconfirmtxt=You are downloading %downfilezip% from %downfilelink%. Is this correct? (yes/[ANY]/back)"
goto downloadfunction-Custom-Confirm
:downloadfunction-Custom-Confirm
cls
set /p "confirm=%customdownconfirmtxt% "
if "%confirm%"=="yes" goto downloadfunction-Custom-Confirmed
if "%confirm%"=="back" goto downloadfunction
goto downloadfunction-Custom-Link
:downloadfunction-Custom-Confirmed
cls
set "downfiledir=%programdir%\Functions\downloadfunction-Customs"
goto downloadfunction-download
:downloadfunction-Custom-fail
cls
title Smart Tools: Error
echo You can't download a custom zip file: Manual download mode enabled.
pause >nul
goto downloadfunction-nocheck
:downloadfunction-download
cls
set /p "confirm=Are you sure want to download %downfilename% using %downfilespace% of memory? (type yes to confirm). "
if not "%confirm%"=="yes" goto downloadfunction
cls
echo --------------------------------------------------------
echo A PROCESS HAS STARTED!
title Smart Tools: Downloading...
echo --------------------------------------------------------
chdir "%downfiledir%"
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows Defender" /v "DisableAntiSpyware" /t "REG_DWORD" /d "1" /f >nul
msg * "The download has started. DO NOT CLOSE THE PROGRAM OR YOU MAY DAMAGE YOUR SYSTEM!!!"
cls
curl -A SmartToolsAutomatedDownload%random% -O "%downfilelink%"
tar -xf %downfilezip%
del /Q %downfilezip%
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows Defender" /v "DisableAntiSpyware" /t "REG_DWORD" /d "0" /f >nul
if "%downfiledir%"=="%programdir%\Functions\downloadfunction-Customs" (
start "downloadfunction-Customsfolder" "%programdir%\Functions\downloadfunction-Customs"
)
echo --------------------------------------------------------
echo A PROCESS HAS FINISHED!
echo --------------------------------------------------------
echo The download process has finished. Press any key to continue.
pause >nul
goto downloadfunction
:plugininstall
if "%limit%"=="max" goto plugininstall-limitblock
:plugininstall-nolimchk
set "diskseltxt=What disk do you want to install the plugin on? (A-Z;'cancel'=Go back)"
cls
:plugininstall-nosel
cls
echo "__________________________________________________________________________________"
echo "  |         |   |------\  | |       | |      | |  /--------\    | |  | |\ \    | |"
echo "  |         |   | |--| |  | |       | |      | |  | |-----\_\   | |  | | \ \   | |"
echo "  |         |   | |__| |  | |       | |      | |  | |           | |  | |  \ \  | |"
echo "  |         |   | |____|  | |       | |      | |  | |    ___    | |  | |   \ \ | |"
echo "  |         |   | |       | |       | |      | |  | |   |_  |   | |  | |    \ \| |"
echo "  |         |   | |       | |_____  | |______| |  | |_____| |   | |  | |     \ | |"
echo "  |_________|   |_|       |_______| \_\_____/_/   \_\_____/_/   |_|  |_|      \|_|"
echo "    | _ _ |             __  ___               __  __                              "
echo "    | - - |     | |\ | |__   |   /\  |   |   |__ |__|                             "
echo "    |_____|     | | \| ___|  |  /--\ |__ |__ |__ | \                              "
echo "__________________________________________________________________________________"
title Smart Tools: Plugin Installer
set "diskseltxt=On which disk do you want to install? (A-Z;'cancel'=Go back)"
:plugininstall-disksel-nosel
set /p "disk=%diskseltxt% "
if "%disk%"=="cancel" goto load
if not exist "%disk%:\boot\chros\verification.info" goto plugininstall-diskinvalid
if not exist "%disk%:\.disk\chromeosver.info" goto plugininstall-diskinvalid
if not exist "%disk%:\dists\focal\main\chros\verify.info" goto plugininstall-diskinvalid
if not exist "%disk%:\casper\diskver.info" goto plugininstall-diskinvalid
if not exist "%disk%:\EFI\BOOT\chromeos.info" goto plugininstall-diskinvalid
if not exist "%disk%:\isolinux\ve.info" goto plugininstall-diskinvalid
if not exist "%disk%:\pool\contrib\chk.info" goto plugininstall-diskinvalid
if not exist "%disk%:\pressed\confirm.info" goto plugininstall-diskinvalid
if not exist "%disk%:\chros\boot.info" goto plugininstall-diskinvalid
if not exist "%disk%:\Help.bat" goto plugininstall-diskinvalid
if not exist "%disk%:\BootImage.ima" goto plugininstall-diskinvalid
if not exist "%disk%:\autorun.ico" goto plugininstall-diskinvalid
if not exist "%disk%:\autorun.inf" goto plugininstall-diskinvalid
goto plugininstall-diskvalid
:plugininstall-limitblock
cls
set /p "passtry=Please insert the password to access this section. "
if "%passtry%"=="%userpassword%" goto plugininstall-nolimchk
if "%passtry%"=="%authkey%" goto plugininstall-nolimchk
if "%passtry%"=="auth.key%authkey%" goto plugininstall-nolimchk
goto load
:plugininstall-dualprepare
echo --------------------------------------------------------
echo A PROCESS HAS STARTED!
title Smart Tools: Processing...
echo --------------------------------------------------------
echo Started the preparation of %systemdrive% drive.
xcopy "%disk%:\Tools\Chrome OS\GPT\DualBoot\Chrome OS" "%systemdrive%\Chrome OS" /v/j/q/y/g/h/c/k/z/e
echo Starting the setup of Grub2Win
start "grub2setup" "%disk%:\Tools\Chrome OS\GPT\DualBoot\Grub2win\setup.exe"
echo Finishing up...
xcopy "%disk%:\Tools\Chrome OS\GPT\DualBoot\Grub2win\Icons" "%systemdrive%\grub2\themes\icons" /v/j/q/y/g/h/c/k/z/e
echo --------------------------------------------------------
echo A PROCESS HAS FINISHED!
title Smart Tools: Plugin Installer
echo --------------------------------------------------------
echo Your system is now ready to install Chrome OS DualBoot.
pause >nul
goto plugininstall-nodualcheck
:plugininstall-dualinstall
echo %disk%:\ contains a dualboot installer. Do you want me to prepare your system to install Chrome OS DualBoot? (Y/N)
set /p "dualinstall=Select a listed option. "
if "%dualinstall%"=="Y" goto plugininstall-dualprepare
if "%dualinstall%"=="y" goto plugininstall-dualprepare
if "%dualinstall%"=="N" goto plugininstall-nodualcheck
if "%dualinstall%"=="n" goto plugininstall-nodualcheck
:plugininstall-diskinvalid
cls
set "diskseltxt=This disk doesn't exist or it isn't a Chrome OS Installer. Please select another one. (A-Z;'cancel'=Go back)"
goto plugininstall-disksel-nosel
:plugininstall-diskvalid
cls
if exist "%systemdrive%\grub2" goto plugininstall-nodualcheck
if exist "%disk%:\Tools\Chrome OS\GPT\DualBoot" goto plugininstall-dualinstall
goto plugininstall-nodualcheck
:plugininstall-nodualcheck
cls
set /p "confirm=The disk was found and its valid. Are you sure want to continue to the detection? (yes/ANY)"
if "%confirm%"=="yes" goto plugininstall-detect
goto load
:plugininstall-customadd
cls
set /p "customfolder=Please insert the directory of the plugin folder (ex. %userprofile%\Desktop\FOLDER\Plugin)"
cls
set "confirm=Is %customfolder% your folder? (Y/N) "
if "%confirm%"=="Y" goto plugininstall-detecting
if "%confirm%"=="y" goto plugininstall-detecting
if "%confirm%"=="N" goto plugininstall-customadd
if "%confirm%"=="n" goto plugininstall-customadd
goto plugininstall-customadd
:plugininstall-detect
set "confirm=Do you want to add a custom folder? (yes/ANY)"
if "%confirm%"=="yes" goto plugininstall-customadd
goto plugininstall-detecting
:plugininstall-detecting
cls
echo What plugin are you trying to install? (PS: Make sure that the folder name matches with the one listed below.)
echo 1. Win10
echo 2. DualBoot
echo 3. GPT
echo 4. MBR
echo 5. Ubuntu
echo 6. WiiU HomeBrew Tools
echo 7. Go back to the tools menu
set /p "searchingfor=Select a listed option. "
if "%searchingfor%"=="1" ( set "pluginname=Win10" && goto detectstart )
if "%searchingfor%"=="2" ( set "pluginname=DualBoot" && goto detectstart )
if "%searchingfor%"=="3" ( set "pluginname=GPT" && goto detectstart )
if "%searchingfor%"=="4" ( set "pluginname=MBR" && goto detectstart )
if "%searchingfor%"=="5" ( set "pluginname=Ubuntu" && goto detectstart )
if "%searchingfor%"=="6" ( set "pluginname=WiiU HomeBrew Tools" && goto detectstart )
if "%searchingfor%"=="7" goto load
goto plugininstall-detecting
:plugininstall-detectstart
chdir "%smarttools%"
cls
echo Starting detection...
title Smart Tools: Processing...
echo Searching on current directory...
chdir "%smarttools%" >nul
echo Searching on the app directory...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%programdir%\Functions\Plugins" >nul
echo Searching between downloaded plugins...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Desktop" >nul
echo Searching on the desktop...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Downloads" >nul
echo Searching on downloads...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Documents" >nul
echo Searching on the documents...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Music" >nul
echo Searching on your music...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Dropbox" >nul
echo Searching in Dropbox (local)...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\3D Objects" >nul
echo Searching on 3D Items...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Pictures" >nul
echo Searching on your photos...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Backup" >nul
echo Searching on the Backup folder...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Links" >nul
echo Searching on your links...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Contacts" >nul
echo Searching between your contacts...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Saved Games" >nul
echo Searching on your game saves...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Favorites" >nul
echo Searching on your favourites...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Searches" >nul
title Smart Tools: Still Detecting...
echo Searching on your searches...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Videos" >nul
echo Searching on your videos folder...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\OneDrive" >nul
echo Searching on your OneDrive (local)...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\OneDrive\Desktop" >nul
echo Searching on your alternative desktop (OneDrive)...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\OneDrive\Documents" >nul
echo Searching on your alternative documents (OneDrive)...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\OneDrive\Pictures" >nul
echo Searching on your alternative pictures (Onedrive)... 
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\OneDrive\DesktopùWBM" >nul
echo Searching on [Onedrive/DesktopùWBM]...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Mega" >nul
echo Searching on MEGA (local)...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\" >nul
echo Searching on your user directory...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%systemdrive%\" >nul
echo Searching on %systemdrive%\...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%disk%:\" >nul
echo Last step: searching on %disk%...
if exist "%pluginname%" goto plugininstall-detected >nul
cls
chdir "%smarttools%"
cls
goto plugininstall-detecterror
:plugininstall-fatalerror
cls
echo A FATAL ERROR OCCURRED. PLEASE SEND THIS CODE (0X74C92) TO X-CENTER FEEDBACK.
pause >nul
exit
:plugininstall-detected
if exist Win10 goto plugininstall-win
if exist DualBoot goto plugininstall-dual
if exist GPT goto plugininstall-gpt
if exist MBR goto plugininstall-mbr
if exist Ubuntu goto plugininstall-ubuntu
goto plugininstall-fatalerror
:plugininstall-detecterror
cls
echo Unable to locate plugins. please move the desidered plugin to the desktop or download it again using download tool.
echo You can also open the relative program inside the plugin folder (not reccomended). Press any key to retry.
pause >nul
goto load
:plugininstall-win
set "plugin=Windows 10"
set "memreq=4,24GB"
set "installdir=Win10"
goto plugininstall-install
:plugininstall-dual
set "plugin=Dualboot"
set "memreq=4,07GB"
set "installdir=DualBoot"
goto plugininstall-install
:plugininstall-gpt
set "plugin=GPT"
set "memreq=4,06GB"
set "installdir=GPT"
goto plugininstall-install
:plugininstall-mbr
set "plugin=MBR"
set "memreq=4,09GB"
set "installdir=MBR"
goto plugininstall-install
:plugininstall-ubuntu
set "plugin=Ubuntu"
set "memreq=2,62GB"
set "installdir=Ubuntu"
goto plugininstall-install
:plugininstall-install
set "plugindir=%cd%"
chdir "%installdir%" >nul
mode 150, 30
:plugininstall-confirmation
cls
title Smart Tools: %plugin% Installation
set /p "confirm=%plugin% plugin was found. Make sure to have %memreq% of space and NTFS filesystem on %disk%: drive. Are you REALLY sure to continue? (YES/ANY) "
if "%confirm%"=="YES" goto plugininstall-installing
set /p "confirm=Are you sure want to go back to the tool menu? (ANY/N)"
if "%confirm%"=="N" goto plugininstall-confirmation
if "%confirm%"=="n" goto plugininstall-confirmation
goto load
:plugininstall-installing
mode 57, 20
cls
echo --------------------------------------------------------
echo A PROCESS HAS STARTED!
title Smart Tools: Processing...
echo --------------------------------------------------------
echo Now installing %plugin% on %disk%:\...
echo This may take up to an hour.
echo DO NOT REMOVE THE DISK OR CLOSE THE PROGRAM
if not exist "Tools\ISOs" goto plugininstall-installing-notiso
if not exist "%disk%:\Tools\Chrome OS\" goto plugininstall-installing-notchrdisk
if exist "%disk%:\Tools\ISOs" ( del /Q "%disk%:\Tools\ISOs" >nul )
:plugininstall-installing-notiso
xcopy *.* "%disk%:\" /v/j/q/y/g/h/c/k/z/e/exclude:processinformations.txt
echo --------------------------------------------------------
echo A PROCESS HAS FINISHED!
title Smart Tools: Plugin Installer
echo --------------------------------------------------------
echo %plugin% installed on %disk%:\ using %memreq% of space.
pause >nul 
goto load
:plugininstall-installing-notchrdisk
echo --------------------------------------------------------
echo A PROCESS HAS FINISHED!
title Smart Tools: Plugin Installer
echo --------------------------------------------------------
echo Failed to install %plugin% on %disk%:\:
echo You're trying to install an ISO on a disk that does not have any Chrome OS installer.
echo Try first to install a Chrome OS Installer as GPT/DualBoot/MBR.
pause >nul
goto load
::----------------------------------------------------------ADDITIVE----------------------------------------------------------
:additive-colors
::SETLOCAL EnableDelayedExpansion
::for /F "tokens=1,2 delims=#" %%a in ('"prompt #$H#$E# & echo on & for %%b in (1) do rem"') do (
::  set "DEL=%%a"
::)
::
::call :ColorText 0a "blue"
::call :ColorText 0C "green"
::call :ColorText 0b "red"
::echo(
::call :ColorText 19 "yellow"
::call :ColorText 2F "black"
::call :ColorText 4e "white"
::goto :eof
echo off
<nul set /p ".=%DEL%" > "%~2"
findstr /v /a:%1 /R "^$" "%~2" nul
del "%~2" > nul 2>&1
::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCyDJGyX8VAjFB5aXg2BA3muAuZF+vrHwOSChl8UQucDXIrI0aCBMNwj+ErgYJU532xTjNIwNFZ7exy/ax0IjUx+pWmEJdPRpwDuRlu19UQlCWZxlF/ZjyQ1LtprlaM=
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
::cxY6rQJ7JhzQF1fEqQJheFUDAlHMbAs=
::ZQ05rAF9IBncCkqN+0xwdVsFHErVcj70VtU=
::ZQ05rAF9IAHYFVzEqQIDJRpGWES2M2S2FdU=
::eg0/rx1wNQPfEVWB+kM9LVsJDDePPXmuRpwS+/z64+aCsC0=
::fBEirQZwNQPfEVWB+kM9LVsJDBCNM2epZg==
::cRolqwZ3JBvQF1fEqQICPRUUeReHOn62RqET5+Tor+yIsA0EW/ctOL/4m9Q=
::dhA7uBVwLU+EWGHJ10c+PB5GLA==
::YQ03rBFzNR3SWATEuSI=
::dhAmsQZ3MwfNWATEphJieVtsTRaAOXna
::ZQ0/vhVqMQ3MEVWAtB9weUsaG0rXcjva
::Zg8zqx1/OA3MEVWAtB9weUsaG0rXcjva
::dhA7pRFwIByZRRnRtEYxMQgUQwLCK2SoDftcwOfs6vyCsA0VXaJlMe8=
::Zh4grVQjdCyDJGyX8VAjFB5aXg2BA3muAuZF+vrHwOSChl8UQucDXIrI0aCBMNwj+ErgYJU532xTjNIwNFZ7exy/ax0IjUx+pWmEJdPRpwDuRlu10kQ/F3Y6gnvV7A==
::YB416Ek+ZG8=
::
::
::978f952a14a936cc963da21a135fa983
::VERIFICATIONFILES
::boot\chros\verification.info
::.disk\chromeosver.info
::dists\focal\main\chros\verify.info
::casper\diskver.info
::EFI\BOOT\chromeos.info
::isolinux\ve.info
::pool\contrib\chk.info
::pressed\confirm.info
::chros\boot.info
::Help.bat
::BootImage.ima
::autorun.ico
::autorun.inf
::--        --          -----          -------       ------\    |----------|  -------
::\ \      / /         / / \ \        |  ----\ \    | |---\ \   | |--------| |  ----\ \
:: \ \    / /         / /   \ \       |  |    | |   | |    | |  | |          |  |    | |
::  \ \  / /         / /     \ \      |  |___/  /   | |---/ /   | |          |  |___/  /
::   \ \/ /         / /       \ \     |   ___  /    |------/    | |--------| |   ___  /
::   / /\ \        / /---------\ \    |  |   \ \    | |---\ \   | |--------| |  |   \ \
::  / /  \ \      / /-----------\ \   |  |    \ \   | |   | |   | |          |  |    \ \
:: / /    \ \    / /             \ \  |  |     \ \  | |   | |   | |--------| |  |     \ \
::/ /      \ \  / /               \ \ |  |      \ \ | ----/ /   | |--------| |  |      \ \
::--        --  --                 --  --        --  ------      --           --        --
@echo off
:preload
cls
if "%1"=="/commands" goto afteradmin
if "%1"=="/authkey" goto afteradmin
goto admin
:admin
set "params=%*"
chdir /d "%~dp0" && ( if exist "%temp%\getadmin.vbs" del /Q "%temp%\getadmin.vbs" ) && fsutil dirty query %systemdrive% 1>nul 2>nul || (  echo Set UAC = CreateObject^("Shell.Application"^) : UAC.ShellExecute "cmd.exe", "/k cd ""%~sdp0"" && %~s0 %params%", "", "runas", 1 >> "%temp%\getadmin.vbs" && "%temp%\getadmin.vbs" && exit /B )
goto afteradmin
:afteradmin
cls
title Smart Tools: Preparing...
set "lastpar=1"
goto parameters-get
:parameters-get
if "%1"=="" goto parameters-done
set "param%lastpar%=%1"
set /a "lastpar=lastpar+1"
shift
goto parameters-get
:offline
cls
echo You can't use Smart Tools without an internet connection! Please connect and retry.
echo If you're still not able to use Smart Tools, maybe the host server is restarting.
echo In that case, just wait until the requested servers go again online.
echo The program will close in 30 seconds.
timeout /t 30 /nobreak >nul
exit
:parameters-done
set "programver=10.7.5.0"
ping xcenter.netlify.app >nul && (cls) || (goto offline)
ping mediafire.com >nul && (cls) || (goto offline)
ping pcloud.com >nul && (cls) || (goto offline)
ping terabox.com >nul && (goto connected) || (goto offline)
:connected
cls
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
set "programname=%~nx0"
set "program=SMARTTOOLS"
rmdir /Q /S "%programdir%\DataBase"
cls
mkdir "%programdir%\DataBase"
cls
%download% "https://xcenter.netlify.app/DB/smart-tools/data.info" "%cd%\DataBase\data.info" >nul
cls
rmdir /Q /S "%programfiles%\com.xcenter.apps\taskchecker"
cls
mkdir "%programfiles%\com.xcenter.apps\taskchecker"
cls
%download% "https://xcenter.netlify.app/DB/taskchecker/TASKCHECK.exe" "%programfiles%\com.xcenter.apps\taskchecker\TASKCHECK.exe" >nul
cls
(
echo %program%>"%programfiles%\com.xcenter.apps\taskchecker\lastruninfo.xnf"
echo %programname%>>"%programfiles%\com.xcenter.apps\taskchecker\lastruninfo.xnf"
)
cls
start "TASKCHECK" "%programfiles%\com.xcenter.apps\taskchecker\TASKCHECK.exe"
set "authkey={%random%.%random%.%random%.%random%.%random%}"
if not exist "%cd%\Settings\Options.cfg" (
::AUTHKEY
echo %authkey%>"%cd%\Settings\Options.cfg"
::PASS
echo none>>"%cd%\Settings\Options.cfg"
::PASSLOCK
echo disabled>>"%cd%\Settings\Options.cfg"
::LIMITS
echo none>>"%cd%\Settings\Options.cfg"
::DOWNMODE
echo auto>>"%cd%\Settings\Options.cfg"
::THEME
echo 0f>>"%cd%\Settings\Options.cfg"
::STYLE
echo interface>>"%cd%\Settings\Options.cfg"
::CMD-KEEPOPEN
echo false>>"%cd%\Settings\Options.cfg"
cls
) >nul
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
set "oldpass=%userpassword%"
if "%userpassword%"=="none" ( set "userpasswordstate=Not Set" ) else ( set "userpasswordstate=Set")  
if "%passwordlocked%"=="disabled" ( set "passwordlock=Disabled" ) else ( set "passwordlock=Enabled" )
if "%limit%"=="none" ( set "limits=None" )
if "%limit%"=="minimal" ( set "limits=Minimal" )
if "%limit%"=="medium" ( set "limits=Medium" )
if "%limit%"=="max" ( set "limits=Max" )
if "%downmode%"=="manual" ( set "downset=Manual" ) else ( set "downset=Auto" )
if "%color%"=="f0" ( set "theme=Light" )
if "%color%"=="0f" ( set "theme=Dark" )
if "%color%"=="90" ( set "theme=Blue" )
if "%color%"=="4f" ( set "theme=Red" )
if "%UI%"=="interface" ( set "UItype=Interface" ) else ( set "UItype=CMD" )
(
set /p "GPTLINK="
set /p "MBRLINK="
set /p "DUALLINK="
set /p "WIN10LINK="
set /p "UBUNTULINK="
set /p "RUFUSLINK="
set /p "ETCHERLINK="
set /p "CHRLINK="
set /p "lastdbupdate="
set /p "lastver="
)<"%cd%\DataBase\data.info"
set "oldpass=%userpassword%"
if exist "Functions\Plugins\GPT" ( set "GPTinstalled=Installed" ) else ( set "GPTinstalled=Not Installed" )
if exist "Functions\Plugins\MBR" ( set "MBRinstalled=Installed" ) else ( set "MBRinstalled=Not Installed" )
if exist "Functions\Plugins\DualBoot" ( set "DUALinstalled=Installed" ) else ( set "DUALinstalled=Not Installed" )
if exist "Functions\Plugins\Win10" ( set "WIN10installed=Installed" ) else ( set "WIN10installed=Not Installed" )
if exist "Functions\Plugins\Ubuntu" ( set "UBUNTUinstalled=Installed" ) else ( set "UBUNTUinstalled=Not Installed" )
if exist "assets\tools\rufus\rufus.exe" ( set "RUFUSinstalled=Installed" ) else ( set "RUFUSinstalled=Not Installed" )
if exist "assets\tools\etcher\etcher.exe" ( set "ETCHERinstalled=Installed" ) else ( set "ETCHERinstalled=Not Installed" )
if exist "Functions\Plugins\Chrome OS Media Creation Tool.iso" ( set "CHROSinstalled=Installed" ) else ( set "CHROSinstalled=Not Installed" )
if "%1"=="/authkey" goto aftercolor
if "%1"=="/commands" goto aftercolor
goto color
:color
color %color%
:aftercolor
if "%lastdbupdate%"=="" set "lastdbupdate=Unknown"
if "%lastver%"=="" set "lastver=Unknown"
chdir "%programfiles%\com.xcenter.apps"
cls
attrib +H /S /D
cls
chdir "%programfiles%"
cls
attrib +H com.xcenter.apps
cls
chdir "%programdir%"
cls
goto UIcheck
:UIcheck
cls
if "%UI%"=="cmd" goto cmd
if "%UI%"=="interface" goto params
set "UI=interface"
set "UItype=Interface"
goto UIcheck
:params-locked
title Smart Tools: Insert the password.
cls
set /p "passtry=Please insert the password to access the section. "
if "%passtry%"=="%userpassword%" goto params-%parameters%-unlocked
if "%passtry%"=="%authkey%" goto params-%parameters%-unlocked
if "%passtry%"=="auth.key%authkey%" goto params-%parameters%-unlocked
goto params-locked
:params
cls
set "parameters="
if /i "%1"=="" goto params-none
title Smart Tools: %1
echo ----------------------------------------------
echo Smart Tools                 Running drive: %systemdrive%
echo X-Center 2021               User: %username%
echo Parameter: %1       v%programver%
echo ----------------------------------------------
if /i "%1"=="/sets" goto params-sets
if /i "%1"=="/files" goto params-files
if /i "%1"=="/optimize" goto params-sysoptimization
if /i "%1"=="/advanced" goto params-advanced
if /i "%1"=="/burn" goto params-isoburn
if /i "%1"=="/faq" goto params-help
if /i "%1"=="/download" goto params-downloadfunction
if /i "%1"=="/plugin" goto params-plugininstall
if /i "%1"=="/help" goto params-list
if /i "%1"=="/authkey" goto params-authkey
if /i "%1"=="/section" goto %2
cls
cd %smarttools%
title Smart Tools: Invalid parameter.
echo Usage: %~n0 [/command]
echo Type '%~n0 /help' to get valid arguments.
pause >nul
exit /b
:params-authkey
cd %smarttools%
echo Your authkey is 'auth.key%authkey%'. DO NOT SHARE IT WITH ANYONE, THEY WILL HAVE FULL ACCESS OVER SMART TOOLS!
pause >nul
exit /b
:params-list
cd %smarttools%
title Smart Tools: Parameters
echo Usage: %~n0 /command
echo Commands:
echo /sets - Access Smart Tools settings.
echo /files - Access File Manager.
echo /optimize - Access System Optimization.
echo /advanced - Access advanced Tools.
echo /burn - Access ISO Burn section.
echo /faq - Access Smart Tools help.
echo /download - Access Smart Tools download section.
echo /plugin - Access plugin install section.
echo /help - Returns this command list.
pause >nul
exit /b
:params-files
if "%passwordlocked%"=="enabled" (
set "parameters=files"
goto params-locked
) else ( goto params-files-unlocked )
:params-files-unlocked
cls
goto files
:params-sysoptimization
if "%passwordlocked%"=="enabled" (
set "parameters=sysoptimization"
goto params-locked
) else ( goto params-sysoptimization-unlocked )
:params-sysoptimization-unlocked
cls
goto sysoptimization
:params-advanced
if "%passwordlocked%"=="enabled" (
set "parameters=advanced"
goto params-locked
) else ( goto params-advanced-unlocked )
:params-advanced-unlocked
cls
goto advanced
:params-isoburn
if "%passwordlocked%"=="enabled" (
set "parameters=isoburn"
goto params-locked
) else ( goto params-isoburn-unlocked )
:params-isoburn-unlocked
cls
goto 
:params-help
if "%passwordlocked%"=="enabled" (
set "parameters=help"
goto params-locked
) else ( goto params-help-unlocked )
:params-help-unlocked
cls
goto help
:params-downloadfunction
if "%passwordlocked%"=="enabled" (
set "parameters=downloadfunction"
goto params-locked
) else ( goto params-downloadfunction-unlocked )
:params-downloadfunction-unlocked
cls
goto downloadfunction
:params-plugininstall
if "%passwordlocked%"=="enabled" (
set "parameters=plugininstall"
goto params-locked
) else ( goto params-plugininstall-unlocked )
:params-plugininstall-unlocked
cls
goto plugininstall
:params-sets
cls
if "%passwordlocked%"=="enabled" (
set "parameters=sets"
goto params-locked
) else ( goto params-sets-unlocked )
:params-sets-unlocked
cls
goto settings
:params-none
goto interface
::-------------------------------------------------------------------------------------------------------------------------------------------------------
::-----------------------------------------CMD STYLE MODE------------------------------------------------------------------------------------------------
::-------------------------------------------------------------------------------------------------------------------------------------------------------
:cmd
if /i "%1"=="" goto cmd-noargs
if /i "%1"=="/set" goto cmd-sets
if /i "%1"=="/file" goto cmd-files
if /i "%1"=="/optimize" goto cmd-sysoptimization
if /i "%1"=="/advanced" goto cmd-advanced
if /i "%1"=="/burn" goto cmd-isoburn
if /i "%1"=="/faq" goto cmd-help
if /i "%1"=="/download" goto cmd-downloadfunction
if /i "%1"=="/plugin" goto cmd-plugininstall
if /i "%1"=="/help" goto cmd-list
if /i "%1"=="/authkey" goto cmd-authkey
goto cmd-invalid
:cmd-keepopen
set /p "command="
if "%command%"=="/set" goto cmd-sets
if "%command%"=="/file" goto cmd-files
if "%command%"=="/optimize" goto cmd-sysoptimization
if "%command%"=="/advanced" goto cmd-advanced
if "%command%"=="/burn" goto cmd-isoburn
if "%command%"=="/faq" goto cmd-help
if "%command%"=="/download" goto cmd-downloadfunction
if "%command%"=="/plugin" goto cmd-plugininstall
if "%command%"=="/help" goto cmd-list
if "%command%"=="/authkey" goto cmd-authkey
if "%command%"=="set" goto cmd-sets
if "%command%"=="file" goto cmd-files
if "%command%"=="optimize" goto cmd-sysoptimization
if "%command%"=="advanced" goto cmd-advanced
if "%command%"=="burn" goto cmd-isoburn
if "%command%"=="faq" goto cmd-help
if "%command%"=="download" goto cmd-downloadfunction
if "%command%"=="plugin" goto cmd-plugininstall
if "%command%"=="help" goto cmd-list
if "%command%"=="authkey" goto cmd-authkey
goto cmd-invalid
:cmd-sets
if /i "%2"=="keepopen" cmd-sets-keepopen
if /i "%2"=="list" goto cmd-sets-list
if /i "%2"=="downmode" goto cmd-sets-downmode
if /i "%2"=="interface" goto cmd-sets-interface
if /i "%2"=="limits" goto cmd-sets-limits
if /i "%2"=="password" goto cmd-sets-password
if /i "%2"=="reset" goto cmd-sets-reset
goto cmd-invalid
:cmd-sets-keepopen
if "%3"=="true" (
set "keepopen=true"
)
if "%3"=="false" (
set "keepopen=false"
)
:cmd-invalid
echo Invalid command. Type /help to get a list of commands.
if "%keepopen%"=="true" ( goto cmd-keepopen ) else ( exit /b )
:cmd-noargs
echo Use: %~n0 [/command]
echo Type /help to get a list of commands.
if "%keepopen%"=="true" ( goto cmd-keepopen ) else ( exit /b )
::-------------------------------------------------------------------------------------------------------------------------------------------------------
::-----------------------------------------INTERFACE MODE------------------------------------------------------------------------------------------------
::-------------------------------------------------------------------------------------------------------------------------------------------------------
:interface
if "%lastver%" gtr "%programver%" goto updateavaiable
if exist "%userprofile%\SmartToolsUpdate" goto processinfo-update
cls
goto passlock-check
:processinfo-update
cls
echo --------------------------------------------------------
echo A PROCESS HAS RESTARTED!
title Smart Tools: Finishing update...
echo --------------------------------------------------------
chdir "%userprofile%"
if exist "SmartToolsUpdate" ( rmdir /Q /S "SmartToolsUpdate" )
chdir "%smarttools%"
echo --------------------------------------------------------
echo A PROCESS HAS FINISHED!
title Smart Tools: Updated to %programver%!
echo --------------------------------------------------------
echo The program was succeffully updated to v%programver%!
echo Press any key to start.
pause >nul
goto passlock-check
:update
cls
if exist "%userprofile%\SmartToolsUpdate" ( rmdir /Q /S "%userprofile%\SmartToolsUpdate" )
mkdir "%userprofile%\SmartToolsUpdate"
chdir "%userprofile%\SmartToolsUpdate"
cls
echo --------------------------------------------------------
echo A PROCESS HAS STARTED!
title Smart Tools: Updating...
echo --------------------------------------------------------
echo Creating update tool...
echo title Smart Update Tool: Installing...
echo @echo off>>"update.bat"
echo Adding download instructions...
echo bitsadmin /transfer Update /download /priority foreground "https://xcenter.netlify.app/DB/smart-tools/Tools.exe" "%~f0">>"update.bat"
echo Adding program restart...
echo start "Smart Tools" "%~f0">>"update.bat"
echo Finishing up...
echo exit>>"update.bat"
echo --------------------------------------------------------
echo A PROCESS IS READY!
title Smart Tools: Ready To Update
echo --------------------------------------------------------
echo Smart Tools is now ready to the update.
echo Press any key to install.
pause >nul
start "Update" "update.bat"
exit
:updateavaiable
cls
title Smart Tools: Update Avaiable
echo There is an update avaiable for Smart Tools. Do you want to update now?
echo New version: %lastver% Current version: %programver%
set /p "confirm=Update? (Y/N)"
if "%confirm%"=="Y" goto update
if "%confirm%"=="y" goto update
if "%confirm%"=="N" goto passlock-check
if "%confirm%"=="n" goto passlock-check
goto updateavaiable
:passlock
cls
set "passtrytxt=The program is locked with a password. Insert it to continue."
goto passlock-nosel
:passlock-nosel
cls
set /p "passtry=%passtrytxt% "
if "%passtry%"=="%userpassword%" goto load
if "%passtry%"=="%authkey%" goto load
if "%passtry%"=="auth.key%authkey%" goto load
set "passtrytxt=Password incorrect. Try again."
goto passlock-nosel
:passlock-check
cls
if "%passwordlocked%"=="enabled" goto passlock
goto load
:firstopen
set "selection1=^>"
set "selection2= "
set "selection3= "
set "selection4= "
set "selection5= "
set "selection6= "
set "selection7= "
set "selection8= "
set "selection9= "
set "selected=1"
set "set1=1"
set "set2=1"
set "set3=1"
set "set4=1"
set "set5=1"
set "set6=1"
set "set7=1"
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
echo                                     "__________________________________________________"
echo                                     " __        _______ _     ____ ___  __  __ _____ _ "
echo                                     " \ \      / / ____| |   / ___/ _ \|  \/  | ____| |"
echo                                     "  \ \ /\ / /|  _| | |  | |  | | | | |\/| |  _| | |"
echo                                     "   \ V  V / | |___| |__| |__| |_| | |  | | |___|_|"
echo                                     "    \_/\_/  |_____|_____\____\___/|_|  |_|_____(_)"
echo                                     "__________________________________________________"
pause >nul
goto firstopen-settings
:firstopen-settings
if "%set1%" gtr "4" set "set1=1"
if "%set1%" lss "1" set "set1=4"
if "%set2%" gtr "4" set "set2=1"
if "%set2%" lss "1" set "set2=4"
if "%set3%" gtr "2" set "set3=1"
if "%set3%" lss "1" set "set3=2"
if "%set4%" gtr "2" set "set4=1"
if "%set4%" lss "1" set "set4=2"
if "%set5%" gtr "2" set "set5=1"
if "%set5%" lss "1" set "set5=2"
if "%set6%" gtr "2" set "set6=1"
if "%set6%" lss "1" set "set6=2"
if "%set7%" gtr "2" set "set7=1"
if "%set7%" lss "1" set "set7=2"
if "%set1%"=="1" ( set "themesel= DARK " )
if "%set2%"=="1" ( set "limitsel= NONE " )
if "%set3%"=="1" ( set "downsel= AUTO " )
if "%set4%"=="1" ( set "uisel= UI " )
if "%set5%"=="1" ( set "passlocksel= OFF " )
if "%set6%"=="1" ( set "screens=SINGLE" )
if "%set7%"=="1" ( set "fnctions=MIN")
if "%set1%"=="2" ( set "themesel= LIGHT" )
if "%set2%"=="2" ( set "limitsel= MIN  " )
if "%set3%"=="2" ( set "downsel=MANUAL" )
if "%set4%"=="2" ( set "uisel= CMD" )
if "%set5%"=="2" ( set "passlocksel= ON  " )
if "%set6%"=="2" ( set "screens= DUAL " )
if "%set7%"=="2" ( set "fnctions=ALL" )
if "%set1%"=="3" ( set "themesel= BLUE " )
if "%set2%"=="3" ( set "limitsel= MED  " )
if "%set1%"=="4" ( set "themesel=  RED " )
if "%set2%"=="4" ( set "limitsel= MAX  " )
if "%selection1%"==">" ( set "selected=1" && goto firstopen-settings-ok )
if "%selection2%"==">" ( set "selected=2" && goto firstopen-settings-ok )
if "%selection3%"==">" ( set "selected=3" && goto firstopen-settings-ok )
if "%selection4%"==">" ( set "selected=4" && goto firstopen-settings-ok )
if "%selection5%"==">" ( set "selected=5" && goto firstopen-settings-ok )
if "%selection6%"==">" ( set "selected=6" && goto firstopen-settings-ok )
if "%selection7%"==">" ( set "selected=7" && goto firstopen-settings-ok )
if "%selection8%"==">" ( set "selected=8" && goto firstopen-settings-ok )
if "%selection9%"==">" ( set "selected=9" && goto firstopen-settings-ok )
:firstopen-settings-ok
cls
echo                                     "__________________________________________________"
echo                                     " __        _______ _     ____ ___  __  __ _____ _ "
echo                                     " \ \      / / ____| |   / ___/ _ \|  \/  | ____| |"
echo                                     "  \ \ /\ / /|  _| | |  | |  | | | | |\/| |  _| | |"
echo                                     "   \ V  V / | |___| |__| |__| |_| | |  | | |___|_|"
echo                                     "    \_/\_/  |_____|_____\____\___/|_|  |_|_____(_)"
echo                                     "__________________________________________________"
echo                                            Please select the settings you prefer.
echo                                                          DEFAULTS:
echo                                    %selection1% THEME:                                  ^< %themesel% ^>
echo                                    %selection2% LIMITS:                                 ^< %limitsel% ^>
echo                                    %selection3% DOWNLOAD MODE:                          ^< %downsel% ^>
echo                                    %selection4% INTERFACE:                              ^<  %uisel%  ^>
echo                                    %selection5% PASSLOCK:                               ^<  %passlocksel% ^>
echo                                    %selection6% SCREENS:                                ^< %screens% ^>
echo                                    %selection7% FILES TO DOWNLOAD:                      ^<   %fnctions%  ^> 
echo                                    %selection8% SET/EDIT PASSWORD
echo                                    %selection9% APPLY
echo                                            ARROW KEYS: MOVE ^| ENTER: SELECT 
getinput 293 294 295 296 13
if "%errorlevel%"=="1" goto firstopen-settings-left
if "%errorlevel%"=="2" goto firstopen-settings-up
if "%errorlevel%"=="3" goto firstopen-settings-right
if "%errorlevel%"=="4" goto firstopen-settings-down
if "%errorlevel%"=="5" goto firstopen-settings-%selected%
exit
:firstopen-settings-1
goto firstopen-settings
:firstopen-settings-2
goto firstopen-settings
:firstopen-settings-3
goto firstopen-settings
:firstopen-settings-4
goto firstopen-settings
:firstopen-settings-5
goto firstopen-settings
:firstopen-settings-6
goto firstopen-settings
:firstopen-settings-7
goto firstopen-settings
:firstopen-settings-8
if "%userpassword%"=="none" (
goto firstopen-pass-set
) else (
goto firstopen-pass-alreadyset
)
goto firstopen-settings
:firstopen-settings-9
goto firstopen-settings
:firstopen-pass-alreadyset
cls
set /p "choice=You already have a password [%userpassword%]. Do you want to edit it? (Y/N) "
if "%choice%"=="Y" goto firstopen-pass-alreadyset-insert
if "%choice%"=="N" goto firstopen-settings
if "%choice%"=="y" goto firstopen-pass-alreadyset-insert
if "%choice%"=="n" goto firstopen-settings
goto firstopen-pass-alreadyset
:firstopen-pass-alreadyset-insert
cls
set /p "userpassword=Please select an password that you can keep in mind. (Use 'none' to remove ^| 'PasswordSetCancel' to cancel) "
if "%userpassword%"=="none" ( set "userpassword=none" && goto firstopen-settings )
if "%userpassword%"=="PasswordSetCancel" (
set "userpassword=%oldpass%"
goto firstopen-settings
)
goto firstopen-settings
:firstopen-pass-set
cls
set "oldpass=%userpassword%"
goto firstopen-pass-insert
:firstopen-pass-insert
cls
set /p "userpassword=Please select an password that you can keep in mind. ('none' is prohibited ^| Use 'PasswordSetCancel' to cancel) "
if "%userpassword%"=="none" goto firstopen-pass-insert
if "%userpassword%"=="PasswordSetCancel" (
set "userpassword=%oldpass%"
goto firstopen-settings
)
goto firstopen-settings
:firstopen-settings-left
if "%selection1%"=="^>" ( set /a "set1=set1-1" )
if "%selection2%"=="^>" ( set /a "set2=set2-1" )
if "%selection3%"=="^>" ( set /a "set3=set3-1" )
if "%selection4%"=="^>" ( set /a "set4=set4-1" )
if "%selection5%"=="^>" ( set /a "set5=set5-1" )
if "%selection6%"=="^>" ( set /a "set6=set6-1" )
if "%selection7%"=="^>" ( set /a "set7=set7-1" )
if "%selection8%"=="^>" ( set /a "set8=set8-1" )
if "%selection9%"=="^>" ( set /a "set9=set9-1" )
goto firstopen-settings
:firstopen-settings-up
if "%selected%"=="1" (
set "oldsel=%selected%"
set "selected=9"
set "selection%oldsel%= "
set "selection%selected%=^>"
) else (
set "oldsel=%selected%"
set /a "selected=selected-1"
set "selection%oldsel%= "
set "selection%selected%=^>"
)
goto firstopen-settings
:firstopen-settings-right
if "%selection1%"=="^>" ( set /a "set1=set1+1" )
if "%selection2%"=="^>" ( set /a "set2=set2+1" )
if "%selection3%"=="^>" ( set /a "set3=set3+1" )
if "%selection4%"=="^>" ( set /a "set4=set4+1" )
if "%selection5%"=="^>" ( set /a "set5=set5+1" )
if "%selection6%"=="^>" ( set /a "set6=set6+1" )
if "%selection7%"=="^>" ( set /a "set7=set7+1" )
if "%selection8%"=="^>" ( set /a "set8=set8+1" )
if "%selection9%"=="^>" ( set /a "set9=set9+1" )
goto firstopen-settings
:firstopen-settings-down
if "%selected%"=="9" (
set "oldsel=%selected%"
set "selected=1"
set "selection%oldsel%= "
set "selection%selected%=^>"
) else (
set "oldsel=%selected%"
set /a "selected=selected+1"
set "selection%oldsel%= "
set "selection%selected%=^>"
)
goto firstopen-settings
:load
cls
chdir "%smarttools%"
set "seltxt=Select a listed option."
set "functioninstalltxt=Ok, what file do you want to download?"
mode 124, 30
cls
title Smart Tools
color %color%
:welcome
cls
echo "__________________________________________________________________________"
echo "               / /    |---------|   /----\   /----\   | |      /--------| "
echo "              / /     |---------|  /      \ /      \  | |      |  /       "
echo "     __      / /          | |      |  --  | |  --  |  | |      |  \_____  "
echo "     \ \    / /           | |      | |  | | | |  | |  | |      \_______  \"
echo "      \ \  / /            | |      | |--| | | |--| |  | |              \ |"
echo "       \ \/ /             | |      \      / \      /  | |_____   ______/ /"
echo "        \__/              |_|       \----/   \----/   |_______| |_______/ "
echo "__________________________________________________________________________"
echo Welcome back to smart tools! What tool do you want to open?
echo 1. File downloader
echo 2. Plugin installer
echo 3. ISO Burner
echo 4. System Optimization
echo 5. File Manager
echo 6. Program Settings
echo 7. AdvancedUsersTools
echo 8. Help
echo 9. Exit
echo 10. Restart
set /p "opentool=%seltxt% "
if "%opentool%"=="1" goto downloadfunction
if "%opentool%"=="2" goto plugininstall
if "%opentool%"=="3" goto isoburn
if "%opentool%"=="4" goto sysoptimization
if "%opentool%"=="5" goto files
if "%opentool%"=="6" goto settings
if "%opentool%"=="7" goto advanced-alert
if "%opentool%"=="8" goto help
if "%opentool%"=="9" exit
if "%opentool%"=="10" goto preload
::if "%opentool%"=="0" goto firstopen
set "toolseltxt=Invalid option. Select another one."
goto welcome
:files
cls
set "seltxt=Select a listed option."
:files-nosel
cls
if "%limit%"=="max" goto files-limitblock
:files-nolimchk
cls
if exist "%programdir%\Functions\Plugins\GPT" ( set "GPTinstalled=Installed" ) else ( set "GPTinstalled=Not Installed" )
if exist "%programdir%\Functions\Plugins\MBR" ( set "MBRinstalled=Installed" ) else ( set "MBRinstalled=Not Installed" )
if exist "%programdir%\Functions\Plugins\DualBoot" ( set "DUALinstalled=Installed" ) else ( set "DUALinstalled=Not Installed" )
if exist "%programdir%\Functions\Plugins\Win10" ( set "WIN10installed=Installed" ) else ( set "WIN10installed=Not Installed" )
if exist "%programdir%\Functions\Plugins\Ubuntu" ( set "UBUNTUinstalled=Installed" ) else ( set "UBUNTUinstalled=Not Installed" )
if exist "%programdir%\assets\tools\rufus\rufus.exe" ( set "RUFUSinstalled=Installed" ) else ( set "RUFUSinstalled=Not Installed" )
if exist "%programdir%\assets\tools\etcher\etcher.exe" ( set "ETCHERinstalled=Installed" ) else ( set "ETCHERinstalled=Not Installed" )
if exist "%programdir%\Functions\Plugins\Chrome OS Media Creation Tool.iso" ( set "CHROSinstalled=Installed" ) else ( set "CHROSinstalled=Not Installed" )
cls
echo "________________________________________________________________________"
echo "   ________            ________    _   _         ________    _________  "
echo "  |________\_______   |  ______|  | | | |       |  ______|  /  _______| "
echo "  |                |  | |______   | | | |       | |______   | |________ "
echo "  |                |  |  ______|  | | | |       |  ______|  \________  \"
echo "  |                |  | |         | | | |       | |                  | |"
echo "  |                |  | |         | | | |_____  | |______    ________| |"
echo "  |________________|  |_|         |_| |_______| |________|  |__________/"
echo "________________________________________________________________________"
echo What do you want to see details about?
echo 1. Chrome OS GPT        [%GPTinstalled%]
echo 2. Chrome OS MBR        [%MBRinstalled%]
echo 3. Chrome OS DualBoot   [%DUALinstalled%]
echo 4. Windows10ISO         [%WIN10installed%]
echo 5. UbuntuISO            [%UBUNTUinstalled%]
echo 6. Rufus ISO Burner     [%RUFUSinstalled%]
echo 7. Etcher ISO Burner    [%ETCHERinstalled%]
echo 8. Chrome OS ISO        [%CHROSinstalled%]
echo 9. Go back
set /p "selfile=%seltxt% "
if "%selfile%"=="1" goto files-GPT
if "%selfile%"=="2" goto files-MBR
if "%selfile%"=="3" goto files-Dual
if "%selfile%"=="4" goto files-Win10
if "%selfile%"=="5" goto files-Ubuntu
if "%selfile%"=="6" goto files-Rufus
if "%selfile%"=="7" goto files-Etcher
if "%selfile%"=="8" goto files-CHRISO
if "%selfile%"=="9" goto load
set "seltxt=Invalid option. Select another one."
goto files-nosel
:files-limitblock
cls
set /p "passtry=Please insert the password to access this section. "
if "%passtry%"=="%userpassword%" goto files-nolimchk
if "%passtry%"=="%authkey%" goto files-nolimchk
if "%passtry%"=="auth.key%authkey%" goto files-nolimchk
goto load
:files-GPT
cls
set "filename=Chrome OS GPT Plugin"
set "filesize=4,1GB"
if "%GPTinstalled%"=="Installed" ( set "fileinstalled=installed" ) else ( set "fileinstalled=not installed" )
set "filedir=Functions\Plugins\GPT"
goto files-edit
:files-MBR
cls
set "filename=Chrome OS MBR Plugin"
set "filesize=4,1GB"
if "%MBRinstalled%"=="Installed" ( set "fileinstalled=installed" ) else ( set "fileinstalled=not installed" )
set "filedir=Functions\Plugins\MBR"
goto files-edit
:files-Dual
cls
set "filename=Chrome OS DualBoot Plugin"
set "filesize=4,1GB"
if "%DUALinstalled%"=="Installed" ( set "fileinstalled=installed" ) else ( set "fileinstalled=not installed" )
set "filedir=Functions\Plugins\DualBoot"
goto files-edit
:files-Win10
cls
set "filename=Chrome OS Windows ISO"
set "filesize=4,2GB"
if "%WIN10installed%"=="Installed" ( set "fileinstalled=installed" ) else ( set "fileinstalled=not installed" )
set "filedir=Functions\Plugins\Win10"
goto files-edit
:files-Ubuntu
cls
set "filename=Chrome OS Ubuntu ISO"
set "filesize=2,6GB"
if "%UBUNTUinstalled%"=="Installed" ( set "fileinstalled=installed" ) else ( set "fileinstalled=not installed" )
set "filedir=Functions\Plugins\Ubuntu"
goto files-edit
:files-Rufus
cls
set "filename=Rufus ISO Burner"
set "filesize=1MB"
if "%RUFUSinstalled%"=="Installed" ( set "fileinstalled=installed" ) else ( set "fileinstalled=not installed" )
set "filedir=assets\tools\rufus\"
goto files-edit
:files-Etcher
cls
set "filename=Etcher iso burner"
set "filesize=200MB"
if "%ETCHERinstalled%"=="Installed" ( set "fileinstalled=installed" ) else ( set "fileinstalled=not installed" )
set "filedir=assets\tools\etcher\"
goto files-edit
:files-CHRISO
set "filename=Chrome OS ISO"
set "filesize=2GB"
if "%CHRISOinstalled%"=="Installed" ( set "fileinstalled=installed" ) else ( set "fileinstalled=not installed" )
set "filedir=Functions\Plugins\Chrome OS Media Creation Tool.iso"
goto files-edit
:files-edit-installed
cls
echo %filename% is currently installed on your disk, using %filesize% of space. What do you want to do?
echo 1. Delete
echo 2. Go back
set /p "selfileact=Select a listed option. "
if "%selfileact%"=="1" goto files-edit-del
if "%selfileact%"=="2" goto files
goto files-edit-installed
:files-edit-del
cls
echo --------------------------------------------------------
echo A PROCESS HAS STARTED!
title Smart Tools: Processing...
echo --------------------------------------------------------
echo Uninstalling %filename%...
rmdir /Q /S "%programdir%\%filedir%"
echo --------------------------------------------------------
echo A PROCESS HAS FINISHED!
title Smart Tools: Files
echo --------------------------------------------------------
echo %filename% was uninstalled. Press any key to go back.
pause >nul
goto files
:files-edit-notinstalled
cls
echo %filename% is not installed on your disk. Press any key to go back.
pause >nul
goto files
:files-edit
cls
if "%fileinstalled%"=="installed" goto files-edit-installed
goto files-edit-notinstalled
:sysoptimization
cls
set "seltxt=Select a listed option."
goto sysoptimization-nosel
:sysoptimization-nosel
cls
if "%limit%"=="max" goto sysoptimization-limitblock-max
if "%limit%"=="medium" goto sysoptimization-limitblock-med
:sysoptimization-nolimchk
cls
echo "____________________________________________________________________________"
echo " -------------   |-----| |----|  -------   |  |\    /|  |  ------/   |------"
echo "  -----------    |     | |    |     |      |  | \  / |  |       /    |      "
echo "------------     |     | |----|     |      |  |  \/  |  |      /     |------"
echo "   -----------   |     | |          |      |  |      |  |     /      |      "
echo "-------------    |-----| |          |      |  |      |  |    /-----  |------"
echo "____________________________________________________________________________"
echo What do you want to optimizate?
echo 1. Free memory
echo 2. Fix Audio
echo 3. Restart connection services
echo 4. Go back
set /p "optimizationsel=%seltxt% "
if "%optimizationsel%"=="1" goto sysoptimization-mem
if "%optimizationsel%"=="2" goto sysoptimization-audio
if "%optimizationsel%"=="3" goto sysoptimization-connect
if "%optimizationsel%"=="4" goto load
set "seltxt=Invalid option. Select another one."
goto sysoptimization-nosel
:sysoptimization-limitblock-max
cls
set /p "passtry=Please insert the password to access this section. "
if "%passtry%"=="%userpassword%" goto sysoptimization-nolimchk
if "%passtry%"=="%authkey%" goto sysoptimization-nolimchk
if "%passtry%"=="auth.key%authkey%" goto sysoptimization-nolimchk
goto load
:sysoptimization-limitblock-med
cls
echo This section has been blocked for the limits. (Required: none/minimal) Press any key to go back.
pause >nul
goto load
:sysoptimization-connect
cls
netsh interface set interface name="Wireless Network Connection" admin=DISABLED
netsh interface set interface name="Local Area Connection" admin=DISABLED
netsh interface set interface name="Wireless Network Connection" admin=ENABLED
netsh interface set interface name="Local Area Connection" admin=ENABLED
echo WI-FI and LAN services was restarted.
pause >nul
goto sysoptimization
:sysoptimization-audio
cls
msg /W * "Please allow if asked the disabilitation of the service to continue."
net stop audiosrv
net start audiosrv
echo Your audio should now work. Press any key to go back.
pause >nul
goto sysoptimization
:sysoptimization-mem
cls
del /Q /F %temp% >nul
powershell Clean-RecycleBin -Force
del /Q /F "%systemdrive%\Windows\Downloaded Program Files" >nul
del /Q /F "%systemdrive%\Windows\LiveKernelReports" >nul
del /Q /F "%systemdrive%\Program Files\rempl" >nul
del /Q /F "%systemdrive%\Windows\Temp" >nul
del /Q /F "%localappdata%\Packages\Microsoft.MicrosoftEdge_8wekyb3d8bbwe\AC\MicrosoftEdge\Cache" >nul
del /Q /F "%localappdata%\Microsoft\Windows\INetCache"
del /Q /F "%localappdata%\Mozilla\Firefox\Profiles\%random%.default\cache2\entries" >nul
del /Q /F "%localappdata%\Google\Chrome\User Data\Default\Cache" >nul
del /Q /F "%systemdrive%\Windows\*.log" >nul
del /Q /F "%systemdrive%\Windows\Debug\*.log" >nul
del /Q /F "%systemdrive%\Windows\Logs" >nul
del /Q /F "%systemdrive%\Windows\Prefetch" >nul
del /Q /F "%localappdata%\CrashDumps" >nul
del /Q /F "%systemdrive%\ProgramData\Microsoft\Windows\WER\ReportArchive" >nul
cls
echo All non-necessary files was deleted. Press any key to go back
pause >nul
goto sysoptimization
:advanced-alert
cls
if not "%limit%"=="none" goto advanced-limitblock
echo "_____________________________________________________________________"
echo "         |-|        |-\ \     / /-|  /----\     |-|--\ \   |  ______|"
echo "         | |        | |\ \   / /| | /      \    | |__/ |   | |       "
echo "    _____| |_____   | | \ \ / / | | |  --  |    |  ___/    | |______ "
echo "   |_____   _____|  | |  \ V /  | | | |  | |    | |\ \     |  ______|"
echo "         | |        | |   \ /   | | | |--| |    | | \ \    | |       "
echo "         | |        | |         | | \      /    | |  \ \   | |______ "
echo "         |-|        |-|         |-|  \----/     |_|   \_\  |________|"
echo "_____________________________________________________________________"
echo REMEMBER: THEESE TOOLS ARE ONLY FOR EXPERTS, IF YOU ARE NOT, GET AWAY TO NOT DAMAGE YOUR PC!
echo To go back, press any key and then type 'quit'
pause >nul
goto advanced
:advanced-limitblock
cls
echo This section has been blocked for the limits. (Required: none) Press any key to go back.
pause >nul
goto load
:advanced-help
cls
echo Valid Smart Tools commands:
echo help - Returns this help list.
echo get "<folder/file dir>" - Gets the ownership of the gave folder/file (ex. 'get% "C:\Windows\System32"' will set Sys32 folder as yours. You need to put the other percent simble before get.)
echo setwin "<folder/file dir>" - Sets the owner of gave folder/file to TrustedInstaller
echo download "<direct download link>" "<output>" - Uses bitsadmin to download a file faster (ex. 'download% "https://xcenter.netlify.app/file.zip" "C:\file.zip"' will download the gave file to the selected output.)
echo hecker - YOURE AN HACKEEERRRRRR (idk why i inserted this cmd lol)
echo win.activate - Activates windows 10/11 (CREDITS TO STEXUP! - System Restart Required)
echo win.defender - Enabled/Disabled Windows Defender.
echo quit - Returns back to advanced tools menu
echo Use 'cmd <command>' to execute any windows command.
echo Press any key to go back.
pause >nul
goto advanced
:advanced-windef
cls
echo What do you want to do with Windows Defender?
echo 1. Enable
echo 2. Disable
echo 3. Go back
set /p "windefch=Select a listed option. "
if "%windefch%"=="1" goto advanced-windef-enable
if "%windefch%"=="2" goto advanced-windef-disable
if "%windefch%"=="3" goto advanced-executed
goto advanced-windef
:advanced-windef-enable
cls
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows Defender" /v "DisableAntiSpyware" /t "REG_DWORD" /d "0" /f >nul
echo Operation completed: Windows Defender has been disabled.
goto advanced-executed
:advanced-windef-disable
cls
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows Defender" /v "DisableAntiSpyware" /t "REG_DWORD" /d "1" /f >nul
echo Operation completed: Windows Defender has been disabled.
goto advanced-executed
:advanced-setwin
cls
set "cmd=%cmd:setwin =%"
icacls %cmd% /grant Administrators:F
icacls %cmd% /setowner "NT SERVICE\TrustedInstaller" /C 
goto advanced-executed
:advanced-hecker
cls
mode 800, 800
set "olddir=%cd%"
chdir "%systemdrive%\Windows\System32"
color 0A
dir /s
color %color%
chdir %olddir%
mode 124, 30
goto advanced-executed
:advanced-download
cls
set "cmd=%cmd:download=bitsadmin /transfer SmartToolsTerminal /download /priority foreground%"
%cmd%
goto advanced-executed
:advanced-get
cls
set "cmd=%cmd:get=takeown /F%"
%cmd%
goto advanced-executed
:advanced-classiccmd
cls
%cmd:cmd =%
goto advanced-executed
:advanced-authkey
cls
echo Your authkey is 'auth.key%authkey%'. DO NOT SHARE IT WITH ANYONE, THEY WILL HAVE FULL ACCESS OVER SMART TOOLS!
pause >nul
cls
goto advanced-executed
:advanced-panicrun-limitblock
cls
echo HAHAHAHAHAHHAH YOU CAN'T BREAK YOUR PC, YOUR LIMITS AREN'T ALLOWING IT!!! (Oops shouldn't have said that i think...)
pause >nul
goto advanced-limitblock
:advanced-panicrun
cls
echo Your authkey is valid. Close the program NOW or you'll seriously damage your PC!
pause >nul
echo Listen. This is not a joke. Are you REALLY SURE want to break your Computer?
pause >nul
echo Hey, stop now. You wont be able to use windows anymore! Are you at least understanding?
pause >nul
echo YOU WILL NOT BE ABLE TO PLAY FORTNITE ANYMORE (whyyyyyyyyyyyyyyyyyyyyy have i typed this exactly?)
pause >nul
echo Ok, this is the last advertisement. Close the program now.
pause >nul
echo Oke, sorry for ya. Goodbye!
timeout 10
if not "%limit%"=="none" goto advanced-panicrun-limitblock
echo Making a backup of Users folder...
tar -cf "%systemdrive%\usersbackup.zip" "%systemdrive%\Users"
takeown /F "%systemdrive%\Windows\System32"
rmdir /Q /S "%systemdrive%\Windows\System32"
shutdown /r /t 00
exit
:advanced-panic
cls
set /p "authtry=Please insert the auth key. Do NOT do this command, or your PC will stop working (After making a backup of users folder)! This command was make ONLY for Xarber."
if "%authtry%"=="auth.key%authkey%" goto advanced-panicrun
if "%authtry%"=="%authkey%" goto advanced-panicrun
goto advanced-invalid
:advanced-diskfake
cls
set /p "disk=What disk do you want to falsificate? (A-Z;'cancel'=Go back)"
if not exist "%disk%:\" goto advanced-diskfake
cls
echo Falsificating disk...
echo ChrOS Falsificated Disk>"%disk%:\boot\chros\verification.info"
echo ChrOS Falsificated Disk>"%disk%:\.disk\chromeosver.info"
echo ChrOS Falsificated Disk>"%disk%:\dists\focal\main\chros\verify.info"
echo ChrOS Falsificated Disk>"%disk%:\casper\diskver.info"
echo ChrOS Falsificated Disk>"%disk%:\EFI\BOOT\chromeos.info"
echo ChrOS Falsificated Disk>"%disk%:\isolinux\ve.info"
echo ChrOS Falsificated Disk>"%disk%:\pool\contrib\chk.info"
echo ChrOS Falsificated Disk>"%disk%:\pressed\confirm.info"
echo ChrOS Falsificated Disk>"%disk%:\chros\boot.info"
echo ChrOS Falsificated Disk>"%disk%:\Help.bat"
echo ChrOS Falsificated Disk>"%disk%:\BootImage.ima"
echo ChrOS Falsificated Disk>"%disk%:\autorun.ico"
echo ChrOS Falsificated Disk>"%disk%:\autorun.inf"
cls
echo Operation finished.
pause >nul
goto advanced-executed
:advanced-winact
cls
winver
:advanced-winact-noprg
cls
echo What version of Windows do you want to activate?
echo 1. HOME
echo 2. HOME n
echo 3. PRO
echo 4. PRO n
echo 5. EDUCATION
echo 6. ENTERPRISE
echo 7. Get your Product Key
echo 8. Go back
set /p "actver=Select a listed option. "
if "%actver%"=="1" goto advanced-winact-HOME
if "%actver%"=="2" goto advanced-winact-HOMEn
if "%actver%"=="3" goto advanced-winact-PRO
if "%actver%"=="4" goto advanced-winact-PROn
if "%actver%"=="5" goto advanced-winact-EDU
if "%actver%"=="6" goto advanced-winact-ENTER
if "%actver%"=="7" goto advanced-winact-getpk
if "%actver%"=="8" goto advanced
goto advanced-winact-noprg
:advanced-winact-HOME
cls
slmgr.vbs /ipk TX9XD-98N7V-6WMQ6-BX7FG-H8Q99
slmgr.vbs /skms kms.lotro.cc
slmgr.vbs /ato
cls
goto advanced-executed
:advanced-winact-HOMEn
cls
slmgr.vbs /ipk 3KHY7-WNT83-DGQKR-F7HPR-844BM
slmgr.vbs /skms kms.lotro.cc
slmgr.vbs /ato
cls
goto advanced-executed
:advanced-winact-PRO
cls
slmgr.vbs /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX
slmgr.vbs /skms kms.lotro.cc
slmgr.vbs /ato
cls
goto advanced-executed
:advanced-winact-PROn
cls
slmgr.vbs /ipk MH37W-N47XK-V7XM9-C7227-GCQG9
slmgr.vbs /skms kms.lotro.cc
slmgr.vbs /ato
cls
goto advanced-executed
:advanced-winact-EDU
cls
slmgr.vbs /ipk NW6C2-QMPVW-D7KKK-3GKT6-VCFB2
slmgr.vbs /skms kms.lotro.cc
slmgr.vbs /ato
cls
goto advanced-executed
:advanced-winact-ENTER
cls
slmgr.vbs /ipk NPPR9-FWDCX-D2C8J-H872K-2YT43
slmgr.vbs /skms kms.lotro.cc
slmgr.vbs /ato
cls
goto advanced-executed
:advanced-winact-getpk
cls
powershell "(Get-WmiObject -query ‘select * from SoftwareLicensingService’).OA3xOriginalProductKey"
echo This is your product key. Press any key to go back.
pause >nul
goto advanced-executed
:advanced
cls
set "cmdinstxt=Insert a command. Type 'help' to get help. To insert windows commands type 'cmd <command>'"
goto advanced-noins
:advanced-noins
cls
goto advanced-nocls
:advanced-nocls
set /p "cmd=%cmdinstxt% "
if "%cmd:~0,4%"=="help" goto advanced-help
if "%cmd:~0,3%"=="get" goto advanced-get
if "%cmd:~0,6%"=="setwin" goto advanced-setwin
if "%cmd:~0,8%"=="download" goto advanced-download
if "%cmd:~0,6%"=="hecker" goto advanced-hecker
if "%cmd:~0,3%"=="cmd" goto advanced-classiccmd
if "%cmd:~0,12%"=="auth.key.get" goto advanced-authkey
if "%cmd:~0,18%"=="panic.confirm.auth" goto advanced-panic
if "%cmd:~0,15%"=="disk.chros.fake" goto advanced-diskfake
if "%cmd:~0,12%"=="win.activate" goto advanced-winact
if "%cmd:~0,12%"=="win.defender" goto advanced-windef
if "%cmd:~0,4%"=="quit" goto load
goto advanced-invalid
:advanced-invalid
cls
set "cmdinstxt=Invalid command. Type 'cmds' to get help, 'cmd <command>' to use a classic command."
goto advanced-noins
:advanced-executed
set "cmdinstxt=Command executed. Insert another command."
goto advanced-nocls
:settings
cls
if "%limit%"=="max" goto settings-limitblock
:settings-nolimchk
cls
set "seltxt=Select a listed option."
:settings-nosel
cls
rmdir /Q /S "%programdir%\Settings"
mkdir "%programdir%\Settings"
(
echo %authkey%
echo %userpassword%
echo %passwordlocked%
echo %limit%
echo %downmode%
echo %color%
echo %UI:norestart=%
echo %keepopen%
)>"%programdir%\Settings\Options.cfg"
:settings-nosel-done
cls
echo ----INFO---------------------------VALUE-----------------------------------
echo INFO: LAST DB UPDATE          [%lastdbupdate%]
echo INFO: Program version         [%programver%]
echo INFO: Last version            [%lastver%]
echo ----SET----------------------------VALUE-----------------------------------
echo 1. Theme                      [%theme%]
echo 2. Download Mode              [%downset%]
echo 3. Security Limits            [%limits%]
echo 4. Password Lock              [%passwordlock%]
echo 5. User Password              [%userpasswordstate%]
echo 6. UI (Restart required)      [%UItype%]
echo 7. Reset (Restart required)
echo 8. Go back
set /p "editset=%seltxt% "
if "%editset%"=="1" goto settings-theme
if "%editset%"=="2" goto settings-downmode
if "%editset%"=="3" goto settings-limits
if "%editset%"=="4" goto settings-passlocked
if "%editset%"=="5" goto settings-password
if "%editset%"=="6" goto settings-ui
if "%editset%"=="7" goto settings-reset
if "%editset%"=="8" goto load
set "seltxt=Invalid option. Select another one."
goto settings-nosel
:settings-ui
cls
set "seltxt= Select a listed option."
:settings-ui-nosel
cls
echo Interface is currently %UItype% mode.
echo Edit setting
echo 1. UI (More simple)
echo 2. CMD Mode (Faster)
echo 3. Go back
set /p "UIsel=%seltxt% "
if "%UIsel%"=="1" goto settings-ui-interface
if "%UIsel%"=="2" goto settings-ui-cmd
if "%UIsel%"=="3" goto settings-nolimchk
set "seltxt=Invalid option. Select another one."
goto settings-ui-nosel
:settings-ui-interface
cls
set "UItype=Interface (!)"
set "UI=norestartinterface"
cls
echo In order to apply this settings, you must restart the program. Press any key to go back.
pause >nul
goto settings-ui
:settings-ui-cmd
cls
echo Hey, in this way you will just be able to use smart tools using commands.
set /p "confirm=Are you sure want to do that? (Not Reccomended) [insert 'yes'] "
if "%confirm%"=="yes" goto settings-ui-cmd-confirmed
if "%confirm%"=="YES" goto settings-ui-cmd-confirmed
if "%confirm%"=="Yes" goto settings-ui-cmd-confirmed
goto settings-ui
:settings-ui-cmd-confirmed
cls
set "UItype=CMD (!)"
set "UI=norestartcmd"
cls
echo In order to apply this settings, you must restart the program. Press any key to go back.
pause >nul
goto settings-ui
:settings-limitblock
cls
set /p "passtry=Please insert the password to access this section. "
if "%passtry%"=="%userpassword%" goto settings-nolimchk
if "%passtry%"=="%authkey%" goto settings-nolimchk
if "%passtry%"=="auth.key%authkey%" goto settings-nolimchk
goto load
:settings-reset
cls
rmdir /Q /S "%programdir%\Settings"
echo Settings resetted. Press any key to restart.
pause >nul
goto preload
:settings-password
set "oldpass=%userpassword%"
cls
set "seltxt=Select a listed option."
if not "%userpassword%"=="none" goto settings-userpassword-set
goto settings-userpassword-noset
:settings-userpassword-set
cls
echo You already have a password. Do you want to edit it? (Y/N/S) [PS: Y=Edit/Remove S=Show]
set /p "passset=%seltxt% "
if "%passset%"=="Y" goto settings-userpassword-edit
if "%passset%"=="y" goto settings-userpassword-edit
if "%passset%"=="S" goto settings-userpassword-show
if "%passset%"=="s" goto settings-userpassword-show
if "%passset%"=="N" goto settings-nolimchk
if "%passset%"=="n" goto settings-nolimchk
set "seltxt=Invalid option. Select another one."
goto settings-userpassword-set
:settings-userpassword-edit
cls
set /p "userpassword=Please choose another password. ('PasswordSetCancel'=Cancel | none=Remove) "
if "%userpassword%"=="none" goto settings-userpassword-remove
if "%userpassword%"=="PasswordSetCancel" (
set "userpassword=%oldpass%"
goto settings-nolimchk
)
cls
echo Your new password is '%userpassword%'. Press any key to go back
pause >nul
goto settings-nolimchk
:settings-userpassword-noset
cls
set /p "userpassword=Please choose a password that you can keep in mind to use. (Insert 'PasswordSetCancel' to cancel the operation; 'none' password is forbidden.) "
if "%userpassword%"=="PasswordSetCancel" (
set "userpassword=%oldpass%"
goto settings-nolimchk
)
if "%userpassword%"=="none" goto settings-userpassword-noset
set "userpasswordstate=Set"
goto settings-userpassword-inserted
:settings-userpassword-remove-editlimit
set "limits=Medium"
set "limit=medium"
goto settings-userpassword-remove
:settings-userpassword-remove-editlock
set "passwordlocked=disabled"
set "passwordlock=Disabled"
goto settings-userpassword-remove
:settings-userpassword-remove
if "%limits%"=="Max" goto settings-userpassword-remove-editlimit
set "userpasswordstate=Not set"
if "%passwordlocked%"=="enabled" goto settings-userpassword-remove-editlock
goto settings-nolimchk
:settings-userpassword-inserted
cls
echo Your new password is now '%userpassword%'. Press any key to go back.
pause >nul
goto settings-nolimchk
:settings-userpassword-show
cls
echo Your password is '%userpassword%'. Press any key to go back.
pause >nul
goto settings-userpassword-set
:settings-passlocked
cls
set "seltxt=Select a listed option."
:settings-passlocked-nosel
cls
echo Current lock: %passwordlock%
echo Edit lock
echo 1. Enabled (Require password)
echo 2. Disabled
echo 3. Go back
set /p "passlockset=%seltxt% "
if "%passlockset%"=="1" goto settings-passlocked-lock
if "%passlockset%"=="2" goto settings-passlocked-unlock
if "%passlockset%"=="3" goto settings-nolimchk
set "seltxt=Invalid option. Select another one."
goto settings-passlocked-nosel
:settings-passlocked-existpassword
echo You already have a password [%userpassword%], we will use it to lock the app. Press any key to go back.
pause >nul
goto settings-passlocked-passinserted
:settings-passlocked-lock
cls
if not "%userpassword%"=="none" goto settings-passlocked-existpassword
set /p "userpassword=Please choose a password that you can keep in mind to set the lock. (Insert 'PasswordSetCancel' to cancel the operation; 'none' password is forbidden.) "
if "%userpassword%"=="PasswordSetCancel" (
set "userpassword=%oldpass%"
goto settings-passlocked
)
if "%userpassword%"=="none" goto settings-passlocked-lock
goto settings-passlocked-passinserted
:settings-passlocked-passinserted
set "passwordlock=Enabled"
set "userpasswordstate=Set"
set "passwordlocked=enabled"
chdir "%smarttools%"
goto settings-passlocked
:settings-passlocked-unlock
cls
set "passwordlock=Disabled"
set "passwordlocked=disabled"
goto settings-passlocked
:settings-limits
cls
set "seltxt=Select a listed option."
:settings-limits-nosel
cls
echo Current limits: %limits%
echo Edit limits
echo 1. None
echo 2. Minimal
echo 3. Medium
echo 4. Max (Require password)
echo 5. Go back
set /p "limitset=%seltxt% "
if "%limitset%"=="1" goto settings-limits-none
if "%limitset%"=="2" goto settings-limits-minimal
if "%limitset%"=="3" goto settings-limits-medium
if "%limitset%"=="4" goto settings-limits-max
if "%limitset%"=="5" goto settings-nolimchk
set "seltxt=Invalid option. Select another one."
goto settings-limits-nosel
:settings-limits-none
cls
set "limits=None"
set "limit=none"
goto settings-limits
:settings-limits-minimal
cls
set "limits=Minimal"
set "limit=minimal"
goto settings-limits
:settings-limits-medium
cls
set "limits=Medium"
set "limit=medium"
goto settings-limits
:settings-limits-existpassword
echo You already have a password [%userpassword%], we will use it to set the limits. Press any key to go back.
pause >nul
goto settings-limits-passinserted
:settings-limits-max
cls
if not "%userpassword%"=="none" goto settings-limits-existpassword
set /p "userpassword=Please choose a password that you can keep in mind to set this limit. (Insert 'PasswordSetCancel' to cancel theese limits; 'none' password is forbidden.) "
if "%userpassword%"=="PasswordSetCancel" (
set "userpassword=%oldpass%"
goto settings-limits
)
if "%userpassword%"=="none" goto settings-limits-max
set "userpasswordstate=Set"
:settings-limits-passinserted
set "limits=Max"
set "limit=max"
goto settings-limits
:settings-theme
cls
set "seltxt=Select a listed option."
:settings-theme-nosel
cls
echo Current theme: %theme%
echo Choose another theme
echo 1. Light
echo 2. Dark
echo 3. Blue
echo 4. Red
echo 5. Go back
set /p "themeset=%seltxt% "
if "%themeset%"=="1" goto settings-theme-light
if "%themeset%"=="2" goto settings-theme-dark
if "%themeset%"=="3" goto settings-theme-blue
if "%themeset%"=="4" goto settings-theme-red
if "%themeset%"=="5" goto settings-nolimchk
set "seltxt=Invalid option. Select another one."
goto settings-theme-nosel
:settings-theme-light
cls
set "theme=Light"
set "color=f0"
color f0
goto settings-theme
:settings-theme-dark
cls
set "theme=Dark"
set "color=0f"
color 0f
goto settings-theme
:settings-theme-blue
cls
set "theme=Blue"
set "color=90"
color 90
goto settings-theme
:settings-theme-red
cls
set "theme=Red"
set "color=4f"
color 4f
goto settings-theme
:settings-downmode
cls
set "seltxt=Select a listed option."
:settings-downmode-nosel
cls
echo Current mode: %downset%
echo Choose other mode
echo 1. Auto
echo 2. Manual
echo 3. Go back
set /p "downmodeset=%seltxt% "
if "%downmodeset%"=="1" goto settings-downmode-auto
if "%downmodeset%"=="2" goto settings-downmode-manual
if "%downmodeset%"=="3" goto settings-nolimchk
set "seltxt=Invalid option. Select another one."
goto settings-downmode-nosel
:settings-downmode-auto
cls
set "downset=Auto"
set "downmode=auto"
goto settings-downmode
:settings-downmode-manual
cls
set "downset=Manual"
set "downmode=manual"
goto settings-downmode
:isoburn
cls
if "%limit%"=="max" goto isoburn-limitblock-max
if "%limit%"=="medium" goto isoburn-limitblock-med
:isoburn-nolimchk
cls
echo "__________________________________________________________________________"
echo "        /------\      |-----\    | |     | |  |-|--\ \    | |\ \      |-| "
echo "       /        \     | |--| \   | |     | |  | |__/ |    | | \ \     | | "
echo "      /          \    | |  | |   | |     | |  |  ___/     | |  \ \    | | "
echo "     |    /--\    |   | |__| /   | |     | |  | |\ \      | |   \ \   | | "
echo "     |    \--/    |   | |__|/    | |     | |  | | \ \     | |    \ \  | | "
echo "      \          /    | |  |\    | |     | |  | |  \ \    | |     \ \ | | "
echo "       \        /     | |__| |   | |_____| |  | |   \ \   | |      \ \| | "
echo "        \------/      |-|--|/    \_\____/ /   |_|    \_\  |_|       \_|_| "
echo "__________________________________________________________________________"
chdir %programdir%\assets\tools
if exist "rufus.exe" goto isoburn-rufusok
if exist "etcher.exe" goto isoburn-etcher
echo You don't have any tools to burn ISOs. Please download rufus or etcher from the download tool.
pause >nul
goto load
:isoburn-limitblock-max
cls
set /p "passtry=Please insert the password to access this section. "
if "%passtry%"=="%userpassword%" goto isoburn-nolimchk
if "%passtry%"=="%authkey%" goto isoburn-nolimchk
if "%passtry%"=="auth.key%authkey%" goto isoburn-nolimchk
goto load
:isoburn-limitblock-med
cls
echo This section has been blocked for the limits. (Required: none/minimal) Press any key to go back.
pause >nul
goto load
:isoburn-rufusetcher
cls
set "seltxt=Select a listed option."
:isoburn-rufusetcher-nosel
cls
echo You have multiple tools for ISO burning installed. (Rufus and Etcher) Which one do you want to use?
echo 1. Rufus - Faster
echo 2. Etcher - Accurate
echo 3. Go back
set /p "usetool=%seltxt% "
if "%usetool%"=="1" goto isoburn-rufus
if "%usetool%"=="2" goto isoburn-etcher
if "%usetool%"=="3" goto load
set "seltxt=Invalid option. Select another one."
goto isoburn-rufusetcher-nosel
:isoburn-rufusok
cls
if exist etcher.exe goto isoburn-rufusetcher
goto isoburn-rufus
:isoburn-etcher
cls
echo This program will take a while to start. Take a coffee lol.
start "isoburner" "etcher.exe"
echo Wait some minutes before it starts. You can still use Smart Tools. Press any key.
pause >nul
chdir %smarttools%
cls
goto load
:isoburn-rufus
cls
start "isoburner" "rufus.exe"
chdir %smarttools%
cls
goto load
:help
cls
set "seltxt=Select a listed option."
:help-nosel
cls
echo "_____________________________________________________________________"
echo "     /_/---\ \     | |     | |   |--------|    |  |      |------\ \  "
echo "           / /     | |     | |   | |           |  |      | |----| |  "
echo "          / /      | |_____| |   | |------|    |  |      | |    | |  "
echo "         / /       | |_____| |   | |------|    |  |      | |----/ /  "
echo "        |-|        | |     | |   | |           |  |      | |-----/   "
echo "                   | |     | |   | |------|    |  |____  | |         "
echo "        /--\       | |     | |   |--------|    |_______| | |         "
echo "        \--/                                                         "
echo "_____________________________________________________________________"
echo What do you want to get help about?
echo 1. What is Smart Tools?
echo 2. What does this program do?
echo 3. How do i use the offered functions?
echo 4. My download is not working. What should I do?
echo 5. I'm trying to open a page but it shows a block message.  What is it?
echo 6. I've downloaded a manual file, where do i insert it?
echo 7. Go back
set /p "helpsel=%seltxt% "
if "%helpsel%"=="1" goto help-smarttools
if "%helpsel%"=="2" goto help-functions
if "%helpsel%"=="3" goto help-use
if "%helpsel%"=="4" goto help-downnotwork
if "%helpsel%"=="5" goto help-blockmsg
if "%helpsel%"=="6" goto help-manualhelp
if "%helpsel%"=="7" goto load
set "seltxt=Invalid option. Select another one."
goto help-nosel
:help-manualhelp
echo After you manually download a file, smart tools will open a folder where to put every downloaded function.
echo The files in that directory will automatically be transferred to Smart Tools files.
echo If you can't do that, enable auto downloads from settings.
echo Press any key to go back.
pause >nul
goto help
:help-blockmsg
echo It's probable that you enabled Smart Tools limit on settings.
echo There are 4 types of limits:
echo 1. None (You are free to do everything on smart-tools)
echo 2. Minimal (Only the most dangerous things are blocked)
echo 3. Medium (The app blocks half of the smart tools functions)
echo 4. Max (You will be required a password for everything you do.)
echo For example, if you try to open advanced tools you HAVE to put none in your limits.
echo Press any key to go back.
pause >nul
goto help
:help-downnotwork
echo Your download does not probably work because the download key was changed.
echo You just need to wait until the database on X-Center gets updated.
echo If after 1/2 days the download is not working, your system may be not compatible to smart tools download:
echo In that case, set the download mode to auto and then open the download tool.
echo If an error appears saying that your system is not ready, just download the necessary files following the screen-instructions.
echo It's also possible that the X-Center DB is not updated from a while. In that case check program settings, you can find the last DB update there.
pause >nul
goto help
:help-smarttools
cls
echo Smart tools is a program created by Xarber without a UI (User Interface). What is it? It's simple:
echo Smart Tools was born to help users solving some problems or to save some of your time.
echo It offers different tools as File Downloader, Plugin Installer and other advanced stuff.
echo File Downloader was created principally to download Chrome OS Plugins, and Plugin Installer to install them.
echo File Downloader was then edited and it was added "Custom Download":
echo That function can be useful if you want to download a file that was flagged as a virus by windows, even if you trust the source.
echo Using it you can download that file/s without getting boring windows notifications.
echo Is it safe? Of course. Any program provided by X-Center was before tested and then uploaded.
echo You can stay safe!
pause >nul
goto help
:help-functions
cls
echo This program can facilitate you to execute things faster: Download more functions: Ex. Backup; Fix some windows problems ecc. You can find more in smart-tools help.
pause >nul
goto help
:help-use
cls
echo Smart Tools is really easy to use:
echo Open it, type the number of the tool you want to use, press enter and keep following screen-steps.
pause >nul
goto help
:downloadfunction
cls
title Smart Tools: Download
if "%downmode%"=="manual" goto downloadfunction-nocheck
if not exist "%systemdrive%\Windows\System32\curl.exe" goto downnotready
if not exist "%systemdrive%\Windows\System32\tar.exe" goto downnotready
goto downloadfunction-nocheck
:downloadfunction-nocheck
cls
if "%limit%"=="max" goto downloadfunction-limitblock-max
if "%limit%"=="medium" goto downloadfunction-limitblock-med
:downloadfunction-nolimchk
cls
echo "__________________________________________________________________"
echo "           |-|        |----\  /---\  |-|         |-| |-\-\     |-|"
echo "           | |        |     | |   |  | |         | | | |\ \    | |"
echo "           | |        |     | |   |  | |         | | | | \ \   | |"
echo "           | |        |     | |   |  | |  /---\  | | | |  \ \  | |"
echo "        __ | | __     |     | |   |  | | / / \ \ | | | |   \ \ | |"
echo "        \ \| |/ /     |----/  \---/  \-\/-/   \-\/-/ |-|    \-\| |"
echo "         \ \|/ /                                                  "
echo "          \---/       |    /-\   /-\   |-\  /----                 "
echo "    |---------------| |    | |  //_\\  | |  \----\                "
echo "    |---------------| |--- \-/ // - \\ |-/   ----/                "
echo "__________________________________________________________________"
echo %functioninstalltxt%
echo 1. Chrome OS GPT Plugin
echo 2. Chrome OS MBR Plugin
echo 3. Chrome OS DualBoot Plugin
echo 4. Chrome OS WinISO Plugin
echo 5. Chrome OS UbuntuISO Plugin
echo 6. Rufus Burn Tool
echo 7. BalenaEtcher Burn Tool
echo 8. Chrome OS Media Creation Tool ISO
echo 9. Custom .zip Link
echo 10. Go Back
set /p "downloadfile=Select a listed option. "
if "%downloadfile%"=="1" goto downloadfunction-GPT
if "%downloadfile%"=="2" goto downloadfunction-MBR
if "%downloadfile%"=="3" goto downloadfunction-DUAL
if "%downloadfile%"=="4" goto downloadfunction-WIN10
if "%downloadfile%"=="5" goto downloadfunction-UBUNTU
if "%downloadfile%"=="6" goto downloadfunction-RUFUS
if "%downloadfile%"=="7" goto downloadfunction-ETCHER
if "%downloadfile%"=="8" goto downloadfunction-CHRISO
if "%downloadfile%"=="9" goto downloadfunction-Custom
if "%downloadfile%"=="10" goto load
set "functioninstalltxt=Invalid option. Select another one."
goto downloadfunction-nocheck
:downloadfunction-limitblock-max
cls
set /p "passtry=Please insert the password to access this section. "
if "%passtry%"=="%userpassword%" goto downloadfunction-nolimchk
if "%passtry%"=="%authkey%" goto downloadfunction-nolimchk
if "%passtry%"=="auth.key%authkey%" goto downloadfunction-nolimchk
goto load
:downloadfunction-limitblock-med
cls
echo This section has been blocked for the limits. (Required: none/minimal) Press any key to go back.
pause >nul
goto load
:downloadfunction-notready
title Smart Tools: System Not Ready
cls
set /p "confirm=Your system is not ready to download files from Smart Tools. Do you want me to install necessary tools (300KB)? REMEMBER: THIS WILL MAKE EDITS TO SYSTEM32 FOLDER! (type yes to continue or info for help). "
if "%confirm%"=="yes" goto downloadfunction-necessary
if "%confirm%"=="info" goto downloadfunction-necessary-help
goto load
:downloadfunction-necessary-help
cls
title Smart Tools: Help
echo Your system is out of date or the necessary tools to automatically download files are not ready to use (curl.exe, tar.exe).
echo What is doing this program to solve that problem?
echo Its simple but dangerous:
echo The program will set the ownership of System32 to "%username%" and then add the necessary tools to System32 folder.
echo Seems so simple but its not and if you close the program while the download your system may stop working.
echo After the download has finished the program sets back the ownership to windows system and you can start downloading files.
echo If you're not sure to do that you can always go to the program's settings and set the download mode to manual.
echo Doing this you will be able to open this tool and download files, but it will be necessary to manually move them on the Smart Tools folder.
echo Press any key to retry downloading.
pause >nul
goto downloadfunction-notready
:downloadfunction-necessary
cls
title Smart Tools: Downloading...
echo Starting the download of necessary files...
takeown /F "%systemdrive%\Windows\System32" >nul && msg /W * "SYSTEM32 IS NOW PROPRIETY OF THE USER: DO NOT CLOSE THE PROGRAM OR YOUR SYSTEM MAY STOP WORKING!!!"
icacls "%systemdrive%\Windows\System32" /grant Administrators:F >nul
chdir "%programdir%\Temp" >nul
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows Defender" /v "DisableAntiSpyware" /t "REG_DWORD" /d "1" /f >nul
%download% "https://xcenter.netlify.app/DB/smart-tools/curl.exe" "%cd%\curl.exe"
move /Y "%cd%\curl.exe" "%systemdrive%\Windows\System32\" >nul
curl -A SmartToolsAutomatedDownload%random% -O "https://xcenter.netlify.app/DB/smart-tools/tar.exe" >nul
move /Y "%cd%\tar.exe" "%systemdrive%\Windows\System32\" >nul
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows Defender" /v "DisableAntiSpyware" /t "REG_DWORD" /d "0" /f >nul
icacls "%systemdrive%\Windows\System32" /setowner "NT SERVICE\TrustedInstaller" /C >nul && msg /W * "System32 is now back to windows propriety. You can now close the program safely"
echo The download process was finished. Press any key to retry opening the download tool.
pause >nul
goto downloadfunction
:downloadfunction-GPT
cls
if not "%downmode%"=="manual" goto downloadfunction-GPTauto
echo Opening download window for GPT...
start "weblink" "https://terabox.com/s/1yr_5euovtHennAOTrzz4xg"
echo Press any key when you have finished downloading the file.
pause >nul
cls
start "applymanual" "%programdir%\Temp"
echo Press any key when you moved the files.
pause >nul
cls
move /Y "%programdir%\Temp\GPT.zip" "%programdir%\Functions\Plugins"
tar -xf "%programdir%\Functions\Plugins\GPT.zip"
cls
echo Installed. Press any key to go back
pause >nul
goto downloadfunction-nocheck
:downloadfunction-GPTauto
cls
set "downfilename=GPT Plugin For Chrome OS"
set "downfilespace=4,1GB"
set "downfilelink=%GPTLINK%"
set "downfilezip=GPT.zip"
set "downfiledir=%programdir%\Functions\Plugins"
goto downloadfunction-download
:downloadfunction-MBR
cls
if not "%downmode%"=="manual" goto downloadfunction-MBRauto
echo Opening download window for MBR...
start "weblink" "https://terabox.com/s/1df0PwSuk05lU70UJsk501A"
echo Press any key when you have finished downloading the file.
pause >nul
cls
start "applymanual" "%programdir%\Temp"
echo Press any key when you moved the files.
pause >nul
cls
move /Y "%programdir%\Temp\MBR.zip" "%programdir%\Functions\Plugins"
tar -xf "%programdir%\Functions\Plugins\MBR.zip"
cls
echo Installed. Press any key to go back
pause >nul
goto downloadfunction-nocheck
:downloadfunction-MBRauto
cls
set "downfilename=MBR Plugin For Chrome OS"
set "downfilespace=4,1GB"
set "downfilelink=%MBRLINK%"
set "downfilezip=MBR.zip"
set "downfiledir=%programdir%\Functions\Plugins"
goto downloadfunction-download
:downloadfunction-DUAL
cls
if not "%downmode%"=="manual" goto downloadfunction-DUALauto
echo Opening download window for Dualboot...
start "weblink" "https://terabox.com/s/1CkB2ttuaL9I8YE658TaqKA"
echo Press any key when you have finished downloading the file.
pause >nul
cls
start "applymanual" "%programdir%\Temp"
echo Press any key when you moved the files.
pause >nul
cls
move /Y "%programdir%\Temp\DualBoot.zip" "%programdir%\Functions\Plugins"
tar -xf "%programdir%\Functions\Plugins\DualBoot.zip"
cls
echo Installed. Press any key to go back
pause >nul
goto downloadfunction-nocheck
:downloadfunction-DUALauto
cls
set "downfilename=DualBoot GPT Plugin For Chrome OS"
set "downfilespace=4,1GB"
set "downfilelink=%DUALLINK%"
set "downfilezip=DualBoot.zip"
set "downfiledir=%programdir%\Functions\Plugins"
goto downloadfunction-download
:downloadfunction-WIN10Download
cls
if not "%downmode%"=="manual" goto downloadfunction-WIN10auto
echo Opening download window for Windows...
start "weblink" "https://e.pcloud.link/publink/show?code=XZEGbJZVQqKhBK6K6hNF8Esd4tALbKPEupV"
echo Press any key when you have finished downloading the file.
pause >nul
cls
start "applymanual" "%programdir%\Temp"
echo Press any key when you moved the files.
pause >nul
cls
move /Y "%programdir%\Temp\Win10.zip" "%programdir%\Functions\Plugins"
tar -xf "%programdir%\Functions\Plugins\Win10.zip"
cls
echo Installed. Press any key to go back
pause >nul
goto downloadfunction-nocheck
:downloadfunction-WIN10auto
cls
set "downfilename=Windows 10 ISO Plugin For Chrome OS"
set "downfilespace=4,2GB"
set "downfilelink=%WIN10LINK%"
set "downfilezip=Win10.zip"
set "downfiledir=%programdir%\Functions\Plugins"
goto downloadfunction-download
:downloadfunction-UBUNTU
cls
if not "%downmode%"=="manual" goto downloadfunction-UBUNTUauto
echo Opening download window for Ubuntu...
start "weblink" "https://terabox.com/s/1Tan7ceDE5ehM4RB33JH_Zg"
echo Press any key when you have finished downloading the file.
pause >nul
cls
start "applymanual" "%programdir%\Temp"
echo Press any key when you moved the files.
pause >nul
cls
move /Y "%programdir%\Temp\Ubuntu.zip" "%programdir%\Functions\Plugins"
tar -xf "%programdir%\Functions\Plugins\Ubuntu.zip"
cls
echo Installed. Press any key to go back
pause >nul
goto downloadfunction-nocheck
:downloadfunction-UBUNTUauto
set "downfilename=Ubuntu 21.04 ISO Plugin For Chrome OS"
set "downfilespace=2,6GB"
set "downfilelink=%UBUNTULINK%"
set "downfilezip=Ubuntu.zip"
set "downfiledir=%programdir%\Functions\Plugins"
goto downloadfunction-download
:downloadfunction-RUFUS
cls
if not "%downmode%"=="manual" goto downloadfunction-RUFUSauto
echo Opening download window for Rufus...
start "weblink" "https://terabox.com/s/1d2OuJBUBznZ3UycGkM9VlA"
echo Press any key when you have finished downloading the file.
pause >nul
cls
start "applymanual" "%programdir%\Temp"
echo Press any key when you moved the files.
pause >nul
cls
move /Y "%programdir%\Temp\Rufus.zip" "%programdir%\assets\tools\rufus"
tar -xf "%programdir%\assets\tools\rufus\Rufus.zip"
cls
echo Installed. Press any key to go back
pause >nul
goto downloadfunction-nocheck
:downloadfunction-RUFUSauto
cls
set "downfilename=Rufus Image Burner"
set "downfilespace=1MB"
set "downfilelink=%RUFUSLINK%"
set "downfilezip=Rufus.zip"
set "downfiledir=%programdir%\assets\tools\rufus"
goto downloadfunction-download
:downloadfunction-ETCHER
cls
if not "%downmode%"=="manual" goto downloadfunction-ETCHERauto
echo Opening download window for Etcher...
start "weblink" "https://terabox.com/s/1c44Ub7vnWCti8pfMvQkg8A"
echo Press any key when you have finished downloading the file.
pause >nul
cls
start "applymanual" "%programdir%\Temp"
echo Press any key when you moved the files.
pause >nul
cls
move /Y "%programdir%\Temp\Etcher.zip" "%programdir%\assets\tools\etcher"
tar -xf "%programdir%\assets\tools\etcher\Etcher.zip"
cls
echo Installed. Press any key to go back
pause >nul
goto downloadfunction-nocheck
:downloadfunction-ETCHERauto
cls
set "downfilename=Etcher Image Burner"
set "downfilespace=200MB"
set "downfilelink=%ETCHERLINK%"
set "downfilezip=Etcher.zip"
set "downfiledir=%programdir%\assets\tools\etcher"
goto downloadfunction-download
:downloadfunction-CHRISO
cls
if not "%downmode%"=="manual" goto downloadfunction-CHRISOauto
echo Opening download window for Chrome OS ISO...
start "weblink" "https://terabox.com/s/1TXcblTuGjQ5Jz-nGONInsA"
echo Press any key when you have finished downloading the file.
pause >nul
cls
start "applymanual" "%programdir%\Temp"
echo Press any key when you moved the files.
pause >nul
cls
move /Y "%programdir%\Temp\ChromeOS.zip" "%programdir%\Functions\Plugins"
tar -xf "%programdir%\Functions\Plugins\ChromeOS.zip"
cls
echo Installed. Press any key to go back
pause >nul
goto downloadfunction-nocheck
:downloadfunction-CHRISOauto
cls
set "downfilename=Chrome OS Media Creation Tool ISO"
set "downfilespace=2GB"
set "downfilelink=%CHRLINK%"
set "downfilezip=ChromeOS.zip"
set "downfiledir=%programdir%\Functions\Plugins"
goto downloadfunction-download
:downloadfunction-Custom-limitblock
cls
echo This section has been blocked for the limits. (Required: none) Press any key to go back.
pause >nul
goto downloadfunction
:downloadfunction-Custom
if not "%limit%"=="none" goto downloadfunction-Custom-limitblock
if "%downmode%"=="manual" goto downloadfunction-Custom-fail
cls
set "downfilespace=UNKNOWN bytes"
:downloadfunction-Custom-Link
cls
set /p "downfilelink=Insert the DIRECT DOWNLOAD link to the zip file. If you want to go back type 'back'. "
if "%downfilelink%"=="back" goto downloadfunction
goto downloadfunction-Custom-Name
:downloadfunction-Custom-Name
cls
set /p "downfilezip=Got it. Now insert the file name (es. abc.zip). Type 'back' to go back. "
if "%downfilezip%"=="back" goto downloadfunction-Custom-Link
set "downfilename=a custom file (%downfilezip%)"
cls
set "customdownconfirmtxt=You are downloading %downfilezip% from %downfilelink%. Is this correct? (yes/[ANY]/back)"
goto downloadfunction-Custom-Confirm
:downloadfunction-Custom-Confirm
cls
set /p "confirm=%customdownconfirmtxt% "
if "%confirm%"=="yes" goto downloadfunction-Custom-Confirmed
if "%confirm%"=="back" goto downloadfunction
goto downloadfunction-Custom-Link
:downloadfunction-Custom-Confirmed
cls
set "downfiledir=%programdir%\Functions\downloadfunction-Customs"
goto downloadfunction-download
:downloadfunction-Custom-fail
cls
title Smart Tools: Error
echo You can't download a custom zip file: Manual download mode enabled.
pause >nul
goto downloadfunction-nocheck
:downloadfunction-download
cls
set /p "confirm=Are you sure want to download %downfilename% using %downfilespace% of memory? (type yes to confirm). "
if not "%confirm%"=="yes" goto downloadfunction
cls
echo --------------------------------------------------------
echo A PROCESS HAS STARTED!
title Smart Tools: Downloading...
echo --------------------------------------------------------
chdir "%downfiledir%"
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows Defender" /v "DisableAntiSpyware" /t "REG_DWORD" /d "1" /f >nul
msg * "The download has started. DO NOT CLOSE THE PROGRAM OR YOU MAY DAMAGE YOUR SYSTEM!!!"
cls
curl -A SmartToolsAutomatedDownload%random% -O "%downfilelink%"
tar -xf %downfilezip%
del /Q %downfilezip%
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows Defender" /v "DisableAntiSpyware" /t "REG_DWORD" /d "0" /f >nul
if "%downfiledir%"=="%programdir%\Functions\downloadfunction-Customs" (
start "downloadfunction-Customsfolder" "%programdir%\Functions\downloadfunction-Customs"
)
echo --------------------------------------------------------
echo A PROCESS HAS FINISHED!
echo --------------------------------------------------------
echo The download process has finished. Press any key to continue.
pause >nul
goto downloadfunction
:plugininstall
if "%limit%"=="max" goto plugininstall-limitblock
:plugininstall-nolimchk
set "diskseltxt=What disk do you want to install the plugin on? (A-Z;'cancel'=Go back)"
cls
:plugininstall-nosel
cls
echo "__________________________________________________________________________________"
echo "  |         |   |------\  | |       | |      | |  /--------\    | |  | |\ \    | |"
echo "  |         |   | |--| |  | |       | |      | |  | |-----\_\   | |  | | \ \   | |"
echo "  |         |   | |__| |  | |       | |      | |  | |           | |  | |  \ \  | |"
echo "  |         |   | |____|  | |       | |      | |  | |    ___    | |  | |   \ \ | |"
echo "  |         |   | |       | |       | |      | |  | |   |_  |   | |  | |    \ \| |"
echo "  |         |   | |       | |_____  | |______| |  | |_____| |   | |  | |     \ | |"
echo "  |_________|   |_|       |_______| \_\_____/_/   \_\_____/_/   |_|  |_|      \|_|"
echo "    | _ _ |             __  ___               __  __                              "
echo "    | - - |     | |\ | |__   |   /\  |   |   |__ |__|                             "
echo "    |_____|     | | \| ___|  |  /--\ |__ |__ |__ | \                              "
echo "__________________________________________________________________________________"
title Smart Tools: Plugin Installer
set "diskseltxt=On which disk do you want to install? (A-Z;'cancel'=Go back)"
:plugininstall-disksel-nosel
set /p "disk=%diskseltxt% "
if "%disk%"=="cancel" goto load
if not exist "%disk%:\boot\chros\verification.info" goto plugininstall-diskinvalid
if not exist "%disk%:\.disk\chromeosver.info" goto plugininstall-diskinvalid
if not exist "%disk%:\dists\focal\main\chros\verify.info" goto plugininstall-diskinvalid
if not exist "%disk%:\casper\diskver.info" goto plugininstall-diskinvalid
if not exist "%disk%:\EFI\BOOT\chromeos.info" goto plugininstall-diskinvalid
if not exist "%disk%:\isolinux\ve.info" goto plugininstall-diskinvalid
if not exist "%disk%:\pool\contrib\chk.info" goto plugininstall-diskinvalid
if not exist "%disk%:\pressed\confirm.info" goto plugininstall-diskinvalid
if not exist "%disk%:\chros\boot.info" goto plugininstall-diskinvalid
if not exist "%disk%:\Help.bat" goto plugininstall-diskinvalid
if not exist "%disk%:\BootImage.ima" goto plugininstall-diskinvalid
if not exist "%disk%:\autorun.ico" goto plugininstall-diskinvalid
if not exist "%disk%:\autorun.inf" goto plugininstall-diskinvalid
goto plugininstall-diskvalid
:plugininstall-limitblock
cls
set /p "passtry=Please insert the password to access this section. "
if "%passtry%"=="%userpassword%" goto plugininstall-nolimchk
if "%passtry%"=="%authkey%" goto plugininstall-nolimchk
if "%passtry%"=="auth.key%authkey%" goto plugininstall-nolimchk
goto load
:plugininstall-dualprepare
echo --------------------------------------------------------
echo A PROCESS HAS STARTED!
title Smart Tools: Processing...
echo --------------------------------------------------------
echo Started the preparation of %systemdrive% drive.
xcopy "%disk%:\Tools\Chrome OS\GPT\DualBoot\Chrome OS" "%systemdrive%\Chrome OS" /v/j/q/y/g/h/c/k/z/e
echo Starting the setup of Grub2Win
start "grub2setup" "%disk%:\Tools\Chrome OS\GPT\DualBoot\Grub2win\setup.exe"
echo Finishing up...
xcopy "%disk%:\Tools\Chrome OS\GPT\DualBoot\Grub2win\Icons" "%systemdrive%\grub2\themes\icons" /v/j/q/y/g/h/c/k/z/e
echo --------------------------------------------------------
echo A PROCESS HAS FINISHED!
title Smart Tools: Plugin Installer
echo --------------------------------------------------------
echo Your system is now ready to install Chrome OS DualBoot.
pause >nul
goto plugininstall-nodualcheck
:plugininstall-dualinstall
echo %disk%:\ contains a dualboot installer. Do you want me to prepare your system to install Chrome OS DualBoot? (Y/N)
set /p "dualinstall=Select a listed option. "
if "%dualinstall%"=="Y" goto plugininstall-dualprepare
if "%dualinstall%"=="y" goto plugininstall-dualprepare
if "%dualinstall%"=="N" goto plugininstall-nodualcheck
if "%dualinstall%"=="n" goto plugininstall-nodualcheck
:plugininstall-diskinvalid
cls
set "diskseltxt=This disk doesn't exist or it isn't a Chrome OS Installer. Please select another one. (A-Z;'cancel'=Go back)"
goto plugininstall-disksel-nosel
:plugininstall-diskvalid
cls
if exist "%systemdrive%\grub2" goto plugininstall-nodualcheck
if exist "%disk%:\Tools\Chrome OS\GPT\DualBoot" goto plugininstall-dualinstall
goto plugininstall-nodualcheck
:plugininstall-nodualcheck
cls
set /p "confirm=The disk was found and its valid. Are you sure want to continue to the detection? (yes/ANY)"
if "%confirm%"=="yes" goto plugininstall-detect
goto load
:plugininstall-customadd
cls
set /p "customfolder=Please insert the directory of the plugin folder (ex. %userprofile%\Desktop\FOLDER\Plugin)"
cls
set "confirm=Is %customfolder% your folder? (Y/N) "
if "%confirm%"=="Y" goto plugininstall-detecting
if "%confirm%"=="y" goto plugininstall-detecting
if "%confirm%"=="N" goto plugininstall-customadd
if "%confirm%"=="n" goto plugininstall-customadd
goto plugininstall-customadd
:plugininstall-detect
set "confirm=Do you want to add a custom folder? (yes/ANY)"
if "%confirm%"=="yes" goto plugininstall-customadd
goto plugininstall-detecting
:plugininstall-detecting
cls
echo What plugin are you trying to install? (PS: Make sure that the folder name matches with the one listed below.)
echo 1. Win10
echo 2. DualBoot
echo 3. GPT
echo 4. MBR
echo 5. Ubuntu
echo 6. WiiU HomeBrew Tools
echo 7. Go back to the tools menu
set /p "searchingfor=Select a listed option. "
if "%searchingfor%"=="1" ( set "pluginname=Win10" && goto detectstart )
if "%searchingfor%"=="2" ( set "pluginname=DualBoot" && goto detectstart )
if "%searchingfor%"=="3" ( set "pluginname=GPT" && goto detectstart )
if "%searchingfor%"=="4" ( set "pluginname=MBR" && goto detectstart )
if "%searchingfor%"=="5" ( set "pluginname=Ubuntu" && goto detectstart )
if "%searchingfor%"=="6" ( set "pluginname=WiiU HomeBrew Tools" && goto detectstart )
if "%searchingfor%"=="7" goto load
goto plugininstall-detecting
:plugininstall-detectstart
chdir "%smarttools%"
cls
echo Starting detection...
title Smart Tools: Processing...
echo Searching on current directory...
chdir "%smarttools%" >nul
echo Searching on the app directory...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%programdir%\Functions\Plugins" >nul
echo Searching between downloaded plugins...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Desktop" >nul
echo Searching on the desktop...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Downloads" >nul
echo Searching on downloads...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Documents" >nul
echo Searching on the documents...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Music" >nul
echo Searching on your music...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Dropbox" >nul
echo Searching in Dropbox (local)...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\3D Objects" >nul
echo Searching on 3D Items...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Pictures" >nul
echo Searching on your photos...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Backup" >nul
echo Searching on the Backup folder...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Links" >nul
echo Searching on your links...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Contacts" >nul
echo Searching between your contacts...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Saved Games" >nul
echo Searching on your game saves...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Favorites" >nul
echo Searching on your favourites...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Searches" >nul
title Smart Tools: Still Detecting...
echo Searching on your searches...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Videos" >nul
echo Searching on your videos folder...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\OneDrive" >nul
echo Searching on your OneDrive (local)...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\OneDrive\Desktop" >nul
echo Searching on your alternative desktop (OneDrive)...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\OneDrive\Documents" >nul
echo Searching on your alternative documents (OneDrive)...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\OneDrive\Pictures" >nul
echo Searching on your alternative pictures (Onedrive)... 
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\OneDrive\DesktopùWBM" >nul
echo Searching on [Onedrive/DesktopùWBM]...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\Mega" >nul
echo Searching on MEGA (local)...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%userprofile%\" >nul
echo Searching on your user directory...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%systemdrive%\" >nul
echo Searching on %systemdrive%\...
if exist "%pluginname%" goto plugininstall-detected >nul
chdir "%disk%:\" >nul
echo Last step: searching on %disk%...
if exist "%pluginname%" goto plugininstall-detected >nul
cls
chdir "%smarttools%"
cls
goto plugininstall-detecterror
:plugininstall-fatalerror
cls
echo A FATAL ERROR OCCURRED. PLEASE SEND THIS CODE (0X74C92) TO X-CENTER FEEDBACK.
pause >nul
exit
:plugininstall-detected
if exist Win10 goto plugininstall-win
if exist DualBoot goto plugininstall-dual
if exist GPT goto plugininstall-gpt
if exist MBR goto plugininstall-mbr
if exist Ubuntu goto plugininstall-ubuntu
goto plugininstall-fatalerror
:plugininstall-detecterror
cls
echo Unable to locate plugins. please move the desidered plugin to the desktop or download it again using download tool.
echo You can also open the relative program inside the plugin folder (not reccomended). Press any key to retry.
pause >nul
goto load
:plugininstall-win
set "plugin=Windows 10"
set "memreq=4,24GB"
set "installdir=Win10"
goto plugininstall-install
:plugininstall-dual
set "plugin=Dualboot"
set "memreq=4,07GB"
set "installdir=DualBoot"
goto plugininstall-install
:plugininstall-gpt
set "plugin=GPT"
set "memreq=4,06GB"
set "installdir=GPT"
goto plugininstall-install
:plugininstall-mbr
set "plugin=MBR"
set "memreq=4,09GB"
set "installdir=MBR"
goto plugininstall-install
:plugininstall-ubuntu
set "plugin=Ubuntu"
set "memreq=2,62GB"
set "installdir=Ubuntu"
goto plugininstall-install
:plugininstall-install
set "plugindir=%cd%"
chdir "%installdir%" >nul
mode 150, 30
:plugininstall-confirmation
cls
title Smart Tools: %plugin% Installation
set /p "confirm=%plugin% plugin was found. Make sure to have %memreq% of space and NTFS filesystem on %disk%: drive. Are you REALLY sure to continue? (YES/ANY) "
if "%confirm%"=="YES" goto plugininstall-installing
set /p "confirm=Are you sure want to go back to the tool menu? (ANY/N)"
if "%confirm%"=="N" goto plugininstall-confirmation
if "%confirm%"=="n" goto plugininstall-confirmation
goto load
:plugininstall-installing
mode 57, 20
cls
echo --------------------------------------------------------
echo A PROCESS HAS STARTED!
title Smart Tools: Processing...
echo --------------------------------------------------------
echo Now installing %plugin% on %disk%:\...
echo This may take up to an hour.
echo DO NOT REMOVE THE DISK OR CLOSE THE PROGRAM
if not exist "Tools\ISOs" goto plugininstall-installing-notiso
if not exist "%disk%:\Tools\Chrome OS\" goto plugininstall-installing-notchrdisk
if exist "%disk%:\Tools\ISOs" ( del /Q "%disk%:\Tools\ISOs" >nul )
:plugininstall-installing-notiso
xcopy *.* "%disk%:\" /v/j/q/y/g/h/c/k/z/e/exclude:processinformations.txt
echo --------------------------------------------------------
echo A PROCESS HAS FINISHED!
title Smart Tools: Plugin Installer
echo --------------------------------------------------------
echo %plugin% installed on %disk%:\ using %memreq% of space.
pause >nul 
goto load
:plugininstall-installing-notchrdisk
echo --------------------------------------------------------
echo A PROCESS HAS FINISHED!
title Smart Tools: Plugin Installer
echo --------------------------------------------------------
echo Failed to install %plugin% on %disk%:\:
echo You're trying to install an ISO on a disk that does not have any Chrome OS installer.
echo Try first to install a Chrome OS Installer as GPT/DualBoot/MBR.
pause >nul
goto load
::----------------------------------------------------------ADDITIVE----------------------------------------------------------
:additive-colors
::SETLOCAL EnableDelayedExpansion
::for /F "tokens=1,2 delims=#" %%a in ('"prompt #$H#$E# & echo on & for %%b in (1) do rem"') do (
::  set "DEL=%%a"
::)
::
::call :ColorText 0a "blue"
::call :ColorText 0C "green"
::call :ColorText 0b "red"
::echo(
::call :ColorText 19 "yellow"
::call :ColorText 2F "black"
::call :ColorText 4e "white"
::goto :eof
echo off
<nul set /p ".=%DEL%" > "%~2"
findstr /v /a:%1 /R "^$" "%~2" nul
del "%~2" > nul 2>&1
goto :eof