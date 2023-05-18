import { IPuppy } from "../interfaces";

interface getPuppies{
  puppies: IPuppy[];
}

export const addNewPupp = async (pup: getPuppies) => {
   
   
    const response = await fetch("http://localhost:8080/puppy/puppies", {
      method: "POST",
      body: JSON.stringify(pup),
      headers: {
        "content-type": "application/json",
      },
    });
    const json = (await response.json()) as { developer: IPuppy };
    return json.developer;
  };

  export const deletePupp = async (puppId: number|string|undefined) => {
    console.log(puppId);
    const response = await fetch(
      `http://localhost:8080/puppy/puppies/${puppId}`,
      {
        method: "DELETE",
      }
    );
  };