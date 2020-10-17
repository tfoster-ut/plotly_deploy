function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
}

///////////////////////////////////////// Original Block ///////////////////////////////////
// function buildMetadata(sample) {
//     d3.json("samples.json").then((data) => {
//       var metadata = data.metadata;
//       var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
//       var result = resultArray[0];
//       var PANEL = d3.select("#sample-metadata");
  
//       PANEL.html("");
//       PANEL.append("h6").text(result.location);
//     });
//   } 
///////////////////////////////////////// Original Block ///////////////////////////////////

function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var sampleArray = data.samples;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var sampleResult = sampleArray.filter(sampleId => sampleId.id == sample);
    //  5. Create a variable that holds the first sample in the array.
    var result = sampleResult[0];

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var holdOTU_ID = result.otu_ids
    console.log(holdOTU_ID)
    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = 

    // 8. Create the trace for the bar chart. 
    var barData = [
      
    ];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
     
    };
    // 10. Use Plotly to plot the data with the layout. 
    
  });
}

  init();