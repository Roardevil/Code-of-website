window.onload = ()=> {
    //Check login
    if(sessionStorage.loggedInUser !== undefined){
        loadRankingTable();
    }
    loadRankingTable();
}
function loadRankingTable(){
    let str = "<table><tr><th>Name</th><th>Score</th></tr>";
    for(let key of Object.keys(localStorage)){
        let usr = JSON.parse(localStorage[key]);
        str += "<tr><td>" + usr.name + "</td><td>" + usr.Score + "</td></tr>";
    }
    str += "</table>";
    document.getElementById("Ranking").innerHTML = str;
}

    document.getElementById("myButton").onclick = function logout() {
        sessionStorage.clear();
        location.href = "Signin.php";
    };
   
    document.getElementById("myButton2").onclick = function () {
        location.href = "Quiz.php";
    };
