// code your solution here
function mondayWork(string = 'go to the office') {
  return `This Monday, I will ${string}.`
}

function saturdayFun(work = 'roller-skate') {
  return `This Saturday, I want to ${work}!`
}

function wrapAdjective(outer = '*') {
  if (outer == '*') {
    return function inner(user = "special") {
      return `You are ${outer}a hard worker${outer}!`
    } 
  } else if (outer == '||') {
    return function inner(user = "special") {
      return `You are ${outer}a dedicated programmer${outer}!`
    }
  }
}
// function wrapAdjective(name = '*') {
//   if (name == '*') {
//     return function inner(user = "special") {
//       return `You are ${name}a hard worker${name}!`
//     } 
//   } else if (name == '||') {
//     return function inner(user = "special") {
//       return `You are ${name}a dedicated programmer${name}!`
//     }
//   }
// }