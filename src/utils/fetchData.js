export const fetchData = async () => {
  try {
    const token = localStorage.getItem("token");
    

    const res = await fetch("http://localhost:5000/api/v1/data", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const results = await res.json();
    console.log("data retrieved successfluly", results.payload);
    localStorage.setItem("data", JSON.stringify(results.payload));
    return results.payload;
  } catch (error) {
    console.log("error while retrieving data", error.message);
    throw new Error(error.message);
  }
};
