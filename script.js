let age = +prompt('Vvedite svoy vozrast ?');

   age = age <= 18 ? 'Vi eshe molodi, vam nujno uchitsya' : 'Vam nujno rabotat' && age <= 50 ? 'Vam nujno rabotat' : 'Vam skora na pensiyu' && age <= 59 || age <= 150 ? 'Vi pensioner' : 'Chto to poshlo ne tak'
   
   
alert(age)
    