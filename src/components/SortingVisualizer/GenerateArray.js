import React, { Component } from 'react';

const generateArray = ( props ) => {
    return (
        <div>
            <button onClick={() => props.handleGenerate()}>Click me</button>
        </div>
    );
}

export default generateArray;