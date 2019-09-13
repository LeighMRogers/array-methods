const businesses = [{
        purchasingAgent: {
            nameLast: "Kirlin",
            nameFirst: "Kristy"
        },
        phoneWork: "089.129.2290 x9400",
        orders: [7826.96, 8323.11, 5756.28, 6308.42, 5622.28],
        companyName: "Care-media",
        companyIndustry: "Education",
        addressZipCode: "56839",
        addressStateCode: "WI",
        addressFullStreet: "8417 Franklin Court Tunnel",
        addressCity: "Mouthcard"
    },
    {
        purchasingAgent: {
            nameLast: "Steuber",
            nameFirst: "Kamron"
        },
        phoneWork: "(833) 222-7579 x5874",
        orders: [6252.5, 9769.02, 9521.17, 7994.05, 7945.93],
        companyName: "Stanholding",
        companyIndustry: "Hospitality",
        addressZipCode: "09705",
        addressStateCode: "NY",
        addressFullStreet: "2889 Fawn Court Garden",
        addressCity: "Fellsmere"
    },
    {
        purchasingAgent: {
            nameLast: "Gutkowski",
            nameFirst: "Kaylee"
        },
        phoneWork: "235.266.6278",
        orders: [7634.43, 9766.72, 9953.45, 6559.8, 5054.9],
        companyName: "Highnix",
        companyIndustry: "Agriculture",
        addressZipCode: "49376",
        addressStateCode: "ME",
        addressFullStreet: "5734 Maple Avenue Throughway",
        addressCity: "Little Genesee"
    },
    {
        purchasingAgent: {
            nameLast: "Crona",
            nameFirst: "Lauren"
        },
        phoneWork: "1-449-987-3083 x23263",
        orders: [7384.52, 9252.72, 7272.65, 5251.84, 9680.08],
        companyName: "Conit",
        companyIndustry: "Defense",
        addressZipCode: "53326",
        addressStateCode: "IL",
        addressFullStreet: "5755 Hillside Drive Crossroad",
        addressCity: "Norval"
    },
    {
        purchasingAgent: {
            nameLast: "Krajcik",
            nameFirst: "Elvera"
        },
        phoneWork: "1-730-411-8580",
        orders: [6069.05, 8535.38, 5782.7, 7838.91, 7578.36],
        companyName: "Dong-tom",
        companyIndustry: "Energy",
        addressZipCode: "67071",
        addressStateCode: "KS",
        addressFullStreet: "4826 Arch Street Lights",
        addressCity: "Newburyport"
    },
    {
        purchasingAgent: {
            nameLast: "Kling",
            nameFirst: "Ellie"
        },
        phoneWork: "(868) 043-0950",
        orders: [6726.2, 8393.21, 8087.13, 6393.13, 8646.35],
        companyName: "Dan-dox",
        companyIndustry: "Manufacturing",
        addressZipCode: "98842",
        addressStateCode: "WV",
        addressFullStreet: "9767 Cedar Court Corner",
        addressCity: "Prince George"
    },
    {
        purchasingAgent: {
            nameLast: "Robel",
            nameFirst: "Otilia"
        },
        phoneWork: "(298) 305-1942 x53653",
        orders: [8676.05, 7430.69, 9379.81, 8074.29, 5998.75],
        companyName: "J-base",
        companyIndustry: "Health care",
        addressZipCode: "72993",
        addressStateCode: "FL",
        addressFullStreet: "9954 Buckingham Drive Mountains",
        addressCity: "Vesper"
    },
    {
        purchasingAgent: {
            nameLast: "Gusikowski",
            nameFirst: "Karolann"
        },
        phoneWork: "(743) 934-8981 x692",
        orders: [8650.08, 8042.69, 5555.72, 7467.86, 8851.43],
        companyName: "Span-fix",
        companyIndustry: "Construction",
        addressZipCode: "59860",
        addressStateCode: "MT",
        addressFullStreet: "4151 Orange Street Extension",
        addressCity: "Little Rock Air Force Base"
    },
    {
        purchasingAgent: {
            nameLast: "Hartmann",
            nameFirst: "Zena"
        },
        phoneWork: "727.635.6610 x6483",
        orders: [9415.89, 8935.45, 7413.91, 6830.96, 9746.57],
        companyName: "Sanaplane",
        companyIndustry: "Information",
        addressZipCode: "85156",
        addressStateCode: "NY",
        addressFullStreet: "4765 Fairview Avenue Locks",
        addressCity: "Dennisville"
    },
    {
        purchasingAgent: {
            nameLast: "Torphy",
            nameFirst: "Celia"
        },
        phoneWork: "(992) 079-1670 x71569",
        orders: [7431.21, 5911.85, 7954.86, 7141.52, 8416.79],
        companyName: "Ran-taxon",
        companyIndustry: "Manufacturing",
        addressZipCode: "96673",
        addressStateCode: "MD",
        addressFullStreet: "7157 Hudson Street Ford",
        addressCity: "Watrous"
    }
];

