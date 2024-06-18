import type React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'


const Testimonial: React.FC = () => (
  <>
    <Header />
    <>
      {/* Single Page Header start */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Testimonial</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="/index.html#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">Testimonial</li>
        </ol>
      </div>
      {/* Single Page Header End */}
    </>
    <Footer />
  </>
)


export default Testimonial
