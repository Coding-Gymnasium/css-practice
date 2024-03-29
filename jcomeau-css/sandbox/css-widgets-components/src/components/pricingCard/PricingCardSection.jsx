import "./PricingCardSection.css";

const PricingCardSection = () => {
  return (
    <>
      <section className="pricing">
        <article className="card">
          <h2>Starter</h2>
          <div className="price">$29</div>
          <p>For personal projects.</p>
          <ul>
            <li>3 projects</li>
            <li>100gb monthly transfer</li>
            <li>20gb storage</li>
            <li>No support</li>
          </ul>
          <button>Buy Now</button>
        </article>

        <article className="primary card">
          <h2>Pro</h2>
          <div className="price">$99</div>
          <p>
            For small businesses looking to grow. Our most popular plan for
            ambitious organizations.
          </p>
          <ul>
            <li>10 projects</li>
            <li>500gb monthly transfer</li>
            <li>1tb storage</li>
            <li>Email customer support</li>
          </ul>
          <button>Buy Now</button>
        </article>

        <article className="card">
          <h2>Enterprise</h2>
          <div className="price">Contact Us</div>
          <p>For large orgs.</p>
          <ul>
            <li>Unlimited projects, transers, storage.</li>
            <li>Dedicated phone & email support</li>
          </ul>
          <button>Buy Now</button>
        </article>
      </section>
    </>
  );
};

export default PricingCardSection;
