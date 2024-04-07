import c from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={c.loader__div}>
      <span className={c.loader}></span>
      <p>Finding book...</p>
    </div>
  );
};

export default Loader;
