"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const styles = {
  container: {
    maxWidth: "600px",
    margin: "2rem auto",
    padding: "2rem",
    backgroundColor: "#1e1e1e",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    color: "#fff",
  },
  header: {
    fontSize: "2.5rem",
    textAlign: "center" as const,
    marginBottom: "1.5rem",
  },
  error: {
    color: "#ff4500",
    textAlign: "center" as const,
    marginBottom: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1rem",
  },
  row: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap" as const,
  },
  inputContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
  },
  label: {
    marginBottom: "0.5rem",
    fontSize: "1rem",
  },
  input: {
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #444",
    backgroundColor: "#333",
    color: "#fff",
  },
  submitButton: {
    padding: "1rem",
    fontSize: "1.2rem",
    backgroundColor: "#ff4500",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "1rem",
  },
};

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
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    creditCard: "",
    expirationDate: "",
    securityCode: "",
  });
  const [error, setError] = useState("");
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

    // Validate that no field is empty
    for (const key in formData) {
      const value = formData[key as keyof FormData];
      if (typeof value === "string" && value.trim() === "") {
        setError("Please fill in all fields.");
        return;
      }
    }

    // Clear the cart cookie by directly setting its expiration
    document.cookie =
      "cart=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    // Dispatch a custom event (if other parts of your app need to react)
    window.dispatchEvent(new Event("cartUpdated"));

    // Navigate to Thank You page
    router.push("/ThankYou");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Checkout</h1>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.row}>
          <div style={styles.inputContainer}>
            <label htmlFor="firstName" style={styles.label}>
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              data-test-id="checkout-first-name"
              style={styles.input}
            />
          </div>
          <div style={styles.inputContainer}>
            <label htmlFor="lastName" style={styles.label}>
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              data-test-id="checkout-last-name"
              style={styles.input}
            />
          </div>
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            data-test-id="checkout-email"
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="address" style={styles.label}>
            Address
          </label>
          <input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            data-test-id="checkout-address"
            style={styles.input}
          />
        </div>
        <div style={styles.row}>
          <div style={styles.inputContainer}>
            <label htmlFor="city" style={styles.label}>
              City
            </label>
            <input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              data-test-id="checkout-city"
              style={styles.input}
            />
          </div>
          <div style={styles.inputContainer}>
            <label htmlFor="postalCode" style={styles.label}>
              Postal Code
            </label>
            <input
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              data-test-id="checkout-postal-code"
              style={styles.input}
            />
          </div>
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="country" style={styles.label}>
            Country
          </label>
          <input
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            data-test-id="checkout-country"
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="creditCard" style={styles.label}>
            Credit Card
          </label>
          <input
            id="creditCard"
            name="creditCard"
            value={formData.creditCard}
            onChange={handleChange}
            data-test-id="checkout-credit-card"
            style={styles.input}
          />
        </div>
        <div style={styles.row}>
          <div style={styles.inputContainer}>
            <label htmlFor="expirationDate" style={styles.label}>
              Expiration Date
            </label>
            <input
              id="expirationDate"
              name="expirationDate"
              placeholder="MM/YY"
              value={formData.expirationDate}
              onChange={handleChange}
              data-test-id="checkout-expiration-date"
              style={styles.input}
            />
          </div>
          <div style={styles.inputContainer}>
            <label htmlFor="securityCode" style={styles.label}>
              Security Code
            </label>
            <input
              id="securityCode"
              name="securityCode"
              value={formData.securityCode}
              onChange={handleChange}
              data-test-id="checkout-security-code"
              style={styles.input}
            />
          </div>
        </div>
        <button
          data-test-id="checkout-confirm-order"
          style={styles.submitButton}
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
}
