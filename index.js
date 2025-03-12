// code your solution here
function saturdayFun (fun='roller-skate'){
  return `This Saturday, I want to ${fun}!`
}
//console.log(saturdayFun());

function mondayWork (work= 'go to the office'){
    return `This Monday, I will ${work}.`

}

function wrapAdjective (enjoy= "*"){
    return function(adjective= "special"){
      return `You are ${enjoy}${adjective}${enjoy}!`
    }
}