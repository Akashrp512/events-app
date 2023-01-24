import Image from 'next/image';
import Link from 'next/link';

const EventsCatPage = ({data,pageName})=>{
    return (
    <div>
    <h1>Events in {pageName.toUpperCase()}</h1>
    <div>
    {data.map((e)=>(
        <Link key={e.id} href={`/events/${e.city}/${e.id}`}>
        <Image width={300} height={200} alt={e.title} src={e.image} />
        <h2>{e.title}</h2>
        <p>{e.description}</p>
        </Link>
    ))}
    </div>
    </div>
    )
}

export default EventsCatPage;

export async function getStaticPaths(){
    const {events_categories} = await import('/Data/data.json');
const allPaths= events_categories.map(e=>{
    return{
            params: {
               cat: e.id.toString(), 
            },
    }
});

    return{
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context){
    const id=context?.params.cat;
    const {allEvents} = await import('/Data/data.json');
    
    const data = allEvents.filter((e)=>e.city === id);
   
     return { props: {data, pageName:id}};
}