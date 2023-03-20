function getPilihanComputer() {
    const comp = Math.random()
    if (comp < 0.34) return 'gajah'
    if (comp >= 0.34 && comp < 0.67) return 'semut'
    return 'orang'
}

function getHasil (comp, player) {
    if (player == comp) return 'SERI'
    if (player == 'gajah') return (comp == 'semut') ? 'KALAH!' : 'MENANG!'
    if (player == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG!'
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH' : 'MENANG!'
}

function rotate () {
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['gajah','orang','semut'];
    let i = 0
    const waktuMulai = new Date().getTime()
    setInterval(function() {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return
        }
        imgComputer.setAttribute('src',`images/${gambar[i++]}.jpg`)
        if(i == gambar.length) i = 0;
        return
    },100);
}




const pilihan = document.querySelectorAll('li img')
pilihan.forEach(function (pil)  {
    pil.addEventListener('click', function() {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        rotate()

        setTimeout(function(){
            const imgComputer = document.querySelector('.img-computer')
            imgComputer.setAttribute('src',`images/${pilihanComputer}.jpg`);
    
            const info = document.getElementById('info')
            info.innerHTML = hasil;

        },1000)
        
    })
}) 


// const pGajah = document.querySelector('.gajah');

// pGajah.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer,pilihanPlayer);

//     const imgComputer = document.querySelector('.img-computer')
//     imgComputer.setAttribute(`src`,`images/${pilihanComputer}.jpg`);

//     const info = document.getElementById('info')
//     info.innerHTML = hasil;
// });


// const pOrang = document.querySelector('.orang');

// pOrang.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer,pilihanPlayer);

//     const imgComputer = document.querySelector('.img-computer')
//     imgComputer.setAttribute(`src`,`images/${pilihanComputer}.jpg`);

//     const info = document.getElementById('info')
//     info.innerHTML = hasil;
// });


// const pSemut = document.querySelector('.semut');

// pSemut.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer,pilihanPlayer);

//     const imgComputer = document.querySelector('.img-computer')
//     imgComputer.setAttribute(`src`,`images/${pilihanComputer}.jpg`);

//     const info = document.getElementById('info')
//     info.innerHTML = hasil;
// });
