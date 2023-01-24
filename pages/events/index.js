import Image from 'next/image';

const EventsPage = ({data})=>{
    return (
    <div>
        <h1>Events Page</h1>
        <div>
        {data.map(e =>(
            <a key={e.id} href={`/events/${e.div}`}>
             <Image src={e.image} alt={e.title} width={300} height={200}/>
             <h2>{e.title}</h2>
            </a>
        ))}
       </div>
    </div>
    )
}

export default EventsPage;

export async function getStaticProps() {
 const {events_categories} =await import('/Data/data.json')
 return{
    props:{
        data: events_categories,
    }
    
 }
}