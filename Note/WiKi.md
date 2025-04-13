
###### **在powershell中查看当前目录下所有的文件夹及文件大小**

```powershell
Get-ChildItem -Directory | ForEach-Object {
	$size = (Get-ChildItem -Path $_.FullName -Recurse -File | Measure-Object -Property Length -Sum).Sum
	
	[PSCustomObject]@{
		Directory = $_.FullName
		Size = "{0:N2} MB " -f ($size / 1MB)
	}
}
```


