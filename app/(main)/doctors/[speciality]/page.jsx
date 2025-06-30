import React from "react";

const SpecialityPage = async ({ params }) => {
  const { speciality } = await params;
  return <div>Specialty Page: {speciality}</div>;
};

export default SpecialityPage;
