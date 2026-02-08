const age = 45;
const price = 800;
const student = false;

if(age < 10 ){
  console.log('you got ticket free')
}
else if(student == true){
  // 50% off ticket
  const discount = price * 50 / 100 ;
  const Payammount = price - discount;
  console.log('you got 50% off for this ticket')
}
else if(age >= 60){
  // 15% off ticket
  const discount = price * 15 / 100;
  const Payammount = price - discount;
  console.log('You got 15% off for this ticket')
}
else{
  console.log('You can pay full Price' + price )
}