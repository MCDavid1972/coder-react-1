import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const ItemP = ({ element }) => {
  return (
    <Card sx={{ 
            width: 300, 
            height: 350,
            background: "#57b5f9",
            boxShadow:"0px 0Px 10px black" }}>
      <CardMedia sx={{ height: 140 }} image={element.img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" aling="center">
          {element.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">{element.descripcion}</Typography>
        <Typography variant="body" >$ {element.precio}</Typography>

      </CardContent>
      <CardActions>
         <Link to={`/detalle/${element.id}`}>
          <Button size="small" variant="outlined">
            Ver Detalle
          </Button>
         </Link>
      </CardActions>
    </Card>
  );
};

export default ItemP;
