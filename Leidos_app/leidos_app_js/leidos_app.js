 
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
              return response.json();
          })
          .then(function (data) {
              appendData(data);
          })
          .catch(function (err) {
              console.log('error: ' + err);
          });
      function appendData(data) {
          var mainContainer = document.getElementById("myData");
          for (var i = 0; i < data.length; i++) {
              var div = document.createElement("div");
              div.className ="col-xs-12 col-sm-6 col-md-4";
              div.innerHTML = '<div class="card" id="' + data[i].id + '"> <h5 class="card-title">' +  data[i].name + '</h4> ' + '<div class="address-frame"> <ul class="ted-list">' + '<li>' + data[i].address.street + '</li><li>' + data[i].address.suite + '</li><li>' + data[i].address.city + '</li><li>' + data[i].address.zipcode +  '</li><li><a href="mailto:'+ data[i].email +'" class="ted-email"></a></li></ul> </div> <button type="button" class="btn-delete ted-delete" id="trash"><span class="btn-label">Delete</span></button></div>';
              mainContainer.appendChild(div);
              
          }
      }
  
  ;