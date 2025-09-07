import WelcomePage from "./components/welcome"
import './index.css';
import '@fontsource/ibm-plex-sans/500.css';
function App() {
  

  return (
    <>
      <div className="bg-white" style={{
        fontFamily: `"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
        fontWeight: 500
      }}>
          
          <WelcomePage/>
      </div>
        
    </>
  )
}

export default App
