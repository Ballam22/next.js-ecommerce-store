// app/util/cookies.js

/**
 * Reads a specific cookie from the browser.
 * @param {string} name - The name of the cookie.
 * @returns {string | undefined} The cookie value if found, otherwise undefined.
 */
export function getCookie(name) {
  // Access cookies via document.cookie for client-side code
  const cookieString = document.cookie;
  const cookiesArray = cookieString.split('; ');
  const cookie = cookiesArray.find((row) => row.startsWith(`${name}=`));
  if (!cookie) {
    return undefined;
  }
  return cookie.split('=')[1];
}

/**
 * Calculates the total count of items in the cart.
 * Assumes the 'cart' cookie is a JSON string representing an object
 * where each key is a product id with a "quantity" property.
 * @returns {number} The sum of all product quantities in the cart.
 */
export function getCartCount() {
  const cartValue = getCookie('cart');
  if (!cartValue) return 0;

  try {
    // Decode and parse the cart cookie, then sum the quantities.
    const cart = JSON.parse(decodeURIComponent(cartValue));
    return Object.values(cart).reduce(
      (sum, item) => sum + Number(item.quantity || 0),
      0,
    );
  } catch (error) {
    console.error('Error parsing cart cookie:', error);
    return 0;
  }
}

/**
 * Updates the cart by adding the specified quantity to the given product.
 * @param {string} productId - The ID of the product.
 * @param {number} quantityToAdd - The quantity to add.
 */
export function updateCart(productId, quantityToAdd) {
  // Retrieve the current cart cookie
  const cookieString = document.cookie
    .split('; ')
    .find((row) => row.startsWith('cart='));
  let cart = {};
  if (cookieString) {
    try {
      cart = JSON.parse(decodeURIComponent(cookieString.split('=')[1]));
    } catch (error) {
      console.error('Error parsing cart cookie:', error);
    }
  }

  // Update the product quantity
  if (!cart[productId]) {
    cart[productId] = { quantity: 0 };
  }
  cart[productId].quantity += quantityToAdd;

  // Update the cookie (make sure path is set to '/')
  const encodedCart = encodeURIComponent(JSON.stringify(cart));
  document.cookie = `cart=${encodedCart}; path=/;`;

  // Dispatch a custom event to notify that the cart has been updated
  window.dispatchEvent(new Event('cartUpdated'));
}
