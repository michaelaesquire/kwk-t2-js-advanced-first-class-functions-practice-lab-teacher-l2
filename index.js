// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(callback)
}

const callback = function (drivers) {
  console.log(drivers.name);
};

const callback2 = function (drivers) {
  console.log(drivers.hometown);
};

function logDriversByHometown(drivers, town) {
  drivers.forEach(function (townie) {
//    console.log(townie.hometown);
    if (townie.hometown === town) {
      console.log(townie.name);
    }
  });
}

function driversByRevenue(drivers) {

  finalArry = [];
  //drivers.sort();
  drivers.forEach(function (townie) {

    finalArry.push([townie.name,townie.revenue])
  });

  finalArry.sort(function(a, b) {
    return a[1] - b[1];
  });
  realFinalArry = [];

  for (i = 0; i < finalArry.length; i++) {
    realFinalArry.push({name:finalArry[i][0]})
  }

  return realFinalArry;
//  return realFinalArry[0];
//  console.log(revArry);
}

const comparator = function (a, b) {
  return a.localeCompare(b);
};

function driversByName(drivers) {
  let finalArry =[];
  drivers.forEach(function (townie) {

    finalArry.push(townie.name)
  });
  finalArry.sort();
  realFinalArry = [];

  for (i = 0; i < finalArry.length; i++) {
    realFinalArry.push({name:finalArry[i]})
  }
  return realFinalArry;

}


const totalRevenue = function (drivers) {
  let totalPrice = 0;

  drivers.forEach(function (driver) {
    totalPrice += driver.revenue;
  });

  return totalPrice;
};

const averageRevenue = function (drivers) {
  let totalPrice = 0;

  drivers.forEach(function (driver) {
    totalPrice += driver.revenue;
  });
  console.log(Object.keys(drivers));

  return totalPrice/5;
  //sorry I got stuck trying to figure out how to do this part :( )
};
