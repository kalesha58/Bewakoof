import {
  ALL_ORDERS_FAIL,
  ALL_ORDERS_REQUEST,
  ALL_ORDERS_SUCCESS,
  CLEAR_ERRORS,
} from "../Constants/orderConstant";
import axios from "axios"
// Get All Orders (admin)
export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_ORDERS_REQUEST });

    const { data } = await axios.get(
      " http://localhost:5000/api/v1/orders/admin/orders",
      {
        withCredentials: true, // add this property
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: ALL_ORDERS_SUCCESS, payload: data.orders });
  } catch (error) {
    dispatch({
      type: ALL_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//=================================== CLEAR ERRORS=================
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS});
};
