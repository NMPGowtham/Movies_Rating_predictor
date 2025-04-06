import { useNavigate } from "react-router-dom";
import "./Home.css";

const dishes = [
  { name: "Idli", img: "https://imgs.search.brave.com/lLw5RLJxTxbb_jLv2EvNQnlgrSeb8NOgQ91rG3AUWI8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzE2Lzc4Lzk1/LzM2MF9GXzExNjc4/OTUyN182WmVKZmFJ/WGlZRlBObHNCVG1y/UVJIWXpIQTNxMlNG/ei5qcGc" },
  { name: "Biryani", img: "https://imgs.search.brave.com/fu7CoEhFUpF5ndF0RuSjARoFSjkRmC1De-hCsInrdbY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzUxLzA3LzI1/LzM2MF9GXzU1MTA3/MjU1OF9yRU51eDlm/cWxlYzVHUEJKU2FU/b1Q2OXhqY1lpR3hq/ZS5qcGc" },
  { name: "Butter Chicken", img: "https://imgs.search.brave.com/V_AK5ar0B0j6mJ_uJDd0RD-xyvALPNcFSd0TMMwQlwo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEy/NjUyOTI1Mi9waG90/by9idXR0ZXItY2hp/Y2tlbi1ieS10dWxz/aS1pbmRpYW4tcmVz/dGF1cmFudC1pbi1x/dWFycnktYmF5LTI0/b2N0MTQtMDZub3Zl/bWJlcjIwMTQtbGVh/ZC1mZWF0dXJlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz00/b19nTFZ1SVRqbXo1/cmREX2k1ZWdPWC02/cEJ2M2NPY3FHM3o2/aGVCSG93PQ" },
  { name: "Paneer Tikka", img: "https://imgs.search.brave.com/Pl5xv70FoRk78ihn2nD6su8X2nGugwDKYG9eXHMG70k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVncmVjaXBlc29m/aW5kaWEuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDEzLzA5/L3BhbmVlci10aWtr/YS1tYXNhbGExMC0x/LmpwZw" },
  { name: "Samosa", img: "https://imgs.search.brave.com/A9lj795d_G81Pn8xzR-mPk2Nv9jOP0D4xvHqD_QUyuY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzY1LzQ5LzY5/LzM2MF9GXzEwNjU0/OTY5MTNfb1JyeE5O/aEhGekFoQTNWQ3Ns/eGpWTnZVdFFTbm9w/NXMuanBn" },
  { name: "Dosa", img: "https://imgs.search.brave.com/5FA-N1U-RGpMp7scpJmQ3g_HK4AG6KmULreL4MyBTxM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDc1/Njg5MjE0L3Bob3Rv/L2Rvc2EuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVgtY0hG/Yk1Ed1VIYkU2dEZX/elpFVGFUenVER1JE/OXJKSFBYMUpaMFc3/eVk9" },
  { name: "Gulab Jamun", img: "https://imgs.search.brave.com/6C0tKFjUeAfCUpDgtI7MzzC4JHqdzVbrt0rBxEqkyEw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQy/NDUwOTk3My9waG90/by9ndWxhYi1qYW11/bi1hbi1pbmRpYW4t/ZGVzc2VydC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9bk5Y/WUdJTVk3ejRiQnE2/c1JCbGdvSGJBSk41/cDc1R2hXMGhWWjh1/V2hBTT0" },
  { name: "Jalebi", img: "https://imgs.search.brave.com/oCyOPxjeNrMQ9ejkCDPloJYz1kzrG0W-1eQsuG4Yor0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/Mjk5ODEyNi9waG90/by9qYWxlYmkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPU16/SFZXcXd4WE43NlJB/ak04a3Z5TlBwdXFX/MTRhc0ZScFJIX0tU/VmNialk9" },
  { name: "Ice Cream", img: "https://imgs.search.brave.com/xnbeXfTXZBnDVYXVlL0cHDvbeGBY37JcJN9DcSsAm_A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzUxLzIzLzQx/LzM2MF9GXzE1MTIz/NDE1Nl8zcTJ2dzBs/cGlWVVJvaTNQaVlt/QmRlaEhVVmJGUVdw/Si5qcGc" },
  { name: "Chole Bhature", img: "https://imgs.search.brave.com/WROBhd8mqQiljNjdlK1pyu68skRxTiH0viUlGYZcBqA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzU4LzEzLzMz/LzM2MF9GXzk1ODEz/MzM5NV9CVk1yQUVN/MUxTc3NPdkNLMVgz/VWV1Sm1lUWluVlBO/eS5qcGc" },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="title">Welcome to VG Group of Hotels!</h1>
      <p className="subtitle">Enjoy the best Indian dishes 🍛</p>

      <div className="dish-grid">
        {dishes.map((dish, index) => (
          <div key={index} className="dish-card">
            <img src={dish.img} alt={dish.name} />
            <p>{dish.name}</p>
          </div>
        ))}
      </div>

      <button className="login-button" onClick={() => navigate("/login")}>
        Want to order food? Login now
      </button>
    </div>
  );
}

export default Home;