const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

// forEach methods
businesses.forEach(business => {
    outEl.innerHTML += `
      <h2>${business.companyName}</h2>
      <section>
        ${business.addressFullStreet}
      </section>
      <section>
        ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
      </section>
    `
    outEl.innerHTML += "<hr/>"
});

// filter methods

// build an array to filter all the NY-based businesses
const newYorkBiz = businesses.filter(business => {
    let inNY = false;
    if (business.addressStateCode === "NY") {
        inNY = true;
    }
    return inNY
})
console.log("NY Businesses", newYorkBiz);

const nyBizDOM = document.querySelector("#ny-biz")
nyBizDOM.innerHTML = "<h2>New York Businesses</h2>"

const nyComponent = (businesses) => {
    businesses.forEach(businesses => {
        nyBizDOM.innerHTML += `
            <h3>${businesses.companyName}</h3>
            <section>
            ${businesses.addressFullStreet}
            </section>
            <section>
            ${businesses.addressCity} ${businesses.addressStateCode}, ${businesses.addressZipCode}
            </section>
        `
        nyBizDOM.innerHTML += "<hr>"
    })
}

nyComponent(newYorkBiz)

// Filter manufacturing businesses
const manufacturingBiz = businesses.filter(business => {
    let manuBiz = false;
    if (business.companyIndustry === "Manufacturing") {
        manuBiz = true;
    }
    return manuBiz
})

const manuBizDOM = document.querySelector("#manu-biz")
manuBizDOM.innerHTML = "<h2>Manufacturing Businesses</h2>"

const manuComponent = (businesses) => {
    businesses.forEach(businesses => {
        manuBizDOM.innerHTML += `
            <h3>${businesses.companyName}</h3>
            <section>
            ${businesses.addressFullStreet}
            </section>
            <section>
            ${businesses.addressCity} ${businesses.addressStateCode}, ${businesses.addressZipCode}
            </section>
        `
        manuBizDOM.innerHTML += "<hr>"
    })
}

manuComponent(manufacturingBiz)

// map array methods 
outEl.innerHTML += "<h2>Purchasing Agents</h2>";

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/

//return a new object that has the full name of the purchasing agent, the company name, and the phone number.
const agents = businesses.map(business => {
    return  {
        firstName: business.purchasingAgent.nameFirst,
        lastName: business.purchasingAgent.nameLast,
        company: business.companyName,
        number: business.phoneWork
    }
})

console.table(agents)

agents.forEach(agent => {
  outEl.innerHTML += `<h3>${agent.firstName} ${agent.lastName}</h3>
  <p>${agent.company}, ${agent.number}</p>`;
  outEl.innerHTML += "<hr/>";
});

// find array method - search for businesses
document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundBusiness = businesses.find(
                business =>
                    business.companyName.includes(keyPressEvent.target.value)
            );

            outEl.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });
    
    // find array method - search for agents
    document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundAgent = businesses.find(
                business =>
                    business.purchasingAgent.includes(keyPressEvent.target.value)
            );

            outEl.innerHTML = `
                <h2>
                ${foundAgent.nameFirst} ${foundAgent.nameLast}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });
