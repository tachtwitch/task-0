import express from 'express'

const api = express();
const email = "dami.learning@gmail.com"
const git = "<https://github.com/tachtwitch/task-0>"
const current_dateTime = new Date();

api.get('/', (req,res) => {
    res.json(
        {
            email:"dami.learning@gmail.com",
            current_datetime : current_dateTime.toISOString(),
            github_url : git
        }
    )
});

api.listen(3000, () => console.log("server running"));