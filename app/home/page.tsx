import BarChartOne from "../charts/barChart";
import DepartmentChart from "../charts/chartCircle";
import FundCollection from "../fund-collection/page";

export default function Home() {
  return (
    <div>
      <div className="border-2 border-emerald-500 m-3 p-10">
        <div>
          <FundCollection />
        </div>
        <div className="flex items-center flex-wrap justify-center gap-5 ">
          <DepartmentChart />
          <BarChartOne />
        </div>
      </div>
    </div>
  );
}
