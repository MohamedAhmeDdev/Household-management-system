const express = require("express")
const cors = require("cors")
const morgan = require("morgan");
const database = require("./config/database");
const app = express();
const UserRoutes = require('./routes/User.Route')
const BlogRoutes = require('./routes/Blog.Route')
const ReviewRoutes = require('./routes/Reviews.Route')

try{
    database.authenticate();
    console.log('the application is now as connection to the database');
}catch(err){
    console.log('database connection failed');
}


app.use(express.json()),
app.use(cors());
app.use(morgan("dev"));
app.use('/authentication', UserRoutes)
app.use('/Blogs', BlogRoutes)
app.use('/Reviews', ReviewRoutes)



app.listen(5000, () => console.log("this server is running at port 5000"));