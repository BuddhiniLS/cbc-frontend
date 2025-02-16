
import{Link} from'react-router-dom';
import'./Homepage.css';


export default function Homepage() {
  return (
    <div className="homepage-container">
      
        <h1 >Welcome to Our Website</h1>
        <p >Explore a world of possibiliies with your services.we are here to make your life easire and more enjoyable.</p>
      
          <button onClick={()=>alert('button Clicked!')}>Get started</button>
          <Link to="/login">Login</Link>  
      
    </div>
  );
}

