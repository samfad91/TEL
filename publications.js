let allPapers = [];

// ================= LOAD =================
function loadPublications() {

fetch("/api/publications")
.then(res => res.json())
.then(data => {
    allPapers = data;
    render(data);
});

}

// ================= ADD =================
document.getElementById("addBtn").addEventListener("click", () => {

const paper = {
title: document.getElementById("title").value,
authors: document.getElementById("authors").value.split(","),
year: document.getElementById("year").value,
category: document.getElementById("category").value,
url: document.getElementById("url").value
};

fetch("/api/publications", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(paper)
})
.then(() => loadPublications());

});

// ================= RENDER =================
function render(list) {

const c = document.getElementById("papers");
c.innerHTML = "";

list.forEach(p => {

c.innerHTML += `
<div class="paper">
<h3>${p.title}</h3>
<p>${(p.authors || []).join(", ")}</p>
<p>${p.year} • ${p.category}</p>
<a href="${p.url}" target="_blank">Open</a>
</div>
`;

});

}

// ================= INIT =================
window.onload = loadPublications;