## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
* hr分隔線
* bgsound：屬性 src 音樂檔路徑，屬性 loop : 重播次數
* select選單

## 請問什麼是盒模型（box modal）
在 html 裡面每個元素都是一個盒模型，佔據瀏覽器寬高特定大小，尺寸為 px ，可以透過調整 margin、padding、border 來改變位置。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
差別在於佔據瀏覽器的寬高:
* block 會佔據瀏覽器整行，邊距跟寬高都可以調整。
* inline 只有元素本身的寬，可以併排，邊距跟寬高都不能調整（不會改變元素本身的位置）。
* inline-block 混合兩者的優點，可以併排，也可以調整寬高。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
* static 為預設的 position，會參照瀏覽器的定位點調整。
* relative 只會改變自己的位置，不會影響到別的元素，所以可以重疊，改變位置是參照自己原本的定位點調整。
* absolute 會參照往上找第一個不是 static 的參考點定位。
* fixed 會參照 viewport 的位置，固定在某個點，即使捲動捲軸也不會改變位置。
