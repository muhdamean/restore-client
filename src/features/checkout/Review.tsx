import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import BasketSummary from '../basket/BasketSummary';
import BasketTable from '../basket/BasketTable';
import { useAppSelector } from '../../app/store/configureStore';


export default function Review() {
    const {basket} =useAppSelector(state=>state.basket);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      {basket &&
      <BasketTable items={basket.items} isBasket={false}></BasketTable>}
      <Grid container>
        <Grid item xs={6}/>
        <Grid item xs={6}>
            <BasketSummary />
            {/* <Button 
                component={Link}
                to='/checkout'
                variant='contained'
                size='large'
                fullWidth >
                  Checkout
            </Button> */}
        </Grid>
     </Grid>
    </>
  );
}
