import Link from 'next/link';
import useSWR from 'swr';
import FetcherGet from '../../../lib/FetcherGet';
import Image from 'next/image'

export default function cardTiendas() {

    const { data, error, mutate } = useSWR('https://api.abako.xyz/api/user/shop', url => FetcherGet(url));
    if (error) return 'Error: '
    if (!data) return 'Loading'
    var k = 1;
    return (<>
        {data.map(shops => {
            return (


                <div className="shadow-md rounded-xl justify-self-center w-full border dark:border-prueba" key={shops.id}>

                    <Link href={`/dashboard/tiendas/${shops.id}`}>
                        <a href=''>
                            <div className="inline-flex w-full">
                                <div className="w-14 h-10 bg-white -my-3 mx-2 rounded-xl bg-transparent justify-self-center text-center">
                                
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500 justify-self-center self-center" viewBox="0 0 20 20" fill="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                                    </svg>
                                    {/* <div className="text-green-500 justify-self-center self-center">{k<=k?`#${k++}`:k}</div>    */}
                                
                                </div>
                                
                            </div>
                            {/* <Link href={`/dashboard/tiendas/${shops.id}`}><a href=''> <img className="cursor-pointer bg-cover bg-center w-full rounded-t-3xl" src="../../../edited2.png" alt="Sunset in the mountains" width="300"
                    height="300" /></a></Link> */}
                            <div className="px-6 pb-4">
                                <div className="font-bold text-xl mb-2">{shops.name}</div>
                                <span className="dark:text-gray-200 text-gray-900 text-base">
                                    <p>Direccion: {shops.address}</p>
                                    <div>Telf: {shops.phone[0] ? <>{shops.phone[0].number}</> : <div></div>}</div>
                                </span>
                            </div>
                        </a>
                    </Link>
                </div>
            )
        }
        )
        }

    </>)
}