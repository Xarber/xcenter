:init
@echo off
cls
title Command prompt - BBC
echo Microsoft Windows [vBetter Batch Command]
echo (c) Microsoft Corporation. All rights reserved.
goto insert
:insert
echo.
set /p "cmd=%cd%>"
%cmd%
goto insert