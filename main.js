document.getElementById("Calculate").addEventListener('click' , function(){
    var Weight = document.getElementById('Weight').value
    var height = document.getElementById('height').value
    var bmi =Weight / (height*height)
    document.getElementById('bmi').innerHTML=bmi

    if (bmi<18) {
        var  bmiCategory="your are Skinny."
    }else if(bmi < 24.9 ){
       var bmiCategory="prefect Weight"
    }else if( bmi < 29.9 ){
       var bmiCategory="Fat first degree "
    }else if( bmi < 34.9 ){
       var bmiCategory="Fat secound degree"
    }else if( bmi < 40.9 ){
       var bmiCategory="Fat theard degree"
    }else if(bmi < 242.2 ){
       var bmiCategory="Fat denger degree"
    }else {
      console.log("You are obese.");
  }
  
    document.getElementById("bmi-category").innerHTML=bmiCategory
})


