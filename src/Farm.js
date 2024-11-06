import React from 'react';
import './Farm.css'; 

const Farm = () => {
    return (
        <div className="farmers-section">
            <h1>Farmers</h1>
            <div className="container">
                <div className="left-container crop-recommendation">
                    <h2>Crop Recommendation</h2>
                    <p>Here you can find the best crop recommendations based on soil type, weather, and market demand.</p>
                    <button className="btn">View Recommendations</button>
                </div>
                <div className="right-container irrigation">
                    <h2>Irrigation Information</h2>
                    <p>Get insights on optimal irrigation practices for your crops, including timing and methods.</p>
                    <button className="btn">Get Irrigation Tips</button>
                </div>
            </div>
        </div>
    );
};

export default Farm;
