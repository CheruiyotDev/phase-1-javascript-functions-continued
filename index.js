// code your solution here
function saturdayFun(roller = 'roller-skate') {
  if (roller === 'roller-skate') {
    return roller = 'This Saturday, I want to roller-skate!'
  } else {
    return 'This Saturday, I want to bathe my dog!'
  }
}
function mondayWork(office = 'go to the office') {
  if (office === 'go to the office') {
    return 'This Monday, I will go to the office.'
  } else {
    return 'This Monday, I will work from home.'
  }
}
function wrapAdjective(name = '*') {
  if (name == '*') {
    return function inner(user = "special") {
      return `You are ${name}a hard worker${name}!`
    } 
  } else if (name == '||') {
    return function inner(user = "special") {
      return `You are ${name}a dedicated programmer${name}!`
    }
  }
   
}
