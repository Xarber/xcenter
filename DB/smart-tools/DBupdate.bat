@echo off
chdir %userprofile%\OneDrive\Desktop\Productivity\X-Center
goto gitupload
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
set /p "lastver=Insert Last Smart Tools version "
cls
set "updtime=%date%-%time%"
(
echo %gpt%
echo %mbr%
echo %dual%
echo %win%
echo %ubnt%
echo %rufus%
echo %etch%
echo %chros%
echo %updtime%
echo %lastver%
)>"%cd%\DB\smart-tools\data.info"
:gitupload
git init >nul
git remote add origin https://github.com/Xarber/xcenter.git >nul
git add . && git commit -m "Terminal Update" >nul
git pull origin release --allow-unrelated-histories >nul
git push origin release --force >nul
echo Writed and uploaded new data.info.
pause >nul
exit /b