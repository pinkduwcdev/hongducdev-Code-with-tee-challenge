import Image from 'next/image';
import React from 'react'

const PaymentMethod = () => {
  return (
    <div className="border border-dashed border-[#D5D5D5] dark:border-[#4D4D4D] p-4 rounded-md flex items-center justify-between gap-6">
      <span className="font-medium text-base leading-[20px] max-w-[72px]">
        Payment Method
      </span>
      <div className="flex items-center gap-2">
        <Image
          src="/images/mastercard.png"
          width={32}
          height={32}
          alt="Mastercard"
        />
        <Image src="/images/visa.png" width={32} height={32} alt="Visa" />
        <Image
          src="/images/american_express.png"
          width={32}
          height={32}
          alt="American Express"
        />
        <Image
          src="/images/discover.png"
          width={32}
          height={32}
          alt="Discover"
        />
      </div>
    </div>
  );
}

export default PaymentMethod