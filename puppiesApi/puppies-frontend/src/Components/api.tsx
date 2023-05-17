export const addNewPupp = async (pup: any) => {
    console.log(pup);
   
    const response = await fetch("http://localhost:8080/puppy/puppies", {
      method: "POST",
      body: JSON.stringify(pup),
      headers: {
        "content-type": "application/json",
      },
    });
    const json = (await response.json()) as { developer: any };
    return json.developer;
  };