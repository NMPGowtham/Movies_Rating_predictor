import pandas as pd
import numpy as np

class DataPreprocessor:
    def __init__(self, data):
        self.data = pd.DataFrame([data])
        self.main_features = [
            'vote_average', 'vote_count',
            'runtime',
            'adult', 'budget',
            'popularity','genres','spoken_languages',
            'numVotes'
        ]
        self.head = ['vote_average', 'vote_count', 'runtime', 'adult', 'budget', 'popularity', 'numVotes',
        'action', 'adventure', 'animation', 'comedy', 'crime', 'documentary', 'drama', 'family', 'fantasy', 'history', 
        'horror', 'music', 'mystery', 'romance', 'science fiction', 'thriller', 'war', 'western', 'afrikaans', 'akan', 
        'albanian', 'amharic', 'arabic', 'armenian', 'basque', 'bengali', 'breton', 'bulgarian', 'burmese', 'cantonese', 
        'catalan', 'chichewa; nyanja', 'cornish', 'corsican', 'cree', 'croatian', 'czech', 'danish', 'dutch', 'english',
        'esperanto', 'estonian', 'finnish', 'french', 'fulah', 'gaelic', 'georgian', 'german', 'greek', 'guarani', 'haitian; haitian creole',
        'hebrew', 'hindi', 'hungarian', 'icelandic', 'indonesian', 'inuktitut', 'irish', 'italian', 'japanese', 'khmer', 'korean', 'latin', 
        'lingala', 'lithuanian', 'malay', 'maltese', 'mandarin', 'maori', 'moldavian', 'navajo', 'nepali', 'no language', 'norwegian', 'persian',
        'polish', 'portuguese', 'punjabi', 'pushto', 'quechua', 'romanian', 'russian', 'samoan', 'sanskrit', 'serbian', 'serbo-croatian', 'sinhalese',
        'slovak', 'somali', 'sotho', 'spanish', 'swahili', 'swedish', 'tagalog', 'tamil', 'telugu', 'thai', 'tibetan', 'tswana', 'turkish', 'ukrainian',
        'urdu', 'vietnamese', 'welsh', 'xhosa', 'yiddish', 'zulu']
        
        self.df=pd.DataFrame(columns=self.head)
        self.data = self.data[self.main_features].copy()
        

    def Transform(self):
        self.data['budget'] = np.log1p(self.data['budget'])
        self.data['numVotes'] = np.log1p(self.data['numVotes'])
        self.data['vote_count'] = np.log1p(self.data['vote_count'])
        self.data = pd.concat([self.data, self.data['genres'].str.get_dummies(sep=',')], axis=1)
        self.data = self.data.drop(columns=['genres'])
        self.data = pd.concat([self.data, self.data['spoken_languages'].str.get_dummies(sep=',')], axis=1)
        self.data = self.data.drop(columns=['spoken_languages'])

        self.data = self.data.reindex(columns=self.df.columns, fill_value=0)
        return self.data

class File_Formater:
    def __init__(self,prediction):
        self.preduction = prediction
    def To_Dict(self):
        return {"Revenue": float(f"{np.expm1(self.preduction[0][0])}"), "Rating": float(f"{self.preduction[0][1]:.2f}")}
    def To_Html(self):
        return f'''
<div class="container">
    <h1>Movie Details</h1>
    
    <div class="info">
        <label for="Rating">Rating:</label>
        <p id="Rating">{self.preduction[0][1]:.2f}</p>
    </div>
    
    <div class="info">
        <label for="Revenue">Revenue:</label>
        <p id="Revenue">{np.expm1(self.preduction[0][0])}</p>
    </div>
    
 
</div>


    '''

    