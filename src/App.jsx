import boyImage from './assets/shoe.png';

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
                <li><h4 id='contact'>New Shoes</h4></li>
              </ul>
              <form className="d-flex" style={{border:'2px solid white',borderRadius:'10px',padding:'10px'}}>
                <input className="form-control me-2" type="text" placeholder="Search" />
                <button className="btn" style={{ backgroundColor: 'white', color: 'gray', fontWeight: 'bold' }} type="button">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      <div id="main-div">
        {/**/}
        <div className="sec-div">
        <div className="half-section-1">
          <h1 className='text'>URBEN EDGE</h1>
          <h2 id='abot'>KIXY SHOES</h2>
          <p style={{color:'#62A101',fontSize:'30px',marginLeft:'70px'}}>wherever you go i will be there</p>
          
          <button id='join' className="btn" style={{fontWeight:'bold'}}>SHOP NOW</button>
          
          

        </div>
        
        {/* */}
        <div className="half-section-2">
          <img id='boy' src={boyImage} alt="" />
        </div>

        </div>

        
       
      
        
     </div>
      
    </>
  )
}

export default App;
