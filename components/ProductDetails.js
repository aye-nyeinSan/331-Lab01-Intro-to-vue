 const productDetails = {
  template: `
  <h1> Details</h1>
  <ul>
  <li v-for="detail in details">{{detail}}</li>
  </ul>
  `,
  props: {
   details: Array
  },
};
