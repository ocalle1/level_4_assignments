
import React from 'react'
import UglyThings from './Components/UglyThings'
import UglyList from './Components/UglyList'

import { AxiosContextProvider } from './Context/AxiosContext'

function App() {
  
  
    return (
  <AxiosContextProvider>
  <UglyThings />
  <UglyList />
  </AxiosContextProvider>
    )
}

export default App






















// import React from 'react';
// import Submission from './Components/Submission';
// import List from './Components/List';
// // import UglyThings from './Components/UglyThings';
// import { UglyThingsProvider} from './Components/UglyThings'

// import './App.css';



// function App() {

//     return (
//         <>
//         test
//             {/* UglyContextProvider contains chilren Components that will change */}
//             <UglyThingsProvider>
//                 <Submission />
//                 <List />
//             </UglyThingsProvider>
//         </>
//     );
// }







// export default App;
