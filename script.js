d3.csv("RamenDataPreprocessed.csv", function(error, data) {
    if (error) {
      // obradi grešku
    } else {
      console.log(data);
    }
    ramenData = data;
  });
  