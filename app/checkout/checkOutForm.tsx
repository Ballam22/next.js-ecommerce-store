// app/checkout/checkOutForm.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  creditCard: string;
  expirationDate: string;
  securityCode: string;
};

export default function CheckOutForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    creditCard: '',
    expirationDate: '',
    securityCode: '',
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    for (const key in formData) {
      const value = formData[key as keyof FormData];
      if (typeof value === 'string' && value.trim() === '') {
        setError('Please fill in all fields.');
        return;
      }
    }

    // Clear the cart by setting its cookie to expire
    document.cookie = 'cart=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';

    // Dispatch the custom event to notify that the cart was updated
    window.dispatchEvent(new Event('cartUpdated'));

    // Navigate to the Thank You page
    router.push('/ThankYou');
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>
          First Name:
          <input
            name="firstName"
            data-test-id="checkout-first-name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Last Name:
          <input
            name="lastName"
            data-test-id="checkout-last-name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            name="email"
            data-test-id="checkout-email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Address:
          <input
            name="address"
            data-test-id="checkout-address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          City:
          <input
            name="city"
            data-test-id="checkout-city"
            value={formData.city}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Postal Code:
          <input
            name="postalCode"
            data-test-id="checkout-postal-code"
            value={formData.postalCode}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Country:
          <input
            name="country"
            data-test-id="checkout-country"
            value={formData.country}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Credit Card:
          <input
            name="creditCard"
            data-test-id="checkout-credit-card"
            value={formData.creditCard}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Expiration Date:
          <input
            name="expirationDate"
            data-test-id="checkout-expiration-date"
            placeholder="MM/YY"
            value={formData.expirationDate}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Security Code:
          <input
            name="securityCode"
            data-test-id="checkout-security-code"
            value={formData.securityCode}
            onChange={handleChange}
          />
        </label>
      </div>
      <button data-test-id="checkout-confirm-order">Confirm Order</button>
    </form>
  );
}
