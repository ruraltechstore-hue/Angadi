import { createFileRoute } from "@tanstack/react-router";
import { Page, meta } from "@/components/site/Page";

export const Route = createFileRoute("/faq")({
  head: () => meta("Frequently Asked Questions — Angadi", "Answers to common questions about orders, payments, tracking, and delivery at Angadi."),
  component: FaqPage,
});

function FaqPage() {
  return (
    <Page title="Frequently Asked Questions" subtitle="Quick answers to common questions about shopping at Angadi">
      <h2>How do I track my order?</h2>
      <p>
        You can track your order status in real time by clicking on <strong>Track Order</strong> in the menu or footer and entering your order reference number. If you are signed in, you can also view all past and active orders directly in <strong>My Account</strong>.
      </p>

      <h2>What payment methods do you accept?</h2>
      <p>
        We support Cash on Delivery (COD) as well as secure online payments via UPI, debit/credit cards, and net banking depending on your location.
      </p>

      <h2>When will my order arrive?</h2>
      <p>
        Most orders are packed within 1–2 business days and delivered within 3–7 business days depending on your postal destination across India.
      </p>

      <h2>Do I need an account to shop?</h2>
      <p>
        No! You can browse our catalog, add products to your cart, and save items to your wishlist without signing in. You will only be prompted to log in or create an account when you proceed to checkout.
      </p>

      <h2>How do returns and refunds work?</h2>
      <p>
        We offer a 7-day return policy for eligible defective or damaged products. Simply contact our support team through the Contact Us page with your order number.
      </p>
    </Page>
  );
}
