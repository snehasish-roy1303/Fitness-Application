import React from 'react';
import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';


import ExerciseCard from './ExerciseCard';
import { exerciseOptions, fetchData}from '../utils/fetchData'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    //PAGINATION
    const [ currentPage, setCurrentPage ] = useState(1);
    const exercisesPerPage = 9;
    
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
    const paginate = (e, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1800, behavior: 'smooth' })
    };
    
    //USEEFFECT
    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];
            if (bodyPart === ('all')) {// which it is at start)
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            } else {

                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
                console.log(bodyPart)
            }
            setExercises(exercisesData)
        }
        fetchExercisesData();//call on every change (click bodyPart-change)


    }, [ bodyPart ]);//call when bodyPart changes

    console.log(exercises)
    return (
        <Box id="exercises"
            sx={{ mt: { lg: '110px' } }}
            mt='50px'
            p='20px'
        >
            <Typography variant='h3' mb='46px'>
                Showing Results
            </Typography>
            <Stack direction= 'row'
                sx={{
                    gap: { lg: '110px', xs: '50px' },
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}
            >
                {currentExercises.map((exercise, index) => (
                   // <p>{exercise.name}</p>
                    <ExerciseCard key={index} exercise={exercise} />
                )
                    
               
                
                )}
                
            </Stack>
            <Stack mt="100px" alignItems="center">
                {exercises.length > 9 && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                    ></Pagination>
                )}
                
            </Stack>
            
       </Box>
    );
}

export default Exercises