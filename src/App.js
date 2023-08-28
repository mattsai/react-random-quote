import React from "react";
import './App.css'
import axios from 'axios';
class App extends React.Component {
    state = {quote: ''};

    componentDidMount(){
        this.fetchQuote();
    }
    
    fetchQuote=  async () =>{
        try {
            const response = await axios.get('https://api.adviceslip.com/advice');
            const {advice }= response.data.slip;
            this.setState({quote:advice});
            // console.log('advice ',advice);
        } catch (error) {
            console.error("Something went wrong App[18]",error);
        }

        // axios.get('https://api.adviceslip.com/advice')
        // .then((response)=>{
        //     const {advice }= response.data.slip;
        //     this.setState({quote:advice});
        // })
        // .catch((error) =>{
        //     console.log('error', error);
        // })


    }

    render() {
        const {quote} = this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading "> {quote} </h1>
                    <button className="btn" onClick={this.fetchQuote}> Random Quote</button>
                </div>
            </div>
        )
    }
}

export default App;