import Layout from '../components/layout'

export default () => (
  <Layout title='ch1'>
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

                    .interno {
                    font-family: verdana;
                    font-style: italic;
                    color: #395C73;
                    font-size: 24px;    
                    }

                    .sub{
                        text-decoration: underline;
                      }

                    .pl-k {
                     color:#F70E0E; 
                    }
                   
                    .pl-c1 {
                     color:#3E6AA7; 
                    }
                    .pl-c {
                     color:#878585; 
                    }
                    .pl-smi {
                     color:#680CF3; 
                    }

                    .pl-pds {
                     color:#5D83A4; 
                    }
                    pre {
                     font-size: 24px; 
                    }

                    .linking {
                    font-family: verdana;
                    font-style: italic;
                    color: #394973;
                    font-size: 24px;    
                    }
                    .center {
                      text-align: center;
                      padding: 10px;
                    }                    
                `}</style>

    <div className="col-md-6"> 
    <p align="center">
  <a href="/hshoff/vx/blob/master/assets/Screen Shot 2017-05-05 at 6.55.56 AM.png" target="_blank"><img src="/static/Screen Shot 2017-05-05 at 6.55.56 AM.png" width="100%" alt="Image"/></a>
</p>

<h3><a id="user-content-vx" class="anchor" href="#vx" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>vx</h3>

<p className="it">vx es una colección de componentes reutilizables de visualización de bajo nivel. vx combina la potencia de d3 para generar tu visualización con los beneficios de React para la actualización del DOM.</p>
<p className="p">vx is collection of reusable low-level visualization components. vx combines the power of d3 to generate your visualization with the benefits of react for updating the DOM.</p>
<br></br>
<p className="center">
  <strong>
    <a className="linking" href="https://vx-demo.now.sh">Docs</a>
  </strong>&nbsp;
  •&nbsp;
  <strong>
    <a className="linking" href="https://vx-demo.now.sh/gallery">Gallery</a>
  </strong>&nbsp;
  •&nbsp;
  <strong>
    <a className="linking" href="https://medium.com/vx-code/getting-started-with-vx-1756bb661410">Blog</a>
  </strong>&nbsp;
  •&nbsp;
  <strong>
    <a className="linking" href="/hshoff/vx/blob/master/CHANGELOG.md">Changelog</a>
  </strong>&nbsp;
  •&nbsp;
  <strong>
    <a className="linking" href="https://medium.com/vx-code/getting-started-with-vx-1756bb661410">Getting started tutorial</a>
  </strong>
</p>
<p align="center">
  <a href="https://vx-demo.now.sh/gallery">
    <div className="image"><a></a><img src="/static/vx-gallery.png" width="100%" alt="Image"/></div>
  </a>
</p>
<h2><a id="user-content-usage" class="anchor" href="#usage" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>
<p className="p"><a href="https://glitch.com/edit/#!/remix/kind-modem"><img src="https://camo.githubusercontent.com/bf25c4daaaa8f68bca51bd34149c07b1c76acd4b/68747470733a2f2f63646e2e676c697463682e636f6d2f32373033626166322d623634332d346461372d616239312d37656532613264303062356225324672656d69782d627574746f6e2e737667" alt="Remix on Glitch" data-canonical-src="https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg" /></a></p>
<p className="it">Hagamos un simple gráfico de barras.</p>

<p className="p">Let's make a simple bar graph.</p>
<p className="it">Primero instalaremos los paquetes relevantes:</p>
<p className="p">First we'll install the relevant packages:</p>
<pre><code>$ npm install --save @vx/mock-data @vx/group @vx/shape @vx/scale
</code></pre>
<p className="p"><a href="/hshoff/vx/blob/master/assets/simplebar.png" target="_blank"><div className="image"><a></a><img src="/static/simplebar.png" width="70%" alt="Image"/></div></a></p>

<div class="highlight highlight-source-js">
<pre><span className="pl-k">import</span> <span className="pl-smi">React</span> <span className="pl-k">from</span> <span className="pl-s"><span className="pl-pds">'</span>react<span className="pl-pds">'</span></span>;<br></br>
<span className="pl-k">import</span> &#123; <span className="pl-smi">letterFrequency</span> &#125; <span className="pl-k">from</span> <span className="pl-s"><span className="pl-pds">'</span>@vx/mock-data<span className="pl-pds">'</span></span>;<br></br>
<span className="pl-k">import</span> &#123; <span className="pl-smi">Group</span> &#125; <span className="pl-k">from</span> <span className="pl-s"><span className="pl-pds">'</span>@vx/group<span className="pl-pds">'</span></span>;<br></br>
<span className="pl-k">import</span> &#123; <span className="pl-smi">Bar</span> &#125; <span className="pl-k">from</span> <span className="pl-s"><span className="pl-pds">'</span>@vx/shape<span className="pl-pds">'</span></span>;<br></br>
<span className="pl-k">import</span> &#123; <span className="pl-smi">scaleLinear</span>, <span className="pl-smi">scaleBand</span> &#125; <span className="pl-k">from</span> <span className="pl-s"><span className="pl-pds">'</span>@vx/scale<span className="pl-pds">'</span></span>;<br></br>
<br></br>
<span className="pl-c"><span className="pl-c">//</span> Utilizaremos algunos datos simulados de `@vx/mock-data` para esto<br></br>//We'll use some mock data from `@vx/mock-data` for this.</span><br></br>
<span className="pl-k">const</span> <span className="pl-c1">data</span> <span className="pl-k">=</span> letterFrequency;<br></br>
<br></br>
<span className="pl-c"><span className="pl-c">//</span> Definir las dimensiones y los márgenes del gráfico <br></br>// Define the graph dimensions and margins</span><br></br>
<span className="pl-k">const</span> <span className="pl-c1">width</span> <span className="pl-k">=</span> <span className="pl-c1">500</span>;<br></br>
<span className="pl-k">const</span> <span className="pl-c1">height</span> <span className="pl-k">=</span> <span className="pl-c1">500</span>;<br></br>
<span className="pl-k">const</span> <span className="pl-c1">margin</span> <span className="pl-k">=</span> &#123; top<span className="pl-k">:</span> <span className="pl-c1">20</span>, bottom<span className="pl-k">:</span> <span className="pl-c1">20</span>, left<span className="pl-k">:</span> <span className="pl-c1">20</span>, right<span className="pl-k">:</span> <span className="pl-c1">20</span> &#125;;<br></br>
<br></br>
<span className="pl-c"><span className="pl-c">//</span>Entonces crearemos algunos límites<br></br><span className="pl-c">//</span> Then we'll create some bounds</span><br></br>
<span className="pl-k">const</span> <span className="pl-c1">xMax</span> <span className="pl-k">=</span> width <span className="pl-k">-</span> <span className="pl-smi">margin</span>.<span className="pl-c1">left</span> <span className="pl-k">-</span> <span className="pl-smi">margin</span>.<span className="pl-c1">right</span>;<br></br>
<span className="pl-k">const</span> <span className="pl-c1">yMax</span> <span className="pl-k">=</span> height <span className="pl-k">-</span> <span className="pl-smi">margin</span>.<span className="pl-c1">top</span> <span className="pl-k">-</span> <span className="pl-smi">margin</span>.<span className="pl-c1">bottom</span>;<br></br>
<br></br>
<span className="pl-c"><span className="pl-c">//</span> Haremos algunos ayudantes para obtener los datos que queremos<br></br> <span className="pl-c">//</span>We'll make some helpers to get at the data we want</span><br></br>
<span className="pl-k">const</span> <span className="pl-c1">x</span> <span className="pl-k">=</span> <span className="pl-smi">d</span> <span className="pl-k">=&gt;</span> <span className="pl-smi">d</span>.<span className="pl-smi">letter</span>;<br></br>
<span className="pl-k">const</span> <span className="pl-c1">y</span> <span className="pl-k">=</span> <span className="pl-smi">d</span> <span className="pl-k">=&gt;</span> <span className="pl-k">+</span><span className="pl-smi">d</span>.<span className="pl-smi">frequency</span> <span className="pl-k">*</span> <span className="pl-c1">100</span>;<br></br>
<br></br>
<span className="pl-c"><span className="pl-c">//</span>Y luego escalá el gráfico por nuestros datos<br></br><span className="pl-c">//</span> And then scale the graph by our data</span><br></br>
<span className="pl-k">const</span> <span className="pl-c1">xScale</span> <span className="pl-k">=</span> <span className="pl-en">scaleBand</span>(&#123;<br></br>
  &nbsp;rangeRound<span className="pl-k">:</span> [<span className="pl-c1">0</span>, xMax],<br></br>
  &nbsp;domain<span className="pl-k">:</span> <span className="pl-smi">data</span>.<span className="pl-en">map</span>(x),<br></br>
  &nbsp;padding<span className="pl-k">:</span> <span className="pl-c1">0.4</span>,<br></br>
&#125;);<br></br>
<span className="pl-k">const</span> <span className="pl-c1">yScale</span> <span className="pl-k">=</span> <span className="pl-en">scaleLinear</span>(&#123;<br></br>
&nbsp;rangeRound<span className="pl-k">:</span> [yMax, <span className="pl-c1">0</span>],<br></br>
&nbsp;domain<span className="pl-k">:</span> [<span className="pl-c1">0</span>, <span className="pl-c1">Math</span>.<span className="pl-c1">max</span>(<span className="pl-k">...</span><span className="pl-smi">data</span>.<span className="pl-en">map</span>(y))],<br></br>
&#125;);
<br></br>
<br></br>
<span className="pl-c"><span className="pl-c">//</span>Componé la escala y las funciones de acceso para obtener funciones de punto<br></br><span className="pl-c">//</span> Compose together the scale and accessor functions to get point functions</span><br></br>
<span className="pl-k">const</span> <span className="pl-c1">compose</span> <span className="pl-k">=</span> (<span className="pl-smi">scale</span>, <span className="pl-smi">accessor</span>) <span className="pl-k">=&gt;</span> (<span className="pl-smi">data</span>) <span className="pl-k">=&gt;</span> <span className="pl-en">scale</span>(<span className="pl-en">accessor</span>(data));<br></br>
<span className="pl-k">const</span> <span className="pl-c1">xPoint</span> <span className="pl-k">=</span> <span className="pl-en">compose</span>(xScale, x);<br></br>
<span className="pl-k">const</span> <span className="pl-c1">yPoint</span> <span className="pl-k">=</span> <span className="pl-en">compose</span>(yScale, y);<br></br>
<br></br>
<span className="pl-c"><span className="pl-c">//</span>Finalmente lo incorporaremos todo en un SVG<br></br><span className="pl-c">//</span> Finally we'll embed it all in an SVG</span><br></br>
<span className="pl-k">function</span> <span className="pl-en">BarGraph</span>(<span className="pl-smi">props</span>) &#123;<br></br>
&nbsp;<span className="pl-k">return</span> (<br></br>
&nbsp;&nbsp;<span className="pl-k">&lt;</span>svg width<span className="pl-k">=</span>&#123;width&#125; height<span className="pl-k">=</span>&#123;height&#125;<span className="pl-k">&gt;</span><br></br>
      &#123;<span className="pl-smi">data</span>.<span className="pl-en">map</span>((<span className="pl-smi">d</span>, <span className="pl-smi">i</span>) <span className="pl-k">=&gt;</span> &#123;<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="pl-k">const</span> <span className="pl-c1">barHeight</span> <span className="pl-k">=</span> yMax <span className="pl-k">-</span> <span className="pl-en">yPoint</span>(d);<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="pl-k">return</span> (<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pl-k">&lt;</span>Group key<span className="pl-k">=</span>&#123;<span className="pl-s"><span className="pl-pds">`</span>bar-<span className="pl-s1"><span className="pl-pse">$&#123;</span>i<span className="pl-pse">&#125;</span></span><span className="pl-pds">`</span></span>&#125;<span className="pl-k">&gt;</span><br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pl-k">&lt;</span>Bar<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x<span className="pl-k">=</span>&#123;<span className="pl-en">xPoint</span>(d)&#125;<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y<span className="pl-k">=</span>&#123;yMax <span className="pl-k">-</span> barHeight&#125;<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height<span className="pl-k">=</span>&#123;barHeight&#125;<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width<span className="pl-k">=</span>&#123;<span className="pl-smi">xScale</span>.<span className="pl-en">bandwidth</span>()&#125;<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fill<span className="pl-k">=</span><span className="pl-s"><span className="pl-pds">'</span>#fc2e1c<span className="pl-pds">'</span></span><br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pl-k">/</span><span className="pl-k">&gt;</span><br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pl-k">&lt;</span><span className="pl-k">/</span>Group<span className="pl-k">&gt;</span><br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;);<br></br>
&nbsp;&nbsp;&nbsp;&#125;)&#125;<br></br>
&nbsp;&nbsp;<span className="pl-k">&lt;</span><span className="pl-k">/</span>svg<span className="pl-k">&gt;</span><br></br>
&nbsp;);<br></br>
&#125;<br></br>
<br></br>
<span className="pl-c"><span className="pl-c">//</span>...En otro lugar, renderizalo<br></br><span className="pl-c">//</span> ... somewhere else, render it ...</span><br></br>
<span className="pl-c"><span className="pl-c">//</span> &lt;BarGraph /&gt;</span></pre></div>



