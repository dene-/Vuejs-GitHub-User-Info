new Vue({
   el: '#app',
   data: {
      username: '',
      userdata: '',
      error: '',
      loaded: false
   },
   methods: {
      getUserData: function() {
         const self = this;
         fetch('https://api.github.com/users/' + self.username)
            .then(function(data) {
               return data.json();
            })
            .then(function(json) {
               if (json.message != 'Not Found') {
                  self.error = '';
                  self.userdata = json;
               }
               else {
                  self.error = json.message;
                  setTimeout(function() { self.error = '' }, 5000);
                  self.restart();
               }
               console.log(json);
            });
      },
      restart: function() {
         this.userdata = "";
         this.username = "";
      }
   },
   mounted: function () {
      this.loaded = true;  
   }
});