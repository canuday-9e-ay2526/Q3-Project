function fareMatrix(){

    document.getElementById("fare-matrix").innerHTML=`

        <div class="container bg-dark bg-opacity-75 rounded mt-3 p-5 text-center">

            <h3 class="text-white"><span class="text-info"><b>eSakayMo</b></span> Fare Matrix</h3><br></br>

            <div class="row">

                <div class="col-lg-4 p-3">
                    <h4 class="text-white">MRT-3 Line</h4><br></br>
                    <img src="stations.webp" style="width: 250px"></img>
                </div>
      
                <div class="col-lg-4 p-3">
                    
                    <label class="form-label text-white" for="budget"><h4>Pick-up Location</h4></label>
                    
                    <select class="form-select" id="pick_up">
                        <option value="1">North Avenue</option>
                        <option value="2">Quezon Avenue</option>
                        <option value="3">GMA Kamuning</option>
                        <option value="4">Araneta Cubao</option>
                        <option value="5">Santolan-Annapolis</option>
                        <option value="6">Ortigas</option>
                        <option value="7">Shaw Blvd.</option>
                        <option value="8">Boni Avenue</option>
                        <option value="9">Guadalupe</option>
                        <option value="10">Buendia</option>
                        <option value="11">Ayala</option>
                        <option value="12">Magallanes</option>
                        <option value="13">Taft Avenue</option>
                    </select>
                    <br></br>

                    <label class="form-label text-white" for="budget"><h4>Drop Off Location</h4></label><br>
                    
                    <select class="form-select" id="drop_off">
                        <option value="1">North Avenue</option>
                        <option value="2">Quezon Avenue</option>
                        <option value="3">GMA Kamuning</option>
                        <option value="4">Araneta Cubao</option>
                        <option value="5">Santolan-Annapolis</option>
                        <option value="6">Ortigas</option>
                        <option value="7">Shaw Blvd.</option>
                        <option value="8">Boni Avenue</option>
                        <option value="9">Guadalupe</option>
                        <option value="10">Buendia</option>
                        <option value="11">Ayala</option>
                        <option value="12">Magallanes</option>
                        <option value="13">Taft Avenue</option>
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

    document.getElementById("regDisplay").value=Math.abs(pickUp_Val*basefare-dropOff_Val*basefare).toFixed(2);


}

function discountedFare(){
     const basefare = 50;
    const perKMrate = 15;
    const baseKM = 2;
    let pickUp_location = document.getElementById("pick_up");
    let pickUp_Val = pickUp_location.value;
    let dropOff_location = document.getElementById("drop_off");
    let dropOff_Val = dropOff_location.value;

    document.getElementById("discDisplay").value=Math.abs(0.8*(pickUp_Val*basefare-dropOff_Val*basefare)).toFixed(2);
}


//function for farematrix
basefare = 50; //minimum fare which also include first 2KM
perKMrate = 15; //cost per kilometer beyond 2KM
baseKM = 2; //distance included in the base fare

