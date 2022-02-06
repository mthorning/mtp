<script context="module" lang="ts">
  export async function load({ params, fetch, session, stuff }) {
    const res = await fetch('images');

    const data = await res.json();
    if (!res.ok) {
      return {
        status: res.status,
        error: new Error(res.statusText)
      };
    }

    return {
      props: {
        images: data
      }
    };
  }
</script>

<script>
  export let images;
  $: console.log(images);
</script>

<p>hello</p>
