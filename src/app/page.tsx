"use client";

export default function Home() {
  return (
    <>
      <div className="container">
        <section className="sticky">
          <div className="hand-container">
            <div className="hand">
              <img src="/photo.jpg" alt="portrait" />
            </div>
          </div>

          <div className="intro">
            <h1><span>time to</span> be modern</h1>
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id explicabo
                in assumenda impedit culpa perspiciatis vero ut porro quasi ab.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id explicabo
                in assumenda impedit culpa perspiciatis vero ut porro quasi ab.
              </p>
            </div>
          </div>

          <div className="website-content">
            <h1>LOGOTYPE</h1>
          </div>
        </section>

        <section className="about">
          <p>(Your next section goes here)</p>
        </section>
      </div>
    </>
  );
}
