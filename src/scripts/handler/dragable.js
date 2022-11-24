let canvasBlock = document.getElementById("block-canvas");
function createDragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
	let eW = elmnt?.offsetWidth;
	let eH = elmnt?.offsetHeight;
    let cW = canvasBlock?.offsetWidth;
    let cH = canvasBlock?.offsetHeight;

    let top = elmnt.offsetTop - pos2;
    let left = elmnt.offsetLeft - pos1;
    if (top < 0) top = 0;
    if (left < 0) left = 0;
    if (top <= cH - eH && left <= cW - eW) {
      elmnt.style.top = top + "px";
      elmnt.style.left = left + "px";
    }
	elmnt.style.cursor = "move"
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
	elmnt.style.cursor = "default"
}
}
