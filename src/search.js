//Hard coding list
var profCat2 = ['Communication', 'Professionalism', 'Excellence'];
var archCat2 = ['Problem Solving', 'Frameworks & Models', 'Thought Leadership'];
var comCat3 = ['Writing', 'Speaking', 'Meetings', 'Listening', 'Expression', 'Effective use of time'];

var expUl = document.getElementById('cat2');
var catUl = document.getElementById('cat2');
var cdpUl = document.getElementById('cat2');


$(".dropdown-menu li").click(function(){
  var selText = $(this).text();
  $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
  filter(selText)
});

var filter = (val) => {
  if(val === "Professional") { //select level text swap broken
    document.getElementById('cat2-btn').disabled = false;
    clear(expUl);
    profCat2.forEach(function(item) {
      var li = document.createElement('li');
      li.textContent = item;
      li.className = 'dropdown-item px-2';
      li.value = item;
      expUl.appendChild(li);
    })
  } else if (val === "Architect") {
    clear(expUl);
    document.getElementById('cat2-btn').disabled = false;
    archCat2.forEach(function(item) {
      var li = document.createElement('li');
      li.textContent = item;
      li.className = 'dropdown-item px-2';
      li.value = item;
      expUl.appendChild(li);
    })
  }
}

var clear = (ul) => {
  if(ul){
  while(ul.firstChild) ul.removeChild(ul.firstChild);
}
}

// 1
// Professional
// Architect
// Leader
// Player/Coach
// Advisor
// -
// 2
// Prof—
// Communication
// Professionalism
// Excellence
// 3
// Com:
// Writing
// Speaking
// Meetings
// Listening
// Expression
// Effective use of time
// Prof:
// Company Policies & Processes
// Personal Habits
// Exc:
// Professional Will
// 2
// Arch—
// Problem Solving
// Frameworks & Models
// Thought Leadership
