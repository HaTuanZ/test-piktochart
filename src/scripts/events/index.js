let inputUpload = document.getElementById("upload-image-input");
let buttonUpload = document.getElementById("upload-image");
let textInput = document.getElementById("addTextInput");
let addText = document.getElementById("addText");
let countText = 0;
// add click event button upload
buttonUpload?.addEventListener("click", () => {
  inputUpload?.click();
});

// add change event input upload

inputUpload?.addEventListener("change", (e) => {
  UPLOAD_IMAGE_API(e.target.files[0]).then((res) => {
    imageShow();
    inputUpload.value = "";
  });
});

let dragTextGen = () => {
  if (textInput.value) {
	countText++;
    let div = document.createElement("div");
    div.setAttribute("class", `dragable`);
    div.setAttribute("id", `text-dragable-${countText}`);
    div.innerText = textInput.value;
    canvasBlock?.appendChild(div);
    createDragElement(div);
    textInput.value = "";
  }
};

addText?.addEventListener("click", () => {
  dragTextGen();
});
textInput?.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    dragTextGen();
  }
});
