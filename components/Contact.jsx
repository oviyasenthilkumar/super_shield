"use client";
import { useEffect, useState } from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Country, State } from "country-state-city";

export default function Contact() {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    phone: "",
    country: "",
    countryCode: "+1",
    countryISO: "US",
    city: "",
    state: "",
    customerCategory: "",
    subject: "",
    message: "",
    agreeTerms: false,
  });

  const titles = ["Mr.", "Ms.", "Mrs."];

  const customerCategories = [
    { label: "Applicator", value: "Applicator", icon: "/icons/applicator.svg" },
    { label: "Architect", value: "Architect", icon: "/icons/architect.svg" },
    {
      label: "Building Envelope Consultant",
      value: "BuildingEnvConsultant",
      icon: "/icons/consultant.svg",
    },
    {
      label: "Concrete Contractor",
      value: "ConcreteContractor",
      icon: "/icons/concrete.svg",
    },
    {
      label: "Construction Supplier",
      value: "ConstructionSupplier",
      icon: "/icons/supplier.svg",
    },
    { label: "Engineer", value: "Engineer", icon: "/icons/engineer.svg" },
    {
      label: "General Contractor",
      value: "GeneralContractor",
      icon: "/icons/general-contractor.svg",
    },
    {
      label: "Homeowner/Resident",
      value: "HomeownerResident",
      icon: "/icons/homeowner.svg",
    },
    { label: "Media", value: "Media", icon: "/icons/media.svg" },
    {
      label: "Owner/Developer",
      value: "OwnerDeveloper",
      icon: "/icons/developer.svg",
    },
    { label: "Precast", value: "Precast", icon: "/icons/precast.svg" },
    { label: "Ready-Mix", value: "ReadyMix", icon: "/icons/readymix.svg" },
    { label: "Other", value: "Other", icon: "/icons/other.svg" },
  ];

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);
  }, []);

  useEffect(() => {
    if (formData.country) {
      const statesList = State.getStatesOfCountry(formData.country);
      setStates(statesList);
    } else {
      setStates([]);
    }
  }, [formData.country]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phoneNumber = parsePhoneNumberFromString(
      formData.phone,
      formData.countryISO
    );
    if (!phoneNumber || !phoneNumber.isValid()) {
      alert("Please enter a valid phone number.");
      return;
    }

    try {
      const res = await fetch(
        "http://my-wp-site.local/wp-json/custom/v1/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await res.json();
      if (result.success) {
        alert("Contact form submitted successfully!");

        // ✅ Reset form
        setFormData({
          title: "",
          firstName: "",
          lastName: "",
          email: "",
          companyName: "",
          phone: "",
          country: "",
          countryCode: "+1",
          countryISO: "US",
          city: "",
          state: "",
          customerCategory: "",
          subject: "",
          message: "",
          agreeTerms: false,
          form_name: "Contact Form",
        });
      } else {
        alert("Submission failed.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-center poppins leading-10">
        Get in touch with us!
      </h1>
      <p className="open-sans leading-8 text-sm md:text-base  md:text-center text-justify">
        Fill out our contact form to get in touch with us about a product
        inquiry, sign up to be a distributor, or find a SUPERSHIELD distributor
        in your area or country. Our team is ready to address your inquiries and
        provide the support you need.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input type="hidden" name="form_name" value="Contact Form" />

            <label className="poppins block mb-2">Select title</label>
            <select
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border px-4 pr-10 py-3 rounded-md appearance-none bg-[url('/down-arrow.png')] bg-no-repeat bg-right bg-[length:2rem_2rem]"
              required
            >
              <option value="">Select title</option>
              {titles.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block poppins mb-2">
              First name <span className="text-[#c50022]">*</span>
            </label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-md"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block poppins mb-2">
              Last name <span className="text-[#c50022]">*</span>
            </label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block poppins mb-2">
              Company name <span className="text-[#c50022]">*</span>
            </label>
            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-md"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block poppins mb-2">
              Email <span className="text-[#c50022]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block poppins mb-2">
              Phone <span className="text-[#c50022]">*</span>
            </label>
            <PhoneInput
              country={formData.countryISO.toLowerCase()}
              value={formData.phone}
              onChange={(phone, countryData) =>
                setFormData((prev) => ({
                  ...prev,
                  phone,
                  countryCode: `+${countryData.dialCode}`,
                  countryISO: countryData.countryCode.toUpperCase(),
                }))
              }
              inputClass="!w-full !py-6 !px-4 !border !border-gray-300 !rounded-md !pl-12"
              buttonClass="!bg-gray-100"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block poppins mb-2">
              City <span className="text-[#c50022]">*</span>
            </label>
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block poppins mb-2">
              Select Customer Category
              <span className="text-[#c50022]"> * </span>
            </label>
            <select
              name="customerCategory"
              value={formData.customerCategory}
              onChange={handleChange}
              className="w-full border px-4 pr-10 py-3 rounded-md appearance-none bg-[url('/down-arrow.png')] bg-no-repeat bg-right bg-[length:2rem_2rem]"
              required
            >
              <option value="">Select Customer Category</option>
              {customerCategories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block poppins mb-2">Select Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={(e) => {
                const selectedCode = e.target.value;
                setFormData((prev) => ({
                  ...prev,
                  country: selectedCode,
                }));
              }}
              className="w-full border px-4 pr-10 py-3 rounded-md appearance-none bg-[url('/down-arrow.png')] bg-no-repeat bg-right bg-[length:2rem_2rem]"
            >
              <option value="">Select Country</option>
              {countries.map((c) => (
                <option key={c.name + c.isoCode} value={c.isoCode}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block poppins mb-2">Select State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full border px-4 pr-10 py-3 rounded-md appearance-none bg-[url('/down-arrow.png')] bg-no-repeat bg-right bg-[length:2rem_2rem]"
            >
              <option value="">Select State</option>
              {states.map((s) => (
                <option key={s.name + s.isoCode} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block poppins mb-2">
            Your Subject <span className="text-[#c50022]"> * </span>
          </label>
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block poppins mb-2">Your message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full border px-4 py-3 rounded-md"
          />
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            required
          />
          <label className="poppins text-sm">
            By checking this option, you agree to accept the{" "}
            <a href="/terms" className="text-[#c50022] underline">
              Terms and Conditions
            </a>
            .
          </label>
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="open-sans font-semibold border border-[#B41424] bg-[#B41424] text-white px-6 py-3 text-sm md:text-base hover:bg-white hover:text-[#B41424] transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
      {/* Contact Information Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 poppins">
              Contact us for more information.
            </h2>
            <a
              href="mailto:contact@supershieldglobal.com"
              className="text-[#b51724] hover:underline font-medium open-sans"
            >
              contact@supershieldglobal.com
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {/* Asia */}
            <div className="text-left bg-[#f7f7f7] p-10">
              <h3 className="text-xl font-bold text-[#b51724] mb-4 poppins">
                Asia
              </h3>
              <div className="space-y-2 text-sm md:text-base  text-gray-700 open-sans">
                <p>77 Guan Chuan Road</p>
                <p>Riau Islands - 448508</p>
                <p>ASIA</p>
                <p className="mt-4 flex ">
                  <img
                    src="phone.png"
                    alt="call"
                    className="w-5 h-5 mr-3 mt-1"
                  />{" "}
                  +91 9894707171, <br /> +91 9566908909
                </p>
              </div>
            </div>

            {/* USA */}
            <div className="text-left bg-[#f7f7f7] p-10">
              <h3 className="text-xl font-bold text-[#b51724] mb-4 poppins">
                USA
              </h3>
              <div className="space-y-2 text-sm md:text-base  text-gray-700 open-sans">
                <p>Supershield LLC - 29450</p>
                <p>Huntersville - 518 710</p>
                <p>Austin, TX 78745, USA</p>
                <p className="mt-4 flex">
                  <img
                    src="phone.png"
                    alt="call"
                    className="w-5 h-5 mr-3 mt-1"
                  />{" "}
                  +1 (949) 273-8114
                </p>
              </div>
            </div>

            {/* Middle East */}
            <div className="text-left bg-[#f7f7f7] p-10">
              <h3 className="text-xl font-bold text-[#b51724] poppins mb-4">
                Middle East
              </h3>
              <div className="space-y-2 text-sm md:text-base  text-gray-700 open-sans">
                <p>Supershield Est - 1st Floor</p>
                <p>Hamriya Free Zone</p>
                <p>Sharjah - United Arab Emirates</p>
                <p className="mt-4 flex">
                  <img
                    src="phone.png"
                    alt="call"
                    className="w-5 h-5 mr-3 mt-1"
                  />{" "}
                  +971 554741527
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
