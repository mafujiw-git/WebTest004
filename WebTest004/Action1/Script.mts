Browser("Home Page - VEDemoJpn001").Page("Home Page - VEDemoJpn001").Link("ユーザ管理").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Home Page - VEDemoJpn001").Page("Index - VEDemoJpn001").Link("新規ユーザ登録").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Home Page - VEDemoJpn001").Page("Create - VEDemoJpn001").WebEdit("UserName").Set "test004" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Home Page - VEDemoJpn001").Page("Create - VEDemoJpn001").WebEdit("Email").Set "test004@default.com" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Home Page - VEDemoJpn001").Page("Create - VEDemoJpn001").WebEdit("Role").Set "comment" @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Home Page - VEDemoJpn001").Page("Create - VEDemoJpn001").WebEdit("Comment").Set "QA担当者" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Home Page - VEDemoJpn001").Page("Create - VEDemoJpn001").Link("ＯＫ").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Home Page - VEDemoJpn001").Page("Index - VEDemoJpn001").Sync
Browser("Home Page - VEDemoJpn001").CloseAllTabs @@ hightlight id_;_917536_;_script infofile_;_ZIP::ssf8.xml_;_
