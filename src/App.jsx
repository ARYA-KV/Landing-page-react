import boyImage from './assets/model.png';
import girlImg from './assets/girl.png';

import starImage from './assets/logoz.png';
import './App.css';

function App() {
  return (
    <>
      <div id='nav-div'>
        {/* Navbar */}
        <nav className="navbar navbar-expand-sm  " >
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto" id='n1' >
                <li><img id='logo' src={starImage} alt="" /></li>
                <li><h4 id='home'>Home</h4></li>
                <li><h4 id='contact'>Contact Us</h4></li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="text" placeholder="Search" />
                <button className="btn" style={{ backgroundColor: 'white', color: 'gray', fontWeight: 'bold' }} type="button">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      <div id="main-div">
        {/* About Pre-school */}
        <div className="half-section-1">
          <p className='text'>YOUR STYLE</p>
          <h4 style={{color:'white',marginLeft:'20px'}}>Explore vintage treasures and unique finds at our cheerful thrift shop in Ernakulam. Discover sustainable style with each visit and bring home a piece of history that sparks joy!</h4>
          <button id='join' className="btn btn-light">Shop Now</button>
          
          

        </div>

        {/* Child Image */}
        <div className="half-section-2">
          <img id='boy' src={boyImage} alt="" />
        </div>
        {/* girl */}
      <div className="half-section-3">
        <img src="" alt="" />
        <img id='girl' src={girlImg} alt="" />

        
      </div>
        
      </div>
      
    </>
  )
}

export default App;
