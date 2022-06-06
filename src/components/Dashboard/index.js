import React, {useEffect, useState} from 'react';
import plausible from '../../apis/plausible';
import Metric from '../Metric';
import Graph from '../Graph';
import Card from '../Card/index';
import "./Dashboard.css";


const Dashboard = () => {

    const [visitors, setVisitors] = useState(0);
    const [pageviews, setPageviews] = useState(0);
    const [bounceRate, setBounceRate] = useState(0);
    const [visitDuration, setVisitDuration] = useState(0);
    const [topPages, setTopPages] = useState([]);
    const [mobile, SetMobile] = useState(0);
    const [desktop, SetDesktop] = useState(0);
    const [entrypage, Setentrypage] = useState([])
    const [exitpage, Setexitpage] = useState([])
    const [Browser, SetBrowser] = useState([])
    const [region, Setregion] = useState([])
    const [city, Setcity] = useState([])
    const [country, Setcountry] = useState([])
    const [os, Setos] = useState([])
    const [graphY, setGraphY] = useState('UNIQUE VISITORS');


    const [timeSeries, setTimeSeries] = useState([]);
    useEffect(() => {
        getos();

    }, []);
    useEffect(() => {
        getcountry();

    }, []);
    useEffect(() => {
        getcity();

    }, []);
    useEffect(() => {
        getregion();

    }, []);
    useEffect(() => {
        getbrowser();

    }, []);
    useEffect(() => {
        getentrypage();

    }, []);
    useEffect(() => {
        getexitpage();

    }, []);
    useEffect(() => {
        getVisitors();

    }, []);

    useEffect(() => {
        getTimeSeries();
    }, []);

    useEffect(() => {
        getTopPages();
    }, [])
    useEffect(() => {
        getmobile();
    }, [])
    useEffect(() => {
        getdesktop();
    }, [])
    const getcity = async () => {
        const URL = "/api/v1/stats/breakdown";
        const response = await plausible.get(URL, {
            params: {
                site_id: "automatamachine.epizy.com",
                period: "6mo",
                property:"visit:city",
                filters: "visit:device==Desktop|Mobile"
            }
        });

        // console.log(response.data.results[0].visitors);
        //console.log(response.data.results);
        Setcity(response.data.results);
    }
    const getregion = async () => {
        const URL = "/api/v1/stats/breakdown";
        const response = await plausible.get(URL, {
            params: {
                site_id: "automatamachine.epizy.com",
                period: "6mo",
                property:"visit:region",
                filters: "visit:device==Desktop|Mobile"
            }
        });

        // console.log(response.data.results[0].visitors);
        //console.log(response.data.results);
        Setregion(response.data.results);
    }
    const getcountry = async () => {
        const URL = "/api/v1/stats/breakdown";
        const response = await plausible.get(URL, {
            params: {
                site_id: "automatamachine.epizy.com",
                period: "6mo",
                property:"visit:country",
                filters: "visit:device==Desktop|Mobile"
            }
        });

        // console.log(response.data.results[0].visitors);
        //console.log(response.data.results);
        Setcountry(response.data.results);
    }
    const getos = async () => {
        const URL = "/api/v1/stats/breakdown";
        const response = await plausible.get(URL, {
            params: {
                site_id: "automatamachine.epizy.com",
                period: "6mo",
                property:"visit:os",
                filters: "visit:device==Desktop|Mobile"
            }
        });

        // console.log(response.data.results[0].visitors);
        //console.log(response.data.results);
        Setos(response.data.results);
    }
    const getbrowser = async () => {
        const URL = "/api/v1/stats/breakdown";
        const response = await plausible.get(URL, {
            params: {
                site_id: "automatamachine.epizy.com",
                period: "6mo",
                property:"visit:browser",
                filters: "visit:device==Desktop|Mobile"
            }
        });

        // console.log(response.data.results[0].visitors);
        //console.log(response.data.results);
        SetBrowser(response.data.results);
    }
    const getexitpage = async () => {
        const URL = "/api/v1/stats/breakdown";
        const response = await plausible.get(URL, {
            params: {
                site_id: "automatamachine.epizy.com",
                period: "6mo",
                property:"visit:exit_page",
                filters: "visit:device==Desktop|Mobile"
            }
        });

        // console.log(response.data.results[0].visitors);
        // console.log(response.data.results);
        Setexitpage(response.data.results);
    }
    const getentrypage = async () => {
        const URL = "/api/v1/stats/breakdown";
        const response = await plausible.get(URL, {
            params: {
                site_id: "automatamachine.epizy.com",
                period: "6mo",
                property: "visit:entry_page",
                filters: "visit:device==Desktop|Mobile"
            }
        });

        // console.log(response.data.results[0].visitors);
        Setentrypage(response.data.results);


    }
    const getmobile = async () => {
        const URL = "/api/v1/stats/breakdown";
        const response = await plausible.get(URL, {
            params: {
                site_id: "automatamachine.epizy.com",
                period: "6mo",
                property: "visit:source",
                filters: "visit:device==Mobile"
            }
        });

        // console.log(response.data.results.visitors);
        //console.log(response.data.results[0].visitors);
        SetMobile(response.data.results[0].visitors);


    }
    const getdesktop = async () => {
        const URL = "/api/v1/stats/breakdown";
        const response = await plausible.get(URL, {
            params: {
                site_id: "automatamachine.epizy.com",
                period: "6mo",
                property: "visit:source",
                filters: "visit:device==Desktop"

            }
        });

        // console.log(response.data.results.visitors);
        // console.log(response.data.results[0].visitors);
        SetDesktop(response.data.results[0].visitors);
        // console.log(visitors);
    }
    const getVisitors = async () => {
        const URL = "/api/v1/stats/aggregate";
        const response = await plausible.get(URL, {
            params: {
                site_id: "automatamachine.epizy.com",
                period: "6mo",
                metrics: "visitors,pageviews,bounce_rate,visit_duration"
            }
        });

        //console.log(response.data.results);
        setVisitors(response.data.results.visitors.value);
        setPageviews(response.data.results.pageviews.value);
        setBounceRate(response.data.results.bounce_rate.value);
        setVisitDuration(response.data.results.visit_duration.value);
        // console.log(visitors);
    }

    const getTimeSeries = async () => {
        const URL = "/api/v1/stats/timeseries";
        const response = await plausible.get(URL, {
            params: {
                site_id: "automatamachine.epizy.com",
                period: "6mo",
                metrics: "visitors,pageviews,bounce_rate,visit_duration"
            }
        });

        // console.log(response.data.results);
        // const arr =
        setTimeSeries(response.data.results);
        // console.log(arr);

    }

    const getTopPages = async () => {
        const URL = "/api/v1/stats/breakdown";
        const response = await plausible.get(URL, {
            params: {
                site_id: "automatamachine.epizy.com",
                period: "6mo",
                property: "event:page",
                limit: "5"
            }
        });

       // console.log(response.data.results);
        setTopPages(response.data.results);
    }

    // console.log(topPages);

    const setMetric = (term) => {
        setGraphY(term);
    }

    return (
        <>
            <div className='metric-wrapper'>
                <Metric title={"UNIQUE VISITORS"}
                    value={visitors}
                    setMetric={setMetric}/>
                <Metric title={"TOTAL PAGEVIEW"}
                    value={pageviews}
                    setMetric={setMetric}/>
                <Metric title={"BOUNCE RATE"}
                    value={bounceRate}
                    setMetric={setMetric}/>
                <Metric title={"VISIT DURATION"}
                    value={visitDuration}
                    setMetric={setMetric}/>
            </div>
            <div className='metric-chart'>
                <Graph data={timeSeries}
                    yaxis={graphY}/>
            </div>
            <div className='row'>
                <div className='col-lg-6 main-card'>
                    <Card  title="Top Sources"/>
                </div>
                <div className='col-lg-6 main-card'>
                    <Card  key ="2" title="Top pages" data={topPages} data2={entrypage} data3={exitpage}/>
                </div>
                <div className='col-lg-6 main-card'>
                    <Card key="3"title="Countries" city={city} country={country} region={region}/>
                </div>
                <div className='col-lg-6 main-card'>
                    <Card key ="4"title="Devices" value={mobile} desktop={desktop}  Browser={Browser} os={os}/>
                </div>
            </div>
            {/* <div className='row'>
                <div className='top-pages col-lg-6'>
                    <Pages data={topPages}/>
                </div>
                <div className='col-lg-6'>
                    <Devices value={mobile}
                        desktop={desktop}/>
                    <Entrypage data={entrypage}/>
                </div>
            </div> */}

        </>

    );
}

export default Dashboard;
