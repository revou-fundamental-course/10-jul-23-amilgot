const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const tb = parseInt(document.querySelector('#tb').value);
    const bb = parseInt(document.querySelector('#bb').value);
    const results = document.querySelector('#results');
    
    if((tb === '') || (tb < 10) || (isNaN(tb))){
        results.innerHTML = "Mohon isi Tinggi Badan dengan benar";
        
    } else if (bb === '' || bb < 5 || isNaN(bb)){
        results.innerHTML = "Mohon isi Berat Badan dengan benar";
    } else {
    //hitung BMI
    const bmi = (bb / ((tb*tb)/10000)).toFixed(2);
    //tampilkan Hasil dari hitungan BMI
    results.innerHTML = `<span>${bmi}</span>`
    }
    
    
});
