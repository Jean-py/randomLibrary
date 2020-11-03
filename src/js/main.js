

var btn_english = document.getElementById("btn_english");
var btn_french = document.getElementById("btn_french");
var btn_multi = document.getElementById("btn_multi");
var max = 3
var nbLivre = 7;


//var block1 =  document.getElementById("block1");

var i = 0;

// var P3W2 =  [{"width":"2px","startP":296,"endP":298,"description":"test","speed":1,"deleted":true,"repetitionNumber":1},{"width":"201px","startP":-9,"endP":192,"description":"Phase lent","speed":"0.7","deleted":false,"repetitionNumber":"3"},{"width":"147px","startP":166,"endP":313,"description":"Tour","speed":"0.7","deleted":true,"repetitionNumber":"3"},{"width":"21px","startP":247,"endP":268,"description":"","speed":1,"deleted":true,"repetitionNumber":1},{"width":"76px","startP":255,"endP":331,"description":"Tour","speed":"0.5","deleted":false,"repetitionNumber":"3"},{"width":"35px","startP":315,"endP":350,"description":"Bras","speed":"0.5","deleted":false,"repetitionNumber":"7"},{"width":"226px","startP":217,"endP":443,"description":"","speed":"0.4","deleted":false,"repetitionNumber":"2"},{"width":"70px","startP":308,"endP":378,"description":"Ã‰paule bras","speed":"0.7","deleted":true,"repetitionNumber":"4"},{"width":"107px","startP":326,"endP":433,"description":"","speed":"0.3","deleted":false,"repetitionNumber":"4"},{"width":"174px","startP":380,"endP":554,"description":"Affaissement droite","speed":"0.5","deleted":false,"repetitionNumber":"3"},{"width":"104px","startP":515,"endP":619,"description":"","speed":"0.7","deleted":false,"repetitionNumber":"3"},{"width":"600px","startP":-8,"endP":592,"description":"Repetition","speed":"0.7","deleted":false,"repetitionNumber":"3"}]





//const obj = JSON.parse();

//console.log(obj.count);
// expected output: 42



//var mydata = JSON.parse("/Users/rivierejp/WebstormProjects/piel/randomLib/src/doc/livre.json");

btn_english.addEventListener("onmousepressed", onclick_eng, false);
btn_english.addEventListener('click', onclick_eng);

btn_french.addEventListener('click', onclick_fr);
btn_multi.addEventListener('click', onclick_multi);
btn_english.addEventListener('click', onclick_eng);

//var userdata = JSON.parse();

function onclick_eng() {
  console.log("btn english");
  
  let generatedJson = generateJSONfromvar();
  var my_JSON_object = JSON.parse(generatedJson);
  console.log(my_JSON_object);
  var englishbooks = [];
  var englishbooksRandom = [];
  
  
  for (let k = 0; k < my_JSON_object.length; k++) {
    //console.log(my_JSON_object[k]);
    if(my_JSON_object[k].Language === "anglais"){
      englishbooks.push(my_JSON_object[k])
    }
  }
  
  for (var i = 0; i<7 ; i++) {
    var random = Math.floor(Math.random() * Math.floor(englishbooks.length));
    console.log(englishbooks.length);
    var pickedBook = englishbooks[random];
    englishbooksRandom.push(pickedBook) ;
    //englishbooks.find(pickedBook).remove();
  
    var block =  document.getElementById("block"+(i+1));
    var elem2 = document.createElement("span");
    elem2.className = "titleBook";
    elem2.innerHTML = (englishbooksRandom[i]["Title"]);
    block.appendChild(elem2);
    var elem = document.createElement("img");
    elem.setAttribute("src", englishbooksRandom[i]["Uploaded Image URL"]);
    block.appendChild(elem);
    
  
  
  
  
  }
  
  console.log(englishbooksRandom);
  
  
  
  }



function onclick_fr() {
  console.log("btn french");
  
  let generatedJson = generateJSONfromvar();
  var my_JSON_object = JSON.parse(generatedJson);
  console.log(my_JSON_object);
  var frenchbook = [];
  var frenchbookRandom = [];
  for (let k = 0; k < my_JSON_object.length; k++) {
    //console.log(my_JSON_object[k]);
    if(my_JSON_object[k].Language === "français"){
      frenchbook.push(my_JSON_object[k])
    }
  }
  
  for (var i = 0; i<7 ; i++) {
    var random = Math.floor(Math.random() * Math.floor(frenchbook.length));
    console.log(frenchbook.length);
    var pickedBook = frenchbook[random];
    frenchbookRandom.push(pickedBook) ;
    //englishbooks.find(pickedBook).remove();
    var block =  document.getElementById("block"+(i+1));
    var elem2 = document.createElement("span");
    elem2.className = "titleBook";
    elem2.innerHTML = (frenchbookRandom[i]["Title"]);
    block.appendChild(elem2);
    var elem = document.createElement("img");
    elem.setAttribute("src", frenchbookRandom[i]["Uploaded Image URL"]);
    block.appendChild(elem);
  }
  
  console.log(frenchbookRandom);
}



function onclick_multi() {
  console.log("btn multi");
  
  let generatedJson = generateJSONfromvar();
  var my_JSON_object = JSON.parse(generatedJson);
  console.log(my_JSON_object);
  var multibookRandom = [];
  
  
  for (var i = 0; i<7 ; i++) {
    var random = Math.floor(Math.random() * Math.floor(my_JSON_object.length));
    console.log(my_JSON_object.length);
    var pickedBook = my_JSON_object[random];
    multibookRandom.push(pickedBook) ;
    //englishbooks.find(pickedBook).remove();
    var block =  document.getElementById("block"+(i+1));
    var elem2 = document.createElement("span");
    elem2.className = "titleBook";
    elem2.innerHTML = (multibookRandom[i]["Title"]);
    block.appendChild(elem2);
    var elem = document.createElement("img");
    elem.setAttribute("src", multibookRandom[i]["Uploaded Image URL"]);
    block.appendChild(elem);
    
}
  console.log(multibookRandom);

}
