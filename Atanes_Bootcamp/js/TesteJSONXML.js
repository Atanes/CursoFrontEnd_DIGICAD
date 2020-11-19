// returns proper XMLHttpRequest object
function getXmlHttp(){
    var xmlhttp;
    try {
      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (E) {
        xmlhttp = false;
      }
    }
    if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
      xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
  }

  // creates CORS Request object
  function createCORSRequest(method, url) {
    var xhr = getXmlHttp();
    if ("withCredentials" in xhr) {
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      xhr = null;
    }
    return xhr;
  }
  
  // does request and calls callback function and passes json data to callback function
  function getJson(url, callback) {
    var request = createCORSRequest('GET', url);
    if(!request) {
      console.log('Cannot create request');
      return false;
    }

    request.onload = function() {
      var data = JSON.parse(request.responseText);
      callback(data);
    };

    request.onerror = function() {
      console.log('Error happen');
    };

    request.send(null);
  }
  
  // usage
  //var url = "http://" + IP + ":8080/job/Job1/lastBuild/api/json?depth=1";
  var url = 'http://time.jsontest.com/?alloworigin=true';
  getJson(url, function(data) {
    alert(data.time);
    console.log(data);
  });
