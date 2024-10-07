import React from "react";
import NavBar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx" 
import Card from "./card.jsx"
import Footer from "./footer.jsx";


//create your first component
const Home = () => {
	return (<>
		<NavBar></NavBar>
		<div className="container">
		<Jumbotron></Jumbotron> 
		<Card></Card>
		</div>
		<Footer></Footer>
		</>)
	
};

export default Home;
