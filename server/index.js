require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;
const connectDB = require('./config/connectDB');
const { authRoutes, userRoutes, productRoutes, productCollectionRoutes, categoryRoutes, subcategoryRoutes, orderRoutes } = require('./routes/index');
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const corsOptions = require('./config/corsOptions');

const start = () => {
    connectDB().then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}...`)
        })
    })
}

start();

app.use(cors(corsOptions));


app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/productCollections', productCollectionRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/subcategories', subcategoryRoutes);
app.use('/api/orders', orderRoutes);

app.get('*', (req, res) => {

    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));

});

app.use(notFound);
app.use(errorHandler);


