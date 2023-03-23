import { useState, useEffect } from 'react';
// import { terminal } from 'virtual:terminal';

const costURL =
  'http://localhost:9090/model/allocation?aggregate=cluster&window=7d';

function CostAnalysisDashboard() {
  const [costs, setCosts] = useState({});
  // initialize cost categories
  let totalCPU = 0;
  let totalRAM = 0;
  let totalPV = 0;
  // create function to access values associated with each type of cost and sum up totals
  const getCosts = (obj) => {
    for (const key in obj) {
      if (key === 'cpuCost') totalCPU += obj['cpuCost'];
      if (key === 'ramCost') totalRAM += obj['ramCost'];
      if (key === 'pvCost') totalPV += obj['pvCost'];
    }
  };
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
      const costsData = {
        'CPU Cost': totalCPU,
        'RAM Cost': totalRAM,
        'PV Cost': totalPV
      };
      // update state with new costsData
      setCosts(costsData);
    } catch (err) {
      // catch any errors
      console.log('error in fetching cost data: ', err);
    }
  };
  // invoke async func fetchData defined above
  fetchData();
  return <div>Cost Dashboard</div>;
}
export default CostAnalysisDashboard;
