import axios from 'axios';

export default axios.create({
    baseURL: "https://plausible.io",
    headers: {
        Authorization: "Bearer vF9QWmRs4Ew_TvwFjM5kDM0qqgJ_RX0GKEOvC7yPMPWRnPRiJ6lj2iSL5Hb8mhLp"
    }
})