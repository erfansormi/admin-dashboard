import React, { useEffect } from 'react'

import axios from "axios"

const Employees = () => {

    useEffect(() => {
        const BaseURL = "https://api.tvmaze.com/shows";
        axios.get(BaseURL)
            .then(response => console.log(response))
    }, [])

    return (
        <div>Employees</div>
    )
}

export default Employees