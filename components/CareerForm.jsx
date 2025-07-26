"use client";
import PhoneInput from "react-phone-input-2";

import { useState } from "react";

export default function CareerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
    info: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();

    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("phone", formData.phone);
    formDataObj.append("position", formData.position);
    formDataObj.append("info", formData.info);
    formDataObj.append("agree", formData.agree ? "Yes" : "No");
    formDataObj.append("form_name", "Career Form");

    if (formData.resume) {
      formDataObj.append("resume", formData.resume);
    }

    try {
      const res = await fetch(
        "http://my-wp-site.local/wp-json/custom/v1/career",
        {
          method: "POST",
          body: formDataObj,
        }
      );

      const text = await res.text();
      let result;

      try {
        result = JSON.parse(text);
      } catch (e) {
        console.error("Invalid JSON response:", text);
        alert("Server error. Check backend or logs.");
        return;
      }

      if (result.success) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          resume: null,
          info: "",
          agree: false,
        });

        // Clear file input
        document.querySelector('input[name="resume"]').value = "";

        // Clear PhoneInput visually (not just value)
        setTimeout(() => {
          const phoneInput = document.querySelector(".react-tel-input input");
          if (phoneInput) phoneInput.value = "";
        }, 0);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold poppins mb-4">
          Let's Grow Together
        </h2>
        <p className="text-gray-700 open-sans mb-10 text-justify md:text-center">
          We are looking for people with the motivation to work and we invest in
          your development. We challenge you to perform to the best of your
          ability and to seize every opportunity to be the best that you can be.
          To explore the many opportunities we have for an exciting and diverse
          career, get in touch with us by filling out the form below.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-sm border p-6 md:p-10 max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="hidden" name="form_name" value="Career Form" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />

          <div className="w-full">
            <PhoneInput
              country={"us"}
              value={formData.phone}
              onChange={handlePhoneChange}
              inputClass="!w-full !py-2 !px-4 !pl-12 !text-sm"
              containerClass="!w-full"
              inputStyle={{
                borderRadius: "0.375rem",
                border: "1px solid #d1d5db",
                width: "100%",
              }}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Your Email id"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />

          <input
            type="text"
            name="position"
            placeholder="Your Role"
            value={formData.position}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Upload your Resume*
            </label>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <textarea
            name="info"
            value={formData.info}
            onChange={handleChange}
            rows={4}
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        <div className="mt-6 flex items-start">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mr-2 mt-1 accent-[#c50022]"
          />
          <p className="text-sm text-gray-700">
            By checking this option, you agree to accept the{" "}
            <a href="#" className="font-semibold text-[#c50022] underline">
              Terms and Conditions
            </a>
            .
          </p>
        </div>

        <div className="mt-6 text-right">
          <button
            type="submit"
            className="bg-[#c50022] text-white px-6 py-2 rounded hover:bg-[#b51724] transition flex items-center gap-2 poppins"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
