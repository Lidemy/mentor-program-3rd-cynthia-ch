## 什麼是 DOM？
Document object model? HTML裡的結構，可以清楚的看出各個元素間的階層關係。 

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
傳遞順序為先捕獲後冒泡，冒泡是指事件由下往上傳遞，捕獲指事件由上往下傳遞。由於有 DOM 結構，遇到重疊的事件需要知道處理的先後順序，決定在捕獲還是冒泡階段加上監聽事件。

## 什麼是 event delegation，為什麼我們需要它？
事件代理，透過父節點來處理子節點的事件。節省寫code的時間跟執行效率，例如 ul 底下包了100個 li ，如果一個一個加很浪費時間，只要在外層的 ul 加上監聽就好。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
* event.stopPropagation()停止向下個節點傳遞事件。
* event.preventDefault() 取消預設的行為，例如替超連結加上event.preventDefault()，按了也不會連到該連結。