/*var year=[["January", "1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16",
"17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"], ["February","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16",
"17","18","19","20","21","22","23","24","25","26","27","28"],["March", "1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16",
"17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],["April","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16",
"17","18","19","20","21","22","23","24","25","26","27","28","29","30"],["May","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16",
"17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],["June","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16",
"17","18","19","20","21","22","23","24","25","26","27","28","29","30"],["July","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16",
"17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]["August","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16",
"17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],["September", "1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16",
"17","18","19","20","21","22","23","24","25","26","27","28","29","30"],["October","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16",
"17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],["November","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16",
"17","18","19","20","21","22","23","24","25","26","27","28","29","30"],["December","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16",
"17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]];*/

var array=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16",
"17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];

var months=['January','February','March','April','May','June','July','August','September','October','November','December'];
    //counter=0;
    //var i=0;
    //displaymonth(0);

$(document).ready(function(){
    date();
    
    $("#next").click(function(){
    //counter = (counter + 1) % months.length;
    //var obj = _.find(months, function(obj){});
    //$('#monthw').text();
    cal();
    });
});

function date(){
    for (var i =0; i <=31; i++) {
    var date= array[i];
    var x = i+1;
    document.getElementById(x).innerHTML=date;
    }
}

function cal(){
    for (var j = 0; j<=months.length; j++) {
    var year= months[j];
    //document.getElementById("month").innerHTML=year[0];
    }

}
console.log(year);

    
