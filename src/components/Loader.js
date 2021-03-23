import poki from '../image/poki.png';
const Loader = () => {
  return (
    <span className="spinner">
      {/* <i className="fas fa-spinner"></i> */}
      <img src={poki} alt="spinner-logo" />
    </span>
  );
};
export default Loader;
