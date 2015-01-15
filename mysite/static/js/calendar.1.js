var dayList = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
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


var date = currentMonth;//.slice(1,2);
// date = document.write(date.concat(". "))
// date = document.write(date.concat(currentDate))
// date = document.write(date.concat(", "))
// date = document.write(date.concat(currentYear))

$(document).ready(function(){

    $("#background").fadeIn(1000);
    createCalendar();
    inithide();
    uploadimg();

});


function createCalendar(){
    $('.photo').remove();
    scrollsmooth();
    $('#calendar').append('<div id="header"></div>');
    $('#calendar').append('<div id="month"></div>');
    

    var blocks;

    if(currentMonth==11){
            nextMonth = 0;
        }
        else{
            nextMonth = currentMonth+1;
        }
    if(currentMonth===0){
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
    $('.dayBox').css({'height':$('.dayBox').width()+'px'});
    $('.nullBox').css({'height':$('.nullBox').width()+'px'});
    $('.empty').css({'height':$('.empty').width()+'px'});
    
    for(var i=0; i<blocks; i++){

        if(i===0){

            $('#header').append('<p class="months"><span id="prevMonth" onclick="fadeoutpre()" class="changeMonth">'+monthList[previousMonth]+'</span><span id="currentMonth">'+monthList[currentMonth]+' '+currentYear+'</span><span id="nextMonth" onclick="fadeoutnext()"class="changeMonth">'+monthList[nextMonth]+'</span></p><br/>');
        }
        if(i<7){
            $('#week').append('<div class="dayName"><span>'+dayList[i]+'</span></div>');
        }
        if(i%7===0){
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
            
                 $('#month').append('<div id="day'+counter+'"class="dayBox main"><span class="date">'+counter+'</span></div>');
           
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
function fadeoutnext(){
    $('#calendar').fadeOut(800);
    window.setTimeout(changenextMonth, 800);
}
function fadeoutpre(){
     $('#calendar').fadeOut(800);
    window.setTimeout(changeprevMonth, 800);
}
//翔翔 這裡是在月曆上面印出節日的名字!  //在HTML適當的位置放入值
function showevent(){

    var mon= [];
    var whatdday=[];
    var whatmon=[];
    var dateRecord[];
    var printthis=[];
    var newelem=[];
    var k;
    for(var i=0;i<$('.post').length;i++){
        
        mon[i]= $('.date')[i].innerHTML.substring(0, 3);
        
        
        if(mon[i]=="Jan"){
            whatmon[i]=0;
        }
        if(mon[i]=="Feb"){
             whatmon[i]=1;
        }
        if(mon[i]=="Mar"){
             whatmon[i]=2;
        }
        if(mon[i]=="Apr"){
             whatmon[i]=3;
        }
        if(mon[i]=="May"){
             whatmon[i]=4;
        }
        if(mon[i]=="Jun"){
             whatmon[i]=5;
        }
        if(mon[i]=="Jul"){
             whatmon[i]=6;
        }
        if(mon[i]=="Aug"){
             whatmon[i]=7;
        }
        if(mon[i]=="Sep"){
             whatmon[i]=8;
        }
        if(mon[i]=="Oct"){
             whatmon[i]=9;
        }
        if(mon[i]=="Nov"){
             whatmon[i]=10;
        }
        if(mon[i]=="Dec"){
             whatmon[i]=11;
        }
        
        if ($('.date')[i].innerHTML.charAt(6)==","){
            whatdday[i]= $('.date')[i].innerHTML.substring(5,6);
            
        }    
        if ($('.date')[i].innerHTML.charAt(7)==","){
            whatdday[i]= $('.date')[i].innerHTML.substring(5,7);
            
        }
        printthis[i]="day"+whatdday[i];
        
       
        newelem[i]=document.createElement("div");
        newelem[i].setAttribute("id","newelem"+i);
        newelem[i].setAttribute("class","itemname");
  
        if(whatmon[i]==currentMonth){
            alert(whatdday[i]);
            alert(i);
            dateRecord[k]=whatdday[i]
            for(var j=0;j<k;j++){
                
                if(whatdday[i]!=dateRecord[j]){
                    // alert(whatdday[i])
                    document.getElementById(printthis[i]).appendChild(newelem[i]);
                    $('#newelem'+i).append('<div class="namebg"><a id="'+$('.post')[i].innerHTML+'" href="#showimg" class="dt" onClick="photowall(this.id)">'+$('.post')[i].innerHTML+'</a></div>');
                    break;
                }else {
                    alert("repeat");
                    if($('.post')[i].innerHTML!=$('.post')[j].innerHTML){
                        document.getElementById(printthis[i]).appendChild(newelem[i]);
                        $('#newelem'+i).append('<div class="namebg"><a id="'+$('.post')[i].innerHTML+'" href="#showimg" class="dt" onClick="photowall(this.id)">'+$('.post')[i].innerHTML+'</a></div>');
                        break;
                    }
                }
            }
            
            
            $('#thisimg').append('<p class="'+$('.post')[i].innerHTML+'">'+$('.file')[i].innerHTML+'</p>');
        
            $('#thisurl').append('<p class="'+$('.post')[i].innerHTML+'url">'+$('.articleURL')[i].innerHTML+'</p>');
            $('#thisdate').append('<p class="'+$('.post')[i].innerHTML+'date">'+$('.date')[i].innerHTML+'</p>');
            $('#thisstory').append('<p class="'+$('.post')[i].innerHTML+'story">'+$('.story')[i].innerHTML+'</p>');
        }
    }
    

}
function fadeoutnext(){
    $('#calendar').fadeOut(800);
    window.setTimeout(changenextMonth, 800);
}
function fadeoutpre(){
     $('#calendar').fadeOut(800);
    window.setTimeout(changeprevMonth, 800);
}
function changeprevMonth(){

        if(currentMonth == 0){ 
            currentMonth = 11;
            currentYear = currentYear-1; 
        }
        else{            
         currentMonth = currentMonth-1;
        }

        if(currentMonth===0)
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
        $("#main").css("display","none");
        $('#calendar').fadeIn(800);
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
        $("#main").css("display","none");
        $('#calendar').fadeIn(800);
        createCalendar();
        inithide();
}


function inithide(){
    $('.dd').hide();
    $('#back').hide();
      // Hide all DDs inside .faqs
    $('.dt').hover(function(){$(this).addClass('hover')},function(){$(this).removeClass('hover')}).click(function(){ // Add class "hover" on dt when hover
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
        itemWidth: 350 // Optional, the width of a grid item
      };
      // Get a reference to your grid items.
      var handler = $('#tiles li');
      
      // Call the layout function after all images have loaded
      $('#tiles').imagesLoaded(function() {
        handler.wookmark(options);
      });
}
function photowall(dayname){
    //翔翔 這裡是抓出照片 
    $("#main").css("display","block");
    var ul = document.getElementById("tiles");
    var li =[];
    var imgsrc=[];
    var acturl=[];
    var evedate=[];
    var evesty=[];
    $('.photo').remove();
    // var whatday=$('.'+dayname)[0].innerHTML;

    // imgsrc[0]=$('.'+dayname)[0].innerHTML;
    for(var i=0;i<$('.'+dayname).length;i++){
        imgsrc[i]=$('.'+dayname)[i].innerHTML;
        acturl[i]=$('.'+dayname+'url')[i].innerHTML;
        li[i] = document.createElement("li");
        li[i].setAttribute("id", "element"+i);
        li[i].setAttribute("class", "photo");
        ul.appendChild(li[i]);
        $('#element'+i).append('<div><img id="pin" src="https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/256x256/DrawingPin1_Blue.png"></div><a data-toggle="modal" data-target="#myModal" onClick="uploadmodal(\'' + dayname + '\',\'' + i + '\')"><img src="'+imgsrc[i]+'" width="300px" height="autoResize"></div></a>');
    }

    
    showphoto();

}
function uploadimg(){
    document.getElementById("id_docfile").addEventListener("change", handleFiles , false);
  
    function handleFiles() {
        console.log("wertyui");
        var files = document.getElementById("id_docfile").files;
        for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var imageType = /image.*/;
        
        if (!file.type.match(imageType)) {
          continue;
        }
        
        var img = document.getElementById("imgUpload");
        img.classList.add("obj");
        img.file = file;
        
        var reader = new FileReader();
        reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
        reader.readAsDataURL(file);
         
      }
    }  
    
}

function clearimg(){
    document.getElementById('imgUpload').setAttribute("src","http://en.immostreet.com/Content/img/icon/icon_missing_photo_detail.png");
}
function uploadmodal(dayname,num){
    var imgsrc=[];
    var acturl=[];
    var evedate=[];
    var evesty=[];
    
    for(var i=0;i<$('.'+dayname).length;i++){
        imgsrc[i]=$('.'+dayname)[i].innerHTML;
        acturl[i]=$('.'+dayname+'url')[i].innerHTML;
        evedate[i]=$('.'+dayname+'date')[i].innerHTML;
        evesty[i]=$('.'+dayname+'story')[i].innerHTML;
    }

    document.getElementById("myModalLabel").innerHTML= dayname;
    document.getElementById("eventtime").innerHTML= evedate[num];
    document.getElementById("eventimg").setAttribute("src",imgsrc[num]);
    document.getElementById("eventstory").innerHTML= evesty[num];
    // document.getElementById("modalshare").setAttribute("href","https://www.facebook.com/sharer/sharer.php?u="+acturl[num]);
    // document.getElementById("modalshare").addEventListener("click", function() {
    //     qq(acturl[num]);
    // }, true);
    document.getElementById("modalshare").onclick = function() { 
            yeah("https://www.facebook.com/sharer/sharer.php?u="+acturl[num]); 
        };

}
function yeah(yaya){
  
    {window.open(""+yaya+"&t="+document.title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false; }
}