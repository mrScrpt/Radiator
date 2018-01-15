$(function() {
        $(".sidebar__control").on("click", function(event) {
            event.preventDefault();
            $(".filter").toggleClass("sidebar__drop--hidden sidebar__drop--visible");
        })
});
