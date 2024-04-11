const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
        './html/AddressForm.html': path.resolve(__dirname, 'template/js/custom-js/components/AddressForm.html'),
        './html/AddressForm.js': path.resolve(__dirname, 'template/js/custom-js/components/AddressForm.js'),
        './html/EcCheckout.html': path.resolve(__dirname, 'template/js/custom-js/components/EcCheckout.html'),
        './js/EcCheckout.js': path.resolve(__dirname, 'template/js/custom-js/components/EcCheckout.js'),
    }
  }
})