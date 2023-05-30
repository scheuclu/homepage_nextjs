import Link from 'next/link';
import dynamic from "next/dynamic";
import React from 'react';
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false, })

export default function PlotlyPlot({ jsonFile }) {






    const [jsonData, setJsonData] = React.useState(null);
    const [finalData, setFinalData] = React.useState(null);

    React.useEffect(() => {
        console.log("Trying to fect", jsonFile);
        const fetchData = async () => {
            try {
                console.log("aaaa");
                const response = await fetch(jsonFile);
                console.log("aaaa", response);
                const data = await response.json();
                console.log("data", data);
                setJsonData(data);
            } catch (error) {
                console.error('Error fetching JSON data:', error);
            }
        };

        fetchData();
    }, [jsonFile]);


    React.useEffect(() => {
        // newdata = $.extend(true, {}, data_orig);
        if (jsonData) {
            const newdata = { data: jsonData.data, layout: jsonData.layout };

            newdata.layout.xaxis.color = "#7d7aff";
            newdata.layout.yaxis.color = "#7d7aff";
            if (newdata.layout.yaxis2) {
                newdata.layout.yaxis2.color = "#7d7aff";
                newdata.layout.yaxis2['showgrid'] = false;
            }

            newdata.layout.yaxis['showgrid'] = false;


            console.log(newdata);
            setFinalData(newdata);
        }
    }, [jsonData]);



    if (finalData) {
        return <Plot
            data={finalData.data}
            layout={finalData.layout}
        />;

    }
    return <></>;
}