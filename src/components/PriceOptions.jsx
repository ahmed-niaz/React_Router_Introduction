import { useEffect, useState } from "react";
import Option from "./Option";
import { BallTriangle } from "react-loader-spinner";

const PriceOptions = () => {
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`membershipOptions.json`)
      .then((resp) => resp.json())
      .then((data) => {
        setTimeout(() => {
          setOptions(data);
          setIsLoading(false);
        }, 500); 
      });
    
  }, []);

  return (
    <main className="mt-12">
      <h2 className="text-center text-4xl mb-8">
        Best Price &amp; Quality in Town
      </h2>
     {
      isLoading && (
        <div className="flex justify-center">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
      )
     }
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
        {options.map((option, idx) => (
          <Option key={idx} opt={option} />
        ))}
      </div>
    </main>
  );
};

export default PriceOptions;
