const cron = require("node-cron");
const axios = require("axios");

post("start");
cron.schedule("*/5 * * * *", () => post("still alive"));

function post(message) {
    const mastodon = axios.create({
        baseURL: `https://stellaria.network/api/v1/`,
        headers: {
            Authorization: `Bearer ${process.env.token}`
        }
    });
    mastodon.post("/statuses", {
        status: message,
        visibility: "unlisted"
    });
}

