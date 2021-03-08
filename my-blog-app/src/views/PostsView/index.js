import React from 'react';
import { makeStyles, Grid, Box, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import usePost from '../../hooks/usePost';
import images from '../../assets/images';

const useStyles = makeStyles (theme => ({
  cont: {
    padding: theme.spacing(4),
  },
card: {
  display: "flex",
  width: "100%",
  marginBottom: "5vh",
  height: "400px",
  background: "black",
  color: "#fff",
  fontSize: "30px",
  
},
img: {
  display: "flex",
  height: "100%",
  width: "100%" 
},
title: {
  marginBottom: "1vh",
  width: "100%" ,
},
box: {
  marginTop:"5vh",
  textAlign: "justify"
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
          <div className={classes.title} >
            <Typography variant="h1" color="textPrimary" component="h1">
              {data.name}
            </Typography>
            <Typography variant="h2" color="textPrimary" component="h2">
              {data.email}
            </Typography>
            <Typography variant="h3" color="textPrimary" component="h2">
              {data.email}
            </Typography>
          </div>
          <hr/>  
          <Grid className={classes.card}>
            <Box style={{ width: "100%" }}>
              <img
                alt="imag"
                style={{ width: "100%" }}
                className={classes.img}
                src={images.img}
              />
            </Box>    
          </Grid> 
          <div>
          <Typography variant="h3" color="textSecondary" component="h2">
              Por Daniela Sanchez
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
    </Grid>
  )    
} 

export default PostView;