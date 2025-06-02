$myArray=@("Test1", "Test2", "Test3")

$myArray

$myArray=$myArray + "Test4"

$myArray+= "Test5"

$myArray

$myArray = $myArray -ne "Test2"

$myArray

#############################################


$myList=New-Object -TypeName System.Collections.ArrayList

[void]$myList.Add("Test1")
[void]$myList.Add("Test2")
$myList.AddRange(@("Test3", "Test4", "Test5", "Test2"))

$myList.Remove("Test2")

$myList.RemoveAt(0)

$myList.RemoveRange(0, 2)
$myList

$array=@()
Measure-Command -Expression{@(0..359000).ForEach({$array+=$_})}

$arrayList=New-Object -TypeName System.Collections.ArrayList
Measure-Command -Expression{$arrayList.AddRange(@(0..359000))}



