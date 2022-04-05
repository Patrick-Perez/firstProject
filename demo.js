let data = [
  {
    image: "img/ab.png",
    attacktype: "Melee",
    name: "Abaddon",
    complexity: "1",
    description:
     "The Font of Avernus is the source of a family's strength, a crack in primal stones from which vapors of prophetic power have issued for generations. Each newborn of the cavernous House Avernus is bathed in the black mist, and by this baptism they are given an innate connection to the mystic energies of the land. They grow up believing themselves fierce protectors of their lineal traditions, the customs of the realm--but what they really are protecting is the Font itself. And the motives of the mist are unclear.",
    mainAtribute: "Fuerza"
  },
  {
    image: "img/ze.png",
    attacktype: "Ranged",
    name: "Zeus",
    complexity: "1",
    description:
     "Lord of Heaven, father of gods, Zeus treats all the Heroes as if they are his rambunctious, rebellious children. After being caught unnumbered times in the midst of trysts with countless mortal women, his divine wife finally gave him an ultimatum: 'If you love mortals so much, go and become one. If you can prove yourself faithful, then return to me as my immortal husband. Otherwise, go and die among your creatures.' Zeus found her logic (and her magic) irrefutable, and agreed to her plan. He has been on his best behavior ever since, being somewhat fonder of immortality than he is of mortals. But to prove himself worthy of his eternal spouse, he must continue to pursue victory on the field of battle.",
    mainAtribute: "Inteligencia"
  },
  {
    image: "img/li.png",
    attacktype: "Melee",
    name: "Lifestealer",
    complexity: "2",
    description:
     "In the dungeons of Devarque, a vengeful wizard lay in shackles, plotting his escape. He shared his cell with a gibbering creature known as N'aix, a thief cursed by the Vile Council with longevity, so that its life-sentence for theft and cozening might be as punishing as possible. Over the years, its chains had corroded, along with its sanity; N'aix retained no memory of its former life and no longer dreamt of escape.",
    mainAtribute: "Fuerza"
  },
  {
    image: "img/en.png",
    attacktype: "Ranged",
    name: "Enchantress",
    complexity: "2",
    description: 
     "Aiushtha appears to be an innocent, carefree creature of the woods, and while this is certainly true, it is hardly the sum of her story. She well understands the suffering of the natural world. She has wandered far, and fared through forests bright and drear, in every clime and every season, gathering friends, sharing news, bringing laughter and healing wherever she goes. For in worlds wracked by war, forests are leveled for the building of ships and siege engines; and even in places of peace, the woods are stripped for the building of homes, and as fuel for countless hearths.",
    mainAtribute: "Inteligencia",
  },
  {
    image: "img/leee.png",
    attacktype: "Ranged",
    name: "Leshrac",
    complexity: "3",
    description: 
     "Leshrac, Tormented Soul, is an entity torn from the heart of nature, a liminal being that exists half in one plane of existence, half in another. His penetrating intelligence is such that he can never ignore for a moment the agonizing horror at the heart of all creation. Once a great philosopher who sought the meaning of existence, he plumbed the depths of nature with the haunted Chronoptic Crystals, and was forever altered by the hideous mysteries thereby revealed to him. Now the darkest depths of his enlightenment are illumined only by the fitful glare of his arrogance. Like other elemental characters, he is completely at one with nature, but in his case it is a nature lurid and vile. He alone sees the evil truth of reality, and has no use for those who believe the cosmos reserves a special reward for those who practice benevolence.",
    mainAtribute: "Inteligencia",
  },
  {
    image: "img/og.png",
    attacktype: "Melee",
    name: "Ogre Magi",
    complexity: "1",
    description: 
     "The ordinary ogre is the creature for whom the phrase 'As dumb as a bag of rock hammers' was coined. In his natural state, an ogre is supremely incapable of doing or deciding anything. Clothed in dirt, he sometimes finds himself accidentally draped in animal skins after eating lanekill. Not an especially social creature, he is most often found affectionately consorting with the boulders or tree-stumps he has mistaken for kin (a factor that may explain the ogre's low rate of reproduction). However, once every generation or so, the ogre race is blessed with the birth of a two-headed Ogre Magi, who is immediately given the traditional name of Aggron Stonebreak, the name of the first and perhaps only wise ogre in their line's history.",
    mainAtribute: "Inteligencia",
  },
];

/* let table = document.querySelector("#table");
let content = table.innerHTML;
for (let i = 0; i < data.length; i++) {
  content =
    content + 
    `<div>
      <div><img src="${data[i].image}" width="100%" /></div>
      <div>${data[i].mainAtribute}</div>
      <div>${data[i].name}</div>
      <div>${data[i].description}</div>
      <div>${data[i].attacktype}</div>
      <div>${data[i].complexity}</div>
      <div>
        <button>Editar</button>
        <button>Borrar</button>
      </div>
    </div>`;
}
table.innerHTML = content; */

let table = document.querySelector("#newTable");
let content = table.innerHTML;
for (let i = 0; i < 4 ; i++) {
  content =
    content + 
    `<div class="row bg-light" id="">
      <div class="col-12 py-3 bg-secondary">
        <p class="h5 fw-bold text-dark mb-4"><span class="text-uppercase">Foto</span> </p>
        <img src="${data[i].image}" height="250vh" width="%" />
      </div>
      <div class="col-12 col-md-6 col-xl-4 py-3 border">
        <p class="h5 fw-bold text-dark mb-4"><span class="text-danger text-uppercase">A/principal</span> </p>
        <p class="fs-5 fw-bold">${data[i].mainAtribute}</p>
      </div>
      <div class="col-12 col-md-6 col-xl-4 py-3 border">
        <p class="h5 fw-bold text-dark mb-4"><span class="text-danger text-uppercase">Nombre</span> </p>
        ${data[i].name} 
      </div>
      <div class="col-12 col-md-6 col-xl-4 py-3 border">
        <p class="h5 fw-bold text-dark mb-4"><span class="text-danger text-uppercase">Descripcion</span> </p>
        ${data[i].description}
      </div>
      <div class="col-12 col-md-6 col-xl-4 py-3 border">
        <p class="h5 fw-bold text-dark mb-4"><span class="text-danger text-uppercase">Tipo</span> </p>
        ${data[i].attacktype}
      </div>
      <div class="col-12 col-md-6 col-xl-4 py-3 border">
        <p class="h5 fw-bold text-dark mb-4"><span class="text-danger text-uppercase">Complejidad</span> </p>
        ${data[i].complexity}
      </div>
      <div class="col-12 col-md-6 col-xl-4 py-3 border">
        <p class="h5 fw-bold text-dark mb-4"><span class="text-danger text-uppercase">Acciones</span> </p>
        <button>Editar</button>
        <button>Borrar</button>
      </div>
    </div>`;
}    
table.innerHTML = content;



/* var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


var popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
  container: 'body'
}) */