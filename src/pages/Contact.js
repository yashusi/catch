import React from 'react'
import React, { useState, useEffect } from 'react';
import request from 'request';
import cheerio from 'cheerio';

export default function Contact() {
  const [address, setAddress] = useState('');
  const [contactForm, setContactForm] = useState('');

  useEffect(() => {
    const url = 'https://www.catch-inc.com/contact';

    request(url, (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        const address = $('div.contact-address').text().trim();
        const contactForm = $('form.contact-form').html();

        setAddress(address);
        setContactForm(contactForm);
      }
    });
  }, []);

  return (
    <div>
      <h2>Contact</h2>
      <div>{address}</div>
      <div dangerouslySetInnerHTML={{ __html: contactForm }} />
    </div>
  );
}
