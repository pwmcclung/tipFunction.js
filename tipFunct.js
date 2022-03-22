function calculateTip(amount, rating) {
  let rate = rating.toLowerCase()
  if (rate === 'excellent'){
   let tip  = Math.ceil(amount * 0.20);
   return tip;
}else if (rate === 'great'){
  let tip = Math.ceil(amount * 0.15);
  return tip;
}else if (rate === 'good'){
  let tip = Math.ceil( amount * 0.10);
  return tip;
}else if(rate === 'poor'){
  let tip = Math.ceil( amount * 0.05);
  return tip;
}else if (rate === 'terrible'){
  let tip = Math.ceil(amount * 0.00)
  return tip;
}else{
  return 'Rating not recognised'
}
}
