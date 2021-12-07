<<<<<<< HEAD
:LOAD
@echo off
cls
title Windows Backup Tool Setup
choice /C AMUR /N /M "Welcome to the WBT Setup! A-utomatic / M-anual backup / U-ninstall"
IF ERRORLEVEL 4 GOTO LOAD
IF ERRORLEVEL 3 GOTO UNINSTALL
IF ERRORLEVEL 2 GOTO MANUAL
IF ERRORLEVEL 1 GOTO AUTO
IF NOT ERRORLEVEL 0 GOTO LOAD

:UNINSTALL
del "%userprofile%\Desktop\Backup.bat"
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Tool uninstalled.
pause >nul
goto load

:MANUAL
choice /C TB /N /M "Eseguire il backup di [T]utte le cartelle o solo quella di [B]ackup?"
IF ERRORLEVEL 2 GOTO MANUAL1
IF ERRORLEVEL 1 GOTO MANUAL2
IF NOT ERRORLEVEL 0 GOTO LOAD

:MANUAL1
del "%userprofile%\Desktop\Backup.bat"
echo Creo il backup tool...
echo :LOAD>>%userprofile%\Desktop\Backup.bat
echo @echo off>>%userprofile%\Desktop\Backup.bat
echo mode 65>>%userprofile%\Desktop\Backup.bat
echo :inizio>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo if exist "%userprofile%\Backup" (>>%userprofile%\Desktop\Backup.bat
echo title Scelta disco>>%userprofile%\Desktop\Backup.bat
echo choice /C ABCDEFGHIJKLMNOPQRSTUVWXYZ1234 /N /M "Su quale disco fare il backup? (A-Z=Lettera disco | 1=Chiudi | 2=Ricarica | 3=Cartella backup | 4=Gestione Disco)">>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 30 START diskmgmt.msc>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 29 START EXPLORER.EXE %userprofile%\Backup>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 28 GOTO LOAD>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 27 EXIT>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 26 GOTO DISK26>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 25 GOTO DISK25>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 24 GOTO DISK24>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 23 GOTO DISK23>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 22 GOTO DISK22>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 21 GOTO DISK21>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 20 GOTO DISK20>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 19 GOTO DISK19>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 18 GOTO DISK18>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 17 GOTO DISK17>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 16 GOTO DISK16>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 15 GOTO DISK15>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 14 GOTO DISK14>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 13 GOTO DISK13>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 12 GOTO DISK12>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 11 GOTO DISK11>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 10 GOTO DISK10>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 9 GOTO DISK9>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 8 GOTO DISK8>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 7 GOTO DISK7>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 6 GOTO DISK6>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 5 GOTO DISK5>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 4 GOTO DISK4>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 3 GOTO DISK3>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 2 GOTO DISK2>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 1 GOTO DISK1>>%userprofile%\Desktop\Backup.bat
echo IF NOT ERRORLEVEL 0 GOTO INIZIO>>%userprofile%\Desktop\Backup.bat
echo :disk26>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* Z:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco Z:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk25>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* Y:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco Y:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk24>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* X:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco X:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk23>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* W:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco W:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk22>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* V:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco V:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk21>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* U:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco U:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk20>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* T:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco T:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk19>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* S:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco S:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk18>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* R:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco R:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk17>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* Q:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco Q:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk16>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* P:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco P:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk15>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* O:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco O:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk14>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo Ho quasi terminato...
echo xcopy %userprofile%\Backup\*.* N:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco N:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk13>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* M:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco M:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk12>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* L:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco L:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk11>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* K:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco K:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk10>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* J:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco J:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk9>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* I:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco I:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk8>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* H:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco H:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk7>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* G:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco G:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk6>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* F:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco F:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk5>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* E:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco E:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk4>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* D:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco D:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk3>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* C:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco C:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk2>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* B:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco B:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk1>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo Preparazione del tool...
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* A:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco A:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :chiudi>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Chiudo...>>%userprofile%\Desktop\Backup.bat
echo echo Chiudo.>>%userprofile%\Desktop\Backup.bat
echo ) else (>>%userprofile%\Desktop\Backup.bat
echo title Configurazione del Backup Tool>>%userprofile%\Desktop\Backup.bat
echo echo Benvenuto nel Windows Backup Tool!>>%userprofile%\Desktop\Backup.bat
echo echo Sto configurando i file necessari...>>%userprofile%\Desktop\Backup.bat
echo mkdir %userprofile%\Backup>>%userprofile%\Desktop\Backup.bat
echo echo Tutti i file sono stati creati.>>%userprofile%\Desktop\Backup.bat
echo echo Per riavviare l'app premere un tasto.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo call Backup.bat>>%userprofile%\Desktop\Backup.bat
echo )>>%userprofile%\Desktop\Backup.bat
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:MANUAL2
del "%userprofile%\Desktop\Backup.bat"
echo Creo il backup tool...
echo :LOAD>>%userprofile%\Desktop\Backup.bat
echo @echo off>>%userprofile%\Desktop\Backup.bat
echo mode 65>>%userprofile%\Desktop\Backup.bat
echo :inizio>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Scelta disco>>%userprofile%\Desktop\Backup.bat
echo choice /C ABCDEFGHIJKLMNOPQRSTUVWXYZ123 /N /M "Su quale disco fare il backup? (A-Z=Lettera disco | 1=Chiudi | 2=Ricarica | 3=Gestione Disco)">>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 29 START diskmgmt.msc>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 28 GOTO LOAD>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 27 EXIT>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 26 GOTO DISK26>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 25 GOTO DISK25>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 24 GOTO DISK24>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 23 GOTO DISK23>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 22 GOTO DISK22>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 21 GOTO DISK21>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 20 GOTO DISK20>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 19 GOTO DISK19>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 18 GOTO DISK18>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 17 GOTO DISK17>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 16 GOTO DISK16>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 15 GOTO DISK15>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 14 GOTO DISK14>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 13 GOTO DISK13>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 12 GOTO DISK12>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 11 GOTO DISK11>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 10 GOTO DISK10>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 9 GOTO DISK9>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 8 GOTO DISK8>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 7 GOTO DISK7>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 6 GOTO DISK6>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 5 GOTO DISK5>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 4 GOTO DISK4>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 3 GOTO DISK3>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 2 GOTO DISK2>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 1 GOTO DISK1>>%userprofile%\Desktop\Backup.bat
echo IF NOT ERRORLEVEL 0 GOTO INIZIO>>%userprofile%\Desktop\Backup.bat
echo :disk26>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* Z:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco Z:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk25>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* Y:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco Y:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk24>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* X:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco X:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk23>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* W:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco W:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk22>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* V:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco V:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk21>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* U:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco U:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk20>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* T:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco T:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk19>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* S:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco S:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk18>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* R:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco R:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk17>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* Q:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco Q:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk16>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* P:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco P:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk15>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* O:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco O:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk14>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo Ho quasi terminato...
echo xcopy %userprofile%\*.* N:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco N:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk13>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* M:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco M:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk12>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* L:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco L:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk11>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* K:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco K:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk10>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* J:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco J:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk9>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* I:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco I:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk8>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* H:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco H:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk7>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* G:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco G:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk6>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* F:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco F:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk5>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* E:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco E:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk4>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* D:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco D:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk3>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* C:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco C:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk2>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* B:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco B:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk1>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo Preparazione del tool...
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* A:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco A:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :chiudi>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Chiudo...>>%userprofile%\Desktop\Backup.bat
echo echo Chiudo.>>%userprofile%\Desktop\Backup.bat
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO
choice /C ABCDEFGHIJKLMNOPQRSTUVWXYZ /N /M "Su quale disco vuoi eseguire il backup automaticamente? (A-Z)"
IF ERRORLEVEL 26 GOTO AUTO-DISK26
IF ERRORLEVEL 25 GOTO AUTO-DISK25
IF ERRORLEVEL 24 GOTO AUTO-DISK24
IF ERRORLEVEL 23 GOTO AUTO-DISK23
IF ERRORLEVEL 22 GOTO AUTO-DISK22
IF ERRORLEVEL 21 GOTO AUTO-DISK21
IF ERRORLEVEL 20 GOTO AUTO-DISK20
IF ERRORLEVEL 19 GOTO AUTO-DISK19
IF ERRORLEVEL 18 GOTO AUTO-DISK18
IF ERRORLEVEL 17 GOTO AUTO-DISK17
IF ERRORLEVEL 16 GOTO AUTO-DISK16
IF ERRORLEVEL 15 GOTO AUTO-DISK15
IF ERRORLEVEL 14 GOTO AUTO-DISK14
IF ERRORLEVEL 13 GOTO AUTO-DISK13
IF ERRORLEVEL 12 GOTO AUTO-DISK12
IF ERRORLEVEL 11 GOTO AUTO-DISK11
IF ERRORLEVEL 10 GOTO AUTO-DISK10
IF ERRORLEVEL 9 GOTO AUTO-DISK9
IF ERRORLEVEL 8 GOTO AUTO-DISK8
IF ERRORLEVEL 7 GOTO AUTO-DISK7
IF ERRORLEVEL 6 GOTO AUTO-DISK6
IF ERRORLEVEL 5 GOTO AUTO-DISK5
IF ERRORLEVEL 4 GOTO AUTO-DISK4
IF ERRORLEVEL 3 GOTO AUTO-DISK3
IF ERRORLEVEL 2 GOTO AUTO-DISK2
IF ERRORLEVEL 1 GOTO AUTO-DISK1

