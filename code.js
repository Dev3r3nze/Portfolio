function ToggleMenu(){
    if(document.getElementById("menuLateralClosed").style.display == "flex" || document.getElementById("menuLateralClosed").style.display == "techProyectoWeb1"){
        document.getElementById("menuLateralClosed").style.display = "none"
        document.getElementById("menuLateralOpened").style.display = "block"
    }else{
        document.getElementById("menuLateralClosed").style.display = "flex"
        document.getElementById("menuLateralOpened").style.display = "none"
    }
}

const descWeb = []
descWeb[0] = "Probablemente, de mis puntos más fuertes. Con más de 2 años de experiencia, tanto para webs, apps o juegos de navegador."
descWeb[1] = "Con más de 2 años de experiencia es uno de mis puntos más fuertes. Tengo experiencia y conocimientos en tecnologías como Bootstrap y Sass."
descWeb[2] = "Mi parte favorita del desarrollo web frontend, con más de 1 año de experiencia tanto  como juegos y resolución de problemas."
descWeb[3] = "Con menos de 1 año de experiencia, conozco las bases y los fudamentos del framework react, se trata de mi formación actual."
descWeb[4] = "Aunque prefiero el desarollo en el frontend, tengo conocimientos sobre el manejo de bases de datos y consultas sencillas con MySQL."

const descDesign = []
descDesign[0] = "Cuento ya con mas de 1 año de experiencia con este programa de diseño, lo he usado para prácticamente todos mis proyectos web y controlo todos sus aspectos."
descDesign[1] = "Con varios meses de experiencia con este programa, comenzé y descrubrí la creación de logos e iconos y se convirtió en un aréa con el que me siento cómodo."
descDesign[2] = "Llevo usando esta herramienta durante más de 2 años, para la creación de logos, webs y contenido para redes sociales y me encuentro muy cómodo usandola."
descDesign[3] = "Wordpress fue lo que me introdujo en el desarrollo y diseño web hace más de 3 años, he creado varios proyectos personales y conozco bien la herramienta."

const descGames = []
descGames[0] = "Lo que mejor conozco y en lo que mejor soy. Con más de 3 años de experiencia y 6 proyectos terminados, se trata de mi area preferida del desarrollo."
descGames[1] = "En C# cuento con más de 3 años de experiencia al igual que unity ya que es el lenguaje que este usa, a lo largo de los años he creado 6 pryectos completos."
descGames[2] = "Siempre me ha gustado crear mis propios sprites y animaciones aunque no sea mi punto fuerte, soy capaz de conseguir un buen resultado con esfuerzo."

const rutasWeb = []
rutasWeb[0] = "Recursos/htmlSkillContent.png"
rutasWeb[1] = "Recursos/cssSkillContent.png"
rutasWeb[2] = "Recursos/jsSkillContent.png"
rutasWeb[3] = "Recursos/reactSkillContent.png"
rutasWeb[4] = "Recursos/sqlSkillContent.png"

const rutasDesign = []
rutasDesign[0] = "Recursos/xdSkillContent.png"
rutasDesign[1] = "Recursos/illustratorSkillContent.png"
rutasDesign[2] = "Recursos/canvaSkillContent.png"
rutasDesign[3] = "Recursos/wordpressSkillContent.png"

const rutasGames = []
rutasGames[0] = "Recursos/unitySkillContent.png"
rutasGames[1] = "Recursos/c-sharpSkillContent.png"
rutasGames[2] = "Recursos/animationSkillContent.png"
rutasGames[3] = "Recursos/levelDesignSkillContent.png"

const iconWeb = []
iconWeb[0] = "Recursos/techs/html-5.png"
iconWeb[1] = "Recursos/techs/css-3.png"
iconWeb[2] = "Recursos/techs/js.png"
iconWeb[3] = "Recursos/techs/logo-react-icon.png"
iconWeb[4] = "Recursos/techs/sql-server.png"

const iconDesign = []
iconDesign[0] = "Recursos/techs/xd.png"
iconDesign[1] = "Recursos/techs/illustrator.png"
iconDesign[2] = "Recursos/techs/canva.png"
iconDesign[3] = "Recursos/techs/wordpress.png"

