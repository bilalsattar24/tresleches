let profCat2 = ['Communication', 'Professionalism', 'Excellence'];
let archCat2 = ['Problem Solving', 'Frameworks & Models', 'Thought Leadership'];
let comCat3 = ['Writing', 'Speaking', 'Meetings', 'Listening', 'Expression', 'Effective use of time'];
let frameCat3 = ['Using Frameworks', 'Systems Thinking', 'Feedback Loops', 'Design Principles'];

let expUl = document.getElementById('edit2');
let catUl = document.getElementById('edit3');
let curCdp = {
  role: document.getElementById('edit1-btn').value,
  exp: document.getElementById('edit2-btn').value,
  cat: document.getElementById('edit3-btn').value,
  set() {
    this.role=document.getElementById('edit1-btn').value;
    this.exp=document.getElementById('edit2-btn').value;
    this.cat=document.getElementById('edit3-btn').value;
  }
};

$("ul").on("click", "li", function() {
  let selText = $(this).text();
  $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
  $(this).parents('.btn-group').find('.dropdown-toggle').val(selText);
  filter(selText);
});

let filter = (val) => {
  if(val === "Professional") {//lvl2
    resetChildren(1);
    document.getElementById('edit2-btn').disabled = false;
    profCat2.forEach(function(item) {
      let li = document.createElement('li');
      li.textContent = item;
      li.className = 'dropdown-item px-2';
      li.value = item;
      expUl.appendChild(li);
    })
  } else if (val === "Architect") {//lvl2
    resetChildren(1);
    document.getElementById('edit2-btn').disabled = false;
    archCat2.forEach(function(item) {
      let li = document.createElement('li');
      li.textContent = item;
      li.className = 'dropdown-item px-2';
      li.value = item;
      expUl.appendChild(li);
    })
  } else if (val === "Communication") {//lvl3
    resetChildren(2);
    document.getElementById('edit3-btn').disabled = false;
    comCat3.forEach(function(item) {
      let li = document.createElement('li');
      li.textContent = item;
      li.className = 'dropdown-item px-2';
      li.value = item;
      catUl.appendChild(li);
    })
  } else if (val === "Frameworks & Models") {//lvl3
    resetChildren(2);
    document.getElementById('edit3-btn').disabled = false;
    frameCat3.forEach(function(item) {
      let li = document.createElement('li');
      li.textContent = item;
      li.className = 'dropdown-item px-2';
      li.value = item;
      catUl.appendChild(li);
    })
  } else if(comCat3.includes(val) || frameCat3.includes(val)) {

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
    document.getElementById('edit2-btn').disabled = true;
    document.getElementById('edit2-btn').innerHTML = "Select an Expectation";
    document.getElementById('edit2-btn').value = "";
    document.getElementById('edit3-btn').disabled = true;
    document.getElementById('edit3-btn').innerHTML = "Select a Category";
    document.getElementById('edit3-btn').value = "";
  } else if (lvl == 2) {
    clear(catUl);
    document.getElementById('edit3-btn').disabled = true;
    document.getElementById('edit3-btn').innerHTML = "Select a Category";
    document.getElementById('edit3-btn').value = "";
  }
}

let save = () => {
  console.log(document.getElementById('comment').value)
  if(document.getElementById('edit3-btn').value == "" || document.getElementById('comment').value == "") {
    alert("Please input all fields for your CDP before saving!")
  } else {
    //save CDPs
  }
}
