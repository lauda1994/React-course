import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="bg-light py-3 mb-5">
          <div className="container">
            <h1 className="text-center text-dark">E-Commerce</h1>
          </div>
        </div>

        <div className="container text-center">
          <div className="row row-cols-3 mb-5">
            <div className="col-4 d-flex justify-content-center">
              <div className="card custom-card" style={{ width: "18rem" }}>
                <img
                  src="https://image.api.playstation.com/cdn/EP0700/CUSA03365_00/OFMeAw2KhrdaEZAjW1f3tCIXbogkLpTC.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Dark Souls 3</h5>
                  <p className="card-text" style={{ fontSize: "14px" }}>
                    "In the Kingdom of Lothric, the Unkindled rises to challenge
                    the Lords of Cinder. A journey through desolate lands
                    unfolds, where choices shape the fate of a dying world."
                  </p>
                  <a
                    href="https://www.amazon.it/Dark-Souls-III-PlayStation-4/dp/B019RRH2B6/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3L9MIZ2BTU2A1&keywords=dark+souls+3&qid=1688114341&sprefix=dark+souls+3%2Caps%2C88&sr=8-1"
                    className="btn btn-primary"
                  >
                    Buy
                  </a>
                </div>
              </div>
            </div>
            <div class="col-4 d-flex justify-content-center">
              <div className="card custom-card" style={{ width: "18rem" }}>
                <img
                  src="https://static.posters.cz/image/750/poster/metal-gear-solid-v-the-phantom-pain-cover-i26603.jpg"
                  className="card-img-top"
                  alt="..."
                  style={{ width: "18rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Metal Gear Solid V: The Phantom Pain"
                  </h5>
                  <p className="card-text " style={{ fontSize: "14px" }}>
                    " Venom Snake, a soldier seeking revenge, while navigating
                    moral dilemmas and questioning his own existence."
                  </p>
                  <a
                    href="https://www.amazon.it/Metal-Gear-Solid-Definitive-PlayStation/dp/B01LRC0QB2/ref=sr_1_17?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2HX1EH6KKD6P2&keywords=metal+gear+solid+5&qid=1688116089&sprefix=metal+gear+solid+5+%2Caps%2C178&sr=8-17"
                    className="btn btn-primary "
                  >
                    Buy
                  </a>
                </div>
              </div>
            </div>
            <div class="col-4 d-flex justify-content-center">
              <div className="card custom-card" style={{ width: "18rem" }}>
                <img
                  src="https://m.media-amazon.com/images/M/MV5BYTI1MTk3ODctODFmOS00ZGYwLThlYWQtYWE2ZDc1OTVkMTM4XkEyXkFqcGdeQXVyMTI0MzA4NTgw._V1_FMjpg_UX1000_.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Devil May Cry 5</h5>
                  <p className="card-text " style={{ fontSize: "14px" }}>
                    "Follow the demon hunters Dante, Nero, and V fighting to
                    save the world from Urizen, a powerful demon threatening
                    humanity's existence."
                  </p>
                  <a
                    href="https://www.amazon.it/CE-EUROPE-LTD-CAPCOM-Devil/dp/B07DX42FRD/ref=sr_1_4?keywords=Devil+May+Cry+5&qid=1688126878&sr=8-4"
                    className="btn btn-primary"
                  > Buy</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-3">
            <div class="col-4 d-flex justify-content-center">
              <div className="card custom-card" style={{ width: "18rem" }}>
                <img
                  src="https://cdn.mobygames.com/covers/11257400-crash-bandicoot-4-its-about-time-playstation-4-front-cover.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Devil May Cry 5</h5>
                  <p className="card-text" style={{ fontSize: "14px" }}>
                    "UmpaLumpaUmpaLumpaUmpaLumpaUmpaLumpaUmpaLumpaUmpaLumpaUmpaLumpa"
                  </p>
                  <a
                    href="https://www.amazon.it/Crash-Bandicoot-About-Time-PlayStation/dp/B08BPTKHJH"
                    className="btn btn-primary"
                  >
                    Buy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
