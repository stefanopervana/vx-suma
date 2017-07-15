import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'This is the default title' }) => (
  <div>
 <style jsx>{`
                    .linking {
                    font-family: verdana;
                    font-style: italic;
                    color: #394973;
                    font-size: 54px;    
                    }
                `}</style>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link className="linking" href='/'><a>Home</a></Link> |
        <Link className="linking" href='/ch1'><a>Github</a></Link> |
        <Link className="linking" href='/ch2'><a>Web</a></Link> |
        <Link className="linking" href='/ch3'><a>Web1</a></Link>
      </nav>
    </header>

    { children }

    <footer>
            <nav>
        <Link className="linking" href='/'><a>Home</a></Link> |
        <Link className="linking" href='/ch1'><a>Github</a></Link> |
        <Link className="linking" href='/ch2'><a>Web</a></Link> |
        <Link className="linking" href='/ch3'><a>Web1</a></Link>
      </nav>
    </footer>
  </div>
)
