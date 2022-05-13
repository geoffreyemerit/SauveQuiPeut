const associations = [
  {
    id: 1,
    name: "LA FONDATION GOODPLANET",
    desc: "La fondation Goodplanet a été créée en 2005. Ses objectifs sont axés sur la protection de l’environnement. Dans ce sens, elle a éveillé la conscience des populations sur les enjeux liés à l’environnement et a encouragé les uns et les autres à respecter la planète en changeant les modes de vie. Ses actions s’appuient sur une série de programmes bien élaborée. De ce fait, la fondation sensibilise par l’image, avec des expositions grand public. Elle informe sur l’environnement et ses enjeux par le biais de son magazine Goodplanet et autre publication. En réalité, Goodplanet éduque au développement durable en réalisant des affiches dans les écoles. Elle prend l’initiative des projets socio-environnementaux dans les pays du sud.",
    image: "../../public/assets/assos/goodplanet.jpeg",
    age: "2005",
  },
  {
    id: 2,
    name: "LA FONDATION NICOLAS HULOT POUR LA NATURE ET L’HOMME (FNH)",
    desc: "Pour apporter sa contribution à la préservation de l’environnement, la fondation FNH pour la nature et l’homme a été créée en 1990 et reconnue d’utilité publique en 1996. C’est une ONG apolitique, et non confessionnelle dont les actions convergent vers la construction d’une nouvelle forme de société et de culture pour un développement durable et harmonieux. Elle a pour but d’assurer l’éducation à l’environnement par des stratégies bien précises. Ainsi elle participe à la propagation d’information sur l’état écologique de la terre. De même, elle utilise des méthodes appropriées visant à conduire à un changement de comportements des habitants de la terre pour un développement plus durable. Il faut souligner que les actions de la fondation sont soutenues par ses partenaires fondateurs.",
    image: "../../public/assets/assos/nicolashulot.png",
    age: "1990",
  },
  {
    id: 3,
    name: "L’ASSOCIATION TERAGIR",
    desc: "Leur domaine d’action a suscité des activités qui ont un impact positif sur l’environnement. L’association Teragir agit à tous les niveaux c’est-à-dire sur toutes les couches de la population, enfants, adultes. Créée en 1983, elle est à but non lucratif. Aussi, imprégner des réalités écologiques du moment, Teragir élabore des stratégies qui permettent de comprendre et d’agir. Elle est en collaboration surtout avec les apporteurs d’idée. Teragir est donc une association reconnue d’intérêt général. Aujourd’hui, elle accompagne les acteurs de la société dans leurs projets de développement durable grâce à ses programmes d’actions. Ainsi, chaque année, l’association amène de nombreux Français à participer à des actions qui impactent positivement plusieurs éléments de l’environnement.",
    image: "../../public/assets/assos/teragir.jpeg",
    age: "1983",
  },
  {
    id: 4,
    name: "WE ARE CLIMATES",
    desc: "Comme la plupart des associations citées plus haut, we are climate est créée dans le but d’accompagner la population malgache dans une lutte contre le réchauffement climatique. We are Climate est un festival qui a été organisé par l’ONG internationale Climate For Change le huit décembre à Antananarivo. En effet, selon l’indice mondial des risques, Madagascar est l’un des pays les plus touchés par le réchauffement climatique. D’où l’importance de faire comprendre au Malgache l’impact des déchets sur leur environnement. Les initiatives vertes sont nombreuses et les actions pour faire disparaître l’utilisation du sachet des modes de vie se multiplient.",
    image: "../../public/assets/assos/weareclimates.jpeg",
    age: "2011",
  },
  {
    id: 5,
    name: "WWF",
    desc: "Créée en 1961, WWF est la première organisation mondiale et la plus grande qui lutte pour la protection de l’environnement. Depuis 1973, le but de cette organisation est de travailler à ralentir la destruction de l’environnement afin d’offrir aux générations futures une planète saine où il fait bon vivre. En outre, ses actions touchent le réchauffement climatique. À cet effet, elle mobilise les populations à réduire l’émission des gaz à effet de serre. En ce qui concerne la pollution chimique, WWF œuvre à remplacer les produits chimiques les plus toxiques par des alternatives qui pourraient préserver l’environnement et la santé humaine. Aussi elle vise à régulariser le climat des forêts. Il est donc important de les préserver des feux de brousse.",
    image: "../../public/assets/assos/WWF.png",
    age: "1961",
  },
  {
    id: 6,
    name: "LE RÉSEAU ÉCOLE ET NATURE",
    desc: "Toujours convergeant dans le même sens, Le Réseau École et Nature lutte pour la protection de l’environnement. Créée en 1983, elle regroupe plusieurs acteurs engagés dans la lutte contre la dégradation de la nature. L’idée est de travailler en synergie pour un développement durable. De ce fait, le réseau est au service de ceux qui sont partisans de l’éducation à l’environnement tout en respectant et en soutenant leur initiative pour un développement durable. Il crée autour de lui un espace chaleureux de travail et d’innovation pour créer des ressources. Aussi, le réseau soutient les projets des acteurs engagés dans la protection de l’environnement et les porte à l’échelle nationale et internationale.",
    image: "../../public/assets/assos/reseauecoleetnature.jpeg",
    age: "1983",
  },
  {
    id: 7,
    name: "GREENPEACE",
    desc: "Le réseau Greenpeace est un réseau d’organisations indépendantes. Créé en 1971, il a pour mission la protection de l’écosystème et la promotion de la paix. Son mode de fonctionnement est basé sur le mouvement citoyen pour la construction d’un monde durable et équitable. Il travaille notamment avec les gouvernements qu’il responsabilise pour agir sur la destruction de l’environnement, les inégalités et les conflits. Le réseau Greenpeace est une ONG d’envergure internationale qui est présente dans plus de 55 pays à travers le monde. Les campagnes de l’ONG privilégient le pouvoir citoyen pour encourager ceux et celles qui épousent leurs idées. De plus, à juste titre, Greenpeace amène les gens à croire en un lendemain meilleur et les incite à mener des actions allant dans ce sens.",
    image: "../../public/assets/assos/greenpeace.jpeg",
    age: "1971",
  },
  {
    id: 8,
    name: "ZERO WASTE FRANCE",
    desc: "Zero weste France est une ONG qui a été fondée en 1997 en France. Sa mission est de promouvoir une ville sans déchet et gaspillage des ressources. Zero waste France est une association indépendante. Elle mène plusieurs actions notamment le festival Zero waste, l’opération « Rien de neuf», les dépôts de plaintes contre plusieurs grandes enseignes dans le cadre de sa problématique. Ses nombreuses actions médiatiques font d’elle un acteur important de la lutte contre l’émission de déchets dans la nature pour un développement durable. L’ONG est en relation avec Zero Waste Paris avec laquelle elle mène des actions entrant dans le cadre de sa vision pour un monde meilleur.",
    image: "../../public/assets/assos/zerowastefrance.png",
    age: "1997",
  },
  {
    id: 9,
    name: "NOE",
    desc: "Depuis 2001, NOE, une association à but non lucratif fait son chemin dans le domaine de la lutte contre la destruction de la planète et la préservation de l’espèce humaine. Sa mission est de préserver et de rétablir la biodiversité en France, mais aussi dans le monde pour un développement durable et harmonieux. NOE donne à chaque être humain, le moyen d’être un acteur de la protection de la nature. En effet pour préserver l’environnement, il faut la connaître, la comprendre et disposer de moyens pour agir. L’association mène donc des actions visant à informer le plus de personnes sur les merveilles de la nature et la nécessité de la protéger.",
    image: "../../public/assets/assos/noe.jpeg",
    age: "2001",
  },
  {
    id: 10,
    name: "PLANÈTE MER",
    desc: "Pour remédier aux problèmes de pollution et contribuer à la protection de l’espace marin, l’association Planète mer a été créée en 2007 par deux passionnés de la mer. L’objectif de cette association qui est d’intérêt général est de protéger l’océan et les activités humaines qui dépendent de celle-ci. Dans cette optique et pour une gestion durable des océans, l’association veut permettre à chacun d’agir positivement sur l’environnement maritime grâce à une meilleure information. Elle amène chacun à mieux penser les activités marines pour mieux protéger ce milieu. De même, Planète mer incite les populations à une exploitation plus judicieuse des ressources marines pour une pérennisation de celles-ci",
    image: "../../public/assets/assos/planetemer.png",
    age: "2007",
  },
];

export default associations;
