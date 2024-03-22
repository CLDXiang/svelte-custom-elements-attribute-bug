<script>
  let x = false;

  function toggle() {
    x = !x;
  }
</script>

<div class="page" on:click={toggle}>
  <my-component a-boolean={x} />
</div>

<style>
  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
