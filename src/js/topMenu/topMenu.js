$(function() {
        $(".topMenu__control").on("click", function(event) {
            event.preventDefault();
            $(".topMenu__drop").toggleClass("topMenu__drop--hidden topMenu__drop--visible");
        })
});
