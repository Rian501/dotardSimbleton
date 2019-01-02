const outEl = document.querySelector("#output");
// outEl.innerHTML = "<h1>Active Businesses</h1>"

// businesses.forEach(business => {
//   let someVariableThatMeansZip = "addressZipCode";

//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//       ${business.addressCity}, ${business["addressStateCode"]} ${business[someVariableThatMeansZip]}
//     </section>
//   `
//   outEl.innerHTML += "<hr/>"
// });


//if we did it with a for loop instead of filter?
// Array to contain all the New York businesses
// let nyBiz = [];
// for (let i=0; i < businesses.length; i++) {
//   if (businesses[i].addressStateCode === "NY") {
//     nyBiz.push(businesses[i])
//   }
// }
// console.log('nyBiz', nyBiz);


//using filter to create new array

const newYorkBusinesses = businesses.filter(business => {
  let inNewYork = false;

  if (business.addressStateCode === "NY") {
    inNewYork = true
  }
  return inNewYork
});

// const newYorkBusinesses = businesses.filter(business => business.addressStateCode === "NY");

const manufacturingBusinesses = businesses.filter(business => business.companyIndustry === "Manufacturing")


//printing New York Businesses to DOM
outEl.innerHTML = "<h1>Manufacturing Businesses</h1>"

manufacturingBusinesses.forEach(business => {
  let someVariableThatMeansZip = "addressZipCode";

  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
    <section>
      ${business.addressCity}, ${business["addressStateCode"]} ${business[someVariableThatMeansZip]}
    </section>
  `
  outEl.innerHTML += "<hr/>"
});