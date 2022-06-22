import React, { useEffect, useContext } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ColorModeContext } from './utils/ToggleColorMode';
import { fetchToken } from './utils';
import { selectGenreOrCategory, searchMovie } from '../features/currentGenreOrCategory';

const useAlan = () => {

    const { setMode } = useContext(ColorModeContext)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        alanBtn({
            key: 'b2c7a92bcfb500230254ce05f8a2635e2e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({command, mode, genres, genreOrCategory, query}) => {
                if(command === 'chooseGenre'){
                    const foundGenre = genres.find((g) => g.name.toLowerCase() === genreOrCategory.toLowerCase())
                    if(foundGenre) {
                        history.push('/')
                        dispatch(selectGenreOrCategory(foundGenre.id))
                    } else {
                        const category = genreOrCategory.startsWith('top') ? 'top_rated' : genreOrCategory
                        history.push('/')
                        dispatch(selectGenreOrCategory(category))
                    }
                }

              else if (command === 'changeMode') {   
                  if(mode === 'light'){
                    setMode('light')
                  } else {
                    setMode('dark')
                  }
              } else if(command === 'login'){
                    fetchToken()
              } else if(command === 'logout'){
                  localStorage.clear()
                  history.push('/')
                } else if(command === 'search'){
                    dispatch(searchMovie(query))
                }
            }
        });
      }, []);
}

export default useAlan