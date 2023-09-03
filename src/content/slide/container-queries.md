---
title: 'Container queries'
description: 'Nueva especificación de container Queries'
pubDate: 'Sep 05 2023'
---

<div class="reveal">
  <div class="slides">
    <section data-background-color="#0F3460">
      <section>
        <p class="title-slide">@container CSS</p>
        <ul>
          <li>¿Qué es @container?</li>
          <li>Estado actual</li>
          <li>Definición de @container</li>
          <li>Unidades propias de @container</li>
          <li>@container style()</li>
          <li>Nested @container</li>
        </ul>
      </section>
      <section>
        <p class="title-slide">¿Qué es @container?</p>
        <figure>
          <img src="/assets/containers/container-queries.png" alt="" />
        </figure>
        <aside class="notes">
          <p>Las @container queries se asemejan a las @media queries.<br />Las
          @media queries hacen referencia al ancho de pantalla y las
          @container queries hacen referencia al ancho de un elemento que
          tengamos definido como contenedor.</p>
          <p>En este ejemplo se ven 6 contenedores que tienen mismo contenido
          pero que tienen menos anchos unas que otras, usando los
          contenedores cambiamos la distribución de elementos, su visibilidad y valores de espaciados y tipografías</p>
          <p>Más adelante veremos que actualmente existen dos variantes: una asociada a tamaño de contenedores y otra a valores de
            atributos. Y además, aparecen nuevas unidades CSS</p>
        </aside>
      </section>
      <section>
        <p class="title-slide">Estado actual @container size - Caniuse</p>
        <figure>
          <img src="/assets/containers/caniuse-container-query-size.png" alt="" />
          <figcaption>
            <a href="https://caniuse.com/css-container-queries" target="_blank">Caniuse Container queries size</a>
          </figcaption>
          <aside class="notes"></aside>
        </figure>
        <aside class="notes">
          <p>Consultando CANIUSE podemos ver el soporte para tamaño de contenedores</p>
        </aside>
      </section>
      <section>
        <p class="title-slide">Estado actual @container units - Caniuse</p>
        <figure>
          <img src="/assets/containers/caniuse-container-query-units.png" alt="" />
          <figcaption>
            <a href="https://caniuse.com/css-container-query-units" target="_blank">Caniuse Container queries
              units</a>
          </figcaption>
        </figure>
        <aside class="notes">
          <p>Han aparecido nuevas unidades de medida que tienen analogía con unidades relacionadas al tamaño de viewport (vw /
            vh / vmin / vmax)</p>
        </aside>
      </section>
      <section>
        <p class="title-slide">Estado actual @container style</p>
        <p>Sin datos en Caniuse</p>
        <a href="https://github.com/w3c/csswg-drafts/issues/7185" target="_blank">Issues reported</a>
        <aside class="notes">
          <p>No existe información en CANIUSE sobre soporte para la versión de atributos en contenedores</p>
        </aside>
      </section>
      <section>
        <p class="title-slide">Estado actual - @supports</p>
        <pre>
          <code data-trim data-line-numbers="1,5">
            @supports not (container: inline-size) {
              .warning {
                display: block;
              }
            }
            @supports (selector(:has(*))) {
              body {
                background-color: red
              }
            }
          </code>
        </pre>
        <aside class="notes">
          <p>Pequeño inciso: podríamos saber si está soportado @container en el navegador:</p>
          <p>Podríamos escribir estilos alternativos o mostrar mensajes al usuario con el uso de @supports</p>
        </aside>
      </section>
      <section>
        <p class="title-slide">Definición de @container | HTML</p>
        <pre>
          <code data-trim data-line-numbers="1,6|2-5">
            <footer class="card__footer" data-container="btn">
              <div class="btn-groups">
                <button class="btn" type="button">Action 1</button>
                <button class="btn" type="button">Action 2</button>
              </div>
            </footer>
          </code>
        </pre>
        <aside class="notes">
          Recomiendo tener una caja sólo para definirlo como contenedor sin aplicar estilos, si acaso estilos estéticos (colores,
          bordes, ...) pero nada de <mark>flex</mark> ni <mark>grid</mark> y aplicar
          estilos a los hijos
        </aside>
      </section>
      <section>
        <p class="title-slide">Definición de @container | CSS</p>
        <pre>
          <code data-trim data-line-numbers="1-4|5-8|9-13|14-19">
            [data-container="btn"] {
              container-type: inline-size;// size | inline-size | normal
              container-name: btns;
            }
            .btn-groups {
              display: flex;
              flex-direction: column;
            }
            @container btns (min-width: 300px) {
              .btn-groups {
                flex-direction: row;
              }
            }
            @container (width > 900px) {
              .card {
                --bg-color: brown;
                --padding: 16px;
              }
            }
          </code>
        </pre>
        <aside class="notes">
          <ol>
            <li>
              Definición del elemento que será el contenedor
              <ul>
                <li>
                  size: dimensiones <code>block</code> e
                  <code>inline</code> eje. Aplica layout, style y size.
                </li>
                <li>
                  inline-size: dimensiones <code>inline</code> eje. Aplica
                  layout, style y inline-size.
                </li>
                <li>normal: no se trata como contenedor</li>
              </ul>
            </li>
            <li>
              Nombre del contenedor
              <ul>
                <li>Opcional si sólo se tiene un contenedor</li>
                <li>Siempre le doy nombre para evitar "cosas extrañas"</li>
              </ul>
            </li>
          </ol>
          <hr />
          <ol>
            <li>Aplicamos estilos por defecto como a cualquier elemento</li>
          </ol>
          <hr />
          <ol>
            <li>
              Aplicamos estilos a cualquier elemento hijo del contenedor
            </li>
          </ol>
          <hr />
          <ol>
            <li>Podemos usar operadores <>
            </li>
          </ol>
        </aside>
      </section>
      <section>
        <p class="title-slide">Unidades propias de @container</p>
        <figure>
          <img src="/assets/containers/cq-units.png" alt="Container queries Units" />
          <figcaption>
            <a href="https://drafts.csswg.org/css-contain-3/#container-lengths" target="_blank">More info</a>
          </figcaption>
        </figure>
        <aside class="notes">
          Han aparecido nuevas unidades CSS que aplican a @contenedores
          <ul>
            <li>cqw: % container width (vw)</li>
            <li>cqh: % container height (vh)</li>
            <li>cqi: % container inline size</li>
            <li>cqb: % container block size</li>
            <li>cqmin: menor de los valores cqi | cqb</li>
            <li>cqmax: mayor de los valores cqi | cqb</li>
          </ul>
        </aside>
      </section>
      <section>
        <p class="title-slide">Unidades propias de @container</p>
        <pre>
            <code data-trim data-line-numbers="2">
              .title-card {
                font-size: clamp(1rem, 3cqi + 1rem, 4rem);
                line-height: 1.1;
                margin-bottom: 1rem;
              }
            </code>
          </pre>
        <aside class="notes">
          <p>Se puede aplicar a cualquier atributo que admita unidades. En este caso vemos ejemplo aplicado a tamaño de tipografía
          </p>
        </aside>
      </section>
      <section>
        <p class="title-slide">@container style()</p>
        <pre>
          <code data-trim data-line-numbers="1,15|2-4,15|5-14|16-18">
            @container style(--type: primary) {
              .card {
                border: 0.5rem dotted currentColor;
              }
              @container style(--sub-type: narrow) {
                .card {
                  border-width: 0.2rem;
                }
              }
              @container style(--sub-type: wide) {
                .card {
                  border-width: 1rem;
                }
              }
            }
            @container style(--type: primary) or style(--type: secondary) {
              // some styles
            }
          </code>
        </pre>
        <aside class="notes">
          Opción bastante nueva y que puede sufrir modificaciones<br />
          <ol>
            <li>Requiere <code><mark>style</mark>(atributo: valor)</code></li>
            <li>
              Supuestamente aplica a cualquier atributo CSS, pero en mis
              pruebas sólo me ha funcionado con Custom Properties
            </li>
            <li>
              El atributo que se quiera "escuchar" debe "leerse" en el padre
              y si se cumple el valor entonces si podemos aplicar estilos a
              los hijos que nos interese
            </li>
          </ol>
          <hr />
          <ol>
            <li>
              Podemos hacer nesting de contenedores al estilo
              <code>if if</code>
            </li>
          </ol>
          <hr />
          <ol>
            <li>
              Podemos usar operadores <code>OR</code> y <code>AND</code>
            </li>
          </ol>
        </aside>
      </section>
      <section>
        <p class="title-slide">@container size + style()</p>
        <pre>
          <code data-trim data-line-numbers="1,6">
            @container card (min-width: 600px) and style(--responsive: true) {
              .card {
                outline: 2px solid currentColor;
                outline-offset: -8px;
              }
            }
          </code>
        </pre>
        <aside class="notes">
          Tenemos la posibilidad de combinar contenedores de tamaños y de
          estilos
        </aside>
      </section>
      <section>
        <p class="title-slide">Ejemplos de contenedores</p>
        https://codepen.io/ivan_albizu/pen/YzQWxKN<br>
        https://codepen.io/ivan_albizu/pen/ExLLPvm<br>
        https://codepen.io/ivan_albizu/pen/NWXVbyG<br>
        https://ishadeed.com/article/container-queries-are-finally-here/<br>
        https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries<br>
        https://ishoudinireadyyet.com/<br>
      </section>
      <section>
        <p class="title-slide">End</p>
        <figure>
          <img onmouseenter="this.src='/assets/containers/giphy-container.gif'"
            onmouseleave="this.src='/assets/containers/giphy-container.png'" width="300"
            src="/assets/containers/giphy-container.png" alt="" />
        </figure>
        <p>Un gran poder conlleva una gran responsabilidad</p>
      </section>
    </section>
  </div>
</div>
