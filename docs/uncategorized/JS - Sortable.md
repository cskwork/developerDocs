---
title: "JS - Sortable"
description: "https&#x3A;//velog.io/@gth1123/javascript-drag-and-drop-%EA%B5%AC%ED%98%84-%EC%8B%9C%EB%8F%84htmlCSS"
date: 2021-12-01T12:26:40.083Z
tags: []
---
https://velog.io/@gth1123/javascript-drag-and-drop-%EA%B5%AC%ED%98%84-%EC%8B%9C%EB%8F%84

### Sortable.js lib 사용
html
```html
<!DOCTYPE html>
<!-- Created By CodingNepal - www.codingnepalweb.com -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drag & Drop Element | CodingNepal</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.10.2/Sortable.min.js"></script>
</head>
<body>
  <div class="wrapper">
    <div class="item">
      <span class="text">Draggable Element One</span>
      <i class="fas fa-bars"></i>
    </div>
    <div class="item">
      <span class="text">Draggable Element Two</span>
      <i class="fas fa-bars"></i>
    </div>
    <div class="item">
      <span class="text">Draggable Element Three</span>
      <i class="fas fa-bars"></i>
    </div>
    <div class="item">
      <span class="text">Draggable Element Four</span>
      <i class="fas fa-bars"></i>
    </div>
    <div class="item">
      <span class="text">Draggable Element Five</span>
      <i class="fas fa-bars"></i>
    </div>
  </div>

  <script>
    const dragArea = document.querySelector(".wrapper");
    new Sortable(dragArea, {
      animation: 350
    });
  </script>

</body>
</html>

```

CSS
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #304B5F;
  padding: 20px;
}
.wrapper{
  background: #fff;
  padding: 25px;
  max-width: 460px;
  width: 100%;
  border-radius: 3px;
  box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
}
.wrapper .item{
  color: #fff;
  display: flex;
  margin-bottom: 8px;
  padding: 12px 17px;
  background: #304B5F;
  border-radius: 3px;
  align-items: center;
  justify-content: space-between;
}
.wrapper .item:last-child{
  margin-bottom: 0px;
}
.wrapper .item .text{
  font-size: 18px;
  font-weight: 400;
}
.wrapper .item i{
  font-size: 18px;
  cursor: pointer;
}

```
