
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import LineChart from './LineChart'

const Graph = () => {
    const [cases, setCases] = useState();
    useEffect(() => {

        const getData = async () => {
            const response = await axios.get('https://disease.sh/v3/covid-19/historical/Algeria?lastdays=30');
            setCases(response.data.timeline.cases)

            //console.log(Object.keys(response.data.timeline.cases))
            //console.log(Object.values(response.data.timeline.cases))
        }

        getData()

    }, [])

    return (
        <div>

            {cases ? <LineChart data={cases} /> : console.log('hi')}

        </div>
    )
}

export default Graph
