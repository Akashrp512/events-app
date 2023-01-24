//creates an dynamic file

import Image from 'next/image';

const EventPage = ({data})=>{
    return (
    <div>
     <Image src={data.image} width={1600} height={500} alt={data.title} />
     <h1>{data.title}</h1>
     <p>{data.description}</p>
        
    </div>
    )
}

export default EventPage;

export async function getStaticPath (){
    const data=await import('/Data/data.json');
    const allEvents = data;

    const allPaths =allEvents.map(path=>{
        return {
            params:{
                cat:path.city,
                id:path.id,
            }
        }
    })

   return {
    paths: allPaths,
    fallback:false,
   }
}

export async function getServerSideProps(context) {

   const id=context.params.id;
   const {allEvents} = await import("/Data/data.json");
   const eventData = allEvents.find(e=> id === e.id);
   return{
    props:{data: eventData},
   }
}