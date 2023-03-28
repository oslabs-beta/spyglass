import { useState, useEffect } from 'react';
import CostTable from '../CostTable';
// import { terminal } from 'virtual:terminal';

const costURL =
  'http://localhost:9090/model/allocation?aggregate=cluster&window=7d';

function CostAnalysisDashboard() {
  const [costData, setCostData] = useState({});
  // initialize cost categories
  let totalCPU = 0;
  let totalRAM = 0;
  let totalPV = 0;
  // create function to access values associated with each type of cost and sum up totals
  const getCosts = (obj) => {
    for (const key in obj) {
      if (key === 'cpuCost') totalCPU += obj.cpuCost;
      if (key === 'ramCost') totalRAM += obj.ramCost;
      if (key === 'pvCost') totalPV += obj.pvCost;
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch cost data from Kubecost
        const response = await fetch(costURL);
        const data = await response.json();
        const costArray = data.data;
        // parse through fetched data
        costArray.forEach((obj) => {
          for (const cluster in obj) {
            getCosts(obj[cluster]);
          }
        });
        const totalData = {
          totalCPU,
          totalRAM,
          totalPV
        };
        // update state with new costsData
        setCostData(totalData);
      } catch (err) {
        // catch any errors
        console.log('error in fetching cost data: ', err);
      }
    };
    // invoke async func fetchData defined above
    fetchData();
  }, []);
  console.log('costData', costData);
  // render cost table only if we have successfuly retrieved data from Kubecost
  return (
    <div>
      <h1></h1>
      {costData && (
        <CostTable
          totalCPU={costData.totalCPU}
          totalRAM={costData.totalRAM}
          totalPV={costData.totalPV}
        />
      )}
    </div>
  );
}
export default CostAnalysisDashboard;
