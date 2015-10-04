(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-46789865-1', 'takemyoxygen.github.io');
ga('send', 'pageview');

$(document).ready(function(){
    $("a").click(function(){
        var linkClass = $(this).attr("class");
        var analyticsEvent = getEventBasedOnLink(linkClass);
        if (analyticsEvent !== null){
            ga("send", "event", "Navigation", analyticsEvent)
        }
    });
});


function getEventBasedOnLink(linkClass){
    switch (linkClass){
        case "twitter":
            return "Navigate to Twitter";

        case "linkedin":
            return "Navigate to LinkedIn";

		case "bitbucket":
			return "Navigate to Bitbucket";

        case "stackoverflow":
            return "Navigate to StackOverflow";

        default:
            return null;
    }
}
