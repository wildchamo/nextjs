"use client";

const SeguroIndividual = ({ params }) => {
  console.log(params);
  return (
    <div className="bg-primary py-4 px-4 rounded-2xl">
      {params.id}
    </div>
  );
};

export default SeguroIndividual;
