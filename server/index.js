require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

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

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/productCollections', productCollectionRoutes);
app.use('/categories', categoryRoutes);
app.use('/subcategories', subcategoryRoutes);
app.use('/orders', orderRoutes);


app.use(notFound);
app.use(errorHandler);


