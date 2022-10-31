function ToggleMenu(){
    if(document.getElementById("menuLateralClosed").style.display == "flex" || document.getElementById("menuLateralClosed").style.display == ""){
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