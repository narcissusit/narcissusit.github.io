
  spScrollToHash = { 
    autor: {
      name: 'Szen',
      site: 'http://szenprogs.ru/',
      page: 'http://szenprogs.ru/blog/plavnyj_skrolling_v_ljubom_napravlenii/2011-06-21-111',
      ver: '1.2 beta'
    },

    scroll: function(id,speed,typ){
      if(id=='' || id=='#' || $(id).length==0) return false;
      if(speed==undefined || speed<1 || speed>1000) speed = 300;
      if(typ==undefined || typ<1 || typ>3) typ = 1;
      var par = 'html,body'
      var offset = $(id).offset();
      spScrollToHash.stop();
      switch(typ){
        case 1:
          $(par).animate({scrollTop:offset.top,scrollLeft:offset.left},speed,function(){document.location.hash=id;});
          break;
        case 2:
          $(par).animate({scrollTop:offset.top},Math.round(speed/2),function(){
            $(par).animate({scrollLeft:offset.left},Math.round(speed/2),function(){document.location.hash=id;});
          });
          break;
        case 3:
          $(par).animate({scrollLeft:offset.left},Math.round(speed/2),function(){
            $(par).animate({scrollTop:offset.top},Math.round(speed/2),function(){document.location.hash=id;});
          });
          break;
      }
      return false;
    },

    stop: function(){
      $('a[href*=#]').not('a[href=#]').stop();
    },

    ready: function(speed,typ){
      var id = document.location.hash;
      spScrollToHash.scroll(id,speed,typ);
      $('a[href*=#]').not('a[href=#]').click(function(){
        id = $(this).attr('href');
        id = id.substr(id.indexOf('#'));
        spScrollToHash.scroll(id,speed,typ);
        return false;
      }); 
    }
  }

  $(function(){ 
    spScrollToHash.ready(400,1);
  });