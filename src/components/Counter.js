import React, { Component } from 'react'

export default class Counter extends Component {
  

    constructor(props){
        super(props);
        this.state={count:10}
        this.incrementCount=this.incrementCount.bind(this);  //1st way
    }

    //defnined
    incrementCount(){
        console.log("In incrementCount "+this.state.count);
        //this.state.count=this.state.count+1; //wrong way
      
       this.setState({count:this.state.count+1});   //correct way    
    
      // this.setState(prevState=>{return{count:prevState.count+1}});   //correct way    
    
    }


    decrementCount(){
        console.log("In decrementCount "+this.state.count);
        //this.state.count=this.state.count+1; //wrong way
        this.setState({count:this.state.count-1});   //correct way    
    }



      handleIncrement=()=>{
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }


    render() {
        return (
                <span>
                <h3>Counter Demo</h3>
                <font size="4" color="green">{this.state.count}</font>
                <br/><br/>
                <button  onClick={this.incrementCount}            className="btn btn-info">Increase Counter</button>   
                <button  onClick={()=>this.decrementCount()}      className="btn btn-primary">Decrease Counter</button>   
                <button  onClick={this.handleIncrement}     className="btn btn-success">Increase Count by 4</button>   
                </span>
          )
    }


}
