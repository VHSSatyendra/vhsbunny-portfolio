import './App.css';
import Artist from './components/artist/Artist';
import Content from './components/content/Content';
import Designer from './components/designer/Designer';
import Developer from './components/developer/Developer';
import Info from './components/info/Info';

function App() {
  return (
    <div className="p-5 min-w-screen min-h-screen">
      <Info/>
      <Content/>
      {/* <Artist/> */}
      <Developer/>
      {/* <Designer/> */}
    </div>
  );
}

export default App;
