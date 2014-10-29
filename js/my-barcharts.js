
var mainSkillsGraphs = (function() {

          var techSkillsData = [
                  { label: "jQuery & jQuery UI", y: 80 },
                  { label: "HTML5", y: 90 },
                  { label: "CSS3", y: 90 },
                  { label: "Bootstrap", y: 80 },
                  { label: "LESS", y: 50 },
                  { label: "AJAX", y: 70 },
                  { label: "CVS (SVN and GIT)", y: 50 },
                  { label: "Java", y: 80 },
                  { label: "SQL", y: 50 }
                  ];

          var artSkillsData = [
                  { label: "InDesign", y: 80 },
                  { label: "Photoshop", y: 60 },
                  { label: "Graphic Design", y: 80 },
                  { label: "Potography", y: 60 }
                  ]

          var techChart = new CanvasJS.Chart("chartMainTech", {
            theme: "theme1",
            axisY:{
              gridColor: "#fff",
              lineThickness: 1,
             },
             axisX:{
              lineThickness: 1,
             },
             toolTip: {
              content: "<div class=\"tipName\"> {label}</div><div>Level: {y} out of 100</div>",
              borderColor: "#eeeeee", 
              animationEnabled: true
             },
             data: [              
              {
                  type: "bar",
                  color: "#7b6888", 
                  dataPoints: techSkillsData
              }
             ]
          });

          var artChart = new CanvasJS.Chart("chartMainArt", {
            theme: "theme1",
            axisY:{
              gridColor: "#fff",
              lineThickness: 1,
             },
             axisX:{
              lineThickness: 1,
             },
             toolTip: {
              content: "<div class=\"tipName\"> {label}</div><div>Level: {y} out of 100</div>",
              borderColor: "#eeeeee", 
              animationEnabled: true
             },
             data: [              
              {
                  type: "bar",
                  color: "#7b6888", 
                  dataPoints: artSkillsData
              }
             ]
          });

          var renderCharts = function(){
            techChart.render();
            artChart.render();
          };

          return {
            renderCharts: renderCharts
          };
})();

var displayMainSkills = (function(){

  var textElements = $("#main-technical ul,  #main-creative ul");
  var message = "Your browser is too old to display the graph. Please update your browser.";

  var displayMessage = function(message){
    $("#skills-legend").html(message);
  }, 
  displaySkills = function(){
    textElements.hide();
    mainSkillsGraphs.renderCharts();
  }, 
  makeDecision = function(){
    if(!isOldIE()){
      displaySkills();
    } else {
      displayMessage(message);
    }
  }

  return{
    makeDecision: makeDecision
  };
  
})();

displayMainSkills.makeDecision();