:AUTO-DISK26
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* Z:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK25
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* Y:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK24
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* X:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK23
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* W:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK22
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* V:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK21
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* U:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK20
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* T:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK19
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* S:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK18
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* R:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK17
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* Q:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK16
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* P:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK15
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* O:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK14
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* N:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK13
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* M:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK12
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* L:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK11
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* K:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK10
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* J:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK9
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* I:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK8
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* H:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK7
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* G:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK6
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* F:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK5
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* E:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK4
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* D:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK3
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* C:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK2
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* B:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK1
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* A:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
=======
:LOAD
@echo off
cls
title Windows Backup Tool Setup
choice /C AMUR /N /M "Welcome to the WBT Setup! A-utomatic / M-anual backup / U-ninstall"
IF ERRORLEVEL 4 GOTO LOAD
IF ERRORLEVEL 3 GOTO UNINSTALL
IF ERRORLEVEL 2 GOTO MANUAL
IF ERRORLEVEL 1 GOTO AUTO
IF NOT ERRORLEVEL 0 GOTO LOAD

:UNINSTALL
del "%userprofile%\Desktop\Backup.bat"
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Tool uninstalled.
pause >nul
goto load

:MANUAL
choice /C TB /N /M "Eseguire il backup di [T]utte le cartelle o solo quella di [B]ackup?"
IF ERRORLEVEL 2 GOTO MANUAL1
IF ERRORLEVEL 1 GOTO MANUAL2
IF NOT ERRORLEVEL 0 GOTO LOAD

