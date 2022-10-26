import RedditPixel from "react-reddit-pixel";

import { forwardRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { industryList } from "constants";

import "react-toastify/dist/ReactToastify.css";
import "./SubmissionForm.scss";

const FirstName = ({ id, label, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register(id, { required })} placeholder="e.g. Jane" />
  </>
);

const LastName = ({ id, label, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register(id, { required })} placeholder="e.g. Smith" />
  </>
);

const Email = ({ id, label, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register(id, { required })} placeholder="e.g. jane@smith.com" />
  </>
);

const PhoneNumber = ({ id, label, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register(id, { required })} placeholder="e.g. 123-456-7890" />
  </>
);

const LegalBusinessName = ({ id, label, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register(id, { required })} placeholder="e.g. Jane Smith" />
  </>
);

const NumberOfW2 = ({ id, label, register, required }) => (
  <>
    <label>{label}</label>
    <input
      {...register(id, { required })}
      placeholder="e.g. 23 (greater than 4)"
    />
  </>
);

const Industry = forwardRef(({ onChange, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange}>
      <option value=""> Please Select </option>
      {industryList.map((item, index) => {
        return (
          <option key={`industry_${index}`} value={item.value}>
            {item.value}
          </option>
        );
      })}
    </select>
  </>
));

const SubmissionForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    const options = {
      debug: false, // set true to enable logs
    };
    RedditPixel.init("t2_a1hrv4wf", options);
    RedditPixel.pageVisit();
  });

  const onSubmit = async (data) => {
    if (data.numberOfW2 < 5) {
      toast.error("Please input the number greater than 4.");
      return;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/api/users/register", data, config);

  
    if (res.data.result === 0)
      toast.error("Your info has been already submitted.");
    else if (res.data.result === 1) {
      toast.info("Your information has been successfully submitted.");
      window.lintrk("track", { conversion_id: 10102970 });
      RedditPixel.track("SignUp");

      window.dataLayer.push({
        event: "event",
        eventProps: {
          label: "SignUp",
        },
      });

      window.gtag("event", "conversion", {
        send_to: "AW-10996870408/gsz5CPXUpYAYEIja2_so",
      });

      window.open("https://calendly.com/bls-erc/ercintro?utm_medium=99460");
    }
  };

  return (
    <div id="submissionForm" className="submission-form">
      <div className="overlay" />
      <div className="relative bg-white max-w-6xl mx-auto">
        <div className="px-12 py-10 max-w-[586px] w-full mx-auto">
          <h2 className="text-[32px] text-[#333333] font-bold">
            ERC Submission Form
          </h2>
          <h5 className="text-[#57647E] font-medium">
            Please fill out this form. After you submit your information, make
            an appointment with one of our trusted ERC advisors on the calendar
            that will appear.
          </h5>
          <form
            className="max-w-[600px] mx-0 my-auto mt-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <div className="mb-2">
                <FirstName
                  id="firstName"
                  label="First Name *"
                  register={register}
                  required
                />
                {errors.firstName?.type === "required" && (
                  <p role="alert">First name is required</p>
                )}
              </div>
              <div className="mb-2">
                <LastName
                  id="lastName"
                  label="Last Name *"
                  register={register}
                  required
                />
                {errors.lastName?.type === "required" && (
                  <p role="alert">Last name is required</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <div className="mb-2">
                <Email
                  id="email"
                  label="Email *"
                  register={register}
                  required
                />
                {errors.email?.type === "required" && (
                  <p role="alert">Email is required</p>
                )}
              </div>
              <div className="mb-2">
                <PhoneNumber
                  id="phoneNumber"
                  label="Phone Number *"
                  register={register}
                  required
                />
                {errors.phoneNumber?.type === "required" && (
                  <p role="alert">Phone number is required</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <div className="mb-2">
                <LegalBusinessName
                  id="legalBusinessName"
                  label="Legal Business Name *"
                  register={register}
                  required
                />
                {errors.legalBusinessName?.type === "required" && (
                  <p role="alert">Legal business name is required</p>
                )}
              </div>
              <div className="mb-2">
                <NumberOfW2
                  id="numberOfW2"
                  label="Number of W-2 Employees *"
                  register={register}
                  required
                />
                {errors.numberOfW2?.type === "required" && (
                  <p role="alert">Number of W-2 employees is required</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <div className="mb-2">
                <Industry label="Industry *" {...register("industry")} />
              </div>
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmissionForm;
