##############################################################################################################
# IfElseIfElse.ps1
##############################################################################################################
# This script demonstrates the use of if, elseif, and else statements in PowerShell.
# It checks the value of a variable and prints different messages based on its value.

1 -eq 2
1 -eq 1

################################# 8:56 / 24:16 ##########################################
#
#  code for correct path to the file:
$filePath = "C:\Users\fdh4\OneDrive\Physics\Statistical Physics\Physics Engine DS FDH4\Scripts\6 - IFELSEIFELSE\Data\test.txt"
### Get-Content -Path $filePath
### $filePath
$filePath
Write-Output (Test-Path -Path $filePath)

if(Test-Path -Path $filePath){
    Write-Output ""
    Write-Output "File found"
    Write-Output ""
}
else{
    Write-Output ""
    Write-Output "File NOT found"
    Write-Output ""
}

#
#  code for INcorrect path to the file:
$filePath = "C:\Users\fdh4\OneDrive\Physics\Statistical Physics\Physics Engine DS FDH4\Scripts\6 - IFELSEIFELSE\Data\testx.txt"
### Get-Content -Path $filePath
### $filePath
$filePath
Write-Output (Test-Path -Path $filePath)

if(Test-Path -Path $filePath){
    Write-Output ""
    Write-Output "File found"
    Write-Output ""
}
else{
    Write-Output ""
    Write-Output "File NOT found"
    Write-Output ""
}


################################# 10:28 / 24:16 Video #6 ##########################################

$filePath = "C:\Users\fdh4\OneDrive\Physics\Statistical Physics\Physics Engine DS FDH4\Scripts\6 - IFELSEIFELSE\Data\test.txt"

### $filePath

Write-Output ""

if(Test-Path -Path $filePath)
    {$Data = Get-Content -Path $filePath

    Write-Output "File exists and has $($Data.Count) lines"

    if($Data.Count -le 2)
        {Write-Output "This file has 2 or fewer lines"}

    elseif($Data.Count -lt 4)
        {Write-Output "This file has 3 lines"}

    else
        {Write-Output "This file has 4 or more lines"}

    Write-Output "End of if-elseif-else code block"}

else
    {Write-Output "File `"$filepath`" DOES NOT EXIST"}

Write-Output ""

##############################################################################################################

################################# End of Video #6 ##########################################

