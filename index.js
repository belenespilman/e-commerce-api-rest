const express = require('express');
const routerApi = require('./routes')


const app = express();
const port= 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello server in express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hello im a new endpoint');
})

app.get('/home', (req, res) => {
  res.json({
    name: '',
    price: 10
  })
})



app.get('/categories/:categoryId/products/:productId', (req, res)=> {
  const { categoryId, productId } = req.params;
  res.json(
    {
      categoryId,
      productId,
      price: 2000
    }

  );
})

app.get('/users', (req, res)=> {
  const { limit, offset } = req.query
  if(limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send('no params were found')
  }
})


app.listen(port, () => {
  console.log('My port' + port)
});

routerApi(app);
