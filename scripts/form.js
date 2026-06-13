const products = [
  { id: "p01", name: "Cutters" },
  { id: "p02", name: "Claw Hammer" },
  { id: "p03", name: "Tape Measure" },
  { id: "p04", name: "Level" },
  { id: "p05", name: "Utility Knife" },
  { id: "p06", name: "Screwdriver Set" },
  { id: "p07", name: "Drill Bit Set" },
  { id: "p08", name: "Safety Glasses" },
  { id: "p09", name: "Work Gloves" },
  { id: "p10", name: "Flashlight" }
];

const select = document.getElementById("product-name");
products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  select.appendChild(option);
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;
