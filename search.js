const outEl = document.querySelector("#output");

document
  .querySelector("#agentSearch")
  .addEventListener("keypress", keyPressEvent => {
    if (keyPressEvent.charCode === 13) {
      /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
      const foundAgent = businesses.find(
        business =>
          `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`.includes(keyPressEvent.target.value) 
          //|| business.purchasingAgent.nameLast.includes(keyPressEvent.target.value)
      );

      outEl.innerHTML = `
                <h2>
                ${foundAgent.purchasingAgent.nameFirst} ${foundAgent.purchasingAgent.nameLast}
                </h2>
            `;
    }
  });
// document
//   .querySelector("#companySearch")
//   .addEventListener("keypress", keyPressEvent => {
//     console.log('keypress', keyPressEvent.target.value);
//     if (keyPressEvent.charCode === 13) {
//       /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//       const foundBusiness = businesses.find(
//         business =>
//           business.companyName.includes(keyPressEvent.target.value)
//       );

//       outEl.innerHTML = `
//                 <h2>
//                 ${foundBusiness.companyName}
//                 </h2>
//                 <section>
//                 ${foundBusiness.addressFullStreet}

//                 </section>
//                 <section>
//                 ${foundBusiness.addressCity},
//                 ${foundBusiness.addressStateCode}
//                 ${foundBusiness.addressZipCode}
//                 </section>
//             `;
//     }
//   });