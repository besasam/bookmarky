// Theme Toggle

let theme = "light";

let themeToggler = document.getElementById('theme-toggle');

themeToggler.addEventListener("click", function() {
  if(document.getElementById('css-color').href.slice(-9) == "light.css") {
    document.getElementById('css-color').href = "assets/css/dark.css";
    document.getElementById('theme-toggle-icon').classList.remove("far");
    document.getElementById('theme-toggle-icon').classList.add("fas");
    theme = "dark";
  } else {
    document.getElementById('css-color').href = "assets/css/light.css";
    document.getElementById('theme-toggle-icon').classList.remove("fas");
    document.getElementById('theme-toggle-icon').classList.add("far");
    theme = "light";
  }
});



// Folder tree view

let sortable = require('sortablejs');

let folderWrapper = document.getElementById("folders");
sortable.create(folderWrapper);

let folders = document.getElementsByClassName("folder");
let folderIcons = document.getElementsByClassName("folder-icon");
let folderTexts = document.getElementsByClassName("folder-text");
let folderSettings = document.getElementsByClassName("folder-settings");

for(let i = 0; i < folders.length; i++) {
  folders[i].addEventListener("mouseenter", function() {
    folderSettings[i].classList.remove("hidden");
  });
  folders[i].addEventListener("mouseleave", function() {
    folderSettings[i].classList.add("hidden");
  });
  folderIcons[i].addEventListener("dblclick", function() {
    folders[i].classList.toggle("dbclick");
  });
  folderTexts[i].addEventListener("click", function() {
    folders[i].classList.toggle("click");
  });
}



// Folder edit modal

let folderModal = document.getElementById('folder-modal');
let folderAddButton = document.getElementById("folder-add-button");
let span = document.getElementsByClassName("close")[0];

folderAddButton.onclick = function() {
  folderModal.style.display = "block";
}

span.onclick = function() {
  folderModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == folderModal) {
    folderModal.style.display = "none";
  }
}

let selectIcons = document.getElementsByClassName("icon-select");

for(let i = 0; i < selectIcons.length; i++) {
  selectIcons[i].addEventListener("click", function() {
    this.classList.toggle("select-active");
    for(let j = 0; j < selectIcons.length; j++) {
      if(i != j) {
        selectIcons[j].classList.remove("select-active");
      }
    }
  });
}

let selectColor = document.getElementsByClassName("color-select");

for(let i = 0; i < selectColor.length; i++) {
  selectColor[i].addEventListener("click", function() {
    this.classList.toggle("select-active");
    for(let j = 0; j < selectColor.length; j++) {
      if(i != j) {
        selectColor[j].classList.remove("select-active");
      }
    }
    let color = this.id;
    if(color == "") {
      if(theme == "light") {
        color = "757575";
      } else {
        color = "BDBDBD";
      }
    }
    for(let k = 0; k < selectIcons.length; k++) {
      selectIcons[k].style.color = "#" + color;
    }
  });
}
