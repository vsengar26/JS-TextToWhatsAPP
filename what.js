let re = new RegExp( /(?!([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2}))(\+?\d[\d -]{8,12}\d)/g );
var message="Hello!\nI am in urgent need for RESOURCE_NAME can you please confirm if you have it available!\nThank You!";
function analyize(){
    var link="#";
    var text= document.getElementById('input').value;
    var num = text.match(re)
    m = String(num[0]);
    console.log(m);
    if (m) {
        if(m[0]=="+"){
            link = getLinkWhastapp(m, message);
        }
        else{
            var strFirstTwo = m.substring(0,2);
            if(strFirstTwo=="91"){
                link = getLinkWhastapp(m, message);
            }
            else{
                m="91"+m;
                link = getLinkWhastapp(m, message);
            }
        }
    }
    document.getElementById('link1').setAttribute('href',link);
}

function getLinkWhastapp(number, message) {
    var url = 'https://api.whatsapp.com/send?phone=' 
       + number 
       + '&text=' 
       + encodeURIComponent(message);
  
    return url
  }