const iconGames = []
iconGames[0] = "Recursos/techs/unity.png"
iconGames[1] = "Recursos/techs/c-sharp.png"
iconGames[2] = "Recursos/techs/aseprite.png"

const ratingWeb = []
ratingWeb[0] = 3;
ratingWeb[1] = 2;
ratingWeb[2] = 3;
ratingWeb[3] = 1;
ratingWeb[4] = 1;

const ratingDesign = []
ratingDesign[0] = 3;
ratingDesign[1] = 2;
ratingDesign[2] = 3;
ratingDesign[3] = 2;

const ratingGames = []
ratingGames[0] = 3;
ratingGames[1] = 2;
ratingGames[2] = 1;


function CambiarWeb(num){
    
    document.getElementById("imageSkillWeb").src = iconWeb[num]
    document.getElementById("skillContentImageWeb").src = rutasWeb[num]
    document.getElementById("skillDescWeb").innerHTML = descWeb[num]
    switch (ratingWeb[num]){
        case 1:
            document.getElementById("imageRating1Web").style.display = "initial"
            document.getElementById("imageRating2Web").style.display = "none"
            document.getElementById("imageRating3Web").style.display = "none"
           
            break
        case 2:
            document.getElementById("imageRating1Web").style.display = "initial"
            document.getElementById("imageRating2Web").style.display = "initial"
            document.getElementById("imageRating3Web").style.display = "none"
            

            break
        case 3:
            document.getElementById("imageRating1Web").style.display = "initial"
            document.getElementById("imageRating2Web").style.display = "initial"
            document.getElementById("imageRating3Web").style.display = "initial"
            break
    }
    for(var i = 0; i < document.getElementsByClassName("skillNameWeb").length; i++){
        document.getElementsByClassName("skillNameWeb")[i].id = null
        
    }
    document.getElementsByClassName("skillNameWeb")[num].id = "skillSelected"
}

function CambiarDesign(num){
    
    document.getElementById("imageSkillDesign").src = iconDesign[num]
    document.getElementById("skillContentImageDesign").src = rutasDesign[num]
    document.getElementById("skillDescDesign").innerHTML = descDesign[num]
    switch (ratingDesign[num]){
        case 1:
            document.getElementById("imageRating1Design").style.display = "initial"
            document.getElementById("imageRating2Design").style.display = "none"
            document.getElementById("imageRating3Design").style.display = "none"
           
            break
        case 2:
            document.getElementById("imageRating1Design").style.display = "initial"
            document.getElementById("imageRating2Design").style.display = "initial"
            document.getElementById("imageRating3Design").style.display = "none"
            

            break
        case 3:
            document.getElementById("imageRating1Design").style.display = "initial"
            document.getElementById("imageRating2Design").style.display = "initial"
            document.getElementById("imageRating3Design").style.display = "initial"
            break
    }
    for(var i = 0; i < document.getElementsByClassName("skillNameDesign").length; i++){
        document.getElementsByClassName("skillNameDesign")[i].id = null
        
    }
    document.getElementsByClassName("skillNameDesign")[num].id = "skillSelected"
}

function CambiarGames(num){
    
    document.getElementById("imageSkillGames").src = iconGames[num]
    document.getElementById("skillContentImageGames").src = rutasGames[num]
    document.getElementById("skillDescGames").innerHTML = descGames[num]
    switch (ratingGames[num]){
        case 1:
            document.getElementById("imageRating1Games").style.display = "initial"
            document.getElementById("imageRating2Games").style.display = "none"
            document.getElementById("imageRating3Games").style.display = "none"
           
            break
        case 2:
            document.getElementById("imageRating1Games").style.display = "initial"
            document.getElementById("imageRating2Games").style.display = "initial"
            document.getElementById("imageRating3Games").style.display = "none"
            

            break
        case 3:
            document.getElementById("imageRating1Games").style.display = "initial"
            document.getElementById("imageRating2Games").style.display = "initial"
            document.getElementById("imageRating3Games").style.display = "initial"
            break
    }
    for(var i = 0; i < document.getElementsByClassName("skillNameGames").length; i++){
        document.getElementsByClassName("skillNameGames")[i].id = null
        
    }
    document.getElementsByClassName("skillNameGames")[num].id = "skillSelected"
}

const proyectos = []

