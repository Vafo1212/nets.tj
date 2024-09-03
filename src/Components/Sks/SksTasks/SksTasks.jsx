import React from 'react'
import './SksTasks.scss'
import SksTasksBigCard from './SksTasksBigCard/SksTasksBigCard'
import SksTasksSmallCard from './SksTasksSmallCard/SksTasksSmallCard'

const SksTasks = ({data}) => {
  return (
    <div className='sksTasks_container' id='task'>
      <h1>Какие задачи бизнеса решает системная интеграция</h1>
      <div className="sksTasks_block">
        {
            data?.map((e)=>
              e.active ? <SksTasksBigCard title={e.title} subTitle={e.subTitle}/> : <SksTasksSmallCard title={e.title} subTitle={e.subTitle}/> 
            )
        }
      </div>
    </div>
  )
}

export default SksTasks
