$(function() {
        $(".middleMenu__control").on("click", function(event) {
            event.preventDefault();
            $(".middleMenu__drop").toggleClass("middleMenu__drop--hidden middleMenu__drop--visible");
        })
});
