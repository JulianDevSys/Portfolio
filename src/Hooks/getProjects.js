import projectBd from "./projectsBd.json"

export default function getProjects(callback){
    callback(projectBd)
}