
create_garden = `
<div class="row">
  <div class="col-lg-8">
    <input type="text" placeholder="garden name" class="form-control" id="usr">
  </div>
  <div class="col-lg-2">
    <button class="btn btn-outline-primary btn-block" id="view-btn">
      Create!
    </button>
  </div>
  <div class="col-lg-2">
    <button class="btn btn-outline-danger btn-block" id="create-btn">
      Reset!
    </button>
  </div>
  </div>
  <div class="create-wrapper">
    <div class="settings pt-3">
      <div class="card">
        <div class="card-header text-center">
          <h3 class="pt-2">Settings</h3>
        </div>
        <div class="card-body">
          <div class="row pt-3">
            <div class="col-sm-4 pt-1">
              <h4>Size:</h4>
            </div>
            <div class="col-sm-3">
              <input type="text" class="form-control" onChange="changeSize(this)" id="width" name="" value="10">
            </div>
            <div class="col-sm-2 pt-2">
              <h6>X</h6>
            </div>
            <div class="col-sm-3">
              <input type="text" class="form-control" onChange="changeSize(this)" id="height" name="" value="10">
            </div>
          </div>
          <div class="row pt-3">
            <div class="col-sm-4 pt-1">
              <h4>Seed:</h4>
            </div>
            <div class="col-sm-8">
              <div class="dropdown">
                <button type="button" id="dropdown" class="btn btn-block btn-primary dropdown-toggle" data-toggle="dropdown">
                  Corn
                </button>
                <div class="dropdown-menu">
                  <div class="dropdown-divider"></div>
                  <span class="dropdown-item-text">Recommended</span>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" onClick="changeColor(this)">Grass</a>
                  <div class="dropdown-divider"></div>
                  <span class="dropdown-item-text">All</span>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" onClick="changeColor(this)">Grass</a>
                  <a class="dropdown-item" onClick="changeColor(this)">Strawberry</a>
                  <a class="dropdown-item" onClick="changeColor(this)">Corn</a>
                </div>
              </div>
            </div>
          </div>
          <div class="row pt-3">
            <div class="col-sm-4 pt-1">
              <h4>Soil Type:</h4>
            </div>
            <div class="col">
              <input type="text" class="form-control" id="width" placeholder="Topsoil" value="">
            </div>
          </div>
          <div class="row pt-3">
            <div class="col-sm-4 pt-1">
              <h4>Location:</h4>
            </div>
            <div class="col">
              <input type="text" class="form-control" id="width" placeholder="Morgantown" value="">
            </div>
          </div>
        </div>
      </div>
      <div class="pt-5">
        <div class="card">
          <div class="card-header text-center">
            <h3 class="pt-2">Finish</h3>
          </div>
          <div class="card-body">
            <div class="row pb-3">
              <div class="col px-5">
                <button type="button" class="btn btn-block btn-success" name="button">
                  Checkout
                </button>
              </div>
            </div>
            <div class="row pb-3">
              <div class="col px-5">
                <button type="button" class="btn btn-block btn-secondary" name="button">
                  Save
                </button>
              </div>
            </div>
            <div class="row pb-3">
              <div class="col px-5">
                <button type="button" class="btn btn-block btn-info" name="button">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid pt-2" id="garden-grid">
      <div class="plot" id="garden-plot" onClick="fill(this)">
        <div class="content ml-5 mt-3">
        </div>
      </div>
    </div>
  </div>
</div>
`;

view_garden = `
<div class="card">
  <div class="card-header">
    My Gardens
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li id="garden1" class="list-group-item list-group-item d-flex justify-content-between align-items-center">
        Garden 1
        <div class="btn-group">
          <button type="button" class="btn btn-success" onClick="createGarden(this)">View</button>
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </li>
      <li id="garden2" class="list-group-item list-group-item d-flex justify-content-between align-items-center">
        Garden 2
        <div class="btn-group">
          <button type="button" class="btn btn-success" onClick="createGarden(this)">View</button>
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </li>
      <li id="garden3" class="list-group-item list-group-item d-flex justify-content-between align-items-center">
        Garden 3
        <div class="btn-group">
          <button type="button" class="btn btn-success" onClick="createGarden(this)">View</button>
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </li>
      <li id="garden4" class="list-group-item list-group-item d-flex justify-content-between align-items-center">
        Garden 4
        <div class="btn-group">
          <button type="button" class="btn btn-success" onClick="createGarden(this)">View</button>
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</div>
`;

