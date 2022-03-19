@echo off
if not exist "%tmp%\X-OS\" ( mkdir "%tmp%\X-OS" )
(
powershell -command "(Get-WmiObject Win32_Battery).EstimatedChargeRemaining"
)>"%tmp%\X-OS\battery.tmp"
exit