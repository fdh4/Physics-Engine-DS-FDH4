### Video 7 ###

$filePath = "C:\Users\fdh4\OneDrive\Physics\Statistical Physics\Physics Engine DS FDH4\Scripts\7 - SWITCH (Conditional Statements)\Data\test.txt" 
### Write-Output ""
$Data = Get-Content -Path $filePath
### Write-Output ""
### Write-Output "File exists and has $($Data.Count) lines"
### Write-Output ""
$firstName = $Data[0]

Write-Output ""

if($firstName -eq "Tim")
    {Write-Output "Hello. My name is Tim."}

elseif ($firstName -eq "Steve")
    {Write-Output "Hello. My name is Steve."}
    
elseif ($firstName -eq "Richard")
    {Write-Output "Hello. My name is Richard."}
else
    {Write-Output "Hello. I do not appear to have a name."
    Write-Output "I am not sure who I am!"}

Write-Output ""

###   Video 7 at 6:20    ###
$firstName = "Penny"
switch($firstName)
{
    "Tim"      {Write-Output "Hello. My name is Tim."} 

    "Steve"    {Write-Output "Hello. My name is Steve."}

    "Richard"  {Write-Output "Hello. My name is Richard."}

    default    {Write-Output "Hello. I can not find the name $firstName."
                Write-Output "I am not sure who is first!"}
}

$firstName = "Penny"
switch($firstName)
{
    "Tim"      {Write-Output "Hello. My name is Tim." break} 

    "Steve"    {Write-Output "Hello. My name is Steve." break}

    "Richard"  {Write-Output "Hello. My name is Richard." break}

    default    {Write-Output "Hello. I can not find the name $firstName."
                Write-Output "I am not sure who is first!" break}
}


###   Video 7 at 9:10    ###

$filePath = "C:\Users\fdh4\OneDrive\Physics\Statistical Physics\Physics Engine DS FDH4\Scripts\7 - SWITCH (Conditional Statements)\Data\test.txt" 

$Data = Get-Content -Path $filePath

Switch($Data.Count)
{
    {$_ -lt 2} {Write-Output "This file has less than 2 lines"}

    {$_ -eq 7} {Write-Output "This file has 7 lines"}

    {$_ -in (8..9)} {Write-Output "This file has 8 or 9 lines"}

    default {Write-Output "This file has 10 or more lines";}

}

### End of Video 7 ###

###  An alternate way to write the Switch statement ###

Switch($Data.Count)
{   
    0 {Write-Output "This file has no lines"}

    1 {Write-Output "This file has 1 line"}

    2 {Write-Output "This file has 2 lines"}

    3 {Write-Output "This file has 3 lines"}

    4 {Write-Output "This file has 4 lines"}

    5 {Write-Output "This file has 5 lines"}

    6 {Write-Output "This file has 6 lines"}

    7 {Write-Output "This file has 7 lines"}

    8 {Write-Output "This file has 8 lines"}

    9 {Write-Output "This file has 9 lines"}

    10 {Write-Output "This file has 10 lines"}

    default {Write-Output "This file has more than 3 lines"}
}
