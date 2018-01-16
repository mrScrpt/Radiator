$(function() {
        $(".filter__control").on("click", function(event) {
            event.preventDefault();
            $(".filter__drop").toggleClass("filter__drop--hidden filter__drop--visible");
        })
});

