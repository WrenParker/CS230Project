
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
              <input type="text" class="form-control" id="width" name="" value="10">
            </div>
            <div class="col-sm-2 pt-2">
              <h6>X</h6>
            </div>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="height" name="" value="10">
            </div>
          </div>
          <div class="row pt-3">
            <div class="col-sm-4 pt-1">
              <h4>Seed:</h4>
            </div>
            <div class="col-sm-8">
              <div class="dropdown">
                <button type="button" id="dropdown" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
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
      <li id="existing-garden" class="list-group-item list-group-item d-flex justify-content-between align-items-center">
        Garden 1
        <div class="btn-group">
          <button type="button" class="btn btn-success">View</button>
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </li>
      <li id="existing-garden" class="list-group-item list-group-item d-flex justify-content-between align-items-center">
        Garden 2
        <div class="btn-group">
          <button type="button" class="btn btn-success">View</button>
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </li>
      <li id="existing-garden" class="list-group-item list-group-item d-flex justify-content-between align-items-center">
        Garden 3
        <div class="btn-group">
          <button type="button" class="btn btn-success">View</button>
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </li>
      <li id="existing-garden" class="list-group-item list-group-item d-flex justify-content-between align-items-center">
        Garden 4
        <div class="btn-group">
          <button type="button" class="btn btn-success">View</button>
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</div>
`;

garden_calendar = `
<div class="row">
  <div class="col-sm-2">

  </div>
  <div class="col-sm-5">
    <div class="btn-group">
      <button type="button" class="btn btn-outline-success dropdown-toggle" data-toggle="dropdown">
        Select Garden
      </button>
    </div>
  </div>
  <div class="col-sm-5">
    <button type="button" class="btn btn-outline-secondary">
      Export
    </button>
  </div>
</div>
<div class="row mt-2">
  <div class="col-sm-1"></div>
  <div class="col-sm-10">
    <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=d3JlbnBhcmtlckBnbWFpbC5jb20&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%237986CB&amp;showTitle=0&amp;showPrint=0" class="ml-5" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>
  </div>
  <div class="col-sm-1"></div>
</div>
`;

function multiplyPlots() {
  plot = document.getElementById('garden-plot');
  [...Array(99)].forEach(_ => plot.parentNode.insertBefore(plot.cloneNode(true), plot));
}

document.addEventListener("DOMContentLoaded", function() {
document.getElementById("body").innerHTML = create_garden;
  multiplyPlots();
});

document.getElementById("create-btn").addEventListener("click", function(){
  document.getElementById("body").innerHTML = create_garden;
  multiplyPlots();
});

let currentColor = 'blue';

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
    currentColor = 'blue';
    button.innerHTML = "Corn";

  }
  if(e.innerHTML==="Strawberry") {
    currentColor = 'red';
    button.innerHTML = "Strawberry";

  }
}

document.getElementById("view-btn").addEventListener("click", function(){
  document.getElementById("body").innerHTML = view_garden;
});

document.getElementById("calendar-btn").addEventListener("click", function(){
  document.getElementById("body").innerHTML = garden_calendar;
});
