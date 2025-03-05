"""
Creating a ML Model for Predicting the Rating, Revenue of a Movie
from Movie's Geners and Runtime etc
"""
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error
import joblib
from xgboost import XGBRegressor



# Load the data
data = pd.read_csv('Dataset/TMDB _IMDB_Movies_Dataset.csv')

main_features = [
    'vote_average', 'vote_count',
    'revenue', 'runtime',
    'adult', 'budget',
    'popularity','genres','spoken_languages',
    'averageRating','numVotes'
]

# Cleaning the data

data = data[main_features].copy()
data.dropna(inplace=True)
data.drop_duplicates(inplace=True)

data = data[data['vote_count'] > 1000]
data = data[data['vote_average'] > 0]
data = data[data['revenue'] > 1000000]
data = data[data['budget'] > 1000000]
data = data[data['popularity'] > 0]
data = data[data['runtime'] > 60]
data = data[data['runtime'] < 300]
data = data[data['averageRating'] > 0]
data = data[data['numVotes'] > 1000]
data['budget'] = np.log1p(data['budget'])
data['revenue'] = np.log1p(data['revenue'])
data['numVotes'] = np.log1p(data['numVotes'])
data['vote_count'] = np.log1p(data['vote_count'])

# One hot encoding Genres and Spoken Languages

data['genres'] = data['genres'].astype(str).str.lower().str.replace(r'\s*,\s*', ',', regex=True)  # Remove spaces around commas
data = pd.concat([data, data['genres'].str.get_dummies(sep=',')], axis=1)
data = data.drop(columns=['genres'])

data['spoken_languages'] = data['spoken_languages'].astype(str).str.lower().str.replace(r'\s*,\s*', ',', regex=True)  # Remove spaces around commas
data = pd.concat([data, data['spoken_languages'].str.get_dummies(sep=',')], axis=1)
data = data.drop(columns=['spoken_languages'])

data.to_csv('Dataset/Movies_dataset_latest.csv', index=False)

# Split the data

X = data.drop(columns=['revenue','averageRating'],axis=1)
y = data[['revenue','averageRating']]

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
X_test.to_csv('results/test_movie_data.csv', index=False)

# Train the model
model = XGBRegressor(n_estimators=300, learning_rate=0.05, max_depth=7, random_state=42)
model.fit(X_train, y_train)
# Evaluate the model
y_pred = model.predict(X_test)
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)

#saving predicted data
predect_y = pd.DataFrame(y_pred, columns=['revenue','averageRating'])
predect_y.to_csv('Dataset/predicted_movie_data.csv', index=False)

# Save the model
joblib.dump(model, 'results/movies_predictor.joblib')

# Save the evaluation metrics
result = pd.DataFrame({
    "Mean Squared Error (MSE)":[mse],
    "Mean Absolute Error (MAE)":[mae],
    "R² Score":[r2]
})
result.to_csv('results/Model_Evaluation.csv', index=False)
print(result)