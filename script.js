/** ------------------------------
Script for toggle menu interaction
------------------------------- **/

var switchBtn = document.getElementById("switch");
var btnGroup = document.getElementById("navigation");
var columnSet = document.getElementById("columnSet1");
var columnSet2 = document.getElementById("columnSet2");
//If javascript is enabled, show the menu button and set menu columns to 5
switchBtn.style.display = "block";
btnGroup.style.display = "none";
columnSet.className = "column column-5";
columnSet2.className = "column column-6";
var currentState = 0;

function switchVisibility(){
  // If the groups is hidden, show it
  if(currentState === 0){
  btnGroup.style.display = "block";
	columnSet2.className = "column column-1";
  // Update the current state, 1 for visible
  currentState = 1
  }
  else {
  // If the groups is visibile, hide it
  btnGroup.style.display = "none";
	columnSet2.className = "column column-6";
  // Update the current state, 0 for hidden
  currentState = 0
  };
  // need some function here later to update the value in the database
};

switchBtn.onclick = switchVisibility;
