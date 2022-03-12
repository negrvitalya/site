 const code="<img src=\"https://sun9-36.userapi.com/impg/OfqT5Mu9ufsvWnfAJ6Vw0DjC7u-kC5pDLZlqXw/iyXsejk30lY.jpg?size=1280x656&quality=96&sign=23bed7c0a246b10f6713305290d84745&type=album\" width=\"500px\"/><div>это и есть фотка тех даунов,<br/>и её можно скачать</div><a href=\"8.jpg\" download><button>скачать</button></a>"
  jQuery('document').ready(function(){
    jQuery('true').click(function(){
      if(jQuery('input').val()=='bomzhi.cf'){
        jQuery('#sss').html(code);
      }else{
      window.close();
      }
    });
  });
