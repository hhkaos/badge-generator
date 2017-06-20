$(function() {
    // Code for docs demos
    function createColorpickers() {
        // Api demo


        $('.demo-auto').colorpicker().on('changeColor.colorpicker', function(event){
            var part = $(this).data("part"),
                color = event.color.toHex();
// debugger
            //if($("."+part))
            if($("#"+part).val() === ''){
              color = 'rgba(0,0,0,0)';
            }

            if(part == "bgHeader" || part == "bgFooter"){
                $("."+part).css("background-color", color);
                if(part == "bgFooter"){
                    $(".lastname").css("color", color);
                }
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

    $("#bgSrc").change(function(){
      $(".table-container").css("background-image","url("+$(this).val()+")");
    });

    $("#pdf").click(function(){
        var params = $("form").serialize().replace(/%23/g, "");
        console.log(params);

        $(this).attr("href","bagde-generator.html?"+params);
    });
    $("#width").change(function(){
        $(".table").css("width",$(this).val()+"cm");
    });
    $("#height").change(function(){
        $(".table").css("height",$(this).val()+"cm");
    });


});
