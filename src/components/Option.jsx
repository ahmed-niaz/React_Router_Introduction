import PropTypes from "prop-types";
import Feature from "./Feature";

const Option = ({ opt }) => {
  const {features, price, name } = opt;
  return (
    <main className="bg-sky-100 rounded-2xl p-4 text-black m-4 lg:m-0">
      <h2 className="text-center">
        <span className="text-7xl font-extrabold">{price}</span>
        <span className="text-4xl font-semibold">/month</span>
      </h2>
      <h4 className="text-5xl text-center my-4">{name}</h4>
      <div className="mt-8 font-extrabold">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature} />
        ))}
      </div>
      <div className="text-center">
        <button className="my-8 btn bg-green-400 w-2/4 mx-auto">Buy Now</button>
      </div>
    </main>
  );
};
Option.propTypes = {
  opt: PropTypes.object,
};

export default Option;
