import * as React from 'react';

import './app.css';


const App = props => props.children;

export default App;

// export default class App extends React.Component {


//     render() {
//       return this.props.children;
//     }
//   }



  // const App = ({ children }) => {


  //   const [status, setStatus] = React.useState(
  //     { bct: 0, mode: 'compress', exception: false },
  //   );
  
  //   return (
  //     <MCContext.Provider
  //       value={{
  //         status,
  //         setStatus,
  //       }}
  //     >
  //       {children}
  //     </MCContext.Provider>
  //   );
  // };
  
  // export default App;