document.body.innerHTML = `
  <div style="
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background: radial-gradient(circle, rgba(0,0,0,1) 10%, rgba(20,20,20,1) 100%);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Arial', sans-serif;
    text-align: center;
    z-index: 9999;
    padding: 20px;
  ">
    <a href="https://t.me/FSECintelES" target="_blank" style="text-decoration: none;">
      <h1 id="glitch-text" style="
        font-weight: bold;
        color: white;
        text-shadow: 2px 2px 5px grey, -2px -2px 5px black;
        margin-bottom: 20px;
      ">
        ÚNETE A FSEC INTEL ES!
      </h1>
    </a>
    <div style="
      width: 250px;
      height: 250px;
      overflow: hidden;
      border: 4px solid white;
      box-shadow: 0 0 20px rgba(255,255,255,0.2);
      margin-bottom: 20px;
    ">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/qU9mHegkTc4?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="border: none;"></iframe>
    </div>
    <p style="
      font-size: 1.8rem;
      color: white;
      text-shadow: 2px 2px 10px grey;
      margin-top: 20px;
    ">
      Ningún sistema es seguro.
    </p>
    <a href="https://x.com/entrerejas1312" target="_blank" style="
      text-decoration: none;
      color: white;
      margin-top: 20px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 2rem;
    ">
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png" alt="Twitter" style="width: 40px; height: 40px;">Sígueme en X
    </a>
  </div>
  <style>
    @media screen and (max-width: 768px) {
      #glitch-text { font-size: 2.5rem !important; }
      div iframe { width: 100% !important; height: 100% !important; }
      p { font-size: 1.3rem !important; }
    }
    @media screen and (max-width: 480px) {
      #glitch-text { font-size: 2rem !important; }
      div iframe { width: 100% !important; height: 100% !important; }
      p { font-size: 1.2rem !important; }
    }
  </style>
`;
