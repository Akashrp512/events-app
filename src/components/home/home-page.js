import Image from "next/image";
import Link from "next/link";


  const HomePage= ({data})=>{
    return(
    <main >
        {data.map((e) =>( 
          <Link key={e.id} href={`/events/${e.id}`}>
          <Image alt={e.title} width={200} height={200} src={e.image}/>
           <h2>{e.title}</h2>
           <p>{e.description}</p>
          </Link>
          ))}
      </main>
      )
  }

  export default HomePage;