garden_calendar = `
<div class="col-sm-2"></div>
<div class="col-sm-8 mx-auto">
  <div class="row">
    <div class="col">
      <div class="dropdown">
        <button type="button" id="dropdown" class="btn btn-block btn-outline-primary dropdown-toggle" data-toggle="dropdown">
          Garden 1
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" >Garden 1</a>
          <a class="dropdown-item" >Garden 2</a>
          <a class="dropdown-item" >Garden 3</a>
          <a class="dropdown-item" >Garden 4</a>
        </div>
      </div>
    </div>
    <div class="col">
      <button type="button" class="btn btn-block btn-outline-secondary" name="button">export</button>
    </div>
  </div>
  <div class="row pt-5">
    <div class="col">
      <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=d3JlbnBhcmtlckBnbWFpbC5jb20&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%237986CB&amp;showTitle=0&amp;showPrint=0" class="ml-5" style="border:solid 1px #777;" width="1000" height="700" frameborder="0" scrolling="no"></iframe>
    </div>
  </div>
</div>
<div class="col-sm-2"></div>
`;

let initSize = 100

function multiplyPlots(size) {
  plot = document.getElementById('garden-plot');
  [...Array(size-1)].forEach(_ => plot.parentNode.insertBefore(plot.cloneNode(true), plot));
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("body").innerHTML = create_garden;
  multiplyPlots(initSize);
});

document.getElementById("create-btn").addEventListener("click", function(){
  resetValues();
  document.getElementById("body").innerHTML = create_garden;
  multiplyPlots(initSize);
});

document.getElementById("view-btn").addEventListener("click", function(){
  document.getElementById("body").innerHTML = view_garden;
});

document.getElementById("calendar-btn").addEventListener("click", function(){
  document.getElementById("body").innerHTML = garden_calendar;
});

let currentColor = 'yellow';

function fill(e) {
  if(e.style.backgroundColor == currentColor) {
    e.style.backgroundColor = '';
  } else if(e.style.backgroundColor == '') {
    e.style.backgroundColor = currentColor;
  }
}

function changeColor(e) {
  let button = document.getElementById("dropdown");
  if(e.innerHTML==="Grass") {
    currentColor = 'green';
    button.innerHTML = "Grass";

  }
  if(e.innerHTML==="Corn") {
    currentColor = 'yellow';
    button.innerHTML = "Corn";

  }
  if(e.innerHTML==="Strawberry") {
    currentColor = 'red';
    button.innerHTML = "Strawberry";

  }
}

function changeSize(e) {
  let width = document.getElementById('width').value;
  let height =document.getElementById('height').value;

  if(width>40) {
    alert("Max Width is 40!")
  }

  else if(height>25) {
    alert("Max Height is 25!")
  }

  else {
    document.getElementById("body").innerHTML = create_garden;
    let style = `.grid{
      grid-row: 1;
      grid-column: 1;
      display: grid;
      width: 100%;
      height: 80vh;
      grid-template-rows: repeat(${height}, 1fr);
      grid-template-columns: repeat(${width}, 1fr);
      grid-gap: 1em;

    }`
    document.getElementById('grid-style').innerHTML = style;
    multiplyPlots(width*height);
    document.getElementById('height').value = height;
    document.getElementById('width').value = width;
  }
}

function resetValues() {
  let style = `.grid{
    grid-row: 1;
    grid-column: 1;
    display: grid;
    width: 100%;
    height: 80vh;
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns: repeat(10, 1fr);
    grid-gap: 1em;

  }`;
  document.getElementById('grid-style').innerHTML = style;
  let initSize = 100;
}

function createGarden(e) {
  document.getElementById("body").innerHTML = create_garden;
  multiplyPlots(initSize);
}


