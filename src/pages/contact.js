import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Contact</h1>
					<section>
						<header>
							<h2>Get in touch</h2>
						</header>
						<div className="content">
							<p><strong>Auctor commodo</strong> interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis.</p>
							<form method="POST" data-netlify="true">
								<div className="fields">
									<div className="field half">
										<input type="text" name="name" id="name" placeholder="Name" />
									</div>
									<div className="field half">
										<input type="email" name="email" id="email" placeholder="Email" />
									</div>
									<div className="field">
										<input type="file" name="myfile" id="myfile" placeholder="Upload File" rows="7" />
                  </div>
                  <div className="field">
										<textarea name="message" id="message" placeholder="Message" rows="7"></textarea>
                </div>
                <div className="field">
                  <div data-netlify-recaptcha="true"></div>
                </div>
								</div>
								<ul className="actions">
									<li><input type="submit" value="Send Message" className="button primary" /></li>
								</ul>
							</form>
						</div>
						<footer>
							<ul className="items">
								<li>
									<h3>Email</h3>
									<a href="google.com">information@untitled.ext</a>
								</li>
							</ul>
						</footer>
					</section>
  </Layout>
)

export default ContactPage;