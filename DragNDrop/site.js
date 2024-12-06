window.onload = function () {
    $("span").each(function () {
        let val = Math.floor(Math.random() * 10);
        $(this).text(val);
    });
};

$("#start_div").on("dragstart", dragStart);
$("#start_div").on("dragover", handleDrag);
$("#start_div").on("drop", handleDrop);

$("#end_div").on("dragstart", dragStart);
$("#end_div").on("dragover", handleDrag);
$("#end_div").on("drop", handleDrop);

function dragStart(event) {
    event.originalEvent.dataTransfer.setData("text/plain", event.target.id);
}

function handleDrag(ev) {
    ev.originalEvent.preventDefault();
}

function handleDrop(event) {
    event.preventDefault();
    let inhaltId = event.originalEvent.dataTransfer.getData("text/plain");
    //event.originalEvent.target.appendChild(document.getElementById(inhaltId));
    this.appendChild(document.getElementById(inhaltId));
}