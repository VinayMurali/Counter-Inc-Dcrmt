import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment,decerment,clear,add,sub,save} from '../actions/index';
import { bindActionCreators } from 'redux';

class Counter extends Component {
  constructor(props){
    super(props)
    this.state={
                displaysave:'',
                currentCount:'',
              // myArray: []
              };
  }
 
// constructor(props){
//     super(props);
//     this.state ={data : 0} 
//   }; 

// incrmnt = () =>{
//   this.setState({data:this.state.data+1})
// }
// dcrmnt = ()=>{
//   this.setState({data:this.state.data-1})
// } 

currentCount = () =>{

        // const {displaysave}=this.state;
      
        //   let displaysave=myArray[];  
        let displaysave=this.props.counter;
        //  myArray.push{this.props.counter};
        this.setState({currentValue:displaysave})
        console.log(this.props.counter);
                    }


render(){
return (
  <div>
    <div>
      <button onClick={this.props.increment}>Increment</button>
      <button onClick={this.props.decerment}>Decrement</button>
      <button onClick={this.props.add}>Add</button>
       <button onClick={this.props.sub}>Sub</button>
   </div>
    <div>
      <p>Count:{this.props.counter}</p>
      
    <hr />
      <button onClick={this.props.clear}>Clear</button>
      <button onClick={this.currentCount}>SAVE</button>
        {this.state.currentValue!=null && this.state.currentValue}
    </div>
   </div>
  );
 }
}

function mapStateToProps(state) {
  //Whatever gets returned from here will show up as props in book-list
  return {

    counter: state.counter
  }
}

// anything returned from this function will end up as props in the book-list
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed to all our reducers.
  return bindActionCreators({increment:increment,decerment:decerment,clear:clear,add:add,sub:sub}, dispatch);
}

// Promote BookList from a component to a container
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
