import { db } from "./firebase-config";

export const sendMessage = async( msg ) => {
    
    try {

        const doc = await db.collection("messages").add(msg);

       return {
           id : doc.id ,
           res: 'Your message has been sent successfully'
       };

    } catch (error) {
         throw error;
    }

}


export const getSkills = async( ) => {
    
    try {

        const data = [];

        const docs = await db.collection("skills").get();

        docs.forEach( (doc) => {
            data.push( { 
                name: doc.data().name,
                level: doc.data().level,
                 id: doc.id } );
        });

       return data;

    } catch (error) {
         throw error;
    }

}

export const getProjects = async( ) => {
    
    try {

        const data = [];

        const docs = await db.collection("projects").get();

        docs.forEach( (doc) => {
            data.push( { 
                name: doc.data().name,
                url: doc.data().url,
                repository_url: doc.data().repository_url,
                thumbnail: doc.data().thumbnail,
                poster: doc.data().poster,
                desc: doc.data().desc,
                 id: doc.id } );
        });

       return data;

    } catch (error) {
         throw error;
    }

}