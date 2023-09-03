---
title: 'CSS Houdini'
description: 'API Paint de Houdini'
pubDate: 'Sep 04 2023'
---

<div class="reveal">
  <div class="slides">
    <section>
      <section>
        <p class="title-slide">CSS houdini</p>
        <ul>
          <li>
            Grupo de APIs que da acceso directo a
            <abbr title="modelo de objetos de CSS">CSSOM</abbr>
          </li>
          <li>Mediante <abbr title="módulos javascript">worklets</abbr></li>
          <li>
            Permite escribir código que el navegador puede analizar como CSS
          </li>
          <li>
            Crear nuevas funcionalidades CSS sin esperar a que se
            implementen de forma nativa en los navegadores
          </li>
        </ul>
        <aside class="notes">Sin entrar en detalle</aside>
      </section>
      <section>
        <p>Ampliar información de manera más técnica y con más ejemplos</p>
        <a href="https://www.youtube.com/watch?v=jk_rQZzyqLQ&t=440s" target="_blank">Charla en youtube by Joan
          León</a><br />
        <a href="https://octuweb.com/css-houdini-algo-mas-que-magia/" target="_blank">
          Presentación by Joan León
        </a>
        <aside class="notes">
          <p>Si quieres ampliar más información recomiendo ver estos recursos</p>
          <p>Se trata de video y presentación de slides que hizo Joan León</p>
        </aside>
      </section>
      <section>
        <figure>
          <img src="/assets/css-houdini/CSS-Houdini-rendering-process-polyfilled.png" width="700" alt="" />
          <figcaption>
            Renderizado del navegador tradicional
            <a href="https://octuweb.com/css-houdini-algo-mas-que-magia/" target="_blank">source</a>
          </figcaption>
        </figure>
        <figure>
          <img src="/assets/css-houdini/CSS-Houdini-rendering-process.png" width="700" alt="" />
          <figcaption>
            Renderizado del navegador con CSS Houdini
            <a href="https://octuweb.com/css-houdini-algo-mas-que-magia/" target="_blank">source</a>
          </figcaption>
        </figure>
        <aside class="notes">
          <ol>
            <li>Tradicional: proceso renderizado lineal</li>
            <li>CSS Houdini: tenemos una API para cada uno de los pasos</li>
          </ol>
          <p>Con La API de Houdini, cualquier cambio que se produzca, no será necesario que se ejecute todo el renderizado, sólo
            lo que se vea afectado</p>
        </aside>
      </section>
      <section>
        <p class="title-slide">CSSOM</p>
        <ul>
          <li>document.styleSheets</li>
          <li>CSSStyleSheetList</li>
          <li>CSSStyleSheet</li>
          <li>CSSRuleList</li>
          <li>CSSStyleRule</li>
          <li>CSSStyleDeclaration</li>
        </ul>
        <p>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model" target="_blank">Más info: MDN</a>
        </p>
        <aside class="notes">
          <p>Modelo de objetos de CSSOM, es conjunto de APIs que permite leer y/o modificar estilos desde Javascript</p>
        </aside>
      </section>
      <section>
        <p class="title-slide">APIs definidas aunque no todas disponibles</p>
        <ul>
          <li><strong>CSS Properties and Values API</strong></li>
          <li><strong>CSS Typed OM</strong></li>
          <li><strong>CSS Painting API</strong></li>
          <li>Worklets</li>
          <li>CSS Layout API</li>
          <li>CSS Parser API</li>
        </ul>
        <aside class="notes">Listado de API. No entramos en detalle</aside>
      </section>
      <section>
        <p class="title-slide">CSS Painting API</p>
        <aside class="notes">
          Veremos un ejemplo de uso de la API de pintado
        </aside>
        <aside class="notes"></aside>
      </section>
      <section>
        <p class="title-slide">CSS Painting API: registro</p>
        <pre>
          <code data-trim data-line-numbers="1,5|6|2-4">
            class BtnPulse {
              paint(ctx, size, props) {
                // Code
              }
            }
            registerPaint('btn-pulse', BtnPulse);
          </code>
        </pre>
        <aside class="notes">
          <ol>
            <li>Creamos una clase</li>
            <li>
              Llámamos al método registerPaint(...)
              <ol>
                <li>Primer parámetro: nombre que usaremos en CSS</li>
                <li>Segundo parámetro: La clase que hemos creado</li>
              </ol>
            </li>
            <li>Dibujamos canvas en la implementación de paint(...)</li>
          </ol>
        </aside>
      </section>
      <section>
        <p class="title-slide">CSS Painting API: registro (codepen)</p>
        <pre>
          <code data-trim data-line-numbers="6-9|3-5|10">
            // Opción para usarlo en Codepen
            (async () => {
              if (typeof CSS === 'undefined' || !('paintWorklet' in CSS)) {
                await import("https://unpkg.com/css-paint-polyfill");
              }
              const paintModule = URL.createObjectURL(new Blob(
                [ document.querySelector('[type="houdini/paint-worklet"]').textContent ],
                { type: "text/javascript" }
              ));
              await CSS.paintWorklet.addModule(paintModule);
            })()
          </code>
        </pre>
        <aside class="notes">
          Por si queremos hacer pruebas en codepen<br />
          <ol>
            <li>
              La clase que creamos la metememos dentro de
              <code>script</code> y leemos su contenido
            </li>
            <li>
              Si el navegador no reconoce <code>paintWorklet</code> añadimos
              polyfill
            </li>
            <li>Añadimos el worklet</li>
          </ol>
        </aside>
      </section>
      <section>
        <p class="title-slide">CSS Painting API: uso</p>
        <pre>
          <code data-trim data-line-numbers="1,6|3|4">
            @supports (background: paint(something)) {
              .element {
                background: tomato paint(btn-pulse);
                border-image: paint(another-houdini-definition);
              }
            }
          </code>
        </pre>
        <aside class="notes">
          Los <code>paint</code> que definamos se pueden usar en
          <mark><code>background</code></mark> y
          <mark><code>border</code></mark>
        </aside>
      </section>
      <section data-auto-animate>
        <p class="title-slide">CSS Painting API: Canvas I</p>
        <pre data-id="code-animation">
          <code data-trim data-line-numbers="1,5|4|2|3">
            registerPaint('btn-pulse', class {
              static get inputProperties() { }
              _paintCircles(ctx, fillStyle, strokeStyle, x, y, rad)  { }
              paint(ctx, size, props) { }
            })
          </code>
        </pre>
        <aside class="notes">
          <ol>
            <li>
              paint() {}: método que se ejecuta cada vez que el motor CSS
              necesite pintar/repintar el elemento
            </li>
            <li>
              static get inputProperties() {}: método estático para acceder
              a Custom Properties CSS.
            </li>
            <li>
              _paintCircles() {}: método auxiliar para no repetir código.
            </li>
          </ol>
        </aside>
      </section>
      <section data-auto-animate>
        <p class="title-slide">CSS Painting API: Canvas II</p>
        <pre data-id="code-animation">
          <code data-trim data-line-numbers="2-4">
            registerPaint('btn-pulse', class {
              static get inputProperties() {
                return []
              }
              _paintCircles(ctx, fillStyle, strokeStyle, x, y, rad)  { }
              paint(ctx, size, props) { }
            })
          </code>
        </pre>
      </section>
      <section data-auto-animate>
        <p class="title-slide">CSS Painting API: Canvas III</p>
        <pre data-id="code-animation">
          <code data-trim data-line-numbers="2-11">
            registerPaint('btn-pulse', class {
              static get inputProperties() {
                return [
                  '--x',
                  '--y',
                  '--rad',
                  '--pulse-rad',
                  '--fill',
                  '--pulse-stroke-color'
                ]
              }
              _paintCircles(ctx, fillStyle, strokeStyle, x, y, rad) { }
              paint(ctx, size, props) { }
            })
          </code>
        </pre>
      </section>
      <section data-auto-animate>
        <p class="title-slide">CSS Painting API: Canvas IV</p>
        <pre data-id="code-animation">
          <code data-trim data-line-numbers="12">
            registerPaint('btn-pulse', class {
              static get inputProperties() {
                return [
                  '--x',
                  '--y',
                  '--rad',
                  '--pulse-rad',
                  '--fill',
                  '--pulse-stroke-color'
                ]
              }
              _paintCircles(ctx, fillStyle, strokeStyle, x, y, rad) {}
              paint(ctx, size, props) { }
            })
          </code>
        </pre>
      </section>
      <section data-auto-animate>
        <p class="title-slide">CSS Painting API - Canvas V</p>
        <pre data-id="code-animation">
          <code data-trim data-line-numbers="12-19">
            registerPaint('btn-pulse', class {
              static get inputProperties() {
                return [
                  '--x',
                  '--y',
                  '--rad',
                  '--pulse-rad',
                  '--fill',
                  '--pulse-stroke-color'
                ]
              }
              _paintCircles(ctx, fillStyle, strokeStyle, x, y, rad) {
                ctx.beginPath()
                ctx.fillStyle = fillStyle
                ctx.strokeStyle = strokeStyle
                ctx.arc(x, y, rad, 0, 2 * Math.PI)
                ctx.fill()
                ctx.stroke()
              }
              paint(ctx, size, props) { }
            })
          </code>
        </pre>
      </section>
      <section data-auto-animate>
        <p class="title-slide">CSS Painting API: Canvas VI</p>
        <pre data-id="code-animation">
          <code data-trim data-line-numbers="20">
            registerPaint('btn-pulse', class {
              static get inputProperties() {
                return [
                  '--x',
                  '--y',
                  '--rad',
                  '--pulse-rad',
                  '--fill',
                  '--pulse-stroke-color'
                ]
              }
              _paintCircles(ctx, fillStyle, strokeStyle, x, y, rad) {
                ctx.beginPath()
                ctx.fillStyle = fillStyle
                ctx.strokeStyle = strokeStyle
                ctx.arc(x, y, rad, 0, 2 * Math.PI)
                ctx.fill()
                ctx.stroke()
              }
              paint(ctx, size, props) { }
            })
          </code>
        </pre>
      </section>
      <section data-auto-animate>
        <p class="title-slide">CSS Painting API: Canvas VI</p>
        <pre data-id="code-animation">
          <code data-trim data-line-numbers="20-29">
            registerPaint('btn-pulse', class {
              static get inputProperties() {
                return [
                  '--x',
                  '--y',
                  '--rad',
                  '--pulse-rad',
                  '--fill',
                  '--pulse-stroke-color'
                ]
              }
              _paintCircles(ctx, fillStyle, strokeStyle, x, y, rad) {
                ctx.beginPath()
                ctx.fillStyle = fillStyle
                ctx.strokeStyle = strokeStyle
                ctx.arc(x, y, rad, 0, 2 * Math.PI)
                ctx.fill()
                ctx.stroke()
              }
              paint(ctx, size, props) {
                const x = props.get('--x')
                const y = props.get('--y')
                const rad = props.get('--rad')
                const fill = (props.get('--fill')).toString()
                const pulseRad = props.get('--pulse-rad')
                const pulseStrokeColor = (props.get('--pulse-stroke-color')).toString()
                this._paintCircles(ctx, fill, '#fff', x.value, y.value, rad.value)
                this._paintCircles(ctx, 'transparent', pulseStrokeColor, x.value, y.value, pulseRad.value + rad.value)
              }
            })
          </code>
        </pre>
      </section>
      <section>
        <p class="codepen" data-height="640" data-default-tab="result,html" data-slug-hash="qBayPeR"
          data-user="ivan_albizu" style="
              height: 640px;
              box-sizing: border-box;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 2px solid;
              margin: 1em 0;
              padding: 1em;
            "></p>
        <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
      </section>
    </section>
  </div>
</div>
