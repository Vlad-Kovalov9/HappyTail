import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, logout } from "../redux/store/userSlice";

export const useAutoRefreshToken = () => {
  const dispatch = useDispatch();
  const { user, refreshToken } = useSelector((state) => state.user);

  useEffect(() => {
    if (!refreshToken) return;

    const refreshAccessToken = async () => {
      try {
        const res = await fetch(
          "https://happy-tail-backend.vercel.app/api/refresh",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refreshToken }),
          }
        );

        if (!res.ok) {
          if (res.status === 401 || res.status === 403) {
            dispatch(logout());
            return;
          }
          throw new Error("Refresh failed");
        }

        const data = await res.json();

        dispatch(
          setUser({
            user: user || data.user || null,
            token: data.accessToken,
            refreshToken: data.refreshToken || refreshToken,
          })
        );
      } catch (err) {
        console.error("Refresh token error:", err);
        dispatch(logout());
      }
    };

    refreshAccessToken();

    const interval = setInterval(refreshAccessToken, 14 * 60 * 1000);

    return () => clearInterval(interval);
  }, [dispatch, refreshToken, user]);
};
