import { useEffect, useState } from "react";
import Option from "./Option";

const PriceOptions = () => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    fetch(`membershipOptions.json`)
      .then((resp) => resp.json())
      .then((data) => setOptions(data));
  }, []);

  return (
    <main className="mt-12">
      <h2 className="text-center text-4xl mb-8">
        Best Price &amp; Quality in Town
      </h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
        {options.map((option, idx) => (
          <Option key={idx} opt={option} />
        ))}
      </div>
    </main>
  );
};

export default PriceOptions;