<p className="it">Para ver más ejemplos <code>vx</code>, consultá la <a href="https://vx-demo.now.sh/gallery">galería</a>.</p>

<p className="p">For more examples using <code>vx</code>, check out the <a href="https://vx-demo.now.sh/gallery">gallery</a>.</p>
<h2><a id="user-content-motivation" class="anchor" href="#motivation" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Motivation</h2>

<p className="p"><strong>Goal</strong></p>

<p className="it">El objetivo es crear una biblioteca de componentes que puedas usar para crear tu propia biblioteca de gráficos reutilizables o tu chart único personalizado. vx es en gran medida unopinionated y está destinado a ser construir en la parte superior de. Manteniendo sus tamaños de bultle bajos y utilizando solamente los paquetes que necesites.</p>
<p className="p">The goal is to create a library of components you can use to make both your own reusable chart library or your slick custom one-off chart. vx is largely unopinionated and is meant to be build on top of. Keep your bundle sizes down and use only the packages you need.</p>
<p className="it"><strong>¿Cómo?</strong></p>
<p className="p"><strong>How?</strong></p>

<p className="it">Bajo el capó, vx está usando d3 para los cálculos y las matemáticas. Si estás creando su propia biblioteca de gráficos impresionante encima de vx, es fácil crear un componente api que oculte a d3 por completo. Lo que significa que tu equipo podría crear gráficos tan fácilmente como usar componentes reutilizables de React .</p>
<p className="p">Under the hood, vx is using d3 for the calculations and math. If you're creating your own awesome chart library on top of vx, it's easy to create a component api that hides d3 entirely. Meaning your team could create charts as easily as using reusable react components.</p>

