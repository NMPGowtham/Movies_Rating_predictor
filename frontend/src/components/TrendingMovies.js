import React from "react";
import "../styles/Pages.css";

const TrendingMovies = () => {
  const trendingMovies = [
    { title: "Avatar: The Way of Water", imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4b87fe160451981.63b4d52e574d0.jpg" },
    { title: "Black Panther: Wakanda Forever", imageUrl: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/10/BlackPanther-WakandaForever_Payoff_1-Sht_v10_lg.jpg" },
    { title: "The Batman", imageUrl: "https://i0.wp.com/batman-news.com/wp-content/uploads/2022/01/The-Batman-2022-Poster-Duo-HQ-01.jpg?fit=2764%2C4096&quality=80&ssl=1&strip=info" },
    { title: "Spider-Man: No Way Home", imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e6171104-2d20-4492-b5e7-6deb649ade83/dehfn1p-7b69dd3d-5865-465d-8690-e45013f3bb56.png/v1/fill/w_1280%2Ch_1811%2Cq_80%2Cstrp/spider_man__no_way_home_movie_poster_by_ofamazingspidey_dehfn1p-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxMSIsInBhdGgiOiJcL2ZcL2U2MTcxMTA0LTJkMjAtNDQ5Mi1iNWU3LTZkZWI2NDlhZGU4M1wvZGVoZm4xcC03YjY5ZGQzZC01ODY1LTQ2NWQtODY5MC1lNDUwMTNmM2JiNTYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6Sqc16UyeGXYimVLQbWTsYAcPJhl-9LsvDxxA-mgpRw" },
    { title: "Doctor Strange in the Multiverse of Madness", imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/ca1b4e149215717.62e69741513f5.jpg" },
    { title: "Jurassic World: Dominion", imageUrl: "https://cdnb.artstation.com/p/assets/images/images/046/231/993/4k/nima-neemz-nakhshab-dominion-final.jpg?1644599731=" },
    { title: "Minions: The Rise of Gru", imageUrl: "https://www.themoviedb.org/t/p/original/1WiUlJH7MMxWn2MIxW1hwMcYam6.jpg" },
    { title: "Top Gun: Maverick", imageUrl: "https://www.assignmentx.com/wp-content/uploads/2022/05/TOP-GUN-MAVERICK-movie-poster.jpg" },
    { title: "Thor: Love and Thunder", imageUrl: "https://lumiere-a.akamaihd.net/v1/images/p_thorloveandthunder_639_593cb642.jpeg" },
    { title: "Uncharted", imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/675423112544139.6016c0d7e2465.jpg" }
  ];

  return (
    <div className="trending-movies">
      <h1>Trending Movies</h1>
      <div className="movies-list">
        {trendingMovies.map((movie, index) => (
          <div className="movie" key={index}>
            <img src={movie.imageUrl} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;
