import { useState, useEffect } from 'react';
import { terminal } from 'virtual:terminal';

const costURL =
  'http://localhost:9090/model/allocation?aggregate=cluster&window=7d';

function CostAnalysisDashboard() {
  // const [costs, setCosts] = useState({});
  // initialize cost categories
  let totalCPU = 0;
  let totalRAM = 0;
  let totalPV = 0;
  // fetch cost data from Kubecost
  fetch(costURL)
    .then((res) => res.json())
    .then((data) => terminal.log(data.data))
    .catch((err) => terminal.log('error in fetching cost data: ', err));
  // parse through fetched data
  for (const metricObj of costsArr) {
    for (const cluster in metricObj) {
      if (cluster[key] === 'cpuCost') totalCPU += metricObj['cpuCost'];
      if (cluster[key] === 'ramCost') totalRAM += metricObj['ramCost'];
      if (cluster[key] === 'pvCost') totalPV += metricObj['pvCost'];
    }
  }
  const costsData = {
    'CPU Cost': totalCPU,
    'RAM Cost': totalRAM,
    'PV Cost': totalPV
  };
  // setCosts(costsData);
  return <h1 className="cluster">Cost Dashboard</h1>;
}
export default CostAnalysisDashboard;
