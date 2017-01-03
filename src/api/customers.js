class Customers {
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/customers', filter);
  }

  retrieve(id, filter) {
    return this.client.get(`/customers/${id}`, filter);
  }

  create(data) {
    return this.client.post(`/customers`, data);
  }

  update(id, data) {
    return this.client.put(`/customers/${id}`, data);
  }

  delete(id) {
    return this.client.delete(`/customers/${id}`);
  }

  createAddress(customer_id, address) {
    return this.client.post(`/customers/${customer_id}`, data);
  }

  updateAddress(customer_id, address_id, address) {
    return this.client.put(`/customers/${customer_id}/addresses/${address_id}`, data);
  }

  deleteImage(customer_id, address_id) {
    return this.client.delete(`/customers/${customer_id}/addresses/${address_id}`);
  }

  setDefaultBillingAddress(customer_id, address_id) {
    return this.client.post(`/customers/${customer_id}/addresses/${address_id}/default_billing`);
  }
  setDefaultShippingAddress(customer_id, address_id) {
    return this.client.post(`/customers/${customer_id}/addresses/${address_id}/default_shipping`);
  }
}

module.exports = Customers