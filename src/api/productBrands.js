class ProductBrands {
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/product_brands', filter);
  }

  retrieve(id) {
    return this.client.get(`/product_brands/${id}`);
  }

  create(data) {
    return this.client.post(`/product_brands`, data);
  }

  update(id, data) {
    return this.client.put(`/product_brands/${id}`, data);
  }

  delete(id) {
    return this.client.delete(`/product_brands/${id}`);
  }

  uploadImage(brandId, formData) {
    return this.client.postFormData(`/product_brands/${brandId}/image`, formData);
  }

  deleteImage(id) {
    return this.client.delete(`/product_brands/${id}/image`);
  }
}

module.exports = ProductBrands
