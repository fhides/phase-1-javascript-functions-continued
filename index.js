// code your solution here
const saturdayFun = function(event='roller-skate'){
    return `This Saturday, I want to ${event}!`;
}
const mondayWork = function(event='go to the office'){
    return `This Monday, I will ${event}.`;
}
const wrapAdjective=function(event=`*`){
    return function (type = 'a dedicated programmer'){
        return `You are ${event}${type}${event}!`
}
}
