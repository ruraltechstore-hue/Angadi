import { createFileRoute } from "@tanstack/react-router";
import { Page, meta } from "@/components/site/Page";

export const Route = createFileRoute("/returns")({
  head: () => meta("Returns & Refunds — Angadi", "7-day easy return policy and refund information at Angadi."),
  component: ReturnsPage,
});

function ReturnsPage() {
  return (
    <Page title="Returns &amp; Refunds" subtitle="7-day easy returns policy">
      <h2>1. 7-Day Return Window</h2>
      <p>
        If you receive a defective, damaged, or incorrect product, you may request a return or replacement within 7 days of delivery.
      </p>

      <h2>2. Return Eligibility</h2>
      <p>
        To be eligible for a return, the item must be unused, in its original packaging, and with all accessories, user manuals, and tags intact. Certain personal care, hygiene, and perishable items are non-returnable.
      </p>

      <h2>3. Refund Processing</h2>
      <p>
        Once your return is received and inspected by our warehouse team, we will notify you of the approval or rejection of your refund. Approved refunds are credited back to your original payment method or bank account within 5 to 7 business days.
      </p>

      <h2>4. How to Initiate a Return</h2>
      <p>
        Please reach out to our customer care team via the <a href="/contact" className="font-semibold text-navy dark:text-gold underline">Contact Us page</a> with your order number and photographs of the item.
      </p>
    </Page>
  );
}
