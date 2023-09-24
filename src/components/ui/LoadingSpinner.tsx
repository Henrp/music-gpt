import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

export default function LoadingSpinner() {
  return (
    <SyncLoader color="#d9d9d9" margin={1} size={10} speedMultiplier={0.8} />
  );
}
