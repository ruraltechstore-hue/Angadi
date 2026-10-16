import { createFileRoute } from "@tanstack/react-router";
import { Page, meta } from "@/components/site/Page";

export const Route = createFileRoute("/shipping-policy")({
  head: () => meta("Shipping Policy — Angadi", "Shipping and delivery guidelines at Angadi."),
  component: ShippingPolicyPage,
});

function ShippingPolicyPage() {
  return (
    <Page title="Shipping Policy" subtitle="Fast and reliable delivery across India and worldwide">
      <h2>1. Processing &amp; Dispatch</h2>
      <p>
        Orders are typically packed and dispatched within 1 to 2 business days after confirmation. You will receive an order confirmation and reference tracking number to follow your package status.
      </p>

      <h2>2. Estimated Delivery Timelines</h2>
      <p>
        Standard delivery usually takes between 3 to 7 business days depending on your postal pincode and geographical location. Remote or rural destinations may require additional transit time.
      </p>

      <h2>3. Delivery Charges &amp; Transparency</h2>
      <p>
        In accordance with our fair pricing policy, shipping fees are calculated and confirmed at checkout based on destination and package weight. We never add unexpected hidden delivery charges after an order is placed.
      </p>

      <h2>4. Order Tracking</h2>
      <p>
        You can track the progress of your shipment at any time by visiting our dedicated <a href="/track" className="font-semibold text-navy dark:text-gold underline">Order Tracking page</a> using your order number.
      </p>
    </Page>
  );
}
