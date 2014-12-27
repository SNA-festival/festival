var dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var monthList = [ "　一月", "　二月", "　三月", "　四月", "　五月", "　六月",
  "　七月", "　八月", "　九月", "　十月", "十一月", "十二月" ];    


var currentYear = new Date().getFullYear();
var currentMonth = new Date().getMonth();
var previousMonth = currentMonth-1;
var nextMonth = currentMonth+1;
var currentDate = new Date().getDate();
var currentDay = new Date().getDate();
var firstDayOfMonth = new Date(currentYear,currentMonth).getDay(0);
var lastDateOfMonth = new Date(currentYear, currentMonth+1, 0).getDate();   
var monthSelector = "";
var calendarData = {};
var elem=document.createElement("img");



    


$(document).ready(function(){
    createCalendar();
    showtip();
    showevent();
    
    // $('.changeMonth').live('click', function (){
    //      changeMonth($(this).attr('id'));
    //  });
});
// window.onload=function(){
//     document.getElementById("prevMonth").onclick=changeMonth();
// }

function createCalendar(){
    $('#calendar').append('<div id="header"></div>');
    $('#calendar').append('<div id="month"></div>');

    if(currentMonth==11){
            nextMonth = 0;
        }
        else{
            nextMonth = currentMonth+1;
        }
    
    var counter = 1;
    if(lastDateOfMonth+firstDayOfMonth>35)
        blocks = 42;
    else if (lastDateOfMonth+firstDayOfMonth<29)
        blocks = 28;
    else 
        blocks = 35;
    for(var i=0; i<blocks; i++){
        //setup the header with list of days
        if(i==0){
            $('#header').append('<p class="months"><span id="prevMonth" onclick="changeprevMonth();" class="changeMonth">'+monthList[previousMonth]+'</span><span id="currentMonth">'+monthList[currentMonth]+' '+currentYear+'</span><span id="nextMonth" onclick="changenextMonth();"class="changeMonth">'+monthList[nextMonth]+'</span></p><br/>');
        }
        if(i<7){
            $('#header').append('<div class="dayName"><p>'+dayList[i]+'</p></div>');
        }
        if(i%7==0){
            $('#month').append('<div class="clear"></div>');
        } 
        //create a box for each day within the #month div
        if(i<firstDayOfMonth){
            $('#month').append('<div class="empty"></div>');
        }
        else if(i>lastDateOfMonth+firstDayOfMonth-1){
            $('#month').append('<div class="empty"></div>');
        }
        else{
            if(counter==1){
                $('#month').append('<div id="'+counter+'"class="dayBox main"><span class="date">'+counter+'</span><img id="movie" onclick="changeImage()" src="http://c.dryicons.com/images/icon_sets/handy_part_2_icons/png/128x128/movie.png" width="20" height="20"><img src="http://freeiconbox.com/icon/256/35564.png" width="20" height="20"><p  class="openTop red" width="400" height="180">感恩節</br><a href="http://feeds.feedburner.com/Tutorialzine"><a href="http://umkkaea539e4.mish.koding.io:8000/post/6/">幸運骨</a></a></p></div>');        
                 $('.dayBox').css({backgroundColor : '#FFA488'});
            }else if(counter==25){
                $('#month').append('<div id="'+counter+'"class="dayBox main"><span class="date">'+counter+'</span><img src="http://freeiconbox.com/icon/256/35564.png" width="20" height="20"><p  class="openTop red" width="400" height="180">聖誕節</br><a href="http://feeds.feedburner.com/Tutorialzine"><a href="http://umkkaea539e4.mish.koding.io:8000/post/6/">新北耶誕城</a></a></p></div>');        
                
            }
            else{
                 $('#month').append('<div id="day'+counter+'"class="dayBox main"><span class="date">'+counter+'</span></div>');

            }
            counter++;
        

        }
        
        if(counter==2 && currentMonth== 11){
            // $('.dayBox').        
            
           
        } 
        //clear div to stretch out background
        if(i==blocks-1){
            $('#month').append('<div class="clear"></div>');
        }  


    }





//         var JanList = new Array();
//         JanList[0] = {
//             date: 1
//             re: false,
//             tr: true,
//             mu: false,
//             mo: false,
//             lo: false,
//         };
//         var FebList = new Array();
//         FebList[0] = {
//             date: 14
//             re: false,
//             tr: false,
//             mu: false,
//             mo: false,
//             lo: true,
//         };
//         FebList[1] = {
//             date: 18
//             re: false,
//             tr: true,
//             mu: false,
//             mo: false,
//             lo: false,
//         };
//         FebList[2] = {
//             date: 19
//             re: false,
//             tr: true,
//             mu: false,
//             mo: false,
//             lo: false,
//         };
//         FebList[3] = {
//             date: 23
//             re: false,
//             tr: true,
//             mu: false,
//             mo: false,
//             lo: false,
//         };

        // var DecList = new Array();
        // DecList[0] = {
        //     date: 22
        //     re: false,
        //     tr: true,
        //     mu: false,
        //     mo: false,
        //     lo: false,
        // };
        // DecList[1] = {
        //     date: 25
        //     re: false,
        //     tr: false,
        //     mu: false,
        //     mo: false,
        //     lo: false,
        // };

        // if(currentMonth == new Date().getMonth()){
        //         for (var i = 0; i < DecList.length; i++) {
        //             if(DecList[i].date == 25){
        //                 (DecList.date).css({backgroundColor : '#FFA488'});     
        //         };
                
        //     }


   






    $('#header').append('<div id="createEvent"></div>');
    $('#createEvent').css({backgroundColor : '#FFA488'});
    
    //change bg for current date
    if(currentYear == new Date().getFullYear() && currentMonth == new Date().getMonth()){
        $('#'+currentDay+'').css({
            backgroundColor : '#DDEDF0'
        });
    }     
    
    // when we hover over a dayBox
    $('.dayBox').hover(
        function(){
            $(this).css({borderColor:'#ccc',
            boxShadow: 'none'})
        }, 
        function(){
            $(this).css({borderColor:'#ccc',
            boxShadow: '#ddd 2px 2px'})
        }
    );        

    //display calender after it's built
    $('#calendar').css('display', 'block');      
}
function showevent(){
    elem.src="img/2.jpg";
    elem.setAttribute("height","20");
    elem.setAttribute("width","20");
    
    document.getElementById("day10").appendChild(elem);
}
function changeprevMonth(){

        if(currentMonth == 0){ 
            currentMonth = 11;
            currentYear = currentYear-1; 
        }
        else{            
         currentMonth = currentMonth-1;
        }

        if(currentMonth==0)
            previousMonth = 11;
        else{          
            previousMonth = currentMonth-1;
        }

        if(currentMonth==11){
            nextMonth = 0;
        }
        else{
            nextMonth = currentMonth+1;
        }

        firstDayOfMonth = new Date(currentYear,currentMonth).getDay(1);
        lastDateOfMonth = new Date(currentYear, currentMonth-1, 0).getDate();    
        monthSelector = currentYear+'-'+(new Date(currentYear,currentMonth).getMonth());
        $('#calendar').html('');
        createCalendar();
}
function changenextMonth(){
        if(currentMonth == 11){ 
            currentMonth = 0;
            currentYear = currentYear+1; 
        }
        else{            
            currentMonth = currentMonth+1;
        }

        if(currentMonth==11)
            nextMonth = 0;
        else{          
            nextMonth = currentMonth+1;
        }

        if(currentMonth==0){
            previousMonth = 11;
        }
        else{
            previousMonth = currentMonth-1;
        }

        firstDayOfMonth = new Date(currentYear,currentMonth).getDay(1);
        lastDateOfMonth = new Date(currentYear, currentMonth+1, 0).getDate();    
        monthSelector = currentYear+'-'+(new Date(currentYear,currentMonth).getMonth());
        $('#calendar').html('');
        createCalendar();
        showevent();
}

