@echo off
rem Usage: run.bat <assignment> <question>   e.g. run.bat 3 1
set A=0%1
set Q=0%2
set A=%A:~-2%
set Q=%Q:~-2%
set DIR=Assignment-%A%\Question-%Q%
if exist "%DIR%\Main.html" (
  start "" "%DIR%\Main.html"
) else (
  pushd "%DIR%" & node script.js & popd
)
