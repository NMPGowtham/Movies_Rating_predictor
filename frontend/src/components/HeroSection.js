import React, { useState } from "react";
import "../styles/heroSection.css";

const allGenres = [
    'action', 'adventure', 'animation', 'comedy', 'crime', 'documentary', 'drama', 'family', 'fantasy', 'history', 
    'horror', 'music', 'mystery', 'romance', 'science fiction', 'thriller', 'war', 'western'
];

const allLanguages = [
        'afrikaans', 'akan', 
        'albanian', 'amharic', 'arabic', 'armenian', 'basque', 'bengali', 'breton', 'bulgarian', 'burmese', 'cantonese', 
        'catalan', 'chichewa; nyanja', 'cornish', 'corsican', 'cree', 'croatian', 'czech', 'danish', 'dutch', 'english',
        'esperanto', 'estonian', 'finnish', 'french', 'fulah', 'gaelic', 'georgian', 'german', 'greek', 'guarani', 'haitian; haitian creole',
        'hebrew', 'hindi', 'hungarian', 'icelandic', 'indonesian', 'inuktitut', 'irish', 'italian', 'japanese', 'khmer', 'korean', 'latin', 
        'lingala', 'lithuanian', 'malay', 'maltese', 'mandarin', 'maori', 'moldavian', 'navajo', 'nepali', 'no language', 'norwegian', 'persian',
        'polish', 'portuguese', 'punjabi', 'pushto', 'quechua', 'romanian', 'russian', 'samoan', 'sanskrit', 'serbian', 'serbo-croatian', 'sinhalese',
        'slovak', 'somali', 'sotho', 'spanish', 'swahili', 'swedish', 'tagalog', 'tamil', 'telugu', 'thai', 'tibetan', 'tswana', 'turkish', 'ukrainian',
        'urdu', 'vietnamese', 'welsh', 'xhosa', 'yiddish', 'zulu'
];

const HeroSection = () => {
    const [duration, setDuration] = useState("");
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [movieDetails, setMovieDetails] = useState({
        voteAverage: "",
        voteCount: "",
        budget: "",
        popularity: "",
        numVotes: "",
        adult: false
    });

    // Handle Input Changes
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setMovieDetails({
            ...movieDetails,
            [name]: type === "checkbox" ? checked : value
        });
    };

    // Handle Duration Change
    const handleDurationChange = (e) => {
        setDuration(e.target.value);
    };

    // Handle Genre & Language Selection
    const handleSelect = (type, value) => {
        if (type === "genre") {
            setSelectedGenres(selectedGenres.includes(value) ? selectedGenres.filter(g => g !== value) : [...selectedGenres, value]);
        } else {
            setSelectedLanguages(selectedLanguages.includes(value) ? selectedLanguages.filter(l => l !== value) : [...selectedLanguages, value]);
        }
    };

    //fentching data from api
    const fetchData = async (data) => {
        const response = await fetch("http://localhost:5000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data, null, 2)
        });
        const result = await response.json();
        alert(JSON.stringify(result));
    };

    // Handle Submit
    const handleSubmit = () => {
        if (!duration || duration < 1) {
            alert("⚠️ Please enter a valid movie duration!");
            return;
        }
        if (!movieDetails.budget || movieDetails.budget < 1) {
            alert("⚠️ Please enter a valid budget!");
            return;
        }
        if (selectedGenres.length === 0) {
            alert("⚠️ Please select at least one genre!");
            return;
        }

        const movieData = {
            vote_average: parseInt(movieDetails.voteAverage),
            vote_count: parseInt(movieDetails.voteCount),
            budget: parseFloat(movieDetails.budget),
            runtime: parseInt(duration),
            adult: movieDetails.adult,
            popularity: parseFloat(movieDetails.popularity),
            genres: selectedGenres,
            spoken_languages: selectedLanguages,
            numVotes: parseInt(movieDetails.numVotes)
        };

        //alert(JSON.stringify(movieData, null, 2));
        fetchData(movieData);
    };

    return (
        <div className="hero-section">
            {/* Movie Poster */}
            <div className="movie-poster">
                <img src="https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg" alt="Movie Poster" />
            </div>

            {/* Form Section */}
            <div className="hero-content">
                <h1 className="title">🎬 Movie Rating Predictor Credentials</h1>

                {/* Input Fields */}
                <div className="movie-info">
                    <input type="number" name="voteAverage" placeholder="Vote Average" value={movieDetails.voteAverage} onChange={handleInputChange} />
                    <input type="number" name="voteCount" placeholder="Vote Count" value={movieDetails.voteCount} onChange={handleInputChange} />
                    <input type="number" name="budget" placeholder="Budget ($)" value={movieDetails.budget} onChange={handleInputChange} />
                    <input type="number" name="popularity" placeholder="Popularity" value={movieDetails.popularity} onChange={handleInputChange} />
                    <input type="number" name="numVotes" placeholder="Number of Votes" value={movieDetails.numVotes} onChange={handleInputChange} />
                    
                    <label className="checkbox-label">
                        <input type="checkbox" name="adult" checked={movieDetails.adult} onChange={handleInputChange} /> Adult Content
                    </label>

                    <input type="number" name="runtime" placeholder="Movie Duration (min)" value={duration} onChange={handleDurationChange} />
                </div>

                {/* Genre Selector */}
                <div className="selector-container">
                    <h3>Select Genres:</h3>
                    <div className="selected-genres">
                        {selectedGenres.map((genre, index) => (
                            <span key={index} className="selected-option" onClick={() => handleSelect("genre", genre)}>
                                {genre} ❌
                            </span>
                        ))}
                    </div>
                    <div className="all-genres">
                        {allGenres.filter(genre => !selectedGenres.includes(genre)).map((genre, index) => (
                            <span key={index} className="option" onClick={() => handleSelect("genre", genre)}>
                                {genre}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Language Selector */}
                <div className="selector-container">
                    <h3>Select Languages:</h3>
                    <div className="selected-languages">
                        {selectedLanguages.map((lang, index) => (
                            <span key={index} className="selected-option" onClick={() => handleSelect("language", lang)}>
                                {lang} ❌
                            </span>
                        ))}
                    </div>
                    <div className="all-languages">
                        {allLanguages.filter(lang => !selectedLanguages.includes(lang)).map((lang, index) => (
                            <span key={index} className="option" onClick={() => handleSelect("language", lang)}>
                                {lang}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Submit Button */}
                <div className="submit-container">
                    <button className="submit-btn" onClick={handleSubmit}>🎯 Submit</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
