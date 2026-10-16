import { createFileRoute } from "@tanstack/react-router";
import { Page, meta } from "@/components/site/Page";

export const Route = createFileRoute("/privacy")({
  head: () => meta("Privacy Policy — Angadi", "Learn how Angadi collects, protects, and handles your personal data."),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Page title="Privacy Policy" subtitle="Last updated: October 2026">
      <h2>1. Information We Collect</h2>
      <p>
        When you shop or register on Angadi, we collect necessary personal details such as your full name, email address, mobile phone number, delivery address, and order history. This information is required strictly to process transactions, fulfill deliveries, and provide customer support.
      </p>

      <h2>2. How We Use Your Data</h2>
      <p>
        We use your personal data to:
      </p>
      <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base">
        <li>Process and dispatch your orders to your confirmed shipping address.</li>
        <li>Send order status updates, tracking numbers, and delivery notifications.</li>
        <li>Manage customer service inquiries and support messages.</li>
        <li>Prevent fraudulent transactions and protect account security.</li>
      </ul>

      <h2>3. Data Protection &amp; Confidentiality</h2>
      <p>
        We never sell, rent, or trade your personal information with third parties for marketing purposes. Your account data and transaction records are protected using industry-standard security protocols and encrypted database storage.
      </p>

      <h2>4. Cookies &amp; Local Storage</h2>
      <p>
        Angadi uses local browser storage to retain your shopping cart items, wishlist, and recently viewed products so you can shop seamlessly without requiring immediate login.
      </p>

      <h2>5. Contact Our Privacy Officer</h2>
      <p>
        If you have any questions regarding your personal information or wish to request data correction or deletion, please contact our support team at <strong className="text-navy dark:text-gold">support@angadi.in</strong>.
      </p>
    </Page>
  );
}
