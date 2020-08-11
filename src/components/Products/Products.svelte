<script>
    export var title = "";
    import products from '../../stores/defaultProducts';
    import Product from './Product.svelte'; 
    import Loading from '../Loading.svelte';   
    // var unsubscribe;
   /* onMount (() => {
        unsubscribe = products.subscribe (value => {
            console.log("Subscribed");
            
            localProducts = value;
        });
    });
    onDestroy (() => {
        unsubscribe();
    }); */
</script>
<section class="section">
<h2 class="section-title">{title}</h2>
<div class="products-center">
{#each $products as product (product.id)}
<Product {product} />
{:else}
<Loading />
{/each}
</div>
</section>