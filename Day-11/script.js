// Event Delegation ek powerful technique hai jo aapko behtar performance, simple code, aur dynamic elements ko handle karne mein madad karti hai.

// Event Delegation ek JavaScript technique hai jismein hum kisi parent element par event listener lagate hain, bajay iske ki har ek child element par alag-alag event listener lagayein. Yeh technique khaaskar tab useful hoti hai jab aapke paas kai child elements ho ya jab child elements dynamically (runtime ke dauraan) jode ya hataye jaate ho.





// Grandparent element par event listener add karein
document.getElementById('grandparent').addEventListener('click', function(event) {
    // Event ka target (click kiya gaya element) prapt karein.

    let target = event.target;
    console.log(target);

    // Yadi click kiya gaya element child hai
    if(target.classList.contains('child')) {
        alert(target.innerText + ' click kiya gaya');
    }
});
