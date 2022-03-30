import React from "react";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
          <div className="feature-block-v7 feature-block">
            <div className="feature-icon text-brand bg-brand-light mb-5">
              <i className="fas fa-paint-roller"></i>
            </div>
            <div className="feature-content">
              <h2>Explore, create and share crypto analytics</h2>
              <p className="lead">
                Create your own custom charts and dashboards using plain SQL.{" "}
              </p>
              <hr className="m-t-30 m-b-30" />
              <p>
                Free crypto analytics by and for the community 💫📊 Create +
                find + fork 1000s of dashboards🔍🍴 🧙 Wizards 👉
                http://discord.gg/ErrzwBz 👋 http://dune.xyz/careers
              </p>
              <a
                href="https://dune.xyz/home"
                className="btn btn-rounded btn-outline-primary"
              >
                Get the app
              </a>
            </div>
          </div>
        </div>
        <div className="offset-xl-1 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="feature-app-img">
            <img
              src="https://dune.xyz/assets/poster-1440w.png"
              className="img-fluid"
              alt="XYZ"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center mt-4">
          <Form />
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center mt-4">
          Created by{" "}
          <a href="https://gladino.net/" className="text-primary">
            Akash
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
