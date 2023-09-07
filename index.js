import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());

app.get('/', (req, res) =>  res.send("Stage One Task"));

app.get('/user', (req, res) => {
    
    const slack_name = req.query.slack_name;
    const track = req.query.track;

    // Date object
    const dateTimeObject = new Date();

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
        "utc_time": dateTimeObject.toISOString(),
        "track": track,
        "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
        "github_repo_url": "https://github.com/username/repo",
        "status_code" : 200
    }

    // Send the JSON Request.
    res.json(response);
})

app.listen(PORT, () => {
    console.log(`Server is Running on port: http://localhost:${PORT}`);
})