:MANUAL1
del "%userprofile%\Desktop\Backup.bat"
echo Creo il backup tool...
echo :LOAD>>%userprofile%\Desktop\Backup.bat
echo @echo off>>%userprofile%\Desktop\Backup.bat
echo mode 65>>%userprofile%\Desktop\Backup.bat
echo :inizio>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo if exist "%userprofile%\Backup" (>>%userprofile%\Desktop\Backup.bat
echo title Scelta disco>>%userprofile%\Desktop\Backup.bat
echo choice /C ABCDEFGHIJKLMNOPQRSTUVWXYZ1234 /N /M "Su quale disco fare il backup? (A-Z=Lettera disco | 1=Chiudi | 2=Ricarica | 3=Cartella backup | 4=Gestione Disco)">>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 30 START diskmgmt.msc>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 29 START EXPLORER.EXE %userprofile%\Backup>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 28 GOTO LOAD>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 27 EXIT>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 26 GOTO DISK26>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 25 GOTO DISK25>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 24 GOTO DISK24>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 23 GOTO DISK23>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 22 GOTO DISK22>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 21 GOTO DISK21>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 20 GOTO DISK20>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 19 GOTO DISK19>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 18 GOTO DISK18>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 17 GOTO DISK17>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 16 GOTO DISK16>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 15 GOTO DISK15>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 14 GOTO DISK14>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 13 GOTO DISK13>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 12 GOTO DISK12>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 11 GOTO DISK11>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 10 GOTO DISK10>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 9 GOTO DISK9>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 8 GOTO DISK8>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 7 GOTO DISK7>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 6 GOTO DISK6>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 5 GOTO DISK5>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 4 GOTO DISK4>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 3 GOTO DISK3>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 2 GOTO DISK2>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 1 GOTO DISK1>>%userprofile%\Desktop\Backup.bat
echo IF NOT ERRORLEVEL 0 GOTO INIZIO>>%userprofile%\Desktop\Backup.bat
echo :disk26>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* Z:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco Z:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk25>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* Y:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco Y:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk24>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* X:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco X:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk23>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* W:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco W:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk22>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* V:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco V:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk21>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* U:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco U:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk20>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* T:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco T:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk19>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* S:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco S:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk18>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* R:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco R:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk17>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* Q:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco Q:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk16>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* P:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco P:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk15>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* O:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco O:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk14>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo Ho quasi terminato...
echo xcopy %userprofile%\Backup\*.* N:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco N:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk13>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* M:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco M:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk12>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* L:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco L:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk11>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* K:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco K:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk10>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* J:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco J:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk9>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* I:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco I:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk8>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* H:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco H:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk7>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* G:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco G:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk6>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* F:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco F:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk5>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* E:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco E:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk4>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* D:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco D:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk3>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* C:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco C:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk2>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* B:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco B:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk1>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo Preparazione del tool...
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\Backup\*.* A:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco A:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :chiudi>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Chiudo...>>%userprofile%\Desktop\Backup.bat
echo echo Chiudo.>>%userprofile%\Desktop\Backup.bat
echo ) else (>>%userprofile%\Desktop\Backup.bat
echo title Configurazione del Backup Tool>>%userprofile%\Desktop\Backup.bat
echo echo Benvenuto nel Windows Backup Tool!>>%userprofile%\Desktop\Backup.bat
echo echo Sto configurando i file necessari...>>%userprofile%\Desktop\Backup.bat
echo mkdir %userprofile%\Backup>>%userprofile%\Desktop\Backup.bat
echo echo Tutti i file sono stati creati.>>%userprofile%\Desktop\Backup.bat
echo echo Per riavviare l'app premere un tasto.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo call Backup.bat>>%userprofile%\Desktop\Backup.bat
echo )>>%userprofile%\Desktop\Backup.bat
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:MANUAL2
del "%userprofile%\Desktop\Backup.bat"
echo Creo il backup tool...
echo :LOAD>>%userprofile%\Desktop\Backup.bat
echo @echo off>>%userprofile%\Desktop\Backup.bat
echo mode 65>>%userprofile%\Desktop\Backup.bat
echo :inizio>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Scelta disco>>%userprofile%\Desktop\Backup.bat
echo choice /C ABCDEFGHIJKLMNOPQRSTUVWXYZ123 /N /M "Su quale disco fare il backup? (A-Z=Lettera disco | 1=Chiudi | 2=Ricarica | 3=Gestione Disco)">>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 29 START diskmgmt.msc>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 28 GOTO LOAD>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 27 EXIT>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 26 GOTO DISK26>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 25 GOTO DISK25>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 24 GOTO DISK24>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 23 GOTO DISK23>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 22 GOTO DISK22>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 21 GOTO DISK21>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 20 GOTO DISK20>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 19 GOTO DISK19>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 18 GOTO DISK18>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 17 GOTO DISK17>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 16 GOTO DISK16>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 15 GOTO DISK15>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 14 GOTO DISK14>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 13 GOTO DISK13>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 12 GOTO DISK12>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 11 GOTO DISK11>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 10 GOTO DISK10>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 9 GOTO DISK9>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 8 GOTO DISK8>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 7 GOTO DISK7>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 6 GOTO DISK6>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 5 GOTO DISK5>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 4 GOTO DISK4>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 3 GOTO DISK3>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 2 GOTO DISK2>>%userprofile%\Desktop\Backup.bat
echo IF ERRORLEVEL 1 GOTO DISK1>>%userprofile%\Desktop\Backup.bat
echo IF NOT ERRORLEVEL 0 GOTO INIZIO>>%userprofile%\Desktop\Backup.bat
echo :disk26>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* Z:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco Z:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk25>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* Y:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco Y:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk24>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* X:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco X:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk23>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* W:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco W:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk22>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* V:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco V:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk21>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* U:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco U:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk20>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* T:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco T:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk19>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* S:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco S:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk18>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* R:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco R:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk17>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* Q:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco Q:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk16>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* P:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco P:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk15>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* O:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco O:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk14>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo Ho quasi terminato...
echo xcopy %userprofile%\*.* N:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco N:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk13>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* M:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco M:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk12>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* L:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco L:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk11>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* K:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco K:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk10>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* J:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco J:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk9>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* I:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco I:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk8>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* H:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco H:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk7>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* G:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco G:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk6>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* F:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco F:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk5>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* E:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco E:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk4>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* D:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco D:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk3>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* C:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco C:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk2>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* B:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco B:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :disk1>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Sto copiando gli elementi...>>%userprofile%\Desktop\Backup.bat
echo Preparazione del tool...
echo echo --------------------------COPIA AVVIATA-------------------------->>%userprofile%\Desktop\Backup.bat
echo xcopy %userprofile%\*.* A:\WinBackup /d /s /f /y /i /j>>%userprofile%\Desktop\Backup.bat
echo title Copia terminata>>%userprofile%\Desktop\Backup.bat
echo echo --------------------------COPIA TERMINATA------------------------>>%userprofile%\Desktop\Backup.bat
echo echo Tutti gli elementi sono stati copiati nel disco A:\WinBackup\>>%userprofile%\Desktop\Backup.bat
echo echo Premi un tasto per ricominciare.>>%userprofile%\Desktop\Backup.bat
echo pause >nul>>%userprofile%\Desktop\Backup.bat
echo goto inizio>>%userprofile%\Desktop\Backup.bat
echo :chiudi>>%userprofile%\Desktop\Backup.bat
echo cls>>%userprofile%\Desktop\Backup.bat
echo title Chiudo...>>%userprofile%\Desktop\Backup.bat
echo echo Chiudo.>>%userprofile%\Desktop\Backup.bat
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO
choice /C ABCDEFGHIJKLMNOPQRSTUVWXYZ /N /M "Su quale disco vuoi eseguire il backup automaticamente? (A-Z)"
IF ERRORLEVEL 26 GOTO AUTO-DISK26
IF ERRORLEVEL 25 GOTO AUTO-DISK25
IF ERRORLEVEL 24 GOTO AUTO-DISK24
IF ERRORLEVEL 23 GOTO AUTO-DISK23
IF ERRORLEVEL 22 GOTO AUTO-DISK22
IF ERRORLEVEL 21 GOTO AUTO-DISK21
IF ERRORLEVEL 20 GOTO AUTO-DISK20
IF ERRORLEVEL 19 GOTO AUTO-DISK19
IF ERRORLEVEL 18 GOTO AUTO-DISK18
IF ERRORLEVEL 17 GOTO AUTO-DISK17
IF ERRORLEVEL 16 GOTO AUTO-DISK16
IF ERRORLEVEL 15 GOTO AUTO-DISK15
IF ERRORLEVEL 14 GOTO AUTO-DISK14
IF ERRORLEVEL 13 GOTO AUTO-DISK13
IF ERRORLEVEL 12 GOTO AUTO-DISK12
IF ERRORLEVEL 11 GOTO AUTO-DISK11
IF ERRORLEVEL 10 GOTO AUTO-DISK10
IF ERRORLEVEL 9 GOTO AUTO-DISK9
IF ERRORLEVEL 8 GOTO AUTO-DISK8
IF ERRORLEVEL 7 GOTO AUTO-DISK7
IF ERRORLEVEL 6 GOTO AUTO-DISK6
IF ERRORLEVEL 5 GOTO AUTO-DISK5
IF ERRORLEVEL 4 GOTO AUTO-DISK4
IF ERRORLEVEL 3 GOTO AUTO-DISK3
IF ERRORLEVEL 2 GOTO AUTO-DISK2
IF ERRORLEVEL 1 GOTO AUTO-DISK1

