import { CircularProgress } from "@material-ui/core";
const Loader = () => {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <CircularProgress color="secondary" />
    </div>
  );
};
export default Loader;
