/**
*  Dynamically add iran cities to your web application. support English and Farsi(Iran) languages.
*  @version 1.0.0
*  @author Mostafa Ziasistani
*  @license MIT
**/
var iran_cities = { "fa": [ "خوزستان", "تهران", "ایلام", "بوشهر", "اردبیل", "اصفهان", "یزد", "کرمانشاه", "کرمان", "همدان", "قزوین", "زنجان", "لرستان", "البرز", "آذربایجان شرقی", "آذربایجان غربی", "چهار مهال بختیاری", "خراسان جنوبی", "خراسان رضوی", "خراسان شمالی", "سمنان", "فارس", "قم", "کردستان", "کهگیلوییه و بویر احمد", "گلستان", "گیلان", "مازندران", "مرکزی", "هزمزگان", "سیستان و بلوچستان" ], "en": [ "Khozestan", "Tehran", "Ealam", "Boshehr", "Ardabil", "Esfahan", "Yazd", "Kermanshah", "Kerman", "Hamadan", "Ghazvin", "Zanjan", "Lorestan", "Alborz", "Azarbijan Sharghi", "Azarbijan Gharbi", "Chahar Maham Bakhtiari", "Khorasan Jonobi", "Khorasan Razavi", "Khorasan Shomali", "Semnan", "Fars", "Ghom", "Kordestan", "Kohkiloye Va Boyerahmad", "Golestan", "Gilan", "Mazandaran", "Markazi", "Hormozgan", "Sistan Va Balachestan" ] };
$.fn.extend({

  select : function()
  {
      return this.addClass('city-selected');
  },

  unselect : function()
  {
      return this.removeClass('city-unselected');
  },
    cities : function(){
      var current_element = $(this);
      var current_tage_name = ($(this)[0].tagName).toLowerCase();
      if(current_tage_name == "select"){
        $(this).html("");
        if($(this).attr("data-lang")){
        var lang = $(this).attr("data-lang");
        }else{
        var lang = "en";
        }
        $.each(iran_cities[lang],function(index,value){
          $(current_element).append("<option value='"+value+"'>"+value+"</option>");
        });
      }else if (current_tage_name == "ul") {
        $(this).html("");
        if($(this).attr("data-lang")){
        var lang = $(this).attr("data-lang");
        }else{
        var lang = "en";
        }
        $.each(iran_cities[lang],function(index,value){
          $(current_element).append("<li>"+value+"</li>");
        });
      }else{
        $(this).html("");
        if($(this).attr("data-lang")){
        var lang = $(this).attr("data-lang");
        }else{
        var lang = "en";
        }
        $.each(iran_cities[lang],function(index,value){
          $(current_element).append(value+" ");
        });
      }

    }

});
