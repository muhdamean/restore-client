import { Button, Container, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ServerError(){
    const navigate=useNavigate();
    // const location = useLocation();
    // const state = location.state as any;// CustomizedState; // Type Casting, then you can get the params passed via router
    //const { myState } = state;
    return(
        <Container component={Paper}>
            {/* {state?.error
             ?(
                <>
                    <Typography variant='h3'  color='error' gutterBottom>Server error</Typography>
                    <Divider></Divider>
                    <Typography>{state?.error.detail || 'Internal server error'}</Typography>
                </>
            ) : (
                <Typography variant='h5' gutterBottom>Server error</Typography>
            )} */}
            <Typography variant='h5' gutterBottom>Server error </Typography>
            <Button onClick={()=>navigate('/catalog')}>Continue...</Button>
        </Container>
    )
}
