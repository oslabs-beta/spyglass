import { useState, useEffect } from 'react';
import { terminal } from 'virtual:terminal';

const costURL = [
  'http://localhost:9090/model/allocation?window=15d&aggregate=cluster'
];

function CostAnalysisDashboard() {
  // const [costs, setCosts] = useState({});
  // fetch cost data from Kubecost
  fetch(costURL, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())
    .then((data) => terminal.log(data.data))
    .catch((err) => terminal.log('error in fetching cost data: ', err));
  return <h1 className="cluster">Cost Dashboard</h1>;
}

export default CostAnalysisDashboard;
