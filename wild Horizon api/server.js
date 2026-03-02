import http from 'node:http'
import {getDataFromDB} from './db.js'
import { sendJSONResponse } from './sendJSONResponse.js'
import { getDataByPathParams } from './getDataByPathParams.js'
const PORT = 8000




const server = http.createServer(async(req,res)=>{
    
    const destinations = await getDataFromDB();

    const urlObj = 

    const queryObj = 


    if(req.url === '/api' && req.method === 'GET'){
        sendJSONResponse(res,200,destinations);
    }else if(req.url.startsWith('/api/continent') && req.method === 'GET'){
        const continent = req.url.split('/').pop();
        console.log(continent);
        const filteredData = getDataByPathParams(destinations,'continent',continent)
        sendJSONResponse(res,200,filteredData);
    }else if(req.url.startsWith('/api/country') && req.method === 'GET'){
        const country = req.url.split('/').pop();
        console.log(country);
        const filteredData = getDataByPathParams(destinations,'country',country)
        
        sendJSONResponse(res,200,filteredData);
    }
    else{
        const err = {error : 'Route not found'};
        sendJSONResponse(res,404,err);
    }
})

server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}/api`);
    console.log(`http://localhost:${PORT}/api/country/Turkmenistan`);
})