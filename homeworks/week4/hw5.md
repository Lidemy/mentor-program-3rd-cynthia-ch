## 請以自己的話解釋 API 是什麼
應用程式介面，透過這個介面，可以拿到或提供資料，就像點菜的服務生會先向客人點餐，負責遞送餐點內容給廚房，並且把廚房出的餐送給客人。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
* 418 I’m a teapot：我是一個茶壺，不會泡咖啡。
* 725 It works on my machine（在我的電腦上跑得動）
* 726 It’s a feature, not a bug（這是一個功能，不是錯誤）


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL: https://goodtoeat.com

* 回傳所有餐廳資料
  * Method : GET
  * Path : /restaurant
  * 參數 : _limit: 限制回傳的數量
  * 範例 : /restaurant?_limit=10

* 回傳單一餐廳資料
  * Method : GET
  * Path : /restaurant/:id
  * 參數 : 無
  * 範例 : /restaurant/10

* 新增餐廳資料
  * Method : POST
  * Path : /restaurant
  * 參數 : name:餐廳名
  * 範例 : 無

* 刪除餐廳資料
  * Method : DELETE
  * Path : /restaurant/:id
  * 參數 : 無
  * 範例 : 無

* 更改餐廳資料
  * Method : PATCH
  * Path : /restaurant/:id
  * 參數 : name:餐廳名
  * 範例 : 無    

