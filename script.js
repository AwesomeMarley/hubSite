/*
const example_element = document.createElement('div');
example_element.id = 'example'
example_element.text_content = 'your text here';
document.body.append(example_element);
*/



// const web_tab = document.createElement('div');
// web_tab.id = 'web_element';
// web_tab.textContent = 'Web Browser';
// document.body.append(web_tab);

// const games_tab = document.createElement('div');
// games_tab.id = 'games_element';
// games_tab.textContent = 'Games';
// document.body.append(games_tab);

// const utilites_tab = document.createElement('div');
// utilites_tab.id = 'utilities_element';
// utilites_tab.textContent = 'Utilities';
// document.body.append(utilites_tab);



document.getElementById('home').style.display = "block";

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function searchFunction() {
  var searchURL = document.getElementById("searchbar").value;
  //alert(searchURL);
  document.getElementById("mainframe").src = "https://unblo.cc/wgnx/https://"+searchURL+"/"
}