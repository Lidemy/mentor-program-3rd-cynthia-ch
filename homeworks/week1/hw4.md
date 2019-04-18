## 跟你朋友介紹 Git
Git的目的是要做版本控制，我相信你也有把檔名命名成 final 、final final 、real final 的經驗，最後會找不到到底哪一版是最終版，而且不知道到底改了什麼地方，為了解決這個問題有個天才發明了 git ，可以記錄各個不同版本，也不會有檔名混淆的問題。

使用方法首先要在自己的 terminal 上安裝 git ，有了這個版本控制系統後，開啟一個檔案紀錄你的笑話，寫完存檔後使用 git add 檔案指令把這個檔案放到暫存區，等你確定不修改後再使用 git commit 檔案保存這個版本，若你有新的笑話就需要重新 add 檔案再 commit 保存。

我懂你覺得你的笑話舉世無雙會想跟大家分享，有個平台叫 github 可以讓你做到這件事情，首先要在 github 上新增 repository ，再把自己電腦裡的檔案上傳，語法是 git remote add origin 新增 repository 的連結，再 git push -u origin master，這樣 github 上就會有一份同樣的檔案了！
