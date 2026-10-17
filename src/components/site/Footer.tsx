import { Link } from "@tanstack/react-router";
import { Star, Zap, ShieldCheck, Rocket } from "lucide-react";

export function Footer() {
  return (
    <>
      {/* 4 Pillars Feature Banner */}
      <footer className="feat border-y border-line/70 bg-white py-5 dark:bg-card">
        <div className="wrap">
          <div>
            <Star className="ic text-gold shrink-0" />
            <div>
              <b className="font-semibold text-navy dark:text-white">Quality Products</b>
              <span className="block text-xs text-muted-foreground">Carefully selected for you</span>
            </div>
          </div>
          <div>
            <Zap className="ic text-gold shrink-0" />
            <div>
              <b className="font-semibold text-navy dark:text-white">Fast &amp; Reliable Delivery</b>
              <span className="block text-xs text-muted-foreground">Get your orders on time</span>
            </div>
          </div>
          <div>
            <ShieldCheck className="ic text-gold shrink-0" />
            <div>
              <b className="font-semibold text-navy dark:text-white">Secure Shopping</b>
              <span className="block text-xs text-muted-foreground">Your data, our priority</span>
            </div>
          </div>
          <div>
            <Rocket className="ic text-gold shrink-0" />
            <div>
              <b className="font-semibold text-navy dark:text-white">Angadi</b>
              <span className="block text-xs text-muted-foreground">Shop today, grow tomorrow</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Main Footer */}
      <footer className="foot">
        <div className="wrap">
          {/* Brand info */}
          <div>
            <img
              src="/angadi_assets/img_2.png"
              alt="Angadi – India's online marketplace"
              className="h-16 w-auto object-contain"
            />
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Angadi is an online marketplace built to make good products easy to find. Quality items, reliable delivery, and support whenever you need it.
            </p>
          </div>

          {/* Shop Column */}
          <div>
            <b className="mb-2 block font-semibold text-navy dark:text-white">Shop</b>
            <Link to="/products" search={{ sort: "new" }}>New Arrivals</Link>
            <Link to="/products" search={{ sort: "rating" }}>Best Sellers</Link>
            <Link to="/products" search={{ sort: "discount" }}>Deals &amp; Offers</Link>
            <Link to="/categories">All Categories</Link>
            <Link to="/products">Browse All Products</Link>
          </div>

          {/* Company Column */}
          <div>
            <b className="mb-2 block font-semibold text-navy dark:text-white">Company</b>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Support</Link>
            <Link to="/account">My Account</Link>
            <Link to="/cart">Shopping Cart</Link>
            <Link to="/track">Track Order</Link>
          </div>

          {/* Legal / Policy Column */}
          <div>
            <b className="mb-2 block font-semibold text-navy dark:text-white">Policies &amp; Legal</b>
            <Link to="/terms">Terms &amp; Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/shipping-policy">Shipping Policy</Link>
            <Link to="/returns">Returns &amp; Refunds</Link>
            <Link to="/faq">Frequently Asked Questions</Link>
          </div>
        </div>

        <div className="copy">
          <div className="wrap flex flex-col items-center justify-between gap-2 sm:flex-row">
            <span>© {new Date().getFullYear()} Angadi. All rights reserved.</span>
            <span className="text-xs text-muted-foreground">Shop · Grow · Succeed</span>
          </div>
        </div>
      </footer>
    </>
  );
}
