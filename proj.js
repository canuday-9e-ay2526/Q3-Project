function fareMatrix(){

    document.getElementById("fare-matrix").innerHTML=`

        <div class="container bg-secondary rounded mt-3 p-5 text-center">

            <h3 class="text-white"><span class="text-info"><b>eSakayMo</b></span> Fare Matrix</h3><br></br>

            <div class="container-fluid opacity-value-0.5">
      
                <img src=""></img>
            
                <label class="form-label" for="budget"><h4>Pick-up Location</h4></label>
                    
                <select class="form-select">
                    <option value="northAvenue">North Avenue</option>
                    <option value="quezonAvenue">Quezon Avenue</option>
                    <option value="GMA">GMA Kamuning</option>
                    <option value="araneta">Araneta Cubao</option>
                    <option value="santolan">Santolan-Annapolis</option>
                    <option value="ortigas">Ortigas</option>
                    <option value="shaw">Shaw Blvd.</option>
                    <option value="boni">Boni Avenue</option>
                    <option value="guadalupe">Guadalupe</option>
                    <option value="buendia">Buendia</option>
                    <option value="ayala">Ayala</option>
                    <option value="magallanes">Magallanes</option>
                    <option value="taftAvenue">Taft Avenue</option>
                </select>
                <br></br>

                <label class="form-label" for="budget"><h4>Drop Off Location</h4></label>
                    
                <select class="form-select">
                    <option value="northAvenue">North Avenue</option>
                    <option value="quezonAvenue">Quezon Avenue</option>
                    <option value="GMA">GMA Kamuning</option>
                    <option value="araneta">Araneta Cubao</option>
                    <option value="santolan">Santolan-Annapolis</option>
                    <option value="ortigas">Ortigas</option>
                    <option value="shaw">Shaw Blvd.</option>
                    <option value="boni">Boni Avenue</option>
                    <option value="guadalupe">Guadalupe</option>
                    <option value="buendia">Buendia</option>
                    <option value="ayala">Ayala</option>
                    <option value="magallanes">Magallanes</option>
                    <option value="taftAvenue">Taft Avenue</option>
                </select>
                <br></br>

                <button class="btn btn-info" type="button" onclick="">Regular Fare</button>
                <button class="btn btn-dark" type="button" onclick="">Discounted Fare</button>
          
            </div>

        </div>`;


}





//function for farematrix
basefare = 50; //minimum fare which also include first 2KM
perKMrate = 15; //cost per kilometer beyond 2KM
baseKM = 2; //distance included in the base fare
