<# : chooser.bat
:: launches a File... Open sort of file chooser and outputs choice(s) to the console
:: https://stackoverflow.com/a/15885133/1683264
@echo off
setlocal
for /f "delims=" %%I in ('powershell -noprofile "iex (${%~f0} | out-string)"') do (
    set "input=%%~I"
)
if not exist "%tmp%\X-OS\" ( mkdir "%tmp%\X-OS" )
echo %input% >"%tmp%\X-OS\lastselection.file"
exit
: end Batch portion / begin PowerShell hybrid chimera #>
Add-Type -AssemblyName System.Windows.Forms
$f = new-object Windows.Forms.OpenFileDialog
$f.InitialDirectory = pwd
$f.Filter = "Batch File *.bat|*.bat"
$f.ShowHelp = $true
$f.Multiselect = $true
[void]$f.ShowDialog()
if ($f.Multiselect) { $f.FileNames } else { $f.FileName }