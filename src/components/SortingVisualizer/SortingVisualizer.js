import React, { Component } from 'react';
import ArrayBar from './ArrayBar';
import GenerateArray from './GenerateArray';

class SortingVisualizer extends Component {
    // The state holds an empty array. This will be the array we will sort.
    state = {
        arr: [] 
    }

    createRandomArray(){
        const arr = []
        for(let i= 0; i < 100; i++){
            arr.push(this.randIntRange(7,600));
        }
        this.setState({arr})
    }

    // Get a random integer from minimum to max.
    randIntRange(min, max){
        return Math.floor((Math.random() * (max-min+1)) + min);
    }

    componentDidMount(){
        this.createRandomArray();
    }

    handleGenerate = () => {
        this.createRandomArray();
    }

    render() {
        const {arr} = this.state;
        return (
            <div className="array-container">
                {arr.map(bar => (
                    <ArrayBar bar={bar} />
                ))}
                <GenerateArray handleGenerate={this.handleGenerate}/>
            </div>
        )
    }
}

export default SortingVisualizer;