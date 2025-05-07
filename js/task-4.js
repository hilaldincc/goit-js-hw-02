
function getShippingCost(country) {
    const ChinaPrice = 100;
    const ChilePrice = 250;
    const AustraliaPrice = 170;
    const JamaicaPrice = 120;
    switch (country.toLowerCase()) {
        case "china":
            return `Shipping to ${country} will cost ${ChinaPrice} credits`;
        case "chile":
            return `Shipping to ${country} will cost ${ChilePrice} credits`;
        case "australia":
            return `Shipping to ${country} will cost ${AustraliaPrice} credits`;
        case "jamaica":
            return `Shipping to ${country} will cost ${JamaicaPrice} credits`;
        default:
            return "Sorry, there is no delivery to your country";
    } 

}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

