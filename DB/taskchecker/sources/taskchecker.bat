::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCyDJGyX8VAjFB5aXg2BA3muAuZF+vrHwOSChl8UQucDXIrI0aCBMNwj+ErgYJU532xTjNIwNFZ7exy/ax0IjUx+omWWPMSUtgzqT1q19UQlCWZxlF/EjTgwY9ttmcgGwW63/0Kf
::YAwzuBVtJxjWCl3EqQJgSA==
::ZR4luwNxJguZRRnk
::Yhs/ulQjdF+5
::cxAkpRVqdFKZSTk=
::cBs/ulQjdF65
::ZR41oxFsdFKZSDk=
::eBoioBt6dFKZSTk=
::cRo6pxp7LAbNWATEpSI=
::egkzugNsPRvcWATEpSI=
::dAsiuh18IRvcCxnZtBJQ
::cRYluBh/LU+EWAnk
::YxY4rhs+aU+IeA==
::cxY6rQJ7JhzQF1fEqQJhZksaHErSXA==
::ZQ05rAF9IBncCkqN+0xwdVsFAlTMbCXqZg==
::ZQ05rAF9IAHYFVzEqQIEKQhfDCeKOWixZg==
::eg0/rx1wNQPfEVWB+kM9LVsJDBCDL2C5DrAf4+3pjw==
::fBEirQZwNQPfEVWB+kM9LVsJDBCDL2D0Bb0Z6+Ob
::cRolqwZ3JBvQF1fEqQIAJA5TRQrCKGT6C7QS6e/+r9LKkl8SU/A+dZyb3KGAI/Qa5Uv3FQ==
::dhA7uBVwLU+EWGHJ10c+PB5GLA==
::YQ03rBFzNR3SWATElA==
::dhAmsQZ3MwfNWATEphJieVtsTRaAOXna
::ZQ0/vhVqMQ3MEVWAtB9weVUEAlTMbAs=
::Zg8zqx1/OA3MEVWAtB9weVUEAlTMbAs=
::dhA7pRFwIByZRRmt8El+aDNdDF7LXA==
::Zh4grVQjdCyDJGyX8VAjFB5aXg2BA3muAuZF+vrHwOSChl8UQucDXIrI0aCBMNwj+ErgYJU532xTjNIwNFZ7exy/ax0IjUx+omWWPMSUtgzqT1q18kojEGZ8gmDbwi4jZbM=
::YB416Ek+ZG8=
::
::
::978f952a14a936cc963da21a135fa983
title X-Program Task Checker
set "programdir=%programfiles%\com.xcenter.apps\taskchecker\"
if not exist "%programdir%" ( mkdir "%programdir%" )
if not exist "%programdir%\lastruninfo.xnf" ( exit )
(
set /p "lastrun="
set /p "lastprog="
)<"%programdir%\lastruninfo.xnf"
if "%lastrun%"=="DELTASELECT" goto deltalastrunned
if "%lastrun%"=="SMARTTOOLS" goto smarttoolslastrunned
exit
:deltalastrunned
set "currentrunning=tasklist | findstr %lastprog%"
if not "%currentrunning%"=="" goto deltalastrunned
goto delta
:smarttoolslastrunned
set "currentrunning=tasklist | findstr %lastprog%"
if not "%lastprog%"=="" goto smarttoolslastrunned
goto smarttools
:smarttools
taskkill /IM cscript /F
taskkill /IM wscript /F
taskkill /IM SSFST.exe /F
taskkill /IM SSFST.bat /f
exit
:delta
taskkill /IM cscript /F
taskkill /IM wscript /F
exit