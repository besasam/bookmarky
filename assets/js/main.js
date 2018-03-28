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



// tag tree view

let sortable = require('sortablejs');

let tagWrapper = document.getElementById("tags");
sortable.create(tagWrapper);

let tags = document.getElementsByClassName("tag");
let tagIcons = document.getElementsByClassName("tag-icon");
let tagTexts = document.getElementsByClassName("tag-text");
let tagSettings = document.getElementsByClassName("tag-settings");

for(let i = 0; i < tags.length; i++) {
  tags[i].addEventListener("mouseenter", function() {
    tagSettings[i].classList.remove("hidden");
  });
  tags[i].addEventListener("mouseleave", function() {
    tagSettings[i].classList.add("hidden");
  });
  tagIcons[i].addEventListener("dblclick", function() {
    tags[i].classList.toggle("dbclick");
  });
  tagTexts[i].addEventListener("click", function() {
    tags[i].classList.toggle("click");
  });
}



// tag edit modal

let tagModal = document.getElementById('tag-modal');
let tagAddButton = document.getElementById("tag-add-button");
let span = document.getElementsByClassName("close")[0];

tagAddButton.onclick = function() {
  tagModal.style.display = "block";
}

span.onclick = function() {
  tagModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == tagModal) {
    tagModal.style.display = "none";
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
