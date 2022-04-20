import React from "react";
import SelectInput from "../toolbox/SelcetInput";
import TextInput from "../toolbox/TextInput";

const ProductsDetail = ({ categories, product, onSave, onChange }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "güncelle" : "ekle"}</h2>
      <TextInput
        name="Product Name"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        error="hata"
      />

      <SelectInput
        name="categoryId"
        label="Category Name"
        value={product.categoryId || ""}
        defaultOption="Select"
        options={categories.map((category) => ({
          value: category.id,
          text: category.categoryName,
        }))}
        onChange={onchange}
        error="hata"
      ></SelectInput>

      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  );
};
export default ProductsDetail;
