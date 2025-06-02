$serviceName = "Spooler"

Get-Service -Name $serviceName

Stop-Service -name $serviceName

Start-Service -name $serviceName

get-help stop-service -full

(Get-Service -Name $serviceName).GetType()

Get-Service -Name $serviceName | stop-service

get-help Get-Service -full

$serviceName | Get-Service

$serviceName | Get-Service | Start-Service

##################### this is ~ 11:00 / 16:45 on video 5

$services = New-Object -TypeName System.Collections.ArrayList

$services.AddRange(@('spooler', 'w32time'))

$services | Get-Service

$services | Start-Service

$services | Get-Service | ForEach-Object {Write-Output "Service : $($_.DisplayName) is currently $($_.Status)"}