<p className="it"><strong>¿Pero por qué?</strong></p>
<p className="p"><strong>But why?</strong></p>
<p className="it">Mezclar dos modelos mentales para actualizar el DOM nunca es un buen consejo. Copiar y pegar código d3 en <code>componentDidMount()</code> es sólo eso. Esta colección de componentes te permite crear fácilmente tus propios gráficos o biblioteca de visualización reutilizables sin tener que aprender d3. No más selections o <code>enter()</code>/ <code>exit()</code>/ <code>update()</code>.</p>

<p className="p">Mixing two mental models for updating the DOM is never a good time. Copy and pasting d3 code into <code>componentDidMount()</code> is just that. This collection of components lets you easily build your own reusable visualization charts or library without having to learn d3. No more selections or <code>enter()</code>/<code>exit()</code>/<code>update()</code>.</p>


<h2><a id="user-content-status" class="anchor" href="#status" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h2>

<p className="it"><code>Super beta</code> Retener en el uso de este en la producción hasta que sacudir algunos de los mayores problemas de API (post v1.0.0 +). Echa un vistazo a <a href="https://github.com/hshoff/vx/projects/1">la carretera a v1</a>.</p>
<p className="p"><code>Super beta</code> Hold off on using this in production until I shake out some of the bigger API problems (post v1.0.0+). Check out <a href="https://github.com/hshoff/vx/projects/1">the road to v1</a>.</p>
<p className="it">Si sos un codificador curioso, sentite libre de instalar y jugar con los paquetes. Recomiendo usar <code>--save-exact</code> cuando hagas <code>npm install</code>.</p>

