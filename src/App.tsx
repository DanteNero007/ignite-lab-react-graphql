//import { gql, useQuery } from '@apollo/client'
import {useEffect} from 'react'
import { BrowserRouter} from 'react-router-dom';
import { Router} from './Router';
import { Header } from './components/Header';
import { Lesson } from './components/Lesson';
import { SideBar } from './components/SideBar';
import { Video } from './components/Video';
import { Event } from './pages/Event';
import { client } from './lib/apollo'
import { ApolloProvider } from '@apollo/client';

/* const GET_LESSONS_QUERY = gql`
  query{
    lessons{
      id
      title
    }
  }
` */

interface LessonTypes{
  id:string;
  title: string;
}

function App() { 
 //const { data } = useQuery<{lessons:LessonTypes[]}>(GET_LESSONS_QUERY)

 {/* <ul>
    {data?.lessons.map(lesson =>{
      return <li key={lesson.id} >{lesson.title}</li>
    })}
   </ul> */}

   return (
    <>
     <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </>
  )
}

export default App
