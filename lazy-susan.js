var x = document.getElementsByClassName("lazy-susan");
function getIpsum(options, item) {
  if(options.type == 'lorem') {
    var url = "http://www.randomtext.me/api/lorem/p-"+options.count+"/5-15";
  }
  if(options.type == 'gibberish') {
    var url = "http://www.randomtext.me/api/gibberish/p-"+options.count+"/5-15";
  }
  if(options.type == 'bacon') {
    var url = "http://baconipsum.com/api/?type=all-meat&paras="+options.count+"&start-with-lorem=1";
  }
  if(options.type == 'pony') {
    var url = "https://ponyipsum.com/api/?type=all-pony&paras="+options.count+"&start-with-lorem=1";
  }

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var response=JSON.parse(xmlhttp.responseText);
          if(typeof(response)=='object'){
            if(options.type=="gibberish" || options.type=="lorem") {
              var result = response.text_out;
            } else {
              var result = response;
            }
          } else {
            var result = xmlhttp.responseText;
          }
          item.innerHTML=result;
      }
  }

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}


if (x.length > 0){
  for (index = 0; index < x.length; ++index) {
      var classes = x[index].classList;
      var settings = [];
      for (classIndex = 0; classIndex < classes.length; ++classIndex) {
        var parameters = {type: "type-", count: "count-"}
        if( classes[classIndex].indexOf(parameters['type']) >= 0){
          settings['type']=classes[classIndex].split('-')[1];
        }
        // TODO check if valid integer
        if( classes[classIndex].indexOf(parameters['count']) >= 0){
          settings['count']=classes[classIndex].split('-')[1];
        }
      }
      // Dont call getIpsum if settings are not valid
      getIpsum(settings, x[index]);
  }
}
