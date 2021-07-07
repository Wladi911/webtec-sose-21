function zumWarenkorbHinzufuegen(produkt) {
    // Hole das Warenkorb-Array aus dem localStorage über den Schlüssel 'warenkorb'
    let warenkorb = JSON.parse(localStorage.getItem('warenkorb'));
  
    // Wenn der Warenkorb bereits Produkte enthält ...
    if (warenkorb) {
      // Produkt zum Warenkorb hinzufügen
      warenkorb.push(produkt)
      // Das aktualisierte Warenkorb-Array in localStorage speichern
      localStorage.setItem('warenkorb', JSON.stringify(warenkorb));
  
      // Ansonsten, wenn der Warenkorb noch leer ist ...
    } else {
      // Produkt in ein neues Array einfügen und das neue Warenkorb-Array
      // in localStorage unter dem Schlüssel 'warenkorb' speichern
      localStorage.setItem('warenkorb', JSON.stringify([produkt]));
    }
  }

  /* let produkt = {
    bild_url: "ProdKartoffeln.jpg",
    produktname: 'Kartoffeln (festkochend)',
    produkthersteller: 'Bauer Schmidt & Söhne',
    produktpreis: '4,00€/kg '} */
