import './App.css';
import NavigationBar from './components/NavigationBar.js';
import Footer from './components/footer.js';
import Prize from './components/prize.js';
import Landing from './components/landing';

function App() {
  return (
    <div>
      <NavigationBar />
      <Landing />
      <Prize /> 
      <Footer />
    </div>
  );
}

export default App;
