$myHashTable = @{
  key1 = 100
  guitar = "Satana"
  name = "Paul Reed Smith"
  key2 = 25
  key3 = $true
}

$myHashTable.GetType()

$myHashTable.Keys

$myHashTable.name
$myHashTable['guitar']
$myHashTable.key2
$myHashTable.key3
$myHashTable['key4']

$myHashTable.ContainsKey('key4')

$myHashTable.ContainsValue(25)

$myHashTable.Add('key4', 'testing add function')

$myHashTable['key5'] = 'added via square bracket'

$myHashTable.key6 = 'added via dot notation'

$myHashTable.Remove('name')

$myHashTable

###################################
###################################
$Employee1=New-Object -TypeName PSCustomObject

Add-Member -InputObject $Employee1 -MemberType NoteProperty -Name 'EmployeeID' -Value '1001'
Add-Member -InputObject $Employee1 -MemberType NoteProperty -Name 'FirstName' -Value 'Penny'
Add-Member -InputObject $Employee1 -MemberType NoteProperty -Name 'LastName' -Value 'Lane'
Add-Member -InputObject $Employee1 -MemberType NoteProperty -Name 'Title' -Value 'CEO'

Get-Member -InputObject $Employee1

$Employee2=[PSCustomObject]@{
  EmployeeID = '1002'
  FirstName = 'Richard'
  LastName = 'Lowencor'
  Title = 'Programer'
}
