(function(){
    if (document.location.hostname == "localhost" ||
        document.location.hostname == "127.0.0.1") {
        console.log("You're home, dude")
        return;
    }

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-68513342-1', 'auto');
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
                return "Twitter";

            case "linkedin":
                return "LinkedIn";

    		case "bitbucket":
    			return "Bitbucket";

            case "stackoverflow":
                return "StackOverflow";

            default:
                return null;
        }
    }
})();
