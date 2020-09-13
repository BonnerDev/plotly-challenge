d3.json("samples.json").then((samples)=>{
    // Sort the data by OTU
    var sort = samples.sort((a, b) => b.otu_ids - a.otu_ids);

    // Slice the first 10 objects for plotting
    slicedData = otu_ids.slice(0, 10);


    var sample_values = samples.dataset.sample_values;
    var otu_labels  = samples.dataset.otu_labels ;
    
});


// Display the default plot
function init() {
    var data = [{
      values: sample_values,
      labels: slicedData,
      text: otu_labels,
      type: "bar"
    }];
  
    var layout = {
      height: 600,
      width: 800
    };
  
    Plotly.newPlot("bar", data, layout);
  }
  
  init();