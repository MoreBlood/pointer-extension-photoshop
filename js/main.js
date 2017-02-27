var csInterface = new CSInterface();
var extPath = decodeURI(CSInterface.prototype.getSystemPath(SystemPath.EXTENSION));
var assetsPath = extPath + "/";
var cursorsArray = new Array();


$('a').click(function(event) {
	event.preventDefault();
	csInterface.openURLInDefaultBrowser($(this).attr("href"));
});

$(document).ready(function () {
    themeManager.init();

var folder = "img/cursors/";

$.when( $.ajax({
    url : folder,
    success: function (data) {
    	$(".invisible").append(data);    	
        $(".invisible").find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                cursorsArray.push(folder + val.substr(val.indexOf("html/") + 4));
            } 
        });
        $(".invisible").remove();
    }
	})).then(function(){
		for (var key in cursorsArray){
			$('#jump').append("<div class ='cursorhadndler pointer'><img  src='" + cursorsArray[key] + "'></div>");
		};
		$('.pointer').click(function() {
			csInterface.evalScript('pasteSmartObject("' + assetsPath + $(this).children().attr("src") +  '")');
		});
	});
});



