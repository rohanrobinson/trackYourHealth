const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


app.get('/api', (request, response) => {
    response.json({patientName: "Kavitha Gowda",
                   symptomsList: ['Dizzy', 'Vomiting', 'Stomach pain']                     
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


