import axios from "axios";

import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_FORGOT_PASSWORD_FAIL,
  USER_FORGOT_PASSWORD_REQUEST,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_RESET_PASSWORD_FAIL,
  USER_RESET_PASSWORD_REQUEST,
  USER_RESET_PASSWORD_SUCCESS,
  USER_SEND_FEEDBACK_FAIL,
  USER_SEND_FEEDBACK_REQUEST,
  USER_SEND_FEEDBACK_SUCCESS,
} from "../Constant/UserConstant";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      `http://localhost:3443/api/users/login`,
      {
        email,
        password,
      },
      config
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const register =
  (email, fullName, password, passwordConfirm) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        `http://localhost:3443/api/users/register`,
        {
          email,
          fullName,
          password,
          passwordConfirm,
        },
        config
      );
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error?.response?.data?.message,
      });
    }
  };

export const logout = () => async (dispatch) => {
  localStorage.removeItem("USER");
  dispatch({ type: USER_LOGOUT });
  window.location.href = "/";
};

export const getUserList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });
    const {
      userLogin: { user },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
        "Content-Type": "application/json",
      },
    };
    const res = await axios.get(`http://localhost:3443/api/users`, config);
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const updateUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
    });
    const {
      userLogin: { user },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
    };
    const res = await axios.put(
      `http://localhost:3443/api/users/${id}`,
      {
        //
      },
      config
    );
    dispatch({
      type: USER_UPDATE_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST,
    });
    const {
      userLogin: { user },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
    };
    const res = await axios.delete(
      `http://localhost:3443/api/users/${id}`,
      config
    );
    dispatch({
      type: USER_DELETE_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({
      type: USER_FORGOT_PASSWORD_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      `http://localhost:3443/api/users/reset-password`,
      {
        email,
      },
      config
    );
    dispatch({
      type: USER_FORGOT_PASSWORD_SUCCESS,
      payload: res.data.message,
    });
  } catch (error) {
    dispatch({
      type: USER_FORGOT_PASSWORD_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const resetPassword =
  (email, resetToken, password, passwordConfirm) => async (dispatch) => {
    try {
      dispatch({
        type: USER_RESET_PASSWORD_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.patch(
        `http://localhost:3443/api/users/reset-password`,
        {
          email,
          resetToken,
          password,
          passwordConfirm,
        },
        config
      );
      console.log(res);
      dispatch({
        type: USER_RESET_PASSWORD_SUCCESS,
        payload: "Thiết lập mật khẩu thành công",
      });
    } catch (error) {
      dispatch({
        type: USER_RESET_PASSWORD_FAIL,
        payload: error?.response?.data?.message,
      });
    }
  };

export const sendFeedback =
  (email, fullName, phone, message) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_SEND_FEEDBACK_REQUEST,
      });
      const {
        userLogin: { user },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        `http://localhost:3443/api/users/feedback`,
        {
          email,
          fullName,
          phone,
          message,
        },
        config
      );
      dispatch({
        type: USER_SEND_FEEDBACK_SUCCESS,
        payload: res.data.message,
      });
    } catch (error) {
      dispatch({
        type: USER_SEND_FEEDBACK_FAIL,
        payload: error?.response?.data?.message,
      });
    }
  };
