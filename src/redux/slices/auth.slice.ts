/* eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style */
/* eslint-disable  @typescript-eslint/no-non-null-assertion */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthService } from "services";
import { formatErrorResponse } from "utils";

import { toast } from "react-toastify";

import { TESCOM_USER_DATA } from "services/CONSTANTS";

const user = JSON.parse(localStorage.getItem(TESCOM_USER_DATA) as string);

export const signup = createAsyncThunk(
  "auth/signup",
  async (
    {
      ogNumber,
      password,
      phoneNumber
    }: {
      ogNumber: string;
      password: string;
      phoneNumber: string;
    },
    thunkAPI
  ) => {
    try {
      const { MESSAGE, DATA } = await AuthService.register({
        ogNumber,
        password,
        phoneNumber
      });
      toast.success(MESSAGE);
      return { userId: DATA.id, phoneNumber: DATA.phoneNumber, ogNumber: DATA.ogNumber };
    } catch (error) {
      const message = formatErrorResponse(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// export const confirmAccount = createAsyncThunk(
//     "auth/local/account-activation",
//     async({code, ogNumber}:{code:string; ogNumber: string}, thunkAPI) =>{
//         try {
//             const {MESSAGE, DATA} = await AuthService.confirmAccount(code, ogNumber);
//              toast.success(MESSAGE)
//             return { userId: DATA.id, ogNumber: DATA.ogNumber };
//         } catch (error) {
//             const message = formatErrorResponse (error)
//             toast.error (message)
//             return thunkAPI.rejectWithValue(message)
//         }
//     })

export const login = createAsyncThunk(
  "auth/login",
  async ({ ogNumber, password }: { ogNumber: string; password: string }, thunkAPI) => {
    try {
      const { DATA } = await AuthService.signin({ ogNumber, password });
      return { userId: DATA.id, ogNumber: DATA.ogNumber, firstName: DATA.firstName };
    } catch (error) {
      const message = formatErrorResponse(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const loginSuccess = createAsyncThunk("auth/loginSuccess", async (_, thunkAPI) => {
  try {
    const { DATA } = await AuthService.loginSuccess();
    return { user: DATA };
  } catch (error) {
    const message = formatErrorResponse(error);
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});

export const confirmAccount = createAsyncThunk(
  "auth/local/account-activation",
  async ({ code, ogNumber }: { code: string; ogNumber: string }, thunkAPI) => {
    try {
      const { MESSAGE, DATA } = await AuthService.confirmAccount(code, ogNumber);
      toast.success(MESSAGE);
      return { userId: DATA.id, ogNumber: DATA.ogNumber, firstName: DATA.firstName };
    } catch (error) {
      const message = formatErrorResponse(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async ({ ogNumber }: { ogNumber: string }, thunkAPI) => {
    try {
      const { DATA, MESSAGE } = await AuthService.forgotPassword(ogNumber);
      toast.success(MESSAGE);
      return { userId: DATA.id, ogNumber: DATA.ogNumber };
    } catch (error) {
      const message = formatErrorResponse(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (
    { password, token, ogNumber }: { password: string; token: string; ogNumber: string },
    thunkAPI
  ) => {
    try {
      const { DATA, MESSAGE } = await AuthService.resetPassword(password, token, ogNumber);
      toast.success(MESSAGE);
      return { userId: DATA.id, ogNumber: DATA.ogNumber };
    } catch (error) {
      const message = formatErrorResponse(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Change Password slice
export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (
    {
      currentPassword,
      newPassord,
      confirmNewPassword
    }: { currentPassword: string; newPassord: string; confirmNewPassword: string },
    thunkAPI
  ) => {
    try {
      const { DATA, MESSAGE } = await AuthService.changePassword(
        currentPassword,
        newPassord,
        confirmNewPassword
      );
      toast.success(MESSAGE);
      return { userId: DATA.id, email: DATA.email };
    } catch (error) {
      const message = formatErrorResponse(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await AuthService.logout();
  } catch (error) {
    const message = formatErrorResponse(error);
    toast.error(message);
  }
});

const initialState = user
  ? { isLoggedIn: true, user, isLoading: false, passwordReset: false, isVerifying: false }
  : { isLoggedIn: false, user: null, isLoading: false, passwordReset: false, isVerifying: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // signup actions
    builder.addCase(signup.pending, (state) => {
      state.isLoading = true;
      state.isVerifying = true;
    });
    builder.addCase(signup.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    });
    builder.addCase(signup.rejected, (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    });

    // confirm account actions
    builder.addCase(confirmAccount.pending, (state) => {
      state.isLoggedIn = false;
      state.isLoading = true;
      state.isVerifying = true;
    });
    builder.addCase(confirmAccount.fulfilled, (state) => {
      state.isVerifying = false;
      state.isLoggedIn = false;
      state.isLoading = false;
    });
    builder.addCase(confirmAccount.rejected, (state) => {
      state.isLoggedIn = false;
      state.isVerifying = true;
      state.isLoading = false;
    });

    // login actions
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.isLoading = false;
    });
    // login success actions
    builder.addCase(loginSuccess.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginSuccess.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.isLoading = false;
    });
    builder.addCase(loginSuccess.rejected, (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.isLoading = false;
    });

    // forgot password actions
    builder.addCase(forgotPassword.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.passwordReset = true;
      state.user = action.payload;
    });
    builder.addCase(forgotPassword.rejected, (state) => {
      state.isLoading = false;
    });

    // reset password actions
    builder.addCase(resetPassword.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(resetPassword.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(resetPassword.rejected, (state) => {
      state.isLoading = false;
    });
    // logout
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.isLoading = false;
    });
    builder.addCase(logout.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

const { reducer } = authSlice;

export default reducer;

// Module not found: Error: Package path ./slices/auth.slice is not exported from package C:\Users\TEEWHY\Desktop\GITHUB REPOS\tescom_digitalization_fe\node_modules\redux (see exports field in C:\Users\TEEWHY\Desktop\GITHUB REPOS\tescom_digitalization_fe\node_modules\redux\package.json)
// ERROR in ./src/components/widgets/pinInput/pinInputContainer.tsx 5:0-57
// Module not found: Error: Package path ./slices/auth.slice is not exported from package C:\Users\TEEWHY\Desktop\GITHUB REPOS\tescom_digitalization_fe\node_modules\redux (see exports field in C:\Users\TEEWHY\Desktop\GITHUB REPOS\tescom_digitalization_fe\node_modules\redux\package.json)

// ERROR in ./src/pages/Signup/SignupContainer.tsx 10:0-49
// Module not found: Error: Package path ./slices/auth.slice is not exported from package C:\Users\TEEWHY\Desktop\GITHUB REPOS\tescom_digitalization_fe\node_modules\redux (see exports field in C:\Users\TEEWHY\Desktop\GITHUB REPOS\tescom_digitalization_fe\node_modules\redux\package.json)

// ERROR in ./src/redux/store.ts 4:0-35
// Module not found: Error: Package path ./slices is not exported from package C:\Users\TEEWHY\Desktop\GITHUB REPOS\tescom_digitalization_fe\node_modules\redux (see exports field in C:\Users\TEEWHY\Desktop\GITHUB REPOS\tescom_digitalization_fe\node_modules\redux\package.json)
