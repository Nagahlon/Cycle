var formcomplet="";

function formulaire(){

    var genre=["Homme","Femme"];
    var typejeux=["Jeux de stratégie","Jeux de coopération","Jeux de plateau","Jeux de rôles","Jeux de cartes","Jeux d'adresse","Partygame"];
    var jeuxstrat=["Echec","Dame","Risk"];
    var jeuxcoop=["Horreur à Arkham","5 minutes dungeon","Saboteur"];
    var jeuxplat=["Monopoly","Cluedo","Les aventuriers du rails"];
    var jeuxrole=["Warhammer","Pathfinder","Loup Garou"];
    var jeuxcarte=["Magic","Poker","Keyforge"];
    var jeuxadresse=["Icecool","Kluster","Flying Goblin"];
    var partygame=["Jungle speed","Time's up","Blanc manger coco"];
    var notes=["1","2","3","4","5"];

    //tableau qui rassemble tous les jeux
    var tousjeux=jeuxstrat.concat(jeuxcoop,jeuxplat,jeuxrole,jeuxcarte,jeuxadresse,partygame);


    var contenue="<h2 id='partie1' class='color'>Identité :</h2>";

    for(var i=0;i<genre.length;i++){ //parcours le tableau de genre
    contenue+= genre[i]+"<input type='radio' name='sexe' value='"+genre[i]+"'></input>";
    }

    contenue+="<div>";
    contenue+="<label>Nom</label>";
    contenue+="<input type='text' id='name'>";
    contenue+="</div>";

    contenue+="<div>";
    contenue+="<label>Prénom</label>";
    contenue+="<input type='text' id='surname'>";
    contenue+="</div>";

    contenue+="<div>";
    contenue+="Email <input type='email' id='mail'>";
    contenue+="</div>";

    contenue+="<div>";
    contenue+="Confirmez votre email <input type='email' id='verifmail'>";
    contenue+="</div>";

    contenue+="<div>";
    contenue+="Date de naissance<input type='date' id='datedenaissance'>";
    contenue+="</div>";

    contenue+="<div class='optionnelle'>";
    contenue+="Adresse postale"
	contenue+="<input type='rue' name='adresse'>"
	contenue+="<input type='ville' name='adresse'>"
	contenue+="<input type='codepostal' name='adresse'></input>"
    contenue+="</div>";

    contenue+="<div>";
    contenue+="Téléphone<input type='tel' name='telephone' class='optionnel'>";
    contenue+="</div>";

    contenue+="<h2 id='partie2' class='color'>Préférence de jeux :</h2>";

    contenue+="<fieldset>";
    contenue+="<legend>Choisissez vos catégories de jeux préférés :</legend>";
    for(var i=0;i<typejeux.length;i++){ //parcours le tableau de jeux
        contenue+="<div>"+typejeux[i]+"<input type='checkbox' name='jeux' value='"+typejeux[i]+"'></input></div>";
        }
    contenue+="</fieldset>";

    contenue+="<br>";

    contenue+="<fieldset>";
    contenue+="<legend>Choisissez vos jeux préférés :</legend>";
    for(var i=0;i<jeuxstrat.length;i++){ //parcours le tableau de jeux stratégiques
        contenue+="<div>"+jeuxstrat[i]+"<input type='checkbox' name='jeuxstrat' value='"+jeuxstrat[i]+"'></input></div>";
        }

    for(var i=0;i<jeuxcoop.length;i++){ //parcours le tableau de jeux de coopération
        contenue+="<div>"+jeuxcoop[i]+"<input type='checkbox' name='jeuxcoop' value='"+jeuxcoop[i]+"'></input></div>";
        }

    for(var i=0;i<jeuxplat.length;i++){ //parcours le tableau de jeux de plateau
        contenue+="<div>"+jeuxplat[i]+"<input type='checkbox' name='jeuxplat' value='"+jeuxplat[i]+"'></input></div>";
        }

    for(var i=0;i<jeuxrole.length;i++){ //parcours le tableau de jeux de rôles
        contenue+="<div>"+jeuxrole[i]+"<input type='checkbox' name='jeuxrole' value='"+jeuxrole[i]+"'></input></div>";
        }
    
    for(var i=0;i<jeuxcarte.length;i++){ //parcours le tableau de jeux de cartes
        contenue+="<div>"+jeuxcarte[i]+"<input type='checkbox' name='jeuxcarte' value='"+jeuxcarte[i]+"'></input></div>";
        }

    for(var i=0;i<jeuxadresse.length;i++){ //parcours le tableau de jeux d'adresse
        contenue+="<div>"+jeuxadresse[i]+"<input type='checkbox' name='jeuxadresse' value='"+jeuxadresse[i]+"'></input></div>";
        }

    for(var i=0;i<partygame.length;i++){ //parcours le tableau de jeux de partygame
        contenue+="<div>"+partygame[i]+"<input type='checkbox' name='partygame' value='"+partygame[i]+"'></input></div>";
        }
    contenue+="</fieldset>";

    contenue+="<h2 id='partie3' class='color'>Avis de jeux :</h2>";

    contenue+="<div>";
    contenue+="<label>Choisissez le jeu dont vous souhaitez donner un avis :</label>";
    
    contenue+="<select id='avis'>";
    contenue+="<option value=''>Choisissez un jeu</option>";
    for(var i=0;i<tousjeux.length;i++){ //parcours le tableau de tous les jeux
        contenue+="<option value='"+tousjeux[i]+"'>"+tousjeux[i]+"</option>";
        }
    contenue+="</select>";
    contenue+="</div>";

    contenue+="<br>";

    contenue+="<div>";
    contenue+="<label>Commentaires :</label>";
    contenue+="<br>";
    contenue+="<textarea id='commentaires' rows='5' cols='50'></textarea>";
    contenue+="</div>";

    contenue+="<br>";

    contenue+="<div>";
    contenue+="<label>Quelle note donnez-vous à ce jeu ? </label>";
    contenue+="<select name='note' id='note'>";
    contenue+="<option value=''>Choisissez une note</option>";
    for(var i=0;i<notes.length;i++){ //parcours le tableau de notes
        contenue+="<option value='"+notes[i]+"'>"+notes[i]+"</option>";
    }
    contenue+="</select>";
    contenue+="</div>";

    contenue+="<div>bouh</div>";

    contenue+="<h2 id='partie4' class='color'>Validation du formulaire :</h2>";

    contenue+="<div>";
    contenue+="<button type='button' id='effacer'>Effacer le formulaire</button>";
    contenue+="</div>";

    contenue+="<div>";
    contenue+="<button type='button' id='valider'>Valider le formulaire</button>";
    contenue+="</div>";

    document.getElementById("form").innerHTML=contenue;
}