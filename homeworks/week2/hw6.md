``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程

1. 將陣列 3, 5, 8, 13, 22, 35 帶入 isValid 函式裡
2. 執行第一行，設定變數 i =0，判斷 0 是否<6，是，進入第一圈迴圈。
3. 執行第三行，判斷陣列裡第一個數字 3 是否<=0 ，否。
4. 第一圈迴圈結束，跑回第二行，i++，i = 1 是否<6，是，進入第二圈迴圈。
5. 執行第三行，判斷陣列裡第二個數字 5 是否<=0 ，否。
6. 第二圈迴圈結束，跑回第二行，i++，i = 2 是否<6，是，進入第三圈迴圈。
7. 執行第三行，判斷陣列裡第三個數字 8 是否<=0 ，否。
8. 第三圈迴圈結束，跑回第二行，i++，i = 3 是否<6，是，進入第四圈迴圈。
9. 執行第三行，判斷陣列裡第四個數字 13 是否<=0 ，否。
10. 第四圈迴圈結束，跑回第二行，i++，i = 4 是否<6，是，進入第五圈迴圈。
11. 執行第三行，判斷陣列裡第五個數字 22 是否<=0 ，否。
12. 第五圈迴圈結束，跑回第二行，i++，i = 5 是否<6，是，進入第六圈迴圈。
13. 執行第三行，判斷陣列裡第六個數字 35 是否<=0 ，否。
14. 第六圈迴圈結束，跑回第二行，i++，i = 6 是否<6，否，結束迴圈。
15. 執行第五行，設定變數 i =2，判斷 2 是否<6，是，進入第一圈迴圈。
16. 執行第六行，判斷陣列裡第三個數字 8 是否不等於第一個數字 3 跟第二個數字 5 相加，否。
17. 第一圈迴圈結束，跑回第五行，i++ ， i = 3 是否<6，是，進入第二圈迴圈。
18. 執行第六行，判斷陣列裡第四個數字 13 是否不等於第二個數字 5 跟第三個數字 8 相加，否。
19. 第二圈迴圈結束，跑回第五行，i++ ， i = 4 是否<6，是，進入第三圈迴圈。
20. 執行第六行，判斷陣列裡第五個數字 22 是否不等於第三個數字 8 跟第四個數字 13 相加，是。
21. 執行 return ，回傳 'invalid' 後結束。