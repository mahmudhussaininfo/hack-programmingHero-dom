const dataMileStone = JSON.parse(data).data;

function loadMileStore() {
  const mileStone = document.querySelector(".milestones");
  mileStone.innerHTML = `${dataMileStone
    .map((item) => {
      return ` <div class="milestone border-b" id= "${item._id}">
    <div class="flex">
      <div class="checkbox"><input type="checkbox" onclick="markMileStone(this, ${
        item._id
      })" /></div>
      <div onclick="showMileStone(this, ${item._id})">
        <p>
          ${item.name}
          <span><i class="fas fa-chevron-down"></i></span>
        </p>
      </div>
    </div>
    <div class="hidden_panel">
    ${item.modules
      .map((module) => {
        return `  <div class="module border-b">
      <p>${module.name}</p>
    </div>`;
      })
      .join("")}
  
     
    </div>
  </div>`;
    })
    .join("")}`;
}

function showMileStone(element, id) {
  const currentPanel = element.parentNode.nextElementSibling;
  const showPanel = document.querySelector(".show");
  const activePanel = document.querySelector(".active");

  if (activePanel && !element.classList.contains("active")) {
    activePanel.classList.remove("active");
  }
  element.classList.toggle("active");

  if (showPanel && !currentPanel.classList.contains("show")) {
    showPanel.classList.remove("show");
  }
  currentPanel.classList.toggle("show");

  imageMileStone(id);
}

function imageMileStone(id) {
  const mileStoneImage = document.querySelector(".milestoneImage");
  const name = document.querySelector(".title");
  const details = document.querySelector(".details");

  mileStoneImage.style.opacity = "0";

  mileStoneImage.src = dataMileStone[id].image;
  name.innerText = dataMileStone[id].name;
  details.innerText = dataMileStone[id].description;
}
const mileStoneImage = document.querySelector(".milestoneImage");
mileStoneImage.onload = function () {
  this.style.opacity = "1";
};

function markMileStone(checkbox, id) {
  const doneList = document.querySelector(".doneList");
  const milestoneList = document.querySelector(".milestones");
  const item = document.getElementById(id);

  if (checkbox.checked) {
    milestoneList.removeChild(item);
    doneList.appendChild(item);
  } else {
    milestoneList.appendChild(item);
    doneList.removeChild(item);
  }
}
loadMileStore();
