const burgerKings = [
    {
        id: 1,
        title: "Double Whopper Smoky Cheddar",
        price: 699,
        img: "https://eda.yandex/images/18772141/896368d0d9a228019364ec4915222f61-400x400nocrop.jpeg",
        cal: 810,
        category: "burger",
        volume: null
    },
    {
        id: 2,
        title: "Angus Cheddar Bacon",
        price: 599,
        img: "https://eda.yandex/images/18644967/b3ec946b1694e6280e1a27ad9c816393-400x400nocrop.jpeg",
        cal: 840,
        category: "burger",
        volume: null
    },
    {
        id: 3,
        title: "Double Angus Cheddar Bacon",
        price: 799,
        img: "https://eda.yandex/images/17752687/1e85a04ae0d45aa52f2701567ed00727-400x400nocrop.jpeg",
        cal: 1270,
        category: "burger",
        volume: null
    },
    {
        id: 4,
        title: "Angus Parmesan",
        price: 699,
        img: "https://eda.yandex/images/14835768/7f80767fe78a1ad2039e5b3935358a8b-400x400nocrop.jpeg",
        cal: 900,
        category: "burger",
        volume: null
    },
    {
        id: 5,
        title: "Double Angus Parmesan",
        price: 899,
        img: "https://eda.yandex/images/15382203/e5a0cebbd1d515bb1cf66ef64bc8b0a2-400x400nocrop.jpeg",
        cal: 1300,
        category: "burger",
        volume: null
    },
    {
        id: 6,
        title: "Whopper",
        price: 399,
        img: "https://eda.yandex/images/14904645/1582fb053915af1fc02132391b92db5b-400x400nocrop.jpeg",
        cal: 720,
        category: "burger",
        volume: null
    },
    {
        id: 7,
        title: "Whopper With Cheese",
        price: 499,
        img: "https://eda.yandex/images/13190335/f6698f75f244c905fe45993822eec6c1-400x400nocrop.jpeg",
        cal: 644,
        category: "burger",
        volume: null
    },
    {
        id: 8,
        title: "Double Whopper",
        price: 589,
        img: "https://eda.yandex/images/10503578/fc9637a0ba258f586ed786b7daabd565-400x400nocrop.jpeg",
        cal: 1050,
        category: "burger",
        volume: null
    },
    {
        id: 9,
        title: "Whopper Junior",
        price: 349,
        img: "https://eda.yandex/images/14440961/edbd28fb5d2bea43f4f5043b3ddeabca-400x400nocrop.jpeg",
        cal: 370,
        category: "burger",
        volume: null
    },
    {
        id: 10,
        title: "Triple Whopper",
        price: 699,
        img: "https://eda.yandex/images/14739469/d8f09f83333be251a6d6cf73ec31cd86-400x400nocrop.jpeg",
        cal: 1380,
        category: "burger",
        volume: null
    },
    {
        id: 11,
        title: "Cheeseburger",
        price: 159,
        img: "https://eda.yandex/images/14549513/eb03e31e87f3d52f160dded542452459-400x400nocrop.jpeg",
        cal: 340,
        category: "burger",
        volume: null
    },
    {
        id: 12,
        title: "Double Cheeseburger",
        price: 349,
        img: "https://eda.yandex/images/18531941/b7143d4adc73670cd4c95d103944255d-400x400nocrop.jpeg",
        cal: 416,
        category: "burger",
        volume: null
    },
    {
        id: 13,
        title: "Spicy Cheeseburger",
        price: 149,
        img: "https://eda.yandex/images/14904645/ffb1aa8427384eb32db08291f6061a09-400x400nocrop.jpeg",
        cal: 360,
        category: "burger",
        volume: null
    },
    {
        id: 14,
        title: "Hamburger",
        price: 179,
        img: "https://eda.yandex/images/10503578/3530c98bccf974c0d85623435effb9f7-400x400nocrop.jpeg",
        cal: 248,
        category: "burger",
        volume: null
    },
    {
        id: 15,
        title: "Chicken Smoky Cheddar",
        price: 469,
        img: "https://eda.yandex/images/18753459/fdb6023fa63b20c565f5ca5443d487c8-400x400nocrop.jpeg",
        cal: 720,
        category: "burger",
        volume: null
    },
    {
        id: 16,
        title: "Chicken Tarter",
        price: 309,
        img: "https://eda.yandex/images/13802765/19fca58c27c179ac40f84828320f4abf-400x400nocrop.jpeg",
        cal: 481,
        category: "burger",
        volume: null
    },
    {
        id: 17,
        title: "Caesar King",
        price: 349,
        img: "https://eda.yandex/images/13802765/46ecad791dfa63cae71eb1be51b1891a-400x400nocrop.jpeg",
        cal: 450,
        category: "burger",
        volume: null
    },
    {
        id: 18,
        title: "Chicken King",
        price: 179,
        img: "https://eda.yandex/images/13802765/3a555374c55bfdc5e303504b281b2bdc-400x400nocrop.jpeg",
        cal: 322,
        category: "burger",
        volume: null
    },
    {
        id: 19,
        title: "Fish Burger",
        price: 299,
        img: "https://eda.yandex/images/10503578/019f558e237f0a46809b00fb7260dd05-400x400nocrop.jpeg",
        cal: 401,
        category: "burger",
        volume: null
    },
    {
        id: 20,
        title: "Shrimp 3Pcs",
        price: 479,
        img: "https://eda.yandex/images/13058477/1a69b95b14233cf2708c55426a1bc4b1-400x400nocrop.jpeg",
        cal: 80,
        category: "snack",
        volume: null
    },
    {
        id: 21,
        title: "Shrimp 6Pcs",
        price: 709,
        img: "https://eda.yandex/images/13912834/a42525c22a287bf0f44876cbb4d06616-400x400nocrop.jpeg",
        cal: 160,
        category: "snack",
        volume: null
    },
    {
        id: 22,
        title: "Shrimp 9Pcs",
        price: 1099,
        img: "https://eda.yandex/images/3806315/13a9ac88cadfe25caa527e385a58f832-400x400nocrop.jpeg",
        cal: 250,
        category: "snack",
        volume: null
    },
    {
        id: 23,
        title: "Shrimp Roll",
        price: 509,
        img: "https://eda.yandex/images/14908628/6e4ee759e3c950d2fec26fbd1576351d-400x400nocrop.jpeg",
        cal: 370,
        category: "snack",
        volume: null
    },
    {
        id: 24,
        title: "King Shrimp Bucket",
        price: 1069,
        img: "https://eda.yandex/images/1365461/456c9b03b5564f12600a2abeb8f105f4-400x400nocrop.jpeg",
        cal: 920,
        category: "snack",
        volume: null
    },
    {
        id: 25,
        title: "Caesar Salad With Shrimp",
        price: 529,
        img: "https://eda.yandex/images/16321539/abe3cc364be8711e8277633a4fc1995d-400x400nocrop.jpeg",
        cal: 463,
        category: "snack",
        volume: null
    },
    {
        id: 26,
        title: "Cheese Sauce",
        price: 99,
        img: "https://eda.yandex/images/1473782/7d4bb703b764f8ef610b3c5023d004da-400x400nocrop.jpeg",
        cal: 68,
        category: "sauce",
        volume: null
    },
    {
        id: 27,
        title: "Special Grill Sauce",
        price: 99,
        img: "https://eda.yandex/images/16321539/bd6833cc4b15ba969dc4ae64d16f27cf-400x400nocrop.jpeg",
        cal: 83,
        category: "sauce",
        volume: null
    },
    {
        id: 28,
        title: "Garlic Sauce",
        price: 99,
        img: "https://eda.yandex/images/3581687/53a4cdfb3fdf5b63b998e1a4f650b695-400x400nocrop.jpeg",
        cal: 83,
        category: "sauce",
        volume: null
    },
    {
        id: 29,
        title: "Caesar Sauce",
        price: 99,
        img: "https://eda.yandex/images/1473782/4fdb61006da4aee6ff37e4125bab216e-400x400nocrop.jpeg",
        cal: 120,
        category: "sauce",
        volume: null
    },
    {
        id: 30,
        title: "Sweet And Sour Sauce",
        price: 99,
        img: "https://eda.yandex/images/3702558/b2f6c71d19b5ad839da1a46298bfcaec-400x400nocrop.jpeg",
        cal: 33,
        category: "sauce",
        volume: null
    },
    {
        id: 31,
        title: "Curry Sauce",
        price: 99,
        img: "https://eda.yandex/images/3521394/5f643d6c61eb7e3ddbcbca4e99d1bfc4-400x400nocrop.jpeg",
        cal: 85,
        category: "sauce",
        volume: null
    },
    {
        id: 32,
        title: "Mustard Sauce",
        price: 99,
        img: "https://eda.yandex/images/3521394/c3bc97f69ac5995a8362513f388abd16-400x400nocrop.jpeg",
        cal: 68,
        category: "sauce",
        volume: null
    },
    {
        id: 33,
        title: "BBQ Sauce",
        price: 99,
        img: "https://eda.yandex/images/2415806/f6d66820d38b52c09e7243a2f26ff199-400x400nocrop.jpeg",
        cal: 33,
        category: "sauce",
        volume: null
    },
    {
        id: 34,
        title: "King Fries",
        price: 199,
        img: "https://eda.yandex/images/15413107/19d70bd7f3465342b1dc1d8685ad360a-400x400nocrop.jpeg",
        cal: 200,
        category: "snack",
        volume: null
    },
    {
        id: 35,
        title: "King Fries Large",
        price: 249,
        img: "https://eda.yandex/images/15231005/cc11394b191f389e823d9e7c86905558-400x400nocrop.jpeg",
        cal: 310,
        category: "snack",
        volume: null
    },
    {
        id: 36,
        title: "Royal Parmesan Fries",
        price: 349,
        img: "https://eda.yandex/images/18012291/768fd8cf30d442d9c09e658aee0ff723-400x400nocrop.jpeg",
        cal: 520,
        category: "snack",
        volume: null
    },
    {
        id: 37,
        title: "Nuggets 12Pcs",
        price: 314,
        img: "https://eda.yandex/images/3805444/c93359f28fcd3210623870df8c111b76-400x400nocrop.jpeg",
        cal: 480,
        category: "snack",
        volume: null
    },
    {
        id: 38,
        title: "Nuggets 6Pcs",
        price: 214,
        img: "https://eda.yandex/images/3508185/0f1f8aa2973433ae80093e73449541f3-400x400nocrop.jpeg",
        cal: 240,
        category: "snack",
        volume: null
    },
    {
        id: 39,
        title: "Wings 12Pcs",
        price: 509,
        img: "https://eda.yandex/images/3806315/bcc5b475ceb7df39dae054a512f25c0c-400x400nocrop.jpeg",
        cal: 990,
        category: "snack",
        volume: null
    },
    {
        id: 40,
        title: "Wings 6Pcs",
        price: 509,
        img: "https://eda.yandex/images/3508859/5c7b1fd30e4a4cf48ccca6e96575dc56-400x400nocrop.jpeg",
        cal: 490,
        category: "snack",
        volume: null
    },
    {
        id: 41,
        title: "Cheese Medallions 6Pcs",
        price: 249,
        img: "https://eda.yandex/images/1472406/86330430a58ab825e9e7e50da082675d-400x400nocrop.jpeg",
        cal: 230,
        category: "snack",
        volume: null
    },
    {
        id: 42,
        title: "Cheese Medallions 12Pcs",
        price: 409,
        img: "https://eda.yandex/images/1397595/5c72b36b16456f05b95f35fd89369cbe-400x400nocrop.jpeg",
        cal: 450,
        category: "snack",
        volume: null
    },
    {
        id: 43,
        title: "Onion Rings 6Pcs",
        price: 349,
        img: "https://eda.yandex/images/3508185/db8e1cbc7a4396619dc90cfcfab04c6b-400x400nocrop.jpeg",
        cal: 190,
        category: "snack",
        volume: null
    },
    {
        id: 44,
        title: "Onion Rings 12Pcs",
        price: 399,
        img: "https://eda.yandex/images/3191933/3bb2713b047c4fcc4dd4a9d39f933f7b-400x400nocrop.jpeg",
        cal: 380,
        category: "snack",
        volume: null
    },
    {
        id: 45,
        title: "Strips 6Pcs",
        price: 529,
        img: "https://eda.yandex/images/1473782/27161f1f6d9717474244efae458e087c-400x400nocrop.jpeg",
        cal: 460,
        category: "snack",
        volume: null
    },
    {
        id: 46,
        title: "Cola",
        price: 239,
        img: "https://eda.yandex/images/3793239/194db2deb852e658a3cac8f23cafd0af-400x400nocrop.jpeg",
        cal: null,
        category: "drink",
        volume: 500
    },
    {
        id: 47,
        title: "Lipton Green Tea",
        price: 239,
        img: "https://eda.yandex/images/3508185/5aedc4d3aeb79affa8668cff9a24d719-400x400nocrop.jpeg",
        cal: null,
        category: "drink",
        volume: 500
    },
    {
        id: 48,
        title: "Raspberry Shake",
        price: 249,
        img: "https://eda.yandex/images/3793239/5e5f56d8ae31bb22003a600144b02a9d-400x400nocrop.jpeg",
        cal: null,
        category: "drink",
        volume: 400
    },
    {
        id: 49,
        title: "Latte",
        price: 279,
        img: "https://eda.yandex/images/17717759/1cb87faab66b33b49d7ce811cedd9c2e-400x400nocrop.jpeg",
        cal: null,
        category: "drink",
        volume: 500
    },
    {
        id: 50,
        title: "Cappuccino",
        price: 279,
        img: "https://eda.yandex/images/17772865/5ff9857ebeae4890659db2a7487ae1aa-400x400nocrop.jpeg",
        cal: null,
        category: "drink",
        volume: 500
    },
    {
        id: 51,
        title: "Vanilla Shake",
        price: 249,
        img: "https://eda.yandex/images/3793239/5e5f56d8ae31bb22003a600144b02a9d-400x400nocrop.jpeg",
        cal: null,
        category: "drink",
        volume: 400
    },
    {
        id: 52,
        title: "Chocolate Shake",
        price: null,
        img: "https://eda.yandex/images/931388/58fe188e2ea18c4e43716aeed28383ac-400x400nocrop.jpeg",
        cal: null,
        category: "drink",
        volume: 400
    },
    {
        id: 53,
        title: "Cherry Pie",
        price: 209,
        img: "https://eda.yandex/images/3521394/b99e3130e70dfcd3693b5442ec189a2a-400x400nocrop.jpeg",
        cal: 234,
        category: "snack",
        volume: null
    },
    {
        id: 54,
        title: "Blueberry Pie",
        price: 209,
        img: "https://eda.yandex/images/17780910/66b1a5244abfec35517a5065b443fb21-400x400nocrop.jpeg",
        cal: 170,
        category: "snack",
        volume: null
    },
    {
        id: 55,
        title: "Disposable Gloves",
        price: 24,
        img: "https://eda.yandex/images/15377433/49f7292230db23b766dae16fd728c45f-400x400nocrop.jpeg",
        cal: null,
        category: "other",
        volume: null
    }
];

export default burgerKings;