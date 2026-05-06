let allPapers = [];

// ================= LOAD JSON =================
$(document).ready(function () {

    $.getJSON("publications.json", function (data) {

        // sort by year DESC
        allPapers = data.sort((a, b) => b.year - a.year);

        render(allPapers);

    }).fail(function () {
        alert("Error loading publications.json (check path or run via server)");
    });

});

// ================= RENDER =================
function render(list) {

    let html = "";

    list.forEach(p => {

        html += `
        <div class="paper">

            <h3>
                ${p.url ? `<a href="${p.url}" target="_blank">${p.title}</a>` : p.title}
            </h3>

            <p><strong>${p.authors.join(", ")}</strong></p>

            <p>
                ${p.year} • ${p.category}
            </p>

          <p>
  ${p.venue ? `• <em>${p.venue}</em>` : ""}
</p>

        </div>
        `;
    });

    $("#papers").html(html);
}
// ================= FILTER =================
$("#search").on("input", filter);
$("#filterCategory").on("change", filter);

function filter() {

    let q = $("#search").val().toLowerCase();
    let c = $("#filterCategory").val();

    let filtered = allPapers.filter(p => {

        let text = JSON.stringify(p).toLowerCase();

        let matchSearch = text.includes(q);
        let matchCategory = (c === "all" || p.category === c);

        return matchSearch && matchCategory;
    });

    render(filtered);
}
