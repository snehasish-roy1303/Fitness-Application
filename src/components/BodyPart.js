import React from 'react';
import { Stack, Typography } from '@mui/material';
import  Icon  from '../assets/icons/gym.png'


const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        <Stack
            /*these don't work in sx???*/
            type='button'
            className='bodyPart-card'/*only responsive with .-card??? */
            sx={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '200px',
                height: '210px',
                cursor: 'pointer',
                gap: '47px',
                borderTop: bodyPart === item ? '4px solid #ff2625' : 'none',
             
            }}
            onClick={() => {
               
                setBodyPart(item);
                window.scrollTo({top: 1800, left: 100, behaviour: 'smooth'})
            }}
        >
            <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
            <Typography
                sx={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#3a1212',
                    textTransform: 'capitalize'
                }}>
                {item}
            </Typography>
            
        </Stack>
  )
}

export default BodyPart