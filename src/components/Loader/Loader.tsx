import c from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={c.loader__div}>
      <p>Finding books...</p>
      <span className={c.loader}></span>
    </div>
  );
};

export default Loader;
