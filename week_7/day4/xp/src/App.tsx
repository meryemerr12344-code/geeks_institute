
import BuggyCounter from './component/BuggyCounter'
import './App.css'
import ErrorBoundary from './component/ErrorBoundary'

import SingleCounter from './component/SingleCounter'
import Color from './component/Color'

function App() {

  return (
    <div className="bg-gray-200 p-6">
      <p className=' font-bold text-black'>Click on the numbers to increase the counters.
        The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.</p>
      <hr className="my-4 border-gray-400" />

      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>


      <hr className="my-4 border-gray-400" />
        <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>

      <ErrorBoundary>
        <SingleCounter />
      </ErrorBoundary>

      <ErrorBoundary>
      <SingleCounter />
      </ErrorBoundary>

      <hr className="my-4 border-gray-400" />
      <p>This counter is not inside of boundary. So if crashes, all other components are deleted.</p>
   <SingleCounter />

 <hr className="my-4 border-gray-400" />

 <Color />

    </div>
  )
}

export default App
