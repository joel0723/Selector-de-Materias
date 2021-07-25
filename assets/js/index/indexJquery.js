$(document).ready(function(){

//variables globales

var valueNombre = "";
var valueProvincia = "";
var valueCiudad = "";
var valueSector = "";
var valueCalle = "";
var valueCarrera ="";
var valueradio1 = "";
var valueradio2 = "";
var valueradio3 = "";
var valueradio4 = "";
var valueradio5 = "";
var valueMateria1 = "";
var valueMateria2 = "";
var valueMateria3 = "";
var valueMateria4 = "";
var valueMateria5 = "";

//eventos

$("#content-conteiner").on("click", "#btn-clear", function(){
    limpiar();
});

$("#content-conteiner").on("click", "#btn-ready", function(){
    createContactElement();
});

$("#content-conteiner").on("click", "#btn-back", function(){
    GenerateFirstHtml();
});

$("#content-conteiner").on("click", "#btn-ava", function(){
    valueradio1 = $("#radio1 input[type='radio']:checked").val();
    valueradio2 = $("#radio2 input[type='radio']:checked").val();
    valueradio3 = $("#radio3 input[type='radio']:checked").val();
    valueradio4 = $("#radio4 input[type='radio']:checked").val();
    valueradio5 = $("#radio5 input[type='radio']:checked").val();

        GenerateConfirmation();  
});

$("#content-conteiner").on("click", "#btn-vuelta", function(){
    revisar();
});

$("#contact-container").on("click","#btn-borrar", function(){
       
    let mainContainer = $(this).parent().parent().parent();
     $(mainContainer).remove();
 });

 $("#content-conteiner").on("click","#btn-end", function(){
       
    EndProcess();
 });

//funciones

function EndProcess(){
    if(confirm("Estas seguro de que quieres agregar este contacto?")){

        GenerateHtmlContact();
        toastr.success("Se ha creado con exito", 'Notificacion', {TimeOut:2500} );
        GenerateFirstHtml()
        limpiar();
    }

}

function limpiar(){
    $("#nombre").val("").focus().removeClass("input-error");
    $("#provincia").val("").removeClass("input-error");
    $("#ciudad").val("").removeClass("input-error");
    $("#sector").val("").removeClass("input-error");
    $("#calle").val("").removeClass("input-error");
    $("#tipo-carrera").val("").removeClass("input-error");
}

function createContactElement(){

     valueNombre = $("#nombre").val();
     valueProvincia = $("#provincia").val();
     valueCiudad = $("#ciudad").val();
     valueSector = $("#sector").val();
     valueCalle = $("#calle").val();
     valueCarrera = $("#tipo-carrera").val();
     
     
    

       let IsValid = validar();

       if(IsValid){
       revisar();
         
       }else{
           toastr.error("complete los campos", 'Ooops ha ocurrido un error', {TimeOut: 2500});
       }

         
   }


   function revisar(){
       if(valueCarrera == "software"){

           GenerateSoftware();
           valueMateria1= "Fundamentos de Programacion";
           valueMateria2= "Programacion 1";
           valueMateria3= "Programacion 2";
           valueMateria4= "Fundamentos de Bases de Datos";
           valueMateria5= "Fundamentos IA";
           
       }else if(valueCarrera == "redes"){
           GenerateRedes();
           valueMateria1= "Fundamentos de Redes";
           valueMateria2= "Sistemas Operativos";
           valueMateria3= "Sistemas Operativos 2";
           valueMateria4= "Fundamentos de Bases de Datos";
           valueMateria5= "Tecnologia Wan";
           
       }else{
           generateMultimedia();

           valueMateria1= "Introduccion a la Multimedia";
           valueMateria2= "Comunicacion Visual";
           valueMateria3= "Marketing";
           valueMateria4= "Audio Digital";
           valueMateria5= "3D Modelado y Renderizado";
           
       }
   }


function validar(){

    let isValid = true;

    if(valueNombre == "" || valueNombre == null || valueNombre == undefined){
        isValid = false;
        $("#nombre").addClass("input-error");
    }else{
        $("#nombre").removeClass("input-error");
    }

    if(valueProvincia == "" || valueProvincia == null || valueProvincia == undefined){
        isValid = false;
        $("#provincia").addClass("input-error");
    }else{
        $("#provincia").removeClass("input-error");
    }

    if(valueCiudad == "" || valueCiudad == null || valueCiudad == undefined){
        isValid = false;
        $("#ciudad").addClass("input-error");
    }else{
        $("#ciudad").removeClass("input-error");
    }

    if(valueSector == "" || valueSector == null || valueSector == undefined){
        isValid = false;
        $("#sector").addClass("input-error");
    }else{
        $("#sector").removeClass("input-error");
    }

    if(valueCalle == "" || valueCalle == null || valueCalle == undefined){
        isValid = false;
        $("#calle").addClass("input-error");
    }else{
        $("#calle").removeClass("input-error");
    }

    if(valueCarrera == "" || valueCarrera == null || valueCarrera == undefined){
        isValid = false;
        $("#tipo-carrera").addClass("input-error");
    }else{
        $("#tipo-carrera").removeClass("input-error");
    }

    return isValid;



}


function GenerateConfirmation(){
    let conf = `

    <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item" id="btn-back"><a href="#">Datos Personales</a></li>
        <li class="breadcrumb-item" id="btn-vuelta"><a href="#">Seleccion De Materias</a></li>
        <li class="breadcrumb-item active" aria-current="page">Confirmacion</li>
      </ol>
    </nav>



    <div class="card">
    <div class="card-header text-white bg-info text-center"><h1 class="text-center">Confirmacion de Seleccion</div></h1>
    <div class="card-body">

      <ul class="list-group">
        <li class="list-group-item">Nombre:  {{name}}</li>
        <li class="list-group-item">Provincia:  {{pro}}</li>
        <li class="list-group-item">Cuidad:  {{city}}</li>
        <li class="list-group-item">Sector:  {{sec}}</li>
        <li class="list-group-item">Calle:  {{adress}}</li>
        <li class="list-group-item">Carrera:  {{carrer}}</li>
      </ul>

      <table class="table table-dark">
        <tr>
          <td><strong>Materias</strong></td>
          <td><strong>Horas</strong></td>
          <td><strong>Horario</strong></td>
        </tr>
        
        <tr>
          <td>{{materia1}}</td>
          <td>60</td>
          <td>{{mat1}}</td>
        </tr>
        
        <tr>
          <td>{{materia2}}</td>
          <td>60</td>
          <td>{{mat2}}</td>
        </tr>
        
        <tr>
          <td>{{materia3}}</td>
          <td>60</td>
          <td>{{mat3}}</td>
        </tr>

        <tr>
          <td>{{materia4}}</td>
          <td>60</td>
          <td>{{mat4}}</td>
        </tr>

        <tr>
          <td>{{materia5}}</td>
          <td>60</td>
          <td>{{mat5}}</td>
        </tr>
        </table>
        
        <div class="margen-top-3">
      <button id="btn-end" class="btn btn-success text-white float-end margen-izq-2 margen-arriba-1" >Avanzar</button>
  </div>
      


        
      

    </div>
</div>

</div>
    `;
    conf = conf.replace("{{name}}", valueNombre);
    conf = conf.replace("{{pro}}", valueProvincia);
    conf = conf.replace("{{city}}", valueCiudad);
    conf = conf.replace("{{sec}}", valueSector);
    conf = conf.replace("{{adress}}", valueCalle);
    conf = conf.replace("{{carrer}}", valueCarrera);

    conf = conf.replace("{{mat1}}", valueradio1);
    conf = conf.replace("{{mat2}}", valueradio2);
    conf = conf.replace("{{mat3}}", valueradio3);
    conf = conf.replace("{{mat4}}", valueradio4);
    conf = conf.replace("{{mat5}}", valueradio5);

    conf = conf.replace("{{materia1}}", valueMateria1);
    conf = conf.replace("{{materia2}}", valueMateria2);
    conf = conf.replace("{{materia3}}", valueMateria3);
    conf = conf.replace("{{materia4}}", valueMateria4);
    conf = conf.replace("{{materia5}}", valueMateria5);
    
    $("#content-conteiner").html(conf);



}

    
    
    

function GenerateSoftware(){
    
    let soft = `


    <nav aria-label="breadcrumb">
         <ol class="breadcrumb">
             <li class="breadcrumb-item" id="btn-back"><a href="#">Datos Personales</a></li>
             <li class="breadcrumb-item active" aria-current="page">Seleccion De Materias</li>
        </ol>
    </nav>


    <div class="card">
            <div class="card-header text-white bg-secondary text-center"><h1 class="text-center">Materias</div></h1>
            <div class="card-body">
            

            <div class="card-title"><h3 class="text-center">Desarrollo de Software</h3></div>
            
              <div  id = "radio1" class="hola">
                <label id = "s1" for="Fundamentos" class="form-label labl">Fundamentos de Programacion </label><br>
                
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="RadioFundamentos" id="fun-1"
                        value="14:00 - 18:00">
                    <label class="form-check-label" for="fun-1">14:00 - 18:00</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="RadioFundamentos" id="fun-2"
                        value="18:00 - 21:59">
                    <label class="form-check-label" for="fun-2">18:00 - 21:59</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="RadioFundamentos" id="fun-3"
                        value="18:00 - 19:00">
                    <label class="form-check-label" for="fun-3">18:00 - 19:00</label>
                </div>
            </div>
            

            
            <div id = "radio2">
              <label for="programacion1" class="form-label">programacion 1 </label><br>
              
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="Radioprogramacion1" id="pro-1"
                      value="14:00 - 18:00">
                  <label class="form-check-label" for="pro-1">14:00 - 18:00</label>
              </div>
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="Radioprogramacion1" id="pro-2"
                      value="18:00 - 21:59">
                  <label class="form-check-label" for="pro-2">18:00 - 21:59</label>
              </div>
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="Radioprogramacion1" id="pro-3"
                      value= "18:00 - 19:00">
                  <label class="form-check-label" for="pro-3">18:00 - 19:00</label>
              </div>
          </div>
          

          
          <div id = "radio3">
            <label for="programacion2" class="form-label">Programacion 2</label><br>
            
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="Radioprogramacion2" id="pro2-1"
                    value="14:00 - 18:00">
                <label class="form-check-label" for="pro2-1">14:00 - 18:00</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="Radioprogramacion2" id="pro2-2"
                    value="18:00 - 21:59">
                <label class="form-check-label" for="pro2-2">18:00 - 21:59</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="Radioprogramacion2" id="pro2-3"
                    value="18:00 - 19:00">
                <label class="form-check-label" for="pro2-3">18:00 - 19:00</label>
            </div>
        </div>
    

        
        <div id = "radio4">
          <label for="FundamentosDB" class="form-label">Fundamentos de bases de datos</label><br>
          
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="RadioFundamentosDB" id="fundb-1"
                  value="14:00 - 18:00">
              <label class="form-check-label" for="fundb-1">14:00 - 18:00</label>
          </div>
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="RadioFundamentosDB" id="fundb-2"
                  value="18:00 - 21:59">
              <label class="form-check-label" for="fundb-2">18:00 - 21:59</label>
          </div>
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="RadioFundamentosDB" id="fundb-3"
                  value="18:00 - 19:00">
              <label class="form-check-label" for="fundb-3">18:00 - 19:00</label>
          </div>
      </div>
      

      
      <div id = "radio5">
        <label for="FundamentosIA" class="form-label">Fundamentos de IA </label><br>
        
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="RadioFundamentosIA" id="funia-1"
                value="14:00 - 18:00">
            <label class="form-check-label" for="funia-1">14:00 - 18:00</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="RadioFundamentosIA" id="funia-2"
                value="18:00 - 21:59">
            <label class="form-check-label" for="funia-2">18:00 - 21:59</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="RadioFundamentosIA" id="funia-3"
                value="18:00 - 19:00">
            <label class="form-check-label" for="funia-3">18:00 - 19:00</label>
        </div>
    </div>
    
    <div class="margen-top-3">
    <button id="btn-ava" class="btn btn-success text-white float-end margen-izq-2 margen-arriba-1" >Avanzar</button>
  </div>
                             

            </div>
        </div>

    </div>
    
    `;
    
    
    $("#content-conteiner").html(soft);
    
    

}

function GenerateRedes(){
    let redes = `

    <nav aria-label="breadcrumb">
     <ol class="breadcrumb">
        <li class="breadcrumb-item" id="btn-back"><a href="#">Datos Personales</a></li>
        <li class="breadcrumb-item active" aria-current="page">Seleccion De Materias</li>
     </ol>
    </nav>

    <div class="card">
            <div class="card-header text-white bg-success text-center"><h1 class="text-center">Materias</div></h1>
            <div class="card-body">

            <div class="card-title"><h3 class="text-center">Redes de la Informacion</h3></div>

            <div id = "radio1">
              
                <label for="Fundamentos" class="form-label">Fundamentos de redes </label><br>
                
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="RadioFundamentos" id="fun-1"
                        value="14:00 - 18:00">
                    <label class="form-check-label" for="fun-1">14:00 - 18:00</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="RadioFundamentos" id="fun-2"
                        value="18:00 - 21:59">
                    <label class="form-check-label" for="fun-2">18:00 - 21:59</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="RadioFundamentos" id="fun-3"
                        value="18:00 - 19:00">
                    <label class="form-check-label" for="fun-3">18:00 - 19:00</label>
                </div>
            
            </div>

            <div id = "radio2">
            
              <label for="SistemasO-1" class="form-label">Sistemas Operativos</label><br>
              
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="RadioSistemasO-1" id="so-1"
                      value="14:00 - 18:00">
                  <label class="form-check-label" for="so-1">14:00 - 18:00</label>
              </div>
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="RadioSistemasO-1" id="so-2"
                      value="18:00 - 21:59">
                  <label class="form-check-label" for="so-2">18:00 - 21:59</label>
              </div>
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="RadioSistemasO-1" id="so-3"
                      value="18:00 - 19:00">
                  <label class="form-check-label" for="so-3">18:00 - 19:00</label>
              </div>
          </div>
          


          <div id = "radio3">
          
            <label for="SistemasO-2" class="form-label">Sistemas Operativos 2</label><br>
            
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="Radioprogramacion2" id="so2-1"
                    value="14:00 - 18:00">
                <label class="form-check-label" for="so2-1">14:00 - 18:00</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="Radioprogramacion2" id="so2-2"
                    value="18:00 - 21:59">
                <label class="form-check-label" for="so2-2">18:00 - 21:59</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="Radioprogramacion2" id="so2-3"
                    value="18:00 - 19:00">
                <label class="form-check-label" for="so2-3">18:00 - 19:00</label>
            </div>
        </div>
        


        <div id = "radio4">
        
          <label for="FundamentosDB" class="form-label">Fundamentos de bases de datos</label><br>
          
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="RadioFundamentosDB" id="fundb-1"
                  value="14:00 - 18:00">
              <label class="form-check-label" for="fundb-1">14:00 - 18:00</label>
          </div>
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="RadioFundamentosDB" id="fundb-2"
                  value="18:00 - 21:59">
              <label class="form-check-label" for="fundb-2">18:00 - 21:59</label>
          </div>
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="RadioFundamentosDB" id="fundb-3"
                  value="18:00 - 19:00">
              <label class="form-check-label" for="fundb-3">18:00 - 19:00</label>
          </div>
      </div>
      

      <div id = "radio5">
      
        <label for="wan" class="form-label">Tecnologias WAN </label><br>
        
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="RadioFundamentosIA" id="wan-1"
                value="14:00 - 18:00">
            <label class="form-check-label" for="wan-1">14:00 - 18:00</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="RadioFundamentosIA" id="wan-2"
                value="18:00 - 21:59">
            <label class="form-check-label" for="wan-2">18:00 - 21:59</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="RadioFundamentosIA" id="wan-3"
                value="18:00 - 19:00">
            <label class="form-check-label" for="wan-3">18:00 - 19:00</label>
        </div>
    </div>
    

    <div class="margen-top-3">
      <button  id="btn-ava" class="btn btn-dark text-white float-end margen-izq-2 margen-arriba-1" >Avanzar</button>
  </div>            

            </div>
        </div>

    </div>
    `;

    $("#content-conteiner").html(redes);


}

function generateMultimedia(){
    let mult = `

    <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item" id="btn-back"><a href="#">Datos Personales</a></li>
        <li class="breadcrumb-item active" aria-current="page">Seleccion De Materias</li>
   </ol>
</nav>

    <div class="card">
    <div class="card-header text-white bg-warning text-center"><h1 class="text-center">Materias</div></h1>
    <div class="card-body">

    <div class="card-title"><h3 class="text-center">Multimedia</h3></div>

    <div id = "radio1">
      
        <label for="IntroduccionM" class="form-label">Introduccion a la Multimedia </label><br>
        
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="RadioIntroduccionM" id="mul-1"
                value="14:00 - 18:00">
            <label class="form-check-label" for="mul-1">14:00 - 18:00</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="RadioIntroduccionM" id="mul-2"
                value="18:00 - 21:59">
            <label class="form-check-label" for="mul-2">18:00 - 21:59</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="RadioIntroduccionM" id="mul-3"
                value="18:00 - 19:00">
            <label class="form-check-label" for="mul-3">18:00 - 19:00</label>
        </div>
    </div>
    


    <div id = "radio2">
    
      <label for="Comunicacion" class="form-label">Comunicacion Visual</label><br>
      
      <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="RadioComunicacion" id="com-1"
              value="14:00 - 18:00">
          <label class="form-check-label" for="com-1">14:00 - 18:00</label>
      </div>
      <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="RadioComunicacion" id="com-2"
              value="18:00 - 21:59">
          <label class="form-check-label" for="com-2">18:00 - 21:59</label>
      </div>
      <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="RadioComunicacion" id="com-3"
              value="18:00 - 19:00">
          <label class="form-check-label" for="com-3">18:00 - 19:00</label>
      </div>
  </div>
  


  <div id = "radio3">
  
    <label for="Marketing" class="form-label">Marketing</label><br>
    
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="RadioMarketing" id="mark-1"
            value="14:00 - 18:00">
        <label class="form-check-label" for="mark-1">14:00 - 18:00</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="RadioMarketing" id="mark-2"
            value="18:00 - 21:59">
        <label class="form-check-label" for="mark-2">18:00 - 21:59</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="RadioMarketing" id="mark-3"
            value="18:00 - 19:00">
        <label class="form-check-label" for="mark-3">18:00 - 19:00</label>
    </div>
</div>


<div id = "radio4">

  <label for="Audio" class="form-label">Audio Digital</label><br>
  
  <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="RadioAudio" id="audioD-1"
          value="14:00 - 18:00">
      <label class="form-check-label" for="audioD-1">14:00 - 18:00</label>
  </div>
  <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="RadioAudio" id="audioD-2"
          value="18:00 - 21:59">
      <label class="form-check-label" for="audioD-2">18:00 - 21:59</label>
  </div>
  <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="RadioAudio" id="audioD-3"
          value="18:00 - 19:00">
      <label class="form-check-label" for="audioD-3">18:00 - 19:00</label>
  </div>

</div>

<div id = "radio5">

<label for="Modelado" class="form-label">3D Modelado y Renderizado </label><br>

<div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="RadioModelado" id="mr-1"
        value="14:00 - 18:00">
    <label class="form-check-label" for="mr-1">14:00 - 18:00</label>
</div>
<div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="RadioModelado" id="mr-2"
        value="18:00 - 21:59">
    <label class="form-check-label" for="mr-2">18:00 - 21:59</label>
</div>
<div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="RadioModelado" id="mr-3"
        value="18:00 - 19:00">
    <label class="form-check-label" for="mr-3">18:00 - 19:00</label>
</div>
</div>


<div class="margen-top-3">
<button  id="btn-ava" class="btn btn-success text-white float-end margen-izq-2 margen-arriba-1" >Avanzar</button>
</div>
                    

    </div>
</div>

</div>
    `;

    $("#content-conteiner").html(mult);
}

function GenerateFirstHtml(){
    let html = `

    <nav aria-label="breadcrumb">
            <ol class="breadcrumb margen-arriba-1">
                 <li class="breadcrumb-item active" aria-current="page">Datos Personales</li>
            </ol>
        </nav>

    <div class="card">
    <div class="card-header text-white bg-primary text-center"><h3 class="text-center"></h3>Seleccion de Materias</div>
    <div class="card-body">

        <div class="card-title"><h3 class="text-center">Complete toda la informacion</h3></div>

        <div class="margen-top-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombre">
        </div>

        <div class="margen-top-3">
            <label for="provincia" class="form-label">Provincia</label>
            <input type="text" class="form-control" id="provincia">
        </div>

        <div class="margen-top-3">
            <label for="ciudad" class="form-label">Ciudad</label>
            <input type="text" class="form-control" id="ciudad">
        </div>

        <div class="margen-top-3">
            <label for="sector" class="form-label">Sector</label>
            <input type="text" class="form-control" id="sector">
        </div>

        <div class="margen-top-3">
            <label for="calle" class="form-label">Calle</label>
            <input type="text" class="form-control" id="calle">
        </div>

        <div class="margen-top-3">
            <label for="tipo-carrera" class="form-label">Carrera</label>
            <select class="form-select" id="tipo-carrera">
            <option value="">Seleccione una opcion</option>
            <option value="software">Software </option>
            <option value="redes">Redes</option>
            <option value="multimedia">Multimedia</option>
           </select>
        </div>
      


        <div class="margen-top-3">
            <button class="btn btn-success float-end margen-izq-2 margen-arriba-1" id="btn-ready">Registar</button>
            <button class="btn btn-danger float-end margen-arriba-1" id="btn-clear">Limpiar</button>
            

        </div>

    </div>
</div>

</div>
    
    `;

    $("#content-conteiner").html(html);


    $("#nombre").val(valueNombre);
    $("#provincia").val(valueProvincia);
    $("#ciudad").val(valueCiudad);
    $("#sector").val(valueSector);
    $("#calle").val(valueCalle);
    $("#tipo-carrera").val(valueCarrera);


}

function GenerateHtmlContact(){

    let conf = `
    <div class="card margen-arriba-5">
    <div class="card-header text-white bg-dark text-center"><h2 class="text-center"></h2>Materias Seleccionadas</div>
    <div class="card-body">

      <ul class="list-group">
      <li class="list-group-item">Nombre:  {{name}}</li>
      <li class="list-group-item">Provincia:  {{pro}}</li>
      <li class="list-group-item">Cuidad:  {{city}}</li>
      <li class="list-group-item">Sector:  {{sec}}</li>
      <li class="list-group-item">Calle:  {{adress}}</li>
      <li class="list-group-item">Carrera:  {{carrer}}</li>
    </ul>

    <table class="table table-dark">
      <tr>
        <td><strong>Materias</strong></td>
        <td><strong>Horas</strong></td>
        <td><strong>Horario</strong></td>
      </tr>
      
      <tr>
        <td>{{materia1}}</td>
        <td>60</td>
        <td>{{mat1}}</td>
      </tr>
      
      <tr>
        <td>{{materia2}}</td>
        <td>60</td>
        <td>{{mat2}}</td>
      </tr>
      
      <tr>
        <td>{{materia3}}</td>
        <td>60</td>
        <td>{{mat3}}</td>
      </tr>

      <tr>
        <td>{{materia4}}</td>
        <td>60</td>
        <td>{{mat4}}</td>
      </tr>

      <tr>
        <td>{{materia5}}</td>
        <td>60</td>
        <td>{{mat5}}</td>
      </tr>
      </table>
        
       
      
        <div class="margen-top-3">
       
          <button class="btn btn-danger text-white float-end margen-izq-2 margen-arriba-1" id="btn-borrar" >Borrar</button>
      </div>

        
      

    </div>
</div>

</div>
    `;

    conf = conf.replace("{{name}}", valueNombre);
    conf = conf.replace("{{pro}}", valueProvincia);
    conf = conf.replace("{{city}}", valueCiudad);
    conf = conf.replace("{{sec}}", valueSector);
    conf = conf.replace("{{adress}}", valueCalle);
    conf = conf.replace("{{carrer}}", valueCarrera);

    conf = conf.replace("{{mat1}}", valueradio1);
    conf = conf.replace("{{mat2}}", valueradio2);
    conf = conf.replace("{{mat3}}", valueradio3);
    conf = conf.replace("{{mat4}}", valueradio4);
    conf = conf.replace("{{mat5}}", valueradio5);

    conf = conf.replace("{{materia1}}", valueMateria1);
    conf = conf.replace("{{materia2}}", valueMateria2);
    conf = conf.replace("{{materia3}}", valueMateria3);
    conf = conf.replace("{{materia4}}", valueMateria4);
    conf = conf.replace("{{materia5}}", valueMateria5);

    $("#contact-container").append(conf);
    
    

}





})