

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <form
      name="contact"
      method="POST"
      action="/contacted"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <label>
        Name
        <input type="text" name="name" required />
      </label>
      <label>
        Email
        <input type="email" name="email" required />
      </label>
      <label>
        Phone
        <input type="tel" name="phone" />
      </label>
      <label>
        Message
        <textarea name="message" required />
      </label>
      <button type="submit">Send</button>
    </form>
  </Layout>
)

export default ContactPage
