


const createUser = async (userData) => {
    
  try {
   console.log(JSON.stringify(userData))
    const res= await fetch('http://localhost:8080/medical-java/register', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(userData),
      })

    const results=await res.json()
    return`registered successfluly,${results}`;
  } catch (error) {
    return error.message;
  }
};

export default createUser;