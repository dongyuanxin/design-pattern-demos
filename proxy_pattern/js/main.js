const myImg = {
  setSrc(imgNode, src) {
    imgNode.src = src;
  }
};

// 利用代理模式实现图片懒加载
const proxyImg = {
  setSrc(imgNode, src) {
    myImg.setSrc(imgNode, "./image.png"); // NO1. 加载占位图片并且将图片放入<img>元素

    let img = new Image();
    img.onload = () => {
      myImg.setSrc(imgNode, src); // NO3. 完成加载后, 更新 <img> 元素中的图片
    };
    img.src = src; // NO2. 加载真正需要的图片
  }
};

let imgNode = document.createElement("img"),
  imgSrc =
    "https://upload-images.jianshu.io/upload_images/5486602-5cab95ba00b272bd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp";

document.body.appendChild(imgNode);

proxyImg.setSrc(imgNode, imgSrc);
