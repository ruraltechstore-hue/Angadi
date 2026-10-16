import { createFileRoute } from "@tanstack/react-router";
import { Page, meta } from "@/components/site/Page";

export const Route = createFileRoute("/terms")({
  head: () => meta("Terms & Conditions — Angadi", "Terms and Conditions governing the use of the Angadi e-commerce marketplace."),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Page title="Terms &amp; Conditions" subtitle="Last updated: October 2026">
      <h2>1. Introduction &amp; Acceptance</h2>
      <p>
        Welcome to Angadi (“we”, “our”, or “us”). By accessing or using our website, browsing our catalog, creating an account, or placing an order, you agree to comply with and be bound by these Terms and Conditions. If you disagree with any part of these terms, please do not use our services.
      </p>

      <h2>2. Catalog &amp; Product Pricing</h2>
      <p>
        We strive for accurate descriptions and pricing for all products displayed on Angadi. Product prices are listed in Indian Rupees (₹) inclusive of applicable taxes unless stated otherwise. Prices, stock availability, and promotional discounts are subject to change without prior notice.
      </p>

      <h2>3. Orders &amp; Delivery Confirmation</h2>
      <p>
        Placing an item in your shopping cart does not reserve the product or price. Orders are finalized upon order placement and subject to address verification. In accordance with our store policy, delivery charges are confirmed based on the delivery destination pincode prior to order completion to ensure complete fee transparency.
      </p>

      <h2>4. User Accounts &amp; Security</h2>
      <p>
        When you register an account with Angadi, you are responsible for maintaining the confidentiality of your credentials and for all activities conducted under your account. We reserve the right to refuse service or terminate accounts at our sole discretion if fraudulent or unauthorized activity is detected.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        Angadi shall not be liable for indirect, incidental, or consequential damages arising from the use of products purchased through the platform or delays in shipping caused by factors outside our reasonable control.
      </p>
    </Page>
  );
}
