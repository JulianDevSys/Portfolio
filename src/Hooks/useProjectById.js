import projectsBd from "./projectsBd.json"


export default function useProjectById(ids, callback){
    const infoProjects= projectsBd.find((element)=>element.id === ids)
    if(!infoProjects){
        return callback(undefined, "No Se Encontro El Projecto")
    }
    const {id,posterUrl,...resto}=infoProjects
    callback(resto)
}