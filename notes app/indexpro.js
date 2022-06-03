// Adding evengt listener to button for adding notes

shownotes();

let addnotesbutton = document.getElementById("addnotesbutton");
addnotesbutton.addEventListener("click", function (e) {
  let addtexttitle=document.getElementById("addnotestextareatitle");
  let addtext = document.getElementById("addnotestextarea");
  // let notestitle=localStorage.getItem("title");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let myobj={
    title:addtexttitle.value,
    notes:addtext.value
  }
  notesobj.push(myobj);
  // notesobj.push(addtext.value);
  // localStorage.setItem("title",JSON.stringify(notesobjt));
  localStorage.setItem("notes", JSON.stringify(notesobj));
  addtext.value = "";
  addtexttitle.value=""
  shownotes();

  //   console.log(notesobj);
});

// function to show notes

function shownotes() {
  let notesa = localStorage.getItem("notes");
  if (notesa == null) {
    notesobjj = [];
  } else {
    notesobjj = JSON.parse(notesa);
  }
  let html = "";
  notesobjj.forEach(function (e, i) {
    html += `
    <div class=" notecard card mx-3 my-3" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">${e.title}</h5>
      <p class="card-text">
        ${e.notes}
      </p>
      <button id="${i}" onclick="deletenote(this.id)" class="btn btn-primary">DELETE NODE</button>
    </div>
  </div>`;
  });

  let addcreatednode = document.getElementById("creatednotes");
  if (notesobjj.length != 0) addcreatednode.innerHTML = html;
  else addcreatednode.innerHTML = `!!!!! nothing to show !!!!`;
}

// function to delete notes``

function deletenote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  shownotes();
}

let search = document.getElementById("search");
search.addEventListener("input", function () {
  let input = search.value;
  // console.log("input fired",input)
  let notecard = document.getElementsByClassName("notecard");
  Array.from(notecard).forEach(function (element) {
    let cardtxt = element.getElementsByTagName("p")[0].innerText;
    if (cardtxt.includes(input)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
