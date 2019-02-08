import axios from "axios";
const apiKey = "AIzaSyAsnw3LY74hQmf9qumwlxW9g4sd1PqWG4Q";


export default {
    searchVideos: function(term) {
        return axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
                key: apiKey,
                part: "snippet",
                q: term,
                maxResults: 8
            }
        })
    }
};