const BigoSoft = {
    desc: "Proyecto del primer año del grado de Desarrollo de Aplicaciones Web, con mayor enfoque en el diseño que en la funcionalidad, se trata de una página para una empresa ficticia con diversas categorías.",
    imagen1: "Recursos/bigosoft/bigosoft1.png",
    imagen2: "Recursos/bigosoft/bigosoft2.png",
    enlace1: "BigoSoft/index.html",
    enlace1Text: "Probar",
    techs: 5
}

const Calculadora = {
    desc: "Proyecto que realizé para aprender a usar los contenedores flex de CSS principalmente, y reforzar mis conocimientos. Se trata de una calculadora capaz de realizar operaciones matemáticas simples.",
    imagen1: "Recursos/calculadora/calculadora1.png",
    imagen2: "Recursos/calculadora/calculadora2.png",
    enlace1: "Calculadora/index.html",
    enlace1Text: "Probar",
    techs: 4
}

const FrontendMentor = {
    desc: "Proyectos sacados de FrontendMentor, con ellos refuerzo y expando mis conocimientos tanto de CSS como JavaScript, puedes también buscar mi perfil para ver mi progreso a través de estos.",
    imagen1: "Recursos/frontendmentor/frontendmentor1.png",
    imagen2: "Recursos/frontendmentor/frontendmentor2.png",
    enlace1: "https://dev3r3nze.github.io/FrontendMentor/",
    enlace1Text: "Probar",
    techs: 3
}

const Extras = {
    desc: "Otros proyectos que he ido realizando se tratan de una web que te permite saber que prendas tienes en tu armario y organizarlos (descartada), y una web capaz de ordenar alfabéticamente una lista.",
    imagen1: "Recursos/extras/extras1.png",
    imagen2: "Recursos/extras/extras2.png",
    enlace1: "https://github.com/Dev3r3nze",
    enlace1Text: "Probar",
    techs: 3
}

const Logos = {
    desc: "Se trata de los logos que he ido creando a lo largo de estos meses que llevo con el diseño gráfico, se inlcuyen distintos estilos, colores y formas aunque el area en el que más cómodo me siento es el minimalismo.",
    imagen1: "Recursos/logos/logos1.png",
    imagen2: "Recursos/logos/logos2.png",
    techs: 5
}

const Overlays = {
    desc: "Estas son las overlays más destacadas que he creado, la de arriba es completamente personalizada para 'Anam1603'. La otra forma parte de un pack de 6 overlays que podían comprarse (actualmente disponibles).",
    imagen1: "Recursos/overlays/overlays1.png",
    imagen2: "Recursos/overlays/overlays2.png",
    techs: 2
}

const Webs = {
    desc: "Las webs que diseñé pero no desarrollé, una simula ser un restaurante de comida japonesa mientras que la otra se trata de una web que permite establecer un timer tipo pomodoro con intervalos personalizable.",
    imagen1: "Recursos/webs/webs1.png",
    imagen2: "Recursos/webs/webs2.png",
    techs: 1
}

const Marcas = {
    desc: "Diseño de logotipos con variantes incluidas, con colores y tipografía incluidos, se trata de dos márcas inventadas, simulan ser una cafetería y un podcast sobre el desarrollo web. Ambas creadas con Adobe Illustrator.",
    imagen1: "Recursos/marcas/marcas1.png",
    imagen2: "Recursos/marcas/marcas2.png",
    techs: 1
}

const Moonthrower = {
    desc: "Se trata de uno de mis últimos juegos, me centré principalmente en el aspecto visual y me siento satisfecho con el resultdao, el juego consiste en lanzar la Luna fuera de la orbita de la Tierra para llegar lo más lejos posible.",
    imagen1: "Recursos/moonthrower/moonthrower1.png",
    imagen2: "Recursos/moonthrower/moonthrower2.png",
    enlace1: "https://dev3r3nze.itch.io/moon-thrower",
    enlace1Text: "Jugar",
    techs: 3
}

const Devo = {
    desc: "El primer juego completamente desarrollado con HTML, CSS y JavaScript que relizé. Se trata de un clicker ambientado en el mundo crypto, deberás clickar para minar y poder comprar mejoras y recursos que minen por ti.",
    imagen1: "Recursos/devo/devo1.png",
    imagen2: "Recursos/devo/devo2.png",
    enlace1: "https://dev3r3nze.itch.io/devo-clicker-game",
    enlace1Text: "Jugar",
    techs: 3
}

