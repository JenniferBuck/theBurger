$(document).ready(function () {
    /*
     * AJAX
     * default submit operation
     */
    $(".form").on("submit", function (ev) {
        ev.preventDefault(); // prevent normal click operation
        const id = $(this).children(".burger").val();
        $.ajax({
            method: "PUT",
            url: "/burgers/" + id
        }).then(function (data) {
            // reload page
            location.reload();
        });
    });
});  