const Komp7 = () => {
    let pageTitle = 'Puslapio pavadinimas'

    let links = [
        { id: 1, url: '/', title: 'Pradžia' },
        { id: 2, url: '/paslaugos', title: 'Paslaugos' },
        { id: 3, url: '/apie-mus', title: 'Apie mus' },
        { id: 4, url: '/kontaktai', title: 'Kontaktai' },
    ]
  return (
    <div>
        <h2>{pageTitle}</h2>
        {/* <ul>
                {
                    links.map(link => {
                        console.log(link)
                        return <li>{link.id} {link.url} {link.title}</li>
                    })
                }
            </ul> */}
        <ul>
            {
                links.map(link => {
                    return <li key={link.id}><a href={link.url}>{link.title}</a></li>  
                })
            }
        </ul>
        {/* pvz be return, nes pirmam - vienoje eiluteje, antram () */}
        <ul>
                { links.map(link => <li key={link.id}><a href={link.url}>{link.title}</a></li>) }
        </ul>
        <ul>
                {
                    links.map(link => (
                        <li key={link.id}>
                            <a href={link.url}>{link.title}</a>
                        </li>
                    ))
                }
        </ul>
    </div>
  )
}

export default Komp7

// key ant aukščiausio elemento - li 
// ir ant id, nes jis unikalus, bet gali būti ir ant url,
// nes jis irgi unikalus
