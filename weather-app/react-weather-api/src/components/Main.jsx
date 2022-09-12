import React from 'react'
import TemperatureMain from './TemperatureMain'
import TemperatureTime from './TemperatureTime'
import TemperatureWeek from './TemperatureWeek'

const Main = () => {
  return (
      <main>
          <TemperatureMain />
          <TemperatureTime />
          <TemperatureWeek />
      </main>
  )
}

export default Main
