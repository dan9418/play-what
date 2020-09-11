import * as React from "react";
import List from "../List/List";
//import "./Keyboard.css";

const Chart = ({ children, chart, viewer, ...props }) => {

    const rowStyles = {
        width: '100%'
    };

    const sections = chart.sections.map((s, i) => {
        return (
            <div className="section">
                <List list={s.concepts} viewer={viewer} name={`Section ${i}`}/>
            </div>
        );
    })

    return (
        <div className='chart' style={rowStyles}>
            <h2>Chart</h2>
            {sections}
        </div>
    );
}

export default Chart;