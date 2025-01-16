
import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard';
import Navbar from './Navbar';
import HomePage from './HomePage';
//  import './styles.css';

function App() {

  const [isNavbarShowing, setNavbarShowing] = useState(true);

  // Sync the collapse state with screen size
  useEffect(() => {
    const syncNavbarState = () => {
      setNavbarShowing(window.innerWidth >= 992); // Show if larger than 992px, otherwise don't show
    };

    syncNavbarState(); // Run on mount to set the initial state

    // Listen for window resize events
    window.addEventListener('resize', syncNavbarState);

    // Cleanup the listener on unmount
    return () => window.removeEventListener('resize', syncNavbarState);
  }, []);


  // Toggle the collapse state
  const toggleNavbar = () => {
    setNavbarShowing(!isNavbarShowing);
    alert("NavbarToggle!")
  };

  return (

    <>

      <Navbar/>
      
      <HomePage/>

      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2023 E-Shop. All rights reserved.</p>
        </div>

      </footer>
        <button>  Footer </button>
    </>
  );
}

export default App;