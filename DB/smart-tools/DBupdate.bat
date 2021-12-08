@echo off
(
set /p "gptold="
set /p "mbrold="
set /p "dualold="
set /p "winold="
set /p "ubntold="
set /p "rufusold="
set /p "etchold="
set /p "chrosold="
set /p "wiiuold="
set /p "updtimeold="
set /p "lastverold="
set /p "lastupdtypeold="
)<"data.info"
chdir "%userprofile%\OneDrive\Desktop\Productivity\X-Center"
goto datamode
:datamode
cls
set /p "choice=Update (1) or Keep (2) download links? "
if "%choice%"=="1" goto update
if "%choice%"=="2" goto keep
goto datamode
:update
start "weblink" "%gptold%"
set /p "gpt=Insert GPT Link "
cls
start "weblink" "%mbrold%"
set /p "mbr=Insert MBR Link "
cls
start "weblink" "%dualold%"
set /p "dual=Insert DUALBOOT Link "
cls
start "weblink" "%winold%"
set /p "win=Insert Win10 Link "
cls
start "weblink" "%ubntold%"
set /p "ubnt=Insert Ubuntu Link "
cls
start "weblink" "%rufusold%"
set /p "rufus=Insert Rufus Link "
cls
start "weblink" "%etchold%"
set /p "etch=Insert Etcher Link "
cls
start "weblink" "%chrosold%"
set /p "chros=Insert ChromeOS Link "
cls
start "weblink" "%wiiuold%"
set /p "wiiu=Insert WIIUHB Link "
goto keep
:keep
cls
set /p "lastver=Insert Last Smart Tools version "
cls
set /p "lastupdtype=Insert Last Update Type "
cls
set "updtime=%date%-%time%"
if "%gpt%"=="" ( set "gpt=%gptold%" )
if "%mbr%"=="" ( set "mbr=%mbrold%" )
if "%dual%"=="" ( set "dual=%dualold%" )
if "%win%"=="" ( set "win=%winold%" )
if "%ubnt%"=="" ( set "ubnt=%ubntold%" )
if "%rufus%"=="" ( set "rufus=%rufusold%" )
if "%etch%"=="" ( set "etch=%etchold%" )
if "%chros%"=="" ( set "chros=%chrosold%" )
if "%wiiu%"=="" ( set "wiiu=%wiiuold%" )
if "%updtime%"=="-" ( set "updtime=%updtimeold%" )
if "%lastver%"=="" ( set "lastver=%lastverold%" )
if "%lastupdtype%"=="" ( set "lastupdtype=%lastupdtypeold%" )
(
echo %gpt%
echo %mbr%
echo %dual%
echo %win%
echo %ubnt%
echo %rufus%
echo %etch%
echo %chros%
echo %wiiu%
echo %updtime%
echo %lastver%
echo %lastupdtype%
)>"%cd%\DB\smart-tools\data.info"
echo Writed new data.info. Press any key to upload it.
pause >nul
goto uploadmode
:uploadmode
cls
set /p "choice=Manual (1) or Automatic (2) upload? "
if "%choice%"=="1" goto manual
if "%choice%"=="2" goto auto
goto uploadmode
:manual
cls
start "file" "%cd%\DB\smart-tools"
start "weblink" "https://github.com/Xarber/xcenterdb/tree/smart-tools/"
exit
:auto
cls
git init
git remote add github https://github.com/Xarber/xcenterdb.git
git remote add gitlab https://gitlab.com/X.Center/xcenterdb.git
git add . && git commit -m "Terminal Update"
git pull github release --allow-unrelated-histories
git push github release --force
echo Uploaded new files. Press any key to exit.
pause >nul
exit