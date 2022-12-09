export const fetchData = async () => {
  try {
    let token = localStorage.getItem("token");

    if (token != null) {
      const res = await fetch("http://localhost:5000/api/v1/data", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const results = await res.json();

      localStorage.setItem("data", JSON.stringify(results.payload));
      return results.payload;
    }
    throw new Error("You are not authorized");
  } catch (error) {
    throw new Error(error.message);
  }
};