:AUTO-DISK26
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* Z:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK25
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* Y:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK24
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* X:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK23
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* W:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK22
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* V:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK21
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* U:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK20
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* T:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK19
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* S:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK18
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* R:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK17
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* Q:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK16
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* P:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK15
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* O:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK14
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* N:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK13
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* M:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK12
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* L:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK11
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* K:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK10
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* J:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK9
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* I:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK8
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* H:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK7
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* G:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK6
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* F:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK5
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* E:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK4
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* D:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK3
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* C:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK2
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* B:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
GOTO LOAD

:AUTO-DISK1
del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Creo il backup tool...
echo :LOAD>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo @echo off>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo if exist "%userprofile%\Backup" (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo :backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo cls>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo xcopy %userprofile%\Backup\*.* A:\WinBackup /d /s /f /y /i /j>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo goto backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo ) else (>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo title Configurazione del Backup Tool>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Benvenuto nel Windows Backup Tool!>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Sto configurando i file necessari...>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo mkdir %userprofile%\Backup>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Tutti i file sono stati creati.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo echo Per riavviare l'app premere un tasto.>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo pause >nul>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo call Backup.bat>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo )>>"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\backup.bat"
echo Ho terminato l'installazione, puoi chiudere l'app. Il backup inizierà al prossimo riavvio.
pause >nul
>>>>>>> 2aca28b70d2ae32e9d968449303ef8331effbafa
GOTO LOAD