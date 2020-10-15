import React from 'react'
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';

const LineChart = (props) => {
    //console.log(Object.keys(props.data));



    return (
        <div>
            <XYPlot
                xType="time"
                width={1000}
                height={500}>
                <HorizontalGridLines />
                <VerticalGridLines />
                <XAxis title="X Axis" />
                <YAxis title="Y Axis" />
                <LineSeries
                    data={[

                        Object.keys(props.data).map((date, index) => {
                            return { x: new Date(date), y: + Object.values(props.data)[index] }
                        })


                    ]} />
            </XYPlot>
        </div>
    )
}

export default LineChart
