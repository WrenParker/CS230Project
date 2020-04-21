
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
  <div class="grid pt-2" id="garden-grid">
    <div class="plot" id="garden-plot">
      <div class="content ml-5 mt-3">
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" value="">Active Plot
          </label>
        </div>
        <div class="btn-group">
          <button type="button" class="btn btn-outline-info dropdown-toggle" data-toggle="dropdown">
            Seed Type
          </button>
        </div>
      </div>
    </div>
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
  [...Array(35)].forEach(_ => plot.parentNode.insertBefore(plot.cloneNode(true), plot));
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("body").innerHTML = create_garden;
  multiplyPlots();
});

document.getElementById("create-btn").addEventListener("click", function(){
  document.getElementById("body").innerHTML = create_garden;
  multiplyPlots();
});

document.getElementById("view-btn").addEventListener("click", function(){
  document.getElementById("body").innerHTML = "Hello World";
});

document.getElementById("calendar-btn").addEventListener("click", function(){
  document.getElementById("body").innerHTML = garden_calendar;
});
