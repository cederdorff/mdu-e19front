"use strict";
// ========== GLOBAL VARIABLES ========== //
const _dataRef = _db.collection("sustainabilityData");
let _sustainabilityData;

// 1: data from firebase
// listen for changes on _dataRef
_dataRef.orderBy("year").onSnapshot(snapshotData => {
  _sustainabilityData = []; // reset _sustainabilityData
  snapshotData.forEach(doc => { // loop through snapshotData - like for of loop
    let data = doc.data(); // save the data in a variable
    data.id = doc.id; // add the id to the data variable
    _sustainabilityData.push(data); // push the data object to the global array _sustainabilityData
  });
  console.log(_sustainabilityData);
  appendCows(_sustainabilityData); // call appendCows with _sustainabilityData as function argument
  appendCarbonFootprint(_sustainabilityData); //call appendCarbonFootprint with _sustainabilityData as function argument
  appendMilkProduction(_sustainabilityData); //call appendMilkProduction with _sustainabilityData as function argument
});

// 2: preparing the data
function prepareCowData(sustainabilityData) {
  let cows = [];
  let years = [];
  sustainabilityData.forEach(data => {
    if (data.region === 'north') { // in this case we only want the data from 'north'
      cows.push(data.herdYearCows);
      years.push(data.year);
    }
  });
  return {
    cows,
    years
  }
}
//3: appending the chart
function appendCows(sustainabilityData) {
  let data = prepareCowData(sustainabilityData);
  console.log(data);
  // generate chart
  let chartContainer = document.querySelector('#cows');
  let chart = new Chart(chartContainer, {
    type: 'line',
    data: {
      datasets: [{
        data: data.cows,
        label: 'Number of Cows',
        fill: false,
        borderColor: "#e755ba",
        backgroundColor: "#e755ba",
        pointBackgroundColor: "#55bae7",
        pointBorderColor: "#55bae7",
        pointHoverBackgroundColor: "#55bae7",
        pointHoverBorderColor: "#55bae7",
      }],
      labels: data.years
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            min: (Math.min(...data.cows) - 5),
            max: (Math.max(...data.cows) + 1)
          }
        }]
      }
    }
  });
}

// 2: preparing the data
function prepareCarbonFootprintData(sustainabilityData) {
  // prepare data
  let carbonFootprint = [];
  let years = [];
  sustainabilityData.forEach(data => {
    if (data.region === 'north') { // in this case we only want the data from 'north'
      carbonFootprint.push(data.carbonFootprintWholeFarm);
      years.push(data.year);
    }
  });

  return {
    carbonFootprint,
    years
  }
}

//3: appending the chart
function appendCarbonFootprint(sustainabilityData) {
  let data = prepareCarbonFootprintData(sustainabilityData);
  console.log(data);

  // generate chart
  let chartContainer = document.querySelector('#carbonFootprint');
  let chart = new Chart(chartContainer, {
    type: 'line',
    data: {
      datasets: [{
        data: data.carbonFootprint,
        label: 'Carbon Footprint Whole Farm',
        fill: false,
        borderColor: "#e755ba",
        backgroundColor: "#e755ba",
        pointBackgroundColor: "#55bae7",
        pointBorderColor: "#55bae7",
        pointHoverBackgroundColor: "#55bae7",
        pointHoverBorderColor: "#55bae7",
      }],
      labels: data.years
    }
  });
}

// 2: preparing the data
function prepareMilkProductionData(sustainabilityData) {
  let years = [];
  let milkNorth = [];
  let milkSouth = [];
  sustainabilityData.forEach(data => {
    if (data.region === 'north') { // condition testing whether the region is 'north' og 'south'
      milkNorth.push(data.herdMilkProduction);
      years.push(data.year);
    } else if (data.region === 'south') {
      milkSouth.push(data.herdMilkProduction);
    }
  });
  return {
    years,
    milkNorth,
    milkSouth
  }
}

//3: appending the chart
function appendMilkProduction(sustainabilityData) {
  let data = prepareMilkProductionData(sustainabilityData);
  console.log(data);

  // generate chart
  let chartContainer = document.querySelector('#milkProduction');
  let chart = new Chart(chartContainer, {
    type: 'line',
    data: {
      datasets: [
        // first dataset - north
        {
          data: data.milkNorth,
          label: 'Milk Production North',
          fill: false,
          borderColor: "#e755ba",
          backgroundColor: "#e755ba",
          pointBackgroundColor: "#55bae7",
          pointBorderColor: "#55bae7",
          pointHoverBackgroundColor: "#55bae7",
          pointHoverBorderColor: "#55bae7",
        },
        // secobd dataset - south
        {
          label: 'Milk Production South',
          data: data.milkSouth,
          fill: false,
          borderColor: "#55bae7",
          backgroundColor: "#55bae7",
          pointBackgroundColor: "#e755ba",
          pointBorderColor: "#e755ba",
          pointHoverBackgroundColor: "#e755ba",
          pointHoverBorderColor: "#e755ba",
          type: 'line'
        }
      ],
      labels: data.years
    }
  });
}