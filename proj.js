//function for farematrix
 basefare = 50; //minimum fare which also include first 2KM
 perKMrate = 15; //cost per kilometer beyond 2KM
 baseKM = 2; //distance included in the base fare
function Farematrix(){
    document.getElementById("farematrix").innerHTML=
    `<div class="container bg-primary rounded mt-5" >
    <h1>eSakayMo Fare Matrix</h1>  
    <div class="container bg-info rounded mt-5" >
      <img src="">
      <label class="form-label" for="budget"><h4>Pick-up Location</h4></label>
      <input type="Dropdown" placeholder="North Ave" class="form-control" id="budget">
       <label class="form-label" for="budget"><h4>Drop Off Location</h4></label>
      <input type="text" placeholder="North Ave" class="form-control" id="budget">
       <img src="">  
     </div>`;
}