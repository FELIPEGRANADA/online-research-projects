import { gql } from '@apollo/client'

//Definiton Project Queries
const GET_PROJECTS = gql`
        query {
            projects{
                id
                name
                generalobj
                specificobj
                budget
                startdate
                enddate
                leaderid
                status
                stage
            }   
        }
    `;

export default GET_PROJECTS;