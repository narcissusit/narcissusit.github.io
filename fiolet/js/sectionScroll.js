$(function () {
    var sect = {
      initialize: function () {
        sect.listeners();
      },
      goTop: $('#first_article'),
      goBot: $('#second_article'),
      way: $('.group_person'),
      listeners: function () {
        sect.goBot.on('click', sect.moveBottom);
        sect.goTop.on('click', sect.moveTop);
      },
      moveBottom: function () {
        var forTarget$ = $('.active').next().attr('id');
        $(this).attr('href', '#' + forTarget$);
        var target$ = $(this).attr('href');
        $('html, body').animate({
          scrollTop : $(target$).offset().top
        }, 'slow');
        sect.way.children('i'+target$+'')
          .prev()
          .removeClass('active')
          .next()
          .addClass('active');
        if (!sect.way.children('i'+target$+'').is(':first-child')) {
          sect.goTop.removeClass('disabled');
        }
        if (sect.way.children('i'+target$+'').is(':last-child')) {
          sect.goBot.addClass('disabled');
        }
        return false;
      },
      moveTop: function () {
        var forTarget$ = $('.active').prev().attr('id');
        $(this).attr('href', '#' + forTarget$);
        var target$ = $(this).attr('href');
        $('html, body').animate({
          scrollTop : $(target$).offset().top
        }, 'slow');
        sect.way.children('i'+target$+'')
          .next()
          .removeClass('active')
          .prev()
          .addClass('active');
        if (!sect.way.children('i'+target$+'').is(':last-child')) {
          sect.goBot.removeClass('disabled');
        }
        if (sect.way.children('i'+target$+'').is(':first-child')) {
          $(this).addClass('disabled');
        }
        return false;
      }
    }
    sect.initialize();
  });
