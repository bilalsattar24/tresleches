var profCat2 = ['Communication', 'Professionalism', 'Excellence'];
var archCat2 = ['Problem Solving', 'Frameworks & Models', 'Thought Leadership'];
var comCat3 = ['Writing', 'Speaking', 'Meetings', 'Listening', 'Expression', 'Effective use of time'];
var frameCat3 = ['Using Frameworks', 'Systems Thinking', 'Feedback Loops', 'Design Principles'];
var writingCdps = [
  'Clearly and appropriately communicates ideas all correspondence',
  'Makes use of information-structuring techniques to clearly communicate ideas in all correspondence',
  'Adapts message to the preferred communication style of the stakeholders considering situational context and their perspectives',
  'Adapts message to the preferred communication style of the stakeholders considering situational context and their perspectives',
  'Follows Pariveda style for written documents & presentation',
  'Uses Pariveda style with minimal guidance',
  'Storyboards portions of documents in Pariveda style',
  'Storyboards entire documents using Pariveda style',
  'Mentors others on Pariveda style',
  'Coaches others on Pariveda style',
  'Role model for Pariveda style'];
var designCdps = [
  'Identifies design principles within assigned task',
  "Understands design principles related to team members' assignments",
  "Applies design principles across multiple problem / solutions to team members' assignments",
  'Understands design principles across multiple problem / solutions at a project level',
  'Explains design principles across multiple problem / solutions at a project level',
  'Understands design principles across multiple problem / solutions under different project scenarios',
  'Explains design principles across multiple problem / solutions under different scenarios',
  'Leads application of design principles across multiple problem / solutions under different project scenarios',
  'Mentors others in the application of design principles across multiple problem / solutions under different business scenarios',
  'Coaches others in the application of design principles across multiple problem / solutions under different industry scenarios'];

var predictiveList = writingCdps.concat(designCdps);
var list = document.getElementById('cdpList');

predictiveList.forEach(function(item){
   var option = document.createElement('option');
   option.value = item;
   list.appendChild(option);
});

var expUl = document.getElementById('cat2');
var catUl = document.getElementById('cat3');
var cdpUl = document.getElementById('cat4');
var curCdp = {
  role: document.getElementById('cat1-btn').value,
  exp: document.getElementById('cat2-btn').value,
  cat: document.getElementById('cat3-btn').value,
  cdp: document.getElementById('cat4-btn').value,
  set() {
    this.role=document.getElementById('cat1-btn').value;
    this.exp=document.getElementById('cat2-btn').value;
    this.cat=document.getElementById('cat3-btn').value;
    this.cdp=document.getElementById('cat4-btn').value;
  }
};

var findFins = () => {
  var cdpToSearch = Object.create(curCdp);
  cdpToSearch.set();
  console.log(cdpToSearch);
  //find fins with same cat4 CDP
}

var findFinsFromSearch = () => {
  var cdpToSearch = Object.create(curCdp);
  var val = document.getElementById('searchbar').value;
  console.log(val);
  //find fins with same cat4 CDP
}

$("ul").on("click", "li", function() {
  var selText = $(this).text();
  $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
  $(this).parents('.btn-group').find('.dropdown-toggle').val(selText);
  filter(selText);
});



var filter = (val) => {
  if(val === "Professional") {//lvl2
    resetChildren(1);
    document.getElementById('cat2-btn').disabled = false;
    profCat2.forEach(function(item) {
      var li = document.createElement('li');
      li.textContent = item;
      li.className = 'dropdown-item px-2';
      li.value = item;
      expUl.appendChild(li);
    })
  } else if (val === "Architect") {//lvl2
    resetChildren(1);
    document.getElementById('cat2-btn').disabled = false;
    archCat2.forEach(function(item) {
      var li = document.createElement('li');
      li.textContent = item;
      li.className = 'dropdown-item px-2';
      li.value = item;
      expUl.appendChild(li);
    })
  } else if (val === "Communication") {//lvl3
    resetChildren(2);
    document.getElementById('cat3-btn').disabled = false;
    comCat3.forEach(function(item) {
      var li = document.createElement('li');
      li.textContent = item;
      li.className = 'dropdown-item px-2';
      li.value = item;
      catUl.appendChild(li);
    })
  } else if (val === "Frameworks & Models") {//lvl3
    resetChildren(2);
    document.getElementById('cat3-btn').disabled = false;
    frameCat3.forEach(function(item) {
      var li = document.createElement('li');
      li.textContent = item;
      li.className = 'dropdown-item px-2';
      li.value = item;
      catUl.appendChild(li);
    })
  } else if (val === "Writing") {//lvl4
    resetChildren(3);
    document.getElementById('cat4-btn').disabled = false;
    writingCdps.forEach(function(item) {
      var li = document.createElement('li');
      li.textContent = item;
      li.className = 'dropdown-item px-2';
      li.value = item;
      cdpUl.appendChild(li);
    })
  } else if (val === "Design Principles") {//lvl4
    resetChildren(3);
    document.getElementById('cat4-btn').disabled = false;
    designCdps.forEach(function(item) {
      var li = document.createElement('li');
      li.textContent = item;
      li.className = 'dropdown-item px-2';
      li.value = item;
      cdpUl.appendChild(li);
    })
  }
}

var clear = (ul) => {
  if(ul){
    while(ul.firstChild) ul.removeChild(ul.firstChild);
  }
}

//disable and reset child layer if parent layer doesn't match
var resetChildren = (lvl) => {
  if (lvl == 1) {
    clear(expUl);
    clear(catUl);
    clear(cdpUl);
    document.getElementById('cat2-btn').disabled = true;
    document.getElementById('cat2-btn').innerHTML = "Select an Expectation";
    document.getElementById('cat2-btn').value = "";
    document.getElementById('cat3-btn').disabled = true;
    document.getElementById('cat3-btn').innerHTML = "Select a Category";
    document.getElementById('cat3-btn').value = "";
    document.getElementById('cat4-btn').disabled = true;
    document.getElementById('cat4-btn').innerHTML = "Select a CDP";
    document.getElementById('cat4-btn').value = "";

    //minimum requirement to be able to fitler is met
    document.getElementById('filter-btn').disabled = false;
  } else if (lvl == 2) {
    clear(catUl);
    clear(cdpUl);
    document.getElementById('cat3-btn').disabled = true;
    document.getElementById('cat3-btn').innerHTML = "Select a Category";
    document.getElementById('cat3-btn').value = "";
    document.getElementById('cat4-btn').disabled = true;
    document.getElementById('cat4-btn').innerHTML = "Select a CDP";
    document.getElementById('cat4-btn').value = "";
  } else if (lvl == 3) {
    clear(cdpUl);
    document.getElementById('cat4-btn').disabled = true;
    document.getElementById('cat4-btn').innerHTML = "Select a CDP";
    document.getElementById('cat4-btn').value = "";
  }
}
