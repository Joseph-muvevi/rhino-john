import React from 'react'
import "../dashboard.css"
import { AnaliticsBanner } from './AnaliticsBanner'
import { AnaliticsStats } from './AnaliticsStats'


const Analitics = () => {
    return (
        <div className="analitics">
            <AnaliticsBanner/>
            <AnaliticsStats/>
        </div>
    )
}

export default Analitics
