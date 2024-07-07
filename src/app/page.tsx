import CardExpiration from "@/components/card-expiration";
import Input from "@/components/input";
import InputLabel from "@/components/input-label";
import PaymentMethod from "@/components/payment-method";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center gap-10 w-full min-h-screen p-10">
      <div className="max-w-[328px] w-full p-6 rounded-xl border border-[#B8B8B8] dark:border-[#4C4C4C] bg-white dark:bg-black">
        <PaymentMethod />
        <h2 className="font-semibold text-lg leading-[24px] mt-8">
          Credit Card Details
        </h2>
        <div className="mt-6 flex flex-col gap-4">
          <InputLabel label="Name on card" placeholder="Meet Patel" />
          <InputLabel label="Card number" placeholder="0000 0000 0000 0000" />
          <CardExpiration />
          <InputLabel
            label="Card Security Code"
            placeholder="Code"
            type="question"
          />
        </div>
        <h2 className="font-semibold text-lg leading-[24px] mt-8">
          Billing address
        </h2>
        <div className="mt-6 flex flex-col gap-4">
          <InputLabel label="Country" placeholder="Country" />
          <InputLabel label="Address" placeholder="Address" />
          <InputLabel label="City" placeholder="City" />
          <InputLabel label="State" placeholder="State" />
          <InputLabel label="ZIP CODE" placeholder="ZIP CODE" />
        </div>
        <h2 className="font-semibold text-lg leading-[24px] mt-8">
          Contact information
        </h2>
        <div className="mt-6 flex flex-col gap-4">
          <InputLabel label="Email" placeholder="Email" />
          <InputLabel label="Phone" placeholder="Phone" />
        </div>
        <div className="mt-8">
          <button className="rounded-[4px] p-[14px] bg-black dark:bg-white text-white dark:text-black text-[16px] w-full">
            Pay
          </button>
        </div>
      </div>
      <div className="max-w-[328px] w-full p-6 rounded-xl border border-[#B8B8B8] dark:border-[#4C4C4C] bg-white dark:bg-black">
        <h2 className="font-semibold text-lg leading-[24px] text-center">
          Credit Card Details
        </h2>
        <div className="mt-10">
          <PaymentMethod />
        </div>
        <div className="mt-6 flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className="dark:text-white font-medium text-base leading-[20px]"
            >
              Name on card
            </label>
            <Input placeholder="Meet Patel" />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className="dark:text-white font-medium text-base leading-[20px]"
            >
              Card number
            </label>
            <Input placeholder="0000 0000 0000 0000" />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className="dark:text-white font-medium text-base leading-[20px]"
            >
              Card expiration
            </label>
            <div className="flex items-center gap-2">
              <Input placeholder="Month" type="select" />
              <Input placeholder="Year" type="select" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className="dark:text-white font-medium text-base leading-[20px]"
            >
              Card Security Code
            </label>
            <Input placeholder="Code" type="question" />
          </div>
        </div>
        <div className="mt-8">
          <button className="rounded-[4px] p-[14px] bg-black dark:bg-white text-white dark:text-black text-[16px] w-full">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
