let dragCount = 0;

let imageShow = async (params = {}) => {
  let images = await GETIMAGE_API(params);

  let ul = document.getElementById("images-block");
  ul?.replaceChildren();
  images.forEach((image, index) => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = image;
    li.setAttribute("id", `item-${index + 1}`);
    li.addEventListener("click", () => {
      dragCount++;
      let imgDrag = document.createElement("img");;
	  imgDrag.src = image;
      imgDrag.setAttribute("class", `dragable`);
      imgDrag.setAttribute("id", `img-dragable-${dragCount}`);
      canvasBlock?.appendChild(imgDrag);
      createDragElement(imgDrag);
    });
    li.appendChild(img);
    ul?.appendChild(li);
  });
};
imageShow();