const Prototipos = {
    desc: "Prototipos que no llegaron a ser terminados, uno se trata de un roguelike en el que deberás sobrevivir el mayor tiempo posible, y el otro manejas la consola de una estación espacial que debe lanzar su cohete al espacio.",
    imagen1: "Recursos/prototipos/prototipos1.png",
    imagen2: "Recursos/prototipos/prototipos2.png",
    enlace1: "https://dev3r3nze.itch.io/",
    enlace1Text: "Jugar",
    techs: 3
}

const Jams = {
    desc: "Aqui recopilo los proyectos creados para JAMs, el primero debes no perderte por el laverinto mientras luchas contra tu sueño, y en el otro debes coger tu pico y tu espada y minar minerales mientras te enfrentas a enemigos.",
    imagen1: "Recursos/jams/jams1.png",
    imagen2: "Recursos/jams/jams2.png",
    enlace1: "https://dev3r3nze.itch.io/",
    enlace1Text: "Jugar",
    techs: 3
}

proyectos.push(BigoSoft,Calculadora, FrontendMentor, Extras,Logos,Overlays,Webs,Marcas, Moonthrower, Devo, Prototipos, Jams)

function CambiarProyectosWeb(num){
    let numTechs = proyectos[num].techs
    
    document.getElementById("descProyectoWeb").innerHTML = proyectos[num].desc
    document.getElementById("imgProyecto1Web").src = proyectos[num].imagen1
    document.getElementById("imgProyecto2Web").src = proyectos[num].imagen2

    switch (numTechs){
        case 1:
            document.getElementById("techProyectoWeb1").style.display = "initial"
            document.getElementById("techProyectoWeb2").style.display = "none"
            document.getElementById("techProyectoWeb3").style.display = "none"
            document.getElementById("techProyectoWeb4").style.display = "none"
            document.getElementById("techProyectoWeb5").style.display = "none"
            document.getElementById("techProyectoWeb6").style.display = "none"
            break
        case 2:
            document.getElementById("techProyectoWeb1").style.display = "initial"
            document.getElementById("techProyectoWeb2").style.display = "initial"
            document.getElementById("techProyectoWeb3").style.display = "none"
            document.getElementById("techProyectoWeb4").style.display = "none"
            document.getElementById("techProyectoWeb5").style.display = "none"
            document.getElementById("techProyectoWeb6").style.display = "none"
            break
        case 3:
            document.getElementById("techProyectoWeb1").style.display = "initial"
            document.getElementById("techProyectoWeb2").style.display = "initial"
            document.getElementById("techProyectoWeb3").style.display = "initial"
            document.getElementById("techProyectoWeb4").style.display = "none"
            document.getElementById("techProyectoWeb5").style.display = "none"
            document.getElementById("techProyectoWeb6").style.display = "none"
            break
        case 4:
            document.getElementById("techProyectoWeb1").style.display = "initial"
            document.getElementById("techProyectoWeb2").style.display = "initial"
            document.getElementById("techProyectoWeb3").style.display = "initial"
            document.getElementById("techProyectoWeb4").style.display = "initial"
            document.getElementById("techProyectoWeb5").style.display = "none"
            document.getElementById("techProyectoWeb6").style.display = "none"
            
            break
        case 5:
            document.getElementById("techProyectoWeb1").style.display = "initial"
            document.getElementById("techProyectoWeb2").style.display = "initial"
            document.getElementById("techProyectoWeb3").style.display = "initial"
            document.getElementById("techProyectoWeb4").style.display = "initial"
            document.getElementById("techProyectoWeb5").style.display = "initial"
            document.getElementById("techProyectoWeb6").style.display = "none"
            

            break
        case 6:
            document.getElementById("techProyectoWeb1").style.display = "initial"
            document.getElementById("techProyectoWeb2").style.display = "initial"
            document.getElementById("techProyectoWeb3").style.display = "initial"
            document.getElementById("techProyectoWeb4").style.display = "initial"
            document.getElementById("techProyectoWeb5").style.display = "initial"
            document.getElementById("techProyectoWeb6").style.display = "initial"
            break
    }

    document.getElementById("BtnWeb").innerHTML = proyectos[num].enlace1Text;
    document.getElementById("BtnWeb").parentElement.href = proyectos[num].enlace1;
    for(var i = 0; i < document.getElementsByClassName("titleProyectoWeb").length; i++){
        document.getElementsByClassName("titleProyectoWeb")[i].id = null
        
    }
    document.getElementsByClassName("titleProyectoWeb")[num].id = "proyectSelected"
}

