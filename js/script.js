'use strict';

function uploadTable() {
  $.ajax({
    type: "GET",
    url: "https://raw.githubusercontent.com/keraksin/epl_project/master/js/epl.json",
    dataType: "JSON",
    success: function(data) {
        let standings = data.teams;
        for (let i = 0; i < standings.length; i++) {
            $("#table").append( "<tr><td class='table__cell'>" + data.teams[i].place
          + "</td><td class='table__team table__team_rline'>" + data.teams[i].name
          + "</td><td class='table__cell'>" + data.teams[i].matches
          + "</td><td class='table__cell'>" + data.teams[i].win
          + "</td><td class='table__cell'>" + data.teams[i].draw
          + "</td><td class='table__cell'>" + data.teams[i].lose
          + "</td><td class='table__cell'>" + data.teams[i].score
          + "</td></tr>"
        );
        }
    }
  })
}

$(document).ready(function() {
  uploadTable();
});