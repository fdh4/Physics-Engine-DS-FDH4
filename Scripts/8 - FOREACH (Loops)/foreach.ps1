$filePath = "C:\Users\User\OneDrive\Physics\Statistical Physics\Physics Engine DS FDH4\Scripts\8 - FOREACH (Loops)\Share\FolderNames.txt"

$foldersPath = "C:\Users\fdh4\OneDrive\Physics\Statistical Physics\Physics Engine DS FDH4\Scripts\8 - FOREACH (Loops)\Share"

$folderNames = Get-Content -Path $filePath

foreach($name in $folderNames)
{
    

if((Test-Path -Path "$foldersPath\$($name)") -eq $false) 
{
    New-Item -Path  "$foldersPath" -Name $name -ItemType Directory
}
else
{
    Write-Output "Folder already exists."
}
}


### Video 8 at 11:56 / 19:02 ###


New-Item -Path  "$foldersPath" -Name $folderNames[1] -ItemType Directory
New-Item -Path  "$foldersPath" -Name $folde                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           rNames[2] -ItemType Directory
New-Item -Path  "$foldersPath" -Name $folderNames[3] -ItemType Directory
New-Item -Path  "$foldersPath" -Name $folderNames[4] -ItemType Directory
New-Item -Path  "$foldersPath" -Name $folderNames[5] -ItemType Directory

