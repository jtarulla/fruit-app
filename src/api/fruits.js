import client from '@/api/client';

export default {
  getAllfruits() {
    return client.get();
  },
  getFruit(id) {
    return client.get(`/${id}`);
  },
  addFruit(fruit) {
    return client.post('', {...fruit});
  },
  deleteFruit(id) {
    return client.delete(`/${id}`);
  }
}
