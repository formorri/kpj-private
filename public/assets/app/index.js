/*****CountUp Number****/
$(".count").countUp({
	delay: 10,
	/* The delay in milliseconds per number count up */
	time: 2300,
	/*The total duration of the count up animation */
});

$(".slider-counter a").click(function() {
    jQuery(document).ready(function($) {
        $('.count').countUp({
            time: 1000
        })
    })

})	