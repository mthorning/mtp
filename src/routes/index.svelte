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

    console.log(data);
    return {
      props: {
        images: data.Contents
      }
    };
  }
</script>

<script>
  export let images;
  $: console.log(images);
</script>

{#each images as image}
  <img src={`http://s3.us-east-1.amazonaws.com/mattthorningphotography.com/${encodeURIComponent(image.Key)}`}/>
{/each}
