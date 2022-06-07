import React from 'react'

const Home8 = () => {
  return (
   <>
   <section id="blogs-area" className="blogs-area section-padding-lg bg-white">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12 offset-0">
          <div className="section-title text-center">
            <h6>Latest Blogs</h6>
            <h2>Positive mind positive life</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
              form, by injected humour</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">

        {/* <!-- Single Blog --> */}
        <div className="col-lg-4 col-md-6 wow fadeInUp">
          <article className="blog">
            <div className="blog-thumb">
              <a href="blog-details.html">
                <img src="/blog/layout-1/blog-thumbnail-1.jpg" alt="blog thumb"/>
              </a>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span>26 Nov 2022</span>
                <span>By
                  <a href="blog-fullwidth.html">Momen</a>
                </span>
              </div>
              <h5>
                <a href="blog-details.html">A conversation about challenge</a>
              </h5>
              <p>long established fact that a reader will be distracted by the readable content</p>
              <a href="blog-details.html" className="cr-readmore">Read More</a>
            </div>
          </article>
        </div>
        {/* <!--// Single Blog -->

        <!-- Single Blog --> */}
        <div className="col-lg-4 col-md-6 wow fadeInUp">
          <article className="blog">
            <div className="blog-thumb">
              <a href="blog-details.html">
                <img src="/blog/layout-1/blog-thumbnail-2.jpg" alt="blog thumb"/>
              </a>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span>21 Aug 2022</span>
                <span>By
                  <a href="blog-fullwidth.html">Admin</a>
                </span>
              </div>
              <h5>
                <a href="blog-details.html">Some patience for the modern marketer</a>
              </h5>
              <p>long established fact that a reader will be distracted by the readable content</p>
              <a href="blog-details.html" className="cr-readmore">Read More</a>
            </div>
          </article>
        </div>
        {/* <!--// Single Blog -->

        <!-- Single Blog --> */}
        <div className="col-lg-4 col-md-6 wow fadeInUp">
          <article className="blog">
            <div className="blog-thumb">
              <a href="blog-details.html">
                <img src="/blog/layout-1/blog-thumbnail-3.jpg" alt="blog thumb"/>
              </a>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span>13 Oct 2022</span>
                <span>By
                  <a href="blog-fullwidth.html">Maksud</a>
                </span>
              </div>
              <h5>
                <a href="blog-details.html">We dont meeting people by accident</a>
              </h5>
              <p>long established fact that a reader will be distracted by the readable content</p>
              <a href="blog-details.html" className="cr-readmore">Read More</a>
            </div>
          </article>
        </div>
        {/* <!--// Single Blog --> */}

      </div>
    </div>
  </section>
   </>
  )
}

export default Home8