import { gql } from '@apollo/client'

//Definiton Progress Queries
const GET_PROGRESS_BY_PROJECT = gql`
        query ($projectid : ID!){
            progressbyproject(projectid : $projectid ){
                id
                date
                description
                observations
            }   
        }
    `;

export default GET_PROGRESS_BY_PROJECT;