// const express = require('express');
import { Console } from 'console';
import express from 'express';
import path from 'path';
import fs from 'node:fs';

const app = express()
const port = 3000

app.use(express.json());

const dirname = path.resolve();
const dataPath = './data.json';
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const products = data.products;

//ALL PRODUCTS
app.get('/products', (req, res) => {
  try {
    console.log('Products:', products);

    res.status(200).json({
      message: 'Products fetched successfully',
      products: products
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Internal server error'
    });
  }
});

//fetch by ID
app.get('/products/:id', (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if(!product) {
      return res.status(404).json({
        message: 'Product not found'
      });
    }

    res.status(200).json({
      message: 'Product fetched successfully',
      product: product
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Internal server error'
    });
  }
});

// ADD PRODUCT
app.post('/products', (req, res) => {
  try {
    const { name, price } = req.body;
    const newProduct = {
      id: products.length + 1,
      name: name,
      price: price
    };
    products.push(newProduct);
    fs.writeFileSync(dataPath, JSON.stringify({ products: products }, null, 2));

    res.status(201).json({
      message: 'Product created successfully',
      product: newProduct
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Internal server error'
    });
  }
});

//DELETE BY ID
app.delete('/products/:id', (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);

    if(productIndex === -1) {
      return res.status(404).json({
        message: 'Product not found'
      });
    } 

    products.splice(productIndex, 1);
    fs.writeFileSync(dataPath, JSON.stringify({ products: products }, null, 2));

    res.status(200).json({
      message: 'Product deleted successfully'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Internal server error'
    });
  }
});

// // get api
// const products = [
//   { id: 1, name: 'Product 1', price: 10 },
//   { id: 2, name: 'Product 2', price: 20 },
//   { id: 3, name: 'Product 3', price: 30 },
// ];

// app.get('/api/products', (req, res) => {
//   res.json(products);
// });


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/image', (req, res) => {
//   res.sendFile(dirname + '/assets/bahra.jpg')
// })

// app.get('/about', (req, res) => {
//   res.send('Hello from About API!')
// })

// app.get('/services', (req, res) => {
//   res.send('Hello from Services API!')
// })

// //Router Parameters(They are compulsory)

// app.get('/posts/:id', (req, res) => {
//   let postId = req.params.id;
//   let postObj = [
//     {
//       postId: 1,
//       title: 'Palestine cease fire: Israel and Hamas agree to halt fighting',
//       content: 'Israel and Hamas have agreed to a ceasefire after 11 days of fighting that killed more than 200 people in Gaza and 12 in Israel.'
//     },
//     {
//       postId: 2,
//       title: 'Palestinian President Mahmoud Abbas calls for international protection of Gaza',
//       content: 'Palestinian President Mahmoud Abbas has called for international protection of Gaza, saying that the situation in the territory is "catastrophic".'
//     },
//     {
//       postId: 3,
//       title: 'Gaza conflict: What you need to know',
//       content: 'The conflict between Israel and Hamas has escalated in recent days, with both sides suffering heavy casualties.'
//     }
//   ];

//   postObj = postObj.find(post => post.postId == postId);
//   if (postObj) {
//     res.json(postObj);
//   } else {
//     res.status(404).send('Post not found');
//   }
// })

// //Query Parameters(They are optional)
// app.get('/categories', (req, res) => {
//   if (req.query.name) {
//     res.send(`Category name is ${req.query.name}`);
//   } else {
//     res.send('All Categories');
//   }
// })

// // Request Body Parameters
// app.get('/contact', (req, res) => {
//   // const { name, age, city } = req.body;
//   const name = req.query.name;
//   const age = req.query.age;
//   const city = req.query.city;
  
//   res.json(`Name: ${name}, Age: ${age}, City: ${city}`);
// })


// app.use('/home', express.static(dirname, {index: '/assets/index.html'}))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})