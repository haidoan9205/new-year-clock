import React, { useEffect, useState } from "react";
import moment from "moment/moment";
import './style.css'
const Clock = () => {
    const [timeFormat, setTimeFormat] = useState(moment(new Date()).format('HH:mm:ss'));
    useEffect(() => {
        setInterval(() => {
            var now = new Date();
            setTimeFormat(moment(now).format('HH:mm:ss'));
        }, 1000);
    })
    return (
        <div className='body'><p>{timeFormat}</p></div>
    )
}

export default Clock;