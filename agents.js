let outEl = document.querySelector("#output");
outEl.innerHTML += "<h1>Purchasing Agents</h1>";

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
const agents = businesses.map(business => {
  let agentInfo = {
    "fullname":`${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
    "company": business.companyName,
    "phoneNumber": business.phoneWork
  }
  return agentInfo;
})

console.log(agents)

agents.forEach(agent => {
  outEl.innerHTML += `<h2>${agent.fullname}</h2>
                      <p>${agent.company}</p>
                      <p>${agent.phoneNumber}</p>`;
  outEl.innerHTML += "<hr/>";
});