<p className="p">If you're a curious coder, feel free to install and play around with the packages. I recommend using <code>--save-exact</code> when you <code>npm install</code>.</p>
<h2><a id="user-content-roadmap" class="anchor" href="#roadmap" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Roadmap</h2>
<p className="it">Proximamente, echa un vistazo a la <a href="/hshoff/vx/blob/master/ROADMAP.md">hoja de ruta</a>.</p>
<p className="p">Lots coming soon, check out the <a href="/hshoff/vx/blob/master/ROADMAP.md">roadmap</a>.</p>
<h2><a id="user-content-in-the-wild" class="anchor" href="#in-the-wild" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>In the wild</h2>
<ul>
<li className="p"><a href="https://github.com/williaster/data-ui">williaster/data-ui</a> (<a href="https://williaster.github.io/data-ui/">Demo</a>)</li>
<li className="it"><a href="https://github.com/Flaque/data-structures">Flaque/data-structures</a> ( <a href="https://trie.now.sh/">explicación interactiva de la estructura de datos trie</a> )</li>
<li className="p"><a href="https://github.com/Flaque/data-structures">Flaque/data-structures</a> (<a href="https://trie.now.sh/">Interactive explanation of the trie data structure</a>)</li>
<li className="it">¿Tenes un proyecto que utiliza vx? Abrí una solicitud de extracción y la agregaremos a la lista.</li>
<li className="p">Have a project that's using vx? Open a pull request and we'll add it to the list.</li>
</ul>
<h2><a id="user-content-faq" class="anchor" href="#faq" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>FAQ</h2>
<ul>
<li className="it">
<p className="it">¿Qué significa <code>vx</code>?</p><p className="it">vx representa los componentes de visualización.</p></li>
<li className="p">
<p className="p">What does <code>vx</code> stand for?</p>
<p className="p">vx stands for visualization components.</p>
</li>
<li className="it">
<p className="it">¿Planeas soportar animaciones/transiciones?</p><p className="it">¡Sip!</p>  </li>
<li className="p">
<p className="p">Do you plan on supporting animation/transitions?</p><p className="p">yup!</p>
</li>
<li className="it">
<p className="it">¿Tengo que usar cada paquete para hacer un gráfico?</p><p className="it">Nop, Elejí los paquetes que necesitas.</p>  </li>
<li className="p">
<p className="p">Do I have to use every package to make a chart?</p>
<p className="p">nope! pick and choose the packages you need.</p>
</li>
<li className="it">
<p className="it">¿Puedo usar esto para crear mi propia biblioteca de gráficos para mi equipo?</p>
<p className="it">Por favor, hacelo.</p></li>
<li className="p">
<p className="p">Can I use this to create my own library of charts for my team?</p>
<p className="p">Please do.</p>
</li>
<li className="it">
<p className="it">Me gusta usar d3.</p>
<p className="it">A mi también.</p></li>
<li className="p">
<p className="p">I like using d3.</p>
<p className="p">Me too.</p>
</li>
</ul>

</div>
</div>
  </Layout>
)






