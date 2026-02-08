// BMI Calculator 
const weight =70 ;
const height_inches =5.6 ;
const height = height_inches * 0.0254;
const BMI = weight / (height * height);

if (BMI < 18.5){
  console.log('Your weight is low ')
}
else if (BMI >= 18.5 && BMI <= 24.9){
  console.log('Your weight is ok')
}
else if(BMI >= 25 && BMI <= 29.9){
  console.log('Your weight is high ')
}
else{
  console.log('Your weight is too high its not safe for you!!')
}