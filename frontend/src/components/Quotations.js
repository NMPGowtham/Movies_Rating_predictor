import React from "react";
import "../styles/Quotations.css";

const Quotations = () => {
    return (
        <section className="quote-section">
            <div className="quote-container">
                <h2>About Movie Rating Predictor</h2>
                <p className="quote-text">
                    ❝ Movie ratings have always been a crucial factor in determining a film’s success. 
                    With advancements in technology, we can now analyze various factors such as popularity, 
                    vote counts, budget, and audience engagement to predict movie ratings more accurately. 
                    The <strong>Movie Rating Predictor</strong> uses data-driven insights and machine learning algorithms 
                    to provide a reliable estimate of a movie's potential performance. Whether you're a filmmaker, 
                    critic, or movie enthusiast, this tool offers a glimpse into the future of cinema analytics. ❞
                </p>
            </div>
        </section>
    );
};

export default Quotations;
