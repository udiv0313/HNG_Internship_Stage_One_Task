import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());

app.get('/', (req, res) =>  res.send("Stage One Task"));

app.get('/api', (req, res) => {
    
    const slack_name = req.query.slack_name;
    const track = req.query.track;

    // Date object
    const dateTimeObject = new Date();

    const utc_time_format =  dateTimeObject.toISOString().slice(0,19) + 'Z'

    const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    //getting the current week day.

    const currentWeekDayName = weekdayNames[new Date().getDay()];

    // Condition for query parameter.

    if(!slack_name || !track) {
        return res.status(400).json({error: 'Slack Name & Track are required.'});
    }

    // Fromatting the response.

    const response = {

        "slack_name": slack_name,
        "current_day": currentWeekDayName,
        "utc_time": utc_time_format,
        "track": track,
        "github_file_url": "https://github.com/udiv0313/HNG_Internship_Stage_One_Task/blob/main/index.js",
        "github_repo_url": "https://github.com/udiv0313/HNG_Internship_Stage_One_Task",
        "status_code" : 200
    }

    // Send the JSON Request.
    res.json(response);
})

app.listen(PORT, () => {
    console.log(`Server is Running on port: http://localhost:${PORT}`);
})
