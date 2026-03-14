function fareMatrix(){

    document.getElementById("fare-matrix").innerHTML=`

        <div class="container bg-dark bg-opacity-75 rounded mt-3 p-5 text-center">

            <h3 class="text-white"><span class="text-info"><b>eSakayMo</b></span> Fare Matrix</h3><br></br>

            <div class="row">

                <div class="col-lg-4 p-3">
                    <h4 class="text-white">MRT-3 Line</h4><br></br>
                    <img src="stations.webp" style="width: 255px"></img>
                </div>
      
                <div class="col-lg-4 p-3">
                    
                    <label class="form-label text-white" for="budget"><h4>Pick-up Location</h4></label>
                    
                    <select class="form-select" id="pick_up">
                        <option value="0">North Avenue</option>
                        <option value="1.2">Quezon Avenue</option>
                        <option value="2.2">GMA Kamuning</option>
                        <option value="4.1">Araneta Cubao</option>
                        <option value="5.6">Santolan-Annapolis</option>
                        <option value="7.9">Ortigas</option>
                        <option value="8.7">Shaw Blvd.</option>
                        <option value="9.7">Boni Avenue</option>
                        <option value="10.5">Guadalupe</option>
                        <option value="12.5">Buendia</option>
                        <option value="13.45">Ayala</option>
                        <option value="14.65">Magallanes</option>
                        <option value="16.7">Taft Avenue</option>
                    </select>
                    <br></br>

                    <label class="form-label text-white" for="budget"><h4>Drop Off Location</h4></label><br>
                    
                    <select class="form-select" id="drop_off">
                        <option value="0">North Avenue</option>
                        <option value="1.2">Quezon Avenue</option>
                        <option value="2.2">GMA Kamuning</option>
                        <option value="4.1">Araneta Cubao</option>
                        <option value="5.6">Santolan-Annapolis</option>
                        <option value="7.9">Ortigas</option>
                        <option value="8.7">Shaw Blvd.</option>
                        <option value="9.7">Boni Avenue</option>
                        <option value="10.5">Guadalupe</option>
                        <option value="12.5">Buendia</option>
                        <option value="13.45">Ayala</option>
                        <option value="14.65">Magallanes</option>
                        <option value="16.7">Taft Avenue</option>
                    </select>
                    <br></br>

                    <button class="btn btn-info" type="button" onclick="regularFare()">Regular Fare</button><br></br>
                    <button class="btn btn-dark" type="button" onclick="discountedFare()">Discounted Fare</button><br></br>
                
                </div>
                
                <div class="col-lg-4 p-3">
                    
                    <br>

                    <h4 class="text-white">Regular Fare</h4>
                    <input type="number" id="regDisplay" class="form-control" readonly><br>

                    <h4 class="text-white"> Discounted Fare </h4>
                    <input type="number" id="discDisplay" class="form-control" readonly><br>


                </div>
          
            </div>

        </div>`;


}

function regularFare(){

    const basefare = 50;
    const perKMrate = 15;
    const baseKM = 2;
    let pickUp_location = document.getElementById("pick_up");
    let pickUp_Val = pickUp_location.value;
    let dropOff_location = document.getElementById("drop_off");
    let dropOff_Val = dropOff_location.value;

    let x = Math.abs(pickUp_Val-dropOff_Val); // distance per km

    let final_RFare;
    if (x==0) {
        final_RFare = 0 // if distance = 0 KM
    } else if (x>baseKM){
        final_RFare = Math.abs(basefare+(x-baseKM)*perKMrate).toFixed(2); // if distance > 2 KM
    } else if (0<x<=baseKM){
        final_RFare = 50 // if distance < 2 KM
    }

   
    document.getElementById("regDisplay").value=(1*(final_RFare)).toFixed(2);


}

function discountedFare(){
    const basefare = 50;
    const perKMrate = 15;
    const baseKM = 2;
    let pickUp_location = document.getElementById("pick_up");
    let pickUp_Val = pickUp_location.value;
    let dropOff_location = document.getElementById("drop_off");
    let dropOff_Val = dropOff_location.value;

    let x = Math.abs(pickUp_Val-dropOff_Val); // distance per km

    let final_RFare;
    if (x==0) {
        final_RFare = 0
    } else if (x>baseKM){
        final_RFare = Math.abs(basefare+(x-baseKM)*perKMrate).toFixed(2);
    } else if (0<x<=baseKM){
        final_RFare = 50
    }

   
    document.getElementById("discDisplay").value=(0.8*(final_RFare)).toFixed(2);

}

//function for farematrix
basefare = 50; //minimum fare which also include first 2KM
perKMrate = 15; //cost per kilometer beyond 2KM
baseKM = 2; //distance included in the base fare

// north > quezon: 1.2
// quezon > gma: 1.0
// gma > cubao: 1.9
// cubao > santolan: 1.5
// santolan > ortigas: 2.3
// ortigas > shaw blvd: 0.8
// shaw > boni: 1.0
// boni > guadalupe: 0.8
// guadalupe > buendia: 2.0
// buendia > ayala: 0.95
// ayala > magallanes: 1.2
// magallanes > taft: 2.05

