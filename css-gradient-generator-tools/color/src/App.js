
import './App.css';
import { useState } from 'react';



function App() {
  // updates array for the colors and angle
  const [color, setColor] = useState({
    color1: "#fff",
    color2: "#fff",
    angle: 50,
  });
  // handle any chages for the name and value 
  function handleChange(e) {
    const { name, value } = e.target

    setColor(prev => {
      return {
        ...prev,
        //any element with a name will have its value checked and if its included in the useState then that will be updated 
        [name]: value
      }
    })
  }
  return (
    <>
      <div className='box--control'>
        <div className='big--leftBox'>left box
          <div className='left--innerTopBox'
            style={{
              // tells the top box to listen to the angle,color1, and color2 changes and updates them right away
              background: `linear-gradient(${color.angle}deg, ${color.color1}, ${color.color2})`,
            }}
          >color here</div>
          <div className='left--innerBottomBox'>
            <textarea className="innerBottomBox"
              // shows what color values and angle changes occur
              readOnly value={`
      background: linear-gradient(${color.angle}deg, ${color.color1}, ${color.color2})
      -moz-background: linear-gradient(${color.angle}deg, ${color.color1}, ${color.color2})
      -webkit: linear-gradient(${color.angle}deg, ${color.color1}, ${color.color2})
      `}
            />
          </div>
        </div>

        <div className='big--rightBox'>right box
          {/* the inputs value calls on the color1 and color 2 and when a change occurs handleChange functions updates the state  */}
          <div className='inputs'>Color 1<input type='color' name="color1" style={{ marginLeft: 10 }} value={color.color1} onChange={handleChange} /></div>
          <div className='inputs'>Color 2<input type='color' name="color2" style={{ marginLeft: 10 }} value={color.color2} onChange={handleChange} /></div>
          <div className='angleInput'><input type='number' placeholder='angle' name="angle" value={color.angle} onChange={handleChange}></input></div>

        </div>
      </div>

    </>
  )
}

export default App;