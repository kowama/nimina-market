<template>
    <section id="postProduct" class="container-fluid">
        <div class="container">
            <h2>Post a Product for Sale </h2>
            <hr>
            <form class="card col-md-10 mb-4 py-2">
                <div class="form-group">
                    <label for="inputTitle">Title</label>
                    <input type="text" class="form-control" id="inputTitle" required placeholder="Put product title">
                </div>
                <div class="form-group">
                    <label for="inputDescription">Description</label>
                    <textarea type="text" class="form-control" id="inputDescription" placeholder="Product Description here">
                    </textarea>
                </div>
                <div class="form-row">
                    <div class="form-group col-sm-12">
                        <label for="inputCategory">Category</label>
                        <select name="" id="inputCategory" class="custom-select my-1 mr-sm-2">
                            <option selected>Choose...</option>
                            <option value="book ">book</option>
                            <option value="computer ">computer</option>
                            <option value="home ">home</option>

                        </select>
                    </div>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Price</span>
                    </div>
                    <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" step="0.001" min="0">
                    <div class="input-group-append">
                        <span class="input-group-text">$</span>
                    </div>
                </div>
                <div class="form-group my-2">
                    <label for="inputFile">upload a image</label>
                    <input type="file" class="form-control-file" id="inputFile">
                </div>
                <div class="form-group ">

                </div>
                <button type="submit " class="btn btn-success btn-block btn-lg ">Post Your Product</button>
            </form>

        </div>
    </section>
</template>

<script>
export default {
  
}
</script>