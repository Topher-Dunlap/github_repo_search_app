// Best practice
(function (g) {
    'use strict';

        //variables
        let userName;

        //Functions
        $("form").submit((event) => {
          event.preventDefault();
          userName = $('input[type="text"]').val();
          fetchGitHubData(userName);
        });
      
        function fetchGitHubData(userName) {
          fetch(`https://api.github.com/users/${userName}/repos`)
            .then((response) => response.json())
            .then((responseJson) => displayResults(responseJson))
            .catch(error => alert('Something went wrong. Try again later.'));
        }

        function addUserName() {
            let userNameAdd = "";
            userNameAdd += `<h2 class="results-img"> Repo List of: ${userName}</h2>`;  
            $("#show").prepend(userNameAdd);
        }
      
        function displayResults(responseJson) {
        console.log(responseJson);
        let obj = responseJson;
        console.log(obj);
        let repoNameHolder = "";
        for (let i = 0; i < obj.length; i++) {
            let repoName = obj[i].name;
            let repoURL = obj[i].svn_url;
            //replace the existing image with the new one
            repoNameHolder += `<h3 class="results-img">${repoName}:
                                <br>
                                <a href="${repoURL}" class="results-img">${repoURL}</a>
                            </h3>`;
        }
          //display the results section
          /// $("#show").html(repoNameHolder);
          $("#show").html(repoNameHolder);
          $(".results").removeClass("hidden");
          addUserName();
        }
      
        // jQuery iffe
        // immediately invoked function executable
        $(function () {
          console.log("App loaded! Waiting for submit!");
          // watchForm();
        });
      
        g.displayResults = displayResults;
      })(globalThis);
      