function CambiarProyectosDesign(num){
    let numTechs = proyectos[num].techs
    document.getElementById("descProyectoDesign").innerHTML = proyectos[num].desc
    document.getElementById("imgProyecto1Design").src = proyectos[num].imagen1
    document.getElementById("imgProyecto2Design").src = proyectos[num].imagen2

    switch (numTechs){
        case 1:
            document.getElementById("techProyectoDesign1").style.display = "initial"
            document.getElementById("techProyectoDesign2").style.display = "none"
            document.getElementById("techProyectoDesign3").style.display = "none"
            document.getElementById("techProyectoDesign4").style.display = "none"
            document.getElementById("techProyectoDesign5").style.display = "none"
            
            break
        case 2:
            document.getElementById("techProyectoDesign1").style.display = "initial"
            document.getElementById("techProyectoDesign2").style.display = "initial"
            document.getElementById("techProyectoDesign3").style.display = "none"
            document.getElementById("techProyectoDesign4").style.display = "none"
            document.getElementById("techProyectoDesign5").style.display = "none"
           
            break
        case 3:
            document.getElementById("techProyectoDesign1").style.display = "initial"
            document.getElementById("techProyectoDesign2").style.display = "initial"
            document.getElementById("techProyectoDesign3").style.display = "initial"
            document.getElementById("techProyectoDesign4").style.display = "none"
            document.getElementById("techProyectoDesign5").style.display = "none"
            
            break
        case 4:
            document.getElementById("techProyectoDesign1").style.display = "initial"
            document.getElementById("techProyectoDesign2").style.display = "initial"
            document.getElementById("techProyectoDesign3").style.display = "initial"
            document.getElementById("techProyectoDesign4").style.display = "initial"
            document.getElementById("techProyectoDesign5").style.display = "none"
           
            
            break
        case 5:
            document.getElementById("techProyectoDesign1").style.display = "initial"
            document.getElementById("techProyectoDesign2").style.display = "initial"
            document.getElementById("techProyectoDesign3").style.display = "initial"
            document.getElementById("techProyectoDesign4").style.display = "initial"
            document.getElementById("techProyectoDesign5").style.display = "initial"
            
       
    }
    for(var i = 0; i < document.getElementsByClassName("titleProyectoDesign").length; i++){
        document.getElementsByClassName("titleProyectoDesign")[i].id = null
    }
    document.getElementsByClassName("titleProyectoDesign")[num-4].id = "proyectSelected"
    
}

function CambiarProyectosGames(num){
    let numTechs = proyectos[num].techs
    document.getElementById("descProyectoGames").innerHTML = proyectos[num].desc
    document.getElementById("imgProyecto1Games").src = proyectos[num].imagen1
    document.getElementById("imgProyecto2Games").src = proyectos[num].imagen2

    switch (numTechs){
        case 1:
            document.getElementById("techProyectoGames1").style.display = "initial"
            document.getElementById("techProyectoGames2").style.display = "none"
            document.getElementById("techProyectoGames3").style.display = "none"
            break
        case 2:
            document.getElementById("techProyectoGames1").style.display = "initial"
            document.getElementById("techProyectoGames2").style.display = "initial"
            document.getElementById("techProyectoGames3").style.display = "none"
            break
        case 3:
            document.getElementById("techProyectoGames1").style.display = "initial"
            document.getElementById("techProyectoGames2").style.display = "initial"
            document.getElementById("techProyectoGames3").style.display = "initial"
            break
        
    }

    document.getElementById("BtnGames").innerHTML = proyectos[num].enlace1Text;
    document.getElementById("BtnGames").parentElement.href = proyectos[num].enlace1;
    for(var i = 0; i < document.getElementsByClassName("titleProyectoGames").length; i++){
        document.getElementsByClassName("titleProyectoGames")[i].id = null
        
    }
    document.getElementsByClassName("titleProyectoGames")[num-8].id = "proyectSelected"

}