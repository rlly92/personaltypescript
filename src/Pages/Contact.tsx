import React, { useState } from "react";
import { ContactFormData } from "../Types/CustomTypes";
import { generateClient } from "aws-amplify/api";
import { createContactFormData } from "../mutations";

const client = generateClient();

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Validate input for phoneNumber
    if (name === "phoneNumber" && !/^[+\d]*$/.test(value)) {
      return; // Do not update state for invalid input
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can also add form validation or other logic here: submit to AWS Backend:

    const newContactFormData = async () =>
      await client.graphql({
        query: createContactFormData,
        variables: {
          input: {
            name: "Lorem ipsum dolor sit amet",
            email: "Lorem ipsum dolor sit amet",
            phoneNumber: "Lorem ipsum dolor sit amet",
            message: "Lorem ipsum dolor sit amet",
          },
        },
      });
    newContactFormData();
  };

  return (
    <div>
      <h1>PLEASE HESITATE TO REACH OUT TO ME</h1>

      <h5>Fill in this form and I will get back to you in a jiffy!</h5>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            pattern="[+\d]*"
            required
          />
        </label>
        <br />

        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
