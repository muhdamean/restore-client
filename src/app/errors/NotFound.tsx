import { Button, Container, Divider, Link, Paper, Typography } from "@mui/material";

export default function NotFound(){
    return(
        <Container component={Paper} sx={{height:400}}>
            <Typography gutterBottom variant='h3'>
                Oops - we could not find what you are looking for
            </Typography>
            <Divider></Divider>
            <Button fullWidth component={Link}  href='/catalog'>Go back to shop</Button>
        </Container>
    )
}