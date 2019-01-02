// let nums = [2, 4, 6, 8];
// let reducedNums = nums.reduce((currentTotal, nextNumber) => {
//   console.log('current total', currentTotal);
//   return currentTotal += nextNumber;
// }, 0)

// console.log('reduced nums', reducedNums);






businesses.forEach(business => {
  /* CALCULATE ORDER SUMMARY */
  //THIS IS THE FOREACH COPOUT WAY
  // let totalOrders = 0
  // business.orders.forEach(order => totalOrders += order)

  //THIS IS THE REDUCE COOLER WAY
  let totalOrders = business.orders.reduce(
    (currentTotal, nextValue) => currentTotal += nextValue,
    0
  )

  outEl.innerHTML += `
        <h2>
            ${business.companyName}
            ($${totalOrders.toFixed(2)})
        </h2>
        <section>
            ${business.addressFullStreet}
        </section>
        <section>
            ${business.addressCity},
            ${business.addressStateCode}
            ${business.addressZipCode}
        </section>
    `;
  outEl.innerHTML += "<hr/>";
});