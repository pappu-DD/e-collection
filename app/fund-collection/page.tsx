export default function FundCollection() {
  return (
    <div>
      <div className="grid grid-flow-row md:grid-flow-col">
        <div className=" items-center justify-center border-2 p-3 border-black rounded-lg m-2">
          <h1 className="text-2xl font-semibold text-center">Total Collection</h1>
          <div className="flex justify-center items-center">
            <span className="font-semibold text-4xl text-green-700">+</span>
            <p className="p-3">1200</p>
          </div>
        </div>
        <div className="items-center justify-center border-2 p-3 border-black rounded-lg m-2">
          <h1 className="text-2xl font-semibold text-center">Department</h1>
          <div className="flex justify-center items-center">
            <span className="font-semibold text-4xl text-green-700">+</span>
            <p className="p-3">12</p>
          </div>
        </div>
        <div className="items-center justify-center border-2 p-3 border-black rounded-lg m-2">
          <h1 className="text-2xl font-semibold text-center">Target</h1>
          <div className="flex justify-center items-center">
            <span className="font-semibold text-4xl text-green-700">+</span>
            <p className="p-3">1200</p>
          </div>
        </div>
      </div>
    </div>
  );
}
