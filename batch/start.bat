cd %~dp0
start call start-serve.bat
ping 192.0.2.2 -n 1 -w 1000 > nul
start call start-mongo.bat
ping 192.0.2.2 -n 1 -w 30000 > nul
start call start-server.bat
exit
