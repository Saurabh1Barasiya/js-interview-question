// all about event delegation.

// Event Delegation ek JavaScript technique hai jismein hum kisi parent element par event listener lagate hain, bajay iske ki har ek child element par alag-alag event listener lagayein. Yeh technique khaaskar tab useful hoti hai jab aapke paas kai child elements ho ya jab child elements dynamically (runtime ke dauraan) jode ya hataye jaate ho.





document.getElementById('parentList').addEventListener('click', function (event) {
    // Event ka target (click kiya gaya element) prapt karein
    let target = event.target;

    // Yadi click kiya gaya element li hai
    if (target.tagName === 'LI') {
        alert(target.innerText + ' click kiya gaya');
    }
});