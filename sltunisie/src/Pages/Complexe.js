import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTerrains } from "../JS/actions/terrain";

import "./Complexe.css";
const Complexe = () => {
  const dispatch = useDispatch();
  const owner = useSelector((state) => state.ownerReducer.owner);
  const listTerrains = useSelector((state) => state.terrainReducer.terrain);

  useEffect(() => {
    dispatch(getTerrains());
    console.log(getTerrains());
  }, []);

  return (
    <section className="sectionComplexe">
      <div>
        <div className="row py-5 px-4">
          <div className="col-xl-9 col-md-6 col-sm-10 mx-auto">
            {/* Profile widget */}
            <div className="bg-white shadow rounded overflow-hidden">
              <div className="px-4 pt-0 pb-4 bg-dark">
                <div className="media align-items-end profile-header">
                  <div className="profile mr-5">
                    <img
                      src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg"
                      alt="..."
                      width={130}
                      className="rounded mb-2 img-thumbnail"
                    />
                    <a href="#" className="btn btn-dark btn-sm btn-block">
                      Editer le profil
                    </a>
                  </div>
                  <div className="media-body mb-5 text-white">
                    <h1 className="mt-0 mb-0 text-uppercase">
                      {owner.identifiant}
                    </h1>
                    <p className="  mb-2 ">
                      <i className="fa fa-phone mr-2  " />
                      {owner.phone}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-light p-4 d-flex justify-content-end text-center">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <h5 className="font-weight-bold mb-0 d-block">
                      {owner.gov}
                    </h5>
                  </li>
                  <li className="list-inline-item">
                    <h5 className="font-weight-bold mb-0 d-block">
                      {owner.adress}
                    </h5>
                  </li>
                </ul>
              </div>
              <div className="py-4 px-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h5 className="mb-0">Recent photos</h5>
                  <a href="#" className="btn btn-link text-muted"></a>
                </div>
                <div className="row">
                  <div className="col-lg-6 mb-2 pr-lg-1">
                    <img
                      src="https://res.cloudinary.com/mhmd/image/upload/v1556294928/nicole-honeywill-546848-unsplash_ymprvp.jpg"
                      alt=""
                      className="img-fluid rounded shadow-sm"
                    />
                  </div>
                  <div className="col-lg-6 mb-2 pl-lg-1">
                    <img
                      src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/dose-juice-1184444-unsplash_bmbutn.jpg"
                      alt=""
                      className="img-fluid rounded shadow-sm"
                    />
                  </div>
                  <div className="col-lg-6 pr-lg-1 mb-2">
                    <img
                      src="https://res.cloudinary.com/mhmd/image/upload/v1556294926/cody-davis-253925-unsplash_hsetv7.jpg"
                      alt=""
                      className="img-fluid rounded shadow-sm"
                    />
                  </div>
                  <div className="col-lg-6 pl-lg-1">
                    <img
                      src="https://res.cloudinary.com/mhmd/image/upload/v1556294928/tim-foster-734470-unsplash_xqde00.jpg"
                      alt=""
                      className="img-fluid rounded shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* End profile widget */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Complexe;
