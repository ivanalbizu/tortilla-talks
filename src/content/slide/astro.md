---
title: 'Astro Intro'
description: 'Introducción a Astro | Visión general'
pubDate: 'Sep 15 2023'
---

<style>
.tree-nav {
  text-align: left;
}
summary {
  cursor: pointer;
  margin-left: 2rem;
}
details {
  margin-left: 2rem;
  font-size: 1.5rem;
  line-height: 3.2rem;
}
details > div {
  margin-left: 4rem;
}
</style>
<div class="reveal">
  <div class="slides">
    <section>
      <p class="title-slide">Astro</p>
      <ul>
        <li>File based routing</li>
        <li>components / layout / pages</li>
        <li>script / layout / style (scope by default)</li>
      </ul>
    </section>
    <section>
      <p class="title-slide">Astro scaffolding I</p>
      <nav class="tree-nav">
        <details open>
          <summary>public</summary>
          <div>
            <div>assets</div>
            <div>folders</div>
          </div>
        </details>
        <details open>
          <summary>src</summary>
          <details open>
            <summary>components</summary>
            <div>
              <div>Header.astro</div>
              <div>Button.vue</div>
            </div>
          </details>
          <details open>
            <summary>layouts</summary>
            <div>
              <div>Layout.astro</div>
              <div>BlogLayout.astro</div>
            </div>
          </details>
          <details open>
            <summary>pages</summary>
            <div>
              <div>index.astro</div>
              <div>about.astro</div>
            </div>
          </details>
        </details>
      </nav>
    </section>
    <section>
      <p class="title-slide">Astro scaffolding II</p>
      <nav class="tree-nav">
        <details open>
          <summary>public</summary>
          <div>
            <div>assets</div>
            <div>folders</div>
          </div>
        </details>
        <details open>
          <summary>src</summary>
          <details>
            <summary>components</summary>
            <div>
              <div>Header.astro</div>
              <div>Button.vue</div>
            </div>
          </details>
          <details>
            <summary>layouts</summary>
            <div>
              <div>Layout.astro</div>
              <div>BlogLayout.astro</div>
            </div>
          </details>
          <details>
            <summary>pages</summary>
            <div>
              <div>index.astro</div>
              <div>about.astro</div>
            </div>
          </details>
          <details>
            <summary>content</summary>
            <div>
              <div>config.ts</div>
            </div>
            <details>
              <summary>blog</summary>
              <div>
                <div>entry-one.md</div>
                <div>entry-two.mdx</div>
              </div>
            </details>
          </details>
        </details>
      </nav>
    </section>
    <section>
      <p class="title-slide">Astro Transitions - inicialización</p>
      <pre>
        <code data-trim data-line-numbers="2,7">
          ---
          import { ViewTransitions } from 'astro:transitions';
          ---
          &lt;html lang="en"&gt;
            &lt;head&gt;
              <title>Title pages</title>
              <ViewTransitions />
            &lt;/head&gt;
            &lt;body&gt;
              <h1>Welcome to my website!</h1>
            &lt;/body&gt;
          &lt;/html&gt;
        </code>
      </pre>
    </section>
    <section>
      <p class="title-slide">Astro Transitions - directivas</p>
      <pre>
        <code data-trim>
          <div transition:name="unique name in a page"></div>
          <div transition:animate="fade (default) | initial | slide | none"></div>
          <div transition:persist></div>
        </code>
      </pre>
    </section>
    <section>
      <p class="title-slide">Astro Transitions</p>
      <ul>
        <li>view-transition - SPA mode</li>
        <li>node v18.14.1 or later</li>
        <li>https://astro.build/blog/astro-3/</li>
        <li>https://docs.astro.build/en/guides/view-transitions/#customizing-animations</li>
        <li>https://developer.chrome.com/docs/web-platform/view-transitions/</li>
        <ul>
          <li>Ejemplos:</li>
          <li>https://astro-records.pages.dev/</li>
          <li>https://tympanus.net/codrops/2023/10/03/animating-multi-page-navigations-with-browser-view-transitions-and-astro</li>
        </ul>
        <li>transition:name={`${product.slug} price`}</li>
        <li></li>
      </ul>
    </section>
  </div>
</div>
