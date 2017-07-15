import Layout from '../components/layout'

export default () => (
  <Layout title='ch2'>
    <div>
     <style jsx>{`

                    .col-md-6 {
                        border-radius: 4px;
                        overflow: hidden;
                        box-shadow: 0 9px 9px rgba(0, 0, 0, 0.9);
                        display: block;
                        min-height: 70%;
                        font-family: Verdana;
                        max-width: 1100px;
                        background-color: #E8EDEE;
                        margin: auto;
                        margin-top: auto;
                        margin-right: auto;
                        margin-bottom: auto;
                        margin-left: auto;
                        white-space: pre-wrap;
                        border: none;
                        box-sizing: border-box;
                        color: #2D0D0D;
                        line-height: 1.1;
                        padding: 4.7em;

                    }

                    .home {
                        margin: 1.5em 0;
                        
                    }

                    h1 {
                        color: #867452;
                        font-size: 60px;
                    }

                    h2 {
                        color: #867452;
                        font-size: 40px;
                    }
                    
                    h3 {
                        color: #867452;
                        font-size: 30px;
                    }


                    .it, .listit {
                        color: brown;
                        font-size: 24px;
                        font-style: italic;
                        letter-spacing: 0.04em;
                    }
                    .p, .listitem {
                        color: #75AFAD;
                        font-size: 24px;
                        font-style: italic;
                        letter-spacing: 0.04em;
                    }

                    pre {display: block;
                    font-family: monospace;
                    white-space: pre;
                    margin: 1em 0;
                    font-size: 16px


                    }

                    code
                    {margin: auto,
                        font-family:"Lucida Console";
                        "Andale Mono";
                        "Courier New";
                        Courier;
                        monospace;
                        font-style:normal;
                        color:#395C73;}
                    
                    code strong
                    {color:#000;
                        background:#F5FD11;
                        padding:1px;
                        font-weight:normal;
                    }

                    .image {
                    width: 100%;
                        
                    }

                    .interno {
                    font-family: verdana;
                    font-style: italic;
                    color: #395C73;
                    font-size: 24px;    
                    }

                    .sub{
                        text-decoration: underline;
                    }
                `}</style>

    <div className="col-md-6"> 
    <p>https://medium.com/vx-code/getting-started-with-vx-1756bb661410</p>

 <div class="postMetaInline js-testPostMetaInlineSupplemental"><time datetime="2017-05-19T22:01:38.987Z">May 19</time><span class="middotDivider u-fontSize12"></span><span class="readingTime" title="7 min read"></span></div>

<h1>Getting started with&nbsp;vx.</h1>

<div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*viumvb2xG0DhNlEt2ZzBgg.png" data-width="1518" data-height="854" data-action="zoom" data-action-value="1*viumvb2xG0DhNlEt2ZzBgg.png" data-scroll="native"><canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="40"></canvas><img class="progressiveMedia-image js-progressiveMedia-image" data-src="https://cdn-images-1.medium.com/max/800/1*viumvb2xG0DhNlEt2ZzBgg.png" src="https://cdn-images-1.medium.com/max/800/1*viumvb2xG0DhNlEt2ZzBgg.png" /><noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/800/1*viumvb2xG0DhNlEt2ZzBgg.png"&gt;</noscript></div>

<figcaption class="imageCaption">Line plot created with&nbsp;vx.</figcaption>

<p className="it"><code class="markup--code markup--p-code">vx</code>Es una colección de componentes de reacción de bajo nivel para d3. ¿Te gusta React? ¿Te gusta d3? Wana combinarlos de una manera que es fácil de usar y tiene sentido? Usted quiere <code class="markup--code markup--p-code">vx</code>&nbsp;.</p>

<p className="p"><code class="markup--code markup--p-code">vx</code> is a collection of low-level react components for d3. Do you like React? Do you like d3? Wana combine them in a way that’s easy to use and makes sense? You want <code class="markup--code markup--p-code">vx</code>&nbsp;.</p>

<p className="it">A partir de esta escritura, <code class="markup--code markup--p-code">vx</code>está en un super-beta y probablemente <a href="https://media.giphy.com/media/wrBURfbZmqqXu/giphy.gif" data-href="https://media.giphy.com/media/wrBURfbZmqqXu/giphy.gif" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">no debería</a> ser utilizado en la producción.</p>

<p className="p">As of this writing, <code class="markup--code markup--p-code">vx</code> is in a super-beta and probably <a href="https://media.giphy.com/media/wrBURfbZmqqXu/giphy.gif" data-href="https://media.giphy.com/media/wrBURfbZmqqXu/giphy.gif" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">should not</a> be used in production.</p>

<p className="it">Esta guía asume que:</p>

<p className="p">This guide assumes you:</p>

<ul class="postList">
<li name="5e8f" id="5e8f" class="graf graf--li graf-after--p">Have knowledge of <a href="https://facebook.github.io/react/tutorial/tutorial.html" data-href="https://facebook.github.io/react/tutorial/tutorial.html" class="markup--anchor markup--li-anchor" rel="nofollow noopener" target="_blank">React</a>.</li>
<li name="6cbf" id="6cbf" class="graf graf--li graf-after--li">May or may not have knowledge of <a href="https://d3js.org/" data-href="https://d3js.org/" class="markup--anchor markup--li-anchor" rel="nofollow noopener" target="_blank">d3</a>.</li>
</ul>

<h3>Packages</h3>   

<p className="it"><code class="markup--code markup--p-code">vx</code>Se esfuerza por ser pequeño y compacto. Sólo debe importar los paquetes que necesita. Por lo tanto, en lugar de hacer algo como esto:</p>

<p className="p"><code class="markup--code markup--p-code">vx</code> tries hard to be tiny and compact. You should only import the packages you need. So, instead of doing something like this:</p>

<pre>import vx from 'vx'; // BAD! </pre>

<p className="it">Debes importar cada paquete individualmente:</p>

<p className="p">You should import each package individually:</p>

<pre>import &#123; Bar &#125; from '@vx/shape'; // GOOD! </pre>

<p className="it">Podes ver una lista de <a href="https://vx-demo.now.sh/docs" data-href="https://vx-demo.now.sh/docs" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">todos los paquetes aquí</a> .</p>

<p className="p">You can see a list of <a href="https://vx-demo.now.sh/docs" data-href="https://vx-demo.now.sh/docs" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">all packages here</a>.</p>

<p className="it">Actualmente, la documentación de cada paquete vive en el archivo de la carpeta del paquete <code class="markup--code markup--p-code">README.md</code>. Por ejemplo, si desea ver lo que hace el <code class="markup--code markup--p-code">@vx/shape</code>paquete, iría a <a href="https://github.com/hshoff/vx/tree/master/packages/vx-shape" data-href="https://github.com/hshoff/vx/tree/master/packages/vx-shape" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">la carpeta aquí</a> . Eventualmente, los documentos existirán <a href="https://vx-demo.now.sh/" data-href="https://vx-demo.now.sh/" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">en el sitio web de vx.</a></p>

<p className="p">At the moment, documentation for each package lives in the package folder’s <code class="markup--code markup--p-code">README.md</code> file. For example, if you want to see what the <code class="markup--code markup--p-code">@vx/shape</code> package does, you would go to <a href="https://github.com/hshoff/vx/tree/master/packages/vx-shape" data-href="https://github.com/hshoff/vx/tree/master/packages/vx-shape" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">the folder here</a>. Eventually, the docs will exist <a href="https://vx-demo.now.sh/" data-href="https://vx-demo.now.sh/" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">on the vx website.</a></p>

<p className="it">A continuación se muestra una breve descripción de algunos de los paquetes que usaremos en orden alfabético.</p>


<p className="p">Below is a short description of the a few of the packages we’ll be using in alphabetic order.</p>

<h4>Axis Package</h4>

<pre>import &#123; AxisLeft, AxisBottom &#125; from '@vx/axis';</pre>

<div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*d_ZGSV7dPlqTCpZrejAEgg.png" data-width="1310" data-height="688" data-action="zoom" data-action-value="1*d_ZGSV7dPlqTCpZrejAEgg.png" data-scroll="native"><canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="37"></canvas><img class="progressiveMedia-image js-progressiveMedia-image" data-src="https://cdn-images-1.medium.com/max/800/1*d_ZGSV7dPlqTCpZrejAEgg.png" src="https://cdn-images-1.medium.com/max/800/1*d_ZGSV7dPlqTCpZrejAEgg.png" /><noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/800/1*d_ZGSV7dPlqTCpZrejAEgg.png"&gt;</noscript></div>

<figcaption class="imageCaption">Axis Example</figcaption>

<p className="it">Un eje gráfico típico con garrapatas que podesn ayudarle a etiquetar sus gráficos. <a href="https://github.com/Flaque/vx/blob/b3d28acbc3373b7d37609c4bc727bc07c2d3861b/packages/vx-axis/Readme.md" data-href="https://github.com/Flaque/vx/blob/b3d28acbc3373b7d37609c4bc727bc07c2d3861b/packages/vx-axis/Readme.md" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">Documentos aquí.</a></p>

<p className="p">A typical graph axis with ticks that can help you label your graphs. <a href="https://github.com/Flaque/vx/blob/b3d28acbc3373b7d37609c4bc727bc07c2d3861b/packages/vx-axis/Readme.md" data-href="https://github.com/Flaque/vx/blob/b3d28acbc3373b7d37609c4bc727bc07c2d3861b/packages/vx-axis/Readme.md" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">Docs Here.</a></p>

<h4 name="1e4a" id="1e4a" class="graf graf--h4 graf-after--p">Gradient Package</h4>
<pre>import &#123; GradientOrangeRed &#125; from '@vx/gradient';</pre>

<div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*UEnfwfJgl4mZb4O_HaAkDw.png" data-width="1324" data-height="742" data-action="zoom" data-action-value="1*UEnfwfJgl4mZb4O_HaAkDw.png" data-scroll="native"><canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="40"></canvas><img class="progressiveMedia-image js-progressiveMedia-image" data-src="https://cdn-images-1.medium.com/max/800/1*UEnfwfJgl4mZb4O_HaAkDw.png" src="https://cdn-images-1.medium.com/max/800/1*UEnfwfJgl4mZb4O_HaAkDw.png" /><noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/800/1*UEnfwfJgl4mZb4O_HaAkDw.png"&gt;</noscript></div>

<figcaption class="imageCaption">Gradient Example</figcaption>

<p className="it">Un gradiente es una definición de un <code class="markup--code markup--p-code">fill</code>atributo que podes utilizar en sus formas. Hablaremos más sobre esto en poco tiempo. <a href="https://github.com/hshoff/vx/tree/master/packages/vx-gradient" data-href="https://github.com/hshoff/vx/tree/master/packages/vx-gradient" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">Documentos aquí.</a></p>

<p className="p">A gradient is a definition of a <code class="markup--code markup--p-code">fill</code> attribute that you can use in your shapes. We’ll talk more about this in a bit. <a href="https://github.com/hshoff/vx/tree/master/packages/vx-gradient" data-href="https://github.com/hshoff/vx/tree/master/packages/vx-gradient" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">Docs Here.</a></p>

<h4 name="9d2f" id="9d2f" class="graf graf--h4 graf-after--p">Group Package</h4>

<pre>import &#123; Group &#125; from '@vx/group';</pre>

<p className="it">Un grupo es sólo un contenedor para otros objetos. Es realmente sólo un envoltorio alrededor del <code class="markup--code markup--p-code">g</code> <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g" data-href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">elemento svg</a>. <a href="https://github.com/hshoff/vx/tree/master/packages/vx-group" data-href="https://github.com/hshoff/vx/tree/master/packages/vx-group" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">Documentos aquí.</a></p>

<p className="p">A group is just a container for other objects. It’s really just a wrapper around the <code class="markup--code markup--p-code">g</code> <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g" data-href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">svg element</a>. <a href="https://github.com/hshoff/vx/tree/master/packages/vx-group" data-href="https://github.com/hshoff/vx/tree/master/packages/vx-group" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">Docs Here.</a></p>

<figcaption class="imageCaption">Shape Example</figcaption>

<p className="it">El paquete Shape contiene la mayoría de las "formas" que se ven en los gráficos. Las barras, las líneas, y las áreas están todas adentro aquí.</p>

<p className="p">The Shape package contains the majority of the “shapes” you see in the graphs. Bars, Lines, and Areas are all in here.</p>
<h4 name="2ec1" id="2ec1" class="graf graf--h4 graf-after--p">Mock Data&nbsp;Package</h4>

<pre>import &#123; browserUsage, genDateValue &#125; from '@vx/mock-data';</pre>

<p className="it">El paquete Mock Data es una colección de conjuntos de datos que podes utilizar para probar sus gráficos. <a href="https://github.com/hshoff/vx/tree/master/packages/vx-mock-data" data-href="https://github.com/hshoff/vx/tree/master/packages/vx-mock-data" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">Documentos aquí.</a></p>

<p className="p">The Mock Data package is a collection of data sets that you can use to test out your graphs. <a href="https://github.com/hshoff/vx/tree/master/packages/vx-mock-data" data-href="https://github.com/hshoff/vx/tree/master/packages/vx-mock-data" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">Docs Here.</a></p>

<figcaption class="imageCaption">Shape Example</figcaption>

<p className="it">El paquete Shape contiene la mayoría de las "formas" que se ven en los gráficos. Las barras, las líneas, y las áreas están todas aquí dentro.</p>

<p className="p">The Shape package contains the majority of the “shapes” you see in the graphs. Bars, Lines, and Areas are all in here.</p>
<h4 name="a094" id="a094" class="graf graf--h4 graf-after--p">Scale Package</h4>

<pre>import &#123; scaleLinear &#125; from '@vx/scale';</pre>
<p className="it">El paquete Escala es un contenedor alrededor de <a href="https://github.com/d3/d3-scale" data-href="https://github.com/d3/d3-scale" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">las funciones originales de escalado d3</a> que le permiten escalar sus datos al tamaño de su gráfico. Por ejemplo, si sus <code class="markup--code markup--p-code">y</code>valores están entre 100.000 y 200.000, su gráfico no necesita ser de 200.000 píxeles de alto. <a href="https://github.com/hshoff/vx/tree/master/packages/vx-scale" data-href="https://github.com/hshoff/vx/tree/master/packages/vx-scale" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">Documentos aquí.</a></p>
<p className="p">The Scale package is a wrapper around <a href="https://github.com/d3/d3-scale" data-href="https://github.com/d3/d3-scale" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">the original d3 scaling functions</a> that let you scale your data to the size of your graph. For example, if your <code class="markup--code markup--p-code">y</code> values are between 100,000 and 200,000 your graph doesn’t need to be 200,000 pixels high. <a href="https://github.com/hshoff/vx/tree/master/packages/vx-scale" data-href="https://github.com/hshoff/vx/tree/master/packages/vx-scale" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">Docs Here.</a></p>


<h4 name="567d" id="567d" class="graf graf--h4 graf-after--p">Shape Package</h4>
<pre>import &#123; Bar &#125; from '@vx/shape';</pre>


<div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*s-HmX7cPFzP39VcZWXvH5w.png" data-width="1340" data-height="718" data-action="zoom" data-action-value="1*s-HmX7cPFzP39VcZWXvH5w.png" data-scroll="native"><canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="40"></canvas><img class="progressiveMedia-image js-progressiveMedia-image" data-src="https://cdn-images-1.medium.com/max/800/1*s-HmX7cPFzP39VcZWXvH5w.png" src="https://cdn-images-1.medium.com/max/800/1*s-HmX7cPFzP39VcZWXvH5w.png" /><noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/800/1*s-HmX7cPFzP39VcZWXvH5w.png"&gt;</noscript></div>


<figcaption class="imageCaption">Shape Example</figcaption>

<p className="it">El paquete Shape contiene la mayoría de las "formas" que se ven en los gráficos. Las barras, las líneas, y las áreas están todas adentro aquí.</p>

<p className="p">The Shape package contains the majority of the “shapes” you see in the graphs. Bars, Lines, and Areas are all in here.</p>

<h3 name="d53c" id="d53c" class="graf graf--h3 graf-after--p">Building Your First&nbsp;Graph</h3>

<p className="it">Comenzaremos usando algunos datos de la siguiente <code class="markup--code markup--p-code">@vx/mock-data</code>manera:</p>

<p className="p">We’ll start by using some data from <code class="markup--code markup--p-code">@vx/mock-data</code> like so:</p>

<pre>import &#123; appleStock &#125; from '<a href="http://twitter.com/vx/mock-data" data-href="http://twitter.com/vx/mock-data" class="markup--anchor markup--pre-anchor" title="Twitter profile for @vx/mock-data" rel="nofollow noopener" target="_blank">@vx/mock-data</a>';</pre>
<pre>// ...</pre>
<pre>const data = appleStock;</pre>

<p className="it">Si tenemos <code class="markup--code markup--p-code">console.log</code>esos datos, veremos que se trata de una serie de objetos JSON con <code class="markup--code markup--p-code">date</code>marcas de tiempo y <code class="markup--code markup--p-code">close</code>valores de dólar para el stock de manzana.</p>

<p className="p">If we <code class="markup--code markup--p-code">console.log</code> that data, we’ll see that it’s an array of JSON objects with <code class="markup--code markup--p-code">date</code> timestamps and <code class="markup--code markup--p-code">close</code> dollar values for apple stock.</p>

<p className="it">También le daremos a nuestro gráfico una anchura y una altura.</p>

<p className="p">We’ll also give our graph a width and a height.</p>

<pre>const width = 750;<br></br>const height = 400;</pre>

<p className="it">También debemos definir algunos límites y márgenes para nuestro gráfico.</p>
<p className="p">We should also define some bounds and margins for our graph.</p>

<pre>const margin = &#123;<br></br>  top: 60,<br></br>  bottom: 60,<br></br>  left: 80,<br></br>  right: 80,<br></br>&#125;;<br></br>const xMax = width - margin.left - margin.right;<br></br>const yMax = height - margin.top - margin.bottom;</pre>
<h4 name="f4b9" id="f4b9" class="graf graf--h4 graf-after--pre">Defining What “X,Y”&nbsp;Means</h4>

<p className="it">Si has hecho gráficos antes en matlab o pyplot, es posible que hayas notado que necesitabas pasar en una matriz de <code class="markup--code markup--p-code">xs</code>y <code class="markup--code markup--p-code">ys</code>. También podes haber pasado en una matriz de <code class="markup--code markup--p-code">(x,y)</code>tuplas.</p>

<p className="p">If you’ve made graphs before in matlab or pyplot, you may have noticed that you needed to pass in an array of <code class="markup--code markup--p-code">xs</code> and <code class="markup--code markup--p-code">ys</code>. You also may have passed in an array of <code class="markup--code markup--p-code">(x,y)</code> tuples.</p>

<p className="it">D3 y vx toman un enfoque funcional. Creamos dos funciones <code class="markup--code markup--p-code">x</code>y <code class="markup--code markup--p-code">y</code>definimos lo que queremos decir cuando decimos "x" y "y". Con la sintaxis de flecha de Javascript, esto podes limpiarse con nuestros datos de la siguiente manera:</p>

<p className="p">D3 and vx take a functional approach. We create two functions, <code class="markup--code markup--p-code">x</code> and <code class="markup--code markup--p-code">y</code> to define what we mean when we say “x” and “y”. With Javascript’s arrow syntax, this can cleanly be done with our data like so:</p>

<pre><a href="http://twitter.com/vx/mock-data" data-href="http://twitter.com/vx/mock-data" class="markup--anchor markup--pre-anchor" title="Twitter profile for @vx/mock-data" rel="noopener nofollow" target="_blank">const x = d =&gt; new Date(d.date); // d.date is unix timestamps<br></br>const y = d =&gt; d.close;</a></pre>

<p className="it">Convirtimos la marca de tiempo unix en objetos de fecha. Vea <a href="http://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript" data-href="http://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">esta pregunta para más.</a></p>
<p className="p">We convert the unix timestamp to date objects. See <a href="http://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript" data-href="http://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">this SO question for more.</a></p>


<p className="it">Si tuviéramos que tomar un elemento de nuestros datos y ponerlo a través de estas funciones podríamos obtener algo como esto:</p>

<p className="p">If we were to take one element of our data and put it through these functions we might get something like this:</p>

<pre>console.log(x(data[0])); // Fri Aug 21 1970 12:23:21 GMT-0600 (MDT)<br></br>console.log(y(data[0])); // 72.2</pre>

<p className="it">Entonces, si quisiéramos todos los valores y, podríamos ejecutar una función de mapa en los datos así:</p>
<p className="p">Then, if we wanted all the y values, we could run a map function on the data like so:</p>

<pre>data.map(y); // Gives an array of all the y values</pre>

<p className="it">D3 llama a este patrón "accessors".</p>

<p className="p">D3 calls this pattern “accessors.”</p>

<h4 name="c78a" id="c78a" class="graf graf--h4 graf-after--p">Scaling Our&nbsp;Data</h4>

<p className="it">Puesto que tenemos marcas de tiempo, utilizaremos la función <code class="markup--code markup--p-code">@vx/scale</code>del paquete <code class="markup--code markup--p-code">scaleTime</code>para nuestros valores de x y un <code class="markup--code markup--p-code">scaleLinear</code>para los valores de y.</p>

<p className="p">Since we have timestamps, we’ll use the <code class="markup--code markup--p-code">@vx/scale</code> package’s <code class="markup--code markup--p-code">scaleTime</code> function for our x values and a <code class="markup--code markup--p-code">scaleLinear</code> for the y values.</p>

<pre>import &#123; scaleTime, scaleLinear &#125; from '@vx/scale';<br></br>import &#123; extent &#125; from 'd3-array';</pre>
<pre>// ...</pre>
<pre>const xScale = scaleTime(&#123;<br></br>  range: [0, xMax],<br></br>  domain: extent(data, x)<br></br>&#125;);</pre>

<p className="it">Para los parámetros, vamos a poner en un <code class="markup--code markup--p-code">range</code>que son los valores que queremos reducir nuestras x a. En este caso, queremos que la información vaya de izquierda a derecha de nuestro gráfico, por lo que <code class="markup--code markup--p-code">0</code>para <code class="markup--code markup--p-code">xMax</code>.</p>

<p className="p">For the parameters, we’re going to put in a <code class="markup--code markup--p-code">range</code> which is the values that we want to scale down our x’s to. In this case, we want the info to go from the left to right of our graph, so <code class="markup--code markup--p-code">0</code> to <code class="markup--code markup--p-code">xMax</code>.</p>

<p className="it">En el dominio, vamos a hacer uso de una <code class="markup--code markup--p-code">d3-array</code>función <code class="markup--code markup--p-code">extent</code>(docs <a href="https://github.com/d3/d3-array#extent" data-href="https://github.com/d3/d3-array#extent" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">aquí</a> ). <code class="markup--code markup--p-code">extent</code>Tomará una matriz y una de nuestras funciones <code class="markup--code markup--p-code">x</code>o <code class="markup--code markup--p-code">y</code>d3 (d3 las llama accessors) y devuelve los valores min y max.</p>

<p className="p">In the domain, we’re going to make use of a <code class="markup--code markup--p-code">d3-array</code> function <code class="markup--code markup--p-code">extent</code> (docs <a href="https://github.com/d3/d3-array#extent" data-href="https://github.com/d3/d3-array#extent" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">here</a>). <code class="markup--code markup--p-code">extent</code> will take an array and one of our <code class="markup--code markup--p-code">x</code> or <code class="markup--code markup--p-code">y</code> functions (d3 calls them accessors) and returns the min and max values.</p>

<p className="it">Podemos entonces crear una escala de valor ay así:</p>

<p className="p">We can then create a y value scale like so:</p>

<pre>import &#123;extent, max&#125; from 'd3-array';</pre>
<pre>// ...</pre>
<pre>const yScale = scaleLinear(&#123;<br></br>  range: [yMax, 0],<br></br>  domain: [0, max(data, y)],<br></br>&#125;);</pre>

<p className="it">Aquí estamos añadiendo otra función d3 <code class="markup--code markup--p-code">max</code>que nos llevará el mayor valor de y en los datos.</p>

<p className="p">Here we’re adding another d3 function <code class="markup--code markup--p-code">max</code> that will get us the largest y value in the data.</p>

<h4 name="09e5" id="09e5" class="graf graf--h4 graf-after--p">Creating Our First&nbsp;Element</h4>

<p className="it"><code class="markup--code markup--p-code">vx</code>Espera que tus elementos se representen dentro de un <code class="markup--code markup--p-code">svg</code>elemento, por lo que comenzaremos creando uno.</p>

<p className="p"><code class="markup--code markup--p-code">vx</code> expects your elements to be rendered inside of an <code class="markup--code markup--p-code">svg</code> element, so we’ll start by creating one.</p>

<pre>const chart = ( &lt;svg width=&#123;width&#125; height=&#123;height&#125;&gt; &lt;/svg&gt; );</pre>

<p className="it">A continuación, crearemos un <code class="markup--code markup--p-code">&lt;Shape.AreaClosed/&gt;</code>elemento ( <a href="https://github.com/hshoff/vx/tree/master/packages/vx-shape#areaclosed-" data-href="https://github.com/hshoff/vx/tree/master/packages/vx-shape#areaclosed-" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">Documentos aquí</a> ) dentro de un <code class="markup--code markup--p-code">&lt;Group /&gt;</code>elemento.</p>

<p className="p">Then, we’ll create an <code class="markup--code markup--p-code">&lt;Shape.AreaClosed/&gt;</code> element (<a href="https://github.com/hshoff/vx/tree/master/packages/vx-shape#areaclosed-" data-href="https://github.com/hshoff/vx/tree/master/packages/vx-shape#areaclosed-" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">Docs Here</a>) inside a <code class="markup--code markup--p-code">&lt;Group /&gt;</code> element.</p>

<pre>import &#123; AreaClosed &#125; from '@vx/shape';</pre>

<pre>const chart = (<br></br>
    &lt;svg width=&#123;width&#125; height=&#123;height&#125;&gt;<br></br>
         &lt;Group top=&#123;margin.top&#125; left=&#123;margin.left&#125;&gt;</pre>

<p className="it">Si representamos este gráfico, veremos algo como esto:</p>

<p className="p">If we render this chart, we’ll see something like this:</p>

<div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*xFc9gbEYWi_-RzmXZHBqzQ.png" data-width="1536" data-height="868" data-action="zoom" data-action-value="1*xFc9gbEYWi_-RzmXZHBqzQ.png" data-scroll="native"><canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="40"></canvas><img class="progressiveMedia-image js-progressiveMedia-image" data-src="https://cdn-images-1.medium.com/max/800/1*xFc9gbEYWi_-RzmXZHBqzQ.png" src="https://cdn-images-1.medium.com/max/800/1*xFc9gbEYWi_-RzmXZHBqzQ.png" /><noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/800/1*xFc9gbEYWi_-RzmXZHBqzQ.png"&gt;</noscript></div>

<figcaption class="imageCaption">Example First&nbsp;Chart</figcaption>
<h4>Giving Context to the&nbsp;Data</h4>

<p className="it">Ahora podemos agregar algunos ejes para etiquetar nuestra información. Vamos a añadir una declaración de importación en la parte superior como:</p>

<p className="p">Now we can add some axes to label our information. We’ll add an import statement at the top like:</p>

<pre>import &#1235; AxisLeft, AxisBottom &#125; from ‘<a href="https://medium.com/@vx" data-href="https://medium.com/@vx" class="markup--anchor markup--pre-anchor" title="Medium profile for @vx" target="_blank">@vx</a>/axis’;</pre>

<p className="it">Para agregar un eje inferior, agregaremos un <code class="markup--code markup--p-code">Axis.AxisBottom</code>( <a href="https://github.com/hshoff/vx/tree/master/packages/vx-axis" data-href="https://github.com/hshoff/vx/tree/master/packages/vx-axis" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">Documentos aquí</a> ) a nuestro gráfico de la siguiente manera:</p>

<p className="p">To add a bottom axis, we’ll add an <code class="markup--code markup--p-code">Axis.AxisBottom</code> (<a href="https://github.com/hshoff/vx/tree/master/packages/vx-axis" data-href="https://github.com/hshoff/vx/tree/master/packages/vx-axis" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">Docs Here</a>) to our chart like so:</p>

<pre>&lt;AxisBottom<br></br>  scale=&#123;xScale&#125;<br></br>  top=&#123;yMax&#125;<br></br>  label=&#123;'Years'&#125;<br></br>  stroke=&#123;'#1b1a1e'&#125;<br></br>  tickTextFill=&#123;'#1b1a1e'&#125;<br></br>/&gt;</pre>

<p className="it">Entonces, podemos agregar un <code class="markup--code markup--p-code">Axis.AxisLeft</code>con:</p>

<p className="p">Then, we can add an <code class="markup--code markup--p-code">Axis.AxisLeft</code> with:</p>

<pre>&lt;AxisLeft<br></br>  scale=&#123;yScale&#125;<br></br>  top=&#123;0&#125;<br></br>  left=&#123;0&#125;<br></br>  label=&#123;'Close Price ($)'&#125;<br></br>  stroke=&#123;'#1b1a1e'&#125;<br></br>  tickTextFill=&#123;'#1b1a1e'&#125;<br></br>/&gt;</pre>

<p className="it">Todos juntos tenemos:</p>

<p className="p">All together we have:</p>

<pre>&lt;svg width=&#123;width&#125; height=&#123;height&#125;&gt;<br></br>   &lt;Group top=&#123;margin.top&#125; left=&#123;margin.left&#125;&gt;</pre>

<pre>        &lt;AxisLeft<br></br>          scale=&#123;yScale&#125;<br></br>          top=&#123;0&#125;<br></br>          left=&#123;0&#125;<br></br>          label=&#123;'Close Price ($)'&#125;<br></br>          stroke=&#123;'#1b1a1e'&#125;<br></br>          tickTextFill=&#123;'#1b1a1e'&#125;<br></br>        /&gt;</pre>
<pre>       &lt;AxisBottom<br></br>          scale=&#123;xScale&#125;<br></br>          top=&#123;yMax&#125;<br></br>          label=&#123;'Years'&#125;<br></br>          stroke=&#123;'#1b1a1e'&#125;<br></br>          tickTextFill=&#123;'#1b1a1e'&#125;<br></br>        /&gt;</pre>
<pre>       &lt;AreaClosed<br></br>          data=&#123;data&#125;<br></br>          xScale=&#123;xScale&#125;<br></br>          yScale=&#123;yScale&#125;<br></br>          x=&#123;x&#125;<br></br>          y=&#123;y&#125;<br></br>          fill=&#123;"red"&#125;<br></br>        /&gt;<br></br>   &lt;/Group&gt;<br></br>&lt;/svg&gt;</pre>

<p className="it">Que creará un gráfico que se ve así:</p>

<p className="p">Which will create a graph that looks like this:</p>
<div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*eo69o_pnI5ppT33sDnHwiQ.png" data-width="1372" data-height="834" data-action="zoom" data-action-value="1*eo69o_pnI5ppT33sDnHwiQ.png" data-scroll="native"><canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="45"></canvas><img class="progressiveMedia-image js-progressiveMedia-image" data-src="https://cdn-images-1.medium.com/max/800/1*eo69o_pnI5ppT33sDnHwiQ.png" src="https://cdn-images-1.medium.com/max/800/1*eo69o_pnI5ppT33sDnHwiQ.png" /><noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/800/1*eo69o_pnI5ppT33sDnHwiQ.png"&gt;</noscript></div>

<figcaption class="imageCaption">Graph with&nbsp;Axes</figcaption>

<h4 name="1ee3" id="1ee3" class="graf graf--h4 graf-after--figure">Making It&nbsp;Pretty</h4>

<p className="it">Es funcional, pero no es súper atractivo. Vamos a utilizar algunas de las características de gradiente de vx para hacer este gráfico un poco más agradable.</p>

<p className="p">It’s functional, but it’s not super appealing. Let’s use some of vx’s gradient features to make this graph a little nicer.</p>

<p className="it">Para usar un gradiente, primero debemos definirlo. Lo haremos añadiendo un <code class="markup--code markup--p-code">@vx/gradient</code>componente ( <a href="https://github.com/hshoff/vx/tree/master/packages/vx-gradient" data-href="https://github.com/hshoff/vx/tree/master/packages/vx-gradient" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">Documentos aquí</a> ).</p>

<p className="p">To use a gradient, we first need to define it. We’ll do that by added a <code class="markup--code markup--p-code">@vx/gradient</code> component (<a href="https://github.com/hshoff/vx/tree/master/packages/vx-gradient" data-href="https://github.com/hshoff/vx/tree/master/packages/vx-gradient" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">Docs Here</a>).</p>

<pre>import &#123; LinearGradient &#125; from '@vx/gradient';</pre>

<p className="it">VX viene con un montón de gradientes pre-hechos que podes utilizar, pero por ahora vamos a crear el nuestro.</p>

<p className="p">VX comes with a whole bunch of pre-made gradients that you can use, but let’s create our own for now.</p>

<p className="it">He marcado <a href="https://webgradients.com/" data-href="https://webgradients.com/" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">webgradients</a> hace un tiempo, así que voy a tomar uno de allí. Tomaremos dos valores de color y los pondremos en un elemento como este:</p>

<p className="p">I bookmarked <a href="https://webgradients.com/" data-href="https://webgradients.com/" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">webgradients</a> awhile ago, so I’m gonna take one off there. We’ll take two color values and pop them into an element like this:</p>

<pre>&lt;LinearGradient<br></br>  from='#fbc2eb'<br></br>
  to='#a6c1ee'<br></br>
    id='gradient'<br></br>
    /&gt;</pre>

<p className="it">Entonces, vamos a cambiar el <code class="markup--code markup--p-code">fill</code>de nuestro <code class="markup--code markup--p-code">AreaClosed</code>ser <code class="markup--code markup--p-code">url("#gradient")</code>y quitar esa línea en la parte superior así:</p>

<p className="p">Then, we’ll change the <code class="markup--code markup--p-code">fill</code> of our <code class="markup--code markup--p-code">AreaClosed</code> to be <code class="markup--code markup--p-code">url("#gradient")</code> and remove that line on top like so:</p>

<pre>&lt;AreaClosed<br></br>
  data=&#123;data&#125;<br></br>
  xScale=&#123;xScale&#125;<br></br>
    yScale=&#123;yScale&#125;<br></br>
    x=&#123;x&#125;<br></br>  y=&#123;y&#125;<br></br>
      fill=&#123;"url(#gradient)"&#125;<br></br>
        stroke=&#123;""&#125;<br></br>
        /&gt;</pre>

<p className="it">Ahora tendremos un gráfico que se ve así:</p>

<p className="p">Now we’ll have a graph that looks like this:</p>

</div>
</div>



  </Layout>
)


	<pre> 
	       &lt;AreaClosed<br></br>
	          data=&#123;data&#125;<br></br>
	                    xScale=&#123;xScale&#125;<br></br>
	                              yScale=&#123;yScale&#125;<br></br>
	                                        x=&#123;x&#125;<br></br>
	                                                  y=&#123;y&#125;<br></br>          fill&#123;"red"&#125;<br> </br>
	                                                         /&gt;</pre>
	<pre>
	      &lt;/Group&gt;<br></br>
	   &lt;/svg&gt;<br></br>
	)</pre>
