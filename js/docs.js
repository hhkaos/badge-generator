$(function() {
    // Code for docs demos
    function createColorpickers() {
        // Api demo
        

        $('.demo-auto').colorpicker().on('changeColor.colorpicker', function(event){
            var part = $(this).data("part"),
                color = event.color.toHex();

            if(part == "bgHeader" || part == "bgFooter"){
                $("."+part).css("background-color", color);
            }else{
                $("."+part).css("color", color);
            }
            console.log("Var "+ $(this).data("part") +": ",event.color.toHex());
        });
    }
    createColorpickers();
    $("#logoSrc").change(function(){
        $(".logo").attr("src",$(this).val());
        console.log($(this).val());
    });
    $("#pdf").click(function(){
        var params = $("form").serialize().replace(/%23/g, "");
        console.log(params);
        
        $(this).attr("href","bagde-generator.html?"+params);
    });


});
