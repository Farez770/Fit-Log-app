import React from "react";

const loading = () => {
  return (
    <div>
      <h1 className="text-2xl text-center mt-4">
        Workout Library Data is Loading ....
        <span className="loading loading-spinner text-success"></span>
      </h1>
    </div>
  );
};

export default loading;
