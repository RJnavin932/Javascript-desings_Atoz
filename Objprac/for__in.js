var data = {
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
    ],
  };

  console.log(data);

//  for...in loop

// syntax:
// for (let key in object) {
// } 

// for(key in data){
    // console.log(key);
    
    // console.log(key, data[key]);
    // if(key == "colors"){
        // console.log(key, data[key]);
        // let colors = data[key];
        // colors.forEach((val)=>{
        //     console.log(val);
            
        // })
        // for(let color in colors){
        //     console.log(colors[color]);
            
        // }
        // for(i=0;i<colors.length;i++){
        //     console.log(colors[i]);   
        // }
    // }
// }

// console.log(data["colors"]);

// using Array 
// var data = ['red',"green","black"];

// for(color in data){
//     console.log(color , " = ", data[color]);   
// }

for(var key in data){
    // console.log(key,':',data[key]);

    if (key=="colors"){
        console.log(key,data[key])
    let colors=data[key]
    
    for(let color in colors){
        console.log(colors[color]);
        if (color==2){
            console.log(colors[color]);
        }
    }
    }
    if(key=='shipping'){
      let shipping=data[key]
      console.log(key,data[key]);

      for(let shipp in shipping){
        console.log(shipping[shipp]);

       if (shipp==0){
        console.log(shipping[shipp]);
       }
      }
    }
}
 for(var key1 in data){
  if(key1=='tags'){
   let tags=data[key1]
   console.log(key1,data[key1]);
    tags.push('display'.toUpperCase())

    for(let tag in tags){
      console.log(tags[tag].toString());
      // console.log(tags[tag].replace());
     console.log(tags[tag].toUpperCase());

    }
  }
 }

 for(let mykey in data){
  if (mykey=='paymentMethods'){
    let paymentMethods=data[mykey]
    console.log(mykey,data[mykey]);
    paymentMethods.push('gpay'.toLocaleUpperCase(),'phonepay'.toLocaleUpperCase())

    for(let method in paymentMethods){
      console.log(paymentMethods[method].toString().toLocaleUpperCase());
     }
     var result=paymentMethods.filter((element,i)=>{
      // return i!=0?element:'';
      if(i!=0){
        console.log(element);
        return element
      }
      })
      result.unshift('patym')
      console.log('paymentMethods:',result);
  }

}  
 
for(let mykey in data){
  if(mykey=='reviews'){
    let reviews=data[mykey];
    console.log(mykey,data[mykey].at(1));
    console.log(mykey,data[mykey]);

    for (let myreview in reviews){
      console.log(reviews[myreview]);
    }
  }
}

for(let mykey in data){
  if(mykey=='dimension'){
    let dimensions=data[mykey];
    console.log(mykey,data[mykey]);

    for(let dime in dimensions){
      console.log(dimensions[dime].toString());
    }
}
}

for(let mykey in data){
  if(mykey=='colors'){
    let colors=data[mykey];
    console.log(mykey,data[mykey]);
    colors.push('white') 

    for(let mycolor in colors){
      console.log(colors[mycolor].toLocaleUpperCase());     
    }
  }
}