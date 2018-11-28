const hinnad = {
  'Viru Valge 0.5L': [10.49, 6.12],
  'Caribba Negro 0.5L': [10.99, 6.65],
  'Sierra Silver tekiila 1L': [20, 11.5],
  'Beefeater London Dry 1L': [29.9,  17.99],
  'Somersby Apple 0.5L': [1.29, 0.97],
}
const alecoq = [0.78, 0.6945]


function kalkuleeri(){
  let vahemaa = Number(document.querySelector('.vahemaa').value);
  let kütusekulu = Number(document.querySelector('.kütusekulu').value);
  let kütusehind = Number(document.querySelector('.hind').value);
  let kütusele = (vahemaa / 100) * kütusekulu * kütusehind * 2;

  let palju = kütusele;
  const alko = [];
  for (const key in hinnad) {
    const delta = hinnad[key][0] - hinnad[key][1];
    const arv = Math.min(3, Math.floor((palju/1.25)/delta));
    if (arv === 0) {
      break;
    } else {
      palju -=  delta * arv;
      alko.push(`${arv}x ${key}`);
    }
  }

  if (palju > alecoq[0] - alecoq[1]) {
    alko.push(`${Math.floor(palju / (alecoq[0] - alecoq[1]))}x A.Le.Coq Premium 0.5L`);
    palju = 0;
  }
  console.log(alko, palju, kütusele);
  document.querySelector('.tulemus p').innerHTML = 'Selleks, et Lätti minemine väärt oleks, peaksite Valkast ostma: '+ alko.join(', ');
}
