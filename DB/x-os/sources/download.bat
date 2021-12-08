@echo off
bitsadmin /transfer X-OS Transfer /download /priority foreground "%1" "%2" >nul
exit