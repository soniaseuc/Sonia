const express = require ('express');
const app = express();

app.use(express.static('./dist/Sonia'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/Sonia/'}
);
  });
  app.listen(process.env.PORT || 8081);