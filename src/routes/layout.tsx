import { component$, Slot } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <main>
        <section class="todoapp">
          <Slot />
        </section>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  links: [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/todomvc-app-css@2.3.0/index.css",
    },
  ],
};
