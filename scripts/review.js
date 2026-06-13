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

let count = parseInt(localStorage.getItem("reviewCount") || "0", 10);
count += 1;
localStorage.setItem("reviewCount", count);
document.getElementById("review-count").textContent = count;

const params = new URLSearchParams(window.location.search);

function stars(n) {
  return "★".repeat(Number(n)) + "☆".repeat(5 - Number(n));
}

function productName(id) {
  const p = products.find(p => p.id === id);
  return p ? p.name : id;
}

const summary = document.getElementById("summary");
const fields = [
  { key: "productName", label: "Product", fn: productName },
  { key: "rating",      label: "Rating",  fn: v => `${stars(v)} (${v}/5)` },
  { key: "installDate", label: "Installed", fn: v => v },
  { key: "features",    label: "Features", fn: null }, // multi-value
  { key: "writtenReview", label: "Review", fn: v => v || "—" },
  { key: "userName",    label: "Name",    fn: v => v || "Anonymous" },
];

let html = "";
fields.forEach(f => {
  if (f.key === "features") {
    const vals = params.getAll("features");
    const display = vals.length ? vals.join(", ") : "None selected";
    html += row(f.label, display);
  } else {
    const val = params.get(f.key);
    if (val !== null && val !== "") {
      html += row(f.label, f.fn ? f.fn(val) : val);
    }
  }
});

function row(key, val) {
  return `<div class="row"><span class="key">${key}:</span><span>${val}</span></div>`;
}

summary.innerHTML = html || "<p>No submission data found.</p>";

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;
