import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
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
      <option value="Accounting Firm"> Accounting Firm </option>
      <option value="Agriculture"> Agriculture </option>
      <option value="Advertising Agency"> Advertising Agency </option>
      <option value="Aerospace &amp; Defense"> Aerospace &amp; Defense </option>
      <option value="Apparel"> Apparel </option>
      <option value="Architecture Firm"> Architecture Firm </option>
      <option value="Automotive"> Automotive </option>
      <option value="Aviation"> Aviation </option>
      <option value="Bank"> Bank </option>
      <option value="Bars/Nightclubs"> Bars/Nightclubs </option>
      <option value="Beauty/Cosmetics"> Beauty/Cosmetics </option>
      <option value="Business Consulting"> Business Consulting </option>
      <option value="Cannabis"> Cannabis </option>
      <option value="Casino"> Casino </option>
      <option value="Computer Software"> Computer Software </option>
      <option value="Construction"> Construction </option>
      <option value="Country Club"> Country Club </option>
      <option value="Doctor's Office"> Doctor's Office </option>
      <option value="E-Commerce"> E-Commerce </option>
      <option value="Education"> Education </option>
      <option value="Electronics"> Electronics </option>
      <option value="Employee Benefits"> Employee Benefits </option>
      <option value="Energy"> Energy </option>
      <option value="Entertainment"> Entertainment </option>
      <option value="Financial Services"> Financial Services </option>
      <option value="Fitness"> Fitness </option>
      <option value="Food &amp; Beverage"> Food &amp; Beverage </option>
      <option value="Gas Stations"> Gas Stations </option>
      <option value="Healthcare"> Healthcare </option>
      <option value="Hospitals"> Hospitals </option>
      <option value="Hotel Group"> Hotel Group </option>
      <option value="Industrial"> Industrial </option>
      <option value="Insurance Broker"> Insurance Broker </option>
      <option value="Insurance Company"> Insurance Company </option>
      <option value="Investment Firm"> Investment Firm </option>
      <option value="Law Firm"> Law Firm </option>
      <option value="Maintenance"> Maintenance </option>
      <option value="Manufacturer"> Manufacturer </option>
      <option value="Marketing Firm"> Marketing Firm </option>
      <option value="Media"> Media </option>
      <option value="Medical Equipment"> Medical Equipment </option>
      <option value="Merchant Services"> Merchant Services </option>
      <option value="Moving/Storage"> Moving/Storage </option>
      <option value="Municipality"> Municipality </option>
      <option value="Non-Profit"> Non-Profit </option>
      <option value="Nursing Home"> Nursing Home </option>
      <option value="Office Supplies"> Office Supplies </option>
      <option value="Packaging"> Packaging </option>
      <option value="Parking Garage"> Parking Garage </option>
      <option value="Payroll"> Payroll </option>
      <option value="Pet Care"> Pet Care </option>
      <option value="Pharmaceutical"> Pharmaceutical </option>
      <option value="Press"> Press </option>
      <option value="Private Equity"> Private Equity </option>
      <option value="Property Management"> Property Management </option>
      <option value="Public Relations"> Public Relations </option>
      <option value="Publishing"> Publishing </option>
      <option value="Real Estate"> Real Estate </option>
      <option value="Recruiting/Staffing"> Recruiting/Staffing </option>
      <option value="Religious"> Religious </option>
      <option value="Restaurant Group"> Restaurant Group </option>
      <option value="Retail"> Retail </option>
      <option value="Risk Management"> Risk Management </option>
      <option value="Security"> Security </option>
      <option value="Spa"> Spa </option>
      <option value="Sports"> Sports </option>
      <option value="Supermarket"> Supermarket </option>
      <option value="Technology Company"> Technology Company </option>
      <option value="Telecommunications"> Telecommunications </option>
      <option value="Title Insurance"> Title Insurance </option>
      <option value="Transportation"> Transportation </option>
      <option value="Union"> Union </option>
      <option value="University"> University </option>
      <option value="Waste Management"> Waste Management </option>
      <option value="Wholesaler"> Wholesaler </option>
    </select>
  </>
));

const SubmissionForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    // window.location.href =
    //   "https://bottomlinesavings.referralrock.com/l/MICHAELKORN/";

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
      toast.info("Your info has been successfully submitted.");
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
            Please fill out this form and one of our ERC specialists will
            contact you.
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
