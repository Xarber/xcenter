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
start "weblink" "https://download1587.mediafire.com/d8ew2kv8wmeg/pnk77toh6ykagqr/GPT.zip"
set /p "gpt=Insert GPT Link "
cls
start "weblink" "https://download1592.mediafire.com/joav4991cq7g/r1ykciia9xmtcau/MBR.zip"
set /p "mbr=Insert MBR Link "
cls
start "weblink" "https://download1073.mediafire.com/lthwkmc9ndfg/d4lmfv1tto6rw2q/DualBoot.zip"
set /p "dual=Insert DUALBOOT Link "
cls
start "weblink" "https://download1349.mediafire.com/8nzt9f7ibdxg/qtco3g01cst1s2o/Win10.zip"
set /p "win=Insert Win10 Link "
cls
start "weblink" "https://download1348.mediafire.com/1nz0sxrjycig/knzwgah7rz9u9x8/Ubuntu.zip"
set /p "ubnt=Insert Ubuntu Link "
cls
start "weblink" "https://download1509.mediafire.com/l6cd1js56o0g/u99u3kwwcgiww00/Rufus.zip"
set /p "rufus=Insert Rufus Link "
cls
start "weblink" "https://download943.mediafire.com/lt3e4alk4ztg/bmgggq6fiwgvaqx/Etcher.zip"
set /p "etch=Insert Etcher Link "
cls
start "weblink" "https://download1498.mediafire.com/jfyv4ylxll3g/p2hjxa157qhn9pe/ChromeOS.zip"
set /p "chros=Insert ChromeOS Link "
cls
start "weblink" "https://download1510.mediafire.com/r76moqqtft7g/1wg2efahon06o23/WIIUHB.zip"
set /p "wiiu=Insert WIIUHB Link "
cls
set /p "lastver=Insert Last Smart Tools version "
cls
set /p "lastupdtype=Insert Last Update Type "
cls
:after
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
start "weblink" "https://github.com/Xarber/xcenter/tree/release/DB/smart-tools"
exit
:auto
cls
git init
git remote add github https://github.com/Xarber/xcenter.git
git remote add gitlab https://gitlab.com/X.Center/xcenter.git
git add . && git commit -m "Terminal Update"
git pull github release --allow-unrelated-histories
git push github release --force
echo Uploaded new files. Press any key to exit.
pause >nul
exit