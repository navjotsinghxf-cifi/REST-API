export const getDataByPathParams = ((data,LocationType , LoacationName)=>{
         return data.filter((destinations)=>{
            return destinations[LocationType].toLowerCase() === LoacationName.toLowerCase();
        })
})