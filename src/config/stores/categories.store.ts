import { defineStore } from 'pinia'

export const categoriesStore = defineStore({
  id: 'categories',
  state: () => ({
    categories: [] as any[],
    filter: 'All',
    categories_name: [] as any[],
  }),
  getters: {
    filtered(state) {
      return state.filter == 'All'
        ? state.categories.sort(() => 0.5 - Math.random())
        : state.categories
            .filter((el: any) => el.category == state.filter)
            .sort(() => 0.5 - Math.random())
    },
  },
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    construct() {
      this.categories = [
        {
          id: 1,
          product: '/img/illustrations/for girls/girls-2-2-580x870.jpg',
          name: 'Blue Blouse',
          price: '22.00',
          cantStock: 5,
          stock: false,
          category: 'For Girls',
          tags: 'Blouse, Girls',
          description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla parturient, etiam sollicitudin elementum dis suspendisse torquent netus ut. Maecenas phasellus justo condimentum eros non diam ullamcorper vitae sociosqu turpis, gravida rhoncus aenean et iaculis cum ac dapibus tempor in.',
          infoAdd: '',
          rating: 4,
          sku: '001',
          pictures: [
            {
              picture: '/img/illustrations/for girls/girls-2-2-580x870.jpg',
            },
            {
              picture: '/img/illustrations/for girls/girls-2-3-580x870.jpg',
            },
          ],
        },
        {
          id: 2,
          product: '/img/illustrations/main/for-home-5-580x870.jpg',
          category: 'For Home',
          cantStock: 5,
          name: 'Brown Rainy Bag',
          price: '15.00',
          stock: false,
          tags: 'Rainy Bag, Brown',
          description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla parturient, etiam sollicitudin elementum dis suspendisse torquent netus ut. Maecenas phasellus justo condimentum eros non diam ullamcorper vitae sociosqu turpis, gravida rhoncus aenean et iaculis cum ac dapibus tempor in.',
          infoAdd: '',
          rating: 4,
          sku: '002',
          pictures: [
            {
              picture: '/img/illustrations/main/for-home-5-580x870.jpg',
            },
            {
              picture: '/img/illustrations/main/for-home-5-1-580x870.jpg',
            },
          ],
        },
        {
          id: 3,
          product: '/img/illustrations/main/for-home-2-580x870.jpg',
          category: 'For Home',
          cantStock: 0,
          name: 'Rabbit Bag',
          price: '22.00',
          stock: true,
          tags: 'Blouse, Girls',
          description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla parturient, etiam sollicitudin elementum dis suspendisse torquent netus ut. Maecenas phasellus justo condimentum eros non diam ullamcorper vitae sociosqu turpis, gravida rhoncus aenean et iaculis cum ac dapibus tempor in.',
          infoAdd: '',
          rating: 4,
          sku: '003',
          pictures: [
            {
              picture: '/img/illustrations/main/for-home-2-580x870.jpg',
            },
            {
              picture: '/img/illustrations/main/for-home-2-2-580x870.jpg',
            },
          ],
        },
        {
          id: 4,
          product: '/img/illustrations/main/girls-9-1-580x870.jpg',
          category: 'For Girls',
          cantStock: 6,
          name: 'White Blouse',
          price: '17.00',
          stock: false,
          tags: 'Blouse, Girls',
          description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla parturient, etiam sollicitudin elementum dis suspendisse torquent netus ut. Maecenas phasellus justo condimentum eros non diam ullamcorper vitae sociosqu turpis, gravida rhoncus aenean et iaculis cum ac dapibus tempor in.',
          infoAdd: '',
          rating: 4,
          sku: '004',
          pictures: [
            {
              picture: '/img/illustrations/main/girls-9-1-580x870.jpg',
            },
            {
              picture: '/img/illustrations/main/girls-9-2-580x870.jpg',
            },
          ],
        },
        {
          id: 5,
          product: '/img/illustrations/main/for-home-1-580x870.jpg',
          category: 'For Home',
          name: 'Rainbow Pillow',
          cantStock: 0,
          price: '22.00',
          stock: true,
          tags: 'Blouse, Girls',
          description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla parturient, etiam sollicitudin elementum dis suspendisse torquent netus ut. Maecenas phasellus justo condimentum eros non diam ullamcorper vitae sociosqu turpis, gravida rhoncus aenean et iaculis cum ac dapibus tempor in.',
          infoAdd: '',
          rating: 4,
          sku: '005',
          pictures: [
            {
              picture: '/img/illustrations/main/for-home-1-580x870.jpg',
            },
            {
              picture: '/img/illustrations/main/for-home-1-1-580x870.jpg',
            },
          ],
        },
        {
          id: 6,
          product: '/img/illustrations/main/girls-6-1-580x870.jpg',
          category: 'For Girls',
          cantStock: 2,
          name: 'Pink Dress',
          price: '18.00',
          stock: false,
          tags: 'Blouse, Girls',
          description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla parturient, etiam sollicitudin elementum dis suspendisse torquent netus ut. Maecenas phasellus justo condimentum eros non diam ullamcorper vitae sociosqu turpis, gravida rhoncus aenean et iaculis cum ac dapibus tempor in.',
          infoAdd: '',
          rating: 4,
          sku: '006',
          pictures: [
            {
              picture: '/img/illustrations/main/girls-6-1-580x870.jpg',
            },
            {
              picture: '/img/illustrations/main/girls-6-2-580x870.jpg',
            },
          ],
        },
        {
          id: 7,
          product: '/img/illustrations/main/boys-8-1-580x870.jpg',
          category: 'For Boys',
          cantStock: 5,
          name: 'Pattern Shirt',
          price: '28.00',
          stock: false,
          tags: 'Blouse, Girls',
          description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla parturient, etiam sollicitudin elementum dis suspendisse torquent netus ut. Maecenas phasellus justo condimentum eros non diam ullamcorper vitae sociosqu turpis, gravida rhoncus aenean et iaculis cum ac dapibus tempor in.',
          infoAdd: '',
          rating: 4,
          sku: '007',
          pictures: [
            {
              picture: '/img/illustrations/main/boys-8-1-580x870.jpg',
            },
            {
              picture: '/img/illustrations/main/boys-8-580x870.jpg',
            },
          ],
        },
        {
          id: 8,
          product: '/img/illustrations/main/boys-9-1-580x870.jpg',
          category: 'For Boys',
          cantStock: 4,
          name: 'Short With Suspenders',
          price: '40.00',
          stock: false,
          tags: 'Blouse, Girls',
          description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla parturient, etiam sollicitudin elementum dis suspendisse torquent netus ut. Maecenas phasellus justo condimentum eros non diam ullamcorper vitae sociosqu turpis, gravida rhoncus aenean et iaculis cum ac dapibus tempor in.',
          infoAdd: '',
          rating: 4,
          sku: '008',
          pictures: [
            {
              picture: '/img/illustrations/main/boys-9-1-580x870.jpg',
            },
            {
              picture: '/img/illustrations/main/boys-9-580x870.jpg',
            },
          ],
        },
        {
          id: 9,
          product: '/img/illustrations/main/girls-3-1-580x870.jpg',
          category: 'For Girls',
          cantStock: 0,
          name: 'Denim Jacket',
          price: '22.00',
          stock: true,
          tags: 'Blouse, Girls',
          description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla parturient, etiam sollicitudin elementum dis suspendisse torquent netus ut. Maecenas phasellus justo condimentum eros non diam ullamcorper vitae sociosqu turpis, gravida rhoncus aenean et iaculis cum ac dapibus tempor in.',
          infoAdd: '',
          rating: 4,
          sku: '009',
          pictures: [
            {
              picture: '/img/illustrations/main/girls-3-1-580x870.jpg',
            },
            {
              picture: '/img/illustrations/main/girls-3-2-580x870.jpg',
            },
          ],
        },
      ]
      this.categories_name = [
        {
          category: 'All',
        },
        {
          category: 'For Babies',
        },
        {
          category: 'For Boys',
        },
        {
          category: 'For Girls',
        },
        {
          category: 'For Home',
        },
        {
          category: 'For Play',
        },
      ]
    },
    find(id) {
      return this.categories.find((el) => el.id == id)
    },
    length(filter) {
      return 'All' == filter
        ? this.categories.length
        : this.categories.filter((el: any) => el.category == filter).length
    },
  },
})
