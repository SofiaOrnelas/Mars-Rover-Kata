var rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: ['x: 0, y: 0']
}

function turnLeft (rover){
  
  switch (rover.direction) {
    case 'N':
    rover.direction = 'W';
    break;
    case 'W':
    rover.direction = 'S';
    break;
    case 'S':
    rover.direction = 'E';
    break;
    case 'E':
    rover.direction = 'N';
    break;
  };
  console.log(rover)
  console.log("turnLeft was called!", rover.direction);
}
  
function turnRight (rover){
  switch (rover.direction) {
    case 'N':
    rover.direction = 'E';
    break;
    case 'E':
    rover.direction = 'S';
    break;
    case 'S':
    rover.direction = 'W';
    break;
    case 'W':
    rover.direction = 'N';
    break; 
  };
  console.log(rover)
  console.log('turnRight was called', rover.direction);
}

function moveForward(rover){
  switch (rover.direction) {
    case 'N': 
    rover.y = rover.y -1
    break;
    case 'E':
    rover.x = rover.x + 1;
    break;
    case 'S':
    rover.y = rover.y +1;
    break;
    case 'W':
    rover.x = rover.x -1; 
  }
  
  rover.travelLog.push(`x: ${rover.x}, y: ${rover.y}`);
  console.log(rover);
  console.log("moveForward was called");
} 

var command = 'frfrfflfrff';

function listCommand(){
for(var i=0; i<command.length; i++){
  if (command[i] === 'r'){
    turnRight(rover);
  }else if (command[i] === 'l'){
    turnLeft(rover);
  }else if (command[i]=== 'f'){
    moveForward(rover);
  }else {
    'Insert Command'
  };
};
console.log (listCommand);  
console.log(rover.travelLog);
}

