import React from "react";

const Slider = () => {
  return (
    <>
      <section className="work section" id="work">
        <h2 className="section-title work__head">Portfolio</h2>
        <div
          id="carouselExampleIndicators"
          class="carousel slide carosel__a"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active work__bg"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              className="work__bg"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            {/* <button
              type="button"
              className="work__bg"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              className="work__bg"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button> */}
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="container work__section">
                <div className="row gx-5">
                  <div className="col-md-6 work__size">
                    <div className="work__im">
                      <img src="/img/food-order.jpg" />
                    </div>
                  </div>
                  <div className="col-md-6 mt-md-0 mt-4 d-flex align-items-center">
                    <div>
                      <h2 className="work__subtitle">Food Order</h2>
                      <p>
                      Online ordering systems allow restaurants and food businesses to serve their customers through a website.
                      </p>
                      <div className="work__a mt-2 d-flex align-items-center">
                        <a
                          href="https://food-order-697ce.web.app/"
                          className="text-white"
                        >
                          Demo
                        </a>
                        <i class="bx bx-chevrons-right ms-2 text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item ">
              <div className="container work__section">
                <div className="row gx-5">
                  <div className="col-md-6 work__size">
                    <div className="work__im">
                      <img src="/img/expense3.jpg" />
                    </div>
                  </div>
                  <div className="col-md-6 mt-md-0 mt-4 d-flex align-items-center">
                    <div>
                      <h2 className="work__subtitle">Expense Tracker</h2>
                      <p>
                      An expense tracker is an software that helps to keep an accurate record of your money inflow and outflow.
                      </p>
                      <div className="work__a mt-2 d-flex align-items-center">
                        <a
                          href="https://expense-tracker-bice.vercel.app/"
                          className="text-white"
                        >
                          Demo
                        </a>
                        <i class="bx bx-chevrons-right ms-2 text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="carousel-item ">
              <div className="container work__section">
                <div className="row gx-5">
                  <div className="col-md-6 work__size">
                    <div className="work__im">
                      <img src="/img/photo-4.jpg" />
                    </div>
                  </div>
                  <div className="col-md-6 mt-md-0 mt-4 d-flex align-items-center">
                    <div>
                      <h2 className="work__subtitle">
                        Bank Search Application
                      </h2>
                      <p>
                        In this App, users can search the banks by selecting the
                        city from the drop-down menu and filtering the list of
                        banks.
                      </p>
                      <div className="work__a mt-2 d-flex align-items-center">
                        <a
                          href="https://bank-search-application-9790.herokuapp.com/"
                          className="text-white"
                        >
                          Demo
                        </a>
                        <i class="bx bx-chevrons-right ms-2 text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div class="carousel-item ">
              <div className="container work__section">
                <div className="row gx-5">
                  <div className="col-md-6 work__size">
                    <div className="work__im">
                      <img src="/img/tt.jpg" />
                    </div>
                  </div>
                  <div className="col-md-6 mt-md-0 mt-4 d-flex align-items-center">
                    <div>
                      <h2 className="work__subtitle">Trip App</h2>
                      <p>
                        Trip-App is a simple app where users can organize their
                        trips with a very easy-to-use interface.
                      </p>
                      <div className="work__a mt-2 d-flex align-items-center">
                        <a
                          href="http://trip-9790.herokuapp.com/"
                          className="text-white"
                        >
                          Demo
                        </a>
                        <i class="bx bx-chevrons-right ms-2 text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <i class="bx bx-chevron-left work__icon" aria-hidden="true"></i>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <i class="bx bx-chevron-right work__icon-1" aria-hidden="true"></i>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Slider;
