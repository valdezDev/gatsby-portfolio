import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"

const Success = props => (
  <Layout>
    <Helmet>
      <title>Success! Thank You.</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <div id="main" className="success">
      <section id="one">
        <div className="success__inner">
          <header className="success__major">
            <h1 className="success__major" color="red">
              Success! 📫😇
            </h1>
          </header>
          <p className="text-center success__small">
            Thank you for taking the time to reach out!
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Success
