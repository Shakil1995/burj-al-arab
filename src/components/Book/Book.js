import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button } from '@material-ui/core';

const Book = () => {
    const {bedType} = useParams();
    const [loggedInUser,setLoggedInUser]=useContext (UserContext);
    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date(),
        checkOut: new Date(),
    });

    const handleCheckInDate = (date) => {
        const newDates={...selectedDate}
        newDates.checkIn=date;
      setSelectedDate(newDates);
    };

    const handleCheckOutDate = (date) => {
        const newDates={...selectedDate}
        newDates.checkOut=date;
      setSelectedDate(newDates);
    };

const handleBooking=() =>{
    console.log('booking');
}

    return (
        <div style={{textAlign: 'center'}}>
            <h1> Hello , {loggedInUser.displayName} !  Let's book a {bedType} Room.</h1>
            <p>Want a <Link to="/home">different room?</Link> </p>


            <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="checkIn Date"
          value={selectedDate.checkIn}
          onChange={handleCheckInDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label=" checkOut Date "
          format="MM/dd/yyyy"
          value={selectedDate.checkOut}
          onChange={handleCheckOutDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
     
      </Grid>
      <Button  onClick={handleBooking} variant="contained" color="primary">Book Now</Button>

    </MuiPickersUtilsProvider>



        </div>
    );
};

export default Book;