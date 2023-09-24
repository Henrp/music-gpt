import React from "react";
import { ThreeDots } from "react-loader-spinner";

export default function LoadingSpinner() {
  return (
    <div>
      <ThreeDots
        height="40"
        width="40"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading-icon"
        visible={true}
      />
    </div>
  );
}
