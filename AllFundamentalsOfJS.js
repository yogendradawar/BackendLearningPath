// #1

    // Fundamentals of JavaScripts :
    // Arrays and Objects
    // Functions return
    // async js coding
    // foreach map filter find indexOf



    //ForEach use in Functions

        // var arr = [1,2,4,5];
        // arr.forEach(function(val){
        //     console.log(val + 4);
        // })

    //Arr in Map

        // var arr = [3,5,35,3];
        // var newArr = arr.map(function(val){
        //     return 13;
        // })

        // console.log(newArr);

    //Filter 

        // var arr =[3,5,343,3];

        // let ans = arr.filter(function(val){
        //     return val > 3 ? true : false;
        // })
        
        // console.log(ans);

    //Find

        // var arr =[3,5,343,3];

        // let ans = arr.find(function(val){
        //     return val === 12 ? val : 0;
        // })
        
        // console.log(ans);


//Objects

        //key value Pairs

        // var obj = {
        //     firstName : 'Rena',
        //     age : 23,
        // };

        // Object.freeze(obj);


        //function is a obj in that we can define the length throught the parameters value


// async

        //line by line code chale isey kahte hai synchronous 
        //jo bhi code async nature ka ho, usey side stack mein bhej do and agle code ko chalao jo bhi sync nature ka ho, jab bhi saara syn code chal jaaye, tab check karo ki async code complete hua ya nahi and agar wo complete hua ho to usey main stack mein laao and chala do
        
        // async function abcd(){
        //     var blob = await fetch(`link`);
        //     var ans =  await blob.json();

        //     console.log(ans);
        // }

        // abcd();

// --------------------------------------------------------------------------------------------------------->


//ASYNC REFRENCE PART

        //sync and async kya hota hai? 
            // ----> sync matlab ek ke baad dusra hoga, jab tak ek command complete naa ho, dusra shuru nahi hoga
            // ----> async matlab saare kaam ek saath sahuru kardo, jiska answer pahle aajayega uska jawaab dedena

        //kaise pata chalta hai ki hum sync code lik rahe ya async?
            // setTimeout
            // setInterval
            // Promise
            // fetch
            // axios
            // XMLHttpRequest

        // async js hai kya ?
            // kai baar aapka final code depended hota hai kisi aur ke server par, is case mein humein nahi pata hota ki answer uske server se kab laut kar aayega, to hum kya nahi kr skte is writting sync code, isse niptane ke liye hum log async code likh dete hai taaki blocking naa ho and jab bhi answer aaye humara answer ke respect mein chalne waala code chal jaaye

            
            // async code ka main motive hota hai ki un cases mein jinmein hume pata nahi code ka answer kitni der mein aayega to jab bhi answer aa jaaye uske answer ke respect mein koi particular code chala dena 

            //EXAMPLE

            // setTimeout(callback,timeinms) // function, time in ms
            // setTimeout(function(){
            //     console.log("hey");
            // },2000)

        // js is not asynchronous

            //  async ka matalb hota hai do kaam ek saath hona

            //job bhi main stack par hota hai wo output karta hai and jo bhi side stack pr hota hai wo behind the scenes processing kar sakta hai aur jab uski processing complete ho use main stack mein laa kar chalaya jaa sakta hai

            //main STACK == > executions...

            // ---- > // EVENT LOOP intermeidator  between main stack and side stack 


        // async ki poori kahaani.
        // single threading and multi threading

        // callbacks

            // callback humesha ek functions hota hai,ye sirf tab chalta hai jab async code ka completion hojaata hai 

            // Calls 
                // fetch 
                // axios
                // promises 
                // settimeout 
                // setinterval

            // Calls and coming
                // then catch 
                // callbacks 
                // async wait 


        // promises
        // then and catch 

                //res --- > resolve /////   rej --- > reject

            // var ans = new Promise(function(res,rej){
            //     return res("Sab acche hai")
            // });
            

            // var ans2 = ans.then(function(data){           
            //     console.log(data);
            //     return new Promise(function(res,rej){
            //         return res("Mai bhi accha hu");
            //     });                               
            // })
            
            
            // var ans3 = ans2.then(function(data){           
            //     console.log(data);
            //     return new Promise(function(res,rej){
            //         return res("Aap kese ho");
            //     });                               
            // })
                
            // ans3.then(function(data){           
            //     console.log(data);                            
            // })


       

        // try and catch async await
        
            //koi bhi esa function jisme aap async code likhonge , kyoki async code hai to aap promises ka istemaal kar sakte ho , jab uska answer aayega aapko then lagana padega , us then ko lagaane se bachne ke liye, aap async await ka istemal kar sakte hai.

                // async function abcd(){
                //     let raw= await fetch(`link`);
                //     let ans = await raw.json();
                //     console.log(ans);
                // }

            //dekho jab bhi koi code async hai to aapko uske liye wait karna padta hai kyoki humein nahi pata uska answer kab aayega



        // 5 use cases ekdum real world waale 

            // node mein jab database
            // fetch 
            // settimeout 
            // setinterval


        //[concept aside]
        // concurrency and parallelim

            // concurrency --> js mein sync code and async code ek saath process ho raha tha ye hai concurrency;  // Example ---  main stack and side stack both run same time

            // parallelism --> focus jaada karta hai different processors and unke cores par kaam ko chalaane par

        // throttling

            // kisi code ko control karna number of executions 


