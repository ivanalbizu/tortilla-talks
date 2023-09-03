---
layout: ../../layouts/SlidePost.astro
title: 'CSS @layers'
description: 'Control del flujo de la cascada CSS'
pubDate: 'Aug 23 2023'
---

<div class="reveal">
  <div class="slides">
    <section>
      <p class="title-slide">@layer</p>
      <ul>
        <li>Definición</li>
        <li>Estado actual</li>
        <li>¿Para que sirven?</li>
        <li>Importación / nested / non-layered</li>
      </ul>
    </section>
    <section>
      <p class="title-slide">@layer definición</p>
      <pre>
        <code data-trim data-line-numbers>
          @layer theme {rules};
          @layer theme;
          @layer theme, layout, utilities;
          @layer {rules}
        </code>
      </pre>
      <aside class="notes">
        <ol>
          <li>Crea una capa con nombre y estilos</li>
          <li>Crea una capa con nombre</li>
          <li>
            Crea varias capas con nombre con el orden en que sean
            nombradas
          </li>
          <li>
            Crea capa anónima sin nombre. No podremos hacer referencia a
            ella para añadir más estilos o reordenarla
          </li>
        </ol>
      </aside>
    </section>
    <section>
      <p class="title-slide">Estado actual @layer: Caniuse</p>
      <figure>
        <img src="/assets/layers/caniuse-layer.png" alt="" />
        <figcaption>
          <a href="https://caniuse.com/css-cascade-layers" target="_blank">Caniuse @layer</a>
        </figcaption>
      </figure>
    </section>
    <section>
      <p class="title-slide">Capas @layer</p>
      <ul>
        <li>Más control sobre como se aplica la cascada</li>
        <li>Evitar selectores complejos</li>
        <li>Evitar técnicas <code>!important</code></li>
      </ul>
      <aside class="notes">
        <ol>
          <li>Permite más control sobre como se aplica la cascada</li>
          <li>
            Evitar selectores complejos para asegurarnos colisiones por
            especificidad
          </li>
          <li>
            Evitar uso de !important sobre todo en clases de utilidad.
            Ojo, esta maldita palabra sigue prevaleciendo, pero no sería
            necesaria si usamos la definición de cascada en el orden
            deseado. Se suele usar mucho en clases tipo 'utilities', podría declararse al final
          </li>
        </ol>
      </aside>
    </section>
    <section>
      <p class="title-slide">@layer: Orden de la cascada</p>
      <ol>
        <li>Browser styles</li>
        <li>User Styles</li>
        <li>
          Author Styles
          <ol>
            <li>@layer theme</li>
            <li>@layer layout</li>
            <li>@layer utilities</li>
            <li>Non-Layered Styles</li>
          </ol>
        </li>
      </ol>
      <form action="https://codepen.io/pen/define" method="POST" target="_blank">
        <input id="data-especificidad-input" type="hidden" name="data" value="" />
        <input class="input-icon-codepen" type="image" src="/assets/icon-codepen.svg" />
      </form>
    </section>
    <section>
      <p class="title-slide">@layer importación</p>
      <pre>
        <code data-trim data-line-numbers>
          @charset "UTF-8";
          @layer reset;
          @import url("bootstrap.css");
          @import url("bootstrap.css") layer(framework);
        </code>
      </pre>
      <aside class="notes">
        TODO Pensar si mover esta dispositiva en la diapositiva: @layer definición
        <p>Se puede importar estilos y al mismo tiempo asignarlo a una capa</p>
        <p>Cuando se importan estilos, dicha importación debe ser la primera linea de la hoja a excepción de nombrado de layer
          o el charset de caracteres</p>
      </aside>
    </section>
    <section>
      <p class="title-slide">@layer nested</p>
      <pre>
        <code data-trim data-trim data-line-numbers="1-7|7-14">
          @layer outer {
            @layer inner {
              .button {
                color: red;
              }
            }
          }
          @layer outer.inner {
            .another {
              color: green;
            }
          }
        </code>
      </pre>
      <aside class="notes">
        <ol>
          <li>Se puede incluir @layer dentro de otras</li>
          <li>El nesteo se puede hacer con la notación de punto</li>
        </ol>
      </aside>
    </section>
    <section>
      <p class="title-slide">@layer non-layered</p>
      <pre>
        <code data-trim data-line-numbers>
          @layer base {
            #button.super-specific {
              color: red;
            }
          }
          button {
            color: green;
          }
        </code>
      </pre>
      <aside class="notes">
        <ol>
          <li>Los estilos fuera de capas serán agrupados como capa anónimas al final del resto de capas</li>
          <li>Los estilos sin capa prevalecen sobre el resto, independientemente de su especificidad</li>
        </ol>
      </aside>
    </section>
    <section>
      <p class="title-slide">Recursos interesantes</p>
      <a href="https://css-tricks.com/css-cascade-layers/" target="_blank">CSS tricks</a>
      <br>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@layer">MDN @layer</a>
    </section>
  </div>
</div>