function showtip(){
// $(document).ready(function(){
    /* The code here is executed on page load */
    
    /* Replacing all the paragraphs */
    $('.main p').replaceWith(function(){
    
        /* The style, class and title attributes of the p are copied to the slideout: */
        
        return '\
        <div class="slideOutTip '+$(this).attr('class')+'" style="'+$(this).attr('style')+'">\
            \
            <div class="tipVisible">\
                <div class="tipIcon"><div class="plusIcon"></div></div>\
                <p class="tipTitle">'+$(this).attr('title')+'</p>\
            </div>\
            \
            <div class="slideOutContent">\
                <p>'+$(this).html()+'</p>\
            </div>\
        </div>';
    });

    $('.slideOutTip').each(function(){

        /*
            Implicitly defining the width of the slideouts according to the width of its title,
            because IE fails to calculate it on its own.
        */
        
        $(this).width(40+$(this).find('.tipTitle').width());
    });
    
    /* Listening for the click event: */
    
    $('.tipVisible').bind('click',function(){
        var tip = $(this).parent();
        
        /* If a open/close animation is in progress, exit the function */
        if(tip.is(':animated'))
            return false;

        if(tip.find('.slideOutContent').css('display') == 'none')
        {
            tip.trigger('slideOut');
        }
        else tip.trigger('slideIn');

    });
    
    $('.slideOutTip').bind('slideOut',function(){

        var tip = $(this);
        var slideOut = tip.find('.slideOutContent');
        
        /* Closing all currently open slideouts: */
        $('.slideOutTip.isOpened').trigger('slideIn');
        
        /* Executed only the first time the slideout is clicked: */
        if(!tip.data('dataIsSet'))
        {
            tip .data('origWidth',tip.width())
                .data('origHeight',tip.height())
                .data('dataIsSet',true);
            
            if(tip.hasClass('openTop'))
            {
                /*
                    If this slideout opens to the top, instead of the bottom,
                    calculate the distance to the bottom and fix the slideout to it.
                */
                
                tip.css({
                    bottom  : tip.parent().height()-(tip.position().top+tip.outerHeight()),
                    top     : 'auto'
                });
                
                /* Fixing the title to the bottom of the slideout, so it is not slid to the top on open: */
                tip.find('.tipVisible').css({position:'absolute',bottom:3});
                
                /* Moving the content above the title, so it can slide open to the top: */
                tip.find('.slideOutContent').remove().prependTo(tip);
            }
            
            if(tip.hasClass('openLeft'))
            {
                /*
                    If this slideout opens to the left, instead of right, fix it to the
                    right so the left edge can expand without moving the entire div:
                */
                tip.css({
                    right   : Math.abs(tip.parent().outerWidth()-(tip.position().left+tip.outerWidth())),
                    left    : 'auto'
                });
                
                tip.find('.tipVisible').css({position:'absolute',right:3});
            }
        }
        
        /* Resize the slideout to fit the content, which is then faded into view: */
        
        tip.addClass('isOpened').animate({
            width   : Math.max(slideOut.outerWidth(),tip.data('origWidth')),
            height  : slideOut.outerHeight()+tip.data('origHeight')
        },function(){
            slideOut.fadeIn();
        });

    }).bind('slideIn',function(){
        var tip = $(this);

        /* Hide the content and restore the original size of the slideout: */
        
        tip.find('.slideOutContent').fadeOut('fast',function(){
            tip.animate({
                width   : tip.data('origWidth'),
                height  : tip.data('origHeight')
            },function(){
                tip.removeClass('isOpened');
            });
        });

    });
//});
}