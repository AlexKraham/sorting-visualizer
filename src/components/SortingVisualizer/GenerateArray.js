import React, { Component } from 'react';

const generateArray = ( props ) => {
    return (
        <div className="generate-array">
            <button onClick={() => props.handleGenerate()}>Generate New Array</button>
        </div>
    );
}

export default generateArray;