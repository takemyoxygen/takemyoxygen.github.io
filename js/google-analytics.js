var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-35198518-1']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
  
$(document).ready(function(){
    $("a").click(function(){
        var linkClass = $(this).attr("class");
        var analyticsEvent = getEventBasedOnLink(linkClass);
        if (analyticsEvent !== null){
            _gaq.push(['_trackEvent', 'Navigation', analyticsEvent]);
        }
    });
});
  
  
function getEventBasedOnLink(linkClass){
    switch (linkClass){
        case "twitter":
            return "Navigate to Twitter";
            
        case "cv":
            return "Navigate to CV";
            
        case "linkedin":
            return "Navigate to LinkedIn";
			
		case "bitbucket":
			return "Navigate to Bitbucket";
            
        default:
            return null;
    }
}