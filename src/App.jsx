import Diagram from './modules/diagrams/Diagram';
import Users from './modules/usuario/Users';

import './App.css'

function App() {

  return (
    <>
      <div className="flex bg-gray-900 h-screen">
        <div className="flex-2 py-4 px-2">
          <Users />
        </div>

        <div className="flex-1">
          <Diagram />
        </div>
      </div>
    </>
  )
}

export default App
