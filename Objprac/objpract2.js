
let products=[
     
    { 
     id:1,
     name:'Wireless Headphones',
     discription:'High Quality Wireless Headphones with noise-cancelling feature and 20hrs battery life ',
     price:99.99,
     category:'electronics',
     img:"https://example.com/images/headphones.jpg",
     rating:4.5 ,
     manufacturer:{
        name:'south tech',
        location:'USA',
        warranty:'2years'
     },
     dimesions:{
         width:'18cm',
         height:'8cm',
         depth:'6cm',
         weight:'300g'
     },
     availability:{
         stock:150,
         shippingtime:'3-5 bussiness days',
         freeshipping:true
     },
     reviews: [
         {
           user: "Alice",
           rating: 5,
           comment: "Amazing sound quality and comfort!"
         },
         {
           user: "Bob",
           rating: 4,
           comment: "Good product but the noise cancelling could be better."
         }
       ],
       tags: [
         "wireless",
         "headphones",
         "audio",
         "noise-cancelling"
       ],
       colors: [
         "Black",
         "White",
         "Red"
       ],
       discount: {
         amount: 10,
         expires: "2024-12-15"
       },
       shipping: {
         carrier: "FedEx",
         price: 5.99,
         estimatedTime: "4-7 days"
       },
       paymentMethods: [
         "Credit Card",
         "PayPal",
         "Gift Card"
       ],
       relatedProducts: [
         2,
         3,
         6
       ]
     },
     {
       id: 2,
       name: "Smartphone 6 Pro",
       description: "The latest model featuring a 6.7-inch display, 5G connectivity, and a 108MP camera.",
       price: 799.99,
       category: "Mobile Phones",
       imageURL: "https://example.com/images/smartphone6pro.jpg",
       rating: 4.7,
       manufacturer: {
         name: "TechWorld",
         location: "South Korea",
         warranty: "1 year"
       },
       dimensions: {
         width: "7.5cm",
         height: "16.5cm",
         depth: "0.8cm",
         weight: "180g"
       },
       availability: {
         stock: 120,
         shippingTime: "2-4 business days",
         freeShipping: true
       },
       reviews: [
         {
           user: "Charlie",
           rating: 5,
           comment: "Incredible display and camera quality!"
         },
         {
           user: "Dave",
           rating: 4,
           comment: "Great phone, but a bit overpriced."
         }
       ],
       tags: [
         "smartphone",
         "5G",
         "Android",
         "camera"
       ],
       colors: [
         "Black",
         "Silver",
         "Blue"
       ],
       discount: {
         amount: 50,
         expires: "2024-12-20"
       },
       shipping: {
         carrier: "DHL",
         price: 9.99,
         estimatedTime: "5-8 days"
       },
       paymentMethods: [
         "Credit Card",
         "PayPal",
         "Installments"
       ],
       relatedProducts: [
         1,
         5,
         7
       ]
     },
     {
       id: 3,
       name: "Bluetooth Speaker",
       description: "Portable Bluetooth speaker with 360° sound, waterproof, and long-lasting battery.",
       price: 45,
       category: "Electronics",
       imageURL: "https://example.com/images/bluetooth-speaker.jpg",
       rating: 4.3,
       manufacturer: {
         name: "AudioWave",
         location: "China",
         warranty: "1 year"
       },
       dimensions: {
         width: "9cm",
         height: "15cm",
         depth: "9cm",
         weight: "500g"
       },
       availability: {
         stock: 200,
         shippingTime: "2-4 business days",
         freeShipping: false
       },
       reviews: [
         {
           user: "Emma",
           rating: 5,
           comment: "Perfect for outdoor use, great sound quality!"
         },
         {
           user: "Frank",
           rating: 3,
           comment: "Good sound, but battery life could be better."
         }
       ],
       tags: [
         "Bluetooth",
         "speaker",
         "portable",
         "outdoor"
       ],
       colors: [
         "Blue",
         "Black",
         "Green"
       ],
       discount: {
         amount: 5,
         expires: "2024-12-10"
       },
       shipping: {
         carrier: "UPS",
         price: 4.99,
         estimatedTime: "3-6 days"
       },
       paymentMethods: [
         "Credit Card",
         "PayPal"
       ],
       relatedProducts: [
         1,
         4,
         6
       ]
     },
     {
       id: 4,
       name: "Leather Wallet",
       description: "Sleek leather wallet with multiple compartments for cards and cash. Durable and stylish.",
       price: 39.99,
       category: "Accessories",
       imageURL: "https://example.com/images/leather-wallet.jpg",
       rating: 4.6,
       manufacturer: {
         name: "ClassicStyle",
         location: "Italy",
         warranty: "2 years"
       },
       dimensions: {
         width: "10cm",
         height: "12cm",
         depth: "2cm",
         weight: "150g"
       },
       availability: {
         stock: 300,
         shippingTime: "5-7 business days",
         freeShipping: true
       },
       reviews: [
         {
           user: "Grace",
           rating: 5,
           comment: "Stylish and very durable. Fits all my cards."
         },
         {
           user: "Hank",
           rating: 4,
           comment: "Good quality, but a little bulky."
         }
       ],
       tags: [
         "leather",
         "wallet",
         "accessory",
         "fashion"
       ],
       colors: [
         "Brown",
         "Black",
         "Tan"
       ],
       discount: {
         amount: 15,
         expires: "2024-12-30"
       },
       shipping: {
         carrier: "USPS",
         price: 3.99,
         estimatedTime: "3-5 days"
       },
       paymentMethods: [
         "Credit Card",
         "PayPal",
         "Apple Pay"
       ],
       relatedProducts: [
         1,
         2,
         6
       ]
     },
     {
       id: 5,
       name: "Smartwatch Ultra",
       description: "Advanced smartwatch with fitness tracking, heart rate monitoring, and GPS navigation.",
       price: 199.99,
       category: "Wearables",
       imageURL: "https://example.com/images/smartwatch-ultra.jpg",
       rating: 4.8,
       manufacturer: {
         name: "FitTech",
         location: "Germany",
         warranty: "1 year"
       },
       dimensions: {
         width: "4.5cm",
         height: "4.5cm",
         depth: "1.2cm",
         weight: "45g"
       },
       availability: {
         stock: 80,
         shippingTime: "1-3 business days",
         freeShipping: true
       },
       reviews: [
         {
           user: "Ivy",
           rating: 5,
           comment: "Best smartwatch I've ever used. Accurate tracking and great features!"
         },
         {
           user: "Jack",
           rating: 4,
           comment: "Great fitness features, but the screen could be bigger."
         }
       ],
       tags: [
         "smartwatch",
         "fitness",
         "wearable",
         "GPS"
       ],
       colors: [
         "Black",
         "Silver",
         "Gold"
       ],
       discount: {
         amount: 25,
         expires: "2024-12-25"
       },
       shipping: {
         carrier: "FedEx",
         price: 7.99,
         estimatedTime: "2-4 days"
       },
       paymentMethods: [
         "Credit Card",
         "PayPal",
         "Google Pay"
       ],
       relatedProducts: [
         1,
         2,
         3
       ]
     }  
 ]
console.log(products.length);
// console.log(products);
let prtkeys=Object.keys(products)
let prtvalues=Object.values(products)
let prtentries=Object.entries(products)
console.log(prtkeys);
console.log(prtvalues);
console.log(prtentries);
console.log(products[4].availability);

console.log(products[3].tags);
console.log(products[4].description);
console.log(products[4].dimensions.depth);

let fit=products.filter((v,i)=>{
     return i!=0?v:'';
})
console.log(fit);

console.log(products[4].manufacturer);




