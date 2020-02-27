function newlink(){
    document.location.href = "./index1.html";
}
var btn1 = document.getElementById("link");
var btn2 = document.getElementById("restyle");
var btn3 = document.getElementById("redelete");
var bodystyle = document.getElementById("body");
function newstyle(){
            btn1.style.color = "green";
            btn1.style.marginLeft = "50px"
            btn1.style.backgroundColor = "pink";
            btn2.style.color = "green";
            btn2.style.backgroundColor = "pink";
            btn3.style.backgroundColor = "pink";
            btn3.style.color = "green";
            bodystyle.style.backgroundColor = "#ff4";
}
var boxx = document.getElementById("show");
    boxx.style.display = "none";
function showme(){
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    boxx.style.display = "flex";
}



//работа с объектом

var term = {
    Canada: 20,
    Germany: 23,
    Spain: 10,
    Belarus: 35,
    Russia: 19,
    Ukraine: 32,
    Poland: 5,
    China: 3,
    Bulgary: 35,
    Vatican: 16
}
  var maxim = 0;
  var sum = 0;
  var num = 0;
  for (var key in term) {
    sum += term[key];
    ++num;
        if(term[key] > maxim){
            maxim = term[key];
        }
    document.body.appendChild(document.createElement("br"));
    document.write(key + " : " + term[key] + " degrees");
  }

var  medium = sum/num;
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(document.createElement("br"));
document.write("Всего стран: " + num);
    document.body.appendChild(document.createElement("br"));
document.write("Средняя температура : " + medium + " degrees");
    document.body.appendChild(document.createElement("br"));
document.write("Максимальная температура в странах : " + maxim + " degrees");
    document.body.appendChild(document.createElement("br"));
    
    function maxcount(myObject){
        var max = 0;
        for(var key in myObject){
            if(myObject[key] > max){
                max = myObject[key]
            }
        }
        return max;
    }

    var textmax = maxcount(term);
    document.write("Maximum: " + textmax);



