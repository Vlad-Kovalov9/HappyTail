import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, logout } from "../redux/store/userSlice";

export const useAutoRefreshToken = () => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!user || !token) return;

    const interval = setInterval(async () => {
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) {
          dispatch(logout());
          return;
        }

        const res = await fetch("http://localhost:5000/api/refresh", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refreshToken }),
        });

        if (!res.ok) throw new Error("Refresh failed");

        const data = await res.json();
        dispatch(setUser({ user, token: data.accessToken }));
        localStorage.setItem("token", data.accessToken);
      } catch (error) {
        dispatch(logout());
        console.log(error);
      }
    }, 13 * 60 * 1000);

    return () => clearInterval(interval);
  }, [dispatch, token, user]);
};
