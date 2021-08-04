import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Employee from './components/Employee';
import Student from './components/Student';
import Counter from './components/Counter';
import Clock from './components/Clock';
import Greeting from './components/Greeting';
import Catalog from './components/Catalog';






function App() {
  return (
    <div className="App">

    <Header/>
    <hr/>
    <marquee><h2>Hi all ,Welcome To React Training @ Mphasis</h2> </marquee> 

    <Catalog/>



    <hr/>
    <Counter/>
    <hr/>
    <Clock/>
    <hr/>
    <Greeting   isLoggedIn={true}/>
    <Greeting   isLoggedIn={false}/>
      
   
    <Footer/>
    </div>

  );
}

export default App;
