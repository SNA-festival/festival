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
    inithide();
    eventbutton();
   
});


function createCalendar(){
    
    scrollsmooth();
    $('#calendar').append('<div id="header"></div>');
    $('#calendar').append('<div id="month"></div>');

    if(currentMonth==11){
            nextMonth = 0;
        }
        else{
            nextMonth = currentMonth+1;
        }
    if(currentMonth==0){
            previousMonth = 11;
        }
        else{
            previousMonth = currentMonth-1;
        }
    var nullbox;
    var counter = 1;
    if(lastDateOfMonth+firstDayOfMonth>35){
        nullbox = 0;
        blocks = 42;
    }else if (lastDateOfMonth+firstDayOfMonth<29){
        nullbox = 14;
        blocks = 28;
    }else{
        nullbox = 7; 
        blocks = 35;
    }
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
                $('#month').append('<div id="day'+counter+'"class="dayBox main"><span class="date">'+counter+'</span><a href="#showimg" onClick="photowall();"><dt>感恩節</dt></a></div>');        
                 $('.dayBox').css({backgroundColor : '#FFA488'});
            }else if(counter==25){
                $('#month').append('<div id="day'+counter+'"class="dayBox main"><span class="date">'+counter+'</span><a href="#showimg" onClick="photowall();"><dt>聖誕節</dt></a></div>');        
                
            }
            else{
                 $('#month').append('<div id="day'+counter+'"class="dayBox main"><span class="date">'+counter+'</span></div>');

            }
            counter++;
        }
        if(i==blocks-1){
            $('#month').append('<div class="clear"></div>');
        }
                


    }
    for(var j=0; j<nullbox;j++){
        $('#month').append('<div class="nullBox"></div>');
    }
    $('#month').append('<div class="clear"></div>');
    $('#header').append('<div id="createEvent"></div>');
    $('#createEvent').css({backgroundColor : '#FFA488'});
    
    //change bg for current date
    if(currentYear == new Date().getFullYear() && currentMonth == new Date().getMonth()){
        $('#day'+currentDay+'').css({
            backgroundColor : 'rgba(70%,70%,90%,0.8)'
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
    showevent();
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
        inithide();
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
        inithide();
}

function eventbutton(){
    $('#eventtable').append('<tr><td rowspan="2" width="30%" class="eventimg">img1</td><th width="45%" height="20%" class="eventtitle">title1</th><td width="15%" height="20%" class="eventlocation">location1</td><td width="10%" height="20%" class="eventjoin">join</td></tr><tr><td colspan="3" height="60%" class="eventpeople">5</td></tr>');

}
function inithide(){
    $('.dd').hide();
    $('#back').hide();
      // Hide all DDs inside .faqs
    $('dt').hover(function(){$(this).addClass('hover')},function(){$(this).removeClass('hover')}).click(function(){ // Add class "hover" on dt when hover
        $('.dd').hide();
        $('#back').hide();
        $('.dd').slideToggle('normal'); 
        $('#back').slideToggle('normal');
    }); 
    $('#back').hover(function(){$(this).addClass('hover')},function(){$(this).removeClass('hover')}).click(function(){ // Add class "hover" on dt when hover
        $('.dd').slideToggle('normal'); 
        $('#back').slideToggle('normal');
        // Toggle dd when the respective dt is clicked
    });
    scrollsmooth();
}

function scrollsmooth(){
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
}
function showphoto(){
      // Prepare layout options.
      var options = {
        autoResize: true, // This will auto-update the layout when the browser window is resized.
        container: $('#main'), // Optional, used for some extra CSS styling
        offset: 2, // Optional, the distance between grid items
        itemWidth: 210 // Optional, the width of a grid item
      };
      // Get a reference to your grid items.
      var handler = $('#tiles li');
      // Init lightbox
      
      // Call the layout function after all images have loaded
      $('#tiles').imagesLoaded(function() {
        handler.wookmark(options);
      });
}
function photowall(){
    var ul = document.getElementById("tiles");
    var li = document.createElement("li");
    li.setAttribute("id", "element");
    ul.appendChild(li);
    $('#element').append('<a class="photo"><img src="baby.jpg" width="200" height="283"></a><p>new</p>');
    $('#main').slideToggle('normal');
    showphoto();

}
function closephoto(){
    $('#main').hide();
}
