import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import usePost from '../../hooks/usePost';
import images from '../../assets/images';
import { DiscussionEmbed } from 'disqus-react';

const useStyles = makeStyles (theme => ({
  cont: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
      display:"block",
      marginLeft: "2vh",
      marginRight: "2vh",
    },
    padding: theme.spacing(4),
    marginLeft: "7vh",
    marginRight: "7vh",
  },
card: {
  display: "flex",
  width: "100%",
  marginTop: "3vh",
  marginBottom: "3vh",
  height: "400px",
  background: "black",
  fontSize: "30px"
},
img: {
  display: "flex",
  height: "400px",
  width: "100%"
},
title: {
  width: "100%" ,
},
preface: {
  marginTop: "5vh",
},
date: {
  marginTop:"3vh",
},
box: {
  marginTop:"5vh",
  textAlign: "justify"
}, 
seccion: {
  marginTop:"10vh",
},  
}));

const PostView = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { data } = usePost(id);

  return (
    <Grid className={classes.cont}>
     
      { data ? 
        <Grid>
          <div>
          <Typography variant="h2" color="warning" component="h1">
              {data.seccion}
            </Typography>
          </div>
          <div className={classes.title} >
            <Typography variant="h1" color="textPrimary" component="h1">
              {data.title}
            </Typography>
            <div className={classes.preface}>
              <Typography variant="h4" color="textPrimary" component="h2">
                {data.preface}
              </Typography>
            </div>
            <div className={classes.date}>
              <Typography variant="h5" color="text" component="h4">
                {data.date}
              </Typography>
            </div>
          </div>
          <hr/> 
          <Grid className={classes.card}>
              <img
                alt="imag"
                src={images.img}
                className={classes.img}
              />    
          </Grid>           
          <div>
          <Typography variant="h3" color="textSecondary" component="h2">
              {data.author}
            </Typography>
          </div>  
          <hr/>    
          <div className={classes.box}>
            <Typography variant="h4" color="textSecondary" component="p">
              La definición más extendida de oído absoluto es aquella que lo describe como “la habilidad de identificar una nota por su nombre sin la ayuda de una nota referencial" o el "ser capaz de producir exactamente una nota solicitada -cantando- sin ninguna referencia. Esta capacidad está relacionada con la memoria auditiva, o sea, la capacidad de recordar ciertos sonidos”. De acuerdo a un estudio publicado en la revista científica Journal of Neuroscience, se adquiere por genética y no por estudio. En el caso de Charly García, quien hoy cumple 69 años, el oído absoluto lo heredó de su bisabuelo.
              El tema se instaló en el verano de 1997 cuando Osvaldo Soriano, pocos días antes de morir, escribió en Página 12 un artículo titulado “Absoluto”. La cuestión llama poderosamente la atención porque el músico tenía 45 años en ese momento. O sea que, recién a esa edad, su oído absoluto llegó a los medios masivos de comunicación.
              Roque Di Pietro, autor de “Esta noche toca Charly”, el libro que retrata al artista como “músico de escenarios”, afirmó al respecto en diálogo con Infobae: “Lo que más me sorprendió fue llegar a la conclusión de que de algún modo fue el propio Charly quien decidió en qué momento instalar el tema en la agenda mediática”.
              “Al igual que todas las personas con oído absoluto, Charly lo tiene de nacimiento. Ahora, desde el comienzo de su carrera profesional hasta principios de los ’90, no hay ninguna referencia a su oído absoluto en las decenas de kilos de prensa gráfica dedicadas a Charly García”, detalló. 
              La definición más extendida de oído absoluto es aquella que lo describe como “la habilidad de identificar una nota por su nombre sin la ayuda de una nota referencial" o el "ser capaz de producir exactamente una nota solicitada -cantando- sin ninguna referencia. Esta capacidad está relacionada con la memoria auditiva, o sea, la capacidad de recordar ciertos sonidos”. De acuerdo a un estudio publicado en la revista científica Journal of Neuroscience, se adquiere por genética y no por estudio. En el caso de Charly García, quien hoy cumple 69 años, el oído absoluto lo heredó de su bisabuelo.
              El tema se instaló en el verano de 1997 cuando Osvaldo Soriano, pocos días antes de morir, escribió en Página 12 un artículo titulado “Absoluto”. La cuestión llama poderosamente la atención porque el músico tenía 45 años en ese momento. O sea que, recién a esa edad, su oído absoluto llegó a los medios masivos de comunicación.
              Roque Di Pietro, autor de “Esta noche toca Charly”, el libro que retrata al artista como “músico de escenarios”, afirmó al respecto en diálogo con Infobae: “Lo que más me sorprendió fue llegar a la conclusión de que de algún modo fue el propio Charly quien decidió en qué momento instalar el tema en la agenda mediática”.
              “Al igual que todas las personas con oído absoluto, Charly lo tiene de nacimiento. Ahora, desde el comienzo de su carrera profesional hasta principios de los ’90, no hay ninguna referencia a su oído absoluto en las decenas de kilos de prensa gráfica dedicadas a Charly García”, detalló. 
              La definición más extendida de oído absoluto es aquella que lo describe como “la habilidad de identificar una nota por su nombre sin la ayuda de una nota referencial" o el "ser capaz de producir exactamente una nota solicitada -cantando- sin ninguna referencia. Esta capacidad está relacionada con la memoria auditiva, o sea, la capacidad de recordar ciertos sonidos”. De acuerdo a un estudio publicado en la revista científica Journal of Neuroscience, se adquiere por genética y no por estudio. En el caso de Charly García, quien hoy cumple 69 años, el oído absoluto lo heredó de su bisabuelo.
              El tema se instaló en el verano de 1997 cuando Osvaldo Soriano, pocos días antes de morir, escribió en Página 12 un artículo titulado “Absoluto”. La cuestión llama poderosamente la atención porque el músico tenía 45 años en ese momento. O sea que, recién a esa edad, su oído absoluto llegó a los medios masivos de comunicación.
              Roque Di Pietro, autor de “Esta noche toca Charly”, el libro que retrata al artista como “músico de escenarios”, afirmó al respecto en diálogo con Infobae: “Lo que más me sorprendió fue llegar a la conclusión de que de algún modo fue el propio Charly quien decidió en qué momento instalar el tema en la agenda mediática”.
              “Al igual que todas las personas con oído absoluto, Charly lo tiene de nacimiento. Ahora, desde el comienzo de su carrera profesional hasta principios de los ’90, no hay ninguna referencia a su oído absoluto en las decenas de kilos de prensa gráfica dedicadas a Charly García”, detalló. 
              La definición más extendida de oído absoluto es aquella que lo describe como “la habilidad de identificar una nota por su nombre sin la ayuda de una nota referencial" o el "ser capaz de producir exactamente una nota solicitada -cantando- sin ninguna referencia. Esta capacidad está relacionada con la memoria auditiva, o sea, la capacidad de recordar ciertos sonidos”. De acuerdo a un estudio publicado en la revista científica Journal of Neuroscience, se adquiere por genética y no por estudio. En el caso de Charly García, quien hoy cumple 69 años, el oído absoluto lo heredó de su bisabuelo.
              El tema se instaló en el verano de 1997 cuando Osvaldo Soriano, pocos días antes de morir, escribió en Página 12 un artículo titulado “Absoluto”. La cuestión llama poderosamente la atención porque el músico tenía 45 años en ese momento. O sea que, recién a esa edad, su oído absoluto llegó a los medios masivos de comunicación.
              Roque Di Pietro, autor de “Esta noche toca Charly”, el libro que retrata al artista como “músico de escenarios”, afirmó al respecto en diálogo con Infobae: “Lo que más me sorprendió fue llegar a la conclusión de que de algún modo fue el propio Charly quien decidió en qué momento instalar el tema en la agenda mediática”.
              “Al igual que todas las personas con oído absoluto, Charly lo tiene de nacimiento. Ahora, desde el comienzo de su carrera profesional hasta principios de los ’90, no hay ninguna referencia a su oído absoluto en las decenas de kilos de prensa gráfica dedicadas a Charly García”, detalló. 
              La definición más extendida de oído absoluto es aquella que lo describe como “la habilidad de identificar una nota por su nombre sin la ayuda de una nota referencial" o el "ser capaz de producir exactamente una nota solicitada -cantando- sin ninguna referencia. Esta capacidad está relacionada con la memoria auditiva, o sea, la capacidad de recordar ciertos sonidos”. De acuerdo a un estudio publicado en la revista científica Journal of Neuroscience, se adquiere por genética y no por estudio. En el caso de Charly García, quien hoy cumple 69 años, el oído absoluto lo heredó de su bisabuelo.
              El tema se instaló en el verano de 1997 cuando Osvaldo Soriano, pocos días antes de morir, escribió en Página 12 un artículo titulado “Absoluto”. La cuestión llama poderosamente la atención porque el músico tenía 45 años en ese momento. O sea que, recién a esa edad, su oído absoluto llegó a los medios masivos de comunicación.
              Roque Di Pietro, autor de “Esta noche toca Charly”, el libro que retrata al artista como “músico de escenarios”, afirmó al respecto en diálogo con Infobae: “Lo que más me sorprendió fue llegar a la conclusión de que de algún modo fue el propio Charly quien decidió en qué momento instalar el tema en la agenda mediática”.
              “Al igual que todas las personas con oído absoluto, Charly lo tiene de nacimiento. Ahora, desde el comienzo de su carrera profesional hasta principios de los ’90, no hay ninguna referencia a su oído absoluto en las decenas de kilos de prensa gráfica dedicadas a Charly García”, detalló. 
              La definición más extendida de oído absoluto es aquella que lo describe como “la habilidad de identificar una nota por su nombre sin la ayuda de una nota referencial" o el "ser capaz de producir exactamente una nota solicitada -cantando- sin ninguna referencia. Esta capacidad está relacionada con la memoria auditiva, o sea, la capacidad de recordar ciertos sonidos”. De acuerdo a un estudio publicado en la revista científica Journal of Neuroscience, se adquiere por genética y no por estudio. En el caso de Charly García, quien hoy cumple 69 años, el oído absoluto lo heredó de su bisabuelo.
              El tema se instaló en el verano de 1997 cuando Osvaldo Soriano, pocos días antes de morir, escribió en Página 12 un artículo titulado “Absoluto”. La cuestión llama poderosamente la atención porque el músico tenía 45 años en ese momento. O sea que, recién a esa edad, su oído absoluto llegó a los medios masivos de comunicación.
              Roque Di Pietro, autor de “Esta noche toca Charly”, el libro que retrata al artista como “músico de escenarios”, afirmó al respecto en diálogo con Infobae: “Lo que más me sorprendió fue llegar a la conclusión de que de algún modo fue el propio Charly quien decidió en qué momento instalar el tema en la agenda mediática”.
              “Al igual que todas las personas con oído absoluto, Charly lo tiene de nacimiento. Ahora, desde el comienzo de su carrera profesional hasta principios de los ’90, no hay ninguna referencia a su oído absoluto en las decenas de kilos de prensa gráfica dedicadas a Charly García”, detalló. 
            </Typography>
          </div>
        </Grid> : null
      }        
      <div className={classes.seccion}>
        <DiscussionEmbed
          shortname="my-blog-app"
          config={
            {
              url: "http://localhost:4000/api/posts/?",
              identifier: "http://localhost:4000/api/posts/($id)",
              title: "Comment post",
              language: 'es_MX' //e.g. for Traditional Chinese (Taiwan)	
            }
          }
        />
      </div>
    </Grid>
  )    
} 

export default PostView;