function getProduct(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/legobitna/hnm-react-router/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

export const productAction = { getProduct };
