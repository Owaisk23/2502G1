import React from 'react'
import onBulb from '../../assets/bulbOn.png'
import offBulb from '../../assets/bulbOff.png'


const index = () => {

    const [isOn, setIsOn] = React.useState(true)

  return (
    <div>
      <h3>Bulb Component!</h3>
      <img src={isOn ? onBulb : offBulb} alt="" width={200} height={200}/>
      <button onClick={() => setIsOn(!isOn)}>Toggle Bulb</button>
    </div>
  )
}

export default index
 