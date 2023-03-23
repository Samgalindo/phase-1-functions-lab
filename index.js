// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    const hqLocation = 42
    return Math.abs(pickupLocation - hqLocation)
}

function distanceFromHqInFeet(distanceInBlocks){
    const blockInFeet = 264
    const distanceInBlocksFromHq = distanceFromHqInBlocks(distanceInBlocks)
    const distanceInFeet = distanceInBlocksFromHq*blockInFeet
    return distanceInFeet
}

function distanceTravelledInFeet(start, destination){
    const blockInFeet = 264
    const distanceInBlocks = Math.abs(start-destination)
    const distanceInFeet = blockInFeet*distanceInBlocks
    return distanceInFeet
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare = 0;
  
    if (distance <= 400) {
      return fare;
    } else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      fare = 25;
    } else {
      return 'cannot travel that far';
    }
  
    return fare;
  }
  