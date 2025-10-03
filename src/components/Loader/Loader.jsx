import { BeatLoader } from "react-spinners";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      }}
    >
      <BeatLoader color="#2cac7e" size={15} margin={5} aria-label="loading" />
    </div>
  );
}
