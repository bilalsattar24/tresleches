let profCat2 = ['Communication', 'Professionalism', 'Excellence'];
let archCat2 = ['Problem Solving', 'Frameworks & Models', 'Thought Leadership'];
let comCat3 = ['Writing', 'Speaking', 'Meetings', 'Listening', 'Expression', 'Effective use of time'];
let frameCat3 = ['Using Frameworks', 'Systems Thinking', 'Feedback Loops', 'Design Principles'];

let predictiveList = comCat3.concat(frameCat3);
let list = document.getElementById('cdpList');

predictiveList.forEach(function(item){
   let option = document.createElement('option');
   option.value = item;
   list.appendChild(option);
});

let expUl = document.getElementById('cat2');
let catUl = document.getElementById('cat3');
let curCdp = {
  role: document.getElementById('cat1-btn').value,
  exp: document.getElementById('cat2-btn').value,
  cat: document.getElementById('cat3-btn').value,
  set() {
    this.role=document.getElementById('cat1-btn').value;
    this.exp=document.getElementById('cat2-btn').value;
    this.cat=document.getElementById('cat3-btn').value;
  }
};

let findFins = () => {
  let cdpToSearch = Object.create(curCdp);
  cdpToSearch.set();
  console.log(cdpToSearch);
  //find fins that meet filter reqs
}

let findFinsFromSearch = () => {
  let cdpToSearch = Object.create(curCdp);
  let val = document.getElementById('searchbar').value;
  if(val){
    console.log(comCat3.includes(val));
  }
}

$("ul").on("click", "li", function() {
  let selText = $(this).text();
  $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
  $(this).parents('.btn-group').find('.dropdown-toggle').val(selText);
  filter(selText);
});



let filter = (val) => {
  if(val === "Professional") {//lvl2
    resetChildren(1);
    document.getElementById('cat2-btn').disabled = false;
    profCat2.forEach(function(item) {
      let li = document.createElement('li');
      li.textContent = item;
      li.className = 'dropdown-item px-2';
      li.value = item;
      expUl.appendChild(li);
    })
  } else if (val === "Architect") {//lvl2
    resetChildren(1);
    document.getElementById('cat2-btn').disabled = false;
    archCat2.forEach(function(item) {
      let li = document.createElement('li');
      li.textContent = item;
      li.className = 'dropdown-item px-2';
      li.value = item;
      expUl.appendChild(li);
    })
  } else if (val === "Communication") {//lvl3
    resetChildren(2);
    document.getElementById('cat3-btn').disabled = false;
    comCat3.forEach(function(item) {
      let li = document.createElement('li');
      li.textContent = item;
      li.className = 'dropdown-item px-2';
      li.value = item;
      catUl.appendChild(li);
    })
  } else if (val === "Frameworks & Models") {//lvl3
    resetChildren(2);
    document.getElementById('cat3-btn').disabled = false;
    frameCat3.forEach(function(item) {
      let li = document.createElement('li');
      li.textContent = item;
      li.className = 'dropdown-item px-2';
      li.value = item;
      catUl.appendChild(li);
    })
  }
}

let clear = (ul) => {
  if(ul){
    while(ul.firstChild) ul.removeChild(ul.firstChild);
  }
}

//disable and reset child layer if parent layer doesn't match
let resetChildren = (lvl) => {
  if (lvl == 1) {
    clear(expUl);
    clear(catUl);
    document.getElementById('cat2-btn').disabled = true;
    document.getElementById('cat2-btn').innerHTML = "Select an Expectation";
    document.getElementById('cat2-btn').value = "";
    document.getElementById('cat3-btn').disabled = true;
    document.getElementById('cat3-btn').innerHTML = "Select a Category";
    document.getElementById('cat3-btn').value = "";

    //minimum requirement to be able to fitler is met
    document.getElementById('filter-btn').disabled = false;
  } else if (lvl == 2) {
    clear(catUl);
    document.getElementById('cat3-btn').disabled = true;
    document.getElementById('cat3-btn').innerHTML = "Select a Category";
    document.getElementById('cat3-btn').value = "";
  }
}
