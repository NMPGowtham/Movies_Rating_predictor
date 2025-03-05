import React from "react";
import "../styles/Pages.css";

const Awards = () => {
  const awards = [
    { title: "Best Picture: Everything Everywhere All at Once", imageUrl: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/66ba82dfcf28ac01732046c8799b553aeb0ec416203e5f5062aa0ff7b30cfd31._RI_V_TTW_.jpg" },
    { title: "Best Director: Daniel Kwan, Daniel Scheinert", imageUrl: "https://i.pinimg.com/originals/cb/ce/2a/cbce2a73b3f68f6c37df29afce33b72e.jpg" },
    { title: "Best Actor: Brendan Fraser", imageUrl: "https://media.gq.com/photos/625054e2be8b7ed25392be62/16%3A9/w_2560%2Cc_limit/1387390432" },
    { title: "Best Actress: Michelle Yeoh", imageUrl: "https://hips.hearstapps.com/hmg-prod/images/jamie-lee-curtis-attends-the-29th-annual-screen-actors-news-photo-1678465821.jpg" },
    { title: "Best Supporting Actor: Ke Huy Quan", imageUrl: "https://cdn.britannica.com/98/238198-050-9A1C1028/Michelle-Yeoh-2022.jpg" },
    { title: "Best Supporting Actress: Jamie Lee Curtis", imageUrl: "https://m.media-amazon.com/images/M/MV5BMjE5OTI2NTc0NF5BMl5BanBnXkFtZTgwNTgxNDcyNTM%40._V1_UY1200_CR145%2C0%2C630%2C1200_AL_.jpg" },
    { title: "Best Cinematography: Darius Khondji", imageUrl: "https://k-zap.org/wp-content/uploads/2023/10/paul-rodgers.jpg" },
    { title: "Best Editing: Paul Rogers", imageUrl: "https://www.essence.com/wp-content/uploads/2019/08/R.Carter.jpg?width=1920" },
    { title: "Best Costume Design: Ruth E. Carter", imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/1c0ca1397f43703c2a91f98a07208f2480d39991b50db3e783905a2680aec8d2.jpg" },
    { title: "Best Makeup: The Whale", imageUrl: "https://i.pinimg.com/originals/3e/4b/ca/3e4bcac3c4352f07eda2a0fe784384b7.jpg" }
  ];

  return (
    <div className="awards">
      <h1>Awards</h1>
      <div className="awards-list">
        {awards.map((award, index) => (
          <div className="award" key={index}>
            <img src={award.imageUrl} alt={award.title} />
            <p>{award.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
