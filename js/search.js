$(function(){
    initial();
});

$(document).ready(function()
{
    
    $("#btnSearch").click(function()
    {
        $("#resultNum").text("7");
        
    })

    $(".memo-show").click(function()
    {
        alert("这里跳转至记忆详情页面");
    })

})

function initial()
{
    /*
    $("#resultNum").text("0");
    $.ajax({
        type:"GET",
        url:"resources\test.json",
        dataType:"json",
        success:function(data){
            var listdata=data.list;
            if(listdata.length>0){
                var listdata="";
                $.each(listdata, function () { 
                     listInfo+="<div class='options-frame'>"+
                     "<h3>"+this.theme+"</h3>"+
                     "<p>"+this.content+"</p>"+
                     "<h6>"+this.date+"</h6>";
                });
                $("#resultMemories")[0].innerHTML=listInfo;
            }
        },
        error:function(){
            alert("请求数据失败");
        }
        
    })
    */
}
