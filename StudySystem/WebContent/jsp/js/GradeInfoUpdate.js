//页面加载函数
$(document).ready(function(){
   var subject=$("[name=subject]").val();
    //根据值让学院option选中
   $("#suoshuyuanxi option[value='"+subject+"']").attr("selected","selected"); 
});