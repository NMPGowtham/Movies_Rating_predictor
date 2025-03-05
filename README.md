# Movie Rating Prediction

This project aims to predict movie ratings based on various features using machine learning techniques.

## Table of Contents
- [Introduction](#introduction)
- [Dataset](#dataset)
- [Installation](#installation)
- [Usage](#usage)
- [Model](#model)
- [Results](#results)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The goal of this project is to develop a model that can accurately predict movie ratings. This can help in understanding the factors that influence movie ratings and provide insights for movie production and marketing.

## Dataset
The dataset used in this project contains various features such as movie title, genre, director, cast, release year, and user ratings. The dataset is sourced from [https://www.kaggle.com/datasets/ggtejas/tmdb-imdb-merged-movies-dataset/versions/22].
```bash
  Download the dataset from https://www.kaggle.com/datasets/ggtejas/tmdb-imdb-merged-movies-dataset/versions/22
  and paste it in dataset folder
  rename it as 'TMDB _IMDB_Movies_Dataset.csv'
```

## Installation
To get started with the project, clone the repository and install the required dependencies:

```bash
git clone https://github.com/NMPGowtham/Movies_Rating_predictor.git
cd Movie_rating_Predicting
cd Backend
pip install -r requirements.txt
```

## Usage
To train the model and make predictions, run the following command:

```bash
python movies_predictor.py
python App.py
```

## Model

- Gradient Boosting

## Results
The performance of the models is evaluated using metrics such as Mean Absolute Error (MAE), Mean Squared Error (MSE), and R-squared (R²). The results are documented in the `results` folder.

## Collaborators

- **Gowtham** - Model development ,optimization ,Evaluation and validation

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.