require('dotenv').config();
const { google } = require('googleapis');

google.youtube('v3').search.list({
    key: process.env.YOUTUBE_TOKEN,
    part: 'snippet',
    q: 'joji',
    maxResults: 10,
}).then(response => {
    const { data } = response;

    data.items.forEach(item => {
        console.log(`Title: ${item.snippet.title}`);
    });
}).catch(err => console.log(err));
